n.d(t, {
    Aq: () => m,
    W7: () => g,
    Wp: () => p,
    _n: () => h,
}),
    n(388685);
var r = n(442837),
    i = n(911969),
    a = n(583046),
    o = n(74179),
    s = n(509545),
    l = n(74538),
    c = n(937615),
    u = n(374649),
    d = n(622909),
    f = n(474936);
function p(e, t) {
    var n;
    return null != e && new Set(null == (n = e.discount) ? void 0 : n.plan_ids.map((e) => f.GP[e].skuId)).has(t);
}
let _ = (e, t, n, r) => {
        var s, c, d, p, _;
        let { paymentSourceId: m } = (0, o.Z)({
                isGift: !1,
                activeSubscription: null,
            }),
            h = f.GP[e],
            g = (0, l.Wz)(null != (_ = null == h ? void 0 : h.skuId) ? _ : f.Si.TIER_2),
            { priceOptions: E } = (0, a.Z)({
                activeSubscription: null,
                skuIDs: [g],
                paymentSourceId: m,
                isGift: !1,
            }),
            b = null != t,
            [y, O] = (0, u.ED)({
                subscriptionId: null == n ? void 0 : n.id,
                items: [
                    {
                        planId: e,
                        quantity: 1,
                    },
                ],
                renewal: !0,
                preventFetch: !b || r,
                paymentSourceId: m,
                currency: E.currency,
                userDiscountOfferId: null == t ? void 0 : t.id,
            });
        return {
            priceOptions: E,
            discountAmountOff:
                null == y ||
                null == (p = y.invoiceItems) ||
                null == (d = p.find((t) => t.subscriptionPlanId === e)) ||
                null == (c = d.discounts) ||
                null == (s = c.find((e) => e.type === i.eW.SUBSCRIPTION_PLAN))
                    ? void 0
                    : s.amount,
        };
    },
    m = (e) => {
        let { priceOptions: t, discountAmountOff: n } = _(e, (0, d.N)()),
            r = (0, l.aS)(e, !1, !1, t);
        return (0, c.T4)(r.amount - (null != n ? n : 0), r.currency);
    },
    h = (e, t, n) => {
        let { priceOptions: r, discountAmountOff: i } = _(t, n, e),
            a = (0, l.aS)(t, !1, !1, r);
        return (0, c.T4)(a.amount - (null != i ? i : 0), a.currency);
    },
    g = (e, t, n) => {
        let i = (0, r.e7)([s.Z], () => s.Z.get(e), [e]),
            { priceOptions: a, discountAmountOff: o } = _(e, t, n, null == i);
        if (null == i || null == o) return null;
        try {
            let t = (0, l.aS)(e, !1, !1, a);
            return (0, c.T4)(t.amount - (null != o ? o : 0), t.currency);
        } catch (e) {
            return null;
        }
    };
