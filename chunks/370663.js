n.d(t, { Z: () => u });
var r = n(73800),
    l = n(772848),
    i = n(125268);
let a = () => {};
function u(e, t, n) {
    let u = r.useRef((0, l.Z)()),
        o = r.useRef(Date.now()),
        s = r.useCallback(
            (r, l) => {
                let a = {
                    x: r,
                    y: l,
                    deltaTime: Date.now() - o.current
                };
                (0, i.oW)(t, u.current, e, n, a), (0, i.cV)(u.current, e, n, [a]);
            },
            [t, n, e]
        ),
        c = r.useCallback(
            (e, t, n) => {
                (u.current = (0, l.Z)()), (o.current = Date.now()), s(t, n);
            },
            [s]
        ),
        d = r.useCallback((e, t, n) => s(t, n), [s]),
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
