r.d(t, {
    default: () => f,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    o = r(284009),
    i = r.n(o),
    c = r(397927),
    s = r(10005),
    a = r(534654),
    d = r(208993),
    u = r(842130),
    p = r(985018),
    b = r(765488);
let f = (e) => {
    let { currentUser: t, otherUser: r, transitionState: o, onClose: f } = e,
        [y, j] = l.useState(!1),
        x = l.useCallback(() => {
            j(!0);
        }, []),
        O = l.useCallback(() => {
            f();
        }, [f]),
        h = (0, a.A)(),
        { declineLinkRequest: m, isDeclineLoading: g } = (0, s.A)({
            onError: x,
            onSuccess: O,
        });
    return (
        i()(h, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, n.jsxs)(c.dWK, {
            transitionState: o,
            onClose: f,
            children: [
                y &&
                    (0, n.jsx)(c.wx6, {
                        type: "critical",
                        children: p.intl.string(u.default.tJAUyn),
                    }),
                (0, n.jsxs)(c.cwr, {
                    children: [
                        (0, n.jsx)(d.A.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: p.intl.string(u.default.teIRCR),
                            icon: (0, n.jsx)(c.PGe, {
                                size: "md",
                                color: "currentColor",
                                className: b.u,
                            }),
                        }),
                        (0, n.jsx)(d.A.Content, {
                            children: (0, n.jsx)(d.A.Notice, {
                                notice: p.intl.string(u.default.LcM8BS),
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(c.H7u, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: p.intl.string(p.t["ETE/oC"]),
                            onClick: f,
                            disabled: g,
                        },
                        {
                            variant: "critical-primary",
                            text: p.intl.string(u.default.dKxFcn),
                            onClick: () => {
                                j(!1), m(r.id);
                            },
                            disabled: g,
                            loading: g,
                        },
                    ],
                }),
            ],
        })
    );
};
