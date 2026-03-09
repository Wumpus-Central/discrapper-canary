n.d(t, { A: () => _ });
var s = n(627968),
    i = n(64700),
    a = n(158954),
    r = n(397927),
    l = n(341915),
    o = n(73473),
    c = n(545986),
    d = n(240710),
    u = n(985018),
    m = n(512508);
function x(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, s.jsx)(a.Modal, {
        size: "md",
        title: u.intl.string(u.t.Hd3D8W),
        actions: [{ variant: "primary", text: u.intl.string(u.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: n,
        children: (0, s.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: u.intl.string(u.t.Ij97SL),
        }),
    });
}
function _(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: a,
            onClose: u,
            rewardContent: _,
            isRewardContentLoading: f,
            rewardContentHasError: h,
            location: g,
        } = e,
        j = l.uF.REWARD_MODAL,
        [C, v] = i.useState(!0),
        N = i.useCallback(async () => {
            (await (0, c.f7)(t.config.ctaConfig.link)) && u();
        }, [t.config.ctaConfig.link, u]);
    if (h) return (0, s.jsx)(x, { onClose: u, transitionState: a });
    let p = f || C;
    return (0, s.jsx)(o.R, {
        questOrQuests: t,
        questContent: j,
        sourceQuestContent: n,
        children: (e) =>
            (0, s.jsxs)(s.Fragment, {
                children: [
                    p ? (0, s.jsx)(r.y$y, { className: m.u1, type: r.y$y.Type.WANDERING_CUBES }) : null,
                    (0, s.jsx)("div", {
                        ref: e,
                        style: { visibility: p ? "hidden" : "visible" },
                        children: (0, s.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            transitionState: p ? r.ip4.HIDDEN : a,
                            size: r.rIJ.DYNAMIC,
                            className: m.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, s.jsx)(r.s_y, {
                                    "data-migration-pending": !0,
                                    className: m.b,
                                    onClick: u,
                                    withCircleBackground: !0,
                                }),
                                (0, s.jsxs)("div", {
                                    className: m.jE,
                                    children: [
                                        (0, s.jsx)("div", { className: m._H, children: _ }),
                                        (0, s.jsx)("div", {
                                            className: m.xK,
                                            children: (0, s.jsx)(d.A, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => v(!1),
                                                preCtaClick: N,
                                                location: g,
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
