"use strict";
n.d(t, { Zt: () => eH, K4: () => eW });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(444927),
    l = n(793574),
    o = n(688810),
    d = n(361158),
    c = n(71393),
    u = n(287809),
    _ = n(174459),
    E = n(625494),
    A = n(269115),
    h = n(187322),
    I = n(939249),
    f = n(789645),
    p = n(689175),
    T = n(396748),
    m = n(488803),
    g = n(522055),
    S = n(645619),
    N = n(917064),
    C = n(503698),
    R = n.n(C),
    O = n(534514),
    L = n(104510),
    D = n(661531),
    y = n(834730),
    v = n(821609),
    b = n(597770),
    M = n(548118),
    P = n(532794),
    U = n(864310),
    w = n(338548),
    G = n(178368),
    x = n(428262),
    k = n(987144),
    F = n(652215),
    V = n(202541),
    B = n(375708),
    H = n(111868);
let j = function (e) {
    let { className: t, closeLayer: n, guild: s, onCtaVisibilityChange: l } = e,
        d = r.useRef(null),
        c = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        _ = (0, a.bG)([G.A], () => G.A.boostSlots),
        E = c?.isPremiumGroupMember(),
        { analyticsLocations: h } = (0, o.Ay)(),
        [I, f] = r.useState(!1),
        p = r.useMemo(
            () =>
                Object.keys(_).filter((e) => {
                    let t = _[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === s.id;
                }).length,
            [_, s.id],
        ),
        T = (0, U.A)(e.guild.id).total;
    async function m() {
        f(!0),
            await (0, k.g)({
                analyticsLocations: h,
                analyticsLocation: {
                    page: F.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: F.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: F.ZSU.BUTTON_CTA,
                    objectType: F.AnalyticsObjectTypes.BUY,
                },
                guild: s,
                closeLayer: n,
            }),
            f(!1);
    }
    return (0, i.jsxs)("div", {
        className: R()(H.kL, t),
        children: [
            (0, i.jsxs)("div", {
                className: H.$R,
                children: [
                    (0, i.jsx)(M.Ay, { className: H.$f, guild: s, size: M.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, i.jsxs)("div", {
                        className: H.CR,
                        children: [
                            (0, i.jsx)(O.D, { className: H.J5, variant: "heading-lg/semibold", children: s.name }),
                            (0, i.jsxs)("div", {
                                className: H.SJ,
                                children: [
                                    (0, i.jsx)(L._, {
                                        color:
                                            T > 0 ? D.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: R()(H.Me, { [H.S3]: T > 0 }),
                                    }),
                                    (0, i.jsx)(y.E, {
                                        className: H.n,
                                        variant: "text-md/semibold",
                                        children: B.intl.format(B.t["pob/cL"], { subscriptions: T }),
                                    }),
                                ],
                            }),
                            p > 0
                                ? (0, i.jsx)(y.E, {
                                      className: H.EV,
                                      variant: "text-sm/normal",
                                      children: B.intl.format(B.t.Jeto2u, { numSubscriptions: p }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: H.mY,
                children: [
                    (0, i.jsx)("h1", { className: H.R_, children: B.intl.string(B.t.N4sqzL) }),
                    E ? (0, i.jsx)(w.A, { alwaysWhite: !0 }) : null,
                    (0, i.jsxs)("div", {
                        className: H.Sq,
                        children: [
                            (0, i.jsx)(A.L, {
                                innerRef: d,
                                onChange: l,
                                threshold: 0.9,
                                children: (0, i.jsx)("div", {
                                    ref: d,
                                    className: H.dp,
                                    children: (0, i.jsx)(v.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: L._,
                                        text: B.intl.string(B.t.gKmQ1G),
                                        onClick: m,
                                        loading: I,
                                        disabled: E,
                                    }),
                                }),
                            }),
                            x.Ay.hasFreeBoosts(c) || x.Ay.isPremium(c, V.PremiumTypes.TIER_2)
                                ? (0, i.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: b.o,
                                      text: B.intl.string(B.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, P.A)({
                                              initialPlanId: null,
                                              subscriptionTier: V.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: h,
                                              analyticsObject: {
                                                  page: F.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: F.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: F.ZSU.BUTTON_ICON,
                                                  objectType: F.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, i.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: B.intl.string(B.t.Q43TvC),
                                      onClick: function () {
                                          (0, P.A)({
                                              initialPlanId: null,
                                              subscriptionTier: V.pe.TIER_2,
                                              analyticsLocations: h,
                                              analyticsObject: {
                                                  page: F.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: F.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: F.ZSU.BUTTON_ICON,
                                                  objectType: F.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                      disabled: E,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var W = n(232122),
    Y = n(366010),
    K = n(736653),
    $ = n(303136),
    z = n(676279),
    q = n(510679);
function Z(e) {
    let { className: t } = e,
        n = (0, K.Ay)(),
        r = (0, Y.q)(n),
        a = (0, z.TM)()
            ? r
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : r
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: q.YL }),
            (0, i.jsx)(
                $.A,
                {
                    fallbackImage: r
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, i.jsx)("source", { src: a }),
                },
                a,
            ),
        ],
    });
}
function X(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, size: s = 64 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/e6e3e8c908888463cade4de8b5847c949b0fe8e67ae29dbe17c2ca314c011a6d.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
function Q(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, size: s = 64 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/9e156b8feeea36a8f7b0326e11211797de2e7c2049e9bcd8481e591ac1c119b2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
function J(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, size: s = 64 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/a0a455fb897b41612b171199b4be5f70d02e411e37643a5337c12497d46033a1.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
var ee = n(210273),
    et = n(508155),
    en = n(645704),
    ei = n(582778);
function er(e) {
    let { tier: t, isActive: n } = e,
        r = t === F.TVA.TIER_1,
        a = t === F.TVA.TIER_3,
        s = t === F.TVA.TIER_1 ? X : t === F.TVA.TIER_2 ? Q : J;
    return (0, i.jsxs)("div", {
        className: ei.MY,
        children: [
            (0, i.jsx)("div", { className: R()(ei.hr, { [ei.ti]: n, [ei.YO]: !n, [ei.JQ]: r, [ei.Uz]: a }) }),
            (0, i.jsx)("div", {
                className: R()(ei.Zj, {
                    [ei.jv]: n,
                    [ei.ip]: t === F.TVA.TIER_1,
                    [ei.p3]: t === F.TVA.TIER_2,
                    [ei.wF]: t === F.TVA.TIER_3,
                }),
                children: (0, i.jsx)(s, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function ea(e) {
    let { guild: t, definition: n } = e,
        { tier: r, perks: a } = n,
        s = t.premiumTier >= r,
        l = F.M2T[r];
    return (0, i.jsxs)("div", {
        className: R()(ei.Nr, { [ei.Bm]: s, [ei.c]: !s }),
        children: [
            (0, i.jsx)(er, { tier: r, isActive: s }),
            (0, i.jsxs)("div", {
                className: ei.zI,
                children: [
                    (0, i.jsxs)("div", {
                        className: ei.$h,
                        children: [
                            (0, i.jsx)(O.D, {
                                className: R()(ei.JJ, { [ei.eX]: !s }),
                                variant: "heading-xl/semibold",
                                color: s ? "text-strong" : void 0,
                                children: B.intl.string(
                                    r === F.TVA.TIER_1 ? B.t.nzXtaS : r === F.TVA.TIER_2 ? B.t["h33/uW"] : B.t.BfF6ED,
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                className: ei.yC,
                                children: [
                                    (0, i.jsx)(L._, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(y.E, {
                                        variant: "text-md/medium",
                                        children: B.intl.format(B.t["pob/cL"], { subscriptions: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ei.PJ,
                        children: [
                            a.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, ee.X)(e.perkIcon);
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: R()(ei.bK, { [ei.o]: !s }),
                                        children: [
                                            (0, i.jsx)(n, {
                                                className: ei.kf,
                                                color: s ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, i.jsx)(y.E, {
                                                variant: "text-md/medium",
                                                color: s ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, i.jsx)(y.E, {
                                className: ei.wx,
                                variant: "text-md/medium",
                                children: B.intl.string(en.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function es(e) {
    let { guild: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: R()(ei.iE, n),
        children: et.t.map((e) => (0, i.jsx)(ea, { guild: t, definition: e }, e.tier)),
    });
}
var el = n(580929),
    eo = n(172218),
    ed = n(717421),
    ec = n(289704),
    eu = n(628284),
    e_ = n(812993),
    eE = n(775602),
    eA = n(868652),
    eh = n(363487);
n(321073);
var eI = n(512750),
    ef = n(881756),
    ep = n(568065),
    eT = n(800007),
    em = n(76660);
let eg =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png",
    eS = new Set([...Array.from(ep.aH), ...Array.from(ep.m_), eI.FB]);
var eN = n(998418),
    eC = n(828162);
n(667532);
var eR = n(975571),
    eO = n(70240);
function eL(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: s,
            description: d,
            cost: u,
            costDecorator: _,
            staticImageUrl: E,
            animatedImageUrl: A,
            powerup: h,
            badge: I,
            onClose: f,
        } = e,
        { analyticsLocations: p } = (0, o.Ay)(),
        T = n !== ep.b_.INACTIVE,
        m = (0, eh.A)(t),
        g = (0, a.bG)([eE.Ay], () => eE.Ay.useReducedMotion),
        S = r.useRef(null),
        [N, C] = r.useState(!1),
        [b, M] = r.useState(!1),
        [P, U] = r.useState(!1),
        w = b || P,
        G = r.useCallback(() => {
            let e = c.A.getGuild(t);
            null != e &&
                (0, k.g)({
                    analyticsLocation: {
                        page: F.liQ.GUILD_POWERUPS_MARKETING,
                        section: F.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: p,
                    guild: e,
                });
        }, [t, p]),
        x = r.useCallback(() => {
            f(), (0, eC.A)(t, l.A.GUILD_POWERUPS_MARKETING, h.skuId);
        }, [t, h.skuId, f]),
        V = { tension: 400, friction: 30 },
        H = (0, ed.z)({ scale: w ? 0.85 : 1, y: w ? -32 : 0, config: V }),
        j = (0, ed.z)({ scale: w ? 0.7 : 1, y: w ? -35 : 0, config: V }),
        W = (0, ed.z)({ y: w ? -32 : 0, config: V }),
        Y = (0, ed.z)({ opacity: +!!w, transform: w ? "translateY(0)" : "translateY(16px)", config: V }),
        K = r.useCallback((e) => {
            e && C(!0);
        }, []),
        $ = r.useCallback(() => {
            U(!0);
        }, []),
        z = r.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || U(!1);
        }, []),
        q = (0, eo.K)(K),
        Z = h.skuId === eT.W5;
    return (0, i.jsxs)("div", {
        className: R()(eO.Nr, { [eO.fM]: N }),
        onFocus: $,
        onBlur: z,
        onMouseEnter: () => M(!0),
        onMouseLeave: () => M(!1),
        children: [
            (0, i.jsx)("div", { className: eO.sL, ref: q }),
            (0, i.jsx)("div", {
                className: eO.kQ,
                children: Z
                    ? (0, i.jsx)(el.animated.div, {
                          className: eO.bm,
                          style: { transform: (0, el.to)([j.scale, j.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, i.jsx)(ec.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: S,
                              fit: "contain",
                              className: eO.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, i.jsx)(el.animated.img, {
                          className: eO.bm,
                          src: w && null != A && "" !== A && !g ? A : E,
                          alt: "",
                          style: { transform: (0, el.to)([H.scale, H.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, i.jsxs)(el.animated.div, {
                style: { ...W, transform: W.y.to((e) => `translateY(${e}px)`) },
                className: eO.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: eO.P_,
                        children: [
                            (0, i.jsx)(O.D, { className: eO.DD, variant: "heading-lg/semibold", children: s }),
                            (0, i.jsx)(y.E, { className: eO.h_, variant: "text-md/medium", children: d }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: eO.jp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eO.qS,
                                children: [
                                    (0, i.jsx)(L._, { size: "xs", color: D.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, i.jsx)(y.E, {
                                        className: eO.Vv,
                                        variant: "text-sm/semibold",
                                        children: B.intl.formatToPlainString(
                                            null != _ ? em.default["G/aTXi"] : em.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            T &&
                                (0, i.jsxs)("div", {
                                    className: R()(eO.qS, eO.nt),
                                    children: [
                                        (0, i.jsx)(eu.y, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(y.E, {
                                            className: eO.nt,
                                            variant: "text-sm/semibold",
                                            children: B.intl.string(B.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(el.animated.div, {
                style: Y,
                className: eO.NC,
                children: [
                    (0, i.jsx)("div", {
                        className: eO.x6,
                        children: (0, i.jsx)(v.$, {
                            variant: "primary",
                            text: B.intl.string(B.t.oPAx73),
                            onClick: G,
                            fullWidth: !0,
                        }),
                    }),
                    m &&
                        (0, i.jsx)("div", {
                            className: eO.x6,
                            children: (0, i.jsx)(v.$, {
                                variant: "secondary",
                                text: B.intl.string(B.t.GoCQxU),
                                onClick: x,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === I && (0, i.jsx)(e_.Lp, { className: eO.AP, text: B.intl.string(B.t.y2b7CA) }),
            "beta" === I &&
                (0, i.jsx)(e_.Lp, {
                    className: eO.AP,
                    text: B.intl.string(B.t.oW0eUd),
                    color: D.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eD(e) {
    let { guildId: t, powerup: n, costDecorator: r, badge: a, onClose: s } = e,
        l = (0, eN.Ay)(t, n).type;
    return (0, i.jsx)(eL, {
        guildId: t,
        activeStatus: l,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: r,
        badge: a,
        onClose: s,
    });
}
let ey = new Map([[eT.W5, "+"]]),
    ev = r.forwardRef((e, t) => {
        var n;
        let s,
            l,
            { guild: o, onClose: d } = e;
        r.useEffect(() => {
            S.A.shouldFetchCatalogForGuild(o.id) && (0, eA.AK)(o.id),
                S.A.shouldFetchPowerupsForGuild(o.id) && (0, eA.Xd)(o.id);
        }, [o.id]);
        let c = (function (e) {
            let t = [...e].reverse(),
                n = t.findIndex((e) => e.skuId === eI.d0);
            if (n > 0) {
                let [e] = t.splice(n, 1);
                t.unshift(e);
            }
            let i = t.findIndex((e) => e.skuId === eT.W5);
            if (-1 !== i && i !== t.length - 1) {
                let [e] = t.splice(i, 1);
                t.push(e);
            }
            return t;
        })(
            ((n = o.id),
            (s = (0, a.bG)([S.A], () => S.A.getStateForGuild(n)?.powerupCatalog?.[ep.o9.PERK])),
            (l = (function (e) {
                let t = (0, m.C$)(e, "useGameServerPerk"),
                    n = (0, a.bG)([g.A], () => g.A.getLowestGameCostForGuild(e)),
                    { gameName: i, gameName2: s } = (0, ef.A)();
                return r.useMemo(
                    () =>
                        t && null != n
                            ? {
                                  skuId: eT.W5,
                                  title: B.intl.string(em.default["B3OfL/"]),
                                  description: B.intl.format(em.default["+UqyGU"], { gameName: i, gameName2: s }),
                                  cost: n,
                                  dependencies: [],
                                  type: ep.o9.PERK,
                                  animatedImageUrl: eg,
                                  staticImageUrl: eg,
                              }
                            : null,
                    [t, n, i, s],
                );
            })(n)),
            r.useMemo(() => {
                let e = [...(s ?? [])];
                return null != l && e.push(l), e.filter((e) => !eS.has(e.skuId));
            }, [s, l]) ?? []),
        ).slice(0, 6);
        return 0 === c.length
            ? null
            : (0, i.jsxs)("div", {
                  ref: t,
                  className: eO.iE,
                  children: [
                      (0, i.jsxs)("div", {
                          className: eO.ND,
                          children: [
                              (0, i.jsx)(O.D, {
                                  className: eO.R_,
                                  variant: "heading-xxl/semibold",
                                  children: B.intl.string(en.default.wjI18Q),
                              }),
                              (0, i.jsx)(y.E, {
                                  className: eO.fV,
                                  variant: "text-md/medium",
                                  children: B.intl.format(en.default.S562fn, {
                                      helpDeskArticle: eR.A.getArticleURL(F.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: eO.vY,
                          children: c.map((e) =>
                              (0, i.jsx)(
                                  eD,
                                  {
                                      guildId: o.id,
                                      powerup: e,
                                      costDecorator: ey.get(e.skuId),
                                      badge: ep.ys[e.skuId],
                                      onClose: d,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
ev.displayName = "GuildBoostingMarketingPerkCards";
var eb = n(527113),
    eM = n(862482),
    eP = n(944304),
    eU = n(130782);
let ew = function (e) {
    let { closeLayer: t, guild: n, isVisible: a } = e,
        s = r.useRef(null),
        l = (0, ed.z)({
            transform: a ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(el.animated.div, {
        className: eU.iE,
        style: l,
        children: (0, i.jsx)("div", {
            ref: s,
            className: eU.iJ,
            children: (0, i.jsxs)(h.xp, {
                containerRef: s,
                children: [
                    (0, i.jsxs)("div", {
                        className: eU.OA,
                        children: [
                            (0, i.jsx)(M.Ay, { className: eU.$f, guild: n, size: M.Ay.Sizes.SMALL }),
                            (0, i.jsx)(y.E, { className: eU.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)(eP.A, {
                        className: eU.lI,
                        guild: n,
                        analyticsLocation: {
                            page: F.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: F.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: F.ZSU.BUTTON_CTA,
                            objectType: F.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !a,
                        size: eM.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eG = n(192308),
    ex = n(65154),
    ek = n(303676),
    eF = n(519636);
function eV(e) {
    let { guild: t, analyticsLocation: a, videoPlacement: s, sourceAnalyticsLocations: l } = e,
        o = r.useCallback(() => {
            (0, eG.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("88340"), n.e("85810")]).then(n.bind(n, 872233));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: a,
                        videoPlacement: s,
                        sourceAnalyticsLocations: l,
                    });
            });
        }, [a, t.id, l, s]);
    return (0, i.jsxs)(I.D, {
        className: ek.kL,
        onClick: o,
        "aria-label": B.intl.string(en.default["103aY+"]),
        children: [
            (0, i.jsx)("img", { alt: "", className: ek.xn, src: eF.A }),
            (0, i.jsx)("div", { className: ek.Lw }),
            (0, i.jsx)("div", {
                className: ek.Rr,
                children: (0, i.jsx)(ex.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eB(e) {
    let { analyticsLocation: t, guild: n, onClose: s, scrollToPowerupCards: l } = e,
        [d, c] = r.useState(!0),
        u = r.useRef(!1),
        { analyticsLocations: E } = (0, o.Ay)(),
        C = r.useRef(null),
        R = r.useRef(null),
        O = r.useRef(null),
        L = r.useRef(null),
        D = r.useCallback(() => {
            s?.();
        }, [s]),
        y = r.useCallback(() => {
            null != O.current &&
                null != R.current &&
                R.current.scrollIntoViewNode({ node: O.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        v = r.useCallback(
            (e) => {
                e &&
                    !u.current &&
                    (_.default.track(F.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: F.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: E,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (u.current = !0));
            },
            [t, E, n.id],
        );
    r.useEffect(() => {
        _.default.track(F.HAw.OPEN_MODAL, {
            type: F.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: E,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, E]);
    let b = (0, m.C$)(n.id, "GuildBoostingMarketingRefresh"),
        M = (0, a.bG)([g.A], () => g.A.shouldFetchCatalogForGuild(n.id));
    r.useEffect(() => {
        b && M && (0, T.z9)(n.id);
    }, [n.id, b, M]);
    let P = (0, a.bG)([S.A], () => S.A.hasFetchedPowerupCatalog(n.id));
    return (
        r.useEffect(() => {
            if (l && P) {
                let e = setTimeout(() => {
                    y();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [l, y, P]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != s &&
                    (0, i.jsx)("div", {
                        ref: L,
                        className: q.Yk,
                        children: (0, i.jsx)(h.xp, {
                            containerRef: L,
                            children: (0, i.jsx)(I.D, {
                                className: q.b,
                                onClick: D,
                                "aria-label": B.intl.string(B.t.cpT0Cq),
                                children: (0, i.jsx)(f.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, i.jsxs)(p.Gt, {
                    ref: R,
                    className: q.XG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: q.wx,
                            children: [
                                (0, i.jsx)(Z, { className: q.y2 }),
                                (0, i.jsxs)("div", {
                                    className: q.AZ,
                                    children: [
                                        (0, i.jsx)(j, {
                                            guild: n,
                                            closeLayer: D,
                                            onCtaVisibilityChange: c,
                                            className: q.Oh,
                                        }),
                                        (0, i.jsx)(eV, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: E,
                                        }),
                                        (0, i.jsx)(es, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: q.uE,
                            children: (0, i.jsx)(ev, { ref: O, guild: e.guild, onClose: D }),
                        }),
                        (0, i.jsx)("div", {
                            className: q.o6,
                            children: (0, i.jsxs)("div", {
                                className: q.y$,
                                children: [
                                    (0, i.jsx)(eb.A, { className: q.Q, guild: n }),
                                    (0, i.jsx)(N.A, {}),
                                    (0, i.jsx)(W.A, {}),
                                ],
                            }),
                        }),
                        (0, i.jsx)(A.L, {
                            innerRef: C,
                            onChange: v,
                            children: (0, i.jsx)("div", { ref: C, className: q.mR }),
                        }),
                    ],
                }),
                (0, i.jsx)(ew, { guild: n, isVisible: !d, closeLayer: D }),
            ],
        })
    );
}
let eH = "BoostedGuildPerksModalConnected";
function ej(e) {
    let { guildId: t, close: n, location: d, registerDismissModalHandler: E, scrollToPowerupCards: A } = e,
        h = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        I = (0, a.bG)([c.A], () => c.A.getGuild(t), [t]),
        f = (0, s.A)(() => Date.now()),
        { analyticsLocations: p } = (0, o.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
        T = I?.id,
        m = r.useCallback(() => {
            n(),
                null != T &&
                    _.default.track(F.HAw.MODAL_DISMISSED, {
                        type: F.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: p,
                        location_section: d.section,
                        location_object: d.object,
                        guild_id: T,
                        duration_open_ms: Date.now() - f,
                    });
        }, [p, f, d.object, d.section, n, T]);
    return (r.useLayoutEffect(() => {
        E?.(m);
    }, [m, E]),
    null == h || null == I)
        ? null
        : (0, i.jsx)(o.f5, {
              value: p,
              children: (0, i.jsx)(eB, { analyticsLocation: d, onClose: m, guild: I, scrollToPowerupCards: A }),
          });
}
function eW(e) {
    let { guildId: t, location: n, scrollToPowerupCards: r } = e,
        a = { current: null };
    (0, d.B8)(
        (e) => {
            let { closeLayer: s } = e;
            return (
                null == a.current && (a.current = s),
                (0, i.jsx)(ej, {
                    close: s,
                    guildId: t,
                    location: n,
                    registerDismissModalHandler: (e) => {
                        a.current = e;
                    },
                    scrollToPowerupCards: r,
                })
            );
        },
        {
            layerKey: eH,
            onEscape: () =>
                E._.hasSubscribers(F.jej.MODAL_CLOSE)
                    ? (E._.dispatch(F.jej.MODAL_CLOSE), !0)
                    : null != a.current && (a.current(), !0),
        },
    );
}
