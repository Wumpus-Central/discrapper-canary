r.d(t, { default: () => b });
var n = r(627968),
    s = r(64700),
    i = r(224640),
    l = r(683071),
    a = r(430993),
    c = r(789645),
    d = r(331322),
    o = r(150934),
    u = r(696208),
    x = r(10005),
    h = r(438732),
    g = r(208993),
    j = r(602339),
    m = r(985018),
    f = r(849211);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: b, onClose: p } = e,
        C = s.useCallback(() => {
            p();
        }, [p]),
        _ = (0, h.A)(),
        [v, k] = s.useState(!1),
        [N, S] = s.useState(!1),
        A = s.useCallback(() => {
            S(!0), k(!1);
        }, []),
        { disconnectLinkRequest: E, isDisconnectLoading: w } = (0, x.A)({ onSuccess: C, onError: A });
    return (0, n.jsxs)(i.d, {
        transitionState: b,
        onClose: p,
        children: [
            N && (0, n.jsx)(l.w, { type: "critical", children: m.intl.string(j.default.krIDdy) }),
            (0, n.jsxs)(a.c, {
                children: [
                    (0, n.jsx)(g.A.Header, {
                        currentUser: t,
                        otherUser: r,
                        header: m.intl.formatToPlainString(j.default["NMSTb/"], { isAdult: String(_) }),
                        icon: (0, n.jsx)(c.P, { size: "md", color: "currentColor", className: f.ut }),
                    }),
                    (0, n.jsxs)(d.B, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(g.A.Notice, {
                                notice: _ ? m.intl.string(j.default.EvMGLT) : m.intl.string(j.default.f1SUeW),
                            }),
                            (0, n.jsx)(o.S, {
                                checked: v,
                                onChange: (e) => {
                                    k(e), S(!1);
                                },
                                label: _ ? m.intl.string(j.default["/MYCee"]) : m.intl.string(j.default.VJaHUb),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(u.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: p, disabled: w },
                    {
                        variant: "critical-primary",
                        text: m.intl.string(j.default["c5L+sl"]),
                        onClick: () => {
                            S(!1), E(r.id);
                        },
                        disabled: !v || w,
                        loading: w,
                    },
                ],
            }),
        ],
    });
};
