r.d(t, { default: () => b }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(512722),
    c = r.n(i),
    l = r(481060),
    s = r(985002),
    a = r(957656),
    d = r(313570),
    u = r(388032),
    f = r(406405);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: i, onClose: b } = e,
        [p, h] = o.useState(!1),
        j = o.useCallback(() => {
            h(!0);
        }, []),
        y = o.useCallback(() => {
            b();
        }, [b]),
        g = t.nsfwAllowed,
        { declineLinkRequest: x, isDeclineLoading: O } = (0, s.G)({
            onError: j,
            onSuccess: y,
        });
    return (
        c()(!g, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, n.jsxs)(l.IX, {
            transitionState: i,
            onClose: b,
            children: [
                p &&
                    (0, n.jsx)(l.M14, {
                        type: "critical",
                        children: u.intl.string(d.default.tJAUyn),
                    }),
                (0, n.jsxs)(l.fef, {
                    children: [
                        (0, n.jsx)(a.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: u.intl.string(d.default.teIRCR),
                            icon: (0, n.jsx)(l.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: f.closeIcon,
                            }),
                        }),
                        (0, n.jsx)(a.Z.Content, {
                            children: (0, n.jsx)(a.Z.Notice, { notice: u.intl.string(d.default.LcM8BS) }),
                        }),
                    ],
                }),
                (0, n.jsx)(l.Go$, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: u.intl.string(u.t["ETE/oC"]),
                            onClick: b,
                            disabled: O,
                        },
                        {
                            variant: "critical-primary",
                            text: u.intl.string(d.default.dKxFcn),
                            onClick: () => {
                                h(!1), x(r.id);
                            },
                            disabled: O,
                            loading: O,
                        },
                    ],
                }),
            ],
        })
    );
};
