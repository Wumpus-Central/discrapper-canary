"use strict";
n.d(t, { A: () => H });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(172218),
    u = n(311907),
    c = n(717421),
    d = n(320176),
    _ = n(534514),
    f = n(834730),
    p = n(104510),
    h = n(827734),
    E = n(628284),
    m = n(821609),
    g = n(777666),
    A = n(775602),
    I = n(793574),
    T = n(688810),
    S = n(942975),
    y = n(645619),
    N = n(363487),
    v = n(263215),
    C = n(998418),
    O = n(828162),
    R = n(71393),
    b = n(975571),
    D = n(987144),
    L = n(652215),
    w = n(800007),
    M = n(568065),
    P = n(985018),
    x = n(576709),
    k = n(853513),
    U = n(262880);
function G(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: s,
            description: S,
            cost: y,
            costDecorator: v,
            staticImageUrl: C,
            animatedImageUrl: b,
            powerup: k,
            badge: G,
            onClose: F,
        } = e,
        { analyticsLocations: V } = (0, T.Ay)(),
        B = n !== M.b_.INACTIVE,
        H = (0, N.A)(t),
        j = (0, u.bG)([A.A], () => A.A.useReducedMotion),
        Y = i.useRef(null),
        [W, K] = i.useState(!1),
        [$, z] = i.useState(!1),
        [q, X] = i.useState(!1),
        Q = $ || q,
        Z = i.useCallback(() => {
            let e = R.A.getGuild(t);
            null != e &&
                (0, D.g)({
                    analyticsLocation: {
                        page: L.liQ.GUILD_POWERUPS_MARKETING,
                        section: L.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: V,
                    guild: e,
                });
        }, [t, V]),
        J = i.useCallback(() => {
            F(), (0, O.A)(t, I.A.GUILD_POWERUPS_MARKETING, k.skuId);
        }, [t, k.skuId, F]),
        ee = { tension: 400, friction: 30 },
        et = (0, c.z)({ scale: Q ? 0.85 : 1, y: Q ? -32 : 0, config: ee }),
        en = (0, c.z)({ scale: Q ? 0.7 : 1, y: Q ? -35 : 0, config: ee }),
        er = (0, c.z)({ y: Q ? -32 : 0, config: ee }),
        ei = (0, c.z)({ opacity: +!!Q, transform: Q ? "translateY(0)" : "translateY(16px)", config: ee }),
        es = i.useCallback((e) => {
            e && K(!0);
        }, []),
        ea = i.useCallback(() => {
            X(!0);
        }, []),
        eo = i.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || X(!1);
        }, []),
        el = (0, l.K)(es),
        eu = k.skuId === w.W5;
    return (0, r.jsxs)("div", {
        className: a()(U.Nr, { [U.fM]: W }),
        onFocus: ea,
        onBlur: eo,
        onMouseEnter: () => z(!0),
        onMouseLeave: () => z(!1),
        children: [
            (0, r.jsx)("div", { className: U.sL, ref: el }),
            (0, r.jsx)("div", {
                className: U.kQ,
                children: eu
                    ? (0, r.jsx)(o.animated.div, {
                          className: U.bm,
                          style: { transform: (0, o.to)([en.scale, en.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, r.jsx)(d.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: Y,
                              fit: "contain",
                              className: U.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(o.animated.img, {
                          className: U.bm,
                          src: Q && null != b && "" !== b && !j ? b : C,
                          alt: "",
                          style: { transform: (0, o.to)([et.scale, et.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: { ...er, transform: er.y.to((e) => `translateY(${e}px)`) },
                className: U.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: U.P_,
                        children: [
                            (0, r.jsx)(_.D, { className: U.DD, variant: "heading-lg/semibold", children: s }),
                            (0, r.jsx)(f.E, { className: U.h_, variant: "text-md/medium", children: S }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: U.jp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: U.qS,
                                children: [
                                    (0, r.jsx)(p._, { size: "xs", color: h.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, r.jsx)(f.E, {
                                        className: U.Vv,
                                        variant: "text-sm/semibold",
                                        children: P.intl.formatToPlainString(
                                            null != v ? x.default["G/aTXi"] : x.default.r9pa9K,
                                            { boostCount: y },
                                        ),
                                    }),
                                ],
                            }),
                            B &&
                                (0, r.jsxs)("div", {
                                    className: a()(U.qS, U.nt),
                                    children: [
                                        (0, r.jsx)(E.y, { size: "xs", color: "currentColor" }),
                                        (0, r.jsx)(f.E, {
                                            className: U.nt,
                                            variant: "text-sm/semibold",
                                            children: P.intl.string(P.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                style: ei,
                className: U.NC,
                children: [
                    (0, r.jsx)("div", {
                        className: U.x6,
                        children: (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: P.intl.string(P.t.oPAx73),
                            onClick: Z,
                            fullWidth: !0,
                        }),
                    }),
                    H &&
                        (0, r.jsx)("div", {
                            className: U.x6,
                            children: (0, r.jsx)(m.$, {
                                variant: "secondary",
                                text: P.intl.string(P.t.GoCQxU),
                                onClick: J,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === G && (0, r.jsx)(g.Lp, { className: U.AP, text: P.intl.string(P.t.y2b7CA) }),
            "beta" === G &&
                (0, r.jsx)(g.Lp, {
                    className: U.AP,
                    text: P.intl.string(P.t.oW0eUd),
                    color: h.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function F(e) {
    let { guildId: t, powerup: n, costDecorator: i, badge: s, onClose: a } = e,
        o = (0, C.Ay)(t, n).type;
    return (0, r.jsx)(G, {
        guildId: t,
        activeStatus: o,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: i,
        badge: s,
        onClose: a,
    });
}
let V = new Map([[w.W5, "+"]]),
    B = i.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        i.useEffect(() => {
            y.A.shouldFetchCatalogForGuild(n.id) && (0, S.AK)(n.id),
                y.A.shouldFetchPowerupsForGuild(n.id) && (0, S.Xd)(n.id);
        }, [n.id]);
        let a = Array.from((0, v.A)(n.id) ?? [])
            .reverse()
            .slice(0, 6);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: U.iE,
                  children: [
                      (0, r.jsxs)("div", {
                          className: U.ND,
                          children: [
                              (0, r.jsx)(_.D, {
                                  className: U.R_,
                                  variant: "heading-xxl/semibold",
                                  children: P.intl.string(k.default.wjI18Q),
                              }),
                              (0, r.jsx)(f.E, {
                                  className: U.fV,
                                  variant: "text-md/medium",
                                  children: P.intl.format(k.default.S562fn, {
                                      helpDeskArticle: b.A.getArticleURL(L.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: U.vY,
                          children: a.map((e) =>
                              (0, r.jsx)(
                                  F,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: V.get(e.skuId),
                                      badge: M.ys[e.skuId],
                                      onClose: s,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
B.displayName = "GuildBoostingMarketingPerkCards";
let H = B;
