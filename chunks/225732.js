n.d(t, { default: () => ek });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(110259),
    d = n(535185),
    u = n(792216),
    m = n(379834),
    h = n(311907),
    f = n(990078),
    _ = n(521489),
    g = n(825860),
    p = n(834730),
    x = n(534514),
    E = n(821609),
    A = n(414499),
    v = n(224640),
    I = n(573613),
    b = n(707554),
    j = n(599319),
    N = n(964486),
    C = n(359549),
    S = n(793574),
    y = n(688810),
    R = n(139286),
    L = n(362490),
    T = n(429913),
    k = n(590703),
    w = n(708197),
    M = n(583846),
    O = n(454908),
    G = n(928550),
    P = n(657331),
    D = n(773669),
    U = n(486020),
    V = n(541830),
    F = n(661191),
    W = n(240248),
    B = n(409626),
    H = n(880405),
    Y = n(422069),
    z = n(476464),
    K = n(205184),
    Z = n(939764),
    X = n(277089),
    J = n(611656),
    $ = n(459746),
    q = n(503364),
    Q = n(305080),
    ee = n(941568),
    et = n(814698),
    en = n(431040),
    el = n(976720),
    ea = n(313843),
    ei = n(286737),
    er = n(839671),
    es = n(94836),
    eo = n(392332),
    ec = n(639714),
    ed = n(310721),
    eu = n(922283),
    em = n(588260),
    eh = n(582942),
    ef = n(999450),
    e_ = n(285820),
    eg = n(771004),
    ep = n(424994),
    ex = n(985018),
    eE = n(141535),
    eA = n(952311);
let ev = () =>
    (0, l.jsxs)("div", {
        className: eE.uv,
        children: [
            (0, l.jsx)(g.Y, { size: "xxs" }),
            (0, l.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: ex.intl.string(ex.t.kAlUsy) }),
        ],
    });
function eI(e) {
    let { game: t, application: n, entries: i, trackAction: s } = e,
        c = a.useMemo(() => t?.genres.map(V.du).join(", "), [t]),
        [d] = a.useState(() => Math.random()),
        u = a.useMemo(() => {
            if (null == t) return "";
            if (null != t.bannerHash)
                return U.Ay.getGameAssetURL({ id: t.id, hash: t.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            let e = t.getArtworkURLs(),
                n = t.screenshotUrls ?? [];
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
        h = (0, W.uJ)(t.iconHash)
            ? n?.getIconURL(160, U.QB ? "webp" : "png")
            : U.Ay.getGameAssetURL({ id: t.id, hash: t.iconHash, size: 160, format: U.QB ? "webp" : "png" }),
        f = F.default.extractTimestamp(n.id),
        _ = 7 >= o()().diff(o()(f), "days"),
        g = i.some((e) => (0, M.CZ)(e) === m.m.GLOBAL),
        E = t.name ?? n?.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: eE.is, style: { backgroundImage: `url("${u}")` } }),
            (0, l.jsxs)("div", {
                className: r()(eE.Qs, eE.fi, eE.iH, eE.Se),
                children: [
                    (0, l.jsxs)("div", {
                        className: eE.xx,
                        children: [
                            (0, l.jsx)("div", {
                                className: eE.bb,
                                children: (0, l.jsx)($.A, {
                                    game: t,
                                    application: n,
                                    className: eE.wm,
                                    size: $.w.LARGE,
                                }),
                            }),
                            (0, l.jsx)(q.A, { applicationId: n.id, className: eE.Gg, trackAction: s }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: r()(eE.nM, eE.Lc, eE.Z3),
                        children: (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(x.D, { variant: "heading-xl/bold", children: E }),
                                (0, l.jsxs)("div", {
                                    className: r()(eE.nM, eE.Lc),
                                    children: [
                                        null != h &&
                                            (0, l.jsx)("img", {
                                                className: eE.Gt,
                                                src: h,
                                                height: 16,
                                                alt: ex.intl.formatToPlainString(ex.t["nh+jWk"], { game: E }),
                                            }),
                                        (0, l.jsx)(p.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        _ &&
                                            (0, l.jsx)(p.E, {
                                                variant: "eyebrow",
                                                className: eE.Ad,
                                                children: ex.intl.string(ex.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(p.E, { variant: "text-sm/medium", children: " \xb7 " }),
                                                    (0, l.jsx)(ev, {}),
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
function eb(e) {
    let {
        game: t,
        application: n,
        entries: a,
        officialGuildInvite: i,
        similarGames: r,
        similarGamesError: s,
        onClose: o,
        viewId: c,
        trackAction: d,
        source: u,
    } = e;
    return (0, l.jsxs)("div", {
        className: eE.V0,
        children: [
            (0, l.jsx)(eo.A, { entries: a, viewId: c, officialGuildId: i?.guild?.id, onClose: o, source: u }),
            (0, l.jsx)(es.A, { game: t, trackAction: d }),
            (0, l.jsx)(eh.A, {
                applicationId: n.id,
                onClose: o,
                similarGames: r,
                similarGamesError: s,
                trackAction: d,
            }),
        ],
    });
}
function ej(e) {
    let { game: t, trackAction: n, closeModal: a } = e;
    return (0, l.jsxs)("div", {
        className: eA.oC,
        children: [
            (0, l.jsxs)("div", {
                className: eA.lM,
                children: [
                    (0, l.jsx)(es.a, { game: t, trackAction: n }),
                    (0, l.jsx)(eg.A, { game: t, trackAction: n }),
                ],
            }),
            (0, l.jsx)(ee.A, { gameId: t.id, trackAction: n }),
            (0, l.jsx)(ef.A, { trackAction: n }),
            (0, l.jsx)(em.A, { game: t, closeModal: a, trackAction: n }),
        ],
    });
}
function eN(e) {
    let { game: t, trackAction: n, application: a, analyticsLocations: i } = e,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: s } = (0, Q.c)();
    return (0, l.jsxs)("div", {
        className: eE.V0,
        children: [
            (0, l.jsx)(es.a, { game: t, trackAction: n }),
            (0, l.jsxs)("div", {
                className: eA.gr,
                children: [
                    (0, l.jsx)(ea.QT, { game: t, application: a, isTwoColumn: !1 }),
                    (0, l.jsxs)("div", {
                        className: eA.E1,
                        children: [
                            (0, l.jsx)(e_.A, { game: t, trackAction: n }),
                            (0, l.jsx)(eg.A, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(ei.A, { analyticsLocations: i, trackAction: n }),
            (0, l.jsx)(ec.o, { closeModal: s, trackAction: n }),
            (0, l.jsx)(ee.A, { gameId: t.id, trackAction: n }),
            (0, l.jsx)(ef.A, { trackAction: n }),
            (0, l.jsx)(em.A, { game: t, closeModal: s, trackAction: n }),
            r && (0, l.jsx)(eu.A, { game: t, trackAction: n }),
            (0, l.jsx)(en.A, { application: a, game: t, trackAction: n }),
        ],
    });
}
function eC(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i, trackAction: r } = e;
    (0, R.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: i },
    });
    let s = a.useCallback(() => {
        r(B.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, l.jsx)(f.m, {
        text: ex.intl.string(ex.t.JVwWva),
        position: "top",
        children: (0, l.jsx)(E.$, {
            icon: A.h,
            text: ex.intl.string(ex.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function eS(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        l = (0, T.h)(t),
        a = (0, C.A)({ application: l, analyticsLocations: n });
    return { onCloudPlayClick: a, isCloudPlayButtonShown: !(0, G.L)(t) && null != a };
}
function ey(e) {
    let {
            game: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: i,
            trackAction: s,
            onClose: o,
            application: c,
            analyticsLocations: d,
        } = e,
        u = a.useCallback(() => {
            o(), (0, P.closeUserProfileModal)();
        }, [o]),
        { isCloudPlayButtonShown: m, onCloudPlayClick: h } = eS({ applicationId: c.id, analyticsLocations: d });
    return (0, l.jsxs)("div", {
        className: r()(eE.pz, eE.fi, eE.iH),
        children: [
            (0, l.jsxs)("div", {
                className: eE.NC,
                children: [
                    (0, l.jsx)(el.A, { invite: i, closeModal: u, trackAction: s }),
                    m &&
                        null != h &&
                        (0, l.jsx)(eC, { onClose: u, onCloudPlayClick: h, analyticsLocations: d, trackAction: s }),
                ],
            }),
            (0, l.jsx)(x.D, { variant: "heading-md/bold", children: ex.intl.string(ex.t.CI0vSJ) }),
            (0, l.jsxs)("div", {
                className: eE.V0,
                children: [
                    (0, l.jsx)(eg.h, { game: t, trackAction: s }),
                    (0, l.jsx)(ec.A, { game: t, onInviteResolved: n, closeModal: u, trackAction: s }),
                    (0, l.jsx)(er.A, { game: t, trackAction: s }),
                    (0, l.jsx)(ed.A, { game: t }),
                    (0, l.jsx)(et.A, { application: c, trackAction: s }),
                    (0, l.jsx)(p.E, {
                        variant: "text-xxs/normal",
                        children: ex.intl.format(ex.t.pch2Jw, { igdbLink: ep.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function eR(e) {
    let { game: t, trackAction: n, application: a, analyticsLocations: i } = e,
        { closeModal: s } = (0, Q.c)(),
        { isCloudPlayButtonShown: o, onCloudPlayClick: c } = eS({ applicationId: a.id, analyticsLocations: i }),
        { showsStoreLinks: d } = (0, e_.D)(t),
        m = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, l.jsxs)("div", {
        className: r()(eA.Pn, eE.fi, eE.iH, d ? eA.sV : eA.gF),
        children: [
            o && null != c
                ? (0, l.jsx)("div", {
                      className: eE.NC,
                      children: (0, l.jsx)(eC, {
                          onClose: s,
                          onCloudPlayClick: c,
                          analyticsLocations: i,
                          trackAction: n,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: eE.V0,
                children: [
                    (0, l.jsx)(e_.A, { game: t, trackAction: n }),
                    (0, l.jsx)(ei.A, { analyticsLocations: i, trackAction: n }),
                    (0, l.jsx)(ec.o, { closeModal: s, trackAction: n }),
                    m && (0, l.jsx)(eu.A, { game: t, trackAction: n }),
                    (0, l.jsx)(en.A, { application: a, game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function eL(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: o,
            appContext: c,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, k.Ay)(),
        m = (0, h.bG)([D.default], () => D.default.locale),
        { analyticsLocations: f } = (0, y.Ay)(S.A.GAME_PROFILE),
        _ = a.useMemo(() => (0, B.u9)(), []),
        g = (0, h.yK)([Y.A], () => (Y.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, x] = a.useState(null),
        E = (0, K.s)(t),
        [A, j] = a.useState(null),
        C = (0, T.h)(t),
        { data: R, refetch: L } = (0, O.I)(t),
        G = R?.name ?? C?.name,
        P = (e, l) => {
            (0, B.Tn)({
                gameName: G ?? "",
                applicationId: t,
                action: e,
                similarGameId: l,
                viewId: _,
                officialGuildId: A?.guild?.id,
                source: n,
            });
        };
    return ((0, N.Ay)(() => {
        (0, B.rw)({
            source: n,
            viewId: _,
            applicationId: t,
            gameName: G ?? "",
            authorId: i,
            profileType: B.HV.FullProfile,
        }),
            (0, w.He)();
    }),
    (0, T.A)(g),
    a.useEffect(() => {
        m.startsWith("en") || R?.summaryLocalized != null || L();
    }, [t, R?.summaryLocalized, m, L]),
    a.useEffect(() => {
        (async () => {
            if (0 === g.length) {
                x(null);
                try {
                    await (0, H.NP)(t);
                } catch (e) {
                    x(e);
                }
            }
        })();
    }, [t, g]),
    (0, N.Ay)(() => () => {
        let e = Date.now(),
            n = E.map((t) => {
                let n = (0, M.JM)(t) ? (0, M.W6)(t, e) : (0, M.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, B.V_)({
            viewId: _,
            applicationId: t,
            gameName: G ?? "",
            playedFriendIds: E.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: g.filter(J.oS).slice(0, 5),
            officialGuildId: A?.guild?.id,
        });
    }),
    null == R || null == C)
        ? null
        : (0, l.jsx)(y.f5, {
              value: f,
              children: (0, l.jsx)(v.d, {
                  transitionState: s,
                  onClose: o,
                  size: "xl",
                  children: (0, l.jsx)("div", {
                      className: r()(u, eE.fn),
                      children: (0, l.jsxs)(I.Ip, {
                          orientation: "auto",
                          children: [
                              (0, l.jsx)(eI, { game: R, application: C, entries: E, trackAction: P }),
                              (0, l.jsx)(b.F, {
                                  children: (0, l.jsxs)("div", {
                                      className: r()(eE.Qs, eE.rb),
                                      children: [
                                          (0, l.jsx)(eb, {
                                              game: R,
                                              application: C,
                                              entries: E,
                                              officialGuildInvite: A,
                                              similarGames: g,
                                              similarGamesError: p,
                                              onClose: o,
                                              viewId: _,
                                              source: n,
                                              trackAction: P,
                                          }),
                                          (0, l.jsx)(ey, {
                                              game: R,
                                              onSetOfficialGuildInvite: j,
                                              officialGuildInvite: A,
                                              onClose: o,
                                              appContext: c,
                                              application: C,
                                              source: n,
                                              trackExternalAction: d,
                                              trackAction: P,
                                              analyticsLocations: f,
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
function eT(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: o,
            appContext: c,
            trackExternalAction: u,
            initialScrollOffset: m,
        } = e,
        [f, g] = a.useState(!0),
        [p, x] = a.useState(null),
        { clientThemesClassName: E } = (0, k.Ay)(),
        A = (0, h.bG)([D.default], () => D.default.locale),
        v = a.useMemo(() => (0, B.u9)(), []),
        { analyticsLocations: I } = (0, y.Ay)(S.A.GAME_PROFILE),
        C = (0, T.h)(t),
        R = (0, K.s)(t),
        { data: G } = (0, O.I)(t),
        U = G?.name ?? C?.name ?? "",
        {
            hasAlreadyLinked: V,
            canStartAuthorization: F,
            fetched: W,
            startAuthorization: H,
            connectionApp: Y,
        } = (0, L.RD)(C),
        { invite: z, isMember: J } = (0, X.A)(G, x),
        { socialLayerStorefrontRecommendationsData: $ } = (0, Z.V)(C ?? null),
        q = (e, l) => {
            (0, B.Tn)({
                gameName: U,
                applicationId: t,
                action: e,
                similarGameId: l,
                viewId: v,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, N.Ay)(() => {
        (0, B.rw)({ source: n, viewId: v, applicationId: t, gameName: U, authorId: i, profileType: B.HV.FullProfile }),
            (0, w.He)();
    }),
        (0, N.Ay)(() => () => {
            let e = Date.now(),
                n = R.map((t) => {
                    let n = (0, M.JM)(t) ? (0, M.W6)(t, e) : (0, M.aJ)(t, A);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, B.V_)({
                viewId: v,
                applicationId: t,
                gameName: U,
                playedFriendIds: R.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let ee = a.useCallback((e) => {
            g(e.contentRect.width >= 800);
        }, []),
        et = (0, d.w)(ee, [], { fireOnMount: !0 }),
        en = a.useCallback(() => {
            o(), (0, P.closeUserProfileModal)();
        }, [o]),
        el = a.useRef(null),
        ei = a.useCallback(() => el.current?.getScrollerNode()?.scrollTop ?? 0, []),
        er = a.useMemo(
            () => ({
                application: C,
                isTwoColumn: f,
                canStartAuthorization: F,
                hasAlreadyLinked: V,
                fetchedAuthorization: W,
                startAuthorization: H,
                connectionApp: Y,
                officialInvite: z,
                isMember: J,
                socialLayerStorefrontRecommendationsData: $,
                closeModal: en,
                getScrollOffset: ei,
            }),
            [C, f, F, V, W, H, Y, z, J, $, en, ei],
        ),
        es = a.useCallback(() => {
            o(), (0, P.closeUserProfileModal)();
        }, [o]),
        [eo, ec] = a.useState(!1),
        [ed, eu] = a.useState(150),
        em = a.useRef(null);
    a.useEffect(() => {
        null != m && m > 0 && el.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let eh = a.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != em.current) {
                let e = Math.max(0, 1 - t / 150);
                em.current.style.opacity = String(e);
            }
            ec(t >= ed);
        },
        [ed],
    );
    return null == G || null == C
        ? null
        : (0, l.jsx)(y.f5, {
              value: I,
              children: (0, l.jsx)(_.N, {
                  transitionState: s,
                  onClose: o,
                  children: (0, l.jsx)(Q.D.Provider, {
                      value: er,
                      children: (0, l.jsxs)("div", {
                          className: r()(E, eA.kL),
                          ref: et,
                          children: [
                              (0, l.jsx)(ea.j5, { game: G, ref: em }),
                              (0, l.jsx)(ea._R, { game: G, application: C, show: eo, onClose: es, trackAction: q }),
                              (0, l.jsx)(ea.Iv, { show: eo }),
                              (0, l.jsxs)(j.Ch, {
                                  ref: el,
                                  onScroll: eh,
                                  children: [
                                      (0, l.jsx)(ea.Ay, {
                                          game: G,
                                          application: C,
                                          onSetCompactBarScrollThreshold: eu,
                                          showCompactBar: eo,
                                      }),
                                      (0, l.jsx)(b.F, {
                                          children: f
                                              ? (0, l.jsxs)("div", {
                                                    className: eA.jC,
                                                    children: [
                                                        (0, l.jsx)(ej, { game: G, closeModal: es, trackAction: q }),
                                                        (0, l.jsx)(eR, {
                                                            game: G,
                                                            application: C,
                                                            appContext: c,
                                                            source: n,
                                                            trackExternalAction: u,
                                                            trackAction: q,
                                                            analyticsLocations: I,
                                                        }),
                                                    ],
                                                })
                                              : (0, l.jsx)("div", {
                                                    className: eA.b9,
                                                    children: (0, l.jsx)(eN, {
                                                        game: G,
                                                        application: C,
                                                        trackAction: q,
                                                        analyticsLocations: I,
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
let ek = function (e) {
    let t = (0, z._)("GameProfileModal");
    return e.forceV2 || t ? (0, l.jsx)(eT, { ...e }) : (0, l.jsx)(eL, { ...e });
};
