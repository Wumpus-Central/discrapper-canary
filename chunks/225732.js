n.d(t, { default: () => ek });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    d = n(110259),
    c = n(535185),
    u = n(792216),
    m = n(379834),
    _ = n(311907),
    h = n(990078),
    f = n(521489),
    g = n(825860),
    p = n(834730),
    x = n(534514),
    b = n(821609),
    A = n(414499),
    v = n(224640),
    E = n(573613),
    I = n(707554),
    C = n(599319),
    N = n(964486),
    j = n(359549),
    y = n(793574),
    S = n(688810),
    R = n(139286),
    T = n(362490),
    L = n(429913),
    k = n(590703),
    M = n(708197),
    w = n(583846),
    O = n(454908),
    P = n(928550),
    G = n(657331),
    D = n(773669),
    U = n(486020),
    V = n(541830),
    F = n(661191),
    B = n(240248),
    W = n(409626),
    H = n(880405),
    Y = n(422069),
    z = n(476464),
    Z = n(205184),
    K = n(939764),
    X = n(277089),
    J = n(611656),
    q = n(459746),
    $ = n(503364),
    Q = n(305080),
    ee = n(941568),
    et = n(814698),
    en = n(431040),
    ea = n(976720),
    el = n(313843),
    ei = n(286737),
    er = n(839671),
    es = n(94836),
    eo = n(392332),
    ed = n(639714),
    ec = n(310721),
    eu = n(922283),
    em = n(588260),
    e_ = n(582942),
    eh = n(999450),
    ef = n(285820),
    eg = n(771004),
    ep = n(424994),
    ex = n(985018),
    eb = n(141535),
    eA = n(952311);
let ev = () =>
    (0, a.jsxs)("div", {
        className: eb.uv,
        children: [
            (0, a.jsx)(g.Y, { size: "xxs" }),
            (0, a.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: ex.intl.string(ex.t.kAlUsy) }),
        ],
    });
function eE(e) {
    let { game: t, application: n, entries: i, trackAction: s } = e,
        d = l.useMemo(() => t?.genres.map(V.du).join(", "), [t]),
        [c] = l.useState(() => Math.random()),
        u = l.useMemo(() => {
            if (null == t) return "";
            if (null != t.bannerHash)
                return U.Ay.getGameAssetURL({ id: t.id, hash: t.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            let e = t.getArtworkURLs(),
                n = t.screenshotUrls ?? [];
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
        _ = (0, B.uJ)(t.iconHash)
            ? n?.getIconURL(160, U.QB ? "webp" : "png")
            : U.Ay.getGameAssetURL({ id: t.id, hash: t.iconHash, size: 160, format: U.QB ? "webp" : "png" }),
        h = F.default.extractTimestamp(n.id),
        f = 7 >= o()().diff(o()(h), "days"),
        g = i.some((e) => (0, w.CZ)(e) === m.m.GLOBAL),
        b = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: eb.is, style: { backgroundImage: `url("${u}")` } }),
            (0, a.jsxs)("div", {
                className: r()(eb.Qs, eb.fi, eb.iH, eb.Se),
                children: [
                    (0, a.jsxs)("div", {
                        className: eb.xx,
                        children: [
                            (0, a.jsx)("div", {
                                className: eb.bb,
                                children: (0, a.jsx)(q.A, {
                                    game: t,
                                    application: n,
                                    className: eb.wm,
                                    size: q.w.LARGE,
                                }),
                            }),
                            (0, a.jsx)($.A, { applicationId: n.id, className: eb.Gg, trackAction: s }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: r()(eb.nM, eb.Lc, eb.Z3),
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(x.D, { variant: "heading-xl/bold", children: b }),
                                (0, a.jsxs)("div", {
                                    className: r()(eb.nM, eb.Lc),
                                    children: [
                                        null != _ &&
                                            (0, a.jsx)("img", {
                                                className: eb.Gt,
                                                src: _,
                                                height: 16,
                                                alt: ex.intl.formatToPlainString(ex.t["nh+jWk"], { game: b }),
                                            }),
                                        (0, a.jsx)(p.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: d,
                                        }),
                                        f &&
                                            (0, a.jsx)(p.E, {
                                                variant: "eyebrow",
                                                className: eb.Ad,
                                                children: ex.intl.string(ex.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(p.E, { variant: "text-sm/medium", children: " \xb7 " }),
                                                    (0, a.jsx)(ev, {}),
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
function eI(e) {
    let {
        game: t,
        application: n,
        entries: l,
        officialGuildInvite: i,
        similarGames: r,
        similarGamesError: s,
        onClose: o,
        viewId: d,
        trackAction: c,
        source: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: eb.V0,
        children: [
            (0, a.jsx)(eo.A, { entries: l, viewId: d, officialGuildId: i?.guild?.id, onClose: o, source: u }),
            (0, a.jsx)(es.A, { game: t, trackAction: c }),
            (0, a.jsx)(e_.A, {
                applicationId: n.id,
                onClose: o,
                similarGames: r,
                similarGamesError: s,
                trackAction: c,
            }),
        ],
    });
}
function eC(e) {
    let { game: t, trackAction: n, closeModal: l } = e;
    return (0, a.jsxs)("div", {
        className: eA.oC,
        children: [
            (0, a.jsxs)("div", {
                className: eA.lM,
                children: [
                    (0, a.jsx)(es.a, { game: t, trackAction: n }),
                    (0, a.jsx)(eg.A, { game: t, trackAction: n }),
                ],
            }),
            (0, a.jsx)(ee.A, { gameId: t.id, trackAction: n }),
            (0, a.jsx)(eh.A, { trackAction: n }),
            (0, a.jsx)(em.A, { game: t, closeModal: l, trackAction: n }),
        ],
    });
}
function eN(e) {
    let { game: t, trackAction: n, application: l, analyticsLocations: i } = e,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        { closeModal: s } = (0, Q.c)();
    return (0, a.jsxs)("div", {
        className: eb.V0,
        children: [
            (0, a.jsx)(es.a, { game: t, trackAction: n }),
            (0, a.jsxs)("div", {
                className: eA.gr,
                children: [
                    (0, a.jsx)(el.QT, { game: t, application: l, isTwoColumn: !1 }),
                    (0, a.jsxs)("div", {
                        className: eA.E1,
                        children: [
                            (0, a.jsx)(ef.A, { game: t, trackAction: n }),
                            (0, a.jsx)(eg.A, { game: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(ei.A, { analyticsLocations: i, trackAction: n }),
            (0, a.jsx)(ed.o, { closeModal: s, trackAction: n }),
            (0, a.jsx)(ee.A, { gameId: t.id, trackAction: n }),
            (0, a.jsx)(eh.A, { trackAction: n }),
            (0, a.jsx)(em.A, { game: t, closeModal: s, trackAction: n }),
            r && (0, a.jsx)(eu.A, { game: t, trackAction: n }),
            (0, a.jsx)(en.A, { application: l, game: t, trackAction: n }),
        ],
    });
}
function ej(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: i, trackAction: r } = e;
    (0, R.A)({
        name: d.ImpressionNames.CLOUD_PLAY_CTA,
        type: d.ImpressionTypes.VIEW,
        properties: { location_stack: i },
    });
    let s = l.useCallback(() => {
        r(W.Ws.CloudPlay), t(), n();
    }, [t, n, r]);
    return (0, a.jsx)(h.m, {
        text: ex.intl.string(ex.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(b.$, {
            icon: A.h,
            text: ex.intl.string(ex.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0,
        }),
    });
}
function ey(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        a = (0, L.h)(t),
        l = (0, j.A)({ application: a, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, P.L)(t) && null != l };
}
function eS(e) {
    let {
            game: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: i,
            trackAction: s,
            onClose: o,
            application: d,
            analyticsLocations: c,
        } = e,
        u = l.useCallback(() => {
            o(), (0, G.closeUserProfileModal)();
        }, [o]),
        { isCloudPlayButtonShown: m, onCloudPlayClick: _ } = ey({ applicationId: d.id, analyticsLocations: c });
    return (0, a.jsxs)("div", {
        className: r()(eb.pz, eb.fi, eb.iH),
        children: [
            (0, a.jsxs)("div", {
                className: eb.NC,
                children: [
                    (0, a.jsx)(ea.A, { invite: i, closeModal: u, trackAction: s }),
                    m &&
                        null != _ &&
                        (0, a.jsx)(ej, { onClose: u, onCloudPlayClick: _, analyticsLocations: c, trackAction: s }),
                ],
            }),
            (0, a.jsx)(x.D, { variant: "heading-md/bold", children: ex.intl.string(ex.t.CI0vSJ) }),
            (0, a.jsxs)("div", {
                className: eb.V0,
                children: [
                    (0, a.jsx)(eg.h, { game: t, trackAction: s }),
                    (0, a.jsx)(ed.A, { game: t, onInviteResolved: n, closeModal: u, trackAction: s }),
                    (0, a.jsx)(er.A, { game: t, trackAction: s }),
                    (0, a.jsx)(ec.A, { game: t }),
                    (0, a.jsx)(et.A, { application: d, trackAction: s }),
                    (0, a.jsx)(p.E, {
                        variant: "text-xxs/normal",
                        children: ex.intl.format(ex.t.pch2Jw, { igdbLink: ep.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function eR(e) {
    let { game: t, trackAction: n, application: l, analyticsLocations: i } = e,
        { closeModal: s } = (0, Q.c)(),
        { isCloudPlayButtonShown: o, onCloudPlayClick: d } = ey({ applicationId: l.id, analyticsLocations: i }),
        { showsStoreLinks: c } = (0, ef.D)(t),
        m = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(eA.Pn, eb.fi, eb.iH, c ? eA.sV : eA.gF),
        children: [
            o && null != d
                ? (0, a.jsx)("div", {
                      className: eb.NC,
                      children: (0, a.jsx)(ej, {
                          onClose: s,
                          onCloudPlayClick: d,
                          analyticsLocations: i,
                          trackAction: n,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eb.V0,
                children: [
                    (0, a.jsx)(ef.A, { game: t, trackAction: n }),
                    (0, a.jsx)(ei.A, { analyticsLocations: i, trackAction: n }),
                    (0, a.jsx)(ed.o, { closeModal: s, trackAction: n }),
                    m && (0, a.jsx)(eu.A, { game: t, trackAction: n }),
                    (0, a.jsx)(en.A, { application: l, game: t, trackAction: n }),
                ],
            }),
        ],
    });
}
function eT(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: o,
            appContext: d,
            trackExternalAction: c,
        } = e,
        { clientThemesClassName: u } = (0, k.Ay)(),
        m = (0, _.bG)([D.default], () => D.default.locale),
        { analyticsLocations: h } = (0, S.Ay)(y.A.GAME_PROFILE),
        f = l.useMemo(() => (0, W.u9)(), []),
        g = (0, _.yK)([Y.A], () => (Y.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, x] = l.useState(null),
        b = (0, Z.s)(t),
        [A, C] = l.useState(null),
        j = (0, L.h)(t),
        { data: R, refetch: T } = (0, O.I)(t),
        P = R?.name ?? j?.name,
        G = (e, a) => {
            (0, W.Tn)({
                gameName: P ?? "",
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: f,
                officialGuildId: A?.guild?.id,
                source: n,
            });
        };
    return ((0, N.Ay)(() => {
        (0, W.rw)({
            source: n,
            viewId: f,
            applicationId: t,
            gameName: P ?? "",
            authorId: i,
            profileType: W.HV.FullProfile,
        }),
            (0, M.He)();
    }),
    (0, L.A)(g),
    l.useEffect(() => {
        m.startsWith("en") || R?.summaryLocalized != null || T();
    }, [t, R?.summaryLocalized, m, T]),
    l.useEffect(() => {
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
            n = b.map((t) => {
                let n = (0, w.JM)(t) ? (0, w.W6)(t, e) : (0, w.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, W.V_)({
            viewId: f,
            applicationId: t,
            gameName: P ?? "",
            playedFriendIds: b.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: g.filter(J.oS).slice(0, 5),
            officialGuildId: A?.guild?.id,
        });
    }),
    null == R || null == j)
        ? null
        : (0, a.jsx)(S.f5, {
              value: h,
              children: (0, a.jsx)(v.d, {
                  transitionState: s,
                  onClose: o,
                  size: "xl",
                  children: (0, a.jsx)("div", {
                      className: r()(u, eb.fn),
                      children: (0, a.jsxs)(E.Ip, {
                          orientation: "auto",
                          children: [
                              (0, a.jsx)(eE, { game: R, application: j, entries: b, trackAction: G }),
                              (0, a.jsx)(I.F, {
                                  children: (0, a.jsxs)("div", {
                                      className: r()(eb.Qs, eb.rb),
                                      children: [
                                          (0, a.jsx)(eI, {
                                              game: R,
                                              application: j,
                                              entries: b,
                                              officialGuildInvite: A,
                                              similarGames: g,
                                              similarGamesError: p,
                                              onClose: o,
                                              viewId: f,
                                              source: n,
                                              trackAction: G,
                                          }),
                                          (0, a.jsx)(eS, {
                                              game: R,
                                              onSetOfficialGuildInvite: C,
                                              officialGuildInvite: A,
                                              onClose: o,
                                              appContext: d,
                                              application: j,
                                              source: n,
                                              trackExternalAction: c,
                                              trackAction: G,
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
function eL(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: i,
            transitionState: s,
            onClose: o,
            appContext: d,
            trackExternalAction: u,
            initialScrollOffset: m,
        } = e,
        [h, g] = l.useState(!0),
        [p, x] = l.useState(null),
        { clientThemesClassName: b } = (0, k.Ay)(),
        A = (0, _.bG)([D.default], () => D.default.locale),
        v = l.useMemo(() => (0, W.u9)(), []),
        { analyticsLocations: E } = (0, S.Ay)(y.A.GAME_PROFILE),
        j = (0, L.h)(t),
        R = (0, Z.s)(t),
        { data: P } = (0, O.I)(t),
        U = P?.name ?? j?.name ?? "",
        {
            hasAlreadyLinked: V,
            canStartAuthorization: F,
            fetched: B,
            startAuthorization: H,
            connectionApp: Y,
        } = (0, T.RD)(j),
        { invite: z, isMember: J } = (0, X.A)(P, x),
        { socialLayerStorefrontRecommendationsData: q } = (0, K.V)(j ?? null),
        $ = (e, a) => {
            (0, W.Tn)({
                gameName: U,
                applicationId: t,
                action: e,
                similarGameId: a,
                viewId: v,
                officialGuildId: p?.guild?.id,
                source: n,
            });
        };
    (0, N.Ay)(() => {
        (0, W.rw)({ source: n, viewId: v, applicationId: t, gameName: U, authorId: i, profileType: W.HV.FullProfile }),
            (0, M.He)();
    }),
        (0, N.Ay)(() => () => {
            let e = Date.now(),
                n = R.map((t) => {
                    let n = (0, w.JM)(t) ? (0, w.W6)(t, e) : (0, w.aJ)(t, A);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, W.V_)({
                viewId: v,
                applicationId: t,
                gameName: U,
                playedFriendIds: R.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: p?.guild?.id,
            });
        });
    let ee = l.useCallback((e) => {
            g(e.contentRect.width >= 800);
        }, []),
        et = (0, c.w)(ee, [], { fireOnMount: !0 }),
        en = l.useCallback(() => {
            o(), (0, G.closeUserProfileModal)();
        }, [o]),
        ea = l.useRef(null),
        ei = l.useCallback(() => ea.current?.getScrollerNode()?.scrollTop ?? 0, []),
        er = l.useMemo(
            () => ({
                application: j,
                isTwoColumn: h,
                canStartAuthorization: F,
                hasAlreadyLinked: V,
                fetchedAuthorization: B,
                startAuthorization: H,
                connectionApp: Y,
                officialInvite: z,
                isMember: J,
                socialLayerStorefrontRecommendationsData: q,
                closeModal: en,
                getScrollOffset: ei,
            }),
            [j, h, F, V, B, H, Y, z, J, q, en, ei],
        ),
        es = l.useCallback(() => {
            o(), (0, G.closeUserProfileModal)();
        }, [o]),
        [eo, ed] = l.useState(!1),
        [ec, eu] = l.useState(150),
        em = l.useRef(null);
    l.useEffect(() => {
        null != m && m > 0 && ea.current?.getScrollerNode()?.scrollTo({ top: m, behavior: "instant" });
    }, []);
    let e_ = l.useCallback(
        (e) => {
            let t = e.currentTarget.scrollTop;
            if (null != em.current) {
                let e = Math.max(0, 1 - t / 150);
                em.current.style.opacity = String(e);
            }
            ed(t >= ec);
        },
        [ec],
    );
    return null == P || null == j
        ? null
        : (0, a.jsx)(S.f5, {
              value: E,
              children: (0, a.jsx)(f.N, {
                  transitionState: s,
                  onClose: o,
                  children: (0, a.jsx)(Q.D.Provider, {
                      value: er,
                      children: (0, a.jsxs)("div", {
                          className: r()(b, eA.kL),
                          ref: et,
                          children: [
                              (0, a.jsx)(el.j5, { game: P, ref: em }),
                              (0, a.jsx)(el._R, { game: P, application: j, show: eo, onClose: es, trackAction: $ }),
                              (0, a.jsx)(el.Iv, { show: eo }),
                              (0, a.jsxs)(C.Ch, {
                                  ref: ea,
                                  onScroll: e_,
                                  children: [
                                      (0, a.jsx)(el.Ay, {
                                          game: P,
                                          application: j,
                                          onSetCompactBarScrollThreshold: eu,
                                          showCompactBar: eo,
                                      }),
                                      (0, a.jsx)(I.F, {
                                          children: h
                                              ? (0, a.jsxs)("div", {
                                                    className: eA.jC,
                                                    children: [
                                                        (0, a.jsx)(eC, { game: P, closeModal: es, trackAction: $ }),
                                                        (0, a.jsx)(eR, {
                                                            game: P,
                                                            application: j,
                                                            appContext: d,
                                                            source: n,
                                                            trackExternalAction: u,
                                                            trackAction: $,
                                                            analyticsLocations: E,
                                                        }),
                                                    ],
                                                })
                                              : (0, a.jsx)("div", {
                                                    className: eA.b9,
                                                    children: (0, a.jsx)(eN, {
                                                        game: P,
                                                        application: j,
                                                        trackAction: $,
                                                        analyticsLocations: E,
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
    return e.forceV2 || t ? (0, a.jsx)(eL, { ...e }) : (0, a.jsx)(eT, { ...e });
};
