r.d(t, { default: () => b }), r(388685);
var n = r(54381),
    o = r(473749),
    c = r(512722),
    i = r.n(c),
    l = r(481060),
    a = r(985002),
    s = r(957656),
    d = r(597754),
    u = r(388032),
    f = r(490839);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: c, onClose: b } = e,
        [p, h] = o.useState(!1),
        y = o.useCallback(() => {
            h(!0);
        }, []),
        j = o.useCallback(() => {
            b();
        }, [b]),
        g = t.nsfwAllowed,
        { cancelLinkRequest: O, isCancelLoading: m } = (0, a.G)({
            onError: y,
            onSuccess: j,
        });
    return (
        i()(g, "FamilyCenterDeclineLinkModal should only be rendered for parents."),
        (0, n.jsxs)(l.IX, {
            transitionState: c,
            onClose: b,
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
                            className: f.closeIcon,
                        }),
                    }),
                }),
                (0, n.jsx)(l.Go$, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: u.intl.string(d.default.czincX),
                            onClick: b,
                            disabled: m,
                        },
                        {
                            variant: "critical-primary",
                            text: u.intl.string(d.default.mK40bk),
                            onClick: () => {
                                h(!1), O(r.id);
                            },
                            disabled: m || p,
                            loading: m,
                        },
                    ],
                }),
            ],
        })
    );
};
