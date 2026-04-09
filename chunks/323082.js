"use strict";
n.d(t, {
    $M: () => E.$M,
    $o: () => v,
    A8: () => E.A8,
    CK: () => O,
    EB: () => E.EB,
    Gr: () => N,
    I8: () => L,
    IV: () => q,
    JQ: () => S,
    Ky: () => w,
    LD: () => M,
    M2: () => k,
    MM: () => x,
    N: () => W,
    Ps: () => y,
    QP: () => F,
    TD: () => E.TD,
    TK: () => R,
    Tv: () => E.Tv,
    YB: () => E.YB,
    YJ: () => E.YJ,
    YP: () => C,
    Z9: () => E.Z9,
    ZK: () => U,
    Ze: () => J,
    _D: () => ee,
    bl: () => X,
    bw: () => E.bw,
    ey: () => j,
    ge: () => V,
    hP: () => b,
    i0: () => g.i0,
    im: () => E.im,
    jV: () => E.jV,
    jZ: () => Z,
    jf: () => g.jf,
    nV: () => G,
    ne: () => E.ne,
    r6: () => B,
    re: () => K,
    tc: () => Y,
    tn: () => P,
    u1: () => E.u1,
    u6: () => E.u6,
    uK: () => H,
    uZ: () => Q,
    xG: () => D,
    xe: () => $,
});
var r = n(989349),
    i = n.n(r),
    s = n(562465),
    a = n(73153),
    o = n(198982),
    l = n(136857),
    u = n(202613),
    c = n(427157),
    d = n(615405),
    _ = n(166403),
    f = n(954571),
    p = n(739508),
    h = n(927578),
    m = n(107351),
    E = n(362762),
    g = n(895313),
    A = n(652215),
    I = n(601107),
    T = n(818348);
async function S(e) {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
    try {
        await s.Bo.del({ url: A.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: e });
    } catch (t) {
        let e = new o.Ey(t);
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: e }), e);
    }
}
async function y(e, t) {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
    try {
        let {
                billingAddress: { line1: n, line2: r, postalCode: i, ...o },
            } = t,
            l = await s.Bo.patch({
                url: A.Rsh.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: { ...o, line_1: n, line_2: r, postal_code: i },
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
async function v() {
    if (!d.A.isPaymentSourceFetching)
        try {
            let e = s.Bo.get({ url: A.Rsh.BILLING_PAYMENT_SOURCES, oldFormErrors: !0, rejectWithError: !1 });
            a.h.wait(() => a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: e }));
            let t = await e;
            return a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: t.body }), t;
        } catch (e) {
            throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" }), e);
        }
}
async function N(e) {
    try {
        let t = s.Bo.get({ url: A.Rsh.BILLING_PAYMENT_SOURCE(e), oldFormErrors: !0, rejectWithError: !1 }),
            n = await t,
            r = u.Ay.createFromServer(n.body);
        return a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: r }), n;
    } catch (e) {
        throw (a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" }), e);
    }
}
async function C(e) {
    a.h.dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId: e });
    try {
        let t = await s.Bo.get({
                url: A.Rsh.BILLING_WALLET_INFORMATION(e),
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
async function R(e) {
    let t = await s.Bo.get({ url: A.Rsh.BILLING_PAYMENT(e), rejectWithError: !0 });
    return a.h.dispatch({ type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: t.body }), t;
}
async function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        t = arguments.length > 1 ? arguments[1] : void 0;
    a.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
    try {
        let n = await s.Bo.get({
            url: A.Rsh.BILLING_PAYMENTS,
            query: { limit: e, before: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return a.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: n.body }), n;
    } catch (e) {
        throw (a.h.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" }), e);
    }
}
async function b() {
    a.h.wait(() => {
        a.h.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = I.En.ADD_PERKS_IF_DETECTED,
            t = _.A.getLastLazyPerkSync();
        (null == t || i()().diff(t, "hours") >= 1) && ((e = I.En.FULL_RESYNC), (t = i()()));
        let n = await s.Bo.get({
            url: A.Rsh.BILLING_SUBSCRIPTIONS,
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
async function D() {
    try {
        let e = await s.Bo.get({ url: A.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        a.h.dispatch({ type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new c.A(e)) });
    } finally {
        a.h.dispatch({ type: "BILLING_NITRO_AFFINITY_FETCHED" });
    }
}
async function L() {
    a.h.wait(() => {
        a.h.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    });
    try {
        let e = await s.Bo.get({
            url: A.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 2, exclude_unpaid_statuses: !0, subscription_type: T.rz.PREMIUM },
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
async function w(e) {
    let {
        items: t,
        paymentSource: n,
        trialId: r,
        code: i,
        currency: u,
        metadata: c,
        referralCode: d,
        loadId: _,
        expectedInvoicePrice: f,
        expectedRenewalPrice: I,
    } = e;
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" }), (t = (0, h.qn)(t));
    let S = null;
    if (null != n && T.Kc.has(n.type)) {
        let e = await (0, g.jf)(n.type);
        S = (0, s.TP)() + A.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let e = await s.Bo.post({
            url: A.Rsh.BILLING_SUBSCRIPTIONS,
            body: {
                items: t.map((e) => {
                    let { planId: t, quantity: n } = e;
                    return { plan_id: t, quantity: n };
                }),
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await (0, E.jV)(n) : null,
                trial_id: r,
                return_url: S,
                code: i,
                currency: null != n ? u : T.Yr.USD,
                metadata: c,
                gateway_checkout_context: await (0, p.ob)(n),
                purchase_token: (0, m.r)(),
                referral_code: d,
                load_id: _,
                expected_invoice_price: f,
                expected_renewal_price: I,
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
        if (!t.body.payment_id) throw (0, g.i0)("payment id cannot be null on redirected confirmations.");
        return x(t.body, n);
    }
}
async function M(e, t, n, r, i) {
    let u = null;
    if (null != n && T.AD.has(n.type)) {
        let e = await (0, g.jf)(n.type);
        u = (0, s.TP)() + A.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, e ?? "", "success");
    }
    try {
        let o = await s.Bo.post({
            url: A.Rsh.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
            body: {
                payment_source_id: null != n ? n.id : null,
                payment_source_token: null != n ? await (0, E.jV)(n) : null,
                return_url: u,
                currency: r,
                purchase_token: (0, m.r)(),
                load_id: i,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: o.body }),
            { subscription: o.body, redirectConfirmation: A.CmT.has(n.type) }
        );
    } catch (t) {
        let e = t instanceof o.Ey ? t : new o.Ey(t);
        if (e.code !== l.tG.CONFIRMATION_REQUIRED)
            throw (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e }), e);
        if (!t.body.payment_id) throw (0, g.i0)("payment id cannot be null on redirected confirmations.");
        return x(t.body, n);
    }
}
function x(e, t) {
    return null != t && T.Kc.has(t.type) ? (0, E.$c)(e.adyen_redirect_url, t) : (0, E.dr)(e.payment_id, t);
}
async function P(e) {
    let t = await R(e);
    if (t?.body == null) throw (0, g.i0)("could not fetch payment");
    let n = u.Ay.createFromServer(t.body.payment_source);
    if (!A.CmT.has(n.type)) throw (0, g.i0)("unsupported redirect payment source");
    if (t?.body?.status === T.__.FAILED) throw (0, g.i0)("payment failed");
    return n.paymentGateway !== A.kM_.STRIPE || (0, E.Ez)(e);
}
async function k(e, t, n) {
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
    try {
        let r = await s.Bo.del({
            url: A.Rsh.BILLING_SUBSCRIPTION(e),
            query: { location: n, location_stack: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return a.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" }), r;
    } catch (t) {
        let e = new o.Ey(t);
        throw (a.h.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_FAIL", error: e }), e);
    }
}
function U(e, t) {
    return G(
        e,
        { items: e.items },
        { amount: 0, currency: e.currency },
        (0, h.UC)(e.items, e.currency, e.paymentSourceId),
        t,
    );
}
async function G(e, t, n, r, i, u, c) {
    if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    try {
        let o = {
            status: t.status,
            payment_source_id: t.paymentSource?.id,
            payment_source_token: null != t.paymentSource ? await (0, E.jV)(t.paymentSource) : null,
            currency: t.currency,
            gateway_checkout_context: await (0, p.ob)(t.paymentSource),
            load_id: c,
            pause_duration: t.pauseDuration,
            purchase_token: (0, m.r)(),
            expected_invoice_price: n,
            expected_renewal_price: r,
        };
        if (null != t.paymentSource && T.Kc.has(t.paymentSource.type)) {
            let e = await (0, g.jf)(t.paymentSource.type);
            o.return_url =
                (0, s.TP)() +
                A.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, e ?? "", "success");
        }
        null != t.items &&
            (o.items = (0, h.qn)(t.items).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }));
        let l = await s.Bo.patch({
            url: A.Rsh.BILLING_SUBSCRIPTION(e.id),
            query: { location: u, location_stack: i },
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
        if (!n.body.payment_id) throw (0, g.i0)("payment id cannot be null on redirected confirmations.");
        return x(n.body, t.paymentSource);
    }
}
function F(e, t, n, r, i) {
    return G(
        e,
        { status: A.Dmq.ACTIVE, paymentSource: n, currency: r },
        { amount: 0, currency: e.currency },
        (0, h.UC)(e.items, e.currency, n?.id),
        t,
        i,
    );
}
function V(e, t, n, r, i, s) {
    let a = (0, h.GX)(e, t);
    return G(e, { status: A.Dmq.ACTIVE, items: a }, n, r, i, s);
}
function B(e, t, n, r, i) {
    return G(e, { currency: t }, { amount: 0, currency: t.toLowerCase() }, n, r, i);
}
function H(e, t, n, r, i, s) {
    return G(e, { paymentSource: t, currency: n }, { amount: 0, currency: n.toLowerCase() }, r, i, s);
}
function j() {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
}
function Y() {
    a.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
}
async function W(e) {
    await s.Bo.post({ url: A.Rsh.BILLING_PAYMENTS_VOID(e), oldFormErrors: !0, rejectWithError: !1 });
}
function K(e) {
    let { paymentSourceType: t, state: n, path: r, query: i, insecure: o } = e;
    return (
        a.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType: t }),
        s.Bo.post({
            url: A.Rsh.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: { state: n, path: r, query: i, insecure: o },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => (a.h.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType: t }), e))
    );
}
async function $() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != d.A.ipCountryCodeRequest) return d.A.ipCountryCodeRequest;
    try {
        let e = s.Bo.get({ url: A.Rsh.BILLING_COUNTRY_CODE, rejectWithError: !1 });
        a.h.wait(() => a.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: e }));
        let t = await e,
            n = t.body.country_code;
        return a.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }), t;
    } catch (e) {
        return a.h.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" }), e;
    }
}
function z() {
    return s.Bo.get({ url: A.Rsh.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: !0, rejectWithError: !1 });
}
function q() {
    a.h.dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" }),
        z()
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
async function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && null != d.A.ipLocationRequest) return d.A.ipLocationRequest;
    try {
        let e = s.Bo.get({ url: A.Rsh.BILLING_LOCATION, rejectWithError: !1 });
        a.h.wait(() => a.h.dispatch({ type: "BILLING_IP_LOCATION_FETCH_START", request: e }));
        let t = await e,
            n = t.body.country_code,
            r = t.body.subdivision_code,
            i = { countryCode: n, subdivisionCode: r };
        return (
            a.h.dispatch({ type: "BILLING_SET_IP_LOCATION", location: i }),
            a.h.dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: n }),
            t
        );
    } catch (e) {
        return (
            f.default.track(A.HAw.BILLING_IP_LOCATION_FETCH_ERROR, { error_message: e.message }),
            a.h.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" }),
            e
        );
    }
}
function X() {
    a.h.dispatch({ type: "RESET_PAYMENT_ID" });
}
function Q() {
    a.h.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
}
function J(e) {
    a.h.dispatch({ type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId: e });
}
async function ee(e, t) {
    try {
        let n = await s.Bo.post({ url: A.Rsh.REACTIVATION_OFFER_REDEEM(e.id, t.id), rejectWithError: !1 });
        a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: n.body });
    } catch (t) {
        let e = t instanceof o.Ey ? t : new o.Ey(t);
        a.h.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: e });
    }
}
