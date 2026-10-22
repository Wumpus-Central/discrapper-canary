t.d(n, { DU: () => K, LK: () => b, mK: () => g });
var r = t(582128),
    u = t(17928),
    A = t(964167),
    i = t(587895),
    a = t(197184),
    l = t(91242),
    c = t(326843),
    s = t(409397),
    d = t(869146),
    p = t(976860),
    f = t(964404),
    o = t(309010),
    y = t(260498),
    h = t(566870);
let m = 588245 != t.j ? [l.A, f.Ay, o.Ay, i.A, y.Ay, d.A] : null;
function g(e, n) {
    return (
        !!(0, h.A)(e) &&
        !!(0, c.A)(e, f.Ay) &&
        l.A.getMainFrame()?.id !== e.id &&
        null == (0, s.A)(e) &&
        (n || o.Ay.getChannelId() !== (0, a.A)(e.surface))
    );
}
function k(e) {
    return (0, p.JK)().listen(e);
}
function C() {
    return r.useSyncExternalStore(k, A.rm);
}
function K() {
    let e = C();
    return (0, u.yK)(
        m,
        () =>
            l.A.getAllFrames()
                .filter((n) => g(n, e))
                .map((e) => e.id),
        [e],
    );
}
function b(e) {
    let n = C();
    return (0, u.bG)(m, () => {
        let t = l.A.getFrame(e);
        return null != t && g(t, n);
    }, [e, n]);
}
