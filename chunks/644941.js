r.d(t, { default: () => $ }), r(388685), r(49124);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    a = r.n(l),
    s = r(913527),
    o = r.n(s),
    c = r(990547),
    u = r(705512),
    d = r(442837),
    m = r(481060),
    p = r(224706),
    f = r(493773),
    g = r(206074),
    j = r(100527),
    x = r(906732),
    O = r(213609),
    h = r(835473),
    v = r(168551),
    b = r(485267),
    y = r(561308),
    P = r(669764),
    w = r(171516),
    I = r(892001),
    E = r(706454),
    N = r(768581),
    S = r(814225),
    C = r(709054),
    T = r(810568),
    k = r(998058),
    A = r(839392),
    D = r(567409),
    G = r(774073),
    Z = r(426482),
    L = r(715318),
    M = r(38516),
    _ = r(891949),
    R = r(252547),
    z = r(484527),
    F = r(131033),
    U = r(296768),
    H = r(978313),
    W = r(206583),
    Y = r(388032),
    X = r(456486);
let B = () =>
    (0, n.jsxs)("div", {
        className: X.gameBadge,
        children: [
            (0, n.jsx)(m.YqE, { size: "xxs" }),
            (0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: Y.intl.string(Y.t.kAlUs7),
            }),
        ],
    });
function K(e) {
    var t;
    let { detectedGame: r, application: l, entries: s, viewId: c } = e,
        d = i.useMemo(() => (null == r ? void 0 : r.genres.map(S.P3).join(", ")), [r]),
        p = i.useMemo(() => {
            if (null == r) return "";
            let { artwork: e, screenshots: t } = r;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return "";
        }, [r]),
        f = null == l ? void 0 : l.getIconURL(160, N.$k ? "webp" : "png"),
        g = C.default.extractTimestamp(l.id),
        j = o()().diff(o()(g), "days") <= W.G,
        x = s.some((e) => (0, y.ig)(e) === u.o.GLOBAL),
        O = null != (t = r.name) ? t : null == l ? void 0 : l.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: X.gameArtHero,
                style: { backgroundImage: 'url("'.concat(p, '")') },
            }),
            (0, n.jsxs)("div", {
                className: a()(X.content, X.column, X.gapLg, X.headerInfo),
                children: [
                    (0, n.jsxs)("div", {
                        className: X.coverArtRow,
                        children: [
                            (0, n.jsx)("div", {
                                className: X.logoWrapper,
                                children: (0, n.jsx)(Z.C, {
                                    game: r,
                                    application: l,
                                    className: X.logo,
                                    size: Z.Z.LARGE,
                                }),
                            }),
                            (0, n.jsx)(L.Z, {
                                applicationId: l.id,
                                viewId: c,
                                className: X.overflowMenu,
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: a()(X.row, X.gapSm, X.gameDetails),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(m.X6q, {
                                    variant: "heading-xl/bold",
                                    children: O,
                                }),
                                (0, n.jsxs)("div", {
                                    className: a()(X.row, X.gapSm),
                                    children: [
                                        null != f &&
                                            (0, n.jsx)("img", {
                                                className: X.gameIcon,
                                                src: f,
                                                height: 16,
                                                alt: Y.intl.formatToPlainString(Y.t["nh+jWl"], { game: O }),
                                            }),
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: d,
                                        }),
                                        j &&
                                            (0, n.jsx)(m.Text, {
                                                variant: "eyebrow",
                                                className: X.newBadge,
                                                children: Y.intl.string(Y.t.y2b7CA),
                                            }),
                                        x &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(m.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, n.jsx)(B, {}),
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
function q(e) {
    var t;
    let {
        detectedGame: r,
        application: i,
        entries: l,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: o,
        onClose: c,
        viewId: u,
        trackAction: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: X.sections,
        children: [
            (0, n.jsx)(R.Z, {
                entries: l,
                viewId: u,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, n.jsx)(_.Z, {
                detectedGame: r,
                trackAction: d,
            }),
            (0, n.jsx)(U.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: d,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function J(e) {
    let { onClose: t, onCloudPlayClick: r, analyticsLocations: i } = e;
    return (
        (0, O.Z)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, n.jsx)(m.ua7, {
            text: Y.intl.string(Y.t.JVwWvb),
            position: "top",
            children: (e) => {
                var i, l;
                return (0, n.jsx)(
                    m.zxk,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, e)),
                    (l = l =
                        {
                            icon: m.v3n,
                            text: Y.intl.string(Y.t["jaYS/v"]),
                            variant: "overlay-secondary",
                            onClick: () => {
                                t(), (0, I.closeUserProfileModal)(), r();
                            },
                            fullWidth: !0,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                );
            },
        })
    );
}
function V(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: l, onClose: s, applicationId: o } = e,
        c = i.useCallback(
            (e) => {
                r(e);
            },
            [r],
        ),
        { analyticsLocations: u } = (0, x.ZP)(j.Z.GAME_PROFILE),
        { isCloudPlayButtonShown: d, onCloudPlayClick: p } = (function (e) {
            let { applicationId: t, analyticsLocations: r } = e,
                n = (0, h.q)(t),
                i = (0, g.Z)({
                    application: n,
                    analyticsLocations: r,
                });
            return {
                onCloudPlayClick: i,
                isCloudPlayButtonShown: !(0, w.F)(t) && null != i,
            };
        })({
            applicationId: o,
            analyticsLocations: u,
        });
    return (0, n.jsxs)("div", {
        className: a()(X.sidebar, X.column, X.gapLg),
        children: [
            d &&
                (0, n.jsx)("div", {
                    className: X.buttonsContainer,
                    children:
                        d &&
                        null != p &&
                        (0, n.jsx)(J, {
                            onClose: s,
                            onCloudPlayClick: p,
                            analyticsLocations: u,
                        }),
                }),
            (0, n.jsx)(m.X6q, {
                variant: "heading-md/bold",
                children: Y.intl.string(Y.t.CI0vSE),
            }),
            (0, n.jsxs)("div", {
                className: X.sections,
                children: [
                    (0, n.jsx)(H.Z, {
                        detectedGame: t,
                        trackAction: l,
                    }),
                    (0, n.jsx)(z.Z, {
                        detectedGame: t,
                        trackClick: l,
                        onInviteResolved: c,
                        closeModal: s,
                    }),
                    (0, n.jsx)(M.Z, {
                        detectedGame: t,
                        trackClick: l,
                    }),
                    (0, n.jsx)(F.Z, { detectedGame: t }),
                    (0, n.jsx)(m.Text, {
                        variant: "text-xxs/normal",
                        children: Y.intl.format(Y.t.pch2Jy, { igdbLink: W.$f }),
                    }),
                ],
            }),
        ],
    });
}
let $ = (e) => {
    var t;
    let {
            applicationId: r,
            source: l,
            sourceUserId: s,
            transitionState: o,
            onClose: c,
            appContext: u,
            trackExternalAction: g,
        } = e,
        { clientThemesClassName: j } = (0, v.ZP)(),
        x = (0, d.e7)([E.default], () => E.default.locale),
        O = i.useMemo(() => (0, T.fP)(), []),
        w = (0, d.Wu)([A.Z], () => {
            var e;
            return (null != (e = A.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
        }),
        [I, N] = i.useState(null),
        S = (0, D.N)(r),
        [C, Z] = i.useState(null),
        L = (0, h.q)(r),
        M = (0, d.e7)([P.Z], () => P.Z.getGame(r)),
        _ = null != (t = null == M ? void 0 : M.name) ? t : null == L ? void 0 : L.name,
        R = (e, t) => {
            var n;
            (0, T.UE)({
                gameName: null != _ ? _ : "",
                applicationId: r,
                action: e,
                similarGameId: t,
                viewId: O,
                officialGuildId: null == C || null == (n = C.guild) ? void 0 : n.id,
            });
        };
    return ((0, f.ZP)(() => {
        (0, T.IS)({
            source: l,
            viewId: O,
            applicationId: r,
            gameName: null != _ ? _ : "",
            authorId: s,
            profileType: T.j7.FullProfile,
        }),
            (0, b.Jn)();
    }),
    (0, h.Z)(w),
    i.useEffect(() => {
        x.startsWith("en") ||
            (null == M ? void 0 : M.summaryLocalized) != null ||
            p.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
    }, [r, null == M ? void 0 : M.summaryLocalized, x]),
    i.useEffect(() => {
        (async () => {
            if (0 === w.length) {
                N(null);
                try {
                    await (0, k.i)(r);
                } catch (e) {
                    N(e);
                }
            }
        })();
    }, [r, w]),
    (0, f.ZP)(() => () => {
        var e;
        let t = Date.now(),
            n = S.map((e) => {
                let r = (0, y.kr)(e) ? (0, y.T_)(e, t) : (0, y.GL)(e, x);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: r,
                });
            });
        (0, T.wz)({
            viewId: O,
            applicationId: r,
            gameName: null != _ ? _ : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: w.filter(G.z6).slice(0, 5),
            officialGuildId: null == C || null == (e = C.guild) ? void 0 : e.id,
        });
    }),
    null == M || null == L)
        ? null
        : (0, n.jsx)(m.Y0X, {
              transitionState: o,
              size: m.CgR.DYNAMIC,
              className: a()(j, X.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, n.jsxs)(m.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, n.jsx)(K, {
                          detectedGame: M,
                          application: L,
                          entries: S,
                          viewId: O,
                          trackAction: R,
                      }),
                      (0, n.jsx)(m.y5t, {
                          children: (0, n.jsxs)("div", {
                              className: a()(X.content, X.mainContent),
                              children: [
                                  (0, n.jsx)(q, {
                                      detectedGame: M,
                                      application: L,
                                      entries: S,
                                      officialGuildInvite: C,
                                      similarGames: w,
                                      similarGamesError: I,
                                      onClose: c,
                                      viewId: O,
                                      trackAction: R,
                                  }),
                                  (0, n.jsx)(V, {
                                      detectedGame: M,
                                      setOfficialGuildInvite: Z,
                                      trackAction: R,
                                      onClose: c,
                                      appContext: u,
                                      applicationId: r,
                                      source: l,
                                      trackExternalAction: g,
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
};
