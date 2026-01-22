r.d(t, { default: () => b }), r(896048);
var n = r(627968),
    l = r(64700),
    c = r(284009),
    a = r.n(c),
    o = r(397927),
    s = r(10005),
    i = r(208993),
    d = r(842130),
    u = r(985018),
    p = r(528427);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: c, onClose: b } = e,
        [f, y] = l.useState(!1),
        j = l.useCallback(() => {
            y(!0);
        }, []),
        O = l.useCallback(() => {
            b();
        }, [b]),
        m = t.nsfwAllowed,
        { cancelLinkRequest: x, isCancelLoading: h } = (0, s.A)({
            onError: j,
            onSuccess: O,
        });
    return (
        a()(m, "FamilyCenterDeclineLinkModal should only be rendered for parents."),
        (0, n.jsxs)(o.dWK, {
            transitionState: c,
            onClose: b,
            children: [
                f &&
                    (0, n.jsx)(o.wx6, {
                        type: "critical",
                        children: u.intl.string(d.default["6gyAQZ"]),
                    }),
                (0, n.jsx)(o.cwr, {
                    children: (0, n.jsx)(i.A.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: u.intl.string(d.default.HynllX),
                        icon: (0, n.jsx)(o.PGe, {
                            size: "md",
                            color: "currentColor",
                            className: p.u,
                        }),
                    }),
                }),
                (0, n.jsx)(o.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: u.intl.string(d.default.czincX),
                            onClick: b,
                            disabled: h,
                        },
                        {
                            variant: "critical-primary",
                            text: u.intl.string(d.default.mK40bk),
                            onClick: () => {
                                y(!1), x(r.id);
                            },
                            disabled: h || f,
                            loading: h,
                        },
                    ],
                }),
            ],
        })
    );
};
