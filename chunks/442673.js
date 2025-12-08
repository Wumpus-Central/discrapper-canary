r.d(t, { default: () => u }), r(388685);
var n = r(54381),
    i = r(473749),
    o = r(481060),
    c = r(985002),
    l = r(957656),
    a = r(225753),
    s = r(388032),
    d = r(601582);
let u = (e) => {
    let { currentUser: t, otherUser: r, transitionState: u, onClose: f } = e,
        b = i.useCallback(() => {
            f();
        }, [f]),
        p = t.nsfwAllowed,
        [h, j] = i.useState(!1),
        [g, y] = i.useState(!1),
        x = i.useCallback(() => {
            y(!0), j(!1);
        }, []),
        { disconnectLinkRequest: O, isDisconnectLoading: m } = (0, c.G)({
            onSuccess: b,
            onError: x,
        });
    return (0, n.jsxs)(o.IX, {
        transitionState: u,
        onClose: f,
        children: [
            g &&
                (0, n.jsx)(o.M14, {
                    type: "critical",
                    children: s.intl.string(a.default.krIDdy),
                }),
            (0, n.jsxs)(o.fef, {
                children: [
                    (0, n.jsx)(l.Z.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: s.intl.formatToPlainString(a.default["NMSTb/"], { isAdult: String(p) }),
                        icon: (0, n.jsx)(o.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: d.closeIcon,
                        }),
                    }),
                    (0, n.jsxs)(o.Kqy, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(l.Z.Notice, {
                                notice: p ? s.intl.string(a.default.EvMGLT) : s.intl.string(a.default.f1SUeW),
                            }),
                            (0, n.jsx)(o.Checkbox, {
                                checked: h,
                                onChange: (e) => {
                                    j(e), y(!1);
                                },
                                label: p ? s.intl.string(a.default["/MYCee"]) : s.intl.string(a.default.VJaHUb),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(o.Go$, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: s.intl.string(s.t["ETE/oC"]),
                        onClick: f,
                        disabled: m,
                    },
                    {
                        variant: "critical-primary",
                        text: s.intl.string(a.default["c5L+sl"]),
                        onClick: () => {
                            y(!1), O(r.id);
                        },
                        disabled: !h || m,
                        loading: m,
                    },
                ],
            }),
        ],
    });
};
