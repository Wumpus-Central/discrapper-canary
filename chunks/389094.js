i.d(t, { default: () => b });
var n = i(627968),
    s = i(64700),
    r = i(284009),
    l = i.n(r),
    a = i(224640),
    c = i(683071),
    d = i(430993),
    o = i(789645),
    u = i(696208),
    h = i(10005),
    C = i(534654),
    x = i(208993),
    k = i(602339),
    p = i(375708),
    j = i(971653);
let b = (e) => {
    let { currentUser: t, otherUser: i, transitionState: r, onClose: b } = e,
        [g, f] = s.useState(!1),
        y = s.useCallback(() => {
            f(!0);
        }, []),
        A = s.useCallback(() => {
            b();
        }, [b]),
        m = (0, C.A)(),
        { declineLinkRequest: L, isDeclineLoading: S } = (0, h.A)({ onError: y, onSuccess: A });
    return (
        l()(m, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, n.jsxs)(a.d, {
            transitionState: r,
            onClose: b,
            children: [
                g && (0, n.jsx)(c.w, { type: "critical", children: p.intl.string(k.default.tJAUyn) }),
                (0, n.jsxs)(d.c, {
                    children: [
                        (0, n.jsx)(x.A.Header, {
                            currentUser: t,
                            otherUser: i,
                            header: p.intl.string(k.default.teIRCR),
                            icon: (0, n.jsx)(o.P, { size: "md", color: "currentColor", className: j.u }),
                        }),
                        (0, n.jsx)(x.A.Content, {
                            children: (0, n.jsx)(x.A.Notice, { notice: p.intl.string(k.default.LcM8BS) }),
                        }),
                    ],
                }),
                (0, n.jsx)(u.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: b, disabled: S },
                        {
                            variant: "critical-primary",
                            text: p.intl.string(k.default.dKxFcn),
                            onClick: () => {
                                f(!1), L(i.id);
                            },
                            disabled: S,
                            loading: S,
                        },
                    ],
                }),
            ],
        })
    );
};
