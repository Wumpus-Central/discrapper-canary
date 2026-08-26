n.d(t, { A: () => a, o: () => s });
var l = n(477900),
    r = n(582128),
    i = n(461782);
function s(e) {
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
function a(e) {
    let { children: t, className: n } = e,
        { preventIdle: i, allowIdle: a } = s("interact-hover"),
        { preventIdle: u, allowIdle: o } = s("interact-focus");
    r.useEffect(
        () => () => {
            a(), o();
        },
        [a, o],
    );
    let c = r.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || o();
        },
        [o],
    );
    return (0, l.jsx)("div", { className: n, onMouseEnter: i, onMouseLeave: a, onFocus: u, onBlur: c, children: t });
}
