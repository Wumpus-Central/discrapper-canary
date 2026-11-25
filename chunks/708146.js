var i = n(620632),
    r = n(136857),
    a = n(626584),
    s = n(949192),
    l = n(818348),
    o = n(792996);
let d = new a.A("ClientBillingError"),
    c = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
    u = {
        payment_method_confirmation: "PaymentMethodConfirmation",
        payment_confirmation: "PaymentConfirmation",
        submit_address_step: "SubmitAddressStep",
        payment_element_setup: "PaymentElementSetup",
        express_checkout_vault: "ExpressCheckoutAddPaymentMethod",
        express_checkout_load: "ExpressCheckoutLoad",
        payment_authentication: "PaymentAuthentication",
        braintree_tokenize: "BraintreeTokenize",
        gateway_sdk_init: "GatewaySdkInit",
        stripe_load: "StripeLoad",
        order_create: "OrderCreate",
        order_sync: "OrderSync",
        order_sign: "OrderSign",
        order_fetch: "OrderFetch",
        order_signing_reopen_next_action: "OrderSigningReopenNextAction",
        subscription_plans_fetch: "SubscriptionPlansFetch",
    },
    _ = new Set(["card_error", "api_connection_error", "validation_error"]),
    E = new Set(["setup_intent_authentication_failure", "payment_intent_authentication_failure"]),
    A = new Set(["email_invalid", "tax_id_invalid"]),
    f = new Set([r.Ay.Fields.CARD_NUMBER, r.Ay.Fields.CARD_CVC, r.Ay.Fields.CARD_EXPIRATION_DATE]),
    h = ["google_pay.", "apple_pay."],
    I = new Set(["BraintreeError", "AdyenCheckoutError"]),
    p = /Failed to fetch|NetworkError|Load failed|Failed to load Stripe\.js/,
    m = new Set(["PAYPAL_TOKENIZATION_REQUEST_ACTIVE"]);
function g(e, t) {
    if ("object" != typeof e || null === e) return null;
    let n = e[t];
    return "string" == typeof n ? n : null;
}
function T(e) {
    return e instanceof Error || (null != g(e, "name") && null != g(e, "message"));
}
let S = [
    [/authentication/gi, "verification"],
    [/authoriz/gi, "approv"],
    [/token/gi, "tokn"],
    [/email/gi, "e_mail"],
];
function N(e) {
    return S.reduce((e, t) => {
        let [n, i] = t;
        return e.replace(n, (e) => (e === e.toUpperCase() ? i.toUpperCase() : i));
    }, e);
}
function C(e) {
    return Object.fromEntries(
        Object.entries(e).map((e) => {
            let [t, n] = e;
            return "string" == typeof n
                ? [t, N(n)]
                : Array.isArray(n)
                  ? [t, n.map((e) => ("string" == typeof e ? N(e) : e))]
                  : [t, n];
        }),
    );
}
function O(e) {
    return e
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, 48);
}
class R extends Error {
    classification;
    key;
    shouldReport;
    source;
    cause;
    constructor(e, t) {
        let n = R.classify(t);
        (super(R.getMessage(n)),
            (this.classification = n),
            (this.source = e),
            (this.key = R.getKeyFor(this.classification)),
            (this.shouldReport = this.getShouldReport()),
            (this.cause = t instanceof Error ? t : void 0),
            (this.name = `${u[e.site]}Error[${this.key}]`));
    }
    static report(e, t, n) {
        let i = new R(e, t),
            r = i.getSentryOptions(n),
            a = { fingerprint: r.fingerprint, tags: r.tags, ...(c ? { extra: r.extra } : {}) };
        return (
            i.shouldReport
                ? (d.error("reporting error to Sentry:", i.name, a), (0, s.pM)(i, r))
                : d.info("skipping Sentry report:", i.name, a),
            i
        );
    }
    static classify(e) {
        if (e instanceof r.Ay) return { shape: "billing_error", error: e };
        if ((0, s.Lt)(e)) return { shape: "stripe_error", error: e };
        if (e instanceof i.oh) return { shape: "http_error", error: e };
        if ("string" == typeof e) return { shape: "string", error: e };
        let t = g(e, "code");
        return null != t && h.some((e) => t.startsWith(e))
            ? { shape: "stripe_wallet_exception", error: e }
            : null != t && T(e) && I.has(e.name)
              ? { shape: "gateway_sdk_error", error: e }
              : T(e)
                ? { shape: "error", error: e }
                : { shape: "unknown", error: e };
    }
    static getBillingErrorFieldNames(e) {
        return Object.keys(e.fields)
            .filter((e) => "_misc" !== e)
            .sort();
    }
    static getMessage(e) {
        switch (e.shape) {
            case "string":
                return e.error;
            case "stripe_error": {
                let { type: t, code: n } = e.error;
                return null != n ? `Stripe ${t} (${n})` : `Stripe ${t}`;
            }
            case "billing_error": {
                let { code: t, status: n } = e.error,
                    i = R.getBillingErrorFieldNames(e.error);
                if (i.length > 0) return `BillingError (field error: ${i.join(", ")})`;
                return t > 0 ? `BillingError (code: ${t})` : `BillingError${null != n ? ` (HTTP ${n})` : ""}`;
            }
            case "stripe_wallet_exception":
                return `Stripe Wallet Exception (code: ${e.error.code})`;
            default: {
                let t = g(e.error, "message");
                return null != t && "" !== t ? t : R.getKeyFor(e);
            }
        }
    }
    static getKeyFor(e) {
        switch (e.shape) {
            case "billing_error": {
                let { error: t } = e,
                    n = R.getBillingErrorFieldNames(t);
                if (n.length > 0) return `field_error:${n.join("+")}`;
                if (t.code > 0) return String(t.code);
                if (null != t.status) return `http_${t.status}`;
                let i = g(t, "name");
                return null != i ? i : "unknown";
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
                return `${O(e.error.name)}:${e.error.code}`;
            case "string":
                return O(e.error);
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
                if (R.getBillingErrorFieldNames(t).some((e) => !f.has(e))) return !0;
                return !(0, s.gr)(t);
            }
            case "stripe_error": {
                let { error: t } = e;
                if (_.has(t.type)) return !1;
                if ("invalid_request_error" !== t.type) return !0;
                if (null != t.code && A.has(t.code)) return !1;
                if ("setup_intent_unexpected_state" === t.code && null != t.setup_intent)
                    return "canceled" !== t.setup_intent.status;
                if (null != t.code) return !E.has(t.code);
                return !this.isStripeWalletSelected();
            }
            case "http_error":
                return !(0, s.gr)(e.error);
            case "stripe_wallet_exception":
                return !1;
            case "error":
                return !p.test(e.error.message);
            case "gateway_sdk_error":
                return !m.has(e.error.code);
            case "string":
            case "unknown":
                return !0;
        }
    }
    isStripeWalletSelected() {
        return !!this.source.isStripeWallet || this.source.selectedElementType === l.he.PAYMENT_REQUEST;
    }
    getApiError() {
        let { classification: e } = this;
        switch (e.shape) {
            case "billing_error":
                return e.error;
            case "http_error":
                return new r.Ay(e.error);
            case "stripe_error":
            case "stripe_wallet_exception":
            case "gateway_sdk_error":
            case "string":
            case "error":
            case "unknown":
                return null;
        }
    }
    getErrorTags() {
        let { classification: e } = this;
        switch (e.shape) {
            case "billing_error":
                return {
                    error_code: String(e.error.code),
                    has_field_error: String(R.getBillingErrorFieldNames(e.error).length > 0),
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
                    raw_error: C({ code: t, status: n, message: i, fields: R.getBillingErrorFieldNames(e.error) }),
                };
            }
            case "stripe_error": {
                let { type: t, code: n, decline_code: i, param: r, doc_url: a, message: s } = e.error;
                return { raw_error: C({ type: t, code: n, decline_code: i, param: r, doc_url: a, message: s }) };
            }
            case "http_error": {
                let { status: t, method: n, message: i } = e.error;
                return { raw_error: C({ status: t, method: n, message: i }) };
            }
            case "stripe_wallet_exception": {
                let { code: t, message: n } = e.error;
                return { raw_error: C({ code: t, message: n }) };
            }
            case "gateway_sdk_error": {
                let { name: t, code: n, message: i } = e.error;
                return { raw_error: C({ name: t, code: n, message: i }) };
            }
            case "error": {
                let { name: t, message: n } = e.error;
                return { raw_error: C({ name: t, message: n }) };
            }
            case "string":
                return {};
            case "unknown":
                return null != e.error
                    ? C({ raw_error_keys: Object.keys(e.error), raw_error_message: g(e.error, "message") })
                    : {};
        }
    }
    getUserFacingMessage() {
        let e = this.getApiError();
        return e?.status != null && e.status < 500 && (e.code > 0 || 429 === e.status)
            ? e.message
            : o.intl.string(o.t["5mlOCW"]);
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
n.d(t, {}, { r: R });
