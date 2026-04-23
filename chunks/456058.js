n.d(t, { A: () => d });
var i = n(64700),
    l = n(105917),
    s = n(969379),
    r = n(300233),
    a = n(22491),
    o = n(311750);
function d(e, t) {
    let n = t?.team,
        { payoutsByPeriod: d, loading: c } = (0, s.A)(t?.id, {
            groupType: o.x1.SERVER_ROLE_SUBSCRIPTION,
            teamId: n?.id,
        }),
        u = (0, r.X)("useEarningMetrics"),
        m = (0, a.A)(e),
        {
            currentPeriod: g,
            previousPeriods: h,
            metrics: x,
        } = i.useMemo(() => {
            let { currentPeriod: e, previousPeriods: t } = (0, l.dc)(d),
                n = (0, l.El)(e, t[0]);
            return {
                currentPeriod: e,
                previousPeriods: t,
                metrics: { ...n, subscribers: m, subscriberChange: n.paymentsCountChange },
            };
        }, [d, m]);
    return { loading: c || !u, team: n, currentPeriod: g, previousPeriods: h, allPeriods: d, metrics: x };
}
