"use strict";
n.d(t, { A: () => U });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(172218),
    u = n(311907),
    c = n(397927),
    d = n(775602),
    _ = n(793574),
    f = n(688810),
    h = n(942975),
    p = n(645619),
    g = n(363487),
    E = n(263215),
    A = n(998418),
    I = n(828162),
    T = n(71393),
    y = n(975571),
    S = n(987144),
    v = n(652215),
    C = n(800007),
    b = n(568065),
    N = n(985018),
    R = n(294726),
    O = n(333354),
    D = n(826823);
function L(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: h,
            cost: p,
            costDecorator: E,
            staticImageUrl: A,
            animatedImageUrl: y,
            powerup: O,
            isNew: L,
            onClose: w,
        } = e,
        { analyticsLocations: x } = (0, f.Ay)(),
        P = n !== b.b_.INACTIVE,
        M = (0, g.A)(t),
        k = (0, u.bG)([d.A], () => d.A.useReducedMotion),
        U = i.useRef(null),
        [G, F] = i.useState(!1),
        [V, B] = i.useState(!1),
        j = V,
        H = V && null != y && "" !== y && !k ? y : A,
        Y = i.useCallback(() => {
            let e = T.A.getGuild(t);
            null != e &&
                (0, S.g)({
                    analyticsLocation: {
                        page: v.liQ.GUILD_POWERUPS_MARKETING,
                        section: v.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: x,
                    guild: e,
                });
        }, [t, x]),
        W = i.useCallback(() => {
            w(), (0, I.A)(t, _.A.GUILD_POWERUPS_MARKETING, O.skuId);
        }, [t, O.skuId, w]),
        K = { tension: 400, friction: 30 },
        $ = (0, c.zhh)({ scale: j ? 0.85 : 1, y: j ? -32 : 0, config: K }),
        z = (0, c.zhh)({ scale: j ? 0.7 : 1, y: j ? -35 : 0, config: K }),
        q = (0, c.zhh)({ y: j ? -32 : 0, config: K }),
        X = (0, c.zhh)({ opacity: +!!j, transform: j ? "translateY(0)" : "translateY(16px)", config: K }),
        Z = i.useCallback((e) => {
            e && F(!0);
        }, []),
        Q = (0, l.K)(Z),
        J = O.skuId === C.W5;
    return (0, r.jsxs)("div", {
        className: s()(D.Nr, { [D.fM]: G }),
        onMouseEnter: () => B(!0),
        onMouseLeave: () => B(!1),
        children: [
            (0, r.jsx)("div", { className: D.sL, ref: Q }),
            (0, r.jsx)("div", {
                className: D.kQ,
                children: J
                    ? (0, r.jsx)(o.animated.div, {
                          className: D.bm,
                          style: { transform: (0, o.to)([z.scale, z.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, r.jsx)(c.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: U,
                              fit: "contain",
                              className: D.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(o.animated.img, {
                          className: D.bm,
                          src: H,
                          alt: "",
                          style: { transform: (0, o.to)([$.scale, $.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: { ...q, transform: q.y.to((e) => `translateY(${e}px)`) },
                className: D.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.P_,
                        children: [
                            (0, r.jsx)(c.Heading, { className: D.DD, variant: "heading-lg/semibold", children: a }),
                            (0, r.jsx)(c.Text, { className: D.h_, variant: "text-md/medium", children: h }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: D.jp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: D.qS,
                                children: [
                                    (0, r.jsx)(c._Jp, { size: "xs", color: c.LU0.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, r.jsx)(c.Text, {
                                        className: D.Vv,
                                        variant: "text-sm/semibold",
                                        children: N.intl.formatToPlainString(
                                            null != E ? R.default["G/aTXi"] : R.default.r9pa9K,
                                            { boostCount: p },
                                        ),
                                    }),
                                ],
                            }),
                            P &&
                                (0, r.jsxs)("div", {
                                    className: s()(D.qS, D.nt),
                                    children: [
                                        (0, r.jsx)(c.yr3, { size: "xs", color: "currentColor" }),
                                        (0, r.jsx)(c.Text, {
                                            className: D.nt,
                                            variant: "text-sm/semibold",
                                            children: N.intl.string(N.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                style: X,
                className: D.NC,
                children: [
                    (0, r.jsx)("div", {
                        className: D.x6,
                        children: (0, r.jsx)(c.Button, {
                            variant: "primary",
                            text: N.intl.string(N.t.oPAx73),
                            onClick: Y,
                            fullWidth: !0,
                        }),
                    }),
                    M &&
                        (0, r.jsx)("div", {
                            className: D.x6,
                            children: (0, r.jsx)(c.Button, {
                                variant: "secondary",
                                text: N.intl.string(N.t.GoCQxU),
                                onClick: W,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            L && (0, r.jsx)(c.LpS, { className: D.Ad, text: N.intl.string(N.t.y2b7CA) }),
        ],
    });
}
function w(e) {
    let { guildId: t, powerup: n, costDecorator: i, isNew: a, onClose: s } = e,
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
        isNew: a,
        onClose: s,
    });
}
let x = 3,
    P = new Set([C.W5]),
    M = new Map([[C.W5, "+"]]),
    k = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            p.A.shouldFetchCatalogForGuild(n.id) && (0, h.AK)(n.id),
                p.A.shouldFetchPowerupsForGuild(n.id) && (0, h.Xd)(n.id);
        }, [n.id]);
        let s = Array.from((0, E.A)(n.id) ?? [])
            .reverse()
            .slice(0, x);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: D.iE,
                  children: [
                      (0, r.jsxs)("div", {
                          className: D.ND,
                          children: [
                              (0, r.jsx)(c.Heading, {
                                  className: D.R_,
                                  variant: "heading-xxl/semibold",
                                  children: N.intl.string(O.default.wjI18Q),
                              }),
                              (0, r.jsx)(c.Text, {
                                  className: D.fV,
                                  variant: "text-md/medium",
                                  children: N.intl.format(O.default.S562fn, {
                                      helpDeskArticle: y.A.getArticleURL(v.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: D.vY,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  w,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: M.get(e.skuId),
                                      isNew: P.has(e.skuId),
                                      onClose: a,
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
