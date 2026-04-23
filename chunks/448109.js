n.d(e, { A: () => ts });
var i = n(627968),
    s = n(64700),
    a = n(189213),
    l = n(834730),
    r = n(192308),
    d = n(289873),
    o = n(935462),
    c = n(231723),
    u = n(507107),
    h = n(73473),
    m = n(545986),
    b = n(731355),
    f = n(366010),
    g = n(743368),
    x = n(534514),
    C = n(825484),
    I = n(408278),
    N = n(173936),
    p = n(821609),
    A = n(990078),
    v = n(736653),
    E = n(859387),
    j = n(590202),
    T = n(971649),
    _ = n(651892),
    y = n(901406),
    R = n(814793),
    O = n(241124),
    L = n(918338),
    k = n(371912),
    M = n(902173),
    w = n(17928),
    D = n(403581),
    S = n(793574),
    W = n(532794),
    P = n(374200),
    V = n(852218),
    z = n(976860),
    G = n(287809),
    q = n(975571),
    H = n(474090),
    Q = n(561844),
    Y = n(654487),
    B = n(652215),
    U = n(788868),
    K = n(985018),
    Z = n(237146),
    F = n(365720);
let J = { rewardSkuIds: [], promotionEndDate: null };
var X = n(818348),
    $ = n(970197);
function tt(t) {
    let { quest: e, sourceQuestContent: n, onLoadComplete: a, preCtaClick: r } = t,
        d = (0, v.Ay)(),
        o = (0, f.M)(d) ? X.NJ.DARK : X.NJ.LIGHT,
        c = (0, T.go)(),
        h = (0, R.E0)(e.config),
        m = async () => {
            await r?.(),
                (0, y.pu)(e, {
                    content: u.uF.REWARD_MODAL,
                    ctaContent: j.Cy.OPEN_GAME_LINK,
                    impressionId: c,
                    sourceQuestContent: n,
                });
        },
        tt = s.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, R.pv)(e.config) !== b.Z.GAMEPLAY ||
                    e.config.features.includes(Y.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, R.ui)(e)
                  ? K.intl.string(K.t.y8Xf3k)
                  : K.intl.string(K.t["wirwN+"]);
        }, [e]),
        te = (function (t, e, n) {
            let i = t.config.features.some((t) => Y.Tz.has(t)),
                a = (0, w.bG)([G.default], () => G.default.getCurrentUser()),
                l = (0, H.YE)(a, U.PremiumTypes.TIER_2),
                r = (0, H.ki)(a),
                { rewardSkuIds: d, promotionEndDate: o } = (0, w.cf)([P.A], () => {
                    if (!i) return J;
                    let t = P.A.getMarketingMomentRewardSkuIds(),
                        e = P.A.promotionsByType[V.pt.MARKETING_MOMENT],
                        n = Object.keys(e);
                    return { rewardSkuIds: t, promotionEndDate: n.length > 0 ? e[n[0]].endDate : null };
                }),
                c = d.length > 0,
                h = s.useCallback(async () => {
                    i &&
                        (l
                            ? ((0, Q.Y5)({
                                  questId: t.id,
                                  questContent: u.uF.REWARD_MODAL,
                                  questContentCTA: j.Cy.OPEN_NITRO_HOME,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await n?.(),
                              (0, z.pX)(B.BVt.NITRO_HOME))
                            : ((0, Q.Y5)({
                                  questId: t.id,
                                  questContent: u.uF.REWARD_MODAL,
                                  questContentCTA: j.Cy.OPEN_NITRO_CHECKOUT,
                                  impressionId: e.impressionId,
                                  sourceQuestContent: e.sourceQuestContent,
                              }),
                              await n?.(),
                              await (0, W.A)({
                                  subscriptionTier: U.pe.TIER_2,
                                  analyticsLocations: [S.A.QUEST_REWARD_MODAL],
                              })));
                }, [i, l, t.id, e.impressionId, e.sourceQuestContent, n]);
            if (!i) return null;
            if (t.config.features.includes(M.L.NITRO_2_POINT_0_CTA)) {
                let t = q.A.getArticleURL(B.MVz.NITRO_2_POINT_0);
                return l
                    ? {
                          title: K.intl.string(Z.default.LIc2xy),
                          subtitle: K.intl.format(Z.default.gzazAe, { helpCenterLink: t }),
                          ctaText: K.intl.string(Z.default.HlVJm0),
                          ctaIcon: void 0,
                          ctaVariant: "primary",
                          onClickCta: h,
                      }
                    : r
                      ? {
                            title: K.intl.string(Z.default.HTsycG),
                            subtitle: K.intl.format(Z.default["3JKWU6"], { helpCenterLink: t }),
                            ctaText: K.intl.string(Z.default["2iX+XV"]),
                            ctaIcon: void 0,
                            ctaVariant: "primary",
                            onClickCta: h,
                        }
                      : {
                            title: K.intl.string(Z.default.bOf5IH),
                            subtitle: K.intl.format(Z.default.SzOYGc, { helpCenterLink: t }),
                            ctaText: K.intl.string(Z.default["620Iwi"]),
                            ctaIcon: void 0,
                            ctaVariant: "primary",
                            onClickCta: h,
                        };
            }
            return l
                ? {
                      title: K.intl.string(F.default.I8cv0h),
                      subtitle: K.intl.string(F.default.wC4J6d),
                      ctaText: K.intl.string(F.default.u29fVK),
                      ctaIcon: void 0,
                      ctaVariant: "primary",
                      onClickCta: h,
                  }
                : c && null != o && o > new Date()
                  ? {
                        title: K.intl.string(F.default.E0XZQW),
                        subtitle: K.intl.format(r ? F.default["PyQY5+"] : F.default["Ri/ZGz"], {
                            date: o,
                            helpCenterLink: q.A.getArticleURL(B.MVz.NITRO_CONTROL_CAMPAIGN),
                        }),
                        ctaText: K.intl.string(r ? K.t.IJI7yk : K.t.pj0XBN),
                        ctaIcon: D.t,
                        ctaIconPosition: "start",
                        ctaVariant: "expressive",
                        onClickCta: h,
                    }
                  : {
                        title: K.intl.string(F.default.pVkPgD),
                        subtitle: K.intl.string(F.default.vxubVL),
                        ctaText: K.intl.string(r ? K.t.IJI7yk : K.t.pj0XBN),
                        ctaIcon: D.t,
                        ctaIconPosition: "start",
                        ctaVariant: "expressive",
                        onClickCta: h,
                    };
        })(e, { impressionId: c, sourceQuestContent: n }, r) ?? {
            ctaText: (0, _.wr)(e),
            ctaIcon: g.W,
            ctaVariant: "primary",
            onClickCta: m,
            title: K.intl.format(K.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: tt,
            ctaIconPosition: "end",
        },
        { isLoading: tn } = (0, O.Gk)();
    s.useEffect(() => {
        tn || a();
    }, [tn, a]);
    let ti = (0, k.Lk)({
        isShareable: h,
        questId: e.id,
        trackingCtx: s.useMemo(
            () => ({
                content: u.uF.REWARD_MODAL,
                ctaContent: j.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: c,
                sourceQuestContent: n,
            }),
            [c, n],
        ),
    });
    return (0, i.jsxs)("div", {
        className: $.kL,
        children: [
            (0, i.jsx)(O.Sn, {
                id: "hero-display",
                children: (t) =>
                    (0, i.jsx)(L.A, {
                        quest: e,
                        imageSize: { width: 908, height: 380 },
                        containerClassName: $.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, i.jsx)("div", {
                className: $.Lt,
                children: (0, i.jsx)(O.Sn, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: $.a$,
                            alt: K.intl.formatToPlainString(K.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, E.tW)(e, E.fY.LOGO_TYPE, o).url,
                        }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: $.Th,
                children: [
                    (0, i.jsxs)("div", {
                        className: $.Ly,
                        children: [
                            (0, i.jsx)(x.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: $.fx,
                                children: te.title,
                            }),
                            (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "text-subtle", children: te.subtitle }),
                        ],
                    }),
                    (0, i.jsx)(O.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, i.jsx)("img", {
                                ref: t,
                                className: $.rw,
                                alt: K.intl.formatToPlainString(K.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, E.tW)(e, E.fY.GAME_TILE, o).url,
                            }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: $.tu,
                children: (0, i.jsxs)(C.e, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        h &&
                            (0, i.jsx)(A.m, {
                                text: K.intl.string(K.t.WmfZHZ),
                                children: (0, i.jsx)(I.K, {
                                    icon: N.q,
                                    onClick: ti,
                                    "aria-label": K.intl.string(K.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, i.jsx)(p.$, {
                            variant: te.ctaVariant,
                            text: te.ctaText,
                            onClick: te.onClickCta,
                            fullWidth: !0,
                            icon: te.ctaIcon,
                            iconPosition: te.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function te(t) {
    let { quest: e, location: n } = t;
    return (0, i.jsx)(O.jY, { source: n, questId: e.id, isPreview: e.preview, children: (0, i.jsx)(tt, { ...t }) });
}
var tn = n(63639);
function ti(t) {
    let { onClose: e, transitionState: n } = t;
    return (0, i.jsx)(a.Modal, {
        size: "md",
        title: K.intl.string(K.t.Hd3D8W),
        actions: [{ variant: "primary", text: K.intl.string(K.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: n,
        children: (0, i.jsx)(l.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: K.intl.string(K.t.Ij97SL),
        }),
    });
}
function ts(t) {
    let {
            quest: e,
            sourceQuestContent: n,
            transitionState: a,
            onClose: l,
            rewardContent: b,
            isRewardContentLoading: f,
            rewardContentHasError: g,
            location: x,
        } = t,
        C = u.uF.REWARD_MODAL,
        [I, N] = s.useState(!0),
        p = e.config.features.some((t) => Y.Tz.has(t)),
        A = s.useCallback(async () => {
            p ? l() : (await (0, m.f7)(e.config.ctaConfig?.link)) && (l(), (0, r.closeAllModals)());
        }, [e.config.ctaConfig?.link, l, p]);
    if (g) return (0, i.jsx)(ti, { onClose: l, transitionState: a });
    let v = f || I;
    return (0, i.jsx)(h.R, {
        questOrQuests: e,
        questContent: C,
        sourceQuestContent: n,
        children: (t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    v ? (0, i.jsx)(d.y, { className: tn.u1, type: d.y.Type.WANDERING_CUBES }) : null,
                    (0, i.jsx)("div", {
                        ref: t,
                        style: { visibility: v ? "hidden" : "visible" },
                        children: (0, i.jsxs)(o.EO, {
                            "data-migration-pending": !0,
                            transitionState: v ? c.ip.HIDDEN : a,
                            size: o.rI.DYNAMIC,
                            className: tn.yl,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, i.jsx)(o.s_, {
                                    "data-migration-pending": !0,
                                    className: tn.b,
                                    onClick: l,
                                    withCircleBackground: !0,
                                }),
                                (0, i.jsxs)("div", {
                                    className: tn.jE,
                                    children: [
                                        (0, i.jsx)("div", { className: tn._H, children: b }),
                                        (0, i.jsx)("div", {
                                            className: tn.xK,
                                            children: (0, i.jsx)(te, {
                                                quest: e,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => N(!1),
                                                preCtaClick: A,
                                                location: x,
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
