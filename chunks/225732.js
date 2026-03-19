n.d(t, { default: () => eE });
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
    f = n(990078),
    h = n(397927),
    g = n(964486),
    p = n(359549),
    _ = n(793574),
    v = n(688810),
    j = n(139286),
    A = n(362490),
    E = n(429913),
    I = n(590703),
    b = n(708197),
    N = n(583846),
    C = n(885151),
    T = n(928550),
    L = n(657331),
    S = n(773669),
    k = n(486020),
    y = n(541830),
    G = n(661191),
    R = n(240248),
    M = n(409626),
    O = n(880405),
    D = n(422069),
    w = n(476464),
    P = n(205184),
    V = n(939764),
    W = n(277089),
    Y = n(611656),
    U = n(459746),
    F = n(503364),
    B = n(305080),
    H = n(941568),
    K = n(814698),
    z = n(431040),
    X = n(976720),
    J = n(313843),
    Z = n(286737),
    $ = n(839671),
    Q = n(94836),
    q = n(392332),
    ee = n(639714),
    et = n(310721),
    en = n(922283),
    ea = n(582942),
    el = n(999450),
    ei = n(285820),
    er = n(771004),
    es = n(424994),
    ec = n(985018),
    eo = n(728528),
    ed = n(936284);
let eu = () =>
    (0, a.jsxs)("div", {
        className: eo.uv,
        children: [
            (0, a.jsx)(h.Y3C, { size: "xxs" }),
            (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ec.intl.string(ec.t.kAlUsy),
            }),
        ],
    });
function em(e) {
    let { detectedGame: t, application: n, entries: i } = e,
        s = l.useMemo(() => t?.genres.map(y.du).join(", "), [t]),
        [o] = l.useState(() => Math.random()),
        d = l.useMemo(() => {
            if (null == t) return "";
            let { artwork: e, screenshots: n } = t;
            if (e.length > 0) {
                let t = Math.floor(o * e.length);
                return e[t];
            }
            if (n.length > 0) {
                let e = Math.floor(o * n.length);
                return n[e];
            }
            return "";
        }, [t, o]),
        u = (0, R.uJ)(t.iconHash)
            ? n?.getIconURL(160, k.QB ? "webp" : "png")
            : k.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: k.QB ? "webp" : "png" }),
        x = G.default.extractTimestamp(n.id),
        f = 7 >= c()().diff(c()(x), "days"),
        g = i.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: eo.is, style: { backgroundImage: `url("${d}")` } }),
            (0, a.jsxs)("div", {
                className: r()(eo.Qs, eo.fi, eo.iH, eo.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: eo.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: eo.bb,
                                children: (0, a.jsx)(U.A, {
                                    game: t,
                                    application: n,
                                    className: eo.wm,
                                    size: U.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(F.A, { applicationId: n.id, className: eo.Gg }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(eo.nM, eo.Lc, eo.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(h.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, a.jsxs)("div", {
                                    className: r()(eo.nM, eo.Lc),
                                    children: [
                                        null != u &&
                                            (0, a.jsx)("img", {
                                                className: eo.Gt,
                                                src: u,
                                                height: 16,
                                                alt: ec.intl.formatToPlainString(ec.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, a.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        f &&
                                            (0, a.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: eo.Ad,
                                                children: ec.intl.string(ec.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, a.jsx)(eu, {}),
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
function ex(e) {
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
        className: eo.V0,
        children: [
            (0, a.jsx)(q.A, { entries: l, viewId: o, officialGuildId: i?.guild?.id, onClose: c, source: u }),
            (0, a.jsx)(Q.A, { detectedGame: t, trackAction: d }),
            (0, a.jsx)(ea.A, {
                applicationId: n.id,
                onClose: c,
                trackAction: d,
                similarGames: r,
                similarGamesError: s,
            }),
        ],
    });
}
function ef(e) {
    let { game: t, trackAction: n } = e;
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: ed.oC,
              children: [
                  (0, a.jsxs)("div", {
                      className: ed.lM,
                      children: [
                          (0, a.jsx)(Q.a, { detectedGame: t.supplementalData, trackAction: n }),
                          (0, a.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, a.jsx)(H.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(el.A, {}),
              ],
          });
}
function eh(e) {
    let { game: t, trackAction: n, application: l } = e,
        i = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: r } = (0, B.c)();
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: eo.V0,
              children: [
                  (0, a.jsx)(Q.a, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsxs)("div", {
                      className: ed.gr,
                      children: [
                          (0, a.jsx)(J.Q, { game: t, application: l, isTwoColumn: !1 }),
                          (0, a.jsxs)("div", {
                              className: ed.E1,
                              children: [
                                  (0, a.jsx)(ei.A, { detectedGame: t.supplementalData, trackAction: n }),
                                  (0, a.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsx)(Z.A, { trackAction: n }),
                  (0, a.jsx)(ee.o, { trackClick: n, closeModal: r }),
                  (0, a.jsx)(H.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(el.A, {}),
                  i && (0, a.jsx)(en.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(z.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function eg(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, j.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, a.jsx)(f.m, {
            text: ec.intl.string(ec.t.JVwWva),
            position: "top",
            children: (0, a.jsx)(h.Button, {
                icon: h.hpF,
                text: ec.intl.string(ec.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function ep(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        a = (0, E.h)(t),
        l = (0, p.A)({ application: a, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, T.L)(t) && null != l };
}
function e_(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: i,
            trackAction: s,
            onClose: c,
            application: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, L.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, v.Ay)(_.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ep({ applicationId: o.id, analyticsLocations: u });
    return (0, a.jsxs)("div", {
        className: r()(eo.pz, eo.fi, eo.iH),
        children: [
            (0, a.jsxs)("div", {
                className: eo.NC,
                children: [
                    (0, a.jsx)(X.A, { invite: i, trackClick: s, closeModal: d }),
                    m && null != x && (0, a.jsx)(eg, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, a.jsx)(h.Heading, { variant: "heading-md/bold", children: ec.intl.string(ec.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: eo.V0,
                children: [
                    (0, a.jsx)(er.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(ee.A, { detectedGame: t, trackClick: s, onInviteResolved: n, closeModal: d }),
                    (0, a.jsx)($.A, { detectedGame: t, trackClick: s }),
                    (0, a.jsx)(et.A, { detectedGame: t }),
                    (0, a.jsx)(K.A, { application: o, trackAction: s }),
                    (0, a.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: ec.intl.format(ec.t.pch2Jw, { igdbLink: es.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { game: t, trackAction: n, application: l } = e,
        { closeModal: i } = (0, B.c)(),
        { analyticsLocations: s } = (0, v.Ay)(_.A.GAME_PROFILE),
        { isCloudPlayButtonShown: c, onCloudPlayClick: o } = ep({ applicationId: l.id, analyticsLocations: s });
    if (null == t.supplementalData) return null;
    let d = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(ed.Pn, eo.fi, eo.iH),
        children: [
            (0, a.jsx)("div", {
                className: eo.NC,
                children: c && null != o && (0, a.jsx)(eg, { onClose: i, onCloudPlayClick: o, analyticsLocations: s }),
            }),
            (0, a.jsxs)("div", {
                className: eo.V0,
                children: [
                    (0, a.jsx)(ei.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)(Z.A, { trackAction: n }),
                    (0, a.jsx)(ee.o, { trackClick: n, closeModal: i }),
                    d && (0, a.jsx)(en.A, { detectedGame: t.supplementalData }),
                    (0, a.jsx)(z.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
                ],
            }),
        ],
    });
}
function ej(e) {
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
        m = (0, x.bG)([S.default], () => S.default.locale),
        f = l.useMemo(() => (0, M.u9)(), []),
        p = (0, x.yK)([D.A], () => (D.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [_, v] = l.useState(null),
        j = (0, P.s)(t),
        [A, T] = l.useState(null),
        L = (0, E.h)(t),
        { data: k, refetch: y } = (0, C.k)(t),
        G = k?.supplementalData ?? null,
        R = G?.name ?? L?.name,
        w = (e, a) => {
            (0, M.Tn)({
                gameName: R ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: f,
                officialGuildId: A?.guild?.id,
                source: n,
            });
        };
    return ((0, g.Ay)(() => {
        (0, M.rw)({
            source: n,
            viewId: f,
            applicationId: t,
            gameName: R ?? "",
            authorId: i,
            profileType: M.HV.FullProfile,
        }),
            (0, b.He)();
    }),
    (0, E.A)(p),
    l.useEffect(() => {
        m.startsWith("en") || G?.summaryLocalized != null || y();
    }, [t, G?.summaryLocalized, m, y]),
    l.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                v(null);
                try {
                    await (0, O.N)(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, p]),
    (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = j.map((t) => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, M.V_)({
            viewId: f,
            applicationId: t,
            gameName: R ?? "",
            playedFriendIds: j.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: p.filter(Y.oS).slice(0, 5),
            officialGuildId: A?.guild?.id,
        });
    }),
    null == k || null == G || null == L)
        ? null
        : (0, a.jsx)(h.dWK, {
              transitionState: s,
              onClose: c,
              size: "xl",
              children: (0, a.jsx)("div", {
                  className: r()(u, eo.fn),
                  children: (0, a.jsxs)(h.HOs, {
                      orientation: "auto",
                      children: [
                          (0, a.jsx)(em, { detectedGame: G, application: L, entries: j, trackAction: w }),
                          (0, a.jsx)(h.Fmo, {
                              children: (0, a.jsxs)("div", {
                                  className: r()(eo.Qs, eo.rb),
                                  children: [
                                      (0, a.jsx)(ex, {
                                          detectedGame: G,
                                          application: L,
                                          entries: j,
                                          officialGuildInvite: A,
                                          similarGames: p,
                                          similarGamesError: _,
                                          onClose: c,
                                          viewId: f,
                                          trackAction: w,
                                          source: n,
                                      }),
                                      (0, a.jsx)(e_, {
                                          detectedGame: G,
                                          onSetOfficialGuildInvite: T,
                                          officialGuildInvite: A,
                                          trackAction: w,
                                          onClose: c,
                                          appContext: o,
                                          application: L,
                                          source: n,
                                          trackExternalAction: d,
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
              }),
          });
}
function eA(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: c,
            appContext: o,
            trackExternalAction: u,
        } = e,
        [m, f] = l.useState(!0),
        [p, _] = l.useState(null),
        { clientThemesClassName: v } = (0, I.Ay)(),
        j = (0, x.bG)([S.default], () => S.default.locale),
        T = l.useMemo(() => (0, M.u9)(), []),
        k = (0, E.h)(t),
        y = (0, P.s)(t),
        { data: G } = (0, C.k)(t),
        R = G?.supplementalData ?? null,
        O = R?.name ?? G?.name ?? k?.name ?? "",
        {
            hasAlreadyLinked: D,
            canStartAuthorization: w,
            fetched: Y,
            startAuthorization: U,
            connectionApp: F,
        } = (0, A.RD)(k),
        { invite: H, isMember: K } = (0, W.A)(R, _),
        { socialLayerStorefrontRecommendationsData: z } = (0, V.V)(k ?? null),
        X = (e, a) => {
            (0, M.Tn)({
                gameName: O,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: T,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, g.Ay)(() => {
        (0, M.rw)({ source: n, viewId: T, applicationId: t, gameName: O, authorId: i, profileType: M.HV.FullProfile }),
            (0, b.He)();
    }),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = y.map((t) => {
                    let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, j);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, M.V_)({
                viewId: T,
                applicationId: t,
                gameName: O,
                playedFriendIds: y.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let Z = l.useCallback((e) => {
            f(e.contentRect.width >= 800);
        }, []),
        $ = (0, d.w)(Z, [], { fireOnMount: !0 }),
        Q = l.useCallback(() => {
            c(), (0, L.closeUserProfileModal)();
        }, [c]),
        q = l.useMemo(
            () => ({
                application: k,
                isTwoColumn: m,
                canStartAuthorization: w,
                hasAlreadyLinked: D,
                fetchedAuthorization: Y,
                startAuthorization: U,
                connectionApp: F,
                officialInvite: H,
                isMember: K,
                socialLayerStorefrontRecommendationsData: z,
                closeModal: Q,
            }),
            [k, m, w, D, Y, U, F, H, K, z, Q],
        );
    return null == G || null == R || null == k
        ? null
        : (0, a.jsx)(h.dWK, {
              transitionState: s,
              onClose: c,
              size: "xxl",
              children: (0, a.jsx)(B.D.Provider, {
                  value: q,
                  children: (0, a.jsx)("div", {
                      className: r()(v, ed.kL),
                      ref: $,
                      children: (0, a.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(J.A, { game: G, application: k, entries: y, onClose: c }),
                              (0, a.jsx)(h.Fmo, {
                                  children: m
                                      ? (0, a.jsxs)("div", {
                                            className: ed.jC,
                                            children: [
                                                (0, a.jsx)(ef, { game: G, trackAction: X }),
                                                (0, a.jsx)(ev, {
                                                    game: G,
                                                    application: k,
                                                    trackAction: X,
                                                    appContext: o,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, a.jsx)("div", {
                                            className: ed.b9,
                                            children: (0, a.jsx)(eh, { game: G, trackAction: X, application: k }),
                                        }),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
let eE = function (e) {
    return (0, w._)("GameProfileModal") ? (0, a.jsx)(eA, { ...e }) : (0, a.jsx)(ej, { ...e });
};
