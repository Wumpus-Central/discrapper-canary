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
    f = n(522055),
    h = n(645619),
    p = n(174459),
    E = n(917064),
    m = n(503698),
    g = n.n(m),
    A = n(534514),
    I = n(104510),
    T = n(661531),
    S = n(834730),
    N = n(821609),
    y = n(597770),
    C = n(548118),
    v = n(532794),
    O = n(864310),
    R = n(338548),
    b = n(287809),
    D = n(178368),
    L = n(927578),
    w = n(987144),
    M = n(652215),
    P = n(788868),
    x = n(375708),
    U = n(474236);
let k = function (e) {
    let { className: t, closeLayer: n, guild: o, onCtaVisibilityChange: l } = e,
        u = r.useRef(null),
        d = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        _ = (0, s.bG)([D.A], () => D.A.boostSlots),
        f = d?.isPremiumGroupMember(),
        { analyticsLocations: h } = (0, c.Ay)(),
        [p, E] = r.useState(!1),
        m = r.useMemo(
            () =>
                Object.keys(_).filter((e) => {
                    let t = _[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === o.id;
                }).length,
            [_, o.id],
        ),
        k = (0, O.A)(e.guild.id).total;
    async function G() {
        E(!0),
            await (0, w.g)({
                analyticsLocations: h,
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
        className: g()(U.kL, t),
        children: [
            (0, i.jsxs)("div", {
                className: U.$R,
                children: [
                    (0, i.jsx)(C.Ay, { className: U.$f, guild: o, size: C.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, i.jsxs)("div", {
                        className: U.CR,
                        children: [
                            (0, i.jsx)(A.D, { className: U.J5, variant: "heading-lg/semibold", children: o.name }),
                            (0, i.jsxs)("div", {
                                className: U.SJ,
                                children: [
                                    (0, i.jsx)(I._, {
                                        color:
                                            k > 0 ? T.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: g()(U.Me, { [U.S3]: k > 0 }),
                                    }),
                                    (0, i.jsx)(S.E, {
                                        className: U.n,
                                        variant: "text-md/semibold",
                                        children: x.intl.format(x.t["pob/cL"], { subscriptions: k }),
                                    }),
                                ],
                            }),
                            m > 0
                                ? (0, i.jsx)(S.E, {
                                      className: U.EV,
                                      variant: "text-sm/normal",
                                      children: x.intl.format(x.t.Jeto2u, { numSubscriptions: m }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: U.mY,
                children: [
                    (0, i.jsx)("h1", { className: U.R_, children: x.intl.string(x.t.N4sqzL) }),
                    f ? (0, i.jsx)(R.A, { alwaysWhite: !0 }) : null,
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
                                        icon: I._,
                                        text: x.intl.string(x.t.gKmQ1G),
                                        onClick: G,
                                        loading: p,
                                        disabled: f,
                                    }),
                                }),
                            }),
                            L.Ay.hasFreeBoosts(d) || L.Ay.isPremium(d, P.PremiumTypes.TIER_2)
                                ? (0, i.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: y.o,
                                      text: x.intl.string(x.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, v.A)({
                                              initialPlanId: null,
                                              subscriptionTier: P.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: h,
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
                                : (0, i.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: x.intl.string(x.t.Q43TvC),
                                      onClick: function () {
                                          (0, v.A)({
                                              initialPlanId: null,
                                              subscriptionTier: P.pe.TIER_2,
                                              analyticsLocations: h,
                                              analyticsObject: {
                                                  page: M.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: M.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: M.ZSU.BUTTON_ICON,
                                                  objectType: M.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                      disabled: f,
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
    z = n(724677),
    $ = n(210273),
    q = n(508155),
    Z = n(853513),
    X = n(111674);
function Q(e) {
    let { tier: t, isActive: n } = e,
        r = t === M.TVA.TIER_1,
        s = t === M.TVA.TIER_3,
        a = t === M.TVA.TIER_1 ? W.v : t === M.TVA.TIER_2 ? K.w : z.H;
    return (0, i.jsxs)("div", {
        className: X.MY,
        children: [
            (0, i.jsx)("div", { className: g()(X.hr, { [X.ti]: n, [X.YO]: !n, [X.JQ]: r, [X.Uz]: s }) }),
            (0, i.jsx)("div", {
                className: g()(X.Zj, {
                    [X.jv]: n,
                    [X.ip]: t === M.TVA.TIER_1,
                    [X.p3]: t === M.TVA.TIER_2,
                    [X.wF]: t === M.TVA.TIER_3,
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
        className: g()(X.Nr, { [X.Bm]: a, [X.c]: !a }),
        children: [
            (0, i.jsx)(Q, { tier: r, isActive: a }),
            (0, i.jsxs)("div", {
                className: X.zI,
                children: [
                    (0, i.jsxs)("div", {
                        className: X.$h,
                        children: [
                            (0, i.jsx)(A.D, {
                                className: g()(X.JJ, { [X.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: x.intl.string(
                                    r === M.TVA.TIER_1 ? x.t.nzXtaS : r === M.TVA.TIER_2 ? x.t["h33/uW"] : x.t.BfF6ED,
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                className: X.yC,
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
                        className: X.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, $.X)(e.perkIcon);
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: g()(X.bK, { [X.o]: !a }),
                                        children: [
                                            (0, i.jsx)(n, {
                                                className: X.kf,
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
                                className: X.wx,
                                variant: "text-md/medium",
                                children: x.intl.string(Z.default.nIj3LZ),
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
        className: g()(X.iE, n),
        children: q.t.map((e) => (0, i.jsx)(J, { guild: t, definition: e }, e.tier)),
    });
}
var et = n(785651),
    en = n(172218),
    ei = n(717421),
    er = n(289704),
    es = n(628284),
    ea = n(777666),
    eo = n(775602),
    el = n(793574),
    eu = n(868652),
    ec = n(363487),
    ed = n(73381),
    e_ = n(998418),
    ef = n(828162),
    eh = n(71393),
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
            powerup: f,
            badge: h,
            onClose: p,
        } = e,
        { analyticsLocations: E } = (0, c.Ay)(),
        m = n !== em.b_.INACTIVE,
        y = (0, ec.A)(t),
        C = (0, s.bG)([eo.A], () => eo.A.useReducedMotion),
        v = r.useRef(null),
        [O, R] = r.useState(!1),
        [b, D] = r.useState(!1),
        [L, P] = r.useState(!1),
        U = b || L,
        k = r.useCallback(() => {
            let e = eh.A.getGuild(t);
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
            p(), (0, ef.A)(t, el.A.GUILD_POWERUPS_MARKETING, f.skuId);
        }, [t, f.skuId, p]),
        F = { tension: 400, friction: 30 },
        V = (0, ei.z)({ scale: U ? 0.85 : 1, y: U ? -32 : 0, config: F }),
        B = (0, ei.z)({ scale: U ? 0.7 : 1, y: U ? -35 : 0, config: F }),
        H = (0, ei.z)({ y: U ? -32 : 0, config: F }),
        j = (0, ei.z)({ opacity: +!!U, transform: U ? "translateY(0)" : "translateY(16px)", config: F }),
        Y = r.useCallback((e) => {
            e && R(!0);
        }, []),
        W = r.useCallback(() => {
            P(!0);
        }, []),
        K = r.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || P(!1);
        }, []),
        z = (0, en.K)(Y),
        $ = f.skuId === eE.W5;
    return (0, i.jsxs)("div", {
        className: g()(eA.Nr, { [eA.fM]: O }),
        onFocus: W,
        onBlur: K,
        onMouseEnter: () => D(!0),
        onMouseLeave: () => D(!1),
        children: [
            (0, i.jsx)("div", { className: eA.sL, ref: z }),
            (0, i.jsx)("div", {
                className: eA.kQ,
                children: $
                    ? (0, i.jsx)(et.animated.div, {
                          className: eA.bm,
                          style: { transform: (0, et.to)([B.scale, B.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, i.jsx)(er.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: v,
                              fit: "contain",
                              className: eA.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, i.jsx)(et.animated.img, {
                          className: eA.bm,
                          src: U && null != _ && "" !== _ && !C ? _ : d,
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
                        children: (0, i.jsx)(N.$, {
                            variant: "primary",
                            text: x.intl.string(x.t.oPAx73),
                            onClick: k,
                            fullWidth: !0,
                        }),
                    }),
                    y &&
                        (0, i.jsx)("div", {
                            className: eA.x6,
                            children: (0, i.jsx)(N.$, {
                                variant: "secondary",
                                text: x.intl.string(x.t.GoCQxU),
                                onClick: G,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === h && (0, i.jsx)(ea.Lp, { className: eA.AP, text: x.intl.string(x.t.y2b7CA) }),
            "beta" === h &&
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
    eN = r.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        r.useEffect(() => {
            h.A.shouldFetchCatalogForGuild(n.id) && (0, eu.AK)(n.id),
                h.A.shouldFetchPowerupsForGuild(n.id) && (0, eu.Xd)(n.id);
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
                                  children: x.intl.string(Z.default.wjI18Q),
                              }),
                              (0, i.jsx)(S.E, {
                                  className: eA.fV,
                                  variant: "text-md/medium",
                                  children: x.intl.format(Z.default.S562fn, {
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
eN.displayName = "GuildBoostingMarketingPerkCards";
var ey = n(527113),
    eC = n(862482),
    ev = n(187322),
    eO = n(721923),
    eR = n(672350);
let eb = function (e) {
    let { closeLayer: t, guild: n, isVisible: s } = e,
        a = r.useRef(null),
        o = (0, ei.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(et.animated.div, {
        className: eR.iE,
        style: o,
        children: (0, i.jsx)("div", {
            ref: a,
            className: eR.iJ,
            children: (0, i.jsxs)(ev.xp, {
                containerRef: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: eR.OA,
                        children: [
                            (0, i.jsx)(C.Ay, { className: eR.$f, guild: n, size: C.Ay.Sizes.SMALL }),
                            (0, i.jsx)(S.E, { className: eR.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)(eO.A, {
                        className: eR.lI,
                        guild: n,
                        analyticsLocation: {
                            page: M.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: M.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: M.ZSU.BUTTON_CTA,
                            objectType: M.AnalyticsObjectTypes.BUY,
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
        "aria-label": x.intl.string(Z.default["103aY+"]),
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
        N = r.useRef(null),
        y = r.useRef(null),
        C = r.useRef(null),
        v = r.useCallback(() => {
            m?.();
        }, [m]),
        O = r.useCallback(() => {
            null != C.current &&
                null != y.current &&
                y.current.scrollIntoViewNode({ node: C.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        R = r.useCallback(
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
        D = (0, s.bG)([f.A], () => f.A.shouldFetchCatalogForGuild(n.id));
    r.useEffect(() => {
        b && D && (0, d.z9)(n.id);
    }, [n.id, b, D]);
    let L = (0, s.bG)([h.A], () => h.A.hasFetchedPowerupCatalog(n.id));
    return (
        r.useEffect(() => {
            if (g && L) {
                let e = setTimeout(() => {
                    O();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [g, O, L]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != m &&
                    (0, i.jsx)("div", {
                        className: j.Yk,
                        children: (0, i.jsx)(o.D, {
                            className: j.b,
                            onClick: v,
                            "aria-label": x.intl.string(x.t.cpT0Cq),
                            children: (0, i.jsx)(l.P, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, i.jsxs)(u.Gt, {
                    ref: y,
                    className: j.XG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.wx,
                            children: [
                                (0, i.jsx)(Y, { className: j.y2 }),
                                (0, i.jsxs)("div", {
                                    className: j.AZ,
                                    children: [
                                        (0, i.jsx)(k, {
                                            guild: n,
                                            closeLayer: v,
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
                            children: (0, i.jsx)(eN, { ref: C, guild: e.guild, onClose: v }),
                        }),
                        (0, i.jsx)("div", {
                            className: j.o6,
                            children: (0, i.jsxs)("div", {
                                className: j.y$,
                                children: [
                                    (0, i.jsx)(ey.A, { className: j.Q, guild: n }),
                                    (0, i.jsx)(E.A, {}),
                                    (0, i.jsx)(G.A, {}),
                                ],
                            }),
                        }),
                        (0, i.jsx)(a.L, {
                            innerRef: N,
                            onChange: R,
                            children: (0, i.jsx)("div", { ref: N, className: j.mR }),
                        }),
                    ],
                }),
                (0, i.jsx)(eb, { guild: n, isVisible: !A, closeLayer: v }),
            ],
        })
    );
}
