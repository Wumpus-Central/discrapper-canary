n.d(t, { default: () => j });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    l = n.n(r),
    a = n(224640),
    c = n(683071),
    d = n(430993),
    o = n(789645),
    u = n(696208),
    h = n(10005),
    C = n(534654),
    x = n(208993),
    k = n(602339),
    p = n(375708),
    f = n(971653);
let j = function (e) {
    let { currentUser: t, otherUser: n, transitionState: r, onClose: j } = e,
        [b, g] = s.useState(!1),
        y = s.useCallback(() => {
            g(!0);
        }, []),
        A = s.useCallback(() => {
            j();
        }, [j]),
        m = (0, C.A)(),
        { declineLinkRequest: L, isDeclineLoading: S } = (0, h.A)({ onError: y, onSuccess: A });
    return (
        l()(m, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, i.jsxs)(a.d, {
            transitionState: r,
            onClose: j,
            children: [
                b && (0, i.jsx)(c.w, { type: "critical", children: p.intl.string(k.default.tJAUyn) }),
                (0, i.jsxs)(d.c, {
                    children: [
                        (0, i.jsx)(x.A.Header, {
                            currentUser: t,
                            otherUser: n,
                            header: p.intl.string(k.default.teIRCR),
                            icon: (0, i.jsx)(o.P, { size: "md", color: "currentColor", className: f.u }),
                        }),
                        (0, i.jsx)(x.A.Content, {
                            children: (0, i.jsx)(x.A.Notice, { notice: p.intl.string(k.default.LcM8BS) }),
                        }),
                    ],
                }),
                (0, i.jsx)(u.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: j, disabled: S },
                        {
                            variant: "critical-primary",
                            text: p.intl.string(k.default.dKxFcn),
                            onClick: function () {
                                g(!1), L(n.id);
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
