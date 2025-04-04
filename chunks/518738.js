n.d(t, {
    Kz: () => s,
    oC: () => c,
    p9: () => l
});
var r = n(192379),
    i = n(442837),
    o = n(430824),
    a = n(829883);
function s(e, t) {
    var n;
    let { customIconSrc: r, unicodeEmoji: i } = null != (n = (0, a.zy)(e, t)) ? n : {};
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
            [o.Z],
            () => ({
                guild: o.Z.getGuild(t),
                roles: o.Z.getRoles(t)
            }),
            [t]
        );
    return r.useMemo(() => {
        if (null == c || null == n) return;
        let e = u[n];
        if ((0, a._b)(c, e)) return s(e, l);
    }, [c, u, n, l]);
}
function c(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getGuild(e));
    if (null != n && (0, a._b)(n, t)) return s(t);
}
