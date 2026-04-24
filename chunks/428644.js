n.d(t, { A: () => i });
var l = n(64700),
    a = n(38405);
let i = (e, t, n, i, r) => {
    let s = (0, l.useRef)(!1),
        o = { componentName: e, sentryErrorOptions: r, stateToCapture: i },
        u = (0, l.useRef)(o);
    (0, l.useEffect)(() => {
        u.current = o;
    }),
        (0, l.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: l, stateToCapture: i } = u.current;
            if (t && !s.current) {
                s.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    a.A.setExtra({ loadingState: i, loadingTimeSeconds: n }),
                        a.A.captureException(t, { ...l, tags: { ...l?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
