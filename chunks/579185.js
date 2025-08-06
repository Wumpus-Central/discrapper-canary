(n.d(t, { Z: () => o }), n(388685));
var r = n(73800),
    i = n(846519);
function o(e, t) {
    let [n, o] = r.useState(!1),
        a = r.useRef(new i.sW(t, () => o(!1))),
        s = r.useRef(new i.sW(e, () => o(!0))),
        l = r.useCallback(() => {
            (a.current.cancel(), s.current.cancel());
        }, []);
    r.useEffect(() => l, [l]);
    let c = r.useCallback(() => {
        (l(), a.current.delay());
    }, [l]);
    return {
        isHovered: n,
        setIsHovered: o,
        onMouseEnter: r.useCallback(() => {
            (l(), s.current.delay());
        }, [l]),
        onMouseLeave: c,
        cancelTimers: l
    };
}
