n.d(t, {
    d: () => d,
    q: () => _
}),
    n(301563);
var r = n(192379),
    i = n(950104),
    o = n(990169),
    a = n(220082),
    s = n(768581),
    l = n(921948),
    c = n(981631);
let u = 512;
function d(e, t) {
    var n;
    let r = null == t ? void 0 : t.customBanner;
    if (null != t && null != r && (null == (n = t.features) ? void 0 : n.includes(c.oNc.DISCOVERABLE))) {
        if (s.ff.test(r)) return 'url('.concat(r, ') center / cover');
        let e = s.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: r,
            size: u * (0, l.Z)()
        });
        if (null != e) return 'url('.concat(e, ') center / cover');
    }
    let o = (0, i.DT)(e, 1.75);
    return 'radial-gradient(105.43% 127.05% at 50.1% 127.05%, '.concat(o, ' 20.65%, ').concat(e, ' 85.16%)');
}
function f(e) {
    return null == e.icon
        ? null
        : s.ff.test(e.icon)
          ? e.icon
          : s.ZP.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 64
            });
}
function _(e, t) {
    let n = f(e),
        i = r.useRef(t),
        s = (0, o.Z)(i),
        l = (0, a.ZP)(n, s);
    return (r.useEffect(() => {
        i.current = l;
    }, [l]),
    null == e.icon)
        ? t
        : l;
}
