n.d(t, {
    TK: () => p,
    dG: () => h,
    nv: () => _,
    qw: () => g,
}),
    n(35282);
var r = n(473749),
    i = n(950104),
    a = n(481060),
    o = n(990169),
    s = n(410030),
    l = n(220082),
    c = n(768581),
    u = n(921948),
    d = n(981631);
let f = 512;
function _() {
    let e = (0, s.ZP)(),
        t = (0, a.dQu)(a.TVs.colors.BACKGROUND_BASE_LOWEST),
        n = (0, a.dQu)(a.TVs.colors.BACKGROUND_ACCENT);
    return (0, a.wjy)(e) ? t : n;
}
function p(e) {
    var t;
    let n = e.customBanner;
    if (null != n && (null == (t = e.features) ? void 0 : t.includes(d.GuildFeatures.DISCOVERABLE))) {
        if (c.ff.test(n)) return "url(".concat(n, ") center / cover");
        let t = c.ZP.getGuildDiscoverySplashURL({
            id: e.id,
            splash: n,
            size: f * (0, u.Z)(),
        });
        if (null != t) return "url(".concat(t, ") center / cover");
    }
    return null;
}
function h(e) {
    let t = (0, i.DT)(e, 1.75);
    return "radial-gradient(105.43% 127.05% at 50.1% 127.05%, ".concat(t, " 20.65%, ").concat(e, " 85.16%)");
}
function m(e) {
    return null == e.icon
        ? null
        : c.ff.test(e.icon)
          ? e.icon
          : c.ZP.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 64,
            });
}
function g(e) {
    let { profile: t, defaultColor: n, forceDefaultColor: i } = e,
        a = i ? null : m(t),
        s = r.useRef(n),
        c = (0, o.Z)(s),
        u = (0, l.ZP)(a, c);
    return (r.useEffect(() => {
        s.current = u;
    }, [u]),
    null == t.icon)
        ? n
        : u;
}
