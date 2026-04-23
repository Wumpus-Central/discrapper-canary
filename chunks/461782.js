n.d(t, { Ay: () => o, k3: () => l, vG: () => s });
var i = n(627968),
    r = n(64700),
    a = n(451988);
let l = r.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    s = r.createContext(!1);
function o(e) {
    let { children: t, timeout: n } = e,
        [o, u] = r.useState(!1),
        _ = r.useRef(new Set()),
        E = r.useRef(null);
    r.useEffect(
        () => (
            (E.current = new a.J_(n, () => u(!0))),
            E.current.delay(),
            () => {
                E.current?.cancel(), (E.current = null);
            }
        ),
        [n],
    );
    let A = r.useCallback(
            (e) => {
                u(!1), _.current.add(e), E.current?.cancel();
            },
            [_, E, u],
        ),
        c = r.useCallback(
            (e) => {
                _.current.delete(e), 0 === _.current.size && E.current?.delay();
            },
            [_, E],
        ),
        d = r.useCallback(() => {
            u(!1), 0 === _.current.size && E.current?.delay();
        }, [_, E, u]),
        I = r.useCallback(() => {
            _.current.size > 0 || (E.current?.cancel(), u(!0));
        }, [E, u]),
        T = r.useMemo(() => ({ onAllowIdle: c, onPreventIdle: A, onActive: d, onForceIdle: I }), [c, A, d, I]);
    return (0, i.jsx)(s.Provider, {
        value: o,
        children: (0, i.jsx)(l.Provider, { value: T, children: t({ idle: o, ...T }) }),
    });
}
