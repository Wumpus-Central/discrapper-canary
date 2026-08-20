n.d(t, { Ay: () => u, k3: () => i, vG: () => a });
var l = n(477900),
    r = n(582128),
    s = n(451988);
let i = r.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    a = r.createContext(!1);
function u(e) {
    let { children: t, timeout: n } = e,
        [u, c] = r.useState(!1),
        o = r.useRef(new Set()),
        d = r.useRef(null);
    r.useEffect(
        () => (
            (d.current = new s.J_(n, () => c(!0))),
            d.current.delay(),
            () => {
                d.current?.cancel(), (d.current = null);
            }
        ),
        [n],
    );
    let f = r.useCallback(
            (e) => {
                c(!1), o.current.add(e), d.current?.cancel();
            },
            [o, d, c],
        ),
        h = r.useCallback(
            (e) => {
                o.current.delete(e), 0 === o.current.size && d.current?.delay();
            },
            [o, d],
        ),
        m = r.useCallback(() => {
            c(!1), 0 === o.current.size && d.current?.delay();
        }, [o, d, c]),
        p = r.useCallback(() => {
            o.current.size > 0 || (d.current?.cancel(), c(!0));
        }, [d, c]),
        g = r.useMemo(() => ({ onAllowIdle: h, onPreventIdle: f, onActive: m, onForceIdle: p }), [h, f, m, p]);
    return (0, l.jsx)(a.Provider, {
        value: u,
        children: (0, l.jsx)(i.Provider, { value: g, children: t({ idle: u, ...g }) }),
    });
}
