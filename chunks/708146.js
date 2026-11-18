var i = n(620632),
    r = n(136857),
    a = n(626584),
    s = n(949192),
    l = n(818348);
let o = new a.A("ClientBillingError"),
    d = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
    c = {
        payment_method_confirmation: "PaymentMethodConfirmation",
        submit_address_step: "SubmitAddressStep",
        payment_element_setup: "PaymentElementSetup",
        express_checkout_vault: "ExpressCheckoutAddPaymentMethod",
        express_checkout_load: "ExpressCheckoutLoad",
        payment_authentication: "PaymentAuthentication",
        braintree_tokenize: "BraintreeTokenize",
        gateway_sdk_init: "GatewaySdkInit",
        stripe_load: "StripeLoad",
    },
    u = new Set(["card_error", "api_connection_error", "validation_error"]),
    _ = new Set(["setup_intent_authentication_failure", "payment_intent_authentication_failure"]),
    E = ["google_pay.", "apple_pay."],
    A = new Set(["BraintreeError", "AdyenCheckoutError"]),
    f = /Failed to fetch|NetworkError|Load failed|Failed to load Stripe\.js/,
    h = new Set(["PAYPAL_TOKENIZATION_REQUEST_ACTIVE"]);
function I(e, t) {
    if ("object" != typeof e || null === e) return null;
    let n = e[t];
    return "string" == typeof n ? n : null;
}
let p = [
    [/authentication/gi, "verification"],
    [/authoriz/gi, "approv"],
    [/token/gi, "tokn"],
    [/email/gi, "e_mail"],
];
function m(e) {
    return p.reduce((e, t) => {
        let [n, i] = t;
        return e.replace(n, (e) => (e === e.toUpperCase() ? i.toUpperCase() : i));
    }, e);
}
function g(e) {
    return Object.fromEntries(
        Object.entries(e).map((e) => {
            let [t, n] = e;
            return "string" == typeof n
                ? [t, m(n)]
                : Array.isArray(n)
                  ? [t, n.map((e) => ("string" == typeof e ? m(e) : e))]
                  : [t, n];
        }),
    );
}
function T(e) {
    return e
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, 48);
}
class S extends Error {
    classification;
    key;
    shouldReport;
    source;
    cause;
    constructor(e, t) {
        let n = S.classify(t);
        (super(S.getMessage(n)),
            (this.classification = n),
            (this.source = e),
            (this.key = S.getKeyFor(this.classification)),
            (this.shouldReport = this.getShouldReport()),
            (this.cause = t instanceof Error ? t : void 0),
            (this.name = `${c[e.site]}Error[${this.key}]`));
    }
    static report(e, t, n) {
        let i = new S(e, t),
            r = i.getSentryOptions(n);
        return (
            o.info(i.shouldReport ? "Reporting to Sentry:" : "Skipping Sentry report:", i.name, {
                fingerprint: r.fingerprint,
                tags: r.tags,
                ...(d ? { extra: r.extra } : {}),
            }),
            i.shouldReport && (0, s.pM)(i, r),
            i
        );
    }
    static classify(e) {
        if (e instanceof r.Ay) return { shape: "billing_error", error: e };
        if ((0, s.Lt)(e)) return { shape: "stripe_error", error: e };
        if (e instanceof i.oh) return { shape: "http_error", error: e };
        if ("string" == typeof e) return { shape: "string", error: e };
        let t = I(e, "code");
        return null != t && E.some((e) => t.startsWith(e))
            ? { shape: "stripe_wallet_exception", error: e }
            : null != t && e instanceof Error && A.has(e.name)
              ? { shape: "gateway_sdk_error", error: e }
              : e instanceof Error
                ? { shape: "error", error: e }
                : { shape: "unknown", error: e };
    }
    static getBillingErrorFieldNames(e) {
        return Object.keys(e.fields)
            .filter((e) => "_misc" !== e)
            .sort();
    }
    static getMessage(e) {
        if ("string" === e.shape) return e.error;
        let t = I(e.error, "message");
        return null != t && "" !== t ? t : S.getKeyFor(e);
    }
    static getKeyFor(e) {
        switch (e.shape) {
            case "billing_error": {
                let { error: t } = e,
                    n = S.getBillingErrorFieldNames(t);
                if (n.length > 0) return `field_error:${n.join("+")}`;
                if (t.code > 0) return String(t.code);
                return null != t.status ? `http_${t.status}` : "unknown";
            }
            case "stripe_error": {
                let { error: t } = e;
                return null == t.code ? t.type : `${t.type}:${t.code}`;
            }
            case "http_error":
                return `http_${e.error.status}`;
            case "stripe_wallet_exception":
                return e.error.code;
            case "gateway_sdk_error":
                return `${T(e.error.name)}:${e.error.code}`;
            case "string":
                return T(e.error);
            case "error":
                return e.error.name;
            case "unknown":
                return "unknown";
        }
    }
    getShouldReport() {
        let { classification: e } = this;
        switch (e.shape) {
            case "billing_error": {
                let { error: t } = e;
                if (t.code === r.Ay.ErrorCodes.INVALID_PAYMENT_SOURCE) return !1;
                if (S.getBillingErrorFieldNames(t).length > 0) return !0;
                return !(0, s.gr)(t);
            }
            case "stripe_error": {
                let { error: t } = e;
                if (u.has(t.type)) return !1;
                if ("invalid_request_error" !== t.type) return !0;
                if (null != t.code) return !_.has(t.code);
                return !this.isStripeWalletSelected();
            }
            case "http_error":
                return !(0, s.gr)(e.error);
            case "stripe_wallet_exception":
                return !1;
            case "error":
                return !f.test(e.error.message);
            case "gateway_sdk_error":
                return !h.has(e.error.code);
            case "string":
            case "unknown":
                return !0;
        }
    }
    isStripeWalletSelected() {
        return (
            "express_checkout_vault" === this.source.site || this.source.selectedElementType === l.he.PAYMENT_REQUEST
        );
    }
    getErrorTags() {
        let { classification: e } = this;
        switch (e.shape) {
            case "billing_error":
                return {
                    error_code: String(e.error.code),
                    has_field_error: String(S.getBillingErrorFieldNames(e.error).length > 0),
                    http_status: null != e.error.status ? String(e.error.status) : null,
                };
            case "stripe_error":
                return {
                    stripe_error_type: e.error.type,
                    stripe_error_code: e.error.code,
                    stripe_decline_code: e.error.decline_code,
                    setup_intent_status: null != e.error.setup_intent ? e.error.setup_intent.status : null,
                    payment_intent_status: null != e.error.payment_intent ? e.error.payment_intent.status : null,
                };
            case "http_error":
                return { http_status: String(e.error.status) };
            case "stripe_wallet_exception":
                return { wallet_code: e.error.code };
            case "gateway_sdk_error":
                return { gateway_error_name: e.error.name, gateway_error_code: e.error.code };
            case "error":
                return { error_name: e.error.name };
            case "string":
            case "unknown":
                return {};
        }
    }
    getRawErrorExtra() {
        let { classification: e } = this;
        switch (e.shape) {
            case "billing_error": {
                let { code: t, status: n, message: i } = e.error;
                return {
                    raw_error: g({ code: t, status: n, message: i, fields: S.getBillingErrorFieldNames(e.error) }),
                };
            }
            case "stripe_error": {
                let { type: t, code: n, decline_code: i, param: r, doc_url: a, message: s } = e.error;
                return { raw_error: g({ type: t, code: n, decline_code: i, param: r, doc_url: a, message: s }) };
            }
            case "http_error": {
                let { status: t, method: n, message: i } = e.error;
                return { raw_error: g({ status: t, method: n, message: i }) };
            }
            case "stripe_wallet_exception": {
                let { code: t, message: n } = e.error;
                return { raw_error: g({ code: t, message: n }) };
            }
            case "gateway_sdk_error": {
                let { name: t, code: n, message: i } = e.error;
                return { raw_error: g({ name: t, code: n, message: i }) };
            }
            case "error": {
                let { name: t, message: n } = e.error;
                return { raw_error: g({ name: t, message: n }) };
            }
            case "string":
                return {};
            case "unknown":
                return null != e.error
                    ? g({ raw_error_keys: Object.keys(e.error), raw_error_message: I(e.error, "message") })
                    : {};
        }
    }
    getSentryOptions(e) {
        let { site: t, selectedElementType: n, tags: i, extra: r } = this.source;
        return {
            tags: Object.fromEntries(
                Object.entries({
                    source: t,
                    error_shape: this.classification.shape,
                    error_key: this.key,
                    ...this.getErrorTags(),
                    selected_element_type: null != n ? l.he[n] : null,
                    ...i,
                }).filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
            ),
            fingerprint: [t, this.key],
            extra: { ...r, ...e, ...this.getRawErrorExtra() },
        };
    }
}
n.d(t, {}, { r: S });
