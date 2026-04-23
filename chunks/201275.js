n.d(t, { $7: () => o, ox: () => l, qE: () => E });
var i = n(64700),
    r = n(17928),
    a = n(317525),
    s = n(71393),
    _ = n(376304);
function l(e, t) {
    if (null == e) return;
    let { customIconSrc: n, unicodeEmoji: i } = (0, _.sE)(e, t) ?? {};
    if (null != n || null != i) return { src: n, name: e.name, roleId: e.id, size: t, unicodeEmoji: i };
}
function o(e) {
    let { guildId: t, roleId: n, size: o = 20, role: E, guild: d } = e,
        { guild: c, role: u } = (0, r.cf)(
            [s.A, a.A],
            () => ({
                guild: null == d ? s.A.getGuild(t) : void 0,
                role: null == E && null != n ? a.A.getRole(t, n) : void 0,
            }),
            [t, n, E, d],
        ),
        I = d ?? c,
        A = E ?? u;
    return i.useMemo(() => {
        if (null != I && null != A && (0, _.fm)(I, A)) return l(A, o);
    }, [I, A, o]);
}
function E(e, t) {
    let n = (0, r.bG)([s.A], () => s.A.getGuild(e));
    if (null != n && (0, _.fm)(n, t)) return l(t);
}
