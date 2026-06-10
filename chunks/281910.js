"use strict";
n.d(t, { A: () => ex });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(269115),
    o = n(939249),
    l = n(789645),
    u = n(689175),
    c = n(688810),
    d = n(396748),
    _ = n(488803),
    h = n(522055),
    f = n(645619),
    p = n(174459),
    E = n(917064),
    m = n(503698),
    g = n.n(m),
    A = n(534514),
    I = n(104510),
    T = n(661531),
    S = n(834730),
    y = n(821609),
    N = n(597770),
    v = n(548118),
    C = n(532794),
    R = n(864310),
    O = n(338548),
    b = n(287809),
    D = n(178368),
    L = n(428262),
    w = n(987144),
    M = n(652215),
    P = n(788868),
    x = n(375708),
    k = n(474236);
let U = function (e) {
    let { className: t, closeLayer: n, guild: o, onCtaVisibilityChange: l } = e,
        u = r.useRef(null),
        d = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        _ = (0, s.bG)([D.A], () => D.A.boostSlots),
        h = d?.isPremiumGroupMember(),
        { analyticsLocations: f } = (0, c.Ay)(),
        [p, E] = r.useState(!1),
        m = r.useMemo(
            () =>
                Object.keys(_).filter((e) => {
                    let t = _[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === o.id;
                }).length,
            [_, o.id],
        ),
        U = (0, R.A)(e.guild.id).total;
    async function G() {
        E(!0),
            await (0, w.g)({
                analyticsLocations: f,
                analyticsLocation: {
                    page: M.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: M.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: M.ZSU.BUTTON_CTA,
                    objectType: M.AnalyticsObjectTypes.BUY,
                },
                guild: o,
                closeLayer: n,
            }),
            E(!1);
    }
    return (0, i.jsxs)("div", {
        className: g()(k.kL, t),
        children: [
            (0, i.jsxs)("div", {
                className: k.$R,
                children: [
                    (0, i.jsx)(v.Ay, { className: k.$f, guild: o, size: v.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, i.jsxs)("div", {
                        className: k.CR,
                        children: [
                            (0, i.jsx)(A.D, { className: k.J5, variant: "heading-lg/semibold", children: o.name }),
                            (0, i.jsxs)("div", {
                                className: k.SJ,
                                children: [
                                    (0, i.jsx)(I._, {
                                        color:
                                            U > 0 ? T.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: g()(k.Me, { [k.S3]: U > 0 }),
                                    }),
                                    (0, i.jsx)(S.E, {
                                        className: k.n,
                                        variant: "text-md/semibold",
                                        children: x.intl.format(x.t["pob/cL"], { subscriptions: U }),
                                    }),
                                ],
                            }),
                            m > 0
                                ? (0, i.jsx)(S.E, {
                                      className: k.EV,
                                      variant: "text-sm/normal",
                                      children: x.intl.format(x.t.Jeto2u, { numSubscriptions: m }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: k.mY,
                children: [
                    (0, i.jsx)("h1", { className: k.R_, children: x.intl.string(x.t.N4sqzL) }),
                    h ? (0, i.jsx)(O.A, { alwaysWhite: !0 }) : null,
                    (0, i.jsxs)("div", {
                        className: k.Sq,
                        children: [
                            (0, i.jsx)(a.L, {
                                innerRef: u,
                                onChange: l,
                                threshold: 0.9,
                                children: (0, i.jsx)("div", {
                                    ref: u,
                                    className: k.dp,
                                    children: (0, i.jsx)(y.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: I._,
                                        text: x.intl.string(x.t.gKmQ1G),
                                        onClick: G,
                                        loading: p,
                                        disabled: h,
                                    }),
                                }),
                            }),
                            L.Ay.hasFreeBoosts(d) || L.Ay.isPremium(d, P.PremiumTypes.TIER_2)
                                ? (0, i.jsx)(y.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: N.o,
                                      text: x.intl.string(x.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, C.A)({
                                              initialPlanId: null,
                                              subscriptionTier: P.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: f,
                                              analyticsObject: {
                                                  page: M.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: M.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: M.ZSU.BUTTON_ICON,
                                                  objectType: M.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, i.jsx)(y.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: x.intl.string(x.t.Q43TvC),
                                      onClick: function () {
                                          (0, C.A)({
                                              initialPlanId: null,
                                              subscriptionTier: P.pe.TIER_2,
                                              analyticsLocations: f,
                                              analyticsObject: {
                                                  page: M.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: M.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: M.ZSU.BUTTON_ICON,
                                                  objectType: M.AnalyticsObjectTypes.BUY,
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
var G = n(232122),
    F = n(366010),
    V = n(736653),
    B = n(303136),
    H = n(676279),
    j = n(215895);
function Y(e) {
    let { className: t } = e,
        n = (0, V.Ay)(),
        r = (0, F.q)(n),
        s = (0, H.TM)()
            ? r
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : r
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: j.YL }),
            (0, i.jsx)(
                B.A,
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
var W = n(64051),
    K = n(972919),
    $ = n(724677),
    z = n(210273),
    q = n(508155),
    X = n(853513),
    Z = n(111674);
function Q(e) {
    let { tier: t, isActive: n } = e,
        r = t === M.TVA.TIER_1,
        s = t === M.TVA.TIER_3,
        a = t === M.TVA.TIER_1 ? W.v : t === M.TVA.TIER_2 ? K.w : $.H;
    return (0, i.jsxs)("div", {
        className: Z.MY,
        children: [
            (0, i.jsx)("div", { className: g()(Z.hr, { [Z.ti]: n, [Z.YO]: !n, [Z.JQ]: r, [Z.Uz]: s }) }),
            (0, i.jsx)("div", {
                className: g()(Z.Zj, {
                    [Z.jv]: n,
                    [Z.ip]: t === M.TVA.TIER_1,
                    [Z.p3]: t === M.TVA.TIER_2,
                    [Z.wF]: t === M.TVA.TIER_3,
                }),
                children: (0, i.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function J(e) {
    let { guild: t, definition: n } = e,
        { tier: r, perks: s } = n,
        a = t.premiumTier >= r,
        o = M.M2T[r];
    return (0, i.jsxs)("div", {
        className: g()(Z.Nr, { [Z.Bm]: a, [Z.c]: !a }),
        children: [
            (0, i.jsx)(Q, { tier: r, isActive: a }),
            (0, i.jsxs)("div", {
                className: Z.zI,
                children: [
                    (0, i.jsxs)("div", {
                        className: Z.$h,
                        children: [
                            (0, i.jsx)(A.D, {
                                className: g()(Z.JJ, { [Z.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: x.intl.string(
                                    r === M.TVA.TIER_1 ? x.t.nzXtaS : r === M.TVA.TIER_2 ? x.t["h33/uW"] : x.t.BfF6ED,
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                className: Z.yC,
                                children: [
                                    (0, i.jsx)(I._, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(S.E, {
                                        variant: "text-md/medium",
                                        children: x.intl.format(x.t["pob/cL"], { subscriptions: o }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: Z.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, z.X)(e.perkIcon);
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: g()(Z.bK, { [Z.o]: !a }),
                                        children: [
                                            (0, i.jsx)(n, {
                                                className: Z.kf,
                                                color: a ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, i.jsx)(S.E, {
                                                variant: "text-md/medium",
                                                color: a ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, i.jsx)(S.E, {
                                className: Z.wx,
                                variant: "text-md/medium",
                                children: x.intl.string(X.default.nIj3LZ),
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
        className: g()(Z.iE, n),
        children: q.t.map((e) => (0, i.jsx)(J, { guild: t, definition: e }, e.tier)),
    });
}
var et = n(922139),
    en = n(172218),
    ei = n(717421),
    er = n(289704),
    es = n(628284),
    ea = n(812993),
    eo = n(775602),
    el = n(793574),
    eu = n(868652),
    ec = n(363487),
    ed = n(73381),
    e_ = n(998418),
    eh = n(828162),
    ef = n(71393),
    ep = n(975571),
    eE = n(800007),
    em = n(568065),
    eg = n(576709),
    eA = n(262880);
function eI(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: o,
            cost: l,
            costDecorator: u,
            staticImageUrl: d,
            animatedImageUrl: _,
            powerup: h,
            badge: f,
            onClose: p,
        } = e,
        { analyticsLocations: E } = (0, c.Ay)(),
        m = n !== em.b_.INACTIVE,
        N = (0, ec.A)(t),
        v = (0, s.bG)([eo.A], () => eo.A.useReducedMotion),
        C = r.useRef(null),
        [R, O] = r.useState(!1),
        [b, D] = r.useState(!1),
        [L, P] = r.useState(!1),
        k = b || L,
        U = r.useCallback(() => {
            let e = ef.A.getGuild(t);
            null != e &&
                (0, w.g)({
                    analyticsLocation: {
                        page: M.liQ.GUILD_POWERUPS_MARKETING,
                        section: M.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: E,
                    guild: e,
                });
        }, [t, E]),
        G = r.useCallback(() => {
            p(), (0, eh.A)(t, el.A.GUILD_POWERUPS_MARKETING, h.skuId);
        }, [t, h.skuId, p]),
        F = { tension: 400, friction: 30 },
        V = (0, ei.z)({ scale: k ? 0.85 : 1, y: k ? -32 : 0, config: F }),
        B = (0, ei.z)({ scale: k ? 0.7 : 1, y: k ? -35 : 0, config: F }),
        H = (0, ei.z)({ y: k ? -32 : 0, config: F }),
        j = (0, ei.z)({ opacity: +!!k, transform: k ? "translateY(0)" : "translateY(16px)", config: F }),
        Y = r.useCallback((e) => {
            e && O(!0);
        }, []),
        W = r.useCallback(() => {
            P(!0);
        }, []),
        K = r.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || P(!1);
        }, []),
        $ = (0, en.K)(Y),
        z = h.skuId === eE.W5;
    return (0, i.jsxs)("div", {
        className: g()(eA.Nr, { [eA.fM]: R }),
        onFocus: W,
        onBlur: K,
        onMouseEnter: () => D(!0),
        onMouseLeave: () => D(!1),
        children: [
            (0, i.jsx)("div", { className: eA.sL, ref: $ }),
            (0, i.jsx)("div", {
                className: eA.kQ,
                children: z
                    ? (0, i.jsx)(et.animated.div, {
                          className: eA.bm,
                          style: { transform: (0, et.to)([B.scale, B.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, i.jsx)(er.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: C,
                              fit: "contain",
                              className: eA.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, i.jsx)(et.animated.img, {
                          className: eA.bm,
                          src: k && null != _ && "" !== _ && !v ? _ : d,
                          alt: "",
                          style: { transform: (0, et.to)([V.scale, V.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, i.jsxs)(et.animated.div, {
                style: { ...H, transform: H.y.to((e) => `translateY(${e}px)`) },
                className: eA.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: eA.P_,
                        children: [
                            (0, i.jsx)(A.D, { className: eA.DD, variant: "heading-lg/semibold", children: a }),
                            (0, i.jsx)(S.E, { className: eA.h_, variant: "text-md/medium", children: o }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: eA.jp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eA.qS,
                                children: [
                                    (0, i.jsx)(I._, { size: "xs", color: T.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, i.jsx)(S.E, {
                                        className: eA.Vv,
                                        variant: "text-sm/semibold",
                                        children: x.intl.formatToPlainString(
                                            null != u ? eg.default["G/aTXi"] : eg.default.r9pa9K,
                                            { boostCount: l },
                                        ),
                                    }),
                                ],
                            }),
                            m &&
                                (0, i.jsxs)("div", {
                                    className: g()(eA.qS, eA.nt),
                                    children: [
                                        (0, i.jsx)(es.y, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(S.E, {
                                            className: eA.nt,
                                            variant: "text-sm/semibold",
                                            children: x.intl.string(x.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(et.animated.div, {
                style: j,
                className: eA.NC,
                children: [
                    (0, i.jsx)("div", {
                        className: eA.x6,
                        children: (0, i.jsx)(y.$, {
                            variant: "primary",
                            text: x.intl.string(x.t.oPAx73),
                            onClick: U,
                            fullWidth: !0,
                        }),
                    }),
                    N &&
                        (0, i.jsx)("div", {
                            className: eA.x6,
                            children: (0, i.jsx)(y.$, {
                                variant: "secondary",
                                text: x.intl.string(x.t.GoCQxU),
                                onClick: G,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === f && (0, i.jsx)(ea.Lp, { className: eA.AP, text: x.intl.string(x.t.y2b7CA) }),
            "beta" === f &&
                (0, i.jsx)(ea.Lp, {
                    className: eA.AP,
                    text: x.intl.string(x.t.oW0eUd),
                    color: T.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eT(e) {
    let { guildId: t, powerup: n, costDecorator: r, badge: s, onClose: a } = e,
        o = (0, e_.Ay)(t, n).type;
    return (0, i.jsx)(eI, {
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
let eS = new Map([[eE.W5, "+"]]),
    ey = r.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        r.useEffect(() => {
            f.A.shouldFetchCatalogForGuild(n.id) && (0, eu.AK)(n.id),
                f.A.shouldFetchPowerupsForGuild(n.id) && (0, eu.Xd)(n.id);
        }, [n.id]);
        let a = Array.from((0, ed.A)(n.id) ?? [])
            .reverse()
            .slice(0, 6);
        return 0 === a.length
            ? null
            : (0, i.jsxs)("div", {
                  ref: t,
                  className: eA.iE,
                  children: [
                      (0, i.jsxs)("div", {
                          className: eA.ND,
                          children: [
                              (0, i.jsx)(A.D, {
                                  className: eA.R_,
                                  variant: "heading-xxl/semibold",
                                  children: x.intl.string(X.default.wjI18Q),
                              }),
                              (0, i.jsx)(S.E, {
                                  className: eA.fV,
                                  variant: "text-md/medium",
                                  children: x.intl.format(X.default.S562fn, {
                                      helpDeskArticle: ep.A.getArticleURL(M.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: eA.vY,
                          children: a.map((e) =>
                              (0, i.jsx)(
                                  eT,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: eS.get(e.skuId),
                                      badge: em.ys[e.skuId],
                                      onClose: s,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
ey.displayName = "GuildBoostingMarketingPerkCards";
var eN = n(527113),
    ev = n(862482),
    eC = n(187322),
    eR = n(944304),
    eO = n(672350);
let eb = function (e) {
    let { closeLayer: t, guild: n, isVisible: s } = e,
        a = r.useRef(null),
        o = (0, ei.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(et.animated.div, {
        className: eO.iE,
        style: o,
        children: (0, i.jsx)("div", {
            ref: a,
            className: eO.iJ,
            children: (0, i.jsxs)(eC.xp, {
                containerRef: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: eO.OA,
                        children: [
                            (0, i.jsx)(v.Ay, { className: eO.$f, guild: n, size: v.Ay.Sizes.SMALL }),
                            (0, i.jsx)(S.E, { className: eO.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)(eR.A, {
                        className: eO.lI,
                        guild: n,
                        analyticsLocation: {
                            page: M.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: M.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: M.ZSU.BUTTON_CTA,
                            objectType: M.AnalyticsObjectTypes.BUY,
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
var eD = n(192308),
    eL = n(65154),
    ew = n(387772),
    eM = n(519636);
function eP(e) {
    let { guild: t, analyticsLocation: s, videoPlacement: a, sourceAnalyticsLocations: l } = e,
        u = r.useCallback(() => {
            (0, eD.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("6836"), n.e("85810")]).then(n.bind(n, 872233));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: s,
                        videoPlacement: a,
                        sourceAnalyticsLocations: l,
                    });
            });
        }, [s, t.id, l, a]);
    return (0, i.jsxs)(o.D, {
        className: ew.kL,
        onClick: u,
        "aria-label": x.intl.string(X.default["103aY+"]),
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
    let { analyticsLocation: t, guild: n, onClose: m, scrollToPowerupCards: g } = e,
        [A, I] = r.useState(!0),
        T = r.useRef(!1),
        { analyticsLocations: S } = (0, c.Ay)(),
        y = r.useRef(null),
        N = r.useRef(null),
        v = r.useRef(null),
        C = r.useCallback(() => {
            m?.();
        }, [m]),
        R = r.useCallback(() => {
            null != v.current &&
                null != N.current &&
                N.current.scrollIntoViewNode({ node: v.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        O = r.useCallback(
            (e) => {
                e &&
                    !T.current &&
                    (p.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: M.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: S,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (T.current = !0));
            },
            [t, S, n.id],
        );
    r.useEffect(() => {
        p.default.track(M.HAw.OPEN_MODAL, {
            type: M.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: S,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, S]);
    let b = (0, _.C$)(n.id, "GuildBoostingMarketingRefresh"),
        D = (0, s.bG)([h.A], () => h.A.shouldFetchCatalogForGuild(n.id));
    r.useEffect(() => {
        b && D && (0, d.z9)(n.id);
    }, [n.id, b, D]);
    let L = (0, s.bG)([f.A], () => f.A.hasFetchedPowerupCatalog(n.id));
    return (
        r.useEffect(() => {
            if (g && L) {
                let e = setTimeout(() => {
                    R();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [g, R, L]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != m &&
                    (0, i.jsx)("div", {
                        className: j.Yk,
                        children: (0, i.jsx)(o.D, {
                            className: j.b,
                            onClick: C,
                            "aria-label": x.intl.string(x.t.cpT0Cq),
                            children: (0, i.jsx)(l.P, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, i.jsxs)(u.Gt, {
                    ref: N,
                    className: j.XG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.wx,
                            children: [
                                (0, i.jsx)(Y, { className: j.y2 }),
                                (0, i.jsxs)("div", {
                                    className: j.AZ,
                                    children: [
                                        (0, i.jsx)(U, {
                                            guild: n,
                                            closeLayer: C,
                                            onCtaVisibilityChange: I,
                                            className: j.Oh,
                                        }),
                                        (0, i.jsx)(eP, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: S,
                                        }),
                                        (0, i.jsx)(ee, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: j.uE,
                            children: (0, i.jsx)(ey, { ref: v, guild: e.guild, onClose: C }),
                        }),
                        (0, i.jsx)("div", {
                            className: j.o6,
                            children: (0, i.jsxs)("div", {
                                className: j.y$,
                                children: [
                                    (0, i.jsx)(eN.A, { className: j.Q, guild: n }),
                                    (0, i.jsx)(E.A, {}),
                                    (0, i.jsx)(G.A, {}),
                                ],
                            }),
                        }),
                        (0, i.jsx)(a.L, {
                            innerRef: y,
                            onChange: O,
                            children: (0, i.jsx)("div", { ref: y, className: j.mR }),
                        }),
                    ],
                }),
                (0, i.jsx)(eb, { guild: n, isVisible: !A, closeLayer: C }),
            ],
        })
    );
}
