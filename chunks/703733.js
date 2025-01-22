r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(442837),
    a = r(311687),
    o = r(873128);
function s(e) {
    let { userId: n, guildId: r, leaderboardId: s, intervalOffset: l = 0, statisticId: u } = e,
        c = (0, i.e7)([a.Z], () => a.Z.getLastUpdateRequested(s)),
        d = null != c ? new Date(1000 * c) : void 0,
        f = (0, o.Z)({
            guildId: r,
            leaderboardId: s,
            intervalOffset: l
        }),
        p = null == f ? void 0 : f.users.find((e) => e.user_id === n),
        h = null == p ? void 0 : p.statistics[u];
    return {
        lastUpdateRequested: d,
        statisticLastUpdatedDate: null != h ? new Date(h.updated_at) : void 0
    };
}
