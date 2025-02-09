n.d(t, { default: () => U }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(913527),
    s = n.n(l),
    c = n(705512),
    d = n(442837),
    u = n(481060),
    m = n(224706),
    _ = n(493773),
    g = n(835473),
    p = n(168551),
    f = n(485267),
    h = n(561308),
    x = n(669764),
    v = n(706454),
    I = n(768581),
    C = n(814225),
    E = n(709054),
    b = n(810568),
    T = n(998058),
    A = n(839392),
    j = n(567409),
    N = n(774073),
    S = n(426482),
    P = n(715318),
    M = n(38516),
    y = n(891949),
    L = n(252547),
    w = n(484527),
    k = n(131033),
    O = n(296768),
    R = n(978313),
    G = n(206583),
    D = n(388032),
    Z = n(959559);
let K = () =>
    (0, r.jsxs)('div', {
        className: Z.gameBadge,
        children: [
            (0, r.jsx)(u.YqE, { size: 'xxs' }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: D.intl.string(D.t.kAlUs7)
            })
        ]
    });
function B(e) {
    var t;
    let { detectedGame: n, application: i, entries: l, viewId: d } = e,
        m = a.useMemo(() => (null == n ? void 0 : n.genres.map(C.P3).join(', ')), [n]),
        _ = a.useMemo(() => {
            if (null == n) return '';
            let { artwork: e, screenshots: t } = n;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [n]),
        g = null == i ? void 0 : i.getIconURL(160, I.$k ? 'webp' : 'png'),
        p = E.default.extractTimestamp(i.id),
        f = s()().diff(s()(p), 'days') <= G.G,
        x = l.some((e) => (0, h.ig)(e) === c.o.GLOBAL),
        v = null !== (t = n.name) && void 0 !== t ? t : null == i ? void 0 : i.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: o()(Z.gameArtHero),
                style: { backgroundImage: 'url("'.concat(_, '")') }
            }),
            (0, r.jsxs)('div', {
                className: o()(Z.content, Z.column, Z.gapLg, Z.headerInfo),
                children: [
                    (0, r.jsxs)('div', {
                        className: Z.coverArtRow,
                        children: [
                            (0, r.jsx)('div', {
                                className: Z.logoWrapper,
                                children: (0, r.jsx)(S.C, {
                                    game: n,
                                    application: i,
                                    className: Z.logo,
                                    size: S.Z.LARGE
                                })
                            }),
                            (0, r.jsx)(P.Z, {
                                applicationId: i.id,
                                viewId: d,
                                className: Z.overflowMenu
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: o()(Z.row, Z.gapSm, Z.gameDetails),
                        children: (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: v
                                }),
                                (0, r.jsxs)('div', {
                                    className: o()(Z.row, Z.gapSm),
                                    children: [
                                        null != g &&
                                            (0, r.jsx)('img', {
                                                className: Z.gameIcon,
                                                src: g,
                                                height: 16,
                                                alt: D.intl.formatToPlainString(D.t['nh+jWl'], { game: v })
                                            }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        f &&
                                            (0, r.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                className: Z.newBadge,
                                                children: D.intl.string(D.t.y2b7CA)
                                            }),
                                        x &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, r.jsx)(K, {})
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
function H(e) {
    var t;
    let { detectedGame: n, application: a, entries: i, officialGuildInvite: o, similarGames: l, similarGamesError: s, onClose: c, viewId: d, trackAction: u } = e;
    return (0, r.jsxs)('div', {
        className: Z.sections,
        children: [
            (0, r.jsx)(L.Z, {
                entries: i,
                viewId: d,
                officialGuildId: null == o ? void 0 : null === (t = o.guild) || void 0 === t ? void 0 : t.id,
                onClose: c
            }),
            (0, r.jsx)(y.Z, {
                detectedGame: n,
                trackAction: u
            }),
            (0, r.jsx)(O.Z, {
                applicationId: a.id,
                onClose: c,
                trackAction: u,
                similarGames: l,
                similarGamesError: s
            })
        ]
    });
}
function F(e) {
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: i, onClose: l } = e,
        s = a.useCallback(
            (e) => {
                n(e);
            },
            [n]
        );
    return (0, r.jsxs)('div', {
        className: o()(Z.sidebar, Z.column, Z.gapLg),
        children: [
            (0, r.jsx)(u.X6q, {
                variant: 'heading-md/bold',
                children: D.intl.string(D.t.CI0vSE)
            }),
            (0, r.jsxs)('div', {
                className: Z.sections,
                children: [
                    (0, r.jsx)(R.Z, {
                        detectedGame: t,
                        trackAction: i
                    }),
                    (0, r.jsx)(w.Z, {
                        detectedGame: t,
                        trackClick: i,
                        onInviteResolved: s,
                        closeModal: l
                    }),
                    (0, r.jsx)(M.Z, {
                        detectedGame: t,
                        trackClick: i
                    }),
                    (0, r.jsx)(k.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let Q = (e) => e.filter(N.z6).slice(0, 5),
    U = (e) => {
        var t;
        let { applicationId: n, source: i, sourceUserId: l, transitionState: s, onClose: c, appContext: I } = e,
            { clientThemesClassName: C } = (0, p.ZP)(),
            E = (0, d.e7)([v.default], () => v.default.locale),
            N = a.useMemo(() => (0, b.fP)(), []),
            S = (0, d.Wu)([A.Z], () => {
                var e;
                return (null !== (e = A.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            [P, M] = a.useState(null),
            y = (0, j.Ns)(n),
            [L, w] = a.useState(null),
            k = (0, g.q)(n),
            O = (0, d.e7)([x.Z], () => x.Z.getGame(n)),
            R = null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : null == k ? void 0 : k.name,
            G = (e, t) => {
                var r;
                (0, b.UE)({
                    gameName: null != R ? R : '',
                    applicationId: n,
                    action: e,
                    similarGameId: t,
                    viewId: N,
                    officialGuildId: null == L ? void 0 : null === (r = L.guild) || void 0 === r ? void 0 : r.id
                });
            };
        return ((0, _.ZP)(() => {
            (0, b.IS)({
                source: i,
                viewId: N,
                applicationId: n,
                gameName: null != R ? R : '',
                authorId: l
            }),
                (0, f.Jn)();
        }),
        (0, g.Z)(S),
        a.useEffect(() => {
            E.startsWith('en') || (null == O ? void 0 : O.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
        }, [n, null == O ? void 0 : O.summaryLocalized, E]),
        a.useEffect(() => {
            (async () => {
                if (0 === S.length) {
                    M(null);
                    try {
                        await (0, T.i)(n);
                    } catch (e) {
                        M(e);
                    }
                }
            })();
        }, [n, S]),
        (0, _.ZP)(() => () => {
            var e;
            let t = Date.now(),
                r = y.map((e) => {
                    let n = (0, h.kr)(e) ? (0, h.T_)(e, t) : (0, h.GL)(e, E);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: n
                    });
                });
            (0, b.wz)({
                viewId: N,
                applicationId: n,
                gameName: null != R ? R : '',
                playedFriendIds: y.map((e) => e.author_id),
                playedFriendsData: r,
                similarGames: Q(S),
                officialGuildId: null == L ? void 0 : null === (e = L.guild) || void 0 === e ? void 0 : e.id
            });
        }),
        null == O || null == k)
            ? null
            : (0, r.jsx)(u.Y0X, {
                  transitionState: s,
                  size: u.CgR.DYNAMIC,
                  className: o()(C, Z.gameProfileModal),
                  children: (0, r.jsxs)(u.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, r.jsx)(B, {
                              detectedGame: O,
                              application: k,
                              entries: y,
                              viewId: N,
                              trackAction: G
                          }),
                          (0, r.jsx)(u.y5t, {
                              children: (0, r.jsxs)('div', {
                                  className: o()(Z.content, Z.mainContent),
                                  children: [
                                      (0, r.jsx)(H, {
                                          detectedGame: O,
                                          application: k,
                                          entries: y,
                                          officialGuildInvite: L,
                                          similarGames: S,
                                          similarGamesError: P,
                                          onClose: c,
                                          viewId: N,
                                          trackAction: G
                                      }),
                                      (0, r.jsx)(F, {
                                          detectedGame: O,
                                          setOfficialGuildInvite: w,
                                          trackAction: G,
                                          onClose: c,
                                          appContext: I
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
