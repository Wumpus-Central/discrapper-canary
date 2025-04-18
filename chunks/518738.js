n.d(t, {
    Kz: () => s,
    oC: () => c,
    p9: () => l
});
var r = n(192379),
    i = n(442837),
    a = n(430824),
    o = n(829883);
function s(e, t) {
    var n;
    let { customIconSrc: r, unicodeEmoji: i } = null != (n = (0, o.zy)(e, t)) ? n : {};
    if (null != r || null != i)
        return {
            src: r,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: i
        };
}
function l(e) {
    let { guildId: t, roleId: n, size: l = 20 } = e,
        { guild: c, roles: u } = (0, i.cj)(
            [a.Z],
            () => ({
                guild: a.Z.getGuild(t),
                roles: a.Z.getRoles(t)
            }),
            [t]
        );
    return r.useMemo(() => {
        if (null == c || null == n) return;
        let e = u[n];
        if ((0, o._b)(c, e)) return s(e, l);
    }, [c, u, n, l]);
}
function c(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.getGuild(e));
    if (null != n && (0, o._b)(n, t)) return s(t);
}
