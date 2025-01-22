t.d(e, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(89057),
    a = t(509545),
    o = t(74538),
    s = t(987209),
    u = t(563132),
    c = t(456251);
function d(n) {
    let { initialStep: e, initialPlanId: t, guildId: d, setAnalyticsData: m, handleClose: f } = n,
        { blockedPayments: h, setStep: p, hasFetchedSubscriptions: g, hasFetchedSubscriptionPlans: x, currencyLoading: v, selectedSkuId: b, setSelectedSkuId: C, setSelectedPlanId: j, priceOptions: S, setSubscriptionMetadataRequest: N } = (0, u.usePaymentContext)(),
        { isGift: T } = (0, s.wD)(),
        [P, _] = l.useState(!g || !x || v);
    return (l.useEffect(() => {
        _(!g || !x || v);
    }, [v, x, g]),
    l.useEffect(() => {
        null != d && N({ guild_id: d });
    }, [d, N]),
    l.useEffect(() => {
        j(t);
        let n = null != t ? a.Z.get(t) : null;
        if (!P && !h)
            m((e) => {
                let t = null != n ? (0, o.aS)(n.id, !1, T, S) : void 0;
                return {
                    ...e,
                    subscription_plan_id: null == n ? void 0 : n.id,
                    price: null == t ? void 0 : t.amount,
                    regular_price: null == n ? void 0 : n.price,
                    currency: S.currency
                };
            }),
                null != n && (C(null == n ? void 0 : n.skuId), p(e));
    }, [h, t, T, P, S, b, m, j, C, p, e]),
    P)
        ? (0, i.jsx)(c.Z, {})
        : h
          ? (0, i.jsx)(r.Vq, { onClose: f })
          : null;
}
