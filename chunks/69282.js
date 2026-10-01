n.d(t, { Ib: () => d, Xx: () => o, ox: () => u });
var l = n(582128),
    i = n(17928),
    s = n(376304),
    a = n(317525),
    r = n(71393);
function o(e) {
    let { guildId: t, roleId: n, size: s = 20, role: o, guild: d } = e,
        m = (0, i.bG)([r.A, a.A], () => c({ guildId: t, roleId: n, role: o, guild: d }, r.A, a.A), [t, n, o, d]);
    return l.useMemo(() => u(m, s), [m, s]);
}
function u(e, t) {
    if (null == e) return;
    let n = (0, s.sE)(e, t);
    if (null != n) return { src: n.customIconSrc, name: e.name, roleId: e.id, size: t, unicodeEmoji: n.unicodeEmoji };
}
function d(e, t) {
    let n = (0, i.bG)([r.A, a.A], () => c({ guildId: e, role: t }, r.A, a.A), [e, t]);
    return l.useMemo(() => u(n), [n]);
}
function c(e) {
    let { guildId: t, roleId: n, role: l, guild: i } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        d = i ?? o.getGuild(t),
        c = l ?? (null != t && null != n ? u.getRole(t, n) : void 0);
    if (null != d && null != c && (0, s.fm)(d, c)) return c;
}
