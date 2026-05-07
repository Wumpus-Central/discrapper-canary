i.d(e, { A: () => X });
var n = i(627968),
    s = i(64700),
    a = i(189213),
    r = i(834730),
    l = i(192308),
    c = i(289873),
    o = i(935462),
    u = i(231723),
    d = i(507107),
    m = i(73473),
    f = i(617986),
    x = i(731355),
    g = i(366010),
    C = i(534514),
    N = i(825484),
    h = i(408278),
    j = i(173936),
    A = i(821609),
    p = i(743368),
    T = i(990078),
    _ = i(736653),
    E = i(859387),
    I = i(590202),
    v = i(971649),
    y = i(651892),
    O = i(901406),
    R = i(814793),
    L = i(241124),
    k = i(918338),
    D = i(371912),
    M = i(17928),
    b = i(793574),
    w = i(532794),
    W = i(976860),
    P = i(287809),
    q = i(975571),
    S = i(474090),
    H = i(561844),
    Y = i(190107),
    G = i(652215),
    Q = i(788868),
    z = i(375708),
    V = i(237146),
    F = i(818348),
    K = i(970197);
function U(t) {
    let { quest: e, sourceQuestContent: i, onLoadComplete: a, preCtaClick: l } = t,
        c = (0, _.Ay)(),
        o = (0, g.M)(c) ? F.NJ.DARK : F.NJ.LIGHT,
        u = (0, v.go)(),
        m = (0, R.E0)(e.config),
        f = async () => {
            await l?.(),
                (0, O.pu)(e, {
                    content: d.uF.REWARD_MODAL,
                    ctaContent: I.Cy.OPEN_GAME_LINK,
                    impressionId: u,
                    sourceQuestContent: i,
                });
        },
        U = s.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, R.pv)(e.config) !== x.Z.GAMEPLAY ||
                    e.config.features.includes(Y.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, R.ui)(e)
                  ? z.intl.string(z.t.y8Xf3k)
                  : z.intl.string(z.t["wirwN+"]);
        }, [e]),
        Z = (function (t, e, i) {
            let n = t.config.features.some((t) => Y.Tz.has(t)),
                a = (0, M.bG)([P.default], () => P.default.getCurrentUser()),
                r = (0, S.YE)(a, Q.PremiumTypes.TIER_2),
                l = (0, S.ki)(a),
                c = s.useCallback(async () => {
                    n &&
                        (r
                            ? ((0, H.Y5)({
                                  questId: t.id,
                                  questContent: d.uF.REWARD_MODAL,
                                  questContentCTA: I.Cy.OPEN_NITRO_HOME,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await i?.(),
                              (0, W.pX)(G.BVt.NITRO_HOME))
                            : ((0, H.Y5)({
                                  questId: t.id,
                                  questContent: d.uF.REWARD_MODAL,
                                  questContentCTA: I.Cy.OPEN_NITRO_CHECKOUT,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await i?.(),
                              await (0, w.A)({
                                  subscriptionTier: Q.pe.TIER_2,
                                  analyticsLocations: [b.A.QUEST_REWARD_MODAL],
                              })));
                }, [n, r, t.id, e.impressionId, e.sourceQuestContent, i]);
            if (!n) return null;
            if (t.config.features.includes(Y.Li.NITRO_2_POINT_0_CTA)) {
                let t = q.A.getArticleURL(G.MVz.NITRO_2_POINT_0);
                return r
                    ? {
                          title: z.intl.string(V.default.LIc2xy),
                          subtitle: z.intl.format(V.default.gzazAe, { helpCenterLink: t }),
                          ctaText: z.intl.string(V.default.HlVJm0),
                          ctaVariant: "primary",
                          onClickCta: c,
                      }
                    : l
                      ? {
                            title: z.intl.string(V.default.HTsycG),
                            subtitle: z.intl.format(V.default["3JKWU6"], { helpCenterLink: t }),
                            ctaText: z.intl.string(V.default["2iX+XV"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        }
                      : {
                            title: z.intl.string(V.default.bOf5IH),
                            subtitle: z.intl.format(V.default.SzOYGc, { helpCenterLink: t }),
                            ctaText: z.intl.string(V.default["620Iwi"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        };
            }
            return null;
        })(e, { impressionId: u, sourceQuestContent: i }, l) ?? {
            ctaText: (0, y.wr)(e),
            ctaVariant: "primary",
            onClickCta: f,
            title: z.intl.format(z.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: U,
            ctaIconPosition: "end",
        },
        { isLoading: B } = (0, L.Gk)();
    s.useEffect(() => {
        B || a();
    }, [B, a]);
    let J = (0, D.Lk)({
        isShareable: m,
        questId: e.id,
        trackingCtx: s.useMemo(
            () => ({
                content: d.uF.REWARD_MODAL,
                ctaContent: I.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: u,
                sourceQuestContent: i,
            }),
            [u, i],
        ),
    });
    return (0, n.jsxs)("div", {
        className: K.kL,
        children: [
            (0, n.jsx)(L.Sn, {
                id: "hero-display",
                children: (t) =>
                    (0, n.jsx)(k.A, {
                        quest: e,
                        imageSize: { width: 908, height: 380 },
                        containerClassName: K.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, n.jsx)("div", {
                className: K.Lt,
                children: (0, n.jsx)(L.Sn, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, n.jsx)("img", {
                            ref: t,
                            className: K.a$,
                            alt: z.intl.formatToPlainString(z.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, E.tW)(e, E.fY.LOGO_TYPE, o).url,
                        }),
                }),
            }),
            (0, n.jsxs)("div", {
                className: K.Th,
                children: [
                    (0, n.jsxs)("div", {
                        className: K.Ly,
                        children: [
                            (0, n.jsx)(C.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: K.fx,
                                children: Z.title,
                            }),
                            (0, n.jsx)(r.E, { variant: "text-sm/medium", color: "text-subtle", children: Z.subtitle }),
                        ],
                    }),
                    (0, n.jsx)(L.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, n.jsx)("img", {
                                ref: t,
                                className: K.rw,
                                alt: z.intl.formatToPlainString(z.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, E.tW)(e, E.fY.GAME_TILE, o).url,
                            }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: K.tu,
                children: (0, n.jsxs)(N.e, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        m &&
                            (0, n.jsx)(T.m, {
                                text: z.intl.string(z.t.WmfZHZ),
                                children: (0, n.jsx)(h.K, {
                                    icon: j.q,
                                    onClick: J,
                                    "aria-label": z.intl.string(z.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, n.jsx)(A.$, {
                            variant: Z.ctaVariant,
                            text: Z.ctaText,
                            onClick: Z.onClickCta,
                            fullWidth: !0,
                            icon: p.W,
                            iconPosition: Z.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function Z(t) {
    let { quest: e, location: i } = t;
    return (0, n.jsx)(L.jY, { source: i, questId: e.id, isPreview: e.preview, children: (0, n.jsx)(U, { ...t }) });
}
var B = i(63639);
function J(t) {
    let { onClose: e, transitionState: i } = t;
    return (0, n.jsx)(a.Modal, {
        size: "md",
        title: z.intl.string(z.t.Hd3D8W),
        actions: [{ variant: "primary", text: z.intl.string(z.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: i,
        children: (0, n.jsx)(r.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: z.intl.string(z.t.Ij97SL),
        }),
    });
}
function X(t) {
    let {
            quest: e,
            sourceQuestContent: i,
            transitionState: a,
            onClose: r,
            rewardContent: x,
            isRewardContentLoading: g,
            rewardContentHasError: C,
            location: N,
        } = t,
        h = d.uF.REWARD_MODAL,
        [j, A] = s.useState(!0),
        p = e.config.features.some((t) => Y.Tz.has(t)),
        T = s.useCallback(async () => {
            if (p) {
                r(), (0, l.closeAllModals)();
                return;
            }
            (await (0, f.f7)(e.config.ctaConfig?.link)) && (r(), (0, l.closeAllModals)());
        }, [e.config.ctaConfig?.link, r, p]);
    if (C) return (0, n.jsx)(J, { onClose: r, transitionState: a });
    let _ = g || j;
    return (0, n.jsx)(m.R, {
        questOrQuests: e,
        questContent: h,
        sourceQuestContent: i,
        children: (t) =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    _ ? (0, n.jsx)(c.y, { className: B.u1, type: c.y.Type.WANDERING_CUBES }) : null,
                    (0, n.jsx)("div", {
                        ref: t,
                        style: { visibility: _ ? "hidden" : "visible" },
                        children: (0, n.jsxs)(o.EO, {
                            "data-migration-pending": !0,
                            transitionState: _ ? u.ip.HIDDEN : a,
                            size: o.rI.DYNAMIC,
                            className: B.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, n.jsx)(o.s_, {
                                    "data-migration-pending": !0,
                                    className: B.b,
                                    onClick: r,
                                    withCircleBackground: !0,
                                }),
                                (0, n.jsxs)("div", {
                                    className: B.jE,
                                    children: [
                                        (0, n.jsx)("div", { className: B._H, children: x }),
                                        (0, n.jsx)("div", {
                                            className: B.xK,
                                            children: (0, n.jsx)(Z, {
                                                quest: e,
                                                sourceQuestContent: i,
                                                onLoadComplete: () => A(!1),
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
