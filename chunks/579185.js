n.d(t, { Z: () => l }), n(388685);
var r = n(647438),
    i = n(846519);
function l(e, t) {
    let [n, l] = r.useState(!1),
        a = r.useRef(new i.sW(t, () => l(!1))),
        o = r.useRef(new i.sW(e, () => l(!0))),
        s = r.useCallback(() => {
            a.current.cancel(), o.current.cancel();
        }, []);
    r.useEffect(() => s, [s]);
    let c = r.useCallback(() => {
        s(), a.current.delay();
    }, [s]);
    return {
        isHovered: n,
        setIsHovered: l,
        onMouseEnter: r.useCallback(() => {
            s(), o.current.delay();
        }, [s]),
        onMouseLeave: c,
        cancelTimers: s,
    };
}
