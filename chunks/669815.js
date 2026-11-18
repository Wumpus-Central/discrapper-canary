n.d(t, {
    fE: () => eN,
    M2: () => eA,
    uK: () => eg,
    r6: () => em,
    IV: () => eL,
    tc: () => eS,
    ey: () => eT,
    u6: () => Y,
    Z9: () => w,
    im: () => W,
    TD: () => G,
    A8: () => X,
    $M: () => z,
    u1: () => K,
    YJ: () => U,
    IC: () => H,
    jV: () => q,
    bw: () => $,
    Ky: () => eu,
    JQ: () => ei,
    ZK: () => ef,
    i0: () => L,
    ne: () => M,
    xe: () => eR,
    jZ: () => ey,
    I8: () => ec,
    TK: () => eo,
    Gr: () => es,
    $o: () => ea,
    hP: () => ed,
    YP: () => el,
    Oj: () => eE,
    LD: () => e_,
    re: () => eO,
    jf: () => y,
    _D: () => ev,
    x: () => eP,
    uZ: () => eD,
    QP: () => eI,
    Ze: () => eb,
    hr: () => V,
    Ps: () => er,
    nV: () => eh,
    ge: () => ep,
    N: () => eC,
});
var i = n(536637),
    r = n.n(i),
    a = n(620632),
    s = n(73153),
    l = n(627784),
    o = n(136857),
    d = n(202613),
    c = n(615405),
    u = n(166403),
    _ = n(129230),
    E = n(949192),
    A = n(448645),
    f = n(107351),
    h = n(643909),
    I = n(284009),
    p = n.n(I),
    m = n(626584),
    g = n(558740),
    T = n(295562),
    S = n(708146),
    N = n(652215),
    C = n(792996);
async function O(e) {
    try {
        return (
            await a.Bo.post({
                url: N.Rsh.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
                body: {
                    billing_address: {
                        name: e.name,
                        line_1: e.line1,
                        line_2: e.line2,
                        city: e.city,
                        state: e.state,
                        postal_code: e.postalCode,
                        country: e.country,
                        email: e.email,
                    },
                },
                rejectWithError: !1,
            })
        ).body.token;
    } catch (t) {
        let e = (0, o.Wd)(t);
        throw (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }), e);
    }
}
let R = new Set(["setup_intent_authentication_failure", "payment_intent_authentication_failure"]);
function L(e, t) {
    let n,
        {
            defaultErrorMessage: i = C.intl.string(C.t.khEaRI),
            captureException: r = !0,
            selectedElementType: a = null,
            tags: o,
            extra: d,
        } = null != t ? t : {};
    if ((0, E.Lt)(e)) {
        let t = null != e.message ? `${i}: ${e.message}` : i;
        (("card_error" === e.type ||
            "validation_error" === e.type ||
            ("invalid_request_error" === e.type && null != e.code && R.has(e.code))) &&
            _.default.track(N.HAw.PAYMENT_SOURCE_CREATION_FAILED, {
                failure_message: t,
                error_type: e.type,
                failure_code: e.code,
                failure_sub_code: e.decline_code,
                payment_source_type: e.payment_method?.type,
                stacktrace: Error().stack,
            }),
            (n = new l.Ey(t)));
    } else n = e instanceof l.Ey ? e : new l.Ey("string" == typeof e ? i : e);
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: n });
    let c = { site: "payment_method_confirmation", selectedElementType: a, tags: o, extra: d };
    return r ? S.r.report(c, e, { failure_message: n.message }) : new S.r(c, e);
}
async function y(e) {
    let {
        body: { state: t },
    } = await a.Bo.post({ url: N.Rsh.BILLING_POPUP_BRIDGE(e), oldFormErrors: !0, rejectWithError: !0 });
    return (s.h.dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: t, paymentSourceType: e }), t);
}
async function D(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    try {
        let l = await a.Bo.post({
                url: N.Rsh.BILLING_PAYMENT_SOURCES,
                query: { location: i.analyticsLocation },
                body: {
                    payment_gateway: e,
                    token: t,
                    billing_address: {
                        name: n.name,
                        line_1: n.line1,
                        line_2: n.line2,
                        city: n.city,
                        state: n.state,
                        postal_code: n.postalCode,
                        country: n.country,
                        email: n.email,
                    },
                    billing_address_token: i.billingAddressToken,
                    bank: i.bank,
                    pix: null != i.pix ? { tax_id: i.pix.taxId } : void 0,
                    return_url: i.returnUrl,
                    default: r,
                },
                rejectWithError: !1,
            }),
            o = d.Ay.createFromServer(l.body);
        return (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: o }), o);
    } catch (t) {
        let e = t instanceof T.CaptchaCancelError ? new l.Ey(t.message, o.tG.INVALID_PAYMENT_SOURCE) : (0, o.Wd)(t);
        throw (
            t?.body?.adyen_redirect_url && (e.fields.adyen_redirect_url = t?.body?.adyen_redirect_url),
            e.code !== o.tG.CONFIRMATION_REQUIRED &&
                s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }),
            e
        );
    }
}
var b = n(219538),
    v = n(818348);
let P = new m.A("BillingPaymentGatewayActionCreators.tsx");
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : C.intl.string(C.t.khEaRI);
    return L(e, {
        captureException: t,
        defaultErrorMessage: i,
        selectedElementType: n,
        tags: { flow: "payment_elements" },
    });
}
async function U(e, t) {
    if (null == e || null == t) throw L("Stripe or elements not loaded");
    let n = t.getElement(h.CardNumberElement);
    if (null == n) throw L("Unable to load card elements from Stripe");
    let { token: i, error: r } = await e.createToken(n);
    if (null != r) throw L(r);
    if (null == i) throw L("token not available with successful stripe call");
    return i.id;
}
async function w(e, t, n, i) {
    if (null == e) throw L("Stripe not loaded");
    if (null == t) throw L("Bank required for EPS");
    let { email: r, name: a, line1: l, line2: o, city: d, state: c, postalCode: u, country: _ } = n;
    if (null == a) throw L("Name required for EPS");
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let E = await O(n),
        { paymentMethod: A, error: f } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: l, line2: o, city: d, state: c, postal_code: u, country: _ },
                name: a,
                email: r,
            },
        });
    if (null != f) throw L(f);
    if (null == A) throw L("paymentMethod not available with successful stripe call");
    return D(N.kM_.STRIPE, A.id, n, { billingAddressToken: E, analyticsLocation: i, bank: t });
}
async function G(e, t, n, i) {
    if (null == e) throw L("Stripe not loaded");
    let { email: r, name: a, line1: l, line2: o, city: d, state: c, postalCode: u, country: _ } = n;
    if (null == r) throw L("Email required for Przelewy24");
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let E = await O(n),
        A = t.p24Bank,
        { paymentMethod: f, error: h } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: A },
            billing_details: {
                address: { line1: l, line2: o, city: d, state: c, postal_code: u, country: _ },
                name: a,
                email: r,
            },
        });
    if (null != h) throw L(h);
    if (null == f) throw L("paymentMethod not available with successful stripe call");
    return D(N.kM_.STRIPE, f.id, n, { billingAddressToken: E, analyticsLocation: i, bank: A });
}
function x(e, t, n) {
    if (null != t) throw n(t);
    if (null == e) throw n("SetupIntent not created");
    if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
    return (
        p()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
        { setupIntent: e, error: t }
    );
}
async function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (null == e) throw M("Stripe Elements not loaded", !0, t);
    let n = await e.submit();
    if ((P.info("Stripe Elements submit response: ", n), null != n.error))
        throw (P.error("Stripe Elements submit error: ", n.error), M(n.error, !0, t));
    return n;
}
let F = { hasCreatedPaymentMethod: !1 };
async function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        { paymentMethod: i, error: r } = await e.createPaymentMethod({ elements: t });
    if (null != r) throw (P.error("Stripe createPaymentMethod error: ", r), M(r, !0, n));
    if (null == i)
        throw (
            P.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: i, error: r }),
            M("paymentMethod not available with successful stripe call", !0, n)
        );
    return ((F.hasCreatedPaymentMethod = !0), { paymentMethod: i, error: r });
}
async function V(e, t) {
    if (null == e) throw M("Stripe not loaded", !0);
    if (null == t) throw M("Stripe Elements not loaded", !0);
    await k(t, v.he.PAYMENT_REQUEST);
    let { paymentMethod: n, error: i } = await B(e, t, v.he.PAYMENT_REQUEST);
    return { paymentMethod: n, error: i };
}
async function H(e) {
    let { stripePaymentMethodId: t, billingAddress: n, analyticsLocation: i } = e,
        r = await O(n);
    return D(N.kM_.STRIPE, t, n, { billingAddressToken: r, analyticsLocation: i });
}
let j = new Set([v.he.CARD, v.he.PAYMENT_REQUEST]);
async function W() {
    let e;
    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
    let [r, a, { billingAddress: l, paymentSourceType: o, lastConfirmedSetupIntentRef: d, createSetupIntent: c }, u] =
        n;
    if (null == r) throw M("Stripe not loaded", !0);
    if (null == a) throw M("Stripe Elements not loaded", !0);
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let _ = await O(l);
    o !== v.he.PAYMENT_REQUEST && (await k(a, o));
    let E = null;
    if (j.has(o)) {
        let e,
            t = d.current;
        null != t
            ? (e = { setupIntent: t, error: void 0 })
            : (o === v.he.CARD && F.hasCreatedPaymentMethod && (await B(r, a, o)),
              (e = await r.confirmSetup({ redirect: "if_required", elements: a })));
        let n = e.error;
        if (
            null != n &&
            "setup_intent_unexpected_state" === n.code &&
            null != n.setup_intent &&
            ("succeeded" === n.setup_intent.status || "canceled" === n.setup_intent.status)
        ) {
            P.info("Recreating SetupIntent after confirmSetup error:", {
                code: n.code,
                setupIntentStatus: n.setup_intent.status,
                paymentSourceType: o,
            });
            let { client_secret: t } = await c();
            (await k(a, o), (e = await r.confirmSetup({ redirect: "if_required", clientSecret: t, elements: a })));
        }
        let { setupIntent: i } = x(e.setupIntent, e.error, (e) => M(e, !0, o));
        ((d.current = i), (E = i.payment_method));
    } else {
        let { paymentMethod: t } = await B(r, a, o);
        if (((E = t.id), o === v.he.PIX)) {
            let n = t.billing_details;
            if (n?.tax_id == null || "" === n.tax_id) throw M("Missing PIX tax_id from Payment Element", !0, o);
            e = { taxId: n.tax_id };
        }
    }
    return D(N.kM_.STRIPE, E, l, { billingAddressToken: _, analyticsLocation: u, pix: e });
}
async function Y(e) {
    let {
        stripe: t,
        billingAddress: n,
        analyticsLocation: i,
        onCardConfirmed: r,
        token: a,
        confirmedPaymentMethodId: l,
    } = e;
    if (null == t || null == a) throw L("Stripe or token not loaded");
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let o = await O(n),
        d = l;
    if (null == d) {
        let e = null;
        try {
            e = (await (0, b.r)()).client_secret;
        } catch (e) {
            throw L(e);
        }
        let i = g._Z(n),
            { setupIntent: s, error: l } = await t.confirmCardSetup(e, {
                payment_method: { card: { token: a }, billing_details: i },
            }),
            { setupIntent: o } = x(s, l, (e) => L(e));
        r((d = o.payment_method));
    }
    return D(N.kM_.STRIPE, d, n, { billingAddressToken: o, analyticsLocation: i });
}
function K(e, t, n) {
    return D(N.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function $(e, t, n, i) {
    if (null == e) throw L("Stripe not loaded");
    let r = await O(t),
        { name: a, line1: s, line2: l, city: o, state: d, postalCode: c, country: u } = t,
        _ = v.kv.get(n);
    p()(null != _, "unsupported payment method type");
    let { paymentMethod: E, error: A } = await e.createPaymentMethod({
        type: _,
        billing_details: { address: { line1: s, line2: l, city: o, state: d, postal_code: c, country: u }, name: a },
    });
    if (null != A) throw L(A);
    if (null == E) throw L("stripePaymentMethod not available with successful stripe call");
    return D(N.kM_.STRIPE, E.id, t, { billingAddressToken: r, analyticsLocation: i });
}
async function X(e, t, n) {
    let i = await O(e),
        r = { type: v.Kc.get(t) };
    return D(N.kM_.ADYEN, JSON.stringify(r), e, { billingAddressToken: i, analyticsLocation: n });
}
async function z(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = await O(e),
        l = { type: v.Kc.get(t), ...(i?.paymentMethod ?? {}) },
        d = await y(t),
        c = (0, a.TP)() + N.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, d ?? "", "success");
    try {
        return {
            paymentSource: await D(
                N.kM_.ADYEN,
                JSON.stringify(l),
                e,
                { billingAddressToken: s, analyticsLocation: n, returnUrl: c },
                r,
            ),
            redirectConfirmation: !1,
        };
    } catch (t) {
        var u;
        if (t.code !== o.tG.CONFIRMATION_REQUIRED) throw t;
        let e = t.fields.adyen_redirect_url;
        if (null == e) throw L("redirect url cannot be null on a redirect for adyen.");
        return ((u = e), window.open(u), { redirectConfirmation: !0 });
    }
}
function q(e) {
    if (N.DYY.has(e.type)) return null;
    if (v.Kc.has(e.type)) return N.DYY.has(e.type) ? null : JSON.stringify({ type: v.Kc.get(e.type) ?? null });
    return (async function (e) {
        if (N.DYY.has(e.type)) return null;
        let t = await g.Cv();
        if (null == t) throw new l.Ey("Stripe not loaded", l.Ey.ErrorCodes.UNKNOWN);
        let { email: n, name: i, line1: r, line2: a, city: s, state: o, postalCode: d, country: c } = e.billingAddress,
            u = {
                billing_details: {
                    address: { line1: r, line2: a, city: s, state: o, postal_code: d, country: c },
                    name: i,
                },
            };
        switch (e.type) {
            case v.he.GIROPAY:
                u.type = "giropay";
                break;
            case v.he.SOFORT:
                ((u.type = "sofort"), (u.sofort = { country: c ?? "" }), (u.billing_details.email = n));
                break;
            case v.he.BANCONTACT:
                u.type = "bancontact";
                break;
            case v.he.IDEAL:
                ((u.type = "ideal"), (u.ideal = { bank: e.bank }));
                break;
            case v.he.PRZELEWY24:
                if (null == e.bank)
                    throw new l.Ey("p24 missing bank information", l.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                ((u.type = "p24"), (u.p24 = { bank: e.bank }), (u.billing_details.email = e.email));
                break;
            case v.he.EPS:
                if (null == e.bank)
                    throw new l.Ey("EPS missing bank information", l.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                ((u.type = "eps"), (u.eps = { bank: e.bank }));
                break;
            case v.he.PIX:
                ((u.type = "pix"),
                    (u.billing_details.email = e.email),
                    (u.billing_details.tax_id = e.pixMetadata?.taxId));
        }
        p()(null != u.type, "unsupported payment method type");
        let { paymentMethod: _, error: E } = await t.createPaymentMethod(u);
        if (null != E || null == _)
            throw new l.Ey(
                `Unable to create payment source token: code: ${E?.code} message: ${E?.message}`,
                l.Ey.ErrorCodes.UNKNOWN,
            );
        return _.id;
    })(e);
}
let Q = {
        [v.he.GIROPAY]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { stripe: t, paymentSource: n } = e,
                    i = { billing_details: { name: n.billingAddress.name } };
                return { stripeConfirmPayment: t.confirmGiropayPayment, paymentMethod: i };
            },
        },
        [v.he.SOFORT]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e,
                    i = {
                        sofort: { country: t.billingAddress.country },
                        billing_details: { name: t.billingAddress.name, email: t.email },
                    };
                return { stripeConfirmPayment: n.confirmSofortPayment, paymentMethod: i };
            },
        },
        [v.he.PRZELEWY24]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e;
                if (null == t.bank) throw L(`PaymentSource (${t.id}) missing bank info for p24.`);
                let i = { p24: { bank: t.bank }, billing_details: { name: t.billingAddress.name, email: t.email } };
                return { stripeConfirmPayment: n.confirmP24Payment, paymentMethod: i };
            },
        },
        [v.he.BANCONTACT]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e,
                    i = { billing_details: { name: t.billingAddress.name, email: t.email } };
                return { stripeConfirmPayment: n.confirmBancontactPayment, paymentMethod: i };
            },
        },
        [v.he.EPS]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e;
                if (null == t.bank) throw L(`PaymentSource (${t.id}) missing bank info for EPS.`);
                let i = { eps: { bank: t.bank }, billing_details: { name: t.billingAddress.name } };
                return { stripeConfirmPayment: n.confirmEpsPayment, paymentMethod: i };
            },
        },
        [v.he.IDEAL]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e,
                    i = { ideal: {}, billing_details: { name: t.billingAddress.name } };
                return (
                    null != t.bank && (i.ideal = { bank: t.bank }),
                    { stripeConfirmPayment: n.confirmIdealPayment, paymentMethod: i }
                );
            },
        },
    },
    J = {
        [v.he.SEPA_DEBIT]: {
            confirmationType: "stripe_direct_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { stripe: t, paymentMethodId: n } = e;
                if (null == n) throw L("On a sepa payment payment method id cannot be null");
                return { stripeConfirmPayment: t.confirmSepaDebitPayment, paymentMethod: n };
            },
        },
        [v.he.PIX]: {
            confirmationType: "stripe_direct_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { stripe: t, paymentMethodId: n } = e;
                return { stripeConfirmPayment: t.confirmPixPayment, paymentMethod: n, pendingCustomerAction: !0 };
            },
        },
    };
class Z {
    paymentSource;
    payment;
    paymentSourceType;
    paymentId;
    constructor(e, t) {
        ((this.paymentSource = e),
            (this.payment = t),
            (this.paymentSourceType = e.type),
            (this.paymentId = t.payment_id));
    }
    performRedirect(e) {
        window.open(e);
    }
}
class ee extends Z {
    stripeByMerchantAccountId = new Map();
    handlerRegistry;
    constructor(e, t) {
        var n;
        if (null == e) throw L("Payment source cannot be null on a redirect.");
        if ((super(e, t), (n = this.paymentSourceType), N.CmT.has(n) && n in Q))
            this.handlerRegistry = Q[this.paymentSourceType];
        else if (this.paymentSourceType in J) this.handlerRegistry = J[this.paymentSourceType];
        else throw L("Invalid Payment Source Type - redirect or direct confirmation handlers not found.");
    }
    async getStripe(e) {
        let t = null != e && "" !== e ? e : "",
            n = this.stripeByMerchantAccountId.get(t);
        if (null != n) return n;
        let i = await g.Cv(e);
        if (null == i) throw L("Stripe cannot be null on a redirect.");
        return (this.stripeByMerchantAccountId.set(t, i), i);
    }
    getPaymentIntentInfo() {
        return g.yx(this.paymentId);
    }
    async getStripeRedirect(e) {
        let { clientSecret: t, state: n, paymentMethodId: i, merchantAccountId: r } = e,
            s = await this.getStripe(r),
            { stripeConfirmPayment: l, paymentMethod: o } = this.handlerRegistry.constructStripeConfirmPaymentHandler({
                stripe: s,
                paymentSource: this.paymentSource,
                paymentMethodId: i,
            }),
            { paymentIntent: d, error: c } = await l(
                t,
                {
                    payment_method: o,
                    return_url:
                        (0, a.TP)() +
                        N.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(this.paymentSourceType, n ?? "", "success"),
                },
                { handleActions: !1 },
            );
        if (null != c) throw L(c);
        if (null == d) throw L("paymentIntent not available with successful api call");
        if (d.next_action?.redirect_to_url?.url == null) throw L("confirm payment did not return a redirect url");
        return d.next_action.redirect_to_url.url;
    }
    async confirmRedirectedPaymentSource(e) {
        let { clientSecret: t, paymentMethodId: n, merchantAccountId: i } = e,
            r = await y(this.paymentSourceType),
            a = await this.getStripeRedirect({ clientSecret: t, state: r, paymentMethodId: n, merchantAccountId: i });
        this.performRedirect(a);
    }
    async confirmDirectPaymentSource(e) {
        let { clientSecret: t, paymentMethodId: n, merchantAccountId: i } = e,
            r = await this.getStripe(i),
            {
                stripeConfirmPayment: a,
                paymentMethod: s,
                pendingCustomerAction: l,
            } = this.handlerRegistry.constructStripeConfirmPaymentHandler({
                stripe: r,
                paymentSource: this.paymentSource,
                paymentMethodId: n,
            }),
            { paymentIntent: o, error: d } = await a(t, { payment_method: s });
        if (null != d) throw L(d);
        if (null == o) throw L("paymentIntent not available with successful stripe call");
        return { pendingCustomerAction: l, customerActionCancelled: "requires_action" === o.status };
    }
    async confirmPayment() {
        let { clientSecret: e, paymentMethodId: t, merchantAccountId: n } = await this.getPaymentIntentInfo();
        if (null == t) throw L("payment method id cannot be null.");
        if ("stripe_redirect_confirmation" === this.handlerRegistry.confirmationType)
            return (
                await this.confirmRedirectedPaymentSource({
                    clientSecret: e,
                    paymentMethodId: t,
                    merchantAccountId: n,
                }),
                { redirectConfirmation: !0 }
            );
        {
            let { pendingCustomerAction: i, customerActionCancelled: r } = await this.confirmDirectPaymentSource({
                clientSecret: e,
                paymentMethodId: t,
                merchantAccountId: n,
            });
            return { redirectConfirmation: !1, pendingCustomerAction: i, customerActionCancelled: r };
        }
    }
}
class et extends Z {
    constructor(e, t) {
        if (null == e) throw L("Payment source cannot be null on a redirect.");
        super(e, t);
    }
    handleAdyenConfirmation() {
        let e = this.payment.adyen_redirect_url;
        if (null == e) throw L("redirect url cannot be null on a redirect for adyen.");
        return N.CmT.has(this.paymentSource.type)
            ? (this.performRedirect(e), { redirectConfirmation: !0, redirectURL: e })
            : { redirectConfirmation: !1, redirectURL: e };
    }
    confirmPayment() {
        return Promise.resolve(this.handleAdyenConfirmation());
    }
}
var en = n(601107);
async function ei(e) {
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
    try {
        (await a.Bo.del({ url: N.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: e }));
    } catch (t) {
        let e = new l.Ey(t);
        throw (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: e }), e);
    }
}
async function er(e, t) {
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
    try {
        let {
                billingAddress: { line1: n, line2: i, postalCode: r, ...l },
            } = t,
            o = await a.Bo.patch({
                url: N.Rsh.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: { ...l, line_1: n, line_2: i, postal_code: r },
                    expires_month: t.expiresMonth,
                    expires_year: t.expiresYear,
                    default: t.isDefault,
                },
                rejectWithError: !1,
            }),
            c = d.Ay.createFromServer(o.body);
        s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: c });
    } catch (t) {
        let e = (0, o.Wd)(t);
        throw (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL", error: e }), e);
    }
}
async function ea() {
    if (!c.A.isPaymentSourceFetching)
        try {
            let e = a.Bo.get({ url: N.Rsh.BILLING_PAYMENT_SOURCES, oldFormErrors: !0, rejectWithError: !1 });
            s.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: e });
            let t = await e;
            return (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: t.body }), t);
        } catch (e) {
            return (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" }), null);
        }
}
async function es(e) {
    try {
        let t = a.Bo.get({ url: N.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = await t,
            i = d.Ay.createFromServer(n.body);
        return (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: i }), n);
    } catch (e) {
        throw (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" }), e);
    }
}
async function el(e) {
    s.h.dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId: e });
    try {
        let t = await a.Bo.get({
                url: N.Rsh.BILLING_WALLET_INFORMATION(e),
                query: { get_history: !1 },
                rejectWithError: !0,
            }),
            n = { currency: t.body.currency, amount: t.body.balance };
        return (
            s.h.dispatch({
                type: "BILLING_WALLET_BALANCE_FETCH_SUCCESS",
                paymentSourceId: e,
                currency: n.currency,
                amount: n.amount,
            }),
            n
        );
    } catch (t) {
        return (s.h.dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_FAIL", paymentSourceId: e }), null);
    }
}
async function eo(e) {
    let t = await a.Bo.get({ url: N.Rsh.BILLING_PAYMENT(e), rejectWithError: !0 });
    return (s.h.dispatch({ type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: t.body }), t);
}
async function ed() {
    s.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
    try {
        let e = en.En.ADD_PERKS_IF_DETECTED,
            t = u.A.getLastLazyPerkSync();
        (null == t || r()().diff(t, "hours") >= 1) && ((e = en.En.FULL_RESYNC), (t = r()()));
        let n = await a.Bo.get({
            url: N.Rsh.BILLING_SUBSCRIPTIONS,
            oldFormErrors: !0,
            rejectWithError: !1,
            query: { sync_level: e, with_gift_subscription: !0 },
        });
        if (null == n.body) throw new l.Ey(`response body is null, response: ${JSON.stringify(n)}`, n.status);
        return (
            s.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: n.body, lastLazyPerkSync: t }), n
        );
    } catch (e) {
        throw (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_FAIL" }), e);
    }
}
async function ec() {
    s.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    try {
        let e = await a.Bo.get({
            url: N.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 2, exclude_unpaid_statuses: !0, subscription_type: v.rz.PREMIUM },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return (
            s.h.dispatch({
                type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                subscription: e.body.length > 0 ? e.body[0] : null,
            }),
            s.h.dispatch({
                type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                subscription: e.body.length > 1 ? e.body[1] : null,
            }),
            e
        );
    } catch (e) {
        s.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" });
    }
}
async function eu(e) {
    let {
        items: t,
        paymentSource: n,
        trialId: i,
        code: r,
        currency: d,
        metadata: c,
        referralCode: u,
        loadId: _,
        giftInfoOptions: h,
        expectedInvoicePrice: I,
        expectedRenewalPrice: p,
    } = e;
    (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" }), (t = (0, A.qn)(t)));
    let m = null;
    if (null != n && v.Kc.has(n.type)) {
        let e = await y(n.type);
        m = (0, a.TP)() + N.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let e = await a.Bo.post({
            url: N.Rsh.BILLING_SUBSCRIPTIONS,
            body: {
                items: t.map((e) => {
                    let { planId: t, quantity: n } = e;
                    return { plan_id: t, quantity: n };
                }),
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await q(n) : null,
                trial_id: i,
                return_url: m,
                code: r,
                currency: null != n ? d : v.Yr.USD,
                metadata: c,
                gateway_checkout_context: await (0, E.ob)(n),
                purchase_token: (0, f.r)(),
                referral_code: u,
                load_id: _,
                gift_info_options: h,
                expected_invoice_price: I,
                expected_renewal_price: p,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: e.body }),
            { subscription: e.body, redirectConfirmation: !1 }
        );
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        if (
            (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", loadId: _, error: e }),
            e.code !== o.tG.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!t.body.payment_id) throw L("payment id cannot be null on redirected confirmations.");
        return eE(t.body, n);
    }
}
async function e_(e, t, n, i, r) {
    let d = null;
    if (null != n && v.AD.has(n.type)) {
        let e = await y(n.type);
        d = (0, a.TP)() + N.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let l = await a.Bo.post({
            url: N.Rsh.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
            body: {
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await q(n) : null,
                return_url: d,
                currency: i,
                purchase_token: (0, f.r)(),
                load_id: r,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: l.body }),
            { subscription: l.body, redirectConfirmation: N.CmT.has(n.type) }
        );
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        if (e.code !== o.tG.CONFIRMATION_REQUIRED)
            throw (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", loadId: r, error: e }), e);
        if (!t.body.payment_id) throw L("payment id cannot be null on redirected confirmations.");
        return eE(t.body, n);
    }
}
function eE(e, t) {
    return null != t && v.Kc.has(t.type) ? new et(t, e).confirmPayment() : new ee(t, e).confirmPayment();
}
async function eA(e, t, n) {
    s.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
    try {
        let i = await a.Bo.del({
            url: N.Rsh.BILLING_SUBSCRIPTION(e),
            query: { location: n, location_stack: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" }), i);
    } catch (t) {
        let e = new l.Ey(t);
        throw (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_FAIL", error: e }), e);
    }
}
function ef(e, t) {
    return eh(
        e,
        { items: e.items },
        { amount: 0, currency: e.currency },
        (0, A.UC)(e.items, e.currency, e.paymentSourceId),
        t,
    );
}
async function eh(e, t, n, i, r, d, c) {
    s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    try {
        let l = {
            status: t.status,
            payment_source_id: t.paymentSource?.id,
            payment_source_token: null != t.paymentSource ? await q(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, E.ob)(t.paymentSource),
            load_id: c,
            pause_duration: t.pauseDuration,
            purchase_token: (0, f.r)(),
            expected_invoice_price: n,
            expected_renewal_price: i,
        };
        if (null != t.paymentSource && v.Kc.has(t.paymentSource.type)) {
            let e = await y(t.paymentSource.type);
            l.return_url =
                (0, a.TP)() +
                N.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, e ?? "", "success");
        }
        null != t.items &&
            (l.items = (0, A.qn)(t.items).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }));
        let o = await a.Bo.patch({
            url: N.Rsh.BILLING_SUBSCRIPTION(e.id),
            query: { location: d, location_stack: r },
            body: l,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: o.body }),
            { subscription: o.body, redirectConfirmation: !1 }
        );
    } catch (n) {
        let e = n instanceof l.Ey ? n : new l.Ey(n);
        if (
            (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", loadId: c, error: e }),
            e.code !== o.tG.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!n.body.payment_id) throw L("payment id cannot be null on redirected confirmations.");
        return eE(n.body, t.paymentSource);
    }
}
function eI(e, t, n, i, r) {
    return eh(
        e,
        { status: N.Dmq.ACTIVE, paymentSource: n, currency: i },
        { amount: 0, currency: e.currency },
        (0, A.UC)(e.items, e.currency, n?.id),
        t,
        r,
    );
}
function ep(e, t, n, i, r, a) {
    let s = (0, A.GX)(e, t);
    return eh(e, { status: N.Dmq.ACTIVE, items: s }, n, i, r, a);
}
function em(e, t, n, i, r) {
    return eh(e, { currency: t }, { amount: 0, currency: t.toLowerCase() }, n, i, r);
}
function eg(e, t, n, i, r) {
    return eh(e, { paymentSource: t }, { amount: 0, currency: n.currency }, n, i, r);
}
function eT() {
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
}
function eS() {
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
}
function eN() {
    s.h.dispatch({ type: "PAYMENT_AUTHENTICATION_CANCEL" });
}
async function eC(e) {
    await a.Bo.post({ url: N.Rsh.BILLING_PAYMENTS_VOID(e), oldFormErrors: !0, rejectWithError: !1 });
}
function eO(e) {
    let { paymentSourceType: t, state: n, path: i, query: r, insecure: l } = e;
    return (
        s.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType: t }),
        a.Bo.post({
            url: N.Rsh.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: { state: n, path: i, query: r, insecure: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => (s.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType: t }), e))
    );
}
async function eR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != c.A.ipCountryCodeRequest) return c.A.ipCountryCodeRequest;
    try {
        let e = a.Bo.get({ url: N.Rsh.BILLING_COUNTRY_CODE, rejectWithError: !1 });
        s.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: e });
        let t = await e,
            n = t.body.country_code;
        return (s.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }), t);
    } catch (e) {
        return (s.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" }), e);
    }
}
function eL() {
    (s.h.dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" }),
        a.Bo.get({ url: N.Rsh.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                let t = e.body;
                null == t
                    ? s.h.dispatch({
                          type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL",
                          error: Error("Missing response body"),
                      })
                    : s.h.dispatch({
                          type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS",
                          data: {
                              store_country: t.store_country ?? null,
                              allowed_payment_source_types: t.allowed_payment_source_types ?? [],
                              allowed_billing_address_countries: t.allowed_billing_address_countries ?? [],
                          },
                      });
            })
            .catch((e) => {
                s.h.dispatch({
                    type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL",
                    error: e instanceof Error ? e : Error(String(e)),
                });
            }));
}
async function ey() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != c.A.ipLocationRequest) return c.A.ipLocationRequest;
    try {
        let e = a.Bo.get({ url: N.Rsh.BILLING_LOCATION, rejectWithError: !1 });
        s.h.dispatch({ type: "BILLING_IP_LOCATION_FETCH_START", request: e });
        let t = await e,
            n = t.body.country_code,
            i = t.body.subdivision_code;
        return (
            s.h.dispatch({ type: "BILLING_SET_IP_LOCATION", location: { countryCode: n, subdivisionCode: i } }),
            s.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }),
            t
        );
    } catch (e) {
        return (
            _.default.track(N.HAw.BILLING_IP_LOCATION_FETCH_ERROR, { error_message: e.message }),
            s.h.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" }),
            e
        );
    }
}
function eD() {
    s.h.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
}
function eb(e) {
    s.h.dispatch({ type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId: e });
}
async function ev(e, t) {
    try {
        let n = await a.Bo.post({ url: N.Rsh.REACTIVATION_OFFER_REDEEM(e.id, t.id), rejectWithError: !1 });
        (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: n.body }),
            s.h.dispatch({ type: "BILLING_USER_OFFER_REDEEMED", offerId: t.id }));
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        throw (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
    }
}
async function eP(e) {
    try {
        (await a.Bo.post({ url: N.Rsh.USER_OFFER_REDEEM, body: { user_discount_offer_id: e.id }, rejectWithError: !0 }),
            s.h.dispatch({ type: "BILLING_USER_OFFER_REDEEMED", offerId: e.id }));
    } catch (e) {
        throw e instanceof l.Ey ? e : new l.Ey(e);
    }
}
