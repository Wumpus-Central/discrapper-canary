n.d(t, {
    N1: () => O,
    PT: () => R,
    U9: () => m,
    YJ: () => S,
    hm: () => I,
    iU: () => y,
    p2: () => p,
    pg: () => N,
    tQ: () => L,
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
    f = n(202541);
function I(e) {
    return null != e && f.U4.includes(e.discountId);
}
function p(e) {
    return null != e && e.discount.intervalType === f.Ff.MONTH;
}
let T = new Set();
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "message",
        r = null != t ? (t.id ?? t.discountId) : "unknown",
        a = `${e}:${String(r)}`;
    if (T.has(a)) return;
    T.add(a);
    let s = {
        tags: { app_context: "billing", billing_context: "discount_offer" },
        extra: { userDiscountOfferId: t.id, discountId: t.discountId, ...n },
    };
    "message" === i ? _.A.captureMessage(e, s) : _.A.captureException(Error(e), s);
}
function m(e, t) {
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
            : new Set(e.discount.planIds.map((e) => f.hd[e].skuId)).has(t))
    );
}
function S(e) {
    if (null == e) return;
    let t = e.discount?.planIds;
    return null == t || 0 === t.length
        ? void g("getDiscountOfferApplicablePlan: discount offer has no applicable plan ids", e)
        : t[0];
}
function N(e, t) {
    let n = e?.invoiceItems.find((e) => e.subscriptionPlanId === t),
        i = n?.discounts.find((e) => e.type === s.iS.SUBSCRIPTION_PLAN);
    return i?.amount ?? null;
}
function C(e, t, n, i) {
    let r = (0, l.L)(),
        a = null != e ? f.hd[e] : void 0,
        s = (0, c.mH)(a?.skuId ?? f.pe.TIER_2),
        d = (0, E.zz)(e),
        { priceOptions: u } = (0, o.A)({ activeSubscription: null, skuIDs: [s], paymentSourceId: r, isGift: !1 }),
        _ = null != t && null != d,
        [h, I] = (0, A.YV)({
            subscriptionId: n?.id,
            items: null != e ? [{ planId: e, quantity: 1 }] : [],
            renewal: null != n,
            preventFetch: !_ || i || !u.loaded,
            paymentSourceId: r,
            userDiscountOfferId: t?.id,
        });
    return { priceOptions: u, discountAmountOff: null != e ? N(h, e) : null };
}
function O(e) {
    let t = (0, h.O)(),
        n = (0, h.p)(),
        { priceOptions: i, discountAmountOff: a } = C(e, t ?? n),
        s = (0, r.bG)([d.A], () => null != e && d.A.isLoadedForSKU((0, c.mH)(f.hd[e].skuId)), [e]);
    if (null == e || (null == t && null == n)) return null;
    try {
        let t = (0, c.y8)(e, !1, !1, i, s);
        return (0, u.$g)(t.amount - (a ?? 0), t.currency);
    } catch {
        return null;
    }
}
function R(e, t) {
    let n,
        s = (0, c.mH)(f.hd[t].skuId),
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
function L(e, t, n) {
    let { priceOptions: i, discountAmountOff: r } = C(t, n, e),
        a = (0, c.y8)(t, !1, !1, i);
    return (0, u.$g)(a.amount - (r ?? 0), a.currency);
}
function y(e, t, n) {
    let i = (0, r.bG)([d.A], () => d.A.get(e), [e]),
        { priceOptions: a, discountAmountOff: s } = C(e, t, n, null == i);
    if (null == i || null == s) return null;
    try {
        let t = (0, c.y8)(e, !1, !1, a);
        return (0, u.$g)(t.amount - (s ?? 0), t.currency);
    } catch (e) {
        return null;
    }
}
