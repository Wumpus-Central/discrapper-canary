(r.d(t, { default: () => z }), r(388685), r(49124));
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
    x = r(669764),
    v = r(480086),
    h = r(706454),
    j = r(768581),
    b = r(814225),
    I = r(709054),
    y = r(810568),
    _ = r(998058),
    S = r(839392),
    P = r(567409),
    N = r(774073),
    w = r(426482),
    A = r(715318),
    C = r(38516),
    L = r(891949),
    T = r(252547),
    M = r(484527),
    R = r(131033),
    D = r(296768),
    G = r(978313),
    k = r(206583),
    K = r(388032),
    Z = r(263930);
let Q = () =>
    (0, n.jsxs)('div', {
        className: Z.gameBadge,
        children: [
            (0, n.jsx)(d.YqE, { size: 'xxs' }),
            (0, n.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: K.intl.string(K.t.kAlUs7)
            })
        ]
    });
function F(e) {
    var t;
    let { detectedGame: r, application: a, entries: s, viewId: u } = e,
        m = i.useMemo(() => (null == r ? void 0 : r.genres.map(b.P3).join(', ')), [r]),
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
        f = null == a ? void 0 : a.getIconURL(160, j.$k ? 'webp' : 'png'),
        p = I.default.extractTimestamp(a.id),
        O = o()().diff(o()(p), 'days') <= k.G,
        x = s.some((e) => (0, E.ig)(e) === c.o.GLOBAL),
        v = null != (t = r.name) ? t : null == a ? void 0 : a.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: Z.gameArtHero,
                style: { backgroundImage: 'url("'.concat(g, '")') }
            }),
            (0, n.jsxs)('div', {
                className: l()(Z.content, Z.column, Z.gapLg, Z.headerInfo),
                children: [
                    (0, n.jsxs)('div', {
                        className: Z.coverArtRow,
                        children: [
                            (0, n.jsx)('div', {
                                className: Z.logoWrapper,
                                children: (0, n.jsx)(w.C, {
                                    game: r,
                                    application: a,
                                    className: Z.logo,
                                    size: w.Z.LARGE
                                })
                            }),
                            (0, n.jsx)(A.Z, {
                                applicationId: a.id,
                                viewId: u,
                                className: Z.overflowMenu
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: l()(Z.row, Z.gapSm, Z.gameDetails),
                        children: (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(d.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: v
                                }),
                                (0, n.jsxs)('div', {
                                    className: l()(Z.row, Z.gapSm),
                                    children: [
                                        null != f &&
                                            (0, n.jsx)('img', {
                                                className: Z.gameIcon,
                                                src: f,
                                                height: 16,
                                                alt: K.intl.formatToPlainString(K.t['nh+jWl'], { game: v })
                                            }),
                                        (0, n.jsx)(d.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        O &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                className: Z.newBadge,
                                                children: K.intl.string(K.t.y2b7CA)
                                            }),
                                        x &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(d.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, n.jsx)(Q, {})
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
function Y(e) {
    var t;
    let { detectedGame: r, application: i, entries: a, officialGuildInvite: l, similarGames: s, similarGamesError: o, onClose: c, viewId: u, trackAction: d } = e;
    return (0, n.jsxs)('div', {
        className: Z.sections,
        children: [
            (0, n.jsx)(T.Z, {
                entries: a,
                viewId: u,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c
            }),
            (0, n.jsx)(L.Z, {
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
function U(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: a, onClose: s, applicationId: o } = e,
        c = (0, v.u)(o),
        u = i.useCallback(
            (e) => {
                r(e);
            },
            [r]
        );
    return (0, n.jsxs)('div', {
        className: l()(Z.sidebar, Z.column, Z.gapLg),
        children: [
            null != c
                ? (0, n.jsx)('div', {
                      className: Z.gameStoreButton,
                      children: (0, n.jsx)(d.zxk, {
                          icon: c.icon,
                          text: K.intl.string(c.labelKey),
                          variant: 'overlay-secondary',
                          onClick: c.openLink,
                          fullWidth: !0
                      })
                  })
                : null,
            (0, n.jsx)(d.X6q, {
                variant: 'heading-md/bold',
                children: K.intl.string(K.t.CI0vSE)
            }),
            (0, n.jsxs)('div', {
                className: Z.sections,
                children: [
                    (0, n.jsx)(G.Z, {
                        detectedGame: t,
                        trackAction: a
                    }),
                    (0, n.jsx)(M.Z, {
                        detectedGame: t,
                        trackClick: a,
                        onInviteResolved: u,
                        closeModal: s
                    }),
                    (0, n.jsx)(C.Z, {
                        detectedGame: t,
                        trackClick: a
                    }),
                    (0, n.jsx)(R.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let B = (e) => e.filter(N.z6).slice(0, 5),
    z = (e) => {
        var t;
        let { applicationId: r, source: a, sourceUserId: s, transitionState: o, onClose: c, appContext: v } = e,
            { clientThemesClassName: j } = (0, p.ZP)(),
            b = (0, u.e7)([h.default], () => h.default.locale),
            I = i.useMemo(() => (0, y.fP)(), []),
            N = (0, u.Wu)([S.Z], () => {
                var e;
                return (null != (e = S.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
            }),
            [w, A] = i.useState(null),
            C = (0, P.N)(r),
            [L, T] = i.useState(null),
            M = (0, f.q)(r),
            R = (0, u.e7)([x.Z], () => x.Z.getGame(r)),
            D = null != (t = null == R ? void 0 : R.name) ? t : null == M ? void 0 : M.name,
            G = (e, t) => {
                var n;
                (0, y.UE)({
                    gameName: null != D ? D : '',
                    applicationId: r,
                    action: e,
                    similarGameId: t,
                    viewId: I,
                    officialGuildId: null == L || null == (n = L.guild) ? void 0 : n.id
                });
            };
        return ((0, g.ZP)(() => {
            ((0, y.IS)({
                source: a,
                viewId: I,
                applicationId: r,
                gameName: null != D ? D : '',
                authorId: s
            }),
                (0, O.Jn)());
        }),
        (0, f.Z)(N),
        i.useEffect(() => {
            b.startsWith('en') || (null == R ? void 0 : R.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
        }, [r, null == R ? void 0 : R.summaryLocalized, b]),
        i.useEffect(() => {
            (async () => {
                if (0 === N.length) {
                    A(null);
                    try {
                        await (0, _.i)(r);
                    } catch (e) {
                        A(e);
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
            (0, y.wz)({
                viewId: I,
                applicationId: r,
                gameName: null != D ? D : '',
                playedFriendIds: C.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: B(N),
                officialGuildId: null == L || null == (e = L.guild) ? void 0 : e.id
            });
        }),
        null == R || null == M)
            ? null
            : (0, n.jsx)(d.Y0X, {
                  transitionState: o,
                  size: d.CgR.DYNAMIC,
                  className: l()(j, Z.gameProfileModal),
                  parentComponent: 'GameProfileModal',
                  children: (0, n.jsxs)(d.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, n.jsx)(F, {
                              detectedGame: R,
                              application: M,
                              entries: C,
                              viewId: I,
                              trackAction: G
                          }),
                          (0, n.jsx)(d.y5t, {
                              children: (0, n.jsxs)('div', {
                                  className: l()(Z.content, Z.mainContent),
                                  children: [
                                      (0, n.jsx)(Y, {
                                          detectedGame: R,
                                          application: M,
                                          entries: C,
                                          officialGuildInvite: L,
                                          similarGames: N,
                                          similarGamesError: w,
                                          onClose: c,
                                          viewId: I,
                                          trackAction: G
                                      }),
                                      (0, n.jsx)(U, {
                                          detectedGame: R,
                                          setOfficialGuildInvite: T,
                                          trackAction: G,
                                          onClose: c,
                                          appContext: v,
                                          applicationId: r
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
