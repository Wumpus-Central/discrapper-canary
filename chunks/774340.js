(a.r(s), a.d(s, { default: () => el }));
var t = a(477900),
    l = a(582128),
    n = a(687966),
    i = a(17928),
    c = a(508770),
    d = a(834730),
    r = a(289873),
    o = a(364522),
    m = a(780907),
    u = a(58736),
    x = a(363487),
    h = a(546385),
    j = a(71393),
    f = a(975571),
    v = a(498480),
    A = a(907878),
    g = a(755571),
    N = a(475669),
    E = a(589603),
    b = a(192308),
    p = a(289704),
    S = a(297264),
    G = a(821609),
    I = a(104510),
    R = a(793574),
    _ = a(688810),
    C = a(987144),
    y = a(828162),
    M = a(366010),
    k = a(736653),
    D = a(303136),
    L = a(676279),
    T = a(217397);
function V(e) {
    let { className: s } = e,
        a = (0, k.Ay)(),
        l = (0, M.q)(a),
        n = (0, L.TM)()
            ? l
                ? "https://cdn.discordapp.com/assets/content/69d4b14501d44f2aec986761083e10f965087103272626a5db7505f48986f1fd.mp4"
                : "https://cdn.discordapp.com/assets/content/47dc147701661ba3fabce79f4ce1b2bd45760d8c7c9dc70082fca884101bdb1f.mp4"
            : l
              ? "https://cdn.discordapp.com/assets/content/c027e64cb04ec91b12b8af40e11aca80f00279bdb1418e54b7d8cd216e899a2f.webm"
              : "https://cdn.discordapp.com/assets/content/d6dd3399e1bd603866173dc35c95729620b6e6840ed3392941662e8dd188eb9d.webm";
    return (0, t.jsxs)("div", {
        className: s,
        children: [
            (0, t.jsx)("div", { className: T.YL }),
            (0, t.jsx)(
                D.A,
                {
                    fallbackImage: l
                        ? "https://cdn.discordapp.com/assets/content/d8e2decd311794ae583d9165897e2b70181ec10c3553511d03bbeb3876a3f0af.png"
                        : "https://cdn.discordapp.com/assets/content/da80e999bcef3fc647b6697e4b4cbe396505f1517f06fe6e47eb4e24c5538bc9.png",
                    children: (0, t.jsx)("source", { src: n }),
                },
                n,
            ),
        ],
    });
}
var F = a(770681),
    P = a(522446);
function $() {
    let e = (0, t.jsx)("div", { className: P.Uy });
    return (0, t.jsx)(F.A, {
        actions: e,
        children: (0, t.jsx)("div", {
            className: P.nV,
            children: (0, t.jsxs)("div", {
                className: P.dZ,
                children: [
                    (0, t.jsxs)("div", {
                        className: P.fA,
                        children: [
                            (0, t.jsx)("div", { className: P.Su }),
                            (0, t.jsxs)("div", {
                                className: P.CR,
                                children: [
                                    (0, t.jsx)("div", { className: P.Nl }),
                                    (0, t.jsx)("div", { className: P.dj }),
                                ],
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: P.l8,
                        children: Array.from({ length: 4 }).map((e, s) =>
                            (0, t.jsxs)(
                                "div",
                                {
                                    className: P.TE,
                                    children: [
                                        (0, t.jsx)("div", { className: P.D4 }),
                                        (0, t.jsx)("div", { className: P._o }),
                                    ],
                                },
                                s,
                            ),
                        ),
                    }),
                ],
            }),
        }),
    });
}
var w = a(628049),
    B = a(652215),
    z = a(394107),
    O = a(375708);
function Y(e) {
    let { guildId: s } = e,
        n = (0, x.A)(s),
        i = l.useRef(null),
        { analyticsLocations: c } = (0, _.Ay)(R.A.GAME_SERVER_PAGE),
        r = l.useCallback(() => {
            let e = j.A.getGuild(s);
            null != e &&
                (0, C.g)({
                    analyticsLocation: { page: B.liQ.GAME_SERVERS, section: B.JJy.GAME_SERVERS_EMPTY_STATE },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: c,
                    guild: e,
                });
        }, [s, c]),
        o = l.useCallback(() => {
            (0, y.A)(s, R.A.GAME_SERVER_PAGE, w.W5);
        }, [s]),
        m = l.useCallback(() => {
            (0, b.openModalLazy)(async () => {
                let { default: e } = await a.e("726702").then(a.bind(a, 758909));
                return (a) => (0, t.jsx)(e, { ...a, guildId: s });
            });
        }, [s]);
    return (0, t.jsxs)("div", {
        className: T.kL,
        children: [
            (0, t.jsx)(V, { className: T.y2 }),
            (0, t.jsxs)("div", {
                className: T.Qs,
                children: [
                    (0, t.jsx)("div", {
                        ref: i,
                        className: T._q,
                        children: (0, t.jsx)(p.E, { eventTargetRef: i, fit: "contain", stateMachine: "SM_Main_Int" }),
                    }),
                    (0, t.jsx)(S.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: n ? O.intl.string(z.default.SbXvFG) : O.intl.string(z.default.ryqCyJ),
                    }),
                    (0, t.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: T.h_,
                        children: n ? O.intl.string(z.default.D1YcNp) : O.intl.string(z.default.iSX4z8),
                    }),
                    (0, t.jsx)("div", {
                        className: T.Uo,
                        children: n
                            ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)(G.$, {
                                          variant: "expressive",
                                          text: O.intl.string(O.t.LhlgY9),
                                          onClick: o,
                                      }),
                                      (0, t.jsx)(G.$, {
                                          variant: "secondary",
                                          text: O.intl.string(z.default.fxIXv4),
                                          onClick: m,
                                      }),
                                  ],
                              })
                            : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)(G.$, {
                                          variant: "expressive",
                                          icon: I._,
                                          text: O.intl.string(z.default["968/QC"]),
                                          onClick: r,
                                      }),
                                      (0, t.jsx)(G.$, {
                                          variant: "secondary",
                                          text: O.intl.string(z.default.fxIXv4),
                                          onClick: m,
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
            (0, t.jsx)("div", {
                className: T.o2,
                children: Array.from({ length: 4 }).map((e, s) => (0, t.jsx)($, {}, s)),
            }),
        ],
    });
}
var q = a(143407),
    U = a(866665),
    X = a(328380),
    J = a(742290),
    K = a(144977),
    Q = a(660542);
let W = { ...w.ZN, initialStep: w.HS.SERVER_SETTINGS };
function Z(e) {
    let { guildId: s, isAdmin: a } = e,
        { state: n, shouldFetchCatalog: c } = (0, i.cf)([N.A], () => ({
            state: N.A.getStateForGuild(s),
            shouldFetchCatalog: N.A.shouldFetchCatalogForGuild(s),
        }));
    l.useEffect(() => {
        c && (0, v.z9)(s);
    }, [s, c]);
    let { catalog: d, instances: m } = l.useMemo(
            () => ({ catalog: Object.values(n?.catalog ?? {}), instances: Object.values(n?.instances ?? {}) }),
            [n?.catalog, n?.instances],
        ),
        u = m.length >= w.ZI;
    return 0 === d.length
        ? (0, t.jsx)("div", {
              className: Q.kL,
              children: (0, t.jsx)(r.y, { type: r.t.SPINNING_CIRCLE, className: Q.u1 }),
          })
        : (0, t.jsxs)("div", {
              className: Q.kL,
              children: [
                  (0, t.jsx)(S.D, {
                      className: Q.R_,
                      variant: "heading-md/semibold",
                      children: O.intl.string(a ? z.default["3vWDMz"] : z.default.Uvf9GK),
                  }),
                  a && u && (0, t.jsx)("div", { className: Q.Bq, children: (0, t.jsx)(J.k, {}) }),
                  (0, t.jsx)(o.Ip, {
                      className: Q.nd,
                      children: (0, t.jsx)("div", {
                          className: Q.Y_,
                          children: d.map((e, l) =>
                              a
                                  ? (0, t.jsx)(
                                        U.m,
                                        {
                                            asContainer: !0,
                                            text: e.disabled
                                                ? O.intl.formatToPlainString(z.default.uVpJYf, { gameName: e.name })
                                                : null,
                                            position: "top",
                                            children: (0, t.jsx)(X.A, {
                                                guildId: s,
                                                game: e,
                                                onClick: () =>
                                                    (0, K.A)({
                                                        guildId: s,
                                                        stepConfig: W,
                                                        initialGameServerGame: e,
                                                        analyticsLocation: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                                    }),
                                                imageClassName: Q.Sl,
                                                titleClassName: Q.DD,
                                                variant: u || e.disabled ? X.e.DISABLED : X.e.CLICKABLE,
                                                location: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                            }),
                                        },
                                        `sidebar-game-${l}-${e.id}`,
                                    )
                                  : (0, t.jsx)(
                                        X.A,
                                        {
                                            guildId: s,
                                            game: e,
                                            variant: X.e.VIEWABLE,
                                            imageClassName: Q.Sl,
                                            titleClassName: Q.DD,
                                            location: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                        },
                                        `sidebar-game-${l}-${e.id}`,
                                    ),
                          ),
                      }),
                  }),
              ],
          });
}
var H = a(927813),
    ee = a(218394);
let es = 30 * H.A.Millis.SECOND,
    ea = 5 * H.A.Millis.SECOND;
var et = a(135108);
function el(e) {
    var s;
    let a,
        { guildId: b } = e;
    (0, A.tR)(b);
    let p = (0, g.U)("GameServerPage"),
        S = (0, i.bG)([j.A], () => j.A.getGuild(b)?.features.has(B.GuildFeatures.GAME_SERVERS) ?? !1);
    ((s = S ? b : null),
        (a = (0, ee.j)()),
        l.useEffect(() => {
            if (null == s) return;
            let e = !0,
                t = null,
                l = 0,
                n = (function i() {
                    return setTimeout(
                        () => {
                            null == s ||
                                (a &&
                                    ((t = new AbortController()),
                                    (0, v.cq)(s, !1, t.signal)
                                        .then(() => (l = 0))
                                        .catch(() => (l = Math.min(l + 1, 4)))
                                        .finally(() => {
                                            e && (n = i());
                                        })));
                        },
                        es * Math.pow(2, l) + Math.random() * ea,
                    );
                })();
            return () => {
                ((e = !1), t?.abort(), clearTimeout(n));
            };
        }, [s, a]),
        l.useEffect(() => {
            S && ((0, v.cq)(b), m.Ay.getDetectableGames());
        }, [b, S]));
    let G = (0, x.A)(b),
        I = (0, E.N)("GameServerPage"),
        R = (0, i.bG)([N.A], () => N.A.getStateForGuild(b)),
        _ = l.useMemo(() => {
            if (!R?.hasFetchedInstances) return;
            let e = Object.values(R.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, s) => (0, t.jsx)(q.Ay, { guildId: b, instance: e }, `${e.gameId}-${s}`));
        }, [R?.instances, R?.hasFetchedInstances, b]);
    return (0, t.jsxs)("div", {
        className: et.kL,
        children: [
            (0, t.jsxs)(u.Ay, {
                className: et.KE,
                toolbar: (0, t.jsx)("div", {}),
                children: [
                    (0, t.jsx)(u.Ay.Icon, { icon: n.GameControllerIcon, "aria-label": "" }),
                    (0, t.jsx)(u.Ay.Title, { children: O.intl.string(z.default.vCzwM7) }),
                    (0, t.jsx)(c.E, { type: "beta", variant: "brand" }),
                    (0, t.jsx)(u.Ay.Divider, { className: et.yF }),
                    (0, t.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: O.intl.format(z.default.LiR4eN, {
                            helpCenterUrl: f.A.getArticleURL(B.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: et.hQ,
                children: [
                    S && !R?.hasFetchedInstances
                        ? (0, t.jsx)("div", {
                              className: et.dc,
                              children: (0, t.jsx)(r.y, { type: r.t.SPINNING_CIRCLE }),
                          })
                        : null == _
                          ? (0, t.jsx)(Y, { guildId: b })
                          : (0, t.jsxs)("div", {
                                className: et.nd,
                                children: [
                                    p &&
                                        (0, t.jsx)("div", {
                                            className: et.MR,
                                            children: (0, t.jsx)(h.A, {
                                                look: h.k.WARNING,
                                                children: O.intl.format(z.default.XzXjK2, {}),
                                            }),
                                        }),
                                    (0, t.jsx)(o.Ip, {
                                        children: (0, t.jsx)("div", { className: et.Y_, children: _ }),
                                    }),
                                ],
                            }),
                    (G || I) && (0, t.jsx)(Z, { guildId: b, isAdmin: G ?? !1 }),
                ],
            }),
        ],
    });
}
