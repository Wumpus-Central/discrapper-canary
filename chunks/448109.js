i.d(e, { A: () => X });
var n = i(627968),
    s = i(64700),
    a = i(189213),
    r = i(815021),
    l = i(834730),
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
    j = i(173936),
    A = i(821609),
    p = i(743368),
    T = i(990078),
    v = i(736653),
    _ = i(859387),
    y = i(590202),
    I = i(971649),
    E = i(651892),
    O = i(901406),
    R = i(814793),
    L = i(241124),
    M = i(918338),
    b = i(371912),
    k = i(17928),
    D = i(793574),
    P = i(532794),
    W = i(976860),
    w = i(287809),
    q = i(975571),
    S = i(474090),
    z = i(561844),
    G = i(190107),
    H = i(652215),
    Q = i(788868),
    Y = i(375708),
    V = i(237146),
    F = i(818348),
    K = i(970197);
function U(t) {
    let { quest: e, sourceQuestContent: i, onLoadComplete: a, preCtaClick: r } = t,
        c = (0, v.Ay)(),
        o = (0, g.M)(c) ? F.NJ.DARK : F.NJ.LIGHT,
        u = (0, I.go)(),
        m = (0, R.E0)(e.config),
        f = async () => {
            await r?.(),
                (0, O.pu)(e, {
                    content: d.uF.REWARD_MODAL,
                    ctaContent: y.Cy.OPEN_GAME_LINK,
                    impressionId: u,
                    sourceQuestContent: i,
                });
        },
        U = s.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, R.pv)(e.config) !== x.Z.GAMEPLAY ||
                    e.config.features.includes(G.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, R.ui)(e)
                  ? Y.intl.string(Y.t.y8Xf3k)
                  : Y.intl.string(Y.t["wirwN+"]);
        }, [e]),
        Z = (function (t, e, i) {
            let n = t.config.features.some((t) => G.Tz.has(t)),
                a = (0, k.bG)([w.default], () => w.default.getCurrentUser()),
                r = a?.hasPaidTier2Subscription(),
                l = (0, S.ki)(a) && !a?.isPremiumWithFractionalPremiumOnly(),
                c = s.useCallback(async () => {
                    n &&
                        (r
                            ? ((0, z.Y5)({
                                  questId: t.id,
                                  questContent: d.uF.REWARD_MODAL,
                                  questContentCTA: y.Cy.OPEN_NITRO_HOME,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await i?.(),
                              (0, W.pX)(H.BVt.NITRO_HOME))
                            : ((0, z.Y5)({
                                  questId: t.id,
                                  questContent: d.uF.REWARD_MODAL,
                                  questContentCTA: y.Cy.OPEN_NITRO_CHECKOUT,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await i?.(),
                              await (0, P.A)({
                                  subscriptionTier: Q.pe.TIER_2,
                                  analyticsLocations: [D.A.QUEST_REWARD_MODAL],
                              })));
                }, [n, r, t.id, e.impressionId, e.sourceQuestContent, i]);
            if (!n) return null;
            if (t.config.features.includes(G.Li.NITRO_2_POINT_0_CTA)) {
                let t = q.A.getArticleURL(H.MVz.NITRO_2_POINT_0);
                return r
                    ? {
                          title: Y.intl.string(V.default.LIc2xy),
                          subtitle: Y.intl.format(V.default.gzazAe, { helpCenterLink: t }),
                          ctaText: Y.intl.string(V.default.HlVJm0),
                          ctaVariant: "primary",
                          onClickCta: c,
                      }
                    : l
                      ? {
                            title: Y.intl.string(V.default.HTsycG),
                            subtitle: Y.intl.format(V.default["3JKWU6"], { helpCenterLink: t }),
                            ctaText: Y.intl.string(V.default["2iX+XV"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        }
                      : {
                            title: Y.intl.string(V.default.bOf5IH),
                            subtitle: Y.intl.format(V.default.SzOYGc, { helpCenterLink: t }),
                            ctaText: Y.intl.string(V.default["620Iwi"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        };
            }
            return null;
        })(e, { impressionId: u, sourceQuestContent: i }, r) ?? {
            ctaText: (0, E.wr)(e),
            ctaVariant: "primary",
            onClickCta: f,
            title: Y.intl.format(Y.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: U,
            ctaIconPosition: "end",
        },
        { isLoading: J } = (0, L.Gk)();
    s.useEffect(() => {
        J || a();
    }, [J, a]);
    let B = (0, b.Lk)({
        isShareable: m,
        questId: e.id,
        trackingCtx: s.useMemo(
            () => ({
                content: d.uF.REWARD_MODAL,
                ctaContent: y.Cy.REWARD_MODAL_COPY_LINK,
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
                    (0, n.jsx)(M.A, {
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
                            alt: Y.intl.formatToPlainString(Y.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, _.tW)(e, _.fY.LOGO_TYPE, o).url,
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
                            (0, n.jsx)(l.E, { variant: "text-sm/medium", color: "text-subtle", children: Z.subtitle }),
                        ],
                    }),
                    (0, n.jsx)(L.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, n.jsx)("img", {
                                ref: t,
                                className: K.rw,
                                alt: Y.intl.formatToPlainString(Y.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, _.tW)(e, _.fY.GAME_TILE, o).url,
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
                                text: Y.intl.string(Y.t.WmfZHZ),
                                children: (0, n.jsx)(h.K, {
                                    icon: j.q,
                                    onClick: B,
                                    "aria-label": Y.intl.string(Y.t.WmfZHZ),
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
var J = i(63639);
function B(t) {
    let { onClose: e, transitionState: i } = t;
    return (0, n.jsx)(a.Modal, {
        size: "md",
        title: Y.intl.string(Y.t.Hd3D8W),
        actions: [{ variant: "primary", text: Y.intl.string(Y.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: i,
        children: (0, n.jsx)(l.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: Y.intl.string(Y.t.Ij97SL),
        }),
    });
}
function X(t) {
    let {
            quest: e,
            sourceQuestContent: i,
            transitionState: a,
            onClose: l,
            rewardContent: x,
            isRewardContentLoading: g,
            rewardContentHasError: C,
            location: N,
        } = t,
        h = d.uF.REWARD_MODAL,
        [j, A] = s.useState(!0),
        p = e.config.features.some((t) => G.Tz.has(t)),
        T = s.useCallback(async () => {
            if (p) {
                l(), (0, c.closeAllModals)();
                return;
            }
            (await (0, f.f7)(e.config.ctaConfig?.link)) && (l(), (0, c.closeAllModals)());
        }, [e.config.ctaConfig?.link, l, p]);
    if (C) return (0, n.jsx)(B, { onClose: l, transitionState: a });
    let v = g || j;
    return (0, n.jsx)(m.R, {
        questOrQuests: e,
        questContent: h,
        sourceQuestContent: i,
        children: (t) =>
            (0, n.jsxs)(o.EO, {
                "data-migration-pending": !0,
                transitionState: a,
                size: o.rI.DYNAMIC,
                className: J.yl,
                "aria-label": v ? Y.intl.string(Y.t.ZTNur7) : void 0,
                parentComponent: "QuestRewardModalBase",
                children: [
                    (0, n.jsx)("div", {
                        className: J.b,
                        children: (0, n.jsx)(r.J, { size: "xs", variant: "overlay-secondary", onClick: l }),
                    }),
                    v ? (0, n.jsx)(u.y, { className: J.u1, type: u.y.Type.WANDERING_CUBES }) : null,
                    (0, n.jsx)("div", {
                        ref: t,
                        className: J.BM,
                        style: { visibility: v ? "hidden" : "visible" },
                        children: (0, n.jsxs)("div", {
                            className: J.jE,
                            children: [
                                (0, n.jsx)("div", { className: J._H, children: x }),
                                (0, n.jsx)("div", {
                                    className: J.xK,
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
                    }),
                ],
            }),
    });
}
