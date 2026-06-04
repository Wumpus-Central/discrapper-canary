"use strict";
n.d(t, {
    iU: () => C,
    TI: () => A,
    U9: () => I,
    pg: () => S,
    tQ: () => v,
    YJ: () => T,
    hm: () => m,
    N1: () => N,
    p2: () => g,
});
var i = n(17928),
    r = n(155718),
    s = n(64700),
    a = n(753390),
    o = n(295405),
    l = n(803496),
    u = n(97352),
    c = n(428262),
    d = n(580630),
    _ = n(38405),
    h = n(615396),
    f = n(543767),
    p = n(422936),
    E = n(788868);
function m(e) {
    return null != e && E.U4.includes(e.discountId);
}
function g(e) {
    return null != e && e.discount.userUsageLimitInterval === E.Ff.MONTH;
}
let A = {
    discountOffer: null,
    applicablePlan: void 0,
    discountInvoicePreview: null,
    discountAmountOff: null,
    discountInvoiceError: null,
};
function I(e, t) {
    return (
        null != e &&
        (null == e.discount || null == e.discount.planIds
            ? (_.A.captureMessage(
                  "Unexpected discountOffer payload in discountOfferHasTier: discount offer has no discount or plan ids",
                  {
                      tags: { app_context: "billing", billing_context: "discount_offer" },
                      extra: { userDiscountOfferId: e.id, discountId: e.discountId, discountOffer: e },
                  },
              ),
              !1)
            : new Set(e.discount.planIds.map((e) => E.hd[e].skuId)).has(t))
    );
}
function T(e) {
    if (null == e) return;
    let t = e.discount?.planIds;
    return null == t || 0 === t.length
        ? void _.A.captureMessage("getDiscountOfferApplicablePlan: discount offer has no applicable plan ids", {
              extra: { userDiscountOfferId: e.id, discountId: e.discountId },
          })
        : t[0];
}
function S(e, t) {
    let n = e?.invoiceItems.find((e) => e.subscriptionPlanId === t),
        i = n?.discounts.find((e) => e.type === r.iS.SUBSCRIPTION_PLAN);
    return i?.amount ?? null;
}
let y = (e, t, n, r) => {
        let u = (function () {
                let { defaultPaymentSourceId: e, hasFetchedPaymentSources: t } = (0, i.cf)([o.A], () => ({
                    defaultPaymentSourceId: o.A.defaultPaymentSourceId,
                    hasFetchedPaymentSources: o.A.hasFetchedPaymentSources,
                }));
                return (
                    s.useEffect(() => {
                        t || (0, a.$o)();
                    }, [t]),
                    e
                );
            })(),
            d = null != e ? E.hd[e] : void 0,
            _ = (0, c.mH)(d?.skuId ?? E.pe.TIER_2),
            p = (0, h.zz)(e),
            { priceOptions: m } = (0, l.A)({ activeSubscription: null, skuIDs: [_], paymentSourceId: u, isGift: !1 }),
            g = null != t && null != p,
            [A, I] = (0, f.YV)({
                subscriptionId: n?.id,
                items: null != e ? [{ planId: e, quantity: 1 }] : [],
                renewal: null != n,
                preventFetch: !g || r,
                paymentSourceId: u,
                currency: m.currency,
                userDiscountOfferId: t?.id,
            });
        return { priceOptions: m, discountAmountOff: null != e ? S(A, e) : null };
    },
    N = (e) => {
        let t = (0, p.O)(),
            n = (0, p.p)(),
            { priceOptions: i, discountAmountOff: r } = y(e, t ?? n);
        if (null == e || (null == t && null == n)) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, i);
            return (0, d.$g)(t.amount - (r ?? 0), t.currency);
        } catch {
            return null;
        }
    },
    v = (e, t, n) => {
        let { priceOptions: i, discountAmountOff: r } = y(t, n, e),
            s = (0, c.y8)(t, !1, !1, i);
        return (0, d.$g)(s.amount - (r ?? 0), s.currency);
    },
    C = (e, t, n) => {
        let r = (0, i.bG)([u.A], () => u.A.get(e), [e]),
            { priceOptions: s, discountAmountOff: a } = y(e, t, n, null == r);
        if (null == r || null == a) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, s);
            return (0, d.$g)(t.amount - (a ?? 0), t.currency);
        } catch (e) {
            return null;
        }
    };
