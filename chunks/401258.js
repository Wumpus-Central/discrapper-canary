n.d(t, { Z: () => i });
var r = n(192379),
    s = n(668826),
    o = n(115092);
function i(e) {
    let { isPaused: t, pointsPerInterval: n, interval: i, itemId: a, onPointsInterval: c } = e,
        l = (0, r.useRef)(Date.now()),
        u = (0, r.useCallback)(() => {
            let e = ((Date.now() - l.current) * n) / i;
            (0, s.KH)(a, e), null == c || c(), (l.current = Date.now());
        }, [n, i, a, c]),
        d = (0, r.useCallback)(() => {
            l.current = Date.now();
        }, []),
        f = (0, r.useCallback)(u, [u]);
    return (
        (0, o.Z)({
            isPaused: t,
            onInterval: u,
            interval: i,
            onIntervalSet: d,
            onIntervalCleared: f
        }),
        null
    );
}
