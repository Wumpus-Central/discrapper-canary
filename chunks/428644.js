"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(38405);
let s = (e, t, n, s, a) => {
    let o = (0, i.useRef)(!1),
        l = { componentName: e, sentryErrorOptions: a, stateToCapture: s },
        d = (0, i.useRef)(l);
    (0, i.useEffect)(() => {
        d.current = l;
    }),
        (0, i.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: s } = d.current;
            if (t && !o.current) {
                o.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    r.A.setExtra({ loadingState: s, loadingTimeSeconds: n }),
                        r.A.captureException(t, { ...i, tags: { ...i?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
