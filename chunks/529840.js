s.d(t, { Z: () => d });
var r = s(255367);
s(73800);
var n = s(120356),
    a = s.n(n),
    i = s(481060),
    l = s(518950),
    c = s(675465);
function d(e) {
    var t;
    let { user: s, checked: n, onChange: d, disabled: o } = e,
        { avatarSrc: u, eventHandlers: h } = (0, l.Z)({
            userId: null == s ? void 0 : s.id,
            size: i.EFr.SIZE_32,
        }),
        m = null != (t = s.globalName) ? t : s.username;
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsxs)("div", {
                className: c.user,
                children: [
                    (0, r.jsx)(
                        i.qEK,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var s = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(s);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(s).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = s[t]),
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
                                className: a()({ [c.muted]: o }),
                                src: u,
                                "aria-label": m,
                                size: i.EFr.SIZE_32,
                            },
                            h,
                        ),
                    ),
                    (0, r.jsx)(i.Text, {
                        color: o ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: c.checkbox,
                children: (0, r.jsx)(i.XZJ, {
                    disabled: o,
                    value: n,
                    onChange: (e, t) => d(s, t),
                }),
            }),
        ],
    });
}
