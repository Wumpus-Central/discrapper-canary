n.d(t, { j: () => s }), n(388685), n(583741);
var l = n(473749),
    r = n(442837),
    i = n(826581),
    a = n(246364);
function s(e) {
    let { guildId: t, applicationStatus: n, sortOrder: s } = e,
        o = (0, r.e7)([i.Z], () => i.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: l.useMemo(() => (s === a.Nw.TIMESTAMP_DESC ? [...o].reverse() : o), [s, o]),
    };
}
