n.d(t, { Ib: () => c, Xx: () => o, ox: () => u });
var l = n(582128),
    i = n(17928),
    s = n(376304),
    r = n(317525),
    a = n(71393);
function o(e) {
    let { guildId: t, roleId: n, size: s = 20, role: o, guild: c } = e,
        m = (0, i.bG)([a.A, r.A], () => d({ guildId: t, roleId: n, role: o, guild: c }, a.A, r.A), [t, n, o, c]);
    return l.useMemo(() => u(m, s), [m, s]);
}
function u(e, t) {
    if (null == e) return;
    let n = (0, s.sE)(e, t);
    if (null != n) return { src: n.customIconSrc, name: e.name, roleId: e.id, size: t, unicodeEmoji: n.unicodeEmoji };
}
function c(e, t) {
    let n = (0, i.bG)([a.A, r.A], () => d({ guildId: e, role: t }, a.A, r.A), [e, t]);
    return l.useMemo(() => u(n), [n]);
}
function d(e) {
    let { guildId: t, roleId: n, role: l, guild: i } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        c = i ?? o.getGuild(t),
        d = l ?? (null != t && null != n ? u.getRole(t, n) : void 0);
    if (null != c && null != d && (0, s.fm)(c, d)) return d;
}
