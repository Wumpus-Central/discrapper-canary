n.d(t, { j: () => o }), n(47120);
var a = n(192379),
    i = n(442837),
    r = n(826581),
    l = n(246364);
function o(e) {
    let { guildId: t, applicationStatus: n, sortOrder: o } = e,
        s = (0, i.e7)([r.Z], () => r.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: a.useMemo(() => (o === l.Nw.TIMESTAMP_DESC ? [...s].reverse() : s), [o, s])
    };
}
