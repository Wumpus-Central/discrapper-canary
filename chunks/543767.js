n.d(t, { C8: () => m, FP: () => y, Kq: () => I, OQ: () => p, sL: () => T });
var o = n(64700),
    r = n(284009),
    a = n.n(r),
    i = n(636537),
    l = n(228366),
    u = n(845584),
    s = n(570221),
    _ = n(927578),
    d = n(371794),
    C = n(652215);
async function E(e) {
    let {
            items: t,
            paymentSourceId: n,
            trialId: o,
            code: r,
            applyEntitlements: a = !1,
            currency: d,
            renewal: E,
            metadata: p,
        } = e,
        h = {
            items: (t = (0, _.qn)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }),
            payment_source_id: n,
            trial_id: o,
            code: r,
            apply_entitlements: a,
            currency: d,
            renewal: E,
            metadata: p,
        };
    try {
        let e = await i.Bo.post({
                url: C.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: h,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            t = s.A.createInvoiceFromServer(e.body);
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
        throw new u.Ey(e);
    }
}
async function p(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: o,
        renewal: r,
        currency: a,
        applyEntitlements: d = !1,
        analyticsLocations: E,
        analyticsLocation: p,
        userDiscountOfferId: h,
    } = e;
    null != n && (n = (0, _.qn)(n));
    let c = {
        items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
        }),
        payment_source_id: o,
        renewal: r,
        apply_entitlements: d,
        currency: a,
        user_discount_offer_id: h,
    };
    try {
        let e = await i.Bo.patch({
                url: C.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: { location: p, location_stack: E },
                body: c,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = s.A.createInvoiceFromServer(e.body);
        return (
            null != o &&
                n.checkoutContext?.payment_sources != null &&
                l.h.dispatch({
                    type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                    checkoutContext: n.checkoutContext,
                    paymentSourceId: o,
                }),
            n
        );
    } catch (e) {
        throw new u.Ey(e);
    }
}
async function h(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: o, currency: r, loadId: i } = e;
    a()(n, "SKU ID is missing for one time purchase gift invoice preview");
    try {
        let e = await (0, d.aP)({
            url: C.Rsh.STORE_SKU_PURCHASE(n),
            query: { gift: !0, payment_source_id: t, sku_subscription_plan_id: o, currency: r, load_id: i },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return s.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new u.Ey(e);
    }
}
async function c(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let o = await i.Bo.get({ url: C.Rsh.BILLING_SUBSCRIPTION_INVOICE(t), oldFormErrors: !0, rejectWithError: !1 });
    return s.A.createInvoiceFromServer(o.body);
}
function A(e, t) {
    let { preventFetch: n = !1 } = e,
        [r, a] = (0, o.useState)(null),
        [i, l] = (0, o.useState)(null);
    return (
        (0, o.useEffect)(() => {
            let e = !1;
            async function o() {
                try {
                    l(null);
                    let n = await t();
                    e || a(n);
                } catch (t) {
                    e || (l(t), a(null));
                }
            }
            return (
                n || o(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [r, i]
    );
}
function y(e) {
    let t = (0, o.useRef)(e);
    (0, o.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return A(
        e,
        (0, o.useCallback)(() => h(t.current), [n]),
    );
}
function I(e) {
    if ("subscriptionId" in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, o.useRef)(e);
    (0, o.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e),
        r = (0, o.useCallback)(() => {
            let { current: e } = t;
            return "subscriptionId" in e ? p(e) : "items" in e ? E(e) : null;
        }, [n]);
    return A(e, r);
}
function m(e) {
    let t = (0, o.useRef)(e);
    (0, o.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return A(
        e,
        (0, o.useCallback)(() => c(t.current), [n]),
    );
}
function T(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let o = n.amount / e.quantity;
            t -= o;
        }),
        t
    );
}
