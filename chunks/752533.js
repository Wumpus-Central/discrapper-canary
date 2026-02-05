n.d(t, { Bs: () => p, MT: () => E, U4: () => g, XN: () => C, YF: () => h });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(827734),
    o = n(397927),
    c = n(854627),
    d = n(427262),
    u = n(519412),
    _ = n(985018),
    m = n(75717);
let A = (e) => {
        let { user: t, isOwnUser: n, label: r, removeButton: l, isFaded: u } = e,
            { avatarSrc: A, eventHandlers: g } = (0, c.A)({ userId: t?.id, size: o._3J.SIZE_24 }),
            E = (0, d.$3)(t),
            [h, p] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: a()(m.kL, { [m.RE]: null != l }),
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: a()(m.TT, { [m.zj]: u }),
                    children: [
                        (0, i.jsx)(o.euF, { className: m.my, src: A, "aria-label": E, size: o._3J.SIZE_24, ...g }),
                        (0, i.jsxs)(o.Text, {
                            className: m.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [E, !!n && ` (${_.intl.string(_.t.LuZzxn)})`],
                        }),
                        null != r &&
                            (0, i.jsxs)(o.Text, {
                                className: m.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, i.jsx)("span", { className: m.me, children: "\xb7" }), r],
                            }),
                    ],
                }),
                null != l &&
                    h &&
                    (0, i.jsx)("div", {
                        className: m.dM,
                        children: (0, i.jsx)(o.QWc, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: l.label,
                            onClick: l.onRemove,
                        }),
                    }),
            ],
        });
    },
    g = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(A, { user: t, isOwnUser: n, label: _.intl.string(u.default.vc2xys) });
    },
    E = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(A, {
            user: t,
            label: _.intl.string(u.default.mnt50A),
            removeButton: { onRemove: n, label: _.intl.string(_.t.N86XcP) },
        });
    },
    h = (e) => {
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
    C = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [r, c] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: a()(m.kL, { [m.RE]: n }),
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: m.TT,
                    children: [
                        (0, i.jsx)("div", {
                            className: a()(m.vG, m.my),
                            children: (0, i.jsx)(o.nys, { size: "xxs", color: l.A.colors.ICON_SUBTLE }),
                        }),
                        (0, i.jsx)(o.Text, {
                            className: m.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: _.intl.string(u.default["/x7DVG"]),
                        }),
                    ],
                }),
                r &&
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
