n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    l = n(459793),
    a = n(97352),
    s = n(927578),
    o = n(937008),
    c = n(156312),
    d = n(534479);
function u(e) {
    let { initialStep: t, initialPlanId: n, guildId: u, setAnalyticsData: m, handleClose: p } = e,
        {
            blockedPayments: x,
            setStep: f,
            hasFetchedSubscriptions: h,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: b,
            selectedSkuId: j,
            setSelectedSkuId: A,
            setSelectedPlanId: S,
            priceOptions: v,
            setSubscriptionMetadataRequest: C,
        } = (0, c.P5)(),
        { isGift: T } = (0, o.Pv)(),
        [N, E] = r.useState(!h || !g || b);
    return (r.useEffect(() => {
        E(!h || !g || b);
    }, [b, g, h]),
    r.useEffect(() => {
        null != u && C({ guild_id: u });
    }, [u, C]),
    r.useEffect(() => {
        S(n);
        let e = null != n ? a.A.get(n) : null;
        N ||
            x ||
            (m((t) => {
                let n = null != e ? (0, s.y8)(e.id, !1, T, v) : void 0;
                return {
                    ...t,
                    subscription_plan_id: e?.id,
                    price: n?.amount,
                    regular_price: e?.price,
                    currency: v.currency,
                };
            }),
            null != e && (A(e?.skuId), f(t)));
    }, [x, n, T, N, v, j, m, S, A, f, t]),
    N)
        ? (0, i.jsx)(d.A, {})
        : x
          ? (0, i.jsx)(l.oO, { onClose: p })
          : null;
}
