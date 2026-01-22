n.d(t, { A: () => s });
var l = n(64700),
    r = n(835245),
    i = n(318937);
let a = () => {};
function s(e, t, n) {
    let s = l.useRef((0, r.A)()),
        o = l.useRef(Date.now()),
        c = l.useCallback(
            (l, r) => {
                let a = {
                    x: l,
                    y: r,
                    deltaTime: Date.now() - o.current,
                };
                (0, i.dk)(t, s.current, e, n, a), (0, i.d4)(s.current, e, n, [a]);
            },
            [t, n, e],
        ),
        u = l.useCallback(
            (e, t, n) => {
                (s.current = (0, r.A)()), (o.current = Date.now()), c(t, n);
            },
            [c],
        ),
        d = l.useCallback((e, t, n) => c(t, n), [c]),
        f = l.useCallback((e, t, n) => u(e, t, n), [u]);
    return l.useMemo(
        () => ({
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseUp: a,
            handleMouseEnter: f,
        }),
        [u, f, d],
    );
}
