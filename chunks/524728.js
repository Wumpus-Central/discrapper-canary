n.d(t, { A: () => x }), n(896048);
var s = n(627968),
    i = n(64700),
    a = n(158954),
    r = n(397927),
    l = n(341915),
    c = n(73473),
    d = n(240710),
    o = n(985018),
    u = n(476946);
function m(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, s.jsx)(a.Modal, {
        size: "md",
        title: o.intl.string(o.t.Hd3D8W),
        actions: [
            {
                variant: "primary",
                text: o.intl.string(o.t.cpT0Cq),
                onClick: t,
            },
        ],
        onClose: t,
        transitionState: n,
        children: (0, s.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: o.intl.string(o.t.Ij97SL),
        }),
    });
}
function x(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: a,
            onClose: o,
            rewardContent: x,
            isRewardContentLoading: f,
            rewardContentHasError: h,
            location: j,
        } = e,
        g = l.uF.REWARD_MODAL,
        [v, N] = i.useState(!0);
    if (h)
        return (0, s.jsx)(m, {
            onClose: o,
            transitionState: a,
        });
    let b = f || v;
    return (0, s.jsx)(c.R, {
        questOrQuests: t,
        questContent: g,
        sourceQuestContent: n,
        children: (e) =>
            (0, s.jsxs)(s.Fragment, {
                children: [
                    b
                        ? (0, s.jsx)(r.y$y, {
                              className: u.u1,
                              type: r.y$y.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, s.jsx)("div", {
                        ref: e,
                        style: { visibility: b ? "hidden" : "visible" },
                        children: (0, s.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            transitionState: b ? r.ip4.HIDDEN : a,
                            size: r.rIJ.DYNAMIC,
                            className: u.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, s.jsx)(r.s_y, {
                                    "data-migration-pending": !0,
                                    className: u.b,
                                    onClick: o,
                                    withCircleBackground: !0,
                                }),
                                (0, s.jsxs)("div", {
                                    className: u.jE,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: u._H,
                                            children: x,
                                        }),
                                        (0, s.jsx)("div", {
                                            className: u.xK,
                                            children: (0, s.jsx)(d.A, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => N(!1),
                                                location: j,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
    });
}
