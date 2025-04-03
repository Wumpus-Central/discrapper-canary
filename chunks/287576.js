n.d(t, { Z: () => c });
var r = n(192379),
    i = n(725803),
    s = n(766434),
    a = n(310291),
    l = n(674563),
    o = n(198139);
function c(e) {
    var t;
    let { application: n, loading: c } = (0, i.Z)(e, l.wW.GUILD_ROLE_SUBSCRIPTIONS),
        { payoutsByPeriod: d, loading: u } = (0, a.Z)(null == n ? void 0 : n.id, {
            groupType: o.uw.GUILD_PRODUCT,
            teamId: null == n || null == (t = n.team) ? void 0 : t.id
        }),
        {
            currentPeriod: m,
            previousPeriods: g,
            metrics: p
        } = r.useMemo(() => {
            let { currentPeriod: e, previousPeriods: t } = (0, s.Br)(d),
                n = (0, s.Uj)(e, t[0]);
            return {
                currentPeriod: e,
                previousPeriods: t,
                metrics: n
            };
        }, [d]);
    return {
        loading: c || u,
        payoutsByPeriod: d,
        currentPeriod: m,
        previousPeriods: g,
        metrics: p,
        application: n
    };
}
