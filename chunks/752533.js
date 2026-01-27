n.d(t, {
    Bs: () => h,
    MT: () => A,
    U4: () => g,
    XN: () => b,
    YF: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(827734),
    o = n(397927),
    c = n(854627),
    d = n(427262),
    u = n(519412),
    _ = n(985018),
    p = n(75717);
let m = (e) => {
        let { user: t, isOwnUser: n, label: l, removeButton: a, isFaded: u } = e,
            { avatarSrc: m, eventHandlers: g } = (0, c.A)({
                userId: null == t ? void 0 : t.id,
                size: o._3J.SIZE_24,
            }),
            A = (0, d.$3)(t),
            [f, h] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: s()(p.kL, {
                [p.RE]: null != a,
            }),
            onMouseEnter: () => h(!0),
            onMouseLeave: () => h(!1),
            children: [
                (0, r.jsxs)("div", {
                    className: s()(p.TT, {
                        [p.zj]: u,
                    }),
                    children: [
                        (0, r.jsx)(
                            o.euF,
                            (function (e) {
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
                                            var r;
                                            (r = n[t]),
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
                                    className: p.my,
                                    src: m,
                                    "aria-label": A,
                                    size: o._3J.SIZE_24,
                                },
                                g,
                            ),
                        ),
                        (0, r.jsxs)(o.Text, {
                            className: p.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [A, !!n && " (".concat(_.intl.string(_.t.LuZzxn), ")")],
                        }),
                        null != l &&
                            (0, r.jsxs)(o.Text, {
                                className: p.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [
                                    (0, r.jsx)("span", {
                                        className: p.me,
                                        children: "\xb7",
                                    }),
                                    l,
                                ],
                            }),
                    ],
                }),
                null != a &&
                    f &&
                    (0, r.jsx)("div", {
                        className: p.dM,
                        children: (0, r.jsx)(o.QWc, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: a.label,
                            onClick: a.onRemove,
                        }),
                    }),
            ],
        });
    },
    g = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, r.jsx)(m, {
            user: t,
            isOwnUser: n,
            label: _.intl.string(u.default.vc2xys),
        });
    },
    A = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, r.jsx)(m, {
            user: t,
            label: _.intl.string(u.default.mnt50A),
            removeButton: {
                onRemove: n,
                label: _.intl.string(_.t.N86XcP),
            },
        });
    },
    f = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, r.jsx)(m, {
            user: t,
            isOwnUser: n,
            label: _.intl.string(u.default.mnt50A),
        });
    },
    h = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, r.jsx)(m, {
            user: t,
            label: _.intl.string(u.default["1RH5t9"]),
            isFaded: !0,
            removeButton: {
                onRemove: n,
                label: _.intl.string(u.default["2blqtw"]),
            },
        });
    },
    b = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [l, c] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: s()(p.kL, {
                [p.RE]: n,
            }),
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: [
                (0, r.jsxs)("div", {
                    className: p.TT,
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(p.vG, p.my),
                            children: (0, r.jsx)(o.nys, {
                                size: "xxs",
                                color: a.A.colors.ICON_SUBTLE,
                            }),
                        }),
                        (0, r.jsx)(o.Text, {
                            className: p.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: _.intl.string(u.default["/x7DVG"]),
                        }),
                    ],
                }),
                l &&
                    n &&
                    (0, r.jsx)("div", {
                        className: p.dM,
                        children: (0, r.jsx)(o.QWc, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: _.intl.string(u.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
