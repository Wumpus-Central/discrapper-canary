n.d(t, { j: () => s }), n(388685), n(583741);
var r = n(192379),
    l = n(442837),
    a = n(826581),
    i = n(246364);
function s(e) {
    let { guildId: t, applicationStatus: n, sortOrder: s } = e,
        o = (0, l.e7)([a.Z], () => a.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: r.useMemo(() => (s === i.Nw.TIMESTAMP_DESC ? [...o].reverse() : o), [s, o])
    };
}
