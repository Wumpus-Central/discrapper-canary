"use strict";
n.d(t, { A: () => U });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(382222),
    l = n(172218),
    u = n(512750),
    c = n(311907),
    d = n(397927),
    _ = n(775602),
    f = n(793574),
    p = n(688810),
    h = n(942975),
    m = n(645619),
    E = n(363487),
    g = n(263215),
    A = n(998418),
    I = n(828162),
    T = n(71393),
    S = n(975571),
    y = n(987144),
    v = n(652215),
    N = n(800007),
    C = n(568065),
    R = n(985018),
    O = n(294726),
    b = n(333354),
    D = n(542032);
function L(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: s,
            description: u,
            cost: h,
            costDecorator: m,
            staticImageUrl: g,
            animatedImageUrl: A,
            powerup: S,
            isNew: b,
            onClose: L,
        } = e,
        { analyticsLocations: w } = (0, p.Ay)(),
        M = n !== C.b_.INACTIVE,
        P = (0, E.A)(t),
        x = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        k = i.useRef(null),
        [U, G] = i.useState(!1),
        [F, V] = i.useState(!1),
        B = F,
        H = F && null != A && "" !== A && !x ? A : g,
        j = i.useCallback(() => {
            let e = T.A.getGuild(t);
            null != e &&
                (0, y.g)({
                    analyticsLocation: {
                        page: v.liQ.GUILD_POWERUPS_MARKETING,
                        section: v.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: w,
                    guild: e,
                });
        }, [t, w]),
        Y = i.useCallback(() => {
            L(), (0, I.A)(t, f.A.GUILD_POWERUPS_MARKETING, S.skuId);
        }, [t, S.skuId, L]),
        W = { tension: 400, friction: 30 },
        K = (0, d.zhh)({ scale: B ? 0.85 : 1, y: B ? -32 : 0, config: W }),
        $ = (0, d.zhh)({ scale: B ? 0.7 : 1, y: B ? -35 : 0, config: W }),
        z = (0, d.zhh)({ y: B ? -32 : 0, config: W }),
        q = (0, d.zhh)({ opacity: +!!B, transform: B ? "translateY(0)" : "translateY(16px)", config: W }),
        Z = i.useCallback((e) => {
            e && G(!0);
        }, []),
        X = (0, l.K)(Z),
        Q = S.skuId === N.W5;
    return (0, r.jsxs)("div", {
        className: a()(D.Nr, { [D.fM]: U }),
        onMouseEnter: () => V(!0),
        onMouseLeave: () => V(!1),
        children: [
            (0, r.jsx)("div", { className: D.sL, ref: X }),
            (0, r.jsx)("div", {
                className: D.kQ,
                children: Q
                    ? (0, r.jsx)(o.animated.div, {
                          className: D.bm,
                          style: { transform: (0, o.to)([$.scale, $.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, r.jsx)(d.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: k,
                              fit: "contain",
                              className: D.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(o.animated.img, {
                          className: D.bm,
                          src: H,
                          alt: "",
                          style: { transform: (0, o.to)([K.scale, K.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: { ...z, transform: z.y.to((e) => `translateY(${e}px)`) },
                className: D.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.P_,
                        children: [
                            (0, r.jsx)(d.Heading, { className: D.DD, variant: "heading-lg/semibold", children: s }),
                            (0, r.jsx)(d.Text, { className: D.h_, variant: "text-md/medium", children: u }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: D.jp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: D.qS,
                                children: [
                                    (0, r.jsx)(d._Jp, { size: "xs", color: d.LU0.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, r.jsx)(d.Text, {
                                        className: D.Vv,
                                        variant: "text-sm/semibold",
                                        children: R.intl.formatToPlainString(
                                            null != m ? O.default["G/aTXi"] : O.default.r9pa9K,
                                            { boostCount: h },
                                        ),
                                    }),
                                ],
                            }),
                            M &&
                                (0, r.jsxs)("div", {
                                    className: a()(D.qS, D.nt),
                                    children: [
                                        (0, r.jsx)(d.yr3, { size: "xs", color: "currentColor" }),
                                        (0, r.jsx)(d.Text, {
                                            className: D.nt,
                                            variant: "text-sm/semibold",
                                            children: R.intl.string(R.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                style: q,
                className: D.NC,
                children: [
                    (0, r.jsx)("div", {
                        className: D.x6,
                        children: (0, r.jsx)(d.Button, {
                            variant: "primary",
                            text: R.intl.string(R.t.oPAx73),
                            onClick: j,
                            fullWidth: !0,
                        }),
                    }),
                    P &&
                        (0, r.jsx)("div", {
                            className: D.x6,
                            children: (0, r.jsx)(d.Button, {
                                variant: "secondary",
                                text: R.intl.string(R.t.GoCQxU),
                                onClick: Y,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            b && (0, r.jsx)(d.LpS, { className: D.Ad, text: R.intl.string(R.t.y2b7CA) }),
        ],
    });
}
function w(e) {
    let { guildId: t, powerup: n, costDecorator: i, isNew: s, onClose: a } = e,
        o = (0, A.Ay)(t, n).type;
    return (0, r.jsx)(L, {
        guildId: t,
        activeStatus: o,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: i,
        isNew: s,
        onClose: a,
    });
}
let M = 6,
    P = new Set([N.W5, u.zY]),
    x = new Map([[N.W5, "+"]]),
    k = i.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        i.useEffect(() => {
            m.A.shouldFetchCatalogForGuild(n.id) && (0, h.AK)(n.id),
                m.A.shouldFetchPowerupsForGuild(n.id) && (0, h.Xd)(n.id);
        }, [n.id]);
        let a = Array.from((0, g.A)(n.id) ?? [])
            .reverse()
            .slice(0, M);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: D.iE,
                  children: [
                      (0, r.jsxs)("div", {
                          className: D.ND,
                          children: [
                              (0, r.jsx)(d.Heading, {
                                  className: D.R_,
                                  variant: "heading-xxl/semibold",
                                  children: R.intl.string(b.default.wjI18Q),
                              }),
                              (0, r.jsx)(d.Text, {
                                  className: D.fV,
                                  variant: "text-md/medium",
                                  children: R.intl.format(b.default.S562fn, {
                                      helpDeskArticle: S.A.getArticleURL(v.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: D.vY,
                          children: a.map((e) =>
                              (0, r.jsx)(
                                  w,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: x.get(e.skuId),
                                      isNew: P.has(e.skuId),
                                      onClose: s,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
k.displayName = "GuildBoostingMarketingPerkCards";
let U = k;
