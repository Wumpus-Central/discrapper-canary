r.d(t, { default: () => H }), r(47120), r(26686);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    i = r.n(o),
    l = r(913527),
    s = r.n(l),
    c = r(705512),
    u = r(442837),
    d = r(481060),
    p = r(224706),
    f = r(493773),
    m = r(835473),
    g = r(168551),
    b = r(485267),
    _ = r(561308),
    h = r(669764),
    O = r(706454),
    y = r(768581),
    v = r(814225),
    j = r(709054),
    x = r(810568),
    P = r(998058),
    E = r(839392),
    I = r(567409),
    N = r(774073),
    w = r(426482),
    C = r(715318),
    S = r(38516),
    T = r(891949),
    A = r(252547),
    k = r(484527),
    M = r(131033),
    L = r(296768),
    D = r(978313),
    W = r(206583),
    R = r(388032),
    Z = r(263930);
let G = () =>
    (0, n.jsxs)('div', {
        className: Z.gameBadge,
        children: [
            (0, n.jsx)(d.YqE, { size: 'xxs' }),
            (0, n.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: R.NW.string(R.t.kAlUs7)
            })
        ]
    });
function B(e) {
    var t;
    let { detectedGame: r, application: o, entries: l, viewId: u } = e,
        p = a.useMemo(() => (null == r ? void 0 : r.genres.map(v.P3).join(', ')), [r]),
        f = a.useMemo(() => {
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
        m = null == o ? void 0 : o.getIconURL(160, y.$k ? 'webp' : 'png'),
        g = j.default.extractTimestamp(o.id),
        b = s()().diff(s()(g), 'days') <= W.G,
        h = l.some((e) => (0, _.ig)(e) === c.o.GLOBAL),
        O = null != (t = r.name) ? t : null == o ? void 0 : o.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: Z.gameArtHero,
                style: { backgroundImage: 'url("'.concat(f, '")') }
            }),
            (0, n.jsxs)('div', {
                className: i()(Z.content, Z.column, Z.gapLg, Z.headerInfo),
                children: [
                    (0, n.jsxs)('div', {
                        className: Z.coverArtRow,
                        children: [
                            (0, n.jsx)('div', {
                                className: Z.logoWrapper,
                                children: (0, n.jsx)(w.C, {
                                    game: r,
                                    application: o,
                                    className: Z.logo,
                                    size: w.Z.LARGE
                                })
                            }),
                            (0, n.jsx)(C.Z, {
                                applicationId: o.id,
                                viewId: u,
                                className: Z.overflowMenu
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: i()(Z.row, Z.gapSm, Z.gameDetails),
                        children: (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(d.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: O
                                }),
                                (0, n.jsxs)('div', {
                                    className: i()(Z.row, Z.gapSm),
                                    children: [
                                        null != m &&
                                            (0, n.jsx)('img', {
                                                className: Z.gameIcon,
                                                src: m,
                                                height: 16,
                                                alt: R.NW.formatToPlainString(R.t['nh+jWl'], { game: O })
                                            }),
                                        (0, n.jsx)(d.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: p
                                        }),
                                        b &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                className: Z.newBadge,
                                                children: R.NW.string(R.t.y2b7CA)
                                            }),
                                        h &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(d.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, n.jsx)(G, {})
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
function K(e) {
    var t;
    let { detectedGame: r, application: a, entries: o, officialGuildInvite: i, similarGames: l, similarGamesError: s, onClose: c, viewId: u, trackAction: d } = e;
    return (0, n.jsxs)('div', {
        className: Z.sections,
        children: [
            (0, n.jsx)(A.Z, {
                entries: o,
                viewId: u,
                officialGuildId: null == i || null == (t = i.guild) ? void 0 : t.id,
                onClose: c
            }),
            (0, n.jsx)(T.Z, {
                detectedGame: r,
                trackAction: d
            }),
            (0, n.jsx)(L.Z, {
                applicationId: a.id,
                onClose: c,
                trackAction: d,
                similarGames: l,
                similarGamesError: s
            })
        ]
    });
}
function U(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: o, onClose: l } = e,
        s = a.useCallback(
            (e) => {
                r(e);
            },
            [r]
        );
    return (0, n.jsxs)('div', {
        className: i()(Z.sidebar, Z.column, Z.gapLg),
        children: [
            (0, n.jsx)(d.X6q, {
                variant: 'heading-md/bold',
                children: R.NW.string(R.t.CI0vSE)
            }),
            (0, n.jsxs)('div', {
                className: Z.sections,
                children: [
                    (0, n.jsx)(D.Z, {
                        detectedGame: t,
                        trackAction: o
                    }),
                    (0, n.jsx)(k.Z, {
                        detectedGame: t,
                        trackClick: o,
                        onInviteResolved: s,
                        closeModal: l
                    }),
                    (0, n.jsx)(S.Z, {
                        detectedGame: t,
                        trackClick: o
                    }),
                    (0, n.jsx)(M.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let F = (e) => e.filter(N.z6).slice(0, 5),
    H = (e) => {
        var t;
        let { applicationId: r, source: o, sourceUserId: l, transitionState: s, onClose: c, appContext: y } = e,
            { clientThemesClassName: v } = (0, g.ZP)(),
            j = (0, u.e7)([O.default], () => O.default.locale),
            N = a.useMemo(() => (0, x.fP)(), []),
            w = (0, u.Wu)([E.Z], () => {
                var e;
                return (null != (e = E.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
            }),
            [C, S] = a.useState(null),
            T = (0, I.Ns)(r),
            [A, k] = a.useState(null),
            M = (0, m.q)(r),
            L = (0, u.e7)([h.Z], () => h.Z.getGame(r)),
            D = null != (t = null == L ? void 0 : L.name) ? t : null == M ? void 0 : M.name,
            W = (e, t) => {
                var n;
                (0, x.UE)({
                    gameName: null != D ? D : '',
                    applicationId: r,
                    action: e,
                    similarGameId: t,
                    viewId: N,
                    officialGuildId: null == A || null == (n = A.guild) ? void 0 : n.id
                });
            };
        return ((0, f.ZP)(() => {
            (0, x.IS)({
                source: o,
                viewId: N,
                applicationId: r,
                gameName: null != D ? D : '',
                authorId: l
            }),
                (0, b.Jn)();
        }),
        (0, m.Z)(w),
        a.useEffect(() => {
            j.startsWith('en') || (null == L ? void 0 : L.summaryLocalized) != null || p.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
        }, [r, null == L ? void 0 : L.summaryLocalized, j]),
        a.useEffect(() => {
            (async () => {
                if (0 === w.length) {
                    S(null);
                    try {
                        await (0, P.i)(r);
                    } catch (e) {
                        S(e);
                    }
                }
            })();
        }, [r, w]),
        (0, f.ZP)(() => () => {
            var e;
            let t = Date.now(),
                n = T.map((e) => {
                    let r = (0, _.kr)(e) ? (0, _.T_)(e, t) : (0, _.GL)(e, j);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: r
                    });
                });
            (0, x.wz)({
                viewId: N,
                applicationId: r,
                gameName: null != D ? D : '',
                playedFriendIds: T.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: F(w),
                officialGuildId: null == A || null == (e = A.guild) ? void 0 : e.id
            });
        }),
        null == L || null == M)
            ? null
            : (0, n.jsx)(d.Y0X, {
                  transitionState: s,
                  size: d.CgR.DYNAMIC,
                  className: i()(v, Z.gameProfileModal),
                  children: (0, n.jsxs)(d.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, n.jsx)(B, {
                              detectedGame: L,
                              application: M,
                              entries: T,
                              viewId: N,
                              trackAction: W
                          }),
                          (0, n.jsx)(d.y5t, {
                              children: (0, n.jsxs)('div', {
                                  className: i()(Z.content, Z.mainContent),
                                  children: [
                                      (0, n.jsx)(K, {
                                          detectedGame: L,
                                          application: M,
                                          entries: T,
                                          officialGuildInvite: A,
                                          similarGames: w,
                                          similarGamesError: C,
                                          onClose: c,
                                          viewId: N,
                                          trackAction: W
                                      }),
                                      (0, n.jsx)(U, {
                                          detectedGame: L,
                                          setOfficialGuildInvite: k,
                                          trackAction: W,
                                          onClose: c,
                                          appContext: y
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
