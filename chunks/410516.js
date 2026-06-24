"use strict";
n.d(t, {
    iU: () => L,
    TI: () => T,
    U9: () => C,
    pg: () => v,
    tQ: () => D,
    YJ: () => N,
    hm: () => A,
    PT: () => b,
    N1: () => O,
    p2: () => I,
});
var i = n(935399),
    r = n(17928),
    s = n(73825),
    a = n(155718),
    o = n(64700),
    l = n(753390),
    u = n(295405),
    c = n(803496),
    d = n(97352),
    _ = n(428262),
    h = n(580630),
    f = n(38405),
    p = n(615396),
    E = n(543767),
    m = n(422936),
    g = n(788868);
function A(e) {
    return null != e && g.U4.includes(e.discountId);
}
function I(e) {
    return null != e && e.discount.userUsageLimitInterval === g.Ff.MONTH;
}
let T = {
        discountOffer: null,
        applicablePlan: void 0,
        discountInvoicePreview: null,
        discountAmountOff: null,
        discountInvoiceError: null,
    },
    S = new Set();
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "message",
        r = null != t ? (t.id ?? t.discountId) : "unknown",
        s = `${e}:${String(r)}`;
    if (S.has(s)) return;
    S.add(s);
    let a = {
        tags: { app_context: "billing", billing_context: "discount_offer" },
        extra: { userDiscountOfferId: t.id, discountId: t.discountId, ...n },
    };
    "message" === i ? f.A.captureMessage(e, a) : f.A.captureException(Error(e), a);
}
function C(e, t) {
    return (
        null != e &&
        (null == e.discount || null == e.discount.planIds
            ? (y(
                  "Unexpected discountOffer payload in discountOfferHasTier: discount offer has no discount or plan ids",
                  e,
                  { reason: null == e.discount ? "missing_discount" : "missing_plan_ids" },
                  "exception",
              ),
              !1)
            : new Set(e.discount.planIds.map((e) => g.hd[e].skuId)).has(t))
    );
}
function N(e) {
    if (null == e) return;
    let t = e.discount?.planIds;
    return null == t || 0 === t.length
        ? void y("getDiscountOfferApplicablePlan: discount offer has no applicable plan ids", e)
        : t[0];
}
function v(e, t) {
    let n = e?.invoiceItems.find((e) => e.subscriptionPlanId === t),
        i = n?.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
    return i?.amount ?? null;
}
function R(e, t, n, i) {
    let s = (function () {
            let { defaultPaymentSourceId: e, hasFetchedPaymentSources: t } = (0, r.cf)([u.A], () => ({
                defaultPaymentSourceId: u.A.defaultPaymentSourceId,
                hasFetchedPaymentSources: u.A.hasFetchedPaymentSources,
            }));
            return (
                o.useEffect(() => {
                    t || (0, l.$o)();
                }, [t]),
                e
            );
        })(),
        a = null != e ? g.hd[e] : void 0,
        d = (0, _.mH)(a?.skuId ?? g.pe.TIER_2),
        h = (0, p.zz)(e),
        { priceOptions: f } = (0, c.A)({ activeSubscription: null, skuIDs: [d], paymentSourceId: s, isGift: !1 }),
        m = null != t && null != h,
        [A, I] = (0, E.YV)({
            subscriptionId: n?.id,
            items: null != e ? [{ planId: e, quantity: 1 }] : [],
            renewal: null != n,
            preventFetch: !m || i || !f.loaded,
            paymentSourceId: s,
            userDiscountOfferId: t?.id,
        });
    return { priceOptions: f, discountAmountOff: null != e ? v(A, e) : null };
}
function O(e) {
    let t = (0, m.O)(),
        n = (0, m.p)(),
        { priceOptions: i, discountAmountOff: s } = R(e, t ?? n),
        a = (0, r.bG)([d.A], () => null != e && d.A.isLoadedForSKU((0, _.mH)(g.hd[e].skuId)), [e]);
    if (null == e || (null == t && null == n)) return null;
    try {
        let t = (0, _.y8)(e, !1, !1, i, a);
        return (0, h.$g)(t.amount - (s ?? 0), t.currency);
    } catch {
        return null;
    }
}
function b(e, t) {
    let n,
        a = (0, _.mH)(g.hd[t].skuId),
        { plan: o, isFetching: l } = (0, r.cf)([d.A], () => ({
            plan: d.A.get(t),
            isFetching: d.A.isFetchingForSKU(a),
        }));
    if (
        ((0, i.Ay)(() => {
            null == e || null != o || l || (0, s.ur)(a);
        }),
        null == e || null == o)
    )
        return null;
    try {
        n = (0, _.JM)(t);
    } catch {
        return null;
    }
    let u = e.getApproximateDiscountAmountOff(n.amount);
    return null == u ? null : { discountedAmount: u, currency: n.currency };
}
function D(e, t, n) {
    let { priceOptions: i, discountAmountOff: r } = R(t, n, e),
        s = (0, _.y8)(t, !1, !1, i);
    return (0, h.$g)(s.amount - (r ?? 0), s.currency);
}
function L(e, t, n) {
    let i = (0, r.bG)([d.A], () => d.A.get(e), [e]),
        { priceOptions: s, discountAmountOff: a } = R(e, t, n, null == i);
    if (null == i || null == a) return null;
    try {
        let t = (0, _.y8)(e, !1, !1, s);
        return (0, h.$g)(t.amount - (a ?? 0), t.currency);
    } catch (e) {
        return null;
    }
}
