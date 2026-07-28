t.d(l, { _3: () => A, aG: () => C, b2: () => I, n6: () => m });
var i = t(582128),
    n = t(602853),
    s = t(661531),
    a = t(498596),
    r = t(724442),
    u = t(654107),
    c = t(486020),
    o = t(835517),
    d = t(652215);
function I() {
    return (0, n.r)(s.A.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT);
}
function A(e) {
    let l = e.customBanner;
    if (null != l && e.features?.includes(d.GuildFeatures.DISCOVERABLE)) {
        if (c.aq.test(l)) return `url(${l}) center / cover`;
        let t = c.Ay.getGuildDiscoverySplashURL({ id: e.id, splash: l, size: 512 * (0, o.A)() });
        if (null != t) return `url(${t}) center / cover`;
    }
    return null;
}
function m(e) {
    let l = (0, a.Pf)(e, 1.75);
    return `radial-gradient(105.43% 127.05% at 50.1% 127.05%, ${l} 20.65%, ${e} 85.16%)`;
}
function C(e) {
    var l;
    let { profile: t, defaultColor: n, forceDefaultColor: s } = e,
        a =
            s || null == (l = t).icon
                ? null
                : c.aq.test(l.icon)
                  ? l.icon
                  : c.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 64 }),
        o = i.useRef(n),
        d = (0, r.A)(o),
        I = (0, u.Ay)(a, d);
    return (i.useEffect(() => {
        o.current = I;
    }, [I]),
    null == t.icon)
        ? n
        : I;
}
