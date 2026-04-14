n.d(t, { A: () => s });
var i = n(64700),
    l = n(451988);
function s(e, t) {
    let [n, s] = i.useState(!1),
        a = i.useRef(new l.J_(t, () => s(!1))),
        r = i.useRef(new l.J_(e, () => s(!0))),
        o = i.useCallback(() => {
            a.current.cancel(), r.current.cancel();
        }, []);
    i.useEffect(() => o, [o]);
    let d = i.useCallback(() => {
        o(), a.current.delay();
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: s,
        onMouseEnter: i.useCallback(() => {
            o(), r.current.delay();
        }, [o]),
        onMouseLeave: d,
        cancelTimers: o,
    };
}
