i.d(t, { A: () => Q });
var s = i(627968),
    l = i(64700),
    a = i(503698),
    n = i.n(a),
    r = i(517738),
    c = i(172218),
    o = i(311907),
    d = i(717421),
    u = i(320176),
    m = i(534514),
    g = i(834730),
    T = i(104510),
    x = i(827734),
    A = i(628284),
    f = i(821609),
    h = i(777666),
    j = i(775602),
    p = i(793574),
    N = i(688810),
    E = i(942975),
    b = i(645619),
    v = i(363487),
    I = i(263215),
    _ = i(998418),
    R = i(828162),
    V = i(71393),
    S = i(975571),
    P = i(987144),
    y = i(652215),
    C = i(800007),
    k = i(568065),
    L = i(985018),
    U = i(76660),
    M = i(645704),
    O = i(70240);
function G(e) {
    let {
            guildId: t,
            activeStatus: i,
            title: a,
            description: E,
            cost: b,
            costDecorator: I,
            staticImageUrl: _,
            animatedImageUrl: S,
            powerup: M,
            badge: G,
            onClose: D,
        } = e,
        { analyticsLocations: w } = (0, N.Ay)(),
        z = i !== k.b_.INACTIVE,
        Q = (0, v.A)(t),
        F = (0, o.bG)([j.A], () => j.A.useReducedMotion),
        B = l.useRef(null),
        [K, J] = l.useState(!1),
        [Y, $] = l.useState(!1),
        [Z, H] = l.useState(!1),
        W = Y || Z,
        q = l.useCallback(() => {
            let e = V.A.getGuild(t);
            null != e &&
                (0, P.g)({
                    analyticsLocation: {
                        page: y.liQ.GUILD_POWERUPS_MARKETING,
                        section: y.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: w,
                    guild: e,
                });
        }, [t, w]),
        X = l.useCallback(() => {
            D(), (0, R.A)(t, p.A.GUILD_POWERUPS_MARKETING, M.skuId);
        }, [t, M.skuId, D]),
        ee = { tension: 400, friction: 30 },
        et = (0, d.z)({ scale: W ? 0.85 : 1, y: W ? -32 : 0, config: ee }),
        ei = (0, d.z)({ scale: W ? 0.7 : 1, y: W ? -35 : 0, config: ee }),
        es = (0, d.z)({ y: W ? -32 : 0, config: ee }),
        el = (0, d.z)({ opacity: +!!W, transform: W ? "translateY(0)" : "translateY(16px)", config: ee }),
        ea = l.useCallback((e) => {
            e && J(!0);
        }, []),
        en = l.useCallback(() => {
            H(!0);
        }, []),
        er = l.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || H(!1);
        }, []),
        ec = (0, c.K)(ea),
        eo = M.skuId === C.W5;
    return (0, s.jsxs)("div", {
        className: n()(O.Nr, { [O.fM]: K }),
        onFocus: en,
        onBlur: er,
        onMouseEnter: () => $(!0),
        onMouseLeave: () => $(!1),
        children: [
            (0, s.jsx)("div", { className: O.sL, ref: ec }),
            (0, s.jsx)("div", {
                className: O.kQ,
                children: eo
                    ? (0, s.jsx)(r.animated.div, {
                          className: O.bm,
                          style: { transform: (0, r.to)([ei.scale, ei.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(u.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: B,
                              fit: "contain",
                              className: O.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(r.animated.img, {
                          className: O.bm,
                          src: W && null != S && "" !== S && !F ? S : _,
                          alt: "",
                          style: { transform: (0, r.to)([et.scale, et.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(r.animated.div, {
                style: { ...es, transform: es.y.to((e) => `translateY(${e}px)`) },
                className: O.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: O.P_,
                        children: [
                            (0, s.jsx)(m.D, { className: O.DD, variant: "heading-lg/semibold", children: a }),
                            (0, s.jsx)(g.E, { className: O.h_, variant: "text-md/medium", children: E }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: O.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: O.qS,
                                children: [
                                    (0, s.jsx)(T._, { size: "xs", color: x.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, s.jsx)(g.E, {
                                        className: O.Vv,
                                        variant: "text-sm/semibold",
                                        children: L.intl.formatToPlainString(
                                            null != I ? U.default["G/aTXi"] : U.default.r9pa9K,
                                            { boostCount: b },
                                        ),
                                    }),
                                ],
                            }),
                            z &&
                                (0, s.jsxs)("div", {
                                    className: n()(O.qS, O.nt),
                                    children: [
                                        (0, s.jsx)(A.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(g.E, {
                                            className: O.nt,
                                            variant: "text-sm/semibold",
                                            children: L.intl.string(L.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(r.animated.div, {
                style: el,
                className: O.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: O.x6,
                        children: (0, s.jsx)(f.$, {
                            variant: "primary",
                            text: L.intl.string(L.t.oPAx73),
                            onClick: q,
                            fullWidth: !0,
                        }),
                    }),
                    Q &&
                        (0, s.jsx)("div", {
                            className: O.x6,
                            children: (0, s.jsx)(f.$, {
                                variant: "secondary",
                                text: L.intl.string(L.t.GoCQxU),
                                onClick: X,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === G && (0, s.jsx)(h.Lp, { className: O.AP, text: L.intl.string(L.t.y2b7CA) }),
            "beta" === G &&
                (0, s.jsx)(h.Lp, {
                    className: O.AP,
                    text: L.intl.string(L.t.oW0eUd),
                    color: x.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function D(e) {
    let { guildId: t, powerup: i, costDecorator: l, badge: a, onClose: n } = e,
        r = (0, _.Ay)(t, i).type;
    return (0, s.jsx)(G, {
        guildId: t,
        activeStatus: r,
        title: i.title,
        description: i.description,
        cost: i.cost,
        staticImageUrl: i.staticImageUrl,
        animatedImageUrl: i.animatedImageUrl,
        powerup: i,
        costDecorator: l,
        badge: a,
        onClose: n,
    });
}
let w = new Map([[C.W5, "+"]]),
    z = l.forwardRef((e, t) => {
        let { guild: i, onClose: a } = e;
        l.useEffect(() => {
            b.A.shouldFetchCatalogForGuild(i.id) && (0, E.AK)(i.id),
                b.A.shouldFetchPowerupsForGuild(i.id) && (0, E.Xd)(i.id);
        }, [i.id]);
        let n = Array.from((0, I.A)(i.id) ?? [])
            .reverse()
            .slice(0, 6);
        return 0 === n.length
            ? null
            : (0, s.jsxs)("div", {
                  ref: t,
                  className: O.iE,
                  children: [
                      (0, s.jsxs)("div", {
                          className: O.ND,
                          children: [
                              (0, s.jsx)(m.D, {
                                  className: O.R_,
                                  variant: "heading-xxl/semibold",
                                  children: L.intl.string(M.default.wjI18Q),
                              }),
                              (0, s.jsx)(g.E, {
                                  className: O.fV,
                                  variant: "text-md/medium",
                                  children: L.intl.format(M.default.S562fn, {
                                      helpDeskArticle: S.A.getArticleURL(y.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          className: O.vY,
                          children: n.map((e) =>
                              (0, s.jsx)(
                                  D,
                                  {
                                      guildId: i.id,
                                      powerup: e,
                                      costDecorator: w.get(e.skuId),
                                      badge: k.ys[e.skuId],
                                      onClose: a,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
z.displayName = "GuildBoostingMarketingPerkCards";
let Q = z;
