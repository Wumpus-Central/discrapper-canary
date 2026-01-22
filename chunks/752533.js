n.d(t, {
    Bs: () => y,
    MT: () => E,
    U4: () => g,
    XN: () => O,
    YF: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    c = n(854627),
    u = n(427262),
    d = n(519412),
    f = n(985018),
    p = n(75717);

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

function h(e) {
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
let m = (e) => {
        let { user: t, isOwnUser: n, label: a, removeButton: o, isFaded: d } = e,
            { avatarSrc: _, eventHandlers: m } = (0, c.A)({
                userId: null == t ? void 0 : t.id,
                size: l._3J.SIZE_24,
            }),
            g = (0, u.$3)(t),
            [E, b] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: s()(p.kL, {
                [p.RE]: null != o,
            }),
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            children: [
                (0, r.jsxs)("div", {
                    className: s()(p.TT, {
                        [p.zj]: d,
                    }),
                    children: [
                        (0, r.jsx)(
                            l.euF,
                            h(
                                {
                                    className: p.my,
                                    src: _,
                                    "aria-label": g,
                                    size: l._3J.SIZE_24,
                                },
                                m,
                            ),
                        ),
                        (0, r.jsxs)(l.Text, {
                            className: p.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [g, !!n && " (".concat(f.intl.string(f.t.LuZzxn), ")")],
                        }),
                        null != a &&
                            (0, r.jsxs)(l.Text, {
                                className: p.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [
                                    (0, r.jsx)("span", {
                                        className: p.me,
                                        children: "\xb7",
                                    }),
                                    a,
                                ],
                            }),
                    ],
                }),
                null != o &&
                    E &&
                    (0, r.jsx)("div", {
                        className: p.dM,
                        children: (0, r.jsx)(l.QWc, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: o.label,
                            onClick: o.onRemove,
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
            label: f.intl.string(d.default.vc2xys),
        });
    },
    E = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, r.jsx)(m, {
            user: t,
            label: f.intl.string(d.default.mnt50A),
            removeButton: {
                onRemove: n,
                label: f.intl.string(f.t.N86XcP),
            },
        });
    },
    b = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, r.jsx)(m, {
            user: t,
            isOwnUser: n,
            label: f.intl.string(d.default.mnt50A),
        });
    },
    y = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, r.jsx)(m, {
            user: t,
            label: f.intl.string(d.default["1RH5t9"]),
            isFaded: !0,
            removeButton: {
                onRemove: n,
                label: f.intl.string(d.default["2blqtw"]),
            },
        });
    },
    O = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [a, c] = i.useState(!1);
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
                            children: (0, r.jsx)(l.nys, {
                                size: "xxs",
                                color: o.A.colors.ICON_SUBTLE,
                            }),
                        }),
                        (0, r.jsx)(l.Text, {
                            className: p.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: f.intl.string(d.default["/x7DVG"]),
                        }),
                    ],
                }),
                a &&
                    n &&
                    (0, r.jsx)("div", {
                        className: p.dM,
                        children: (0, r.jsx)(l.QWc, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: f.intl.string(d.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
