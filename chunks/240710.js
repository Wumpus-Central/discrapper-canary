n.d(e, { A: () => k });
var i = n(627968),
    s = n(64700),
    a = n(731355),
    l = n(366010),
    r = n(743368),
    d = n(534514),
    o = n(834730),
    c = n(825484),
    u = n(408278),
    h = n(173936),
    m = n(821609),
    b = n(990078),
    f = n(736653),
    g = n(341915),
    x = n(579473),
    C = n(590202),
    p = n(971649),
    I = n(651892),
    N = n(901406),
    A = n(814793),
    v = n(241124),
    j = n(918338),
    E = n(201805),
    T = n(491145),
    _ = n(654487),
    y = n(818348),
    R = n(985018),
    O = n(27669);
function L(t) {
    let { quest: e, sourceQuestContent: n, onLoadComplete: L, preCtaClick: k } = t,
        M = (0, f.Ay)(),
        w = (0, l.M)(M) ? y.NJ.DARK : y.NJ.LIGHT,
        D = (0, p.go)(),
        S = (0, A.E0)(e.config),
        W = async () => {
            await k?.(),
                (0, N.pu)(e, {
                    content: g.uF.REWARD_MODAL,
                    ctaContent: C.Cy.OPEN_GAME_LINK,
                    impressionId: D,
                    sourceQuestContent: n,
                });
        },
        P = s.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, A.pv)(e.config) !== a.Z.GAMEPLAY ||
                    e.config.features.includes(_.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, A.ui)(e)
                  ? R.intl.string(R.t.y8Xf3k)
                  : R.intl.string(R.t["wirwN+"]);
        }, [e]),
        V = (0, T.A)(e, { impressionId: D, sourceQuestContent: n }, k) ?? {
            ctaText: (0, I.wr)(e),
            ctaIcon: r.W,
            ctaVariant: "primary",
            onClickCta: W,
            title: R.intl.format(R.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: P,
            ctaIconPosition: "end",
        },
        { isLoading: z } = (0, v.Gk)();
    s.useEffect(() => {
        z || L();
    }, [z, L]);
    let G = (0, E.Lk)({
        isShareable: S,
        questId: e.id,
        trackingCtx: s.useMemo(
            () => ({
                content: g.uF.REWARD_MODAL,
                ctaContent: C.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: D,
                sourceQuestContent: n,
            }),
            [D, n],
        ),
    });
    return (0, i.jsxs)("div", {
        className: O.kL,
        children: [
            (0, i.jsx)(v.Sn, {
                id: "hero-display",
                children: (t) =>
                    (0, i.jsx)(j.A, {
                        quest: e,
                        imageSize: { width: 908, height: 380 },
                        containerClassName: O.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, i.jsx)("div", {
                className: O.Lt,
                children: (0, i.jsx)(v.Sn, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: O.a$,
                            alt: R.intl.formatToPlainString(R.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, x.tW)(e, x.fY.LOGO_TYPE, w).url,
                        }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: O.Th,
                children: [
                    (0, i.jsxs)("div", {
                        className: O.Ly,
                        children: [
                            (0, i.jsx)(d.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: O.fx,
                                children: V.title,
                            }),
                            (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", children: V.subtitle }),
                        ],
                    }),
                    (0, i.jsx)(v.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, i.jsx)("img", {
                                ref: t,
                                className: O.rw,
                                alt: R.intl.formatToPlainString(R.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, x.tW)(e, x.fY.GAME_TILE, w).url,
                            }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: O.tu,
                children: (0, i.jsxs)(c.e, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        S &&
                            (0, i.jsx)(b.m, {
                                text: R.intl.string(R.t.WmfZHZ),
                                children: (0, i.jsx)(u.K, {
                                    icon: h.q,
                                    onClick: G,
                                    "aria-label": R.intl.string(R.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, i.jsx)(m.$, {
                            variant: V.ctaVariant,
                            text: V.ctaText,
                            onClick: V.onClickCta,
                            fullWidth: !0,
                            icon: V.ctaIcon,
                            iconPosition: V.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function k(t) {
    let { quest: e, location: n } = t;
    return (0, i.jsx)(v.jY, { source: n, questId: e.id, isPreview: e.preview, children: (0, i.jsx)(L, { ...t }) });
}
