r.d(t, { default: () => f }), r(388685);
var n = r(951288),
    o = r(647438),
    i = r(755721),
    s = r(481060),
    a = r(985002),
    c = r(880257),
    l = r(957656),
    d = r(345909),
    u = r(388032),
    b = r(601582);
let f = (e) => {
    let { currentUser: t, otherUser: r, transitionState: f, onClose: h } = e,
        p = o.useCallback(() => {
            h();
        }, [h]),
        j = (0, c.Z)(),
        [x, m] = o.useState(!1),
        [g, y] = o.useState(!1),
        O = o.useCallback(() => {
            y(!0), m(!1);
        }, []),
        { disconnectLinkRequest: v, isDisconnectLoading: k } = (0, a.G)({
            onSuccess: p,
            onError: O,
        });
    return (0, n.jsx)(l.Z, {
        transitionState: f,
        children: (0, n.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), v(r);
            },
            children: [
                (0, n.jsx)(l.Z.Error, { error: g ? u.intl.string(d.default.krIDd3) : void 0 }),
                (0, n.jsxs)(s.hzk, {
                    "data-migration-pending": !0,
                    children: [
                        (0, n.jsx)(l.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: u.intl.formatToPlainString(d.default.NMSTb2, { isAdult: String(j) }),
                            icon: (0, n.jsx)(s.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: b.closeIcon,
                            }),
                        }),
                        (0, n.jsx)(l.Z.Notice, {
                            notice: j ? u.intl.string(d.default.EvMGLS) : u.intl.string(d.default.f1SUeX),
                        }),
                        (0, n.jsx)(i.$q, {
                            className: b.acknowledgementCheckbox,
                            type: i.M0.INVERTED,
                            value: x,
                            onChange: (e, t) => {
                                m(t), y(!1);
                            },
                            children: (0, n.jsx)(s.Text, {
                                variant: "text-xs/semibold",
                                children: j ? u.intl.string(d.default["/MYCeX"]) : u.intl.string(d.default.VJaHUV),
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(s.mzw, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(l.Z.ButtonFooter, {
                        children: (0, n.jsxs)(s.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, n.jsx)(s.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: u.intl.string(u.t["ETE/oK"]),
                                    type: "button",
                                    onClick: h,
                                    disabled: k,
                                }),
                                (0, n.jsx)(s.zxk, {
                                    variant: "critical-primary",
                                    size: "sm",
                                    text: u.intl.string(d.default["c5L+sr"]),
                                    type: "submit",
                                    disabled: !x || k,
                                    loading: k,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        }),
    });
};
