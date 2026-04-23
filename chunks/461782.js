"use strict";
n.d(t, { Ay: () => l, k3: () => a, vG: () => o });
var r = n(627968),
    i = n(64700),
    s = n(451988);
let a = i.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    o = i.createContext(!1);
function l(e) {
    let { children: t, timeout: n } = e,
        [l, u] = i.useState(!1),
        c = i.useRef(new Set()),
        d = i.useRef(null);
    i.useEffect(
        () => (
            (d.current = new s.J_(n, () => u(!0))),
            d.current.delay(),
            () => {
                d.current?.cancel(), (d.current = null);
            }
        ),
        [n],
    );
    let _ = i.useCallback(
            (e) => {
                u(!1), c.current.add(e), d.current?.cancel();
            },
            [c, d, u],
        ),
        f = i.useCallback(
            (e) => {
                c.current.delete(e), 0 === c.current.size && d.current?.delay();
            },
            [c, d],
        ),
        p = i.useCallback(() => {
            u(!1), 0 === c.current.size && d.current?.delay();
        }, [c, d, u]),
        h = i.useCallback(() => {
            c.current.size > 0 || (d.current?.cancel(), u(!0));
        }, [d, u]),
        E = i.useMemo(() => ({ onAllowIdle: f, onPreventIdle: _, onActive: p, onForceIdle: h }), [f, _, p, h]);
    return (0, r.jsx)(o.Provider, {
        value: l,
        children: (0, r.jsx)(a.Provider, { value: E, children: t({ idle: l, ...E }) }),
    });
}
