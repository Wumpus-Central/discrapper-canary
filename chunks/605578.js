n.d(t, { k: () => o });
var i = n(200651),
    r = n(192379),
    a = n(1561),
    s = n(104611);
let o = r.forwardRef(function (e, t) {
    let { tag: n = 'div', children: o, className: l, style: u, focusProps: c, onClick: d, onDoubleClick: f, onContextMenu: _, onKeyDown: p, onFocus: h, onBlur: m, onMouseOver: g, onMouseDown: E, onMouseLeave: v, buttonProps: y, 'aria-label': I } = e,
        b = r.useRef(null);
    return (
        r.useImperativeHandle(t, () => b.current),
        (0, i.jsxs)(n, {
            ref: b,
            className: l,
            style: u,
            onClick: d,
            onMouseOver: g,
            onMouseLeave: v,
            onDoubleClick: f,
            onContextMenu: _,
            children: [
                (0, i.jsx)(a.P, {
                    ...y,
                    focusProps: {
                        ringTarget: b,
                        ...c
                    },
                    className: s.focusTarget,
                    'aria-label': I,
                    onClick: (e) => {
                        e.stopPropagation(), null == d || d(e);
                    },
                    onKeyDown: p,
                    onFocus: h,
                    onBlur: m,
                    onMouseDown: E
                }),
                o
            ]
        })
    );
});
