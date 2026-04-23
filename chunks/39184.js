"use strict";
n.d(t, { o: () => a });
var r = n(64700),
    i = n(66455),
    s = n(348275);
function a(e, t, n, a) {
    let o = r.useCallback(
            (e) => {
                null == e ? a(null) : "function" == typeof e.getBoundingClientRect && a(e);
            },
            [a],
        ),
        l = e.props.ref,
        u = (0, i.A)(l),
        c = r.useCallback(
            (e) => {
                (0, s.cZ)(u.current, e), o(e);
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
                (0, s.cZ)(f, e), c(e);
            },
            [f, c],
        ),
        h = _.innerRef,
        E = r.useCallback(
            (e) => {
                (0, s.cZ)(h, e), c(e);
            },
            [h, c],
        ),
        m = {
            onMouseEnter: (0, s.cy)(_.onMouseEnter, t.onMouseEnter),
            onMouseLeave: (0, s.cy)(_.onMouseLeave, t.onMouseLeave),
            onFocus: (0, s.cy)(_.onFocus, t.onFocus),
            onBlur: (0, s.cy)(_.onBlur, t.onBlur),
            onContextMenu: (0, s.cy)(_.onContextMenu, t.onContextMenu),
            onClick: (0, s.cy)(_.onClick, t.onClick),
        };
    return (
        null != n && "" !== n && (m["aria-describedby"] = (0, s.iO)(_["aria-describedby"], n)),
        "string" == typeof e.type
            ? (m.ref = c)
            : "buttonRef" in e.props
              ? ((m.buttonRef = p), (m.ref = c))
              : "innerRef" in e.props
                ? ((m.innerRef = E), (m.ref = c))
                : ((m.ref = c), (m.innerRef = c)),
        r.cloneElement(e, m)
    );
}
