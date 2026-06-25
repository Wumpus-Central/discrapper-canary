"use strict";
n.d(t, { Zt: () => eB, K4: () => eW });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    r = n(444927),
    a = n(793574),
    o = n(688810),
    u = n(663066),
    c = n(71393),
    d = n(287809),
    m = n(174459),
    h = n(625494),
    p = n(269115),
    f = n(187322),
    g = n(939249),
    E = n(789645),
    A = n(689175),
    C = n(396748),
    x = n(488803),
    I = n(522055),
    _ = n(645619),
    S = n(917064),
    y = n(503698),
    v = n.n(y),
    T = n(534514),
    N = n(104510),
    b = n(661531),
    j = n(834730),
    R = n(821609),
    P = n(597770),
    L = n(548118),
    M = n(532794),
    O = n(864310),
    w = n(338548),
    k = n(178368),
    D = n(428262),
    U = n(987144),
    G = n(652215),
    F = n(788868),
    V = n(375708),
    B = n(111868);
let H = function (e) {
    let { className: t, closeLayer: n, guild: r, onCtaVisibilityChange: a } = e,
        u = i.useRef(null),
        c = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        m = (0, s.bG)([k.A], () => k.A.boostSlots),
        h = c?.isPremiumGroupMember(),
        { analyticsLocations: f } = (0, o.Ay)(),
        [g, E] = i.useState(!1),
        A = i.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === r.id;
                }).length,
            [m, r.id],
        ),
        C = (0, O.A)(e.guild.id).total;
    async function x() {
        E(!0),
            await (0, U.g)({
                analyticsLocations: f,
                analyticsLocation: {
                    page: G.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: G.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: G.ZSU.BUTTON_CTA,
                    objectType: G.AnalyticsObjectTypes.BUY,
                },
                guild: r,
                closeLayer: n,
            }),
            E(!1);
    }
    return (0, l.jsxs)("div", {
        className: v()(B.kL, t),
        children: [
            (0, l.jsxs)("div", {
                className: B.$R,
                children: [
                    (0, l.jsx)(L.Ay, { className: B.$f, guild: r, size: L.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, l.jsxs)("div", {
                        className: B.CR,
                        children: [
                            (0, l.jsx)(T.D, { className: B.J5, variant: "heading-lg/semibold", children: r.name }),
                            (0, l.jsxs)("div", {
                                className: B.SJ,
                                children: [
                                    (0, l.jsx)(N._, {
                                        color:
                                            C > 0 ? b.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: v()(B.Me, { [B.S3]: C > 0 }),
                                    }),
                                    (0, l.jsx)(j.E, {
                                        className: B.n,
                                        variant: "text-md/semibold",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: C }),
                                    }),
                                ],
                            }),
                            A > 0
                                ? (0, l.jsx)(j.E, {
                                      className: B.EV,
                                      variant: "text-sm/normal",
                                      children: V.intl.format(V.t.Jeto2u, { numSubscriptions: A }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: B.mY,
                children: [
                    (0, l.jsx)("h1", { className: B.R_, children: V.intl.string(V.t.N4sqzL) }),
                    h ? (0, l.jsx)(w.A, { alwaysWhite: !0 }) : null,
                    (0, l.jsxs)("div", {
                        className: B.Sq,
                        children: [
                            (0, l.jsx)(p.L, {
                                innerRef: u,
                                onChange: a,
                                threshold: 0.9,
                                children: (0, l.jsx)("div", {
                                    ref: u,
                                    className: B.dp,
                                    children: (0, l.jsx)(R.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: N._,
                                        text: V.intl.string(V.t.gKmQ1G),
                                        onClick: x,
                                        loading: g,
                                        disabled: h,
                                    }),
                                }),
                            }),
                            D.Ay.hasFreeBoosts(c) || D.Ay.isPremium(c, F.PremiumTypes.TIER_2)
                                ? (0, l.jsx)(R.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: P.o,
                                      text: V.intl.string(V.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: F.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: f,
                                              analyticsObject: {
                                                  page: G.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: G.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: G.ZSU.BUTTON_ICON,
                                                  objectType: G.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, l.jsx)(R.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: V.intl.string(V.t.Q43TvC),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: F.pe.TIER_2,
                                              analyticsLocations: f,
                                              analyticsObject: {
                                                  page: G.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: G.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: G.ZSU.BUTTON_ICON,
                                                  objectType: G.AnalyticsObjectTypes.BUY,
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
var W = n(232122),
    K = n(366010),
    Y = n(736653),
    z = n(303136),
    Z = n(676279),
    q = n(510679);
function $(e) {
    let { className: t } = e,
        n = (0, Y.Ay)(),
        i = (0, K.q)(n),
        s = (0, Z.TM)()
            ? i
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : i
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, l.jsxs)("div", {
        className: t,
        children: [
            (0, l.jsx)("div", { className: q.YL }),
            (0, l.jsx)(
                z.A,
                {
                    fallbackImage: i
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, l.jsx)("source", { src: s }),
                },
                s,
            ),
        ],
    });
}
function J(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, size: r = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/e6e3e8c908888463cade4de8b5847c949b0fe8e67ae29dbe17c2ca314c011a6d.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function X(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, size: r = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/9e156b8feeea36a8f7b0326e11211797de2e7c2049e9bcd8481e591ac1c119b2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function Q(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, size: r = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/a0a455fb897b41612b171199b4be5f70d02e411e37643a5337c12497d46033a1.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var ee = n(210273),
    et = n(508155),
    en = n(645704),
    el = n(582778);
function ei(e) {
    let { tier: t, isActive: n } = e,
        i = t === G.TVA.TIER_1,
        s = t === G.TVA.TIER_3,
        r = t === G.TVA.TIER_1 ? J : t === G.TVA.TIER_2 ? X : Q;
    return (0, l.jsxs)("div", {
        className: el.MY,
        children: [
            (0, l.jsx)("div", { className: v()(el.hr, { [el.ti]: n, [el.YO]: !n, [el.JQ]: i, [el.Uz]: s }) }),
            (0, l.jsx)("div", {
                className: v()(el.Zj, {
                    [el.jv]: n,
                    [el.ip]: t === G.TVA.TIER_1,
                    [el.p3]: t === G.TVA.TIER_2,
                    [el.wF]: t === G.TVA.TIER_3,
                }),
                children: (0, l.jsx)(r, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function es(e) {
    let { guild: t, definition: n } = e,
        { tier: i, perks: s } = n,
        r = t.premiumTier >= i,
        a = G.M2T[i];
    return (0, l.jsxs)("div", {
        className: v()(el.Nr, { [el.Bm]: r, [el.c]: !r }),
        children: [
            (0, l.jsx)(ei, { tier: i, isActive: r }),
            (0, l.jsxs)("div", {
                className: el.zI,
                children: [
                    (0, l.jsxs)("div", {
                        className: el.$h,
                        children: [
                            (0, l.jsx)(T.D, {
                                className: v()(el.JJ, { [el.eX]: !r }),
                                variant: "heading-xl/semibold",
                                color: r ? "text-strong" : void 0,
                                children: V.intl.string(
                                    i === G.TVA.TIER_1 ? V.t.nzXtaS : i === G.TVA.TIER_2 ? V.t["h33/uW"] : V.t.BfF6ED,
                                ),
                            }),
                            (0, l.jsxs)("div", {
                                className: el.yC,
                                children: [
                                    (0, l.jsx)(N._, { size: "xs", color: "currentColor" }),
                                    (0, l.jsx)(j.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: a }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: el.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, ee.X)(e.perkIcon);
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        className: v()(el.bK, { [el.o]: !r }),
                                        children: [
                                            (0, l.jsx)(n, {
                                                className: el.kf,
                                                color: r ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, l.jsx)(j.E, {
                                                variant: "text-md/medium",
                                                color: r ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, l.jsx)(j.E, {
                                className: el.wx,
                                variant: "text-md/medium",
                                children: V.intl.string(en.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { guild: t, className: n } = e;
    return (0, l.jsx)("div", {
        className: v()(el.iE, n),
        children: et.t.map((e) => (0, l.jsx)(es, { guild: t, definition: e }, e.tier)),
    });
}
var ea = n(308186),
    eo = n(172218),
    eu = n(717421),
    ec = n(289704),
    ed = n(628284),
    em = n(812993),
    eh = n(775602),
    ep = n(868652),
    ef = n(363487);
n(321073);
var eg = n(512750),
    eE = n(881756),
    eA = n(568065),
    eC = n(800007),
    ex = n(76660);
let eI =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png",
    e_ = new Set([...Array.from(eA.aH), ...Array.from(eA.m_), eg.FB]);
var eS = n(998418),
    ey = n(828162);
n(667532);
var ev = n(975571),
    eT = n(70240);
function eN(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: r,
            description: u,
            cost: d,
            costDecorator: m,
            staticImageUrl: h,
            animatedImageUrl: p,
            powerup: f,
            badge: g,
            onClose: E,
        } = e,
        { analyticsLocations: A } = (0, o.Ay)(),
        C = n !== eA.b_.INACTIVE,
        x = (0, ef.A)(t),
        I = (0, s.bG)([eh.Ay], () => eh.Ay.useReducedMotion),
        _ = i.useRef(null),
        [S, y] = i.useState(!1),
        [P, L] = i.useState(!1),
        [M, O] = i.useState(!1),
        w = P || M,
        k = i.useCallback(() => {
            let e = c.A.getGuild(t);
            null != e &&
                (0, U.g)({
                    analyticsLocation: {
                        page: G.liQ.GUILD_POWERUPS_MARKETING,
                        section: G.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: A,
                    guild: e,
                });
        }, [t, A]),
        D = i.useCallback(() => {
            E(), (0, ey.A)(t, a.A.GUILD_POWERUPS_MARKETING, f.skuId);
        }, [t, f.skuId, E]),
        F = { tension: 400, friction: 30 },
        B = (0, eu.z)({ scale: w ? 0.85 : 1, y: w ? -32 : 0, config: F }),
        H = (0, eu.z)({ scale: w ? 0.7 : 1, y: w ? -35 : 0, config: F }),
        W = (0, eu.z)({ y: w ? -32 : 0, config: F }),
        K = (0, eu.z)({ opacity: +!!w, transform: w ? "translateY(0)" : "translateY(16px)", config: F }),
        Y = i.useCallback((e) => {
            e && y(!0);
        }, []),
        z = i.useCallback(() => {
            O(!0);
        }, []),
        Z = i.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || O(!1);
        }, []),
        q = (0, eo.K)(Y),
        $ = f.skuId === eC.W5;
    return (0, l.jsxs)("div", {
        className: v()(eT.Nr, { [eT.fM]: S }),
        onFocus: z,
        onBlur: Z,
        onMouseEnter: () => L(!0),
        onMouseLeave: () => L(!1),
        children: [
            (0, l.jsx)("div", { className: eT.sL, ref: q }),
            (0, l.jsx)("div", {
                className: eT.kQ,
                children: $
                    ? (0, l.jsx)(ea.animated.div, {
                          className: eT.bm,
                          style: { transform: (0, ea.to)([H.scale, H.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, l.jsx)(ec.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: _,
                              fit: "contain",
                              className: eT.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, l.jsx)(ea.animated.img, {
                          className: eT.bm,
                          src: w && null != p && "" !== p && !I ? p : h,
                          alt: "",
                          style: { transform: (0, ea.to)([B.scale, B.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, l.jsxs)(ea.animated.div, {
                style: { ...W, transform: W.y.to((e) => `translateY(${e}px)`) },
                className: eT.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eT.P_,
                        children: [
                            (0, l.jsx)(T.D, { className: eT.DD, variant: "heading-lg/semibold", children: r }),
                            (0, l.jsx)(j.E, { className: eT.h_, variant: "text-md/medium", children: u }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: eT.jp,
                        children: [
                            (0, l.jsxs)("div", {
                                className: eT.qS,
                                children: [
                                    (0, l.jsx)(N._, { size: "xs", color: b.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, l.jsx)(j.E, {
                                        className: eT.Vv,
                                        variant: "text-sm/semibold",
                                        children: V.intl.formatToPlainString(
                                            null != m ? ex.default["G/aTXi"] : ex.default.r9pa9K,
                                            { boostCount: d },
                                        ),
                                    }),
                                ],
                            }),
                            C &&
                                (0, l.jsxs)("div", {
                                    className: v()(eT.qS, eT.nt),
                                    children: [
                                        (0, l.jsx)(ed.y, { size: "xs", color: "currentColor" }),
                                        (0, l.jsx)(j.E, {
                                            className: eT.nt,
                                            variant: "text-sm/semibold",
                                            children: V.intl.string(V.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(ea.animated.div, {
                style: K,
                className: eT.NC,
                children: [
                    (0, l.jsx)("div", {
                        className: eT.x6,
                        children: (0, l.jsx)(R.$, {
                            variant: "primary",
                            text: V.intl.string(V.t.oPAx73),
                            onClick: k,
                            fullWidth: !0,
                        }),
                    }),
                    x &&
                        (0, l.jsx)("div", {
                            className: eT.x6,
                            children: (0, l.jsx)(R.$, {
                                variant: "secondary",
                                text: V.intl.string(V.t.GoCQxU),
                                onClick: D,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === g && (0, l.jsx)(em.Lp, { className: eT.AP, text: V.intl.string(V.t.y2b7CA) }),
            "beta" === g &&
                (0, l.jsx)(em.Lp, {
                    className: eT.AP,
                    text: V.intl.string(V.t.oW0eUd),
                    color: b.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eb(e) {
    let { guildId: t, powerup: n, costDecorator: i, badge: s, onClose: r } = e,
        a = (0, eS.Ay)(t, n).type;
    return (0, l.jsx)(eN, {
        guildId: t,
        activeStatus: a,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: i,
        badge: s,
        onClose: r,
    });
}
let ej = new Map([[eC.W5, "+"]]),
    eR = i.forwardRef((e, t) => {
        var n;
        let r,
            a,
            { guild: o, onClose: u } = e;
        i.useEffect(() => {
            _.A.shouldFetchCatalogForGuild(o.id) && (0, ep.AK)(o.id),
                _.A.shouldFetchPowerupsForGuild(o.id) && (0, ep.Xd)(o.id);
        }, [o.id]);
        let c = (function (e) {
            let t = [...e].reverse(),
                n = t.findIndex((e) => e.skuId === eg.d0);
            if (n > 0) {
                let [e] = t.splice(n, 1);
                t.unshift(e);
            }
            let l = t.findIndex((e) => e.skuId === eC.W5);
            if (-1 !== l && l !== t.length - 1) {
                let [e] = t.splice(l, 1);
                t.push(e);
            }
            return t;
        })(
            ((n = o.id),
            (r = (0, s.bG)([_.A], () => _.A.getStateForGuild(n)?.powerupCatalog?.[eA.o9.PERK])),
            (a = (function (e) {
                let t = (0, x.C$)(e, "useGameServerPerk"),
                    n = (0, s.bG)([I.A], () => I.A.getLowestGameCostForGuild(e)),
                    { gameName: l, gameName2: r } = (0, eE.A)();
                return i.useMemo(
                    () =>
                        t && null != n
                            ? {
                                  skuId: eC.W5,
                                  title: V.intl.string(ex.default["B3OfL/"]),
                                  description: V.intl.format(ex.default["+UqyGU"], { gameName: l, gameName2: r }),
                                  cost: n,
                                  dependencies: [],
                                  type: eA.o9.PERK,
                                  animatedImageUrl: eI,
                                  staticImageUrl: eI,
                              }
                            : null,
                    [t, n, l, r],
                );
            })(n)),
            i.useMemo(() => {
                let e = [...(r ?? [])];
                return null != a && e.push(a), e.filter((e) => !e_.has(e.skuId));
            }, [r, a]) ?? []),
        ).slice(0, 6);
        return 0 === c.length
            ? null
            : (0, l.jsxs)("div", {
                  ref: t,
                  className: eT.iE,
                  children: [
                      (0, l.jsxs)("div", {
                          className: eT.ND,
                          children: [
                              (0, l.jsx)(T.D, {
                                  className: eT.R_,
                                  variant: "heading-xxl/semibold",
                                  children: V.intl.string(en.default.wjI18Q),
                              }),
                              (0, l.jsx)(j.E, {
                                  className: eT.fV,
                                  variant: "text-md/medium",
                                  children: V.intl.format(en.default.S562fn, {
                                      helpDeskArticle: ev.A.getArticleURL(G.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: eT.vY,
                          children: c.map((e) =>
                              (0, l.jsx)(
                                  eb,
                                  {
                                      guildId: o.id,
                                      powerup: e,
                                      costDecorator: ej.get(e.skuId),
                                      badge: eA.ys[e.skuId],
                                      onClose: u,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eR.displayName = "GuildBoostingMarketingPerkCards";
var eP = n(527113),
    eL = n(862482),
    eM = n(944304),
    eO = n(130782);
let ew = function (e) {
    let { closeLayer: t, guild: n, isVisible: s } = e,
        r = i.useRef(null),
        a = (0, eu.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, l.jsx)(ea.animated.div, {
        className: eO.iE,
        style: a,
        children: (0, l.jsx)("div", {
            ref: r,
            className: eO.iJ,
            children: (0, l.jsxs)(f.xp, {
                containerRef: r,
                children: [
                    (0, l.jsxs)("div", {
                        className: eO.OA,
                        children: [
                            (0, l.jsx)(L.Ay, { className: eO.$f, guild: n, size: L.Ay.Sizes.SMALL }),
                            (0, l.jsx)(j.E, { className: eO.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, l.jsx)(eM.A, {
                        className: eO.lI,
                        guild: n,
                        analyticsLocation: {
                            page: G.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: G.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: G.ZSU.BUTTON_CTA,
                            objectType: G.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !s,
                        size: eL.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var ek = n(192308),
    eD = n(65154),
    eU = n(303676),
    eG = n(519636);
function eF(e) {
    let { guild: t, analyticsLocation: s, videoPlacement: r, sourceAnalyticsLocations: a } = e,
        o = i.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("88340"), n.e("85810")]).then(n.bind(n, 872233));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: s,
                        videoPlacement: r,
                        sourceAnalyticsLocations: a,
                    });
            });
        }, [s, t.id, a, r]);
    return (0, l.jsxs)(g.D, {
        className: eU.kL,
        onClick: o,
        "aria-label": V.intl.string(en.default["103aY+"]),
        children: [
            (0, l.jsx)("img", { alt: "", className: eU.xn, src: eG.A }),
            (0, l.jsx)("div", { className: eU.Lw }),
            (0, l.jsx)("div", {
                className: eU.Rr,
                children: (0, l.jsx)(eD.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eV(e) {
    let { analyticsLocation: t, guild: n, onClose: r, scrollToPowerupCards: a } = e,
        [u, c] = i.useState(!0),
        d = i.useRef(!1),
        { analyticsLocations: h } = (0, o.Ay)(),
        y = i.useRef(null),
        v = i.useRef(null),
        T = i.useRef(null),
        N = i.useRef(null),
        b = i.useCallback(() => {
            r?.();
        }, [r]),
        j = i.useCallback(() => {
            null != T.current &&
                null != v.current &&
                v.current.scrollIntoViewNode({ node: T.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        R = i.useCallback(
            (e) => {
                e &&
                    !d.current &&
                    (m.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: G.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: h,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (d.current = !0));
            },
            [t, h, n.id],
        );
    i.useEffect(() => {
        m.default.track(G.HAw.OPEN_MODAL, {
            type: G.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: h,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, h]);
    let P = (0, x.C$)(n.id, "GuildBoostingMarketingRefresh"),
        L = (0, s.bG)([I.A], () => I.A.shouldFetchCatalogForGuild(n.id));
    i.useEffect(() => {
        P && L && (0, C.z9)(n.id);
    }, [n.id, P, L]);
    let M = (0, s.bG)([_.A], () => _.A.hasFetchedPowerupCatalog(n.id));
    return (
        i.useEffect(() => {
            if (a && M) {
                let e = setTimeout(() => {
                    j();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [a, j, M]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != r &&
                    (0, l.jsx)("div", {
                        ref: N,
                        className: q.Yk,
                        children: (0, l.jsx)(f.xp, {
                            containerRef: N,
                            children: (0, l.jsx)(g.D, {
                                className: q.b,
                                onClick: b,
                                "aria-label": V.intl.string(V.t.cpT0Cq),
                                children: (0, l.jsx)(E.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, l.jsxs)(A.Gt, {
                    ref: v,
                    className: q.XG,
                    children: [
                        (0, l.jsxs)("div", {
                            className: q.wx,
                            children: [
                                (0, l.jsx)($, { className: q.y2 }),
                                (0, l.jsxs)("div", {
                                    className: q.AZ,
                                    children: [
                                        (0, l.jsx)(H, {
                                            guild: n,
                                            closeLayer: b,
                                            onCtaVisibilityChange: c,
                                            className: q.Oh,
                                        }),
                                        (0, l.jsx)(eF, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: h,
                                        }),
                                        (0, l.jsx)(er, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: q.uE,
                            children: (0, l.jsx)(eR, { ref: T, guild: e.guild, onClose: b }),
                        }),
                        (0, l.jsx)("div", {
                            className: q.o6,
                            children: (0, l.jsxs)("div", {
                                className: q.y$,
                                children: [
                                    (0, l.jsx)(eP.A, { className: q.Q, guild: n }),
                                    (0, l.jsx)(S.A, {}),
                                    (0, l.jsx)(W.A, {}),
                                ],
                            }),
                        }),
                        (0, l.jsx)(p.L, {
                            innerRef: y,
                            onChange: R,
                            children: (0, l.jsx)("div", { ref: y, className: q.mR }),
                        }),
                    ],
                }),
                (0, l.jsx)(ew, { guild: n, isVisible: !u, closeLayer: b }),
            ],
        })
    );
}
let eB = "BoostedGuildPerksModalConnected";
function eH(e) {
    let { guildId: t, close: n, location: u, registerDismissModalHandler: h, scrollToPowerupCards: p } = e,
        f = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, s.bG)([c.A], () => c.A.getGuild(t), [t]),
        E = (0, r.A)(() => Date.now()),
        { analyticsLocations: A } = (0, o.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL),
        C = g?.id,
        x = i.useCallback(() => {
            n(),
                null != C &&
                    m.default.track(G.HAw.MODAL_DISMISSED, {
                        type: G.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: A,
                        location_section: u.section,
                        location_object: u.object,
                        guild_id: C,
                        duration_open_ms: Date.now() - E,
                    });
        }, [A, E, u.object, u.section, n, C]);
    return (i.useLayoutEffect(() => {
        h?.(x);
    }, [x, h]),
    null == f || null == g)
        ? null
        : (0, l.jsx)(o.f5, {
              value: A,
              children: (0, l.jsx)(eV, { analyticsLocation: u, onClose: x, guild: g, scrollToPowerupCards: p }),
          });
}
function eW(e) {
    let { guildId: t, location: n, scrollToPowerupCards: i } = e,
        s = { current: null };
    (0, u.B8)(
        (e) => {
            let { closeLayer: r } = e;
            return (
                null == s.current && (s.current = r),
                (0, l.jsx)(eH, {
                    close: r,
                    guildId: t,
                    location: n,
                    registerDismissModalHandler: (e) => {
                        s.current = e;
                    },
                    scrollToPowerupCards: i,
                })
            );
        },
        {
            layerKey: eB,
            onEscape: () =>
                h._.hasSubscribers(G.jej.MODAL_CLOSE)
                    ? (h._.dispatch(G.jej.MODAL_CLOSE), !0)
                    : null != s.current && (s.current(), !0),
        },
    );
}
