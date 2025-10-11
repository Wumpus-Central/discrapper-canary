r.d(t, { default: () => p }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(512722),
    c = r.n(o),
    s = r(481060),
    a = r(985002),
    l = r(880257),
    d = r(957656),
    u = r(345909),
    b = r(388032),
    f = r(544723);
let p = (e) => {
    let { currentUser: t, otherUser: r, transitionState: o, onClose: p } = e,
        [h, j] = i.useState(!1),
        y = i.useCallback(() => {
            j(!0);
        }, []),
        m = i.useCallback(() => {
            p();
        }, [p]),
        x = (0, l.Z)(),
        { declineLinkRequest: g, isDeclineLoading: O } = (0, a.G)({
            onError: y,
            onSuccess: m,
        });
    return (
        c()(!x, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, n.jsx)(d.Z, {
            transitionState: o,
            children: (0, n.jsxs)("form", {
                onSubmit: (e) => {
                    j(!1), e.preventDefault(), g(r.id);
                },
                children: [
                    h &&
                        (0, n.jsx)(s.M14, {
                            type: "critical",
                            children: b.intl.string(u.default.tJAUys),
                        }),
                    (0, n.jsxs)(s.hzk, {
                        "data-migration-pending": !0,
                        children: [
                            (0, n.jsx)(d.Z.Header, {
                                currentUser: t,
                                otherUser: r,
                                header: b.intl.string(u.default.teIRCQ),
                                icon: (0, n.jsx)(s.Dio, {
                                    size: "md",
                                    color: "currentColor",
                                    className: f.closeIcon,
                                }),
                            }),
                            (0, n.jsx)(d.Z.Content, {
                                children: (0, n.jsx)(d.Z.Notice, { notice: b.intl.string(u.default.LcM8BQ) }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(s.mzw, {
                        "data-migration-pending": !0,
                        children: (0, n.jsx)(d.Z.ButtonFooter, {
                            children: (0, n.jsxs)(s.ButtonGroup, {
                                direction: "horizontal-reverse",
                                children: [
                                    (0, n.jsx)(s.Button, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: b.intl.string(b.t["ETE/oK"]),
                                        type: "button",
                                        disabled: O,
                                        onClick: p,
                                    }),
                                    (0, n.jsx)(s.Button, {
                                        variant: "critical-primary",
                                        size: "sm",
                                        text: b.intl.string(u.default.dKxFcn),
                                        type: "submit",
                                        disabled: O,
                                        loading: O,
                                    }),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
        })
    );
};
