n.d(t, {
    o: () => s,
});
var r = n(64700),
    i = n(66455),
    a = n(348275);

function s(e, t, n, s) {
    let o = r.useCallback(
            (e) => {
                null == e ? s(null) : "function" == typeof e.getBoundingClientRect && s(e);
            },
            [s],
        ),
        l = e.props.ref,
        c = (0, i.A)(l),
        u = r.useCallback(
            (e) => {
                (0, a.cZ)(c.current, e), o(e);
            },
            [c, o],
        ),
        d = r.useRef(l);
    r.useEffect(() => {
        d.current = l;
    }, [l]);
    let f = e.props,
        p = f.buttonRef,
        _ = r.useCallback(
            (e) => {
                (0, a.cZ)(p, e), u(e);
            },
            [p, u],
        ),
        h = f.innerRef,
        m = r.useCallback(
            (e) => {
                (0, a.cZ)(h, e), u(e);
            },
            [h, u],
        ),
        g = {
            onMouseEnter: (0, a.cy)(f.onMouseEnter, t.onMouseEnter),
            onMouseLeave: (0, a.cy)(f.onMouseLeave, t.onMouseLeave),
            onFocus: (0, a.cy)(f.onFocus, t.onFocus),
            onBlur: (0, a.cy)(f.onBlur, t.onBlur),
            onContextMenu: (0, a.cy)(f.onContextMenu, t.onContextMenu),
            onClick: (0, a.cy)(f.onClick, t.onClick),
        };
    return (
        null != n && "" !== n && (g["aria-describedby"] = (0, a.iO)(f["aria-describedby"], n)),
        "string" == typeof e.type
            ? (g.ref = u)
            : "buttonRef" in e.props
              ? ((g.buttonRef = _), (g.ref = u))
              : "innerRef" in e.props
                ? ((g.innerRef = m), (g.ref = u))
                : ((g.ref = u), (g.innerRef = u)),
        r.cloneElement(e, g)
    );
}
