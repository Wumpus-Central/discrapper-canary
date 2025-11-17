n.d(t, { default: () => et }), n(388685), n(49124);
var i = n(54381),
    l = n(473749),
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
    w = n(892001),
    P = n(706454),
    S = n(768581),
    C = n(814225),
    T = n(709054),
    A = n(624138),
    k = n(810568),
    G = n(998058),
    Z = n(839392),
    L = n(567409),
    _ = n(774073),
    R = n(426482),
    M = n(715318),
    D = n(108733),
    z = n(38516),
    F = n(891949),
    H = n(252547),
    U = n(484527),
    W = n(131033),
    Y = n(296768),
    B = n(978313),
    K = n(206583),
    X = n(388032),
    J = n(226788);
let V = () =>
    (0, i.jsxs)("div", {
        className: J.gameBadge,
        children: [
            (0, i.jsx)(f.YqE, { size: "xxs" }),
            (0, i.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: X.intl.string(X.t.kAlUsy),
            }),
        ],
    });
function q(e) {
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
        m = (0, A.Ew)(n.iconHash)
            ? null == r
                ? void 0
                : r.getIconURL(160, S.$k ? "webp" : "png")
            : S.ZP.getGameAssetURL({
                  id: n.applicationId,
                  hash: n.iconHash,
                  size: 160,
                  format: S.$k ? "webp" : "png",
              }),
        g = T.default.extractTimestamp(r.id),
        p = o()().diff(o()(g), "days") <= K.G,
        x = s.some((e) => (0, b.ig)(e) === d.o.GLOBAL),
        h = null != (t = n.name) ? t : null == r ? void 0 : r.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: J.gameArtHero,
                style: { backgroundImage: 'url("'.concat(u, '")') },
            }),
            (0, i.jsxs)("div", {
                className: a()(J.content, J.column, J.gapLg, J.headerInfo),
                children: [
                    (0, i.jsxs)("div", {
                        className: J.coverArtRow,
                        children: [
                            (0, i.jsx)("div", {
                                className: J.logoWrapper,
                                children: (0, i.jsx)(R.C, {
                                    game: n,
                                    application: r,
                                    className: J.logo,
                                    size: R.Z.LARGE,
                                }),
                            }),
                            (0, i.jsx)(M.Z, {
                                applicationId: r.id,
                                className: J.overflowMenu,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: a()(J.row, J.gapSm, J.gameDetails),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    children: h,
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(J.row, J.gapSm),
                                    children: [
                                        null != m &&
                                            (0, i.jsx)("img", {
                                                className: J.gameIcon,
                                                src: m,
                                                height: 16,
                                                alt: X.intl.formatToPlainString(X.t["nh+jWk"], { game: h }),
                                            }),
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        p &&
                                            (0, i.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: J.newBadge,
                                                children: X.intl.string(X.t.y2b7CA),
                                            }),
                                        x &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, i.jsx)(V, {}),
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
        className: J.sections,
        children: [
            (0, i.jsx)(H.Z, {
                entries: r,
                viewId: d,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, i.jsx)(F.Z, {
                detectedGame: n,
                trackAction: u,
            }),
            (0, i.jsx)(Y.Z, {
                applicationId: l.id,
                onClose: c,
                trackAction: u,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function Q(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, j.Z)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, i.jsx)(m.u, {
            text: X.intl.string(X.t.JVwWva),
            position: "top",
            children: (0, i.jsx)(f.Button, {
                icon: f.v3n,
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
        d = l.useCallback(() => {
            o(), (0, w.closeUserProfileModal)();
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
        className: a()(J.sidebar, J.column, J.gapLg),
        children: [
            (0, i.jsxs)("div", {
                className: J.buttonsContainer,
                children: [
                    (0, i.jsx)(D.Z, {
                        invite: r,
                        trackClick: s,
                        closeModal: d,
                    }),
                    m &&
                        null != g &&
                        (0, i.jsx)(Q, {
                            onClose: d,
                            onCloudPlayClick: g,
                            analyticsLocations: u,
                        }),
                ],
            }),
            (0, i.jsx)(f.Heading, {
                variant: "heading-md/bold",
                children: X.intl.string(X.t.CI0vSJ),
            }),
            (0, i.jsxs)("div", {
                className: J.sections,
                children: [
                    (0, i.jsx)(B.Z, {
                        detectedGame: t,
                        trackAction: s,
                    }),
                    (0, i.jsx)(U.Z, {
                        detectedGame: t,
                        trackClick: s,
                        onInviteResolved: n,
                        closeModal: d,
                    }),
                    (0, i.jsx)(z.Z, {
                        detectedGame: t,
                        trackClick: s,
                    }),
                    (0, i.jsx)(W.Z, { detectedGame: t }),
                    (0, i.jsx)(f.Text, {
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
        { clientThemesClassName: x } = (0, y.ZP)(),
        h = (0, u.e7)([P.default], () => P.default.locale),
        v = l.useMemo(() => (0, k.fP)(), []),
        j = (0, u.Wu)([Z.Z], () => {
            var e;
            return (null != (e = Z.Z.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [N, w] = l.useState(null),
        S = (0, L.N)(n),
        [C, T] = l.useState(null),
        A = (0, O.q)(n),
        R = (0, u.e7)([E.Z], () => E.Z.getGame(n)),
        M = null != (t = null == R ? void 0 : R.name) ? t : null == A ? void 0 : A.name,
        D = (e, t) => {
            var i;
            (0, k.UE)({
                gameName: null != M ? M : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: v,
                officialGuildId: null == C || null == (i = C.guild) ? void 0 : i.id,
            });
        };
    return ((0, p.ZP)(() => {
        (0, k.IS)({
            source: r,
            viewId: v,
            applicationId: n,
            gameName: null != M ? M : "",
            authorId: s,
            profileType: k.j7.FullProfile,
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
                w(null);
                try {
                    await (0, G.i)(n);
                } catch (e) {
                    w(e);
                }
            }
        })();
    }, [n, j]),
    (0, p.ZP)(() => () => {
        var e;
        let t = Date.now(),
            i = S.map((e) => {
                let n = (0, b.kr)(e) ? (0, b.T_)(e, t) : (0, b.GL)(e, h);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                });
            });
        (0, k.wz)({
            viewId: v,
            applicationId: n,
            gameName: null != M ? M : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: j.filter(_.z6).slice(0, 5),
            officialGuildId: null == C || null == (e = C.guild) ? void 0 : e.id,
        });
    }),
    null == R || null == A)
        ? null
        : (0, i.jsx)(f.Y0X, {
              transitionState: o,
              size: f.CgR.DYNAMIC,
              className: a()(x, J.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, i.jsxs)(f.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, i.jsx)(q, {
                          detectedGame: R,
                          application: A,
                          entries: S,
                          trackAction: D,
                      }),
                      (0, i.jsx)(f.y5t, {
                          children: (0, i.jsxs)("div", {
                              className: a()(J.content, J.mainContent),
                              children: [
                                  (0, i.jsx)($, {
                                      detectedGame: R,
                                      application: A,
                                      entries: S,
                                      officialGuildInvite: C,
                                      similarGames: j,
                                      similarGamesError: N,
                                      onClose: c,
                                      viewId: v,
                                      trackAction: D,
                                  }),
                                  (0, i.jsx)(ee, {
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
