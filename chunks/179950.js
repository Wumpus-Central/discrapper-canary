i.d(e, { default: () => p });
var s = i(627968),
    n = i(64700),
    a = i(224640),
    l = i(683071),
    r = i(430993),
    c = i(789645),
    d = i(331322),
    o = i(150934),
    u = i(696208),
    h = i(10005),
    g = i(438732),
    x = i(208993),
    C = i(602339),
    f = i(375708),
    k = i(849211);
let p = (t) => {
    let { currentUser: e, otherUser: i, transitionState: p, onClose: b } = t,
        j = n.useCallback(() => {
            b();
        }, [b]),
        S = (0, g.A)(),
        [A, m] = n.useState(!1),
        [v, y] = n.useState(!1),
        E = n.useCallback(() => {
            y(!0), m(!1);
        }, []),
        { disconnectLinkRequest: T, isDisconnectLoading: U } = (0, h.A)({ onSuccess: j, onError: E });
    return (0, s.jsxs)(a.d, {
        transitionState: p,
        onClose: b,
        children: [
            v && (0, s.jsx)(l.w, { type: "critical", children: f.intl.string(C.default.krIDdy) }),
            (0, s.jsxs)(r.c, {
                children: [
                    (0, s.jsx)(x.A.Header, {
                        currentUser: e,
                        otherUser: i,
                        header: f.intl.formatToPlainString(C.default["NMSTb/"], { isAdult: String(S) }),
                        icon: (0, s.jsx)(c.P, { size: "md", color: "currentColor", className: k.ut }),
                    }),
                    (0, s.jsxs)(d.B, {
                        gap: 16,
                        children: [
                            (0, s.jsx)(x.A.Notice, {
                                notice: S ? f.intl.string(C.default.EvMGLT) : f.intl.string(C.default.f1SUeW),
                            }),
                            (0, s.jsx)(o.S, {
                                checked: A,
                                onChange: (t) => {
                                    m(t), y(!1);
                                },
                                label: S ? f.intl.string(C.default["/MYCee"]) : f.intl.string(C.default.VJaHUb),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(u.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: b, disabled: U },
                    {
                        variant: "critical-primary",
                        text: f.intl.string(C.default["c5L+sl"]),
                        onClick: () => {
                            y(!1), T(i.id);
                        },
                        disabled: !A || U,
                        loading: U,
                    },
                ],
            }),
        ],
    });
};
