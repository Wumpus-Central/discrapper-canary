"use strict";
n.d(t, { default: () => eA });
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
    f = n(397927),
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
    S = n(657331),
    k = n(773669),
    L = n(486020),
    y = n(541830),
    R = n(661191),
    O = n(240248),
    G = n(409626),
    w = n(880405),
    M = n(422069),
    D = n(476464),
    P = n(205184),
    V = n(939764),
    W = n(277089),
    Y = n(611656),
    F = n(459746),
    U = n(503364),
    B = n(305080),
    H = n(814698),
    K = n(431040),
    z = n(976720),
    X = n(313843),
    J = n(286737),
    $ = n(839671),
    Z = n(94836),
    Q = n(392332),
    q = n(639714),
    ee = n(310721),
    et = n(922283),
    en = n(582942),
    ea = n(999450),
    el = n(285820),
    ei = n(771004),
    er = n(424994),
    es = n(985018),
    ec = n(728528),
    eo = n(936284);
let ed = () =>
    (0, a.jsxs)("div", {
        className: ec.uv,
        children: [
            (0, a.jsx)(f.Y3C, { size: "xxs" }),
            (0, a.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: es.intl.string(es.t.kAlUsy),
            }),
        ],
    });
function eu(e) {
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
        u = (0, O.uJ)(t.iconHash)
            ? n?.getIconURL(160, L.QB ? "webp" : "png")
            : L.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: L.QB ? "webp" : "png" }),
        x = R.default.extractTimestamp(n.id),
        h = 7 >= c()().diff(c()(x), "days"),
        g = i.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: ec.is, style: { backgroundImage: `url("${d}")` } }),
            (0, a.jsxs)("div", {
                className: r()(ec.Qs, ec.fi, ec.iH, ec.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: ec.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: ec.bb,
                                children: (0, a.jsx)(F.A, {
                                    game: t,
                                    application: n,
                                    className: ec.wm,
                                    size: F.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(U.A, { applicationId: n.id, className: ec.Gg }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(ec.nM, ec.Lc, ec.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(f.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, a.jsxs)("div", {
                                    className: r()(ec.nM, ec.Lc),
                                    children: [
                                        null != u &&
                                            (0, a.jsx)("img", {
                                                className: ec.Gt,
                                                src: u,
                                                height: 16,
                                                alt: es.intl.formatToPlainString(es.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, a.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        h &&
                                            (0, a.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: ec.Ad,
                                                children: es.intl.string(es.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, a.jsx)(ed, {}),
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
function em(e) {
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
        className: ec.V0,
        children: [
            (0, a.jsx)(Q.A, { entries: l, viewId: o, officialGuildId: i?.guild?.id, onClose: c, source: u }),
            (0, a.jsx)(Z.A, { detectedGame: t, trackAction: d }),
            (0, a.jsx)(en.A, {
                applicationId: n.id,
                onClose: c,
                trackAction: d,
                similarGames: r,
                similarGamesError: s,
            }),
        ],
    });
}
function ex(e) {
    let { game: t, trackAction: n } = e;
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: eo.oC,
              children: [
                  (0, a.jsxs)("div", {
                      className: eo.lM,
                      children: [
                          (0, a.jsx)(Z.a, { detectedGame: t.supplementalData, trackAction: n }),
                          (0, a.jsx)(ei.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, a.jsx)(ea.A, {}),
              ],
          });
}
function eh(e) {
    let { game: t, trackAction: n, onClose: i, application: r } = e,
        s = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        c = l.useCallback(() => {
            i(), (0, S.closeUserProfileModal)();
        }, [i]);
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: ec.V0,
              children: [
                  (0, a.jsx)(Z.a, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsxs)("div", {
                      className: eo.gr,
                      children: [
                          (0, a.jsx)(X.Q, { game: t, application: r, isTwoColumn: !1 }),
                          (0, a.jsxs)("div", {
                              className: eo.E1,
                              children: [
                                  (0, a.jsx)(el.A, { detectedGame: t.supplementalData }),
                                  (0, a.jsx)(ei.A, { detectedGame: t.supplementalData, trackAction: n }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsx)(J.A, { trackAction: n }),
                  (0, a.jsx)(q.o, { trackClick: n, closeModal: c }),
                  (0, a.jsx)(ea.A, {}),
                  s && (0, a.jsx)(et.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(K.A, { application: r, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function ef(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, j.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, a.jsx)(h.m, {
            text: es.intl.string(es.t.JVwWva),
            position: "top",
            children: (0, a.jsx)(f.Button, {
                icon: f.hpF,
                text: es.intl.string(es.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function eg(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        a = (0, E.h)(t),
        l = (0, p.A)({ application: a, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, T.L)(t) && null != l };
}
function ep(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: i,
            trackAction: s,
            onClose: c,
            application: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, S.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, v.Ay)(_.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = eg({ applicationId: o.id, analyticsLocations: u });
    return (0, a.jsxs)("div", {
        className: r()(ec.pz, ec.fi, ec.iH),
        children: [
            (0, a.jsxs)("div", {
                className: ec.NC,
                children: [
                    (0, a.jsx)(z.A, { invite: i, trackClick: s, closeModal: d }),
                    m && null != x && (0, a.jsx)(ef, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, a.jsx)(f.Heading, { variant: "heading-md/bold", children: es.intl.string(es.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: ec.V0,
                children: [
                    (0, a.jsx)(ei.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(q.A, { detectedGame: t, trackClick: s, onInviteResolved: n, closeModal: d }),
                    (0, a.jsx)($.A, { detectedGame: t, trackClick: s }),
                    (0, a.jsx)(ee.A, { detectedGame: t }),
                    (0, a.jsx)(H.A, { application: o, trackAction: s }),
                    (0, a.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: es.intl.format(es.t.pch2Jw, { igdbLink: er.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { game: t, trackAction: n, onClose: i, application: s } = e,
        c = l.useCallback(() => {
            i(), (0, S.closeUserProfileModal)();
        }, [i]),
        { analyticsLocations: o } = (0, v.Ay)(_.A.GAME_PROFILE),
        { isCloudPlayButtonShown: d, onCloudPlayClick: m } = eg({ applicationId: s.id, analyticsLocations: o });
    if (null == t.supplementalData) return null;
    let x = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(eo.Pn, ec.fi, ec.iH),
        children: [
            (0, a.jsx)("div", {
                className: ec.NC,
                children: d && null != m && (0, a.jsx)(ef, { onClose: c, onCloudPlayClick: m, analyticsLocations: o }),
            }),
            (0, a.jsxs)("div", {
                className: ec.V0,
                children: [
                    (0, a.jsx)(el.A, { detectedGame: t.supplementalData }),
                    (0, a.jsx)(J.A, { trackAction: n }),
                    (0, a.jsx)(q.o, { trackClick: n, closeModal: c }),
                    x && (0, a.jsx)(et.A, { detectedGame: t.supplementalData }),
                    (0, a.jsx)(K.A, { application: s, detectedGame: t.supplementalData, trackAction: n }),
                ],
            }),
        ],
    });
}
function ev(e) {
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
        h = l.useMemo(() => (0, G.u9)(), []),
        p = (0, x.yK)([M.A], () => (M.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [_, v] = l.useState(null),
        j = (0, P.s)(t),
        [A, T] = l.useState(null),
        S = (0, E.h)(t),
        { data: L, refetch: y } = (0, C.k)(t),
        R = L?.supplementalData ?? null,
        O = R?.name ?? S?.name,
        D = (e, a) => {
            (0, G.Tn)({
                gameName: O ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: h,
                officialGuildId: A?.guild?.id,
                source: n,
            });
        };
    return ((0, g.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: h,
            applicationId: t,
            gameName: O ?? "",
            authorId: i,
            profileType: G.HV.FullProfile,
        }),
            (0, b.He)();
    }),
    (0, E.A)(p),
    l.useEffect(() => {
        m.startsWith("en") || R?.summaryLocalized != null || y();
    }, [t, R?.summaryLocalized, m, y]),
    l.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                v(null);
                try {
                    await (0, w.NP)(t);
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
        (0, G.V_)({
            viewId: h,
            applicationId: t,
            gameName: O ?? "",
            playedFriendIds: j.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: p.filter(Y.oS).slice(0, 5),
            officialGuildId: A?.guild?.id,
        });
    }),
    null == L || null == R || null == S)
        ? null
        : (0, a.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xl",
              children: (0, a.jsx)("div", {
                  className: r()(u, ec.fn),
                  children: (0, a.jsxs)(f.HOs, {
                      orientation: "auto",
                      children: [
                          (0, a.jsx)(eu, { detectedGame: R, application: S, entries: j, trackAction: D }),
                          (0, a.jsx)(f.Fmo, {
                              children: (0, a.jsxs)("div", {
                                  className: r()(ec.Qs, ec.rb),
                                  children: [
                                      (0, a.jsx)(em, {
                                          detectedGame: R,
                                          application: S,
                                          entries: j,
                                          officialGuildInvite: A,
                                          similarGames: p,
                                          similarGamesError: _,
                                          onClose: c,
                                          viewId: h,
                                          trackAction: D,
                                          source: n,
                                      }),
                                      (0, a.jsx)(ep, {
                                          detectedGame: R,
                                          onSetOfficialGuildInvite: T,
                                          officialGuildInvite: A,
                                          trackAction: D,
                                          onClose: c,
                                          appContext: o,
                                          application: S,
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
function ej(e) {
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
        [p, _] = l.useState(null),
        { clientThemesClassName: v } = (0, I.Ay)(),
        j = (0, x.bG)([k.default], () => k.default.locale),
        T = l.useMemo(() => (0, G.u9)(), []),
        S = (0, E.h)(t),
        L = (0, P.s)(t),
        { data: y } = (0, C.k)(t),
        R = y?.supplementalData ?? null,
        O = R?.name ?? y?.name ?? S?.name ?? "",
        {
            hasAlreadyLinked: w,
            canStartAuthorization: M,
            fetched: D,
            startAuthorization: Y,
            connectionApp: F,
        } = (0, A.RD)(S),
        { invite: U, isMember: H } = (0, W.A)(R, _),
        { socialLayerStorefrontRecommendationsData: K } = (0, V.V)(S ?? null),
        z = (e, a) => {
            (0, G.Tn)({
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
        (0, G.rw)({ source: n, viewId: T, applicationId: t, gameName: O, authorId: i, profileType: G.HV.FullProfile }),
            (0, b.He)();
    }),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = L.map((t) => {
                    let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, j);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, G.V_)({
                viewId: T,
                applicationId: t,
                gameName: O,
                playedFriendIds: L.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let J = l.useCallback((e) => {
            h(e.contentRect.width >= 800);
        }, []),
        $ = (0, d.w)(J, [], { fireOnMount: !0 }),
        Z = l.useMemo(
            () => ({
                application: S,
                isTwoColumn: m,
                canStartAuthorization: M,
                hasAlreadyLinked: w,
                fetchedAuthorization: D,
                startAuthorization: Y,
                connectionApp: F,
                officialInvite: U,
                isMember: H,
                socialLayerStorefrontRecommendationsData: K,
            }),
            [S, m, M, w, D, Y, F, U, H, K],
        );
    return null == y || null == R || null == S
        ? null
        : (0, a.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xxl",
              children: (0, a.jsx)(B.D.Provider, {
                  value: Z,
                  children: (0, a.jsx)("div", {
                      className: r()(v, eo.kL),
                      ref: $,
                      children: (0, a.jsxs)(f.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(X.A, { game: y, application: S, entries: L, onClose: c }),
                              (0, a.jsx)(f.Fmo, {
                                  children: m
                                      ? (0, a.jsxs)("div", {
                                            className: eo.jC,
                                            children: [
                                                (0, a.jsx)(ex, { game: y, trackAction: z }),
                                                (0, a.jsx)(e_, {
                                                    game: y,
                                                    application: S,
                                                    trackAction: z,
                                                    onClose: c,
                                                    appContext: o,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, a.jsx)("div", {
                                            className: eo.b9,
                                            children: (0, a.jsx)(eh, {
                                                game: y,
                                                trackAction: z,
                                                application: S,
                                                onClose: c,
                                            }),
                                        }),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
let eA = function (e) {
    let { enabled: t } = D.z.useConfig({ location: "GameProfileModal" });
    return t ? (0, a.jsx)(ej, { ...e }) : (0, a.jsx)(ev, { ...e });
};
