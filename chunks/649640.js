n.d(l, { _3: () => f, aG: () => j, b2: () => m, n6: () => p });
var t = n(64700),
    i = n(602853),
    r = n(661531),
    s = n(498596),
    a = n(724442),
    u = n(654107),
    c = n(486020),
    o = n(835517),
    d = n(652215);
function m() {
    return (0, i.r)(r.A.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT);
}
function f(e) {
    let l = e.customBanner;
    if (null != l && e.features?.includes(d.GuildFeatures.DISCOVERABLE)) {
        if (c.aq.test(l)) return `url(${l}) center / cover`;
        let n = c.Ay.getGuildDiscoverySplashURL({ id: e.id, splash: l, size: 512 * (0, o.A)() });
        if (null != n) return `url(${n}) center / cover`;
    }
    return null;
}
function p(e) {
    let l = (0, s.Pf)(e, 1.75);
    return `radial-gradient(105.43% 127.05% at 50.1% 127.05%, ${l} 20.65%, ${e} 85.16%)`;
}
function j(e) {
    var l;
    let { profile: n, defaultColor: i, forceDefaultColor: r } = e,
        s =
            r || null == (l = n).icon
                ? null
                : c.aq.test(l.icon)
                  ? l.icon
                  : c.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 64 }),
        o = t.useRef(i),
        d = (0, a.A)(o),
        m = (0, u.Ay)(s, d);
    return (t.useEffect(() => {
        o.current = m;
    }, [m]),
    null == n.icon)
        ? i
        : m;
}
