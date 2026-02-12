"use strict";
n.d(t, {
    $M: () => en,
    $o: () => ea,
    A8: () => et,
    CK: () => eu,
    EB: () => H,
    Gr: () => es,
    I8: () => e_,
    JQ: () => D,
    Ky: () => ef,
    LD: () => eh,
    M2: () => eS,
    MM: () => ep,
    N: () => ew,
    Ps: () => L,
    QP: () => eb,
    TD: () => Y,
    TK: () => el,
    Tv: () => Q,
    YB: () => q,
    YJ: () => B,
    YP: () => eo,
    Z9: () => j,
    ZK: () => ev,
    Ze: () => eF,
    _D: () => eV,
    bl: () => eU,
    bw: () => ee,
    ey: () => eD,
    ge: () => eN,
    hP: () => ec,
    i0: () => V,
    im: () => X,
    jV: () => ei,
    jZ: () => ek,
    jf: () => ex,
    nV: () => eC,
    ne: () => F,
    r6: () => eR,
    re: () => eP,
    tc: () => eL,
    tn: () => eE,
    u1: () => J,
    u6: () => Z,
    uK: () => eO,
    uZ: () => eG,
    xG: () => ed,
    xe: () => eM,
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
    h = n(202613),
    p = n(427157),
    g = n(615405),
    E = n(166403),
    A = n(954571),
    I = n(739508),
    T = n(927578),
    y = n(107351),
    S = n(71532),
    v = n(652215),
    C = n(601107),
    b = n(535833),
    N = n(818348),
    R = n(985018);
let O = new f.A("BillingActionCreators.tsx");
async function D(e) {
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
    try {
        await l.Bo.del({ url: v.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: e });
    } catch (t) {
        let e = new c.Ey(t);
        throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: e }), e);
    }
}
async function L(e, t) {
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
    try {
        let {
                billingAddress: { line1: n, line2: r, postalCode: i, ...a },
            } = t,
            s = await l.Bo.patch({
                url: v.Rsh.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: { ...a, line_1: n, line_2: r, postal_code: i },
                    expires_month: t.expiresMonth,
                    expires_year: t.expiresYear,
                    default: t.isDefault,
                },
                rejectWithError: !1,
            }),
            o = h.Ay.createFromServer(s.body);
        u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: o });
    } catch (t) {
        let e = (0, d.Wd)(t);
        throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL", error: e }), e);
    }
}
async function w(e) {
    let { stripe_payment_intent_client_secret: t } = (
        await l.Bo.get({ url: v.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return t;
}
async function x(e) {
    let { stripe_payment_intent_client_secret: t, stripe_payment_intent_payment_method_id: n } = (
        await l.Bo.get({ url: v.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body;
    return { clientSecret: t, paymentMethodId: n };
}
async function P(e) {
    try {
        return (
            await l.Bo.post({
                url: v.Rsh.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
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
function M(e) {
    return v.DYY.has(e.type) ? null : JSON.stringify({ type: N.Kc.get(e.type) ?? null });
}
async function k(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    try {
        let a = await l.Bo.post({
                url: v.Rsh.BILLING_PAYMENT_SOURCES,
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
            s = h.Ay.createFromServer(a.body);
        return u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: s }), s;
    } catch (t) {
        let e = (0, d.Wd)(t);
        throw (
            (U(e, t),
            e.code !== d.tG.CONFIRMATION_REQUIRED &&
                u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }),
            e)
        );
    }
}
function U(e, t) {
    t?.body?.adyen_redirect_url && (e.fields.adyen_redirect_url = t?.body?.adyen_redirect_url);
}
function G(e) {
    return b.D.includes(e.type);
}
function F(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : R.intl.string(R.t.khEaRI);
    return V(e, t, n, { tags: { source: "payment_elements" } });
}
function V(e) {
    let t,
        n,
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : R.intl.string(R.t.khEaRI),
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (G(e)) {
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
                (A.default.track(v.HAw.PAYMENT_SOURCE_CREATION_FAILED, { ...s, stacktrace: Error().stack }), (r = !1)),
            (t = new c.Ey(a));
    } else
        (n = { failure_message: (t = new c.Ey("string" == typeof e ? i : e)).message, status_code: t.code }),
            429 === t.code && (r = !1);
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: t });
    let s = Error("string" == typeof e ? e : t.message);
    return r && (0, I.pM)(s, { ...a, extra: { ...n, ...a.extra } }), s;
}
async function B(e, t) {
    if (null == e || null == t) throw V("Stripe or elements not loaded");
    let n = t.getElement(r.CardNumberElement);
    if (null == n) throw V("Unable to load card elements from Stripe");
    let { token: i, error: a } = await e.createToken(n);
    if (null != a) throw V(a);
    if (null == i) throw V("token not available with successful stripe call");
    return i.id;
}
async function j(e, t, n, r) {
    if (null == e) throw V("Stripe not loaded");
    if (null == t) throw V("Bank required for EPS");
    let { email: i, name: a, line1: s, line2: o, city: l, state: c, postalCode: d, country: _ } = n;
    if (null == a) throw V("Name required for EPS");
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await P(n),
        { paymentMethod: h, error: p } = await e.createPaymentMethod({
            type: "eps",
            eps: { bank: t },
            billing_details: {
                address: { line1: s, line2: o, city: l, state: c, postal_code: d, country: _ },
                name: a,
                email: i,
            },
        });
    if (null != p) throw V(p);
    if (null == h) throw V("paymentMethod not available with successful stripe call");
    return k(v.kM_.STRIPE, h.id, n, { billingAddressToken: f, analyticsLocation: r, bank: t });
}
async function H(e, t, n) {
    if (null == e) throw V("Stripe not loaded");
    let { email: r, name: i, line1: a, line2: s, city: o, state: l, postalCode: c, country: d } = t;
    if (null == i) throw V("Name required for iDEAL");
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let _ = await P(t),
        { paymentMethod: f, error: h } = await e.createPaymentMethod({
            type: "ideal",
            ideal: {},
            billing_details: {
                address: { line1: a, line2: s, city: o, state: l, postal_code: c, country: d },
                name: i,
                email: r,
            },
        });
    if (null != h) throw V(h);
    if (null == f) throw V("paymentMethod not available with successful stripe call");
    return k(v.kM_.STRIPE, f.id, t, { billingAddressToken: _, analyticsLocation: n });
}
async function Y(e, t, n, r) {
    if (null == e) throw V("Stripe not loaded");
    let { email: i, name: a, line1: s, line2: o, city: l, state: c, postalCode: d, country: _ } = n;
    if (null == i) throw V("Email required for Przelewy24");
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let f = await P(n),
        h = t.p24Bank,
        { paymentMethod: p, error: g } = await e.createPaymentMethod({
            type: "p24",
            p24: { bank: h },
            billing_details: {
                address: { line1: s, line2: o, city: l, state: c, postal_code: d, country: _ },
                name: a,
                email: i,
            },
        });
    if (null != g) throw V(g);
    if (null == p) throw V("paymentMethod not available with successful stripe call");
    return k(v.kM_.STRIPE, p.id, n, { billingAddressToken: f, analyticsLocation: r, bank: h });
}
let W = (e, t, n) => {
        if (null != t) throw n(t);
        if (null == e) throw n("SetupIntent not created");
        if (null == e.payment_method) throw n("setupIntent.payment_method not available with successful stripe call");
        return (
            a()("string" == typeof e.payment_method, "setupIntent.payment_method expanded not supported"),
            { setupIntent: e, error: t }
        );
    },
    K = (e) =>
        null != e &&
        "setup_intent_unexpected_state" === e.code &&
        null != e.setup_intent &&
        "succeeded" === e.setup_intent.status,
    $ = async (e) => {
        if (null == e) throw F("Stripe Elements not loaded", !0);
        let t = await e.submit();
        if ((O.info("Stripe Elements submit response: ", t), null != t.error))
            throw (O.error("Stripe Elements submit error: ", t.error), F(t.error, !0));
        return t;
    },
    z = async (e, t) => {
        let { paymentMethod: n, error: r } = await e.createPaymentMethod({ elements: t });
        if (null != r) throw (O.error("Stripe createPaymentMethod error: ", r), F(r, !0));
        if (null == n)
            throw (
                (O.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod: n, error: r }),
                F("paymentMethod not available with successful stripe call", !0))
            );
        return { paymentMethod: n, error: r };
    },
    q = async (e, t) => {
        if (null == e) throw F("Stripe not loaded", !0);
        if (null == t) throw F("Stripe Elements not loaded", !0);
        await $(t);
        let { paymentMethod: n, error: r } = await z(e, t);
        return { paymentMethod: n, error: r };
    };
async function X() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, i, { billingAddress: a, paymentSourceType: s, lastConfirmedSetupIntentRef: o }, l] = t;
    if (null == r) throw F("Stripe not loaded", !0);
    if (null == i) throw F("Stripe Elements not loaded", !0);
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    let c = await P(a);
    s !== N.he.PAYMENT_REQUEST && (await $(i));
    let d = null;
    if (s === N.he.CARD || s === N.he.PAYMENT_REQUEST) {
        let e = o.current ?? void 0,
            t =
                null != e && s === N.he.PAYMENT_REQUEST
                    ? { setupIntent: e ?? void 0, error: void 0 }
                    : await r.confirmSetup({ redirect: "if_required", elements: i });
        if (K(t.error) && s !== N.he.PAYMENT_REQUEST) {
            let { client_secret: e } = await (0, _.w)();
            await $(i), (t = await r.confirmSetup({ redirect: "if_required", clientSecret: e, elements: i }));
        }
        let { setupIntent: n } = W(t.setupIntent, t.error, (e) => F(e, !0));
        (o.current = n), (d = n.payment_method);
    } else {
        let { paymentMethod: e } = await z(r, i);
        d = e.id;
    }
    return k(v.kM_.STRIPE, d, a, { billingAddressToken: c, analyticsLocation: l });
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
    let a = await P(n),
        s = S._Z(n),
        { setupIntent: o, error: l } = await e.confirmCardSetup(i, {
            payment_method: { card: { token: t }, billing_details: s },
        }),
        { setupIntent: c } = W(o, l, (e) => V(e));
    return k(v.kM_.STRIPE, c.payment_method, n, { billingAddressToken: a, analyticsLocation: r });
}
function Q(e, t, n) {
    let { token: r, billingAddressInfo: i } = S.uK(e);
    return k(v.kM_.STRIPE, r, t ?? i, { analyticsLocation: n });
}
function J(e, t, n) {
    return k(v.kM_.BRAINTREE, e, t, { analyticsLocation: n });
}
async function ee(e, t, n, r) {
    if (null == e) throw V("Stripe not loaded");
    let i = await P(t),
        { name: s, line1: o, line2: l, city: u, state: c, postalCode: d, country: _ } = t,
        f = N.kv.get(n);
    a()(null != f, "unsupported payment method type");
    let { paymentMethod: h, error: p } = await e.createPaymentMethod({
        type: f,
        billing_details: { address: { line1: o, line2: l, city: u, state: c, postal_code: d, country: _ }, name: s },
    });
    if (null != p) throw V(p);
    if (null == h) throw V("stripePaymentMethod not available with successful stripe call");
    return k(v.kM_.STRIPE, h.id, t, { billingAddressToken: i, analyticsLocation: r });
}
async function et(e, t, n) {
    let r = await P(e),
        i = { type: N.Kc.get(t) };
    return k(v.kM_.ADYEN, JSON.stringify(i), e, { billingAddressToken: r, analyticsLocation: n });
}
async function en(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = await P(e),
        s = { type: N.Kc.get(t), ...(r?.paymentMethod ?? {}) },
        o = await ex(t),
        _ = (0, l.TP)() + v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, o ?? "", "success");
    try {
        return {
            paymentSource: await k(
                v.kM_.ADYEN,
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
        return eI(e), { redirectConfirmation: !0 };
    }
}
async function er(e) {
    if (v.DYY.has(e.type)) return null;
    let t = await S.Cv();
    if (null == t) throw new c.Ey("Stripe not loaded", c.Ey.ErrorCodes.UNKNOWN);
    let { email: n, name: r, line1: i, line2: s, city: o, state: l, postalCode: u, country: d } = e.billingAddress,
        _ = {
            billing_details: {
                address: { line1: i, line2: s, city: o, state: l, postal_code: u, country: d },
                name: r,
            },
        };
    switch (e.type) {
        case N.he.GIROPAY:
            _.type = "giropay";
            break;
        case N.he.SOFORT:
            (_.type = "sofort"), (_.sofort = { country: d ?? "" }), (_.billing_details.email = n);
            break;
        case N.he.BANCONTACT:
            _.type = "bancontact";
            break;
        case N.he.IDEAL:
            (_.type = "ideal"), (_.ideal = { bank: e.bank });
            break;
        case N.he.PRZELEWY24:
            if (null == e.bank) throw new c.Ey("p24 missing bank information", c.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (_.type = "p24"), (_.p24 = { bank: e.bank }), (_.billing_details.email = e.email);
            break;
        case N.he.EPS:
            if (null == e.bank) throw new c.Ey("EPS missing bank information", c.Ey.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
            (_.type = "eps"), (_.eps = { bank: e.bank });
    }
    a()(null != _.type, "unsupported payment method type");
    let { paymentMethod: f, error: h } = await t.createPaymentMethod(_);
    if (null != h || null == f)
        throw new c.Ey(
            `Unable to create payment source token: code: ${h?.code} message: ${h?.message}`,
            c.Ey.ErrorCodes.UNKNOWN,
        );
    return f.id;
}
function ei(e) {
    return v.DYY.has(e.type) ? null : N.Kc.has(e.type) ? M(e) : er(e);
}
async function ea() {
    if (!g.A.isPaymentSourceFetching)
        try {
            let e = l.Bo.get({ url: v.Rsh.BILLING_PAYMENT_SOURCES, oldFormErrors: !0, rejectWithError: !1 });
            u.h.wait(() => u.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: e }));
            let t = await e;
            return u.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: t.body }), t;
        } catch (e) {
            throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" }), e);
        }
}
async function es(e) {
    try {
        let t = l.Bo.get({ url: v.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = await t,
            r = h.Ay.createFromServer(n.body);
        return u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: r }), n;
    } catch (e) {
        throw (u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" }), e);
    }
}
async function eo(e) {
    try {
        let t = await l.Bo.get({
            url: v.Rsh.BILLING_WALLET_INFORMATION(e),
            query: { get_history: !1 },
            rejectWithError: !0,
        });
        return { currency: t.body.currency, amount: t.body.balance };
    } catch (e) {
        return null;
    }
}
async function el(e) {
    let t = await l.Bo.get({ url: v.Rsh.BILLING_PAYMENT(e), rejectWithError: !0 });
    return u.h.dispatch({ type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: t.body }), t;
}
async function eu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        t = arguments.length > 1 ? arguments[1] : void 0;
    u.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
    try {
        let n = await l.Bo.get({
            url: v.Rsh.BILLING_PAYMENTS,
            query: { limit: e, before: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return u.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: n.body }), n;
    } catch (e) {
        throw (u.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" }), e);
    }
}
async function ec() {
    u.h.wait(() => {
        u.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = C.En.ADD_PERKS_IF_DETECTED,
            t = E.A.getLastLazyPerkSync();
        (null == t || o()().diff(t, "hours") >= 1) && ((e = C.En.FULL_RESYNC), (t = o()()));
        let n = await l.Bo.get({
            url: v.Rsh.BILLING_SUBSCRIPTIONS,
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
async function ed() {
    try {
        let e = await l.Bo.get({ url: v.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        u.h.dispatch({ type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new p.A(e)) });
    } finally {
        u.h.dispatch({ type: "BILLING_NITRO_AFFINITY_FETCHED" });
    }
}
async function e_() {
    u.h.wait(() => {
        u.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = await l.Bo.get({
            url: v.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 2, exclude_unpaid_statuses: !0, subscription_type: N.rz.PREMIUM },
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
async function ef(e) {
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
        expectedRenewalPrice: h,
    } = e;
    u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" }), (t = (0, T.qn)(t));
    let p = null;
    if (null != n && N.Kc.has(n.type)) {
        let e = await ex(n.type);
        p = (0, l.TP)() + v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let e = await l.Bo.post({
            url: v.Rsh.BILLING_SUBSCRIPTIONS,
            body: {
                items: t.map((e) => {
                    let { planId: t, quantity: n } = e;
                    return { plan_id: t, quantity: n };
                }),
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await ei(n) : null,
                trial_id: r,
                return_url: p,
                code: i,
                currency: null != n ? a : N.Yr.USD,
                metadata: s,
                gateway_checkout_context: await (0, I.ob)(n),
                purchase_token: (0, y.r)(),
                referral_code: o,
                load_id: _,
                expected_invoice_price: f,
                expected_renewal_price: h,
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
        return ep(t.body, n);
    }
}
async function eh(e, t, n, r) {
    let i = null;
    if (null != n && N.AD.has(n.type)) {
        let e = await ex(n.type);
        i = (0, l.TP)() + v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let a = await l.Bo.post({
            url: v.Rsh.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
            body: {
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await ei(n) : null,
                return_url: i,
                currency: r,
                purchase_token: (0, y.r)(),
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: a.body }),
            { subscription: a.body, redirectConfirmation: v.CmT.has(n.type) }
        );
    } catch (t) {
        let e = t instanceof c.Ey ? t : new c.Ey(t);
        if (e.code !== d.tG.CONFIRMATION_REQUIRED)
            throw (u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
        if (!t.body.payment_id) throw V("payment id cannot be null on redirected confirmations.");
        return ep(t.body, n);
    }
}
function ep(e, t) {
    return null != t && N.Kc.has(t.type) ? em(e.adyen_redirect_url, t) : eg(e.payment_id, t);
}
async function em(e, t) {
    if (null == e) throw V("redirect url cannot be null on a redirect for adyen.");
    if (null == t) throw V("Payment source cannot be null on a redirect.");
    return v.CmT.has(t.type)
        ? (eI(e), { redirectConfirmation: !0, redirectURL: e })
        : { redirectConfirmation: !1, redirectURL: e };
}
async function eg(e, t) {
    let n = await S.Cv();
    if (null == t) throw V("Payment source cannot be null on a redirect.");
    let { clientSecret: r, paymentMethodId: i } = await x(e);
    if (null == n) throw V("Stripe cannot be null on a redirect.");
    if (v.CmT.has(t.type)) {
        let e = await ex(t.type);
        return eI(await ey({ stripe: n, paymentSource: t, clientSecret: r, state: e })), { redirectConfirmation: !0 };
    }
    return await eT({ stripe: n, clientSecret: r, paymentMethodId: i, paymentSource: t }), { redirectConfirmation: !1 };
}
async function eE(e) {
    let t = await el(e);
    if (t?.body == null) throw V("could not fetch payment");
    let n = h.Ay.createFromServer(t.body.payment_source);
    if (!v.CmT.has(n.type)) throw V("unsupported redirect payment source");
    if (t?.body?.status === N.__.FAILED) throw V("payment failed");
    return n.paymentGateway !== v.kM_.STRIPE || eA(e);
}
async function eA(e) {
    let t = await S.Cv();
    if (null == t) throw V("Stripe has not loaded.");
    if (null == e) throw V("payment intent id cannot be null.");
    let n = await w(e),
        { paymentIntent: r, error: i } = await t.retrievePaymentIntent(n);
    if (null != i) throw V(i);
    if (null == r) throw V("paymentIntent not available with successful stripe call");
    if (null != r.last_payment_error) throw V(`unable to retrieve payment intent ${r.last_payment_error}`);
    return !0;
}
function eI(e) {
    window.open(e);
}
async function eT(e) {
    let t,
        { stripe: n, paymentSource: r, paymentMethodId: i, clientSecret: a } = e,
        s = {};
    if (r.type === N.he.SEPA_DEBIT) {
        if (null == i) throw V("On a sepa payment payment method id cannot be null");
        (s.payment_method = i), (t = n.confirmSepaDebitPayment);
    } else throw V("Unsupported redirected payment source type.");
    let { paymentIntent: o, error: l } = await t(a, s);
    if (null != l) throw V(l);
    if (null == o) throw V("paymentIntent not available with successful stripe call");
}
async function ey(e) {
    let t,
        { stripe: n, paymentSource: r, clientSecret: i, state: a } = e,
        s = {};
    switch (r.type) {
        case N.he.GIROPAY:
            (s = { billing_details: { name: r.billingAddress.name } }), (t = n.confirmGiropayPayment);
            break;
        case N.he.BANCONTACT:
            (s = { billing_details: { name: r.billingAddress.name, email: r.email } }),
                (t = n.confirmBancontactPayment);
            break;
        case N.he.SOFORT:
            (s = {
                sofort: { country: r.billingAddress.country },
                billing_details: { name: r.billingAddress.name, email: r.email },
            }),
                (t = n.confirmSofortPayment);
            break;
        case N.he.PRZELEWY24:
            if (null == r.bank) throw V(`PaymentSource (${r.id}) missing bank info for p24.`);
            (s = { p24: { bank: r.bank }, billing_details: { name: r.billingAddress.name, email: r.email } }),
                (t = n.confirmP24Payment);
            break;
        case N.he.EPS:
            if (null == r.bank) throw V(`PaymentSource (${r.id}) missing bank info for EPS.`);
            (s = { eps: { bank: r.bank }, billing_details: { name: r.billingAddress.name } }),
                (t = n.confirmEpsPayment);
            break;
        case N.he.IDEAL:
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
            return_url: (0, l.TP)() + v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, a ?? "", "success"),
        },
        { handleActions: !1 },
    );
    if (null != u) throw V(u);
    if (null == o) throw V("paymentIntent not available with successful api call");
    if (o.next_action?.redirect_to_url?.url == null) throw V("confirm payment did not return a redirect url");
    return o.next_action.redirect_to_url.url;
}
async function eS(e, t, n) {
    u.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
    try {
        let r = await l.Bo.del({
            url: v.Rsh.BILLING_SUBSCRIPTION(e),
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
function ev(e, t) {
    return eC(
        e,
        { items: e.items },
        { amount: 0, currency: e.currency },
        (0, T.UC)(e.items, e.currency, e.paymentSourceId),
        t,
    );
}
async function eC(e, t, n, r, i, a, s) {
    if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
    u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    try {
        let o = {
            status: t.status,
            payment_source_id: t.paymentSource?.id,
            payment_source_token: null != t.paymentSource ? await ei(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, I.ob)(t.paymentSource),
            load_id: s,
            pause_duration: t.pauseDuration,
            purchase_token: (0, y.r)(),
            expected_invoice_price: n,
            expected_renewal_price: r,
        };
        if (null != t.paymentSource && N.Kc.has(t.paymentSource.type)) {
            let e = await ex(t.paymentSource.type);
            o.return_url =
                (0, l.TP)() +
                v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, e ?? "", "success");
        }
        null != t.items &&
            (o.items = (0, T.qn)(t.items).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }));
        let c = await l.Bo.patch({
            url: v.Rsh.BILLING_SUBSCRIPTION(e.id),
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
        return ep(n.body, t.paymentSource);
    }
}
function eb(e, t, n, r, i) {
    return eC(
        e,
        { status: v.Dmq.ACTIVE, paymentSource: n, currency: r },
        { amount: 0, currency: e.currency },
        (0, T.UC)(e.items, e.currency, n?.id),
        t,
        i,
    );
}
function eN(e, t, n, r, i, a) {
    let s = (0, T.GX)(e, t);
    return eC(e, { status: v.Dmq.ACTIVE, items: s }, n, r, i, a);
}
function eR(e, t, n, r, i) {
    return eC(e, { currency: t }, { amount: 0, currency: t.toLowerCase() }, n, r, i);
}
function eO(e, t, n, r, i, a) {
    return eC(e, { paymentSource: t, currency: n }, { amount: 0, currency: n.toLowerCase() }, r, i, a);
}
function eD() {
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
}
function eL() {
    u.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
}
async function ew(e) {
    await l.Bo.post({ url: v.Rsh.BILLING_PAYMENTS_VOID(e), oldFormErrors: !0, rejectWithError: !1 });
}
async function ex(e) {
    let {
        body: { state: t },
    } = await l.Bo.post({ url: v.Rsh.BILLING_POPUP_BRIDGE(e), oldFormErrors: !0, rejectWithError: !0 });
    return u.h.dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: t, paymentSourceType: e }), t;
}
function eP(e) {
    let { paymentSourceType: t, state: n, path: r, query: i, insecure: a } = e;
    return (
        u.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType: t }),
        l.Bo.post({
            url: v.Rsh.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: { state: n, path: r, query: i, insecure: a },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => (u.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType: t }), e))
    );
}
async function eM() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != g.A.ipCountryCodeRequest) return g.A.ipCountryCodeRequest;
    try {
        let e = l.Bo.get({ url: v.Rsh.BILLING_COUNTRY_CODE, rejectWithError: !1 });
        u.h.wait(() => u.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: e }));
        let t = await e,
            n = t.body.country_code;
        return u.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }), t;
    } catch (e) {
        return u.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" }), e;
    }
}
async function ek() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != g.A.ipLocationRequest) return g.A.ipLocationRequest;
    try {
        let e = l.Bo.get({ url: v.Rsh.BILLING_LOCATION, rejectWithError: !1 });
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
            A.default.track(v.HAw.BILLING_IP_LOCATION_FETCH_ERROR, { error_message: e.message }),
            u.h.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" }),
            e
        );
    }
}
function eU() {
    u.h.dispatch({ type: "RESET_PAYMENT_ID" });
}
function eG() {
    u.h.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
}
function eF(e) {
    u.h.dispatch({ type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId: e });
}
async function eV(e, t) {
    try {
        let n = await l.Bo.post({ url: v.Rsh.REACTIVATION_OFFER_REDEEM(e.id, t.id), rejectWithError: !1 });
        u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: n.body });
    } catch (t) {
        let e = t instanceof c.Ey ? t : new c.Ey(t);
        u.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e });
    }
}
