t.d(n, { default: () => x });
var i = t(627968),
    a = t(64700),
    r = t(284009),
    l = t.n(r),
    s = t(224640),
    c = t(683071),
    d = t(430993),
    o = t(789645),
    u = t(696208),
    h = t(10005),
    C = t(438732),
    k = t(208993),
    p = t(602339),
    b = t(375708),
    f = t(798399);
let x = function (e) {
    let { currentUser: n, otherUser: t, transitionState: r, onClose: x } = e,
        [g, y] = a.useState(!1),
        j = a.useCallback(() => {
            y(!0);
        }, []),
        m = a.useCallback(() => {
            x();
        }, [x]),
        A = (0, C.A)(),
        { cancelLinkRequest: v, isCancelLoading: w } = (0, h.A)({ onError: j, onSuccess: m });
    return (
        l()(A, "FamilyCenterCancelLinkModal should only be rendered for parents."),
        (0, i.jsxs)(s.d, {
            transitionState: r,
            onClose: x,
            children: [
                g && (0, i.jsx)(c.w, { type: "critical", children: b.intl.string(p.default["6gyAQZ"]) }),
                (0, i.jsx)(d.c, {
                    children: (0, i.jsx)(k.A.Header, {
                        currentUser: n,
                        otherUser: t,
                        header: b.intl.string(p.default.HynllX),
                        icon: (0, i.jsx)(o.P, { size: "md", color: "currentColor", className: f.u }),
                    }),
                }),
                (0, i.jsx)(u.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: b.intl.string(p.default.czincX), onClick: x, disabled: w },
                        {
                            variant: "critical-primary",
                            text: b.intl.string(p.default.mK40bk),
                            onClick: function () {
                                y(!1), v(t.id);
                            },
                            disabled: w || g,
                            loading: w,
                        },
                    ],
                }),
            ],
        })
    );
};
