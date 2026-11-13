i.d(t, { K4: () => eX });
var s = i(477900),
    n = i(582128),
    r = i(855986),
    a = i(444927),
    l = i(793574),
    o = i(688810),
    c = i(361158),
    d = i(71393),
    u = i(287809),
    m = i(129230),
    g = i(188567),
    T = i(831259),
    E = i(559106),
    h = i(939249),
    _ = i(789645),
    p = i(516521),
    f = i(940456),
    A = i(831617),
    I = i(475669),
    S = i(645619),
    x = i(517352),
    v = i(406810),
    R = i(834730),
    N = i(28863),
    b = i(641436),
    j = i(807098),
    G = i(637706),
    C = i(788883),
    y = i(7667),
    M = i(990854);
function V() {
    let e = (0, b.u)(x.oW.GUILD_BOOST_MARKETING_PAGE_BANNER),
        t = (0, j.T)(e?.surface.asset),
        { countdownText: i, terms: n } = (0, y.A)(e?.promotionId ?? "");
    if (null == e) return null;
    let { surface: r, id: a, promotionId: l, componentType: o } = e,
        c = (0, G.C)(r.helpArticle, ""),
        d = [r.body, n].filter((e) => "" !== e).join(" ");
    return (0, s.jsxs)("div", {
        className: M.kL,
        children: [
            (0, s.jsx)(C.A, { componentType: o, componentId: a, promotionId: l }),
            null != t && "" !== t && (0, s.jsx)("img", { src: t, className: M.LY, alt: "" }),
            (0, s.jsxs)("div", {
                className: M.er,
                children: [
                    null != i &&
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
                                (0, s.jsx)(R.E, { variant: "body-xs/semibold", color: "text-default", children: i }),
                            ],
                        }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(R.E, { variant: "body-md/semibold", color: "text-default", children: r.header }),
                            (0, s.jsxs)(R.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: [
                                    d,
                                    null != c &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                "" !== d && " ",
                                                (0, s.jsx)(N.Anchor, {
                                                    className: M.nf,
                                                    href: c.url,
                                                    children: c.linkText,
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
var P = i(414184),
    U = i(503698),
    O = i.n(U),
    L = i(534514),
    D = i(104510),
    k = i(646514),
    w = i(821609),
    B = i(597770),
    z = i(682163),
    F = i(778705),
    H = i(864310),
    Q = i(338548),
    W = i(178368),
    K = i(448645),
    Y = i(987144),
    J = i(652215),
    Z = i(682901),
    q = i(792996),
    $ = i(673555);
let X = function (e) {
    let { className: t, closeLayer: i, guild: a, onCtaVisibilityChange: l } = e,
        c = n.useRef(null),
        d = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, r.bG)([W.A], () => W.A.boostSlots),
        g = d?.isPremiumGroupMember(),
        { analyticsLocations: E } = (0, o.Ay)(),
        [h, _] = n.useState(!1),
        p = n.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [m, a.id],
        ),
        f = (0, H.A)(e.guild.id).total;
    return (0, s.jsxs)("div", {
        className: O()($.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: $.$R,
                children: [
                    (0, s.jsx)(z.Ay, { className: $.$f, guild: a, size: z.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: $.CR,
                        children: [
                            (0, s.jsx)(L.D, { className: $.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, s.jsxs)("div", {
                                className: $.SJ,
                                children: [
                                    (0, s.jsx)(D.BoostGemIcon, {
                                        color:
                                            f > 0 ? k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: O()($.Me, { [$.S3]: f > 0 }),
                                    }),
                                    (0, s.jsx)(R.E, {
                                        className: $.n,
                                        variant: "body-md/semibold",
                                        children: q.intl.format(q.t["pob/cL"], { subscriptions: f }),
                                    }),
                                ],
                            }),
                            p > 0
                                ? (0, s.jsx)(R.E, {
                                      className: $.EV,
                                      variant: "body-sm/normal",
                                      children: q.intl.format(q.t.Jeto2u, { numSubscriptions: p }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: $.mY,
                children: [
                    (0, s.jsx)("h1", { className: $.R_, children: q.intl.string(q.t.N4sqzL) }),
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
                                        icon: D.BoostGemIcon,
                                        text: q.intl.string(q.t.gKmQ1G),
                                        onClick: async function () {
                                            (_(!0),
                                                await (0, Y.g)({
                                                    analyticsLocations: E,
                                                    analyticsLocation: {
                                                        page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                                                        section: J.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                        object: J.ZSU.BUTTON_CTA,
                                                        objectType: J.btD.BUY,
                                                    },
                                                    guild: a,
                                                    closeLayer: i,
                                                }),
                                                _(!1));
                                        },
                                        loading: h,
                                        disabled: g,
                                    }),
                                }),
                            }),
                            K.Ay.hasFreeBoosts(d) || K.Ay.isPremium(d, Z.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(w.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: B.GiftIcon,
                                      text: q.intl.string(q.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, F.A)({
                                              subscriptionTier: Z.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: E,
                                              analyticsObject: {
                                                  page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: J.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: J.ZSU.BUTTON_ICON,
                                                  objectType: J.btD.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(w.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: q.intl.string(q.t.Q43TvC),
                                      onClick: function () {
                                          (0, F.A)({
                                              initialPlanId: null,
                                              subscriptionTier: Z.pe.TIER_2,
                                              analyticsLocations: E,
                                              analyticsObject: {
                                                  page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: J.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: J.ZSU.BUTTON_ICON,
                                                  objectType: J.btD.BUY,
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
    en = i(676279),
    er = i(432528);
function ea(e) {
    let { className: t } = e,
        i = (0, ei.Ay)(),
        n = (0, et.q)(i),
        r = (0, en.TM)()
            ? n
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : n
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)("div", { className: er.YL }),
            (0, s.jsx)(
                es.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, s.jsx)("source", { src: r }),
                },
                r,
            ),
        ],
    });
}
var el = i(568548),
    eo = i(573650),
    ec = i(149971),
    ed = i(210273),
    eu = i(508155),
    em = i(586428),
    eg = i(381881);
function eT(e) {
    let { tier: t, isActive: i } = e,
        n = t === J.TVA.TIER_1,
        r = t === J.TVA.TIER_3,
        a = t === J.TVA.TIER_1 ? el.v : t === J.TVA.TIER_2 ? eo.w : ec.H;
    return (0, s.jsxs)("div", {
        className: eg.MY,
        children: [
            (0, s.jsx)("div", { className: O()(eg.hr, { [eg.ti]: i, [eg.YO]: !i, [eg.JQ]: n, [eg.Uz]: r }) }),
            (0, s.jsx)("div", {
                className: O()(eg.Zj, {
                    [eg.jv]: i,
                    [eg.ip]: t === J.TVA.TIER_1,
                    [eg.p3]: t === J.TVA.TIER_2,
                    [eg.wF]: t === J.TVA.TIER_3,
                }),
                children: (0, s.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function eE(e) {
    let { guild: t, definition: i } = e,
        { tier: n, perks: r } = i,
        a = t.premiumTier >= n,
        l = J.M2T[n];
    return (0, s.jsxs)("div", {
        className: O()(eg.Nr, { [eg.Bm]: a, [eg.c]: !a }),
        children: [
            (0, s.jsx)(eT, { tier: n, isActive: a }),
            (0, s.jsxs)("div", {
                className: eg.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: eg.$h,
                        children: [
                            (0, s.jsx)(L.D, {
                                className: O()(eg.JJ, { [eg.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: q.intl.string(
                                    n === J.TVA.TIER_1 ? q.t.nzXtaS : n === J.TVA.TIER_2 ? q.t["h33/uW"] : q.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: eg.yC,
                                children: [
                                    (0, s.jsx)(D.BoostGemIcon, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(R.E, {
                                        variant: "body-md/medium",
                                        children: q.intl.format(q.t["pob/cL"], { subscriptions: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eg.PJ,
                        children: [
                            r.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, ed.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: O()(eg.bK, { [eg.o]: !a }),
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
                                children: q.intl.string(em.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: O()(eg.iE, i),
        children: eu.t.map((e) => (0, s.jsx)(eE, { guild: t, definition: e }, e.tier)),
    });
}
var e_ = i(120692),
    ep = i(172218),
    ef = i(717421),
    eA = i(828334),
    eI = i(628284),
    eS = i(805251),
    ex = i(775602),
    ev = i(533993),
    eR = i(363487);
i(321073);
var eN = i(512750),
    eb = i(948134);
i(628049);
var ej = i(568065),
    eG = i(105518);
let eC =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var ey = i(383272);
let eM = new Set([...Array.from(ej.aH), ...Array.from(ej.m_), eN.FB]);
var eV = i(998418),
    eP = i(828162);
i(667532);
var eU = i(975571),
    eO = i(658937);
function eL(e) {
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
            badge: h,
            onClose: _,
        } = e,
        { analyticsLocations: p } = (0, o.Ay)(),
        f = i !== ej.b_.INACTIVE,
        A = (0, eR.A)(t),
        I = (0, r.bG)([ex.Ay], () => ex.Ay.useReducedMotion),
        S = n.useRef(null),
        [x, v] = n.useState(!1),
        [N, b] = n.useState(!1),
        [j, G] = n.useState(!1),
        C = N || j,
        y = n.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, Y.g)({
                    analyticsLocation: {
                        page: J.liQ.GUILD_POWERUPS_MARKETING,
                        section: J.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: p,
                    guild: e,
                });
        }, [t, p]),
        M = n.useCallback(() => {
            (_(), (0, eP.A)(t, l.A.GUILD_POWERUPS_MARKETING, E.skuId));
        }, [t, E.skuId, _]),
        V = { tension: 400, friction: 30 },
        P = (0, ef.z)({ scale: C ? 0.85 : 1, y: C ? -32 : 0, config: V }),
        U = (0, ef.z)({ scale: C ? 0.7 : 1, y: C ? -35 : 0, config: V }),
        B = (0, ef.z)({ y: C ? -32 : 0, config: V }),
        z = (0, ef.z)({ opacity: +!!C, transform: C ? "translateY(0)" : "translateY(16px)", config: V }),
        F = n.useCallback((e) => {
            e && v(!0);
        }, []),
        H = n.useCallback(() => {
            G(!0);
        }, []),
        Q = n.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || G(!1);
        }, []),
        W = (0, ep.K)(F),
        K = "0" === E.skuId;
    return (0, s.jsxs)("div", {
        className: O()(eO.Nr, { [eO.fM]: x }),
        onFocus: H,
        onBlur: Q,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: [
            (0, s.jsx)("div", { className: eO.sL, ref: W }),
            (0, s.jsx)("div", {
                className: eO.kQ,
                children: K
                    ? (0, s.jsx)(e_.animated.div, {
                          className: eO.bm,
                          style: { transform: (0, e_.to)([U.scale, U.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(eA.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: S,
                              fit: "contain",
                              className: eO.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(e_.animated.img, {
                          className: eO.bm,
                          src: C && null != T && "" !== T && !I ? T : g,
                          alt: "",
                          style: { transform: (0, e_.to)([P.scale, P.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(e_.animated.div, {
                style: { ...B, transform: B.y.to((e) => `translateY(${e}px)`) },
                className: eO.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eO.P_,
                        children: [
                            (0, s.jsx)(L.D, { className: eO.DD, variant: "heading-lg/semibold", children: a }),
                            (0, s.jsx)(R.E, { className: eO.h_, variant: "body-md/medium", children: c }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eO.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eO.qS,
                                children: [
                                    (0, s.jsx)(D.BoostGemIcon, {
                                        size: "xs",
                                        color: k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, s.jsx)(R.E, {
                                        className: eO.Vv,
                                        variant: "body-sm/semibold",
                                        children: q.intl.formatToPlainString(
                                            null != m ? eG.default["G/aTXi"] : eG.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            f &&
                                (0, s.jsxs)("div", {
                                    className: O()(eO.qS, eO.nt),
                                    children: [
                                        (0, s.jsx)(eI.CircleCheckIcon, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(R.E, {
                                            className: eO.nt,
                                            variant: "body-sm/semibold",
                                            children: q.intl.string(q.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(e_.animated.div, {
                style: z,
                className: eO.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eO.x6,
                        children: (0, s.jsx)(w.$, {
                            variant: "primary",
                            text: q.intl.string(q.t.oPAx73),
                            onClick: y,
                            fullWidth: !0,
                        }),
                    }),
                    A &&
                        (0, s.jsx)("div", {
                            className: eO.x6,
                            children: (0, s.jsx)(w.$, {
                                variant: "secondary",
                                text: q.intl.string(q.t.GoCQxU),
                                onClick: M,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === h &&
                (0, s.jsx)("div", {
                    className: eO.AP,
                    children: (0, s.jsx)(eS.E, { type: "new", variant: "primary" }),
                }),
            "beta" === h &&
                (0, s.jsx)("div", {
                    className: eO.AP,
                    children: (0, s.jsx)(eS.E, { type: "beta", variant: "primary" }),
                }),
        ],
    });
}
function eD(e) {
    let { guildId: t, powerup: i, costDecorator: n, badge: r, onClose: a } = e,
        l = (0, eV.Ay)(t, i).type;
    return (0, s.jsx)(eL, {
        guildId: t,
        activeStatus: l,
        title: i.title,
        description: i.description,
        cost: i.cost,
        staticImageUrl: i.staticImageUrl,
        animatedImageUrl: i.animatedImageUrl,
        powerup: i,
        costDecorator: n,
        badge: r,
        onClose: a,
    });
}
let ek = new Map([["0", "+"]]);
function ew(e) {
    var t;
    let i,
        a,
        l,
        o,
        { guild: c, onClose: d, ref: u } = e;
    n.useEffect(() => {
        (S.A.shouldFetchCatalogForGuild(c.id) && (0, ev.AK)(c.id),
            S.A.shouldFetchPowerupsForGuild(c.id) && (0, ev.Xd)(c.id));
    }, [c.id]);
    let m = (function (e) {
        let t = [...e].reverse(),
            i = t.findIndex((e) => e.skuId === eN.d0);
        if (i > 0) {
            let [e] = t.splice(i, 1);
            t.unshift(e);
        }
        let s = t.findIndex((e) => "0" === e.skuId);
        if (-1 !== s && s !== t.length - 1) {
            let [e] = t.splice(s, 1);
            t.push(e);
        }
        return t;
    })(
        ((t = c.id),
        (i = (0, r.bG)([S.A], () => S.A.getStateForGuild(t)?.powerupCatalog?.[ej.o9.PERK])),
        (a = (function (e) {
            let t = (0, A.C$)(e, "useGameServerPerk"),
                i = (0, r.bG)([I.A], () => I.A.getLowestGameCostForGuild(e)),
                { gameName: s, gameName2: a } = (0, eb.A)();
            return n.useMemo(
                () =>
                    t && null != i
                        ? {
                              skuId: "0",
                              title: q.intl.string(eG.default["B3OfL/"]),
                              description: q.intl.format(eG.default["+UqyGU"], { gameName: s, gameName2: a }),
                              cost: i,
                              dependencies: [],
                              type: ej.o9.PERK,
                              animatedImageUrl: eC,
                              staticImageUrl: eC,
                          }
                        : null,
                [t, i, s, a],
            );
        })(t)),
        (l = (0, ey.lY)(t, "useMarketablePowerupPerks")),
        (o = n.useMemo(() => {
            let e = new Set(eM);
            return (l && e.add(eN.d0), e);
        }, [l])),
        n.useMemo(() => {
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
                          (0, s.jsx)(L.D, {
                              className: eO.R_,
                              variant: "heading-xxl/semibold",
                              children: q.intl.string(em.default.wjI18Q),
                          }),
                          (0, s.jsx)(R.E, {
                              className: eO.fV,
                              variant: "body-md/medium",
                              children: q.intl.format(em.default.S562fn, {
                                  helpDeskArticle: eU.A.getArticleURL(J.MVz.GUILD_BOOSTING_FAQ),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: eO.vY,
                      children: m.map((e) =>
                          (0, s.jsx)(
                              eD,
                              {
                                  guildId: c.id,
                                  powerup: e,
                                  costDecorator: ek.get(e.skuId),
                                  badge: ej.ys[e.skuId],
                                  onClose: d,
                              },
                              `perk-card-${e.skuId}`,
                          ),
                      ),
                  }),
              ],
          });
}
ew.displayName = "GuildBoostingMarketingPerkCards";
var eB = i(527113),
    ez = i(862482),
    eF = i(944304),
    eH = i(430815);
let eQ = function (e) {
    let { closeLayer: t, guild: i, isVisible: r } = e,
        a = n.useRef(null),
        l = (0, ef.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(e_.animated.div, {
        className: eH.iE,
        style: l,
        children: (0, s.jsx)("div", {
            ref: a,
            className: eH.iJ,
            children: (0, s.jsxs)(E.xp, {
                containerRef: a,
                children: [
                    (0, s.jsxs)("div", {
                        className: eH.OA,
                        children: [
                            (0, s.jsx)(z.Ay, { className: eH.$f, guild: i, size: z.Ay.Sizes.SMALL }),
                            (0, s.jsx)(R.E, { className: eH.J5, variant: "body-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eF.A, {
                        className: eH.lI,
                        guild: i,
                        analyticsLocation: {
                            page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: J.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: J.ZSU.BUTTON_CTA,
                            objectType: J.btD.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !r,
                        size: ez.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eW = i(192308),
    eK = i(65154),
    eY = i(149881),
    eJ = i(519636);
function eZ(e) {
    let { guild: t, analyticsLocation: r, videoPlacement: a, sourceAnalyticsLocations: l } = e,
        o = n.useCallback(() => {
            (0, eW.mM)(async () => {
                let { default: e } = await Promise.all([
                    i.e(985768),
                    i.e(476662),
                    i.e(447505),
                    i.e(188259),
                    i.e(253044),
                    i.e(311913),
                    i.e(881717),
                    i.e(734818),
                    i.e(936090),
                    i.e(601031),
                    i.e(363269),
                    i.e(474172),
                    i.e(489218),
                    i.e(912875),
                    i.e(55348),
                    i.e(862782),
                    i.e(110116),
                    i.e(490028),
                    i.e(809915),
                    i.e(710911),
                    i.e(967288),
                    i.e(674783),
                    i.e(491279),
                    i.e(398793),
                    i.e(592731),
                    i.e(53374),
                    i.e(482815),
                    i.e(56021),
                    i.e(170653),
                    i.e(791154),
                    i.e(817852),
                    i.e(133179),
                    i.e(614784),
                    i.e(555793),
                    i.e(271244),
                    i.e(912773),
                    i.e(796867),
                    i.e(25829),
                ]).then(i.bind(i, 235780));
                return (i) =>
                    (0, s.jsx)(e, {
                        ...i,
                        guildId: t.id,
                        analyticsLocation: r,
                        videoPlacement: a,
                        sourceAnalyticsLocations: l,
                    });
            });
        }, [r, t.id, l, a]);
    return (0, s.jsxs)(h.D, {
        className: eY.kL,
        onClick: o,
        "aria-label": q.intl.string(em.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: eY.xn, src: eJ.A }),
            (0, s.jsx)("div", { className: eY.Lw }),
            (0, s.jsx)("div", {
                className: eY.Rr,
                children: (0, s.jsx)(eK.CirclePlayIcon, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eq(e) {
    let { analyticsLocation: t, guild: i, onClose: a, scrollToPowerupCards: l } = e,
        [c, d] = n.useState(!0),
        u = n.useRef(!1),
        { analyticsLocations: g } = (0, o.Ay)(),
        x = n.useRef(null),
        v = n.useRef(null),
        R = n.useRef(null),
        N = n.useRef(null),
        b = n.useCallback(() => {
            a?.();
        }, [a]),
        j = n.useCallback(() => {
            null != R.current &&
                null != v.current &&
                v.current.scrollIntoViewNode({ node: R.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        G = n.useCallback(
            (e) => {
                e &&
                    !u.current &&
                    (m.default.track(J.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: J.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: g,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: i.id,
                    }),
                    (u.current = !0));
            },
            [t, g, i.id],
        );
    n.useEffect(() => {
        m.default.track(J.HAw.OPEN_MODAL, {
            type: J.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: g,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, g]);
    let C = (0, A.C$)(i.id, "GuildBoostingMarketingRefresh"),
        y = (0, r.bG)([I.A], () => I.A.shouldFetchCatalogForGuild(i.id));
    n.useEffect(() => {
        C && y && (0, f.z9)(i.id);
    }, [i.id, C, y]);
    let M = (0, r.bG)([S.A], () => S.A.hasFetchedPowerupCatalog(i.id));
    return (
        n.useEffect(() => {
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
                        className: er.Yk,
                        children: (0, s.jsx)(E.xp, {
                            containerRef: N,
                            children: (0, s.jsx)(h.D, {
                                className: er.b,
                                onClick: b,
                                "aria-label": q.intl.string(q.t.cpT0Cq),
                                children: (0, s.jsx)(_.XSmallIcon, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, s.jsxs)(p.Gt, {
                    ref: v,
                    className: er.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: er.wx,
                            children: [
                                (0, s.jsx)(ea, { className: er.y2 }),
                                (0, s.jsxs)("div", {
                                    className: er.AZ,
                                    children: [
                                        (0, s.jsx)(X, {
                                            guild: i,
                                            closeLayer: b,
                                            onCtaVisibilityChange: d,
                                            className: er.Oh,
                                        }),
                                        (0, s.jsx)(V, {}),
                                        (0, s.jsx)(eZ, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: g,
                                        }),
                                        (0, s.jsx)(eh, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: er.uE,
                            children: (0, s.jsx)(ew, { ref: R, guild: e.guild, onClose: b }),
                        }),
                        (0, s.jsx)("div", {
                            className: er.o6,
                            children: (0, s.jsxs)("div", {
                                className: er.y$,
                                children: [
                                    (0, s.jsx)(eB.A, { className: er.Q, guild: i }),
                                    (0, s.jsx)(P.A, {}),
                                    (0, s.jsx)(ee.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(T.L, {
                            innerRef: x,
                            onChange: G,
                            children: (0, s.jsx)("div", { ref: x, className: er.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(eQ, { guild: i, isVisible: !c, closeLayer: b }),
            ],
        })
    );
}
function e$(e) {
    let { guildId: t, close: i, location: c, registerDismissModalHandler: g, scrollToPowerupCards: T } = e,
        E = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        h = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        _ = (0, a.A)(() => Date.now()),
        { analyticsLocations: p } = (0, o.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
        f = h?.id,
        A = n.useCallback(() => {
            (i(),
                null != f &&
                    m.default.track(J.HAw.MODAL_DISMISSED, {
                        type: J.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: p,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: f,
                        duration_open_ms: Date.now() - _,
                    }));
        }, [p, _, c.object, c.section, i, f]);
    return (n.useLayoutEffect(() => {
        g?.(A);
    }, [A, g]),
    null == E || null == h)
        ? null
        : (0, s.jsx)(o.f5, {
              value: p,
              children: (0, s.jsx)(eq, { analyticsLocation: c, onClose: A, guild: h, scrollToPowerupCards: T }),
          });
}
function eX(e) {
    let { guildId: t, location: i, scrollToPowerupCards: n } = e,
        r = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == r.current && (r.current = a),
                (0, s.jsx)(e$, {
                    close: a,
                    guildId: t,
                    location: i,
                    registerDismissModalHandler: (e) => {
                        r.current = e;
                    },
                    scrollToPowerupCards: n,
                })
            );
        },
        {
            layerKey: "BoostedGuildPerksModalConnected",
            onEscape: () =>
                g._.hasSubscribers(J.jej.MODAL_CLOSE)
                    ? (g._.dispatch(J.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
