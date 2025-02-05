n.d(t, { default: () => Q }), n(47120);
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
    h = n(168551),
    _ = n(485267),
    f = n(561308),
    x = n(669764),
    E = n(706454),
    v = n(768581),
    I = n(814225),
    C = n(709054),
    A = n(810568),
    S = n(998058),
    b = n(839392),
    P = n(567409),
    j = n(774073),
    T = n(426482),
    N = n(715318),
    y = n(38516),
    M = n(891949),
    L = n(252547),
    O = n(484527),
    w = n(131033),
    R = n(296768),
    D = n(978313),
    k = n(206583),
    Z = n(388032),
    G = n(561526);
let K = () =>
    (0, i.jsxs)('div', {
        className: G.gameBadge,
        children: [
            (0, i.jsx)(u.YqE, { size: 'xxs' }),
            (0, i.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: Z.intl.string(Z.t.kAlUs7)
            })
        ]
    });
function U(e) {
    var t;
    let { detectedGame: n, application: a, entries: o, viewId: d } = e,
        m = r.useMemo(() => (null == n ? void 0 : n.genres.map(I.P3).join(', ')), [n]),
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
        g = null == a ? void 0 : a.getIconURL(160, v.$k ? 'webp' : 'png'),
        h = C.default.extractTimestamp(a.id),
        _ = s()().diff(s()(h), 'days') <= k.G,
        x = o.some((e) => (0, f.ig)(e) === c.o.GLOBAL),
        E = null !== (t = n.name) && void 0 !== t ? t : null == a ? void 0 : a.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: l()(G.gameArtHero),
                style: { backgroundImage: 'url("'.concat(p, '")') }
            }),
            (0, i.jsxs)('div', {
                className: l()(G.content, G.column, G.gapLg, G.headerInfo),
                children: [
                    (0, i.jsxs)('div', {
                        className: G.coverArtRow,
                        children: [
                            (0, i.jsx)('div', {
                                className: G.logoWrapper,
                                children: (0, i.jsx)(T.C, {
                                    game: n,
                                    application: a,
                                    className: G.logo,
                                    size: T.Z.LARGE
                                })
                            }),
                            (0, i.jsx)(N.Z, {
                                applicationId: a.id,
                                viewId: d,
                                className: G.overflowMenu
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: l()(G.row, G.gapSm, G.gameDetails),
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(u.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: E
                                }),
                                (0, i.jsxs)('div', {
                                    className: l()(G.row, G.gapSm),
                                    children: [
                                        null != g &&
                                            (0, i.jsx)('img', {
                                                className: G.gameIcon,
                                                src: g,
                                                height: 16,
                                                alt: Z.intl.formatToPlainString(Z.t['nh+jWl'], { game: E })
                                            }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        _ &&
                                            (0, i.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                className: G.newBadge,
                                                children: Z.intl.string(Z.t.y2b7CA)
                                            }),
                                        x &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, i.jsx)(K, {})
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
function F(e) {
    var t;
    let { detectedGame: n, application: r, entries: a, officialGuildInvite: l, similarGames: o, similarGamesError: s, onClose: c, viewId: d, trackAction: u } = e;
    return (0, i.jsxs)('div', {
        className: G.sections,
        children: [
            (0, i.jsx)(L.Z, {
                entries: a,
                viewId: d,
                officialGuildId: null == l ? void 0 : null === (t = l.guild) || void 0 === t ? void 0 : t.id,
                onClose: c
            }),
            (0, i.jsx)(M.Z, {
                detectedGame: n,
                trackAction: u
            }),
            (0, i.jsx)(R.Z, {
                applicationId: r.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: s
            })
        ]
    });
}
function H(e) {
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: r, onClose: a } = e;
    return (0, i.jsxs)('div', {
        className: l()(G.sidebar, G.column, G.gapLg),
        children: [
            (0, i.jsx)(u.X6q, {
                variant: 'heading-md/bold',
                children: Z.intl.string(Z.t.CI0vSE)
            }),
            (0, i.jsxs)('div', {
                className: G.sections,
                children: [
                    (0, i.jsx)(D.Z, {
                        detectedGame: t,
                        trackAction: r
                    }),
                    (0, i.jsx)(O.Z, {
                        detectedGame: t,
                        trackClick: r,
                        onInviteResolved: n,
                        closeModal: a
                    }),
                    (0, i.jsx)(y.Z, {
                        detectedGame: t,
                        trackClick: r
                    }),
                    (0, i.jsx)(w.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let B = (e) => e.filter(j.z6).slice(0, 5),
    Q = (e) => {
        var t;
        let { applicationId: n, source: a, sourceUserId: o, transitionState: s, onClose: c } = e,
            { clientThemesClassName: v } = (0, h.ZP)(),
            I = (0, d.e7)([E.default], () => E.default.locale),
            C = r.useMemo(() => (0, A.fP)(), []),
            j = (0, d.Wu)([b.Z], () => {
                var e;
                return (null !== (e = b.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
            }),
            [T, N] = r.useState(null),
            y = (0, P.Ns)(n),
            [M, L] = r.useState(null),
            O = (0, g.q)(n),
            w = (0, d.e7)([x.Z], () => x.Z.getGame(n)),
            R = null !== (t = null == w ? void 0 : w.name) && void 0 !== t ? t : null == O ? void 0 : O.name,
            D = (e, t) => {
                var i;
                (0, A.UE)({
                    gameName: null != R ? R : '',
                    applicationId: n,
                    action: e,
                    similarGameId: t,
                    viewId: C,
                    officialGuildId: null == M ? void 0 : null === (i = M.guild) || void 0 === i ? void 0 : i.id
                });
            };
        return ((0, p.ZP)(() => {
            (0, A.IS)({
                source: a,
                viewId: C,
                applicationId: n,
                gameName: null != R ? R : '',
                authorId: o
            }),
                (0, _.Jn)();
        }),
        (0, g.Z)(j),
        r.useEffect(() => {
            I.startsWith('en') || (null == w ? void 0 : w.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
        }, [n, null == w ? void 0 : w.summaryLocalized, I]),
        r.useEffect(() => {
            (async () => {
                if (0 === j.length) {
                    N(null);
                    try {
                        await (0, S.i)(n);
                    } catch (e) {
                        N(e);
                    }
                }
            })();
        }, [n, j]),
        (0, p.ZP)(() => () => {
            var e;
            let t = Date.now(),
                i = y.map((e) => {
                    let n = (0, f.kr)(e) ? (0, f.T_)(e, t) : (0, f.GL)(e, I);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: n
                    });
                });
            (0, A.wz)({
                viewId: C,
                applicationId: n,
                gameName: null != R ? R : '',
                playedFriendIds: y.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: B(j),
                officialGuildId: null == M ? void 0 : null === (e = M.guild) || void 0 === e ? void 0 : e.id
            });
        }),
        null == w || null == O)
            ? null
            : (0, i.jsx)(u.Y0X, {
                  transitionState: s,
                  size: u.CgR.DYNAMIC,
                  className: l()(v, G.gameProfileModal),
                  children: (0, i.jsxs)(u.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, i.jsx)(U, {
                              detectedGame: w,
                              application: O,
                              entries: y,
                              viewId: C,
                              trackAction: D
                          }),
                          (0, i.jsx)(u.y5t, {
                              children: (0, i.jsxs)('div', {
                                  className: l()(G.content, G.mainContent),
                                  children: [
                                      (0, i.jsx)(F, {
                                          detectedGame: w,
                                          application: O,
                                          entries: y,
                                          officialGuildInvite: M,
                                          similarGames: j,
                                          similarGamesError: T,
                                          onClose: c,
                                          viewId: C,
                                          trackAction: D
                                      }),
                                      (0, i.jsx)(H, {
                                          detectedGame: w,
                                          setOfficialGuildInvite: L,
                                          trackAction: D,
                                          onClose: c
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
