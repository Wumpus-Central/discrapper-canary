n.d(t, { A: () => l, o: () => s });
var i = n(627968),
    a = n(64700),
    r = n(461782);
function s(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: i } = a.useContext(r.k3);
    return {
        preventIdle: a.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: a.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: i,
    };
}
function l(e) {
    let { children: t, className: n } = e,
        { onForceIdle: l, onActive: o } = a.useContext(r.k3),
        { preventIdle: d, allowIdle: c } = s("interact");
    a.useEffect(() => () => c(), [c]);
    let _ = a.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || l();
        },
        [l],
    );
    return (0, i.jsx)("div", { className: n, onMouseEnter: d, onMouseLeave: c, onFocus: o, onBlur: _, children: t });
}
