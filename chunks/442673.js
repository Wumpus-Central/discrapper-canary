r.d(t, { default: () => u }), r(388685);
var n = r(54381),
    o = r(473749),
    c = r(481060),
    i = r(985002),
    l = r(957656),
    s = r(517319),
    a = r(388032),
    d = r(603521);
let u = (e) => {
    let { currentUser: t, otherUser: r, transitionState: u, onClose: f } = e,
        b = o.useCallback(() => {
            f();
        }, [f]),
        p = t.nsfwAllowed,
        [h, j] = o.useState(!1),
        [g, x] = o.useState(!1),
        y = o.useCallback(() => {
            x(!0), j(!1);
        }, []),
        { disconnectLinkRequest: O, isDisconnectLoading: m } = (0, i.G)({
            onSuccess: b,
            onError: y,
        });
    return (0, n.jsxs)(c.IX, {
        transitionState: u,
        onClose: f,
        children: [
            g &&
                (0, n.jsx)(c.M14, {
                    type: "critical",
                    children: a.intl.string(s.default.krIDdy),
                }),
            (0, n.jsxs)(c.fef, {
                children: [
                    (0, n.jsx)(l.Z.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: a.intl.formatToPlainString(s.default["NMSTb/"], { isAdult: String(p) }),
                        icon: (0, n.jsx)(c.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: d.closeIcon,
                        }),
                    }),
                    (0, n.jsxs)(c.Kqy, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(l.Z.Notice, {
                                notice: p ? a.intl.string(s.default.EvMGLT) : a.intl.string(s.default.f1SUeW),
                            }),
                            (0, n.jsx)(c.Checkbox, {
                                checked: h,
                                onChange: (e) => {
                                    j(e), x(!1);
                                },
                                label: p ? a.intl.string(s.default["/MYCee"]) : a.intl.string(s.default.VJaHUb),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.Go$, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: a.intl.string(a.t["ETE/oC"]),
                        onClick: f,
                        disabled: m,
                    },
                    {
                        variant: "critical-primary",
                        text: a.intl.string(s.default["c5L+sl"]),
                        onClick: () => {
                            x(!1), O(r.id);
                        },
                        disabled: !h || m,
                        loading: m,
                    },
                ],
            }),
        ],
    });
};
