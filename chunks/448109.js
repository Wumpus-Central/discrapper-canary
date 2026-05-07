i.d(e, { A: () => $ });
var n = i(627968),
    s = i(64700),
    a = i(189213),
    r = i(815021),
    l = i(834730),
    c = i(192308),
    o = i(289873),
    u = i(935462),
    d = i(231723),
    m = i(507107),
    f = i(73473),
    x = i(617986),
    g = i(731355),
    C = i(366010),
    N = i(534514),
    h = i(825484),
    j = i(408278),
    A = i(173936),
    p = i(821609),
    T = i(743368),
    E = i(990078),
    I = i(736653),
    _ = i(859387),
    v = i(590202),
    y = i(971649),
    O = i(651892),
    R = i(901406),
    L = i(814793),
    k = i(241124),
    D = i(918338),
    M = i(371912),
    b = i(17928),
    W = i(793574),
    w = i(532794),
    P = i(976860),
    q = i(287809),
    S = i(975571),
    H = i(474090),
    Y = i(561844),
    z = i(190107),
    G = i(652215),
    Q = i(788868),
    V = i(375708),
    F = i(237146),
    K = i(818348),
    U = i(970197);
function Z(t) {
    let { quest: e, sourceQuestContent: i, onLoadComplete: a, preCtaClick: r } = t,
        c = (0, I.Ay)(),
        o = (0, C.M)(c) ? K.NJ.DARK : K.NJ.LIGHT,
        u = (0, y.go)(),
        d = (0, L.E0)(e.config),
        f = async () => {
            await r?.(),
                (0, R.pu)(e, {
                    content: m.uF.REWARD_MODAL,
                    ctaContent: v.Cy.OPEN_GAME_LINK,
                    impressionId: u,
                    sourceQuestContent: i,
                });
        },
        x = s.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, L.pv)(e.config) !== g.Z.GAMEPLAY ||
                    e.config.features.includes(z.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, L.ui)(e)
                  ? V.intl.string(V.t.y8Xf3k)
                  : V.intl.string(V.t["wirwN+"]);
        }, [e]),
        Z = (function (t, e, i) {
            let n = t.config.features.some((t) => z.Tz.has(t)),
                a = (0, b.bG)([q.default], () => q.default.getCurrentUser()),
                r = (0, H.YE)(a, Q.PremiumTypes.TIER_2),
                l = (0, H.ki)(a),
                c = s.useCallback(async () => {
                    n &&
                        (r
                            ? ((0, Y.Y5)({
                                  questId: t.id,
                                  questContent: m.uF.REWARD_MODAL,
                                  questContentCTA: v.Cy.OPEN_NITRO_HOME,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await i?.(),
                              (0, P.pX)(G.BVt.NITRO_HOME))
                            : ((0, Y.Y5)({
                                  questId: t.id,
                                  questContent: m.uF.REWARD_MODAL,
                                  questContentCTA: v.Cy.OPEN_NITRO_CHECKOUT,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await i?.(),
                              await (0, w.A)({
                                  subscriptionTier: Q.pe.TIER_2,
                                  analyticsLocations: [W.A.QUEST_REWARD_MODAL],
                              })));
                }, [n, r, t.id, e.impressionId, e.sourceQuestContent, i]);
            if (!n) return null;
            if (t.config.features.includes(z.Li.NITRO_2_POINT_0_CTA)) {
                let t = S.A.getArticleURL(G.MVz.NITRO_2_POINT_0);
                return r
                    ? {
                          title: V.intl.string(F.default.LIc2xy),
                          subtitle: V.intl.format(F.default.gzazAe, { helpCenterLink: t }),
                          ctaText: V.intl.string(F.default.HlVJm0),
                          ctaVariant: "primary",
                          onClickCta: c,
                      }
                    : l
                      ? {
                            title: V.intl.string(F.default.HTsycG),
                            subtitle: V.intl.format(F.default["3JKWU6"], { helpCenterLink: t }),
                            ctaText: V.intl.string(F.default["2iX+XV"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        }
                      : {
                            title: V.intl.string(F.default.bOf5IH),
                            subtitle: V.intl.format(F.default.SzOYGc, { helpCenterLink: t }),
                            ctaText: V.intl.string(F.default["620Iwi"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        };
            }
            return null;
        })(e, { impressionId: u, sourceQuestContent: i }, r) ?? {
            ctaText: (0, O.wr)(e),
            ctaVariant: "primary",
            onClickCta: f,
            title: V.intl.format(V.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: x,
            ctaIconPosition: "end",
        },
        { isLoading: J } = (0, k.Gk)();
    s.useEffect(() => {
        J || a();
    }, [J, a]);
    let X = (0, M.Lk)({
        isShareable: d,
        questId: e.id,
        trackingCtx: s.useMemo(
            () => ({
                content: m.uF.REWARD_MODAL,
                ctaContent: v.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: u,
                sourceQuestContent: i,
            }),
            [u, i],
        ),
    });
    return (0, n.jsxs)("div", {
        className: U.kL,
        children: [
            (0, n.jsx)(k.Sn, {
                id: "hero-display",
                children: (t) =>
                    (0, n.jsx)(D.A, {
                        quest: e,
                        imageSize: { width: 908, height: 380 },
                        containerClassName: U.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, n.jsx)("div", {
                className: U.Lt,
                children: (0, n.jsx)(k.Sn, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, n.jsx)("img", {
                            ref: t,
                            className: U.a$,
                            alt: V.intl.formatToPlainString(V.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, _.tW)(e, _.fY.LOGO_TYPE, o).url,
                        }),
                }),
            }),
            (0, n.jsxs)("div", {
                className: U.Th,
                children: [
                    (0, n.jsxs)("div", {
                        className: U.Ly,
                        children: [
                            (0, n.jsx)(N.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: U.fx,
                                children: Z.title,
                            }),
                            (0, n.jsx)(l.E, { variant: "text-sm/medium", color: "text-subtle", children: Z.subtitle }),
                        ],
                    }),
                    (0, n.jsx)(k.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, n.jsx)("img", {
                                ref: t,
                                className: U.rw,
                                alt: V.intl.formatToPlainString(V.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, _.tW)(e, _.fY.GAME_TILE, o).url,
                            }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: U.tu,
                children: (0, n.jsxs)(h.e, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        d &&
                            (0, n.jsx)(E.m, {
                                text: V.intl.string(V.t.WmfZHZ),
                                children: (0, n.jsx)(j.K, {
                                    icon: A.q,
                                    onClick: X,
                                    "aria-label": V.intl.string(V.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, n.jsx)(p.$, {
                            variant: Z.ctaVariant,
                            text: Z.ctaText,
                            onClick: Z.onClickCta,
                            fullWidth: !0,
                            icon: T.W,
                            iconPosition: Z.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function J(t) {
    let { quest: e, location: i } = t;
    return (0, n.jsx)(k.jY, { source: i, questId: e.id, isPreview: e.preview, children: (0, n.jsx)(Z, { ...t }) });
}
var X = i(63639);
function B(t) {
    let { onClose: e, transitionState: i } = t;
    return (0, n.jsx)(a.Modal, {
        size: "md",
        title: V.intl.string(V.t.Hd3D8W),
        actions: [{ variant: "primary", text: V.intl.string(V.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: i,
        children: (0, n.jsx)(l.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: V.intl.string(V.t.Ij97SL),
        }),
    });
}
function $(t) {
    let {
            quest: e,
            sourceQuestContent: i,
            transitionState: a,
            onClose: l,
            rewardContent: g,
            isRewardContentLoading: C,
            rewardContentHasError: N,
            location: h,
        } = t,
        j = m.uF.REWARD_MODAL,
        [A, p] = s.useState(!0),
        T = e.config.features.some((t) => z.Tz.has(t)),
        E = s.useCallback(async () => {
            if (T) {
                l(), (0, c.closeAllModals)();
                return;
            }
            (await (0, x.f7)(e.config.ctaConfig?.link)) && (l(), (0, c.closeAllModals)());
        }, [e.config.ctaConfig?.link, l, T]);
    if (N) return (0, n.jsx)(B, { onClose: l, transitionState: a });
    let I = C || A;
    return (0, n.jsx)(f.R, {
        questOrQuests: e,
        questContent: j,
        sourceQuestContent: i,
        children: (t) =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    I ? (0, n.jsx)(o.y, { className: X.u1, type: o.y.Type.WANDERING_CUBES }) : null,
                    (0, n.jsx)("div", {
                        ref: t,
                        style: { visibility: I ? "hidden" : "visible" },
                        children: (0, n.jsxs)(u.EO, {
                            "data-migration-pending": !0,
                            transitionState: I ? d.ip.HIDDEN : a,
                            size: u.rI.DYNAMIC,
                            className: X.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, n.jsx)("div", {
                                    className: X.b,
                                    children: (0, n.jsx)(r.J, { size: "xs", variant: "overlay-secondary", onClick: l }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: X.jE,
                                    children: [
                                        (0, n.jsx)("div", { className: X._H, children: g }),
                                        (0, n.jsx)("div", {
                                            className: X.xK,
                                            children: (0, n.jsx)(J, {
                                                quest: e,
                                                sourceQuestContent: i,
                                                onLoadComplete: () => p(!1),
                                                preCtaClick: E,
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
