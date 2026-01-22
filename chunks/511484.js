n.d(t, {
    N1: () => h,
    U9: () => p,
    iU: () => g,
    tQ: () => m,
}),
    n(896048);
var r = n(311907),
    i = n(155718),
    a = n(853398),
    s = n(369827),
    o = n(97352),
    l = n(927578),
    c = n(580630),
    u = n(543767),
    d = n(422936),
    f = n(788868);
function p(e, t) {
    var n;
    return null != e && new Set(null == (n = e.discount) ? void 0 : n.plan_ids.map((e) => f.hd[e].skuId)).has(t);
}
let _ = (e, t, n, r) => {
        var o, c, d, p, _;
        let { paymentSourceId: h } = (0, s.A)({
                isGift: !1,
                activeSubscription: null,
            }),
            m = f.hd[e],
            g = (0, l.mH)(null != (o = null == m ? void 0 : m.skuId) ? o : f.pe.TIER_2),
            { priceOptions: E } = (0, a.A)({
                activeSubscription: null,
                skuIDs: [g],
                paymentSourceId: h,
                isGift: !1,
            }),
            b = null != t,
            [y, O] = (0, u.Kq)({
                subscriptionId: null == n ? void 0 : n.id,
                items: [
                    {
                        planId: e,
                        quantity: 1,
                    },
                ],
                renewal: !0,
                preventFetch: !b || r,
                paymentSourceId: h,
                currency: E.currency,
                userDiscountOfferId: null == t ? void 0 : t.id,
            });
        return {
            priceOptions: E,
            discountAmountOff:
                null == y ||
                null == (_ = y.invoiceItems) ||
                null == (p = _.find((t) => t.subscriptionPlanId === e)) ||
                null == (d = p.discounts) ||
                null == (c = d.find((e) => e.type === i.iS.SUBSCRIPTION_PLAN))
                    ? void 0
                    : c.amount,
        };
    },
    h = (e) => {
        let { priceOptions: t, discountAmountOff: n } = _(e, (0, d.O)()),
            r = (0, l.y8)(e, !1, !1, t);
        return (0, c.$g)(r.amount - (null != n ? n : 0), r.currency);
    },
    m = (e, t, n) => {
        let { priceOptions: r, discountAmountOff: i } = _(t, n, e),
            a = (0, l.y8)(t, !1, !1, r);
        return (0, c.$g)(a.amount - (null != i ? i : 0), a.currency);
    },
    g = (e, t, n) => {
        let i = (0, r.bG)([o.A], () => o.A.get(e), [e]),
            { priceOptions: a, discountAmountOff: s } = _(e, t, n, null == i);
        if (null == i || null == s) return null;
        try {
            let t = (0, l.y8)(e, !1, !1, a);
            return (0, c.$g)(t.amount - (null != s ? s : 0), t.currency);
        } catch (e) {
            return null;
        }
    };
