r.d(t, { default: () => z }), r(388685), r(49124);
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
    f = r(835473),
    p = r(168551),
    O = r(485267),
    E = r(561308),
    h = r(669764),
    x = r(706454),
    v = r(768581),
    j = r(814225),
    b = r(709054),
    I = r(810568),
    y = r(998058),
    _ = r(839392),
    P = r(567409),
    S = r(774073),
    N = r(426482),
    A = r(715318),
    w = r(38516),
    C = r(891949),
    R = r(252547),
    M = r(484527),
    T = r(131033),
    L = r(296768),
    D = r(978313),
    G = r(206583),
    k = r(388032),
    K = r(263930);
let Z = () =>
    (0, n.jsxs)('div', {
        className: K.gameBadge,
        children: [
            (0, n.jsx)(d.YqE, { size: 'xxs' }),
            (0, n.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: k.intl.string(k.t.kAlUs7)
            })
        ]
    });
function Q(e) {
    var t;
    let { detectedGame: r, application: a, entries: s, viewId: u } = e,
        m = i.useMemo(() => (null == r ? void 0 : r.genres.map(j.P3).join(', ')), [r]),
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
        f = null == a ? void 0 : a.getIconURL(160, v.$k ? 'webp' : 'png'),
        p = b.default.extractTimestamp(a.id),
        O = o()().diff(o()(p), 'days') <= G.G,
        h = s.some((e) => (0, E.ig)(e) === c.o.GLOBAL),
        x = null != (t = r.name) ? t : null == a ? void 0 : a.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: K.gameArtHero,
                style: { backgroundImage: 'url("'.concat(g, '")') }
            }),
            (0, n.jsxs)('div', {
                className: l()(K.content, K.column, K.gapLg, K.headerInfo),
                children: [
                    (0, n.jsxs)('div', {
                        className: K.coverArtRow,
                        children: [
                            (0, n.jsx)('div', {
                                className: K.logoWrapper,
                                children: (0, n.jsx)(N.C, {
                                    game: r,
                                    application: a,
                                    className: K.logo,
                                    size: N.Z.LARGE
                                })
                            }),
                            (0, n.jsx)(A.Z, {
                                applicationId: a.id,
                                viewId: u,
                                className: K.overflowMenu
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: l()(K.row, K.gapSm, K.gameDetails),
                        children: (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(d.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: x
                                }),
                                (0, n.jsxs)('div', {
                                    className: l()(K.row, K.gapSm),
                                    children: [
                                        null != f &&
                                            (0, n.jsx)('img', {
                                                className: K.gameIcon,
                                                src: f,
                                                height: 16,
                                                alt: k.intl.formatToPlainString(k.t['nh+jWl'], { game: x })
                                            }),
                                        (0, n.jsx)(d.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        O &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                className: K.newBadge,
                                                children: k.intl.string(k.t.y2b7CA)
                                            }),
                                        h &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(d.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, n.jsx)(Z, {})
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
    let { detectedGame: r, application: i, entries: a, officialGuildInvite: l, similarGames: s, similarGamesError: o, onClose: c, viewId: u, trackAction: d } = e;
    return (0, n.jsxs)('div', {
        className: K.sections,
        children: [
            (0, n.jsx)(R.Z, {
                entries: a,
                viewId: u,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c
            }),
            (0, n.jsx)(C.Z, {
                detectedGame: r,
                trackAction: d
            }),
            (0, n.jsx)(L.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: d,
                similarGames: s,
                similarGamesError: o
            })
        ]
    });
}
function Y(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: a, onClose: s } = e,
        o = i.useCallback(
            (e) => {
                r(e);
            },
            [r]
        );
    return (0, n.jsxs)('div', {
        className: l()(K.sidebar, K.column, K.gapLg),
        children: [
            (0, n.jsx)(d.X6q, {
                variant: 'heading-md/bold',
                children: k.intl.string(k.t.CI0vSE)
            }),
            (0, n.jsxs)('div', {
                className: K.sections,
                children: [
                    (0, n.jsx)(D.Z, {
                        detectedGame: t,
                        trackAction: a
                    }),
                    (0, n.jsx)(M.Z, {
                        detectedGame: t,
                        trackClick: a,
                        onInviteResolved: o,
                        closeModal: s
                    }),
                    (0, n.jsx)(w.Z, {
                        detectedGame: t,
                        trackClick: a
                    }),
                    (0, n.jsx)(T.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let U = (e) => e.filter(S.z6).slice(0, 5),
    z = (e) => {
        var t;
        let { applicationId: r, source: a, sourceUserId: s, transitionState: o, onClose: c, appContext: v } = e,
            { clientThemesClassName: j } = (0, p.ZP)(),
            b = (0, u.e7)([x.default], () => x.default.locale),
            S = i.useMemo(() => (0, I.fP)(), []),
            N = (0, u.Wu)([_.Z], () => {
                var e;
                return (null != (e = _.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
            }),
            [A, w] = i.useState(null),
            C = (0, P.Ns)(r),
            [R, M] = i.useState(null),
            T = (0, f.q)(r),
            L = (0, u.e7)([h.Z], () => h.Z.getGame(r)),
            D = null != (t = null == L ? void 0 : L.name) ? t : null == T ? void 0 : T.name,
            G = (e, t) => {
                var n;
                (0, I.UE)({
                    gameName: null != D ? D : '',
                    applicationId: r,
                    action: e,
                    similarGameId: t,
                    viewId: S,
                    officialGuildId: null == R || null == (n = R.guild) ? void 0 : n.id
                });
            };
        return ((0, g.ZP)(() => {
            (0, I.IS)({
                source: a,
                viewId: S,
                applicationId: r,
                gameName: null != D ? D : '',
                authorId: s
            }),
                (0, O.Jn)();
        }),
        (0, f.Z)(N),
        i.useEffect(() => {
            b.startsWith('en') || (null == L ? void 0 : L.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
        }, [r, null == L ? void 0 : L.summaryLocalized, b]),
        i.useEffect(() => {
            (async () => {
                if (0 === N.length) {
                    w(null);
                    try {
                        await (0, y.i)(r);
                    } catch (e) {
                        w(e);
                    }
                }
            })();
        }, [r, N]),
        (0, g.ZP)(() => () => {
            var e;
            let t = Date.now(),
                n = C.map((e) => {
                    let r = (0, E.kr)(e) ? (0, E.T_)(e, t) : (0, E.GL)(e, b);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: r
                    });
                });
            (0, I.wz)({
                viewId: S,
                applicationId: r,
                gameName: null != D ? D : '',
                playedFriendIds: C.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: U(N),
                officialGuildId: null == R || null == (e = R.guild) ? void 0 : e.id
            });
        }),
        null == L || null == T)
            ? null
            : (0, n.jsx)(d.Y0X, {
                  transitionState: o,
                  size: d.CgR.DYNAMIC,
                  className: l()(j, K.gameProfileModal),
                  children: (0, n.jsxs)(d.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, n.jsx)(Q, {
                              detectedGame: L,
                              application: T,
                              entries: C,
                              viewId: S,
                              trackAction: G
                          }),
                          (0, n.jsx)(d.y5t, {
                              children: (0, n.jsxs)('div', {
                                  className: l()(K.content, K.mainContent),
                                  children: [
                                      (0, n.jsx)(F, {
                                          detectedGame: L,
                                          application: T,
                                          entries: C,
                                          officialGuildInvite: R,
                                          similarGames: N,
                                          similarGamesError: A,
                                          onClose: c,
                                          viewId: S,
                                          trackAction: G
                                      }),
                                      (0, n.jsx)(Y, {
                                          detectedGame: L,
                                          setOfficialGuildInvite: M,
                                          trackAction: G,
                                          onClose: c,
                                          appContext: v
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
