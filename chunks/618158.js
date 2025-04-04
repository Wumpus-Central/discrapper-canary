n.d(t, {
    Y: () => a,
    Z: () => s
});
var r = n(200651),
    i = n(192379),
    o = n(937995);
function a(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: r } = i.useContext(o.nM);
    return {
        preventIdle: i.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: i.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: r
    };
}
function s(e) {
    let { children: t, className: n } = e,
        { onForceIdle: s, onActive: l } = i.useContext(o.nM),
        { preventIdle: c, allowIdle: u } = a('interact');
    i.useEffect(() => () => u(), [u]);
    let d = i.useCallback(
        (e) => {
            var t;
            let n = null != (t = e.target.ownerDocument) ? t : document;
            e.currentTarget.contains(n.activeElement) || s();
        },
        [s]
    );
    return (0, r.jsx)('div', {
        className: n,
        onMouseEnter: c,
        onMouseLeave: u,
        onFocus: l,
        onBlur: d,
        children: t
    });
}
