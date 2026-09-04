n.d(t, { A: () => s, o: () => a });
var l = n(477900),
    r = n(582128),
    i = n(461782);
function a(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: l } = r.useContext(i.k3);
    return {
        preventIdle: r.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: r.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: l,
    };
}
function s(e) {
    let { children: t, className: n } = e,
        { preventIdle: i, allowIdle: s } = a("interact-hover"),
        { preventIdle: o, allowIdle: u } = a("interact-focus");
    r.useEffect(
        () => () => {
            s(), u();
        },
        [s, u],
    );
    let c = r.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || u();
        },
        [u],
    );
    return (0, l.jsx)("div", { className: n, onMouseEnter: i, onMouseLeave: s, onFocus: o, onBlur: c, children: t });
}
