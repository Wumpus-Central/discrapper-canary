"use strict";
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
    f = n(397927),
    g = n(964486),
    p = n(359549),
    _ = n(793574),
    v = n(688810),
    j = n(139286),
    A = n(362490),
    I = n(429913),
    E = n(590703),
    b = n(708197),
    N = n(583846),
    C = n(885151),
    T = n(928550),
    S = n(657331),
    L = n(773669),
    k = n(486020),
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
    H = n(305080),
    B = n(814698),
    z = n(431040),
    K = n(976720),
    X = n(286737),
    J = n(839671),
    Z = n(94836),
    $ = n(392332),
    Q = n(639714),
    q = n(310721),
    ee = n(922283),
    et = n(582942),
    en = n(999450),
    ea = n(285820),
    el = n(771004),
    ei = n(424994),
    er = n(985018),
    es = n(728528),
    ec = n(936284);
let eo = () =>
    (0, a.jsxs)("div", {
        className: es.uv,
        children: [
            (0, a.jsx)(f.Y3C, { size: "xxs" }),
            (0, a.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: er.intl.string(er.t.kAlUsy),
            }),
        ],
    });
function ed(e) {
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
            ? n?.getIconURL(160, k.QB ? "webp" : "png")
            : k.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: k.QB ? "webp" : "png" }),
        x = R.default.extractTimestamp(n.id),
        h = 7 >= c()().diff(c()(x), "days"),
        g = i.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: es.is, style: { backgroundImage: `url("${d}")` } }),
            (0, a.jsxs)("div", {
                className: r()(es.Qs, es.fi, es.iH, es.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: es.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: es.bb,
                                children: (0, a.jsx)(F.A, {
                                    game: t,
                                    application: n,
                                    className: es.wm,
                                    size: F.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(U.A, { applicationId: n.id, className: es.Gg }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(es.nM, es.Lc, es.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(f.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, a.jsxs)("div", {
                                    className: r()(es.nM, es.Lc),
                                    children: [
                                        null != u &&
                                            (0, a.jsx)("img", {
                                                className: es.Gt,
                                                src: u,
                                                height: 16,
                                                alt: er.intl.formatToPlainString(er.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, a.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        h &&
                                            (0, a.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: es.Ad,
                                                children: er.intl.string(er.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, a.jsx)(eo, {}),
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
function eu(e) {
    let { game: t, application: n, isTwoColumn: l } = e,
        i = t.supplementalData;
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: l ? ec.n8 : ec.FS,
              children: (0, a.jsx)(F.A, { game: i, application: n, className: es.wm, size: F.w.LARGE }),
          });
}
function em(e) {
    let { game: t, application: n, entries: i } = e,
        s = t.supplementalData,
        { isTwoColumn: o } = (0, H.c)(),
        d = l.useMemo(() => t.genres.map(y.du).join(", "), [t]),
        [u] = l.useState(() => Math.random()),
        x = l.useMemo(() => {
            if (null == s) return "";
            let { artwork: e, screenshots: t } = s;
            if (e.length > 0) {
                let t = Math.floor(u * e.length);
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(u * t.length);
                return t[e];
            }
            return "";
        }, [s, u]),
        h =
            null == s || (0, O.uJ)(s.iconHash)
                ? n?.getIconURL(160, k.QB ? "webp" : "png")
                : k.Ay.getGameAssetURL({ id: t.id, hash: s.iconHash, size: 160, format: k.QB ? "webp" : "png" }),
        g = R.default.extractTimestamp(n.id),
        p = 7 >= c()().diff(c()(g), "days"),
        _ = i.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        v = s?.name ?? t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: ec.is, style: { backgroundImage: `url("${x}")` } }),
            (0, a.jsxs)("div", {
                className: r()(ec.Qs, ec.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: es.xx,
                        children: [
                            o ? (0, a.jsx)(eu, { game: t, application: n, isTwoColumn: !0 }) : null,
                            (0, a.jsx)(U.N, { applicationId: n.id, className: es.Gg }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(es.nM, es.Lc, es.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(f.Heading, { variant: "heading-xl/bold", children: v }),
                                (0, a.jsxs)("div", {
                                    className: r()(es.nM, es.Lc),
                                    children: [
                                        null != h &&
                                            (0, a.jsx)("img", {
                                                className: es.Gt,
                                                src: h,
                                                height: 16,
                                                alt: er.intl.formatToPlainString(er.t["nh+jWk"], { game: v }),
                                            }),
                                        (0, a.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: d,
                                        }),
                                        p &&
                                            (0, a.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: es.Ad,
                                                children: er.intl.string(er.t.y2b7CA),
                                            }),
                                        _ &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, a.jsx)(eo, {}),
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
        className: es.V0,
        children: [
            (0, a.jsx)($.A, { entries: l, viewId: o, officialGuildId: i?.guild?.id, onClose: c, source: u }),
            (0, a.jsx)(Z.A, { detectedGame: t, trackAction: d }),
            (0, a.jsx)(et.A, {
                applicationId: n.id,
                onClose: c,
                trackAction: d,
                similarGames: r,
                similarGamesError: s,
            }),
        ],
    });
}
function eh(e) {
    let { game: t, trackAction: n } = e;
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: ec.oC,
              children: [
                  (0, a.jsxs)("div", {
                      className: ec.lM,
                      children: [
                          (0, a.jsx)(Z.a, { detectedGame: t.supplementalData, trackAction: n }),
                          (0, a.jsx)(el.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, a.jsx)(en.A, {}),
              ],
          });
}
function ef(e) {
    let { game: t, trackAction: n, onClose: i, application: r } = e,
        s = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        c = l.useCallback(() => {
            i(), (0, S.closeUserProfileModal)();
        }, [i]);
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: es.V0,
              children: [
                  (0, a.jsx)(Z.a, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsxs)("div", {
                      className: ec.gr,
                      children: [
                          (0, a.jsx)(eu, { game: t, application: r, isTwoColumn: !1 }),
                          (0, a.jsxs)("div", {
                              className: ec.E1,
                              children: [
                                  (0, a.jsx)(ea.A, { detectedGame: t.supplementalData }),
                                  (0, a.jsx)(el.A, { detectedGame: t.supplementalData, trackAction: n }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsx)(X.A, { trackAction: n }),
                  (0, a.jsx)(Q.o, { trackClick: n, closeModal: c }),
                  (0, a.jsx)(en.A, {}),
                  s && (0, a.jsx)(ee.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(z.A, { application: r, detectedGame: t.supplementalData, trackAction: n }),
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
        (0, a.jsx)(h.m, {
            text: er.intl.string(er.t.JVwWva),
            position: "top",
            children: (0, a.jsx)(f.Button, {
                icon: f.hpF,
                text: er.intl.string(er.t["jaYS/h"]),
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
        a = (0, I.h)(t),
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
            c(), (0, S.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, v.Ay)(_.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ep({ applicationId: o.id, analyticsLocations: u });
    return (0, a.jsxs)("div", {
        className: r()(es.pz, es.fi, es.iH),
        children: [
            (0, a.jsxs)("div", {
                className: es.NC,
                children: [
                    (0, a.jsx)(K.A, { invite: i, trackClick: s, closeModal: d }),
                    m && null != x && (0, a.jsx)(eg, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, a.jsx)(f.Heading, { variant: "heading-md/bold", children: er.intl.string(er.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: es.V0,
                children: [
                    (0, a.jsx)(el.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(Q.A, { detectedGame: t, trackClick: s, onInviteResolved: n, closeModal: d }),
                    (0, a.jsx)(J.A, { detectedGame: t, trackClick: s }),
                    (0, a.jsx)(q.A, { detectedGame: t }),
                    (0, a.jsx)(B.A, { application: o, trackAction: s }),
                    (0, a.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: er.intl.format(er.t.pch2Jw, { igdbLink: ei.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { game: t, trackAction: n, onClose: i, application: s } = e,
        c = l.useCallback(() => {
            i(), (0, S.closeUserProfileModal)();
        }, [i]),
        { analyticsLocations: o } = (0, v.Ay)(_.A.GAME_PROFILE),
        { isCloudPlayButtonShown: d, onCloudPlayClick: m } = ep({ applicationId: s.id, analyticsLocations: o });
    if (null == t.supplementalData) return null;
    let x = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(ec.Pn, es.fi, es.iH),
        children: [
            (0, a.jsx)("div", {
                className: es.NC,
                children: d && null != m && (0, a.jsx)(eg, { onClose: c, onCloudPlayClick: m, analyticsLocations: o }),
            }),
            (0, a.jsxs)("div", {
                className: es.V0,
                children: [
                    (0, a.jsx)(ea.A, { detectedGame: t.supplementalData }),
                    (0, a.jsx)(X.A, { trackAction: n }),
                    (0, a.jsx)(Q.o, { trackClick: n, closeModal: c }),
                    x && (0, a.jsx)(ee.A, { detectedGame: t.supplementalData }),
                    (0, a.jsx)(z.A, { application: s, detectedGame: t.supplementalData, trackAction: n }),
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
        { clientThemesClassName: u } = (0, E.Ay)(),
        m = (0, x.bG)([L.default], () => L.default.locale),
        h = l.useMemo(() => (0, G.u9)(), []),
        p = (0, x.yK)([M.A], () => (M.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [_, v] = l.useState(null),
        j = (0, P.s)(t),
        [A, T] = l.useState(null),
        S = (0, I.h)(t),
        { data: k, refetch: y } = (0, C.k)(t),
        R = k?.supplementalData ?? null,
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
    (0, I.A)(p),
    l.useEffect(() => {
        m.startsWith("en") || R?.summaryLocalized != null || y();
    }, [t, R?.summaryLocalized, m, y]),
    l.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                v(null);
                try {
                    await (0, w.N)(t);
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
    null == k || null == R || null == S)
        ? null
        : (0, a.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xl",
              children: (0, a.jsx)("div", {
                  className: r()(u, es.fn),
                  children: (0, a.jsxs)(f.HOs, {
                      orientation: "auto",
                      children: [
                          (0, a.jsx)(ed, { detectedGame: R, application: S, entries: j, trackAction: D }),
                          (0, a.jsx)(f.Fmo, {
                              children: (0, a.jsxs)("div", {
                                  className: r()(es.Qs, es.rb),
                                  children: [
                                      (0, a.jsx)(ex, {
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
                                      (0, a.jsx)(e_, {
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
        [m, h] = l.useState(!0),
        [p, _] = l.useState(null),
        { clientThemesClassName: v } = (0, E.Ay)(),
        j = (0, x.bG)([L.default], () => L.default.locale),
        T = l.useMemo(() => (0, G.u9)(), []),
        S = (0, I.h)(t),
        k = (0, P.s)(t),
        { data: y, refetch: R } = (0, C.k)(t),
        O = y?.supplementalData ?? null,
        w = O?.name ?? y?.name ?? S?.name ?? "",
        {
            hasAlreadyLinked: M,
            canStartAuthorization: D,
            fetched: Y,
            startAuthorization: F,
            connectionApp: U,
        } = (0, A.RD)(S),
        { invite: B, isMember: z } = (0, W.A)(O, _),
        { socialLayerStorefrontRecommendationsData: K } = (0, V.V)(S ?? null),
        X = (e, a) => {
            (0, G.Tn)({
                gameName: w,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: T,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, g.Ay)(() => {
        (0, G.rw)({ source: n, viewId: T, applicationId: t, gameName: w, authorId: i, profileType: G.HV.FullProfile }),
            (0, b.He)();
    }),
        l.useEffect(() => {
            j.startsWith("en") || O?.summaryLocalized != null || R();
        }, [t, O?.summaryLocalized, j, R]),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = k.map((t) => {
                    let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, j);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, G.V_)({
                viewId: T,
                applicationId: t,
                gameName: w,
                playedFriendIds: k.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let J = l.useCallback((e) => {
            h(e.contentRect.width >= 800);
        }, []),
        Z = (0, d.w)(J, [], { fireOnMount: !0 }),
        $ = l.useMemo(
            () => ({
                application: S,
                isTwoColumn: m,
                canStartAuthorization: D,
                hasAlreadyLinked: M,
                fetchedAuthorization: Y,
                startAuthorization: F,
                connectionApp: U,
                officialInvite: B,
                isMember: z,
                socialLayerStorefrontRecommendationsData: K,
            }),
            [S, m, D, M, Y, F, U, B, z, K],
        );
    return null == y || null == O || null == S
        ? null
        : (0, a.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xxl",
              children: (0, a.jsx)(H.D.Provider, {
                  value: $,
                  children: (0, a.jsx)("div", {
                      className: r()(v, ec.kL),
                      ref: Z,
                      children: (0, a.jsxs)(f.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(em, { game: y, application: S, entries: k }),
                              (0, a.jsx)(f.Fmo, {
                                  children: m
                                      ? (0, a.jsxs)("div", {
                                            className: ec.jC,
                                            children: [
                                                (0, a.jsx)(eh, { game: y, trackAction: X }),
                                                (0, a.jsx)(ev, {
                                                    game: y,
                                                    application: S,
                                                    trackAction: X,
                                                    onClose: c,
                                                    appContext: o,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, a.jsx)("div", {
                                            className: ec.b9,
                                            children: (0, a.jsx)(ef, {
                                                game: y,
                                                trackAction: X,
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
let eI = function (e) {
    let { enabled: t } = D.z.useConfig({ location: "GameProfileModal" });
    return t ? (0, a.jsx)(eA, { ...e }) : (0, a.jsx)(ej, { ...e });
};
