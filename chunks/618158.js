n.d(t, {
    Y: () => s,
    Z: () => o
});
var i = n(200651),
    r = n(192379),
    a = n(937995);
function s(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: i } = r.useContext(a.nM);
    return {
        preventIdle: r.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: r.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: i
    };
}
function o(e) {
    let { children: t, className: n } = e,
        { onForceIdle: o, onActive: l } = r.useContext(a.nM),
        { preventIdle: u, allowIdle: c } = s('interact');
    r.useEffect(() => () => c(), [c]);
    let d = r.useCallback(
        (e) => {
            var t;
            let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
            !e.currentTarget.contains(n.activeElement) && o();
        },
        [o]
    );
    return (0, i.jsx)('div', {
        className: n,
        onMouseEnter: u,
        onMouseLeave: c,
        onFocus: l,
        onBlur: d,
        children: t
    });
}
