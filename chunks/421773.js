t.d(n, { A: () => r });
var l = t(582128),
    a = t(451988);
function r(e, n) {
    let [t, r] = l.useState(!1),
        i = l.useRef(new a.J_(n, () => r(!1))),
        s = l.useRef(new a.J_(e, () => r(!0))),
        o = l.useCallback(() => {
            (i.current.cancel(), s.current.cancel());
        }, []);
    l.useEffect(() => o, [o]);
    let u = l.useCallback(() => {
        (o(), i.current.delay());
    }, [o]);
    return {
        isHovered: t,
        setIsHovered: r,
        onMouseEnter: l.useCallback(() => {
            (o(), s.current.delay());
        }, [o]),
        onMouseLeave: u,
        cancelTimers: o,
    };
}
