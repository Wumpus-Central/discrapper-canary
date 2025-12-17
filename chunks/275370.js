r.d(t, { default: () => j }), r(388685);
var n = r(54381),
    i = r(473749),
    o = r(512722),
    l = r.n(o),
    a = r(481060),
    c = r(51144),
    s = r(985002),
    d = r(957656),
    u = r(130310),
    f = r(517319),
    b = r(388032),
    p = r(823118);
let j = (e) => {
    let { currentUser: t, otherUser: r, transitionState: o, onClose: j } = e,
        h = i.useCallback(() => {
            j();
        }, [j]),
        x = t.nsfwAllowed,
        [m, g] = i.useState(!1),
        y = i.useCallback(() => {
            g(!0);
        }, []),
        { acceptLinkRequest: O, isAcceptLoading: v } = (0, s.G)({
            onError: y,
            onSuccess: h,
        });
    return (
        l()(!x, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, n.jsxs)(a.IX, {
            transitionState: o,
            onClose: j,
            "aria-label": b.intl.string(f.default.rlNJwZ),
            children: [
                m &&
                    (0, n.jsx)(a.M14, {
                        type: "critical",
                        children: b.intl.string(f.default.pegSM5),
                    }),
                (0, n.jsxs)(a.fef, {
                    children: [
                        (0, n.jsx)(d.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: b.intl.string(f.default.rlNJwZ),
                            icon: (0, n.jsx)(a.xPt, {
                                size: "md",
                                color: "currentColor",
                                className: p.linkIcon,
                            }),
                        }),
                        (0, n.jsxs)(d.Z.Content, {
                            children: [
                                (0, n.jsx)(u.Z, { inModal: !0 }),
                                (0, n.jsx)(a.Text, {
                                    className: p.disclaimer,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: b.intl.format(f.default.snlFqR, { username: c.ZP.getName(r) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(a.Go$, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: b.intl.string(b.t["ETE/oC"]),
                            onClick: j,
                            disabled: v,
                        },
                        {
                            variant: "primary",
                            text: b.intl.string(f.default["wI/jo3"]),
                            onClick: () => {
                                g(!1), O(r.id);
                            },
                            disabled: v,
                            loading: v,
                        },
                    ],
                }),
            ],
        })
    );
};
