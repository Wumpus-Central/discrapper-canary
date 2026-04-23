"use strict";
n.d(t, { N1: () => h, U9: () => f, iU: () => m, tQ: () => E });
var r = n(311907),
    i = n(155718),
    s = n(853398),
    a = n(369827),
    o = n(97352),
    l = n(927578),
    u = n(580630),
    c = n(543767),
    d = n(422936),
    _ = n(788868);
function f(e, t) {
    return null != e && new Set(e.discount?.plan_ids.map((e) => _.hd[e].skuId)).has(t);
}
let p = (e, t, n, r) => {
        let { paymentSourceId: o } = (0, a.A)({ isGift: !1, activeSubscription: null }),
            u = _.hd[e],
            d = (0, l.mH)(u?.skuId ?? _.pe.TIER_2),
            { priceOptions: f } = (0, s.A)({ activeSubscription: null, skuIDs: [d], paymentSourceId: o, isGift: !1 }),
            p = null != t,
            [h, E] = (0, c.Kq)({
                subscriptionId: n?.id,
                items: [{ planId: e, quantity: 1 }],
                renewal: !1,
                preventFetch: !p || r,
                paymentSourceId: o,
                currency: f.currency,
                userDiscountOfferId: t?.id,
            });
        return {
            priceOptions: f,
            discountAmountOff: h?.invoiceItems
                ?.find((t) => t.subscriptionPlanId === e)
                ?.discounts?.find((e) => e.type === i.iS.SUBSCRIPTION_PLAN)?.amount,
        };
    },
    h = (e) => {
        let { priceOptions: t, discountAmountOff: n } = p(e, (0, d.O)()),
            r = (0, l.y8)(e, !1, !1, t);
        return (0, u.$g)(r.amount - (n ?? 0), r.currency);
    },
    E = (e, t, n) => {
        let { priceOptions: r, discountAmountOff: i } = p(t, n, e),
            s = (0, l.y8)(t, !1, !1, r);
        return (0, u.$g)(s.amount - (i ?? 0), s.currency);
    },
    m = (e, t, n) => {
        let i = (0, r.bG)([o.A], () => o.A.get(e), [e]),
            { priceOptions: s, discountAmountOff: a } = p(e, t, n, null == i);
        if (null == i || null == a) return null;
        try {
            let t = (0, l.y8)(e, !1, !1, s);
            return (0, u.$g)(t.amount - (a ?? 0), t.currency);
        } catch (e) {
            return null;
        }
    };
