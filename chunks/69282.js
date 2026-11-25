var l = n(582128),
    i = n(855986),
    a = n(376304),
    r = n(317525),
    s = n(71393);
function o(e, t) {
    if (null == e) return;
    let n = (0, a.sE)(e, t);
    if (null != n) return { src: n.customIconSrc, name: e.name, roleId: e.id, size: t, unicodeEmoji: n.unicodeEmoji };
}
function u(e) {
    let { guildId: t, roleId: n, role: l, guild: i } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        c = i ?? o.getGuild(t),
        d = l ?? (null != t && null != n ? u.getRole(t, n) : void 0);
    if (null != c && null != d && (0, a.fm)(c, d)) return d;
}
n.d(
    t,
    {},
    {
        Ib: function (e, t) {
            let n = (0, i.bG)([s.A, r.A], () => u({ guildId: e, role: t }, s.A, r.A), [e, t]);
            return l.useMemo(() => o(n), [n]);
        },
        Xx: function (e) {
            let { guildId: t, roleId: n, size: a = 20, role: c, guild: d } = e,
                m = (0, i.bG)([s.A, r.A], () => u({ guildId: t, roleId: n, role: c, guild: d }, s.A, r.A), [
                    t,
                    n,
                    c,
                    d,
                ]);
            return l.useMemo(() => o(m, a), [m, a]);
        },
        ox: o,
    },
);
