"use strict";
n.d(t, { tQ: () => I, YJ: () => m, N1: () => A, U9: () => E, iU: () => T });
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
    f = n(543767),
    h = n(422936),
    p = n(788868);
function E(e, t) {
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
function m(e) {
    if (null == e) return;
    let t = e.discount?.planIds;
    return null == t || 0 === t.length
        ? void _.A.captureMessage("getDiscountOfferApplicablePlan: discount offer has no applicable plan ids", {
              extra: { userDiscountOfferId: e.id, discountId: e.discountId },
          })
        : t[0];
}
let g = (e, t, n, u) => {
        let d = (function () {
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
            _ = null != e ? p.hd[e] : void 0,
            h = (0, c.mH)(_?.skuId ?? p.pe.TIER_2),
            { priceOptions: E } = (0, l.A)({ activeSubscription: null, skuIDs: [h], paymentSourceId: d, isGift: !1 }),
            m = null != t && null != e,
            [g, A] = (0, f.YV)({
                subscriptionId: n?.id,
                items: null != e ? [{ planId: e, quantity: 1 }] : [],
                renewal: null != n,
                preventFetch: !m || u,
                paymentSourceId: d,
                currency: E.currency,
                userDiscountOfferId: t?.id,
            });
        return {
            priceOptions: E,
            discountAmountOff:
                null != e
                    ? g?.invoiceItems
                          ?.find((t) => t.subscriptionPlanId === e)
                          ?.discounts?.find((e) => e.type === r.iS.SUBSCRIPTION_PLAN)?.amount
                    : void 0,
        };
    },
    A = (e) => {
        let t = (0, h.O)(),
            { priceOptions: n, discountAmountOff: i } = g(e, t);
        if (null == e || null == t) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, n);
            return (0, d.$g)(t.amount - (i ?? 0), t.currency);
        } catch {
            return null;
        }
    },
    I = (e, t, n) => {
        let { priceOptions: i, discountAmountOff: r } = g(t, n, e),
            s = (0, c.y8)(t, !1, !1, i);
        return (0, d.$g)(s.amount - (r ?? 0), s.currency);
    },
    T = (e, t, n) => {
        let r = (0, i.bG)([u.A], () => u.A.get(e), [e]),
            { priceOptions: s, discountAmountOff: a } = g(e, t, n, null == r);
        if (null == r || null == a) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, s);
            return (0, d.$g)(t.amount - (a ?? 0), t.currency);
        } catch (e) {
            return null;
        }
    };
