n.d(t, { Z: () => s });
var l = n(192379),
    i = n(772848),
    r = n(125268);
let a = () => {};
function s(e, t, n) {
    let s = l.useRef((0, i.Z)()),
        o = l.useRef(Date.now()),
        u = l.useCallback(
            (l, i) => {
                let a = {
                    x: l,
                    y: i,
                    deltaTime: Date.now() - o.current
                };
                (0, r.oW)(t, s.current, e, n, a), (0, r.cV)(s.current, e, n, [a]);
            },
            [t, n, e]
        ),
        c = l.useCallback(
            (e, t, n) => {
                (s.current = (0, i.Z)()), (o.current = Date.now()), u(t, n);
            },
            [u]
        ),
        d = l.useCallback((e, t, n) => u(t, n), [u]),
        m = l.useCallback((e, t, n) => c(e, t, n), [c]);
    return l.useMemo(
        () => ({
            handleMouseDown: c,
            handleMouseMove: d,
            handleMouseUp: a,
            handleMouseEnter: m
        }),
        [c, m, d]
    );
}
