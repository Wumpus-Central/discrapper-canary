n.d(t, { Z: () => o });
var r = n(73800),
    l = n(772848),
    i = n(125268);
let a = () => {};
function o(e, t, n) {
    let o = r.useRef((0, l.Z)()),
        u = r.useRef(Date.now()),
        s = r.useCallback(
            (r, l) => {
                let a = {
                    x: r,
                    y: l,
                    deltaTime: Date.now() - u.current
                };
                (0, i.oW)(t, o.current, e, n, a), (0, i.cV)(o.current, e, n, [a]);
            },
            [t, n, e]
        ),
        c = r.useCallback(
            (e, t, n) => {
                (o.current = (0, l.Z)()), (u.current = Date.now()), s(t, n);
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
