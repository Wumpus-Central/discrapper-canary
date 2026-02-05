"use strict";
n.d(t, { A: () => k });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(172218),
    u = n(311907),
    c = n(397927),
    d = n(775602),
    _ = n(793574),
    f = n(688810),
    p = n(942975),
    h = n(645619),
    m = n(363487),
    g = n(263215),
    E = n(998418),
    A = n(828162),
    I = n(71393),
    T = n(975571),
    y = n(987144),
    S = n(652215),
    v = n(800007),
    C = n(568065),
    b = n(985018),
    N = n(294726),
    R = n(333354),
    O = n(826823);
function D(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: p,
            cost: h,
            costDecorator: g,
            staticImageUrl: E,
            animatedImageUrl: T,
            powerup: R,
            isNew: D,
            onClose: L,
        } = e,
        { analyticsLocations: w } = (0, f.Ay)(),
        x = n !== C.b_.INACTIVE,
        P = (0, m.A)(t),
        M = (0, u.bG)([d.A], () => d.A.useReducedMotion),
        k = i.useRef(null),
        [U, G] = i.useState(!1),
        [V, F] = i.useState(!1),
        B = V,
        j = V && null != T && "" !== T && !M ? T : E,
        H = i.useCallback(() => {
            let e = I.A.getGuild(t);
            null != e &&
                (0, y.g)({
                    analyticsLocation: {
                        page: S.liQ.GUILD_POWERUPS_MARKETING,
                        section: S.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: w,
                    guild: e,
                });
        }, [t, w]),
        Y = i.useCallback(() => {
            L(), (0, A.A)(t, _.A.GUILD_POWERUPS_MARKETING, R.skuId);
        }, [t, R.skuId, L]),
        W = { tension: 400, friction: 30 },
        K = (0, c.zhh)({ scale: B ? 0.85 : 1, y: B ? -32 : 0, config: W }),
        z = (0, c.zhh)({ scale: B ? 0.7 : 1, y: B ? -35 : 0, config: W }),
        $ = (0, c.zhh)({ y: B ? -32 : 0, config: W }),
        q = (0, c.zhh)({ opacity: +!!B, transform: B ? "translateY(0)" : "translateY(16px)", config: W }),
        Z = i.useCallback((e) => {
            e && G(!0);
        }, []),
        Q = (0, l.K)(Z),
        X = R.skuId === v.W5;
    return (0, r.jsxs)("div", {
        className: s()(O.Nr, { [O.fM]: U }),
        onMouseEnter: () => F(!0),
        onMouseLeave: () => F(!1),
        children: [
            (0, r.jsx)("div", { className: O.sL, ref: Q }),
            (0, r.jsx)("div", {
                className: O.kQ,
                children: X
                    ? (0, r.jsx)(o.animated.div, {
                          className: O.bm,
                          style: { transform: (0, o.to)([z.scale, z.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, r.jsx)(c.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: k,
                              fit: "contain",
                              className: O.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(o.animated.img, {
                          className: O.bm,
                          src: j,
                          alt: "",
                          style: { transform: (0, o.to)([K.scale, K.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: { ...$, transform: $.y.to((e) => `translateY(${e}px)`) },
                className: O.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.P_,
                        children: [
                            (0, r.jsx)(c.Heading, { className: O.DD, variant: "heading-lg/semibold", children: a }),
                            (0, r.jsx)(c.Text, { className: O.h_, variant: "text-md/medium", children: p }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: O.jp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: O.qS,
                                children: [
                                    (0, r.jsx)(c._Jp, { size: "xs", color: c.LU0.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, r.jsx)(c.Text, {
                                        className: O.Vv,
                                        variant: "text-sm/semibold",
                                        children: b.intl.formatToPlainString(
                                            null != g ? N.default["G/aTXi"] : N.default.r9pa9K,
                                            { boostCount: h },
                                        ),
                                    }),
                                ],
                            }),
                            x &&
                                (0, r.jsxs)("div", {
                                    className: s()(O.qS, O.nt),
                                    children: [
                                        (0, r.jsx)(c.yr3, { size: "xs", color: "currentColor" }),
                                        (0, r.jsx)(c.Text, {
                                            className: O.nt,
                                            variant: "text-sm/semibold",
                                            children: b.intl.string(b.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                style: q,
                className: O.NC,
                children: [
                    (0, r.jsx)("div", {
                        className: O.x6,
                        children: (0, r.jsx)(c.Button, {
                            variant: "primary",
                            text: b.intl.string(b.t.oPAx73),
                            onClick: H,
                            fullWidth: !0,
                        }),
                    }),
                    P &&
                        (0, r.jsx)("div", {
                            className: O.x6,
                            children: (0, r.jsx)(c.Button, {
                                variant: "secondary",
                                text: b.intl.string(b.t.GoCQxU),
                                onClick: Y,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            D && (0, r.jsx)(c.LpS, { className: O.Ad, text: b.intl.string(b.t.y2b7CA) }),
        ],
    });
}
function L(e) {
    let { guildId: t, powerup: n, costDecorator: i, isNew: a, onClose: s } = e,
        o = (0, E.Ay)(t, n).type;
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
        isNew: a,
        onClose: s,
    });
}
let w = 3,
    x = new Set([v.W5]),
    P = new Map([[v.W5, "+"]]),
    M = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            h.A.shouldFetchCatalogForGuild(n.id) && (0, p.AK)(n.id),
                h.A.shouldFetchPowerupsForGuild(n.id) && (0, p.Xd)(n.id);
        }, [n.id]);
        let s = Array.from((0, g.A)(n.id) ?? [])
            .reverse()
            .slice(0, w);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: O.iE,
                  children: [
                      (0, r.jsxs)("div", {
                          className: O.ND,
                          children: [
                              (0, r.jsx)(c.Heading, {
                                  className: O.R_,
                                  variant: "heading-xxl/semibold",
                                  children: b.intl.string(R.default.wjI18Q),
                              }),
                              (0, r.jsx)(c.Text, {
                                  className: O.fV,
                                  variant: "text-md/medium",
                                  children: b.intl.format(R.default.S562fn, {
                                      helpDeskArticle: T.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: O.vY,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  L,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: P.get(e.skuId),
                                      isNew: x.has(e.skuId),
                                      onClose: a,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
M.displayName = "GuildBoostingMarketingPerkCards";
let k = M;
