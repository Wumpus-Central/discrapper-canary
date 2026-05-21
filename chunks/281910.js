n.d(t, { A: () => eG });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(269115),
    a = n(939249),
    o = n(789645),
    c = n(689175),
    d = n(688810),
    u = n(396748),
    m = n(488803),
    h = n(522055),
    g = n(645619),
    x = n(174459),
    f = n(917064),
    A = n(503698),
    p = n.n(A),
    E = n(534514),
    _ = n(104510),
    j = n(661531),
    N = n(834730),
    T = n(821609),
    I = n(597770),
    v = n(548118),
    C = n(532794),
    S = n(864310),
    b = n(338548),
    y = n(287809),
    R = n(178368),
    O = n(428262),
    L = n(987144),
    k = n(652215),
    P = n(788868),
    G = n(375708),
    D = n(474236);
let V = function (e) {
    let { className: t, closeLayer: n, guild: a, onCtaVisibilityChange: o } = e,
        c = l.useRef(null),
        u = (0, s.bG)([y.default], () => y.default.getCurrentUser()),
        m = (0, s.bG)([R.A], () => R.A.boostSlots),
        h = u?.isPremiumGroupMember(),
        { analyticsLocations: g } = (0, d.Ay)(),
        [x, f] = l.useState(!1),
        A = l.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [m, a.id],
        ),
        V = (0, S.A)(e.guild.id).total;
    async function w() {
        f(!0),
            await (0, L.g)({
                analyticsLocations: g,
                analyticsLocation: {
                    page: k.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: k.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: k.ZSU.BUTTON_CTA,
                    objectType: k.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: n,
            }),
            f(!1);
    }
    return (0, i.jsxs)("div", {
        className: p()(D.kL, t),
        children: [
            (0, i.jsxs)("div", {
                className: D.$R,
                children: [
                    (0, i.jsx)(v.Ay, { className: D.$f, guild: a, size: v.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, i.jsxs)("div", {
                        className: D.CR,
                        children: [
                            (0, i.jsx)(E.D, { className: D.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, i.jsxs)("div", {
                                className: D.SJ,
                                children: [
                                    (0, i.jsx)(_._, {
                                        color:
                                            V > 0 ? j.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: p()(D.Me, { [D.S3]: V > 0 }),
                                    }),
                                    (0, i.jsx)(N.E, {
                                        className: D.n,
                                        variant: "text-md/semibold",
                                        children: G.intl.format(G.t["pob/cL"], { subscriptions: V }),
                                    }),
                                ],
                            }),
                            A > 0
                                ? (0, i.jsx)(N.E, {
                                      className: D.EV,
                                      variant: "text-sm/normal",
                                      children: G.intl.format(G.t.Jeto2u, { numSubscriptions: A }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: D.mY,
                children: [
                    (0, i.jsx)("h1", { className: D.R_, children: G.intl.string(G.t.N4sqzL) }),
                    h ? (0, i.jsx)(b.A, { alwaysWhite: !0 }) : null,
                    (0, i.jsxs)("div", {
                        className: D.Sq,
                        children: [
                            (0, i.jsx)(r.L, {
                                innerRef: c,
                                onChange: o,
                                threshold: 0.9,
                                children: (0, i.jsx)("div", {
                                    ref: c,
                                    className: D.dp,
                                    children: (0, i.jsx)(T.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: _._,
                                        text: G.intl.string(G.t.gKmQ1G),
                                        onClick: w,
                                        loading: x,
                                        disabled: h,
                                    }),
                                }),
                            }),
                            O.Ay.hasFreeBoosts(u) || O.Ay.isPremium(u, P.PremiumTypes.TIER_2)
                                ? (0, i.jsx)(T.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: I.o,
                                      text: G.intl.string(G.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, C.A)({
                                              initialPlanId: null,
                                              subscriptionTier: P.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: g,
                                              analyticsObject: {
                                                  page: k.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: k.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: k.ZSU.BUTTON_ICON,
                                                  objectType: k.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, i.jsx)(T.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: G.intl.string(G.t.Q43TvC),
                                      onClick: function () {
                                          (0, C.A)({
                                              initialPlanId: null,
                                              subscriptionTier: P.pe.TIER_2,
                                              analyticsLocations: g,
                                              analyticsObject: {
                                                  page: k.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: k.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: k.ZSU.BUTTON_ICON,
                                                  objectType: k.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                      disabled: h,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var w = n(232122),
    U = n(366010),
    M = n(736653),
    B = n(303136),
    F = n(676279),
    W = n(215895);
function z(e) {
    let { className: t } = e,
        n = (0, M.Ay)(),
        l = (0, U.q)(n),
        s = (0, F.TM)()
            ? l
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : l
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: W.YL }),
            (0, i.jsx)(
                B.A,
                {
                    fallbackImage: l
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, i.jsx)("source", { src: s }),
                },
                s,
            ),
        ],
    });
}
var Q = n(64051),
    H = n(972919),
    K = n(724677),
    q = n(210273),
    X = n(508155),
    Y = n(853513),
    $ = n(111674);
function J(e) {
    let { tier: t, isActive: n } = e,
        l = t === k.TVA.TIER_1,
        s = t === k.TVA.TIER_3,
        r = t === k.TVA.TIER_1 ? Q.v : t === k.TVA.TIER_2 ? H.w : K.H;
    return (0, i.jsxs)("div", {
        className: $.MY,
        children: [
            (0, i.jsx)("div", { className: p()($.hr, { [$.ti]: n, [$.YO]: !n, [$.JQ]: l, [$.Uz]: s }) }),
            (0, i.jsx)("div", {
                className: p()($.Zj, {
                    [$.jv]: n,
                    [$.ip]: t === k.TVA.TIER_1,
                    [$.p3]: t === k.TVA.TIER_2,
                    [$.wF]: t === k.TVA.TIER_3,
                }),
                children: (0, i.jsx)(r, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function Z(e) {
    let { guild: t, definition: n } = e,
        { tier: l, perks: s } = n,
        r = t.premiumTier >= l,
        a = k.M2T[l];
    return (0, i.jsxs)("div", {
        className: p()($.Nr, { [$.Bm]: r, [$.c]: !r }),
        children: [
            (0, i.jsx)(J, { tier: l, isActive: r }),
            (0, i.jsxs)("div", {
                className: $.zI,
                children: [
                    (0, i.jsxs)("div", {
                        className: $.$h,
                        children: [
                            (0, i.jsx)(E.D, {
                                className: p()($.JJ, { [$.eX]: !r }),
                                variant: "heading-xl/semibold",
                                color: r ? "text-strong" : void 0,
                                children: G.intl.string(
                                    l === k.TVA.TIER_1 ? G.t.nzXtaS : l === k.TVA.TIER_2 ? G.t["h33/uW"] : G.t.BfF6ED,
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                className: $.yC,
                                children: [
                                    (0, i.jsx)(_._, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(N.E, {
                                        variant: "text-md/medium",
                                        children: G.intl.format(G.t["pob/cL"], { subscriptions: a }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: $.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, q.X)(e.perkIcon);
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: p()($.bK, { [$.o]: !r }),
                                        children: [
                                            (0, i.jsx)(n, {
                                                className: $.kf,
                                                color: r ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, i.jsx)(N.E, {
                                                variant: "text-md/medium",
                                                color: r ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, i.jsx)(N.E, {
                                className: $.wx,
                                variant: "text-md/medium",
                                children: G.intl.string(Y.default.nIj3LZ),
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
    return (0, i.jsx)("div", {
        className: p()($.iE, n),
        children: X.t.map((e) => (0, i.jsx)(Z, { guild: t, definition: e }, e.tier)),
    });
}
var et = n(873174),
    en = n(172218),
    ei = n(717421),
    el = n(289704),
    es = n(628284),
    er = n(777666),
    ea = n(775602),
    eo = n(793574),
    ec = n(868652),
    ed = n(363487),
    eu = n(73381),
    em = n(998418),
    eh = n(828162),
    eg = n(71393),
    ex = n(975571),
    ef = n(800007),
    eA = n(568065),
    ep = n(576709),
    eE = n(262880);
function e_(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: r,
            description: a,
            cost: o,
            costDecorator: c,
            staticImageUrl: u,
            animatedImageUrl: m,
            powerup: h,
            badge: g,
            onClose: x,
        } = e,
        { analyticsLocations: f } = (0, d.Ay)(),
        A = n !== eA.b_.INACTIVE,
        I = (0, ed.A)(t),
        v = (0, s.bG)([ea.A], () => ea.A.useReducedMotion),
        C = l.useRef(null),
        [S, b] = l.useState(!1),
        [y, R] = l.useState(!1),
        [O, P] = l.useState(!1),
        D = y || O,
        V = l.useCallback(() => {
            let e = eg.A.getGuild(t);
            null != e &&
                (0, L.g)({
                    analyticsLocation: {
                        page: k.liQ.GUILD_POWERUPS_MARKETING,
                        section: k.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: f,
                    guild: e,
                });
        }, [t, f]),
        w = l.useCallback(() => {
            x(), (0, eh.A)(t, eo.A.GUILD_POWERUPS_MARKETING, h.skuId);
        }, [t, h.skuId, x]),
        U = { tension: 400, friction: 30 },
        M = (0, ei.z)({ scale: D ? 0.85 : 1, y: D ? -32 : 0, config: U }),
        B = (0, ei.z)({ scale: D ? 0.7 : 1, y: D ? -35 : 0, config: U }),
        F = (0, ei.z)({ y: D ? -32 : 0, config: U }),
        W = (0, ei.z)({ opacity: +!!D, transform: D ? "translateY(0)" : "translateY(16px)", config: U }),
        z = l.useCallback((e) => {
            e && b(!0);
        }, []),
        Q = l.useCallback(() => {
            P(!0);
        }, []),
        H = l.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || P(!1);
        }, []),
        K = (0, en.K)(z),
        q = h.skuId === ef.W5;
    return (0, i.jsxs)("div", {
        className: p()(eE.Nr, { [eE.fM]: S }),
        onFocus: Q,
        onBlur: H,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        children: [
            (0, i.jsx)("div", { className: eE.sL, ref: K }),
            (0, i.jsx)("div", {
                className: eE.kQ,
                children: q
                    ? (0, i.jsx)(et.animated.div, {
                          className: eE.bm,
                          style: { transform: (0, et.to)([B.scale, B.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, i.jsx)(el.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: C,
                              fit: "contain",
                              className: eE.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, i.jsx)(et.animated.img, {
                          className: eE.bm,
                          src: D && null != m && "" !== m && !v ? m : u,
                          alt: "",
                          style: { transform: (0, et.to)([M.scale, M.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, i.jsxs)(et.animated.div, {
                style: { ...F, transform: F.y.to((e) => `translateY(${e}px)`) },
                className: eE.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: eE.P_,
                        children: [
                            (0, i.jsx)(E.D, { className: eE.DD, variant: "heading-lg/semibold", children: r }),
                            (0, i.jsx)(N.E, { className: eE.h_, variant: "text-md/medium", children: a }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: eE.jp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eE.qS,
                                children: [
                                    (0, i.jsx)(_._, { size: "xs", color: j.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, i.jsx)(N.E, {
                                        className: eE.Vv,
                                        variant: "text-sm/semibold",
                                        children: G.intl.formatToPlainString(
                                            null != c ? ep.default["G/aTXi"] : ep.default.r9pa9K,
                                            { boostCount: o },
                                        ),
                                    }),
                                ],
                            }),
                            A &&
                                (0, i.jsxs)("div", {
                                    className: p()(eE.qS, eE.nt),
                                    children: [
                                        (0, i.jsx)(es.y, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(N.E, {
                                            className: eE.nt,
                                            variant: "text-sm/semibold",
                                            children: G.intl.string(G.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(et.animated.div, {
                style: W,
                className: eE.NC,
                children: [
                    (0, i.jsx)("div", {
                        className: eE.x6,
                        children: (0, i.jsx)(T.$, {
                            variant: "primary",
                            text: G.intl.string(G.t.oPAx73),
                            onClick: V,
                            fullWidth: !0,
                        }),
                    }),
                    I &&
                        (0, i.jsx)("div", {
                            className: eE.x6,
                            children: (0, i.jsx)(T.$, {
                                variant: "secondary",
                                text: G.intl.string(G.t.GoCQxU),
                                onClick: w,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === g && (0, i.jsx)(er.Lp, { className: eE.AP, text: G.intl.string(G.t.y2b7CA) }),
            "beta" === g &&
                (0, i.jsx)(er.Lp, {
                    className: eE.AP,
                    text: G.intl.string(G.t.oW0eUd),
                    color: j.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function ej(e) {
    let { guildId: t, powerup: n, costDecorator: l, badge: s, onClose: r } = e,
        a = (0, em.Ay)(t, n).type;
    return (0, i.jsx)(e_, {
        guildId: t,
        activeStatus: a,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: l,
        badge: s,
        onClose: r,
    });
}
let eN = new Map([[ef.W5, "+"]]),
    eT = l.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        l.useEffect(() => {
            g.A.shouldFetchCatalogForGuild(n.id) && (0, ec.AK)(n.id),
                g.A.shouldFetchPowerupsForGuild(n.id) && (0, ec.Xd)(n.id);
        }, [n.id]);
        let r = Array.from((0, eu.A)(n.id) ?? [])
            .reverse()
            .slice(0, 6);
        return 0 === r.length
            ? null
            : (0, i.jsxs)("div", {
                  ref: t,
                  className: eE.iE,
                  children: [
                      (0, i.jsxs)("div", {
                          className: eE.ND,
                          children: [
                              (0, i.jsx)(E.D, {
                                  className: eE.R_,
                                  variant: "heading-xxl/semibold",
                                  children: G.intl.string(Y.default.wjI18Q),
                              }),
                              (0, i.jsx)(N.E, {
                                  className: eE.fV,
                                  variant: "text-md/medium",
                                  children: G.intl.format(Y.default.S562fn, {
                                      helpDeskArticle: ex.A.getArticleURL(k.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: eE.vY,
                          children: r.map((e) =>
                              (0, i.jsx)(
                                  ej,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: eN.get(e.skuId),
                                      badge: eA.ys[e.skuId],
                                      onClose: s,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eT.displayName = "GuildBoostingMarketingPerkCards";
var eI = n(527113),
    ev = n(862482),
    eC = n(187322),
    eS = n(944304),
    eb = n(672350);
let ey = function (e) {
    let { closeLayer: t, guild: n, isVisible: s } = e,
        r = l.useRef(null),
        a = (0, ei.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(et.animated.div, {
        className: eb.iE,
        style: a,
        children: (0, i.jsx)("div", {
            ref: r,
            className: eb.iJ,
            children: (0, i.jsxs)(eC.xp, {
                containerRef: r,
                children: [
                    (0, i.jsxs)("div", {
                        className: eb.OA,
                        children: [
                            (0, i.jsx)(v.Ay, { className: eb.$f, guild: n, size: v.Ay.Sizes.SMALL }),
                            (0, i.jsx)(N.E, { className: eb.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)(eS.A, {
                        className: eb.lI,
                        guild: n,
                        analyticsLocation: {
                            page: k.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: k.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: k.ZSU.BUTTON_CTA,
                            objectType: k.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !s,
                        size: ev.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eR = n(192308),
    eO = n(65154),
    eL = n(387772),
    ek = n(519636);
function eP(e) {
    let { guild: t, analyticsLocation: s, videoPlacement: r, sourceAnalyticsLocations: o } = e,
        c = l.useCallback(() => {
            (0, eR.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("6836"), n.e("85810")]).then(n.bind(n, 872233));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: s,
                        videoPlacement: r,
                        sourceAnalyticsLocations: o,
                    });
            });
        }, [s, t.id, o, r]);
    return (0, i.jsxs)(a.D, {
        className: eL.kL,
        onClick: c,
        "aria-label": G.intl.string(Y.default["103aY+"]),
        children: [
            (0, i.jsx)("img", { alt: "", className: eL.xn, src: ek.A }),
            (0, i.jsx)("div", { className: eL.Lw }),
            (0, i.jsx)("div", {
                className: eL.Rr,
                children: (0, i.jsx)(eO.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eG(e) {
    let { analyticsLocation: t, guild: n, onClose: A, scrollToPowerupCards: p } = e,
        [E, _] = l.useState(!0),
        j = l.useRef(!1),
        { analyticsLocations: N } = (0, d.Ay)(),
        T = l.useRef(null),
        I = l.useRef(null),
        v = l.useRef(null),
        C = l.useCallback(() => {
            A?.();
        }, [A]),
        S = l.useCallback(() => {
            null != v.current &&
                null != I.current &&
                I.current.scrollIntoViewNode({ node: v.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        b = l.useCallback(
            (e) => {
                e &&
                    !j.current &&
                    (x.default.track(k.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: k.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: N,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (j.current = !0));
            },
            [t, N, n.id],
        );
    l.useEffect(() => {
        x.default.track(k.HAw.OPEN_MODAL, {
            type: k.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: N,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, N]);
    let y = (0, m.C$)(n.id, "GuildBoostingMarketingRefresh"),
        R = (0, s.bG)([h.A], () => h.A.shouldFetchCatalogForGuild(n.id));
    l.useEffect(() => {
        y && R && (0, u.z9)(n.id);
    }, [n.id, y, R]);
    let O = (0, s.bG)([g.A], () => g.A.hasFetchedPowerupCatalog(n.id));
    return (
        l.useEffect(() => {
            if (p && O) {
                let e = setTimeout(() => {
                    S();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [p, S, O]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != A &&
                    (0, i.jsx)("div", {
                        className: W.Yk,
                        children: (0, i.jsx)(a.D, {
                            className: W.b,
                            onClick: C,
                            "aria-label": G.intl.string(G.t.cpT0Cq),
                            children: (0, i.jsx)(o.P, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, i.jsxs)(c.Gt, {
                    ref: I,
                    className: W.XG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: W.wx,
                            children: [
                                (0, i.jsx)(z, { className: W.y2 }),
                                (0, i.jsxs)("div", {
                                    className: W.AZ,
                                    children: [
                                        (0, i.jsx)(V, {
                                            guild: n,
                                            closeLayer: C,
                                            onCtaVisibilityChange: _,
                                            className: W.Oh,
                                        }),
                                        (0, i.jsx)(eP, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: N,
                                        }),
                                        (0, i.jsx)(ee, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: W.uE,
                            children: (0, i.jsx)(eT, { ref: v, guild: e.guild, onClose: C }),
                        }),
                        (0, i.jsx)("div", {
                            className: W.o6,
                            children: (0, i.jsxs)("div", {
                                className: W.y$,
                                children: [
                                    (0, i.jsx)(eI.A, { className: W.Q, guild: n }),
                                    (0, i.jsx)(f.A, {}),
                                    (0, i.jsx)(w.A, {}),
                                ],
                            }),
                        }),
                        (0, i.jsx)(r.L, {
                            innerRef: T,
                            onChange: b,
                            children: (0, i.jsx)("div", { ref: T, className: W.mR }),
                        }),
                    ],
                }),
                (0, i.jsx)(ey, { guild: n, isVisible: !E, closeLayer: C }),
            ],
        })
    );
}
