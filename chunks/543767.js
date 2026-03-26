"use strict";
n.d(t, { C8: () => A, FP: () => E, Kq: () => g, OQ: () => f, sL: () => I });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(562465),
    o = n(198982),
    l = n(654044),
    u = n(927578),
    c = n(371794),
    d = n(652215);
async function _(e) {
    let {
            items: t,
            paymentSourceId: n,
            trialId: r,
            code: i,
            applyEntitlements: s = !1,
            currency: c,
            renewal: _,
            metadata: f,
        } = e,
        p = {
            items: (t = (0, u.qn)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return { ...n, plan_id: t };
            }),
            payment_source_id: n,
            trial_id: r,
            code: i,
            apply_entitlements: s,
            currency: c,
            renewal: _,
            metadata: f,
        };
    try {
        let e = await a.Bo.post({
            url: d.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: p,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return l.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function f(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: r,
        renewal: i,
        currency: s,
        applyEntitlements: c = !1,
        analyticsLocations: _,
        analyticsLocation: f,
        userDiscountOfferId: p,
    } = e;
    null != n && (n = (0, u.qn)(n));
    let h = {
        items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
        }),
        payment_source_id: r,
        renewal: i,
        apply_entitlements: c,
        currency: s,
        user_discount_offer_id: p,
    };
    try {
        let e = await a.Bo.patch({
            url: d.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: { location: f, location_stack: _ },
            body: h,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return l.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function p(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: i, loadId: a } = e;
    s()(n, "SKU ID is missing for one time purchase gift invoice preview");
    let u = { gift: !0, payment_source_id: t, sku_subscription_plan_id: r, currency: i, load_id: a };
    try {
        let e = await (0, c.aP)({ url: d.Rsh.STORE_SKU_PURCHASE(n), query: u, oldFormErrors: !0, rejectWithError: !1 });
        return l.A.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.Ey(e);
    }
}
async function h(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await a.Bo.get({ url: d.Rsh.BILLING_SUBSCRIPTION_INVOICE(t), oldFormErrors: !0, rejectWithError: !1 });
    return l.A.createInvoiceFromServer(r.body);
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
                    o(null), s(null);
                    let n = await t();
                    e || s(n);
                } catch (t) {
                    e || o(t);
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
function E(e) {
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
function g(e) {
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
            return "subscriptionId" in e ? f(e) : "items" in e ? _(e) : null;
        }, [n]);
    return m(e, i);
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
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
