n.d(t, { Z: () => s });
var r = n(73800),
    i = n(772848),
    o = n(125268);
let a = () => {};
function s(e, t, n) {
    let s = r.useRef((0, i.Z)()),
        l = r.useRef(Date.now()),
        c = r.useCallback(
            (r, i) => {
                let a = {
                    x: r,
                    y: i,
                    deltaTime: Date.now() - l.current
                };
                ((0, o.oW)(t, s.current, e, n, a), (0, o.cV)(s.current, e, n, [a]));
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
            handleMouseUp: a,
            handleMouseEnter: f
        }),
        [u, f, d]
    );
}
