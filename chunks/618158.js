r.d(n, {
    Y: function () {
        return s;
    },
    Z: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(937995);
function s(e) {
    let { onPreventIdle: n, onAllowIdle: r, onActive: i } = a.useContext(o.nM),
        s = a.useCallback(() => {
            n(e);
        }, [e, n]);
    return {
        preventIdle: s,
        allowIdle: a.useCallback(() => {
            r(e);
        }, [e, r]),
        onActive: i
    };
}
function l(e) {
    let { children: n, className: r } = e,
        { onForceIdle: l, onActive: u } = a.useContext(o.nM),
        { preventIdle: c, allowIdle: d } = s('interact');
    a.useEffect(() => () => d(), [d]);
    let f = a.useCallback(
        (e) => {
            var n;
            let r = null !== (n = e.target.ownerDocument) && void 0 !== n ? n : document;
            if (!e.currentTarget.contains(r.activeElement)) l();
        },
        [l]
    );
    return (0, i.jsx)('div', {
        className: r,
        onMouseEnter: c,
        onMouseLeave: d,
        onFocus: u,
        onBlur: f,
        children: n
    });
}
