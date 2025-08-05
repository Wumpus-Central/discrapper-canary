(r.d(t, { default: () => X }), r(388685), r(49124));
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(913527),
    s = r.n(o),
    c = r(705512),
    d = r(442837),
    u = r(481060),
    m = r(224706),
    g = r(493773),
    p = r(100527),
    f = r(835473),
    x = r(168551),
    j = r(485267),
    v = r(561308),
    h = r(669764),
    b = r(480086),
    O = r(706454),
    y = r(768581),
    _ = r(814225),
    w = r(709054),
    I = r(810568),
    P = r(998058),
    E = r(839392),
    S = r(567409),
    N = r(774073),
    k = r(426482),
    C = r(715318),
    A = r(38516),
    G = r(891949),
    T = r(252547),
    D = r(484527),
    M = r(131033),
    Z = r(296768),
    L = r(978313),
    R = r(206583),
    z = r(388032),
    F = r(263930);
let H = () =>
    (0, n.jsxs)('div', {
        className: F.gameBadge,
        children: [
            (0, n.jsx)(u.YqE, { size: 'xxs' }),
            (0, n.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: z.intl.string(z.t.kAlUs7)
            })
        ]
    });
function W(e) {
    var t;
    let { detectedGame: r, application: i, entries: o, viewId: d } = e,
        m = a.useMemo(() => (null == r ? void 0 : r.genres.map(_.P3).join(', ')), [r]),
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
        p = null == i ? void 0 : i.getIconURL(160, y.$k ? 'webp' : 'png'),
        f = w.default.extractTimestamp(i.id),
        x = s()().diff(s()(f), 'days') <= R.G,
        j = o.some((e) => (0, v.ig)(e) === c.o.GLOBAL),
        h = null != (t = r.name) ? t : null == i ? void 0 : i.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: F.gameArtHero,
                style: { backgroundImage: 'url("'.concat(g, '")') }
            }),
            (0, n.jsxs)('div', {
                className: l()(F.content, F.column, F.gapLg, F.headerInfo),
                children: [
                    (0, n.jsxs)('div', {
                        className: F.coverArtRow,
                        children: [
                            (0, n.jsx)('div', {
                                className: F.logoWrapper,
                                children: (0, n.jsx)(k.C, {
                                    game: r,
                                    application: i,
                                    className: F.logo,
                                    size: k.Z.LARGE
                                })
                            }),
                            (0, n.jsx)(C.Z, {
                                applicationId: i.id,
                                viewId: d,
                                className: F.overflowMenu
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: l()(F.row, F.gapSm, F.gameDetails),
                        children: (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(u.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: h
                                }),
                                (0, n.jsxs)('div', {
                                    className: l()(F.row, F.gapSm),
                                    children: [
                                        null != p &&
                                            (0, n.jsx)('img', {
                                                className: F.gameIcon,
                                                src: p,
                                                height: 16,
                                                alt: z.intl.formatToPlainString(z.t['nh+jWl'], { game: h })
                                            }),
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        x &&
                                            (0, n.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                className: F.newBadge,
                                                children: z.intl.string(z.t.y2b7CA)
                                            }),
                                        j &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, n.jsx)(H, {})
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
    let { detectedGame: r, application: a, entries: i, officialGuildInvite: l, similarGames: o, similarGamesError: s, onClose: c, viewId: d, trackAction: u } = e;
    return (0, n.jsxs)('div', {
        className: F.sections,
        children: [
            (0, n.jsx)(T.Z, {
                entries: i,
                viewId: d,
                officialGuildId: null == l || null == (t = l.guild) ? void 0 : t.id,
                onClose: c
            }),
            (0, n.jsx)(G.Z, {
                detectedGame: r,
                trackAction: u
            }),
            (0, n.jsx)(Z.Z, {
                applicationId: a.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: s
            })
        ]
    });
}
function B(e) {
    let { detectedGame: t, setOfficialGuildInvite: r, trackAction: i, onClose: o, applicationId: s } = e,
        c = (0, b.u)(s, p.Z.GAME_PROFILE),
        d = a.useCallback(
            (e) => {
                r(e);
            },
            [r]
        );
    return (0, n.jsxs)('div', {
        className: l()(F.sidebar, F.column, F.gapLg),
        children: [
            null != c
                ? (0, n.jsx)('div', {
                      className: F.gameStoreButton,
                      children: (0, n.jsx)(u.zxk, {
                          icon: c.icon,
                          text: z.intl.string(c.labelKey),
                          variant: 'overlay-secondary',
                          onClick: c.openLink,
                          fullWidth: !0
                      })
                  })
                : null,
            (0, n.jsx)(u.X6q, {
                variant: 'heading-md/bold',
                children: z.intl.string(z.t.CI0vSE)
            }),
            (0, n.jsxs)('div', {
                className: F.sections,
                children: [
                    (0, n.jsx)(L.Z, {
                        detectedGame: t,
                        trackAction: i
                    }),
                    (0, n.jsx)(D.Z, {
                        detectedGame: t,
                        trackClick: i,
                        onInviteResolved: d,
                        closeModal: o
                    }),
                    (0, n.jsx)(A.Z, {
                        detectedGame: t,
                        trackClick: i
                    }),
                    (0, n.jsx)(M.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let Y = (e) => e.filter(N.z6).slice(0, 5),
    X = (e) => {
        var t;
        let { applicationId: r, source: i, sourceUserId: o, transitionState: s, onClose: c, appContext: p } = e,
            { clientThemesClassName: b } = (0, x.ZP)(),
            y = (0, d.e7)([O.default], () => O.default.locale),
            _ = a.useMemo(() => (0, I.fP)(), []),
            w = (0, d.Wu)([E.Z], () => {
                var e;
                return (null != (e = E.Z.getSimilarGames(r)) ? e : []).slice(0, 25);
            }),
            [N, k] = a.useState(null),
            C = (0, S.N)(r),
            [A, G] = a.useState(null),
            T = (0, f.q)(r),
            D = (0, d.e7)([h.Z], () => h.Z.getGame(r)),
            M = null != (t = null == D ? void 0 : D.name) ? t : null == T ? void 0 : T.name,
            Z = (e, t) => {
                var n;
                (0, I.UE)({
                    gameName: null != M ? M : '',
                    applicationId: r,
                    action: e,
                    similarGameId: t,
                    viewId: _,
                    officialGuildId: null == A || null == (n = A.guild) ? void 0 : n.id
                });
            };
        return ((0, g.ZP)(() => {
            ((0, I.IS)({
                source: i,
                viewId: _,
                applicationId: r,
                gameName: null != M ? M : '',
                authorId: o
            }),
                (0, j.Jn)());
        }),
        (0, f.Z)(w),
        a.useEffect(() => {
            y.startsWith('en') || (null == D ? void 0 : D.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([r], { forceFetch: !0 });
        }, [r, null == D ? void 0 : D.summaryLocalized, y]),
        a.useEffect(() => {
            (async () => {
                if (0 === w.length) {
                    k(null);
                    try {
                        await (0, P.i)(r);
                    } catch (e) {
                        k(e);
                    }
                }
            })();
        }, [r, w]),
        (0, g.ZP)(() => () => {
            var e;
            let t = Date.now(),
                n = C.map((e) => {
                    let r = (0, v.kr)(e) ? (0, v.T_)(e, t) : (0, v.GL)(e, y);
                    return JSON.stringify({
                        item_id: e.id,
                        trait: e.traits,
                        time_played: r
                    });
                });
            (0, I.wz)({
                viewId: _,
                applicationId: r,
                gameName: null != M ? M : '',
                playedFriendIds: C.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: Y(w),
                officialGuildId: null == A || null == (e = A.guild) ? void 0 : e.id
            });
        }),
        null == D || null == T)
            ? null
            : (0, n.jsx)(u.Y0X, {
                  transitionState: s,
                  size: u.CgR.DYNAMIC,
                  className: l()(b, F.gameProfileModal),
                  parentComponent: 'GameProfileModal',
                  children: (0, n.jsxs)(u.Ttm, {
                      orientation: 'auto',
                      children: [
                          (0, n.jsx)(W, {
                              detectedGame: D,
                              application: T,
                              entries: C,
                              viewId: _,
                              trackAction: Z
                          }),
                          (0, n.jsx)(u.y5t, {
                              children: (0, n.jsxs)('div', {
                                  className: l()(F.content, F.mainContent),
                                  children: [
                                      (0, n.jsx)(U, {
                                          detectedGame: D,
                                          application: T,
                                          entries: C,
                                          officialGuildInvite: A,
                                          similarGames: w,
                                          similarGamesError: N,
                                          onClose: c,
                                          viewId: _,
                                          trackAction: Z
                                      }),
                                      (0, n.jsx)(B, {
                                          detectedGame: D,
                                          setOfficialGuildInvite: G,
                                          trackAction: Z,
                                          onClose: c,
                                          appContext: p,
                                          applicationId: r
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              });
    };
