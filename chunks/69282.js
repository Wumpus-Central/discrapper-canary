n.d(l, { Ib: () => d, Xx: () => u, ox: () => o });
var t = n(582128),
    s = n(17928),
    a = n(376304),
    i = n(317525),
    r = n(71393);
function u(e) {
    let { guildId: l, roleId: n, size: a = 20, role: u, guild: d } = e,
        m = (0, s.bG)([r.A, i.A], () => c({ guildId: l, roleId: n, role: u, guild: d }, r.A, i.A), [l, n, u, d]);
    return t.useMemo(() => o(m, a), [m, a]);
}
function o(e, l) {
    if (null == e) return;
    let n = (0, a.sE)(e, l);
    if (null != n) return { src: n.customIconSrc, name: e.name, roleId: e.id, size: l, unicodeEmoji: n.unicodeEmoji };
}
function d(e, l) {
    let n = (0, s.bG)([r.A, i.A], () => c({ guildId: e, role: l }, r.A, i.A), [e, l]);
    return t.useMemo(() => o(n), [n]);
}
function c(e) {
    let { guildId: l, roleId: n, role: t, guild: s } = e,
        u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        d = s ?? u.getGuild(l),
        c = t ?? (null != l && null != n ? o.getRole(l, n) : void 0);
    if (null != d && null != c && (0, a.fm)(d, c)) return c;
}
