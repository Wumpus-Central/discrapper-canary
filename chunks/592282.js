n.d(t, { S: () => y });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(1561),
    l = n(761224),
    c = n(670596),
    u = n(743236),
    d = n(481060),
    f = n(540059),
    _ = n(448239),
    p = n(247442),
    h = n(939350),
    g = n(253068);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { color: t = 'default', label: n, checked: o, subtext: m, disabled: v, isFocused: y, menuItemProps: O, action: S, className: I, focusedClassName: T } = e,
        { onInteraction: N } = i.useContext(c.p),
        A = i.useRef(null),
        C = (0, f.Q3)('MenuCheckboxItem');
    i.useEffect(() => {
        y && (0, u.F)(A);
    }, [y]);
    let R = i.useCallback(
        (e) => {
            S(e), null == N || N({ type: c.U.CHECKBOX });
        },
        [S, N]
    );
    return (0, r.jsxs)(
        s.P,
        b(
            E(
                {
                    innerRef: A,
                    className: a()(g.item, g.checkboxContainer, g.labelContainer, h._[t], I, {
                        [g.disabled]: v,
                        [g.focused]: y,
                        [null != T ? T : '']: y
                    }),
                    onClick: v ? void 0 : R
                },
                O
            ),
            {
                'aria-checked': o,
                'aria-disabled': v,
                children: [
                    (0, r.jsxs)('div', {
                        className: g.label,
                        children: [
                            (0, l.I)(n, e),
                            null != m &&
                                (0, r.jsx)('div', {
                                    className: g.subtext,
                                    children: m
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: g.iconContainer,
                        children: C
                            ? (0, r.jsx)(d.FZ5, {
                                  shape: d.XZJ.Shapes.BOX,
                                  size: 20,
                                  value: o,
                                  disabled: v
                              })
                            : o
                              ? (0, r.jsx)(p.Z, {
                                    className: g.icon,
                                    background: g.checkbox,
                                    foreground: g.check
                                })
                              : (0, r.jsx)(_.Z, {
                                    className: g.icon,
                                    foreground: g.__invalid_checkboxEmpty
                                })
                    })
                ]
            }
        )
    );
}
