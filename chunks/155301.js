n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    r = n(459793),
    a = n(97352),
    s = n(927578),
    o = n(937008),
    d = n(156312),
    c = n(534479),
    u = n(615310);
function m(e) {
    let { initialStep: t, initialPlanId: n, guildId: m, setAnalyticsData: p } = e,
        {
            blockedPayments: f,
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
        _ = (0, u.l)(),
        { isGift: y } = (0, o.Pv)(),
        [N, E] = l.useState(!x || !g || h);
    return (l.useEffect(() => {
        E(!x || !g || h);
    }, [h, g, x]),
    l.useEffect(() => {
        null != m && v({ guild_id: m });
    }, [m, v]),
    l.useEffect(() => {
        j(n);
        let e = null != n ? a.A.get(n) : null;
        N ||
            f ||
            (p((t) => {
                let n = null != e ? (0, s.y8)(e.id, !1, y, { paymentSourceId: S.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: C };
            }),
            null != e && (A(e?.skuId), _(t)));
    }, [f, n, y, N, S, C, b, p, j, A, _, t]),
    N)
        ? (0, i.jsx)(c.A, {})
        : f
          ? (0, i.jsx)(r.oO, {})
          : null;
}
