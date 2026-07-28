"use strict";
n.d(t, {
    iU: () => b,
    TI: () => g,
    U9: () => C,
    pg: () => R,
    tQ: () => v,
    YJ: () => O,
    hm: () => T,
    PT: () => D,
    N1: () => y,
    p2: () => m,
});
var i = n(935399),
    r = n(17928),
    a = n(73825),
    s = n(155718),
    l = n(582128),
    o = n(277984),
    d = n(295405),
    c = n(803496),
    u = n(97352),
    _ = n(428262),
    E = n(580630),
    A = n(38405),
    h = n(615396),
    I = n(543767),
    f = n(422936),
    p = n(202541);
function T(e) {
    return null != e && p.U4.includes(e.discountId);
}
function m(e) {
    return null != e && e.discount.userUsageLimitInterval === p.Ff.MONTH;
}
let g = {
        discountOffer: null,
        applicablePlan: void 0,
        discountInvoicePreview: null,
        discountAmountOff: null,
        discountInvoiceError: null,
    },
    S = new Set();
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "message",
        r = null != t ? (t.id ?? t.discountId) : "unknown",
        a = `${e}:${String(r)}`;
    if (S.has(a)) return;
    S.add(a);
    let s = {
        tags: { app_context: "billing", billing_context: "discount_offer" },
        extra: { userDiscountOfferId: t.id, discountId: t.discountId, ...n },
    };
    "message" === i ? A.A.captureMessage(e, s) : A.A.captureException(Error(e), s);
}
function C(e, t) {
    return (
        null != e &&
        (null == e.discount || null == e.discount.planIds
            ? (N(
                  "Unexpected discountOffer payload in discountOfferHasTier: discount offer has no discount or plan ids",
                  e,
                  { reason: null == e.discount ? "missing_discount" : "missing_plan_ids" },
                  "exception",
              ),
              !1)
            : new Set(e.discount.planIds.map((e) => p.hd[e].skuId)).has(t))
    );
}
function O(e) {
    if (null == e) return;
    let t = e.discount?.planIds;
    return null == t || 0 === t.length
        ? void N("getDiscountOfferApplicablePlan: discount offer has no applicable plan ids", e)
        : t[0];
}
function R(e, t) {
    let n = e?.invoiceItems.find((e) => e.subscriptionPlanId === t),
        i = n?.discounts.find((e) => e.type === s.iS.SUBSCRIPTION_PLAN);
    return i?.amount ?? null;
}
function L(e, t, n, i) {
    let a = (function () {
            let { defaultPaymentSourceId: e, hasFetchedPaymentSources: t } = (0, r.cf)([d.A], () => ({
                defaultPaymentSourceId: d.A.defaultPaymentSourceId,
                hasFetchedPaymentSources: d.A.hasFetchedPaymentSources,
            }));
            return (
                l.useEffect(() => {
                    t || (0, o.$o)();
                }, [t]),
                e
            );
        })(),
        s = null != e ? p.hd[e] : void 0,
        u = (0, _.mH)(s?.skuId ?? p.pe.TIER_2),
        E = (0, h.zz)(e),
        { priceOptions: A } = (0, c.A)({ activeSubscription: null, skuIDs: [u], paymentSourceId: a, isGift: !1 }),
        f = null != t && null != E,
        [T, m] = (0, I.YV)({
            subscriptionId: n?.id,
            items: null != e ? [{ planId: e, quantity: 1 }] : [],
            renewal: null != n,
            preventFetch: !f || i || !A.loaded,
            paymentSourceId: a,
            userDiscountOfferId: t?.id,
        });
    return { priceOptions: A, discountAmountOff: null != e ? R(T, e) : null };
}
function y(e) {
    let t = (0, f.O)(),
        n = (0, f.p)(),
        { priceOptions: i, discountAmountOff: a } = L(e, t ?? n),
        s = (0, r.bG)([u.A], () => null != e && u.A.isLoadedForSKU((0, _.mH)(p.hd[e].skuId)), [e]);
    if (null == e || (null == t && null == n)) return null;
    try {
        let t = (0, _.y8)(e, !1, !1, i, s);
        return (0, E.$g)(t.amount - (a ?? 0), t.currency);
    } catch {
        return null;
    }
}
function D(e, t) {
    let n,
        s = (0, _.mH)(p.hd[t].skuId),
        { plan: l, isFetching: o } = (0, r.cf)([u.A], () => ({
            plan: u.A.get(t),
            isFetching: u.A.isFetchingForSKU(s),
        }));
    if (
        ((0, i.Ay)(() => {
            null == e || null != l || o || (0, a.ur)(s);
        }),
        null == e || null == l)
    )
        return null;
    try {
        n = (0, _.JM)(t);
    } catch {
        return null;
    }
    let d = e.getApproximateDiscountAmountOff(n.amount);
    return null == d ? null : { discountedAmount: d, currency: n.currency };
}
function v(e, t, n) {
    let { priceOptions: i, discountAmountOff: r } = L(t, n, e),
        a = (0, _.y8)(t, !1, !1, i);
    return (0, E.$g)(a.amount - (r ?? 0), a.currency);
}
function b(e, t, n) {
    let i = (0, r.bG)([u.A], () => u.A.get(e), [e]),
        { priceOptions: a, discountAmountOff: s } = L(e, t, n, null == i);
    if (null == i || null == s) return null;
    try {
        let t = (0, _.y8)(e, !1, !1, a);
        return (0, E.$g)(t.amount - (s ?? 0), t.currency);
    } catch (e) {
        return null;
    }
}
