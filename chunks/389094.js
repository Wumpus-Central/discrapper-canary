r.d(t, {
    default: () => b,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    c = r(284009),
    o = r.n(c),
    s = r(397927),
    i = r(10005),
    a = r(208993),
    d = r(842130),
    u = r(985018),
    p = r(765488);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: c, onClose: b } = e,
        [f, y] = l.useState(!1),
        j = l.useCallback(() => {
            y(!0);
        }, []),
        x = l.useCallback(() => {
            b();
        }, [b]),
        O = t.nsfwAllowed,
        { declineLinkRequest: h, isDeclineLoading: m } = (0, i.A)({
            onError: j,
            onSuccess: x,
        });
    return (
        o()(!O, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, n.jsxs)(s.dWK, {
            transitionState: c,
            onClose: b,
            children: [
                f &&
                    (0, n.jsx)(s.wx6, {
                        type: "critical",
                        children: u.intl.string(d.default.tJAUyn),
                    }),
                (0, n.jsxs)(s.cwr, {
                    children: [
                        (0, n.jsx)(a.A.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: u.intl.string(d.default.teIRCR),
                            icon: (0, n.jsx)(s.PGe, {
                                size: "md",
                                color: "currentColor",
                                className: p.u,
                            }),
                        }),
                        (0, n.jsx)(a.A.Content, {
                            children: (0, n.jsx)(a.A.Notice, {
                                notice: u.intl.string(d.default.LcM8BS),
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(s.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: u.intl.string(u.t["ETE/oC"]),
                            onClick: b,
                            disabled: m,
                        },
                        {
                            variant: "critical-primary",
                            text: u.intl.string(d.default.dKxFcn),
                            onClick: () => {
                                y(!1), h(r.id);
                            },
                            disabled: m,
                            loading: m,
                        },
                    ],
                }),
            ],
        })
    );
};
