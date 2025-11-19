n.d(t, { Z: () => l }), n(388685);
var i = n(473749),
    r = n(846519);
function l(e, t) {
    let [n, l] = i.useState(!1),
        a = i.useRef(new r.sW(t, () => l(!1))),
        o = i.useRef(new r.sW(e, () => l(!0))),
        s = i.useCallback(() => {
            a.current.cancel(), o.current.cancel();
        }, []);
    i.useEffect(() => s, [s]);
    let c = i.useCallback(() => {
        s(), a.current.delay();
    }, [s]);
    return {
        isHovered: n,
        setIsHovered: l,
        onMouseEnter: i.useCallback(() => {
            s(), o.current.delay();
        }, [s]),
        onMouseLeave: c,
        cancelTimers: s,
    };
}
