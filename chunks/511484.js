"use strict";
n.d(t, {
    N1: () => R,
    PT: () => L,
    TI: () => T,
    U9: () => S,
    YJ: () => N,
    hm: () => f,
    iU: () => y,
    p2: () => p,
    pg: () => C,
    tQ: () => D,
});
var i = n(935399),
    r = n(17928),
    a = n(73825),
    s = n(155718),
    l = n(369827),
    o = n(803496),
    d = n(97352),
    c = n(158045),
    u = n(580630),
    _ = n(38405),
    E = n(615396),
    A = n(543767),
    h = n(724651),
    I = n(202541);
function f(e) {
    return null != e && I.U4.includes(e.discountId);
}
function p(e) {
    return null != e && e.discount.intervalType === I.Ff.MONTH;
}
let T = {
        discountOffer: null,
        applicablePlan: void 0,
        discountInvoicePreview: null,
        discountAmountOff: null,
        discountInvoiceError: null,
    },
    m = new Set();
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "message",
        r = null != t ? (t.id ?? t.discountId) : "unknown",
        a = `${e}:${String(r)}`;
    if (m.has(a)) return;
    m.add(a);
    let s = {
        tags: { app_context: "billing", billing_context: "discount_offer" },
        extra: { userDiscountOfferId: t.id, discountId: t.discountId, ...n },
    };
    "message" === i ? _.A.captureMessage(e, s) : _.A.captureException(Error(e), s);
}
function S(e, t) {
    return (
        null != e &&
        (null == e.discount || null == e.discount.planIds
            ? (g(
                  "Unexpected discountOffer payload in discountOfferHasTier: discount offer has no discount or plan ids",
                  e,
                  { reason: null == e.discount ? "missing_discount" : "missing_plan_ids" },
                  "exception",
              ),
              !1)
            : new Set(e.discount.planIds.map((e) => I.hd[e].skuId)).has(t))
    );
}
function N(e) {
    if (null == e) return;
    let t = e.discount?.planIds;
    return null == t || 0 === t.length
        ? void g("getDiscountOfferApplicablePlan: discount offer has no applicable plan ids", e)
        : t[0];
}
function C(e, t) {
    let n = e?.invoiceItems.find((e) => e.subscriptionPlanId === t),
        i = n?.discounts.find((e) => e.type === s.iS.SUBSCRIPTION_PLAN);
    return i?.amount ?? null;
}
function O(e, t, n, i) {
    let r = (0, l.L)(),
        a = null != e ? I.hd[e] : void 0,
        s = (0, c.mH)(a?.skuId ?? I.pe.TIER_2),
        d = (0, E.zz)(e),
        { priceOptions: u } = (0, o.A)({ activeSubscription: null, skuIDs: [s], paymentSourceId: r, isGift: !1 }),
        _ = null != t && null != d,
        [h, f] = (0, A.YV)({
            subscriptionId: n?.id,
            items: null != e ? [{ planId: e, quantity: 1 }] : [],
            renewal: null != n,
            preventFetch: !_ || i || !u.loaded,
            paymentSourceId: r,
            userDiscountOfferId: t?.id,
        });
    return { priceOptions: u, discountAmountOff: null != e ? C(h, e) : null };
}
function R(e) {
    let t = (0, h.O)(),
        n = (0, h.p)(),
        { priceOptions: i, discountAmountOff: a } = O(e, t ?? n),
        s = (0, r.bG)([d.A], () => null != e && d.A.isLoadedForSKU((0, c.mH)(I.hd[e].skuId)), [e]);
    if (null == e || (null == t && null == n)) return null;
    try {
        let t = (0, c.y8)(e, !1, !1, i, s);
        return (0, u.$g)(t.amount - (a ?? 0), t.currency);
    } catch {
        return null;
    }
}
function L(e, t) {
    let n,
        s = (0, c.mH)(I.hd[t].skuId),
        { plan: l, isFetching: o } = (0, r.cf)([d.A], () => ({
            plan: d.A.get(t),
            isFetching: d.A.isFetchingForSKU(s),
        }));
    if (
        ((0, i.Ay)(() => {
            null == e || null != l || o || (0, a.ur)(s);
        }),
        null == e || null == l)
    )
        return null;
    try {
        n = (0, c.JM)(t);
    } catch {
        return null;
    }
    let u = e.discount.getApproximateDiscountAmountOff(n.amount);
    return null == u ? null : { discountedAmount: u, currency: n.currency };
}
function D(e, t, n) {
    let { priceOptions: i, discountAmountOff: r } = O(t, n, e),
        a = (0, c.y8)(t, !1, !1, i);
    return (0, u.$g)(a.amount - (r ?? 0), a.currency);
}
function y(e, t, n) {
    let i = (0, r.bG)([d.A], () => d.A.get(e), [e]),
        { priceOptions: a, discountAmountOff: s } = O(e, t, n, null == i);
    if (null == i || null == s) return null;
    try {
        let t = (0, c.y8)(e, !1, !1, a);
        return (0, u.$g)(t.amount - (s ?? 0), t.currency);
    } catch (e) {
        return null;
    }
}
