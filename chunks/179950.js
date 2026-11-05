var a = l(477900),
    s = l(582128),
    n = l(224640),
    i = l(683071),
    r = l(430993),
    d = l(789645),
    c = l(534514),
    o = l(834730),
    u = l(331322),
    h = l(150934),
    f = l(696208),
    x = l(427262),
    g = l(10005),
    m = l(438732),
    j = l(834981),
    b = l(283900),
    k = l(665956),
    p = l(792996),
    C = l(815298);
l.d(
    e,
    {},
    {
        default: function (t) {
            let { currentUser: e, otherUser: l, transitionState: v, onClose: y } = t,
                S = s.useCallback(() => {
                    y();
                }, [y]),
                w = (0, m.A)(),
                A = x.Ay.useName(l),
                B = (0, j.Ld)(l.id),
                [E, N] = s.useState(!1),
                [D, F] = s.useState(!1),
                [H, L] = s.useState(!1),
                P = s.useCallback(() => {
                    (L(!0), N(!1), F(!1));
                }, []),
                { disconnectLinkRequest: W, isDisconnectLoading: X } = (0, g.A)({ onSuccess: S, onError: P }),
                _ = w ? p.intl.string(k.default["WH+Gba"]) : p.intl.format(k.default.F2lccv, { username: A }),
                z = w ? p.intl.format(k.default.Or6hgl, { username: A }) : p.intl.string(k.default.hOEHFn),
                G = w
                    ? p.intl.format(k.default.PlrZal, { username: A })
                    : p.intl.format(k.default.XyRW4c, { username: A }),
                I = w ? p.intl.string(k.default.PGQBnk) : p.intl.string(k.default.eiABQz),
                K = w ? p.intl.string(k.default["0ki7+P"]) : p.intl.string(k.default.sCbKs4);
            return (0, a.jsxs)(n.d, {
                transitionState: v,
                onClose: y,
                children: [
                    H && (0, a.jsx)(i.w, { type: "critical", message: p.intl.string(k.default.krIDdy), role: "alert" }),
                    (0, a.jsxs)(r.c, {
                        children: [
                            (0, a.jsxs)("div", {
                                className: C.wx,
                                children: [
                                    (0, a.jsx)(b.A, {
                                        currentUser: e,
                                        otherUser: l,
                                        children: (0, a.jsx)(d.XSmallIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: C.ut,
                                        }),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: C.R_,
                                        children: [
                                            (0, a.jsx)(c.D, {
                                                variant: "body-lg/semibold",
                                                children: p.intl.format(k.default.o0JXuK, { username: A }),
                                            }),
                                            (0, a.jsx)(o.E, {
                                                variant: "body-sm/normal",
                                                color: "text-muted",
                                                children: _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(u.B, {
                                gap: 32,
                                children: [
                                    (0, a.jsxs)(u.B, {
                                        gap: 16,
                                        children: [
                                            B && (0, a.jsx)(i.w, { type: "warning", message: z, role: "none" }),
                                            (0, a.jsx)(o.E, {
                                                variant: "body-sm/normal",
                                                color: "text-default",
                                                children: G,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(u.B, {
                                        gap: 16,
                                        children: [
                                            (0, a.jsx)(h.S, {
                                                checked: E,
                                                onChange: (t) => {
                                                    (N(t), L(!1));
                                                },
                                                label: I,
                                            }),
                                            (0, a.jsx)(h.S, {
                                                checked: D,
                                                onChange: (t) => {
                                                    (F(t), L(!1));
                                                },
                                                label: K,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(f.H, {
                        actionsFullWidth: !0,
                        actions: [
                            { variant: "secondary", text: p.intl.string(p.t["3ilveh"]), onClick: y, disabled: X },
                            {
                                variant: "critical-primary",
                                text: p.intl.string(k.default["c5L+sl"]),
                                onClick: function () {
                                    (L(!1), W(l.id));
                                },
                                disabled: !E || !D || X,
                                loading: X,
                            },
                        ],
                    }),
                ],
            });
        },
    },
);
