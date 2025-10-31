n.d(t, { Z: () => o });
var r = n(647438),
    i = n(772848),
    l = n(125268);
let a = () => {};
function o(e, t, n) {
    let o = r.useRef((0, i.Z)()),
        s = r.useRef(Date.now()),
        c = r.useCallback(
            (r, i) => {
                let a = {
                    x: r,
                    y: i,
                    deltaTime: Date.now() - s.current,
                };
                (0, l.oW)(t, o.current, e, n, a), (0, l.cV)(o.current, e, n, [a]);
            },
            [t, n, e],
        ),
        u = r.useCallback(
            (e, t, n) => {
                (o.current = (0, i.Z)()), (s.current = Date.now()), c(t, n);
            },
            [c],
        ),
        d = r.useCallback((e, t, n) => c(t, n), [c]),
        p = r.useCallback((e, t, n) => u(e, t, n), [u]);
    return r.useMemo(
        () => ({
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseUp: a,
            handleMouseEnter: p,
        }),
        [u, p, d],
    );
}
