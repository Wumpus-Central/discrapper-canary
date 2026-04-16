r.d(t, { default: () => _ });
var n = r(627968),
    s = r(64700),
    a = r(284009),
    l = r.n(a),
    i = r(397927),
    d = r(427262),
    o = r(10005),
    c = r(534654),
    x = r(208993),
    u = r(299628),
    h = r(602339),
    m = r(985018),
    j = r(605409);
let _ = (e) => {
    let { currentUser: t, otherUser: r, transitionState: a, onClose: _ } = e,
        f = s.useCallback(() => {
            _();
        }, [_]),
        g = (0, c.A)(),
        [p, b] = s.useState(!1),
        C = s.useCallback(() => {
            b(!0);
        }, []),
        { acceptLinkRequest: v, isAcceptLoading: w } = (0, o.A)({ onError: C, onSuccess: f });
    return (
        l()(g, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, n.jsxs)(i.dWK, {
            transitionState: a,
            onClose: _,
            "aria-label": m.intl.string(h.default.rlNJwZ),
            children: [
                p && (0, n.jsx)(i.wx6, { type: "critical", children: m.intl.string(h.default.pegSM5) }),
                (0, n.jsxs)(i.cwr, {
                    children: [
                        (0, n.jsx)(x.A.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: m.intl.string(h.default.rlNJwZ),
                            icon: (0, n.jsx)(i.qYV, { size: "md", color: "currentColor", className: j.wP }),
                        }),
                        (0, n.jsxs)(x.A.Content, {
                            children: [
                                (0, n.jsx)(u.A, { inModal: !0 }),
                                (0, n.jsx)(i.Text, {
                                    className: j.ed,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: m.intl.format(h.default.snlFqR, { username: d.Ay.getName(r) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(i.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: _, disabled: w },
                        {
                            variant: "primary",
                            text: m.intl.string(h.default["wI/jo3"]),
                            onClick: () => {
                                b(!1), v(r.id);
                            },
                            disabled: w,
                            loading: w,
                        },
                    ],
                }),
            ],
        })
    );
};
