r.d(t, {
    default: () => b,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    i = r(397927),
    o = r(10005),
    s = r(438732),
    c = r(208993),
    a = r(842130),
    d = r(985018),
    u = r(229468);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: b, onClose: f } = e,
        p = l.useCallback(() => {
            f();
        }, [f]),
        j = (0, s.A)(),
        [y, g] = l.useState(!1),
        [x, h] = l.useState(!1),
        O = l.useCallback(() => {
            h(!0), g(!1);
        }, []),
        { disconnectLinkRequest: m, isDisconnectLoading: v } = (0, o.A)({
            onSuccess: p,
            onError: O,
        });
    return (0, n.jsxs)(i.dWK, {
        transitionState: b,
        onClose: f,
        children: [
            x &&
                (0, n.jsx)(i.wx6, {
                    type: "critical",
                    children: d.intl.string(a.default.krIDdy),
                }),
            (0, n.jsxs)(i.cwr, {
                children: [
                    (0, n.jsx)(c.A.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: d.intl.formatToPlainString(a.default["NMSTb/"], {
                            isAdult: String(j),
                        }),
                        icon: (0, n.jsx)(i.PGe, {
                            size: "md",
                            color: "currentColor",
                            className: u.ut,
                        }),
                    }),
                    (0, n.jsxs)(i.BJc, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(c.A.Notice, {
                                notice: j ? d.intl.string(a.default.EvMGLT) : d.intl.string(a.default.f1SUeW),
                            }),
                            (0, n.jsx)(i.Checkbox, {
                                checked: y,
                                onChange: (e) => {
                                    g(e), h(!1);
                                },
                                label: j ? d.intl.string(a.default["/MYCee"]) : d.intl.string(a.default.VJaHUb),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(i.H7u, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: d.intl.string(d.t["ETE/oC"]),
                        onClick: f,
                        disabled: v,
                    },
                    {
                        variant: "critical-primary",
                        text: d.intl.string(a.default["c5L+sl"]),
                        onClick: () => {
                            h(!1), m(r.id);
                        },
                        disabled: !y || v,
                        loading: v,
                    },
                ],
            }),
        ],
    });
};
