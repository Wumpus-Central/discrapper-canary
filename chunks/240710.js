n.d(t, { A: () => y });
var s = n(627968),
    i = n(64700),
    a = n(731355),
    r = n(158954),
    l = n(435371),
    o = n(736653),
    c = n(341915),
    d = n(579473),
    u = n(590202),
    m = n(971649),
    x = n(651892),
    _ = n(901406),
    f = n(814793),
    h = n(241124),
    g = n(918338),
    j = n(201805),
    C = n(654487),
    v = n(818348),
    N = n(985018),
    p = n(861616);
function A(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: A } = e,
        y = (0, o.Ay)(),
        E = (0, r.Mwr)(y) ? v.NJ.DARK : v.NJ.LIGHT,
        L = (0, x.wr)(t),
        w = (0, m.go)(),
        T = (0, f.E0)(t.config),
        b = i.useMemo(() => {
            let e = t.config.ctaConfig?.subtitle;
            return null != e
                ? e
                : (0, f.pv)(t.config) !== a.Z.GAMEPLAY ||
                    t.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, f.ui)(t)
                  ? N.intl.string(N.t.y8Xf3k)
                  : N.intl.string(N.t["wirwN+"]);
        }, [t]),
        { isLoading: D } = (0, h.Gk)();
    i.useEffect(() => {
        D || A();
    }, [D, A]);
    let M = (0, j.Lk)({
        isShareable: T,
        questId: t.id,
        trackingCtx: i.useMemo(
            () => ({
                content: c.uF.REWARD_MODAL,
                ctaContent: u.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: w,
                sourceQuestContent: n,
            }),
            [w, n],
        ),
    });
    return (0, s.jsxs)("div", {
        className: p.kL,
        children: [
            (0, s.jsx)(h.Sn, {
                id: "hero-display",
                children: (e) =>
                    (0, s.jsx)(g.A, {
                        quest: t,
                        imageSize: { width: 908, height: 380 },
                        containerClassName: p.WQ,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, s.jsx)("div", {
                className: p.Lt,
                children: (0, s.jsx)(h.Sn, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, s.jsx)("img", {
                            ref: e,
                            className: p.a$,
                            alt: N.intl.formatToPlainString(N.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, d.tW)(t, d.fY.LOGO_TYPE, E).url,
                        }),
                }),
            }),
            (0, s.jsxs)("div", {
                className: p.Th,
                children: [
                    (0, s.jsxs)("div", {
                        className: p.Ly,
                        children: [
                            (0, s.jsx)(r.DZT, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: p.fx,
                                children: N.intl.format(N.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, s.jsx)(r.EYj, { variant: "text-sm/medium", color: "text-subtle", children: b }),
                        ],
                    }),
                    (0, s.jsx)(h.Sn, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, s.jsx)("img", {
                                ref: e,
                                className: p.rw,
                                alt: N.intl.formatToPlainString(N.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, d.tW)(t, d.fY.GAME_TILE, E).url,
                            }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: p.tu,
                children: (0, s.jsxs)(r.e2v, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        T &&
                            (0, s.jsx)(l.m_, {
                                text: N.intl.string(N.t.WmfZHZ),
                                children: (0, s.jsx)(r.K0, {
                                    icon: r.qYV,
                                    onClick: M,
                                    "aria-label": N.intl.string(N.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, s.jsx)(r.$nd, {
                            variant: "primary",
                            text: L,
                            onClick: () => {
                                (0, _.pu)(t, {
                                    content: c.uF.REWARD_MODAL,
                                    ctaContent: u.Cy.OPEN_GAME_LINK,
                                    impressionId: w,
                                    sourceQuestContent: n,
                                });
                            },
                            fullWidth: !0,
                            icon: r.We5,
                            iconPosition: "end",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function y(e) {
    let { quest: t, location: n } = e;
    return (0, s.jsx)(h.jY, { source: n, questId: t.id, isPreview: t.preview, children: (0, s.jsx)(A, { ...e }) });
}
