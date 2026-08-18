"use strict";
n.d(t, { Ay: () => o, k3: () => r, vG: () => a });
var l = n(477900),
    i = n(582128),
    s = n(451988);
let r = i.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    a = i.createContext(!1);
function o(e) {
    let { children: t, timeout: n } = e,
        [o, u] = i.useState(!1),
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
    let h = i.useCallback(
            (e) => {
                u(!1), c.current.add(e), d.current?.cancel();
            },
            [c, d, u],
        ),
        m = i.useCallback(
            (e) => {
                c.current.delete(e), 0 === c.current.size && d.current?.delay();
            },
            [c, d],
        ),
        f = i.useCallback(() => {
            u(!1), 0 === c.current.size && d.current?.delay();
        }, [c, d, u]),
        p = i.useCallback(() => {
            c.current.size > 0 || (d.current?.cancel(), u(!0));
        }, [d, u]),
        g = i.useMemo(() => ({ onAllowIdle: m, onPreventIdle: h, onActive: f, onForceIdle: p }), [m, h, f, p]);
    return (0, l.jsx)(a.Provider, {
        value: o,
        children: (0, l.jsx)(r.Provider, { value: g, children: t({ idle: o, ...g }) }),
    });
}
