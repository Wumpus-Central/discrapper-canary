n.d(t, { Ay: () => s, k3: () => a, vG: () => i });
var r = n(477900),
    l = n(582128),
    u = n(451988);
let a = l.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    i = l.createContext(!1);
function s(e) {
    let { children: t, timeout: n } = e,
        [s, c] = l.useState(!1),
        o = l.useRef(new Set()),
        d = l.useRef(null);
    l.useEffect(
        () => (
            (d.current = new u.J_(n, () => c(!0))),
            d.current.delay(),
            () => {
                (d.current?.cancel(), (d.current = null));
            }
        ),
        [n],
    );
    let f = l.useCallback(
            (e) => {
                (c(!1), o.current.add(e), d.current?.cancel());
            },
            [o, d, c],
        ),
        h = l.useCallback(
            (e) => {
                (o.current.delete(e), 0 === o.current.size && d.current?.delay());
            },
            [o, d],
        ),
        p = l.useCallback(() => {
            (c(!1), 0 === o.current.size && d.current?.delay());
        }, [o, d, c]),
        C = l.useCallback(() => {
            o.current.size > 0 || (d.current?.cancel(), c(!0));
        }, [d, c]),
        E = l.useMemo(() => ({ onAllowIdle: h, onPreventIdle: f, onActive: p, onForceIdle: C }), [h, f, p, C]);
    return (0, r.jsx)(i.Provider, {
        value: s,
        children: (0, r.jsx)(a.Provider, { value: E, children: t({ idle: s, ...E }) }),
    });
}
