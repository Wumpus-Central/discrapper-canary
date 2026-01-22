a.d(t, {
    A: () => f,
}),
    a(896048);
var s = a(627968),
    n = a(64700),
    i = a(158954),
    c = a(397927),
    r = a(341915),
    l = a(73473),
    d = a(240710),
    o = a(985018),
    u = a(476946);

function m(e) {
    let { onClose: t, transitionState: a } = e;
    return (0, s.jsx)(i.Modal, {
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
        transitionState: a,
        children: (0, s.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: o.intl.string(o.t.Ij97SL),
        }),
    });
}

function f(e) {
    let {
            quest: t,
            sourceQuestContent: a,
            transitionState: i,
            onClose: o,
            rewardContent: f,
            isRewardContentLoading: x,
            rewardContentHasError: b,
            location: h,
        } = e,
        j = r.uF.REWARD_MODAL,
        [p, g] = n.useState(!0);
    if (b)
        return (0, s.jsx)(m, {
            onClose: o,
            transitionState: i,
        });
    let v = x || p;
    return (0, s.jsx)(l.R, {
        questOrQuests: t,
        questContent: j,
        sourceQuestContent: a,
        children: (e) =>
            (0, s.jsxs)(s.Fragment, {
                children: [
                    v
                        ? (0, s.jsx)(c.y$y, {
                              className: u.u1,
                              type: c.y$y.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, s.jsx)("div", {
                        ref: e,
                        style: {
                            visibility: v ? "hidden" : "visible",
                        },
                        children: (0, s.jsxs)(c.EOs, {
                            "data-migration-pending": !0,
                            transitionState: v ? c.ip4.HIDDEN : i,
                            size: c.rIJ.DYNAMIC,
                            className: u.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, s.jsx)(c.s_y, {
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
                                            children: f,
                                        }),
                                        (0, s.jsx)("div", {
                                            className: u.xK,
                                            children: (0, s.jsx)(d.A, {
                                                quest: t,
                                                sourceQuestContent: a,
                                                onLoadComplete: () => g(!1),
                                                location: h,
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
