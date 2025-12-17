r.d(t, { default: () => f }), r(388685);
var n = r(54381),
    o = r(473749),
    c = r(512722),
    i = r.n(c),
    l = r(481060),
    s = r(985002),
    a = r(957656),
    d = r(517319),
    u = r(388032),
    b = r(909660);
let f = (e) => {
    let { currentUser: t, otherUser: r, transitionState: c, onClose: f } = e,
        [p, h] = o.useState(!1),
        j = o.useCallback(() => {
            h(!0);
        }, []),
        y = o.useCallback(() => {
            f();
        }, [f]),
        x = t.nsfwAllowed,
        { declineLinkRequest: g, isDeclineLoading: O } = (0, s.G)({
            onError: j,
            onSuccess: y,
        });
    return (
        i()(!x, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, n.jsxs)(l.IX, {
            transitionState: c,
            onClose: f,
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
                                className: b.closeIcon,
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
                            onClick: f,
                            disabled: O,
                        },
                        {
                            variant: "critical-primary",
                            text: u.intl.string(d.default.dKxFcn),
                            onClick: () => {
                                h(!1), g(r.id);
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
