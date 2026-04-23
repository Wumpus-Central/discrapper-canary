"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(728458);
let s = (e, t, n, s, a) => {
    let o = (0, r.useRef)(!1),
        l = { componentName: e, sentryErrorOptions: a, stateToCapture: s },
        u = (0, r.useRef)(l);
    (0, r.useEffect)(() => {
        u.current = l;
    }),
        (0, r.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: r, stateToCapture: s } = u.current;
            if (t && !o.current) {
                o.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    i.A.setExtra({ loadingState: s, loadingTimeSeconds: n }),
                        i.A.captureException(t, { ...r, tags: { ...r?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
