n.d(t, { j: () => s }), n(388685), n(583741);
var r = n(73800),
    l = n(442837),
    i = n(826581),
    a = n(246364);
function s(e) {
    let { guildId: t, applicationStatus: n, sortOrder: s } = e,
        o = (0, l.e7)([i.Z], () => i.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: r.useMemo(() => (s === a.Nw.TIMESTAMP_DESC ? [...o].reverse() : o), [s, o])
    };
}
