n.d(t, { default: () => b });
var a = n(627968),
    r = n(64700),
    s = n(284009),
    l = n.n(s),
    i = n(224640),
    c = n(683071),
    d = n(430993),
    o = n(173936),
    u = n(834730),
    h = n(696208),
    x = n(427262),
    p = n(10005),
    f = n(534654),
    C = n(208993),
    j = n(299628),
    g = n(477480),
    k = n(375708),
    m = n(209697);
let b = function (e) {
    let { currentUser: t, otherUser: n, transitionState: s, onClose: b } = e,
        A = r.useCallback(() => {
            b();
        }, [b]),
        w = (0, f.A)(),
        [y, N] = r.useState(!1),
        v = r.useCallback(() => {
            N(!0);
        }, []),
        { acceptLinkRequest: E, isAcceptLoading: S } = (0, p.A)({ onError: v, onSuccess: A });
    return (
        l()(w, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, a.jsxs)(i.d, {
            transitionState: s,
            onClose: b,
            "aria-label": k.intl.string(g.default.rlNJwZ),
            children: [
                y && (0, a.jsx)(c.w, { type: "critical", children: k.intl.string(g.default.pegSM5) }),
                (0, a.jsxs)(d.c, {
                    children: [
                        (0, a.jsx)(C.A.Header, {
                            currentUser: t,
                            otherUser: n,
                            header: k.intl.string(g.default.rlNJwZ),
                            icon: (0, a.jsx)(o.q, { size: "md", color: "currentColor", className: m.wP }),
                        }),
                        (0, a.jsxs)(C.A.Content, {
                            children: [
                                (0, a.jsx)(j.A, {}),
                                (0, a.jsx)(u.E, {
                                    className: m.ed,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: k.intl.format(g.default.snlFqR, { username: x.Ay.getName(n) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(h.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: b, disabled: S },
                        {
                            variant: "primary",
                            text: k.intl.string(g.default["wI/jo3"]),
                            onClick: function () {
                                N(!1), E(n.id);
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
