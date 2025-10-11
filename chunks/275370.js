r.d(t, { default: () => m }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(512722),
    a = r.n(o),
    s = r(481060),
    l = r(51144),
    c = r(985002),
    d = r(880257),
    u = r(957656),
    f = r(130310),
    p = r(345909),
    b = r(388032),
    h = r(986360);
let m = (e) => {
    let { currentUser: t, otherUser: r, transitionState: o, onClose: m } = e,
        j = i.useCallback(() => {
            m();
        }, [m]),
        x = (0, d.Z)(),
        [g, y] = i.useState(!1),
        O = i.useCallback(() => {
            y(!0);
        }, []),
        { acceptLinkRequest: v, isAcceptLoading: w } = (0, c.G)({
            onError: O,
            onSuccess: j,
        });
    return (
        a()(!x, "FamilyCenterAcceptLinkModal should only be rendered for teens."),
        (0, n.jsxs)(u.Z, {
            transitionState: o,
            "aria-label": b.intl.string(p.default.rlNJwc),
            className: h.root,
            children: [
                g &&
                    (0, n.jsx)(s.M14, {
                        type: "critical",
                        children: b.intl.string(p.default.pegSMz),
                    }),
                (0, n.jsxs)(s.hzk, {
                    "data-migration-pending": !0,
                    children: [
                        (0, n.jsx)(u.Z.Header, {
                            currentUser: t,
                            otherUser: r,
                            header: b.intl.string(p.default.rlNJwc),
                            icon: (0, n.jsx)(s.xPt, {
                                size: "md",
                                color: "currentColor",
                                className: h.linkIcon,
                            }),
                        }),
                        (0, n.jsxs)(u.Z.Content, {
                            children: [
                                (0, n.jsx)(f.Z, { inModal: !0 }),
                                (0, n.jsx)(s.Text, {
                                    className: h.disclaimer,
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: b.intl.format(p.default.snlFqa, { username: l.ZP.getName(r) }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(s.mzw, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)("form", {
                        onSubmit: (e) => {
                            y(!1), e.preventDefault(), v(r.id);
                        },
                        children: (0, n.jsx)(u.Z.ButtonFooter, {
                            children: (0, n.jsxs)(s.ButtonGroup, {
                                direction: "horizontal-reverse",
                                children: [
                                    (0, n.jsx)(s.Button, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: b.intl.string(b.t["ETE/oK"]),
                                        type: "button",
                                        disabled: w,
                                        onClick: m,
                                    }),
                                    (0, n.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: b.intl.string(p.default["wI/jo6"]),
                                        type: "submit",
                                        disabled: w,
                                        loading: w,
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            ],
        })
    );
};
