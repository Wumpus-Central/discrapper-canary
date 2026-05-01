n.d(t, { Ay: () => E, k3: () => l, vG: () => s });
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
function E(e) {
    let { children: t, timeout: n } = e,
        [E, _] = r.useState(!1),
        o = r.useRef(new Set()),
        u = r.useRef(null);
    r.useEffect(
        () => (
            (u.current = new a.J_(n, () => _(!0))),
            u.current.delay(),
            () => {
                u.current?.cancel(), (u.current = null);
            }
        ),
        [n],
    );
    let A = r.useCallback(
            (e) => {
                _(!1), o.current.add(e), u.current?.cancel();
            },
            [o, u, _],
        ),
        d = r.useCallback(
            (e) => {
                o.current.delete(e), 0 === o.current.size && u.current?.delay();
            },
            [o, u],
        ),
        c = r.useCallback(() => {
            _(!1), 0 === o.current.size && u.current?.delay();
        }, [o, u, _]),
        I = r.useCallback(() => {
            o.current.size > 0 || (u.current?.cancel(), _(!0));
        }, [u, _]),
        T = r.useMemo(() => ({ onAllowIdle: d, onPreventIdle: A, onActive: c, onForceIdle: I }), [d, A, c, I]);
    return (0, i.jsx)(s.Provider, {
        value: E,
        children: (0, i.jsx)(l.Provider, { value: T, children: t({ idle: E, ...T }) }),
    });
}
