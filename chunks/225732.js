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
    f = n(990078),
    h = n(397927),
    g = n(964486),
    _ = n(359549),
    p = n(793574),
    A = n(688810),
    v = n(139286),
    j = n(362490),
    E = n(429913),
    I = n(590703),
    C = n(708197),
    b = n(583846),
    N = n(885151),
    T = n(928550),
    S = n(657331),
    L = n(773669),
    k = n(486020),
    y = n(541830),
    O = n(661191),
    R = n(240248),
    G = n(409626),
    M = n(880405),
    P = n(422069),
    w = n(476464),
    D = n(205184),
    V = n(939764),
    W = n(277089),
    F = n(611656),
    Y = n(459746),
    U = n(503364),
    H = n(305080),
    B = n(941568),
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
    ea = n(588260),
    el = n(582942),
    ei = n(999450),
    er = n(285820),
    es = n(771004),
    ec = n(424994),
    eo = n(985018),
    ed = n(851822),
    eu = n(146258);
let em = () =>
    (0, a.jsxs)("div", {
        className: ed.uv,
        children: [
            (0, a.jsx)(h.Y3C, { size: "xxs" }),
            (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eo.intl.string(eo.t.kAlUsy),
            }),
        ],
    });
function ex(e) {
    let { detectedGame: t, application: n, entries: i, trackAction: s } = e,
        o = l.useMemo(() => t?.genres.map(y.du).join(", "), [t]),
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
        x = (0, R.uJ)(t.iconHash)
            ? n?.getIconURL(160, k.QB ? "webp" : "png")
            : k.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: k.QB ? "webp" : "png" }),
        f = O.default.extractTimestamp(n.id),
        g = 7 >= c()().diff(c()(f), "days"),
        _ = i.some((e) => (0, b.CZ)(e) === m.m.GLOBAL),
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
                                children: (0, a.jsx)(Y.A, {
                                    game: t,
                                    application: n,
                                    className: ed.wm,
                                    size: Y.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(U.A, { applicationId: n.id, className: ed.Gg, trackAction: s }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(ed.nM, ed.Lc, ed.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(h.Heading, { variant: "heading-xl/bold", children: p }),
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
                                        (0, a.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        g &&
                                            (0, a.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: ed.Ad,
                                                children: eo.intl.string(eo.t.y2b7CA),
                                            }),
                                        _ &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(h.Text, {
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
function ef(e) {
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
        className: ed.V0,
        children: [
            (0, a.jsx)(q.A, { entries: l, viewId: o, officialGuildId: i?.guild?.id, onClose: c, source: u }),
            (0, a.jsx)(Q.A, { detectedGame: t, trackAction: d }),
            (0, a.jsx)(el.A, {
                applicationId: n.id,
                onClose: c,
                similarGames: r,
                similarGamesError: s,
                trackAction: d,
            }),
        ],
    });
}
function eh(e) {
    let { game: t, trackAction: n, closeModal: l } = e;
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
                  (0, a.jsx)(B.A, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsx)(ei.A, { trackAction: n }),
                  (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, closeModal: l, trackAction: n }),
              ],
          });
}
function eg(e) {
    let { game: t, trackAction: n, application: l } = e,
        i = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
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
                          (0, a.jsx)(J.Q, { game: t, application: l, isTwoColumn: !1 }),
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
                  (0, a.jsx)(B.A, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsx)(ei.A, { trackAction: n }),
                  (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, closeModal: r, trackAction: n }),
                  i && (0, a.jsx)(en.A, { detectedGame: t.supplementalData, trackAction: n }),
                  (0, a.jsx)(z.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function e_(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i, trackAction: r } = e;
    (0, v.A)({
        name: o.ImpressionNames.CLOUD_PLAY_CTA,
        type: o.ImpressionTypes.VIEW,
        properties: { location_stack: i },
    });
    let s = l.useCallback(() => {
        r(G.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, a.jsx)(f.m, {
        text: eo.intl.string(eo.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(h.Button, {
            icon: h.hpF,
            text: eo.intl.string(eo.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function ep(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        a = (0, E.h)(t),
        l = (0, _.A)({ application: a, analyticsLocations: n });
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
        } = e,
        d = l.useCallback(() => {
            c(), (0, S.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, A.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ep({ applicationId: o.id, analyticsLocations: u });
    return (0, a.jsxs)("div", {
        className: r()(ed.pz, ed.fi, ed.iH),
        children: [
            (0, a.jsxs)("div", {
                className: ed.NC,
                children: [
                    (0, a.jsx)(X.A, { invite: i, closeModal: d, trackAction: s }),
                    m &&
                        null != x &&
                        (0, a.jsx)(e_, { onClose: d, onCloudPlayClick: x, analyticsLocations: u, trackAction: s }),
                ],
            }),
            (0, a.jsx)(h.Heading, { variant: "heading-md/bold", children: eo.intl.string(eo.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: ed.V0,
                children: [
                    (0, a.jsx)(es.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(ee.A, { detectedGame: t, onInviteResolved: n, closeModal: d, trackAction: s }),
                    (0, a.jsx)($.A, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(et.A, { detectedGame: t }),
                    (0, a.jsx)(K.A, { application: o, trackAction: s }),
                    (0, a.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: eo.intl.format(eo.t.pch2Jw, { igdbLink: ec.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { game: t, trackAction: n, application: l } = e,
        { closeModal: i } = (0, H.c)(),
        { analyticsLocations: s } = (0, A.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: c, onCloudPlayClick: o } = ep({ applicationId: l.id, analyticsLocations: s });
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
                    (0, a.jsx)(e_, { onClose: i, onCloudPlayClick: o, analyticsLocations: s, trackAction: n }),
            }),
            (0, a.jsxs)("div", {
                className: ed.V0,
                children: [
                    (0, a.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)(Z.A, { trackAction: n }),
                    (0, a.jsx)(ee.o, { closeModal: i, trackAction: n }),
                    d && (0, a.jsx)(en.A, { detectedGame: t.supplementalData, trackAction: n }),
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
        m = (0, x.bG)([L.default], () => L.default.locale),
        f = l.useMemo(() => (0, G.u9)(), []),
        _ = (0, x.yK)([P.A], () => (P.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, A] = l.useState(null),
        v = (0, D.s)(t),
        [j, T] = l.useState(null),
        S = (0, E.h)(t),
        { data: k, refetch: y } = (0, N.k)(t),
        O = k?.supplementalData ?? null,
        R = O?.name ?? S?.name,
        w = (e, a) => {
            (0, G.Tn)({
                gameName: R ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: f,
                officialGuildId: j?.guild?.id,
                source: n,
            });
        };
    return ((0, g.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: f,
            applicationId: t,
            gameName: R ?? "",
            authorId: i,
            profileType: G.HV.FullProfile,
        }),
            (0, C.He)();
    }),
    (0, E.A)(_),
    l.useEffect(() => {
        m.startsWith("en") || O?.summaryLocalized != null || y();
    }, [t, O?.summaryLocalized, m, y]),
    l.useEffect(() => {
        (async () => {
            if (0 === _.length) {
                A(null);
                try {
                    await (0, M.N)(t);
                } catch (e) {
                    A(e);
                }
            }
        })();
    }, [t, _]),
    (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = v.map((t) => {
                let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, G.V_)({
            viewId: f,
            applicationId: t,
            gameName: R ?? "",
            playedFriendIds: v.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: _.filter(F.oS).slice(0, 5),
            officialGuildId: j?.guild?.id,
        });
    }),
    null == k || null == O || null == S)
        ? null
        : (0, a.jsx)(h.dWK, {
              transitionState: s,
              onClose: c,
              size: "xl",
              children: (0, a.jsx)("div", {
                  className: r()(u, ed.fn),
                  children: (0, a.jsxs)(h.HOs, {
                      orientation: "auto",
                      children: [
                          (0, a.jsx)(ex, { detectedGame: O, application: S, entries: v, trackAction: w }),
                          (0, a.jsx)(h.Fmo, {
                              children: (0, a.jsxs)("div", {
                                  className: r()(ed.Qs, ed.rb),
                                  children: [
                                      (0, a.jsx)(ef, {
                                          detectedGame: O,
                                          application: S,
                                          entries: v,
                                          officialGuildInvite: j,
                                          similarGames: _,
                                          similarGamesError: p,
                                          onClose: c,
                                          viewId: f,
                                          source: n,
                                          trackAction: w,
                                      }),
                                      (0, a.jsx)(eA, {
                                          detectedGame: O,
                                          onSetOfficialGuildInvite: T,
                                          officialGuildInvite: j,
                                          onClose: c,
                                          appContext: o,
                                          application: S,
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
function eE(e) {
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
        [_, p] = l.useState(null),
        { clientThemesClassName: A } = (0, I.Ay)(),
        v = (0, x.bG)([L.default], () => L.default.locale),
        T = l.useMemo(() => (0, G.u9)(), []),
        k = (0, E.h)(t),
        y = (0, D.s)(t),
        { data: O } = (0, N.k)(t),
        R = O?.supplementalData ?? null,
        M = R?.name ?? O?.name ?? k?.name ?? "",
        {
            hasAlreadyLinked: P,
            canStartAuthorization: w,
            fetched: F,
            startAuthorization: Y,
            connectionApp: U,
        } = (0, j.RD)(k),
        { invite: B, isMember: K } = (0, W.A)(R, p),
        { socialLayerStorefrontRecommendationsData: z } = (0, V.V)(k ?? null),
        X = (e, a) => {
            (0, G.Tn)({
                gameName: M,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: T,
                officialGuildId: _?.guild?.id,
                source: n,
            });
        };
    (0, g.Ay)(() => {
        (0, G.rw)({ source: n, viewId: T, applicationId: t, gameName: M, authorId: i, profileType: G.HV.FullProfile }),
            (0, C.He)();
    }),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = y.map((t) => {
                    let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, v);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, G.V_)({
                viewId: T,
                applicationId: t,
                gameName: M,
                playedFriendIds: y.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: _?.guild?.id,
            });
        });
    let Z = l.useCallback((e) => {
            f(e.contentRect.width >= 800);
        }, []),
        $ = (0, d.w)(Z, [], { fireOnMount: !0 }),
        Q = l.useCallback(() => {
            c(), (0, S.closeUserProfileModal)();
        }, [c]),
        q = l.useMemo(
            () => ({
                application: k,
                isTwoColumn: m,
                canStartAuthorization: w,
                hasAlreadyLinked: P,
                fetchedAuthorization: F,
                startAuthorization: Y,
                connectionApp: U,
                officialInvite: B,
                isMember: K,
                socialLayerStorefrontRecommendationsData: z,
                closeModal: Q,
            }),
            [k, m, w, P, F, Y, U, B, K, z, Q],
        ),
        ee = l.useCallback(() => {
            c(), (0, S.closeUserProfileModal)();
        }, [c]);
    return null == O || null == R || null == k
        ? null
        : (0, a.jsx)(h.dWK, {
              transitionState: s,
              onClose: c,
              size: "xxl",
              children: (0, a.jsx)(H.D.Provider, {
                  value: q,
                  children: (0, a.jsx)("div", {
                      className: r()(A, eu.kL),
                      ref: $,
                      children: (0, a.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(J.A, { game: O, application: k, onClose: c, trackAction: X }),
                              (0, a.jsx)(h.Fmo, {
                                  children: m
                                      ? (0, a.jsxs)("div", {
                                            className: eu.jC,
                                            children: [
                                                (0, a.jsx)(eh, { game: O, closeModal: ee, trackAction: X }),
                                                (0, a.jsx)(ev, {
                                                    game: O,
                                                    application: k,
                                                    appContext: o,
                                                    source: n,
                                                    trackExternalAction: u,
                                                    trackAction: X,
                                                }),
                                            ],
                                        })
                                      : (0, a.jsx)("div", {
                                            className: eu.b9,
                                            children: (0, a.jsx)(eg, { game: O, application: k, trackAction: X }),
                                        }),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
let eI = function (e) {
    return (0, w._)("GameProfileModal") ? (0, a.jsx)(eE, { ...e }) : (0, a.jsx)(ej, { ...e });
};
