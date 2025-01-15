n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(192379),
    l = n(772848),
    a = n(125268);
let r = () => {};
function s(e, t, n) {
    let s = i.useRef((0, l.Z)()),
        o = i.useRef(Date.now()),
        c = i.useCallback(
            (i, l) => {
                let r = {
                    x: i,
                    y: l,
                    deltaTime: Date.now() - o.current
                };
                (0, a.oW)(t, s.current, e, n, r), (0, a.cV)(s.current, e, n, [r]);
            },
            [t, n, e]
        ),
        u = i.useCallback(
            (e, t, n) => {
                (s.current = (0, l.Z)()), (o.current = Date.now()), c(t, n);
            },
            [c]
        ),
        d = i.useCallback((e, t, n) => c(t, n), [c]),
        m = i.useCallback((e, t, n) => u(e, t, n), [u]);
    return i.useMemo(
        () => ({
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseUp: r,
            handleMouseEnter: m
        }),
        [u, m, d]
    );
}
