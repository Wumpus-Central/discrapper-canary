n.d(t, { default: () => b });
var a = n(477900),
    s = n(582128),
    r = n(284009),
    l = n.n(r),
    i = n(224640),
    o = n(683071),
    c = n(430993),
    d = n(173936),
    u = n(834730),
    x = n(696208),
    h = n(427262),
    p = n(10005),
    f = n(534654),
    C = n(208993),
    g = n(299628),
    j = n(513687),
    k = n(660183),
    m = n(67992);
let b = function (e) {
    let { currentUser: t, otherUser: n, transitionState: r, onClose: b } = e,
        A = s.useCallback(() => {
            b();
        }, [b]),
        w = (0, f.A)(),
        [y, N] = s.useState(!1),
        v = s.useCallback(() => {
            N(!0);
        }, []),
        { acceptLinkRequest: E, isAcceptLoading: S } = (0, p.A)({ onError: v, onSuccess: A });
    return (
        l()(w, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, a.jsxs)(i.d, {
            transitionState: r,
            onClose: b,
            "aria-label": k.intl.string(j.default.rlNJwZ),
            children: [
                y && (0, a.jsx)(o.w, { type: "critical", message: k.intl.string(j.default.pegSM5), role: "alert" }),
                (0, a.jsxs)(c.c, {
                    children: [
                        (0, a.jsx)(C.A.Header, {
                            currentUser: t,
                            otherUser: n,
                            header: k.intl.string(j.default.rlNJwZ),
                            icon: (0, a.jsx)(d.LinkIcon, { size: "md", color: "currentColor", className: m.wP }),
                        }),
                        (0, a.jsxs)(C.A.Content, {
                            children: [
                                (0, a.jsx)(g.A, {}),
                                (0, a.jsx)(u.E, {
                                    className: m.ed,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: k.intl.format(j.default.snlFqR, { username: h.Ay.getName(n) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(x.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: b, disabled: S },
                        {
                            variant: "primary",
                            text: k.intl.string(j.default["wI/jo3"]),
                            onClick: function () {
                                (N(!1), E(n.id));
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
