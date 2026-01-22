l.d(t, {
    K: () => a,
}),
    l(896048),
    l(264879);
var n = l(64700),
    r = l(311907),
    i = l(844944),
    s = l(513461);

function a(e) {
    let { guildId: t, applicationStatus: l, sortOrder: a } = e,
        c = (0, r.bG)([i.A], () => i.A.getRequests(t, l), [l, t]);
    return {
        guildJoinRequests: n.useMemo(() => (a === s._e.TIMESTAMP_DESC ? [...c].reverse() : c), [a, c]),
    };
}
