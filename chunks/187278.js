n.d(t, { default: () => g });
var a = n(477900),
    i = n(582128),
    r = n(284009),
    l = n.n(r),
    s = n(224640),
    c = n(683071),
    d = n(430993),
    o = n(789645),
    u = n(696208),
    h = n(10005),
    C = n(438732),
    k = n(208993),
    p = n(513687),
    b = n(660183),
    f = n(96954);
let g = function (e) {
    let { currentUser: t, otherUser: n, transitionState: r, onClose: g } = e,
        [x, y] = i.useState(!1),
        j = i.useCallback(() => {
            y(!0);
        }, []),
        m = i.useCallback(() => {
            g();
        }, [g]),
        A = (0, C.A)(),
        { cancelLinkRequest: v, isCancelLoading: w } = (0, h.A)({ onError: j, onSuccess: m });
    return (
        l()(A, "FamilyCenterCancelLinkModal should only be rendered for parents."),
        (0, a.jsxs)(s.d, {
            transitionState: r,
            onClose: g,
            children: [
                x && (0, a.jsx)(c.w, { type: "critical", message: b.intl.string(p.default["6gyAQZ"]), role: "alert" }),
                (0, a.jsx)(d.c, {
                    children: (0, a.jsx)(k.A.Header, {
                        currentUser: t,
                        otherUser: n,
                        header: b.intl.string(p.default.HynllX),
                        icon: (0, a.jsx)(o.P, { size: "md", color: "currentColor", className: f.u }),
                    }),
                }),
                (0, a.jsx)(u.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: b.intl.string(p.default.czincX), onClick: g, disabled: w },
                        {
                            variant: "critical-primary",
                            text: b.intl.string(p.default.mK40bk),
                            onClick: function () {
                                (y(!1), v(n.id));
                            },
                            disabled: w || x,
                            loading: w,
                        },
                    ],
                }),
            ],
        })
    );
};
