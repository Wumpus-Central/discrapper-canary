n.d(t, {
    A: () => V,
}),
    n(228524),
    n(896048),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(172218),
    c = n(311907),
    u = n(397927),
    d = n(775602),
    f = n(793574),
    p = n(688810),
    _ = n(942975),
    h = n(645619),
    m = n(363487),
    g = n(263215),
    E = n(998418),
    y = n(828162),
    b = n(71393),
    O = n(975571),
    v = n(987144),
    A = n(652215),
    I = n(800007),
    S = n(568065),
    T = n(985018),
    C = n(294726),
    N = n(333354),
    w = n(826823);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}

function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function x(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: _,
            cost: h,
            costDecorator: g,
            staticImageUrl: E,
            animatedImageUrl: O,
            powerup: N,
            isNew: R,
            onClose: D,
        } = e,
        { analyticsLocations: x } = (0, p.Ay)(),
        M = n !== S.b_.INACTIVE,
        j = (0, m.A)(t),
        k = (0, c.bG)([d.A], () => d.A.useReducedMotion),
        U = i.useRef(null),
        [G, V] = i.useState(!1),
        [F, B] = i.useState(!1),
        H = F,
        Y = F && null != O && "" !== O && !k ? O : E,
        W = i.useCallback(() => {
            let e = b.A.getGuild(t);
            null != e &&
                (0, v.g)({
                    analyticsLocation: {
                        page: A.liQ.GUILD_POWERUPS_MARKETING,
                        section: A.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: x,
                    guild: e,
                });
        }, [t, x]),
        K = i.useCallback(() => {
            D(), (0, y.A)(t, f.A.GUILD_POWERUPS_MARKETING, N.skuId);
        }, [t, N.skuId, D]),
        z = {
            tension: 400,
            friction: 30,
        },
        q = (0, u.zhh)({
            scale: H ? 0.85 : 1,
            y: H ? -32 : 0,
            config: z,
        }),
        Z = (0, u.zhh)({
            scale: H ? 0.7 : 1,
            y: H ? -35 : 0,
            config: z,
        }),
        Q = (0, u.zhh)({
            y: H ? -32 : 0,
            config: z,
        }),
        X = (0, u.zhh)({
            opacity: +!!H,
            transform: H ? "translateY(0)" : "translateY(16px)",
            config: z,
        }),
        J = i.useCallback((e) => {
            e && V(!0);
        }, []),
        $ = (0, l.K)(J),
        ee = N.skuId === I.W5;
    return (0, r.jsxs)("div", {
        className: o()(w.Nr, {
            [w.fM]: G,
        }),
        onMouseEnter: () => B(!0),
        onMouseLeave: () => B(!1),
        children: [
            (0, r.jsx)("div", {
                className: w.sL,
                ref: $,
            }),
            (0, r.jsx)("div", {
                className: w.kQ,
                children: ee
                    ? (0, r.jsx)(s.animated.div, {
                          className: w.bm,
                          style: {
                              transform: (0, s.to)([Z.scale, Z.y], (e, t) =>
                                  "scale(".concat(e, ") translateY(").concat(t, "px)"),
                              ),
                          },
                          children: (0, r.jsx)(u.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: U,
                              fit: "contain",
                              className: w.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(s.animated.img, {
                          className: w.bm,
                          src: Y,
                          alt: "",
                          style: {
                              transform: (0, s.to)([q.scale, q.y], (e, t) =>
                                  "scale(".concat(e, ") translateY(").concat(t, "px)"),
                              ),
                          },
                      }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: L(P({}, Q), {
                    transform: Q.y.to((e) => "translateY(".concat(e, "px)")),
                }),
                className: w.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: w.P_,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                className: w.DD,
                                variant: "heading-lg/semibold",
                                children: a,
                            }),
                            (0, r.jsx)(u.Text, {
                                className: w.h_,
                                variant: "text-md/medium",
                                children: _,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: w.jp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: w.qS,
                                children: [
                                    (0, r.jsx)(u._Jp, {
                                        size: "xs",
                                        color: u.LU0.unsafe_rawColors.ILLO_PINK_40,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        className: w.Vv,
                                        variant: "text-sm/semibold",
                                        children: T.intl.formatToPlainString(
                                            null != g ? C.default["G/aTXi"] : C.default.r9pa9K,
                                            {
                                                boostCount: h,
                                            },
                                        ),
                                    }),
                                ],
                            }),
                            M &&
                                (0, r.jsxs)("div", {
                                    className: o()(w.qS, w.nt),
                                    children: [
                                        (0, r.jsx)(u.yr3, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            className: w.nt,
                                            variant: "text-sm/semibold",
                                            children: T.intl.string(T.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                style: X,
                className: w.NC,
                children: [
                    (0, r.jsx)("div", {
                        className: w.x6,
                        children: (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: T.intl.string(T.t.oPAx73),
                            onClick: W,
                            fullWidth: !0,
                        }),
                    }),
                    j &&
                        (0, r.jsx)("div", {
                            className: w.x6,
                            children: (0, r.jsx)(u.Button, {
                                variant: "secondary",
                                text: T.intl.string(T.t.GoCQxU),
                                onClick: K,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            R &&
                (0, r.jsx)(u.LpS, {
                    className: w.Ad,
                    text: T.intl.string(T.t.y2b7CA),
                }),
        ],
    });
}

function M(e) {
    let { guildId: t, powerup: n, costDecorator: i, isNew: a, onClose: o } = e,
        s = (0, E.Ay)(t, n).type;
    return (0, r.jsx)(x, {
        guildId: t,
        activeStatus: s,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: i,
        isNew: a,
        onClose: o,
    });
}
let j = 3,
    k = new Set([I.W5]),
    U = new Map([[I.W5, "+"]]),
    G = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            h.A.shouldFetchCatalogForGuild(n.id) && (0, _.AK)(n.id),
                h.A.shouldFetchPowerupsForGuild(n.id) && (0, _.Xd)(n.id);
        }, [n.id]);
        let o = (0, g.A)(n.id),
            s = Array.from(null != o ? o : [])
                .reverse()
                .slice(0, j);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: w.iE,
                  children: [
                      (0, r.jsxs)("div", {
                          className: w.ND,
                          children: [
                              (0, r.jsx)(u.Heading, {
                                  className: w.R_,
                                  variant: "heading-xxl/semibold",
                                  children: T.intl.string(N.default.wjI18Q),
                              }),
                              (0, r.jsx)(u.Text, {
                                  className: w.fV,
                                  variant: "text-md/medium",
                                  children: T.intl.format(N.default.S562fn, {
                                      helpDeskArticle: O.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: w.vY,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  M,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: U.get(e.skuId),
                                      isNew: k.has(e.skuId),
                                      onClose: a,
                                  },
                                  "perk-card-".concat(e.skuId),
                              ),
                          ),
                      }),
                  ],
              });
    });
G.displayName = "GuildBoostingMarketingPerkCards";
let V = G;
