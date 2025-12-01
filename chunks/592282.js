n.d(t, { S: () => g });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(761224),
    c = n(670596),
    u = n(743236),
    d = n(939350),
    f = n(334405);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
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
function g(e) {
    let {
            color: t = "default",
            label: n,
            checked: a,
            subtext: p,
            disabled: m,
            isFocused: g,
            menuItemProps: E,
            action: b,
            className: y,
            focusedClassName: O,
        } = e,
        { onInteraction: v } = i.useContext(c.p),
        S = i.useRef(null);
    i.useEffect(() => {
        g && (0, u.F)(S);
    }, [g]);
    let I = i.useCallback(
        (e) => {
            b(e), null == v || v({ type: c.U.CHECKBOX });
        },
        [b, v],
    );
    return (0, r.jsxs)(
        s.P3F,
        h(
            _(
                {
                    innerRef: S,
                    className: o()(f.item, f.checkboxContainer, f.labelContainer, d._e[t], y, {
                        [f.disabled]: m,
                        [f.focused]: g,
                        [null != O ? O : ""]: g,
                    }),
                    onClick: m ? void 0 : I,
                },
                E,
            ),
            {
                "aria-checked": a,
                "aria-disabled": m,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.label,
                        children: [
                            (0, l.I)(n, e),
                            null != p &&
                                (0, r.jsx)("div", {
                                    className: f.subtext,
                                    children: p,
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: f.iconContainer,
                        children: (0, r.jsx)(s.FZ5, {
                            checked: a,
                            disabled: m,
                            size: 20,
                        }),
                    }),
                ],
            },
        ),
    );
}
