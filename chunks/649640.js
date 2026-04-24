t.d(l, { _3: () => x, aG: () => v, b2: () => u, n6: () => h });
var s = t(64700),
    i = t(458217),
    a = t(602853),
    n = t(661531),
    r = t(724442),
    c = t(654107),
    o = t(486020),
    d = t(835517),
    m = t(652215);
function u() {
    return (0, a.r)(n.A.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT);
}
function x(e) {
    let l = e.customBanner;
    if (null != l && e.features?.includes(m.GuildFeatures.DISCOVERABLE)) {
        if (o.aq.test(l)) return `url(${l}) center / cover`;
        let t = o.Ay.getGuildDiscoverySplashURL({ id: e.id, splash: l, size: 512 * (0, d.A)() });
        if (null != t) return `url(${t}) center / cover`;
    }
    return null;
}
function h(e) {
    let l = (0, i.Pf)(e, 1.75);
    return `radial-gradient(105.43% 127.05% at 50.1% 127.05%, ${l} 20.65%, ${e} 85.16%)`;
}
function v(e) {
    var l;
    let { profile: t, defaultColor: i, forceDefaultColor: a } = e,
        n =
            a || null == (l = t).icon
                ? null
                : o.aq.test(l.icon)
                  ? l.icon
                  : o.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 64 }),
        d = s.useRef(i),
        m = (0, r.A)(d),
        u = (0, c.Ay)(n, m);
    return (s.useEffect(() => {
        d.current = u;
    }, [u]),
    null == t.icon)
        ? i
        : u;
}
