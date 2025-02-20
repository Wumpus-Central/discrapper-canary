c.d(e, { Z: () => n });
var d = c(442837),
    a = c(311687),
    s = c(873128);
function n(t) {
    let { userId: e, guildId: c, leaderboardId: n, intervalOffset: o = 0, statisticId: f } = t,
        p = (0, d.e7)([a.Z], () => a.Z.getLastUpdateRequested(n)),
        i = null != p ? new Date(1000 * p) : void 0,
        r = (0, s.Z)({
            guildId: c,
            leaderboardId: n,
            intervalOffset: o
        }),
        b = null == r ? void 0 : r.users.find((t) => t.user_id === e),
        u = null == b ? void 0 : b.statistics[f];
    return {
        lastUpdateRequested: i,
        statisticLastUpdatedDate: null != u ? new Date(u.updated_at) : void 0
    };
}
