n.d(t, { A: () => eD });
var r = n(627968),
    a = n(64700),
    i = n(17928),
    o = n(230109),
    l = n(939249),
    s = n(789645),
    d = n(689175),
    u = n(688810),
    c = n(665171),
    _ = n(488803),
    p = n(522055),
    C = n(645619),
    h = n(954571),
    E = n(917064),
    m = n(503698),
    A = n.n(m),
    I = n(534514),
    T = n(104510),
    y = n(661531),
    g = n(834730),
    S = n(821609),
    N = n(597770),
    f = n(548118),
    R = n(532794),
    L = n(864310),
    O = n(338548),
    P = n(287809),
    b = n(178368),
    M = n(927578),
    x = n(987144),
    v = n(652215),
    U = n(788868),
    D = n(985018),
    G = n(474236);
let j = function (e) {
    let { className: t, closeLayer: n, guild: l, onCtaVisibilityChange: s } = e,
        d = a.useRef(null),
        c = (0, i.bG)([P.default], () => P.default.getCurrentUser()),
        _ = (0, i.bG)([b.A], () => b.A.boostSlots),
        p = c?.isPremiumGroupMember(),
        { analyticsLocations: C } = (0, u.Ay)(),
        [h, E] = a.useState(!1),
        m = a.useMemo(
            () =>
                Object.keys(_).filter((e) => {
                    let t = _[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === l.id;
                }).length,
            [_, l.id],
        ),
        j = (0, L.A)(e.guild.id).total;
    async function w() {
        E(!0),
            await (0, x.g)({
                analyticsLocations: C,
                analyticsLocation: {
                    page: v.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: v.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: v.ZSU.BUTTON_CTA,
                    objectType: v.AnalyticsObjectTypes.BUY,
                },
                guild: l,
                closeLayer: n,
            }),
            E(!1);
    }
    return (0, r.jsxs)("div", {
        className: A()(G.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: G.$R,
                children: [
                    (0, r.jsx)(f.Ay, { className: G.$f, guild: l, size: f.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, r.jsxs)("div", {
                        className: G.CR,
                        children: [
                            (0, r.jsx)(I.D, { className: G.J5, variant: "heading-lg/semibold", children: l.name }),
                            (0, r.jsxs)("div", {
                                className: G.SJ,
                                children: [
                                    (0, r.jsx)(T._, {
                                        color:
                                            j > 0 ? y.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: A()(G.Me, { [G.S3]: j > 0 }),
                                    }),
                                    (0, r.jsx)(g.E, {
                                        className: G.n,
                                        variant: "text-md/semibold",
                                        children: D.intl.format(D.t["pob/cL"], { subscriptions: j }),
                                    }),
                                ],
                            }),
                            m > 0
                                ? (0, r.jsx)(g.E, {
                                      className: G.EV,
                                      variant: "text-sm/normal",
                                      children: D.intl.format(D.t.Jeto2u, { numSubscriptions: m }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: G.mY,
                children: [
                    (0, r.jsx)("h1", { className: G.R_, children: D.intl.string(D.t.N4sqzL) }),
                    p ? (0, r.jsx)(O.A, { alwaysWhite: !0 }) : null,
                    (0, r.jsxs)("div", {
                        className: G.Sq,
                        children: [
                            (0, r.jsx)(o.L, {
                                innerRef: d,
                                onChange: s,
                                threshold: 0.9,
                                children: (0, r.jsx)("div", {
                                    ref: d,
                                    className: G.dp,
                                    children: (0, r.jsx)(S.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: T._,
                                        text: D.intl.string(D.t.gKmQ1G),
                                        onClick: w,
                                        loading: h,
                                        disabled: p,
                                    }),
                                }),
                            }),
                            M.Ay.hasFreeBoosts(c) || M.Ay.isPremium(c, U.PremiumTypes.TIER_2)
                                ? (0, r.jsx)(S.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: N.o,
                                      text: D.intl.string(D.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, R.A)({
                                              initialPlanId: null,
                                              subscriptionTier: U.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: C,
                                              analyticsObject: {
                                                  page: v.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: v.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: v.ZSU.BUTTON_ICON,
                                                  objectType: v.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, r.jsx)(S.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: D.intl.string(D.t.Q43TvC),
                                      onClick: function () {
                                          (0, R.A)({
                                              initialPlanId: null,
                                              subscriptionTier: U.pe.TIER_2,
                                              analyticsLocations: C,
                                              analyticsObject: {
                                                  page: v.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: v.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: v.ZSU.BUTTON_ICON,
                                                  objectType: v.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                      disabled: p,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var w = n(232122),
    B = n(366010),
    F = n(736653),
    k = n(303136),
    V = n(676279),
    H = n(215895);
function K(e) {
    let { className: t } = e,
        n = (0, F.Ay)(),
        a = (0, B.q)(n),
        i = (0, V.TM)()
            ? a
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : a
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)("div", { className: H.YL }),
            (0, r.jsx)(
                k.A,
                {
                    fallbackImage: a
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, r.jsx)("source", { src: i }),
                },
                i,
            ),
        ],
    });
}
var W = n(64051),
    Y = n(972919),
    z = n(724677),
    J = n(210273),
    Q = n(508155),
    X = n(853513),
    Z = n(111674);
function q(e) {
    let { tier: t, isActive: n } = e,
        a = t === v.TVA.TIER_1,
        i = t === v.TVA.TIER_3,
        o = t === v.TVA.TIER_1 ? W.v : t === v.TVA.TIER_2 ? Y.w : z.H;
    return (0, r.jsxs)("div", {
        className: Z.MY,
        children: [
            (0, r.jsx)("div", { className: A()(Z.hr, { [Z.ti]: n, [Z.YO]: !n, [Z.JQ]: a, [Z.Uz]: i }) }),
            (0, r.jsx)("div", {
                className: A()(Z.Zj, {
                    [Z.jv]: n,
                    [Z.ip]: t === v.TVA.TIER_1,
                    [Z.p3]: t === v.TVA.TIER_2,
                    [Z.wF]: t === v.TVA.TIER_3,
                }),
                children: (0, r.jsx)(o, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function $(e) {
    let { guild: t, definition: n } = e,
        { tier: a, perks: i } = n,
        o = t.premiumTier >= a,
        l = v.M2T[a];
    return (0, r.jsxs)("div", {
        className: A()(Z.Nr, { [Z.Bm]: o, [Z.c]: !o }),
        children: [
            (0, r.jsx)(q, { tier: a, isActive: o }),
            (0, r.jsxs)("div", {
                className: Z.zI,
                children: [
                    (0, r.jsxs)("div", {
                        className: Z.$h,
                        children: [
                            (0, r.jsx)(I.D, {
                                className: A()(Z.JJ, { [Z.eX]: !o }),
                                variant: "heading-xl/semibold",
                                color: o ? "text-strong" : void 0,
                                children: D.intl.string(
                                    a === v.TVA.TIER_1 ? D.t.nzXtaS : a === v.TVA.TIER_2 ? D.t["h33/uW"] : D.t.BfF6ED,
                                ),
                            }),
                            (0, r.jsxs)("div", {
                                className: Z.yC,
                                children: [
                                    (0, r.jsx)(T._, { size: "xs", color: "currentColor" }),
                                    (0, r.jsx)(g.E, {
                                        variant: "text-md/medium",
                                        children: D.intl.format(D.t["pob/cL"], { subscriptions: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: Z.PJ,
                        children: [
                            i.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, J.X)(e.perkIcon);
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        className: A()(Z.bK, { [Z.o]: !o }),
                                        children: [
                                            (0, r.jsx)(n, {
                                                className: Z.kf,
                                                color: o ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, r.jsx)(g.E, {
                                                variant: "text-md/medium",
                                                color: o ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, r.jsx)(g.E, {
                                className: Z.wx,
                                variant: "text-md/medium",
                                children: D.intl.string(X.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: A()(Z.iE, n),
        children: Q.t.map((e) => (0, r.jsx)($, { guild: t, definition: e }, e.tier)),
    });
}
var et = n(419354),
    en = n(172218),
    er = n(717421),
    ea = n(289704),
    ei = n(628284),
    eo = n(777666),
    el = n(775602),
    es = n(793574),
    ed = n(942975),
    eu = n(363487),
    ec = n(73381),
    e_ = n(998418),
    ep = n(828162),
    eC = n(71393),
    eh = n(975571),
    eE = n(800007),
    em = n(568065),
    eA = n(576709),
    eI = n(262880);
function eT(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: o,
            description: l,
            cost: s,
            costDecorator: d,
            staticImageUrl: c,
            animatedImageUrl: _,
            powerup: p,
            badge: C,
            onClose: h,
        } = e,
        { analyticsLocations: E } = (0, u.Ay)(),
        m = n !== em.b_.INACTIVE,
        N = (0, eu.A)(t),
        f = (0, i.bG)([el.A], () => el.A.useReducedMotion),
        R = a.useRef(null),
        [L, O] = a.useState(!1),
        [P, b] = a.useState(!1),
        [M, U] = a.useState(!1),
        G = P || M,
        j = a.useCallback(() => {
            let e = eC.A.getGuild(t);
            null != e &&
                (0, x.g)({
                    analyticsLocation: {
                        page: v.liQ.GUILD_POWERUPS_MARKETING,
                        section: v.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: E,
                    guild: e,
                });
        }, [t, E]),
        w = a.useCallback(() => {
            h(), (0, ep.A)(t, es.A.GUILD_POWERUPS_MARKETING, p.skuId);
        }, [t, p.skuId, h]),
        B = { tension: 400, friction: 30 },
        F = (0, er.z)({ scale: G ? 0.85 : 1, y: G ? -32 : 0, config: B }),
        k = (0, er.z)({ scale: G ? 0.7 : 1, y: G ? -35 : 0, config: B }),
        V = (0, er.z)({ y: G ? -32 : 0, config: B }),
        H = (0, er.z)({ opacity: +!!G, transform: G ? "translateY(0)" : "translateY(16px)", config: B }),
        K = a.useCallback((e) => {
            e && O(!0);
        }, []),
        W = a.useCallback(() => {
            U(!0);
        }, []),
        Y = a.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || U(!1);
        }, []),
        z = (0, en.K)(K),
        J = p.skuId === eE.W5;
    return (0, r.jsxs)("div", {
        className: A()(eI.Nr, { [eI.fM]: L }),
        onFocus: W,
        onBlur: Y,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: [
            (0, r.jsx)("div", { className: eI.sL, ref: z }),
            (0, r.jsx)("div", {
                className: eI.kQ,
                children: J
                    ? (0, r.jsx)(et.animated.div, {
                          className: eI.bm,
                          style: { transform: (0, et.to)([k.scale, k.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, r.jsx)(ea.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: R,
                              fit: "contain",
                              className: eI.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(et.animated.img, {
                          className: eI.bm,
                          src: G && null != _ && "" !== _ && !f ? _ : c,
                          alt: "",
                          style: { transform: (0, et.to)([F.scale, F.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, r.jsxs)(et.animated.div, {
                style: { ...V, transform: V.y.to((e) => `translateY(${e}px)`) },
                className: eI.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: eI.P_,
                        children: [
                            (0, r.jsx)(I.D, { className: eI.DD, variant: "heading-lg/semibold", children: o }),
                            (0, r.jsx)(g.E, { className: eI.h_, variant: "text-md/medium", children: l }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: eI.jp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: eI.qS,
                                children: [
                                    (0, r.jsx)(T._, { size: "xs", color: y.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, r.jsx)(g.E, {
                                        className: eI.Vv,
                                        variant: "text-sm/semibold",
                                        children: D.intl.formatToPlainString(
                                            null != d ? eA.default["G/aTXi"] : eA.default.r9pa9K,
                                            { boostCount: s },
                                        ),
                                    }),
                                ],
                            }),
                            m &&
                                (0, r.jsxs)("div", {
                                    className: A()(eI.qS, eI.nt),
                                    children: [
                                        (0, r.jsx)(ei.y, { size: "xs", color: "currentColor" }),
                                        (0, r.jsx)(g.E, {
                                            className: eI.nt,
                                            variant: "text-sm/semibold",
                                            children: D.intl.string(D.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(et.animated.div, {
                style: H,
                className: eI.NC,
                children: [
                    (0, r.jsx)("div", {
                        className: eI.x6,
                        children: (0, r.jsx)(S.$, {
                            variant: "primary",
                            text: D.intl.string(D.t.oPAx73),
                            onClick: j,
                            fullWidth: !0,
                        }),
                    }),
                    N &&
                        (0, r.jsx)("div", {
                            className: eI.x6,
                            children: (0, r.jsx)(S.$, {
                                variant: "secondary",
                                text: D.intl.string(D.t.GoCQxU),
                                onClick: w,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === C && (0, r.jsx)(eo.Lp, { className: eI.AP, text: D.intl.string(D.t.y2b7CA) }),
            "beta" === C &&
                (0, r.jsx)(eo.Lp, {
                    className: eI.AP,
                    text: D.intl.string(D.t.oW0eUd),
                    color: y.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function ey(e) {
    let { guildId: t, powerup: n, costDecorator: a, badge: i, onClose: o } = e,
        l = (0, e_.Ay)(t, n).type;
    return (0, r.jsx)(eT, {
        guildId: t,
        activeStatus: l,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: a,
        badge: i,
        onClose: o,
    });
}
let eg = new Map([[eE.W5, "+"]]),
    eS = a.forwardRef((e, t) => {
        let { guild: n, onClose: i } = e;
        a.useEffect(() => {
            C.A.shouldFetchCatalogForGuild(n.id) && (0, ed.AK)(n.id),
                C.A.shouldFetchPowerupsForGuild(n.id) && (0, ed.Xd)(n.id);
        }, [n.id]);
        let o = Array.from((0, ec.A)(n.id) ?? [])
            .reverse()
            .slice(0, 6);
        return 0 === o.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: eI.iE,
                  children: [
                      (0, r.jsxs)("div", {
                          className: eI.ND,
                          children: [
                              (0, r.jsx)(I.D, {
                                  className: eI.R_,
                                  variant: "heading-xxl/semibold",
                                  children: D.intl.string(X.default.wjI18Q),
                              }),
                              (0, r.jsx)(g.E, {
                                  className: eI.fV,
                                  variant: "text-md/medium",
                                  children: D.intl.format(X.default.S562fn, {
                                      helpDeskArticle: eh.A.getArticleURL(v.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: eI.vY,
                          children: o.map((e) =>
                              (0, r.jsx)(
                                  ey,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: eg.get(e.skuId),
                                      badge: em.ys[e.skuId],
                                      onClose: i,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eS.displayName = "GuildBoostingMarketingPerkCards";
var eN = n(527113),
    ef = n(862482),
    eR = n(187322),
    eL = n(721923),
    eO = n(672350);
let eP = function (e) {
    let { closeLayer: t, guild: n, isVisible: i } = e,
        o = a.useRef(null),
        l = (0, er.z)({
            transform: i ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(et.animated.div, {
        className: eO.iE,
        style: l,
        children: (0, r.jsx)("div", {
            ref: o,
            className: eO.iJ,
            children: (0, r.jsxs)(eR.xp, {
                containerRef: o,
                children: [
                    (0, r.jsxs)("div", {
                        className: eO.OA,
                        children: [
                            (0, r.jsx)(f.Ay, { className: eO.$f, guild: n, size: f.Ay.Sizes.SMALL }),
                            (0, r.jsx)(g.E, { className: eO.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, r.jsx)(eL.A, {
                        className: eO.lI,
                        guild: n,
                        analyticsLocation: {
                            page: v.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: v.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: v.ZSU.BUTTON_CTA,
                            objectType: v.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !i,
                        size: ef.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eb = n(192308),
    eM = n(65154),
    ex = n(387772),
    ev = n(519636);
function eU(e) {
    let { guild: t, analyticsLocation: i, videoPlacement: o, sourceAnalyticsLocations: s } = e,
        d = a.useCallback(() => {
            (0, eb.openModalLazy)(async () => {
                let { default: e } = await n.e("85810").then(n.bind(n, 872233));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: i,
                        videoPlacement: o,
                        sourceAnalyticsLocations: s,
                    });
            });
        }, [i, t.id, s, o]);
    return (0, r.jsxs)(l.D, {
        className: ex.kL,
        onClick: d,
        "aria-label": D.intl.string(X.default["103aY+"]),
        children: [
            (0, r.jsx)("img", { alt: "", className: ex.xn, src: ev.A }),
            (0, r.jsx)("div", { className: ex.Lw }),
            (0, r.jsx)("div", {
                className: ex.Rr,
                children: (0, r.jsx)(eM.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eD(e) {
    let { analyticsLocation: t, guild: n, onClose: m, scrollToPowerupCards: A } = e,
        [I, T] = a.useState(!0),
        y = a.useRef(!1),
        { analyticsLocations: g } = (0, u.Ay)(),
        S = a.useRef(null),
        N = a.useRef(null),
        f = a.useRef(null),
        R = a.useCallback(() => {
            m?.();
        }, [m]),
        L = a.useCallback(() => {
            null != f.current &&
                null != N.current &&
                N.current.scrollIntoViewNode({ node: f.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        O = a.useCallback(
            (e) => {
                e &&
                    !y.current &&
                    (h.default.track(v.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: v.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: g,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (y.current = !0));
            },
            [t, g, n.id],
        );
    a.useEffect(() => {
        h.default.track(v.HAw.OPEN_MODAL, {
            type: v.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: g,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, g]);
    let P = (0, _.C$)(n.id, "GuildBoostingMarketingRefresh"),
        b = (0, i.bG)([p.A], () => p.A.shouldFetchCatalogForGuild(n.id));
    a.useEffect(() => {
        P && b && (0, c.z9)(n.id);
    }, [n.id, P, b]);
    let M = (0, i.bG)([C.A], () => C.A.hasFetchedPowerupCatalog(n.id));
    return (
        a.useEffect(() => {
            if (A && M) {
                let e = setTimeout(() => {
                    L();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [A, L, M]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != m &&
                    (0, r.jsx)("div", {
                        className: H.Yk,
                        children: (0, r.jsx)(l.D, {
                            className: H.b,
                            onClick: R,
                            "aria-label": D.intl.string(D.t.cpT0Cq),
                            children: (0, r.jsx)(s.P, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, r.jsxs)(d.Gt, {
                    ref: N,
                    className: H.XG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: H.wx,
                            children: [
                                (0, r.jsx)(K, { className: H.y2 }),
                                (0, r.jsxs)("div", {
                                    className: H.AZ,
                                    children: [
                                        (0, r.jsx)(j, {
                                            guild: n,
                                            closeLayer: R,
                                            onCtaVisibilityChange: T,
                                            className: H.Oh,
                                        }),
                                        (0, r.jsx)(eU, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: g,
                                        }),
                                        (0, r.jsx)(ee, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: H.uE,
                            children: (0, r.jsx)(eS, { ref: f, guild: e.guild, onClose: R }),
                        }),
                        (0, r.jsx)("div", {
                            className: H.o6,
                            children: (0, r.jsxs)("div", {
                                className: H.y$,
                                children: [
                                    (0, r.jsx)(eN.A, { className: H.Q, guild: n }),
                                    (0, r.jsx)(E.A, {}),
                                    (0, r.jsx)(w.A, {}),
                                ],
                            }),
                        }),
                        (0, r.jsx)(o.L, {
                            innerRef: S,
                            onChange: O,
                            children: (0, r.jsx)("div", { ref: S, className: H.mR }),
                        }),
                    ],
                }),
                (0, r.jsx)(eP, { guild: n, isVisible: !I, closeLayer: R }),
            ],
        })
    );
}
