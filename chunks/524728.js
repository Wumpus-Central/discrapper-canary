n.d(t, { A: () => x });
var s = n(627968),
    i = n(64700),
    a = n(158954),
    r = n(397927),
    l = n(341915),
    o = n(73473),
    c = n(240710),
    d = n(985018),
    u = n(476946);
function m(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, s.jsx)(a.Modal, {
        size: "md",
        title: d.intl.string(d.t.Hd3D8W),
        actions: [{ variant: "primary", text: d.intl.string(d.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: n,
        children: (0, s.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: d.intl.string(d.t.Ij97SL),
        }),
    });
}
function x(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: a,
            onClose: d,
            rewardContent: x,
            isRewardContentLoading: _,
            rewardContentHasError: f,
            location: h,
        } = e,
        g = l.uF.REWARD_MODAL,
        [j, C] = i.useState(!0);
    if (f) return (0, s.jsx)(m, { onClose: d, transitionState: a });
    let v = _ || j;
    return (0, s.jsx)(o.R, {
        questOrQuests: t,
        questContent: g,
        sourceQuestContent: n,
        children: (e) =>
            (0, s.jsxs)(s.Fragment, {
                children: [
                    v ? (0, s.jsx)(r.y$y, { className: u.u1, type: r.y$y.Type.WANDERING_CUBES }) : null,
                    (0, s.jsx)("div", {
                        ref: e,
                        style: { visibility: v ? "hidden" : "visible" },
                        children: (0, s.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            transitionState: v ? r.ip4.HIDDEN : a,
                            size: r.rIJ.DYNAMIC,
                            className: u.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, s.jsx)(r.s_y, {
                                    "data-migration-pending": !0,
                                    className: u.b,
                                    onClick: d,
                                    withCircleBackground: !0,
                                }),
                                (0, s.jsxs)("div", {
                                    className: u.jE,
                                    children: [
                                        (0, s.jsx)("div", { className: u._H, children: x }),
                                        (0, s.jsx)("div", {
                                            className: u.xK,
                                            children: (0, s.jsx)(c.A, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => C(!1),
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
