n.d(t, { Z: () => c });
var r = n(192379),
    i = n(725803),
    l = n(766434),
    s = n(310291),
    a = n(674563),
    o = n(198139);
function c(e) {
    var t;
    let { application: n, loading: c } = (0, i.Z)(e, a.wW.GUILD_ROLE_SUBSCRIPTIONS),
        { payoutsByPeriod: u, loading: d } = (0, s.Z)(null == n ? void 0 : n.id, {
            groupType: o.uw.GUILD_PRODUCT,
            teamId: null == n || null == (t = n.team) ? void 0 : t.id
        }),
        {
            currentPeriod: m,
            previousPeriods: g,
            metrics: p
        } = r.useMemo(() => {
            let { currentPeriod: e, previousPeriods: t } = (0, l.Br)(u),
                n = (0, l.Uj)(e, t[0]);
            return {
                currentPeriod: e,
                previousPeriods: t,
                metrics: n
            };
        }, [u]);
    return {
        loading: c || d,
        payoutsByPeriod: u,
        currentPeriod: m,
        previousPeriods: g,
        metrics: p,
        application: n
    };
}
