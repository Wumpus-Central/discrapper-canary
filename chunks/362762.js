"use strict";
n.d(t, {
    $M: () => U,
    $c: () => V,
    A8: () => k,
    EB: () => v,
    Ez: () => H,
    TD: () => N,
    Tv: () => M,
    YB: () => D,
    YJ: () => S,
    Z9: () => y,
    bw: () => P,
    dr: () => B,
    im: () => L,
    jV: () => F,
    ne: () => T,
    u1: () => x,
    u6: () => w,
});
var r = n(342393),
    i = n(284009),
    s = n.n(i),
    a = n(562465),
    o = n(73153),
    l = n(198982),
    u = n(136857),
    c = n(626584),
    d = n(71532),
    _ = n(895313),
    f = n(219538),
    p = n(652215),
    h = n(818348),
    m = n(985018);
let E = new c.A("BillingPaymentGatewayActionCreators.tsx");
async function g(e) {
    let { stripe_payment_intent_client_secret: t } = (
        await a.Bo.get({ url: p.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return t;
}
async function A(e) {
    let { stripe_payment_intent_client_secret: t, stripe_payment_intent_payment_method_id: n } = (
        await a.Bo.get({ url: p.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return { clientSecret: t, paymentMethodId: n };
}
function I(e) {
    return p.DYY.has(e.type) ? null : JSON.stringify({ type: h.Kc.get(e.type) ?? null });
}
function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.intl.string(m.t.khEaRI);
    return (0, _.i0)(e, t, n, { tags: { source: "payment_elements" } });
}
async function S(e, t) {
    if (null == e || null == t) throw (0, _.i0)("Stripe or elements not loaded");
    let n = t.getElement(r.CardNumberElement);
    if (null == n) throw (0, _.i0)("Unable to load card elements from Stripe");
    let { token: i, error: s } = await e.createToken(n);
    if (null != s) throw (0, _.i0)(s);
    if (null == i) throw (0, _.i0)("token not available with successful stripe call");
    return i.id;
}
async function y(e, t, n, r) {
    if (null == e) throw (0, _.i0)("Stripe not loaded");
    if (null == t) throw (0, _.i0)("Bank required for EPS");
    let { email: i, name: s, line1: a, line2: l, city: u, state: c, postalCode: d, country: f } = n;
    if (null == s) throw (0, _.i0)("Name required for EPS");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let h = await (0, _.tj)(n),
        { paymentMethod: m, error: E } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: a, line2: l, city: u, state: c, postal_code: d, country: f },
                name: s,
                email: i,
            },
        });
    if (null != E) throw (0, _.i0)(E);
    if (null == m) throw (0, _.i0)("paymentMethod not available with successful stripe call");
    return (0, _.K8)(p.kM_.STRIPE, m.id, n, { billingAddressToken: h, analyticsLocation: r, bank: t });
}
async function v(e, t, n) {
    if (null == e) throw (0, _.i0)("Stripe not loaded");
    let { email: r, name: i, line1: s, line2: a, city: l, state: u, postalCode: c, country: d } = t;
    if (null == i) throw (0, _.i0)("Name required for iDEAL");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await (0, _.tj)(t),
        { paymentMethod: h, error: m } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: { line1: s, line2: a, city: l, state: u, postal_code: c, country: d },
                name: i,
                email: r,
            },
        });
    if (null != m) throw (0, _.i0)(m);
    if (null == h) throw (0, _.i0)("paymentMethod not available with successful stripe call");
    return (0, _.K8)(p.kM_.STRIPE, h.id, t, { billingAddressToken: f, analyticsLocation: n });
}
async function N(e, t, n, r) {
    if (null == e) throw (0, _.i0)("Stripe not loaded");
    let { email: i, name: s, line1: a, line2: l, city: u, state: c, postalCode: d, country: f } = n;
    if (null == i) throw (0, _.i0)("Email required for Przelewy24");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let h = await (0, _.tj)(n),
        m = t.p24Bank,
        { paymentMethod: E, error: g } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: m },
            billing_details: {
                address: { line1: a, line2: l, city: u, state: c, postal_code: d, country: f },
                name: s,
                email: i,
            },
        });
    if (null != g) throw (0, _.i0)(g);
    if (null == E) throw (0, _.i0)("paymentMethod not available with successful stripe call");
    return (0, _.K8)(p.kM_.STRIPE, E.id, n, { billingAddressToken: h, analyticsLocation: r, bank: m });
}
let C = (e, t, n) => {
        if (null != t) throw n(t);
        if (null == e) throw n("SetupIntent not created");
        if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
        return (
            s()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
            { setupIntent: e, error: t }
        );
    },
    R = (e) =>
        null != e &&
        "setup_intent_unexpected_state" === e.code &&
        null != e.setup_intent &&
        "succeeded" === e.setup_intent.status,
    O = async (e) => {
        if (null == e) throw T("Stripe Elements not loaded", !0);
        let t = await e.submit();
        if ((E.info("Stripe Elements submit response: ", t), null != t.error))
            throw (E.error("Stripe Elements submit error: ", t.error), T(t.error, !0));
        return t;
    },
    b = async (e, t) => {
        let { paymentMethod: n, error: r } = await e.createPaymentMethod({ elements: t });
        if (null != r) throw (E.error("Stripe createPaymentMethod error: ", r), T(r, !0));
        if (null == n)
            throw (
                (E.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: n, error: r }),
                T("paymentMethod not available with successful stripe call", !0))
            );
        return { paymentMethod: n, error: r };
    },
    D = async (e, t) => {
        if (null == e) throw T("Stripe not loaded", !0);
        if (null == t) throw T("Stripe Elements not loaded", !0);
        await O(t);
        let { paymentMethod: n, error: r } = await b(e, t);
        return { paymentMethod: n, error: r };
    };
async function L() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, i, { billingAddress: s, paymentSourceType: a, lastConfirmedSetupIntentRef: l }, u] = t;
    if (null == r) throw T("Stripe not loaded", !0);
    if (null == i) throw T("Stripe Elements not loaded", !0);
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let c = await (0, _.tj)(s);
    a !== h.he.PAYMENT_REQUEST && (await O(i));
    let d = null;
    if (a === h.he.CARD || a === h.he.PAYMENT_REQUEST) {
        let e = l.current ?? void 0,
            t =
                null != e && a === h.he.PAYMENT_REQUEST
                    ? { setupIntent: e ?? void 0, error: void 0 }
                    : await r.confirmSetup({ redirect: "if_required", elements: i });
        if (R(t.error) && a !== h.he.PAYMENT_REQUEST) {
            let { client_secret: e } = await (0, f.w)();
            await O(i), (t = await r.confirmSetup({ redirect: "if_required", clientSecret: e, elements: i }));
        }
        let { setupIntent: n } = C(t.setupIntent, t.error, (e) => T(e, !0));
        (l.current = n), (d = n.payment_method);
    } else {
        let { paymentMethod: e } = await b(r, i);
        d = e.id;
    }
    return (0, _.K8)(p.kM_.STRIPE, d, s, { billingAddressToken: c, analyticsLocation: u });
}
async function w(e, t, n, r) {
    if (null == e || null == t) throw (0, _.i0)("Stripe or token not loaded");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let i = null;
    try {
        i = (await (0, f.r)()).client_secret;
    } catch (e) {
        throw (0, _.i0)(e);
    }
    let s = await (0, _.tj)(n),
        a = d._Z(n),
        { setupIntent: l, error: u } = await e.confirmCardSetup(i, {
            payment_method: { card: { token: t }, billing_details: a },
        }),
        { setupIntent: c } = C(l, u, (e) => (0, _.i0)(e));
    return (0, _.K8)(p.kM_.STRIPE, c.payment_method, n, { billingAddressToken: s, analyticsLocation: r });
}
function M(e, t, n) {
    let { token: r, billingAddressInfo: i } = d.uK(e);
    return (0, _.K8)(p.kM_.STRIPE, r, t ?? i, { analyticsLocation: n });
}
function x(e, t, n) {
    return (0, _.K8)(p.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function P(e, t, n, r) {
    if (null == e) throw (0, _.i0)("Stripe not loaded");
    let i = await (0, _.tj)(t),
        { name: a, line1: o, line2: l, city: u, state: c, postalCode: d, country: f } = t,
        m = h.kv.get(n);
    s()(null != m, "unsupported payment method type");
    let E = {
            type: m,
            billing_details: {
                address: { line1: o, line2: l, city: u, state: c, postal_code: d, country: f },
                name: a,
            },
        },
        { paymentMethod: g, error: A } = await e.createPaymentMethod(E);
    if (null != A) throw (0, _.i0)(A);
    if (null == g) throw (0, _.i0)("stripePaymentMethod not available with successful stripe call");
    return (0, _.K8)(p.kM_.STRIPE, g.id, t, { billingAddressToken: i, analyticsLocation: r });
}
async function k(e, t, n) {
    let r = await (0, _.tj)(e),
        i = { type: h.Kc.get(t) };
    return (0, _.K8)(p.kM_.ADYEN, JSON.stringify(i), e, { billingAddressToken: r, analyticsLocation: n });
}
async function U(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = await (0, _.tj)(e),
        c = { type: h.Kc.get(t), ...(r?.paymentMethod ?? {}) },
        d = await (0, _.jf)(t),
        f = (0, a.TP)() + p.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, d ?? "", "success");
    try {
        return {
            paymentSource: await (0, _.K8)(
                p.kM_.ADYEN,
                JSON.stringify(c),
                e,
                { billingAddressToken: s, analyticsLocation: n, returnUrl: f },
                i,
            ),
            redirectConfirmation: !1,
        };
    } catch (t) {
        if (t.code !== u.tG.CONFIRMATION_REQUIRED)
            throw (
                (o.h.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: new l.Ey(
                        `Unable to create payment source token: code: ${t?.code} message: ${t?.message}`,
                        l.Ey.ErrorCodes.UNKNOWN,
                    ),
                }),
                t)
            );
        let e = t.fields.adyen_redirect_url;
        if (null == e) throw (0, _.i0)("redirect url cannot be null on a redirect for adyen.");
        return j(e), { redirectConfirmation: !0 };
    }
}
async function G(e) {
    if (p.DYY.has(e.type)) return null;
    let t = await d.Cv();
    if (null == t) throw new l.Ey("Stripe not loaded", l.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: r, line1: i, line2: a, city: o, state: u, postalCode: c, country: _ } = e.billingAddress,
        f = {
            billing_details: {
                address: { line1: i, line2: a, city: o, state: u, postal_code: c, country: _ },
                name: r,
            },
        };
    switch (e.type) {
        case h.he.GIROPAY:
            f.type = "giropay";
            break;
        case h.he.SOFORT:
            (f.type = "sofort"), (f.sofort = { country: _ ?? "" }), (f.billing_details.email = n);
            break;
        case h.he.BANCONTACT:
            f.type = "bancontact";
            break;
        case h.he.IDEAL:
            (f.type = "ideal"), (f.ideal = { bank: e.bank });
            break;
        case h.he.PRZELEWY24:
            if (null == e.bank) throw new l.Ey("p24 missing bank information", l.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (f.type = "p24"), (f.p24 = { bank: e.bank }), (f.billing_details.email = e.email);
            break;
        case h.he.EPS:
            if (null == e.bank) throw new l.Ey("EPS missing bank information", l.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (f.type = "eps"), (f.eps = { bank: e.bank });
    }
    s()(null != f.type, "unsupported payment method type");
    let { paymentMethod: m, error: E } = await t.createPaymentMethod(f);
    if (null != E || null == m)
        throw new l.Ey(
            `Unable to create payment source token: code: ${E?.code} message: ${E?.message}`,
            l.Ey.ErrorCodes.UNKNOWN,
        );
    return m.id;
}
function F(e) {
    return p.DYY.has(e.type) ? null : h.Kc.has(e.type) ? I(e) : G(e);
}
async function V(e, t) {
    if (null == e) throw (0, _.i0)("redirect url cannot be null on a redirect for adyen.");
    if (null == t) throw (0, _.i0)("Payment source cannot be null on a redirect.");
    return p.CmT.has(t.type)
        ? (j(e), { redirectConfirmation: !0, redirectURL: e })
        : { redirectConfirmation: !1, redirectURL: e };
}
async function B(e, t) {
    let n = await d.Cv();
    if (null == t) throw (0, _.i0)("Payment source cannot be null on a redirect.");
    let { clientSecret: r, paymentMethodId: i } = await A(e);
    if (null == n) throw (0, _.i0)("Stripe cannot be null on a redirect.");
    if (p.CmT.has(t.type)) {
        let e = await (0, _.jf)(t.type);
        return j(await W({ stripe: n, paymentSource: t, clientSecret: r, state: e })), { redirectConfirmation: !0 };
    }
    return await Y({ stripe: n, clientSecret: r, paymentMethodId: i, paymentSource: t }), { redirectConfirmation: !1 };
}
async function H(e) {
    let t = await d.Cv();
    if (null == t) throw (0, _.i0)("Stripe has not loaded.");
    if (null == e) throw (0, _.i0)("payment intent id cannot be null.");
    let n = await g(e),
        { paymentIntent: r, error: i } = await t.retrievePaymentIntent(n);
    if (null != i) throw (0, _.i0)(i);
    if (null == r) throw (0, _.i0)("paymentIntent not available with successful stripe call");
    if (null != r.last_payment_error) throw (0, _.i0)(`unable to retrieve payment intent ${r.last_payment_error}`);
    return !0;
}
function j(e) {
    window.open(e);
}
async function Y(e) {
    let t,
        { stripe: n, paymentSource: r, paymentMethodId: i, clientSecret: s } = e,
        a = {};
    if (r.type === h.he.SEPA_DEBIT) {
        if (null == i) throw (0, _.i0)("On a sepa payment payment method id cannot be null");
        (a.payment_method = i), (t = n.confirmSepaDebitPayment);
    } else throw (0, _.i0)("Unsupported redirected payment source type.");
    let { paymentIntent: o, error: l } = await t(s, a);
    if (null != l) throw (0, _.i0)(l);
    if (null == o) throw (0, _.i0)("paymentIntent not available with successful stripe call");
}
async function W(e) {
    let t,
        { stripe: n, paymentSource: r, clientSecret: i, state: s } = e,
        o = {};
    switch (r.type) {
        case h.he.GIROPAY:
            (o = { billing_details: { name: r.billingAddress.name } }), (t = n.confirmGiropayPayment);
            break;
        case h.he.BANCONTACT:
            (o = { billing_details: { name: r.billingAddress.name, email: r.email } }),
                (t = n.confirmBancontactPayment);
            break;
        case h.he.SOFORT:
            (o = {
                sofort: { country: r.billingAddress.country },
                billing_details: { name: r.billingAddress.name, email: r.email },
            }),
                (t = n.confirmSofortPayment);
            break;
        case h.he.PRZELEWY24:
            if (null == r.bank) throw (0, _.i0)(`PaymentSource (${r.id}) missing bank info for p24.`);
            (o = { p24: { bank: r.bank }, billing_details: { name: r.billingAddress.name, email: r.email } }),
                (t = n.confirmP24Payment);
            break;
        case h.he.EPS:
            if (null == r.bank) throw (0, _.i0)(`PaymentSource (${r.id}) missing bank info for EPS.`);
            (o = { eps: { bank: r.bank }, billing_details: { name: r.billingAddress.name } }),
                (t = n.confirmEpsPayment);
            break;
        case h.he.IDEAL:
            (o = { ideal: {}, billing_details: { name: r.billingAddress.name } }),
                null != r.bank && (o.ideal = { bank: r.bank }),
                (t = n.confirmIdealPayment);
            break;
        default:
            throw (0, _.i0)("Unsupported redirected payment source type.");
    }
    let { paymentIntent: l, error: u } = await t(
        i,
        {
            payment_method: o,
            return_url: (0, a.TP)() + p.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, s ?? "", "success"),
        },
        { handleActions: !1 },
    );
    if (null != u) throw (0, _.i0)(u);
    if (null == l) throw (0, _.i0)("paymentIntent not available with successful api call");
    if (l.next_action?.redirect_to_url?.url == null) throw (0, _.i0)("confirm payment did not return a redirect url");
    return l.next_action.redirect_to_url.url;
}
