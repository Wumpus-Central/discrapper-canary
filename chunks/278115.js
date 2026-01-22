n.d(t, {
    A: () => V,
}),
    n(228524),
    n(896048),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
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
    b = n(828162),
    y = n(71393),
    O = n(975571),
    A = n(987144),
    v = n(652215),
    S = n(800007),
    I = n(568065),
    T = n(985018),
    C = n(294726),
    N = n(333354),
    R = n(826823);

function w(e, t, n) {
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
                w(e, t, n[t]);
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

function x(e, t) {
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

function L(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: _,
            cost: h,
            costDecorator: g,
            staticImageUrl: E,
            animatedImageUrl: O,
            powerup: S,
            isNew: N,
            onClose: w,
        } = e,
        { analyticsLocations: D } = (0, p.Ay)(),
        L = n !== I.b_.INACTIVE,
        j = (0, m.A)(t),
        M = (0, c.bG)([d.A], () => d.A.useReducedMotion),
        [k, U] = i.useState(!1),
        [G, V] = i.useState(!1),
        F = G,
        B = G && null != O && "" !== O && !M ? O : E,
        H = i.useCallback(() => {
            let e = y.A.getGuild(t);
            null != e &&
                (0, A.g)({
                    analyticsLocation: {
                        page: v.liQ.GUILD_POWERUPS_MARKETING,
                        section: v.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: D,
                    guild: e,
                });
        }, [t, D]),
        Y = i.useCallback(() => {
            w(), (0, b.A)(t, f.A.GUILD_POWERUPS_MARKETING, S.skuId);
        }, [t, S.skuId, w]),
        W = {
            tension: 400,
            friction: 30,
        },
        K = (0, u.zhh)({
            scale: F ? 0.85 : 1,
            y: F ? -32 : 0,
            config: W,
        }),
        z = (0, u.zhh)({
            y: F ? -32 : 0,
            config: W,
        }),
        q = (0, u.zhh)({
            opacity: +!!F,
            transform: F ? "translateY(0)" : "translateY(16px)",
            config: W,
        }),
        X = i.useCallback((e) => {
            e && U(!0);
        }, []),
        Z = (0, l.K)(X);
    return (0, r.jsxs)("div", {
        className: s()(R.Nr, {
            [R.fM]: k,
        }),
        onMouseEnter: () => V(!0),
        onMouseLeave: () => V(!1),
        children: [
            (0, r.jsx)("div", {
                className: R.sL,
                ref: Z,
            }),
            (0, r.jsx)("div", {
                className: R.kQ,
                children: (0, r.jsx)(o.animated.img, {
                    className: R.bm,
                    src: B,
                    alt: "",
                    style: {
                        transform: (0, o.to)([K.scale, K.y], (e, t) =>
                            "scale(".concat(e, ") translateY(").concat(t, "px)"),
                        ),
                    },
                }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: x(P({}, z), {
                    transform: z.y.to((e) => "translateY(".concat(e, "px)")),
                }),
                className: R.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.P_,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                className: R.DD,
                                variant: "heading-lg/semibold",
                                children: a,
                            }),
                            (0, r.jsx)(u.Text, {
                                className: R.h_,
                                variant: "text-md/medium",
                                children: _,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: R.jp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: R.qS,
                                children: [
                                    (0, r.jsx)(u._Jp, {
                                        size: "xs",
                                        color: u.LU0.unsafe_rawColors.ILLO_PINK_40,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        className: R.Vv,
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
                            L &&
                                (0, r.jsxs)("div", {
                                    className: s()(R.qS, R.nt),
                                    children: [
                                        (0, r.jsx)(u.yr3, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            className: R.nt,
                                            variant: "text-sm/semibold",
                                            children: T.intl.string(T.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                style: q,
                className: R.NC,
                children: [
                    (0, r.jsx)("div", {
                        className: R.x6,
                        children: (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: T.intl.string(T.t.oPAx73),
                            onClick: H,
                            fullWidth: !0,
                        }),
                    }),
                    j &&
                        (0, r.jsx)("div", {
                            className: R.x6,
                            children: (0, r.jsx)(u.Button, {
                                variant: "secondary",
                                text: T.intl.string(T.t.GoCQxU),
                                onClick: Y,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            N &&
                (0, r.jsx)(u.LpS, {
                    className: R.Ad,
                    text: T.intl.string(T.t.y2b7CA),
                }),
        ],
    });
}

function j(e) {
    let { guildId: t, powerup: n, costDecorator: i, isNew: a, onClose: s } = e,
        o = (0, E.Ay)(t, n).type;
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
let M = 3,
    k = new Set([S.W5]),
    U = new Map([[S.W5, "+"]]),
    G = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            h.A.shouldFetchCatalogForGuild(n.id) && (0, _.AK)(n.id),
                h.A.shouldFetchPowerupsForGuild(n.id) && (0, _.Xd)(n.id);
        }, [n.id]);
        let s = (0, g.A)(n.id),
            o = Array.from(null != s ? s : [])
                .reverse()
                .slice(0, M);
        return 0 === o.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: R.iE,
                  children: [
                      (0, r.jsxs)("div", {
                          className: R.ND,
                          children: [
                              (0, r.jsx)(u.Heading, {
                                  className: R.R_,
                                  variant: "heading-xxl/semibold",
                                  children: T.intl.string(N.default.wjI18Q),
                              }),
                              (0, r.jsx)(u.Text, {
                                  className: R.fV,
                                  variant: "text-md/medium",
                                  children: T.intl.format(N.default.S562fn, {
                                      helpDeskArticle: O.A.getArticleURL(v.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: R.vY,
                          children: o.map((e) =>
                              (0, r.jsx)(
                                  j,
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
