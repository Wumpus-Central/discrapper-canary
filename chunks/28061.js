r.d(t, { Z: () => d });
var a = r(951288);
r(647438);
var s = r(120356),
    n = r.n(s),
    i = r(481060),
    l = r(518950),
    c = r(871952);
function d(e) {
    var t;
    let { user: r, checked: s, onChange: d, disabled: o } = e,
        { avatarSrc: u, eventHandlers: m } = (0, l.Z)({
            userId: null == r ? void 0 : r.id,
            size: i.EFr.SIZE_32,
        }),
        h = null != (t = r.globalName) ? t : r.username;
    return (0, a.jsxs)("div", {
        className: c.container,
        children: [
            (0, a.jsx)("div", {
                className: c.userAvatar,
                children: (0, a.jsx)(
                    i.qEK,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {
                            className: n()({ [c.muted]: o }),
                            src: u,
                            "aria-label": h,
                            size: i.EFr.SIZE_32,
                        },
                        m,
                    ),
                ),
            }),
            (0, a.jsxs)("div", {
                className: c.usernameContainer,
                children: [
                    (0, a.jsx)(i.Text, {
                        className: c.userName,
                        color: o ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: r.username,
                    }),
                    (0, a.jsx)(i.Text, {
                        className: c.userName,
                        color: o ? "text-muted" : "text-secondary",
                        variant: "text-xs/normal",
                        children: "@".concat(h),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: c.checkbox,
                children: (0, a.jsx)(i.XZJ, {
                    disabled: o,
                    value: s,
                    onChange: (e, t) => d(r, t),
                }),
            }),
        ],
    });
}
