n.d(t, { Z: () => o });
var r = n(442837),
    i = n(311687),
    a = n(873128);
function o(e) {
    let { userId: t, guildId: n, leaderboardId: o, intervalOffset: s = 0, statisticId: l } = e,
        c = (0, r.e7)([i.Z], () => i.Z.getLastUpdateRequested(o)),
        u = null != c ? new Date(1000 * c) : void 0,
        d = (0, a.Z)({
            guildId: n,
            leaderboardId: o,
            intervalOffset: s
        }),
        _ = null == d ? void 0 : d.users.find((e) => e.user_id === t),
        f = null == _ ? void 0 : _.statistics[l];
    return {
        lastUpdateRequested: u,
        statisticLastUpdatedDate: null != f ? new Date(f.updated_at) : void 0
    };
}
