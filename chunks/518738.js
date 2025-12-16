n.d(t, {
    Kz: () => l,
    oC: () => u,
    p9: () => c,
});
var r = n(473749),
    i = n(442837),
    a = n(485386),
    o = n(430824),
    s = n(829883);
function l(e, t) {
    var n;
    if (null == e) return;
    let { customIconSrc: r, unicodeEmoji: i } = null != (n = (0, s.zy)(e, t)) ? n : {};
    if (null != r || null != i)
        return {
            src: r,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: i,
        };
}
function c(e) {
    let { guildId: t, roleId: n, size: c = 20, role: u, guild: d } = e,
        { guild: f, role: p } = (0, i.cj)(
            [o.Z, a.Z],
            () => ({
                guild: null == d ? o.Z.getGuild(t) : void 0,
                role: null == u && null != n ? a.Z.getRole(t, n) : void 0,
            }),
            [t, n, u, d],
        ),
        _ = null != d ? d : f,
        m = null != u ? u : p;
    return r.useMemo(() => {
        if (null != _ && null != m && (0, s._b)(_, m)) return l(m, c);
    }, [_, m, c]);
}
function u(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getGuild(e));
    if (null != n && (0, s._b)(n, t)) return l(t);
}
