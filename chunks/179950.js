r.d(t, {
    default: () => u,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    c = r(397927),
    s = r(10005),
    a = r(208993),
    i = r(842130),
    o = r(985018),
    d = r(229468);
let u = (e) => {
    let { currentUser: t, otherUser: r, transitionState: u, onClose: b } = e,
        f = l.useCallback(() => {
            b();
        }, [b]),
        p = t.nsfwAllowed,
        [j, y] = l.useState(!1),
        [x, g] = l.useState(!1),
        O = l.useCallback(() => {
            g(!0), y(!1);
        }, []),
        { disconnectLinkRequest: h, isDisconnectLoading: m } = (0, s.A)({
            onSuccess: f,
            onError: O,
        });
    return (0, n.jsxs)(c.dWK, {
        transitionState: u,
        onClose: b,
        children: [
            x &&
                (0, n.jsx)(c.wx6, {
                    type: "critical",
                    children: o.intl.string(i.default.krIDdy),
                }),
            (0, n.jsxs)(c.cwr, {
                children: [
                    (0, n.jsx)(a.A.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: o.intl.formatToPlainString(i.default["NMSTb/"], {
                            isAdult: String(p),
                        }),
                        icon: (0, n.jsx)(c.PGe, {
                            size: "md",
                            color: "currentColor",
                            className: d.ut,
                        }),
                    }),
                    (0, n.jsxs)(c.BJc, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(a.A.Notice, {
                                notice: p ? o.intl.string(i.default.EvMGLT) : o.intl.string(i.default.f1SUeW),
                            }),
                            (0, n.jsx)(c.Checkbox, {
                                checked: j,
                                onChange: (e) => {
                                    y(e), g(!1);
                                },
                                label: p ? o.intl.string(i.default["/MYCee"]) : o.intl.string(i.default.VJaHUb),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.H7u, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: o.intl.string(o.t["ETE/oC"]),
                        onClick: b,
                        disabled: m,
                    },
                    {
                        variant: "critical-primary",
                        text: o.intl.string(i.default["c5L+sl"]),
                        onClick: () => {
                            g(!1), h(r.id);
                        },
                        disabled: !j || m,
                        loading: m,
                    },
                ],
            }),
        ],
    });
};
