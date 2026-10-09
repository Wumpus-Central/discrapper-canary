l.d(n, { A: () => r });
var t = l(582128),
    a = l(451988);
function r(e, n) {
    let [l, r] = t.useState(!1),
        i = t.useRef(new a.J_(n, () => r(!1))),
        o = t.useRef(new a.J_(e, () => r(!0))),
        s = t.useCallback(() => {
            (i.current.cancel(), o.current.cancel());
        }, []);
    t.useEffect(() => s, [s]);
    let u = t.useCallback(() => {
        (s(), i.current.delay());
    }, [s]);
    return {
        isHovered: l,
        setIsHovered: r,
        onMouseEnter: t.useCallback(() => {
            (s(), o.current.delay());
        }, [s]),
        onMouseLeave: u,
        cancelTimers: s,
    };
}
