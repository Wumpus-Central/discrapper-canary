n.d(t, { Z: () => s });
var i = n(442837),
    r = n(311687),
    a = n(873128);
function s(e) {
    let { userId: t, guildId: n, leaderboardId: s, intervalOffset: o = 0, statisticId: l } = e,
        u = (0, i.e7)([r.Z], () => r.Z.getLastUpdateRequested(s)),
        c = null != u ? new Date(1000 * u) : void 0,
        d = (0, a.Z)({
            guildId: n,
            leaderboardId: s,
            intervalOffset: o
        }),
        f = null == d ? void 0 : d.users.find((e) => e.user_id === t),
        _ = null == f ? void 0 : f.statistics[l];
    return {
        lastUpdateRequested: c,
        statisticLastUpdatedDate: null != _ ? new Date(_.updated_at) : void 0
    };
}
