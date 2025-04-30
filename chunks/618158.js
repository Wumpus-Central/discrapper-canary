n.d(t, {
    Y: () => o,
    Z: () => s
});
var r = n(255367),
    i = n(73800),
    a = n(937995);
function o(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: r } = i.useContext(a.nM);
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
        { onForceIdle: s, onActive: l } = i.useContext(a.nM),
        { preventIdle: c, allowIdle: u } = o('interact');
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
