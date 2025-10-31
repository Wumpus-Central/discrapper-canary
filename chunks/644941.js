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
    g = n(493773),
    x = n(206074),
    h = n(100527),
    j = n(906732),
    v = n(213609),
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
    L = n(774073),
    _ = n(426482),
    M = n(715318),
    D = n(38516),
    R = n(891949),
    z = n(252547),
    F = n(484527),
    H = n(131033),
    U = n(296768),
    Y = n(978313),
    W = n(206583),
    B = n(388032),
    K = n(226788);
let X = () =>
    (0, r.jsxs)("div", {
        className: K.gameBadge,
        children: [
            (0, r.jsx)(f.YqE, { size: "xxs" }),
            (0, r.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t.kAlUsy),
            }),
        ],
    });
function J(e) {
    var t;
    let { detectedGame: n, application: l, entries: s } = e,
        c = i.useMemo(() => (null == n ? void 0 : n.genres.map(C.P3).join(", ")), [n]),
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
        m = null == l ? void 0 : l.getIconURL(160, S.$k ? "webp" : "png"),
        p = T.default.extractTimestamp(l.id),
        g = o()().diff(o()(p), "days") <= W.G,
        x = s.some((e) => (0, b.ig)(e) === d.o.GLOBAL),
        h = null != (t = n.name) ? t : null == l ? void 0 : l.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: K.gameArtHero,
                style: { backgroundImage: 'url("'.concat(u, '")') },
            }),
            (0, r.jsxs)("div", {
                className: a()(K.content, K.column, K.gapLg, K.headerInfo),
                children: [
                    (0, r.jsxs)("div", {
                        className: K.coverArtRow,
                        children: [
                            (0, r.jsx)("div", {
                                className: K.logoWrapper,
                                children: (0, r.jsx)(_.C, {
                                    game: n,
                                    application: l,
                                    className: K.logo,
                                    size: _.Z.LARGE,
                                }),
                            }),
                            (0, r.jsx)(M.Z, {
                                applicationId: l.id,
                                className: K.overflowMenu,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: a()(K.row, K.gapSm, K.gameDetails),
                        children: (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-xl/bold",
                                    children: h,
                                }),
                                (0, r.jsxs)("div", {
                                    className: a()(K.row, K.gapSm),
                                    children: [
                                        null != m &&
                                            (0, r.jsx)("img", {
                                                className: K.gameIcon,
                                                src: m,
                                                height: 16,
                                                alt: B.intl.formatToPlainString(B.t["nh+jWk"], { game: h }),
                                            }),
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        g &&
                                            (0, r.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: K.newBadge,
                                                children: B.intl.string(B.t.y2b7CA),
                                            }),
                                        x &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, r.jsx)(X, {}),
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
function V(e) {
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
        className: K.sections,
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
            (0, r.jsx)(U.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: u,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function q(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i } = e;
    return (
        (0, v.Z)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, r.jsx)(m.u, {
            text: B.intl.string(B.t.JVwWva),
            position: "top",
            children: (0, r.jsx)(f.Button, {
                icon: f.v3n,
                text: B.intl.string(B.t["jaYS/h"]),
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
        { analyticsLocations: d } = (0, j.ZP)(h.Z.GAME_PROFILE),
        { isCloudPlayButtonShown: u, onCloudPlayClick: m } = (function (e) {
            let { applicationId: t, analyticsLocations: n } = e,
                r = (0, O.q)(t),
                i = (0, x.Z)({
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
        className: a()(K.sidebar, K.column, K.gapLg),
        children: [
            u &&
                (0, r.jsx)("div", {
                    className: K.buttonsContainer,
                    children:
                        u &&
                        null != m &&
                        (0, r.jsx)(q, {
                            onClose: s,
                            onCloudPlayClick: m,
                            analyticsLocations: d,
                        }),
                }),
            (0, r.jsx)(f.Heading, {
                variant: "heading-md/bold",
                children: B.intl.string(B.t.CI0vSJ),
            }),
            (0, r.jsxs)("div", {
                className: K.sections,
                children: [
                    (0, r.jsx)(Y.Z, {
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
                    (0, r.jsx)(H.Z, { detectedGame: t }),
                    (0, r.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: B.intl.format(B.t.pch2Jw, { igdbLink: W.$f }),
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
        { clientThemesClassName: x } = (0, y.ZP)(),
        h = (0, u.e7)([w.default], () => w.default.locale),
        j = i.useMemo(() => (0, A.fP)(), []),
        v = (0, u.Wu)([G.Z], () => {
            var e;
            return (null != (e = G.Z.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [N, P] = i.useState(null),
        S = (0, Z.N)(n),
        [C, T] = i.useState(null),
        _ = (0, O.q)(n),
        M = (0, u.e7)([E.Z], () => E.Z.getGame(n)),
        D = null != (t = null == M ? void 0 : M.name) ? t : null == _ ? void 0 : _.name,
        R = (e, t) => {
            var r;
            (0, A.UE)({
                gameName: null != D ? D : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: j,
                officialGuildId: null == C || null == (r = C.guild) ? void 0 : r.id,
            });
        };
    return ((0, g.ZP)(() => {
        (0, A.IS)({
            source: l,
            viewId: j,
            applicationId: n,
            gameName: null != D ? D : "",
            authorId: s,
            profileType: A.j7.FullProfile,
        }),
            (0, I.Jn)();
    }),
    (0, O.Z)(v),
    i.useEffect(() => {
        h.startsWith("en") ||
            (null == M ? void 0 : M.summaryLocalized) != null ||
            p.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == M ? void 0 : M.summaryLocalized, h]),
    i.useEffect(() => {
        (async () => {
            if (0 === v.length) {
                P(null);
                try {
                    await (0, k.i)(n);
                } catch (e) {
                    P(e);
                }
            }
        })();
    }, [n, v]),
    (0, g.ZP)(() => () => {
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
            viewId: j,
            applicationId: n,
            gameName: null != D ? D : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: r,
            similarGames: v.filter(L.z6).slice(0, 5),
            officialGuildId: null == C || null == (e = C.guild) ? void 0 : e.id,
        });
    }),
    null == M || null == _)
        ? null
        : (0, r.jsx)(f.Y0X, {
              transitionState: o,
              size: f.CgR.DYNAMIC,
              className: a()(x, K.gameProfileModal),
              parentComponent: "GameProfileModal",
              children: (0, r.jsxs)(f.Ttm, {
                  orientation: "auto",
                  children: [
                      (0, r.jsx)(J, {
                          detectedGame: M,
                          application: _,
                          entries: S,
                          trackAction: R,
                      }),
                      (0, r.jsx)(f.y5t, {
                          children: (0, r.jsxs)("div", {
                              className: a()(K.content, K.mainContent),
                              children: [
                                  (0, r.jsx)(V, {
                                      detectedGame: M,
                                      application: _,
                                      entries: S,
                                      officialGuildInvite: C,
                                      similarGames: v,
                                      similarGamesError: N,
                                      onClose: c,
                                      viewId: j,
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
