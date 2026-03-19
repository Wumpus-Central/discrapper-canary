n.d(t, { default: () => eb });
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
    _ = n(990078),
    g = n(397927),
    f = n(964486),
    p = n(359549),
    h = n(793574),
    v = n(688810),
    A = n(139286),
    j = n(362490),
    I = n(429913),
    b = n(590703),
    C = n(708197),
    E = n(583846),
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
    w = n(422069),
    P = n(476464),
    D = n(205184),
    V = n(939764),
    Y = n(277089),
    U = n(611656),
    W = n(459746),
    F = n(503364),
    B = n(305080),
    H = n(941568),
    z = n(814698),
    K = n(431040),
    X = n(976720),
    J = n(313843),
    Z = n(286737),
    $ = n(839671),
    q = n(94836),
    Q = n(392332),
    ee = n(639714),
    et = n(310721),
    en = n(922283),
    ea = n(588260),
    el = n(582942),
    ei = n(999450),
    er = n(285820),
    es = n(771004),
    eo = n(424994),
    ec = n(985018),
    ed = n(728528),
    eu = n(936284);
let em = () =>
    (0, a.jsxs)("div", {
        className: ed.uv,
        children: [
            (0, a.jsx)(g.Y3C, { size: "xxs" }),
            (0, a.jsx)(g.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ec.intl.string(ec.t.kAlUsy),
            }),
        ],
    });
function ex(e) {
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
        u = (0, R.uJ)(t.iconHash)
            ? n?.getIconURL(160, k.QB ? "webp" : "png")
            : k.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: k.QB ? "webp" : "png" }),
        x = O.default.extractTimestamp(n.id),
        _ = 7 >= o()().diff(o()(x), "days"),
        f = i.some((e) => (0, E.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: ed.is, style: { backgroundImage: `url("${d}")` } }),
            (0, a.jsxs)("div", {
                className: r()(ed.Qs, ed.fi, ed.iH, ed.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: ed.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: ed.bb,
                                children: (0, a.jsx)(W.A, {
                                    game: t,
                                    application: n,
                                    className: ed.wm,
                                    size: W.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)(F.A, { applicationId: n.id, className: ed.Gg }),
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
                                        null != u &&
                                            (0, a.jsx)("img", {
                                                className: ed.Gt,
                                                src: u,
                                                height: 16,
                                                alt: ec.intl.formatToPlainString(ec.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, a.jsx)(g.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        _ &&
                                            (0, a.jsx)(g.Text, {
                                                variant: "eyebrow",
                                                className: ed.Ad,
                                                children: ec.intl.string(ec.t.y2b7CA),
                                            }),
                                        f &&
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
function e_(e) {
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
        className: ed.V0,
        children: [
            (0, a.jsx)(Q.A, { entries: l, viewId: c, officialGuildId: i?.guild?.id, onClose: o, source: u }),
            (0, a.jsx)(q.A, { detectedGame: t, trackAction: d }),
            (0, a.jsx)(el.A, {
                applicationId: n.id,
                onClose: o,
                trackAction: d,
                similarGames: r,
                similarGamesError: s,
            }),
        ],
    });
}
function eg(e) {
    let { game: t, trackAction: n, closeModal: l } = e;
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: eu.oC,
              children: [
                  (0, a.jsxs)("div", {
                      className: eu.lM,
                      children: [
                          (0, a.jsx)(q.a, { detectedGame: t.supplementalData, trackAction: n }),
                          (0, a.jsx)(es.A, { detectedGame: t.supplementalData, trackAction: n }),
                      ],
                  }),
                  (0, a.jsx)(H.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(ei.A, {}),
                  (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, closeModal: l, trackAction: n }),
              ],
          });
}
function ef(e) {
    let { game: t, trackAction: n, application: l } = e,
        i = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: r } = (0, B.c)();
    return null == t.supplementalData
        ? null
        : (0, a.jsxs)("div", {
              className: ed.V0,
              children: [
                  (0, a.jsx)(q.a, { detectedGame: t.supplementalData, trackAction: n }),
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
                  (0, a.jsx)(ee.o, { trackClick: n, closeModal: r }),
                  (0, a.jsx)(H.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(ei.A, {}),
                  (0, a.jsx)(ea.A, { detectedGame: t.supplementalData, closeModal: r, trackAction: n }),
                  i && (0, a.jsx)(en.A, { detectedGame: t.supplementalData }),
                  (0, a.jsx)(K.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
              ],
          });
}
function ep(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, A.A)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, a.jsx)(_.m, {
            text: ec.intl.string(ec.t.JVwWva),
            position: "top",
            children: (0, a.jsx)(g.Button, {
                icon: g.hpF,
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
function eh(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        a = (0, I.h)(t),
        l = (0, p.A)({ application: a, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, T.L)(t) && null != l };
}
function ev(e) {
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
        { analyticsLocations: u } = (0, v.Ay)(h.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = eh({ applicationId: c.id, analyticsLocations: u });
    return (0, a.jsxs)("div", {
        className: r()(ed.pz, ed.fi, ed.iH),
        children: [
            (0, a.jsxs)("div", {
                className: ed.NC,
                children: [
                    (0, a.jsx)(X.A, { invite: i, trackClick: s, closeModal: d }),
                    m && null != x && (0, a.jsx)(ep, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, a.jsx)(g.Heading, { variant: "heading-md/bold", children: ec.intl.string(ec.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: ed.V0,
                children: [
                    (0, a.jsx)(es.h, { detectedGame: t, trackAction: s }),
                    (0, a.jsx)(ee.A, { detectedGame: t, trackClick: s, onInviteResolved: n, closeModal: d }),
                    (0, a.jsx)($.A, { detectedGame: t, trackClick: s }),
                    (0, a.jsx)(et.A, { detectedGame: t }),
                    (0, a.jsx)(z.A, { application: c, trackAction: s }),
                    (0, a.jsx)(g.Text, {
                        variant: "text-xxs/normal",
                        children: ec.intl.format(ec.t.pch2Jw, { igdbLink: eo.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let { game: t, trackAction: n, application: l } = e,
        { closeModal: i } = (0, B.c)(),
        { analyticsLocations: s } = (0, v.Ay)(h.A.GAME_PROFILE),
        { isCloudPlayButtonShown: o, onCloudPlayClick: c } = eh({ applicationId: l.id, analyticsLocations: s });
    if (null == t.supplementalData) return null;
    let d = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(eu.Pn, ed.fi, ed.iH),
        children: [
            (0, a.jsx)("div", {
                className: ed.NC,
                children: o && null != c && (0, a.jsx)(ep, { onClose: i, onCloudPlayClick: c, analyticsLocations: s }),
            }),
            (0, a.jsxs)("div", {
                className: ed.V0,
                children: [
                    (0, a.jsx)(er.A, { detectedGame: t.supplementalData, trackAction: n }),
                    (0, a.jsx)(Z.A, { trackAction: n }),
                    (0, a.jsx)(ee.o, { trackClick: n, closeModal: i }),
                    d && (0, a.jsx)(en.A, { detectedGame: t.supplementalData }),
                    (0, a.jsx)(K.A, { application: l, detectedGame: t.supplementalData, trackAction: n }),
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
        { clientThemesClassName: u } = (0, b.Ay)(),
        m = (0, x.bG)([L.default], () => L.default.locale),
        _ = l.useMemo(() => (0, G.u9)(), []),
        p = (0, x.yK)([w.A], () => (w.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [h, v] = l.useState(null),
        A = (0, D.s)(t),
        [j, T] = l.useState(null),
        S = (0, I.h)(t),
        { data: k, refetch: y } = (0, N.k)(t),
        O = k?.supplementalData ?? null,
        R = O?.name ?? S?.name,
        P = (e, a) => {
            (0, G.Tn)({
                gameName: R ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: _,
                officialGuildId: j?.guild?.id,
                source: n,
            });
        };
    return ((0, f.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: _,
            applicationId: t,
            gameName: R ?? "",
            authorId: i,
            profileType: G.HV.FullProfile,
        }),
            (0, C.He)();
    }),
    (0, I.A)(p),
    l.useEffect(() => {
        m.startsWith("en") || O?.summaryLocalized != null || y();
    }, [t, O?.summaryLocalized, m, y]),
    l.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                v(null);
                try {
                    await (0, M.N)(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, p]),
    (0, f.Ay)(() => () => {
        let e = Date.now(),
            n = A.map((t) => {
                let n = (0, E.JM)(t) ? (0, E.W6)(t, e) : (0, E.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, G.V_)({
            viewId: _,
            applicationId: t,
            gameName: R ?? "",
            playedFriendIds: A.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: p.filter(U.oS).slice(0, 5),
            officialGuildId: j?.guild?.id,
        });
    }),
    null == k || null == O || null == S)
        ? null
        : (0, a.jsx)(g.dWK, {
              transitionState: s,
              onClose: o,
              size: "xl",
              children: (0, a.jsx)("div", {
                  className: r()(u, ed.fn),
                  children: (0, a.jsxs)(g.HOs, {
                      orientation: "auto",
                      children: [
                          (0, a.jsx)(ex, { detectedGame: O, application: S, entries: A, trackAction: P }),
                          (0, a.jsx)(g.Fmo, {
                              children: (0, a.jsxs)("div", {
                                  className: r()(ed.Qs, ed.rb),
                                  children: [
                                      (0, a.jsx)(e_, {
                                          detectedGame: O,
                                          application: S,
                                          entries: A,
                                          officialGuildInvite: j,
                                          similarGames: p,
                                          similarGamesError: h,
                                          onClose: o,
                                          viewId: _,
                                          trackAction: P,
                                          source: n,
                                      }),
                                      (0, a.jsx)(ev, {
                                          detectedGame: O,
                                          onSetOfficialGuildInvite: T,
                                          officialGuildInvite: j,
                                          trackAction: P,
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
function eI(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: o,
            appContext: c,
            trackExternalAction: u,
        } = e,
        [m, _] = l.useState(!0),
        [p, h] = l.useState(null),
        { clientThemesClassName: v } = (0, b.Ay)(),
        A = (0, x.bG)([L.default], () => L.default.locale),
        T = l.useMemo(() => (0, G.u9)(), []),
        k = (0, I.h)(t),
        y = (0, D.s)(t),
        { data: O } = (0, N.k)(t),
        R = O?.supplementalData ?? null,
        M = R?.name ?? O?.name ?? k?.name ?? "",
        {
            hasAlreadyLinked: w,
            canStartAuthorization: P,
            fetched: U,
            startAuthorization: W,
            connectionApp: F,
        } = (0, j.RD)(k),
        { invite: H, isMember: z } = (0, Y.A)(R, h),
        { socialLayerStorefrontRecommendationsData: K } = (0, V.V)(k ?? null),
        X = (e, a) => {
            (0, G.Tn)({
                gameName: M,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: T,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, f.Ay)(() => {
        (0, G.rw)({ source: n, viewId: T, applicationId: t, gameName: M, authorId: i, profileType: G.HV.FullProfile }),
            (0, C.He)();
    }),
        (0, f.Ay)(() => () => {
            let e = Date.now(),
                n = y.map((t) => {
                    let n = (0, E.JM)(t) ? (0, E.W6)(t, e) : (0, E.aJ)(t, A);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, G.V_)({
                viewId: T,
                applicationId: t,
                gameName: M,
                playedFriendIds: y.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let Z = l.useCallback((e) => {
            _(e.contentRect.width >= 800);
        }, []),
        $ = (0, d.w)(Z, [], { fireOnMount: !0 }),
        q = l.useCallback(() => {
            o(), (0, S.closeUserProfileModal)();
        }, [o]),
        Q = l.useMemo(
            () => ({
                application: k,
                isTwoColumn: m,
                canStartAuthorization: P,
                hasAlreadyLinked: w,
                fetchedAuthorization: U,
                startAuthorization: W,
                connectionApp: F,
                officialInvite: H,
                isMember: z,
                socialLayerStorefrontRecommendationsData: K,
                closeModal: q,
            }),
            [k, m, P, w, U, W, F, H, z, K, q],
        ),
        ee = l.useCallback(() => {
            o(), (0, S.closeUserProfileModal)();
        }, [o]);
    return null == O || null == R || null == k
        ? null
        : (0, a.jsx)(g.dWK, {
              transitionState: s,
              onClose: o,
              size: "xxl",
              children: (0, a.jsx)(B.D.Provider, {
                  value: Q,
                  children: (0, a.jsx)("div", {
                      className: r()(v, eu.kL),
                      ref: $,
                      children: (0, a.jsxs)(g.HOs, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(J.A, { game: O, application: k, entries: y, onClose: o }),
                              (0, a.jsx)(g.Fmo, {
                                  children: m
                                      ? (0, a.jsxs)("div", {
                                            className: eu.jC,
                                            children: [
                                                (0, a.jsx)(eg, { game: O, trackAction: X, closeModal: ee }),
                                                (0, a.jsx)(eA, {
                                                    game: O,
                                                    application: k,
                                                    trackAction: X,
                                                    appContext: c,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, a.jsx)("div", {
                                            className: eu.b9,
                                            children: (0, a.jsx)(ef, { game: O, trackAction: X, application: k }),
                                        }),
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
let eb = function (e) {
    return (0, P._)("GameProfileModal") ? (0, a.jsx)(eI, { ...e }) : (0, a.jsx)(ej, { ...e });
};
