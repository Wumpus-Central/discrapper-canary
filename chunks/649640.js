l.d(t, { _3: () => h, aG: () => x, b2: () => m, n6: () => A });
var i = l(64700),
    n = l(458217),
    s = l(602853),
    a = l(827734),
    r = l(724442),
    c = l(654107),
    o = l(486020),
    u = l(835517),
    d = l(652215);
function m() {
    return (0, s.r)(a.A.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT);
}
function h(e) {
    let t = e.customBanner;
    if (null != t && e.features?.includes(d.GuildFeatures.DISCOVERABLE)) {
        if (o.aq.test(t)) return `url(${t}) center / cover`;
        let l = o.Ay.getGuildDiscoverySplashURL({ id: e.id, splash: t, size: 512 * (0, u.A)() });
        if (null != l) return `url(${l}) center / cover`;
    }
    return null;
}
function A(e) {
    let t = (0, n.Pf)(e, 1.75);
    return `radial-gradient(105.43% 127.05% at 50.1% 127.05%, ${t} 20.65%, ${e} 85.16%)`;
}
function x(e) {
    var t;
    let { profile: l, defaultColor: n, forceDefaultColor: s } = e,
        a =
            s || null == (t = l).icon
                ? null
                : o.aq.test(t.icon)
                  ? t.icon
                  : o.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 64 }),
        u = i.useRef(n),
        d = (0, r.A)(u),
        m = (0, c.Ay)(a, d);
    return (i.useEffect(() => {
        u.current = m;
    }, [m]),
    null == l.icon)
        ? n
        : m;
}
