n.d(t, {
    I: () => c,
    Z: () => u,
});
var r = n(473749),
    i = n(442837),
    a = n(430824),
    o = n(755458),
    s = n(60482),
    l = n(905128);
function c(e) {
    var t, n, r, i;
    let c = null != (i = null == (t = a.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount) ? i : 0,
        u = (0, o.v$)(e, "GuildPowerupsBoostCount"),
        d = null == (n = l.Z.getStateForGuild(e)) ? void 0 : n.appliedBoosts,
        f = null == (r = s.Z.getStateForGuild(e)) ? void 0 : r.appliedBoosts;
    if (null == d || (u && null == f))
        return {
            available: 0,
            spent: 0,
            total: c,
        };
    let _ = d + (null != f ? f : 0);
    return {
        available: Math.max(0, c - _),
        spent: _,
        total: c,
    };
}
function u(e) {
    var t;
    let n =
            null !=
            (t = (0, i.e7)([a.Z], () => {
                var t;
                return null == (t = a.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount;
            }))
                ? t
                : 0,
        c = (0, o.BU)(e, "GuildPowerupsBoostCount"),
        u = (0, i.e7)([l.Z], () => {
            var t;
            return null == (t = l.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts;
        }),
        d = (0, i.e7)([s.Z], () => {
            var t;
            return null == (t = s.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts;
        });
    return r.useMemo(() => {
        if (null == u || (c && null == d))
            return {
                available: 0,
                spent: 0,
                total: n,
            };
        let e = u + (null != d ? d : 0);
        return {
            available: Math.max(0, n - e),
            spent: e,
            total: n,
        };
    }, [n, u, d, c]);
}
