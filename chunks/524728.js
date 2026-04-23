n.d(e, { A: () => p });
var i = n(627968),
    s = n(64700),
    a = n(189213),
    l = n(834730),
    r = n(192308),
    d = n(289873),
    o = n(935462),
    c = n(231723),
    u = n(341915),
    h = n(73473),
    m = n(545986),
    b = n(240710),
    f = n(654487),
    g = n(985018),
    x = n(63639);
function C(t) {
    let { onClose: e, transitionState: n } = t;
    return (0, i.jsx)(a.Modal, {
        size: "md",
        title: g.intl.string(g.t.Hd3D8W),
        actions: [{ variant: "primary", text: g.intl.string(g.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: n,
        children: (0, i.jsx)(l.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: g.intl.string(g.t.Ij97SL),
        }),
    });
}
function p(t) {
    let {
            quest: e,
            sourceQuestContent: n,
            transitionState: a,
            onClose: l,
            rewardContent: g,
            isRewardContentLoading: p,
            rewardContentHasError: I,
            location: N,
        } = t,
        A = u.uF.REWARD_MODAL,
        [v, j] = s.useState(!0),
        E = e.config.features.some((t) => f.Tz.has(t)),
        T = s.useCallback(async () => {
            E ? l() : (await (0, m.f7)(e.config.ctaConfig?.link)) && (l(), (0, r.closeAllModals)());
        }, [e.config.ctaConfig?.link, l, E]);
    if (I) return (0, i.jsx)(C, { onClose: l, transitionState: a });
    let _ = p || v;
    return (0, i.jsx)(h.R, {
        questOrQuests: e,
        questContent: A,
        sourceQuestContent: n,
        children: (t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    _ ? (0, i.jsx)(d.y, { className: x.u1, type: d.y.Type.WANDERING_CUBES }) : null,
                    (0, i.jsx)("div", {
                        ref: t,
                        style: { visibility: _ ? "hidden" : "visible" },
                        children: (0, i.jsxs)(o.EO, {
                            "data-migration-pending": !0,
                            transitionState: _ ? c.ip.HIDDEN : a,
                            size: o.rI.DYNAMIC,
                            className: x.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, i.jsx)(o.s_, {
                                    "data-migration-pending": !0,
                                    className: x.b,
                                    onClick: l,
                                    withCircleBackground: !0,
                                }),
                                (0, i.jsxs)("div", {
                                    className: x.jE,
                                    children: [
                                        (0, i.jsx)("div", { className: x._H, children: g }),
                                        (0, i.jsx)("div", {
                                            className: x.xK,
                                            children: (0, i.jsx)(b.A, {
                                                quest: e,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => j(!1),
                                                preCtaClick: T,
                                                location: N,
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
