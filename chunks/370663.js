n.d(t, { Z: () => o });
var r = n(192379),
    l = n(772848),
    i = n(125268);
let a = () => {};
function o(e, t, n) {
    let o = r.useRef((0, l.Z)()),
        s = r.useRef(Date.now()),
        c = r.useCallback(
            (r, l) => {
                let a = {
                    x: r,
                    y: l,
                    deltaTime: Date.now() - s.current
                };
                (0, i.oW)(t, o.current, e, n, a), (0, i.cV)(o.current, e, n, [a]);
            },
            [t, n, e]
        ),
        u = r.useCallback(
            (e, t, n) => {
                (o.current = (0, l.Z)()), (s.current = Date.now()), c(t, n);
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
