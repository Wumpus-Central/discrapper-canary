n.d(t, { default: () => g });
var i = n(477900),
    s = n(582128),
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
    k = n(82157),
    p = n(105292),
    f = n(610746);
let g = function (e) {
    let { currentUser: t, otherUser: n, transitionState: r, onClose: g } = e,
        [j, b] = s.useState(!1),
        y = s.useCallback(() => {
            b(!0);
        }, []),
        A = s.useCallback(() => {
            g();
        }, [g]),
        m = (0, C.A)(),
        { declineLinkRequest: L, isDeclineLoading: S } = (0, h.A)({ onError: y, onSuccess: A });
    return (
        l()(m, "FamilyCenterDeclineLinkModal should only be rendered for teens."),
        (0, i.jsxs)(a.d, {
            transitionState: r,
            onClose: g,
            children: [
                j && (0, i.jsx)(c.w, { type: "critical", message: p.intl.string(k.default.tJAUyn), role: "alert" }),
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
                        { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: g, disabled: S },
                        {
                            variant: "critical-primary",
                            text: p.intl.string(k.default.dKxFcn),
                            onClick: function () {
                                (b(!1), L(n.id));
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
