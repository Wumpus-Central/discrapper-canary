n.d(t, { Bs: () => p, MT: () => h, U4: () => A, XN: () => T, YF: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(827734),
    o = n(397927),
    d = n(854627),
    c = n(427262),
    u = n(519412),
    _ = n(985018),
    m = n(75717);
let g = (e) => {
        let { user: t, isOwnUser: n, label: l, removeButton: a, isFaded: u } = e,
            { avatarSrc: g, eventHandlers: A } = (0, d.A)({ userId: t?.id, size: o._3J.SIZE_24 }),
            h = (0, c.$3)(t),
            [x, p] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: r()(m.kL, { [m.RE]: null != a }),
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(m.TT, { [m.zj]: u }),
                    children: [
                        (0, i.jsx)(o.euF, { className: m.my, src: g, "aria-label": h, size: o._3J.SIZE_24, ...A }),
                        (0, i.jsxs)(o.Text, {
                            className: m.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [h, !!n && ` (${_.intl.string(_.t.LuZzxn)})`],
                        }),
                        null != l &&
                            (0, i.jsxs)(o.Text, {
                                className: m.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, i.jsx)("span", { className: m.me, children: "\xb7" }), l],
                            }),
                    ],
                }),
                null != a &&
                    x &&
                    (0, i.jsx)("div", {
                        className: m.dM,
                        children: (0, i.jsx)(o.QWc, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: a.label,
                            onClick: a.onRemove,
                        }),
                    }),
            ],
        });
    },
    A = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(g, { user: t, isOwnUser: n, label: _.intl.string(u.default.vc2xys) });
    },
    h = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(g, {
            user: t,
            label: _.intl.string(u.default.mnt50A),
            removeButton: { onRemove: n, label: _.intl.string(_.t.N86XcP) },
        });
    },
    x = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(g, { user: t, isOwnUser: n, label: _.intl.string(u.default.mnt50A) });
    },
    p = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(g, {
            user: t,
            label: _.intl.string(u.default["1RH5t9"]),
            isFaded: !0,
            removeButton: { onRemove: n, label: _.intl.string(u.default["2blqtw"]) },
        });
    },
    T = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [l, d] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: r()(m.kL, { [m.RE]: n }),
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: m.TT,
                    children: [
                        (0, i.jsx)("div", {
                            className: r()(m.vG, m.my),
                            children: (0, i.jsx)(o.nys, { size: "xxs", color: a.A.colors.ICON_SUBTLE }),
                        }),
                        (0, i.jsx)(o.Text, {
                            className: m.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: _.intl.string(u.default["/x7DVG"]),
                        }),
                    ],
                }),
                l &&
                    n &&
                    (0, i.jsx)("div", {
                        className: m.dM,
                        children: (0, i.jsx)(o.QWc, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: _.intl.string(u.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
