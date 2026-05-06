"use strict";
n.d(t, {
    LD: () => eh,
    Z9: () => x,
    u1: () => W,
    Tv: () => Y,
    Ky: () => ef,
    YP: () => el,
    TD: () => k,
    _D: () => eP,
    Gr: () => eo,
    ZK: () => eg,
    A8: () => z,
    $o: () => ea,
    tn: () => eE,
    N: () => ev,
    IV: () => eb,
    jV: () => Z,
    im: () => H,
    tc: () => eC,
    ne: () => M,
    I8: () => e_,
    uK: () => eN,
    TK: () => eu,
    JQ: () => er,
    M2: () => em,
    i0: () => C,
    YB: () => B,
    u6: () => j,
    ey: () => ey,
    CK: () => ec,
    r6: () => eS,
    hP: () => ed,
    Ze: () => eM,
    $M: () => $,
    jf: () => v,
    YJ: () => P,
    xe: () => eR,
    MM: () => ep,
    EB: () => U,
    Ps: () => es,
    nV: () => eA,
    bw: () => K,
    jZ: () => eD,
    re: () => eO,
    uZ: () => ew,
    ge: () => eT,
    x: () => ex,
    bl: () => eL,
    QP: () => eI,
});
var i = n(989349),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(845584),
    l = n(136857),
    u = n(202613),
    c = n(615405),
    d = n(166403),
    _ = n(174459),
    f = n(739508),
    h = n(927578),
    p = n(107351),
    E = n(342393),
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
async function y(e) {
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
function C(e) {
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
    return i && (0, f.pM)(l, { ...s, extra: { ...n, ...s.extra } }), l;
}
async function v(e) {
    let {
        body: { state: t },
    } = await s.Bo.post({ url: S.Rsh.BILLING_POPUP_BRIDGE(e), oldFormErrors: !0, rejectWithError: !0 });
    return a.h.dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: t, paymentSourceType: e }), t;
}
async function O(e, t, n, i) {
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
var R = n(219538),
    b = n(818348);
let D = new A.A("BillingPaymentGatewayActionCreators.tsx");
async function L(e) {
    let { stripe_payment_intent_client_secret: t } = (
        await s.Bo.get({ url: S.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return t;
}
async function w(e) {
    let { stripe_payment_intent_client_secret: t, stripe_payment_intent_payment_method_id: n } = (
        await s.Bo.get({ url: S.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return { clientSecret: t, paymentMethodId: n };
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.intl.string(N.t.khEaRI);
    return C(e, t, n, { tags: { source: "payment_elements" } });
}
async function P(e, t) {
    if (null == e || null == t) throw C("Stripe or elements not loaded");
    let n = t.getElement(E.CardNumberElement);
    if (null == n) throw C("Unable to load card elements from Stripe");
    let { token: i, error: r } = await e.createToken(n);
    if (null != r) throw C(r);
    if (null == i) throw C("token not available with successful stripe call");
    return i.id;
}
async function x(e, t, n, i) {
    if (null == e) throw C("Stripe not loaded");
    if (null == t) throw C("Bank required for EPS");
    let { email: r, name: s, line1: o, line2: l, city: u, state: c, postalCode: d, country: _ } = n;
    if (null == s) throw C("Name required for EPS");
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await y(n),
        { paymentMethod: h, error: p } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: o, line2: l, city: u, state: c, postal_code: d, country: _ },
                name: s,
                email: r,
            },
        });
    if (null != p) throw C(p);
    if (null == h) throw C("paymentMethod not available with successful stripe call");
    return O(S.kM_.STRIPE, h.id, n, { billingAddressToken: f, analyticsLocation: i, bank: t });
}
async function U(e, t, n) {
    if (null == e) throw C("Stripe not loaded");
    let { email: i, name: r, line1: s, line2: o, city: l, state: u, postalCode: c, country: d } = t;
    if (null == r) throw C("Name required for iDEAL");
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let _ = await y(t),
        { paymentMethod: f, error: h } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: { line1: s, line2: o, city: l, state: u, postal_code: c, country: d },
                name: r,
                email: i,
            },
        });
    if (null != h) throw C(h);
    if (null == f) throw C("paymentMethod not available with successful stripe call");
    return O(S.kM_.STRIPE, f.id, t, { billingAddressToken: _, analyticsLocation: n });
}
async function k(e, t, n, i) {
    if (null == e) throw C("Stripe not loaded");
    let { email: r, name: s, line1: o, line2: l, city: u, state: c, postalCode: d, country: _ } = n;
    if (null == r) throw C("Email required for Przelewy24");
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await y(n),
        h = t.p24Bank,
        { paymentMethod: p, error: E } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: h },
            billing_details: {
                address: { line1: o, line2: l, city: u, state: c, postal_code: d, country: _ },
                name: s,
                email: r,
            },
        });
    if (null != E) throw C(E);
    if (null == p) throw C("paymentMethod not available with successful stripe call");
    return O(S.kM_.STRIPE, p.id, n, { billingAddressToken: f, analyticsLocation: i, bank: h });
}
let G = (e, t, n) => {
        if (null != t) throw n(t);
        if (null == e) throw n("SetupIntent not created");
        if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
        return (
            g()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
            { setupIntent: e, error: t }
        );
    },
    F = async (e) => {
        if (null == e) throw M("Stripe Elements not loaded", !0);
        let t = await e.submit();
        if ((D.info("Stripe Elements submit response: ", t), null != t.error))
            throw (D.error("Stripe Elements submit error: ", t.error), M(t.error, !0));
        return t;
    },
    V = async (e, t) => {
        let { paymentMethod: n, error: i } = await e.createPaymentMethod({ elements: t });
        if (null != i) throw (D.error("Stripe createPaymentMethod error: ", i), M(i, !0));
        if (null == n)
            throw (
                (D.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: n, error: i }),
                M("paymentMethod not available with successful stripe call", !0))
            );
        return { paymentMethod: n, error: i };
    },
    B = async (e, t) => {
        if (null == e) throw M("Stripe not loaded", !0);
        if (null == t) throw M("Stripe Elements not loaded", !0);
        await F(t);
        let { paymentMethod: n, error: i } = await V(e, t);
        return { paymentMethod: n, error: i };
    };
async function H() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, r, { billingAddress: s, paymentSourceType: o, lastConfirmedSetupIntentRef: l }, u] = t;
    if (null == i) throw M("Stripe not loaded", !0);
    if (null == r) throw M("Stripe Elements not loaded", !0);
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let c = await y(s);
    o !== b.he.PAYMENT_REQUEST && (await F(r));
    let d = null;
    if (o === b.he.CARD || o === b.he.PAYMENT_REQUEST) {
        let e,
            t = l.current ?? void 0,
            n =
                null != t && o === b.he.PAYMENT_REQUEST
                    ? { setupIntent: t ?? void 0, error: void 0 }
                    : await i.confirmSetup({ redirect: "if_required", elements: r });
        if (
            null != (e = n.error) &&
            "setup_intent_unexpected_state" === e.code &&
            null != e.setup_intent &&
            "succeeded" === e.setup_intent.status &&
            o !== b.he.PAYMENT_REQUEST
        ) {
            let { client_secret: e } = await (0, R.w)();
            await F(r), (n = await i.confirmSetup({ redirect: "if_required", clientSecret: e, elements: r }));
        }
        let { setupIntent: s } = G(n.setupIntent, n.error, (e) => M(e, !0));
        (l.current = s), (d = s.payment_method);
    } else {
        let { paymentMethod: e } = await V(i, r);
        d = e.id;
    }
    return O(S.kM_.STRIPE, d, s, { billingAddressToken: c, analyticsLocation: u });
}
async function j(e, t, n, i) {
    if (null == e || null == t) throw C("Stripe or token not loaded");
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let r = null;
    try {
        r = (await (0, R.r)()).client_secret;
    } catch (e) {
        throw C(e);
    }
    let s = await y(n),
        o = I._Z(n),
        { setupIntent: l, error: u } = await e.confirmCardSetup(r, {
            payment_method: { card: { token: t }, billing_details: o },
        }),
        { setupIntent: c } = G(l, u, (e) => C(e));
    return O(S.kM_.STRIPE, c.payment_method, n, { billingAddressToken: s, analyticsLocation: i });
}
function Y(e, t, n) {
    let { token: i, billingAddressInfo: r } = I.uK(e);
    return O(S.kM_.STRIPE, i, t ?? r, { analyticsLocation: n });
}
function W(e, t, n) {
    return O(S.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function K(e, t, n, i) {
    if (null == e) throw C("Stripe not loaded");
    let r = await y(t),
        { name: s, line1: a, line2: o, city: l, state: u, postalCode: c, country: d } = t,
        _ = b.kv.get(n);
    g()(null != _, "unsupported payment method type");
    let { paymentMethod: f, error: h } = await e.createPaymentMethod({
        type: _,
        billing_details: { address: { line1: a, line2: o, city: l, state: u, postal_code: c, country: d }, name: s },
    });
    if (null != h) throw C(h);
    if (null == f) throw C("stripePaymentMethod not available with successful stripe call");
    return O(S.kM_.STRIPE, f.id, t, { billingAddressToken: r, analyticsLocation: i });
}
async function z(e, t, n) {
    let i = await y(e),
        r = { type: b.Kc.get(t) };
    return O(S.kM_.ADYEN, JSON.stringify(r), e, { billingAddressToken: i, analyticsLocation: n });
}
async function $(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        u = await y(e),
        c = { type: b.Kc.get(t), ...(i?.paymentMethod ?? {}) },
        d = await v(t),
        _ = (0, s.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, d ?? "", "success");
    try {
        return {
            paymentSource: await O(
                S.kM_.ADYEN,
                JSON.stringify(c),
                e,
                { billingAddressToken: u, analyticsLocation: n, returnUrl: _ },
                r,
            ),
            redirectConfirmation: !1,
        };
    } catch (t) {
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
        if (null == e) throw C("redirect url cannot be null on a redirect for adyen.");
        return ee(e), { redirectConfirmation: !0 };
    }
}
async function q(e) {
    if (S.DYY.has(e.type)) return null;
    let t = await I.Cv();
    if (null == t) throw new o.Ey("Stripe not loaded", o.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: i, line1: r, line2: s, city: a, state: l, postalCode: u, country: c } = e.billingAddress,
        d = {
            billing_details: {
                address: { line1: r, line2: s, city: a, state: l, postal_code: u, country: c },
                name: i,
            },
        };
    switch (e.type) {
        case b.he.GIROPAY:
            d.type = "giropay";
            break;
        case b.he.SOFORT:
            (d.type = "sofort"), (d.sofort = { country: c ?? "" }), (d.billing_details.email = n);
            break;
        case b.he.BANCONTACT:
            d.type = "bancontact";
            break;
        case b.he.IDEAL:
            (d.type = "ideal"), (d.ideal = { bank: e.bank });
            break;
        case b.he.PRZELEWY24:
            if (null == e.bank) throw new o.Ey("p24 missing bank information", o.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (d.type = "p24"), (d.p24 = { bank: e.bank }), (d.billing_details.email = e.email);
            break;
        case b.he.EPS:
            if (null == e.bank) throw new o.Ey("EPS missing bank information", o.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (d.type = "eps"), (d.eps = { bank: e.bank });
    }
    g()(null != d.type, "unsupported payment method type");
    let { paymentMethod: _, error: f } = await t.createPaymentMethod(d);
    if (null != f || null == _)
        throw new o.Ey(
            `Unable to create payment source token: code: ${f?.code} message: ${f?.message}`,
            o.Ey.ErrorCodes.UNKNOWN,
        );
    return _.id;
}
function Z(e) {
    if (S.DYY.has(e.type)) return null;
    if (b.Kc.has(e.type)) return S.DYY.has(e.type) ? null : JSON.stringify({ type: b.Kc.get(e.type) ?? null });
    return q(e);
}
async function X(e, t) {
    if (null == e) throw C("redirect url cannot be null on a redirect for adyen.");
    if (null == t) throw C("Payment source cannot be null on a redirect.");
    return S.CmT.has(t.type)
        ? (ee(e), { redirectConfirmation: !0, redirectURL: e })
        : { redirectConfirmation: !1, redirectURL: e };
}
async function Q(e, t) {
    let n = await I.Cv();
    if (null == t) throw C("Payment source cannot be null on a redirect.");
    let { clientSecret: i, paymentMethodId: r } = await w(e);
    if (null == n) throw C("Stripe cannot be null on a redirect.");
    if (S.CmT.has(t.type)) {
        let e = await v(t.type);
        return ee(await en({ stripe: n, paymentSource: t, clientSecret: i, state: e })), { redirectConfirmation: !0 };
    }
    return await et({ stripe: n, clientSecret: i, paymentMethodId: r, paymentSource: t }), { redirectConfirmation: !1 };
}
async function J(e) {
    let t = await I.Cv();
    if (null == t) throw C("Stripe has not loaded.");
    if (null == e) throw C("payment intent id cannot be null.");
    let n = await L(e),
        { paymentIntent: i, error: r } = await t.retrievePaymentIntent(n);
    if (null != r) throw C(r);
    if (null == i) throw C("paymentIntent not available with successful stripe call");
    if (null != i.last_payment_error) throw C(`unable to retrieve payment intent ${i.last_payment_error}`);
    return !0;
}
function ee(e) {
    window.open(e);
}
async function et(e) {
    let t,
        { stripe: n, paymentSource: i, paymentMethodId: r, clientSecret: s } = e,
        a = {};
    if (i.type === b.he.SEPA_DEBIT) {
        if (null == r) throw C("On a sepa payment payment method id cannot be null");
        (a.payment_method = r), (t = n.confirmSepaDebitPayment);
    } else throw C("Unsupported redirected payment source type.");
    let { paymentIntent: o, error: l } = await t(s, a);
    if (null != l) throw C(l);
    if (null == o) throw C("paymentIntent not available with successful stripe call");
}
async function en(e) {
    let t,
        { stripe: n, paymentSource: i, clientSecret: r, state: a } = e,
        o = {};
    switch (i.type) {
        case b.he.GIROPAY:
            (o = { billing_details: { name: i.billingAddress.name } }), (t = n.confirmGiropayPayment);
            break;
        case b.he.BANCONTACT:
            (o = { billing_details: { name: i.billingAddress.name, email: i.email } }),
                (t = n.confirmBancontactPayment);
            break;
        case b.he.SOFORT:
            (o = {
                sofort: { country: i.billingAddress.country },
                billing_details: { name: i.billingAddress.name, email: i.email },
            }),
                (t = n.confirmSofortPayment);
            break;
        case b.he.PRZELEWY24:
            if (null == i.bank) throw C(`PaymentSource (${i.id}) missing bank info for p24.`);
            (o = { p24: { bank: i.bank }, billing_details: { name: i.billingAddress.name, email: i.email } }),
                (t = n.confirmP24Payment);
            break;
        case b.he.EPS:
            if (null == i.bank) throw C(`PaymentSource (${i.id}) missing bank info for EPS.`);
            (o = { eps: { bank: i.bank }, billing_details: { name: i.billingAddress.name } }),
                (t = n.confirmEpsPayment);
            break;
        case b.he.IDEAL:
            (o = { ideal: {}, billing_details: { name: i.billingAddress.name } }),
                null != i.bank && (o.ideal = { bank: i.bank }),
                (t = n.confirmIdealPayment);
            break;
        default:
            throw C("Unsupported redirected payment source type.");
    }
    let { paymentIntent: l, error: u } = await t(
        r,
        {
            payment_method: o,
            return_url: (0, s.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, a ?? "", "success"),
        },
        { handleActions: !1 },
    );
    if (null != u) throw C(u);
    if (null == l) throw C("paymentIntent not available with successful api call");
    if (l.next_action?.redirect_to_url?.url == null) throw C("confirm payment did not return a redirect url");
    return l.next_action.redirect_to_url.url;
}
var ei = n(601107);
async function er(e) {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
    try {
        await s.Bo.del({ url: S.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: e });
    } catch (t) {
        let e = new o.Ey(t);
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: e }), e);
    }
}
async function es(e, t) {
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
            c = u.Ay.createFromServer(l.body);
        a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: c });
    } catch (t) {
        let e = (0, l.Wd)(t);
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL", error: e }), e);
    }
}
async function ea() {
    if (!c.A.isPaymentSourceFetching)
        try {
            let e = s.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCES, oldFormErrors: !0, rejectWithError: !1 });
            a.h.wait(() => a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: e }));
            let t = await e;
            return a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: t.body }), t;
        } catch (e) {
            throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" }), e);
        }
}
async function eo(e) {
    try {
        let t = s.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = await t,
            i = u.Ay.createFromServer(n.body);
        return a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: i }), n;
    } catch (e) {
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" }), e);
    }
}
async function el(e) {
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
async function eu(e) {
    let t = await s.Bo.get({ url: S.Rsh.BILLING_PAYMENT(e), rejectWithError: !0 });
    return a.h.dispatch({ type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: t.body }), t;
}
async function ec() {
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
        let e = ei.En.ADD_PERKS_IF_DETECTED,
            t = d.A.getLastLazyPerkSync();
        (null == t || r()().diff(t, "hours") >= 1) && ((e = ei.En.FULL_RESYNC), (t = r()()));
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
async function e_() {
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
async function ef(e) {
    let {
        items: t,
        paymentSource: n,
        trialId: i,
        code: r,
        currency: u,
        metadata: c,
        referralCode: d,
        loadId: _,
        expectedInvoicePrice: E,
        expectedRenewalPrice: m,
    } = e;
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" }), (t = (0, h.qn)(t));
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
                metadata: c,
                gateway_checkout_context: await (0, f.ob)(n),
                purchase_token: (0, p.r)(),
                referral_code: d,
                load_id: _,
                expected_invoice_price: E,
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
        if (!t.body.payment_id) throw C("payment id cannot be null on redirected confirmations.");
        return ep(t.body, n);
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
                purchase_token: (0, p.r)(),
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
        if (!t.body.payment_id) throw C("payment id cannot be null on redirected confirmations.");
        return ep(t.body, n);
    }
}
function ep(e, t) {
    return null != t && b.Kc.has(t.type) ? X(e.adyen_redirect_url, t) : Q(e.payment_id, t);
}
async function eE(e) {
    let t = await eu(e);
    if (t?.body == null) throw C("could not fetch payment");
    let n = u.Ay.createFromServer(t.body.payment_source);
    if (!S.CmT.has(n.type)) throw C("unsupported redirect payment source");
    if (t?.body?.status === b.__.FAILED) throw C("payment failed");
    return n.paymentGateway !== S.kM_.STRIPE || J(e);
}
async function em(e, t, n) {
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
function eg(e, t) {
    return eA(
        e,
        { items: e.items },
        { amount: 0, currency: e.currency },
        (0, h.UC)(e.items, e.currency, e.paymentSourceId),
        t,
    );
}
async function eA(e, t, n, i, r, u, c) {
    if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    try {
        let o = {
            status: t.status,
            payment_source_id: t.paymentSource?.id,
            payment_source_token: null != t.paymentSource ? await Z(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, f.ob)(t.paymentSource),
            load_id: c,
            pause_duration: t.pauseDuration,
            purchase_token: (0, p.r)(),
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
            (o.items = (0, h.qn)(t.items).map((e) => {
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
        if (e.code !== l.tG.CONFIRMATION_REQUIRED)
            throw (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
        if (!n.body.payment_id) throw C("payment id cannot be null on redirected confirmations.");
        return ep(n.body, t.paymentSource);
    }
}
function eI(e, t, n, i, r) {
    return eA(
        e,
        { status: S.Dmq.ACTIVE, paymentSource: n, currency: i },
        { amount: 0, currency: e.currency },
        (0, h.UC)(e.items, e.currency, n?.id),
        t,
        r,
    );
}
function eT(e, t, n, i, r, s) {
    let a = (0, h.GX)(e, t);
    return eA(e, { status: S.Dmq.ACTIVE, items: a }, n, i, r, s);
}
function eS(e, t, n, i, r) {
    return eA(e, { currency: t }, { amount: 0, currency: t.toLowerCase() }, n, i, r);
}
function eN(e, t, n, i, r, s) {
    return eA(e, { paymentSource: t, currency: n }, { amount: 0, currency: n.toLowerCase() }, i, r, s);
}
function ey() {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
}
function eC() {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
}
async function ev(e) {
    await s.Bo.post({ url: S.Rsh.BILLING_PAYMENTS_VOID(e), oldFormErrors: !0, rejectWithError: !1 });
}
function eO(e) {
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
async function eR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != c.A.ipCountryCodeRequest) return c.A.ipCountryCodeRequest;
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
function eb() {
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
async function eD() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != c.A.ipLocationRequest) return c.A.ipLocationRequest;
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
function eL() {
    a.h.dispatch({ type: "RESET_PAYMENT_ID" });
}
function ew() {
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
}
function eM(e) {
    a.h.dispatch({ type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId: e });
}
async function eP(e, t) {
    try {
        let n = await s.Bo.post({ url: S.Rsh.REACTIVATION_OFFER_REDEEM(e.id, t.id), rejectWithError: !1 });
        a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: n.body }),
            a.h.dispatch({ type: "BILLING_USER_OFFER_REDEEMED", offerId: t.id });
    } catch (t) {
        let e = t instanceof o.Ey ? t : new o.Ey(t);
        throw (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
    }
}
async function ex(e) {
    try {
        await s.Bo.post({ url: S.Rsh.USER_OFFER_REDEEM, body: { user_discount_offer_id: e.id }, rejectWithError: !0 }),
            a.h.dispatch({ type: "BILLING_USER_OFFER_REDEEMED", offerId: e.id });
    } catch (e) {
        throw e instanceof o.Ey ? e : new o.Ey(e);
    }
}
