l.d(t, { K: () => r });
var n = l(64700),
    s = l(311907),
    i = l(844944),
    a = l(513461);
function r(e) {
    let { guildId: t, applicationStatus: l, sortOrder: r } = e,
        o = (0, s.bG)([i.A], () => i.A.getRequests(t, l), [l, t]);
    return { guildJoinRequests: n.useMemo(() => (r === a._e.TIMESTAMP_DESC ? [...o].reverse() : o), [r, o]) };
}
