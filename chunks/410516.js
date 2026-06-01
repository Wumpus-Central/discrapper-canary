"use strict";
n.d(t, {
    iU: () => v,
    TI: () => g,
    U9: () => A,
    pg: () => T,
    tQ: () => N,
    YJ: () => I,
    hm: () => E,
    N1: () => y,
    p2: () => m,
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
    h = n(543767),
    f = n(422936),
    p = n(788868);
function E(e) {
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
};
function A(e, t) {
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
            : new Set(e.discount.planIds.map((e) => p.hd[e].skuId)).has(t))
    );
}
function I(e) {
    if (null == e) return;
    let t = e.discount?.planIds;
    return null == t || 0 === t.length
        ? void _.A.captureMessage("getDiscountOfferApplicablePlan: discount offer has no applicable plan ids", {
              extra: { userDiscountOfferId: e.id, discountId: e.discountId },
          })
        : t[0];
}
function T(e, t) {
    let n = e?.invoiceItems.find((e) => e.subscriptionPlanId === t),
        i = n?.discounts.find((e) => e.type === r.iS.SUBSCRIPTION_PLAN);
    return i?.amount ?? null;
}
let S = (e, t, n, r) => {
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
            d = null != e ? p.hd[e] : void 0,
            _ = (0, c.mH)(d?.skuId ?? p.pe.TIER_2),
            { priceOptions: f } = (0, l.A)({ activeSubscription: null, skuIDs: [_], paymentSourceId: u, isGift: !1 }),
            E = null != t && null != e,
            [m, g] = (0, h.YV)({
                subscriptionId: n?.id,
                items: null != e ? [{ planId: e, quantity: 1 }] : [],
                renewal: null != n,
                preventFetch: !E || r,
                paymentSourceId: u,
                currency: f.currency,
                userDiscountOfferId: t?.id,
            });
        return { priceOptions: f, discountAmountOff: null != e ? T(m, e) : null };
    },
    y = (e) => {
        let t = (0, f.O)(),
            { priceOptions: n, discountAmountOff: i } = S(e, t);
        if (null == e || null == t) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, n);
            return (0, d.$g)(t.amount - (i ?? 0), t.currency);
        } catch {
            return null;
        }
    },
    N = (e, t, n) => {
        let { priceOptions: i, discountAmountOff: r } = S(t, n, e),
            s = (0, c.y8)(t, !1, !1, i);
        return (0, d.$g)(s.amount - (r ?? 0), s.currency);
    },
    v = (e, t, n) => {
        let r = (0, i.bG)([u.A], () => u.A.get(e), [e]),
            { priceOptions: s, discountAmountOff: a } = S(e, t, n, null == r);
        if (null == r || null == a) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, s);
            return (0, d.$g)(t.amount - (a ?? 0), t.currency);
        } catch (e) {
            return null;
        }
    };
