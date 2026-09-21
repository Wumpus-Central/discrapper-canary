n.d(t, { A: () => i, o: () => a });
var r = n(477900),
    l = n(582128),
    u = n(461782);
function a(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: r } = l.useContext(u.k3);
    return {
        preventIdle: l.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: l.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: r,
    };
}
function i(e) {
    let { children: t, className: n } = e,
        { preventIdle: u, allowIdle: i } = a("interact-hover"),
        { preventIdle: s, allowIdle: c } = a("interact-focus");
    l.useEffect(
        () => () => {
            (i(), c());
        },
        [i, c],
    );
    let o = l.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || c();
        },
        [c],
    );
    return (0, r.jsx)("div", { className: n, onMouseEnter: u, onMouseLeave: i, onFocus: s, onBlur: o, children: t });
}
