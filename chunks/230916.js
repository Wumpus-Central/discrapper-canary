n.d(t, {
    Aq: () => _,
    W7: () => h,
    _n: () => p,
}),
    n(388685);
var r = n(911969),
    i = n(583046),
    a = n(74179),
    o = n(509545),
    s = n(74538),
    l = n(937615),
    c = n(374649),
    u = n(104494),
    d = n(474936);
let f = (e, t, n) => {
        var o, l, u, f;
        let { paymentSourceId: _ } = (0, a.Z)({
                isGift: !1,
                activeSubscription: null,
            }),
            p = (0, s.Wz)(d.GP[e].skuId),
            { priceOptions: h } = (0, i.Z)({
                activeSubscription: null,
                skuIDs: [p],
                paymentSourceId: _,
                isGift: !1,
            }),
            m = null != t,
            [g, E] = (0, c.ED)({
                subscriptionId: null == n ? void 0 : n.id,
                items: [
                    {
                        planId: e,
                        quantity: 1,
                    },
                ],
                renewal: !0,
                preventFetch: !m,
                paymentSourceId: _,
                currency: h.currency,
                userDiscountOfferId: null == t ? void 0 : t.id,
            });
        return {
            priceOptions: h,
            discountAmountOff:
                null == g ||
                null == (f = g.invoiceItems) ||
                null == (u = f.find((t) => t.subscriptionPlanId === e)) ||
                null == (l = u.discounts) ||
                null == (o = l.find((e) => e.type === r.eW.SUBSCRIPTION_PLAN))
                    ? void 0
                    : o.amount,
        };
    },
    _ = (e) => {
        let { priceOptions: t, discountAmountOff: n } = f(e, (0, u.Ng)()),
            r = (0, s.aS)(e, !1, !1, t);
        return (0, l.T4)(r.amount - (null != n ? n : 0), r.currency);
    },
    p = (e, t, n) => {
        let { priceOptions: r, discountAmountOff: i } = f(t, n, e),
            a = (0, s.aS)(t, !1, !1, r);
        return (0, l.T4)(a.amount - (null != i ? i : 0), a.currency);
    },
    h = (e, t, n) => {
        let r = o.Z.get(t),
            { priceOptions: i, discountAmountOff: a } = f(t, n, e);
        if (null == r) return null;
        let c = (0, s.aS)(t, !1, !1, i);
        return (0, l.T4)(c.amount - (null != a ? a : 0), c.currency);
    };
