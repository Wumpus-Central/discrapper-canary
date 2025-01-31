n.d(t, {
    Kz: () => o,
    oC: () => u,
    p9: () => l
});
var i = n(192379),
    r = n(442837),
    a = n(430824),
    s = n(829883);
function o(e, t) {
    var n;
    let { customIconSrc: i, unicodeEmoji: r } = null !== (n = (0, s.zy)(e, t)) && void 0 !== n ? n : {};
    if (null != i || null != r)
        return {
            src: i,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: r
        };
}
function l(e) {
    let { guildId: t, roleId: n, size: l = 20 } = e,
        { guild: u, roles: c } = (0, r.cj)(
            [a.Z],
            () => ({
                guild: a.Z.getGuild(t),
                roles: a.Z.getRoles(t)
            }),
            [t]
        );
    return i.useMemo(() => {
        if (null == u || null == n) return;
        let e = c[n];
        if ((0, s._b)(u, e)) return o(e, l);
    }, [u, c, n, l]);
}
function u(e, t) {
    let n = (0, r.e7)([a.Z], () => a.Z.getGuild(e));
    if (null != n && (0, s._b)(n, t)) return o(t);
}
