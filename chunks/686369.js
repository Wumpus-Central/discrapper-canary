n.d(t, { d: () => s }), n(301563);
var r = n(950104),
    l = n(768581),
    i = n(921948),
    a = n(981631);
function s(e, t) {
    var n;
    let s = null == t ? void 0 : t.customBanner;
    if (null != t && null != s && (null === (n = t.features) || void 0 === n ? void 0 : n.includes(a.oNc.DISCOVERABLE))) {
        if (l.ff.test(s)) return 'url('.concat(s, ') center / cover');
        let e = l.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: s,
            size: 512 * (0, i.Z)()
        });
        if (null != e) return 'url('.concat(e, ') center / cover');
    }
    let o = (0, r.DT)(e, 1.75);
    return 'radial-gradient(105.43% 127.05% at 50.1% 127.05%, '.concat(o, ' 20.65%, ').concat(e, ' 85.16%)');
}
