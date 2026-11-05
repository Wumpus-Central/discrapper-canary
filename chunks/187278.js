var a = t(477900),
    i = t(582128),
    l = t(284009),
    r = t.n(l),
    s = t(224640),
    c = t(683071),
    d = t(430993),
    o = t(789645),
    u = t(696208),
    h = t(10005),
    C = t(438732),
    k = t(208993),
    p = t(665956),
    b = t(792996),
    f = t(96954);
t.d(
    n,
    {},
    {
        default: function (e) {
            let { currentUser: n, otherUser: t, transitionState: l, onClose: g } = e,
                [x, m] = i.useState(!1),
                y = i.useCallback(() => {
                    m(!0);
                }, []),
                j = i.useCallback(() => {
                    g();
                }, [g]),
                A = (0, C.A)(),
                { cancelLinkRequest: S, isCancelLoading: v } = (0, h.A)({ onError: y, onSuccess: j });
            return (
                r()(A, "FamilyCenterCancelLinkModal should only be rendered for parents."),
                (0, a.jsxs)(s.d, {
                    transitionState: l,
                    onClose: g,
                    children: [
                        x &&
                            (0, a.jsx)(c.w, {
                                type: "critical",
                                message: b.intl.string(p.default["6gyAQZ"]),
                                role: "alert",
                            }),
                        (0, a.jsx)(d.c, {
                            children: (0, a.jsx)(k.A.Header, {
                                currentUser: n,
                                otherUser: t,
                                header: b.intl.string(p.default.HynllX),
                                icon: (0, a.jsx)(o.XSmallIcon, { size: "md", color: "currentColor", className: f.u }),
                            }),
                        }),
                        (0, a.jsx)(u.H, {
                            actionsFullWidth: !0,
                            actions: [
                                {
                                    variant: "secondary",
                                    text: b.intl.string(p.default.czincX),
                                    onClick: g,
                                    disabled: v,
                                },
                                {
                                    variant: "critical-primary",
                                    text: b.intl.string(p.default.mK40bk),
                                    onClick: function () {
                                        (m(!1), S(t.id));
                                    },
                                    disabled: v || x,
                                    loading: v,
                                },
                            ],
                        }),
                    ],
                })
            );
        },
    },
);
