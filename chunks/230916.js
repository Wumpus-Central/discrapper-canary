n.d(t, {
    A: () => d,
    _: () => m
}),
    n(388685);
var r = n(911969),
    i = n(583046),
    l = n(74179),
    a = n(74538),
    s = n(937615),
    o = n(374649),
    c = n(104494),
    u = n(474936);
let d = (e) => {
        var t, n, d, m;
        let { paymentSourceId: C } = (0, l.Z)({
                isGift: !1,
                activeSubscription: null
            }),
            g = (0, a.Wz)(u.GP[e].skuId),
            { priceOptions: p } = (0, i.Z)({
                activeSubscription: null,
                skuIDs: [g],
                paymentSourceId: C,
                isGift: !1
            }),
            x = (0, c.Ng)(),
            [h, f] = (0, o.ED)({
                items: [
                    {
                        planId: e,
                        quantity: 1
                    }
                ],
                renewal: !0,
                preventFetch: null == x,
                paymentSourceId: C,
                currency: p.currency
            }),
            v = null == h || null == (m = h.invoiceItems) || null == (d = m.find((t) => t.subscriptionPlanId === e)) || null == (n = d.discounts) || null == (t = n.find((e) => e.type === r.eW.SUBSCRIPTION_PLAN)) ? void 0 : t.amount,
            I = (0, a.aS)(e, !1, !1, p);
        return (0, s.T4)(I.amount - (null != v ? v : 0), I.currency);
    },
    m = (e, t, n) => {
        var c, d, m, C;
        let { paymentSourceId: g } = (0, l.Z)({
                isGift: !1,
                activeSubscription: null
            }),
            p = (0, a.Wz)(u.GP[t].skuId),
            { priceOptions: x } = (0, i.Z)({
                activeSubscription: null,
                skuIDs: [p],
                paymentSourceId: g,
                isGift: !1
            }),
            h = null != n,
            [f, v] = (0, o.ED)({
                subscriptionId: e.id,
                items: [
                    {
                        planId: t,
                        quantity: 1
                    }
                ],
                renewal: !0,
                preventFetch: !h,
                paymentSourceId: g,
                currency: x.currency,
                userDiscountOfferId: null == n ? void 0 : n.id
            }),
            I = null == f || null == (C = f.invoiceItems) || null == (m = C.find((e) => e.subscriptionPlanId === t)) || null == (d = m.discounts) || null == (c = d.find((e) => e.type === r.eW.SUBSCRIPTION_PLAN)) ? void 0 : c.amount,
            T = (0, a.aS)(t, !1, !1, x);
        return (0, s.T4)(T.amount - (null != I ? I : 0), T.currency);
    };
