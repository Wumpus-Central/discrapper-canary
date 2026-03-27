"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(382222),
    l = n(172218),
    u = n(311907),
    c = n(397927),
    d = n(775602),
    _ = n(793574),
    f = n(688810),
    p = n(942975),
    h = n(645619),
    m = n(363487),
    E = n(263215),
    g = n(998418),
    A = n(828162),
    I = n(71393),
    T = n(975571),
    S = n(987144),
    y = n(652215),
    v = n(800007),
    N = n(568065),
    C = n(985018),
    R = n(294726),
    O = n(333354),
    b = n(542032);
function D(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: s,
            description: p,
            cost: h,
            costDecorator: E,
            staticImageUrl: g,
            animatedImageUrl: T,
            powerup: O,
            badge: D,
            onClose: L,
        } = e,
        { analyticsLocations: w } = (0, f.Ay)(),
        M = n !== N.b_.INACTIVE,
        P = (0, m.A)(t),
        x = (0, u.bG)([d.A], () => d.A.useReducedMotion),
        k = i.useRef(null),
        [U, G] = i.useState(!1),
        [F, V] = i.useState(!1),
        B = F,
        H = F && null != T && "" !== T && !x ? T : g,
        j = i.useCallback(() => {
            let e = I.A.getGuild(t);
            null != e &&
                (0, S.g)({
                    analyticsLocation: {
                        page: y.liQ.GUILD_POWERUPS_MARKETING,
                        section: y.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: w,
                    guild: e,
                });
        }, [t, w]),
        Y = i.useCallback(() => {
            L(), (0, A.A)(t, _.A.GUILD_POWERUPS_MARKETING, O.skuId);
        }, [t, O.skuId, L]),
        W = { tension: 400, friction: 30 },
        K = (0, c.zhh)({ scale: B ? 0.85 : 1, y: B ? -32 : 0, config: W }),
        $ = (0, c.zhh)({ scale: B ? 0.7 : 1, y: B ? -35 : 0, config: W }),
        z = (0, c.zhh)({ y: B ? -32 : 0, config: W }),
        q = (0, c.zhh)({ opacity: +!!B, transform: B ? "translateY(0)" : "translateY(16px)", config: W }),
        Z = i.useCallback((e) => {
            e && G(!0);
        }, []),
        X = (0, l.K)(Z),
        Q = O.skuId === v.W5;
    return (0, r.jsxs)("div", {
        className: a()(b.Nr, { [b.fM]: U }),
        onMouseEnter: () => V(!0),
        onMouseLeave: () => V(!1),
        children: [
            (0, r.jsx)("div", { className: b.sL, ref: X }),
            (0, r.jsx)("div", {
                className: b.kQ,
                children: Q
                    ? (0, r.jsx)(o.animated.div, {
                          className: b.bm,
                          style: { transform: (0, o.to)([$.scale, $.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, r.jsx)(c.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: k,
                              fit: "contain",
                              className: b.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(o.animated.img, {
                          className: b.bm,
                          src: H,
                          alt: "",
                          style: { transform: (0, o.to)([K.scale, K.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: { ...z, transform: z.y.to((e) => `translateY(${e}px)`) },
                className: b.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.P_,
                        children: [
                            (0, r.jsx)(c.Heading, { className: b.DD, variant: "heading-lg/semibold", children: s }),
                            (0, r.jsx)(c.Text, { className: b.h_, variant: "text-md/medium", children: p }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: b.jp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: b.qS,
                                children: [
                                    (0, r.jsx)(c._Jp, { size: "xs", color: c.LU0.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, r.jsx)(c.Text, {
                                        className: b.Vv,
                                        variant: "text-sm/semibold",
                                        children: C.intl.formatToPlainString(
                                            null != E ? R.default["G/aTXi"] : R.default.r9pa9K,
                                            { boostCount: h },
                                        ),
                                    }),
                                ],
                            }),
                            M &&
                                (0, r.jsxs)("div", {
                                    className: a()(b.qS, b.nt),
                                    children: [
                                        (0, r.jsx)(c.yr3, { size: "xs", color: "currentColor" }),
                                        (0, r.jsx)(c.Text, {
                                            className: b.nt,
                                            variant: "text-sm/semibold",
                                            children: C.intl.string(C.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                style: q,
                className: b.NC,
                children: [
                    (0, r.jsx)("div", {
                        className: b.x6,
                        children: (0, r.jsx)(c.Button, {
                            variant: "primary",
                            text: C.intl.string(C.t.oPAx73),
                            onClick: j,
                            fullWidth: !0,
                        }),
                    }),
                    P &&
                        (0, r.jsx)("div", {
                            className: b.x6,
                            children: (0, r.jsx)(c.Button, {
                                variant: "secondary",
                                text: C.intl.string(C.t.GoCQxU),
                                onClick: Y,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === D && (0, r.jsx)(c.LpS, { className: b.AP, text: C.intl.string(C.t.y2b7CA) }),
            "beta" === D &&
                (0, r.jsx)(c.LpS, {
                    className: b.AP,
                    text: C.intl.string(C.t.oW0eUd),
                    color: c.LU0.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function L(e) {
    let { guildId: t, powerup: n, costDecorator: i, badge: s, onClose: a } = e,
        o = (0, g.Ay)(t, n).type;
    return (0, r.jsx)(D, {
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
let w = 6,
    M = new Map([[v.W5, "+"]]),
    P = i.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        i.useEffect(() => {
            h.A.shouldFetchCatalogForGuild(n.id) && (0, p.AK)(n.id),
                h.A.shouldFetchPowerupsForGuild(n.id) && (0, p.Xd)(n.id);
        }, [n.id]);
        let a = Array.from((0, E.A)(n.id) ?? [])
            .reverse()
            .slice(0, w);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: b.iE,
                  children: [
                      (0, r.jsxs)("div", {
                          className: b.ND,
                          children: [
                              (0, r.jsx)(c.Heading, {
                                  className: b.R_,
                                  variant: "heading-xxl/semibold",
                                  children: C.intl.string(O.default.wjI18Q),
                              }),
                              (0, r.jsx)(c.Text, {
                                  className: b.fV,
                                  variant: "text-md/medium",
                                  children: C.intl.format(O.default.S562fn, {
                                      helpDeskArticle: T.A.getArticleURL(y.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: b.vY,
                          children: a.map((e) =>
                              (0, r.jsx)(
                                  L,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: M.get(e.skuId),
                                      badge: N.ys[e.skuId],
                                      onClose: s,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
P.displayName = "GuildBoostingMarketingPerkCards";
let x = P;
