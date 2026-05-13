"use strict";
n.d(t, { $n: () => m, C8: () => I, OQ: () => h, QQ: () => g, YV: () => A, sL: () => T });
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(636537),
    o = n(228366),
    l = n(845584),
    u = n(570221),
    c = n(927578),
    d = n(371794),
    _ = n(652215);
async function f(e) {
    let {
            items: t,
            paymentSourceId: n,
            trialId: i,
            code: r,
            applyEntitlements: s = !1,
            currency: d,
            renewal: f,
            metadata: h,
        } = e,
        p = {
            items: (t = (0, c.qn)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }),
            payment_source_id: n,
            trial_id: i,
            code: r,
            apply_entitlements: s,
            currency: d,
            renewal: f,
            metadata: h,
        };
    try {
        let e = await a.Bo.post({
                url: _.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: p,
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
async function h(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: i,
        renewal: r,
        currency: s,
        applyEntitlements: d = !1,
        analyticsLocations: f,
        analyticsLocation: h,
        userDiscountOfferId: p,
    } = e;
    null != n && (n = (0, c.qn)(n));
    let E = {
        items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
        }),
        payment_source_id: i,
        renewal: r,
        apply_entitlements: d,
        currency: s,
        user_discount_offer_id: p,
    };
    try {
        let e = await a.Bo.patch({
                url: _.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: { location: h, location_stack: f },
                body: E,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = u.A.createInvoiceFromServer(e.body);
        return (
            null != i &&
                n.checkoutContext?.payment_sources != null &&
                o.h.dispatch({
                    type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                    checkoutContext: n.checkoutContext,
                    paymentSourceId: i,
                }),
            n
        );
    } catch (e) {
        throw new l.Ey(e);
    }
}
async function p(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: i, currency: r, loadId: a } = e;
    s()(n, "SKU ID is missing for one time purchase gift invoice preview");
    try {
        let e = await (0, d.aP)({
            url: _.Rsh.STORE_SKU_PURCHASE(n),
            query: { gift: !0, payment_source_id: t, sku_subscription_plan_id: i, currency: r, load_id: a },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return u.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.Ey(e);
    }
}
async function E(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let i = await a.Bo.get({ url: _.Rsh.BILLING_SUBSCRIPTION_INVOICE(t), oldFormErrors: !0, rejectWithError: !1 });
    return u.A.createInvoiceFromServer(i.body);
}
function m(e, t, n) {
    let { preventFetch: r = !1 } = e,
        [s, a] = (0, i.useState)(null),
        [o, l] = (0, i.useState)(null);
    return (
        (0, i.useEffect)(() => {
            let e = !1;
            async function n() {
                try {
                    l(null);
                    let n = await t();
                    e || a(n);
                } catch (t) {
                    e || (l(t), a(null));
                }
            }
            return (
                r || n(),
                () => {
                    e = !0;
                }
            );
        }, [r, t, n]),
        [s, o]
    );
}
function g(e) {
    let t = (0, i.useRef)(e),
        n = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        t.current = e;
    });
    let r = JSON.stringify(e);
    return m(
        e,
        (0, i.useCallback)(() => {
            let e = t.current,
                i = n.current ? e : { ...e, paymentSourceId: null };
            return (n.current = !0), p(i);
        }, [r]),
    );
}
function A(e) {
    if ("subscriptionId" in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, i.useRef)(e),
        n = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        t.current = e;
    });
    let r = JSON.stringify(e),
        s = (0, i.useCallback)(() => {
            let e = t.current,
                i = n.current ? e : { ...e, paymentSourceId: null };
            return "subscriptionId" in i ? ((n.current = !0), h(i)) : "items" in i ? ((n.current = !0), f(i)) : null;
        }, [r]);
    return m(e, s);
}
function I(e) {
    let t = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return m(
        e,
        (0, i.useCallback)(() => E(t.current), [n]),
    );
}
function T(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let i = n.amount / e.quantity;
            t -= i;
        }),
        t
    );
}
