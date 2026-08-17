n.d(t, { default: () => b });
var a = n(477900),
    r = n(582128),
    s = n(284009),
    i = n.n(s),
    l = n(224640),
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
    k = n(602339),
    g = n(375708),
    m = n(803065);
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
        i()(w, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, a.jsxs)(l.d, {
            transitionState: s,
            onClose: b,
            "aria-label": g.intl.string(k.default.rlNJwZ),
            children: [
                y && (0, a.jsx)(c.w, { type: "critical", children: g.intl.string(k.default.pegSM5) }),
                (0, a.jsxs)(d.c, {
                    children: [
                        (0, a.jsx)(C.A.Header, {
                            currentUser: t,
                            otherUser: n,
                            header: g.intl.string(k.default.rlNJwZ),
                            icon: (0, a.jsx)(o.LinkIcon, { size: "md", color: "currentColor", className: m.wP }),
                        }),
                        (0, a.jsxs)(C.A.Content, {
                            children: [
                                (0, a.jsx)(j.A, {}),
                                (0, a.jsx)(u.E, {
                                    className: m.ed,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: g.intl.format(k.default.snlFqR, { username: x.Ay.getName(n) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(h.H, {
                    actionsFullWidth: !0,
                    actions: [
                        { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: b, disabled: S },
                        {
                            variant: "primary",
                            text: g.intl.string(k.default["wI/jo3"]),
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
