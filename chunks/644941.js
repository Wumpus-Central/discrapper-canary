n.d(t, { default: () => B }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(705512),
    d = n(442837),
    u = n(481060),
    m = n(224706),
    p = n(493773),
    g = n(835473),
    _ = n(168551),
    h = n(485267),
    f = n(561308),
    x = n(669764),
    v = n(706454),
    I = n(768581),
    E = n(814225),
    C = n(709054),
    b = n(810568),
    j = n(998058),
    A = n(839392),
    N = n(567409),
    P = n(774073),
    T = n(426482),
    S = n(715318),
    y = n(38516),
    M = n(891949),
    w = n(252547),
    R = n(484527),
    L = n(131033),
    O = n(296768),
    k = n(978313),
    G = n(206583),
    D = n(388032),
    K = n(561526);
let Z = () =>
    (0, i.jsxs)('div', {
        className: K.gameBadge,
        children: [
            (0, i.jsx)(u.YqE, { size: 'xxs' }),
            (0, i.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: D.intl.string(D.t.kAlUs7)
            })
        ]
    });
function H(e) {
    var t;
    let { detectedGame: n, application: a, entries: o, viewId: d } = e,
        m = r.useMemo(() => (null == n ? void 0 : n.genres.map(E.P3).join(', ')), [n]),
        p = r.useMemo(() => {
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
        g = null == a ? void 0 : a.getIconURL(160, I.$k ? 'webp' : 'png'),
        _ = C.default.extractTimestamp(a.id),
        h = s()().diff(s()(_), 'days') <= G.G,
        x = o.some((e) => (0, f.ig)(e) === c.o.GLOBAL),
        v = null !== (t = n.name) && void 0 !== t ? t : null == a ? void 0 : a.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: l()(K.gameArtHero),
                style: { backgroundImage: 'url("'.concat(p, '")') }
            }),
            (0, i.jsxs)('div', {
                className: l()(K.content, K.column, K.gapLg, K.headerInfo),
                children: [
                    (0, i.jsxs)('div', {
                        className: K.coverArtRow,
                        children: [
                            (0, i.jsx)('div', {
                                className: K.logoWrapper,
                                children: (0, i.jsx)(T.C, {
                                    game: n,
                                    application: a,
                                    className: K.logo,
                                    size: T.Z.LARGE
                                })
                            }),
                            (0, i.jsx)(S.Z, {
                                applicationId: a.id,
                                viewId: d,
                                className: K.overflowMenu
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: l()(K.row, K.gapSm, K.gameDetails),
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(u.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: v
                                }),
                                (0, i.jsxs)('div', {
                                    className: l()(K.row, K.gapSm),
                                    children: [
                                        null != g &&
                                            (0, i.jsx)('img', {
                                                className: K.gameIcon,
                                                src: g,
                                                height: 16,
                                                alt: D.intl.formatToPlainString(D.t['nh+jWl'], { game: v })
                                            }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        h &&
                                            (0, i.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                className: K.newBadge,
                                                children: D.intl.string(D.t.y2b7CA)
                                            }),
                                        x &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, i.jsx)(Z, {})
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
    let { detectedGame: n, application: r, entries: a, officialGuildInvite: l, similarGames: o, similarGamesError: s, onClose: c, viewId: d, trackAction: u } = e;
    return (0, i.jsxs)('div', {
        className: K.sections,
        children: [
            (0, i.jsx)(w.Z, {
                entries: a,
                viewId: d,
                officialGuildId: null == l ? void 0 : null === (t = l.guild) || void 0 === t ? void 0 : t.id,
                onClose: c
            }),
            (0, i.jsx)(M.Z, {
                detectedGame: n,
                trackAction: u
            }),
            (0, i.jsx)(O.Z, {
                applicationId: r.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: s
            })
        ]
    });
}
function U(e) {
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: r, onClose: a } = e;
    return (0, i.jsxs)('div', {
        className: l()(K.sidebar, K.column, K.gapLg),
        children: [
            (0, i.jsx)(u.X6q, {
                variant: 'heading-md/bold',
                children: D.intl.string(D.t.CI0vSE)
            }),
            (0, i.jsxs)('div', {
                className: K.sections,
                children: [
                    (0, i.jsx)(k.Z, {
                        detectedGame: t,
                        trackAction: r
                    }),
                    (0, i.jsx)(R.Z, {
                        detectedGame: t,
                        trackClick: r,
                        onInviteResolved: n,
                        closeModal: a
                    }),
                    (0, i.jsx)(y.Z, {
                        detectedGame: t,
                        trackClick: r
                    }),
                    (0, i.jsx)(L.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let F = (e) => e.filter(P.z6).slice(0, 5),
    B = (e) => {
        var t;
        let { applicationId: n, source: a, sourceUserId: o, transitionState: s, onClose: c } = e,
            { clientThemesClassName: I } = (0, _.ZP)(),
            E = (0, d.e7)([v.default], () => v.default.locale),
            C = r.useMemo(() => (0, b.fP)(), []),
            P = (0, d.Wu)([A.Z], () => {
                var e;
                return (null !== (e = A.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            [T, S] = r.useState(null),
            y = (0, N.Ns)(n),
            [M, w] = r.useState(null),
            R = (0, g.q)(n),
            L = (0, d.e7)([x.Z], () => x.Z.getGame(n)),
            O = null !== (t = null == L ? void 0 : L.name) && void 0 !== t ? t : null == R ? void 0 : R.name,
            k = (e, t) => {
                var i;
                (0, b.UE)({
                    gameName: null != O ? O : '',
                    applicationId: n,
                    action: e,
                    similarGameId: t,
                    viewId: C,
                    officialGuildId: null == M ? void 0 : null === (i = M.guild) || void 0 === i ? void 0 : i.id
                });
            };
        return ((0, p.ZP)(() => {
            (0, b.IS)({
                source: a,
                viewId: C,
                applicationId: n,
                gameName: null != O ? O : '',
                authorId: o
            }),
                (0, h.Jn)();
        }),
        (0, g.Z)(P),
        r.useEffect(() => {
            E.startsWith('en') || (null == L ? void 0 : L.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
        }, [n, null == L ? void 0 : L.summaryLocalized, E]),
        r.useEffect(() => {
            (async () => {
                if (0 === P.length) {
                    S(null);
                    try {
                        await (0, j.i)(n);
                    } catch (e) {
                        S(e);
                    }
                }
            })();
        }, [n, P]),
        (0, p.ZP)(() => () => {
            var e;
            let t = Date.now(),
                i = y.map((e) => {
                    let n = (0, f.kr)(e) ? (0, f.T_)(e, t) : (0, f.GL)(e, E);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: n
                    });
                });
            (0, b.wz)({
                viewId: C,
                applicationId: n,
                gameName: null != O ? O : '',
                playedFriendIds: y.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: F(P),
                officialGuildId: null == M ? void 0 : null === (e = M.guild) || void 0 === e ? void 0 : e.id
            });
        }),
        null == L || null == R)
            ? null
            : (0, i.jsx)(u.Y0X, {
                  transitionState: s,
                  size: u.CgR.DYNAMIC,
                  className: l()(I, K.gameProfileModal),
                  children: (0, i.jsxs)(u.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, i.jsx)(H, {
                              detectedGame: L,
                              application: R,
                              entries: y,
                              viewId: C,
                              trackAction: k
                          }),
                          (0, i.jsx)(u.y5t, {
                              children: (0, i.jsxs)('div', {
                                  className: l()(K.content, K.mainContent),
                                  children: [
                                      (0, i.jsx)(Q, {
                                          detectedGame: L,
                                          application: R,
                                          entries: y,
                                          officialGuildInvite: M,
                                          similarGames: P,
                                          similarGamesError: T,
                                          onClose: c,
                                          viewId: C,
                                          trackAction: k
                                      }),
                                      (0, i.jsx)(U, {
                                          detectedGame: L,
                                          setOfficialGuildInvite: w,
                                          trackAction: k,
                                          onClose: c
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
