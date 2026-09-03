n.d(t, { $n: () => f, C8: () => m, OQ: () => A, QQ: () => p, YV: () => T, sL: () => g });
var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(636537),
    l = n(228366),
    o = n(913122),
    d = n(570221),
    c = n(158045),
    u = n(371794),
    _ = n(652215);
async function E(e) {
    let {
            items: t,
            paymentSourceId: n,
            trialId: i,
            code: r,
            applyEntitlements: a = !1,
            currency: u,
            renewal: E,
            metadata: A,
            loadId: h,
        } = e,
        I = {
            items: (t = (0, c.qn)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }),
            payment_source_id: n,
            trial_id: i,
            code: r,
            apply_entitlements: a,
            currency: u,
            renewal: E,
            metadata: A,
            load_id: h,
        };
    try {
        let e = await s.Bo.post({
                url: _.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: I,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            t = d.A.createInvoiceFromServer(e.body);
        return (
            t.checkoutContext?.payment_sources != null &&
                l.h.dispatch({
                    type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                    checkoutContext: t.checkoutContext,
                    paymentSourceId: n,
                }),
            t
        );
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function A(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: i,
        renewal: r,
        currency: a,
        applyEntitlements: u = !1,
        analyticsLocations: E,
        analyticsLocation: A,
        userDiscountOfferId: h,
        loadId: I,
    } = e;
    null != n && (n = (0, c.qn)(n));
    let f = {
        items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
        }),
        payment_source_id: i,
        renewal: r,
        apply_entitlements: u,
        currency: a,
        user_discount_offer_id: h,
        load_id: I,
    };
    try {
        let e = await s.Bo.patch({
                url: _.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: { location: A, location_stack: E },
                body: f,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = d.A.createInvoiceFromServer(e.body);
        return (
            null != i &&
                n.checkoutContext?.payment_sources != null &&
                l.h.dispatch({
                    type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                    checkoutContext: n.checkoutContext,
                    paymentSourceId: i,
                }),
            n
        );
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function h(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: i, currency: r, loadId: s, quantity: l } = e;
    a()(null != n && "" !== n, "SKU ID is missing for one time purchase gift invoice preview");
    let c = { gift: !0, payment_source_id: t, sku_subscription_plan_id: i, currency: r, load_id: s };
    null != l && (c.quantity = l);
    try {
        let e = await (0, u.aP)({ url: _.Rsh.STORE_SKU_PURCHASE(n), query: c, oldFormErrors: !0, rejectWithError: !1 });
        return d.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function I(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let i = await s.Bo.get({ url: _.Rsh.BILLING_SUBSCRIPTION_INVOICE(t), oldFormErrors: !0, rejectWithError: !1 });
    return d.A.createInvoiceFromServer(i.body);
}
function f(e, t, n) {
    let { preventFetch: r = !1 } = e,
        [a, s] = (0, i.useState)(null),
        [l, o] = (0, i.useState)(null);
    return (
        (0, i.useEffect)(() => {
            let e = !1;
            async function n() {
                try {
                    o(null);
                    let n = await t();
                    e || s(n);
                } catch (t) {
                    e || (o(t), s(null));
                }
            }
            return (
                r || n(),
                () => {
                    e = !0;
                }
            );
        }, [r, t, n]),
        [a, l]
    );
}
function p(e, t) {
    let n = (0, i.useRef)(e),
        r = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        n.current = e;
    });
    let a = JSON.stringify(e);
    return f(
        e,
        (0, i.useCallback)(() => {
            let e = n.current,
                t = r.current ? e : { ...e, paymentSourceId: null };
            return (r.current = !0), h(t);
        }, [a]),
        t,
    );
}
function T(e, t) {
    let n, r, a;
    if ("subscriptionId" in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let s = (0, i.useRef)(e),
        l = (0, i.useRef)(!1),
        {
            serverPricedPreviewRef: o,
            shouldReturnInvoiceCache: d,
            updateServerPricedPreviewRef: c,
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
        (a = (0, i.useCallback)((e, t, i) => {
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
        { serverPricedPreviewRef: n, shouldReturnInvoiceCache: r, updateServerPricedPreviewRef: a });
    (0, i.useEffect)(() => {
        s.current = e;
    });
    let u = JSON.stringify(e),
        _ = (0, i.useCallback)(() => {
            let e = s.current,
                t = l.current ? e : { ...e, paymentSourceId: null };
            if ("subscriptionId" in t) return (l.current = !0), A(t);
            if (!("items" in t)) return null;
            {
                l.current = !0;
                let e = JSON.stringify({ ...t, paymentSourceId: "exclude_from_dedupe" }),
                    n = o.current;
                return null != n && d(t, e)
                    ? Promise.resolve(n.record)
                    : E(t).then((n) => (c(n, e, t.paymentSourceId), n));
            }
        }, [u, o, d, c]);
    return f(e, _, t);
}
function m(e, t) {
    let n = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        n.current = e;
    });
    let r = JSON.stringify(e);
    return f(
        e,
        (0, i.useCallback)(() => I(n.current), [r]),
        t,
    );
}
function g(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let i = n.amount / e.quantity;
            t -= i;
        }),
        t
    );
}
