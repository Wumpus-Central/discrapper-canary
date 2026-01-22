r.d(t, { default: () => j }), r(896048);
var n = r(627968),
    l = r(64700),
    a = r(284009),
    s = r.n(a),
    o = r(397927),
    c = r(427262),
    i = r(10005),
    d = r(208993),
    u = r(299628),
    p = r(842130),
    f = r(985018),
    b = r(319530);
let j = (e) => {
    let { currentUser: t, otherUser: r, transitionState: a, onClose: j } = e,
        x = l.useCallback(() => {
            j();
        }, [j]),
        y = t.nsfwAllowed,
        [m, O] = l.useState(!1),
        h = l.useCallback(() => {
            O(!0);
        }, []),
        { acceptLinkRequest: g, isAcceptLoading: w } = (0, i.A)({
            onError: h,
            onSuccess: x,
        });
    return (
        s()(!y, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, n.jsxs)(o.dWK, {
            transitionState: a,
            onClose: j,
            "aria-label": f.intl.string(p.default.rlNJwZ),
            children: [
                m &&
                    (0, n.jsx)(o.wx6, {
                        type: "critical",
                        children: f.intl.string(p.default.pegSM5),
                    }),
                (0, n.jsxs)(o.cwr, {
                    children: [
                        (0, n.jsx)(d.A.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: f.intl.string(p.default.rlNJwZ),
                            icon: (0, n.jsx)(o.qYV, {
                                size: "md",
                                color: "currentColor",
                                className: b.wP,
                            }),
                        }),
                        (0, n.jsxs)(d.A.Content, {
                            children: [
                                (0, n.jsx)(u.A, { inModal: !0 }),
                                (0, n.jsx)(o.Text, {
                                    className: b.ed,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: f.intl.format(p.default.snlFqR, { username: c.Ay.getName(r) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(o.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: f.intl.string(f.t["ETE/oC"]),
                            onClick: j,
                            disabled: w,
                        },
                        {
                            variant: "primary",
                            text: f.intl.string(p.default["wI/jo3"]),
                            onClick: () => {
                                O(!1), g(r.id);
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
