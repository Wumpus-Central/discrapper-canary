n.d(t, { default: () => eI });
var l = n(627968),
    a = n(64700),
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
    N = n(708197),
    b = n(583846),
    C = n(885151),
    T = n(928550),
    S = n(657331),
    L = n(773669),
    k = n(486020),
    y = n(541830),
    G = n(661191),
    R = n(240248),
    O = n(409626),
    M = n(880405),
    w = n(422069),
    D = n(476464),
    P = n(205184),
    V = n(939764),
    Y = n(277089),
    W = n(611656),
    U = n(459746),
    F = n(503364),
    B = n(305080),
    H = n(941568),
    K = n(814698),
    z = n(431040),
    X = n(976720),
    J = n(313843),
    $ = n(286737),
    Z = n(839671),
    Q = n(94836),
    q = n(392332),
    ee = n(639714),
    et = n(310721),
    en = n(922283),
    el = n(582942),
    ea = n(999450),
    ei = n(285820),
    er = n(771004),
    es = n(424994),
    ec = n(985018),
    eo = n(851822),
    ed = n(146258);
let eu = () =>
    (0, l.jsxs)("div", {
        className: eo.uv,
        children: [
            (0, l.jsx)(f.Y3C, { size: "xxs" }),
            (0, l.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ec.intl.string(ec.t.kAlUsy),
            }),
        ],
    });
function em(e) {
    let { detectedGame: t, application: n, entries: i } = e,
        s = a.useMemo(() => t?.genres.map(y.du).join(", "), [t]),
        [o] = a.useState(() => Math.random()),
        d = a.useMemo(() => {
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
        h = 7 >= c()().diff(c()(x), "days"),
        g = i.some((e) => (0, b.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: eo.is, style: { backgroundImage: `url("${d}")` } }),
            (0, l.jsxs)("div", {
                className: r()(eo.Qs, eo.fi, eo.iH, eo.Se),
                children: [
                    (0, l.jsxs)("div", {
                        className: eo.xx,
                        children: [
                            (0, l.jsx)("div", {
                                className: eo.bb,
                                children: (0, l.jsx)(U.A, {
                                    game: t,
                                    application: n,
                                    className: eo.wm,
                                    size: U.w.LARGE,
                                }),
                            }),
                            (0, l.jsx)(F.A, { applicationId: n.id, className: eo.Gg }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: r()(eo.nM, eo.Lc, eo.Z3),
                        children: (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(f.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, l.jsxs)("div", {
                                    className: r()(eo.nM, eo.Lc),
                                    children: [
                                        null != u &&
                                            (0, l.jsx)("img", {
                                                className: eo.Gt,
                                                src: u,
                                                height: 16,
                                                alt: ec.intl.formatToPlainString(ec.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, l.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        h &&
                                            (0, l.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: eo.Ad,
                                                children: ec.intl.string(ec.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, l.jsx)(eu, {}),
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
        entries: a,
        officialGuildInvite: i,
        similarGames: r,
        similarGamesError: s,
        onClose: c,
        viewId: o,
        trackAction: d,
        source: u,
    } = e;
    return (0, l.jsxs)("div", {
        className: eo.V0,
        children: [
            (0, l.jsx)(q.A, { entries: a, viewId: o, officialGuildId: i?.guild?.id, onClose: c, source: u }),
            (0, l.jsx)(Q.A, { detectedGame: t, trackAction: d }),
            (0, l.jsx)(el.A, {
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
        : (0, l.jsxs)("div", {
              className: ed.oC,
              children: [
                  (0, l.jsxs)("div", {
                      className: ed.lM,
                      children: [
                          (0, l.jsx)(Q.a, { detectedGame: t.supplementalData, trackAction: n }),
                          (0, l.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, l.jsx)(H.A, { detectedGame: t.supplementalData }),
                  (0, l.jsx)(ea.A, {}),
              ],
          });
}
function ef(e) {
    let { game: t, trackAction: n, application: a } = e,
        i = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: r } = (0, B.c)();
    return null == t.supplementalData
        ? null
        : (0, l.jsxs)("div", {
              className: eo.V0,
              children: [
                  (0, l.jsx)(Q.a, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, l.jsxs)("div", {
                      className: ed.gr,
                      children: [
                          (0, l.jsx)(J.Q, { game: t, application: a, isTwoColumn: !1 }),
                          (0, l.jsxs)("div", {
                              className: ed.E1,
                              children: [
                                  (0, l.jsx)(ei.A, { detectedGame: t.supplementalData }),
                                  (0, l.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                              ],
                          }),
                      ],
                  }),
                  (0, l.jsx)($.A, { trackAction: n }),
                  (0, l.jsx)(ee.o, { trackClick: n, closeModal: r }),
                  (0, l.jsx)(H.A, { detectedGame: t.supplementalData }),
                  (0, l.jsx)(ea.A, {}),
                  i && (0, l.jsx)(en.A, { detectedGame: t.supplementalData }),
                  (0, l.jsx)(z.A, { application: a, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function eg(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: a } = e;
    return (
        (0, j.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: { location_stack: a },
        }),
        (0, l.jsx)(h.m, {
            text: ec.intl.string(ec.t.JVwWva),
            position: "top",
            children: (0, l.jsx)(f.Button, {
                icon: f.hpF,
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
        l = (0, I.h)(t),
        a = (0, p.A)({ application: l, analyticsLocations: n });
    return { onCloudPlayClick: a, isCloudPlayButtonShown: !(0, T.L)(t) && null != a };
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
        d = a.useCallback(() => {
            c(), (0, S.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, v.Ay)(_.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ep({ applicationId: o.id, analyticsLocations: u });
    return (0, l.jsxs)("div", {
        className: r()(eo.pz, eo.fi, eo.iH),
        children: [
            (0, l.jsxs)("div", {
                className: eo.NC,
                children: [
                    (0, l.jsx)(X.A, { invite: i, trackClick: s, closeModal: d }),
                    m && null != x && (0, l.jsx)(eg, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, l.jsx)(f.Heading, { variant: "heading-md/bold", children: ec.intl.string(ec.t.CI0vSJ) }),
            (0, l.jsxs)("div", {
                className: eo.V0,
                children: [
                    (0, l.jsx)(er.h, { detectedGame: t, trackAction: s }),
                    (0, l.jsx)(ee.A, { detectedGame: t, trackClick: s, onInviteResolved: n, closeModal: d }),
                    (0, l.jsx)(Z.A, { detectedGame: t, trackClick: s }),
                    (0, l.jsx)(et.A, { detectedGame: t }),
                    (0, l.jsx)(K.A, { application: o, trackAction: s }),
                    (0, l.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: ec.intl.format(ec.t.pch2Jw, { igdbLink: es.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { game: t, trackAction: n, application: a } = e,
        { closeModal: i } = (0, B.c)(),
        { analyticsLocations: s } = (0, v.Ay)(_.A.GAME_PROFILE),
        { isCloudPlayButtonShown: c, onCloudPlayClick: o } = ep({ applicationId: a.id, analyticsLocations: s });
    if (null == t.supplementalData) return null;
    let d = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, l.jsxs)("div", {
        className: r()(ed.Pn, eo.fi, eo.iH),
        children: [
            (0, l.jsx)("div", {
                className: eo.NC,
                children: c && null != o && (0, l.jsx)(eg, { onClose: i, onCloudPlayClick: o, analyticsLocations: s }),
            }),
            (0, l.jsxs)("div", {
                className: eo.V0,
                children: [
                    (0, l.jsx)(ei.A, { detectedGame: t.supplementalData }),
                    (0, l.jsx)($.A, { trackAction: n }),
                    (0, l.jsx)(ee.o, { trackClick: n, closeModal: i }),
                    d && (0, l.jsx)(en.A, { detectedGame: t.supplementalData }),
                    (0, l.jsx)(z.A, { application: a, detectedGame: t.supplementalData, trackAction: n }),
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
        h = a.useMemo(() => (0, O.u9)(), []),
        p = (0, x.yK)([w.A], () => (w.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [_, v] = a.useState(null),
        j = (0, P.s)(t),
        [A, T] = a.useState(null),
        S = (0, I.h)(t),
        { data: k, refetch: y } = (0, C.k)(t),
        G = k?.supplementalData ?? null,
        R = G?.name ?? S?.name,
        D = (e, l) => {
            (0, O.Tn)({
                gameName: R ?? "",
                applicationId: t,
                action: e,
                similarGameId: l,
                viewId: h,
                officialGuildId: A?.guild?.id,
                source: n,
            });
        };
    return ((0, g.Ay)(() => {
        (0, O.rw)({
            source: n,
            viewId: h,
            applicationId: t,
            gameName: R ?? "",
            authorId: i,
            profileType: O.HV.FullProfile,
        }),
            (0, N.He)();
    }),
    (0, I.A)(p),
    a.useEffect(() => {
        m.startsWith("en") || G?.summaryLocalized != null || y();
    }, [t, G?.summaryLocalized, m, y]),
    a.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                v(null);
                try {
                    await (0, M.NP)(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, p]),
    (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = j.map((t) => {
                let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, O.V_)({
            viewId: h,
            applicationId: t,
            gameName: R ?? "",
            playedFriendIds: j.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: p.filter(W.oS).slice(0, 5),
            officialGuildId: A?.guild?.id,
        });
    }),
    null == k || null == G || null == S)
        ? null
        : (0, l.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xl",
              children: (0, l.jsx)("div", {
                  className: r()(u, eo.fn),
                  children: (0, l.jsxs)(f.HOs, {
                      orientation: "auto",
                      children: [
                          (0, l.jsx)(em, { detectedGame: G, application: S, entries: j, trackAction: D }),
                          (0, l.jsx)(f.Fmo, {
                              children: (0, l.jsxs)("div", {
                                  className: r()(eo.Qs, eo.rb),
                                  children: [
                                      (0, l.jsx)(ex, {
                                          detectedGame: G,
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
                                      (0, l.jsx)(e_, {
                                          detectedGame: G,
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
        [m, h] = a.useState(!0),
        [p, _] = a.useState(null),
        { clientThemesClassName: v } = (0, E.Ay)(),
        j = (0, x.bG)([L.default], () => L.default.locale),
        T = a.useMemo(() => (0, O.u9)(), []),
        k = (0, I.h)(t),
        y = (0, P.s)(t),
        { data: G } = (0, C.k)(t),
        R = G?.supplementalData ?? null,
        M = R?.name ?? G?.name ?? k?.name ?? "",
        {
            hasAlreadyLinked: w,
            canStartAuthorization: D,
            fetched: W,
            startAuthorization: U,
            connectionApp: F,
        } = (0, A.RD)(k),
        { invite: H, isMember: K } = (0, Y.A)(R, _),
        { socialLayerStorefrontRecommendationsData: z } = (0, V.V)(k ?? null),
        X = (e, l) => {
            (0, O.Tn)({
                gameName: M,
                applicationId: t,
                action: e,
                similarGameId: l,
                viewId: T,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, g.Ay)(() => {
        (0, O.rw)({ source: n, viewId: T, applicationId: t, gameName: M, authorId: i, profileType: O.HV.FullProfile }),
            (0, N.He)();
    }),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = y.map((t) => {
                    let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, j);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, O.V_)({
                viewId: T,
                applicationId: t,
                gameName: M,
                playedFriendIds: y.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let $ = a.useCallback((e) => {
            h(e.contentRect.width >= 800);
        }, []),
        Z = (0, d.w)($, [], { fireOnMount: !0 }),
        Q = a.useCallback(() => {
            c(), (0, S.closeUserProfileModal)();
        }, [c]),
        q = a.useMemo(
            () => ({
                application: k,
                isTwoColumn: m,
                canStartAuthorization: D,
                hasAlreadyLinked: w,
                fetchedAuthorization: W,
                startAuthorization: U,
                connectionApp: F,
                officialInvite: H,
                isMember: K,
                socialLayerStorefrontRecommendationsData: z,
                closeModal: Q,
            }),
            [k, m, D, w, W, U, F, H, K, z, Q],
        );
    return null == G || null == R || null == k
        ? null
        : (0, l.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xxl",
              children: (0, l.jsx)(B.D.Provider, {
                  value: q,
                  children: (0, l.jsx)("div", {
                      className: r()(v, ed.kL),
                      ref: Z,
                      children: (0, l.jsxs)(f.HOs, {
                          orientation: "auto",
                          children: [
                              (0, l.jsx)(J.A, { game: G, application: k, entries: y, onClose: c }),
                              (0, l.jsx)(f.Fmo, {
                                  children: m
                                      ? (0, l.jsxs)("div", {
                                            className: ed.jC,
                                            children: [
                                                (0, l.jsx)(eh, { game: G, trackAction: X }),
                                                (0, l.jsx)(ev, {
                                                    game: G,
                                                    application: k,
                                                    trackAction: X,
                                                    appContext: o,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, l.jsx)("div", {
                                            className: ed.b9,
                                            children: (0, l.jsx)(ef, { game: G, trackAction: X, application: k }),
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
    return t ? (0, l.jsx)(eA, { ...e }) : (0, l.jsx)(ej, { ...e });
};
