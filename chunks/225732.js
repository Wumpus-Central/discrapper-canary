n.d(t, { default: () => eC });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(110259),
    d = n(535185),
    u = n(792216),
    m = n(379834),
    x = n(311907),
    h = n(990078),
    f = n(521489),
    p = n(397927),
    g = n(964486),
    _ = n(359549),
    v = n(793574),
    A = n(688810),
    j = n(139286),
    E = n(362490),
    b = n(429913),
    C = n(590703),
    I = n(708197),
    N = n(583846),
    S = n(885151),
    T = n(928550),
    y = n(657331),
    L = n(773669),
    k = n(486020),
    R = n(541830),
    O = n(661191),
    G = n(240248),
    M = n(409626),
    w = n(880405),
    P = n(422069),
    D = n(476464),
    V = n(205184),
    F = n(939764),
    W = n(277089),
    U = n(611656),
    Y = n(459746),
    B = n(503364),
    H = n(305080),
    z = n(941568),
    K = n(814698),
    X = n(431040),
    J = n(976720),
    Z = n(313843),
    $ = n(286737),
    Q = n(839671),
    q = n(94836),
    ee = n(392332),
    et = n(639714),
    en = n(310721),
    ea = n(922283),
    el = n(588260),
    ei = n(582942),
    er = n(999450),
    es = n(285820),
    eo = n(771004),
    ec = n(424994),
    ed = n(985018),
    eu = n(282063),
    em = n(213863);
let ex = () =>
    (0, a.jsxs)("div", {
        className: eu.uv,
        children: [
            (0, a.jsx)(p.Y3C, { size: "xxs" }),
            (0, a.jsx)(p.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ed.intl.string(ed.t.kAlUsy),
            }),
        ],
    });
function eh(e) {
    let { detectedGame: t, application: n, entries: i, trackAction: s } = e,
        c = l.useMemo(() => t?.genres.map(R.du).join(", "), [t]),
        [d] = l.useState(() => Math.random()),
        u = l.useMemo(() => {
            if (null == t) return "";
            let { artwork: e, screenshots: n } = t;
            if (e.length > 0) {
                let t = Math.floor(d * e.length);
                return e[t];
            }
            if (n.length > 0) {
                let e = Math.floor(d * n.length);
                return n[e];
            }
            return "";
        }, [t, d]),
        x = (0, G.uJ)(t.iconHash)
            ? n?.getIconURL(160, k.QB ? "webp" : "png")
            : k.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: k.QB ? "webp" : "png" }),
        h = O.default.extractTimestamp(n.id),
        f = 7 >= o()().diff(o()(h), "days"),
        g = i.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        _ = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: eu.is, style: { backgroundImage: `url("${u}")` } }),
            (0, a.jsxs)("div", {
                className: r()(eu.Qs, eu.fi, eu.iH, eu.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: eu.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: eu.bb,
                                children: (0, a.jsx)(Y.A, {
                                    game: t,
                                    application: n,
                                    className: eu.wm,
                                    size: Y.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(B.A, { applicationId: n.id, className: eu.Gg, trackAction: s }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(eu.nM, eu.Lc, eu.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(p.Heading, { variant: "heading-xl/bold", children: _ }),
                                (0, a.jsxs)("div", {
                                    className: r()(eu.nM, eu.Lc),
                                    children: [
                                        null != x &&
                                            (0, a.jsx)("img", {
                                                className: eu.Gt,
                                                src: x,
                                                height: 16,
                                                alt: ed.intl.formatToPlainString(ed.t["nh+jWk"], { game: _ }),
                                            }),
                                        (0, a.jsx)(p.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        f &&
                                            (0, a.jsx)(p.Text, {
                                                variant: "eyebrow",
                                                className: eu.Ad,
                                                children: ed.intl.string(ed.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(p.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, a.jsx)(ex, {}),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ef(e) {
    let {
        detectedGame: t,
        application: n,
        entries: l,
        officialGuildInvite: i,
        similarGames: r,
        similarGamesError: s,
        onClose: o,
        viewId: c,
        trackAction: d,
        source: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: eu.V0,
        children: [
            (0, a.jsx)(ee.A, { entries: l, viewId: c, officialGuildId: i?.guild?.id, onClose: o, source: u }),
            (0, a.jsx)(q.A, { detectedGame: t, trackAction: d }),
            (0, a.jsx)(ei.A, {
                applicationId: n.id,
                onClose: o,
                similarGames: r,
                similarGamesError: s,
                trackAction: d,
            }),
        ],
    });
}
function ep(e) {
    let { game: t, trackAction: n, closeModal: l } = e;
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: em.oC,
              children: [
                  (0, a.jsxs)("div", {
                      className: em.lM,
                      children: [
                          (0, a.jsx)(q.a, { detectedGame: t.supplementalData, trackAction: n }),
                          (0, a.jsx)(eo.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, a.jsx)(z.A, { gameId: t.id, trackAction: n }),
                  (0, a.jsx)(er.A, { trackAction: n }),
                  (0, a.jsx)(el.A, { detectedGame: t.supplementalData, closeModal: l, trackAction: n }),
              ],
          });
}
function eg(e) {
    let { game: t, trackAction: n, application: l, analyticsLocations: i } = e,
        r = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: s } = (0, H.c)();
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: eu.V0,
              children: [
                  (0, a.jsx)(q.a, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsxs)("div", {
                      className: em.gr,
                      children: [
                          (0, a.jsx)(Z.QT, { game: t, application: l, isTwoColumn: !1 }),
                          (0, a.jsxs)("div", {
                              className: em.E1,
                              children: [
                                  (0, a.jsx)(es.A, { detectedGame: t.supplementalData, trackAction: n }),
                                  (0, a.jsx)(eo.A, { detectedGame: t.supplementalData, trackAction: n }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsx)($.A, { analyticsLocations: i, trackAction: n }),
                  (0, a.jsx)(et.o, { closeModal: s, trackAction: n }),
                  (0, a.jsx)(z.A, { gameId: t.id, trackAction: n }),
                  (0, a.jsx)(er.A, { trackAction: n }),
                  (0, a.jsx)(el.A, { detectedGame: t.supplementalData, closeModal: s, trackAction: n }),
                  r && (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsx)(X.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function e_(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i, trackAction: r } = e;
    (0, j.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: i },
    });
    let s = l.useCallback(() => {
        r(M.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, a.jsx)(h.m, {
        text: ed.intl.string(ed.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(p.Button, {
            icon: p.hpF,
            text: ed.intl.string(ed.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function ev(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        a = (0, b.h)(t),
        l = (0, _.A)({ application: a, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, T.L)(t) && null != l };
}
function eA(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: i,
            trackAction: s,
            onClose: o,
            application: c,
            analyticsLocations: d,
        } = e,
        u = l.useCallback(() => {
            o(), (0, y.closeUserProfileModal)();
        }, [o]),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ev({ applicationId: c.id, analyticsLocations: d });
    return (0, a.jsxs)("div", {
        className: r()(eu.pz, eu.fi, eu.iH),
        children: [
            (0, a.jsxs)("div", {
                className: eu.NC,
                children: [
                    (0, a.jsx)(J.A, { invite: i, closeModal: u, trackAction: s }),
                    m &&
                        null != x &&
                        (0, a.jsx)(e_, { onClose: u, onCloudPlayClick: x, analyticsLocations: d, trackAction: s }),
                ],
            }),
            (0, a.jsx)(p.Heading, { variant: "heading-md/bold", children: ed.intl.string(ed.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: eu.V0,
                children: [
                    (0, a.jsx)(eo.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(et.A, { detectedGame: t, onInviteResolved: n, closeModal: u, trackAction: s }),
                    (0, a.jsx)(Q.A, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(en.A, { detectedGame: t }),
                    (0, a.jsx)(K.A, { application: c, trackAction: s }),
                    (0, a.jsx)(p.Text, {
                        variant: "text-xxs/normal",
                        children: ed.intl.format(ed.t.pch2Jw, { igdbLink: ec.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ej(e) {
    let { game: t, trackAction: n, application: l, analyticsLocations: i } = e,
        { closeModal: s } = (0, H.c)(),
        { isCloudPlayButtonShown: o, onCloudPlayClick: c } = ev({ applicationId: l.id, analyticsLocations: i }),
        { showsStoreLinks: d } = (0, es.D)(t.supplementalData);
    if (null == t.supplementalData) return null;
    let m = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(em.Pn, eu.fi, eu.iH, d ? em.sV : em.gF),
        children: [
            o && null != c
                ? (0, a.jsx)("div", {
                      className: eu.NC,
                      children: (0, a.jsx)(e_, {
                          onClose: s,
                          onCloudPlayClick: c,
                          analyticsLocations: i,
                          trackAction: n,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eu.V0,
                children: [
                    (0, a.jsx)(es.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)($.A, { analyticsLocations: i, trackAction: n }),
                    (0, a.jsx)(et.o, { closeModal: s, trackAction: n }),
                    m && (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)(X.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
                ],
            }),
        ],
    });
}
function eE(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: o,
            appContext: c,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, C.Ay)(),
        m = (0, x.bG)([L.default], () => L.default.locale),
        { analyticsLocations: h } = (0, A.Ay)(v.A.GAME_PROFILE),
        f = l.useMemo(() => (0, M.u9)(), []),
        _ = (0, x.yK)([P.A], () => (P.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [j, E] = l.useState(null),
        T = (0, V.s)(t),
        [y, k] = l.useState(null),
        R = (0, b.h)(t),
        { data: O, refetch: G } = (0, S.k)(t),
        D = O?.supplementalData ?? null,
        F = D?.name ?? R?.name,
        W = (e, a) => {
            (0, M.Tn)({
                gameName: F ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: f,
                officialGuildId: y?.guild?.id,
                source: n,
            });
        };
    return ((0, g.Ay)(() => {
        (0, M.rw)({
            source: n,
            viewId: f,
            applicationId: t,
            gameName: F ?? "",
            authorId: i,
            profileType: M.HV.FullProfile,
        }),
            (0, I.He)();
    }),
    (0, b.A)(_),
    l.useEffect(() => {
        m.startsWith("en") || D?.summaryLocalized != null || G();
    }, [t, D?.summaryLocalized, m, G]),
    l.useEffect(() => {
        (async () => {
            if (0 === _.length) {
                E(null);
                try {
                    await (0, w.NP)(t);
                } catch (e) {
                    E(e);
                }
            }
        })();
    }, [t, _]),
    (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = T.map((t) => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, M.V_)({
            viewId: f,
            applicationId: t,
            gameName: F ?? "",
            playedFriendIds: T.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: _.filter(U.oS).slice(0, 5),
            officialGuildId: y?.guild?.id,
        });
    }),
    null == O || null == D || null == R)
        ? null
        : (0, a.jsx)(A.f5, {
              value: h,
              children: (0, a.jsx)(p.dWK, {
                  transitionState: s,
                  onClose: o,
                  size: "xl",
                  children: (0, a.jsx)("div", {
                      className: r()(u, eu.fn),
                      children: (0, a.jsxs)(p.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(eh, { detectedGame: D, application: R, entries: T, trackAction: W }),
                              (0, a.jsx)(p.Fmo, {
                                  children: (0, a.jsxs)("div", {
                                      className: r()(eu.Qs, eu.rb),
                                      children: [
                                          (0, a.jsx)(ef, {
                                              detectedGame: D,
                                              application: R,
                                              entries: T,
                                              officialGuildInvite: y,
                                              similarGames: _,
                                              similarGamesError: j,
                                              onClose: o,
                                              viewId: f,
                                              source: n,
                                              trackAction: W,
                                          }),
                                          (0, a.jsx)(eA, {
                                              detectedGame: D,
                                              onSetOfficialGuildInvite: k,
                                              officialGuildInvite: y,
                                              onClose: o,
                                              appContext: c,
                                              application: R,
                                              source: n,
                                              trackExternalAction: d,
                                              trackAction: W,
                                              analyticsLocations: h,
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
function eb(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: o,
            appContext: c,
            trackExternalAction: u,
        } = e,
        [m, h] = l.useState(!0),
        [_, j] = l.useState(null),
        { clientThemesClassName: T } = (0, C.Ay)(),
        k = (0, x.bG)([L.default], () => L.default.locale),
        R = l.useMemo(() => (0, M.u9)(), []),
        { analyticsLocations: O } = (0, A.Ay)(v.A.GAME_PROFILE),
        G = (0, b.h)(t),
        w = (0, V.s)(t),
        { data: P } = (0, S.k)(t),
        D = P?.supplementalData ?? null,
        U = D?.name ?? P?.name ?? G?.name ?? "",
        {
            hasAlreadyLinked: Y,
            canStartAuthorization: B,
            fetched: z,
            startAuthorization: K,
            connectionApp: X,
        } = (0, E.RD)(G),
        { invite: J, isMember: $ } = (0, W.A)(D, j),
        { socialLayerStorefrontRecommendationsData: Q } = (0, F.V)(G ?? null),
        q = (e, a) => {
            (0, M.Tn)({
                gameName: U,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: R,
                officialGuildId: _?.guild?.id,
                source: n,
            });
        };
    (0, g.Ay)(() => {
        (0, M.rw)({ source: n, viewId: R, applicationId: t, gameName: U, authorId: i, profileType: M.HV.FullProfile }),
            (0, I.He)();
    }),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = w.map((t) => {
                    let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, k);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, M.V_)({
                viewId: R,
                applicationId: t,
                gameName: U,
                playedFriendIds: w.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: _?.guild?.id,
            });
        });
    let ee = l.useCallback((e) => {
            h(e.contentRect.width >= 800);
        }, []),
        et = (0, d.w)(ee, [], { fireOnMount: !0 }),
        en = l.useCallback(() => {
            o(), (0, y.closeUserProfileModal)();
        }, [o]),
        ea = l.useMemo(
            () => ({
                application: G,
                isTwoColumn: m,
                canStartAuthorization: B,
                hasAlreadyLinked: Y,
                fetchedAuthorization: z,
                startAuthorization: K,
                connectionApp: X,
                officialInvite: J,
                isMember: $,
                socialLayerStorefrontRecommendationsData: Q,
                closeModal: en,
            }),
            [G, m, B, Y, z, K, X, J, $, Q, en],
        ),
        el = l.useCallback(() => {
            o(), (0, y.closeUserProfileModal)();
        }, [o]),
        [ei, er] = l.useState(!1),
        [es, eo] = l.useState(150),
        ec = l.useRef(null),
        ed = l.useCallback(
            (e) => {
                let t = e.currentTarget.scrollTop;
                if (null != ec.current) {
                    let e = Math.max(0, 1 - t / 150);
                    ec.current.style.opacity = String(e);
                }
                er(t >= es);
            },
            [es],
        );
    return null == P || null == D || null == G
        ? null
        : (0, a.jsx)(A.f5, {
              value: O,
              children: (0, a.jsx)(f.N, {
                  transitionState: s,
                  onClose: o,
                  children: (0, a.jsx)(H.D.Provider, {
                      value: ea,
                      children: (0, a.jsxs)("div", {
                          className: r()(T, em.kL),
                          ref: et,
                          children: [
                              (0, a.jsx)(Z.j5, { game: P, ref: ec }),
                              (0, a.jsx)(Z._R, { game: P, application: G, show: ei, onClose: el, trackAction: q }),
                              (0, a.jsx)(Z.Iv, { show: ei }),
                              (0, a.jsxs)(p.ChK, {
                                  onScroll: ed,
                                  children: [
                                      (0, a.jsx)(Z.Ay, {
                                          game: P,
                                          application: G,
                                          onSetCompactBarScrollThreshold: eo,
                                          showCompactBar: ei,
                                      }),
                                      (0, a.jsx)(p.Fmo, {
                                          children: m
                                              ? (0, a.jsxs)("div", {
                                                    className: em.jC,
                                                    children: [
                                                        (0, a.jsx)(ep, { game: P, closeModal: el, trackAction: q }),
                                                        (0, a.jsx)(ej, {
                                                            game: P,
                                                            application: G,
                                                            appContext: c,
                                                            source: n,
                                                            trackExternalAction: u,
                                                            trackAction: q,
                                                            analyticsLocations: O,
                                                        }),
                                                    ],
                                                })
                                              : (0, a.jsx)("div", {
                                                    className: em.b9,
                                                    children: (0, a.jsx)(eg, {
                                                        game: P,
                                                        application: G,
                                                        trackAction: q,
                                                        analyticsLocations: O,
                                                    }),
                                                }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
let eC = function (e) {
    let t = (0, D._)("GameProfileModal");
    return e.forceV2 || t ? (0, a.jsx)(eb, { ...e }) : (0, a.jsx)(eE, { ...e });
};
