n.d(t, { j: () => l }), n(47120), n(978209);
var r = n(192379),
    a = n(442837),
    i = n(826581),
    o = n(246364);
function l(e) {
    let { guildId: t, applicationStatus: n, sortOrder: l } = e,
        s = (0, a.e7)([i.Z], () => i.Z.getRequests(t, n), [n, t]);
    return {
        guildJoinRequests: r.useMemo(() => (l === o.Nw.TIMESTAMP_DESC ? [...s].reverse() : s), [l, s])
    };
}
