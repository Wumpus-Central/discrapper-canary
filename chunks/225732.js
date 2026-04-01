n.d(t, { default: () => eI });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    c = n.n(s),
    o = n(110259),
    d = n(535185),
    u = n(792216),
    m = n(379834),
    x = n(311907),
    h = n(990078),
    g = n(521489),
    f = n(397927),
    _ = n(964486),
    p = n(359549),
    v = n(793574),
    A = n(688810),
    j = n(139286),
    E = n(362490),
    C = n(429913),
    I = n(590703),
    N = n(708197),
    b = n(583846),
    S = n(885151),
    T = n(928550),
    y = n(657331),
    k = n(773669),
    L = n(486020),
    O = n(541830),
    R = n(661191),
    G = n(240248),
    M = n(409626),
    P = n(880405),
    w = n(422069),
    V = n(476464),
    D = n(205184),
    F = n(939764),
    W = n(277089),
    U = n(611656),
    Y = n(459746),
    H = n(503364),
    B = n(305080),
    z = n(941568),
    K = n(814698),
    J = n(431040),
    X = n(976720),
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
    ec = n(771004),
    eo = n(424994),
    ed = n(985018),
    eu = n(282063),
    em = n(213863);
let ex = () =>
    (0, a.jsxs)("div", {
        className: eu.uv,
        children: [
            (0, a.jsx)(f.Y3C, { size: "xxs" }),
            (0, a.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ed.intl.string(ed.t.kAlUsy),
            }),
        ],
    });
function eh(e) {
    let { detectedGame: t, application: n, entries: i, trackAction: s } = e,
        o = l.useMemo(() => t?.genres.map(O.du).join(", "), [t]),
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
            ? n?.getIconURL(160, L.QB ? "webp" : "png")
            : L.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: L.QB ? "webp" : "png" }),
        h = R.default.extractTimestamp(n.id),
        g = 7 >= c()().diff(c()(h), "days"),
        _ = i.some((e) => (0, b.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
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
                            (0, a.jsx)(H.A, { applicationId: n.id, className: eu.Gg, trackAction: s }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(eu.nM, eu.Lc, eu.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(f.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, a.jsxs)("div", {
                                    className: r()(eu.nM, eu.Lc),
                                    children: [
                                        null != x &&
                                            (0, a.jsx)("img", {
                                                className: eu.Gt,
                                                src: x,
                                                height: 16,
                                                alt: ed.intl.formatToPlainString(ed.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, a.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        g &&
                                            (0, a.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: eu.Ad,
                                                children: ed.intl.string(ed.t.y2b7CA),
                                            }),
                                        _ &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(f.Text, {
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
function eg(e) {
    let {
        detectedGame: t,
        application: n,
        entries: l,
        officialGuildInvite: i,
        similarGames: r,
        similarGamesError: s,
        onClose: c,
        viewId: o,
        trackAction: d,
        source: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: eu.V0,
        children: [
            (0, a.jsx)(ee.A, { entries: l, viewId: o, officialGuildId: i?.guild?.id, onClose: c, source: u }),
            (0, a.jsx)(q.A, { detectedGame: t, trackAction: d }),
            (0, a.jsx)(ei.A, {
                applicationId: n.id,
                onClose: c,
                similarGames: r,
                similarGamesError: s,
                trackAction: d,
            }),
        ],
    });
}
function ef(e) {
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
                          (0, a.jsx)(ec.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, a.jsx)(z.A, { gameId: t.id, trackAction: n }),
                  (0, a.jsx)(er.A, { trackAction: n }),
                  (0, a.jsx)(el.A, { detectedGame: t.supplementalData, closeModal: l, trackAction: n }),
              ],
          });
}
function e_(e) {
    let { game: t, trackAction: n, application: l, analyticsLocations: i } = e,
        r = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: s } = (0, B.c)();
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: eu.V0,
              children: [
                  (0, a.jsx)(q.a, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsxs)("div", {
                      className: em.gr,
                      children: [
                          (0, a.jsx)(Z.Q, { game: t, application: l, isTwoColumn: !1 }),
                          (0, a.jsxs)("div", {
                              className: em.E1,
                              children: [
                                  (0, a.jsx)(es.A, { detectedGame: t.supplementalData, trackAction: n }),
                                  (0, a.jsx)(ec.A, { detectedGame: t.supplementalData, trackAction: n }),
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
                  (0, a.jsx)(J.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function ep(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i, trackAction: r } = e;
    (0, j.A)({
        name: o.ImpressionNames.CLOUD_PLAY_CTA,
        type: o.ImpressionTypes.VIEW,
        properties: { location_stack: i },
    });
    let s = l.useCallback(() => {
        r(M.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, a.jsx)(h.m, {
        text: ed.intl.string(ed.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(f.Button, {
            icon: f.hpF,
            text: ed.intl.string(ed.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function ev(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        a = (0, C.h)(t),
        l = (0, p.A)({ application: a, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, T.L)(t) && null != l };
}
function eA(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: i,
            trackAction: s,
            onClose: c,
            application: o,
            analyticsLocations: d,
        } = e,
        u = l.useCallback(() => {
            c(), (0, y.closeUserProfileModal)();
        }, [c]),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ev({ applicationId: o.id, analyticsLocations: d });
    return (0, a.jsxs)("div", {
        className: r()(eu.pz, eu.fi, eu.iH),
        children: [
            (0, a.jsxs)("div", {
                className: eu.NC,
                children: [
                    (0, a.jsx)(X.A, { invite: i, closeModal: u, trackAction: s }),
                    m &&
                        null != x &&
                        (0, a.jsx)(ep, { onClose: u, onCloudPlayClick: x, analyticsLocations: d, trackAction: s }),
                ],
            }),
            (0, a.jsx)(f.Heading, { variant: "heading-md/bold", children: ed.intl.string(ed.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: eu.V0,
                children: [
                    (0, a.jsx)(ec.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(et.A, { detectedGame: t, onInviteResolved: n, closeModal: u, trackAction: s }),
                    (0, a.jsx)(Q.A, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(en.A, { detectedGame: t }),
                    (0, a.jsx)(K.A, { application: o, trackAction: s }),
                    (0, a.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: ed.intl.format(ed.t.pch2Jw, { igdbLink: eo.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ej(e) {
    let { game: t, trackAction: n, application: l, analyticsLocations: i } = e,
        { closeModal: s } = (0, B.c)(),
        { isCloudPlayButtonShown: c, onCloudPlayClick: o } = ev({ applicationId: l.id, analyticsLocations: i });
    if (null == t.supplementalData) return null;
    let d = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(em.Pn, eu.fi, eu.iH),
        children: [
            (0, a.jsx)("div", {
                className: eu.NC,
                children:
                    c &&
                    null != o &&
                    (0, a.jsx)(ep, { onClose: s, onCloudPlayClick: o, analyticsLocations: i, trackAction: n }),
            }),
            (0, a.jsxs)("div", {
                className: eu.V0,
                children: [
                    (0, a.jsx)(es.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)($.A, { analyticsLocations: i, trackAction: n }),
                    (0, a.jsx)(et.o, { closeModal: s, trackAction: n }),
                    d && (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)(J.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
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
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, I.Ay)(),
        m = (0, x.bG)([k.default], () => k.default.locale),
        { analyticsLocations: h } = (0, A.Ay)(v.A.GAME_PROFILE),
        g = l.useMemo(() => (0, M.u9)(), []),
        p = (0, x.yK)([w.A], () => (w.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [j, E] = l.useState(null),
        T = (0, D.s)(t),
        [y, L] = l.useState(null),
        O = (0, C.h)(t),
        { data: R, refetch: G } = (0, S.k)(t),
        V = R?.supplementalData ?? null,
        F = V?.name ?? O?.name,
        W = (e, a) => {
            (0, M.Tn)({
                gameName: F ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: g,
                officialGuildId: y?.guild?.id,
                source: n,
            });
        };
    return ((0, _.Ay)(() => {
        (0, M.rw)({
            source: n,
            viewId: g,
            applicationId: t,
            gameName: F ?? "",
            authorId: i,
            profileType: M.HV.FullProfile,
        }),
            (0, N.He)();
    }),
    (0, C.A)(p),
    l.useEffect(() => {
        m.startsWith("en") || V?.summaryLocalized != null || G();
    }, [t, V?.summaryLocalized, m, G]),
    l.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                E(null);
                try {
                    await (0, P.NP)(t);
                } catch (e) {
                    E(e);
                }
            }
        })();
    }, [t, p]),
    (0, _.Ay)(() => () => {
        let e = Date.now(),
            n = T.map((t) => {
                let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, M.V_)({
            viewId: g,
            applicationId: t,
            gameName: F ?? "",
            playedFriendIds: T.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: p.filter(U.oS).slice(0, 5),
            officialGuildId: y?.guild?.id,
        });
    }),
    null == R || null == V || null == O)
        ? null
        : (0, a.jsx)(A.f5, {
              value: h,
              children: (0, a.jsx)(f.dWK, {
                  transitionState: s,
                  onClose: c,
                  size: "xl",
                  children: (0, a.jsx)("div", {
                      className: r()(u, eu.fn),
                      children: (0, a.jsxs)(f.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(eh, { detectedGame: V, application: O, entries: T, trackAction: W }),
                              (0, a.jsx)(f.Fmo, {
                                  children: (0, a.jsxs)("div", {
                                      className: r()(eu.Qs, eu.rb),
                                      children: [
                                          (0, a.jsx)(eg, {
                                              detectedGame: V,
                                              application: O,
                                              entries: T,
                                              officialGuildInvite: y,
                                              similarGames: p,
                                              similarGamesError: j,
                                              onClose: c,
                                              viewId: g,
                                              source: n,
                                              trackAction: W,
                                          }),
                                          (0, a.jsx)(eA, {
                                              detectedGame: V,
                                              onSetOfficialGuildInvite: L,
                                              officialGuildInvite: y,
                                              onClose: c,
                                              appContext: o,
                                              application: O,
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
function eC(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: c,
            appContext: o,
            trackExternalAction: u,
        } = e,
        [m, h] = l.useState(!0),
        [p, j] = l.useState(null),
        { clientThemesClassName: T } = (0, I.Ay)(),
        L = (0, x.bG)([k.default], () => k.default.locale),
        O = l.useMemo(() => (0, M.u9)(), []),
        { analyticsLocations: R } = (0, A.Ay)(v.A.GAME_PROFILE),
        G = (0, C.h)(t),
        P = (0, D.s)(t),
        { data: w } = (0, S.k)(t),
        V = w?.supplementalData ?? null,
        U = V?.name ?? w?.name ?? G?.name ?? "",
        {
            hasAlreadyLinked: Y,
            canStartAuthorization: H,
            fetched: z,
            startAuthorization: K,
            connectionApp: J,
        } = (0, E.RD)(G),
        { invite: X, isMember: $ } = (0, W.A)(V, j),
        { socialLayerStorefrontRecommendationsData: Q } = (0, F.V)(G ?? null),
        q = (e, a) => {
            (0, M.Tn)({
                gameName: U,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: O,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, _.Ay)(() => {
        (0, M.rw)({ source: n, viewId: O, applicationId: t, gameName: U, authorId: i, profileType: M.HV.FullProfile }),
            (0, N.He)();
    }),
        (0, _.Ay)(() => () => {
            let e = Date.now(),
                n = P.map((t) => {
                    let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, L);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, M.V_)({
                viewId: O,
                applicationId: t,
                gameName: U,
                playedFriendIds: P.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let ee = l.useCallback((e) => {
            h(e.contentRect.width >= 800);
        }, []),
        et = (0, d.w)(ee, [], { fireOnMount: !0 }),
        en = l.useCallback(() => {
            c(), (0, y.closeUserProfileModal)();
        }, [c]),
        ea = l.useMemo(
            () => ({
                application: G,
                isTwoColumn: m,
                canStartAuthorization: H,
                hasAlreadyLinked: Y,
                fetchedAuthorization: z,
                startAuthorization: K,
                connectionApp: J,
                officialInvite: X,
                isMember: $,
                socialLayerStorefrontRecommendationsData: Q,
                closeModal: en,
            }),
            [G, m, H, Y, z, K, J, X, $, Q, en],
        ),
        el = l.useCallback(() => {
            c(), (0, y.closeUserProfileModal)();
        }, [c]),
        [ei, er] = l.useState(!1);
    return null == w || null == V || null == G
        ? null
        : (0, a.jsx)(A.f5, {
              value: R,
              children: (0, a.jsx)(g.N, {
                  transitionState: s,
                  onClose: c,
                  children: (0, a.jsx)(B.D.Provider, {
                      value: ea,
                      children: (0, a.jsxs)("div", {
                          className: r()(T, em.kL),
                          ref: et,
                          children: [
                              (0, a.jsx)("div", { className: r()(em.n9, ei && em.rT) }),
                              (0, a.jsxs)(f.HOs, {
                                  orientation: "auto",
                                  children: [
                                      (0, a.jsx)(Z.A, {
                                          game: w,
                                          application: G,
                                          onClose: c,
                                          trackAction: q,
                                          onScrollStateChange: er,
                                      }),
                                      (0, a.jsx)(f.Fmo, {
                                          children: m
                                              ? (0, a.jsxs)("div", {
                                                    className: em.jC,
                                                    children: [
                                                        (0, a.jsx)(ef, { game: w, closeModal: el, trackAction: q }),
                                                        (0, a.jsx)(ej, {
                                                            game: w,
                                                            application: G,
                                                            appContext: o,
                                                            source: n,
                                                            trackExternalAction: u,
                                                            trackAction: q,
                                                            analyticsLocations: R,
                                                        }),
                                                    ],
                                                })
                                              : (0, a.jsx)("div", {
                                                    className: em.b9,
                                                    children: (0, a.jsx)(e_, {
                                                        game: w,
                                                        application: G,
                                                        trackAction: q,
                                                        analyticsLocations: R,
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
let eI = function (e) {
    return (0, V._)("GameProfileModal") ? (0, a.jsx)(eC, { ...e }) : (0, a.jsx)(eE, { ...e });
};
