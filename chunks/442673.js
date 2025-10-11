r.d(t, { default: () => b }), r(388685);
var n = r(951288),
    o = r(647438),
    i = r(481060),
    c = r(985002),
    s = r(880257),
    a = r(957656),
    l = r(345909),
    d = r(388032),
    u = r(601582);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: b, onClose: f } = e,
        h = o.useCallback(() => {
            f();
        }, [f]),
        p = (0, s.Z)(),
        [j, g] = o.useState(!1),
        [m, x] = o.useState(!1),
        y = o.useCallback(() => {
            x(!0), g(!1);
        }, []),
        { disconnectLinkRequest: O, isDisconnectLoading: v } = (0, c.G)({
            onSuccess: h,
            onError: y,
        });
    return (0, n.jsx)(a.Z, {
        transitionState: b,
        children: (0, n.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), O(r.id);
            },
            children: [
                (0, n.jsx)(a.Z.Error, { error: m ? d.intl.string(l.default.krIDd3) : void 0 }),
                (0, n.jsxs)(i.hzk, {
                    "data-migration-pending": !0,
                    children: [
                        (0, n.jsx)(a.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: d.intl.formatToPlainString(l.default.NMSTb2, { isAdult: String(p) }),
                            icon: (0, n.jsx)(i.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: u.closeIcon,
                            }),
                        }),
                        (0, n.jsx)(a.Z.Notice, {
                            notice: p ? d.intl.string(l.default.EvMGLS) : d.intl.string(l.default.f1SUeX),
                        }),
                        (0, n.jsx)("div", {
                            className: u.acknowledgementCheckbox,
                            children: (0, n.jsx)(i.Checkbox, {
                                checked: j,
                                onChange: (e) => {
                                    g(e), x(!1);
                                },
                                label: p ? d.intl.string(l.default["/MYCeX"]) : d.intl.string(l.default.VJaHUV),
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(i.mzw, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(a.Z.ButtonFooter, {
                        children: (0, n.jsxs)(i.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, n.jsx)(i.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: d.intl.string(d.t["ETE/oK"]),
                                    type: "button",
                                    onClick: f,
                                    disabled: v,
                                }),
                                (0, n.jsx)(i.Button, {
                                    variant: "critical-primary",
                                    size: "sm",
                                    text: d.intl.string(l.default["c5L+sr"]),
                                    type: "submit",
                                    disabled: !j || v,
                                    loading: v,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        }),
    });
};
