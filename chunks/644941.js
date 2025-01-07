n.r(t), n(47120);
var r = n(200651),
    i = n(192379),
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
    f = n(168551),
    h = n(485267),
    x = n(561308),
    _ = n(669764),
    E = n(706454),
    I = n(768581),
    v = n(814225),
    C = n(709054),
    A = n(810568),
    S = n(998058),
    b = n(839392),
    j = n(567409),
    T = n(774073),
    N = n(426482),
    P = n(715318),
    M = n(38516),
    y = n(891949),
    L = n(252547),
    O = n(484527),
    R = n(131033),
    w = n(296768),
    k = n(978313),
    D = n(206583),
    G = n(388032),
    Z = n(561526);
let K = () =>
    (0, r.jsxs)('div', {
        className: Z.gameBadge,
        children: [
            (0, r.jsx)(u.FireIcon, { size: 'xxs' }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: G.intl.string(G.t.kAlUs7)
            })
        ]
    });
function U(e) {
    var t;
    let { detectedGame: n, application: a, entries: o, viewId: d } = e,
        m = i.useMemo(() => (null == n ? void 0 : n.genres.map(v.P3).join(', ')), [n]),
        p = i.useMemo(() => {
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
        f = C.default.extractTimestamp(a.id),
        h = s()().diff(s()(f), 'days') <= D.G,
        _ = o.some((e) => (0, x.ig)(e) === c.o.GLOBAL),
        E = null !== (t = n.name) && void 0 !== t ? t : null == a ? void 0 : a.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(Z.gameArtHero),
                style: { backgroundImage: 'url("'.concat(p, '")') }
            }),
            (0, r.jsxs)('div', {
                className: l()(Z.content, Z.column, Z.gapLg, Z.headerInfo),
                children: [
                    (0, r.jsxs)('div', {
                        className: Z.coverArtRow,
                        children: [
                            (0, r.jsx)('div', {
                                className: Z.logoWrapper,
                                children: (0, r.jsx)(N.C, {
                                    game: n,
                                    application: a,
                                    className: Z.logo,
                                    size: N.Z.LARGE
                                })
                            }),
                            (0, r.jsx)(P.Z, {
                                applicationId: a.id,
                                viewId: d,
                                className: Z.overflowMenu
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: l()(Z.row, Z.gapSm, Z.gameDetails),
                        children: (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: 'heading-xl/bold',
                                    children: E
                                }),
                                (0, r.jsxs)('div', {
                                    className: l()(Z.row, Z.gapSm),
                                    children: [
                                        null != g &&
                                            (0, r.jsx)('img', {
                                                className: Z.gameIcon,
                                                src: g,
                                                height: 16,
                                                alt: G.intl.formatToPlainString(G.t['nh+jWl'], { game: E })
                                            }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: m
                                        }),
                                        h &&
                                            (0, r.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                className: Z.newBadge,
                                                children: G.intl.string(G.t.y2b7CA)
                                            }),
                                        _ &&
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
    let { detectedGame: n, application: i, entries: a, officialGuildInvite: l, similarGames: o, similarGamesError: s, onClose: c, viewId: d, trackAction: u } = e;
    return (0, r.jsxs)('div', {
        className: Z.sections,
        children: [
            (0, r.jsx)(L.Z, {
                entries: a,
                viewId: d,
                officialGuildId: null == l ? void 0 : null === (t = l.guild) || void 0 === t ? void 0 : t.id,
                onClose: c
            }),
            (0, r.jsx)(y.Z, {
                detectedGame: n,
                trackAction: u
            }),
            (0, r.jsx)(w.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: s
            })
        ]
    });
}
function B(e) {
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: i, onClose: a } = e;
    return (0, r.jsxs)('div', {
        className: l()(Z.sidebar, Z.column, Z.gapLg),
        children: [
            (0, r.jsx)(u.Heading, {
                variant: 'heading-md/bold',
                children: G.intl.string(G.t.CI0vSE)
            }),
            (0, r.jsxs)('div', {
                className: Z.sections,
                children: [
                    (0, r.jsx)(k.Z, {
                        detectedGame: t,
                        trackAction: i
                    }),
                    (0, r.jsx)(O.Z, {
                        detectedGame: t,
                        trackClick: i,
                        onInviteResolved: n,
                        closeModal: a
                    }),
                    (0, r.jsx)(M.Z, {
                        detectedGame: t,
                        trackClick: i
                    }),
                    (0, r.jsx)(R.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let F = (e) => e.filter(T.z6).slice(0, 5);
t.default = (e) => {
    var t;
    let { applicationId: n, source: a, sourceUserId: o, transitionState: s, onClose: c } = e,
        { clientThemesClassName: I } = (0, f.ZP)(),
        v = (0, d.e7)([E.default], () => E.default.locale),
        C = i.useMemo(() => (0, A.fP)(), []),
        T = (0, d.Wu)([b.Z], () => {
            var e;
            return (null !== (e = b.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [N, P] = i.useState(null),
        M = (0, j.Ns)(n),
        [y, L] = i.useState(null),
        O = (0, g.q)(n),
        R = (0, d.e7)([_.Z], () => _.Z.getGame(n)),
        w = null !== (t = null == R ? void 0 : R.name) && void 0 !== t ? t : null == O ? void 0 : O.name,
        k = (e, t) => {
            var r;
            (0, A.UE)({
                gameName: null != w ? w : '',
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: C,
                officialGuildId: null == y ? void 0 : null === (r = y.guild) || void 0 === r ? void 0 : r.id
            });
        };
    return ((0, p.Z)(() => {
        (0, A.IS)({
            source: a,
            viewId: C,
            applicationId: n,
            gameName: null != w ? w : '',
            authorId: o
        }),
            (0, h.Jn)();
    }),
    (0, g.Z)(T),
    i.useEffect(() => {
        !v.startsWith('en') && (null == R ? void 0 : R.summaryLocalized) == null && m.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == R ? void 0 : R.summaryLocalized, v]),
    i.useEffect(() => {
        (async () => {
            if (0 === T.length) {
                P(null);
                try {
                    await (0, S.i)(n);
                } catch (e) {
                    P(e);
                }
            }
        })();
    }, [n, T]),
    (0, p.Z)(() => () => {
        var e;
        let t = Date.now(),
            r = M.map((e) => {
                let n = (0, x.kr)(e) ? (0, x.T_)(e, t) : (0, x.GL)(e, v);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n
                });
            });
        (0, A.wz)({
            viewId: C,
            applicationId: n,
            gameName: null != w ? w : '',
            playedFriendIds: M.map((e) => e.author_id),
            playedFriendsData: r,
            similarGames: F(T),
            officialGuildId: null == y ? void 0 : null === (e = y.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == R || null == O)
        ? null
        : (0, r.jsx)(u.ModalRoot, {
              transitionState: s,
              size: u.ModalSize.DYNAMIC,
              className: l()(I, Z.gameProfileModal),
              children: (0, r.jsxs)(u.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, r.jsx)(U, {
                          detectedGame: R,
                          application: O,
                          entries: M,
                          viewId: C,
                          trackAction: k
                      }),
                      (0, r.jsx)(u.HeadingLevel, {
                          children: (0, r.jsxs)('div', {
                              className: l()(Z.content, Z.mainContent),
                              children: [
                                  (0, r.jsx)(H, {
                                      detectedGame: R,
                                      application: O,
                                      entries: M,
                                      officialGuildInvite: y,
                                      similarGames: T,
                                      similarGamesError: N,
                                      onClose: c,
                                      viewId: C,
                                      trackAction: k
                                  }),
                                  (0, r.jsx)(B, {
                                      detectedGame: R,
                                      setOfficialGuildInvite: L,
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
