i.d(e, { A: () => J });
var n = i(627968),
    s = i(64700),
    a = i(189213),
    l = i(815021),
    r = i(834730),
    c = i(192308),
    o = i(935462),
    u = i(289873),
    d = i(507107),
    m = i(73473),
    f = i(617986),
    x = i(731355),
    g = i(366010),
    C = i(534514),
    N = i(825484),
    h = i(408278),
    A = i(173936),
    T = i(821609),
    p = i(743368),
    j = i(990078),
    _ = i(736653),
    E = i(859387),
    I = i(590202),
    y = i(971649),
    v = i(651892),
    R = i(901406),
    L = i(814793),
    O = i(241124),
    M = i(918338),
    b = i(371912),
    k = i(17928),
    P = i(793574),
    D = i(532794),
    W = i(976860),
    w = i(287809),
    S = i(975571),
    V = i(474090),
    q = i(561844),
    z = i(190107),
    H = i(652215),
    Q = i(788868),
    U = i(375708),
    Y = i(237146),
    G = i(818348),
    F = i(970197);
function K(t) {
    let { quest: e, sourceQuestContent: i, onLoadComplete: a, preCtaClick: l } = t,
        c = (0, _.Ay)(),
        o = (0, g.M)(c) ? G.NJ.DARK : G.NJ.LIGHT,
        u = (0, y.go)(),
        m = (0, L.E0)(e.config),
        f = async () => {
            await l?.(),
                (0, R.pu)(e, {
                    content: d.uF.REWARD_MODAL,
                    ctaContent: I.Cy.OPEN_GAME_LINK,
                    impressionId: u,
                    sourceQuestContent: i,
                });
        },
        K = s.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, L.pv)(e.config) !== x.Z.GAMEPLAY ||
                    e.config.features.includes(z.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, L.ui)(e)
                  ? U.intl.string(U.t.y8Xf3k)
                  : U.intl.string(U.t["wirwN+"]);
        }, [e]),
        Z = (function (t, e, i) {
            let n = t.config.features.some((t) => z.Tz.has(t)),
                a = (0, k.bG)([w.default], () => w.default.getCurrentUser()),
                l = a?.hasPaidTier2Subscription(),
                r = (0, V.ki)(a) && !a?.isPremiumWithFractionalPremiumOnly(),
                c = s.useCallback(async () => {
                    n &&
                        (l
                            ? ((0, q.Y5)({
                                  questId: t.id,
                                  questContent: d.uF.REWARD_MODAL,
                                  questContentCTA: I.Cy.OPEN_NITRO_HOME,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await i?.(),
                              (0, W.pX)(H.BVt.NITRO_HOME))
                            : ((0, q.Y5)({
                                  questId: t.id,
                                  questContent: d.uF.REWARD_MODAL,
                                  questContentCTA: I.Cy.OPEN_NITRO_CHECKOUT,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await i?.(),
                              await (0, D.A)({
                                  subscriptionTier: Q.pe.TIER_2,
                                  analyticsLocations: [P.A.QUEST_REWARD_MODAL],
                              })));
                }, [n, l, t.id, e.impressionId, e.sourceQuestContent, i]);
            if (!n) return null;
            if (t.config.features.includes(z.Li.NITRO_2_POINT_0_CTA)) {
                let t = S.A.getArticleURL(H.MVz.NITRO_2_POINT_0);
                return l
                    ? {
                          title: U.intl.string(Y.default.LIc2xy),
                          subtitle: U.intl.format(Y.default.gzazAe, { helpCenterLink: t }),
                          ctaText: U.intl.string(Y.default.HlVJm0),
                          ctaVariant: "primary",
                          onClickCta: c,
                      }
                    : r
                      ? {
                            title: U.intl.string(Y.default.HTsycG),
                            subtitle: U.intl.format(Y.default["3JKWU6"], { helpCenterLink: t }),
                            ctaText: U.intl.string(Y.default["2iX+XV"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        }
                      : {
                            title: U.intl.string(Y.default.bOf5IH),
                            subtitle: U.intl.format(Y.default.SzOYGc, { helpCenterLink: t }),
                            ctaText: U.intl.string(Y.default["620Iwi"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        };
            }
            if (t.config.features.includes(z.Li.ORBS_MULTIPLIER_QUEST)) {
                let t = S.A.getArticleURL(H.MVz.VIRTUAL_CURRENCY_LEARN_MORE);
                return l
                    ? {
                          title: U.intl.string(Y.default["QP/6xR"]),
                          subtitle: U.intl.format(Y.default.zPnFYf, { helpCenterLink: t }),
                          ctaText: U.intl.string(Y.default.TNS24d),
                          ctaVariant: "primary",
                          onClickCta: c,
                      }
                    : r
                      ? {
                            title: U.intl.string(Y.default.CFfUkp),
                            subtitle: U.intl.format(Y.default["02smVH"], { helpCenterLink: t }),
                            ctaText: U.intl.string(Y.default["2iX+XV"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        }
                      : {
                            title: U.intl.string(Y.default.CFfUkp),
                            subtitle: U.intl.format(Y.default["02smVH"], { helpCenterLink: t }),
                            ctaText: U.intl.string(Y.default["620Iwi"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        };
            }
            return null;
        })(e, { impressionId: u, sourceQuestContent: i }, l) ?? {
            ctaText: (0, v.wr)(e),
            ctaVariant: "primary",
            onClickCta: f,
            title: U.intl.format(U.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: K,
            ctaIconPosition: "end",
        },
        { isLoading: X } = (0, O.Gk)();
    s.useEffect(() => {
        X || a();
    }, [X, a]);
    let B = (0, b.Lk)({
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
        className: F.kL,
        children: [
            (0, n.jsx)(O.Sn, {
                id: "hero-display",
                children: (t) =>
                    (0, n.jsx)(M.A, {
                        quest: e,
                        imageSize: { width: 908, height: 380 },
                        containerClassName: F.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, n.jsx)("div", {
                className: F.Lt,
                children: (0, n.jsx)(O.Sn, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, n.jsx)("img", {
                            ref: t,
                            className: F.a$,
                            alt: U.intl.formatToPlainString(U.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, E.tW)(e, E.fY.LOGO_TYPE, o).url,
                        }),
                }),
            }),
            (0, n.jsxs)("div", {
                className: F.Th,
                children: [
                    (0, n.jsxs)("div", {
                        className: F.Ly,
                        children: [
                            (0, n.jsx)(C.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: F.fx,
                                children: Z.title,
                            }),
                            (0, n.jsx)(r.E, { variant: "text-sm/medium", color: "text-subtle", children: Z.subtitle }),
                        ],
                    }),
                    (0, n.jsx)(O.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, n.jsx)("img", {
                                ref: t,
                                className: F.rw,
                                alt: U.intl.formatToPlainString(U.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, E.tW)(e, E.fY.GAME_TILE, o).url,
                            }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: F.tu,
                children: (0, n.jsxs)(N.e, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        m &&
                            (0, n.jsx)(j.m, {
                                text: U.intl.string(U.t.WmfZHZ),
                                children: (0, n.jsx)(h.K, {
                                    icon: A.q,
                                    onClick: B,
                                    "aria-label": U.intl.string(U.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, n.jsx)(T.$, {
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
    return (0, n.jsx)(O.jY, { source: i, questId: e.id, isPreview: e.preview, children: (0, n.jsx)(K, { ...t }) });
}
var X = i(63639);
function B(t) {
    let { onClose: e, transitionState: i } = t;
    return (0, n.jsx)(a.Modal, {
        size: "md",
        title: U.intl.string(U.t.Hd3D8W),
        actions: [{ variant: "primary", text: U.intl.string(U.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: i,
        children: (0, n.jsx)(r.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: U.intl.string(U.t.Ij97SL),
        }),
    });
}
function J(t) {
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
        [A, T] = s.useState(!0),
        p = e.config.features.some((t) => z.Tz.has(t)),
        j = s.useCallback(async () => {
            if (p) {
                r(), (0, c.closeAllModals)();
                return;
            }
            (await (0, f.f7)(e.config.ctaConfig?.link)) && (r(), (0, c.closeAllModals)());
        }, [e.config.ctaConfig?.link, r, p]);
    if (C) return (0, n.jsx)(B, { onClose: r, transitionState: a });
    let _ = g || A;
    return (0, n.jsx)(m.R, {
        questOrQuests: e,
        questContent: h,
        sourceQuestContent: i,
        children: (t) =>
            (0, n.jsxs)(o.EO, {
                "data-migration-pending": !0,
                transitionState: a,
                size: o.rI.DYNAMIC,
                className: X.yl,
                "aria-label": _ ? U.intl.string(U.t.ZTNur7) : void 0,
                parentComponent: "QuestRewardModalBase",
                children: [
                    (0, n.jsx)("div", {
                        className: X.b,
                        children: (0, n.jsx)(l.J, { size: "xs", variant: "overlay-secondary", onClick: r }),
                    }),
                    _ ? (0, n.jsx)(u.y, { className: X.u1, type: u.y.Type.WANDERING_CUBES }) : null,
                    (0, n.jsx)("div", {
                        ref: t,
                        className: X.BM,
                        style: { visibility: _ ? "hidden" : "visible" },
                        children: (0, n.jsxs)("div", {
                            className: X.jE,
                            children: [
                                (0, n.jsx)("div", { className: X._H, children: x }),
                                (0, n.jsx)("div", {
                                    className: X.xK,
                                    children: (0, n.jsx)(Z, {
                                        quest: e,
                                        sourceQuestContent: i,
                                        onLoadComplete: () => T(!1),
                                        preCtaClick: j,
                                        location: N,
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
    });
}
