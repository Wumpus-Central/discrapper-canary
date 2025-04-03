n.d(t, { Z: () => s });
var r = n(192379);
function s(e) {
    let { isPaused: t, onInterval: n, interval: s, onIntervalSet: o, onIntervalCleared: a } = e;
    (0, r.useEffect)(() => {
        if (!t) {
            null == o || o();
            let e = setInterval(n, s);
            return () => {
                null == a || a(), clearInterval(e);
            };
        }
    }, [s, t, n, a, o]);
}
