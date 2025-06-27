n.d(t, {
    Kz: () => l,
    oC: () => u,
    p9: () => c
});
var r = n(73800),
    i = n(442837),
    a = n(485386),
    o = n(430824),
    s = n(829883);
function l(e, t) {
    var n;
    let { customIconSrc: r, unicodeEmoji: i } = null != (n = (0, s.zy)(e, t)) ? n : {};
    if (null != r || null != i)
        return {
            src: r,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: i
        };
}
function c(e) {
    let { guildId: t, roleId: n, size: c = 20 } = e,
        { guild: u, roles: d } = (0, i.cj)(
            [o.Z, a.Z],
            () => ({
                guild: o.Z.getGuild(t),
                roles: a.Z.getRoles(t)
            }),
            [t]
        );
    return r.useMemo(() => {
        if (null == u || null == n) return;
        let e = d[n];
        if ((0, s._b)(u, e)) return l(e, c);
    }, [u, d, n, c]);
}
function u(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getGuild(e));
    if (null != n && (0, s._b)(n, t)) return l(t);
}
