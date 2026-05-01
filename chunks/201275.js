n.d(t, { $7: () => u, ox: () => o, qE: () => d });
var i = n(64700),
    l = n(17928),
    r = n(317525),
    s = n(71393),
    a = n(376304);
function o(e, t) {
    if (null == e) return;
    let { customIconSrc: n, unicodeEmoji: i } = (0, a.sE)(e, t) ?? {};
    if (null != n || null != i) return { src: n, name: e.name, roleId: e.id, size: t, unicodeEmoji: i };
}
function u(e) {
    let { guildId: t, roleId: n, size: u = 20, role: d, guild: c } = e,
        { guild: h, role: p } = (0, l.cf)(
            [s.A, r.A],
            () => ({
                guild: null == c ? s.A.getGuild(t) : void 0,
                role: null == d && null != n ? r.A.getRole(t, n) : void 0,
            }),
            [t, n, d, c],
        ),
        m = c ?? h,
        f = d ?? p;
    return i.useMemo(() => {
        if (null != m && null != f && (0, a.fm)(m, f)) return o(f, u);
    }, [m, f, u]);
}
function d(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.getGuild(e));
    if (null != n && (0, a.fm)(n, t)) return o(t);
}
