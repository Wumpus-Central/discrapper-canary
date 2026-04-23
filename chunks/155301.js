n.d(e, { A: () => m });
var i = n(627968),
    l = n(64700),
    r = n(459793),
    a = n(94420),
    s = n(97352),
    o = n(927578),
    c = n(937008),
    u = n(156312),
    d = n(534479),
    p = n(615310);
function m(t) {
    let { initialStep: e, initialPlanId: n, guildId: m, setAnalyticsData: f } = t,
        {
            selectedSkuId: x,
            setSelectedSkuId: g,
            setSelectedPlanId: h,
        } = (0, a.t4)((t) => ({
            selectedSkuId: t.selectedSkuId,
            setSelectedSkuId: t.setSelectedSkuId,
            setSelectedPlanId: t.setSelectedPlanId,
        })),
        {
            blockedPayments: S,
            hasFetchedSubscriptions: b,
            hasFetchedSubscriptionPlans: A,
            currencyLoading: j,
            priceOptions: E,
            setSubscriptionMetadataRequest: v,
            displayCurrency: C,
        } = (0, u.P5)(),
        y = (0, p.l)(),
        { isGift: I } = (0, c.Pv)(),
        [N, P] = l.useState(!b || !A || j);
    return (l.useEffect(() => {
        P(!b || !A || j);
    }, [j, A, b]),
    l.useEffect(() => {
        null != m && v({ guild_id: m });
    }, [m, v]),
    l.useEffect(() => {
        h(n);
        let t = null != n ? s.A.get(n) : null;
        N ||
            S ||
            (f((e) => {
                let n = null != t ? (0, o.y8)(t.id, !1, I, { paymentSourceId: E.paymentSourceId }) : void 0;
                return { ...e, subscription_plan_id: t?.id, price: n?.amount, regular_price: t?.price, currency: C };
            }),
            null != t && (g(t?.skuId), y(e)));
    }, [S, n, I, N, E, C, x, f, h, g, y, e]),
    N)
        ? (0, i.jsx)(d.A, {})
        : S
          ? (0, i.jsx)(r.oO, {})
          : null;
}
