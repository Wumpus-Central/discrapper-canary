n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    r = n(459793),
    a = n(97352),
    s = n(927578),
    o = n(413748),
    d = n(937008),
    c = n(156312),
    u = n(534479),
    m = n(615310);
function p(e) {
    let { initialStep: t, initialPlanId: n, guildId: p, setAnalyticsData: f } = e,
        {
            selectedSkuId: x,
            setSelectedSkuId: g,
            setSelectedPlanId: h,
        } = (0, o.t)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            blockedPayments: S,
            hasFetchedSubscriptions: b,
            hasFetchedSubscriptionPlans: A,
            currencyLoading: j,
            priceOptions: v,
            setSubscriptionMetadataRequest: _,
            displayCurrency: C,
        } = (0, c.P5)(),
        N = (0, m.l)(),
        { isGift: y } = (0, d.Pv)(),
        [E, T] = l.useState(!b || !A || j);
    return (l.useEffect(() => {
        T(!b || !A || j);
    }, [j, A, b]),
    l.useEffect(() => {
        null != p && _({ guild_id: p });
    }, [p, _]),
    l.useEffect(() => {
        h(n);
        let e = null != n ? a.A.get(n) : null;
        E ||
            S ||
            (f((t) => {
                let n = null != e ? (0, s.y8)(e.id, !1, y, { paymentSourceId: v.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: C };
            }),
            null != e && (g(e?.skuId), N(t)));
    }, [S, n, y, E, v, C, x, f, h, g, N, t]),
    E)
        ? (0, i.jsx)(u.A, {})
        : S
          ? (0, i.jsx)(r.oO, {})
          : null;
}
