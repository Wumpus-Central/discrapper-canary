"use strict";
n.d(t, { N1: () => m, U9: () => E, iU: () => g, tQ: () => f });
var i = n(17928),
    r = n(155718),
    s = n(853398),
    a = n(369827),
    o = n(97352),
    l = n(927578),
    d = n(580630),
    _ = n(543767),
    u = n(422936),
    c = n(788868);
function E(e, t) {
    return null != e && new Set(e.discount?.plan_ids.map((e) => c.hd[e].skuId)).has(t);
}
let h = (e, t, n, i) => {
        let { paymentSourceId: o } = (0, a.A)({ isGift: !1, activeSubscription: null }),
            d = c.hd[e],
            u = (0, l.mH)(d?.skuId ?? c.pe.TIER_2),
            { priceOptions: E } = (0, s.A)({ activeSubscription: null, skuIDs: [u], paymentSourceId: o, isGift: !1 }),
            h = null != t,
            [m, f] = (0, _.Kq)({
                subscriptionId: n?.id,
                items: [{ planId: e, quantity: 1 }],
                renewal: !1,
                preventFetch: !h || i,
                paymentSourceId: o,
                currency: E.currency,
                userDiscountOfferId: t?.id,
            });
        return {
            priceOptions: E,
            discountAmountOff: m?.invoiceItems
                ?.find((t) => t.subscriptionPlanId === e)
                ?.discounts?.find((e) => e.type === r.iS.SUBSCRIPTION_PLAN)?.amount,
        };
    },
    m = (e) => {
        let { priceOptions: t, discountAmountOff: n } = h(e, (0, u.O)()),
            i = (0, l.y8)(e, !1, !1, t);
        return (0, d.$g)(i.amount - (n ?? 0), i.currency);
    },
    f = (e, t, n) => {
        let { priceOptions: i, discountAmountOff: r } = h(t, n, e),
            s = (0, l.y8)(t, !1, !1, i);
        return (0, d.$g)(s.amount - (r ?? 0), s.currency);
    },
    g = (e, t, n) => {
        let r = (0, i.bG)([o.A], () => o.A.get(e), [e]),
            { priceOptions: s, discountAmountOff: a } = h(e, t, n, null == r);
        if (null == r || null == a) return null;
        try {
            let t = (0, l.y8)(e, !1, !1, s);
            return (0, d.$g)(t.amount - (a ?? 0), t.currency);
        } catch (e) {
            return null;
        }
    };
