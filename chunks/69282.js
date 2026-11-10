var t = n(582128),
    a = n(855986),
    s = n(376304),
    i = n(317525),
    r = n(71393);
function u(e, l) {
    if (null == e) return;
    let n = (0, s.sE)(e, l);
    if (null != n) return { src: n.customIconSrc, name: e.name, roleId: e.id, size: l, unicodeEmoji: n.unicodeEmoji };
}
function o(e) {
    let { guildId: l, roleId: n, role: t, guild: a } = e,
        u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        d = a ?? u.getGuild(l),
        c = t ?? (null != l && null != n ? o.getRole(l, n) : void 0);
    if (null != d && null != c && (0, s.fm)(d, c)) return c;
}
n.d(
    l,
    {},
    {
        Ib: function (e, l) {
            let n = (0, a.bG)([r.A, i.A], () => o({ guildId: e, role: l }, r.A, i.A), [e, l]);
            return t.useMemo(() => u(n), [n]);
        },
        Xx: function (e) {
            let { guildId: l, roleId: n, size: s = 20, role: d, guild: c } = e,
                m = (0, a.bG)([r.A, i.A], () => o({ guildId: l, roleId: n, role: d, guild: c }, r.A, i.A), [
                    l,
                    n,
                    d,
                    c,
                ]);
            return t.useMemo(() => u(m, s), [m, s]);
        },
        ox: u,
    },
);
