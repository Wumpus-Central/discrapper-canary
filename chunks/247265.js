r.d(t, { default: () => f }), r(388685);
var n = r(54381),
    o = r(473749),
    c = r(512722),
    i = r.n(c),
    l = r(481060),
    a = r(985002),
    s = r(957656),
    d = r(517319),
    u = r(388032),
    b = r(477856);
let f = (e) => {
    let { currentUser: t, otherUser: r, transitionState: c, onClose: f } = e,
        [p, h] = o.useState(!1),
        j = o.useCallback(() => {
            h(!0);
        }, []),
        y = o.useCallback(() => {
            f();
        }, [f]),
        g = t.nsfwAllowed,
        { cancelLinkRequest: O, isCancelLoading: x } = (0, a.G)({
            onError: j,
            onSuccess: y,
        });
    return (
        i()(g, "FamilyCenterDeclineLinkModal should only be rendered for parents."),
        (0, n.jsxs)(l.IX, {
            transitionState: c,
            onClose: f,
            children: [
                p &&
                    (0, n.jsx)(l.M14, {
                        type: "critical",
                        children: u.intl.string(d.default["6gyAQZ"]),
                    }),
                (0, n.jsx)(l.fef, {
                    children: (0, n.jsx)(s.Z.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: u.intl.string(d.default.HynllX),
                        icon: (0, n.jsx)(l.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: b.closeIcon,
                        }),
                    }),
                }),
                (0, n.jsx)(l.Go$, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: u.intl.string(d.default.czincX),
                            onClick: f,
                            disabled: x,
                        },
                        {
                            variant: "critical-primary",
                            text: u.intl.string(d.default.mK40bk),
                            onClick: () => {
                                h(!1), O(r.id);
                            },
                            disabled: x || p,
                            loading: x,
                        },
                    ],
                }),
            ],
        })
    );
};
