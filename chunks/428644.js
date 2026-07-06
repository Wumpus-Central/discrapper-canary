n.d(t, { A: () => r });
var l = n(64700),
    i = n(38405);
let r = function (e, t, n, r, a) {
    let s = (0, l.useRef)(!1),
        o = { componentName: e, sentryErrorOptions: a, stateToCapture: r },
        u = (0, l.useRef)(o);
    (0, l.useEffect)(() => {
        u.current = o;
    }),
        (0, l.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: l, stateToCapture: r } = u.current;
            if (t && !s.current) {
                s.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    i.A.setExtra({ loadingState: r, loadingTimeSeconds: n }),
                        i.A.captureException(t, { ...l, tags: { ...l?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
