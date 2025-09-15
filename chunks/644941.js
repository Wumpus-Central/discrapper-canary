r.d(t, { default: () => V }), r(388685), r(49124);
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
    w = r(892001),
    I = r(706454),
    E = r(768581),
    N = r(814225),
    S = r(709054),
    C = r(810568),
    T = r(998058),
    k = r(839392),
    A = r(567409),
    D = r(774073),
    G = r(426482),
    Z = r(715318),
    L = r(38516),
    M = r(891949),
    _ = r(252547),
    R = r(484527),
    z = r(131033),
    F = r(296768),
    U = r(978313),
    H = r(206583),
    W = r(388032),
    Y = r(226788);
let X = () =>
    (0, n.jsxs)("div", {
        className: Y.gameBadge,
        children: [
            (0, n.jsx)(m.YqE, { size: "xxs" }),
            (0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: W.intl.string(W.t.kAlUs7),
            }),
        ],
    });
function B(e) {
    var t;
    let { detectedGame: r, application: l, entries: s, viewId: c } = e,
        d = i.useMemo(() => (null == r ? void 0 : r.genres.map(N.P3).join(", ")), [r]),
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
        f = null == l ? void 0 : l.getIconURL(160, E.$k ? "webp" : "png"),
        g = S.default.extractTimestamp(l.id),
        j = o()().diff(o()(g), "days") <= H.G,
        x = s.some((e) => (0, y.ig)(e) === u.o.GLOBAL),
        O = null != (t = r.name) ? t : null == l ? void 0 : l.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: Y.gameArtHero,
                style: { backgroundImage: 'url("'.concat(p, '")') },
            }),
            (0, n.jsxs)("div", {
                className: a()(Y.content, Y.column, Y.gapLg, Y.headerInfo),
                children: [
                    (0, n.jsxs)("div", {
                        className: Y.coverArtRow,
                        children: [
                            (0, n.jsx)("div", {
                                className: Y.logoWrapper,
                                children: (0, n.jsx)(G.C, {
                                    game: r,
                                    application: l,
                                    className: Y.logo,
                                    size: G.Z.LARGE,
                                }),
                            }),
                            (0, n.jsx)(Z.Z, {
                                applicationId: l.id,
                                viewId: c,
                                className: Y.overflowMenu,
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: a()(Y.row, Y.gapSm, Y.gameDetails),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(m.X6q, {
                                    variant: "heading-xl/bold",
                                    children: O,
                                }),
                                (0, n.jsxs)("div", {
                                    className: a()(Y.row, Y.gapSm),
                                    children: [
                                        null != f &&
                                            (0, n.jsx)("img", {
                                                className: Y.gameIcon,
                                                src: f,
                                                height: 16,
                                                alt: W.intl.formatToPlainString(W.t["nh+jWl"], { game: O }),
                                            }),
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: d,
                                        }),
                                        j &&
                                            (0, n.jsx)(m.Text, {
                                                variant: "eyebrow",
                                                className: Y.newBadge,
                                                children: W.intl.string(W.t.y2b7CA),
                                            }),
                                        x &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(m.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, n.jsx)(X, {}),
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
function K(e) {
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
        className: Y.sections,
        children: [
            (0, n.jsx)(_.Z, {
                entries: l,
                viewId: u,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, n.jsx)(M.Z, {
                detectedGame: r,
                trackAction: d,
            }),
            (0, n.jsx)(F.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: d,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function q(e) {
    let { onClose: t, onCloudPlayClick: r, analyticsLocations: i } = e;
    return (
        (0, O.Z)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, n.jsx)(m.ua7, {
            text: W.intl.string(W.t.JVwWvb),
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
                            text: W.intl.string(W.t["jaYS/v"]),
                            variant: "overlay-secondary",
                            onClick: () => {
                                t(), (0, w.closeUserProfileModal)(), r();
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
function J(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: l, onClose: s, applicationId: o } = e,
        c = i.useCallback(
            (e) => {
                r(e);
            },
            [r],
        ),
        u = (0, h.q)(o),
        { analyticsLocations: d } = (0, x.ZP)(j.Z.GAME_PROFILE),
        p = (0, g.Z)({
            application: u,
            analyticsLocations: d,
        }),
        f = null != p;
    return (0, n.jsxs)("div", {
        className: a()(Y.sidebar, Y.column, Y.gapLg),
        children: [
            f &&
                (0, n.jsx)("div", {
                    className: Y.buttonsContainer,
                    children:
                        f &&
                        (0, n.jsx)(q, {
                            onClose: s,
                            onCloudPlayClick: p,
                            analyticsLocations: d,
                        }),
                }),
            (0, n.jsx)(m.X6q, {
                variant: "heading-md/bold",
                children: W.intl.string(W.t.CI0vSE),
            }),
            (0, n.jsxs)("div", {
                className: Y.sections,
                children: [
                    (0, n.jsx)(U.Z, {
                        detectedGame: t,
                        trackAction: l,
                    }),
                    (0, n.jsx)(R.Z, {
                        detectedGame: t,
                        trackClick: l,
                        onInviteResolved: c,
                        closeModal: s,
                    }),
                    (0, n.jsx)(L.Z, {
                        detectedGame: t,
                        trackClick: l,
                    }),
                    (0, n.jsx)(z.Z, { detectedGame: t }),
                    (0, n.jsx)(m.Text, {
                        variant: "text-xxs/normal",
                        children: W.intl.format(W.t.pch2Jy, { igdbLink: H.$f }),
                    }),
                ],
            }),
        ],
    });
}
let V = (e) => {
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
        x = (0, d.e7)([I.default], () => I.default.locale),
        O = i.useMemo(() => (0, C.fP)(), []),
        w = (0, d.Wu)([k.Z], () => {
            var e;
            return (null != (e = k.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
        }),
        [E, N] = i.useState(null),
        S = (0, A.N)(r),
        [G, Z] = i.useState(null),
        L = (0, h.q)(r),
        M = (0, d.e7)([P.Z], () => P.Z.getGame(r)),
        _ = null != (t = null == M ? void 0 : M.name) ? t : null == L ? void 0 : L.name,
        R = (e, t) => {
            var n;
            (0, C.UE)({
                gameName: null != _ ? _ : "",
                applicationId: r,
                action: e,
                similarGameId: t,
                viewId: O,
                officialGuildId: null == G || null == (n = G.guild) ? void 0 : n.id,
            });
        };
    return ((0, f.ZP)(() => {
        (0, C.IS)({
            source: l,
            viewId: O,
            applicationId: r,
            gameName: null != _ ? _ : "",
            authorId: s,
            profileType: C.j7.FullProfile,
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
                    await (0, T.i)(r);
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
        (0, C.wz)({
            viewId: O,
            applicationId: r,
            gameName: null != _ ? _ : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: w.filter(D.z6).slice(0, 5),
            officialGuildId: null == G || null == (e = G.guild) ? void 0 : e.id,
        });
    }),
    null == M || null == L)
        ? null
        : (0, n.jsx)(m.Y0X, {
              transitionState: o,
              size: m.CgR.DYNAMIC,
              className: a()(j, Y.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, n.jsxs)(m.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, n.jsx)(B, {
                          detectedGame: M,
                          application: L,
                          entries: S,
                          viewId: O,
                          trackAction: R,
                      }),
                      (0, n.jsx)(m.y5t, {
                          children: (0, n.jsxs)("div", {
                              className: a()(Y.content, Y.mainContent),
                              children: [
                                  (0, n.jsx)(K, {
                                      detectedGame: M,
                                      application: L,
                                      entries: S,
                                      officialGuildInvite: G,
                                      similarGames: w,
                                      similarGamesError: E,
                                      onClose: c,
                                      viewId: O,
                                      trackAction: R,
                                  }),
                                  (0, n.jsx)(J, {
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
