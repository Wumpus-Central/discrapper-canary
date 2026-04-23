n.d(t, { C8: () => T, FP: () => A, Kq: () => I, OQ: () => C, sL: () => y });
var r = n(64700),
    a = n(284009),
    i = n.n(a),
    o = n(636537),
    l = n(228366),
    s = n(845584),
    d = n(570221),
    u = n(927578),
    c = n(371794),
    _ = n(652215);
async function p(e) {
    let {
            items: t,
            paymentSourceId: n,
            trialId: r,
            code: a,
            applyEntitlements: i = !1,
            currency: c,
            renewal: p,
            metadata: C,
        } = e,
        h = {
            items: (t = (0, u.qn)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }),
            payment_source_id: n,
            trial_id: r,
            code: a,
            apply_entitlements: i,
            currency: c,
            renewal: p,
            metadata: C,
        };
    try {
        let e = await o.Bo.post({
                url: _.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: h,
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
        throw new s.Ey(e);
    }
}
async function C(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: r,
        renewal: a,
        currency: i,
        applyEntitlements: c = !1,
        analyticsLocations: p,
        analyticsLocation: C,
        userDiscountOfferId: h,
    } = e;
    null != n && (n = (0, u.qn)(n));
    let E = {
        items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
        }),
        payment_source_id: r,
        renewal: a,
        apply_entitlements: c,
        currency: i,
        user_discount_offer_id: h,
    };
    try {
        let e = await o.Bo.patch({
                url: _.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: { location: C, location_stack: p },
                body: E,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = d.A.createInvoiceFromServer(e.body);
        return (
            null != r &&
                n.checkoutContext?.payment_sources != null &&
                l.h.dispatch({
                    type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                    checkoutContext: n.checkoutContext,
                    paymentSourceId: r,
                }),
            n
        );
    } catch (e) {
        throw new s.Ey(e);
    }
}
async function h(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: a, loadId: o } = e;
    i()(n, "SKU ID is missing for one time purchase gift invoice preview");
    try {
        let e = await (0, c.aP)({
            url: _.Rsh.STORE_SKU_PURCHASE(n),
            query: { gift: !0, payment_source_id: t, sku_subscription_plan_id: r, currency: a, load_id: o },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return d.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new s.Ey(e);
    }
}
async function E(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await o.Bo.get({ url: _.Rsh.BILLING_SUBSCRIPTION_INVOICE(t), oldFormErrors: !0, rejectWithError: !1 });
    return d.A.createInvoiceFromServer(r.body);
}
function m(e, t) {
    let { preventFetch: n = !1 } = e,
        [a, i] = (0, r.useState)(null),
        [o, l] = (0, r.useState)(null);
    return (
        (0, r.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    l(null);
                    let n = await t();
                    e || i(n);
                } catch (t) {
                    e || (l(t), i(null));
                }
            }
            return (
                n || r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [a, o]
    );
}
function A(e) {
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
function I(e) {
    if ("subscriptionId" in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e),
        a = (0, r.useCallback)(() => {
            let { current: e } = t;
            return "subscriptionId" in e ? C(e) : "items" in e ? p(e) : null;
        }, [n]);
    return m(e, a);
}
function T(e) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    });
    let n = JSON.stringify(e);
    return m(
        e,
        (0, r.useCallback)(() => E(t.current), [n]),
    );
}
function y(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
