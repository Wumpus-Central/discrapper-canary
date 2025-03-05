n.d(t, {
    d: () => u,
    q: () => d
}),
    n(301563);
var r = n(192379),
    l = n(950104),
    i = n(990169),
    a = n(220082),
    o = n(768581),
    c = n(921948),
    s = n(981631);
function u(e, t) {
    var n;
    let r = null == t ? void 0 : t.customBanner;
    if (null != t && null != r && (null === (n = t.features) || void 0 === n ? void 0 : n.includes(s.oNc.DISCOVERABLE))) {
        if (o.ff.test(r)) return 'url('.concat(r, ') center / cover');
        let e = o.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: r,
            size: 512 * (0, c.Z)()
        });
        if (null != e) return 'url('.concat(e, ') center / cover');
    }
    let i = (0, l.DT)(e, 1.75);
    return 'radial-gradient(105.43% 127.05% at 50.1% 127.05%, '.concat(i, ' 20.65%, ').concat(e, ' 85.16%)');
}
function d(e, t) {
    let n =
            null == e.icon
                ? null
                : o.ff.test(e.icon)
                  ? e.icon
                  : o.ZP.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        size: 64
                    }),
        l = r.useRef(t),
        c = (0, i.Z)(l),
        s = (0, a.ZP)(n, c);
    return (r.useEffect(() => {
        l.current = s;
    }, [s]),
    null == e.icon)
        ? t
        : s;
}
