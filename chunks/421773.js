n.d(t, { A: () => i });
var l = n(582128),
    r = n(451988);
function i(e, t) {
    let [n, i] = l.useState(!1),
        a = l.useRef(new r.J_(t, () => i(!1))),
        s = l.useRef(new r.J_(e, () => i(!0))),
        o = l.useCallback(() => {
            (a.current.cancel(), s.current.cancel());
        }, []);
    l.useEffect(() => o, [o]);
    let u = l.useCallback(() => {
        (o(), a.current.delay());
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: i,
        onMouseEnter: l.useCallback(() => {
            (o(), s.current.delay());
        }, [o]),
        onMouseLeave: u,
        cancelTimers: o,
    };
}
