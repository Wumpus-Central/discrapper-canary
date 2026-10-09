n.d(t, { Ib: () => c, Xx: () => o, ox: () => u });
var l = n(582128),
    s = n(17928),
    i = n(376304),
    a = n(317525),
    r = n(71393);
function o(e) {
    let { guildId: t, roleId: n, size: i = 20, role: o, guild: c } = e,
        m = (0, s.bG)([r.A, a.A], () => d({ guildId: t, roleId: n, role: o, guild: c }, r.A, a.A), [t, n, o, c]);
    return l.useMemo(() => u(m, i), [m, i]);
}
function u(e, t) {
    if (null == e) return;
    let n = (0, i.sE)(e, t);
    if (null != n) return { src: n.customIconSrc, name: e.name, roleId: e.id, size: t, unicodeEmoji: n.unicodeEmoji };
}
function c(e, t) {
    let n = (0, s.bG)([r.A, a.A], () => d({ guildId: e, role: t }, r.A, a.A), [e, t]);
    return l.useMemo(() => u(n), [n]);
}
function d(e) {
    let { guildId: t, roleId: n, role: l, guild: s } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        c = s ?? o.getGuild(t),
        d = l ?? (null != t && null != n ? u.getRole(t, n) : void 0);
    if (null != c && null != d && (0, i.fm)(c, d)) return d;
}
