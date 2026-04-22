r.d(t, { default: () => b });
var n = r(627968),
    s = r(64700),
    i = r(284009),
    l = r.n(i),
    a = r(224640),
    c = r(683071),
    d = r(430993),
    o = r(789645),
    u = r(696208),
    x = r(10005),
    h = r(534654),
    j = r(208993),
    m = r(602339),
    C = r(985018),
    _ = r(971653);
let b = (e) => {
    let { currentUser: t, otherUser: r, transitionState: i, onClose: b } = e,
        [f, g] = s.useState(!1),
        p = s.useCallback(() => {
            g(!0);
        }, []),
        v = s.useCallback(() => {
            b();
        }, [b]),
        k = (0, h.A)(),
        { declineLinkRequest: A, isDeclineLoading: N } = (0, x.A)({ onError: p, onSuccess: v });
    return (
        l()(k, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, n.jsxs)(a.d, {
            transitionState: i,
            onClose: b,
            children: [
                f && (0, n.jsx)(c.w, { type: "critical", children: C.intl.string(m.default.tJAUyn) }),
                (0, n.jsxs)(d.c, {
                    children: [
                        (0, n.jsx)(j.A.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: C.intl.string(m.default.teIRCR),
                            icon: (0, n.jsx)(o.P, { size: "md", color: "currentColor", className: _.u }),
                        }),
                        (0, n.jsx)(j.A.Content, {
                            children: (0, n.jsx)(j.A.Notice, { notice: C.intl.string(m.default.LcM8BS) }),
                        }),
                    ],
                }),
                (0, n.jsx)(u.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: b, disabled: N },
                        {
                            variant: "critical-primary",
                            text: C.intl.string(m.default.dKxFcn),
                            onClick: () => {
                                g(!1), A(r.id);
                            },
                            disabled: N,
                            loading: N,
                        },
                    ],
                }),
            ],
        })
    );
};
