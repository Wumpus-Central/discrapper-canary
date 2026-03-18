n.d(t, { A: () => f });
var a = n(627968),
    s = n(64700),
    i = n(158954),
    r = n(397927),
    l = n(341915),
    o = n(73473),
    c = n(545986),
    d = n(240710),
    u = n(985018),
    m = n(476946);
function x(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, a.jsx)(i.Modal, {
        size: "md",
        title: u.intl.string(u.t.Hd3D8W),
        actions: [{ variant: "primary", text: u.intl.string(u.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: n,
        children: (0, a.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: u.intl.string(u.t.Ij97SL),
        }),
    });
}
function f(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: i,
            onClose: u,
            rewardContent: f,
            isRewardContentLoading: _,
            rewardContentHasError: h,
            location: p,
        } = e,
        g = l.uF.REWARD_MODAL,
        [j, C] = s.useState(!0),
        A = s.useCallback(async () => {
            (await (0, c.f7)(t.config.ctaConfig.link)) && (u(), (0, r.s7G)());
        }, [t.config.ctaConfig.link, u]);
    if (h) return (0, a.jsx)(x, { onClose: u, transitionState: i });
    let b = _ || j;
    return (0, a.jsx)(o.R, {
        questOrQuests: t,
        questContent: g,
        sourceQuestContent: n,
        children: (e) =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    b ? (0, a.jsx)(r.y$y, { className: m.u1, type: r.y$y.Type.WANDERING_CUBES }) : null,
                    (0, a.jsx)("div", {
                        ref: e,
                        style: { visibility: b ? "hidden" : "visible" },
                        children: (0, a.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            transitionState: b ? r.ip4.HIDDEN : i,
                            size: r.rIJ.DYNAMIC,
                            className: m.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, a.jsx)(r.s_y, {
                                    "data-migration-pending": !0,
                                    className: m.b,
                                    onClick: u,
                                    withCircleBackground: !0,
                                }),
                                (0, a.jsxs)("div", {
                                    className: m.jE,
                                    children: [
                                        (0, a.jsx)("div", { className: m._H, children: f }),
                                        (0, a.jsx)("div", {
                                            className: m.xK,
                                            children: (0, a.jsx)(d.A, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => C(!1),
                                                preCtaClick: A,
                                                location: p,
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
