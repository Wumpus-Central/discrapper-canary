"use strict";
n.d(t, {
    $M: () => M,
    $c: () => G,
    A8: () => k,
    EB: () => N,
    Ez: () => F,
    TD: () => C,
    Tv: () => b,
    YB: () => v,
    YJ: () => T,
    Z9: () => S,
    bw: () => P,
    dr: () => V,
    im: () => D,
    jV: () => x,
    ne: () => I,
    u1: () => w,
    u6: () => L,
});
var i = n(342393),
    r = n(284009),
    s = n.n(r),
    a = n(636537),
    o = n(228366),
    l = n(845584),
    d = n(136857),
    _ = n(626584),
    u = n(71532),
    c = n(782331),
    E = n(219538),
    h = n(652215),
    m = n(818348),
    f = n(985018);
let g = new _.A("BillingPaymentGatewayActionCreators.tsx");
async function p(e) {
    let { stripe_payment_intent_client_secret: t } = (
        await a.Bo.get({ url: h.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return t;
}
async function A(e) {
    let { stripe_payment_intent_client_secret: t, stripe_payment_intent_payment_method_id: n } = (
        await a.Bo.get({ url: h.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return { clientSecret: t, paymentMethodId: n };
}
function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.intl.string(f.t.khEaRI);
    return (0, c.i0)(e, t, n, { tags: { source: "payment_elements" } });
}
async function T(e, t) {
    if (null == e || null == t) throw (0, c.i0)("Stripe or elements not loaded");
    let n = t.getElement(i.CardNumberElement);
    if (null == n) throw (0, c.i0)("Unable to load card elements from Stripe");
    let { token: r, error: s } = await e.createToken(n);
    if (null != s) throw (0, c.i0)(s);
    if (null == r) throw (0, c.i0)("token not available with successful stripe call");
    return r.id;
}
async function S(e, t, n, i) {
    if (null == e) throw (0, c.i0)("Stripe not loaded");
    if (null == t) throw (0, c.i0)("Bank required for EPS");
    let { email: r, name: s, line1: a, line2: l, city: d, state: _, postalCode: u, country: E } = n;
    if (null == s) throw (0, c.i0)("Name required for EPS");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let m = await (0, c.tj)(n),
        { paymentMethod: f, error: g } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: a, line2: l, city: d, state: _, postal_code: u, country: E },
                name: s,
                email: r,
            },
        });
    if (null != g) throw (0, c.i0)(g);
    if (null == f) throw (0, c.i0)("paymentMethod not available with successful stripe call");
    return (0, c.K8)(h.kM_.STRIPE, f.id, n, { billingAddressToken: m, analyticsLocation: i, bank: t });
}
async function N(e, t, n) {
    if (null == e) throw (0, c.i0)("Stripe not loaded");
    let { email: i, name: r, line1: s, line2: a, city: l, state: d, postalCode: _, country: u } = t;
    if (null == r) throw (0, c.i0)("Name required for iDEAL");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let E = await (0, c.tj)(t),
        { paymentMethod: m, error: f } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: { line1: s, line2: a, city: l, state: d, postal_code: _, country: u },
                name: r,
                email: i,
            },
        });
    if (null != f) throw (0, c.i0)(f);
    if (null == m) throw (0, c.i0)("paymentMethod not available with successful stripe call");
    return (0, c.K8)(h.kM_.STRIPE, m.id, t, { billingAddressToken: E, analyticsLocation: n });
}
async function C(e, t, n, i) {
    if (null == e) throw (0, c.i0)("Stripe not loaded");
    let { email: r, name: s, line1: a, line2: l, city: d, state: _, postalCode: u, country: E } = n;
    if (null == r) throw (0, c.i0)("Email required for Przelewy24");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let m = await (0, c.tj)(n),
        f = t.p24Bank,
        { paymentMethod: g, error: p } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: f },
            billing_details: {
                address: { line1: a, line2: l, city: d, state: _, postal_code: u, country: E },
                name: s,
                email: r,
            },
        });
    if (null != p) throw (0, c.i0)(p);
    if (null == g) throw (0, c.i0)("paymentMethod not available with successful stripe call");
    return (0, c.K8)(h.kM_.STRIPE, g.id, n, { billingAddressToken: m, analyticsLocation: i, bank: f });
}
let R = (e, t, n) => {
        if (null != t) throw n(t);
        if (null == e) throw n("SetupIntent not created");
        if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
        return (
            s()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
            { setupIntent: e, error: t }
        );
    },
    O = async (e) => {
        if (null == e) throw I("Stripe Elements not loaded", !0);
        let t = await e.submit();
        if ((g.info("Stripe Elements submit response: ", t), null != t.error))
            throw (g.error("Stripe Elements submit error: ", t.error), I(t.error, !0));
        return t;
    },
    y = async (e, t) => {
        let { paymentMethod: n, error: i } = await e.createPaymentMethod({ elements: t });
        if (null != i) throw (g.error("Stripe createPaymentMethod error: ", i), I(i, !0));
        if (null == n)
            throw (
                (g.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: n, error: i }),
                I("paymentMethod not available with successful stripe call", !0))
            );
        return { paymentMethod: n, error: i };
    },
    v = async (e, t) => {
        if (null == e) throw I("Stripe not loaded", !0);
        if (null == t) throw I("Stripe Elements not loaded", !0);
        await O(t);
        let { paymentMethod: n, error: i } = await y(e, t);
        return { paymentMethod: n, error: i };
    };
async function D() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, r, { billingAddress: s, paymentSourceType: a, lastConfirmedSetupIntentRef: l }, d] = t;
    if (null == i) throw I("Stripe not loaded", !0);
    if (null == r) throw I("Stripe Elements not loaded", !0);
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let _ = await (0, c.tj)(s);
    a !== m.he.PAYMENT_REQUEST && (await O(r));
    let u = null;
    if (a === m.he.CARD || a === m.he.PAYMENT_REQUEST) {
        let e,
            t = l.current ?? void 0,
            n =
                null != t && a === m.he.PAYMENT_REQUEST
                    ? { setupIntent: t ?? void 0, error: void 0 }
                    : await i.confirmSetup({ redirect: "if_required", elements: r });
        if (
            null != (e = n.error) &&
            "setup_intent_unexpected_state" === e.code &&
            null != e.setup_intent &&
            "succeeded" === e.setup_intent.status &&
            a !== m.he.PAYMENT_REQUEST
        ) {
            let { client_secret: e } = await (0, E.w)();
            await O(r), (n = await i.confirmSetup({ redirect: "if_required", clientSecret: e, elements: r }));
        }
        let { setupIntent: s } = R(n.setupIntent, n.error, (e) => I(e, !0));
        (l.current = s), (u = s.payment_method);
    } else {
        let { paymentMethod: e } = await y(i, r);
        u = e.id;
    }
    return (0, c.K8)(h.kM_.STRIPE, u, s, { billingAddressToken: _, analyticsLocation: d });
}
async function L(e, t, n, i) {
    if (null == e || null == t) throw (0, c.i0)("Stripe or token not loaded");
    o.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let r = null;
    try {
        r = (await (0, E.r)()).client_secret;
    } catch (e) {
        throw (0, c.i0)(e);
    }
    let s = await (0, c.tj)(n),
        a = u._Z(n),
        { setupIntent: l, error: d } = await e.confirmCardSetup(r, {
            payment_method: { card: { token: t }, billing_details: a },
        }),
        { setupIntent: _ } = R(l, d, (e) => (0, c.i0)(e));
    return (0, c.K8)(h.kM_.STRIPE, _.payment_method, n, { billingAddressToken: s, analyticsLocation: i });
}
function b(e, t, n) {
    let { token: i, billingAddressInfo: r } = u.uK(e);
    return (0, c.K8)(h.kM_.STRIPE, i, t ?? r, { analyticsLocation: n });
}
function w(e, t, n) {
    return (0, c.K8)(h.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function P(e, t, n, i) {
    if (null == e) throw (0, c.i0)("Stripe not loaded");
    let r = await (0, c.tj)(t),
        { name: a, line1: o, line2: l, city: d, state: _, postalCode: u, country: E } = t,
        f = m.kv.get(n);
    s()(null != f, "unsupported payment method type");
    let { paymentMethod: g, error: p } = await e.createPaymentMethod({
        type: f,
        billing_details: { address: { line1: o, line2: l, city: d, state: _, postal_code: u, country: E }, name: a },
    });
    if (null != p) throw (0, c.i0)(p);
    if (null == g) throw (0, c.i0)("stripePaymentMethod not available with successful stripe call");
    return (0, c.K8)(h.kM_.STRIPE, g.id, t, { billingAddressToken: r, analyticsLocation: i });
}
async function k(e, t, n) {
    let i = await (0, c.tj)(e),
        r = { type: m.Kc.get(t) };
    return (0, c.K8)(h.kM_.ADYEN, JSON.stringify(r), e, { billingAddressToken: i, analyticsLocation: n });
}
async function M(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = await (0, c.tj)(e),
        _ = { type: m.Kc.get(t), ...(i?.paymentMethod ?? {}) },
        u = await (0, c.jf)(t),
        E = (0, a.TP)() + h.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, u ?? "", "success");
    try {
        return {
            paymentSource: await (0, c.K8)(
                h.kM_.ADYEN,
                JSON.stringify(_),
                e,
                { billingAddressToken: s, analyticsLocation: n, returnUrl: E },
                r,
            ),
            redirectConfirmation: !1,
        };
    } catch (t) {
        if (t.code !== d.tG.CONFIRMATION_REQUIRED)
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
        if (null == e) throw (0, c.i0)("redirect url cannot be null on a redirect for adyen.");
        return B(e), { redirectConfirmation: !0 };
    }
}
async function U(e) {
    if (h.DYY.has(e.type)) return null;
    let t = await u.Cv();
    if (null == t) throw new l.Ey("Stripe not loaded", l.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: i, line1: r, line2: a, city: o, state: d, postalCode: _, country: c } = e.billingAddress,
        E = {
            billing_details: {
                address: { line1: r, line2: a, city: o, state: d, postal_code: _, country: c },
                name: i,
            },
        };
    switch (e.type) {
        case m.he.GIROPAY:
            E.type = "giropay";
            break;
        case m.he.SOFORT:
            (E.type = "sofort"), (E.sofort = { country: c ?? "" }), (E.billing_details.email = n);
            break;
        case m.he.BANCONTACT:
            E.type = "bancontact";
            break;
        case m.he.IDEAL:
            (E.type = "ideal"), (E.ideal = { bank: e.bank });
            break;
        case m.he.PRZELEWY24:
            if (null == e.bank) throw new l.Ey("p24 missing bank information", l.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (E.type = "p24"), (E.p24 = { bank: e.bank }), (E.billing_details.email = e.email);
            break;
        case m.he.EPS:
            if (null == e.bank) throw new l.Ey("EPS missing bank information", l.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (E.type = "eps"), (E.eps = { bank: e.bank });
    }
    s()(null != E.type, "unsupported payment method type");
    let { paymentMethod: f, error: g } = await t.createPaymentMethod(E);
    if (null != g || null == f)
        throw new l.Ey(
            `Unable to create payment source token: code: ${g?.code} message: ${g?.message}`,
            l.Ey.ErrorCodes.UNKNOWN,
        );
    return f.id;
}
function x(e) {
    if (h.DYY.has(e.type)) return null;
    if (m.Kc.has(e.type)) return h.DYY.has(e.type) ? null : JSON.stringify({ type: m.Kc.get(e.type) ?? null });
    return U(e);
}
async function G(e, t) {
    if (null == e) throw (0, c.i0)("redirect url cannot be null on a redirect for adyen.");
    if (null == t) throw (0, c.i0)("Payment source cannot be null on a redirect.");
    return h.CmT.has(t.type)
        ? (B(e), { redirectConfirmation: !0, redirectURL: e })
        : { redirectConfirmation: !1, redirectURL: e };
}
async function V(e, t) {
    let n = await u.Cv();
    if (null == t) throw (0, c.i0)("Payment source cannot be null on a redirect.");
    let { clientSecret: i, paymentMethodId: r } = await A(e);
    if (null == n) throw (0, c.i0)("Stripe cannot be null on a redirect.");
    if (h.CmT.has(t.type)) {
        let e = await (0, c.jf)(t.type);
        return B(await j({ stripe: n, paymentSource: t, clientSecret: i, state: e })), { redirectConfirmation: !0 };
    }
    return await H({ stripe: n, clientSecret: i, paymentMethodId: r, paymentSource: t }), { redirectConfirmation: !1 };
}
async function F(e) {
    let t = await u.Cv();
    if (null == t) throw (0, c.i0)("Stripe has not loaded.");
    if (null == e) throw (0, c.i0)("payment intent id cannot be null.");
    let n = await p(e),
        { paymentIntent: i, error: r } = await t.retrievePaymentIntent(n);
    if (null != r) throw (0, c.i0)(r);
    if (null == i) throw (0, c.i0)("paymentIntent not available with successful stripe call");
    if (null != i.last_payment_error) throw (0, c.i0)(`unable to retrieve payment intent ${i.last_payment_error}`);
    return !0;
}
function B(e) {
    window.open(e);
}
async function H(e) {
    let t,
        { stripe: n, paymentSource: i, paymentMethodId: r, clientSecret: s } = e,
        a = {};
    if (i.type === m.he.SEPA_DEBIT) {
        if (null == r) throw (0, c.i0)("On a sepa payment payment method id cannot be null");
        (a.payment_method = r), (t = n.confirmSepaDebitPayment);
    } else throw (0, c.i0)("Unsupported redirected payment source type.");
    let { paymentIntent: o, error: l } = await t(s, a);
    if (null != l) throw (0, c.i0)(l);
    if (null == o) throw (0, c.i0)("paymentIntent not available with successful stripe call");
}
async function j(e) {
    let t,
        { stripe: n, paymentSource: i, clientSecret: r, state: s } = e,
        o = {};
    switch (i.type) {
        case m.he.GIROPAY:
            (o = { billing_details: { name: i.billingAddress.name } }), (t = n.confirmGiropayPayment);
            break;
        case m.he.BANCONTACT:
            (o = { billing_details: { name: i.billingAddress.name, email: i.email } }),
                (t = n.confirmBancontactPayment);
            break;
        case m.he.SOFORT:
            (o = {
                sofort: { country: i.billingAddress.country },
                billing_details: { name: i.billingAddress.name, email: i.email },
            }),
                (t = n.confirmSofortPayment);
            break;
        case m.he.PRZELEWY24:
            if (null == i.bank) throw (0, c.i0)(`PaymentSource (${i.id}) missing bank info for p24.`);
            (o = { p24: { bank: i.bank }, billing_details: { name: i.billingAddress.name, email: i.email } }),
                (t = n.confirmP24Payment);
            break;
        case m.he.EPS:
            if (null == i.bank) throw (0, c.i0)(`PaymentSource (${i.id}) missing bank info for EPS.`);
            (o = { eps: { bank: i.bank }, billing_details: { name: i.billingAddress.name } }),
                (t = n.confirmEpsPayment);
            break;
        case m.he.IDEAL:
            (o = { ideal: {}, billing_details: { name: i.billingAddress.name } }),
                null != i.bank && (o.ideal = { bank: i.bank }),
                (t = n.confirmIdealPayment);
            break;
        default:
            throw (0, c.i0)("Unsupported redirected payment source type.");
    }
    let { paymentIntent: l, error: d } = await t(
        r,
        {
            payment_method: o,
            return_url: (0, a.TP)() + h.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, s ?? "", "success"),
        },
        { handleActions: !1 },
    );
    if (null != d) throw (0, c.i0)(d);
    if (null == l) throw (0, c.i0)("paymentIntent not available with successful api call");
    if (l.next_action?.redirect_to_url?.url == null) throw (0, c.i0)("confirm payment did not return a redirect url");
    return l.next_action.redirect_to_url.url;
}
