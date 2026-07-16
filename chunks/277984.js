"use strict";
n.d(t, {
    LD: () => eE,
    Z9: () => P,
    u1: () => Y,
    Tv: () => W,
    Ky: () => e_,
    YP: () => el,
    TD: () => w,
    Oj: () => eA,
    _D: () => eM,
    Gr: () => es,
    hr: () => V,
    ZK: () => eI,
    A8: () => $,
    $o: () => ea,
    N: () => eR,
    IV: () => ey,
    jV: () => Z,
    im: () => H,
    tc: () => eN,
    ne: () => b,
    I8: () => eu,
    uK: () => eg,
    TK: () => eo,
    JQ: () => ei,
    fE: () => eC,
    M2: () => eh,
    i0: () => R,
    u6: () => j,
    ey: () => eS,
    CK: () => ed,
    r6: () => em,
    hP: () => ec,
    Ze: () => eb,
    $M: () => z,
    jf: () => O,
    YJ: () => M,
    xe: () => eL,
    EB: () => U,
    Ps: () => er,
    nV: () => ef,
    bw: () => K,
    jZ: () => eD,
    re: () => eO,
    uZ: () => ev,
    ge: () => eT,
    x: () => eP,
    QP: () => ep,
});
var i = n(989349),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(913122),
    o = n(136857),
    d = n(202613),
    c = n(615405),
    u = n(166403),
    _ = n(174459),
    E = n(739508),
    A = n(428262),
    h = n(107351),
    I = n(342393),
    f = n(284009),
    p = n.n(f),
    T = n(626584),
    m = n(71532);
let g = [
    "api_connection_error",
    "api_error",
    "authentication_error",
    "card_error",
    "idempotency_error",
    "invalid_request_error",
    "rate_limit_error",
    "validation_error",
];
var S = n(652215),
    N = n(375708);
async function C(e) {
    try {
        return (
            await a.Bo.post({
                url: S.Rsh.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
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
function R(e) {
    let t,
        n,
        i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.intl.string(N.t.khEaRI),
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (g.includes(e.type)) {
        let a = null != e.message ? `${r}: ${e.message}` : r,
            s = {
                failure_message: a,
                error_type: e.type,
                failure_code: e.code,
                failure_sub_code: e.decline_code,
                payment_source_type: e.payment_method?.type,
            };
        (n = s),
            "card_error" === e.type &&
                (_.default.track(S.HAw.PAYMENT_SOURCE_CREATION_FAILED, { ...s, stacktrace: Error().stack }), (i = !1)),
            (t = new l.Ey(a));
    } else
        (n = { failure_message: (t = new l.Ey("string" == typeof e ? r : e)).message, status_code: t.code }),
            429 === t.code && (i = !1);
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: t });
    let o = Error("string" == typeof e ? e : t.message);
    return i && (0, E.pM)(o, { ...a, extra: { ...n, ...a.extra } }), o;
}
async function O(e) {
    let {
        body: { state: t },
    } = await a.Bo.post({ url: S.Rsh.BILLING_POPUP_BRIDGE(e), oldFormErrors: !0, rejectWithError: !0 });
    return s.h.dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: t, paymentSourceType: e }), t;
}
async function L(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    try {
        let l = await a.Bo.post({
                url: S.Rsh.BILLING_PAYMENT_SOURCES,
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
        return s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: o }), o;
    } catch (t) {
        let e = (0, o.Wd)(t);
        throw (
            (t?.body?.adyen_redirect_url && (e.fields.adyen_redirect_url = t?.body?.adyen_redirect_url),
            e.code !== o.tG.CONFIRMATION_REQUIRED &&
                s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }),
            e)
        );
    }
}
var y = n(219538),
    D = n(818348);
let v = new T.A("BillingPaymentGatewayActionCreators.tsx");
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.intl.string(N.t.khEaRI);
    return R(e, t, n, { tags: { source: "payment_elements" } });
}
async function M(e, t) {
    if (null == e || null == t) throw R("Stripe or elements not loaded");
    let n = t.getElement(I.CardNumberElement);
    if (null == n) throw R("Unable to load card elements from Stripe");
    let { token: i, error: r } = await e.createToken(n);
    if (null != r) throw R(r);
    if (null == i) throw R("token not available with successful stripe call");
    return i.id;
}
async function P(e, t, n, i) {
    if (null == e) throw R("Stripe not loaded");
    if (null == t) throw R("Bank required for EPS");
    let { email: r, name: a, line1: l, line2: o, city: d, state: c, postalCode: u, country: _ } = n;
    if (null == a) throw R("Name required for EPS");
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let E = await C(n),
        { paymentMethod: A, error: h } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: l, line2: o, city: d, state: c, postal_code: u, country: _ },
                name: a,
                email: r,
            },
        });
    if (null != h) throw R(h);
    if (null == A) throw R("paymentMethod not available with successful stripe call");
    return L(S.kM_.STRIPE, A.id, n, { billingAddressToken: E, analyticsLocation: i, bank: t });
}
async function U(e, t, n) {
    if (null == e) throw R("Stripe not loaded");
    let { email: i, name: r, line1: a, line2: l, city: o, state: d, postalCode: c, country: u } = t;
    if (null == r) throw R("Name required for iDEAL");
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let _ = await C(t),
        { paymentMethod: E, error: A } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: { line1: a, line2: l, city: o, state: d, postal_code: c, country: u },
                name: r,
                email: i,
            },
        });
    if (null != A) throw R(A);
    if (null == E) throw R("paymentMethod not available with successful stripe call");
    return L(S.kM_.STRIPE, E.id, t, { billingAddressToken: _, analyticsLocation: n });
}
async function w(e, t, n, i) {
    if (null == e) throw R("Stripe not loaded");
    let { email: r, name: a, line1: l, line2: o, city: d, state: c, postalCode: u, country: _ } = n;
    if (null == r) throw R("Email required for Przelewy24");
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let E = await C(n),
        A = t.p24Bank,
        { paymentMethod: h, error: I } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: A },
            billing_details: {
                address: { line1: l, line2: o, city: d, state: c, postal_code: u, country: _ },
                name: a,
                email: r,
            },
        });
    if (null != I) throw R(I);
    if (null == h) throw R("paymentMethod not available with successful stripe call");
    return L(S.kM_.STRIPE, h.id, n, { billingAddressToken: E, analyticsLocation: i, bank: A });
}
function G(e, t, n) {
    if (null != t) throw n(t);
    if (null == e) throw n("SetupIntent not created");
    if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
    return (
        p()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
        { setupIntent: e, error: t }
    );
}
async function x(e) {
    if (null == e) throw b("Stripe Elements not loaded", !0);
    let t = await e.submit();
    if ((v.info("Stripe Elements submit response: ", t), null != t.error))
        throw (v.error("Stripe Elements submit error: ", t.error), b(t.error, !0));
    return t;
}
let k = { hasCreatedPaymentMethod: !1 };
async function F(e, t) {
    let { paymentMethod: n, error: i } = await e.createPaymentMethod({ elements: t });
    if (null != i) throw (v.error("Stripe createPaymentMethod error: ", i), b(i, !0));
    if (null == n)
        throw (
            (v.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: n, error: i }),
            b("paymentMethod not available with successful stripe call", !0))
        );
    return (k.hasCreatedPaymentMethod = !0), { paymentMethod: n, error: i };
}
async function V(e, t) {
    if (null == e) throw b("Stripe not loaded", !0);
    if (null == t) throw b("Stripe Elements not loaded", !0);
    await x(t);
    let { paymentMethod: n, error: i } = await F(e, t);
    return { paymentMethod: n, error: i };
}
let B = new Set([D.he.CARD, D.he.PAYMENT_REQUEST]);
async function H() {
    let e;
    for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
    let [a, l, { billingAddress: o, paymentSourceType: d, lastConfirmedSetupIntentRef: c, createSetupIntent: u }, _] =
        i;
    if (null == a) throw b("Stripe not loaded", !0);
    if (null == l) throw b("Stripe Elements not loaded", !0);
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let E = await C(o);
    d !== D.he.PAYMENT_REQUEST && (await x(l));
    let A = null;
    if (B.has(d)) {
        let e,
            n = c.current ?? void 0;
        if (
            (null != n && d === D.he.PAYMENT_REQUEST
                ? (e = { setupIntent: n ?? void 0, error: void 0 })
                : (d === D.he.CARD && k.hasCreatedPaymentMethod && (await F(a, l)),
                  (e = await a.confirmSetup({ redirect: "if_required", elements: l }))),
            null != (t = e.error) &&
                "setup_intent_unexpected_state" === t.code &&
                null != t.setup_intent &&
                ("succeeded" === t.setup_intent.status || "canceled" === t.setup_intent.status) &&
                d !== D.he.PAYMENT_REQUEST)
        ) {
            let { client_secret: t } = await u();
            await x(l), (e = await a.confirmSetup({ redirect: "if_required", clientSecret: t, elements: l }));
        }
        let { setupIntent: i } = G(e.setupIntent, e.error, (e) => b(e, !0));
        (c.current = i), (A = i.payment_method);
    } else {
        let { paymentMethod: t } = await F(a, l);
        if (((A = t.id), d === D.he.PIX)) {
            let n = t.billing_details;
            if (n?.tax_id == null || "" === n.tax_id) throw b("Missing PIX tax_id from Payment Element", !0);
            e = { taxId: n.tax_id };
        }
    }
    return L(S.kM_.STRIPE, A, o, { billingAddressToken: E, analyticsLocation: _, pix: e });
}
async function j(e, t, n, i) {
    if (null == e || null == t) throw R("Stripe or token not loaded");
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let r = null;
    try {
        r = (await (0, y.r)()).client_secret;
    } catch (e) {
        throw R(e);
    }
    let a = await C(n),
        l = m._Z(n),
        { setupIntent: o, error: d } = await e.confirmCardSetup(r, {
            payment_method: { card: { token: t }, billing_details: l },
        }),
        { setupIntent: c } = G(o, d, (e) => R(e));
    return L(S.kM_.STRIPE, c.payment_method, n, { billingAddressToken: a, analyticsLocation: i });
}
function W(e, t, n) {
    let { token: i, billingAddressInfo: r } = m.uK(e);
    return L(S.kM_.STRIPE, i, t ?? r, { analyticsLocation: n });
}
function Y(e, t, n) {
    return L(S.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function K(e, t, n, i) {
    if (null == e) throw R("Stripe not loaded");
    let r = await C(t),
        { name: a, line1: s, line2: l, city: o, state: d, postalCode: c, country: u } = t,
        _ = D.kv.get(n);
    p()(null != _, "unsupported payment method type");
    let { paymentMethod: E, error: A } = await e.createPaymentMethod({
        type: _,
        billing_details: { address: { line1: s, line2: l, city: o, state: d, postal_code: c, country: u }, name: a },
    });
    if (null != A) throw R(A);
    if (null == E) throw R("stripePaymentMethod not available with successful stripe call");
    return L(S.kM_.STRIPE, E.id, t, { billingAddressToken: r, analyticsLocation: i });
}
async function $(e, t, n) {
    let i = await C(e),
        r = { type: D.Kc.get(t) };
    return L(S.kM_.ADYEN, JSON.stringify(r), e, { billingAddressToken: i, analyticsLocation: n });
}
async function z(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        d = await C(e),
        c = { type: D.Kc.get(t), ...(i?.paymentMethod ?? {}) },
        u = await O(t),
        _ = (0, a.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, u ?? "", "success");
    try {
        return {
            paymentSource: await L(
                S.kM_.ADYEN,
                JSON.stringify(c),
                e,
                { billingAddressToken: d, analyticsLocation: n, returnUrl: _ },
                r,
            ),
            redirectConfirmation: !1,
        };
    } catch (t) {
        var E;
        if (t.code !== o.tG.CONFIRMATION_REQUIRED)
            throw (
                (s.h.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: new l.Ey(
                        `Unable to create payment source token: code: ${t?.code} message: ${t?.message}`,
                        l.Ey.ErrorCodes.UNKNOWN,
                    ),
                }),
                t)
            );
        let e = t.fields.adyen_redirect_url;
        if (null == e) throw R("redirect url cannot be null on a redirect for adyen.");
        return (E = e), window.open(E), { redirectConfirmation: !0 };
    }
}
async function q(e) {
    if (S.DYY.has(e.type)) return null;
    let t = await m.Cv();
    if (null == t) throw new l.Ey("Stripe not loaded", l.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: i, line1: r, line2: a, city: s, state: o, postalCode: d, country: c } = e.billingAddress,
        u = {
            billing_details: {
                address: { line1: r, line2: a, city: s, state: o, postal_code: d, country: c },
                name: i,
            },
        };
    switch (e.type) {
        case D.he.GIROPAY:
            u.type = "giropay";
            break;
        case D.he.SOFORT:
            (u.type = "sofort"), (u.sofort = { country: c ?? "" }), (u.billing_details.email = n);
            break;
        case D.he.BANCONTACT:
            u.type = "bancontact";
            break;
        case D.he.IDEAL:
            (u.type = "ideal"), (u.ideal = { bank: e.bank });
            break;
        case D.he.PRZELEWY24:
            if (null == e.bank) throw new l.Ey("p24 missing bank information", l.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (u.type = "p24"), (u.p24 = { bank: e.bank }), (u.billing_details.email = e.email);
            break;
        case D.he.EPS:
            if (null == e.bank) throw new l.Ey("EPS missing bank information", l.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (u.type = "eps"), (u.eps = { bank: e.bank });
            break;
        case D.he.PIX:
            (u.type = "pix"), (u.billing_details.email = e.email), (u.billing_details.tax_id = e.pixMetadata?.taxId);
    }
    p()(null != u.type, "unsupported payment method type");
    let { paymentMethod: _, error: E } = await t.createPaymentMethod(u);
    if (null != E || null == _)
        throw new l.Ey(
            `Unable to create payment source token: code: ${E?.code} message: ${E?.message}`,
            l.Ey.ErrorCodes.UNKNOWN,
        );
    return _.id;
}
function Z(e) {
    if (S.DYY.has(e.type)) return null;
    if (D.Kc.has(e.type)) return S.DYY.has(e.type) ? null : JSON.stringify({ type: D.Kc.get(e.type) ?? null });
    return q(e);
}
let X = {
        [D.he.GIROPAY]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { stripe: t, paymentSource: n } = e,
                    i = { billing_details: { name: n.billingAddress.name } };
                return { stripeConfirmPayment: t.confirmGiropayPayment, paymentMethod: i };
            },
        },
        [D.he.SOFORT]: {
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
        [D.he.PRZELEWY24]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e;
                if (null == t.bank) throw R(`PaymentSource (${t.id}) missing bank info for p24.`);
                let i = { p24: { bank: t.bank }, billing_details: { name: t.billingAddress.name, email: t.email } };
                return { stripeConfirmPayment: n.confirmP24Payment, paymentMethod: i };
            },
        },
        [D.he.BANCONTACT]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e,
                    i = { billing_details: { name: t.billingAddress.name, email: t.email } };
                return { stripeConfirmPayment: n.confirmBancontactPayment, paymentMethod: i };
            },
        },
        [D.he.EPS]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e;
                if (null == t.bank) throw R(`PaymentSource (${t.id}) missing bank info for EPS.`);
                let i = { eps: { bank: t.bank }, billing_details: { name: t.billingAddress.name } };
                return { stripeConfirmPayment: n.confirmEpsPayment, paymentMethod: i };
            },
        },
        [D.he.IDEAL]: {
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
    Q = {
        [D.he.SEPA_DEBIT]: {
            confirmationType: "stripe_direct_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { stripe: t, paymentMethodId: n } = e;
                if (null == n) throw R("On a sepa payment payment method id cannot be null");
                return { stripeConfirmPayment: t.confirmSepaDebitPayment, paymentMethod: n };
            },
        },
        [D.he.PIX]: {
            confirmationType: "stripe_direct_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { stripe: t, paymentMethodId: n } = e;
                return { stripeConfirmPayment: t.confirmPixPayment, paymentMethod: n, pendingCustomerAction: !0 };
            },
        },
    };
class J {
    paymentSource;
    payment;
    paymentSourceType;
    paymentId;
    constructor(e, t) {
        (this.paymentSource = e),
            (this.payment = t),
            (this.paymentSourceType = e.type),
            (this.paymentId = t.payment_id);
    }
    performRedirect(e) {
        window.open(e);
    }
}
class ee extends J {
    stripe = null;
    handlerRegistry;
    constructor(e, t) {
        if (null == e) throw R("Payment source cannot be null on a redirect.");
        if (
            (super(e, t),
            (function (e) {
                return S.CmT.has(e) && e in X;
            })(this.paymentSourceType))
        )
            this.handlerRegistry = X[this.paymentSourceType];
        else if (this.paymentSourceType in Q) this.handlerRegistry = Q[this.paymentSourceType];
        else throw R("Invalid Payment Source Type - redirect or direct confirmation handlers not found.");
    }
    async getStripe() {
        if ((null == this.stripe && (this.stripe = await m.Cv()), null == this.stripe))
            throw R("Stripe cannot be null on a redirect.");
        return this.stripe;
    }
    async getPaymentIntentInfo() {
        let { stripe_payment_intent_client_secret: e, stripe_payment_intent_payment_method_id: t } = (
            await a.Bo.get({
                url: S.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(this.paymentId),
                oldFormErrors: !0,
                rejectWithError: !0,
            })
        ).body;
        return { clientSecret: e, paymentMethodId: t };
    }
    async getStripeRedirect(e) {
        let { clientSecret: t, state: n, paymentMethodId: i } = e,
            r = await this.getStripe(),
            { stripeConfirmPayment: s, paymentMethod: l } = this.handlerRegistry.constructStripeConfirmPaymentHandler({
                stripe: r,
                paymentSource: this.paymentSource,
                paymentMethodId: i,
            }),
            { paymentIntent: o, error: d } = await s(
                t,
                {
                    payment_method: l,
                    return_url:
                        (0, a.TP)() +
                        S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(this.paymentSourceType, n ?? "", "success"),
                },
                { handleActions: !1 },
            );
        if (null != d) throw R(d);
        if (null == o) throw R("paymentIntent not available with successful api call");
        if (o.next_action?.redirect_to_url?.url == null) throw R("confirm payment did not return a redirect url");
        return o.next_action.redirect_to_url.url;
    }
    async confirmRedirectedPaymentSource(e) {
        let { clientSecret: t, paymentMethodId: n } = e,
            i = await O(this.paymentSourceType),
            r = await this.getStripeRedirect({ clientSecret: t, state: i, paymentMethodId: n });
        this.performRedirect(r);
    }
    async confirmDirectPaymentSource(e) {
        let { clientSecret: t, paymentMethodId: n } = e,
            i = await this.getStripe(),
            {
                stripeConfirmPayment: r,
                paymentMethod: a,
                pendingCustomerAction: s,
            } = this.handlerRegistry.constructStripeConfirmPaymentHandler({
                stripe: i,
                paymentSource: this.paymentSource,
                paymentMethodId: n,
            }),
            { paymentIntent: l, error: o } = await r(t, { payment_method: a });
        if (null != o) throw R(o);
        if (null == l) throw R("paymentIntent not available with successful stripe call");
        return { pendingCustomerAction: s, customerActionCancelled: "requires_action" === l.status };
    }
    async confirmPayment() {
        let { clientSecret: e, paymentMethodId: t } = await this.getPaymentIntentInfo();
        if ("stripe_redirect_confirmation" === this.handlerRegistry.confirmationType)
            return (
                await this.confirmRedirectedPaymentSource({ clientSecret: e, paymentMethodId: t }),
                { redirectConfirmation: !0 }
            );
        {
            let { pendingCustomerAction: n, customerActionCancelled: i } = await this.confirmDirectPaymentSource({
                clientSecret: e,
                paymentMethodId: t,
            });
            return { redirectConfirmation: !1, pendingCustomerAction: n, customerActionCancelled: i };
        }
    }
}
class et extends J {
    constructor(e, t) {
        if (null == e) throw R("Payment source cannot be null on a redirect.");
        super(e, t);
    }
    handleAdyenConfirmation() {
        let e = this.payment.adyen_redirect_url;
        if (null == e) throw R("redirect url cannot be null on a redirect for adyen.");
        return S.CmT.has(this.paymentSource.type)
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
        await a.Bo.del({ url: S.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: e });
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
                url: S.Rsh.BILLING_PAYMENT_SOURCE(e),
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
            let e = a.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCES, oldFormErrors: !0, rejectWithError: !1 });
            s.h.wait(() => s.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: e }));
            let t = await e;
            return s.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: t.body }), t;
        } catch (e) {
            return s.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" }), null;
        }
}
async function es(e) {
    try {
        let t = a.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = await t,
            i = d.Ay.createFromServer(n.body);
        return s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: i }), n;
    } catch (e) {
        throw (s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" }), e);
    }
}
async function el(e) {
    s.h.dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId: e });
    try {
        let t = await a.Bo.get({
                url: S.Rsh.BILLING_WALLET_INFORMATION(e),
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
        return s.h.dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_FAIL", paymentSourceId: e }), null;
    }
}
async function eo(e) {
    let t = await a.Bo.get({ url: S.Rsh.BILLING_PAYMENT(e), rejectWithError: !0 });
    return s.h.dispatch({ type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: t.body }), t;
}
async function ed() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        t = arguments.length > 1 ? arguments[1] : void 0;
    s.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
    try {
        let n = await a.Bo.get({
            url: S.Rsh.BILLING_PAYMENTS,
            query: { limit: e, before: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return s.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: n.body }), n;
    } catch (e) {
        throw (s.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" }), e);
    }
}
async function ec() {
    s.h.wait(() => {
        s.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = en.En.ADD_PERKS_IF_DETECTED,
            t = u.A.getLastLazyPerkSync();
        (null == t || r()().diff(t, "hours") >= 1) && ((e = en.En.FULL_RESYNC), (t = r()()));
        let n = await a.Bo.get({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            oldFormErrors: !0,
            rejectWithError: !1,
            query: { sync_level: e },
        });
        if (null == n.body) throw new l.Ey(`response body is null, response: ${JSON.stringify(n)}`, n.status);
        return (
            s.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: n.body, lastLazyPerkSync: t }), n
        );
    } catch (e) {
        throw (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_FAIL" }), e);
    }
}
async function eu() {
    s.h.wait(() => {
        s.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = await a.Bo.get({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 2, exclude_unpaid_statuses: !0, subscription_type: D.rz.PREMIUM },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return (
            e.ok
                ? (s.h.dispatch({
                      type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                      subscription: e.body.length > 0 ? e.body[0] : null,
                  }),
                  s.h.dispatch({
                      type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                      subscription: e.body.length > 1 ? e.body[1] : null,
                  }))
                : s.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" }),
            e
        );
    } catch (e) {
        s.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" });
    }
}
async function e_(e) {
    let {
        items: t,
        paymentSource: n,
        trialId: i,
        code: r,
        currency: d,
        metadata: c,
        referralCode: u,
        loadId: _,
        expectedInvoicePrice: I,
        expectedRenewalPrice: f,
    } = e;
    s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" }), (t = (0, A.qn)(t));
    let p = null;
    if (null != n && D.Kc.has(n.type)) {
        let e = await O(n.type);
        p = (0, a.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let e = await a.Bo.post({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            body: {
                items: t.map((e) => {
                    let { planId: t, quantity: n } = e;
                    return { plan_id: t, quantity: n };
                }),
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await Z(n) : null,
                trial_id: i,
                return_url: p,
                code: r,
                currency: null != n ? d : D.Yr.USD,
                metadata: c,
                gateway_checkout_context: await (0, E.ob)(n),
                purchase_token: (0, h.r)(),
                referral_code: u,
                load_id: _,
                expected_invoice_price: I,
                expected_renewal_price: f,
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
            (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }),
            e.code !== o.tG.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!t.body.payment_id) throw R("payment id cannot be null on redirected confirmations.");
        return eA(t.body, n);
    }
}
async function eE(e, t, n, i, r) {
    let d = null;
    if (null != n && D.AD.has(n.type)) {
        let e = await O(n.type);
        d = (0, a.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let l = await a.Bo.post({
            url: S.Rsh.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
            body: {
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await Z(n) : null,
                return_url: d,
                currency: i,
                purchase_token: (0, h.r)(),
                load_id: r,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: l.body }),
            { subscription: l.body, redirectConfirmation: S.CmT.has(n.type) }
        );
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        if (e.code !== o.tG.CONFIRMATION_REQUIRED)
            throw (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
        if (!t.body.payment_id) throw R("payment id cannot be null on redirected confirmations.");
        return eA(t.body, n);
    }
}
function eA(e, t) {
    return null != t && D.Kc.has(t.type) ? new et(t, e).confirmPayment() : new ee(t, e).confirmPayment();
}
async function eh(e, t, n) {
    s.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
    try {
        let i = await a.Bo.del({
            url: S.Rsh.BILLING_SUBSCRIPTION(e),
            query: { location: n, location_stack: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return s.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" }), i;
    } catch (t) {
        let e = new l.Ey(t);
        throw (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_FAIL", error: e }), e);
    }
}
function eI(e, t) {
    return ef(
        e,
        { items: e.items },
        { amount: 0, currency: e.currency },
        (0, A.UC)(e.items, e.currency, e.paymentSourceId),
        t,
    );
}
async function ef(e, t, n, i, r, d, c) {
    s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    try {
        let l = {
            status: t.status,
            payment_source_id: t.paymentSource?.id,
            payment_source_token: null != t.paymentSource ? await Z(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, E.ob)(t.paymentSource),
            load_id: c,
            pause_duration: t.pauseDuration,
            purchase_token: (0, h.r)(),
            expected_invoice_price: n,
            expected_renewal_price: i,
        };
        if (null != t.paymentSource && D.Kc.has(t.paymentSource.type)) {
            let e = await O(t.paymentSource.type);
            l.return_url =
                (0, a.TP)() +
                S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, e ?? "", "success");
        }
        null != t.items &&
            (l.items = (0, A.qn)(t.items).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }));
        let o = await a.Bo.patch({
            url: S.Rsh.BILLING_SUBSCRIPTION(e.id),
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
            (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }),
            e.code !== o.tG.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!n.body.payment_id) throw R("payment id cannot be null on redirected confirmations.");
        return eA(n.body, t.paymentSource);
    }
}
function ep(e, t, n, i, r) {
    return ef(
        e,
        { status: S.Dmq.ACTIVE, paymentSource: n, currency: i },
        { amount: 0, currency: e.currency },
        (0, A.UC)(e.items, e.currency, n?.id),
        t,
        r,
    );
}
function eT(e, t, n, i, r, a) {
    let s = (0, A.GX)(e, t);
    return ef(e, { status: S.Dmq.ACTIVE, items: s }, n, i, r, a);
}
function em(e, t, n, i, r) {
    return ef(e, { currency: t }, { amount: 0, currency: t.toLowerCase() }, n, i, r);
}
function eg(e, t, n, i, r) {
    return ef(e, { paymentSource: t }, { amount: 0, currency: n.currency }, n, i, r);
}
function eS() {
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
}
function eN() {
    s.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
}
function eC() {
    s.h.dispatch({ type: "PAYMENT_AUTHENTICATION_CANCEL" });
}
async function eR(e) {
    await a.Bo.post({ url: S.Rsh.BILLING_PAYMENTS_VOID(e), oldFormErrors: !0, rejectWithError: !1 });
}
function eO(e) {
    let { paymentSourceType: t, state: n, path: i, query: r, insecure: l } = e;
    return (
        s.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType: t }),
        a.Bo.post({
            url: S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: { state: n, path: i, query: r, insecure: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => (s.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType: t }), e))
    );
}
async function eL() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != c.A.ipCountryCodeRequest) return c.A.ipCountryCodeRequest;
    try {
        let e = a.Bo.get({ url: S.Rsh.BILLING_COUNTRY_CODE, rejectWithError: !1 });
        s.h.wait(() => s.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: e }));
        let t = await e,
            n = t.body.country_code;
        return s.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }), t;
    } catch (e) {
        return s.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" }), e;
    }
}
function ey() {
    s.h.dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" }),
        a.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: !0, rejectWithError: !1 })
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
            });
}
async function eD() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != c.A.ipLocationRequest) return c.A.ipLocationRequest;
    try {
        let e = a.Bo.get({ url: S.Rsh.BILLING_LOCATION, rejectWithError: !1 });
        s.h.wait(() => s.h.dispatch({ type: "BILLING_IP_LOCATION_FETCH_START", request: e }));
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
            _.default.track(S.HAw.BILLING_IP_LOCATION_FETCH_ERROR, { error_message: e.message }),
            s.h.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" }),
            e
        );
    }
}
function ev() {
    s.h.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
}
function eb(e) {
    s.h.dispatch({ type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId: e });
}
async function eM(e, t) {
    try {
        let n = await a.Bo.post({ url: S.Rsh.REACTIVATION_OFFER_REDEEM(e.id, t.id), rejectWithError: !1 });
        s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: n.body }),
            s.h.dispatch({ type: "BILLING_USER_OFFER_REDEEMED", offerId: t.id });
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        throw (s.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
    }
}
async function eP(e) {
    try {
        await a.Bo.post({ url: S.Rsh.USER_OFFER_REDEEM, body: { user_discount_offer_id: e.id }, rejectWithError: !0 }),
            s.h.dispatch({ type: "BILLING_USER_OFFER_REDEEMED", offerId: e.id });
    } catch (e) {
        throw e instanceof l.Ey ? e : new l.Ey(e);
    }
}
