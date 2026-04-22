"use strict";
n.d(t, {
    $M: () => U,
    $c: () => G,
    A8: () => P,
    EB: () => y,
    Ez: () => F,
    TD: () => N,
    Tv: () => L,
    YB: () => C,
    YJ: () => T,
    Z9: () => S,
    bw: () => M,
    dr: () => V,
    im: () => b,
    jV: () => x,
    ne: () => I,
    u1: () => w,
    u6: () => D,
});
var r = n(342393),
    i = n(284009),
    s = n.n(i),
    a = n(562465),
    o = n(73153),
    l = n(198982),
    u = n(136857),
    d = n(626584),
    c = n(71532),
    _ = n(895313),
    f = n(219538),
    E = n(652215),
    h = n(818348),
    p = n(985018);
let m = new d.A("BillingPaymentGatewayActionCreators.tsx");
async function g(e) {
    let { stripe_payment_intent_client_secret: t } = (
        await a.Bo.get({ url: E.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return t;
}
async function A(e) {
    let { stripe_payment_intent_client_secret: t, stripe_payment_intent_payment_method_id: n } = (
        await a.Bo.get({ url: E.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return { clientSecret: t, paymentMethodId: n };
}
function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.intl.string(p.t.khEaRI);
    return (0, _.i0)(e, t, n, { tags: { source: "payment_elements" } });
}
async function T(e, t) {
    if (null == e || null == t) throw (0, _.i0)("Stripe or elements not loaded");
    let n = t.getElement(r.CardNumberElement);
    if (null == n) throw (0, _.i0)("Unable to load card elements from Stripe");
    let { token: i, error: s } = await e.createToken(n);
    if (null != s) throw (0, _.i0)(s);
    if (null == i) throw (0, _.i0)("token not available with successful stripe call");
    return i.id;
}
async function S(e, t, n, r) {
    if (null == e) throw (0, _.i0)("Stripe not loaded");
    if (null == t) throw (0, _.i0)("Bank required for EPS");
    let { email: i, name: s, line1: a, line2: l, city: u, state: d, postalCode: c, country: f } = n;
    if (null == s) throw (0, _.i0)("Name required for EPS");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let h = await (0, _.tj)(n),
        { paymentMethod: p, error: m } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: a, line2: l, city: u, state: d, postal_code: c, country: f },
                name: s,
                email: i,
            },
        });
    if (null != m) throw (0, _.i0)(m);
    if (null == p) throw (0, _.i0)("paymentMethod not available with successful stripe call");
    return (0, _.K8)(E.kM_.STRIPE, p.id, n, { billingAddressToken: h, analyticsLocation: r, bank: t });
}
async function y(e, t, n) {
    if (null == e) throw (0, _.i0)("Stripe not loaded");
    let { email: r, name: i, line1: s, line2: a, city: l, state: u, postalCode: d, country: c } = t;
    if (null == i) throw (0, _.i0)("Name required for iDEAL");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await (0, _.tj)(t),
        { paymentMethod: h, error: p } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: { line1: s, line2: a, city: l, state: u, postal_code: d, country: c },
                name: i,
                email: r,
            },
        });
    if (null != p) throw (0, _.i0)(p);
    if (null == h) throw (0, _.i0)("paymentMethod not available with successful stripe call");
    return (0, _.K8)(E.kM_.STRIPE, h.id, t, { billingAddressToken: f, analyticsLocation: n });
}
async function N(e, t, n, r) {
    if (null == e) throw (0, _.i0)("Stripe not loaded");
    let { email: i, name: s, line1: a, line2: l, city: u, state: d, postalCode: c, country: f } = n;
    if (null == i) throw (0, _.i0)("Email required for Przelewy24");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let h = await (0, _.tj)(n),
        p = t.p24Bank,
        { paymentMethod: m, error: g } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: p },
            billing_details: {
                address: { line1: a, line2: l, city: u, state: d, postal_code: c, country: f },
                name: s,
                email: i,
            },
        });
    if (null != g) throw (0, _.i0)(g);
    if (null == m) throw (0, _.i0)("paymentMethod not available with successful stripe call");
    return (0, _.K8)(E.kM_.STRIPE, m.id, n, { billingAddressToken: h, analyticsLocation: r, bank: p });
}
let O = (e, t, n) => {
        if (null != t) throw n(t);
        if (null == e) throw n("SetupIntent not created");
        if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
        return (
            s()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
            { setupIntent: e, error: t }
        );
    },
    R = async (e) => {
        if (null == e) throw I("Stripe Elements not loaded", !0);
        let t = await e.submit();
        if ((m.info("Stripe Elements submit response: ", t), null != t.error))
            throw (m.error("Stripe Elements submit error: ", t.error), I(t.error, !0));
        return t;
    },
    v = async (e, t) => {
        let { paymentMethod: n, error: r } = await e.createPaymentMethod({ elements: t });
        if (null != r) throw (m.error("Stripe createPaymentMethod error: ", r), I(r, !0));
        if (null == n)
            throw (
                (m.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: n, error: r }),
                I("paymentMethod not available with successful stripe call", !0))
            );
        return { paymentMethod: n, error: r };
    },
    C = async (e, t) => {
        if (null == e) throw I("Stripe not loaded", !0);
        if (null == t) throw I("Stripe Elements not loaded", !0);
        await R(t);
        let { paymentMethod: n, error: r } = await v(e, t);
        return { paymentMethod: n, error: r };
    };
async function b() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, i, { billingAddress: s, paymentSourceType: a, lastConfirmedSetupIntentRef: l }, u] = t;
    if (null == r) throw I("Stripe not loaded", !0);
    if (null == i) throw I("Stripe Elements not loaded", !0);
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let d = await (0, _.tj)(s);
    a !== h.he.PAYMENT_REQUEST && (await R(i));
    let c = null;
    if (a === h.he.CARD || a === h.he.PAYMENT_REQUEST) {
        let e,
            t = l.current ?? void 0,
            n =
                null != t && a === h.he.PAYMENT_REQUEST
                    ? { setupIntent: t ?? void 0, error: void 0 }
                    : await r.confirmSetup({ redirect: "if_required", elements: i });
        if (
            null != (e = n.error) &&
            "setup_intent_unexpected_state" === e.code &&
            null != e.setup_intent &&
            "succeeded" === e.setup_intent.status &&
            a !== h.he.PAYMENT_REQUEST
        ) {
            let { client_secret: e } = await (0, f.w)();
            await R(i), (n = await r.confirmSetup({ redirect: "if_required", clientSecret: e, elements: i }));
        }
        let { setupIntent: s } = O(n.setupIntent, n.error, (e) => I(e, !0));
        (l.current = s), (c = s.payment_method);
    } else {
        let { paymentMethod: e } = await v(r, i);
        c = e.id;
    }
    return (0, _.K8)(E.kM_.STRIPE, c, s, { billingAddressToken: d, analyticsLocation: u });
}
async function D(e, t, n, r) {
    if (null == e || null == t) throw (0, _.i0)("Stripe or token not loaded");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let i = null;
    try {
        i = (await (0, f.r)()).client_secret;
    } catch (e) {
        throw (0, _.i0)(e);
    }
    let s = await (0, _.tj)(n),
        a = c._Z(n),
        { setupIntent: l, error: u } = await e.confirmCardSetup(i, {
            payment_method: { card: { token: t }, billing_details: a },
        }),
        { setupIntent: d } = O(l, u, (e) => (0, _.i0)(e));
    return (0, _.K8)(E.kM_.STRIPE, d.payment_method, n, { billingAddressToken: s, analyticsLocation: r });
}
function L(e, t, n) {
    let { token: r, billingAddressInfo: i } = c.uK(e);
    return (0, _.K8)(E.kM_.STRIPE, r, t ?? i, { analyticsLocation: n });
}
function w(e, t, n) {
    return (0, _.K8)(E.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function M(e, t, n, r) {
    if (null == e) throw (0, _.i0)("Stripe not loaded");
    let i = await (0, _.tj)(t),
        { name: a, line1: o, line2: l, city: u, state: d, postalCode: c, country: f } = t,
        p = h.kv.get(n);
    s()(null != p, "unsupported payment method type");
    let { paymentMethod: m, error: g } = await e.createPaymentMethod({
        type: p,
        billing_details: { address: { line1: o, line2: l, city: u, state: d, postal_code: c, country: f }, name: a },
    });
    if (null != g) throw (0, _.i0)(g);
    if (null == m) throw (0, _.i0)("stripePaymentMethod not available with successful stripe call");
    return (0, _.K8)(E.kM_.STRIPE, m.id, t, { billingAddressToken: i, analyticsLocation: r });
}
async function P(e, t, n) {
    let r = await (0, _.tj)(e),
        i = { type: h.Kc.get(t) };
    return (0, _.K8)(E.kM_.ADYEN, JSON.stringify(i), e, { billingAddressToken: r, analyticsLocation: n });
}
async function U(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = await (0, _.tj)(e),
        d = { type: h.Kc.get(t), ...(r?.paymentMethod ?? {}) },
        c = await (0, _.jf)(t),
        f = (0, a.TP)() + E.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, c ?? "", "success");
    try {
        return {
            paymentSource: await (0, _.K8)(
                E.kM_.ADYEN,
                JSON.stringify(d),
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
        return B(e), { redirectConfirmation: !0 };
    }
}
async function k(e) {
    if (E.DYY.has(e.type)) return null;
    let t = await c.Cv();
    if (null == t) throw new l.Ey("Stripe not loaded", l.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: r, line1: i, line2: a, city: o, state: u, postalCode: d, country: _ } = e.billingAddress,
        f = {
            billing_details: {
                address: { line1: i, line2: a, city: o, state: u, postal_code: d, country: _ },
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
    let { paymentMethod: p, error: m } = await t.createPaymentMethod(f);
    if (null != m || null == p)
        throw new l.Ey(
            `Unable to create payment source token: code: ${m?.code} message: ${m?.message}`,
            l.Ey.ErrorCodes.UNKNOWN,
        );
    return p.id;
}
function x(e) {
    if (E.DYY.has(e.type)) return null;
    if (h.Kc.has(e.type)) return E.DYY.has(e.type) ? null : JSON.stringify({ type: h.Kc.get(e.type) ?? null });
    return k(e);
}
async function G(e, t) {
    if (null == e) throw (0, _.i0)("redirect url cannot be null on a redirect for adyen.");
    if (null == t) throw (0, _.i0)("Payment source cannot be null on a redirect.");
    return E.CmT.has(t.type)
        ? (B(e), { redirectConfirmation: !0, redirectURL: e })
        : { redirectConfirmation: !1, redirectURL: e };
}
async function V(e, t) {
    let n = await c.Cv();
    if (null == t) throw (0, _.i0)("Payment source cannot be null on a redirect.");
    let { clientSecret: r, paymentMethodId: i } = await A(e);
    if (null == n) throw (0, _.i0)("Stripe cannot be null on a redirect.");
    if (E.CmT.has(t.type)) {
        let e = await (0, _.jf)(t.type);
        return B(await Y({ stripe: n, paymentSource: t, clientSecret: r, state: e })), { redirectConfirmation: !0 };
    }
    return await H({ stripe: n, clientSecret: r, paymentMethodId: i, paymentSource: t }), { redirectConfirmation: !1 };
}
async function F(e) {
    let t = await c.Cv();
    if (null == t) throw (0, _.i0)("Stripe has not loaded.");
    if (null == e) throw (0, _.i0)("payment intent id cannot be null.");
    let n = await g(e),
        { paymentIntent: r, error: i } = await t.retrievePaymentIntent(n);
    if (null != i) throw (0, _.i0)(i);
    if (null == r) throw (0, _.i0)("paymentIntent not available with successful stripe call");
    if (null != r.last_payment_error) throw (0, _.i0)(`unable to retrieve payment intent ${r.last_payment_error}`);
    return !0;
}
function B(e) {
    window.open(e);
}
async function H(e) {
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
async function Y(e) {
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
            return_url: (0, a.TP)() + E.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, s ?? "", "success"),
        },
        { handleActions: !1 },
    );
    if (null != u) throw (0, _.i0)(u);
    if (null == l) throw (0, _.i0)("paymentIntent not available with successful api call");
    if (l.next_action?.redirect_to_url?.url == null) throw (0, _.i0)("confirm payment did not return a redirect url");
    return l.next_action.redirect_to_url.url;
}
