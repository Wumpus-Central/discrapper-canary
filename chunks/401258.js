n.d(t, { Z: () => a });
var r = n(192379),
    s = n(668826),
    o = n(115092);
function a(e) {
    let { isPaused: t, pointsPerInterval: n, interval: a, itemId: i, onPointsInterval: c } = e,
        l = (0, r.useRef)(Date.now()),
        u = (0, r.useCallback)(() => {
            let e = ((Date.now() - l.current) * n) / a;
            (0, s.KH)(i, e), null == c || c(), (l.current = Date.now());
        }, [n, a, i, c]),
        d = (0, r.useCallback)(() => {
            l.current = Date.now();
        }, []),
        f = (0, r.useCallback)(u, [u]);
    return (
        (0, o.Z)({
            isPaused: t,
            onInterval: u,
            interval: a,
            onIntervalSet: d,
            onIntervalCleared: f
        }),
        null
    );
}
