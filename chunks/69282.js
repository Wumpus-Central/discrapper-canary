var t = n(582128),
    s = n(855986),
    a = n(376304),
    i = n(317525),
    r = n(71393);
function u(e, l) {
    if (null == e) return;
    let n = (0, a.sE)(e, l);
    if (null != n) return { src: n.customIconSrc, name: e.name, roleId: e.id, size: l, unicodeEmoji: n.unicodeEmoji };
}
function o(e) {
    let { guildId: l, roleId: n, role: t, guild: s } = e,
        u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        c = s ?? u.getGuild(l),
        d = t ?? (null != l && null != n ? o.getRole(l, n) : void 0);
    if (null != c && null != d && (0, a.fm)(c, d)) return d;
}
n.d(
    l,
    {},
    {
        Ib: function (e, l) {
            let n = (0, s.bG)([r.A, i.A], () => o({ guildId: e, role: l }, r.A, i.A), [e, l]);
            return t.useMemo(() => u(n), [n]);
        },
        Xx: function (e) {
            let { guildId: l, roleId: n, size: a = 20, role: c, guild: d } = e,
                m = (0, s.bG)([r.A, i.A], () => o({ guildId: l, roleId: n, role: c, guild: d }, r.A, i.A), [
                    l,
                    n,
                    c,
                    d,
                ]);
            return t.useMemo(() => u(m, a), [m, a]);
        },
        ox: u,
    },
);
