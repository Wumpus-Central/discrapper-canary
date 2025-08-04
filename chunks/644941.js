(r.d(t, { default: () => H }), r(388685), r(49124));
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    s = r(913527),
    o = r.n(s),
    c = r(705512),
    u = r(442837),
    d = r(481060),
    m = r(224706),
    g = r(493773),
    f = r(100527),
    p = r(835473),
    O = r(168551),
    E = r(485267),
    x = r(561308),
    v = r(669764),
    h = r(480086),
    j = r(706454),
    b = r(768581),
    I = r(814225),
    y = r(709054),
    _ = r(810568),
    S = r(998058),
    P = r(839392),
    N = r(567409),
    w = r(774073),
    A = r(426482),
    C = r(715318),
    L = r(38516),
    M = r(891949),
    T = r(252547),
    R = r(484527),
    G = r(131033),
    D = r(296768),
    k = r(978313),
    K = r(206583),
    Z = r(388032),
    Q = r(263930);
let F = () =>
    (0, n.jsxs)('div', {
        className: Q.gameBadge,
        children: [
            (0, n.jsx)(d.YqE, { size: 'xxs' }),
            (0, n.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: Z.intl.string(Z.t.kAlUs7)
            })
        ]
    });
function Y(e) {
    var t;
    let { detectedGame: r, application: a, entries: s, viewId: u } = e,
        m = i.useMemo(() => (null == r ? void 0 : r.genres.map(I.P3).join(', ')), [r]),
        g = i.useMemo(() => {
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
        f = null == a ? void 0 : a.getIconURL(160, b.$k ? 'webp' : 'png'),
        p = y.default.extractTimestamp(a.id),
        O = o()().diff(o()(p), 'days') <= K.G,
        E = s.some((e) => (0, x.ig)(e) === c.o.GLOBAL),
        v = null != (t = r.name) ? t : null == a ? void 0 : a.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: Q.gameArtHero,
                style: { backgroundImage: 'url("'.concat(g, '")') }
            }),
            (0, n.jsxs)('div', {
                className: l()(Q.content, Q.column, Q.gapLg, Q.headerInfo),
                children: [
                    (0, n.jsxs)('div', {
                        className: Q.coverArtRow,
                        children: [
                            (0, n.jsx)('div', {
                                className: Q.logoWrapper,
                                children: (0, n.jsx)(A.C, {
                                    game: r,
                                    application: a,
                                    className: Q.logo,
                                    size: A.Z.LARGE
                                })
                            }),
                            (0, n.jsx)(C.Z, {
                                applicationId: a.id,
                                viewId: u,
                                className: Q.overflowMenu
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: l()(Q.row, Q.gapSm, Q.gameDetails),
                        children: (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(d.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: v
                                }),
                                (0, n.jsxs)('div', {
                                    className: l()(Q.row, Q.gapSm),
                                    children: [
                                        null != f &&
                                            (0, n.jsx)('img', {
                                                className: Q.gameIcon,
                                                src: f,
                                                height: 16,
                                                alt: Z.intl.formatToPlainString(Z.t['nh+jWl'], { game: v })
                                            }),
                                        (0, n.jsx)(d.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        O &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                className: Q.newBadge,
                                                children: Z.intl.string(Z.t.y2b7CA)
                                            }),
                                        E &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(d.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, n.jsx)(F, {})
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
function U(e) {
    var t;
    let { detectedGame: r, application: i, entries: a, officialGuildInvite: l, similarGames: s, similarGamesError: o, onClose: c, viewId: u, trackAction: d } = e;
    return (0, n.jsxs)('div', {
        className: Q.sections,
        children: [
            (0, n.jsx)(T.Z, {
                entries: a,
                viewId: u,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c
            }),
            (0, n.jsx)(M.Z, {
                detectedGame: r,
                trackAction: d
            }),
            (0, n.jsx)(D.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: d,
                similarGames: s,
                similarGamesError: o
            })
        ]
    });
}
function B(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: a, onClose: s, applicationId: o } = e,
        c = (0, h.u)(o, f.Z.GAME_PROFILE),
        u = i.useCallback(
            (e) => {
                r(e);
            },
            [r]
        );
    return (0, n.jsxs)('div', {
        className: l()(Q.sidebar, Q.column, Q.gapLg),
        children: [
            null != c
                ? (0, n.jsx)('div', {
                      className: Q.gameStoreButton,
                      children: (0, n.jsx)(d.zxk, {
                          icon: c.icon,
                          text: Z.intl.string(c.labelKey),
                          variant: 'overlay-secondary',
                          onClick: c.openLink,
                          fullWidth: !0
                      })
                  })
                : null,
            (0, n.jsx)(d.X6q, {
                variant: 'heading-md/bold',
                children: Z.intl.string(Z.t.CI0vSE)
            }),
            (0, n.jsxs)('div', {
                className: Q.sections,
                children: [
                    (0, n.jsx)(k.Z, {
                        detectedGame: t,
                        trackAction: a
                    }),
                    (0, n.jsx)(R.Z, {
                        detectedGame: t,
                        trackClick: a,
                        onInviteResolved: u,
                        closeModal: s
                    }),
                    (0, n.jsx)(L.Z, {
                        detectedGame: t,
                        trackClick: a
                    }),
                    (0, n.jsx)(G.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let z = (e) => e.filter(w.z6).slice(0, 5),
    H = (e) => {
        var t;
        let { applicationId: r, source: a, sourceUserId: s, transitionState: o, onClose: c, appContext: f } = e,
            { clientThemesClassName: h } = (0, O.ZP)(),
            b = (0, u.e7)([j.default], () => j.default.locale),
            I = i.useMemo(() => (0, _.fP)(), []),
            y = (0, u.Wu)([P.Z], () => {
                var e;
                return (null != (e = P.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
            }),
            [w, A] = i.useState(null),
            C = (0, N.N)(r),
            [L, M] = i.useState(null),
            T = (0, p.q)(r),
            R = (0, u.e7)([v.Z], () => v.Z.getGame(r)),
            G = null != (t = null == R ? void 0 : R.name) ? t : null == T ? void 0 : T.name,
            D = (e, t) => {
                var n;
                (0, _.UE)({
                    gameName: null != G ? G : '',
                    applicationId: r,
                    action: e,
                    similarGameId: t,
                    viewId: I,
                    officialGuildId: null == L || null == (n = L.guild) ? void 0 : n.id
                });
            };
        return ((0, g.ZP)(() => {
            ((0, _.IS)({
                source: a,
                viewId: I,
                applicationId: r,
                gameName: null != G ? G : '',
                authorId: s
            }),
                (0, E.Jn)());
        }),
        (0, p.Z)(y),
        i.useEffect(() => {
            b.startsWith('en') || (null == R ? void 0 : R.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
        }, [r, null == R ? void 0 : R.summaryLocalized, b]),
        i.useEffect(() => {
            (async () => {
                if (0 === y.length) {
                    A(null);
                    try {
                        await (0, S.i)(r);
                    } catch (e) {
                        A(e);
                    }
                }
            })();
        }, [r, y]),
        (0, g.ZP)(() => () => {
            var e;
            let t = Date.now(),
                n = C.map((e) => {
                    let r = (0, x.kr)(e) ? (0, x.T_)(e, t) : (0, x.GL)(e, b);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: r
                    });
                });
            (0, _.wz)({
                viewId: I,
                applicationId: r,
                gameName: null != G ? G : '',
                playedFriendIds: C.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: z(y),
                officialGuildId: null == L || null == (e = L.guild) ? void 0 : e.id
            });
        }),
        null == R || null == T)
            ? null
            : (0, n.jsx)(d.Y0X, {
                  transitionState: o,
                  size: d.CgR.DYNAMIC,
                  className: l()(h, Q.gameProfileModal),
                  parentComponent: 'GameProfileModal',
                  children: (0, n.jsxs)(d.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, n.jsx)(Y, {
                              detectedGame: R,
                              application: T,
                              entries: C,
                              viewId: I,
                              trackAction: D
                          }),
                          (0, n.jsx)(d.y5t, {
                              children: (0, n.jsxs)('div', {
                                  className: l()(Q.content, Q.mainContent),
                                  children: [
                                      (0, n.jsx)(U, {
                                          detectedGame: R,
                                          application: T,
                                          entries: C,
                                          officialGuildInvite: L,
                                          similarGames: y,
                                          similarGamesError: w,
                                          onClose: c,
                                          viewId: I,
                                          trackAction: D
                                      }),
                                      (0, n.jsx)(B, {
                                          detectedGame: R,
                                          setOfficialGuildInvite: M,
                                          trackAction: D,
                                          onClose: c,
                                          appContext: f,
                                          applicationId: r
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
