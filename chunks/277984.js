"use strict";
n.d(t, {
    LD: () => eh,
    Z9: () => w,
    u1: () => Y,
    Tv: () => W,
    Ky: () => e_,
    YP: () => eo,
    TD: () => x,
    Oj: () => ef,
    _D: () => eD,
    Gr: () => ea,
    hr: () => F,
    ZK: () => ep,
    A8: () => $,
    $o: () => es,
    N: () => eC,
    IV: () => eR,
    jV: () => Z,
    im: () => j,
    tc: () => eN,
    ne: () => D,
    I8: () => ec,
    uK: () => eT,
    TK: () => el,
    JQ: () => ei,
    M2: () => eE,
    i0: () => y,
    u6: () => H,
    ey: () => eS,
    CK: () => eu,
    r6: () => eI,
    hP: () => ed,
    Ze: () => eL,
    $M: () => z,
    jf: () => v,
    YJ: () => P,
    xe: () => ev,
    EB: () => M,
    Ps: () => er,
    nV: () => em,
    bw: () => K,
    jZ: () => eO,
    re: () => ey,
    uZ: () => eb,
    ge: () => eA,
    x: () => eP,
    QP: () => eg,
});
var i = n(989349),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(913122),
    l = n(136857),
    u = n(202613),
    d = n(615405),
    c = n(166403),
    _ = n(174459),
    h = n(739508),
    f = n(428262),
    E = n(107351),
    p = n(342393),
    m = n(284009),
    g = n.n(m),
    A = n(626584),
    I = n(71532);
let T = [
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
            await s.Bo.post({
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
        let e = (0, l.Wd)(t);
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }), e);
    }
}
function y(e) {
    let t,
        n,
        i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.intl.string(N.t.khEaRI),
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (T.includes(e.type)) {
        let s = null != e.message ? `${r}: ${e.message}` : r,
            a = {
                failure_message: s,
                error_type: e.type,
                failure_code: e.code,
                failure_sub_code: e.decline_code,
                payment_source_type: e.payment_method?.type,
            };
        (n = a),
            "card_error" === e.type &&
                (_.default.track(S.HAw.PAYMENT_SOURCE_CREATION_FAILED, { ...a, stacktrace: Error().stack }), (i = !1)),
            (t = new o.Ey(s));
    } else
        (n = { failure_message: (t = new o.Ey("string" == typeof e ? r : e)).message, status_code: t.code }),
            429 === t.code && (i = !1);
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: t });
    let l = Error("string" == typeof e ? e : t.message);
    return i && (0, h.pM)(l, { ...s, extra: { ...n, ...s.extra } }), l;
}
async function v(e) {
    let {
        body: { state: t },
    } = await s.Bo.post({ url: S.Rsh.BILLING_POPUP_BRIDGE(e), oldFormErrors: !0, rejectWithError: !0 });
    return a.h.dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: t, paymentSourceType: e }), t;
}
async function R(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    try {
        let o = await s.Bo.post({
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
            l = u.Ay.createFromServer(o.body);
        return a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: l }), l;
    } catch (t) {
        let e = (0, l.Wd)(t);
        throw (
            (t?.body?.adyen_redirect_url && (e.fields.adyen_redirect_url = t?.body?.adyen_redirect_url),
            e.code !== l.tG.CONFIRMATION_REQUIRED &&
                a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }),
            e)
        );
    }
}
var O = n(219538),
    b = n(818348);
let L = new A.A("BillingPaymentGatewayActionCreators.tsx");
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.intl.string(N.t.khEaRI);
    return y(e, t, n, { tags: { source: "payment_elements" } });
}
async function P(e, t) {
    if (null == e || null == t) throw y("Stripe or elements not loaded");
    let n = t.getElement(p.CardNumberElement);
    if (null == n) throw y("Unable to load card elements from Stripe");
    let { token: i, error: r } = await e.createToken(n);
    if (null != r) throw y(r);
    if (null == i) throw y("token not available with successful stripe call");
    return i.id;
}
async function w(e, t, n, i) {
    if (null == e) throw y("Stripe not loaded");
    if (null == t) throw y("Bank required for EPS");
    let { email: r, name: s, line1: o, line2: l, city: u, state: d, postalCode: c, country: _ } = n;
    if (null == s) throw y("Name required for EPS");
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let h = await C(n),
        { paymentMethod: f, error: E } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: o, line2: l, city: u, state: d, postal_code: c, country: _ },
                name: s,
                email: r,
            },
        });
    if (null != E) throw y(E);
    if (null == f) throw y("paymentMethod not available with successful stripe call");
    return R(S.kM_.STRIPE, f.id, n, { billingAddressToken: h, analyticsLocation: i, bank: t });
}
async function M(e, t, n) {
    if (null == e) throw y("Stripe not loaded");
    let { email: i, name: r, line1: s, line2: o, city: l, state: u, postalCode: d, country: c } = t;
    if (null == r) throw y("Name required for iDEAL");
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let _ = await C(t),
        { paymentMethod: h, error: f } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: { line1: s, line2: o, city: l, state: u, postal_code: d, country: c },
                name: r,
                email: i,
            },
        });
    if (null != f) throw y(f);
    if (null == h) throw y("paymentMethod not available with successful stripe call");
    return R(S.kM_.STRIPE, h.id, t, { billingAddressToken: _, analyticsLocation: n });
}
async function x(e, t, n, i) {
    if (null == e) throw y("Stripe not loaded");
    let { email: r, name: s, line1: o, line2: l, city: u, state: d, postalCode: c, country: _ } = n;
    if (null == r) throw y("Email required for Przelewy24");
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let h = await C(n),
        f = t.p24Bank,
        { paymentMethod: E, error: p } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: f },
            billing_details: {
                address: { line1: o, line2: l, city: u, state: d, postal_code: c, country: _ },
                name: s,
                email: r,
            },
        });
    if (null != p) throw y(p);
    if (null == E) throw y("paymentMethod not available with successful stripe call");
    return R(S.kM_.STRIPE, E.id, n, { billingAddressToken: h, analyticsLocation: i, bank: f });
}
function U(e, t, n) {
    if (null != t) throw n(t);
    if (null == e) throw n("SetupIntent not created");
    if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
    return (
        g()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
        { setupIntent: e, error: t }
    );
}
async function k(e) {
    if (null == e) throw D("Stripe Elements not loaded", !0);
    let t = await e.submit();
    if ((L.info("Stripe Elements submit response: ", t), null != t.error))
        throw (L.error("Stripe Elements submit error: ", t.error), D(t.error, !0));
    return t;
}
let G = { hasCreatedPaymentMethod: !1 };
async function V(e, t) {
    let { paymentMethod: n, error: i } = await e.createPaymentMethod({ elements: t });
    if (null != i) throw (L.error("Stripe createPaymentMethod error: ", i), D(i, !0));
    if (null == n)
        throw (
            (L.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: n, error: i }),
            D("paymentMethod not available with successful stripe call", !0))
        );
    return (G.hasCreatedPaymentMethod = !0), { paymentMethod: n, error: i };
}
async function F(e, t) {
    if (null == e) throw D("Stripe not loaded", !0);
    if (null == t) throw D("Stripe Elements not loaded", !0);
    await k(t);
    let { paymentMethod: n, error: i } = await V(e, t);
    return { paymentMethod: n, error: i };
}
let B = new Set([b.he.CARD, b.he.PAYMENT_REQUEST]);
async function j() {
    let e;
    for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
    let [s, o, { billingAddress: l, paymentSourceType: u, lastConfirmedSetupIntentRef: d, createSetupIntent: c }, _] =
        i;
    if (null == s) throw D("Stripe not loaded", !0);
    if (null == o) throw D("Stripe Elements not loaded", !0);
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let h = await C(l);
    u !== b.he.PAYMENT_REQUEST && (await k(o));
    let f = null;
    if (B.has(u)) {
        let e,
            n = d.current ?? void 0;
        if (
            (null != n && u === b.he.PAYMENT_REQUEST
                ? (e = { setupIntent: n ?? void 0, error: void 0 })
                : (u === b.he.CARD && G.hasCreatedPaymentMethod && (await V(s, o)),
                  (e = await s.confirmSetup({ redirect: "if_required", elements: o }))),
            null != (t = e.error) &&
                "setup_intent_unexpected_state" === t.code &&
                null != t.setup_intent &&
                ("succeeded" === t.setup_intent.status || "canceled" === t.setup_intent.status) &&
                u !== b.he.PAYMENT_REQUEST)
        ) {
            let { client_secret: t } = await c();
            await k(o), (e = await s.confirmSetup({ redirect: "if_required", clientSecret: t, elements: o }));
        }
        let { setupIntent: i } = U(e.setupIntent, e.error, (e) => D(e, !0));
        (d.current = i), (f = i.payment_method);
    } else {
        let { paymentMethod: t } = await V(s, o);
        if (((f = t.id), u === b.he.PIX)) {
            let n = t.billing_details;
            if (n?.tax_id == null || "" === n.tax_id) throw D("Missing PIX tax_id from Payment Element", !0);
            e = { taxId: n.tax_id };
        }
    }
    return R(S.kM_.STRIPE, f, l, { billingAddressToken: h, analyticsLocation: _, pix: e });
}
async function H(e, t, n, i) {
    if (null == e || null == t) throw y("Stripe or token not loaded");
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let r = null;
    try {
        r = (await (0, O.r)()).client_secret;
    } catch (e) {
        throw y(e);
    }
    let s = await C(n),
        o = I._Z(n),
        { setupIntent: l, error: u } = await e.confirmCardSetup(r, {
            payment_method: { card: { token: t }, billing_details: o },
        }),
        { setupIntent: d } = U(l, u, (e) => y(e));
    return R(S.kM_.STRIPE, d.payment_method, n, { billingAddressToken: s, analyticsLocation: i });
}
function W(e, t, n) {
    let { token: i, billingAddressInfo: r } = I.uK(e);
    return R(S.kM_.STRIPE, i, t ?? r, { analyticsLocation: n });
}
function Y(e, t, n) {
    return R(S.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function K(e, t, n, i) {
    if (null == e) throw y("Stripe not loaded");
    let r = await C(t),
        { name: s, line1: a, line2: o, city: l, state: u, postalCode: d, country: c } = t,
        _ = b.kv.get(n);
    g()(null != _, "unsupported payment method type");
    let { paymentMethod: h, error: f } = await e.createPaymentMethod({
        type: _,
        billing_details: { address: { line1: a, line2: o, city: l, state: u, postal_code: d, country: c }, name: s },
    });
    if (null != f) throw y(f);
    if (null == h) throw y("stripePaymentMethod not available with successful stripe call");
    return R(S.kM_.STRIPE, h.id, t, { billingAddressToken: r, analyticsLocation: i });
}
async function $(e, t, n) {
    let i = await C(e),
        r = { type: b.Kc.get(t) };
    return R(S.kM_.ADYEN, JSON.stringify(r), e, { billingAddressToken: i, analyticsLocation: n });
}
async function z(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        u = await C(e),
        d = { type: b.Kc.get(t), ...(i?.paymentMethod ?? {}) },
        c = await v(t),
        _ = (0, s.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, c ?? "", "success");
    try {
        return {
            paymentSource: await R(
                S.kM_.ADYEN,
                JSON.stringify(d),
                e,
                { billingAddressToken: u, analyticsLocation: n, returnUrl: _ },
                r,
            ),
            redirectConfirmation: !1,
        };
    } catch (t) {
        var h;
        if (t.code !== l.tG.CONFIRMATION_REQUIRED)
            throw (
                (a.h.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: new o.Ey(
                        `Unable to create payment source token: code: ${t?.code} message: ${t?.message}`,
                        o.Ey.ErrorCodes.UNKNOWN,
                    ),
                }),
                t)
            );
        let e = t.fields.adyen_redirect_url;
        if (null == e) throw y("redirect url cannot be null on a redirect for adyen.");
        return (h = e), window.open(h), { redirectConfirmation: !0 };
    }
}
async function q(e) {
    if (S.DYY.has(e.type)) return null;
    let t = await I.Cv();
    if (null == t) throw new o.Ey("Stripe not loaded", o.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: i, line1: r, line2: s, city: a, state: l, postalCode: u, country: d } = e.billingAddress,
        c = {
            billing_details: {
                address: { line1: r, line2: s, city: a, state: l, postal_code: u, country: d },
                name: i,
            },
        };
    switch (e.type) {
        case b.he.GIROPAY:
            c.type = "giropay";
            break;
        case b.he.SOFORT:
            (c.type = "sofort"), (c.sofort = { country: d ?? "" }), (c.billing_details.email = n);
            break;
        case b.he.BANCONTACT:
            c.type = "bancontact";
            break;
        case b.he.IDEAL:
            (c.type = "ideal"), (c.ideal = { bank: e.bank });
            break;
        case b.he.PRZELEWY24:
            if (null == e.bank) throw new o.Ey("p24 missing bank information", o.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (c.type = "p24"), (c.p24 = { bank: e.bank }), (c.billing_details.email = e.email);
            break;
        case b.he.EPS:
            if (null == e.bank) throw new o.Ey("EPS missing bank information", o.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (c.type = "eps"), (c.eps = { bank: e.bank });
            break;
        case b.he.PIX:
            (c.type = "pix"), (c.billing_details.email = e.email), (c.billing_details.tax_id = e.pixMetadata?.taxId);
    }
    g()(null != c.type, "unsupported payment method type");
    let { paymentMethod: _, error: h } = await t.createPaymentMethod(c);
    if (null != h || null == _)
        throw new o.Ey(
            `Unable to create payment source token: code: ${h?.code} message: ${h?.message}`,
            o.Ey.ErrorCodes.UNKNOWN,
        );
    return _.id;
}
function Z(e) {
    if (S.DYY.has(e.type)) return null;
    if (b.Kc.has(e.type)) return S.DYY.has(e.type) ? null : JSON.stringify({ type: b.Kc.get(e.type) ?? null });
    return q(e);
}
let X = {
        [b.he.GIROPAY]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { stripe: t, paymentSource: n } = e,
                    i = { billing_details: { name: n.billingAddress.name } };
                return { stripeConfirmPayment: t.confirmGiropayPayment, paymentMethod: i };
            },
        },
        [b.he.SOFORT]: {
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
        [b.he.PRZELEWY24]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e;
                if (null == t.bank) throw y(`PaymentSource (${t.id}) missing bank info for p24.`);
                let i = { p24: { bank: t.bank }, billing_details: { name: t.billingAddress.name, email: t.email } };
                return { stripeConfirmPayment: n.confirmP24Payment, paymentMethod: i };
            },
        },
        [b.he.BANCONTACT]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e,
                    i = { billing_details: { name: t.billingAddress.name, email: t.email } };
                return { stripeConfirmPayment: n.confirmBancontactPayment, paymentMethod: i };
            },
        },
        [b.he.EPS]: {
            confirmationType: "stripe_redirect_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { paymentSource: t, stripe: n } = e;
                if (null == t.bank) throw y(`PaymentSource (${t.id}) missing bank info for EPS.`);
                let i = { eps: { bank: t.bank }, billing_details: { name: t.billingAddress.name } };
                return { stripeConfirmPayment: n.confirmEpsPayment, paymentMethod: i };
            },
        },
        [b.he.IDEAL]: {
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
        [b.he.SEPA_DEBIT]: {
            confirmationType: "stripe_direct_confirmation",
            constructStripeConfirmPaymentHandler: (e) => {
                let { stripe: t, paymentMethodId: n } = e;
                if (null == n) throw y("On a sepa payment payment method id cannot be null");
                return { stripeConfirmPayment: t.confirmSepaDebitPayment, paymentMethod: n };
            },
        },
        [b.he.PIX]: {
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
        if (null == e) throw y("Payment source cannot be null on a redirect.");
        if ((super(e, t), ((e) => S.CmT.has(e) && e in X)(this.paymentSourceType)))
            this.handlerRegistry = X[this.paymentSourceType];
        else if (((e) => e in Q)(this.paymentSourceType)) this.handlerRegistry = Q[this.paymentSourceType];
        else throw y("Invalid Payment Source Type - redirect or direct confirmation handlers not found.");
    }
    async getStripe() {
        if ((null == this.stripe && (this.stripe = await I.Cv()), null == this.stripe))
            throw y("Stripe cannot be null on a redirect.");
        return this.stripe;
    }
    async getPaymentIntentInfo() {
        let { stripe_payment_intent_client_secret: e, stripe_payment_intent_payment_method_id: t } = (
            await s.Bo.get({
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
            { stripeConfirmPayment: a, paymentMethod: o } = this.handlerRegistry.constructStripeConfirmPaymentHandler({
                stripe: r,
                paymentSource: this.paymentSource,
                paymentMethodId: i,
            }),
            { paymentIntent: l, error: u } = await a(
                t,
                {
                    payment_method: o,
                    return_url:
                        (0, s.TP)() +
                        S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(this.paymentSourceType, n ?? "", "success"),
                },
                { handleActions: !1 },
            );
        if (null != u) throw y(u);
        if (null == l) throw y("paymentIntent not available with successful api call");
        if (l.next_action?.redirect_to_url?.url == null) throw y("confirm payment did not return a redirect url");
        return l.next_action.redirect_to_url.url;
    }
    async confirmRedirectedPaymentSource(e) {
        let { clientSecret: t, paymentMethodId: n } = e,
            i = await v(this.paymentSourceType),
            r = await this.getStripeRedirect({ clientSecret: t, state: i, paymentMethodId: n });
        this.performRedirect(r);
    }
    async confirmDirectPaymentSource(e) {
        let { clientSecret: t, paymentMethodId: n } = e,
            i = await this.getStripe(),
            {
                stripeConfirmPayment: r,
                paymentMethod: s,
                pendingCustomerAction: a,
            } = this.handlerRegistry.constructStripeConfirmPaymentHandler({
                stripe: i,
                paymentSource: this.paymentSource,
                paymentMethodId: n,
            }),
            { paymentIntent: o, error: l } = await r(t, { payment_method: s });
        if (null != l) throw y(l);
        if (null == o) throw y("paymentIntent not available with successful stripe call");
        return { pendingCustomerAction: a };
    }
    async confirmPayment() {
        let { clientSecret: e, paymentMethodId: t } = await this.getPaymentIntentInfo();
        if ("stripe_redirect_confirmation" === this.handlerRegistry.confirmationType)
            return (
                await this.confirmRedirectedPaymentSource({ clientSecret: e, paymentMethodId: t }),
                { redirectConfirmation: !0 }
            );
        {
            let { pendingCustomerAction: n } = await this.confirmDirectPaymentSource({
                clientSecret: e,
                paymentMethodId: t,
            });
            return { redirectConfirmation: !1, pendingCustomerAction: n };
        }
    }
}
class et extends J {
    constructor(e, t) {
        if (null == e) throw y("Payment source cannot be null on a redirect.");
        super(e, t);
    }
    handleAdyenConfirmation() {
        let e = this.payment.adyen_redirect_url;
        if (null == e) throw y("redirect url cannot be null on a redirect for adyen.");
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
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
    try {
        await s.Bo.del({ url: S.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: e });
    } catch (t) {
        let e = new o.Ey(t);
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: e }), e);
    }
}
async function er(e, t) {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
    try {
        let {
                billingAddress: { line1: n, line2: i, postalCode: r, ...o },
            } = t,
            l = await s.Bo.patch({
                url: S.Rsh.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: { ...o, line_1: n, line_2: i, postal_code: r },
                    expires_month: t.expiresMonth,
                    expires_year: t.expiresYear,
                    default: t.isDefault,
                },
                rejectWithError: !1,
            }),
            d = u.Ay.createFromServer(l.body);
        a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: d });
    } catch (t) {
        let e = (0, l.Wd)(t);
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL", error: e }), e);
    }
}
async function es() {
    if (!d.A.isPaymentSourceFetching)
        try {
            let e = s.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCES, oldFormErrors: !0, rejectWithError: !1 });
            a.h.wait(() => a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: e }));
            let t = await e;
            return a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: t.body }), t;
        } catch (e) {
            return a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" }), null;
        }
}
async function ea(e) {
    try {
        let t = s.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = await t,
            i = u.Ay.createFromServer(n.body);
        return a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: i }), n;
    } catch (e) {
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" }), e);
    }
}
async function eo(e) {
    a.h.dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId: e });
    try {
        let t = await s.Bo.get({
                url: S.Rsh.BILLING_WALLET_INFORMATION(e),
                query: { get_history: !1 },
                rejectWithError: !0,
            }),
            n = { currency: t.body.currency, amount: t.body.balance };
        return (
            a.h.dispatch({
                type: "BILLING_WALLET_BALANCE_FETCH_SUCCESS",
                paymentSourceId: e,
                currency: n.currency,
                amount: n.amount,
            }),
            n
        );
    } catch (t) {
        return a.h.dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_FAIL", paymentSourceId: e }), null;
    }
}
async function el(e) {
    let t = await s.Bo.get({ url: S.Rsh.BILLING_PAYMENT(e), rejectWithError: !0 });
    return a.h.dispatch({ type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: t.body }), t;
}
async function eu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        t = arguments.length > 1 ? arguments[1] : void 0;
    a.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
    try {
        let n = await s.Bo.get({
            url: S.Rsh.BILLING_PAYMENTS,
            query: { limit: e, before: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return a.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: n.body }), n;
    } catch (e) {
        throw (a.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" }), e);
    }
}
async function ed() {
    a.h.wait(() => {
        a.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = en.En.ADD_PERKS_IF_DETECTED,
            t = c.A.getLastLazyPerkSync();
        (null == t || r()().diff(t, "hours") >= 1) && ((e = en.En.FULL_RESYNC), (t = r()()));
        let n = await s.Bo.get({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            oldFormErrors: !0,
            rejectWithError: !1,
            query: { sync_level: e },
        });
        if (null == n.body) throw new o.Ey(`response body is null, response: ${JSON.stringify(n)}`, n.status);
        return (
            a.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: n.body, lastLazyPerkSync: t }), n
        );
    } catch (e) {
        throw (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_FAIL" }), e);
    }
}
async function ec() {
    a.h.wait(() => {
        a.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = await s.Bo.get({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 2, exclude_unpaid_statuses: !0, subscription_type: b.rz.PREMIUM },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return (
            e.ok
                ? (a.h.dispatch({
                      type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                      subscription: e.body.length > 0 ? e.body[0] : null,
                  }),
                  a.h.dispatch({
                      type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                      subscription: e.body.length > 1 ? e.body[1] : null,
                  }))
                : a.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" }),
            e
        );
    } catch (e) {
        a.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" });
    }
}
async function e_(e) {
    let {
        items: t,
        paymentSource: n,
        trialId: i,
        code: r,
        currency: u,
        metadata: d,
        referralCode: c,
        loadId: _,
        expectedInvoicePrice: p,
        expectedRenewalPrice: m,
    } = e;
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" }), (t = (0, f.qn)(t));
    let g = null;
    if (null != n && b.Kc.has(n.type)) {
        let e = await v(n.type);
        g = (0, s.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let e = await s.Bo.post({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            body: {
                items: t.map((e) => {
                    let { planId: t, quantity: n } = e;
                    return { plan_id: t, quantity: n };
                }),
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await Z(n) : null,
                trial_id: i,
                return_url: g,
                code: r,
                currency: null != n ? u : b.Yr.USD,
                metadata: d,
                gateway_checkout_context: await (0, h.ob)(n),
                purchase_token: (0, E.r)(),
                referral_code: c,
                load_id: _,
                expected_invoice_price: p,
                expected_renewal_price: m,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: e.body }),
            { subscription: e.body, redirectConfirmation: !1 }
        );
    } catch (t) {
        let e = t instanceof o.Ey ? t : new o.Ey(t);
        if (
            (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }),
            e.code !== l.tG.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!t.body.payment_id) throw y("payment id cannot be null on redirected confirmations.");
        return ef(t.body, n);
    }
}
async function eh(e, t, n, i, r) {
    let u = null;
    if (null != n && b.AD.has(n.type)) {
        let e = await v(n.type);
        u = (0, s.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let o = await s.Bo.post({
            url: S.Rsh.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
            body: {
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await Z(n) : null,
                return_url: u,
                currency: i,
                purchase_token: (0, E.r)(),
                load_id: r,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: o.body }),
            { subscription: o.body, redirectConfirmation: S.CmT.has(n.type) }
        );
    } catch (t) {
        let e = t instanceof o.Ey ? t : new o.Ey(t);
        if (e.code !== l.tG.CONFIRMATION_REQUIRED)
            throw (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
        if (!t.body.payment_id) throw y("payment id cannot be null on redirected confirmations.");
        return ef(t.body, n);
    }
}
function ef(e, t) {
    return null != t && b.Kc.has(t.type) ? new et(t, e).confirmPayment() : new ee(t, e).confirmPayment();
}
async function eE(e, t, n) {
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
    try {
        let i = await s.Bo.del({
            url: S.Rsh.BILLING_SUBSCRIPTION(e),
            query: { location: n, location_stack: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return a.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" }), i;
    } catch (t) {
        let e = new o.Ey(t);
        throw (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_FAIL", error: e }), e);
    }
}
function ep(e, t) {
    return em(
        e,
        { items: e.items },
        { amount: 0, currency: e.currency },
        (0, f.UC)(e.items, e.currency, e.paymentSourceId),
        t,
    );
}
async function em(e, t, n, i, r, u, d) {
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    try {
        let o = {
            status: t.status,
            payment_source_id: t.paymentSource?.id,
            payment_source_token: null != t.paymentSource ? await Z(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, h.ob)(t.paymentSource),
            load_id: d,
            pause_duration: t.pauseDuration,
            purchase_token: (0, E.r)(),
            expected_invoice_price: n,
            expected_renewal_price: i,
        };
        if (null != t.paymentSource && b.Kc.has(t.paymentSource.type)) {
            let e = await v(t.paymentSource.type);
            o.return_url =
                (0, s.TP)() +
                S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, e ?? "", "success");
        }
        null != t.items &&
            (o.items = (0, f.qn)(t.items).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }));
        let l = await s.Bo.patch({
            url: S.Rsh.BILLING_SUBSCRIPTION(e.id),
            query: { location: u, location_stack: r },
            body: o,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: l.body }),
            { subscription: l.body, redirectConfirmation: !1 }
        );
    } catch (n) {
        let e = n instanceof o.Ey ? n : new o.Ey(n);
        if (
            (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }),
            e.code !== l.tG.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!n.body.payment_id) throw y("payment id cannot be null on redirected confirmations.");
        return ef(n.body, t.paymentSource);
    }
}
function eg(e, t, n, i, r) {
    return em(
        e,
        { status: S.Dmq.ACTIVE, paymentSource: n, currency: i },
        { amount: 0, currency: e.currency },
        (0, f.UC)(e.items, e.currency, n?.id),
        t,
        r,
    );
}
function eA(e, t, n, i, r, s) {
    let a = (0, f.GX)(e, t);
    return em(e, { status: S.Dmq.ACTIVE, items: a }, n, i, r, s);
}
function eI(e, t, n, i, r) {
    return em(e, { currency: t }, { amount: 0, currency: t.toLowerCase() }, n, i, r);
}
function eT(e, t, n, i, r) {
    return em(e, { paymentSource: t }, { amount: 0, currency: n.currency }, n, i, r);
}
function eS() {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
}
function eN() {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
}
async function eC(e) {
    await s.Bo.post({ url: S.Rsh.BILLING_PAYMENTS_VOID(e), oldFormErrors: !0, rejectWithError: !1 });
}
function ey(e) {
    let { paymentSourceType: t, state: n, path: i, query: r, insecure: o } = e;
    return (
        a.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType: t }),
        s.Bo.post({
            url: S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: { state: n, path: i, query: r, insecure: o },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => (a.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType: t }), e))
    );
}
async function ev() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != d.A.ipCountryCodeRequest) return d.A.ipCountryCodeRequest;
    try {
        let e = s.Bo.get({ url: S.Rsh.BILLING_COUNTRY_CODE, rejectWithError: !1 });
        a.h.wait(() => a.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: e }));
        let t = await e,
            n = t.body.country_code;
        return a.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }), t;
    } catch (e) {
        return a.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" }), e;
    }
}
function eR() {
    a.h.dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" }),
        s.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                let t = e.body;
                null == t
                    ? a.h.dispatch({
                          type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL",
                          error: Error("Missing response body"),
                      })
                    : a.h.dispatch({
                          type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS",
                          data: {
                              store_country: t.store_country ?? null,
                              allowed_payment_source_types: t.allowed_payment_source_types ?? [],
                              allowed_billing_address_countries: t.allowed_billing_address_countries ?? [],
                          },
                      });
            })
            .catch((e) => {
                a.h.dispatch({
                    type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL",
                    error: e instanceof Error ? e : Error(String(e)),
                });
            });
}
async function eO() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != d.A.ipLocationRequest) return d.A.ipLocationRequest;
    try {
        let e = s.Bo.get({ url: S.Rsh.BILLING_LOCATION, rejectWithError: !1 });
        a.h.wait(() => a.h.dispatch({ type: "BILLING_IP_LOCATION_FETCH_START", request: e }));
        let t = await e,
            n = t.body.country_code,
            i = t.body.subdivision_code;
        return (
            a.h.dispatch({ type: "BILLING_SET_IP_LOCATION", location: { countryCode: n, subdivisionCode: i } }),
            a.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }),
            t
        );
    } catch (e) {
        return (
            _.default.track(S.HAw.BILLING_IP_LOCATION_FETCH_ERROR, { error_message: e.message }),
            a.h.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" }),
            e
        );
    }
}
function eb() {
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
}
function eL(e) {
    a.h.dispatch({ type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId: e });
}
async function eD(e, t) {
    try {
        let n = await s.Bo.post({ url: S.Rsh.REACTIVATION_OFFER_REDEEM(e.id, t.id), rejectWithError: !1 });
        a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: n.body }),
            a.h.dispatch({ type: "BILLING_USER_OFFER_REDEEMED", offerId: t.id });
    } catch (t) {
        let e = t instanceof o.Ey ? t : new o.Ey(t);
        throw (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
    }
}
async function eP(e) {
    try {
        await s.Bo.post({ url: S.Rsh.USER_OFFER_REDEEM, body: { user_discount_offer_id: e.id }, rejectWithError: !0 }),
            a.h.dispatch({ type: "BILLING_USER_OFFER_REDEEMED", offerId: e.id });
    } catch (e) {
        throw e instanceof o.Ey ? e : new o.Ey(e);
    }
}
