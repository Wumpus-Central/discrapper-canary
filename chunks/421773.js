n.d(t, { A: () => r });
var l = n(582128),
    a = n(451988);
function r(e, t) {
    let [n, r] = l.useState(!1),
        i = l.useRef(new a.J_(t, () => r(!1))),
        s = l.useRef(new a.J_(e, () => r(!0))),
        o = l.useCallback(() => {
            (i.current.cancel(), s.current.cancel());
        }, []);
    l.useEffect(() => o, [o]);
    let u = l.useCallback(() => {
        (o(), i.current.delay());
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: r,
        onMouseEnter: l.useCallback(() => {
            (o(), s.current.delay());
        }, [o]),
        onMouseLeave: u,
        cancelTimers: o,
    };
}
