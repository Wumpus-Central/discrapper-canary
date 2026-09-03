r.d(n, { _3: () => A, aG: () => h, b2: () => f, n6: () => p });
var t = r(582128),
    u = r(602853),
    i = r(661531),
    c = r(498596),
    l = r(724442),
    s = r(654107),
    o = r(486020),
    a = r(835517),
    d = r(652215);
function f() {
    return (0, u.r)(i.A.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT);
}
function A(e) {
    let n = e.customBanner;
    if (null != n && e.features?.includes(d.GuildFeatures.DISCOVERABLE)) {
        if (o.aq.test(n)) return `url(${n}) center / cover`;
        let r = o.Ay.getGuildDiscoverySplashURL({ id: e.id, splash: n, size: 512 * (0, a.A)() });
        if (null != r) return `url(${r}) center / cover`;
    }
    return null;
}
function p(e) {
    let n = (0, c.Pf)(e, 1.75);
    return `radial-gradient(105.43% 127.05% at 50.1% 127.05%, ${n} 20.65%, ${e} 85.16%)`;
}
function h(e) {
    var n;
    let { profile: r, defaultColor: u, forceDefaultColor: i } = e,
        c =
            i || null == (n = r).icon
                ? null
                : o.aq.test(n.icon)
                  ? n.icon
                  : o.Ay.getGuildIconURL({ id: n.id, icon: n.icon, size: 64 }),
        a = t.useRef(u),
        d = (0, l.A)(a),
        f = (0, s.Ay)(c, d);
    return (t.useEffect(() => {
        a.current = f;
    }, [f]),
    null == r.icon)
        ? u
        : f;
}
