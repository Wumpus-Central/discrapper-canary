n.d(t, { Z: () => a }), n(47120);
var i = n(192379),
    l = n(846519);
function a(e, t) {
    let [n, a] = i.useState(!1),
        r = i.useRef(new l.sW(t, () => a(!1))),
        s = i.useRef(new l.sW(e, () => a(!0))),
        o = i.useCallback(() => {
            r.current.cancel(), s.current.cancel();
        }, []);
    i.useEffect(() => o, [o]);
    let c = i.useCallback(() => {
        o(), r.current.delay();
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: a,
        onMouseEnter: i.useCallback(() => {
            o(), s.current.delay();
        }, [o]),
        onMouseLeave: c,
        cancelTimers: o
    };
}
