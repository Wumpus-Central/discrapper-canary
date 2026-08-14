n.d(t, { A: () => a, o: () => i });
var l = n(477900),
    r = n(582128),
    s = n(461782);
function i(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: l } = r.useContext(s.k3);
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
        { preventIdle: s, allowIdle: a } = i("interact-hover"),
        { preventIdle: u, allowIdle: c } = i("interact-focus");
    r.useEffect(
        () => () => {
            a(), c();
        },
        [a, c],
    );
    let o = r.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || c();
        },
        [c],
    );
    return (0, l.jsx)("div", { className: n, onMouseEnter: s, onMouseLeave: a, onFocus: u, onBlur: o, children: t });
}
