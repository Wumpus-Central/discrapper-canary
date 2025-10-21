r.d(t, { default: () => h }), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(512722),
    o = r.n(a),
    l = r(481060),
    c = r(51144),
    s = r(985002),
    d = r(957656),
    u = r(130310),
    f = r(412297),
    b = r(388032),
    p = r(17279);
let h = (e) => {
    let { currentUser: t, otherUser: r, transitionState: a, onClose: h } = e,
        j = i.useCallback(() => {
            h();
        }, [h]),
        m = t.nsfwAllowed,
        [x, y] = i.useState(!1),
        g = i.useCallback(() => {
            y(!0);
        }, []),
        { acceptLinkRequest: O, isAcceptLoading: v } = (0, s.G)({
            onError: g,
            onSuccess: j,
        });
    return (
        o()(!m, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, n.jsxs)(l.IX, {
            transitionState: a,
            onClose: h,
            "aria-label": b.intl.string(f.default.rlNJwc),
            children: [
                x &&
                    (0, n.jsx)(l.M14, {
                        type: "critical",
                        children: b.intl.string(f.default.pegSMz),
                    }),
                (0, n.jsxs)(l.fef, {
                    children: [
                        (0, n.jsx)(d.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: b.intl.string(f.default.rlNJwc),
                            icon: (0, n.jsx)(l.xPt, {
                                size: "md",
                                color: "currentColor",
                                className: p.linkIcon,
                            }),
                        }),
                        (0, n.jsxs)(d.Z.Content, {
                            children: [
                                (0, n.jsx)(u.Z, { inModal: !0 }),
                                (0, n.jsx)(l.Text, {
                                    className: p.disclaimer,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: b.intl.format(f.default.snlFqa, { username: c.ZP.getName(r) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(l.Go$, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: b.intl.string(b.t["ETE/oK"]),
                            onClick: h,
                            disabled: v,
                        },
                        {
                            variant: "primary",
                            text: b.intl.string(f.default["wI/jo6"]),
                            onClick: () => {
                                y(!1), O(r.id);
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
