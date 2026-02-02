r.d(t, {
    default: () => f,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    o = r(284009),
    c = r.n(o),
    s = r(397927),
    a = r(10005),
    i = r(438732),
    d = r(208993),
    u = r(842130),
    p = r(985018),
    b = r(528427);
let f = (e) => {
    let { currentUser: t, otherUser: r, transitionState: o, onClose: f } = e,
        [y, j] = l.useState(!1),
        O = l.useCallback(() => {
            j(!0);
        }, []),
        h = l.useCallback(() => {
            f();
        }, [f]),
        m = (0, i.A)(),
        { cancelLinkRequest: x, isCancelLoading: g } = (0, a.A)({
            onError: O,
            onSuccess: h,
        });
    return (
        c()(m, "FamilyCenterCancelLinkModal should only be rendered for parents."),
        (0, n.jsxs)(s.dWK, {
            transitionState: o,
            onClose: f,
            children: [
                y &&
                    (0, n.jsx)(s.wx6, {
                        type: "critical",
                        children: p.intl.string(u.default["6gyAQZ"]),
                    }),
                (0, n.jsx)(s.cwr, {
                    children: (0, n.jsx)(d.A.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: p.intl.string(u.default.HynllX),
                        icon: (0, n.jsx)(s.PGe, {
                            size: "md",
                            color: "currentColor",
                            className: b.u,
                        }),
                    }),
                }),
                (0, n.jsx)(s.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: p.intl.string(u.default.czincX),
                            onClick: f,
                            disabled: g,
                        },
                        {
                            variant: "critical-primary",
                            text: p.intl.string(u.default.mK40bk),
                            onClick: () => {
                                j(!1), x(r.id);
                            },
                            disabled: g || y,
                            loading: g,
                        },
                    ],
                }),
            ],
        })
    );
};
