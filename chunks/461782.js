n.d(t, { Ay: () => o, k3: () => a, vG: () => s });
var l = n(477900),
    r = n(582128),
    i = n(451988);
let a = r.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    s = r.createContext(!1);
function o(e) {
    let { children: t, timeout: n } = e,
        [o, u] = r.useState(!1),
        c = r.useRef(new Set()),
        d = r.useRef(null);
    r.useEffect(
        () => (
            (d.current = new i.J_(n, () => u(!0))),
            d.current.delay(),
            () => {
                d.current?.cancel(), (d.current = null);
            }
        ),
        [n],
    );
    let f = r.useCallback(
            (e) => {
                u(!1), c.current.add(e), d.current?.cancel();
            },
            [c, d, u],
        ),
        h = r.useCallback(
            (e) => {
                c.current.delete(e), 0 === c.current.size && d.current?.delay();
            },
            [c, d],
        ),
        m = r.useCallback(() => {
            u(!1), 0 === c.current.size && d.current?.delay();
        }, [c, d, u]),
        p = r.useCallback(() => {
            c.current.size > 0 || (d.current?.cancel(), u(!0));
        }, [d, u]),
        g = r.useMemo(() => ({ onAllowIdle: h, onPreventIdle: f, onActive: m, onForceIdle: p }), [h, f, m, p]);
    return (0, l.jsx)(s.Provider, {
        value: o,
        children: (0, l.jsx)(a.Provider, { value: g, children: t({ idle: o, ...g }) }),
    });
}
