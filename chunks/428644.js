n.d(t, { A: () => a });
var l = n(64700),
    i = n(728458);
let a = (e, t, n, a, r) => {
    let s = (0, l.useRef)(!1),
        o = { componentName: e, sentryErrorOptions: r, stateToCapture: a },
        u = (0, l.useRef)(o);
    (0, l.useEffect)(() => {
        u.current = o;
    }),
        (0, l.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: l, stateToCapture: a } = u.current;
            if (t && !s.current) {
                s.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    i.A.setExtra({ loadingState: a, loadingTimeSeconds: n }),
                        i.A.captureException(t, { ...l, tags: { ...l?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
