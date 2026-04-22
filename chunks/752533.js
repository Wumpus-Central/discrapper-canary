n.d(t, { Bs: () => f, MT: () => T, U4: () => E, XN: () => b, YF: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(827734),
    o = n(778712),
    d = n(97808),
    u = n(834730),
    c = n(123292),
    g = n(950305),
    m = n(854627),
    _ = n(427262),
    A = n(466919),
    h = n(985018),
    p = n(339446);
let x = (e) => {
        let { user: t, isOwnUser: n, label: l, removeButton: r, isFaded: g } = e,
            { avatarSrc: A, eventHandlers: x } = (0, m.A)({ userId: t?.id, size: o._3.SIZE_24 }),
            E = (0, _.$3)(t),
            [T, S] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: a()(p.kL, { [p.RE]: null != r }),
            onMouseEnter: () => S(!0),
            onMouseLeave: () => S(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: a()(p.TT, { [p.zj]: g }),
                    children: [
                        (0, i.jsx)(d.eu, { className: p.my, src: A, "aria-label": E, size: o._3.SIZE_24, ...x }),
                        (0, i.jsxs)(u.E, {
                            className: p.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [E, !!n && ` (${h.intl.string(h.t.LuZzxn)})`],
                        }),
                        null != l &&
                            (0, i.jsxs)(u.E, {
                                className: p.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, i.jsx)("span", { className: p.me, children: "\xb7" }), l],
                            }),
                    ],
                }),
                null != r &&
                    T &&
                    (0, i.jsx)("div", {
                        className: p.dM,
                        children: (0, i.jsx)(c.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: r.label,
                            onClick: r.onRemove,
                        }),
                    }),
            ],
        });
    },
    E = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(x, { user: t, isOwnUser: n, label: h.intl.string(A.default.vc2xys) });
    },
    T = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(x, {
            user: t,
            label: h.intl.string(A.default.mnt50A),
            removeButton: { onRemove: n, label: h.intl.string(h.t.N86XcP) },
        });
    },
    S = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(x, { user: t, isOwnUser: n, label: h.intl.string(A.default.mnt50A) });
    },
    f = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(x, {
            user: t,
            label: h.intl.string(A.default["1RH5t9"]),
            isFaded: !0,
            removeButton: { onRemove: n, label: h.intl.string(A.default["2blqtw"]) },
        });
    },
    b = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [l, o] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: a()(p.kL, { [p.RE]: n }),
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: p.TT,
                    children: [
                        (0, i.jsx)("div", {
                            className: a()(p.vG, p.my),
                            children: (0, i.jsx)(g.n, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                        }),
                        (0, i.jsx)(u.E, {
                            className: p.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: h.intl.string(A.default["/x7DVG"]),
                        }),
                    ],
                }),
                l &&
                    n &&
                    (0, i.jsx)("div", {
                        className: p.dM,
                        children: (0, i.jsx)(c.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: h.intl.string(A.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
