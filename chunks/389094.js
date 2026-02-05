r.d(t, { default: () => j });
var n = r(627968),
    s = r(64700),
    i = r(284009),
    l = r.n(i),
    a = r(397927),
    c = r(10005),
    d = r(534654),
    o = r(208993),
    x = r(842130),
    u = r(985018),
    h = r(765488);
let j = (e) => {
    let { currentUser: t, otherUser: r, transitionState: i, onClose: j } = e,
        [m, C] = s.useState(!1),
        _ = s.useCallback(() => {
            C(!0);
        }, []),
        b = s.useCallback(() => {
            j();
        }, [j]),
        f = (0, d.A)(),
        { declineLinkRequest: g, isDeclineLoading: p } = (0, c.A)({ onError: _, onSuccess: b });
    return (
        l()(f, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, n.jsxs)(a.dWK, {
            transitionState: i,
            onClose: j,
            children: [
                m && (0, n.jsx)(a.wx6, { type: "critical", children: u.intl.string(x.default.tJAUyn) }),
                (0, n.jsxs)(a.cwr, {
                    children: [
                        (0, n.jsx)(o.A.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: u.intl.string(x.default.teIRCR),
                            icon: (0, n.jsx)(a.PGe, { size: "md", color: "currentColor", className: h.u }),
                        }),
                        (0, n.jsx)(o.A.Content, {
                            children: (0, n.jsx)(o.A.Notice, { notice: u.intl.string(x.default.LcM8BS) }),
                        }),
                    ],
                }),
                (0, n.jsx)(a.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: j, disabled: p },
                        {
                            variant: "critical-primary",
                            text: u.intl.string(x.default.dKxFcn),
                            onClick: () => {
                                C(!1), g(r.id);
                            },
                            disabled: p,
                            loading: p,
                        },
                    ],
                }),
            ],
        })
    );
};
