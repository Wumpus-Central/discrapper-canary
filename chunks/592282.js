r.d(n, {
    S: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(1561),
    u = r(761224),
    c = r(743236),
    d = r(481060),
    f = r(540059),
    p = r(448239),
    h = r(247442),
    _ = r(939350),
    m = r(450793);
function g(e) {
    let { color: n = 'default', label: r, checked: o, subtext: g, disabled: E, isFocused: v, menuItemProps: y, action: b, className: I, focusedClassName: T } = e,
        S = a.useRef(null),
        A = (0, f.Q3)('MenuCheckboxItem');
    return (
        a.useEffect(() => {
            v && (0, c.F)(S);
        }, [v]),
        (0, i.jsxs)(l.P, {
            innerRef: S,
            className: s()(m.item, m.checkboxContainer, m.labelContainer, _._[n], I, {
                [m.disabled]: E,
                [m.focused]: v,
                [null != T ? T : '']: v
            }),
            onClick: E ? void 0 : b,
            ...y,
            'aria-checked': o,
            'aria-disabled': E,
            children: [
                (0, i.jsxs)('div', {
                    className: m.label,
                    children: [
                        (0, u.I)(r, e),
                        null != g &&
                            (0, i.jsx)('div', {
                                className: m.subtext,
                                children: g
                            })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.iconContainer,
                    children: A
                        ? (0, i.jsx)(d.CheckboxIndicator, {
                              shape: d.Checkbox.Shapes.BOX,
                              size: 20,
                              value: o,
                              disabled: E
                          })
                        : o
                          ? (0, i.jsx)(h.Z, {
                                className: m.icon,
                                background: m.checkbox,
                                foreground: m.check
                            })
                          : (0, i.jsx)(p.Z, {
                                className: m.icon,
                                foreground: m.__invalid_checkboxEmpty
                            })
                })
            ]
        })
    );
}
