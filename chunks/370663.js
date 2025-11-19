n.d(t, { Z: () => o });
var r = n(473749),
    i = n(772848),
    l = n(125268);
let a = () => {};
function o(e, t, n) {
    let o = r.useRef((0, i.Z)()),
        c = r.useRef(Date.now()),
        s = r.useCallback(
            (r, i) => {
                let a = {
                    x: r,
                    y: i,
                    deltaTime: Date.now() - c.current,
                };
                (0, l.oW)(t, o.current, e, n, a), (0, l.cV)(o.current, e, n, [a]);
            },
            [t, n, e],
        ),
        u = r.useCallback(
            (e, t, n) => {
                (o.current = (0, i.Z)()), (c.current = Date.now()), s(t, n);
            },
            [s],
        ),
        d = r.useCallback((e, t, n) => s(t, n), [s]),
        f = r.useCallback((e, t, n) => u(e, t, n), [u]);
    return r.useMemo(
        () => ({
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseUp: a,
            handleMouseEnter: f,
        }),
        [u, f, d],
    );
}
