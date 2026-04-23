n.d(e, { A: () => I });
var i = n(627968),
    s = n(64700),
    a = n(189213),
    r = n(834730),
    l = n(192308),
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
        children: (0, i.jsx)(r.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: g.intl.string(g.t.Ij97SL),
        }),
    });
}
function I(t) {
    let {
            quest: e,
            sourceQuestContent: n,
            transitionState: a,
            onClose: r,
            rewardContent: g,
            isRewardContentLoading: I,
            rewardContentHasError: N,
            location: A,
        } = t,
        p = u.uF.REWARD_MODAL,
        [v, E] = s.useState(!0),
        j = e.config.features.some((t) => f.Tz.has(t)),
        T = s.useCallback(async () => {
            j ? r() : (await (0, m.f7)(e.config.ctaConfig?.link)) && (r(), (0, l.closeAllModals)());
        }, [e.config.ctaConfig?.link, r, j]);
    if (N) return (0, i.jsx)(C, { onClose: r, transitionState: a });
    let _ = I || v;
    return (0, i.jsx)(h.R, {
        questOrQuests: e,
        questContent: p,
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
                                    onClick: r,
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
                                                onLoadComplete: () => E(!1),
                                                preCtaClick: T,
                                                location: A,
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
