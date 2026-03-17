n.d(t, { default: () => eA });
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
    f = n(990078),
    h = n(397927),
    g = n(964486),
    p = n(359549),
    v = n(793574),
    j = n(688810),
    _ = n(139286),
    A = n(362490),
    E = n(429913),
    I = n(590703),
    b = n(708197),
    N = n(583846),
    C = n(885151),
    T = n(928550),
    S = n(657331),
    L = n(773669),
    k = n(486020),
    y = n(541830),
    R = n(661191),
    G = n(240248),
    O = n(409626),
    M = n(880405),
    w = n(422069),
    D = n(476464),
    P = n(205184),
    V = n(939764),
    W = n(277089),
    Y = n(611656),
    F = n(459746),
    U = n(503364),
    H = n(305080),
    B = n(814698),
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
    eo = n(851822),
    ec = n(146258);
let ed = () =>
    (0, a.jsxs)("div", {
        className: eo.uv,
        children: [
            (0, a.jsx)(h.Y3C, { size: "xxs" }),
            (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: es.intl.string(es.t.kAlUsy),
            }),
        ],
    });
function eu(e) {
    let { detectedGame: t, application: n, entries: i } = e,
        s = l.useMemo(() => t?.genres.map(y.du).join(", "), [t]),
        [c] = l.useState(() => Math.random()),
        d = l.useMemo(() => {
            if (null == t) return "";
            let { artwork: e, screenshots: n } = t;
            if (e.length > 0) {
                let t = Math.floor(c * e.length);
                return e[t];
            }
            if (n.length > 0) {
                let e = Math.floor(c * n.length);
                return n[e];
            }
            return "";
        }, [t, c]),
        u = (0, G.uJ)(t.iconHash)
            ? n?.getIconURL(160, k.QB ? "webp" : "png")
            : k.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: k.QB ? "webp" : "png" }),
        x = R.default.extractTimestamp(n.id),
        f = 7 >= o()().diff(o()(x), "days"),
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
                                children: (0, a.jsx)(F.A, {
                                    game: t,
                                    application: n,
                                    className: eo.wm,
                                    size: F.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(U.A, { applicationId: n.id, className: eo.Gg }),
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
                                                alt: es.intl.formatToPlainString(es.t["nh+jWk"], { game: p }),
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
                                                children: es.intl.string(es.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(h.Text, {
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
        onClose: o,
        viewId: c,
        trackAction: d,
        source: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: eo.V0,
        children: [
            (0, a.jsx)(Q.A, { entries: l, viewId: c, officialGuildId: i?.guild?.id, onClose: o, source: u }),
            (0, a.jsx)(Z.A, { detectedGame: t, trackAction: d }),
            (0, a.jsx)(en.A, {
                applicationId: n.id,
                onClose: o,
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
              className: ec.oC,
              children: [
                  (0, a.jsxs)("div", {
                      className: ec.lM,
                      children: [
                          (0, a.jsx)(Z.a, { detectedGame: t.supplementalData, trackAction: n }),
                          (0, a.jsx)(ei.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, a.jsx)(ea.A, {}),
              ],
          });
}
function ef(e) {
    let { game: t, trackAction: n, onClose: i, application: r } = e,
        s = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        o = l.useCallback(() => {
            i(), (0, S.closeUserProfileModal)();
        }, [i]);
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: eo.V0,
              children: [
                  (0, a.jsx)(Z.a, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsxs)("div", {
                      className: ec.gr,
                      children: [
                          (0, a.jsx)(X.Q, { game: t, application: r, isTwoColumn: !1 }),
                          (0, a.jsxs)("div", {
                              className: ec.E1,
                              children: [
                                  (0, a.jsx)(el.A, { detectedGame: t.supplementalData }),
                                  (0, a.jsx)(ei.A, { detectedGame: t.supplementalData, trackAction: n }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsx)(J.A, { trackAction: n }),
                  (0, a.jsx)(q.o, { trackClick: n, closeModal: o }),
                  (0, a.jsx)(ea.A, {}),
                  s && (0, a.jsx)(et.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(K.A, { application: r, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function eh(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, _.A)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, a.jsx)(f.m, {
            text: es.intl.string(es.t.JVwWva),
            position: "top",
            children: (0, a.jsx)(h.Button, {
                icon: h.hpF,
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
            onClose: o,
            application: c,
        } = e,
        d = l.useCallback(() => {
            o(), (0, S.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: u } = (0, j.Ay)(v.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = eg({ applicationId: c.id, analyticsLocations: u });
    return (0, a.jsxs)("div", {
        className: r()(eo.pz, eo.fi, eo.iH),
        children: [
            (0, a.jsxs)("div", {
                className: eo.NC,
                children: [
                    (0, a.jsx)(z.A, { invite: i, trackClick: s, closeModal: d }),
                    m && null != x && (0, a.jsx)(eh, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, a.jsx)(h.Heading, { variant: "heading-md/bold", children: es.intl.string(es.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: eo.V0,
                children: [
                    (0, a.jsx)(ei.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(q.A, { detectedGame: t, trackClick: s, onInviteResolved: n, closeModal: d }),
                    (0, a.jsx)($.A, { detectedGame: t, trackClick: s }),
                    (0, a.jsx)(ee.A, { detectedGame: t }),
                    (0, a.jsx)(B.A, { application: c, trackAction: s }),
                    (0, a.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: es.intl.format(es.t.pch2Jw, { igdbLink: er.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { game: t, trackAction: n, onClose: i, application: s } = e,
        o = l.useCallback(() => {
            i(), (0, S.closeUserProfileModal)();
        }, [i]),
        { analyticsLocations: c } = (0, j.Ay)(v.A.GAME_PROFILE),
        { isCloudPlayButtonShown: d, onCloudPlayClick: m } = eg({ applicationId: s.id, analyticsLocations: c });
    if (null == t.supplementalData) return null;
    let x = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(ec.Pn, eo.fi, eo.iH),
        children: [
            (0, a.jsx)("div", {
                className: eo.NC,
                children: d && null != m && (0, a.jsx)(eh, { onClose: o, onCloudPlayClick: m, analyticsLocations: c }),
            }),
            (0, a.jsxs)("div", {
                className: eo.V0,
                children: [
                    (0, a.jsx)(el.A, { detectedGame: t.supplementalData }),
                    (0, a.jsx)(J.A, { trackAction: n }),
                    (0, a.jsx)(q.o, { trackClick: n, closeModal: o }),
                    x && (0, a.jsx)(et.A, { detectedGame: t.supplementalData }),
                    (0, a.jsx)(K.A, { application: s, detectedGame: t.supplementalData, trackAction: n }),
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
            onClose: o,
            appContext: c,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, I.Ay)(),
        m = (0, x.bG)([L.default], () => L.default.locale),
        f = l.useMemo(() => (0, O.u9)(), []),
        p = (0, x.yK)([w.A], () => (w.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [v, j] = l.useState(null),
        _ = (0, P.s)(t),
        [A, T] = l.useState(null),
        S = (0, E.h)(t),
        { data: k, refetch: y } = (0, C.k)(t),
        R = k?.supplementalData ?? null,
        G = R?.name ?? S?.name,
        D = (e, a) => {
            (0, O.Tn)({
                gameName: G ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: f,
                officialGuildId: A?.guild?.id,
                source: n,
            });
        };
    return ((0, g.Ay)(() => {
        (0, O.rw)({
            source: n,
            viewId: f,
            applicationId: t,
            gameName: G ?? "",
            authorId: i,
            profileType: O.HV.FullProfile,
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
                j(null);
                try {
                    await (0, M.NP)(t);
                } catch (e) {
                    j(e);
                }
            }
        })();
    }, [t, p]),
    (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = _.map((t) => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, O.V_)({
            viewId: f,
            applicationId: t,
            gameName: G ?? "",
            playedFriendIds: _.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: p.filter(Y.oS).slice(0, 5),
            officialGuildId: A?.guild?.id,
        });
    }),
    null == k || null == R || null == S)
        ? null
        : (0, a.jsx)(h.dWK, {
              transitionState: s,
              onClose: o,
              size: "xl",
              children: (0, a.jsx)("div", {
                  className: r()(u, eo.fn),
                  children: (0, a.jsxs)(h.HOs, {
                      orientation: "auto",
                      children: [
                          (0, a.jsx)(eu, { detectedGame: R, application: S, entries: _, trackAction: D }),
                          (0, a.jsx)(h.Fmo, {
                              children: (0, a.jsxs)("div", {
                                  className: r()(eo.Qs, eo.rb),
                                  children: [
                                      (0, a.jsx)(em, {
                                          detectedGame: R,
                                          application: S,
                                          entries: _,
                                          officialGuildInvite: A,
                                          similarGames: p,
                                          similarGamesError: v,
                                          onClose: o,
                                          viewId: f,
                                          trackAction: D,
                                          source: n,
                                      }),
                                      (0, a.jsx)(ep, {
                                          detectedGame: R,
                                          onSetOfficialGuildInvite: T,
                                          officialGuildInvite: A,
                                          trackAction: D,
                                          onClose: o,
                                          appContext: c,
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
function e_(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: o,
            appContext: c,
            trackExternalAction: u,
        } = e,
        [m, f] = l.useState(!0),
        [p, v] = l.useState(null),
        { clientThemesClassName: j } = (0, I.Ay)(),
        _ = (0, x.bG)([L.default], () => L.default.locale),
        T = l.useMemo(() => (0, O.u9)(), []),
        S = (0, E.h)(t),
        k = (0, P.s)(t),
        { data: y } = (0, C.k)(t),
        R = y?.supplementalData ?? null,
        G = R?.name ?? y?.name ?? S?.name ?? "",
        {
            hasAlreadyLinked: M,
            canStartAuthorization: w,
            fetched: D,
            startAuthorization: Y,
            connectionApp: F,
        } = (0, A.RD)(S),
        { invite: U, isMember: B } = (0, W.A)(R, v),
        { socialLayerStorefrontRecommendationsData: K } = (0, V.V)(S ?? null),
        z = (e, a) => {
            (0, O.Tn)({
                gameName: G,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: T,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, g.Ay)(() => {
        (0, O.rw)({ source: n, viewId: T, applicationId: t, gameName: G, authorId: i, profileType: O.HV.FullProfile }),
            (0, b.He)();
    }),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = k.map((t) => {
                    let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, _);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, O.V_)({
                viewId: T,
                applicationId: t,
                gameName: G,
                playedFriendIds: k.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let J = l.useCallback((e) => {
            f(e.contentRect.width >= 800);
        }, []),
        $ = (0, d.w)(J, [], { fireOnMount: !0 }),
        Z = l.useMemo(
            () => ({
                application: S,
                isTwoColumn: m,
                canStartAuthorization: w,
                hasAlreadyLinked: M,
                fetchedAuthorization: D,
                startAuthorization: Y,
                connectionApp: F,
                officialInvite: U,
                isMember: B,
                socialLayerStorefrontRecommendationsData: K,
            }),
            [S, m, w, M, D, Y, F, U, B, K],
        );
    return null == y || null == R || null == S
        ? null
        : (0, a.jsx)(h.dWK, {
              transitionState: s,
              onClose: o,
              size: "xxl",
              children: (0, a.jsx)(H.D.Provider, {
                  value: Z,
                  children: (0, a.jsx)("div", {
                      className: r()(j, ec.kL),
                      ref: $,
                      children: (0, a.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(X.A, { game: y, application: S, entries: k, onClose: o }),
                              (0, a.jsx)(h.Fmo, {
                                  children: m
                                      ? (0, a.jsxs)("div", {
                                            className: ec.jC,
                                            children: [
                                                (0, a.jsx)(ex, { game: y, trackAction: z }),
                                                (0, a.jsx)(ev, {
                                                    game: y,
                                                    application: S,
                                                    trackAction: z,
                                                    onClose: o,
                                                    appContext: c,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, a.jsx)("div", {
                                            className: ec.b9,
                                            children: (0, a.jsx)(ef, {
                                                game: y,
                                                trackAction: z,
                                                application: S,
                                                onClose: o,
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
    return t ? (0, a.jsx)(e_, { ...e }) : (0, a.jsx)(ej, { ...e });
};
