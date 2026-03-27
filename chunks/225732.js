n.d(t, { default: () => eE });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(989349),
    c = n.n(s),
    o = n(110259),
    d = n(535185),
    u = n(792216),
    m = n(379834),
    x = n(311907),
    h = n(990078),
    g = n(397927),
    f = n(964486),
    _ = n(359549),
    p = n(793574),
    v = n(688810),
    A = n(139286),
    j = n(362490),
    C = n(429913),
    E = n(590703),
    I = n(708197),
    N = n(583846),
    b = n(885151),
    S = n(928550),
    T = n(657331),
    k = n(773669),
    y = n(486020),
    L = n(541830),
    O = n(661191),
    R = n(240248),
    G = n(409626),
    M = n(880405),
    P = n(422069),
    w = n(476464),
    V = n(205184),
    D = n(939764),
    W = n(277089),
    F = n(611656),
    U = n(459746),
    Y = n(503364),
    H = n(305080),
    B = n(941568),
    z = n(814698),
    K = n(431040),
    X = n(976720),
    J = n(313843),
    Z = n(286737),
    $ = n(839671),
    Q = n(94836),
    q = n(392332),
    ee = n(639714),
    et = n(310721),
    en = n(922283),
    ea = n(588260),
    ei = n(582942),
    el = n(999450),
    er = n(285820),
    es = n(771004),
    ec = n(424994),
    eo = n(985018),
    ed = n(282063),
    eu = n(213863);
let em = () =>
    (0, a.jsxs)("div", {
        className: ed.uv,
        children: [
            (0, a.jsx)(g.Y3C, { size: "xxs" }),
            (0, a.jsx)(g.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eo.intl.string(eo.t.kAlUsy),
            }),
        ],
    });
function ex(e) {
    let { detectedGame: t, application: n, entries: l, trackAction: s } = e,
        o = i.useMemo(() => t?.genres.map(L.du).join(", "), [t]),
        [d] = i.useState(() => Math.random()),
        u = i.useMemo(() => {
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
        x = (0, R.uJ)(t.iconHash)
            ? n?.getIconURL(160, y.QB ? "webp" : "png")
            : y.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: y.QB ? "webp" : "png" }),
        h = O.default.extractTimestamp(n.id),
        f = 7 >= c()().diff(c()(h), "days"),
        _ = l.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: ed.is, style: { backgroundImage: `url("${u}")` } }),
            (0, a.jsxs)("div", {
                className: r()(ed.Qs, ed.fi, ed.iH, ed.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: ed.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: ed.bb,
                                children: (0, a.jsx)(U.A, {
                                    game: t,
                                    application: n,
                                    className: ed.wm,
                                    size: U.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(Y.A, { applicationId: n.id, className: ed.Gg, trackAction: s }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(ed.nM, ed.Lc, ed.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(g.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, a.jsxs)("div", {
                                    className: r()(ed.nM, ed.Lc),
                                    children: [
                                        null != x &&
                                            (0, a.jsx)("img", {
                                                className: ed.Gt,
                                                src: x,
                                                height: 16,
                                                alt: eo.intl.formatToPlainString(eo.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, a.jsx)(g.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        f &&
                                            (0, a.jsx)(g.Text, {
                                                variant: "eyebrow",
                                                className: ed.Ad,
                                                children: eo.intl.string(eo.t.y2b7CA),
                                            }),
                                        _ &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(g.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, a.jsx)(em, {}),
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
function eh(e) {
    let {
        detectedGame: t,
        application: n,
        entries: i,
        officialGuildInvite: l,
        similarGames: r,
        similarGamesError: s,
        onClose: c,
        viewId: o,
        trackAction: d,
        source: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: ed.V0,
        children: [
            (0, a.jsx)(q.A, { entries: i, viewId: o, officialGuildId: l?.guild?.id, onClose: c, source: u }),
            (0, a.jsx)(Q.A, { detectedGame: t, trackAction: d }),
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
function eg(e) {
    let { game: t, trackAction: n, closeModal: i } = e;
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: eu.oC,
              children: [
                  (0, a.jsxs)("div", {
                      className: eu.lM,
                      children: [
                          (0, a.jsx)(Q.a, { detectedGame: t.supplementalData, trackAction: n }),
                          (0, a.jsx)(es.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, a.jsx)(B.A, { gameId: t.id, trackAction: n }),
                  (0, a.jsx)(el.A, { trackAction: n }),
                  (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, closeModal: i, trackAction: n }),
              ],
          });
}
function ef(e) {
    let { game: t, trackAction: n, application: i } = e,
        l = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: r } = (0, H.c)();
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: ed.V0,
              children: [
                  (0, a.jsx)(Q.a, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsxs)("div", {
                      className: eu.gr,
                      children: [
                          (0, a.jsx)(J.Q, { game: t, application: i, isTwoColumn: !1 }),
                          (0, a.jsxs)("div", {
                              className: eu.E1,
                              children: [
                                  (0, a.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                                  (0, a.jsx)(es.A, { detectedGame: t.supplementalData, trackAction: n }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsx)(Z.A, { trackAction: n }),
                  (0, a.jsx)(ee.o, { closeModal: r, trackAction: n }),
                  (0, a.jsx)(B.A, { gameId: t.id, trackAction: n }),
                  (0, a.jsx)(el.A, { trackAction: n }),
                  (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, closeModal: r, trackAction: n }),
                  l && (0, a.jsx)(en.A, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsx)(K.A, { application: i, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function e_(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l, trackAction: r } = e;
    (0, A.A)({
        name: o.ImpressionNames.CLOUD_PLAY_CTA,
        type: o.ImpressionTypes.VIEW,
        properties: { location_stack: l },
    });
    let s = i.useCallback(() => {
        r(G.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, a.jsx)(h.m, {
        text: eo.intl.string(eo.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(g.Button, {
            icon: g.hpF,
            text: eo.intl.string(eo.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function ep(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        a = (0, C.h)(t),
        i = (0, _.A)({ application: a, analyticsLocations: n });
    return { onCloudPlayClick: i, isCloudPlayButtonShown: !(0, S.L)(t) && null != i };
}
function ev(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: l,
            trackAction: s,
            onClose: c,
            application: o,
            analyticsLocations: d,
        } = e,
        u = i.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ep({ applicationId: o.id, analyticsLocations: d });
    return (0, a.jsxs)("div", {
        className: r()(ed.pz, ed.fi, ed.iH),
        children: [
            (0, a.jsxs)("div", {
                className: ed.NC,
                children: [
                    (0, a.jsx)(X.A, { invite: l, closeModal: u, trackAction: s }),
                    m &&
                        null != x &&
                        (0, a.jsx)(e_, { onClose: u, onCloudPlayClick: x, analyticsLocations: d, trackAction: s }),
                ],
            }),
            (0, a.jsx)(g.Heading, { variant: "heading-md/bold", children: eo.intl.string(eo.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: ed.V0,
                children: [
                    (0, a.jsx)(es.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(ee.A, { detectedGame: t, onInviteResolved: n, closeModal: u, trackAction: s }),
                    (0, a.jsx)($.A, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(et.A, { detectedGame: t }),
                    (0, a.jsx)(z.A, { application: o, trackAction: s }),
                    (0, a.jsx)(g.Text, {
                        variant: "text-xxs/normal",
                        children: eo.intl.format(eo.t.pch2Jw, { igdbLink: ec.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let { game: t, trackAction: n, application: i, analyticsLocations: l } = e,
        { closeModal: s } = (0, H.c)(),
        { isCloudPlayButtonShown: c, onCloudPlayClick: o } = ep({ applicationId: i.id, analyticsLocations: l });
    if (null == t.supplementalData) return null;
    let d = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(eu.Pn, ed.fi, ed.iH),
        children: [
            (0, a.jsx)("div", {
                className: ed.NC,
                children:
                    c &&
                    null != o &&
                    (0, a.jsx)(e_, { onClose: s, onCloudPlayClick: o, analyticsLocations: l, trackAction: n }),
            }),
            (0, a.jsxs)("div", {
                className: ed.V0,
                children: [
                    (0, a.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)(Z.A, { trackAction: n }),
                    (0, a.jsx)(ee.o, { closeModal: s, trackAction: n }),
                    d && (0, a.jsx)(en.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)(K.A, { application: i, detectedGame: t.supplementalData, trackAction: n }),
                ],
            }),
        ],
    });
}
function ej(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: l,
            transitionState: s,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, E.Ay)(),
        m = (0, x.bG)([k.default], () => k.default.locale),
        { analyticsLocations: h } = (0, v.Ay)(p.A.GAME_PROFILE),
        _ = i.useMemo(() => (0, G.u9)(), []),
        A = (0, x.yK)([P.A], () => (P.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [j, S] = i.useState(null),
        T = (0, V.s)(t),
        [y, L] = i.useState(null),
        O = (0, C.h)(t),
        { data: R, refetch: w } = (0, b.k)(t),
        D = R?.supplementalData ?? null,
        W = D?.name ?? O?.name,
        U = (e, a) => {
            (0, G.Tn)({
                gameName: W ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: _,
                officialGuildId: y?.guild?.id,
                source: n,
            });
        };
    return ((0, f.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: _,
            applicationId: t,
            gameName: W ?? "",
            authorId: l,
            profileType: G.HV.FullProfile,
        }),
            (0, I.He)();
    }),
    (0, C.A)(A),
    i.useEffect(() => {
        m.startsWith("en") || D?.summaryLocalized != null || w();
    }, [t, D?.summaryLocalized, m, w]),
    i.useEffect(() => {
        (async () => {
            if (0 === A.length) {
                S(null);
                try {
                    await (0, M.NP)(t);
                } catch (e) {
                    S(e);
                }
            }
        })();
    }, [t, A]),
    (0, f.Ay)(() => () => {
        let e = Date.now(),
            n = T.map((t) => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, G.V_)({
            viewId: _,
            applicationId: t,
            gameName: W ?? "",
            playedFriendIds: T.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: A.filter(F.oS).slice(0, 5),
            officialGuildId: y?.guild?.id,
        });
    }),
    null == R || null == D || null == O)
        ? null
        : (0, a.jsx)(v.f5, {
              value: h,
              children: (0, a.jsx)(g.dWK, {
                  transitionState: s,
                  onClose: c,
                  size: "xl",
                  children: (0, a.jsx)("div", {
                      className: r()(u, ed.fn),
                      children: (0, a.jsxs)(g.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(ex, { detectedGame: D, application: O, entries: T, trackAction: U }),
                              (0, a.jsx)(g.Fmo, {
                                  children: (0, a.jsxs)("div", {
                                      className: r()(ed.Qs, ed.rb),
                                      children: [
                                          (0, a.jsx)(eh, {
                                              detectedGame: D,
                                              application: O,
                                              entries: T,
                                              officialGuildInvite: y,
                                              similarGames: A,
                                              similarGamesError: j,
                                              onClose: c,
                                              viewId: _,
                                              source: n,
                                              trackAction: U,
                                          }),
                                          (0, a.jsx)(ev, {
                                              detectedGame: D,
                                              onSetOfficialGuildInvite: L,
                                              officialGuildInvite: y,
                                              onClose: c,
                                              appContext: o,
                                              application: O,
                                              source: n,
                                              trackExternalAction: d,
                                              trackAction: U,
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
            sourceUserId: l,
            transitionState: s,
            onClose: c,
            appContext: o,
            trackExternalAction: u,
        } = e,
        [m, h] = i.useState(!0),
        [_, A] = i.useState(null),
        { clientThemesClassName: S } = (0, E.Ay)(),
        y = (0, x.bG)([k.default], () => k.default.locale),
        L = i.useMemo(() => (0, G.u9)(), []),
        { analyticsLocations: O } = (0, v.Ay)(p.A.GAME_PROFILE),
        R = (0, C.h)(t),
        M = (0, V.s)(t),
        { data: P } = (0, b.k)(t),
        w = P?.supplementalData ?? null,
        F = w?.name ?? P?.name ?? R?.name ?? "",
        {
            hasAlreadyLinked: U,
            canStartAuthorization: Y,
            fetched: B,
            startAuthorization: z,
            connectionApp: K,
        } = (0, j.RD)(R),
        { invite: X, isMember: Z } = (0, W.A)(w, A),
        { socialLayerStorefrontRecommendationsData: $ } = (0, D.V)(R ?? null),
        Q = (e, a) => {
            (0, G.Tn)({
                gameName: F,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: L,
                officialGuildId: _?.guild?.id,
                source: n,
            });
        };
    (0, f.Ay)(() => {
        (0, G.rw)({ source: n, viewId: L, applicationId: t, gameName: F, authorId: l, profileType: G.HV.FullProfile }),
            (0, I.He)();
    }),
        (0, f.Ay)(() => () => {
            let e = Date.now(),
                n = M.map((t) => {
                    let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, y);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, G.V_)({
                viewId: L,
                applicationId: t,
                gameName: F,
                playedFriendIds: M.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: _?.guild?.id,
            });
        });
    let q = i.useCallback((e) => {
            h(e.contentRect.width >= 800);
        }, []),
        ee = (0, d.w)(q, [], { fireOnMount: !0 }),
        et = i.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]),
        en = i.useMemo(
            () => ({
                application: R,
                isTwoColumn: m,
                canStartAuthorization: Y,
                hasAlreadyLinked: U,
                fetchedAuthorization: B,
                startAuthorization: z,
                connectionApp: K,
                officialInvite: X,
                isMember: Z,
                socialLayerStorefrontRecommendationsData: $,
                closeModal: et,
            }),
            [R, m, Y, U, B, z, K, X, Z, $, et],
        ),
        ea = i.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]);
    return null == P || null == w || null == R
        ? null
        : (0, a.jsx)(v.f5, {
              value: O,
              children: (0, a.jsx)(g.dWK, {
                  transitionState: s,
                  onClose: c,
                  size: "xxl",
                  children: (0, a.jsx)(H.D.Provider, {
                      value: en,
                      children: (0, a.jsx)("div", {
                          className: r()(S, eu.kL),
                          ref: ee,
                          children: (0, a.jsxs)(g.HOs, {
                              orientation: "auto",
                              children: [
                                  (0, a.jsx)(J.A, { game: P, application: R, onClose: c, trackAction: Q }),
                                  (0, a.jsx)(g.Fmo, {
                                      children: m
                                          ? (0, a.jsxs)("div", {
                                                className: eu.jC,
                                                children: [
                                                    (0, a.jsx)(eg, { game: P, closeModal: ea, trackAction: Q }),
                                                    (0, a.jsx)(eA, {
                                                        game: P,
                                                        application: R,
                                                        appContext: o,
                                                        source: n,
                                                        trackExternalAction: u,
                                                        trackAction: Q,
                                                        analyticsLocations: O,
                                                    }),
                                                ],
                                            })
                                          : (0, a.jsx)("div", {
                                                className: eu.b9,
                                                children: (0, a.jsx)(ef, { game: P, application: R, trackAction: Q }),
                                            }),
                                  }),
                              ],
                          }),
                      }),
                  }),
              }),
          });
}
let eE = function (e) {
    return (0, w._)("GameProfileModal") ? (0, a.jsx)(eC, { ...e }) : (0, a.jsx)(ej, { ...e });
};
