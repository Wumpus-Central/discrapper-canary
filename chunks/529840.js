s.d(t, { Z: () => c });
var n = s(255367);
s(73800);
var r = s(120356),
    a = s.n(r),
    i = s(481060),
    l = s(518950),
    d = s(675465);
function c(e) {
    var t;
    let { user: s, checked: r, onChange: c, disabled: o } = e,
        { avatarSrc: u, eventHandlers: h } = (0, l.Z)({
            userId: null == s ? void 0 : s.id,
            size: i.EFr.SIZE_32,
        }),
        m = null != (t = s.globalName) ? t : s.username;
    return (0, n.jsxs)("div", {
        className: d.container,
        children: [
            (0, n.jsxs)("div", {
                className: d.user,
                children: [
                    (0, n.jsx)(
                        i.qEK,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var s = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(s);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(s).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = s[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })(
                            {
                                className: a()({ [d.muted]: o }),
                                src: u,
                                "aria-label": m,
                                size: i.EFr.SIZE_32,
                            },
                            h,
                        ),
                    ),
                    (0, n.jsx)(i.Text, {
                        color: o ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: m,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: d.checkbox,
                children: (0, n.jsx)(i.XZJ, {
                    disabled: o,
                    value: r,
                    onChange: (e, t) => c(s, t),
                }),
            }),
        ],
    });
}
