n.d(t, { default: () => et }), n(388685), n(49124);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(990547),
    d = n(705512),
    u = n(442837),
    m = n(28664),
    g = n(481060),
    f = n(224706),
    p = n(493773),
    x = n(206074),
    h = n(100527),
    v = n(906732),
    j = n(213609),
    _ = n(835473),
    I = n(999203),
    b = n(485267),
    y = n(561308),
    O = n(669764),
    E = n(171516),
    w = n(892001),
    N = n(706454),
    P = n(768581),
    S = n(814225),
    C = n(709054),
    k = n(624138),
    A = n(810568),
    T = n(998058),
    G = n(839392),
    Z = n(567409),
    M = n(774073),
    L = n(426482),
    R = n(715318),
    D = n(108733),
    z = n(38516),
    F = n(891949),
    H = n(252547),
    W = n(484527),
    U = n(131033),
    B = n(296768),
    Y = n(978313),
    K = n(206583),
    X = n(388032),
    J = n(226788);
let V = () =>
    (0, a.jsxs)("div", {
        className: J.gameBadge,
        children: [
            (0, a.jsx)(g.YqE, { size: "xxs" }),
            (0, a.jsx)(g.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: X.intl.string(X.t.kAlUsy),
            }),
        ],
    });
function q(e) {
    var t;
    let { detectedGame: n, application: r, entries: s } = e,
        c = i.useMemo(() => (null == n ? void 0 : n.genres.map(S.P3).join(", ")), [n]),
        u = i.useMemo(() => {
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
        m = (0, k.Ew)(n.iconHash)
            ? null == r
                ? void 0
                : r.getIconURL(160, P.$k ? "webp" : "png")
            : P.ZP.getGameAssetURL({
                  id: n.applicationId,
                  hash: n.iconHash,
                  size: 160,
                  format: P.$k ? "webp" : "png",
              }),
        f = C.default.extractTimestamp(r.id),
        p = o()().diff(o()(f), "days") <= K.G,
        x = s.some((e) => (0, y.ig)(e) === d.o.GLOBAL),
        h = null != (t = n.name) ? t : null == r ? void 0 : r.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: J.gameArtHero,
                style: { backgroundImage: 'url("'.concat(u, '")') },
            }),
            (0, a.jsxs)("div", {
                className: l()(J.content, J.column, J.gapLg, J.headerInfo),
                children: [
                    (0, a.jsxs)("div", {
                        className: J.coverArtRow,
                        children: [
                            (0, a.jsx)("div", {
                                className: J.logoWrapper,
                                children: (0, a.jsx)(L.C, {
                                    game: n,
                                    application: r,
                                    className: J.logo,
                                    size: L.Z.LARGE,
                                }),
                            }),
                            (0, a.jsx)(R.Z, {
                                applicationId: r.id,
                                className: J.overflowMenu,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l()(J.row, J.gapSm, J.gameDetails),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(g.Heading, {
                                    variant: "heading-xl/bold",
                                    children: h,
                                }),
                                (0, a.jsxs)("div", {
                                    className: l()(J.row, J.gapSm),
                                    children: [
                                        null != m &&
                                            (0, a.jsx)("img", {
                                                className: J.gameIcon,
                                                src: m,
                                                height: 16,
                                                alt: X.intl.formatToPlainString(X.t["nh+jWk"], { game: h }),
                                            }),
                                        (0, a.jsx)(g.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        p &&
                                            (0, a.jsx)(g.Text, {
                                                variant: "eyebrow",
                                                className: J.newBadge,
                                                children: X.intl.string(X.t.y2b7CA),
                                            }),
                                        x &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(g.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, a.jsx)(V, {}),
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
function $(e) {
    var t;
    let {
        detectedGame: n,
        application: i,
        entries: r,
        officialGuildInvite: l,
        similarGames: s,
        similarGamesError: o,
        onClose: c,
        viewId: d,
        trackAction: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: J.sections,
        children: [
            (0, a.jsx)(H.Z, {
                entries: r,
                viewId: d,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, a.jsx)(F.Z, {
                detectedGame: n,
                trackAction: u,
            }),
            (0, a.jsx)(B.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: u,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function Q(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i } = e;
    return (
        (0, j.Z)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, a.jsx)(m.u, {
            text: X.intl.string(X.t.JVwWva),
            position: "top",
            children: (0, a.jsx)(g.Button, {
                icon: g.v3n,
                text: X.intl.string(X.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function ee(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: r,
            trackAction: s,
            onClose: o,
            applicationId: c,
        } = e,
        d = i.useCallback(() => {
            o(), (0, w.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: u } = (0, v.ZP)(h.Z.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: f } = (function (e) {
            let { applicationId: t, analyticsLocations: n } = e,
                a = (0, _.q)(t),
                i = (0, x.Z)({
                    application: a,
                    analyticsLocations: n,
                });
            return {
                onCloudPlayClick: i,
                isCloudPlayButtonShown: !(0, E.F)(t) && null != i,
            };
        })({
            applicationId: c,
            analyticsLocations: u,
        });
    return (0, a.jsxs)("div", {
        className: l()(J.sidebar, J.column, J.gapLg),
        children: [
            (0, a.jsxs)("div", {
                className: J.buttonsContainer,
                children: [
                    (0, a.jsx)(D.Z, {
                        invite: r,
                        trackClick: s,
                        closeModal: d,
                    }),
                    m &&
                        null != f &&
                        (0, a.jsx)(Q, {
                            onClose: d,
                            onCloudPlayClick: f,
                            analyticsLocations: u,
                        }),
                ],
            }),
            (0, a.jsx)(g.Heading, {
                variant: "heading-md/bold",
                children: X.intl.string(X.t.CI0vSJ),
            }),
            (0, a.jsxs)("div", {
                className: J.sections,
                children: [
                    (0, a.jsx)(Y.Z, {
                        detectedGame: t,
                        trackAction: s,
                    }),
                    (0, a.jsx)(W.Z, {
                        detectedGame: t,
                        trackClick: s,
                        onInviteResolved: n,
                        closeModal: d,
                    }),
                    (0, a.jsx)(z.Z, {
                        detectedGame: t,
                        trackClick: s,
                    }),
                    (0, a.jsx)(U.Z, { detectedGame: t }),
                    (0, a.jsx)(g.Text, {
                        variant: "text-xxs/normal",
                        children: X.intl.format(X.t.pch2Jw, { igdbLink: K.$f }),
                    }),
                ],
            }),
        ],
    });
}
let et = (e) => {
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
        { clientThemesClassName: x } = (0, I.ZP)(),
        h = (0, u.e7)([N.default], () => N.default.locale),
        v = i.useMemo(() => (0, A.fP)(), []),
        j = (0, u.Wu)([G.Z], () => {
            var e;
            return (null != (e = G.Z.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [E, w] = i.useState(null),
        P = (0, Z.N)(n),
        [S, C] = i.useState(null),
        k = (0, _.q)(n),
        L = (0, u.e7)([O.Z], () => O.Z.getGame(n)),
        R = null != (t = null == L ? void 0 : L.name) ? t : null == k ? void 0 : k.name,
        D = (e, t) => {
            var a;
            (0, A.UE)({
                gameName: null != R ? R : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: v,
                officialGuildId: null == S || null == (a = S.guild) ? void 0 : a.id,
            });
        };
    return ((0, p.ZP)(() => {
        (0, A.IS)({
            source: r,
            viewId: v,
            applicationId: n,
            gameName: null != R ? R : "",
            authorId: s,
            profileType: A.j7.FullProfile,
        }),
            (0, b.Jn)();
    }),
    (0, _.Z)(j),
    i.useEffect(() => {
        h.startsWith("en") ||
            (null == L ? void 0 : L.summaryLocalized) != null ||
            f.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == L ? void 0 : L.summaryLocalized, h]),
    i.useEffect(() => {
        (async () => {
            if (0 === j.length) {
                w(null);
                try {
                    await (0, T.i)(n);
                } catch (e) {
                    w(e);
                }
            }
        })();
    }, [n, j]),
    (0, p.ZP)(() => () => {
        var e;
        let t = Date.now(),
            a = P.map((e) => {
                let n = (0, y.kr)(e) ? (0, y.T_)(e, t) : (0, y.GL)(e, h);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                });
            });
        (0, A.wz)({
            viewId: v,
            applicationId: n,
            gameName: null != R ? R : "",
            playedFriendIds: P.map((e) => e.author_id),
            playedFriendsData: a,
            similarGames: j.filter(M.z6).slice(0, 5),
            officialGuildId: null == S || null == (e = S.guild) ? void 0 : e.id,
        });
    }),
    null == L || null == k)
        ? null
        : (0, a.jsx)(g.Y0X, {
              transitionState: o,
              size: g.CgR.DYNAMIC,
              className: l()(x, J.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, a.jsxs)(g.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, a.jsx)(q, {
                          detectedGame: L,
                          application: k,
                          entries: P,
                          trackAction: D,
                      }),
                      (0, a.jsx)(g.y5t, {
                          children: (0, a.jsxs)("div", {
                              className: l()(J.content, J.mainContent),
                              children: [
                                  (0, a.jsx)($, {
                                      detectedGame: L,
                                      application: k,
                                      entries: P,
                                      officialGuildInvite: S,
                                      similarGames: j,
                                      similarGamesError: E,
                                      onClose: c,
                                      viewId: v,
                                      trackAction: D,
                                  }),
                                  (0, a.jsx)(ee, {
                                      detectedGame: L,
                                      onSetOfficialGuildInvite: C,
                                      officialGuildInvite: S,
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
