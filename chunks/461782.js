l.d(n, { Ay: () => c, k3: () => u, vG: () => o });
var r = l(477900),
    t = l(582128),
    a = l(451988);
let u = t.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    o = t.createContext(!1);
function c(e) {
    let { children: n, timeout: l } = e,
        [c, s] = t.useState(!1),
        i = t.useRef(new Set()),
        d = t.useRef(null);
    t.useEffect(
        () => (
            (d.current = new a.J_(l, () => s(!0))),
            d.current.delay(),
            () => {
                (d.current?.cancel(), (d.current = null));
            }
        ),
        [l],
    );
    let p = t.useCallback(
            (e) => {
                (s(!1), i.current.add(e), d.current?.cancel());
            },
            [i, d, s],
        ),
        h = t.useCallback(
            (e) => {
                (i.current.delete(e), 0 === i.current.size && d.current?.delay());
            },
            [i, d],
        ),
        v = t.useCallback(() => {
            (s(!1), 0 === i.current.size && d.current?.delay());
        }, [i, d, s]),
        m = t.useCallback(() => {
            i.current.size > 0 || (d.current?.cancel(), s(!0));
        }, [d, s]),
        C = t.useMemo(() => ({ onAllowIdle: h, onPreventIdle: p, onActive: v, onForceIdle: m }), [h, p, v, m]);
    return (0, r.jsx)(o.Provider, {
        value: c,
        children: (0, r.jsx)(u.Provider, { value: C, children: n({ idle: c, ...C }) }),
    });
}
