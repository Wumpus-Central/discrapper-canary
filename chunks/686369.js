n.d(t, {
    dG: () => p,
    nv: () => _,
    qw: () => m
}),
    n(35282);
var r = n(73800),
    i = n(950104),
    o = n(481060),
    a = n(990169),
    s = n(410030),
    l = n(220082),
    c = n(768581),
    u = n(921948),
    d = n(981631);
let f = 512;
function _() {
    let e = (0, s.ZP)(),
        t = (0, o.dQu)(o.TVs.colors.BG_BASE_TERTIARY),
        n = (0, o.dQu)(o.TVs.colors.BACKGROUND_ACCENT);
    return (0, o.wjy)(e) ? t : n;
}
function p(e, t) {
    var n;
    let r = null == t ? void 0 : t.customBanner;
    if (null != t && null != r && (null == (n = t.features) ? void 0 : n.includes(d.oNc.DISCOVERABLE))) {
        if (c.ff.test(r)) return 'url('.concat(r, ') center / cover');
        let e = c.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: r,
            size: f * (0, u.Z)()
        });
        if (null != e) return 'url('.concat(e, ') center / cover');
    }
    let o = (0, i.DT)(e, 1.75);
    return 'radial-gradient(105.43% 127.05% at 50.1% 127.05%, '.concat(o, ' 20.65%, ').concat(e, ' 85.16%)');
}
function h(e) {
    return null == e.icon
        ? null
        : c.ff.test(e.icon)
          ? e.icon
          : c.ZP.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 64
            });
}
function m(e, t) {
    let n = h(e),
        i = r.useRef(t),
        o = (0, a.Z)(i),
        s = (0, l.ZP)(n, o);
    return (r.useEffect(() => {
        i.current = s;
    }, [s]),
    null == e.icon)
        ? t
        : s;
}
