r.d(n, {
    k: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(1561),
    s = r(104611);
function l(e) {
    let { tag: n = 'div', children: r, className: l, style: u, focusProps: c, onClick: d, onDoubleClick: f, onContextMenu: p, onKeyDown: h, onFocus: _, onBlur: m, onMouseOver: g, onMouseDown: E, onMouseLeave: v, buttonProps: y, 'aria-label': b } = e,
        I = a.useRef(null);
    return (0, i.jsxs)(n, {
        ref: I,
        className: l,
        style: u,
        onClick: d,
        onMouseOver: g,
        onMouseLeave: v,
        onDoubleClick: f,
        onContextMenu: p,
        children: [
            (0, i.jsx)(o.P, {
                ...y,
                focusProps: {
                    ringTarget: I,
                    ...c
                },
                className: s.focusTarget,
                'aria-label': b,
                onClick: (e) => {
                    e.stopPropagation(), null == d || d(e);
                },
                onKeyDown: h,
                onFocus: _,
                onBlur: m,
                onMouseDown: E
            }),
            r
        ]
    });
}
