r.d(t, { default: () => U }), r(388685), r(49124);
var n = r(200651),
    a = r(192379),
    i = r(120356),
    l = r.n(i),
    s = r(913527),
    o = r.n(s),
    c = r(705512),
    u = r(442837),
    d = r(481060),
    m = r(224706),
    g = r(493773),
    f = r(835473),
    p = r(168551),
    O = r(485267),
    E = r(561308),
    N = r(669764),
    h = r(706454),
    x = r(768581),
    v = r(814225),
    j = r(709054),
    b = r(810568),
    I = r(998058),
    y = r(839392),
    _ = r(567409),
    P = r(774073),
    S = r(426482),
    w = r(715318),
    A = r(38516),
    W = r(891949),
    C = r(252547),
    M = r(484527),
    R = r(131033),
    T = r(296768),
    L = r(978313),
    D = r(206583),
    G = r(388032),
    k = r(206218);
let K = () =>
    (0, n.jsxs)('div', {
        className: k.gameBadge,
        children: [
            (0, n.jsx)(d.YqE, { size: 'xxs' }),
            (0, n.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: G.NW.string(G.t.kAlUs7)
            })
        ]
    });
function Z(e) {
    var t;
    let { detectedGame: r, application: i, entries: s, viewId: u } = e,
        m = a.useMemo(() => (null == r ? void 0 : r.genres.map(v.P3).join(', ')), [r]),
        g = a.useMemo(() => {
            if (null == r) return '';
            let { artwork: e, screenshots: t } = r;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [r]),
        f = null == i ? void 0 : i.getIconURL(160, x.$k ? 'webp' : 'png'),
        p = j.default.extractTimestamp(i.id),
        O = o()().diff(o()(p), 'days') <= D.G,
        N = s.some((e) => (0, E.ig)(e) === c.o.GLOBAL),
        h = null != (t = r.name) ? t : null == i ? void 0 : i.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: k.gameArtHero,
                style: { backgroundImage: 'url("'.concat(g, '")') }
            }),
            (0, n.jsxs)('div', {
                className: l()(k.content, k.column, k.gapLg, k.headerInfo),
                children: [
                    (0, n.jsxs)('div', {
                        className: k.coverArtRow,
                        children: [
                            (0, n.jsx)('div', {
                                className: k.logoWrapper,
                                children: (0, n.jsx)(S.C, {
                                    game: r,
                                    application: i,
                                    className: k.logo,
                                    size: S.Z.LARGE
                                })
                            }),
                            (0, n.jsx)(w.Z, {
                                applicationId: i.id,
                                viewId: u,
                                className: k.overflowMenu
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: l()(k.row, k.gapSm, k.gameDetails),
                        children: (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(d.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: h
                                }),
                                (0, n.jsxs)('div', {
                                    className: l()(k.row, k.gapSm),
                                    children: [
                                        null != f &&
                                            (0, n.jsx)('img', {
                                                className: k.gameIcon,
                                                src: f,
                                                height: 16,
                                                alt: G.NW.formatToPlainString(G.t['nh+jWl'], { game: h })
                                            }),
                                        (0, n.jsx)(d.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        O &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                className: k.newBadge,
                                                children: G.NW.string(G.t.y2b7CA)
                                            }),
                                        N &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(d.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, n.jsx)(K, {})
                                                ]
                                            })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function Q(e) {
    var t;
    let { detectedGame: r, application: a, entries: i, officialGuildInvite: l, similarGames: s, similarGamesError: o, onClose: c, viewId: u, trackAction: d } = e;
    return (0, n.jsxs)('div', {
        className: k.sections,
        children: [
            (0, n.jsx)(C.Z, {
                entries: i,
                viewId: u,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c
            }),
            (0, n.jsx)(W.Z, {
                detectedGame: r,
                trackAction: d
            }),
            (0, n.jsx)(T.Z, {
                applicationId: a.id,
                onClose: c,
                trackAction: d,
                similarGames: s,
                similarGamesError: o
            })
        ]
    });
}
function F(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: i, onClose: s } = e,
        o = a.useCallback(
            (e) => {
                r(e);
            },
            [r]
        );
    return (0, n.jsxs)('div', {
        className: l()(k.sidebar, k.column, k.gapLg),
        children: [
            (0, n.jsx)(d.X6q, {
                variant: 'heading-md/bold',
                children: G.NW.string(G.t.CI0vSE)
            }),
            (0, n.jsxs)('div', {
                className: k.sections,
                children: [
                    (0, n.jsx)(L.Z, {
                        detectedGame: t,
                        trackAction: i
                    }),
                    (0, n.jsx)(M.Z, {
                        detectedGame: t,
                        trackClick: i,
                        onInviteResolved: o,
                        closeModal: s
                    }),
                    (0, n.jsx)(A.Z, {
                        detectedGame: t,
                        trackClick: i
                    }),
                    (0, n.jsx)(R.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let Y = (e) => e.filter(P.z6).slice(0, 5),
    U = (e) => {
        var t;
        let { applicationId: r, source: i, sourceUserId: s, transitionState: o, onClose: c, appContext: x } = e,
            { clientThemesClassName: v } = (0, p.ZP)(),
            j = (0, u.e7)([h.default], () => h.default.locale),
            P = a.useMemo(() => (0, b.fP)(), []),
            S = (0, u.Wu)([y.Z], () => {
                var e;
                return (null != (e = y.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
            }),
            [w, A] = a.useState(null),
            W = (0, _.Ns)(r),
            [C, M] = a.useState(null),
            R = (0, f.q)(r),
            T = (0, u.e7)([N.Z], () => N.Z.getGame(r)),
            L = null != (t = null == T ? void 0 : T.name) ? t : null == R ? void 0 : R.name,
            D = (e, t) => {
                var n;
                (0, b.UE)({
                    gameName: null != L ? L : '',
                    applicationId: r,
                    action: e,
                    similarGameId: t,
                    viewId: P,
                    officialGuildId: null == C || null == (n = C.guild) ? void 0 : n.id
                });
            };
        return ((0, g.ZP)(() => {
            (0, b.IS)({
                source: i,
                viewId: P,
                applicationId: r,
                gameName: null != L ? L : '',
                authorId: s
            }),
                (0, O.Jn)();
        }),
        (0, f.Z)(S),
        a.useEffect(() => {
            j.startsWith('en') || (null == T ? void 0 : T.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
        }, [r, null == T ? void 0 : T.summaryLocalized, j]),
        a.useEffect(() => {
            (async () => {
                if (0 === S.length) {
                    A(null);
                    try {
                        await (0, I.i)(r);
                    } catch (e) {
                        A(e);
                    }
                }
            })();
        }, [r, S]),
        (0, g.ZP)(() => () => {
            var e;
            let t = Date.now(),
                n = W.map((e) => {
                    let r = (0, E.kr)(e) ? (0, E.T_)(e, t) : (0, E.GL)(e, j);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: r
                    });
                });
            (0, b.wz)({
                viewId: P,
                applicationId: r,
                gameName: null != L ? L : '',
                playedFriendIds: W.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: Y(S),
                officialGuildId: null == C || null == (e = C.guild) ? void 0 : e.id
            });
        }),
        null == T || null == R)
            ? null
            : (0, n.jsx)(d.Y0X, {
                  transitionState: o,
                  size: d.CgR.DYNAMIC,
                  className: l()(v, k.gameProfileModal),
                  children: (0, n.jsxs)(d.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, n.jsx)(Z, {
                              detectedGame: T,
                              application: R,
                              entries: W,
                              viewId: P,
                              trackAction: D
                          }),
                          (0, n.jsx)(d.y5t, {
                              children: (0, n.jsxs)('div', {
                                  className: l()(k.content, k.mainContent),
                                  children: [
                                      (0, n.jsx)(Q, {
                                          detectedGame: T,
                                          application: R,
                                          entries: W,
                                          officialGuildInvite: C,
                                          similarGames: S,
                                          similarGamesError: w,
                                          onClose: c,
                                          viewId: P,
                                          trackAction: D
                                      }),
                                      (0, n.jsx)(F, {
                                          detectedGame: T,
                                          setOfficialGuildInvite: M,
                                          trackAction: D,
                                          onClose: c,
                                          appContext: x
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
