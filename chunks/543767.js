"use strict";
n.d(t, { $n: () => m, C8: () => I, OQ: () => f, QQ: () => g, YV: () => A, sL: () => T });
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(636537),
    o = n(228366),
    l = n(913122),
    u = n(570221),
    d = n(428262),
    c = n(371794),
    _ = n(652215);
async function h(e) {
    let {
            items: t,
            paymentSourceId: n,
            trialId: i,
            code: r,
            applyEntitlements: s = !1,
            currency: c,
            renewal: h,
            metadata: f,
            loadId: E,
        } = e,
        p = {
            items: (t = (0, d.qn)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }),
            payment_source_id: n,
            trial_id: i,
            code: r,
            apply_entitlements: s,
            currency: c,
            renewal: h,
            metadata: f,
            load_id: E,
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
async function f(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: i,
        renewal: r,
        currency: s,
        applyEntitlements: c = !1,
        analyticsLocations: h,
        analyticsLocation: f,
        userDiscountOfferId: E,
    } = e;
    null != n && (n = (0, d.qn)(n));
    let p = {
        items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
        }),
        payment_source_id: i,
        renewal: r,
        apply_entitlements: c,
        currency: s,
        user_discount_offer_id: E,
    };
    try {
        let e = await a.Bo.patch({
                url: _.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: { location: f, location_stack: h },
                body: p,
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
async function E(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: i, currency: r, loadId: a, quantity: o } = e;
    s()(n, "SKU ID is missing for one time purchase gift invoice preview");
    let d = { gift: !0, payment_source_id: t, sku_subscription_plan_id: i, currency: r, load_id: a };
    null != o && (d.quantity = o);
    try {
        let e = await (0, c.aP)({ url: _.Rsh.STORE_SKU_PURCHASE(n), query: d, oldFormErrors: !0, rejectWithError: !1 });
        return u.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.Ey(e);
    }
}
async function p(e) {
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
function g(e, t) {
    let n = (0, i.useRef)(e),
        r = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        n.current = e;
    });
    let s = JSON.stringify(e);
    return m(
        e,
        (0, i.useCallback)(() => {
            let e = n.current,
                t = r.current ? e : { ...e, paymentSourceId: null };
            return (r.current = !0), E(t);
        }, [s]),
        t,
    );
}
function A(e, t) {
    let n, r, s;
    if ("subscriptionId" in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let a = (0, i.useRef)(e),
        o = (0, i.useRef)(!1),
        {
            serverPricedPreviewRef: l,
            shouldReturnInvoiceCache: u,
            updateServerPricedPreviewRef: d,
        } = ((n = (0, i.useRef)(null)),
        (0, i.useEffect)(() => {
            n.current = null;
        }, [t]),
        (r = (0, i.useCallback)((e, t) => {
            let i = n.current;
            return (
                null != i &&
                null != e.paymentSourceId &&
                e.paymentSourceId === i.serverSelectedPaymentSourceId &&
                t === i.dedupeKey
            );
        }, [])),
        (s = (0, i.useCallback)((e, t, i) => {
            let r;
            if (null != i) {
                n.current = null;
                return;
            }
            n.current = {
                record: e,
                dedupeKey: t,
                serverSelectedPaymentSourceId:
                    null == (r = e.checkoutContext?.payment_sources) ? null : (r.find((e) => e.enabled)?.id ?? null),
            };
        }, [])),
        { serverPricedPreviewRef: n, shouldReturnInvoiceCache: r, updateServerPricedPreviewRef: s });
    (0, i.useEffect)(() => {
        a.current = e;
    });
    let c = JSON.stringify(e),
        _ = (0, i.useCallback)(() => {
            let e = a.current,
                t = o.current ? e : { ...e, paymentSourceId: null };
            if ("subscriptionId" in t) return (o.current = !0), f(t);
            if (!("items" in t)) return null;
            {
                o.current = !0;
                let e = JSON.stringify({ ...t, paymentSourceId: "exclude_from_dedupe" }),
                    n = l.current;
                return null != n && u(t, e)
                    ? Promise.resolve(n.record)
                    : h(t).then((n) => (d(n, e, t.paymentSourceId), n));
            }
        }, [c, l, u, d]);
    return m(e, _, t);
}
function I(e, t) {
    let n = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        n.current = e;
    });
    let r = JSON.stringify(e);
    return m(
        e,
        (0, i.useCallback)(() => p(n.current), [r]),
        t,
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
