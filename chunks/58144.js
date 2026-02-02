r.d(t, {
    default: () => x,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    o = r(284009),
    a = r.n(o),
    s = r(397927),
    i = r(427262),
    c = r(10005),
    d = r(534654),
    u = r(208993),
    p = r(299628),
    f = r(842130),
    b = r(985018),
    j = r(319530);
let x = (e) => {
    let { currentUser: t, otherUser: r, transitionState: o, onClose: x } = e,
        y = l.useCallback(() => {
            x();
        }, [x]),
        m = (0, d.A)(),
        [h, O] = l.useState(!1),
        g = l.useCallback(() => {
            O(!0);
        }, []),
        { acceptLinkRequest: w, isAcceptLoading: v } = (0, c.A)({
            onError: g,
            onSuccess: y,
        });
    return (
        a()(m, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, n.jsxs)(s.dWK, {
            transitionState: o,
            onClose: x,
            "aria-label": b.intl.string(f.default.rlNJwZ),
            children: [
                h &&
                    (0, n.jsx)(s.wx6, {
                        type: "critical",
                        children: b.intl.string(f.default.pegSM5),
                    }),
                (0, n.jsxs)(s.cwr, {
                    children: [
                        (0, n.jsx)(u.A.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: b.intl.string(f.default.rlNJwZ),
                            icon: (0, n.jsx)(s.qYV, {
                                size: "md",
                                color: "currentColor",
                                className: j.wP,
                            }),
                        }),
                        (0, n.jsxs)(u.A.Content, {
                            children: [
                                (0, n.jsx)(p.A, {
                                    inModal: !0,
                                }),
                                (0, n.jsx)(s.Text, {
                                    className: j.ed,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: b.intl.format(f.default.snlFqR, {
                                        username: i.Ay.getName(r),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(s.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: b.intl.string(b.t["ETE/oC"]),
                            onClick: x,
                            disabled: v,
                        },
                        {
                            variant: "primary",
                            text: b.intl.string(f.default["wI/jo3"]),
                            onClick: () => {
                                O(!1), w(r.id);
                            },
                            disabled: v,
                            loading: v,
                        },
                    ],
                }),
            ],
        })
    );
};
