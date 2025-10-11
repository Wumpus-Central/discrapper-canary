r.d(t, { default: () => b }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(481060),
    c = r(985002),
    a = r(880257),
    s = r(957656),
    l = r(345909),
    d = r(388032),
    u = r(601582);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: b, onClose: f } = e,
        h = i.useCallback(() => {
            f();
        }, [f]),
        p = (0, a.Z)(),
        [j, g] = i.useState(!1),
        [m, x] = i.useState(!1),
        y = i.useCallback(() => {
            x(!0), g(!1);
        }, []),
        { disconnectLinkRequest: O, isDisconnectLoading: v } = (0, c.G)({
            onSuccess: h,
            onError: y,
        });
    return (0, n.jsx)(s.Z, {
        transitionState: b,
        children: (0, n.jsxs)("form", {
            onSubmit: (e) => {
                x(!1), e.preventDefault(), O(r.id);
            },
            children: [
                m &&
                    (0, n.jsx)(o.M14, {
                        type: "critical",
                        children: d.intl.string(l.default.krIDd3),
                    }),
                (0, n.jsxs)(o.hzk, {
                    "data-migration-pending": !0,
                    children: [
                        (0, n.jsx)(s.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: d.intl.formatToPlainString(l.default.NMSTb2, { isAdult: String(p) }),
                            icon: (0, n.jsx)(o.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: u.closeIcon,
                            }),
                        }),
                        (0, n.jsx)(s.Z.Notice, {
                            notice: p ? d.intl.string(l.default.EvMGLS) : d.intl.string(l.default.f1SUeX),
                        }),
                        (0, n.jsx)("div", {
                            className: u.acknowledgementCheckbox,
                            children: (0, n.jsx)(o.Checkbox, {
                                checked: j,
                                onChange: (e) => {
                                    g(e), x(!1);
                                },
                                label: p ? d.intl.string(l.default["/MYCeX"]) : d.intl.string(l.default.VJaHUV),
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(o.mzw, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(s.Z.ButtonFooter, {
                        children: (0, n.jsxs)(o.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, n.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: d.intl.string(d.t["ETE/oK"]),
                                    type: "button",
                                    onClick: f,
                                    disabled: v,
                                }),
                                (0, n.jsx)(o.Button, {
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
