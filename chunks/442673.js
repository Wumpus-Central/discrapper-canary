r.d(t, { default: () => u }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(481060),
    c = r(985002),
    a = r(957656),
    l = r(597754),
    s = r(388032),
    d = r(601582);
let u = (e) => {
    let { currentUser: t, otherUser: r, transitionState: u, onClose: f } = e,
        b = i.useCallback(() => {
            f();
        }, [f]),
        h = t.nsfwAllowed,
        [p, j] = i.useState(!1),
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
                    children: s.intl.string(l.default.krIDdy),
                }),
            (0, n.jsxs)(o.fef, {
                children: [
                    (0, n.jsx)(a.Z.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: s.intl.formatToPlainString(l.default["NMSTb/"], { isAdult: String(h) }),
                        icon: (0, n.jsx)(o.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: d.closeIcon,
                        }),
                    }),
                    (0, n.jsxs)(o.Kqy, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(a.Z.Notice, {
                                notice: h ? s.intl.string(l.default.EvMGLT) : s.intl.string(l.default.f1SUeW),
                            }),
                            (0, n.jsx)(o.Checkbox, {
                                checked: p,
                                onChange: (e) => {
                                    j(e), y(!1);
                                },
                                label: h ? s.intl.string(l.default["/MYCee"]) : s.intl.string(l.default.VJaHUb),
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
                        text: s.intl.string(l.default["c5L+sl"]),
                        onClick: () => {
                            y(!1), O(r.id);
                        },
                        disabled: !p || m,
                        loading: m,
                    },
                ],
            }),
        ],
    });
};
