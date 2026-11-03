n.d(t, { A: () => a });
var l = n(582128),
    r = n(451988);
function a(e, t) {
    let [n, a] = l.useState(!1),
        i = l.useRef(new r.J_(t, () => a(!1))),
        s = l.useRef(new r.J_(e, () => a(!0))),
        u = l.useCallback(() => {
            (i.current.cancel(), s.current.cancel());
        }, []);
    l.useEffect(() => u, [u]);
    let o = l.useCallback(() => {
        (u(), i.current.delay());
    }, [u]);
    return {
        isHovered: n,
        setIsHovered: a,
        onMouseEnter: l.useCallback(() => {
            (u(), s.current.delay());
        }, [u]),
        onMouseLeave: o,
        cancelTimers: u,
    };
}
