r.d(t, { default: () => p });
var n = r(627968),
    l = r(64700),
    s = r(284009),
    a = r.n(s),
    i = r(224640),
    c = r(683071),
    d = r(430993),
    o = r(789645),
    u = r(696208),
    x = r(10005),
    h = r(438732),
    m = r(208993),
    j = r(602339),
    _ = r(985018),
    b = r(798399);
let p = (e) => {
    let { currentUser: t, otherUser: r, transitionState: s, onClose: p } = e,
        [C, f] = l.useState(!1),
        g = l.useCallback(() => {
            f(!0);
        }, []),
        v = l.useCallback(() => {
            p();
        }, [p]),
        k = (0, h.A)(),
        { cancelLinkRequest: y, isCancelLoading: N } = (0, x.A)({ onError: g, onSuccess: v });
    return (
        a()(k, "FamilyCenterCancelLinkModal should only be rendered for parents."),
        (0, n.jsxs)(i.d, {
            transitionState: s,
            onClose: p,
            children: [
                C && (0, n.jsx)(c.w, { type: "critical", children: _.intl.string(j.default["6gyAQZ"]) }),
                (0, n.jsx)(d.c, {
                    children: (0, n.jsx)(m.A.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: _.intl.string(j.default.HynllX),
                        icon: (0, n.jsx)(o.P, { size: "md", color: "currentColor", className: b.u }),
                    }),
                }),
                (0, n.jsx)(u.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: _.intl.string(j.default.czincX), onClick: p, disabled: N },
                        {
                            variant: "critical-primary",
                            text: _.intl.string(j.default.mK40bk),
                            onClick: () => {
                                f(!1), y(r.id);
                            },
                            disabled: N || C,
                            loading: N,
                        },
                    ],
                }),
            ],
        })
    );
};
