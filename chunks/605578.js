r.d(n, {
    k: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(1561),
    o = r(104611);
function l(e) {
    let { tag: n = 'div', children: r, className: l, style: u, focusProps: c, onClick: d, onDoubleClick: f, onContextMenu: _, onKeyDown: h, onFocus: p, onBlur: m, onMouseOver: g, onMouseDown: E, onMouseLeave: v, buttonProps: I, 'aria-label': T } = e,
        b = a.useRef(null);
    return (0, i.jsxs)(n, {
        ref: b,
        className: l,
        style: u,
        onClick: d,
        onMouseOver: g,
        onMouseLeave: v,
        onDoubleClick: f,
        onContextMenu: _,
        children: [
            (0, i.jsx)(s.P, {
                ...I,
                focusProps: {
                    ringTarget: b,
                    ...c
                },
                className: o.focusTarget,
                'aria-label': T,
                onClick: (e) => {
                    e.stopPropagation(), null == d || d(e);
                },
                onKeyDown: h,
                onFocus: p,
                onBlur: m,
                onMouseDown: E
            }),
            r
        ]
    });
}
