t.d(r, { default: () => p }), t(388685);
var n = t(951288),
    o = t(647438),
    i = t(512722),
    s = t.n(i),
    a = t(481060),
    c = t(985002),
    l = t(880257),
    d = t(957656),
    u = t(345909),
    b = t(388032),
    f = t(490839);
let p = (e) => {
    let { currentUser: r, otherUser: t, transitionState: i, onClose: p } = e,
        [h, j] = o.useState(!1),
        m = o.useCallback(() => {
            j(!0);
        }, []),
        y = o.useCallback(() => {
            j(!1);
        }, []),
        g = o.useCallback(() => {
            p();
        }, [p]),
        x = (0, l.Z)(),
        { cancelLinkRequest: O, isCancelLoading: v } = (0, c.G)({
            onError: m,
            onSuccess: g,
        });
    return (
        s()(x, "FamilyCenterDeclineLinkModal should only be rendered for parents."),
        (0, n.jsx)(d.Z, {
            transitionState: i,
            children: (0, n.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), O(t.id);
                },
                children: [
                    (0, n.jsx)(d.Z.Error, {
                        error: h ? b.intl.string(u.default["6gyAQU"]) : void 0,
                        onDismiss: y,
                    }),
                    (0, n.jsx)(a.hzk, {
                        "data-migration-pending": !0,
                        children: (0, n.jsx)(d.Z.Header, {
                            currentUser: r,
                            otherUser: t,
                            header: b.intl.string(u.default.HynllZ),
                            icon: (0, n.jsx)(a.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: f.closeIcon,
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
                                        disabled: v,
                                        onClick: p,
                                    }),
                                    (0, n.jsx)(a.Button, {
                                        variant: "critical-primary",
                                        size: "sm",
                                        text: b.intl.string(u.default.mK40bm),
                                        type: "submit",
                                        disabled: v || h,
                                        loading: v,
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
