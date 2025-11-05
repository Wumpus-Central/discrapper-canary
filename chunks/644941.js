n.d(t, { default: () => ee }), n(388685), n(49124);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(990547),
    d = n(705512),
    u = n(442837),
    m = n(28664),
    f = n(481060),
    g = n(224706),
    p = n(493773),
    x = n(206074),
    h = n(100527),
    v = n(906732),
    j = n(213609),
    O = n(835473),
    y = n(168551),
    I = n(485267),
    b = n(561308),
    E = n(669764),
    N = n(171516),
    S = n(892001),
    P = n(706454),
    w = n(768581),
    C = n(814225),
    T = n(709054),
    A = n(810568),
    k = n(998058),
    G = n(839392),
    Z = n(567409),
    L = n(774073),
    _ = n(426482),
    R = n(715318),
    M = n(108733),
    D = n(38516),
    z = n(891949),
    F = n(252547),
    H = n(484527),
    U = n(131033),
    W = n(296768),
    Y = n(978313),
    B = n(206583),
    K = n(388032),
    X = n(226788);
let J = () =>
    (0, i.jsxs)("div", {
        className: X.gameBadge,
        children: [
            (0, i.jsx)(f.YqE, { size: "xxs" }),
            (0, i.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: K.intl.string(K.t.kAlUsy),
            }),
        ],
    });
function V(e) {
    var t;
    let { detectedGame: n, application: r, entries: s } = e,
        c = l.useMemo(() => (null == n ? void 0 : n.genres.map(C.P3).join(", ")), [n]),
        u = l.useMemo(() => {
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
        m = null == r ? void 0 : r.getIconURL(160, w.$k ? "webp" : "png"),
        g = T.default.extractTimestamp(r.id),
        p = o()().diff(o()(g), "days") <= B.G,
        x = s.some((e) => (0, b.ig)(e) === d.o.GLOBAL),
        h = null != (t = n.name) ? t : null == r ? void 0 : r.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: X.gameArtHero,
                style: { backgroundImage: 'url("'.concat(u, '")') },
            }),
            (0, i.jsxs)("div", {
                className: a()(X.content, X.column, X.gapLg, X.headerInfo),
                children: [
                    (0, i.jsxs)("div", {
                        className: X.coverArtRow,
                        children: [
                            (0, i.jsx)("div", {
                                className: X.logoWrapper,
                                children: (0, i.jsx)(_.C, {
                                    game: n,
                                    application: r,
                                    className: X.logo,
                                    size: _.Z.LARGE,
                                }),
                            }),
                            (0, i.jsx)(R.Z, {
                                applicationId: r.id,
                                className: X.overflowMenu,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: a()(X.row, X.gapSm, X.gameDetails),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    children: h,
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(X.row, X.gapSm),
                                    children: [
                                        null != m &&
                                            (0, i.jsx)("img", {
                                                className: X.gameIcon,
                                                src: m,
                                                height: 16,
                                                alt: K.intl.formatToPlainString(K.t["nh+jWk"], { game: h }),
                                            }),
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        p &&
                                            (0, i.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: X.newBadge,
                                                children: K.intl.string(K.t.y2b7CA),
                                            }),
                                        x &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, i.jsx)(J, {}),
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
        detectedGame: n,
        application: l,
        entries: r,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: o,
        onClose: c,
        viewId: d,
        trackAction: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: X.sections,
        children: [
            (0, i.jsx)(F.Z, {
                entries: r,
                viewId: d,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, i.jsx)(z.Z, {
                detectedGame: n,
                trackAction: u,
            }),
            (0, i.jsx)(W.Z, {
                applicationId: l.id,
                onClose: c,
                trackAction: u,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function $(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, j.Z)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, i.jsx)(m.u, {
            text: K.intl.string(K.t.JVwWva),
            position: "top",
            children: (0, i.jsx)(f.Button, {
                icon: f.v3n,
                text: K.intl.string(K.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function Q(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: r,
            trackAction: s,
            onClose: o,
            applicationId: c,
        } = e,
        d = l.useCallback(() => {
            o(), (0, S.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: u } = (0, v.ZP)(h.Z.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: g } = (function (e) {
            let { applicationId: t, analyticsLocations: n } = e,
                i = (0, O.q)(t),
                l = (0, x.Z)({
                    application: i,
                    analyticsLocations: n,
                });
            return {
                onCloudPlayClick: l,
                isCloudPlayButtonShown: !(0, N.F)(t) && null != l,
            };
        })({
            applicationId: c,
            analyticsLocations: u,
        });
    return (0, i.jsxs)("div", {
        className: a()(X.sidebar, X.column, X.gapLg),
        children: [
            (0, i.jsxs)("div", {
                className: X.buttonsContainer,
                children: [
                    (0, i.jsx)(M.Z, {
                        invite: r,
                        trackClick: s,
                        closeModal: d,
                    }),
                    m &&
                        null != g &&
                        (0, i.jsx)($, {
                            onClose: d,
                            onCloudPlayClick: g,
                            analyticsLocations: u,
                        }),
                ],
            }),
            (0, i.jsx)(f.Heading, {
                variant: "heading-md/bold",
                children: K.intl.string(K.t.CI0vSJ),
            }),
            (0, i.jsxs)("div", {
                className: X.sections,
                children: [
                    (0, i.jsx)(Y.Z, {
                        detectedGame: t,
                        trackAction: s,
                    }),
                    (0, i.jsx)(H.Z, {
                        detectedGame: t,
                        trackClick: s,
                        onInviteResolved: n,
                        closeModal: d,
                    }),
                    (0, i.jsx)(D.Z, {
                        detectedGame: t,
                        trackClick: s,
                    }),
                    (0, i.jsx)(U.Z, { detectedGame: t }),
                    (0, i.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: K.intl.format(K.t.pch2Jw, { igdbLink: B.$f }),
                    }),
                ],
            }),
        ],
    });
}
let ee = (e) => {
    var t;
    let {
            applicationId: n,
            source: r,
            sourceUserId: s,
            transitionState: o,
            onClose: c,
            appContext: d,
            trackExternalAction: m,
        } = e,
        { clientThemesClassName: x } = (0, y.ZP)(),
        h = (0, u.e7)([P.default], () => P.default.locale),
        v = l.useMemo(() => (0, A.fP)(), []),
        j = (0, u.Wu)([G.Z], () => {
            var e;
            return (null != (e = G.Z.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [N, S] = l.useState(null),
        w = (0, Z.N)(n),
        [C, T] = l.useState(null),
        _ = (0, O.q)(n),
        R = (0, u.e7)([E.Z], () => E.Z.getGame(n)),
        M = null != (t = null == R ? void 0 : R.name) ? t : null == _ ? void 0 : _.name,
        D = (e, t) => {
            var i;
            (0, A.UE)({
                gameName: null != M ? M : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: v,
                officialGuildId: null == C || null == (i = C.guild) ? void 0 : i.id,
            });
        };
    return ((0, p.ZP)(() => {
        (0, A.IS)({
            source: r,
            viewId: v,
            applicationId: n,
            gameName: null != M ? M : "",
            authorId: s,
            profileType: A.j7.FullProfile,
        }),
            (0, I.Jn)();
    }),
    (0, O.Z)(j),
    l.useEffect(() => {
        h.startsWith("en") ||
            (null == R ? void 0 : R.summaryLocalized) != null ||
            g.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == R ? void 0 : R.summaryLocalized, h]),
    l.useEffect(() => {
        (async () => {
            if (0 === j.length) {
                S(null);
                try {
                    await (0, k.i)(n);
                } catch (e) {
                    S(e);
                }
            }
        })();
    }, [n, j]),
    (0, p.ZP)(() => () => {
        var e;
        let t = Date.now(),
            i = w.map((e) => {
                let n = (0, b.kr)(e) ? (0, b.T_)(e, t) : (0, b.GL)(e, h);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                });
            });
        (0, A.wz)({
            viewId: v,
            applicationId: n,
            gameName: null != M ? M : "",
            playedFriendIds: w.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: j.filter(L.z6).slice(0, 5),
            officialGuildId: null == C || null == (e = C.guild) ? void 0 : e.id,
        });
    }),
    null == R || null == _)
        ? null
        : (0, i.jsx)(f.Y0X, {
              transitionState: o,
              size: f.CgR.DYNAMIC,
              className: a()(x, X.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, i.jsxs)(f.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, i.jsx)(V, {
                          detectedGame: R,
                          application: _,
                          entries: w,
                          trackAction: D,
                      }),
                      (0, i.jsx)(f.y5t, {
                          children: (0, i.jsxs)("div", {
                              className: a()(X.content, X.mainContent),
                              children: [
                                  (0, i.jsx)(q, {
                                      detectedGame: R,
                                      application: _,
                                      entries: w,
                                      officialGuildInvite: C,
                                      similarGames: j,
                                      similarGamesError: N,
                                      onClose: c,
                                      viewId: v,
                                      trackAction: D,
                                  }),
                                  (0, i.jsx)(Q, {
                                      detectedGame: R,
                                      onSetOfficialGuildInvite: T,
                                      officialGuildInvite: C,
                                      trackAction: D,
                                      onClose: c,
                                      appContext: d,
                                      applicationId: n,
                                      source: r,
                                      trackExternalAction: m,
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
};
