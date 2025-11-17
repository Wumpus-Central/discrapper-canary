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
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
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
            subtext: _,
            disabled: h,
            isFocused: g,
            menuItemProps: E,
            action: b,
            className: y,
            focusedClassName: O,
        } = e,
        { onInteraction: v } = i.useContext(c.p),
        I = i.useRef(null);
    i.useEffect(() => {
        g && (0, u.F)(I);
    }, [g]);
    let T = i.useCallback(
        (e) => {
            b(e), null == v || v({ type: c.U.CHECKBOX });
        },
        [b, v],
    );
    return (0, r.jsxs)(
        s.P3F,
        m(
            p(
                {
                    innerRef: I,
                    className: o()(f.item, f.checkboxContainer, f.labelContainer, d._[t], y, {
                        [f.disabled]: h,
                        [f.focused]: g,
                        [null != O ? O : ""]: g,
                    }),
                    onClick: h ? void 0 : T,
                },
                E,
            ),
            {
                "aria-checked": a,
                "aria-disabled": h,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.label,
                        children: [
                            (0, l.I)(n, e),
                            null != _ &&
                                (0, r.jsx)("div", {
                                    className: f.subtext,
                                    children: _,
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: f.iconContainer,
                        children: (0, r.jsx)(s.FZ5, {
                            checked: a,
                            disabled: h,
                            size: 20,
                        }),
                    }),
                ],
            },
        ),
    );
}
