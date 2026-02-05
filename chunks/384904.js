"use strict";
n.d(t, {
    $M: () => et,
    $o: () => ei,
    A8: () => ee,
    CK: () => eo,
    EB: () => j,
    Gr: () => ea,
    I8: () => ec,
    JQ: () => O,
    Ky: () => ed,
    LD: () => e_,
    M2: () => eT,
    MM: () => ef,
    N: () => eD,
    Ps: () => D,
    QP: () => ev,
    TD: () => H,
    TK: () => es,
    Tv: () => Q,
    YB: () => $,
    YJ: () => F,
    Z9: () => B,
    ZK: () => ey,
    Ze: () => eU,
    _D: () => eG,
    bl: () => eM,
    bw: () => J,
    ey: () => eR,
    ge: () => eC,
    hP: () => el,
    i0: () => V,
    im: () => q,
    jV: () => er,
    jZ: () => eP,
    jf: () => eL,
    nV: () => eS,
    ne: () => G,
    r6: () => eb,
    re: () => ew,
    tc: () => eO,
    tn: () => em,
    u1: () => X,
    u6: () => Z,
    uK: () => eN,
    uZ: () => ek,
    xG: () => eu,
    xe: () => ex,
});
var r = n(342393),
    i = n(284009),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(562465),
    u = n(73153),
    c = n(198982),
    d = n(136857),
    _ = n(219538),
    f = n(626584),
    p = n(202613),
    h = n(427157),
    m = n(615405),
    g = n(166403),
    E = n(954571),
    A = n(739508),
    I = n(927578),
    T = n(107351),
    y = n(71532),
    S = n(652215),
    v = n(601107),
    C = n(535833),
    b = n(818348),
    N = n(985018);
let R = new f.A("BillingActionCreators.tsx");
async function O(e) {
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
    try {
        await l.Bo.del({ url: S.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: e });
    } catch (t) {
        let e = new c.Ey(t);
        throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: e }), e);
    }
}
async function D(e, t) {
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
    try {
        let {
                billingAddress: { line1: n, line2: r, postalCode: i, ...a },
            } = t,
            s = await l.Bo.patch({
                url: S.Rsh.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: { ...a, line_1: n, line_2: r, postal_code: i },
                    expires_month: t.expiresMonth,
                    expires_year: t.expiresYear,
                    default: t.isDefault,
                },
                rejectWithError: !1,
            }),
            o = p.Ay.createFromServer(s.body);
        u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: o });
    } catch (t) {
        let e = (0, d.Wd)(t);
        throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL", error: e }), e);
    }
}
async function L(e) {
    let { stripe_payment_intent_client_secret: t } = (
        await l.Bo.get({ url: S.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return t;
}
async function w(e) {
    let { stripe_payment_intent_client_secret: t, stripe_payment_intent_payment_method_id: n } = (
        await l.Bo.get({ url: S.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return { clientSecret: t, paymentMethodId: n };
}
async function x(e) {
    try {
        return (
            await l.Bo.post({
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
        let e = (0, d.Wd)(t);
        throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }), e);
    }
}
function P(e) {
    return S.DYY.has(e.type) ? null : JSON.stringify({ type: b.Kc.get(e.type) ?? null });
}
async function M(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    try {
        let a = await l.Bo.post({
                url: S.Rsh.BILLING_PAYMENT_SOURCES,
                query: { location: r.analyticsLocation },
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
                    billing_address_token: r.billingAddressToken,
                    bank: r.bank,
                    return_url: r.returnUrl,
                    default: i,
                },
                rejectWithError: !1,
            }),
            s = p.Ay.createFromServer(a.body);
        return u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: s }), s;
    } catch (t) {
        let e = (0, d.Wd)(t);
        throw (
            (k(e, t),
            e.code !== d.tG.CONFIRMATION_REQUIRED &&
                u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }),
            e)
        );
    }
}
function k(e, t) {
    t?.body?.adyen_redirect_url && (e.fields.adyen_redirect_url = t?.body?.adyen_redirect_url);
}
function U(e) {
    return C.D.includes(e.type);
}
function G(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.intl.string(N.t.khEaRI);
    return V(e, t, n, { tags: { source: "payment_elements" } });
}
function V(e) {
    let t,
        n,
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.intl.string(N.t.khEaRI),
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (U(e)) {
        let a = null != e.message ? `${i}: ${e.message}` : i,
            s = {
                failure_message: a,
                error_type: e.type,
                failure_code: e.code,
                failure_sub_code: e.decline_code,
                payment_source_type: e.payment_method?.type,
            };
        (n = s),
            "card_error" === e.type &&
                (E.default.track(S.HAw.PAYMENT_SOURCE_CREATION_FAILED, { ...s, stacktrace: Error().stack }), (r = !1)),
            (t = new c.Ey(a));
    } else
        (n = { failure_message: (t = new c.Ey("string" == typeof e ? i : e)).message, status_code: t.code }),
            429 === t.code && (r = !1);
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: t });
    let s = Error("string" == typeof e ? e : t.message);
    return r && (0, A.pM)(s, { ...a, extra: { ...n, ...a.extra } }), s;
}
async function F(e, t) {
    if (null == e || null == t) throw V("Stripe or elements not loaded");
    let n = t.getElement(r.CardNumberElement);
    if (null == n) throw V("Unable to load card elements from Stripe");
    let { token: i, error: a } = await e.createToken(n);
    if (null != a) throw V(a);
    if (null == i) throw V("token not available with successful stripe call");
    return i.id;
}
async function B(e, t, n, r) {
    if (null == e) throw V("Stripe not loaded");
    if (null == t) throw V("Bank required for EPS");
    let { email: i, name: a, line1: s, line2: o, city: l, state: c, postalCode: d, country: _ } = n;
    if (null == a) throw V("Name required for EPS");
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await x(n),
        { paymentMethod: p, error: h } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: s, line2: o, city: l, state: c, postal_code: d, country: _ },
                name: a,
                email: i,
            },
        });
    if (null != h) throw V(h);
    if (null == p) throw V("paymentMethod not available with successful stripe call");
    return M(S.kM_.STRIPE, p.id, n, { billingAddressToken: f, analyticsLocation: r, bank: t });
}
async function j(e, t, n) {
    if (null == e) throw V("Stripe not loaded");
    let { email: r, name: i, line1: a, line2: s, city: o, state: l, postalCode: c, country: d } = t;
    if (null == i) throw V("Name required for iDEAL");
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let _ = await x(t),
        { paymentMethod: f, error: p } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: { line1: a, line2: s, city: o, state: l, postal_code: c, country: d },
                name: i,
                email: r,
            },
        });
    if (null != p) throw V(p);
    if (null == f) throw V("paymentMethod not available with successful stripe call");
    return M(S.kM_.STRIPE, f.id, t, { billingAddressToken: _, analyticsLocation: n });
}
async function H(e, t, n, r) {
    if (null == e) throw V("Stripe not loaded");
    let { email: i, name: a, line1: s, line2: o, city: l, state: c, postalCode: d, country: _ } = n;
    if (null == i) throw V("Email required for Przelewy24");
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await x(n),
        p = t.p24Bank,
        { paymentMethod: h, error: m } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: p },
            billing_details: {
                address: { line1: s, line2: o, city: l, state: c, postal_code: d, country: _ },
                name: a,
                email: i,
            },
        });
    if (null != m) throw V(m);
    if (null == h) throw V("paymentMethod not available with successful stripe call");
    return M(S.kM_.STRIPE, h.id, n, { billingAddressToken: f, analyticsLocation: r, bank: p });
}
let Y = (e, t, n) => {
        if (null != t) throw n(t);
        if (null == e) throw n("SetupIntent not created");
        if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
        return (
            a()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
            { setupIntent: e, error: t }
        );
    },
    W = (e) =>
        null != e &&
        "setup_intent_unexpected_state" === e.code &&
        null != e.setup_intent &&
        "succeeded" === e.setup_intent.status,
    K = async (e) => {
        if (null == e) throw G("Stripe Elements not loaded", !0);
        let t = await e.submit();
        if ((R.info("Stripe Elements submit response: ", t), null != t.error))
            throw (R.error("Stripe Elements submit error: ", t.error), G(t.error, !0));
        return t;
    },
    z = async (e, t) => {
        let { paymentMethod: n, error: r } = await e.createPaymentMethod({ elements: t });
        if (null != r) throw (R.error("Stripe createPaymentMethod error: ", r), G(r, !0));
        if (null == n)
            throw (
                (R.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: n, error: r }),
                G("paymentMethod not available with successful stripe call", !0))
            );
        return { paymentMethod: n, error: r };
    },
    $ = async (e, t) => {
        if (null == e) throw G("Stripe not loaded", !0);
        if (null == t) throw G("Stripe Elements not loaded", !0);
        await K(t);
        let { paymentMethod: n, error: r } = await z(e, t);
        return { paymentMethod: n, error: r };
    };
async function q() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, i, { billingAddress: a, paymentSourceType: s, lastConfirmedSetupIntentRef: o }, l] = t;
    if (null == r) throw G("Stripe not loaded", !0);
    if (null == i) throw G("Stripe Elements not loaded", !0);
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let c = await x(a);
    s !== b.he.PAYMENT_REQUEST && (await K(i));
    let d = null;
    if (s === b.he.CARD || s === b.he.PAYMENT_REQUEST) {
        let e = o.current ?? void 0,
            t =
                null != e && s === b.he.PAYMENT_REQUEST
                    ? { setupIntent: e ?? void 0, error: void 0 }
                    : await r.confirmSetup({ redirect: "if_required", elements: i });
        if (W(t.error) && s !== b.he.PAYMENT_REQUEST) {
            let { client_secret: e } = await (0, _.w)();
            await K(i), (t = await r.confirmSetup({ redirect: "if_required", clientSecret: e, elements: i }));
        }
        let { setupIntent: n } = Y(t.setupIntent, t.error, (e) => G(e, !0));
        (o.current = n), (d = n.payment_method);
    } else {
        let { paymentMethod: e } = await z(r, i);
        d = e.id;
    }
    return M(S.kM_.STRIPE, d, a, { billingAddressToken: c, analyticsLocation: l });
}
async function Z(e, t, n, r) {
    if (null == e || null == t) throw V("Stripe or token not loaded");
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let i = null;
    try {
        i = (await (0, _.r)()).client_secret;
    } catch (e) {
        throw V(e);
    }
    let a = await x(n),
        s = y._Z(n),
        { setupIntent: o, error: l } = await e.confirmCardSetup(i, {
            payment_method: { card: { token: t }, billing_details: s },
        }),
        { setupIntent: c } = Y(o, l, (e) => V(e));
    return M(S.kM_.STRIPE, c.payment_method, n, { billingAddressToken: a, analyticsLocation: r });
}
function Q(e, t, n) {
    let { token: r, billingAddressInfo: i } = y.uK(e);
    return M(S.kM_.STRIPE, r, t ?? i, { analyticsLocation: n });
}
function X(e, t, n) {
    return M(S.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function J(e, t, n, r) {
    if (null == e) throw V("Stripe not loaded");
    let i = await x(t),
        { name: s, line1: o, line2: l, city: u, state: c, postalCode: d, country: _ } = t,
        f = b.kv.get(n);
    a()(null != f, "unsupported payment method type");
    let { paymentMethod: p, error: h } = await e.createPaymentMethod({
        type: f,
        billing_details: { address: { line1: o, line2: l, city: u, state: c, postal_code: d, country: _ }, name: s },
    });
    if (null != h) throw V(h);
    if (null == p) throw V("stripePaymentMethod not available with successful stripe call");
    return M(S.kM_.STRIPE, p.id, t, { billingAddressToken: i, analyticsLocation: r });
}
async function ee(e, t, n) {
    let r = await x(e),
        i = { type: b.Kc.get(t) };
    return M(S.kM_.ADYEN, JSON.stringify(i), e, { billingAddressToken: r, analyticsLocation: n });
}
async function et(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = await x(e),
        s = { type: b.Kc.get(t), ...(r?.paymentMethod ?? {}) },
        o = await eL(t),
        _ = (0, l.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, o ?? "", "success");
    try {
        return {
            paymentSource: await M(
                S.kM_.ADYEN,
                JSON.stringify(s),
                e,
                { billingAddressToken: a, analyticsLocation: n, returnUrl: _ },
                i,
            ),
            redirectConfirmation: !1,
        };
    } catch (t) {
        if (t.code !== d.tG.CONFIRMATION_REQUIRED)
            throw (
                (u.h.dispatch({
                    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                    error: new c.Ey(
                        `Unable to create payment source token: code: ${t?.code} message: ${t?.message}`,
                        c.Ey.ErrorCodes.UNKNOWN,
                    ),
                }),
                t)
            );
        let e = t.fields.adyen_redirect_url;
        if (null == e) throw V("redirect url cannot be null on a redirect for adyen.");
        return eE(e), { redirectConfirmation: !0 };
    }
}
async function en(e) {
    if (S.DYY.has(e.type)) return null;
    let t = await y.Cv();
    if (null == t) throw new c.Ey("Stripe not loaded", c.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: r, line1: i, line2: s, city: o, state: l, postalCode: u, country: d } = e.billingAddress,
        _ = {
            billing_details: {
                address: { line1: i, line2: s, city: o, state: l, postal_code: u, country: d },
                name: r,
            },
        };
    switch (e.type) {
        case b.he.GIROPAY:
            _.type = "giropay";
            break;
        case b.he.SOFORT:
            (_.type = "sofort"), (_.sofort = { country: d ?? "" }), (_.billing_details.email = n);
            break;
        case b.he.BANCONTACT:
            _.type = "bancontact";
            break;
        case b.he.IDEAL:
            (_.type = "ideal"), (_.ideal = { bank: e.bank });
            break;
        case b.he.PRZELEWY24:
            if (null == e.bank) throw new c.Ey("p24 missing bank information", c.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (_.type = "p24"), (_.p24 = { bank: e.bank }), (_.billing_details.email = e.email);
            break;
        case b.he.EPS:
            if (null == e.bank) throw new c.Ey("EPS missing bank information", c.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (_.type = "eps"), (_.eps = { bank: e.bank });
    }
    a()(null != _.type, "unsupported payment method type");
    let { paymentMethod: f, error: p } = await t.createPaymentMethod(_);
    if (null != p || null == f)
        throw new c.Ey(
            `Unable to create payment source token: code: ${p?.code} message: ${p?.message}`,
            c.Ey.ErrorCodes.UNKNOWN,
        );
    return f.id;
}
function er(e) {
    return S.DYY.has(e.type) ? null : b.Kc.has(e.type) ? P(e) : en(e);
}
async function ei() {
    if (!m.A.isPaymentSourceFetching)
        try {
            let e = l.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCES, oldFormErrors: !0, rejectWithError: !1 });
            u.h.wait(() => u.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: e }));
            let t = await e;
            return u.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: t.body }), t;
        } catch (e) {
            throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" }), e);
        }
}
async function ea(e) {
    try {
        let t = l.Bo.get({ url: S.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = await t,
            r = p.Ay.createFromServer(n.body);
        return u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: r }), n;
    } catch (e) {
        throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" }), e);
    }
}
async function es(e) {
    let t = await l.Bo.get({ url: S.Rsh.BILLING_PAYMENT(e), rejectWithError: !0 });
    return u.h.dispatch({ type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: t.body }), t;
}
async function eo() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        t = arguments.length > 1 ? arguments[1] : void 0;
    u.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
    try {
        let n = await l.Bo.get({
            url: S.Rsh.BILLING_PAYMENTS,
            query: { limit: e, before: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return u.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: n.body }), n;
    } catch (e) {
        throw (u.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" }), e);
    }
}
async function el() {
    u.h.wait(() => {
        u.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = v.En.ADD_PERKS_IF_DETECTED,
            t = g.A.getLastLazyPerkSync();
        (null == t || o()().diff(t, "hours") >= 1) && ((e = v.En.FULL_RESYNC), (t = o()()));
        let n = await l.Bo.get({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            oldFormErrors: !0,
            rejectWithError: !1,
            query: { sync_level: e },
        });
        if (null == n.body) throw new c.Ey(`response body is null, response: ${JSON.stringify(n)}`, n.status);
        return (
            u.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: n.body, lastLazyPerkSync: t }), n
        );
    } catch (e) {
        throw (u.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_FAIL" }), e);
    }
}
async function eu() {
    try {
        let e = await l.Bo.get({ url: S.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        u.h.dispatch({ type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new h.A(e)) });
    } finally {
        u.h.dispatch({ type: "BILLING_NITRO_AFFINITY_FETCHED" });
    }
}
async function ec() {
    u.h.wait(() => {
        u.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = await l.Bo.get({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 2, exclude_unpaid_statuses: !0, subscription_type: b.rz.PREMIUM },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return (
            e.ok
                ? (u.h.dispatch({
                      type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                      subscription: e.body.length > 0 ? e.body[0] : null,
                  }),
                  u.h.dispatch({
                      type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                      subscription: e.body.length > 1 ? e.body[1] : null,
                  }))
                : u.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" }),
            e
        );
    } catch (e) {
        u.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" });
    }
}
async function ed(e) {
    let {
        items: t,
        paymentSource: n,
        trialId: r,
        code: i,
        currency: a,
        metadata: s,
        referralCode: o,
        loadId: _,
        expectedInvoicePrice: f,
        expectedRenewalPrice: p,
    } = e;
    u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" }), (t = (0, I.qn)(t));
    let h = null;
    if (null != n && b.Kc.has(n.type)) {
        let e = await eL(n.type);
        h = (0, l.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let e = await l.Bo.post({
            url: S.Rsh.BILLING_SUBSCRIPTIONS,
            body: {
                items: t.map((e) => {
                    let { planId: t, quantity: n } = e;
                    return { plan_id: t, quantity: n };
                }),
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await er(n) : null,
                trial_id: r,
                return_url: h,
                code: i,
                currency: null != n ? a : b.Yr.USD,
                metadata: s,
                gateway_checkout_context: await (0, A.ob)(n),
                purchase_token: (0, T.r)(),
                referral_code: o,
                load_id: _,
                expected_invoice_price: f,
                expected_renewal_price: p,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: e.body }),
            { subscription: e.body, redirectConfirmation: !1 }
        );
    } catch (t) {
        let e = t instanceof c.Ey ? t : new c.Ey(t);
        if (
            (u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }),
            e.code !== d.tG.CONFIRMATION_REQUIRED)
        )
            throw e;
        if (!t.body.payment_id) throw V("payment id cannot be null on redirected confirmations.");
        return ef(t.body, n);
    }
}
async function e_(e, t, n, r) {
    let i = null;
    if (null != n && b.AD.has(n.type)) {
        let e = await eL(n.type);
        i = (0, l.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let a = await l.Bo.post({
            url: S.Rsh.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
            body: {
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await er(n) : null,
                return_url: i,
                currency: r,
                purchase_token: (0, T.r)(),
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: a.body }),
            { subscription: a.body, redirectConfirmation: S.CmT.has(n.type) }
        );
    } catch (t) {
        let e = t instanceof c.Ey ? t : new c.Ey(t);
        if (e.code !== d.tG.CONFIRMATION_REQUIRED)
            throw (u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
        if (!t.body.payment_id) throw V("payment id cannot be null on redirected confirmations.");
        return ef(t.body, n);
    }
}
function ef(e, t) {
    return null != t && b.Kc.has(t.type) ? ep(e.adyen_redirect_url, t) : eh(e.payment_id, t);
}
async function ep(e, t) {
    if (null == e) throw V("redirect url cannot be null on a redirect for adyen.");
    if (null == t) throw V("Payment source cannot be null on a redirect.");
    return S.CmT.has(t.type)
        ? (eE(e), { redirectConfirmation: !0, redirectURL: e })
        : { redirectConfirmation: !1, redirectURL: e };
}
async function eh(e, t) {
    let n = await y.Cv();
    if (null == t) throw V("Payment source cannot be null on a redirect.");
    let { clientSecret: r, paymentMethodId: i } = await w(e);
    if (null == n) throw V("Stripe cannot be null on a redirect.");
    if (S.CmT.has(t.type)) {
        let e = await eL(t.type);
        return eE(await eI({ stripe: n, paymentSource: t, clientSecret: r, state: e })), { redirectConfirmation: !0 };
    }
    return await eA({ stripe: n, clientSecret: r, paymentMethodId: i, paymentSource: t }), { redirectConfirmation: !1 };
}
async function em(e) {
    let t = await es(e);
    if (t?.body == null) throw V("could not fetch payment");
    let n = p.Ay.createFromServer(t.body.payment_source);
    if (!S.CmT.has(n.type)) throw V("unsupported redirect payment source");
    if (t?.body?.status === b.__.FAILED) throw V("payment failed");
    return n.paymentGateway !== S.kM_.STRIPE || eg(e);
}
async function eg(e) {
    let t = await y.Cv();
    if (null == t) throw V("Stripe has not loaded.");
    if (null == e) throw V("payment intent id cannot be null.");
    let n = await L(e),
        { paymentIntent: r, error: i } = await t.retrievePaymentIntent(n);
    if (null != i) throw V(i);
    if (null == r) throw V("paymentIntent not available with successful stripe call");
    if (null != r.last_payment_error) throw V(`unable to retrieve payment intent ${r.last_payment_error}`);
    return !0;
}
function eE(e) {
    window.open(e);
}
async function eA(e) {
    let t,
        { stripe: n, paymentSource: r, paymentMethodId: i, clientSecret: a } = e,
        s = {};
    if (r.type === b.he.SEPA_DEBIT) {
        if (null == i) throw V("On a sepa payment payment method id cannot be null");
        (s.payment_method = i), (t = n.confirmSepaDebitPayment);
    } else throw V("Unsupported redirected payment source type.");
    let { paymentIntent: o, error: l } = await t(a, s);
    if (null != l) throw V(l);
    if (null == o) throw V("paymentIntent not available with successful stripe call");
}
async function eI(e) {
    let t,
        { stripe: n, paymentSource: r, clientSecret: i, state: a } = e,
        s = {};
    switch (r.type) {
        case b.he.GIROPAY:
            (s = { billing_details: { name: r.billingAddress.name } }), (t = n.confirmGiropayPayment);
            break;
        case b.he.BANCONTACT:
            (s = { billing_details: { name: r.billingAddress.name, email: r.email } }),
                (t = n.confirmBancontactPayment);
            break;
        case b.he.SOFORT:
            (s = {
                sofort: { country: r.billingAddress.country },
                billing_details: { name: r.billingAddress.name, email: r.email },
            }),
                (t = n.confirmSofortPayment);
            break;
        case b.he.PRZELEWY24:
            if (null == r.bank) throw V(`PaymentSource (${r.id}) missing bank info for p24.`);
            (s = { p24: { bank: r.bank }, billing_details: { name: r.billingAddress.name, email: r.email } }),
                (t = n.confirmP24Payment);
            break;
        case b.he.EPS:
            if (null == r.bank) throw V(`PaymentSource (${r.id}) missing bank info for EPS.`);
            (s = { eps: { bank: r.bank }, billing_details: { name: r.billingAddress.name } }),
                (t = n.confirmEpsPayment);
            break;
        case b.he.IDEAL:
            (s = { ideal: {}, billing_details: { name: r.billingAddress.name } }),
                null != r.bank && (s.ideal = { bank: r.bank }),
                (t = n.confirmIdealPayment);
            break;
        default:
            throw V("Unsupported redirected payment source type.");
    }
    let { paymentIntent: o, error: u } = await t(
        i,
        {
            payment_method: s,
            return_url: (0, l.TP)() + S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, a ?? "", "success"),
        },
        { handleActions: !1 },
    );
    if (null != u) throw V(u);
    if (null == o) throw V("paymentIntent not available with successful api call");
    if (o.next_action?.redirect_to_url?.url == null) throw V("confirm payment did not return a redirect url");
    return o.next_action.redirect_to_url.url;
}
async function eT(e, t, n) {
    u.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
    try {
        let r = await l.Bo.del({
            url: S.Rsh.BILLING_SUBSCRIPTION(e),
            query: { location: n, location_stack: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return u.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" }), r;
    } catch (t) {
        let e = new c.Ey(t);
        throw (u.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_FAIL", error: e }), e);
    }
}
function ey(e, t) {
    return eS(
        e,
        { items: e.items },
        { amount: 0, currency: e.currency },
        (0, I.UC)(e.items, e.currency, e.paymentSourceId),
        t,
    );
}
async function eS(e, t, n, r, i, a, s) {
    if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
    u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    try {
        let o = {
            status: t.status,
            payment_source_id: t.paymentSource?.id,
            payment_source_token: null != t.paymentSource ? await er(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, A.ob)(t.paymentSource),
            load_id: s,
            pause_duration: t.pauseDuration,
            purchase_token: (0, T.r)(),
            expected_invoice_price: n,
            expected_renewal_price: r,
        };
        if (null != t.paymentSource && b.Kc.has(t.paymentSource.type)) {
            let e = await eL(t.paymentSource.type);
            o.return_url =
                (0, l.TP)() +
                S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, e ?? "", "success");
        }
        null != t.items &&
            (o.items = (0, I.qn)(t.items).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }));
        let c = await l.Bo.patch({
            url: S.Rsh.BILLING_SUBSCRIPTION(e.id),
            query: { location: a, location_stack: i },
            body: o,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: c.body }),
            { subscription: c.body, redirectConfirmation: !1 }
        );
    } catch (n) {
        let e = n instanceof c.Ey ? n : new c.Ey(n);
        if (e.code !== d.tG.CONFIRMATION_REQUIRED)
            throw (u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
        if (!n.body.payment_id) throw V("payment id cannot be null on redirected confirmations.");
        return ef(n.body, t.paymentSource);
    }
}
function ev(e, t, n, r, i) {
    return eS(
        e,
        { status: S.Dmq.ACTIVE, paymentSource: n, currency: r },
        { amount: 0, currency: e.currency },
        (0, I.UC)(e.items, e.currency, n?.id),
        t,
        i,
    );
}
function eC(e, t, n, r, i, a) {
    let s = (0, I.GX)(e, t);
    return eS(e, { status: S.Dmq.ACTIVE, items: s }, n, r, i, a);
}
function eb(e, t, n, r, i) {
    return eS(e, { currency: t }, { amount: 0, currency: t.toLowerCase() }, n, r, i);
}
function eN(e, t, n, r, i, a) {
    return eS(e, { paymentSource: t, currency: n }, { amount: 0, currency: n.toLowerCase() }, r, i, a);
}
function eR() {
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
}
function eO() {
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
}
async function eD(e) {
    await l.Bo.post({ url: S.Rsh.BILLING_PAYMENTS_VOID(e), oldFormErrors: !0, rejectWithError: !1 });
}
async function eL(e) {
    let {
        body: { state: t },
    } = await l.Bo.post({ url: S.Rsh.BILLING_POPUP_BRIDGE(e), oldFormErrors: !0, rejectWithError: !0 });
    return u.h.dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: t, paymentSourceType: e }), t;
}
function ew(e) {
    let { paymentSourceType: t, state: n, path: r, query: i, insecure: a } = e;
    return (
        u.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType: t }),
        l.Bo.post({
            url: S.Rsh.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: { state: n, path: r, query: i, insecure: a },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => (u.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType: t }), e))
    );
}
async function ex() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != m.A.ipCountryCodeRequest) return m.A.ipCountryCodeRequest;
    try {
        let e = l.Bo.get({ url: S.Rsh.BILLING_COUNTRY_CODE, rejectWithError: !1 });
        u.h.wait(() => u.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: e }));
        let t = await e,
            n = t.body.country_code;
        return u.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }), t;
    } catch (e) {
        return u.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" }), e;
    }
}
async function eP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != m.A.ipLocationRequest) return m.A.ipLocationRequest;
    try {
        let e = l.Bo.get({ url: S.Rsh.BILLING_LOCATION, rejectWithError: !1 });
        u.h.wait(() => u.h.dispatch({ type: "BILLING_IP_LOCATION_FETCH_START", request: e }));
        let t = await e,
            n = t.body.country_code,
            r = t.body.subdivision_code,
            i = { countryCode: n, subdivisionCode: r };
        return (
            u.h.dispatch({ type: "BILLING_SET_IP_LOCATION", location: i }),
            u.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }),
            t
        );
    } catch (e) {
        return (
            E.default.track(S.HAw.BILLING_IP_LOCATION_FETCH_ERROR, { error_message: e.message }),
            u.h.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" }),
            e
        );
    }
}
function eM() {
    u.h.dispatch({ type: "RESET_PAYMENT_ID" });
}
function ek() {
    u.h.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
}
function eU(e) {
    u.h.dispatch({ type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId: e });
}
async function eG(e, t) {
    try {
        let n = await l.Bo.post({ url: S.Rsh.REACTIVATION_OFFER_REDEEM(e.id, t.id), rejectWithError: !1 });
        u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: n.body });
    } catch (t) {
        let e = t instanceof c.Ey ? t : new c.Ey(t);
        u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e });
    }
}
