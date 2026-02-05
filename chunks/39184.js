"use strict";
n.d(t, { o: () => s });
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
        u = (0, i.A)(l),
        c = r.useCallback(
            (e) => {
                (0, a.cZ)(u.current, e), o(e);
            },
            [u, o],
        ),
        d = r.useRef(l);
    r.useEffect(() => {
        d.current = l;
    }, [l]);
    let _ = e.props,
        f = _.buttonRef,
        p = r.useCallback(
            (e) => {
                (0, a.cZ)(f, e), c(e);
            },
            [f, c],
        ),
        h = _.innerRef,
        m = r.useCallback(
            (e) => {
                (0, a.cZ)(h, e), c(e);
            },
            [h, c],
        ),
        g = {
            onMouseEnter: (0, a.cy)(_.onMouseEnter, t.onMouseEnter),
            onMouseLeave: (0, a.cy)(_.onMouseLeave, t.onMouseLeave),
            onFocus: (0, a.cy)(_.onFocus, t.onFocus),
            onBlur: (0, a.cy)(_.onBlur, t.onBlur),
            onContextMenu: (0, a.cy)(_.onContextMenu, t.onContextMenu),
            onClick: (0, a.cy)(_.onClick, t.onClick),
        };
    return (
        null != n && "" !== n && (g["aria-describedby"] = (0, a.iO)(_["aria-describedby"], n)),
        "string" == typeof e.type
            ? (g.ref = c)
            : "buttonRef" in e.props
              ? ((g.buttonRef = p), (g.ref = c))
              : "innerRef" in e.props
                ? ((g.innerRef = m), (g.ref = c))
                : ((g.ref = c), (g.innerRef = c)),
        r.cloneElement(e, g)
    );
}
