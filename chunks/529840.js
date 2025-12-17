a.d(t, { Z: () => o });
var r = a(54381);
a(473749);
var i = a(120356),
    s = a.n(i),
    n = a(481060),
    l = a(518950),
    d = a(123037);
function o(e) {
    var t;
    let { user: a, checked: i, onChange: o, disabled: C } = e,
        { avatarSrc: c, eventHandlers: x } = (0, l.Z)({
            userId: null == a ? void 0 : a.id,
            size: n.EFr.SIZE_32,
        }),
        p = null != (t = a.globalName) ? t : a.username;
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsxs)("div", {
                className: d.user,
                children: [
                    (0, r.jsx)(
                        n.qEK,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(a);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(a).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = a[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                className: s()({ [d.muted]: C }),
                                src: c,
                                "aria-label": p,
                                size: n.EFr.SIZE_32,
                            },
                            x,
                        ),
                    ),
                    (0, r.jsx)(n.Text, {
                        color: C ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: p,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.checkbox,
                children: (0, r.jsx)(n.Checkbox, {
                    disabled: C,
                    checked: i,
                    onChange: (e) => o(a, e),
                    label: "",
                }),
            }),
        ],
    });
}
