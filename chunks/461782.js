n.d(t, { Ay: () => u, k3: () => a, vG: () => s });
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
function u(e) {
    let { children: t, timeout: n } = e,
        [u, o] = r.useState(!1),
        c = r.useRef(new Set()),
        d = r.useRef(null);
    r.useEffect(
        () => (
            (d.current = new i.J_(n, () => o(!0))),
            d.current.delay(),
            () => {
                d.current?.cancel(), (d.current = null);
            }
        ),
        [n],
    );
    let f = r.useCallback(
            (e) => {
                o(!1), c.current.add(e), d.current?.cancel();
            },
            [c, d, o],
        ),
        h = r.useCallback(
            (e) => {
                c.current.delete(e), 0 === c.current.size && d.current?.delay();
            },
            [c, d],
        ),
        p = r.useCallback(() => {
            o(!1), 0 === c.current.size && d.current?.delay();
        }, [c, d, o]),
        m = r.useCallback(() => {
            c.current.size > 0 || (d.current?.cancel(), o(!0));
        }, [d, o]),
        g = r.useMemo(() => ({ onAllowIdle: h, onPreventIdle: f, onActive: p, onForceIdle: m }), [h, f, p, m]);
    return (0, l.jsx)(s.Provider, {
        value: u,
        children: (0, l.jsx)(a.Provider, { value: g, children: t({ idle: u, ...g }) }),
    });
}
