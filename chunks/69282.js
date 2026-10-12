n.d(l, { Ib: () => c, Xx: () => u, ox: () => o });
var t = n(582128),
    s = n(17928),
    i = n(376304),
    a = n(317525),
    r = n(71393);
function u(e) {
    let { guildId: l, roleId: n, size: i = 20, role: u, guild: c } = e,
        m = (0, s.bG)([r.A, a.A], () => d({ guildId: l, roleId: n, role: u, guild: c }, r.A, a.A), [l, n, u, c]);
    return t.useMemo(() => o(m, i), [m, i]);
}
function o(e, l) {
    if (null == e) return;
    let n = (0, i.sE)(e, l);
    if (null != n) return { src: n.customIconSrc, name: e.name, roleId: e.id, size: l, unicodeEmoji: n.unicodeEmoji };
}
function c(e, l) {
    let n = (0, s.bG)([r.A, a.A], () => d({ guildId: e, role: l }, r.A, a.A), [e, l]);
    return t.useMemo(() => o(n), [n]);
}
function d(e) {
    let { guildId: l, roleId: n, role: t, guild: s } = e,
        u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        c = s ?? u.getGuild(l),
        d = t ?? (null != l && null != n ? o.getRole(l, n) : void 0);
    if (null != c && null != d && (0, i.fm)(c, d)) return d;
}
