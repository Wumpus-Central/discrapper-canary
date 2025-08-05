n.d(t, { Z: () => s });
var r = n(73800),
    i = n(772848),
    a = n(125268);
let o = () => {};
function s(e, t, n) {
    let s = r.useRef((0, i.Z)()),
        l = r.useRef(Date.now()),
        c = r.useCallback(
            (r, i) => {
                let o = {
                    x: r,
                    y: i,
                    deltaTime: Date.now() - l.current
                };
                ((0, a.oW)(t, s.current, e, n, o), (0, a.cV)(s.current, e, n, [o]));
            },
            [t, n, e]
        ),
        u = r.useCallback(
            (e, t, n) => {
                ((s.current = (0, i.Z)()), (l.current = Date.now()), c(t, n));
            },
            [c]
        ),
        d = r.useCallback((e, t, n) => c(t, n), [c]),
        f = r.useCallback((e, t, n) => u(e, t, n), [u]);
    return r.useMemo(
        () => ({
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseUp: o,
            handleMouseEnter: f
        }),
        [u, f, d]
    );
}
