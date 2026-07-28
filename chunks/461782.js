"use strict";
n.d(t, { Ay: () => o, k3: () => s, vG: () => l });
var i = n(477900),
    r = n(582128),
    a = n(451988);
let s = r.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    l = r.createContext(!1);
function o(e) {
    let { children: t, timeout: n } = e,
        [o, d] = r.useState(!1),
        c = r.useRef(new Set()),
        u = r.useRef(null);
    r.useEffect(
        () => (
            (u.current = new a.J_(n, () => d(!0))),
            u.current.delay(),
            () => {
                u.current?.cancel(), (u.current = null);
            }
        ),
        [n],
    );
    let _ = r.useCallback(
            (e) => {
                d(!1), c.current.add(e), u.current?.cancel();
            },
            [c, u, d],
        ),
        E = r.useCallback(
            (e) => {
                c.current.delete(e), 0 === c.current.size && u.current?.delay();
            },
            [c, u],
        ),
        A = r.useCallback(() => {
            d(!1), 0 === c.current.size && u.current?.delay();
        }, [c, u, d]),
        h = r.useCallback(() => {
            c.current.size > 0 || (u.current?.cancel(), d(!0));
        }, [u, d]),
        I = r.useMemo(() => ({ onAllowIdle: E, onPreventIdle: _, onActive: A, onForceIdle: h }), [E, _, A, h]);
    return (0, i.jsx)(l.Provider, {
        value: o,
        children: (0, i.jsx)(s.Provider, { value: I, children: t({ idle: o, ...I }) }),
    });
}
