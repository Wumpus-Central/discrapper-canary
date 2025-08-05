(n.d(t, { Z: () => a }), n(388685));
var r = n(73800),
    i = n(846519);
function a(e, t) {
    let [n, a] = r.useState(!1),
        o = r.useRef(new i.sW(t, () => a(!1))),
        s = r.useRef(new i.sW(e, () => a(!0))),
        l = r.useCallback(() => {
            (o.current.cancel(), s.current.cancel());
        }, []);
    r.useEffect(() => l, [l]);
    let c = r.useCallback(() => {
        (l(), o.current.delay());
    }, [l]);
    return {
        isHovered: n,
        setIsHovered: a,
        onMouseEnter: r.useCallback(() => {
            (l(), s.current.delay());
        }, [l]),
        onMouseLeave: c,
        cancelTimers: l
    };
}
