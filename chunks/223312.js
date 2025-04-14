n.d(t, { j: () => o }), n(388685), n(583741);
var r = n(192379),
    l = n(442837),
    i = n(826581),
    a = n(246364);
function o(e) {
    let { guildId: t, applicationStatus: n, sortOrder: o } = e,
        s = (0, l.e7)([i.Z], () => i.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: r.useMemo(() => (o === a.Nw.TIMESTAMP_DESC ? [...s].reverse() : s), [o, s])
    };
}
