r.d(t, { default: () => x });
var n = r(627968),
    s = r(64700),
    i = r(397927),
    l = r(10005),
    a = r(438732),
    c = r(208993),
    d = r(842130),
    o = r(985018),
    u = r(229468);
let x = (e) => {
    let { currentUser: t, otherUser: r, transitionState: x, onClose: h } = e,
        g = s.useCallback(() => {
            h();
        }, [h]),
        j = (0, a.A)(),
        [m, b] = s.useState(!1),
        [f, C] = s.useState(!1),
        p = s.useCallback(() => {
            C(!0), b(!1);
        }, []),
        { disconnectLinkRequest: _, isDisconnectLoading: v } = (0, l.A)({ onSuccess: g, onError: p });
    return (0, n.jsxs)(i.dWK, {
        transitionState: x,
        onClose: h,
        children: [
            f && (0, n.jsx)(i.wx6, { type: "critical", children: o.intl.string(d.default.krIDdy) }),
            (0, n.jsxs)(i.cwr, {
                children: [
                    (0, n.jsx)(c.A.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: o.intl.formatToPlainString(d.default["NMSTb/"], { isAdult: String(j) }),
                        icon: (0, n.jsx)(i.PGe, { size: "md", color: "currentColor", className: u.ut }),
                    }),
                    (0, n.jsxs)(i.BJc, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(c.A.Notice, {
                                notice: j ? o.intl.string(d.default.EvMGLT) : o.intl.string(d.default.f1SUeW),
                            }),
                            (0, n.jsx)(i.Checkbox, {
                                checked: m,
                                onChange: (e) => {
                                    b(e), C(!1);
                                },
                                label: j ? o.intl.string(d.default["/MYCee"]) : o.intl.string(d.default.VJaHUb),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(i.H7u, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: o.intl.string(o.t["ETE/oC"]), onClick: h, disabled: v },
                    {
                        variant: "critical-primary",
                        text: o.intl.string(d.default["c5L+sl"]),
                        onClick: () => {
                            C(!1), _(r.id);
                        },
                        disabled: !m || v,
                        loading: v,
                    },
                ],
            }),
        ],
    });
};
