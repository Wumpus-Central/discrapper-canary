i.d(t, { A: () => ek });
var s = i(627968),
    l = i(64700),
    a = i(17928),
    n = i(230109),
    r = i(939249),
    c = i(789645),
    o = i(689175),
    d = i(688810),
    u = i(665171),
    m = i(488803),
    T = i(522055),
    g = i(645619),
    x = i(954571),
    f = i(917064),
    A = i(503698),
    h = i.n(A),
    j = i(534514),
    p = i(104510),
    N = i(661531),
    E = i(834730),
    b = i(821609),
    I = i(597770),
    v = i(548118),
    _ = i(532794),
    R = i(864310),
    V = i(338548),
    S = i(287809),
    P = i(178368),
    y = i(927578),
    C = i(987144),
    U = i(652215),
    L = i(788868),
    k = i(985018),
    G = i(474236);
let M = function (e) {
    let { className: t, closeLayer: i, guild: r, onCtaVisibilityChange: c } = e,
        o = l.useRef(null),
        u = (0, a.bG)([S.default], () => S.default.getCurrentUser()),
        m = (0, a.bG)([P.A], () => P.A.boostSlots),
        T = u?.isPremiumGroupMember(),
        { analyticsLocations: g } = (0, d.Ay)(),
        [x, f] = l.useState(!1),
        A = l.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === r.id;
                }).length,
            [m, r.id],
        ),
        M = (0, R.A)(e.guild.id).total;
    async function O() {
        f(!0),
            await (0, C.g)({
                analyticsLocations: g,
                analyticsLocation: {
                    page: U.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: U.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: U.ZSU.BUTTON_CTA,
                    objectType: U.AnalyticsObjectTypes.BUY,
                },
                guild: r,
                closeLayer: i,
            }),
            f(!1);
    }
    return (0, s.jsxs)("div", {
        className: h()(G.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: G.$R,
                children: [
                    (0, s.jsx)(v.Ay, { className: G.$f, guild: r, size: v.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: G.CR,
                        children: [
                            (0, s.jsx)(j.D, { className: G.J5, variant: "heading-lg/semibold", children: r.name }),
                            (0, s.jsxs)("div", {
                                className: G.SJ,
                                children: [
                                    (0, s.jsx)(p._, {
                                        color:
                                            M > 0 ? N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: h()(G.Me, { [G.S3]: M > 0 }),
                                    }),
                                    (0, s.jsx)(E.E, {
                                        className: G.n,
                                        variant: "text-md/semibold",
                                        children: k.intl.format(k.t["pob/cL"], { subscriptions: M }),
                                    }),
                                ],
                            }),
                            A > 0
                                ? (0, s.jsx)(E.E, {
                                      className: G.EV,
                                      variant: "text-sm/normal",
                                      children: k.intl.format(k.t.Jeto2u, { numSubscriptions: A }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: G.mY,
                children: [
                    (0, s.jsx)("h1", { className: G.R_, children: k.intl.string(k.t.N4sqzL) }),
                    T ? (0, s.jsx)(V.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: G.Sq,
                        children: [
                            (0, s.jsx)(n.L, {
                                innerRef: o,
                                onChange: c,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: o,
                                    className: G.dp,
                                    children: (0, s.jsx)(b.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: p._,
                                        text: k.intl.string(k.t.gKmQ1G),
                                        onClick: O,
                                        loading: x,
                                        disabled: T,
                                    }),
                                }),
                            }),
                            y.Ay.hasFreeBoosts(u) || y.Ay.isPremium(u, L.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(b.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: I.o,
                                      text: k.intl.string(k.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, _.A)({
                                              initialPlanId: null,
                                              subscriptionTier: L.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: g,
                                              analyticsObject: {
                                                  page: U.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: U.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: U.ZSU.BUTTON_ICON,
                                                  objectType: U.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(b.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: k.intl.string(k.t.Q43TvC),
                                      onClick: function () {
                                          (0, _.A)({
                                              initialPlanId: null,
                                              subscriptionTier: L.pe.TIER_2,
                                              analyticsLocations: g,
                                              analyticsObject: {
                                                  page: U.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: U.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: U.ZSU.BUTTON_ICON,
                                                  objectType: U.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                      disabled: T,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var O = i(232122),
    D = i(366010),
    w = i(736653),
    z = i(303136),
    Q = i(676279),
    F = i(215895);
function B(e) {
    let { className: t } = e,
        i = (0, w.Ay)(),
        l = (0, D.q)(i),
        a = (0, Q.TM)()
            ? l
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : l
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)("div", { className: F.YL }),
            (0, s.jsx)(
                z.A,
                {
                    fallbackImage: l
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, s.jsx)("source", { src: a }),
                },
                a,
            ),
        ],
    });
}
var J = i(64051),
    K = i(972919),
    Y = i(724677),
    $ = i(210273),
    Z = i(508155),
    W = i(853513),
    H = i(111674);
function q(e) {
    let { tier: t, isActive: i } = e,
        l = t === U.TVA.TIER_1,
        a = t === U.TVA.TIER_3,
        n = t === U.TVA.TIER_1 ? J.v : t === U.TVA.TIER_2 ? K.w : Y.H;
    return (0, s.jsxs)("div", {
        className: H.MY,
        children: [
            (0, s.jsx)("div", { className: h()(H.hr, { [H.ti]: i, [H.YO]: !i, [H.JQ]: l, [H.Uz]: a }) }),
            (0, s.jsx)("div", {
                className: h()(H.Zj, {
                    [H.jv]: i,
                    [H.ip]: t === U.TVA.TIER_1,
                    [H.p3]: t === U.TVA.TIER_2,
                    [H.wF]: t === U.TVA.TIER_3,
                }),
                children: (0, s.jsx)(n, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function X(e) {
    let { guild: t, definition: i } = e,
        { tier: l, perks: a } = i,
        n = t.premiumTier >= l,
        r = U.M2T[l];
    return (0, s.jsxs)("div", {
        className: h()(H.Nr, { [H.Bm]: n, [H.c]: !n }),
        children: [
            (0, s.jsx)(q, { tier: l, isActive: n }),
            (0, s.jsxs)("div", {
                className: H.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: H.$h,
                        children: [
                            (0, s.jsx)(j.D, {
                                className: h()(H.JJ, { [H.eX]: !n }),
                                variant: "heading-xl/semibold",
                                color: n ? "text-strong" : void 0,
                                children: k.intl.string(
                                    l === U.TVA.TIER_1 ? k.t.nzXtaS : l === U.TVA.TIER_2 ? k.t["h33/uW"] : k.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: H.yC,
                                children: [
                                    (0, s.jsx)(p._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(E.E, {
                                        variant: "text-md/medium",
                                        children: k.intl.format(k.t["pob/cL"], { subscriptions: r }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: H.PJ,
                        children: [
                            a.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, $.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: h()(H.bK, { [H.o]: !n }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: H.kf,
                                                color: n ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, s.jsx)(E.E, {
                                                variant: "text-md/medium",
                                                color: n ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, s.jsx)(E.E, {
                                className: H.wx,
                                variant: "text-md/medium",
                                children: k.intl.string(W.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: h()(H.iE, i),
        children: Z.t.map((e) => (0, s.jsx)(X, { guild: t, definition: e }, e.tier)),
    });
}
var et = i(123924),
    ei = i(172218),
    es = i(717421),
    el = i(289704),
    ea = i(628284),
    en = i(777666),
    er = i(775602),
    ec = i(793574),
    eo = i(942975),
    ed = i(363487),
    eu = i(73381),
    em = i(998418),
    eT = i(828162),
    eg = i(71393),
    ex = i(975571),
    ef = i(800007),
    eA = i(568065),
    eh = i(576709),
    ej = i(262880);
function ep(e) {
    let {
            guildId: t,
            activeStatus: i,
            title: n,
            description: r,
            cost: c,
            costDecorator: o,
            staticImageUrl: u,
            animatedImageUrl: m,
            powerup: T,
            badge: g,
            onClose: x,
        } = e,
        { analyticsLocations: f } = (0, d.Ay)(),
        A = i !== eA.b_.INACTIVE,
        I = (0, ed.A)(t),
        v = (0, a.bG)([er.A], () => er.A.useReducedMotion),
        _ = l.useRef(null),
        [R, V] = l.useState(!1),
        [S, P] = l.useState(!1),
        [y, L] = l.useState(!1),
        G = S || y,
        M = l.useCallback(() => {
            let e = eg.A.getGuild(t);
            null != e &&
                (0, C.g)({
                    analyticsLocation: {
                        page: U.liQ.GUILD_POWERUPS_MARKETING,
                        section: U.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: f,
                    guild: e,
                });
        }, [t, f]),
        O = l.useCallback(() => {
            x(), (0, eT.A)(t, ec.A.GUILD_POWERUPS_MARKETING, T.skuId);
        }, [t, T.skuId, x]),
        D = { tension: 400, friction: 30 },
        w = (0, es.z)({ scale: G ? 0.85 : 1, y: G ? -32 : 0, config: D }),
        z = (0, es.z)({ scale: G ? 0.7 : 1, y: G ? -35 : 0, config: D }),
        Q = (0, es.z)({ y: G ? -32 : 0, config: D }),
        F = (0, es.z)({ opacity: +!!G, transform: G ? "translateY(0)" : "translateY(16px)", config: D }),
        B = l.useCallback((e) => {
            e && V(!0);
        }, []),
        J = l.useCallback(() => {
            L(!0);
        }, []),
        K = l.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || L(!1);
        }, []),
        Y = (0, ei.K)(B),
        $ = T.skuId === ef.W5;
    return (0, s.jsxs)("div", {
        className: h()(ej.Nr, { [ej.fM]: R }),
        onFocus: J,
        onBlur: K,
        onMouseEnter: () => P(!0),
        onMouseLeave: () => P(!1),
        children: [
            (0, s.jsx)("div", { className: ej.sL, ref: Y }),
            (0, s.jsx)("div", {
                className: ej.kQ,
                children: $
                    ? (0, s.jsx)(et.animated.div, {
                          className: ej.bm,
                          style: { transform: (0, et.to)([z.scale, z.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(el.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: _,
                              fit: "contain",
                              className: ej.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(et.animated.img, {
                          className: ej.bm,
                          src: G && null != m && "" !== m && !v ? m : u,
                          alt: "",
                          style: { transform: (0, et.to)([w.scale, w.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(et.animated.div, {
                style: { ...Q, transform: Q.y.to((e) => `translateY(${e}px)`) },
                className: ej.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: ej.P_,
                        children: [
                            (0, s.jsx)(j.D, { className: ej.DD, variant: "heading-lg/semibold", children: n }),
                            (0, s.jsx)(E.E, { className: ej.h_, variant: "text-md/medium", children: r }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: ej.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: ej.qS,
                                children: [
                                    (0, s.jsx)(p._, { size: "xs", color: N.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, s.jsx)(E.E, {
                                        className: ej.Vv,
                                        variant: "text-sm/semibold",
                                        children: k.intl.formatToPlainString(
                                            null != o ? eh.default["G/aTXi"] : eh.default.r9pa9K,
                                            { boostCount: c },
                                        ),
                                    }),
                                ],
                            }),
                            A &&
                                (0, s.jsxs)("div", {
                                    className: h()(ej.qS, ej.nt),
                                    children: [
                                        (0, s.jsx)(ea.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(E.E, {
                                            className: ej.nt,
                                            variant: "text-sm/semibold",
                                            children: k.intl.string(k.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(et.animated.div, {
                style: F,
                className: ej.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: ej.x6,
                        children: (0, s.jsx)(b.$, {
                            variant: "primary",
                            text: k.intl.string(k.t.oPAx73),
                            onClick: M,
                            fullWidth: !0,
                        }),
                    }),
                    I &&
                        (0, s.jsx)("div", {
                            className: ej.x6,
                            children: (0, s.jsx)(b.$, {
                                variant: "secondary",
                                text: k.intl.string(k.t.GoCQxU),
                                onClick: O,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === g && (0, s.jsx)(en.Lp, { className: ej.AP, text: k.intl.string(k.t.y2b7CA) }),
            "beta" === g &&
                (0, s.jsx)(en.Lp, {
                    className: ej.AP,
                    text: k.intl.string(k.t.oW0eUd),
                    color: N.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eN(e) {
    let { guildId: t, powerup: i, costDecorator: l, badge: a, onClose: n } = e,
        r = (0, em.Ay)(t, i).type;
    return (0, s.jsx)(ep, {
        guildId: t,
        activeStatus: r,
        title: i.title,
        description: i.description,
        cost: i.cost,
        staticImageUrl: i.staticImageUrl,
        animatedImageUrl: i.animatedImageUrl,
        powerup: i,
        costDecorator: l,
        badge: a,
        onClose: n,
    });
}
let eE = new Map([[ef.W5, "+"]]),
    eb = l.forwardRef((e, t) => {
        let { guild: i, onClose: a } = e;
        l.useEffect(() => {
            g.A.shouldFetchCatalogForGuild(i.id) && (0, eo.AK)(i.id),
                g.A.shouldFetchPowerupsForGuild(i.id) && (0, eo.Xd)(i.id);
        }, [i.id]);
        let n = Array.from((0, eu.A)(i.id) ?? [])
            .reverse()
            .slice(0, 6);
        return 0 === n.length
            ? null
            : (0, s.jsxs)("div", {
                  ref: t,
                  className: ej.iE,
                  children: [
                      (0, s.jsxs)("div", {
                          className: ej.ND,
                          children: [
                              (0, s.jsx)(j.D, {
                                  className: ej.R_,
                                  variant: "heading-xxl/semibold",
                                  children: k.intl.string(W.default.wjI18Q),
                              }),
                              (0, s.jsx)(E.E, {
                                  className: ej.fV,
                                  variant: "text-md/medium",
                                  children: k.intl.format(W.default.S562fn, {
                                      helpDeskArticle: ex.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          className: ej.vY,
                          children: n.map((e) =>
                              (0, s.jsx)(
                                  eN,
                                  {
                                      guildId: i.id,
                                      powerup: e,
                                      costDecorator: eE.get(e.skuId),
                                      badge: eA.ys[e.skuId],
                                      onClose: a,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eb.displayName = "GuildBoostingMarketingPerkCards";
var eI = i(527113),
    ev = i(862482),
    e_ = i(187322),
    eR = i(721923),
    eV = i(672350);
let eS = function (e) {
    let { closeLayer: t, guild: i, isVisible: a } = e,
        n = l.useRef(null),
        r = (0, es.z)({
            transform: a ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(et.animated.div, {
        className: eV.iE,
        style: r,
        children: (0, s.jsx)("div", {
            ref: n,
            className: eV.iJ,
            children: (0, s.jsxs)(e_.xp, {
                containerRef: n,
                children: [
                    (0, s.jsxs)("div", {
                        className: eV.OA,
                        children: [
                            (0, s.jsx)(v.Ay, { className: eV.$f, guild: i, size: v.Ay.Sizes.SMALL }),
                            (0, s.jsx)(E.E, { className: eV.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eR.A, {
                        className: eV.lI,
                        guild: i,
                        analyticsLocation: {
                            page: U.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: U.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: U.ZSU.BUTTON_CTA,
                            objectType: U.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !a,
                        size: ev.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eP = i(192308),
    ey = i(65154),
    eC = i(387772),
    eU = i(519636);
function eL(e) {
    let { guild: t, analyticsLocation: a, videoPlacement: n, sourceAnalyticsLocations: c } = e,
        o = l.useCallback(() => {
            (0, eP.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("6836"), i.e("85810")]).then(i.bind(i, 872233));
                return (i) =>
                    (0, s.jsx)(e, {
                        ...i,
                        guildId: t.id,
                        analyticsLocation: a,
                        videoPlacement: n,
                        sourceAnalyticsLocations: c,
                    });
            });
        }, [a, t.id, c, n]);
    return (0, s.jsxs)(r.D, {
        className: eC.kL,
        onClick: o,
        "aria-label": k.intl.string(W.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: eC.xn, src: eU.A }),
            (0, s.jsx)("div", { className: eC.Lw }),
            (0, s.jsx)("div", {
                className: eC.Rr,
                children: (0, s.jsx)(ey.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function ek(e) {
    let { analyticsLocation: t, guild: i, onClose: A, scrollToPowerupCards: h } = e,
        [j, p] = l.useState(!0),
        N = l.useRef(!1),
        { analyticsLocations: E } = (0, d.Ay)(),
        b = l.useRef(null),
        I = l.useRef(null),
        v = l.useRef(null),
        _ = l.useCallback(() => {
            A?.();
        }, [A]),
        R = l.useCallback(() => {
            null != v.current &&
                null != I.current &&
                I.current.scrollIntoViewNode({ node: v.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        V = l.useCallback(
            (e) => {
                e &&
                    !N.current &&
                    (x.default.track(U.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: U.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: E,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: i.id,
                    }),
                    (N.current = !0));
            },
            [t, E, i.id],
        );
    l.useEffect(() => {
        x.default.track(U.HAw.OPEN_MODAL, {
            type: U.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: E,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, E]);
    let S = (0, m.C$)(i.id, "GuildBoostingMarketingRefresh"),
        P = (0, a.bG)([T.A], () => T.A.shouldFetchCatalogForGuild(i.id));
    l.useEffect(() => {
        S && P && (0, u.z9)(i.id);
    }, [i.id, S, P]);
    let y = (0, a.bG)([g.A], () => g.A.hasFetchedPowerupCatalog(i.id));
    return (
        l.useEffect(() => {
            if (h && y) {
                let e = setTimeout(() => {
                    R();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [h, R, y]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                null != A &&
                    (0, s.jsx)("div", {
                        className: F.Yk,
                        children: (0, s.jsx)(r.D, {
                            className: F.b,
                            onClick: _,
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            children: (0, s.jsx)(c.P, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, s.jsxs)(o.Gt, {
                    ref: I,
                    className: F.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: F.wx,
                            children: [
                                (0, s.jsx)(B, { className: F.y2 }),
                                (0, s.jsxs)("div", {
                                    className: F.AZ,
                                    children: [
                                        (0, s.jsx)(M, {
                                            guild: i,
                                            closeLayer: _,
                                            onCtaVisibilityChange: p,
                                            className: F.Oh,
                                        }),
                                        (0, s.jsx)(eL, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: E,
                                        }),
                                        (0, s.jsx)(ee, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: F.uE,
                            children: (0, s.jsx)(eb, { ref: v, guild: e.guild, onClose: _ }),
                        }),
                        (0, s.jsx)("div", {
                            className: F.o6,
                            children: (0, s.jsxs)("div", {
                                className: F.y$,
                                children: [
                                    (0, s.jsx)(eI.A, { className: F.Q, guild: i }),
                                    (0, s.jsx)(f.A, {}),
                                    (0, s.jsx)(O.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(n.L, {
                            innerRef: b,
                            onChange: V,
                            children: (0, s.jsx)("div", { ref: b, className: F.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(eS, { guild: i, isVisible: !j, closeLayer: _ }),
            ],
        })
    );
}
