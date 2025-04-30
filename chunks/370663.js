n.d(t, { Z: () => o });
var r = n(192379),
    l = n(772848),
    i = n(125268);
let a = () => {};
function o(e, t, n) {
    let o = r.useRef((0, l.Z)()),
        s = r.useRef(Date.now()),
        u = r.useCallback(
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
        c = r.useCallback(
            (e, t, n) => {
                (o.current = (0, l.Z)()), (s.current = Date.now()), u(t, n);
            },
            [u]
        ),
        d = r.useCallback((e, t, n) => u(t, n), [u]),
        f = r.useCallback((e, t, n) => c(e, t, n), [c]);
    return r.useMemo(
        () => ({
            handleMouseDown: c,
            handleMouseMove: d,
            handleMouseUp: a,
            handleMouseEnter: f
        }),
        [c, f, d]
    );
}
