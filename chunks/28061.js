r.d(t, { Z: () => c });
var a = r(255367);
r(73800);
var i = r(120356),
    n = r.n(i),
    s = r(481060),
    l = r(518950),
    o = r(427399);
function c(e) {
    var t;
    let { user: r, checked: i, onChange: c, disabled: d } = e,
        { avatarSrc: u, eventHandlers: m } = (0, l.Z)({
            userId: null == r ? void 0 : r.id,
            size: s.EFr.SIZE_32,
        }),
        f = null != (t = r.globalName) ? t : r.username;
    return (0, a.jsxs)("div", {
        className: o.container,
        children: [
            (0, a.jsx)("div", {
                className: o.userAvatar,
                children: (0, a.jsx)(
                    s.qEK,
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
                            className: n()({ [o.muted]: d }),
                            src: u,
                            "aria-label": f,
                            size: s.EFr.SIZE_32,
                        },
                        m,
                    ),
                ),
            }),
            (0, a.jsxs)("div", {
                className: o.usernameContainer,
                children: [
                    (0, a.jsx)(s.Text, {
                        className: o.userName,
                        color: d ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: r.username,
                    }),
                    (0, a.jsx)(s.Text, {
                        className: o.userName,
                        color: d ? "text-muted" : "text-secondary",
                        variant: "text-xs/normal",
                        children: "@".concat(f),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: o.checkbox,
                children: (0, a.jsx)(s.XZJ, {
                    disabled: d,
                    value: i,
                    onChange: (e, t) => c(r, t),
                }),
            }),
        ],
    });
}
