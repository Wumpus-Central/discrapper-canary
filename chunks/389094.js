var i = n(477900),
    s = n(582128),
    l = n(284009),
    r = n.n(l),
    a = n(224640),
    c = n(683071),
    o = n(430993),
    d = n(789645),
    u = n(696208),
    h = n(10005),
    C = n(534654),
    x = n(208993),
    k = n(665956),
    p = n(792996),
    f = n(610746);
n.d(
    t,
    {},
    {
        default: function (e) {
            let { currentUser: t, otherUser: n, transitionState: l, onClose: g } = e,
                [j, b] = s.useState(!1),
                m = s.useCallback(() => {
                    b(!0);
                }, []),
                y = s.useCallback(() => {
                    g();
                }, [g]),
                A = (0, C.A)(),
                { declineLinkRequest: S, isDeclineLoading: L } = (0, h.A)({ onError: m, onSuccess: y });
            return (
                r()(A, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
                (0, i.jsxs)(a.d, {
                    transitionState: l,
                    onClose: g,
                    children: [
                        j &&
                            (0, i.jsx)(c.w, {
                                type: "critical",
                                message: p.intl.string(k.default.tJAUyn),
                                role: "alert",
                            }),
                        (0, i.jsxs)(o.c, {
                            children: [
                                (0, i.jsx)(x.A.Header, {
                                    currentUser: t,
                                    otherUser: n,
                                    header: p.intl.string(k.default.teIRCR),
                                    icon: (0, i.jsx)(d.XSmallIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: f.u,
                                    }),
                                }),
                                (0, i.jsx)(x.A.Content, {
                                    children: (0, i.jsx)(x.A.Notice, { notice: p.intl.string(k.default.LcM8BS) }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: g, disabled: L },
                                {
                                    variant: "critical-primary",
                                    text: p.intl.string(k.default.dKxFcn),
                                    onClick: function () {
                                        (b(!1), S(n.id));
                                    },
                                    disabled: L,
                                    loading: L,
                                },
                            ],
                        }),
                    ],
                })
            );
        },
    },
);
