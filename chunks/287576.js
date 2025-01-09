n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    r = n(725803),
    l = n(766434),
    s = n(310291),
    a = n(674563),
    o = n(198139);
function c(e) {
    var t;
    let { application: n, loading: c } = (0, r.Z)(e, a.wW.GUILD_ROLE_SUBSCRIPTIONS),
        { payoutsByPeriod: d, loading: u } = (0, s.Z)(null == n ? void 0 : n.id, {
            groupType: o.uw.GUILD_PRODUCT,
            teamId: null == n ? void 0 : null === (t = n.team) || void 0 === t ? void 0 : t.id
        }),
        {
            currentPeriod: m,
            previousPeriods: h,
            metrics: g
        } = i.useMemo(() => {
            let { currentPeriod: e, previousPeriods: t } = (0, l.Br)(d),
                n = (0, l.Uj)(e, t[0]);
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
        previousPeriods: h,
        metrics: g,
        application: n
    };
}
