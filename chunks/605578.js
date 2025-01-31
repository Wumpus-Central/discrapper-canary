n.d(t, { k: () => o });
var i = n(200651),
    r = n(192379),
    a = n(1561),
    s = n(104611);
function o(e) {
    let { tag: t = 'div', children: n, className: o, style: l, focusProps: u, onClick: c, onDoubleClick: d, onContextMenu: f, onKeyDown: _, onFocus: p, onBlur: h, onMouseOver: m, onMouseDown: g, onMouseLeave: E, buttonProps: v, 'aria-label': y } = e,
        I = r.useRef(null);
    return (0, i.jsxs)(t, {
        ref: I,
        className: o,
        style: l,
        onClick: c,
        onMouseOver: m,
        onMouseLeave: E,
        onDoubleClick: d,
        onContextMenu: f,
        children: [
            (0, i.jsx)(a.P, {
                ...v,
                focusProps: {
                    ringTarget: I,
                    ...u
                },
                className: s.focusTarget,
                'aria-label': y,
                onClick: (e) => {
                    e.stopPropagation(), null == c || c(e);
                },
                onKeyDown: _,
                onFocus: p,
                onBlur: h,
                onMouseDown: g
            }),
            n
        ]
    });
}
