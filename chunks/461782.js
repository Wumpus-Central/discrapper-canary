"use strict";
n.d(t, { Ay: () => l, k3: () => a, vG: () => o });
var i = n(627968),
    r = n(64700),
    s = n(451988);
let a = r.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    o = r.createContext(!1);
function l(e) {
    let { children: t, timeout: n } = e,
        [l, u] = r.useState(!1),
        c = r.useRef(new Set()),
        d = r.useRef(null);
    r.useEffect(
        () => (
            (d.current = new s.J_(n, () => u(!0))),
            d.current.delay(),
            () => {
                d.current?.cancel(), (d.current = null);
            }
        ),
        [n],
    );
    let _ = r.useCallback(
            (e) => {
                u(!1), c.current.add(e), d.current?.cancel();
            },
            [c, d, u],
        ),
        f = r.useCallback(
            (e) => {
                c.current.delete(e), 0 === c.current.size && d.current?.delay();
            },
            [c, d],
        ),
        h = r.useCallback(() => {
            u(!1), 0 === c.current.size && d.current?.delay();
        }, [c, d, u]),
        p = r.useCallback(() => {
            c.current.size > 0 || (d.current?.cancel(), u(!0));
        }, [d, u]),
        E = r.useMemo(() => ({ onAllowIdle: f, onPreventIdle: _, onActive: h, onForceIdle: p }), [f, _, h, p]);
    return (0, i.jsx)(o.Provider, {
        value: l,
        children: (0, i.jsx)(a.Provider, { value: E, children: t({ idle: l, ...E }) }),
    });
}
