i.d(t, { K4: () => e0 });
var s = i(477900),
    r = i(582128),
    n = i(17928),
    a = i(444927),
    l = i(793574),
    o = i(688810),
    c = i(361158),
    d = i(71393),
    u = i(287809),
    m = i(174459),
    g = i(625494),
    T = i(269115),
    E = i(559106),
    _ = i(939249),
    p = i(789645),
    h = i(689175),
    f = i(498480),
    A = i(831617),
    S = i(475669),
    I = i(645619),
    x = i(877624),
    v = i(406810),
    R = i(834730),
    N = i(28863),
    b = i(549996),
    j = i(807098),
    G = i(637706),
    C = i(788883),
    y = i(7667),
    M = i(990854);
function P() {
    let e = (0, b.c)(x.C.GUILD_BOOST_MARKETING_PAGE_BANNER),
        t =
            null != e && "guildBoostMarketingPageBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.guildBoostMarketingPageBanner
                : null,
        i = (0, j.T)(t?.asset),
        { countdownText: r, terms: n } = (0, y.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let a = (0, G.C)(t.helpArticle, ""),
        l = [t.body, n].filter((e) => "" !== e).join(" ");
    return (0, s.jsxs)("div", {
        className: M.kL,
        children: [
            (0, s.jsx)(C.A, {
                componentType: x.C.GUILD_BOOST_MARKETING_PAGE_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != i && "" !== i && (0, s.jsx)("img", { src: i, className: M.LY, alt: "" }),
            (0, s.jsxs)("div", {
                className: M.er,
                children: [
                    null != r &&
                        (0, s.jsxs)("div", {
                            className: M.qW,
                            children: [
                                (0, s.jsx)(v.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: M.y,
                                }),
                                (0, s.jsx)(R.E, { variant: "body-xs/semibold", color: "text-default", children: r }),
                            ],
                        }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(R.E, { variant: "body-md/semibold", color: "text-default", children: t.header }),
                            (0, s.jsxs)(R.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: [
                                    l,
                                    null != a &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                "" !== l && " ",
                                                (0, s.jsx)(N.Anchor, {
                                                    className: M.nf,
                                                    href: a.url,
                                                    children: a.linkText,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var V = i(333722),
    U = i(503698),
    L = i.n(U),
    O = i(534514),
    D = i(104510),
    k = i(661531),
    w = i(821609),
    B = i(597770),
    z = i(548118),
    F = i(75678),
    H = i(864310),
    Q = i(338548),
    W = i(178368),
    K = i(24482),
    Y = i(987144),
    q = i(652215),
    J = i(202541),
    Z = i(105292),
    $ = i(673555);
let X = function (e) {
    let { className: t, closeLayer: i, guild: a, onCtaVisibilityChange: l } = e,
        c = r.useRef(null),
        d = (0, n.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, n.bG)([W.A], () => W.A.boostSlots),
        g = d?.isPremiumGroupMember(),
        { analyticsLocations: E } = (0, o.Ay)(),
        [_, p] = r.useState(!1),
        h = r.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [m, a.id],
        ),
        f = (0, H.A)(e.guild.id).total;
    async function A() {
        (p(!0),
            await (0, Y.g)({
                analyticsLocations: E,
                analyticsLocation: {
                    page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: q.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: q.ZSU.BUTTON_CTA,
                    objectType: q.btD.BUY,
                },
                guild: a,
                closeLayer: i,
            }),
            p(!1));
    }
    return (0, s.jsxs)("div", {
        className: L()($.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: $.$R,
                children: [
                    (0, s.jsx)(z.Ay, { className: $.$f, guild: a, size: z.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: $.CR,
                        children: [
                            (0, s.jsx)(O.D, { className: $.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, s.jsxs)("div", {
                                className: $.SJ,
                                children: [
                                    (0, s.jsx)(D._, {
                                        color:
                                            f > 0 ? k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: L()($.Me, { [$.S3]: f > 0 }),
                                    }),
                                    (0, s.jsx)(R.E, {
                                        className: $.n,
                                        variant: "body-md/semibold",
                                        children: Z.intl.format(Z.t["pob/cL"], { subscriptions: f }),
                                    }),
                                ],
                            }),
                            h > 0
                                ? (0, s.jsx)(R.E, {
                                      className: $.EV,
                                      variant: "body-sm/normal",
                                      children: Z.intl.format(Z.t.Jeto2u, { numSubscriptions: h }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: $.mY,
                children: [
                    (0, s.jsx)("h1", { className: $.R_, children: Z.intl.string(Z.t.N4sqzL) }),
                    g ? (0, s.jsx)(Q.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: $.Sq,
                        children: [
                            (0, s.jsx)(T.L, {
                                innerRef: c,
                                onChange: l,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: c,
                                    className: $.dp,
                                    children: (0, s.jsx)(w.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: D._,
                                        text: Z.intl.string(Z.t.gKmQ1G),
                                        onClick: A,
                                        loading: _,
                                        disabled: g,
                                    }),
                                }),
                            }),
                            K.Ay.hasFreeBoosts(d) || K.Ay.isPremium(d, J.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(w.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: B.GiftIcon,
                                      text: Z.intl.string(Z.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, F.A)({
                                              subscriptionTier: J.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: E,
                                              analyticsObject: {
                                                  page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: q.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: q.ZSU.BUTTON_ICON,
                                                  objectType: q.btD.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(w.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: Z.intl.string(Z.t.Q43TvC),
                                      onClick: function () {
                                          (0, F.A)({
                                              initialPlanId: null,
                                              subscriptionTier: J.pe.TIER_2,
                                              analyticsLocations: E,
                                              analyticsObject: {
                                                  page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: q.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: q.ZSU.BUTTON_ICON,
                                                  objectType: q.btD.BUY,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                      disabled: g,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var ee = i(232122),
    et = i(366010),
    ei = i(736653),
    es = i(303136),
    er = i(676279),
    en = i(432528);
function ea(e) {
    let { className: t } = e,
        i = (0, ei.Ay)(),
        r = (0, et.q)(i),
        n = (0, er.TM)()
            ? r
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : r
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)("div", { className: en.YL }),
            (0, s.jsx)(
                es.A,
                {
                    fallbackImage: r
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, s.jsx)("source", { src: n }),
                },
                n,
            ),
        ],
    });
}
var el = i(64051),
    eo = i(972919),
    ec = i(724677),
    ed = i(210273),
    eu = i(508155),
    em = i(959456),
    eg = i(381881);
function eT(e) {
    let { tier: t, isActive: i } = e,
        r = t === q.TVA.TIER_1,
        n = t === q.TVA.TIER_3,
        a = t === q.TVA.TIER_1 ? el.v : t === q.TVA.TIER_2 ? eo.w : ec.H;
    return (0, s.jsxs)("div", {
        className: eg.MY,
        children: [
            (0, s.jsx)("div", { className: L()(eg.hr, { [eg.ti]: i, [eg.YO]: !i, [eg.JQ]: r, [eg.Uz]: n }) }),
            (0, s.jsx)("div", {
                className: L()(eg.Zj, {
                    [eg.jv]: i,
                    [eg.ip]: t === q.TVA.TIER_1,
                    [eg.p3]: t === q.TVA.TIER_2,
                    [eg.wF]: t === q.TVA.TIER_3,
                }),
                children: (0, s.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function eE(e) {
    let { guild: t, definition: i } = e,
        { tier: r, perks: n } = i,
        a = t.premiumTier >= r,
        l = q.M2T[r];
    return (0, s.jsxs)("div", {
        className: L()(eg.Nr, { [eg.Bm]: a, [eg.c]: !a }),
        children: [
            (0, s.jsx)(eT, { tier: r, isActive: a }),
            (0, s.jsxs)("div", {
                className: eg.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: eg.$h,
                        children: [
                            (0, s.jsx)(O.D, {
                                className: L()(eg.JJ, { [eg.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: Z.intl.string(
                                    r === q.TVA.TIER_1 ? Z.t.nzXtaS : r === q.TVA.TIER_2 ? Z.t["h33/uW"] : Z.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: eg.yC,
                                children: [
                                    (0, s.jsx)(D._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(R.E, {
                                        variant: "body-md/medium",
                                        children: Z.intl.format(Z.t["pob/cL"], { subscriptions: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eg.PJ,
                        children: [
                            n.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, ed.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: L()(eg.bK, { [eg.o]: !a }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: eg.kf,
                                                color: a ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, s.jsx)(R.E, {
                                                variant: "body-md/medium",
                                                color: a ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, s.jsx)(R.E, {
                                className: eg.wx,
                                variant: "body-md/medium",
                                children: Z.intl.string(em.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: L()(eg.iE, i),
        children: eu.t.map((e) => (0, s.jsx)(eE, { guild: t, definition: e }, e.tier)),
    });
}
var ep = i(29477),
    eh = i(172218),
    ef = i(717421),
    eA = i(289704),
    eS = i(628284),
    eI = i(62010),
    ex = i(775602),
    ev = i(868652),
    eR = i(363487);
i(321073);
var eN = i(512750),
    eb = i(948134),
    ej = i(628049),
    eG = i(568065),
    eC = i(135570);
let ey =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var eM = i(383272);
let eP = new Set([...Array.from(eG.aH), ...Array.from(eG.m_), eN.FB]);
var eV = i(998418),
    eU = i(828162);
i(667532);
var eL = i(975571),
    eO = i(658937);
function eD(e) {
    let {
            guildId: t,
            activeStatus: i,
            title: a,
            description: c,
            cost: u,
            costDecorator: m,
            staticImageUrl: g,
            animatedImageUrl: T,
            powerup: E,
            badge: _,
            onClose: p,
        } = e,
        { analyticsLocations: h } = (0, o.Ay)(),
        f = i !== eG.b_.INACTIVE,
        A = (0, eR.A)(t),
        S = (0, n.bG)([ex.Ay], () => ex.Ay.useReducedMotion),
        I = r.useRef(null),
        [x, v] = r.useState(!1),
        [N, b] = r.useState(!1),
        [j, G] = r.useState(!1),
        C = N || j,
        y = r.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, Y.g)({
                    analyticsLocation: {
                        page: q.liQ.GUILD_POWERUPS_MARKETING,
                        section: q.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: h,
                    guild: e,
                });
        }, [t, h]),
        M = r.useCallback(() => {
            (p(), (0, eU.A)(t, l.A.GUILD_POWERUPS_MARKETING, E.skuId));
        }, [t, E.skuId, p]),
        P = { tension: 400, friction: 30 },
        V = (0, ef.z)({ scale: C ? 0.85 : 1, y: C ? -32 : 0, config: P }),
        U = (0, ef.z)({ scale: C ? 0.7 : 1, y: C ? -35 : 0, config: P }),
        B = (0, ef.z)({ y: C ? -32 : 0, config: P }),
        z = (0, ef.z)({ opacity: +!!C, transform: C ? "translateY(0)" : "translateY(16px)", config: P }),
        F = r.useCallback((e) => {
            e && v(!0);
        }, []),
        H = r.useCallback(() => {
            G(!0);
        }, []),
        Q = r.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || G(!1);
        }, []),
        W = (0, eh.K)(F),
        K = E.skuId === ej.W5;
    return (0, s.jsxs)("div", {
        className: L()(eO.Nr, { [eO.fM]: x }),
        onFocus: H,
        onBlur: Q,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: [
            (0, s.jsx)("div", { className: eO.sL, ref: W }),
            (0, s.jsx)("div", {
                className: eO.kQ,
                children: K
                    ? (0, s.jsx)(ep.animated.div, {
                          className: eO.bm,
                          style: { transform: (0, ep.to)([U.scale, U.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(eA.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: I,
                              fit: "contain",
                              className: eO.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(ep.animated.img, {
                          className: eO.bm,
                          src: C && null != T && "" !== T && !S ? T : g,
                          alt: "",
                          style: { transform: (0, ep.to)([V.scale, V.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(ep.animated.div, {
                style: { ...B, transform: B.y.to((e) => `translateY(${e}px)`) },
                className: eO.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eO.P_,
                        children: [
                            (0, s.jsx)(O.D, { className: eO.DD, variant: "heading-lg/semibold", children: a }),
                            (0, s.jsx)(R.E, { className: eO.h_, variant: "body-md/medium", children: c }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eO.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eO.qS,
                                children: [
                                    (0, s.jsx)(D._, {
                                        size: "xs",
                                        color: k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, s.jsx)(R.E, {
                                        className: eO.Vv,
                                        variant: "body-sm/semibold",
                                        children: Z.intl.formatToPlainString(
                                            null != m ? eC.default["G/aTXi"] : eC.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            f &&
                                (0, s.jsxs)("div", {
                                    className: L()(eO.qS, eO.nt),
                                    children: [
                                        (0, s.jsx)(eS.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(R.E, {
                                            className: eO.nt,
                                            variant: "body-sm/semibold",
                                            children: Z.intl.string(Z.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(ep.animated.div, {
                style: z,
                className: eO.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eO.x6,
                        children: (0, s.jsx)(w.$, {
                            variant: "primary",
                            text: Z.intl.string(Z.t.oPAx73),
                            onClick: y,
                            fullWidth: !0,
                        }),
                    }),
                    A &&
                        (0, s.jsx)("div", {
                            className: eO.x6,
                            children: (0, s.jsx)(w.$, {
                                variant: "secondary",
                                text: Z.intl.string(Z.t.GoCQxU),
                                onClick: M,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === _ &&
                (0, s.jsx)("div", {
                    className: eO.AP,
                    children: (0, s.jsx)(eI.E, { type: "new", variant: "primary" }),
                }),
            "beta" === _ &&
                (0, s.jsx)("div", {
                    className: eO.AP,
                    children: (0, s.jsx)(eI.E, { type: "beta", variant: "primary" }),
                }),
        ],
    });
}
function ek(e) {
    let { guildId: t, powerup: i, costDecorator: r, badge: n, onClose: a } = e,
        l = (0, eV.Ay)(t, i).type;
    return (0, s.jsx)(eD, {
        guildId: t,
        activeStatus: l,
        title: i.title,
        description: i.description,
        cost: i.cost,
        staticImageUrl: i.staticImageUrl,
        animatedImageUrl: i.animatedImageUrl,
        powerup: i,
        costDecorator: r,
        badge: n,
        onClose: a,
    });
}
let ew = new Map([[ej.W5, "+"]]);
function eB(e) {
    var t;
    let i,
        a,
        l,
        o,
        { guild: c, onClose: d, ref: u } = e;
    r.useEffect(() => {
        (I.A.shouldFetchCatalogForGuild(c.id) && (0, ev.AK)(c.id),
            I.A.shouldFetchPowerupsForGuild(c.id) && (0, ev.Xd)(c.id));
    }, [c.id]);
    let m = (function (e) {
        let t = [...e].reverse(),
            i = t.findIndex((e) => e.skuId === eN.d0);
        if (i > 0) {
            let [e] = t.splice(i, 1);
            t.unshift(e);
        }
        let s = t.findIndex((e) => e.skuId === ej.W5);
        if (-1 !== s && s !== t.length - 1) {
            let [e] = t.splice(s, 1);
            t.push(e);
        }
        return t;
    })(
        ((t = c.id),
        (i = (0, n.bG)([I.A], () => I.A.getStateForGuild(t)?.powerupCatalog?.[eG.o9.PERK])),
        (a = (function (e) {
            let t = (0, A.C$)(e, "useGameServerPerk"),
                i = (0, n.bG)([S.A], () => S.A.getLowestGameCostForGuild(e)),
                { gameName: s, gameName2: a } = (0, eb.A)();
            return r.useMemo(
                () =>
                    t && null != i
                        ? {
                              skuId: ej.W5,
                              title: Z.intl.string(eC.default["B3OfL/"]),
                              description: Z.intl.format(eC.default["+UqyGU"], { gameName: s, gameName2: a }),
                              cost: i,
                              dependencies: [],
                              type: eG.o9.PERK,
                              animatedImageUrl: ey,
                              staticImageUrl: ey,
                          }
                        : null,
                [t, i, s, a],
            );
        })(t)),
        (l = (0, eM.lY)(t, "useMarketablePowerupPerks")),
        (o = r.useMemo(() => {
            let e = new Set(eP);
            return (l && e.add(eN.d0), e);
        }, [l])),
        r.useMemo(() => {
            let e = [...(i ?? [])];
            return (null != a && e.push(a), e.filter((e) => !o.has(e.skuId)));
        }, [i, a, o]) ?? []),
    ).slice(0, 6);
    return 0 === m.length
        ? null
        : (0, s.jsxs)("div", {
              ref: u,
              className: eO.iE,
              children: [
                  (0, s.jsxs)("div", {
                      className: eO.ND,
                      children: [
                          (0, s.jsx)(O.D, {
                              className: eO.R_,
                              variant: "heading-xxl/semibold",
                              children: Z.intl.string(em.default.wjI18Q),
                          }),
                          (0, s.jsx)(R.E, {
                              className: eO.fV,
                              variant: "body-md/medium",
                              children: Z.intl.format(em.default.S562fn, {
                                  helpDeskArticle: eL.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: eO.vY,
                      children: m.map((e) =>
                          (0, s.jsx)(
                              ek,
                              {
                                  guildId: c.id,
                                  powerup: e,
                                  costDecorator: ew.get(e.skuId),
                                  badge: eG.ys[e.skuId],
                                  onClose: d,
                              },
                              `perk-card-${e.skuId}`,
                          ),
                      ),
                  }),
              ],
          });
}
eB.displayName = "GuildBoostingMarketingPerkCards";
var ez = i(527113),
    eF = i(862482),
    eH = i(944304),
    eQ = i(430815);
let eW = function (e) {
    let { closeLayer: t, guild: i, isVisible: n } = e,
        a = r.useRef(null),
        l = (0, ef.z)({
            transform: n ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(ep.animated.div, {
        className: eQ.iE,
        style: l,
        children: (0, s.jsx)("div", {
            ref: a,
            className: eQ.iJ,
            children: (0, s.jsxs)(E.xp, {
                containerRef: a,
                children: [
                    (0, s.jsxs)("div", {
                        className: eQ.OA,
                        children: [
                            (0, s.jsx)(z.Ay, { className: eQ.$f, guild: i, size: z.Ay.Sizes.SMALL }),
                            (0, s.jsx)(R.E, { className: eQ.J5, variant: "body-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eH.A, {
                        className: eQ.lI,
                        guild: i,
                        analyticsLocation: {
                            page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: q.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: q.ZSU.BUTTON_CTA,
                            objectType: q.btD.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !n,
                        size: eF.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eK = i(192308),
    eY = i(65154),
    eq = i(149881),
    eJ = i(519636);
function eZ(e) {
    let { guild: t, analyticsLocation: n, videoPlacement: a, sourceAnalyticsLocations: l } = e,
        o = r.useCallback(() => {
            (0, eK.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    i.e("245420"),
                    i.e("936090"),
                    i.e("601031"),
                    i.e("110116"),
                    i.e("809915"),
                    i.e("508699"),
                    i.e("398793"),
                    i.e("592731"),
                    i.e("53374"),
                    i.e("482815"),
                    i.e("56021"),
                    i.e("170653"),
                    i.e("817852"),
                    i.e("133179"),
                    i.e("614784"),
                    i.e("275702"),
                    i.e("912773"),
                    i.e("710638"),
                    i.e("585810"),
                ]).then(i.bind(i, 872233));
                return (i) =>
                    (0, s.jsx)(e, {
                        ...i,
                        guildId: t.id,
                        analyticsLocation: n,
                        videoPlacement: a,
                        sourceAnalyticsLocations: l,
                    });
            });
        }, [n, t.id, l, a]);
    return (0, s.jsxs)(_.D, {
        className: eq.kL,
        onClick: o,
        "aria-label": Z.intl.string(em.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: eq.xn, src: eJ.A }),
            (0, s.jsx)("div", { className: eq.Lw }),
            (0, s.jsx)("div", {
                className: eq.Rr,
                children: (0, s.jsx)(eY.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function e$(e) {
    let { analyticsLocation: t, guild: i, onClose: a, scrollToPowerupCards: l } = e,
        [c, d] = r.useState(!0),
        u = r.useRef(!1),
        { analyticsLocations: g } = (0, o.Ay)(),
        x = r.useRef(null),
        v = r.useRef(null),
        R = r.useRef(null),
        N = r.useRef(null),
        b = r.useCallback(() => {
            a?.();
        }, [a]),
        j = r.useCallback(() => {
            null != R.current &&
                null != v.current &&
                v.current.scrollIntoViewNode({ node: R.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        G = r.useCallback(
            (e) => {
                e &&
                    !u.current &&
                    (m.default.track(q.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: q.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: g,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: i.id,
                    }),
                    (u.current = !0));
            },
            [t, g, i.id],
        );
    r.useEffect(() => {
        m.default.track(q.HAw.OPEN_MODAL, {
            type: q.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: g,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, g]);
    let C = (0, A.C$)(i.id, "GuildBoostingMarketingRefresh"),
        y = (0, n.bG)([S.A], () => S.A.shouldFetchCatalogForGuild(i.id));
    r.useEffect(() => {
        C && y && (0, f.z9)(i.id);
    }, [i.id, C, y]);
    let M = (0, n.bG)([I.A], () => I.A.hasFetchedPowerupCatalog(i.id));
    return (
        r.useEffect(() => {
            if (l && M) {
                let e = setTimeout(() => {
                    j();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [l, j, M]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                null != a &&
                    (0, s.jsx)("div", {
                        ref: N,
                        className: en.Yk,
                        children: (0, s.jsx)(E.xp, {
                            containerRef: N,
                            children: (0, s.jsx)(_.D, {
                                className: en.b,
                                onClick: b,
                                "aria-label": Z.intl.string(Z.t.cpT0Cq),
                                children: (0, s.jsx)(p.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, s.jsxs)(h.Gt, {
                    ref: v,
                    className: en.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: en.wx,
                            children: [
                                (0, s.jsx)(ea, { className: en.y2 }),
                                (0, s.jsxs)("div", {
                                    className: en.AZ,
                                    children: [
                                        (0, s.jsx)(X, {
                                            guild: i,
                                            closeLayer: b,
                                            onCtaVisibilityChange: d,
                                            className: en.Oh,
                                        }),
                                        (0, s.jsx)(P, {}),
                                        (0, s.jsx)(eZ, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: g,
                                        }),
                                        (0, s.jsx)(e_, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: en.uE,
                            children: (0, s.jsx)(eB, { ref: R, guild: e.guild, onClose: b }),
                        }),
                        (0, s.jsx)("div", {
                            className: en.o6,
                            children: (0, s.jsxs)("div", {
                                className: en.y$,
                                children: [
                                    (0, s.jsx)(ez.A, { className: en.Q, guild: i }),
                                    (0, s.jsx)(V.A, {}),
                                    (0, s.jsx)(ee.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(T.L, {
                            innerRef: x,
                            onChange: G,
                            children: (0, s.jsx)("div", { ref: x, className: en.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(eW, { guild: i, isVisible: !c, closeLayer: b }),
            ],
        })
    );
}
function eX(e) {
    let { guildId: t, close: i, location: c, registerDismissModalHandler: g, scrollToPowerupCards: T } = e,
        E = (0, n.bG)([u.default], () => u.default.getCurrentUser()),
        _ = (0, n.bG)([d.A], () => d.A.getGuild(t), [t]),
        p = (0, a.A)(() => Date.now()),
        { analyticsLocations: h } = (0, o.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
        f = _?.id,
        A = r.useCallback(() => {
            (i(),
                null != f &&
                    m.default.track(q.HAw.MODAL_DISMISSED, {
                        type: q.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: h,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: f,
                        duration_open_ms: Date.now() - p,
                    }));
        }, [h, p, c.object, c.section, i, f]);
    return (r.useLayoutEffect(() => {
        g?.(A);
    }, [A, g]),
    null == E || null == _)
        ? null
        : (0, s.jsx)(o.f5, {
              value: h,
              children: (0, s.jsx)(e$, { analyticsLocation: c, onClose: A, guild: _, scrollToPowerupCards: T }),
          });
}
function e0(e) {
    let { guildId: t, location: i, scrollToPowerupCards: r } = e,
        n = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == n.current && (n.current = a),
                (0, s.jsx)(eX, {
                    close: a,
                    guildId: t,
                    location: i,
                    registerDismissModalHandler: (e) => {
                        n.current = e;
                    },
                    scrollToPowerupCards: r,
                })
            );
        },
        {
            layerKey: "BoostedGuildPerksModalConnected",
            onEscape: () =>
                g._.hasSubscribers(q.jej.MODAL_CLOSE)
                    ? (g._.dispatch(q.jej.MODAL_CLOSE), !0)
                    : null != n.current && (n.current(), !0),
        },
    );
}
