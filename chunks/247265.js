r.d(t, { default: () => f }), r(388685);
var n = r(951288),
    o = r(647438),
    i = r(512722),
    c = r.n(i),
    a = r(481060),
    s = r(985002),
    l = r(880257),
    d = r(957656),
    u = r(345909),
    b = r(388032),
    p = r(490839);
let f = (e) => {
    let { currentUser: t, otherUser: r, transitionState: i, onClose: f } = e,
        [h, j] = o.useState(!1),
        m = o.useCallback(() => {
            j(!0);
        }, []),
        y = o.useCallback(() => {
            f();
        }, [f]),
        g = (0, l.Z)(),
        { cancelLinkRequest: x, isCancelLoading: O } = (0, s.G)({
            onError: m,
            onSuccess: y,
        });
    return (
        c()(g, "FamilyCenterDeclineLinkModal should only be rendered for parents."),
        (0, n.jsx)(d.Z, {
            transitionState: i,
            children: (0, n.jsxs)("form", {
                onSubmit: (e) => {
                    j(!1), e.preventDefault(), x(r.id);
                },
                children: [
                    h &&
                        (0, n.jsx)(a.M14, {
                            type: "critical",
                            children: b.intl.string(u.default["6gyAQU"]),
                        }),
                    (0, n.jsx)(a.hzk, {
                        "data-migration-pending": !0,
                        children: (0, n.jsx)(d.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: b.intl.string(u.default.HynllZ),
                            icon: (0, n.jsx)(a.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: p.closeIcon,
                            }),
                        }),
                    }),
                    (0, n.jsx)(a.mzw, {
                        "data-migration-pending": !0,
                        children: (0, n.jsx)(d.Z.ButtonFooter, {
                            children: (0, n.jsxs)(a.ButtonGroup, {
                                direction: "horizontal-reverse",
                                children: [
                                    (0, n.jsx)(a.Button, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: b.intl.string(u.default.czincX),
                                        type: "button",
                                        disabled: O,
                                        onClick: f,
                                    }),
                                    (0, n.jsx)(a.Button, {
                                        variant: "critical-primary",
                                        size: "sm",
                                        text: b.intl.string(u.default.mK40bm),
                                        type: "submit",
                                        disabled: O || h,
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
