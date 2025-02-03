n.d(t, { S: () => m });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(761224),
    u = n(743236),
    c = n(481060),
    d = n(540059),
    f = n(448239),
    _ = n(247442),
    p = n(939350),
    h = n(450793);
function m(e) {
    let { color: t = 'default', label: n, checked: a, subtext: m, disabled: g, isFocused: E, menuItemProps: v, action: y, className: I, focusedClassName: b } = e,
        T = r.useRef(null),
        S = (0, d.Q3)('MenuCheckboxItem');
    return (
        r.useEffect(() => {
            E && (0, u.F)(T);
        }, [E]),
        (0, i.jsxs)(o.P, {
            innerRef: T,
            className: s()(h.item, h.checkboxContainer, h.labelContainer, p._[t], I, {
                [h.disabled]: g,
                [h.focused]: E,
                [null != b ? b : '']: E
            }),
            onClick: g ? void 0 : y,
            ...v,
            'aria-checked': a,
            'aria-disabled': g,
            children: [
                (0, i.jsxs)('div', {
                    className: h.label,
                    children: [
                        (0, l.I)(n, e),
                        null != m &&
                            (0, i.jsx)('div', {
                                className: h.subtext,
                                children: m
                            })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: h.iconContainer,
                    children: S
                        ? (0, i.jsx)(c.FZ5, {
                              shape: c.XZJ.Shapes.BOX,
                              size: 20,
                              value: a,
                              disabled: g
                          })
                        : a
                          ? (0, i.jsx)(_.Z, {
                                className: h.icon,
                                background: h.checkbox,
                                foreground: h.check
                            })
                          : (0, i.jsx)(f.Z, {
                                className: h.icon,
                                foreground: h.__invalid_checkboxEmpty
                            })
                })
            ]
        })
    );
}
