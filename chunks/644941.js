n.d(t, { default: () => Q }), n(388685), n(49124);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(990547),
    d = n(705512),
    u = n(442837),
    m = n(28664),
    f = n(481060),
    p = n(224706),
    x = n(493773),
    g = n(206074),
    h = n(100527),
    v = n(906732),
    j = n(213609),
    O = n(835473),
    y = n(168551),
    I = n(485267),
    b = n(561308),
    E = n(669764),
    N = n(171516),
    P = n(892001),
    w = n(706454),
    S = n(768581),
    C = n(814225),
    T = n(709054),
    A = n(810568),
    k = n(998058),
    G = n(839392),
    Z = n(567409),
    _ = n(774073),
    L = n(426482),
    M = n(715318),
    D = n(38516),
    R = n(891949),
    z = n(252547),
    F = n(484527),
    U = n(131033),
    H = n(296768),
    W = n(978313),
    Y = n(206583),
    X = n(388032),
    B = n(226788);
let K = () =>
    (0, r.jsxs)("div", {
        className: B.gameBadge,
        children: [
            (0, r.jsx)(f.YqE, { size: "xxs" }),
            (0, r.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: X.intl.string(X.t.kAlUs7),
            }),
        ],
    });
function q(e) {
    var t;
    let { detectedGame: n, application: l, entries: s, viewId: c } = e,
        u = i.useMemo(() => (null == n ? void 0 : n.genres.map(C.P3).join(", ")), [n]),
        m = i.useMemo(() => {
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
        p = null == l ? void 0 : l.getIconURL(160, S.$k ? "webp" : "png"),
        x = T.default.extractTimestamp(l.id),
        g = o()().diff(o()(x), "days") <= Y.G,
        h = s.some((e) => (0, b.ig)(e) === d.o.GLOBAL),
        v = null != (t = n.name) ? t : null == l ? void 0 : l.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: B.gameArtHero,
                style: { backgroundImage: 'url("'.concat(m, '")') },
            }),
            (0, r.jsxs)("div", {
                className: a()(B.content, B.column, B.gapLg, B.headerInfo),
                children: [
                    (0, r.jsxs)("div", {
                        className: B.coverArtRow,
                        children: [
                            (0, r.jsx)("div", {
                                className: B.logoWrapper,
                                children: (0, r.jsx)(L.C, {
                                    game: n,
                                    application: l,
                                    className: B.logo,
                                    size: L.Z.LARGE,
                                }),
                            }),
                            (0, r.jsx)(M.Z, {
                                applicationId: l.id,
                                viewId: c,
                                className: B.overflowMenu,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: a()(B.row, B.gapSm, B.gameDetails),
                        children: (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(f.X6q, {
                                    variant: "heading-xl/bold",
                                    children: v,
                                }),
                                (0, r.jsxs)("div", {
                                    className: a()(B.row, B.gapSm),
                                    children: [
                                        null != p &&
                                            (0, r.jsx)("img", {
                                                className: B.gameIcon,
                                                src: p,
                                                height: 16,
                                                alt: X.intl.formatToPlainString(X.t["nh+jWl"], { game: v }),
                                            }),
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: u,
                                        }),
                                        g &&
                                            (0, r.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: B.newBadge,
                                                children: X.intl.string(X.t.y2b7CA),
                                            }),
                                        h &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, r.jsx)(K, {}),
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
function J(e) {
    var t;
    let {
        detectedGame: n,
        application: i,
        entries: l,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: o,
        onClose: c,
        viewId: d,
        trackAction: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: B.sections,
        children: [
            (0, r.jsx)(z.Z, {
                entries: l,
                viewId: d,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, r.jsx)(R.Z, {
                detectedGame: n,
                trackAction: u,
            }),
            (0, r.jsx)(H.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: u,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function V(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i } = e;
    return (
        (0, j.Z)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, r.jsx)(m.u, {
            text: X.intl.string(X.t.JVwWvb),
            position: "top",
            children: (0, r.jsx)(f.zxk, {
                icon: f.v3n,
                text: X.intl.string(X.t["jaYS/v"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), (0, P.closeUserProfileModal)(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function $(e) {
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: l, onClose: s, applicationId: o } = e,
        c = i.useCallback(
            (e) => {
                n(e);
            },
            [n],
        ),
        { analyticsLocations: d } = (0, v.ZP)(h.Z.GAME_PROFILE),
        { isCloudPlayButtonShown: u, onCloudPlayClick: m } = (function (e) {
            let { applicationId: t, analyticsLocations: n } = e,
                r = (0, O.q)(t),
                i = (0, g.Z)({
                    application: r,
                    analyticsLocations: n,
                });
            return {
                onCloudPlayClick: i,
                isCloudPlayButtonShown: !(0, N.F)(t) && null != i,
            };
        })({
            applicationId: o,
            analyticsLocations: d,
        });
    return (0, r.jsxs)("div", {
        className: a()(B.sidebar, B.column, B.gapLg),
        children: [
            u &&
                (0, r.jsx)("div", {
                    className: B.buttonsContainer,
                    children:
                        u &&
                        null != m &&
                        (0, r.jsx)(V, {
                            onClose: s,
                            onCloudPlayClick: m,
                            analyticsLocations: d,
                        }),
                }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-md/bold",
                children: X.intl.string(X.t.CI0vSE),
            }),
            (0, r.jsxs)("div", {
                className: B.sections,
                children: [
                    (0, r.jsx)(W.Z, {
                        detectedGame: t,
                        trackAction: l,
                    }),
                    (0, r.jsx)(F.Z, {
                        detectedGame: t,
                        trackClick: l,
                        onInviteResolved: c,
                        closeModal: s,
                    }),
                    (0, r.jsx)(D.Z, {
                        detectedGame: t,
                        trackClick: l,
                    }),
                    (0, r.jsx)(U.Z, { detectedGame: t }),
                    (0, r.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: X.intl.format(X.t.pch2Jy, { igdbLink: Y.$f }),
                    }),
                ],
            }),
        ],
    });
}
let Q = (e) => {
    var t;
    let {
            applicationId: n,
            source: l,
            sourceUserId: s,
            transitionState: o,
            onClose: c,
            appContext: d,
            trackExternalAction: m,
        } = e,
        { clientThemesClassName: g } = (0, y.ZP)(),
        h = (0, u.e7)([w.default], () => w.default.locale),
        v = i.useMemo(() => (0, A.fP)(), []),
        j = (0, u.Wu)([G.Z], () => {
            var e;
            return (null != (e = G.Z.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [N, P] = i.useState(null),
        S = (0, Z.N)(n),
        [C, T] = i.useState(null),
        L = (0, O.q)(n),
        M = (0, u.e7)([E.Z], () => E.Z.getGame(n)),
        D = null != (t = null == M ? void 0 : M.name) ? t : null == L ? void 0 : L.name,
        R = (e, t) => {
            var r;
            (0, A.UE)({
                gameName: null != D ? D : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: v,
                officialGuildId: null == C || null == (r = C.guild) ? void 0 : r.id,
            });
        };
    return ((0, x.ZP)(() => {
        (0, A.IS)({
            source: l,
            viewId: v,
            applicationId: n,
            gameName: null != D ? D : "",
            authorId: s,
            profileType: A.j7.FullProfile,
        }),
            (0, I.Jn)();
    }),
    (0, O.Z)(j),
    i.useEffect(() => {
        h.startsWith("en") ||
            (null == M ? void 0 : M.summaryLocalized) != null ||
            p.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == M ? void 0 : M.summaryLocalized, h]),
    i.useEffect(() => {
        (async () => {
            if (0 === j.length) {
                P(null);
                try {
                    await (0, k.i)(n);
                } catch (e) {
                    P(e);
                }
            }
        })();
    }, [n, j]),
    (0, x.ZP)(() => () => {
        var e;
        let t = Date.now(),
            r = S.map((e) => {
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
            gameName: null != D ? D : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: r,
            similarGames: j.filter(_.z6).slice(0, 5),
            officialGuildId: null == C || null == (e = C.guild) ? void 0 : e.id,
        });
    }),
    null == M || null == L)
        ? null
        : (0, r.jsx)(f.Y0X, {
              transitionState: o,
              size: f.CgR.DYNAMIC,
              className: a()(g, B.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, r.jsxs)(f.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, r.jsx)(q, {
                          detectedGame: M,
                          application: L,
                          entries: S,
                          viewId: v,
                          trackAction: R,
                      }),
                      (0, r.jsx)(f.y5t, {
                          children: (0, r.jsxs)("div", {
                              className: a()(B.content, B.mainContent),
                              children: [
                                  (0, r.jsx)(J, {
                                      detectedGame: M,
                                      application: L,
                                      entries: S,
                                      officialGuildInvite: C,
                                      similarGames: j,
                                      similarGamesError: N,
                                      onClose: c,
                                      viewId: v,
                                      trackAction: R,
                                  }),
                                  (0, r.jsx)($, {
                                      detectedGame: M,
                                      setOfficialGuildInvite: T,
                                      trackAction: R,
                                      onClose: c,
                                      appContext: d,
                                      applicationId: n,
                                      source: l,
                                      trackExternalAction: m,
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
};
