a.d(t, { A: () => r });
var n = a(582128),
    o = a(451988);
function r(e, t) {
    let [a, r] = n.useState(!1),
        l = n.useRef(new o.J_(t, () => r(!1))),
        s = n.useRef(new o.J_(e, () => r(!0))),
        i = n.useCallback(() => {
            l.current.cancel(), s.current.cancel();
        }, []);
    n.useEffect(() => i, [i]);
    let c = n.useCallback(() => {
        i(), l.current.delay();
    }, [i]);
    return {
        isHovered: a,
        setIsHovered: r,
        onMouseEnter: n.useCallback(() => {
            i(), s.current.delay();
        }, [i]),
        onMouseLeave: c,
        cancelTimers: i,
    };
}
