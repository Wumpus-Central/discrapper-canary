e.d(i, { default: () => p });
var n = e(627968),
    s = e(64700),
    a = e(224640),
    l = e(683071),
    r = e(430993),
    c = e(789645),
    d = e(331322),
    o = e(150934),
    u = e(696208),
    h = e(10005),
    g = e(438732),
    f = e(208993),
    x = e(602339),
    C = e(375708),
    k = e(849211);
let p = function (t) {
    let { currentUser: i, otherUser: e, transitionState: p, onClose: b } = t,
        j = s.useCallback(() => {
            b();
        }, [b]),
        S = (0, g.A)(),
        [A, m] = s.useState(!1),
        [v, y] = s.useState(!1),
        E = s.useCallback(() => {
            y(!0), m(!1);
        }, []),
        { disconnectLinkRequest: T, isDisconnectLoading: U } = (0, h.A)({ onSuccess: j, onError: E });
    return (0, n.jsxs)(a.d, {
        transitionState: p,
        onClose: b,
        children: [
            v && (0, n.jsx)(l.w, { type: "critical", children: C.intl.string(x.default.krIDdy) }),
            (0, n.jsxs)(r.c, {
                children: [
                    (0, n.jsx)(f.A.Header, {
                        currentUser: i,
                        otherUser: e,
                        header: C.intl.formatToPlainString(x.default["NMSTb/"], { isAdult: String(S) }),
                        icon: (0, n.jsx)(c.P, { size: "md", color: "currentColor", className: k.ut }),
                    }),
                    (0, n.jsxs)(d.B, {
                        gap: 16,
                        children: [
                            (0, n.jsx)(f.A.Notice, {
                                notice: S ? C.intl.string(x.default.EvMGLT) : C.intl.string(x.default.f1SUeW),
                            }),
                            (0, n.jsx)(o.S, {
                                checked: A,
                                onChange: (t) => {
                                    m(t), y(!1);
                                },
                                label: S ? C.intl.string(x.default["/MYCee"]) : C.intl.string(x.default.VJaHUb),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(u.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: b, disabled: U },
                    {
                        variant: "critical-primary",
                        text: C.intl.string(x.default["c5L+sl"]),
                        onClick: function () {
                            y(!1), T(e.id);
                        },
                        disabled: !A || U,
                        loading: U,
                    },
                ],
            }),
        ],
    });
};
