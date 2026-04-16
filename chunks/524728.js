n.d(e, { A: () => f });
var i = n(627968),
    s = n(64700),
    a = n(158954),
    r = n(397927),
    l = n(341915),
    d = n(73473),
    o = n(545986),
    c = n(240710),
    u = n(654487),
    m = n(985018),
    h = n(63639);
function x(t) {
    let { onClose: e, transitionState: n } = t;
    return (0, i.jsx)(a.Modal, {
        size: "md",
        title: m.intl.string(m.t.Hd3D8W),
        actions: [{ variant: "primary", text: m.intl.string(m.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: n,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: m.intl.string(m.t.Ij97SL),
        }),
    });
}
function f(t) {
    let {
            quest: e,
            sourceQuestContent: n,
            transitionState: a,
            onClose: m,
            rewardContent: f,
            isRewardContentLoading: g,
            rewardContentHasError: C,
            location: b,
        } = t,
        N = l.uF.REWARD_MODAL,
        [p, A] = s.useState(!0),
        j = e.config.features.some((t) => u.Tz.has(t)),
        I = s.useCallback(async () => {
            j ? m() : (await (0, o.f7)(e.config.ctaConfig?.link)) && (m(), (0, r.s7G)());
        }, [e.config.ctaConfig?.link, m, j]);
    if (C) return (0, i.jsx)(x, { onClose: m, transitionState: a });
    let v = g || p;
    return (0, i.jsx)(d.R, {
        questOrQuests: e,
        questContent: N,
        sourceQuestContent: n,
        children: (t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    v ? (0, i.jsx)(r.y$y, { className: h.u1, type: r.y$y.Type.WANDERING_CUBES }) : null,
                    (0, i.jsx)("div", {
                        ref: t,
                        style: { visibility: v ? "hidden" : "visible" },
                        children: (0, i.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            transitionState: v ? r.ip4.HIDDEN : a,
                            size: r.rIJ.DYNAMIC,
                            className: h.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, i.jsx)(r.s_y, {
                                    "data-migration-pending": !0,
                                    className: h.b,
                                    onClick: m,
                                    withCircleBackground: !0,
                                }),
                                (0, i.jsxs)("div", {
                                    className: h.jE,
                                    children: [
                                        (0, i.jsx)("div", { className: h._H, children: f }),
                                        (0, i.jsx)("div", {
                                            className: h.xK,
                                            children: (0, i.jsx)(c.A, {
                                                quest: e,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => A(!1),
                                                preCtaClick: I,
                                                location: b,
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
