a.d(e, { Z: () => n });
var c = a(442837),
    d = a(311687),
    s = a(873128);
function n(t) {
    let { userId: e, guildId: a, leaderboardId: n, intervalOffset: f = 0, statisticId: i } = t,
        o = (0, c.e7)([d.Z], () => d.Z.getLastUpdateRequested(n)),
        p = null != o ? new Date(1000 * o) : void 0,
        r = (0, s.Z)({
            guildId: a,
            leaderboardId: n,
            intervalOffset: f
        }),
        l = null == r ? void 0 : r.users.find((t) => t.user_id === e),
        b = null == l ? void 0 : l.statistics[i];
    return {
        lastUpdateRequested: p,
        statisticLastUpdatedDate: null != b ? new Date(b.updated_at) : void 0
    };
}
