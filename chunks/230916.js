n.d(t, {
    A: () => d,
    _: () => C
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
        var t, n, d, C;
        let { paymentSourceId: m } = (0, l.Z)({
                isGift: !1,
                activeSubscription: null
            }),
            g = (0, a.Wz)(u.GP[e].skuId),
            { priceOptions: p } = (0, i.Z)({
                activeSubscription: null,
                skuIDs: [g],
                paymentSourceId: m,
                isGift: !1
            }),
            x = (0, c.Ng)(),
            [f, h] = (0, o.ED)({
                items: [
                    {
                        planId: e,
                        quantity: 1
                    }
                ],
                renewal: !0,
                preventFetch: null == x,
                paymentSourceId: m,
                currency: p.currency
            }),
            v = null == f || null == (C = f.invoiceItems) || null == (d = C.find((t) => t.subscriptionPlanId === e)) || null == (n = d.discounts) || null == (t = n.find((e) => e.type === r.eW.SUBSCRIPTION_PLAN)) ? void 0 : t.amount,
            T = (0, a.aS)(e, !1, !1, p);
        return (0, s.T4)(T.amount - (null != v ? v : 0), T.currency);
    },
    C = (e, t, n) => {
        var c, d, C, m;
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
            f = null != n,
            [h, v] = (0, o.ED)({
                subscriptionId: e.id,
                items: [
                    {
                        planId: t,
                        quantity: 1
                    }
                ],
                renewal: !0,
                preventFetch: !f,
                paymentSourceId: g,
                currency: x.currency,
                userDiscountOfferId: null == n ? void 0 : n.id
            }),
            T = null == h || null == (m = h.invoiceItems) || null == (C = m.find((e) => e.subscriptionPlanId === t)) || null == (d = C.discounts) || null == (c = d.find((e) => e.type === r.eW.SUBSCRIPTION_PLAN)) ? void 0 : c.amount,
            I = (0, a.aS)(t, !1, !1, x);
        return (0, s.T4)(I.amount - (null != T ? T : 0), I.currency);
    };
