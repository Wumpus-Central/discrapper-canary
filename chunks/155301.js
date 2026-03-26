n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    r = n(459793),
    a = n(97352),
    s = n(927578),
    o = n(937008),
    d = n(156312),
    c = n(534479);
function u(e) {
    let { initialStep: t, initialPlanId: n, guildId: u, setAnalyticsData: m } = e,
        {
            blockedPayments: p,
            setStep: f,
            hasFetchedSubscriptions: x,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: h,
            selectedSkuId: b,
            setSelectedSkuId: A,
            setSelectedPlanId: j,
            priceOptions: S,
            setSubscriptionMetadataRequest: v,
            displayCurrency: C,
        } = (0, d.P5)(),
        { isGift: _ } = (0, o.Pv)(),
        [y, N] = l.useState(!x || !g || h);
    return (l.useEffect(() => {
        N(!x || !g || h);
    }, [h, g, x]),
    l.useEffect(() => {
        null != u && v({ guild_id: u });
    }, [u, v]),
    l.useEffect(() => {
        j(n);
        let e = null != n ? a.A.get(n) : null;
        y ||
            p ||
            (m((t) => {
                let n = null != e ? (0, s.y8)(e.id, !1, _, { paymentSourceId: S.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: C };
            }),
            null != e && (A(e?.skuId), f(t)));
    }, [p, n, _, y, S, C, b, m, j, A, f, t]),
    y)
        ? (0, i.jsx)(c.A, {})
        : p
          ? (0, i.jsx)(r.oO, {})
          : null;
}
