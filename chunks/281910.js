"use strict";
n.d(t, { A: () => ex });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(269115),
    o = n(187322),
    l = n(939249),
    u = n(789645),
    c = n(689175),
    d = n(688810),
    _ = n(396748),
    h = n(488803),
    f = n(522055),
    p = n(645619),
    E = n(174459),
    m = n(917064),
    g = n(503698),
    A = n.n(g),
    I = n(534514),
    T = n(104510),
    S = n(661531),
    y = n(834730),
    N = n(821609),
    v = n(597770),
    C = n(548118),
    R = n(532794),
    O = n(864310),
    b = n(338548),
    D = n(287809),
    L = n(178368),
    w = n(428262),
    M = n(987144),
    P = n(652215),
    x = n(788868),
    k = n(375708),
    U = n(474236);
let G = function (e) {
    let { className: t, closeLayer: n, guild: o, onCtaVisibilityChange: l } = e,
        u = r.useRef(null),
        c = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        _ = (0, s.bG)([L.A], () => L.A.boostSlots),
        h = c?.isPremiumGroupMember(),
        { analyticsLocations: f } = (0, d.Ay)(),
        [p, E] = r.useState(!1),
        m = r.useMemo(
            () =>
                Object.keys(_).filter((e) => {
                    let t = _[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === o.id;
                }).length,
            [_, o.id],
        ),
        g = (0, O.A)(e.guild.id).total;
    async function G() {
        E(!0),
            await (0, M.g)({
                analyticsLocations: f,
                analyticsLocation: {
                    page: P.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: P.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: P.ZSU.BUTTON_CTA,
                    objectType: P.AnalyticsObjectTypes.BUY,
                },
                guild: o,
                closeLayer: n,
            }),
            E(!1);
    }
    return (0, i.jsxs)("div", {
        className: A()(U.kL, t),
        children: [
            (0, i.jsxs)("div", {
                className: U.$R,
                children: [
                    (0, i.jsx)(C.Ay, { className: U.$f, guild: o, size: C.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, i.jsxs)("div", {
                        className: U.CR,
                        children: [
                            (0, i.jsx)(I.D, { className: U.J5, variant: "heading-lg/semibold", children: o.name }),
                            (0, i.jsxs)("div", {
                                className: U.SJ,
                                children: [
                                    (0, i.jsx)(T._, {
                                        color:
                                            g > 0 ? S.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: A()(U.Me, { [U.S3]: g > 0 }),
                                    }),
                                    (0, i.jsx)(y.E, {
                                        className: U.n,
                                        variant: "text-md/semibold",
                                        children: k.intl.format(k.t["pob/cL"], { subscriptions: g }),
                                    }),
                                ],
                            }),
                            m > 0
                                ? (0, i.jsx)(y.E, {
                                      className: U.EV,
                                      variant: "text-sm/normal",
                                      children: k.intl.format(k.t.Jeto2u, { numSubscriptions: m }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: U.mY,
                children: [
                    (0, i.jsx)("h1", { className: U.R_, children: k.intl.string(k.t.N4sqzL) }),
                    h ? (0, i.jsx)(b.A, { alwaysWhite: !0 }) : null,
                    (0, i.jsxs)("div", {
                        className: U.Sq,
                        children: [
                            (0, i.jsx)(a.L, {
                                innerRef: u,
                                onChange: l,
                                threshold: 0.9,
                                children: (0, i.jsx)("div", {
                                    ref: u,
                                    className: U.dp,
                                    children: (0, i.jsx)(N.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: T._,
                                        text: k.intl.string(k.t.gKmQ1G),
                                        onClick: G,
                                        loading: p,
                                        disabled: h,
                                    }),
                                }),
                            }),
                            w.Ay.hasFreeBoosts(c) || w.Ay.isPremium(c, x.PremiumTypes.TIER_2)
                                ? (0, i.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: v.o,
                                      text: k.intl.string(k.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, R.A)({
                                              initialPlanId: null,
                                              subscriptionTier: x.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: f,
                                              analyticsObject: {
                                                  page: P.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: P.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: P.ZSU.BUTTON_ICON,
                                                  objectType: P.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, i.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: k.intl.string(k.t.Q43TvC),
                                      onClick: function () {
                                          (0, R.A)({
                                              initialPlanId: null,
                                              subscriptionTier: x.pe.TIER_2,
                                              analyticsLocations: f,
                                              analyticsObject: {
                                                  page: P.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: P.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: P.ZSU.BUTTON_ICON,
                                                  objectType: P.AnalyticsObjectTypes.BUY,
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
var F = n(232122),
    V = n(366010),
    B = n(736653),
    H = n(303136),
    j = n(676279),
    Y = n(215895);
function W(e) {
    let { className: t } = e,
        n = (0, B.Ay)(),
        r = (0, V.q)(n),
        s = (0, j.TM)()
            ? r
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : r
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: Y.YL }),
            (0, i.jsx)(
                H.A,
                {
                    fallbackImage: r
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, i.jsx)("source", { src: s }),
                },
                s,
            ),
        ],
    });
}
var K = n(64051),
    $ = n(972919),
    z = n(724677),
    q = n(210273),
    X = n(508155),
    Z = n(853513),
    Q = n(111674);
function J(e) {
    let { tier: t, isActive: n } = e,
        r = t === P.TVA.TIER_1,
        s = t === P.TVA.TIER_3,
        a = t === P.TVA.TIER_1 ? K.v : t === P.TVA.TIER_2 ? $.w : z.H;
    return (0, i.jsxs)("div", {
        className: Q.MY,
        children: [
            (0, i.jsx)("div", { className: A()(Q.hr, { [Q.ti]: n, [Q.YO]: !n, [Q.JQ]: r, [Q.Uz]: s }) }),
            (0, i.jsx)("div", {
                className: A()(Q.Zj, {
                    [Q.jv]: n,
                    [Q.ip]: t === P.TVA.TIER_1,
                    [Q.p3]: t === P.TVA.TIER_2,
                    [Q.wF]: t === P.TVA.TIER_3,
                }),
                children: (0, i.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, definition: n } = e,
        { tier: r, perks: s } = n,
        a = t.premiumTier >= r,
        o = P.M2T[r];
    return (0, i.jsxs)("div", {
        className: A()(Q.Nr, { [Q.Bm]: a, [Q.c]: !a }),
        children: [
            (0, i.jsx)(J, { tier: r, isActive: a }),
            (0, i.jsxs)("div", {
                className: Q.zI,
                children: [
                    (0, i.jsxs)("div", {
                        className: Q.$h,
                        children: [
                            (0, i.jsx)(I.D, {
                                className: A()(Q.JJ, { [Q.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: k.intl.string(
                                    r === P.TVA.TIER_1 ? k.t.nzXtaS : r === P.TVA.TIER_2 ? k.t["h33/uW"] : k.t.BfF6ED,
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                className: Q.yC,
                                children: [
                                    (0, i.jsx)(T._, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(y.E, {
                                        variant: "text-md/medium",
                                        children: k.intl.format(k.t["pob/cL"], { subscriptions: o }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: Q.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, q.X)(e.perkIcon);
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: A()(Q.bK, { [Q.o]: !a }),
                                        children: [
                                            (0, i.jsx)(n, {
                                                className: Q.kf,
                                                color: a ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, i.jsx)(y.E, {
                                                variant: "text-md/medium",
                                                color: a ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, i.jsx)(y.E, {
                                className: Q.wx,
                                variant: "text-md/medium",
                                children: k.intl.string(Z.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { guild: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: A()(Q.iE, n),
        children: X.t.map((e) => (0, i.jsx)(ee, { guild: t, definition: e }, e.tier)),
    });
}
var en = n(922139),
    ei = n(172218),
    er = n(717421),
    es = n(289704),
    ea = n(628284),
    eo = n(812993),
    el = n(775602),
    eu = n(793574),
    ec = n(868652),
    ed = n(363487),
    e_ = n(73381),
    eh = n(998418),
    ef = n(828162),
    ep = n(71393),
    eE = n(975571),
    em = n(800007),
    eg = n(568065),
    eA = n(576709),
    eI = n(262880);
function eT(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: o,
            cost: l,
            costDecorator: u,
            staticImageUrl: c,
            animatedImageUrl: _,
            powerup: h,
            badge: f,
            onClose: p,
        } = e,
        { analyticsLocations: E } = (0, d.Ay)(),
        m = n !== eg.b_.INACTIVE,
        g = (0, ed.A)(t),
        v = (0, s.bG)([el.Ay], () => el.Ay.useReducedMotion),
        C = r.useRef(null),
        [R, O] = r.useState(!1),
        [b, D] = r.useState(!1),
        [L, w] = r.useState(!1),
        x = b || L,
        U = r.useCallback(() => {
            let e = ep.A.getGuild(t);
            null != e &&
                (0, M.g)({
                    analyticsLocation: {
                        page: P.liQ.GUILD_POWERUPS_MARKETING,
                        section: P.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: E,
                    guild: e,
                });
        }, [t, E]),
        G = r.useCallback(() => {
            p(), (0, ef.A)(t, eu.A.GUILD_POWERUPS_MARKETING, h.skuId);
        }, [t, h.skuId, p]),
        F = { tension: 400, friction: 30 },
        V = (0, er.z)({ scale: x ? 0.85 : 1, y: x ? -32 : 0, config: F }),
        B = (0, er.z)({ scale: x ? 0.7 : 1, y: x ? -35 : 0, config: F }),
        H = (0, er.z)({ y: x ? -32 : 0, config: F }),
        j = (0, er.z)({ opacity: +!!x, transform: x ? "translateY(0)" : "translateY(16px)", config: F }),
        Y = r.useCallback((e) => {
            e && O(!0);
        }, []),
        W = r.useCallback(() => {
            w(!0);
        }, []),
        K = r.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || w(!1);
        }, []),
        $ = (0, ei.K)(Y),
        z = h.skuId === em.W5;
    return (0, i.jsxs)("div", {
        className: A()(eI.Nr, { [eI.fM]: R }),
        onFocus: W,
        onBlur: K,
        onMouseEnter: () => D(!0),
        onMouseLeave: () => D(!1),
        children: [
            (0, i.jsx)("div", { className: eI.sL, ref: $ }),
            (0, i.jsx)("div", {
                className: eI.kQ,
                children: z
                    ? (0, i.jsx)(en.animated.div, {
                          className: eI.bm,
                          style: { transform: (0, en.to)([B.scale, B.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, i.jsx)(es.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: C,
                              fit: "contain",
                              className: eI.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, i.jsx)(en.animated.img, {
                          className: eI.bm,
                          src: x && null != _ && "" !== _ && !v ? _ : c,
                          alt: "",
                          style: { transform: (0, en.to)([V.scale, V.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, i.jsxs)(en.animated.div, {
                style: { ...H, transform: H.y.to((e) => `translateY(${e}px)`) },
                className: eI.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: eI.P_,
                        children: [
                            (0, i.jsx)(I.D, { className: eI.DD, variant: "heading-lg/semibold", children: a }),
                            (0, i.jsx)(y.E, { className: eI.h_, variant: "text-md/medium", children: o }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: eI.jp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eI.qS,
                                children: [
                                    (0, i.jsx)(T._, { size: "xs", color: S.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, i.jsx)(y.E, {
                                        className: eI.Vv,
                                        variant: "text-sm/semibold",
                                        children: k.intl.formatToPlainString(
                                            null != u ? eA.default["G/aTXi"] : eA.default.r9pa9K,
                                            { boostCount: l },
                                        ),
                                    }),
                                ],
                            }),
                            m &&
                                (0, i.jsxs)("div", {
                                    className: A()(eI.qS, eI.nt),
                                    children: [
                                        (0, i.jsx)(ea.y, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(y.E, {
                                            className: eI.nt,
                                            variant: "text-sm/semibold",
                                            children: k.intl.string(k.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(en.animated.div, {
                style: j,
                className: eI.NC,
                children: [
                    (0, i.jsx)("div", {
                        className: eI.x6,
                        children: (0, i.jsx)(N.$, {
                            variant: "primary",
                            text: k.intl.string(k.t.oPAx73),
                            onClick: U,
                            fullWidth: !0,
                        }),
                    }),
                    g &&
                        (0, i.jsx)("div", {
                            className: eI.x6,
                            children: (0, i.jsx)(N.$, {
                                variant: "secondary",
                                text: k.intl.string(k.t.GoCQxU),
                                onClick: G,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === f && (0, i.jsx)(eo.Lp, { className: eI.AP, text: k.intl.string(k.t.y2b7CA) }),
            "beta" === f &&
                (0, i.jsx)(eo.Lp, {
                    className: eI.AP,
                    text: k.intl.string(k.t.oW0eUd),
                    color: S.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eS(e) {
    let { guildId: t, powerup: n, costDecorator: r, badge: s, onClose: a } = e,
        o = (0, eh.Ay)(t, n).type;
    return (0, i.jsx)(eT, {
        guildId: t,
        activeStatus: o,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: r,
        badge: s,
        onClose: a,
    });
}
let ey = new Map([[em.W5, "+"]]),
    eN = r.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        r.useEffect(() => {
            p.A.shouldFetchCatalogForGuild(n.id) && (0, ec.AK)(n.id),
                p.A.shouldFetchPowerupsForGuild(n.id) && (0, ec.Xd)(n.id);
        }, [n.id]);
        let a = Array.from((0, e_.A)(n.id) ?? [])
            .reverse()
            .slice(0, 6);
        return 0 === a.length
            ? null
            : (0, i.jsxs)("div", {
                  ref: t,
                  className: eI.iE,
                  children: [
                      (0, i.jsxs)("div", {
                          className: eI.ND,
                          children: [
                              (0, i.jsx)(I.D, {
                                  className: eI.R_,
                                  variant: "heading-xxl/semibold",
                                  children: k.intl.string(Z.default.wjI18Q),
                              }),
                              (0, i.jsx)(y.E, {
                                  className: eI.fV,
                                  variant: "text-md/medium",
                                  children: k.intl.format(Z.default.S562fn, {
                                      helpDeskArticle: eE.A.getArticleURL(P.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: eI.vY,
                          children: a.map((e) =>
                              (0, i.jsx)(
                                  eS,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: ey.get(e.skuId),
                                      badge: eg.ys[e.skuId],
                                      onClose: s,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eN.displayName = "GuildBoostingMarketingPerkCards";
var ev = n(527113),
    eC = n(862482),
    eR = n(944304),
    eO = n(672350);
let eb = function (e) {
    let { closeLayer: t, guild: n, isVisible: s } = e,
        a = r.useRef(null),
        l = (0, er.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(en.animated.div, {
        className: eO.iE,
        style: l,
        children: (0, i.jsx)("div", {
            ref: a,
            className: eO.iJ,
            children: (0, i.jsxs)(o.xp, {
                containerRef: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: eO.OA,
                        children: [
                            (0, i.jsx)(C.Ay, { className: eO.$f, guild: n, size: C.Ay.Sizes.SMALL }),
                            (0, i.jsx)(y.E, { className: eO.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)(eR.A, {
                        className: eO.lI,
                        guild: n,
                        analyticsLocation: {
                            page: P.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: P.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: P.ZSU.BUTTON_CTA,
                            objectType: P.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !s,
                        size: eC.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eD = n(192308),
    eL = n(65154),
    ew = n(387772),
    eM = n(519636);
function eP(e) {
    let { guild: t, analyticsLocation: s, videoPlacement: a, sourceAnalyticsLocations: o } = e,
        u = r.useCallback(() => {
            (0, eD.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("6836"), n.e("85810")]).then(n.bind(n, 872233));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: s,
                        videoPlacement: a,
                        sourceAnalyticsLocations: o,
                    });
            });
        }, [s, t.id, o, a]);
    return (0, i.jsxs)(l.D, {
        className: ew.kL,
        onClick: u,
        "aria-label": k.intl.string(Z.default["103aY+"]),
        children: [
            (0, i.jsx)("img", { alt: "", className: ew.xn, src: eM.A }),
            (0, i.jsx)("div", { className: ew.Lw }),
            (0, i.jsx)("div", {
                className: ew.Rr,
                children: (0, i.jsx)(eL.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function ex(e) {
    let { analyticsLocation: t, guild: n, onClose: g, scrollToPowerupCards: A } = e,
        [I, T] = r.useState(!0),
        S = r.useRef(!1),
        { analyticsLocations: y } = (0, d.Ay)(),
        N = r.useRef(null),
        v = r.useRef(null),
        C = r.useRef(null),
        R = r.useRef(null),
        O = r.useCallback(() => {
            g?.();
        }, [g]),
        b = r.useCallback(() => {
            null != C.current &&
                null != v.current &&
                v.current.scrollIntoViewNode({ node: C.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        D = r.useCallback(
            (e) => {
                e &&
                    !S.current &&
                    (E.default.track(P.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: P.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: y,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (S.current = !0));
            },
            [t, y, n.id],
        );
    r.useEffect(() => {
        E.default.track(P.HAw.OPEN_MODAL, {
            type: P.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: y,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, y]);
    let L = (0, h.C$)(n.id, "GuildBoostingMarketingRefresh"),
        w = (0, s.bG)([f.A], () => f.A.shouldFetchCatalogForGuild(n.id));
    r.useEffect(() => {
        L && w && (0, _.z9)(n.id);
    }, [n.id, L, w]);
    let M = (0, s.bG)([p.A], () => p.A.hasFetchedPowerupCatalog(n.id));
    return (
        r.useEffect(() => {
            if (A && M) {
                let e = setTimeout(() => {
                    b();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [A, b, M]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != g &&
                    (0, i.jsx)("div", {
                        ref: R,
                        className: Y.Yk,
                        children: (0, i.jsx)(o.xp, {
                            containerRef: R,
                            children: (0, i.jsx)(l.D, {
                                className: Y.b,
                                onClick: O,
                                "aria-label": k.intl.string(k.t.cpT0Cq),
                                children: (0, i.jsx)(u.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, i.jsxs)(c.Gt, {
                    ref: v,
                    className: Y.XG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: Y.wx,
                            children: [
                                (0, i.jsx)(W, { className: Y.y2 }),
                                (0, i.jsxs)("div", {
                                    className: Y.AZ,
                                    children: [
                                        (0, i.jsx)(G, {
                                            guild: n,
                                            closeLayer: O,
                                            onCtaVisibilityChange: T,
                                            className: Y.Oh,
                                        }),
                                        (0, i.jsx)(eP, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: y,
                                        }),
                                        (0, i.jsx)(et, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: Y.uE,
                            children: (0, i.jsx)(eN, { ref: C, guild: e.guild, onClose: O }),
                        }),
                        (0, i.jsx)("div", {
                            className: Y.o6,
                            children: (0, i.jsxs)("div", {
                                className: Y.y$,
                                children: [
                                    (0, i.jsx)(ev.A, { className: Y.Q, guild: n }),
                                    (0, i.jsx)(m.A, {}),
                                    (0, i.jsx)(F.A, {}),
                                ],
                            }),
                        }),
                        (0, i.jsx)(a.L, {
                            innerRef: N,
                            onChange: D,
                            children: (0, i.jsx)("div", { ref: N, className: Y.mR }),
                        }),
                    ],
                }),
                (0, i.jsx)(eb, { guild: n, isVisible: !I, closeLayer: O }),
            ],
        })
    );
}
