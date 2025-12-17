n.d(t, { X: () => o });
var r = n(473749),
    i = n(872175),
    a = n(464281);
function o(e, t, n, o) {
    let s = r.useCallback(
            (e) => {
                if (null == e) return void o(null);
                "function" == typeof e.getBoundingClientRect && o(e);
            },
            [o],
        ),
        l = e.props.ref,
        c = (0, i.Z)(l),
        u = r.useCallback(
            (e) => {
                (0, a.k$)(c.current, e), s(e);
            },
            [c, s],
        ),
        d = r.useRef(l);
    r.useEffect(() => {
        d.current = l;
    }, [l]);
    let f = e.props,
        p = f.buttonRef,
        _ = r.useCallback(
            (e) => {
                (0, a.k$)(p, e), u(e);
            },
            [p, u],
        ),
        m = f.innerRef,
        h = r.useCallback(
            (e) => {
                (0, a.k$)(m, e), u(e);
            },
            [m, u],
        ),
        g = {
            onMouseEnter: (0, a.tS)(f.onMouseEnter, t.onMouseEnter),
            onMouseLeave: (0, a.tS)(f.onMouseLeave, t.onMouseLeave),
            onFocus: (0, a.tS)(f.onFocus, t.onFocus),
            onBlur: (0, a.tS)(f.onBlur, t.onBlur),
            onContextMenu: (0, a.tS)(f.onContextMenu, t.onContextMenu),
            onClick: (0, a.tS)(f.onClick, t.onClick),
        };
    return (
        null != n && "" !== n && (g["aria-describedby"] = (0, a.QV)(f["aria-describedby"], n)),
        "string" == typeof e.type
            ? (g.ref = u)
            : "buttonRef" in e.props
              ? ((g.buttonRef = _), (g.ref = u))
              : "innerRef" in e.props
                ? ((g.innerRef = h), (g.ref = u))
                : ((g.ref = u), (g.innerRef = u)),
        r.cloneElement(e, g)
    );
}
