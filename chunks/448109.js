e.d(i, { A: () => J });
var n = e(627968),
    a = e(64700),
    s = e(189213),
    l = e(815021),
    r = e(834730),
    c = e(192308),
    u = e(935462),
    o = e(289873),
    d = e(507107),
    f = e(73473),
    m = e(617986),
    g = e(731355),
    x = e(366010),
    C = e(534514),
    N = e(825484),
    A = e(408278),
    T = e(173936),
    h = e(821609),
    _ = e(743368),
    p = e(990078),
    j = e(736653),
    R = e(859387),
    I = e(590202),
    y = e(971649),
    E = e(651892),
    v = e(901406),
    O = e(814793),
    L = e(241124),
    b = e(918338),
    M = e(371912),
    k = e(17928),
    P = e(793574),
    S = e(532794),
    V = e(976860),
    D = e(287809),
    Q = e(975571),
    W = e(474090),
    w = e(561844),
    U = e(190107),
    q = e(652215),
    z = e(788868),
    H = e(375708),
    Y = e(237146),
    G = e(818348),
    X = e(970197);
function F(t) {
    let { quest: i, sourceQuestContent: e, onLoadComplete: s, preCtaClick: l } = t,
        c = (0, j.Ay)(),
        u = (0, x.M)(c) ? G.NJ.DARK : G.NJ.LIGHT,
        o = (0, y.go)(),
        f = (0, O.E0)(i.config),
        m = async () => {
            await l?.(),
                (0, v.pu)(i, {
                    content: d.uF.REWARD_MODAL,
                    ctaContent: I.Cy.OPEN_GAME_LINK,
                    impressionId: o,
                    sourceQuestContent: e,
                });
        },
        F = a.useMemo(() => {
            let t = i.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, O.pv)(i.config) !== g.Z.GAMEPLAY ||
                    i.config.features.includes(U.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, O.ui)(i)
                  ? H.intl.string(H.t.y8Xf3k)
                  : H.intl.string(H.t["wirwN+"]);
        }, [i]),
        K = (function (t, i, e) {
            let n = t.config.features.some((t) => U.Tz.has(t)),
                s = (0, k.bG)([D.default], () => D.default.getCurrentUser()),
                l = s?.hasPaidTier2Subscription(),
                r = (0, W.ki)(s) && !s?.isPremiumWithFractionalPremiumOnly(),
                c = a.useCallback(async () => {
                    n &&
                        (l
                            ? ((0, w.Y5)({
                                  questId: t.id,
                                  questContent: d.uF.REWARD_MODAL,
                                  questContentCTA: I.Cy.OPEN_NITRO_HOME,
                                  impressionId: i.impressionId,
                                  sourceQuestContent: i.sourceQuestContent,
                              }),
                              await e?.(),
                              (0, V.pX)(q.BVt.NITRO_HOME))
                            : ((0, w.Y5)({
                                  questId: t.id,
                                  questContent: d.uF.REWARD_MODAL,
                                  questContentCTA: I.Cy.OPEN_NITRO_CHECKOUT,
                                  impressionId: i.impressionId,
                                  sourceQuestContent: i.sourceQuestContent,
                              }),
                              await e?.(),
                              await (0, S.A)({
                                  subscriptionTier: z.pe.TIER_2,
                                  analyticsLocations: [P.A.QUEST_REWARD_MODAL],
                              })));
                }, [n, l, t.id, i.impressionId, i.sourceQuestContent, e]);
            if (!n) return null;
            if (t.config.features.includes(U.Li.NITRO_2_POINT_0_CTA)) {
                let t = Q.A.getArticleURL(q.MVz.NITRO_2_POINT_0);
                return l
                    ? {
                          title: H.intl.string(Y.default.LIc2xy),
                          subtitle: H.intl.format(Y.default.gzazAe, { helpCenterLink: t }),
                          ctaText: H.intl.string(Y.default.HlVJm0),
                          ctaVariant: "primary",
                          onClickCta: c,
                      }
                    : r
                      ? {
                            title: H.intl.string(Y.default.HTsycG),
                            subtitle: H.intl.format(Y.default["3JKWU6"], { helpCenterLink: t }),
                            ctaText: H.intl.string(Y.default["2iX+XV"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        }
                      : {
                            title: H.intl.string(Y.default.bOf5IH),
                            subtitle: H.intl.format(Y.default.SzOYGc, { helpCenterLink: t }),
                            ctaText: H.intl.string(Y.default["620Iwi"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        };
            }
            if (t.config.features.includes(U.Li.ORBS_MULTIPLIER_QUEST)) {
                let t = Q.A.getArticleURL(q.MVz.VIRTUAL_CURRENCY_LEARN_MORE);
                return l
                    ? {
                          title: H.intl.string(Y.default["QP/6xR"]),
                          subtitle: H.intl.format(Y.default.zPnFYf, { helpCenterLink: t }),
                          ctaText: H.intl.string(Y.default.TNS24d),
                          ctaVariant: "primary",
                          onClickCta: c,
                      }
                    : r
                      ? {
                            title: H.intl.string(Y.default.CFfUkp),
                            subtitle: H.intl.format(Y.default["02smVH"], { helpCenterLink: t }),
                            ctaText: H.intl.string(Y.default["2iX+XV"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        }
                      : {
                            title: H.intl.string(Y.default.CFfUkp),
                            subtitle: H.intl.format(Y.default["02smVH"], { helpCenterLink: t }),
                            ctaText: H.intl.string(Y.default["620Iwi"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        };
            }
            if (t.config.features.includes(U.Li.XBOX_GAME_PASS_QUEST)) {
                let t = Q.A.getArticleURL(q.MVz.NITRO_2_POINT_0);
                return l
                    ? {
                          title: H.intl.string(Y.default["4zROKG"]),
                          subtitle: H.intl.format(Y.default.v9AaV4, { helpCenterLink: t }),
                          ctaText: H.intl.string(Y.default["/AUOfc"]),
                          ctaVariant: "primary",
                          onClickCta: c,
                      }
                    : r
                      ? {
                            title: H.intl.string(Y.default.Q15RXC),
                            subtitle: H.intl.format(Y.default["zUjL+R"], { helpCenterLink: t }),
                            ctaText: H.intl.string(Y.default["+ADjaQ"]),
                            ctaVariant: "primary",
                            onClickCta: c,
                        }
                      : {
                            title: H.intl.string(Y.default.Q15RXC),
                            subtitle: H.intl.format(Y.default.dHQQvk, { helpCenterLink: t }),
                            ctaText: H.intl.string(Y.default.qI5XnY),
                            ctaVariant: "primary",
                            onClickCta: c,
                        };
            }
            return null;
        })(i, { impressionId: o, sourceQuestContent: e }, l) ?? {
            ctaText: (0, E.wr)(i),
            ctaVariant: "primary",
            onClickCta: m,
            title: H.intl.format(H.t.EAYZAr, { questName: i.config.messages.questName }),
            subtitle: F,
            ctaIconPosition: "end",
        },
        { isLoading: Z } = (0, L.Gk)();
    a.useEffect(() => {
        Z || s();
    }, [Z, s]);
    let B = (0, M.Lk)({
        isShareable: f,
        questId: i.id,
        trackingCtx: a.useMemo(
            () => ({
                content: d.uF.REWARD_MODAL,
                ctaContent: I.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: o,
                sourceQuestContent: e,
            }),
            [o, e],
        ),
    });
    return (0, n.jsxs)("div", {
        className: X.kL,
        children: [
            (0, n.jsx)(L.Sn, {
                id: "hero-display",
                children: (t) =>
                    (0, n.jsx)(b.A, {
                        quest: i,
                        imageSize: { width: 908, height: 380 },
                        containerClassName: X.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, n.jsx)("div", {
                className: X.Lt,
                children: (0, n.jsx)(L.Sn, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, n.jsx)("img", {
                            ref: t,
                            className: X.a$,
                            alt: H.intl.formatToPlainString(H.t.rtm15P, { name: i.config.messages.gameTitle }),
                            src: (0, R.tW)(i, R.fY.LOGO_TYPE, u).url,
                        }),
                }),
            }),
            (0, n.jsxs)("div", {
                className: X.Th,
                children: [
                    (0, n.jsxs)("div", {
                        className: X.Ly,
                        children: [
                            (0, n.jsx)(C.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: X.fx,
                                children: K.title,
                            }),
                            (0, n.jsx)(r.E, { variant: "text-sm/medium", color: "text-subtle", children: K.subtitle }),
                        ],
                    }),
                    (0, n.jsx)(L.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, n.jsx)("img", {
                                ref: t,
                                className: X.rw,
                                alt: H.intl.formatToPlainString(H.t.rtm15P, { name: i.config.messages.gameTitle }),
                                src: (0, R.tW)(i, R.fY.GAME_TILE, u).url,
                            }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: X.tu,
                children: (0, n.jsxs)(N.e, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        f &&
                            (0, n.jsx)(p.m, {
                                text: H.intl.string(H.t.WmfZHZ),
                                children: (0, n.jsx)(A.K, {
                                    icon: T.q,
                                    onClick: B,
                                    "aria-label": H.intl.string(H.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, n.jsx)(h.$, {
                            variant: K.ctaVariant,
                            text: K.ctaText,
                            onClick: K.onClickCta,
                            fullWidth: !0,
                            icon: _.W,
                            iconPosition: K.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function K(t) {
    let { quest: i, location: e } = t;
    return (0, n.jsx)(L.jY, { source: e, questId: i.id, isPreview: i.preview, children: (0, n.jsx)(F, { ...t }) });
}
var Z = e(63639);
function B(t) {
    let { onClose: i, transitionState: e } = t;
    return (0, n.jsx)(s.Modal, {
        size: "md",
        title: H.intl.string(H.t.Hd3D8W),
        actions: [{ variant: "primary", text: H.intl.string(H.t.cpT0Cq), onClick: i }],
        onClose: i,
        transitionState: e,
        children: (0, n.jsx)(r.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: H.intl.string(H.t.Ij97SL),
        }),
    });
}
function J(t) {
    let {
            quest: i,
            sourceQuestContent: e,
            transitionState: s,
            onClose: r,
            rewardContent: g,
            isRewardContentLoading: x,
            rewardContentHasError: C,
            location: N,
        } = t,
        A = d.uF.REWARD_MODAL,
        [T, h] = a.useState(!0),
        _ = i.config.features.some((t) => U.Tz.has(t)),
        p = a.useCallback(async () => {
            if (_) {
                r(), (0, c.closeAllModals)();
                return;
            }
            (await (0, m.f7)(i.config.ctaConfig?.link)) && (r(), (0, c.closeAllModals)());
        }, [i.config.ctaConfig?.link, r, _]);
    if (C) return (0, n.jsx)(B, { onClose: r, transitionState: s });
    let j = x || T;
    return (0, n.jsx)(f.R, {
        questOrQuests: i,
        questContent: A,
        sourceQuestContent: e,
        children: (t) =>
            (0, n.jsxs)(u.EO, {
                "data-migration-pending": !0,
                transitionState: s,
                size: u.rI.DYNAMIC,
                className: Z.yl,
                "aria-label": j ? H.intl.string(H.t.ZTNur7) : void 0,
                parentComponent: "QuestRewardModalBase",
                children: [
                    (0, n.jsx)("div", {
                        className: Z.b,
                        children: (0, n.jsx)(l.J, { size: "xs", variant: "overlay-secondary", onClick: r }),
                    }),
                    j ? (0, n.jsx)(o.y, { className: Z.u1, type: o.y.Type.WANDERING_CUBES }) : null,
                    (0, n.jsx)("div", {
                        ref: t,
                        className: Z.BM,
                        style: { visibility: j ? "hidden" : "visible" },
                        children: (0, n.jsxs)("div", {
                            className: Z.jE,
                            children: [
                                (0, n.jsx)("div", { className: Z._H, children: g }),
                                (0, n.jsx)("div", {
                                    className: Z.xK,
                                    children: (0, n.jsx)(K, {
                                        quest: i,
                                        sourceQuestContent: e,
                                        onLoadComplete: () => h(!1),
                                        preCtaClick: p,
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
