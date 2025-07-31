n.d(t, { S: () => E });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(1561),
    l = n(761224),
    c = n(670596),
    u = n(743236),
    d = n(481060),
    _ = n(939350),
    f = n(906944);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { color: t = 'default', label: n, checked: a, subtext: p, disabled: m, isFocused: E, menuItemProps: b, action: y, className: O, focusedClassName: v } = e,
        { onInteraction: I } = i.useContext(c.p),
        T = i.useRef(null);
    i.useEffect(() => {
        E && (0, u.F)(T);
    }, [E]);
    let S = i.useCallback(
        (e) => {
            (y(e), null == I || I({ type: c.U.CHECKBOX }));
        },
        [y, I]
    );
    return (0, r.jsxs)(
        s.P,
        g(
            h(
                {
                    innerRef: T,
                    className: o()(f.item, f.checkboxContainer, f.labelContainer, _._[t], O, {
                        [f.disabled]: m,
                        [f.focused]: E,
                        [null != v ? v : '']: E
                    }),
                    onClick: m ? void 0 : S
                },
                b
            ),
            {
                'aria-checked': a,
                'aria-disabled': m,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.label,
                        children: [
                            (0, l.I)(n, e),
                            null != p &&
                                (0, r.jsx)('div', {
                                    className: f.subtext,
                                    children: p
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: f.iconContainer,
                        children: (0, r.jsx)(d.FZ5, {
                            shape: d.XZJ.Shapes.BOX,
                            size: 20,
                            value: a,
                            disabled: m
                        })
                    })
                ]
            }
        )
    );
}
