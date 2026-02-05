n.d(t, { A: () => r });
var i = n(64700),
    l = n(835245),
    a = n(318937);
let s = () => {};
function r(e, t, n) {
    let r = i.useRef((0, l.A)()),
        o = i.useRef(Date.now()),
        c = i.useCallback(
            (i, l) => {
                let s = { x: i, y: l, deltaTime: Date.now() - o.current };
                (0, a.dk)(t, r.current, e, n, s), (0, a.d4)(r.current, e, n, [s]);
            },
            [t, n, e],
        ),
        d = i.useCallback(
            (e, t, n) => {
                (r.current = (0, l.A)()), (o.current = Date.now()), c(t, n);
            },
            [c],
        ),
        u = i.useCallback((e, t, n) => c(t, n), [c]),
        h = i.useCallback((e, t, n) => d(e, t, n), [d]);
    return i.useMemo(
        () => ({ handleMouseDown: d, handleMouseMove: u, handleMouseUp: s, handleMouseEnter: h }),
        [d, h, u],
    );
}
