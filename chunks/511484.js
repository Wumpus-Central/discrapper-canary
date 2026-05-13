"use strict";
n.d(t, { N1: () => p, U9: () => f, iU: () => m, tQ: () => E });
var i = n(17928),
    r = n(155718),
    s = n(853398),
    a = n(369827),
    o = n(97352),
    l = n(927578),
    u = n(580630),
    c = n(543767),
    d = n(422936),
    _ = n(788868);
function f(e, t) {
    return null != e && new Set(e.discount?.planIds.map((e) => _.hd[e].skuId)).has(t);
}
let h = (e, t, n, i) => {
        let { paymentSourceId: o } = (0, a.A)({ isGift: !1, activeSubscription: null }),
            u = _.hd[e],
            d = (0, l.mH)(u?.skuId ?? _.pe.TIER_2),
            { priceOptions: f } = (0, s.A)({ activeSubscription: null, skuIDs: [d], paymentSourceId: o, isGift: !1 }),
            h = null != t,
            [p, E] = (0, c.YV)({
                subscriptionId: n?.id,
                items: [{ planId: e, quantity: 1 }],
                renewal: null != n,
                preventFetch: !h || i,
                paymentSourceId: o,
                currency: f.currency,
                userDiscountOfferId: t?.id,
            });
        return {
            priceOptions: f,
            discountAmountOff: p?.invoiceItems
                ?.find((t) => t.subscriptionPlanId === e)
                ?.discounts?.find((e) => e.type === r.iS.SUBSCRIPTION_PLAN)?.amount,
        };
    },
    p = (e) => {
        let { priceOptions: t, discountAmountOff: n } = h(e, (0, d.O)()),
            i = (0, l.y8)(e, !1, !1, t);
        return (0, u.$g)(i.amount - (n ?? 0), i.currency);
    },
    E = (e, t, n) => {
        let { priceOptions: i, discountAmountOff: r } = h(t, n, e),
            s = (0, l.y8)(t, !1, !1, i);
        return (0, u.$g)(s.amount - (r ?? 0), s.currency);
    },
    m = (e, t, n) => {
        let r = (0, i.bG)([o.A], () => o.A.get(e), [e]),
            { priceOptions: s, discountAmountOff: a } = h(e, t, n, null == r);
        if (null == r || null == a) return null;
        try {
            let t = (0, l.y8)(e, !1, !1, s);
            return (0, u.$g)(t.amount - (a ?? 0), t.currency);
        } catch (e) {
            return null;
        }
    };
