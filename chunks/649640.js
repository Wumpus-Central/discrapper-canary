n.d(t, {
    _3: () => p,
    aG: () => m,
    b2: () => f,
    n6: () => _,
}),
    n(747238);
var r = n(64700),
    i = n(458217),
    a = n(397927),
    s = n(724442),
    o = n(654107),
    l = n(486020),
    c = n(835517),
    u = n(652215);
let d = 512;

function f() {
    return (0, a.rdh)(a.LU0.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT);
}

function p(e) {
    var t;
    let n = e.customBanner;
    if (null != n && (null == (t = e.features) ? void 0 : t.includes(u.GuildFeatures.DISCOVERABLE))) {
        if (l.aq.test(n)) return "url(".concat(n, ") center / cover");
        let t = l.Ay.getGuildDiscoverySplashURL({
            id: e.id,
            splash: n,
            size: d * (0, c.A)(),
        });
        if (null != t) return "url(".concat(t, ") center / cover");
    }
    return null;
}

function _(e) {
    let t = (0, i.Pf)(e, 1.75);
    return "radial-gradient(105.43% 127.05% at 50.1% 127.05%, ".concat(t, " 20.65%, ").concat(e, " 85.16%)");
}

function h(e) {
    return null == e.icon
        ? null
        : l.aq.test(e.icon)
          ? e.icon
          : l.Ay.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 64,
            });
}

function m(e) {
    let { profile: t, defaultColor: n, forceDefaultColor: i } = e,
        a = i ? null : h(t),
        l = r.useRef(n),
        c = (0, s.A)(l),
        u = (0, o.Ay)(a, c);
    return (r.useEffect(() => {
        l.current = u;
    }, [u]),
    null == t.icon)
        ? n
        : u;
}
