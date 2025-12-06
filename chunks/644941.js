n.d(t, { default: () => es }), n(388685), n(49124);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    o = n(913527),
    s = n.n(o),
    c = n(990547),
    d = n(88817),
    u = n(705512),
    m = n(442837),
    g = n(28664),
    f = n(481060),
    p = n(224706),
    x = n(493773),
    v = n(206074),
    h = n(100527),
    j = n(906732),
    b = n(213609),
    _ = n(835473),
    y = n(999203),
    I = n(485267),
    O = n(561308),
    P = n(669764),
    w = n(171516),
    E = n(892001),
    C = n(706454),
    N = n(768581),
    S = n(814225),
    k = n(709054),
    T = n(624138),
    G = n(810568),
    A = n(998058),
    M = n(839392),
    Z = n(389430),
    L = n(567409),
    R = n(774073),
    D = n(426482),
    z = n(715318),
    F = n(108733),
    H = n(38516),
    W = n(891949),
    U = n(252547),
    B = n(484527),
    Y = n(131033),
    K = n(296768),
    X = n(978313),
    J = n(206583),
    V = n(388032),
    q = n(226788);
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let Q = () =>
        (0, a.jsxs)("div", {
            className: q.gameBadge,
            children: [
                (0, a.jsx)(f.YqE, { size: "xxs" }),
                (0, a.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: V.intl.string(V.t.kAlUsy),
                }),
            ],
        }),
    ee = i.createContext(void 0);
function et(e) {
    var t;
    let { detectedGame: n, application: r, entries: o } = e,
        c = i.useMemo(() => (null == n ? void 0 : n.genres.map(S.P3).join(", ")), [n]),
        d = i.useMemo(() => {
            if (null == n) return "";
            let { artwork: e, screenshots: t } = n;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return "";
        }, [n]),
        m = (0, T.Ew)(n.iconHash)
            ? null == r
                ? void 0
                : r.getIconURL(160, N.$k ? "webp" : "png")
            : N.ZP.getGameAssetURL({
                  id: n.applicationId,
                  hash: n.iconHash,
                  size: 160,
                  format: N.$k ? "webp" : "png",
              }),
        g = k.default.extractTimestamp(r.id),
        p = s()().diff(s()(g), "days") <= J.G,
        x = o.some((e) => (0, O.ig)(e) === u.o.GLOBAL),
        v = null != (t = n.name) ? t : null == r ? void 0 : r.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: q.gameArtHero,
                style: { backgroundImage: 'url("'.concat(d, '")') },
            }),
            (0, a.jsxs)("div", {
                className: l()(q.content, q.column, q.gapLg, q.headerInfo),
                children: [
                    (0, a.jsxs)("div", {
                        className: q.coverArtRow,
                        children: [
                            (0, a.jsx)("div", {
                                className: q.logoWrapper,
                                children: (0, a.jsx)(D.C, {
                                    game: n,
                                    application: r,
                                    className: q.logo,
                                    size: D.Z.LARGE,
                                }),
                            }),
                            (0, a.jsx)(z.Z, {
                                applicationId: r.id,
                                className: q.overflowMenu,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l()(q.row, q.gapSm, q.gameDetails),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    children: v,
                                }),
                                (0, a.jsxs)("div", {
                                    className: l()(q.row, q.gapSm),
                                    children: [
                                        null != m &&
                                            (0, a.jsx)("img", {
                                                className: q.gameIcon,
                                                src: m,
                                                height: 16,
                                                alt: V.intl.formatToPlainString(V.t["nh+jWk"], { game: v }),
                                            }),
                                        (0, a.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        p &&
                                            (0, a.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: q.newBadge,
                                                children: V.intl.string(V.t.y2b7CA),
                                            }),
                                        x &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, a.jsx)(Q, {}),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
    var t;
    let {
        detectedGame: n,
        application: i,
        entries: r,
        officialGuildInvite: l,
        similarGames: o,
        similarGamesError: s,
        onClose: c,
        viewId: d,
        trackAction: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: q.sections,
        children: [
            (0, a.jsx)(U.Z, {
                entries: r,
                viewId: d,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, a.jsx)(W.Z, {
                detectedGame: n,
                trackAction: u,
            }),
            (0, a.jsx)(K.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: s,
            }),
        ],
    });
}
function ea(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i } = e;
    return (
        (0, b.Z)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, a.jsx)(g.u, {
            text: V.intl.string(V.t.JVwWva),
            position: "top",
            children: (0, a.jsx)(f.Button, {
                icon: f.v3n,
                text: V.intl.string(V.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function ei(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: r,
            trackAction: o,
            onClose: s,
            applicationId: c,
        } = e,
        d = i.useCallback(() => {
            s(), (0, E.closeUserProfileModal)();
        }, [s]),
        { analyticsLocations: u } = (0, j.ZP)(h.Z.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: g } = (function (e) {
            let { applicationId: t, analyticsLocations: n } = e,
                a = (0, _.q)(t),
                i = (0, v.Z)({
                    application: a,
                    analyticsLocations: n,
                });
            return {
                onCloudPlayClick: i,
                isCloudPlayButtonShown: !(0, w.F)(t) && null != i,
            };
        })({
            applicationId: c,
            analyticsLocations: u,
        });
    return (0, a.jsxs)("div", {
        className: l()(q.sidebar, q.column, q.gapLg),
        children: [
            (0, a.jsxs)("div", {
                className: q.buttonsContainer,
                children: [
                    (0, a.jsx)(F.Z, {
                        invite: r,
                        trackClick: o,
                        closeModal: d,
                    }),
                    m &&
                        null != g &&
                        (0, a.jsx)(ea, {
                            onClose: d,
                            onCloudPlayClick: g,
                            analyticsLocations: u,
                        }),
                ],
            }),
            (0, a.jsx)(f.Heading, {
                variant: "heading-md/bold",
                children: V.intl.string(V.t.CI0vSJ),
            }),
            (0, a.jsxs)("div", {
                className: q.sections,
                children: [
                    (0, a.jsx)(X.Z, {
                        detectedGame: t,
                        trackAction: o,
                    }),
                    (0, a.jsx)(B.Z, {
                        detectedGame: t,
                        trackClick: o,
                        onInviteResolved: n,
                        closeModal: d,
                    }),
                    (0, a.jsx)(H.Z, {
                        detectedGame: t,
                        trackClick: o,
                    }),
                    (0, a.jsx)(Y.Z, { detectedGame: t }),
                    (0, a.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: V.intl.format(V.t.pch2Jw, { igdbLink: J.$f }),
                    }),
                ],
            }),
        ],
    });
}
function er(e) {
    var t;
    let {
            applicationId: n,
            source: r,
            sourceUserId: o,
            transitionState: s,
            onClose: c,
            appContext: d,
            trackExternalAction: u,
        } = e,
        { clientThemesClassName: g } = (0, y.ZP)(),
        v = (0, m.e7)([C.default], () => C.default.locale),
        h = i.useMemo(() => (0, G.fP)(), []),
        j = (0, m.Wu)([M.Z], () => {
            var e;
            return (null != (e = M.Z.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [b, w] = i.useState(null),
        E = (0, L.N)(n),
        [N, S] = i.useState(null),
        k = (0, _.q)(n),
        T = (0, m.e7)([P.Z], () => P.Z.getGame(n)),
        Z = null != (t = null == T ? void 0 : T.name) ? t : null == k ? void 0 : k.name,
        D = (e, t) => {
            var a;
            (0, G.UE)({
                gameName: null != Z ? Z : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: h,
                officialGuildId: null == N || null == (a = N.guild) ? void 0 : a.id,
            });
        };
    return ((0, x.ZP)(() => {
        (0, G.IS)({
            source: r,
            viewId: h,
            applicationId: n,
            gameName: null != Z ? Z : "",
            authorId: o,
            profileType: G.j7.FullProfile,
        }),
            (0, I.Jn)();
    }),
    (0, _.Z)(j),
    i.useEffect(() => {
        v.startsWith("en") ||
            (null == T ? void 0 : T.summaryLocalized) != null ||
            p.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == T ? void 0 : T.summaryLocalized, v]),
    i.useEffect(() => {
        (async () => {
            if (0 === j.length) {
                w(null);
                try {
                    await (0, A.i)(n);
                } catch (e) {
                    w(e);
                }
            }
        })();
    }, [n, j]),
    (0, x.ZP)(() => () => {
        var e;
        let t = Date.now(),
            a = E.map((e) => {
                let n = (0, O.kr)(e) ? (0, O.T_)(e, t) : (0, O.GL)(e, v);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                });
            });
        (0, G.wz)({
            viewId: h,
            applicationId: n,
            gameName: null != Z ? Z : "",
            playedFriendIds: E.map((e) => e.author_id),
            playedFriendsData: a,
            similarGames: j.filter(R.z6).slice(0, 5),
            officialGuildId: null == N || null == (e = N.guild) ? void 0 : e.id,
        });
    }),
    null == T || null == k)
        ? null
        : (0, a.jsxs)(f.Y0X, {
              transitionState: s,
              size: f.CgR.DYNAMIC,
              className: l()(g, q.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: [
                  (0, a.jsxs)(f.Ttm, {
                      orientation: "auto",
                      children: [
                          (0, a.jsx)(et, {
                              detectedGame: T,
                              application: k,
                              entries: E,
                              trackAction: D,
                          }),
                          (0, a.jsx)(f.y5t, {
                              children: (0, a.jsxs)("div", {
                                  className: l()(q.content, q.mainContent),
                                  children: [
                                      (0, a.jsx)(en, {
                                          detectedGame: T,
                                          application: k,
                                          entries: E,
                                          officialGuildInvite: N,
                                          similarGames: j,
                                          similarGamesError: b,
                                          onClose: c,
                                          viewId: h,
                                          trackAction: D,
                                      }),
                                      (0, a.jsx)(ei, {
                                          detectedGame: T,
                                          onSetOfficialGuildInvite: S,
                                          officialGuildInvite: N,
                                          trackAction: D,
                                          onClose: c,
                                          appContext: d,
                                          applicationId: n,
                                          source: r,
                                          trackExternalAction: u,
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(eo, {}),
              ],
          });
}
function el(e) {
    let { applicationId: t, transitionState: n } = e,
        { clientThemesClassName: i } = (0, y.ZP)(),
        r = (0, _.q)(t),
        l = (0, m.e7)([P.Z], () => P.Z.getGame(t));
    return null == r || null == l
        ? null
        : (0, a.jsxs)(f.Y0X, {
              transitionState: n,
              size: f.CgR.DYNAMIC,
              className: i,
              parentComponent: "GameProfileModal",
              children: [(0, a.jsx)(d.g, { gameId: l.applicationId }), (0, a.jsx)(eo, {})],
          });
}
function eo() {
    let { enabled: e, canToggle: t } = Z.K.useConfig({ location: "GameProfileModal" }),
        n = i.useContext(ee);
    return null != n && e && t
        ? (0, a.jsx)("div", {
              style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "scale(0.5) translate(-50%, -50%)",
              },
              children: (0, a.jsx)(f.Button, {
                  variant: "primary",
                  onClick: () => n.setIsShowingGameProfileV2((e) => !e),
                  text: "Toggle Game Profile V1 and V2",
              }),
          })
        : null;
}
let es = function (e) {
    let { enabled: t } = Z.K.useConfig({ location: "GameProfileModal" }),
        [n, r] = i.useState(t);
    return (0, a.jsx)(ee.Provider, {
        value: { setIsShowingGameProfileV2: r },
        children: n ? (0, a.jsx)(el, $({}, e)) : (0, a.jsx)(er, $({}, e)),
    });
};
