n.d(t, { Bs: () => p, MT: () => h, U4: () => g, XN: () => E, YF: () => x });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(827734),
    o = n(397927),
    c = n(854627),
    d = n(427262),
    u = n(518582),
    _ = n(985018),
    m = n(807323);
let A = (e) => {
        let { user: t, isOwnUser: n, label: a, removeButton: r, isFaded: u } = e,
            { avatarSrc: A, eventHandlers: g } = (0, c.A)({ userId: t?.id, size: o._3J.SIZE_24 }),
            h = (0, d.$3)(t),
            [x, p] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: l()(m.kL, { [m.RE]: null != r }),
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: l()(m.TT, { [m.zj]: u }),
                    children: [
                        (0, i.jsx)(o.euF, { className: m.my, src: A, "aria-label": h, size: o._3J.SIZE_24, ...g }),
                        (0, i.jsxs)(o.Text, {
                            className: m.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [h, !!n && ` (${_.intl.string(_.t.LuZzxn)})`],
                        }),
                        null != a &&
                            (0, i.jsxs)(o.Text, {
                                className: m.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, i.jsx)("span", { className: m.me, children: "\xb7" }), a],
                            }),
                    ],
                }),
                null != r &&
                    x &&
                    (0, i.jsx)("div", {
                        className: m.dM,
                        children: (0, i.jsx)(o.QWc, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: r.label,
                            onClick: r.onRemove,
                        }),
                    }),
            ],
        });
    },
    g = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(A, { user: t, isOwnUser: n, label: _.intl.string(u.default.vc2xys) });
    },
    h = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(A, {
            user: t,
            label: _.intl.string(u.default.mnt50A),
            removeButton: { onRemove: n, label: _.intl.string(_.t.N86XcP) },
        });
    },
    x = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(A, { user: t, isOwnUser: n, label: _.intl.string(u.default.mnt50A) });
    },
    p = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(A, {
            user: t,
            label: _.intl.string(u.default["1RH5t9"]),
            isFaded: !0,
            removeButton: { onRemove: n, label: _.intl.string(u.default["2blqtw"]) },
        });
    },
    E = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [a, c] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: l()(m.kL, { [m.RE]: n }),
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: m.TT,
                    children: [
                        (0, i.jsx)("div", {
                            className: l()(m.vG, m.my),
                            children: (0, i.jsx)(o.nys, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                        }),
                        (0, i.jsx)(o.Text, {
                            className: m.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: _.intl.string(u.default["/x7DVG"]),
                        }),
                    ],
                }),
                a &&
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
