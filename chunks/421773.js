c.d(u, { A: () => s });
var a = c(64700),
    n = c(451988);
function s(e, u) {
    let [c, s] = a.useState(!1),
        t = a.useRef(new n.J_(u, () => s(!1))),
        r = a.useRef(new n.J_(e, () => s(!0))),
        l = a.useCallback(() => {
            t.current.cancel(), r.current.cancel();
        }, []);
    a.useEffect(() => l, [l]);
    let d = a.useCallback(() => {
        l(), t.current.delay();
    }, [l]);
    return {
        isHovered: c,
        setIsHovered: s,
        onMouseEnter: a.useCallback(() => {
            l(), r.current.delay();
        }, [l]),
        onMouseLeave: d,
        cancelTimers: l,
    };
}
