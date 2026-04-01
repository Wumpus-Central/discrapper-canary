r.d(t, { default: () => m });
var n = r(627968),
    s = r(64700),
    l = r(284009),
    a = r.n(l),
    i = r(397927),
    c = r(10005),
    d = r(438732),
    o = r(208993),
    u = r(842130),
    x = r(985018),
    h = r(494095);
let m = (e) => {
    let { currentUser: t, otherUser: r, transitionState: l, onClose: m } = e,
        [j, _] = s.useState(!1),
        b = s.useCallback(() => {
            _(!0);
        }, []),
        g = s.useCallback(() => {
            m();
        }, [m]),
        p = (0, d.A)(),
        { cancelLinkRequest: C, isCancelLoading: f } = (0, c.A)({ onError: b, onSuccess: g });
    return (
        a()(p, "FamilyCenterCancelLinkModal should only be rendered for parents."),
        (0, n.jsxs)(i.dWK, {
            transitionState: l,
            onClose: m,
            children: [
                j && (0, n.jsx)(i.wx6, { type: "critical", children: x.intl.string(u.default["6gyAQZ"]) }),
                (0, n.jsx)(i.cwr, {
                    children: (0, n.jsx)(o.A.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: x.intl.string(u.default.HynllX),
                        icon: (0, n.jsx)(i.PGe, { size: "md", color: "currentColor", className: h.u }),
                    }),
                }),
                (0, n.jsx)(i.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: x.intl.string(u.default.czincX), onClick: m, disabled: f },
                        {
                            variant: "critical-primary",
                            text: x.intl.string(u.default.mK40bk),
                            onClick: () => {
                                _(!1), C(r.id);
                            },
                            disabled: f || j,
                            loading: f,
                        },
                    ],
                }),
            ],
        })
    );
};
