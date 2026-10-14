t.d(n, { A: () => r });
var a = t(582128),
    l = t(451988);
function r(e, n) {
    let [t, r] = a.useState(!1),
        i = a.useRef(new l.J_(n, () => r(!1))),
        s = a.useRef(new l.J_(e, () => r(!0))),
        o = a.useCallback(() => {
            (i.current.cancel(), s.current.cancel());
        }, []);
    a.useEffect(() => o, [o]);
    let d = a.useCallback(() => {
        (o(), i.current.delay());
    }, [o]);
    return {
        isHovered: t,
        setIsHovered: r,
        onMouseEnter: a.useCallback(() => {
            (o(), s.current.delay());
        }, [o]),
        onMouseLeave: d,
        cancelTimers: o,
    };
}
