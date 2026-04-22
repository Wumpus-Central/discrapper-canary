r.d(t, { default: () => C });
var n = r(627968),
    l = r(64700),
    s = r(284009),
    a = r.n(s),
    i = r(224640),
    d = r(683071),
    o = r(430993),
    c = r(173936),
    x = r(834730),
    u = r(696208),
    h = r(427262),
    m = r(10005),
    j = r(534654),
    _ = r(208993),
    f = r(299628),
    p = r(602339),
    g = r(985018),
    b = r(605409);
let C = (e) => {
    let { currentUser: t, otherUser: r, transitionState: s, onClose: C } = e,
        v = l.useCallback(() => {
            C();
        }, [C]),
        N = (0, j.A)(),
        [w, A] = l.useState(!1),
        k = l.useCallback(() => {
            A(!0);
        }, []),
        { acceptLinkRequest: y, isAcceptLoading: E } = (0, m.A)({ onError: k, onSuccess: v });
    return (
        a()(N, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, n.jsxs)(i.d, {
            transitionState: s,
            onClose: C,
            "aria-label": g.intl.string(p.default.rlNJwZ),
            children: [
                w && (0, n.jsx)(d.w, { type: "critical", children: g.intl.string(p.default.pegSM5) }),
                (0, n.jsxs)(o.c, {
                    children: [
                        (0, n.jsx)(_.A.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: g.intl.string(p.default.rlNJwZ),
                            icon: (0, n.jsx)(c.q, { size: "md", color: "currentColor", className: b.wP }),
                        }),
                        (0, n.jsxs)(_.A.Content, {
                            children: [
                                (0, n.jsx)(f.A, { inModal: !0 }),
                                (0, n.jsx)(x.E, {
                                    className: b.ed,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: g.intl.format(p.default.snlFqR, { username: h.Ay.getName(r) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(u.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: C, disabled: E },
                        {
                            variant: "primary",
                            text: g.intl.string(p.default["wI/jo3"]),
                            onClick: () => {
                                A(!1), y(r.id);
                            },
                            disabled: E,
                            loading: E,
                        },
                    ],
                }),
            ],
        })
    );
};
