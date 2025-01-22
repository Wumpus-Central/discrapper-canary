r.d(n, {
    A: function () {
        return p;
    },
    _: function () {
        return h;
    }
});
var i = r(47120);
var a = r(911969),
    o = r(583046),
    s = r(74179),
    l = r(74538),
    u = r(937615),
    c = r(374649),
    d = r(104494),
    f = r(474936);
let p = (e) => {
        var n, r, i, p;
        let { paymentSourceId: h } = (0, s.Z)({
                isGift: !1,
                activeSubscription: null
            }),
            _ = (0, l.Wz)(f.GP[e].skuId),
            { priceOptions: m } = (0, o.Z)({
                activeSubscription: null,
                skuIDs: [_],
                paymentSourceId: h,
                isGift: !1
            }),
            g = null != (0, d.Ng)(),
            [E, v] = (0, c.ED)({
                items: [
                    {
                        planId: e,
                        quantity: 1
                    }
                ],
                renewal: !0,
                preventFetch: !g,
                paymentSourceId: h,
                currency: m.currency
            }),
            y = null == E ? void 0 : null === (p = E.invoiceItems) || void 0 === p ? void 0 : null === (i = p.find((n) => n.subscriptionPlanId === e)) || void 0 === i ? void 0 : null === (r = i.discounts) || void 0 === r ? void 0 : null === (n = r.find((e) => e.type === a.eW.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
            b = (0, l.aS)(e, !1, !1, m);
        return (0, u.T4)(b.amount - (null != y ? y : 0), b.currency);
    },
    h = (e, n, r) => {
        var i, d, p, h;
        let { paymentSourceId: _ } = (0, s.Z)({
                isGift: !1,
                activeSubscription: null
            }),
            m = (0, l.Wz)(f.GP[n].skuId),
            { priceOptions: g } = (0, o.Z)({
                activeSubscription: null,
                skuIDs: [m],
                paymentSourceId: _,
                isGift: !1
            }),
            E = null != r,
            [v, y] = (0, c.ED)({
                subscriptionId: e.id,
                items: [
                    {
                        planId: n,
                        quantity: 1
                    }
                ],
                renewal: !0,
                preventFetch: !E,
                paymentSourceId: _,
                currency: g.currency,
                userDiscountOfferId: null == r ? void 0 : r.id
            }),
            b = null == v ? void 0 : null === (h = v.invoiceItems) || void 0 === h ? void 0 : null === (p = h.find((e) => e.subscriptionPlanId === n)) || void 0 === p ? void 0 : null === (d = p.discounts) || void 0 === d ? void 0 : null === (i = d.find((e) => e.type === a.eW.SUBSCRIPTION_PLAN)) || void 0 === i ? void 0 : i.amount,
            I = (0, l.aS)(n, !1, !1, g);
        return (0, u.T4)(I.amount - (null != b ? b : 0), I.currency);
    };
