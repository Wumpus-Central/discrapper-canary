"use strict";
n.d(t, { C8: () => I, FP: () => g, Kq: () => A, OQ: () => E, sL: () => T });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(562465),
    o = n(73153),
    l = n(198982),
    u = n(570221),
    d = n(927578),
    c = n(371794),
    _ = n(652215);
async function f(e) {
    let {
            items: t,
            paymentSourceId: n,
            trialId: r,
            code: i,
            applyEntitlements: s = !1,
            currency: c,
            renewal: f,
            metadata: E,
        } = e,
        h = {
            items: (t = (0, d.qn)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }),
            payment_source_id: n,
            trial_id: r,
            code: i,
            apply_entitlements: s,
            currency: c,
            renewal: f,
            metadata: E,
        };
    try {
        let e = await a.Bo.post({
                url: _.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: h,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            t = u.A.createInvoiceFromServer(e.body);
        return (
            t.checkoutContext?.payment_sources != null &&
                o.h.dispatch({
                    type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                    checkoutContext: t.checkoutContext,
                    paymentSourceId: n,
                }),
            t
        );
    } catch (e) {
        throw new l.Ey(e);
    }
}
async function E(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: r,
        renewal: i,
        currency: s,
        applyEntitlements: c = !1,
        analyticsLocations: f,
        analyticsLocation: E,
        userDiscountOfferId: h,
    } = e;
    null != n && (n = (0, d.qn)(n));
    let p = {
        items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
        }),
        payment_source_id: r,
        renewal: i,
        apply_entitlements: c,
        currency: s,
        user_discount_offer_id: h,
    };
    try {
        let e = await a.Bo.patch({
                url: _.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: { location: E, location_stack: f },
                body: p,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = u.A.createInvoiceFromServer(e.body);
        return (
            null != r &&
                n.checkoutContext?.payment_sources != null &&
                o.h.dispatch({
                    type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                    checkoutContext: n.checkoutContext,
                    paymentSourceId: r,
                }),
            n
        );
    } catch (e) {
        throw new l.Ey(e);
    }
}
async function h(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: i, loadId: a } = e;
    s()(n, "SKU ID is missing for one time purchase gift invoice preview");
    try {
        let e = await (0, c.aP)({
            url: _.Rsh.STORE_SKU_PURCHASE(n),
            query: { gift: !0, payment_source_id: t, sku_subscription_plan_id: r, currency: i, load_id: a },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return u.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.Ey(e);
    }
}
async function p(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await a.Bo.get({ url: _.Rsh.BILLING_SUBSCRIPTION_INVOICE(t), oldFormErrors: !0, rejectWithError: !1 });
    return u.A.createInvoiceFromServer(r.body);
}
function m(e, t) {
    let { preventFetch: n = !1 } = e,
        [i, s] = (0, r.useState)(null),
        [a, o] = (0, r.useState)(null);
    return (
        (0, r.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    o(null);
                    let n = await t();
                    e || s(n);
                } catch (t) {
                    e || (o(t), s(null));
                }
            }
            return (
                n || r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [i, a]
    );
}
function g(e) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return m(
        e,
        (0, r.useCallback)(() => h(t.current), [n]),
    );
}
function A(e) {
    if ("subscriptionId" in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e),
        i = (0, r.useCallback)(() => {
            let { current: e } = t;
            return "subscriptionId" in e ? E(e) : "items" in e ? f(e) : null;
        }, [n]);
    return m(e, i);
}
function I(e) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return m(
        e,
        (0, r.useCallback)(() => p(t.current), [n]),
    );
}
function T(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
