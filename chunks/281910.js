n.d(t, { A: () => eG });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(269115),
    a = n(187322),
    o = n(939249),
    c = n(789645),
    d = n(689175),
    u = n(688810),
    m = n(396748),
    h = n(488803),
    g = n(522055),
    f = n(645619),
    x = n(174459),
    p = n(917064),
    A = n(503698),
    E = n.n(A),
    _ = n(534514),
    j = n(104510),
    N = n(661531),
    T = n(834730),
    v = n(821609),
    I = n(597770),
    C = n(548118),
    S = n(532794),
    b = n(864310),
    y = n(338548),
    R = n(287809),
    L = n(178368),
    O = n(428262),
    k = n(987144),
    P = n(652215),
    G = n(788868),
    V = n(375708),
    w = n(474236);
let D = function (e) {
    let { className: t, closeLayer: n, guild: a, onCtaVisibilityChange: o } = e,
        c = l.useRef(null),
        d = (0, s.bG)([R.default], () => R.default.getCurrentUser()),
        m = (0, s.bG)([L.A], () => L.A.boostSlots),
        h = d?.isPremiumGroupMember(),
        { analyticsLocations: g } = (0, u.Ay)(),
        [f, x] = l.useState(!1),
        p = l.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [m, a.id],
        ),
        A = (0, b.A)(e.guild.id).total;
    async function D() {
        x(!0),
            await (0, k.g)({
                analyticsLocations: g,
                analyticsLocation: {
                    page: P.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: P.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: P.ZSU.BUTTON_CTA,
                    objectType: P.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: n,
            }),
            x(!1);
    }
    return (0, i.jsxs)("div", {
        className: E()(w.kL, t),
        children: [
            (0, i.jsxs)("div", {
                className: w.$R,
                children: [
                    (0, i.jsx)(C.Ay, { className: w.$f, guild: a, size: C.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, i.jsxs)("div", {
                        className: w.CR,
                        children: [
                            (0, i.jsx)(_.D, { className: w.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, i.jsxs)("div", {
                                className: w.SJ,
                                children: [
                                    (0, i.jsx)(j._, {
                                        color:
                                            A > 0 ? N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: E()(w.Me, { [w.S3]: A > 0 }),
                                    }),
                                    (0, i.jsx)(T.E, {
                                        className: w.n,
                                        variant: "text-md/semibold",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: A }),
                                    }),
                                ],
                            }),
                            p > 0
                                ? (0, i.jsx)(T.E, {
                                      className: w.EV,
                                      variant: "text-sm/normal",
                                      children: V.intl.format(V.t.Jeto2u, { numSubscriptions: p }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: w.mY,
                children: [
                    (0, i.jsx)("h1", { className: w.R_, children: V.intl.string(V.t.N4sqzL) }),
                    h ? (0, i.jsx)(y.A, { alwaysWhite: !0 }) : null,
                    (0, i.jsxs)("div", {
                        className: w.Sq,
                        children: [
                            (0, i.jsx)(r.L, {
                                innerRef: c,
                                onChange: o,
                                threshold: 0.9,
                                children: (0, i.jsx)("div", {
                                    ref: c,
                                    className: w.dp,
                                    children: (0, i.jsx)(v.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: j._,
                                        text: V.intl.string(V.t.gKmQ1G),
                                        onClick: D,
                                        loading: f,
                                        disabled: h,
                                    }),
                                }),
                            }),
                            O.Ay.hasFreeBoosts(d) || O.Ay.isPremium(d, G.PremiumTypes.TIER_2)
                                ? (0, i.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: I.o,
                                      text: V.intl.string(V.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, S.A)({
                                              initialPlanId: null,
                                              subscriptionTier: G.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: g,
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
                                : (0, i.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: V.intl.string(V.t.Q43TvC),
                                      onClick: function () {
                                          (0, S.A)({
                                              initialPlanId: null,
                                              subscriptionTier: G.pe.TIER_2,
                                              analyticsLocations: g,
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
var U = n(232122),
    M = n(366010),
    B = n(736653),
    F = n(303136),
    W = n(676279),
    z = n(215895);
function Q(e) {
    let { className: t } = e,
        n = (0, B.Ay)(),
        l = (0, M.q)(n),
        s = (0, W.TM)()
            ? l
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : l
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: z.YL }),
            (0, i.jsx)(
                F.A,
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
var H = n(64051),
    K = n(972919),
    q = n(724677),
    X = n(210273),
    Y = n(508155),
    $ = n(853513),
    J = n(111674);
function Z(e) {
    let { tier: t, isActive: n } = e,
        l = t === P.TVA.TIER_1,
        s = t === P.TVA.TIER_3,
        r = t === P.TVA.TIER_1 ? H.v : t === P.TVA.TIER_2 ? K.w : q.H;
    return (0, i.jsxs)("div", {
        className: J.MY,
        children: [
            (0, i.jsx)("div", { className: E()(J.hr, { [J.ti]: n, [J.YO]: !n, [J.JQ]: l, [J.Uz]: s }) }),
            (0, i.jsx)("div", {
                className: E()(J.Zj, {
                    [J.jv]: n,
                    [J.ip]: t === P.TVA.TIER_1,
                    [J.p3]: t === P.TVA.TIER_2,
                    [J.wF]: t === P.TVA.TIER_3,
                }),
                children: (0, i.jsx)(r, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, definition: n } = e,
        { tier: l, perks: s } = n,
        r = t.premiumTier >= l,
        a = P.M2T[l];
    return (0, i.jsxs)("div", {
        className: E()(J.Nr, { [J.Bm]: r, [J.c]: !r }),
        children: [
            (0, i.jsx)(Z, { tier: l, isActive: r }),
            (0, i.jsxs)("div", {
                className: J.zI,
                children: [
                    (0, i.jsxs)("div", {
                        className: J.$h,
                        children: [
                            (0, i.jsx)(_.D, {
                                className: E()(J.JJ, { [J.eX]: !r }),
                                variant: "heading-xl/semibold",
                                color: r ? "text-strong" : void 0,
                                children: V.intl.string(
                                    l === P.TVA.TIER_1 ? V.t.nzXtaS : l === P.TVA.TIER_2 ? V.t["h33/uW"] : V.t.BfF6ED,
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                className: J.yC,
                                children: [
                                    (0, i.jsx)(j._, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(T.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: a }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: J.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, X.X)(e.perkIcon);
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: E()(J.bK, { [J.o]: !r }),
                                        children: [
                                            (0, i.jsx)(n, {
                                                className: J.kf,
                                                color: r ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, i.jsx)(T.E, {
                                                variant: "text-md/medium",
                                                color: r ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, i.jsx)(T.E, {
                                className: J.wx,
                                variant: "text-md/medium",
                                children: V.intl.string($.default.nIj3LZ),
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
        className: E()(J.iE, n),
        children: Y.t.map((e) => (0, i.jsx)(ee, { guild: t, definition: e }, e.tier)),
    });
}
var en = n(922139),
    ei = n(172218),
    el = n(717421),
    es = n(289704),
    er = n(628284),
    ea = n(812993),
    eo = n(775602),
    ec = n(793574),
    ed = n(868652),
    eu = n(363487),
    em = n(73381),
    eh = n(998418),
    eg = n(828162),
    ef = n(71393),
    ex = n(975571),
    ep = n(800007),
    eA = n(568065),
    eE = n(576709),
    e_ = n(262880);
function ej(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: r,
            description: a,
            cost: o,
            costDecorator: c,
            staticImageUrl: d,
            animatedImageUrl: m,
            powerup: h,
            badge: g,
            onClose: f,
        } = e,
        { analyticsLocations: x } = (0, u.Ay)(),
        p = n !== eA.b_.INACTIVE,
        A = (0, eu.A)(t),
        I = (0, s.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        C = l.useRef(null),
        [S, b] = l.useState(!1),
        [y, R] = l.useState(!1),
        [L, O] = l.useState(!1),
        G = y || L,
        w = l.useCallback(() => {
            let e = ef.A.getGuild(t);
            null != e &&
                (0, k.g)({
                    analyticsLocation: {
                        page: P.liQ.GUILD_POWERUPS_MARKETING,
                        section: P.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: x,
                    guild: e,
                });
        }, [t, x]),
        D = l.useCallback(() => {
            f(), (0, eg.A)(t, ec.A.GUILD_POWERUPS_MARKETING, h.skuId);
        }, [t, h.skuId, f]),
        U = { tension: 400, friction: 30 },
        M = (0, el.z)({ scale: G ? 0.85 : 1, y: G ? -32 : 0, config: U }),
        B = (0, el.z)({ scale: G ? 0.7 : 1, y: G ? -35 : 0, config: U }),
        F = (0, el.z)({ y: G ? -32 : 0, config: U }),
        W = (0, el.z)({ opacity: +!!G, transform: G ? "translateY(0)" : "translateY(16px)", config: U }),
        z = l.useCallback((e) => {
            e && b(!0);
        }, []),
        Q = l.useCallback(() => {
            O(!0);
        }, []),
        H = l.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || O(!1);
        }, []),
        K = (0, ei.K)(z),
        q = h.skuId === ep.W5;
    return (0, i.jsxs)("div", {
        className: E()(e_.Nr, { [e_.fM]: S }),
        onFocus: Q,
        onBlur: H,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        children: [
            (0, i.jsx)("div", { className: e_.sL, ref: K }),
            (0, i.jsx)("div", {
                className: e_.kQ,
                children: q
                    ? (0, i.jsx)(en.animated.div, {
                          className: e_.bm,
                          style: { transform: (0, en.to)([B.scale, B.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, i.jsx)(es.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: C,
                              fit: "contain",
                              className: e_.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, i.jsx)(en.animated.img, {
                          className: e_.bm,
                          src: G && null != m && "" !== m && !I ? m : d,
                          alt: "",
                          style: { transform: (0, en.to)([M.scale, M.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, i.jsxs)(en.animated.div, {
                style: { ...F, transform: F.y.to((e) => `translateY(${e}px)`) },
                className: e_.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: e_.P_,
                        children: [
                            (0, i.jsx)(_.D, { className: e_.DD, variant: "heading-lg/semibold", children: r }),
                            (0, i.jsx)(T.E, { className: e_.h_, variant: "text-md/medium", children: a }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: e_.jp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: e_.qS,
                                children: [
                                    (0, i.jsx)(j._, { size: "xs", color: N.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, i.jsx)(T.E, {
                                        className: e_.Vv,
                                        variant: "text-sm/semibold",
                                        children: V.intl.formatToPlainString(
                                            null != c ? eE.default["G/aTXi"] : eE.default.r9pa9K,
                                            { boostCount: o },
                                        ),
                                    }),
                                ],
                            }),
                            p &&
                                (0, i.jsxs)("div", {
                                    className: E()(e_.qS, e_.nt),
                                    children: [
                                        (0, i.jsx)(er.y, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(T.E, {
                                            className: e_.nt,
                                            variant: "text-sm/semibold",
                                            children: V.intl.string(V.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(en.animated.div, {
                style: W,
                className: e_.NC,
                children: [
                    (0, i.jsx)("div", {
                        className: e_.x6,
                        children: (0, i.jsx)(v.$, {
                            variant: "primary",
                            text: V.intl.string(V.t.oPAx73),
                            onClick: w,
                            fullWidth: !0,
                        }),
                    }),
                    A &&
                        (0, i.jsx)("div", {
                            className: e_.x6,
                            children: (0, i.jsx)(v.$, {
                                variant: "secondary",
                                text: V.intl.string(V.t.GoCQxU),
                                onClick: D,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === g && (0, i.jsx)(ea.Lp, { className: e_.AP, text: V.intl.string(V.t.y2b7CA) }),
            "beta" === g &&
                (0, i.jsx)(ea.Lp, {
                    className: e_.AP,
                    text: V.intl.string(V.t.oW0eUd),
                    color: N.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eN(e) {
    let { guildId: t, powerup: n, costDecorator: l, badge: s, onClose: r } = e,
        a = (0, eh.Ay)(t, n).type;
    return (0, i.jsx)(ej, {
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
let eT = new Map([[ep.W5, "+"]]),
    ev = l.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        l.useEffect(() => {
            f.A.shouldFetchCatalogForGuild(n.id) && (0, ed.AK)(n.id),
                f.A.shouldFetchPowerupsForGuild(n.id) && (0, ed.Xd)(n.id);
        }, [n.id]);
        let r = Array.from((0, em.A)(n.id) ?? [])
            .reverse()
            .slice(0, 6);
        return 0 === r.length
            ? null
            : (0, i.jsxs)("div", {
                  ref: t,
                  className: e_.iE,
                  children: [
                      (0, i.jsxs)("div", {
                          className: e_.ND,
                          children: [
                              (0, i.jsx)(_.D, {
                                  className: e_.R_,
                                  variant: "heading-xxl/semibold",
                                  children: V.intl.string($.default.wjI18Q),
                              }),
                              (0, i.jsx)(T.E, {
                                  className: e_.fV,
                                  variant: "text-md/medium",
                                  children: V.intl.format($.default.S562fn, {
                                      helpDeskArticle: ex.A.getArticleURL(P.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: e_.vY,
                          children: r.map((e) =>
                              (0, i.jsx)(
                                  eN,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: eT.get(e.skuId),
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
ev.displayName = "GuildBoostingMarketingPerkCards";
var eI = n(527113),
    eC = n(862482),
    eS = n(944304),
    eb = n(672350);
let ey = function (e) {
    let { closeLayer: t, guild: n, isVisible: s } = e,
        r = l.useRef(null),
        o = (0, el.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(en.animated.div, {
        className: eb.iE,
        style: o,
        children: (0, i.jsx)("div", {
            ref: r,
            className: eb.iJ,
            children: (0, i.jsxs)(a.xp, {
                containerRef: r,
                children: [
                    (0, i.jsxs)("div", {
                        className: eb.OA,
                        children: [
                            (0, i.jsx)(C.Ay, { className: eb.$f, guild: n, size: C.Ay.Sizes.SMALL }),
                            (0, i.jsx)(T.E, { className: eb.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)(eS.A, {
                        className: eb.lI,
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
var eR = n(192308),
    eL = n(65154),
    eO = n(387772),
    ek = n(519636);
function eP(e) {
    let { guild: t, analyticsLocation: s, videoPlacement: r, sourceAnalyticsLocations: a } = e,
        c = l.useCallback(() => {
            (0, eR.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("6836"), n.e("85810")]).then(n.bind(n, 872233));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: s,
                        videoPlacement: r,
                        sourceAnalyticsLocations: a,
                    });
            });
        }, [s, t.id, a, r]);
    return (0, i.jsxs)(o.D, {
        className: eO.kL,
        onClick: c,
        "aria-label": V.intl.string($.default["103aY+"]),
        children: [
            (0, i.jsx)("img", { alt: "", className: eO.xn, src: ek.A }),
            (0, i.jsx)("div", { className: eO.Lw }),
            (0, i.jsx)("div", {
                className: eO.Rr,
                children: (0, i.jsx)(eL.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eG(e) {
    let { analyticsLocation: t, guild: n, onClose: A, scrollToPowerupCards: E } = e,
        [_, j] = l.useState(!0),
        N = l.useRef(!1),
        { analyticsLocations: T } = (0, u.Ay)(),
        v = l.useRef(null),
        I = l.useRef(null),
        C = l.useRef(null),
        S = l.useRef(null),
        b = l.useCallback(() => {
            A?.();
        }, [A]),
        y = l.useCallback(() => {
            null != C.current &&
                null != I.current &&
                I.current.scrollIntoViewNode({ node: C.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        R = l.useCallback(
            (e) => {
                e &&
                    !N.current &&
                    (x.default.track(P.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: P.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: T,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (N.current = !0));
            },
            [t, T, n.id],
        );
    l.useEffect(() => {
        x.default.track(P.HAw.OPEN_MODAL, {
            type: P.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: T,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, T]);
    let L = (0, h.C$)(n.id, "GuildBoostingMarketingRefresh"),
        O = (0, s.bG)([g.A], () => g.A.shouldFetchCatalogForGuild(n.id));
    l.useEffect(() => {
        L && O && (0, m.z9)(n.id);
    }, [n.id, L, O]);
    let k = (0, s.bG)([f.A], () => f.A.hasFetchedPowerupCatalog(n.id));
    return (
        l.useEffect(() => {
            if (E && k) {
                let e = setTimeout(() => {
                    y();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [E, y, k]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != A &&
                    (0, i.jsx)("div", {
                        ref: S,
                        className: z.Yk,
                        children: (0, i.jsx)(a.xp, {
                            containerRef: S,
                            children: (0, i.jsx)(o.D, {
                                className: z.b,
                                onClick: b,
                                "aria-label": V.intl.string(V.t.cpT0Cq),
                                children: (0, i.jsx)(c.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, i.jsxs)(d.Gt, {
                    ref: I,
                    className: z.XG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: z.wx,
                            children: [
                                (0, i.jsx)(Q, { className: z.y2 }),
                                (0, i.jsxs)("div", {
                                    className: z.AZ,
                                    children: [
                                        (0, i.jsx)(D, {
                                            guild: n,
                                            closeLayer: b,
                                            onCtaVisibilityChange: j,
                                            className: z.Oh,
                                        }),
                                        (0, i.jsx)(eP, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: T,
                                        }),
                                        (0, i.jsx)(et, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: z.uE,
                            children: (0, i.jsx)(ev, { ref: C, guild: e.guild, onClose: b }),
                        }),
                        (0, i.jsx)("div", {
                            className: z.o6,
                            children: (0, i.jsxs)("div", {
                                className: z.y$,
                                children: [
                                    (0, i.jsx)(eI.A, { className: z.Q, guild: n }),
                                    (0, i.jsx)(p.A, {}),
                                    (0, i.jsx)(U.A, {}),
                                ],
                            }),
                        }),
                        (0, i.jsx)(r.L, {
                            innerRef: v,
                            onChange: R,
                            children: (0, i.jsx)("div", { ref: v, className: z.mR }),
                        }),
                    ],
                }),
                (0, i.jsx)(ey, { guild: n, isVisible: !_, closeLayer: b }),
            ],
        })
    );
}
