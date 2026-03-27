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
    f = n(397927),
    g = n(964486),
    _ = n(359549),
    p = n(793574),
    v = n(688810),
    A = n(139286),
    j = n(362490),
    C = n(429913),
    E = n(590703),
    I = n(708197),
    b = n(583846),
    N = n(885151),
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
    ed = n(325952),
    eu = n(364620);
let em = () =>
    (0, a.jsxs)("div", {
        className: ed.uv,
        children: [
            (0, a.jsx)(f.Y3C, { size: "xxs" }),
            (0, a.jsx)(f.Text, {
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
        g = 7 >= c()().diff(c()(h), "days"),
        _ = l.some((e) => (0, b.CZ)(e) === m.m.GLOBAL),
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
                                (0, a.jsx)(f.Heading, { variant: "heading-xl/bold", children: p }),
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
                                        (0, a.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        g &&
                                            (0, a.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: ed.Ad,
                                                children: eo.intl.string(eo.t.y2b7CA),
                                            }),
                                        _ &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(f.Text, {
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
function ef(e) {
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
function eg(e) {
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
        children: (0, a.jsx)(f.Button, {
            icon: f.hpF,
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
        } = e,
        d = i.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, v.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ep({ applicationId: o.id, analyticsLocations: u });
    return (0, a.jsxs)("div", {
        className: r()(ed.pz, ed.fi, ed.iH),
        children: [
            (0, a.jsxs)("div", {
                className: ed.NC,
                children: [
                    (0, a.jsx)(X.A, { invite: l, closeModal: d, trackAction: s }),
                    m &&
                        null != x &&
                        (0, a.jsx)(e_, { onClose: d, onCloudPlayClick: x, analyticsLocations: u, trackAction: s }),
                ],
            }),
            (0, a.jsx)(f.Heading, { variant: "heading-md/bold", children: eo.intl.string(eo.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: ed.V0,
                children: [
                    (0, a.jsx)(es.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(ee.A, { detectedGame: t, onInviteResolved: n, closeModal: d, trackAction: s }),
                    (0, a.jsx)($.A, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(et.A, { detectedGame: t }),
                    (0, a.jsx)(z.A, { application: o, trackAction: s }),
                    (0, a.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: eo.intl.format(eo.t.pch2Jw, { igdbLink: ec.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let { game: t, trackAction: n, application: i } = e,
        { closeModal: l } = (0, H.c)(),
        { analyticsLocations: s } = (0, v.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: c, onCloudPlayClick: o } = ep({ applicationId: i.id, analyticsLocations: s });
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
                    (0, a.jsx)(e_, { onClose: l, onCloudPlayClick: o, analyticsLocations: s, trackAction: n }),
            }),
            (0, a.jsxs)("div", {
                className: ed.V0,
                children: [
                    (0, a.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)(Z.A, { trackAction: n }),
                    (0, a.jsx)(ee.o, { closeModal: l, trackAction: n }),
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
        h = i.useMemo(() => (0, G.u9)(), []),
        _ = (0, x.yK)([P.A], () => (P.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, v] = i.useState(null),
        A = (0, V.s)(t),
        [j, S] = i.useState(null),
        T = (0, C.h)(t),
        { data: y, refetch: L } = (0, N.k)(t),
        O = y?.supplementalData ?? null,
        R = O?.name ?? T?.name,
        w = (e, a) => {
            (0, G.Tn)({
                gameName: R ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: h,
                officialGuildId: j?.guild?.id,
                source: n,
            });
        };
    return ((0, g.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: h,
            applicationId: t,
            gameName: R ?? "",
            authorId: l,
            profileType: G.HV.FullProfile,
        }),
            (0, I.He)();
    }),
    (0, C.A)(_),
    i.useEffect(() => {
        m.startsWith("en") || O?.summaryLocalized != null || L();
    }, [t, O?.summaryLocalized, m, L]),
    i.useEffect(() => {
        (async () => {
            if (0 === _.length) {
                v(null);
                try {
                    await (0, M.NP)(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, _]),
    (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = A.map((t) => {
                let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, G.V_)({
            viewId: h,
            applicationId: t,
            gameName: R ?? "",
            playedFriendIds: A.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: _.filter(F.oS).slice(0, 5),
            officialGuildId: j?.guild?.id,
        });
    }),
    null == y || null == O || null == T)
        ? null
        : (0, a.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xl",
              children: (0, a.jsx)("div", {
                  className: r()(u, ed.fn),
                  children: (0, a.jsxs)(f.HOs, {
                      orientation: "auto",
                      children: [
                          (0, a.jsx)(ex, { detectedGame: O, application: T, entries: A, trackAction: w }),
                          (0, a.jsx)(f.Fmo, {
                              children: (0, a.jsxs)("div", {
                                  className: r()(ed.Qs, ed.rb),
                                  children: [
                                      (0, a.jsx)(eh, {
                                          detectedGame: O,
                                          application: T,
                                          entries: A,
                                          officialGuildInvite: j,
                                          similarGames: _,
                                          similarGamesError: p,
                                          onClose: c,
                                          viewId: h,
                                          source: n,
                                          trackAction: w,
                                      }),
                                      (0, a.jsx)(ev, {
                                          detectedGame: O,
                                          onSetOfficialGuildInvite: S,
                                          officialGuildInvite: j,
                                          onClose: c,
                                          appContext: o,
                                          application: T,
                                          source: n,
                                          trackExternalAction: d,
                                          trackAction: w,
                                      }),
                                  ],
                              }),
                          }),
                      ],
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
        [_, p] = i.useState(null),
        { clientThemesClassName: v } = (0, E.Ay)(),
        A = (0, x.bG)([k.default], () => k.default.locale),
        S = i.useMemo(() => (0, G.u9)(), []),
        y = (0, C.h)(t),
        L = (0, V.s)(t),
        { data: O } = (0, N.k)(t),
        R = O?.supplementalData ?? null,
        M = R?.name ?? O?.name ?? y?.name ?? "",
        {
            hasAlreadyLinked: P,
            canStartAuthorization: w,
            fetched: F,
            startAuthorization: U,
            connectionApp: Y,
        } = (0, j.RD)(y),
        { invite: B, isMember: z } = (0, W.A)(R, p),
        { socialLayerStorefrontRecommendationsData: K } = (0, D.V)(y ?? null),
        X = (e, a) => {
            (0, G.Tn)({
                gameName: M,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: S,
                officialGuildId: _?.guild?.id,
                source: n,
            });
        };
    (0, g.Ay)(() => {
        (0, G.rw)({ source: n, viewId: S, applicationId: t, gameName: M, authorId: l, profileType: G.HV.FullProfile }),
            (0, I.He)();
    }),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = L.map((t) => {
                    let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, A);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, G.V_)({
                viewId: S,
                applicationId: t,
                gameName: M,
                playedFriendIds: L.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: _?.guild?.id,
            });
        });
    let Z = i.useCallback((e) => {
            h(e.contentRect.width >= 800);
        }, []),
        $ = (0, d.w)(Z, [], { fireOnMount: !0 }),
        Q = i.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]),
        q = i.useMemo(
            () => ({
                application: y,
                isTwoColumn: m,
                canStartAuthorization: w,
                hasAlreadyLinked: P,
                fetchedAuthorization: F,
                startAuthorization: U,
                connectionApp: Y,
                officialInvite: B,
                isMember: z,
                socialLayerStorefrontRecommendationsData: K,
                closeModal: Q,
            }),
            [y, m, w, P, F, U, Y, B, z, K, Q],
        ),
        ee = i.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]);
    return null == O || null == R || null == y
        ? null
        : (0, a.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xxl",
              children: (0, a.jsx)(H.D.Provider, {
                  value: q,
                  children: (0, a.jsx)("div", {
                      className: r()(v, eu.kL),
                      ref: $,
                      children: (0, a.jsxs)(f.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(J.A, { game: O, application: y, onClose: c, trackAction: X }),
                              (0, a.jsx)(f.Fmo, {
                                  children: m
                                      ? (0, a.jsxs)("div", {
                                            className: eu.jC,
                                            children: [
                                                (0, a.jsx)(ef, { game: O, closeModal: ee, trackAction: X }),
                                                (0, a.jsx)(eA, {
                                                    game: O,
                                                    application: y,
                                                    appContext: o,
                                                    source: n,
                                                    trackExternalAction: u,
                                                    trackAction: X,
                                                }),
                                            ],
                                        })
                                      : (0, a.jsx)("div", {
                                            className: eu.b9,
                                            children: (0, a.jsx)(eg, { game: O, application: y, trackAction: X }),
                                        }),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
let eE = function (e) {
    return (0, w._)("GameProfileModal") ? (0, a.jsx)(eC, { ...e }) : (0, a.jsx)(ej, { ...e });
};
