"use strict";
n.d(t, { default: () => eI });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
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
    I = n(139286),
    j = n(362490),
    A = n(429913),
    E = n(590703),
    b = n(708197),
    N = n(583846),
    C = n(885151),
    S = n(928550),
    T = n(657331),
    L = n(773669),
    k = n(486020),
    G = n(541830),
    y = n(661191),
    R = n(240248),
    M = n(409626),
    w = n(880405),
    O = n(422069),
    P = n(476464),
    D = n(205184),
    V = n(939764),
    W = n(277089),
    Y = n(611656),
    U = n(459746),
    B = n(503364),
    H = n(305080),
    F = n(976720),
    z = n(839671),
    X = n(94836),
    J = n(392332),
    K = n(639714),
    Z = n(936636),
    $ = n(310721),
    Q = n(922283),
    q = n(582942),
    ee = n(999450),
    et = n(285820),
    en = n(771004),
    ei = n(424994),
    el = n(985018),
    ea = n(851822),
    er = n(146258);
let es = () =>
    (0, i.jsxs)("div", {
        className: ea.uv,
        children: [
            (0, i.jsx)(f.Y3C, { size: "xxs" }),
            (0, i.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: el.intl.string(el.t.kAlUsy),
            }),
        ],
    });
function ec(e) {
    let { detectedGame: t, application: n, entries: a } = e,
        s = l.useMemo(() => t?.genres.map(G.du).join(", "), [t]),
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
        x = y.default.extractTimestamp(n.id),
        h = 7 >= c()().diff(c()(x), "days"),
        g = a.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        _ = t.name ?? n?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: ea.is, style: { backgroundImage: `url("${d}")` } }),
            (0, i.jsxs)("div", {
                className: r()(ea.Qs, ea.fi, ea.iH, ea.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: ea.xx,
                        children: [
                            (0, i.jsx)("div", {
                                className: ea.bb,
                                children: (0, i.jsx)(U.A, {
                                    game: t,
                                    application: n,
                                    className: ea.wm,
                                    size: U.w.LARGE,
                                }),
                            }),
                            (0, i.jsx)(B.A, { applicationId: n.id, className: ea.Gg }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: r()(ea.nM, ea.Lc, ea.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(f.Heading, { variant: "heading-xl/bold", children: _ }),
                                (0, i.jsxs)("div", {
                                    className: r()(ea.nM, ea.Lc),
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("img", {
                                                className: ea.Gt,
                                                src: u,
                                                height: 16,
                                                alt: el.intl.formatToPlainString(el.t["nh+jWk"], { game: _ }),
                                            }),
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: s,
                                        }),
                                        h &&
                                            (0, i.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: ea.Ad,
                                                children: el.intl.string(el.t.y2b7CA),
                                            }),
                                        g &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, i.jsx)(es, {}),
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
function eo(e) {
    let { detectedGame: t, application: n, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? er.n8 : er.FS,
        children: (0, i.jsx)(U.A, { game: t, application: n, className: ea.wm, size: U.w.LARGE }),
    });
}
function ed(e) {
    let { detectedGame: t, application: n, entries: a } = e,
        { isTwoColumn: s } = (0, H.c)(),
        o = l.useMemo(() => t?.genres.map(G.du).join(", "), [t]),
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
        h = y.default.extractTimestamp(n.id),
        g = 7 >= c()().diff(c()(h), "days"),
        _ = a.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: er.is, style: { backgroundImage: `url("${u}")` } }),
            (0, i.jsxs)("div", {
                className: r()(er.Qs, er.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: ea.xx,
                        children: [
                            s ? (0, i.jsx)(eo, { detectedGame: t, application: n, isTwoColumn: !0 }) : null,
                            (0, i.jsx)(B.N, { applicationId: n.id, className: ea.Gg }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: r()(ea.nM, ea.Lc, ea.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(f.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, i.jsxs)("div", {
                                    className: r()(ea.nM, ea.Lc),
                                    children: [
                                        null != x &&
                                            (0, i.jsx)("img", {
                                                className: ea.Gt,
                                                src: x,
                                                height: 16,
                                                alt: el.intl.formatToPlainString(el.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        g &&
                                            (0, i.jsx)(f.Text, {
                                                variant: "eyebrow",
                                                className: ea.Ad,
                                                children: el.intl.string(el.t.y2b7CA),
                                            }),
                                        _ &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(f.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, i.jsx)(es, {}),
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
    let {
        detectedGame: t,
        application: n,
        entries: l,
        officialGuildInvite: a,
        similarGames: r,
        similarGamesError: s,
        onClose: c,
        viewId: o,
        trackAction: d,
        source: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: ea.V0,
        children: [
            (0, i.jsx)(J.A, { entries: l, viewId: o, officialGuildId: a?.guild?.id, onClose: c, source: u }),
            (0, i.jsx)(X.A, { detectedGame: t, trackAction: d }),
            (0, i.jsx)(q.A, { applicationId: n.id, onClose: c, trackAction: d, similarGames: r, similarGamesError: s }),
        ],
    });
}
function em(e) {
    let { detectedGame: t, trackAction: n } = e;
    return (0, i.jsxs)("div", {
        className: er.oC,
        children: [
            (0, i.jsxs)("div", {
                className: er.lM,
                children: [
                    (0, i.jsx)(X.a, { detectedGame: t, trackAction: n }),
                    (0, i.jsx)(en.A, { detectedGame: t, trackAction: n }),
                ],
            }),
            (0, i.jsx)(ee.A, {}),
        ],
    });
}
function ex(e) {
    let { detectedGame: t, trackAction: n, onClose: a, application: r } = e,
        s = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        c = l.useCallback(() => {
            a(), (0, T.closeUserProfileModal)();
        }, [a]);
    return (0, i.jsxs)("div", {
        className: ea.V0,
        children: [
            (0, i.jsx)(X.a, { detectedGame: t, trackAction: n }),
            (0, i.jsxs)("div", {
                className: er.gr,
                children: [
                    (0, i.jsx)(eo, { detectedGame: t, application: r, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: er.E1,
                        children: [
                            (0, i.jsx)(et.A, { detectedGame: t }),
                            (0, i.jsx)(en.A, { detectedGame: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(K.o, { trackClick: n, closeModal: c }),
            (0, i.jsx)(ee.A, {}),
            s && (0, i.jsx)(Q.A, { detectedGame: t }),
        ],
    });
}
function eh(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, I.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, i.jsx)(h.m, {
            text: el.intl.string(el.t.JVwWva),
            position: "top",
            children: (0, i.jsx)(f.Button, {
                icon: f.hpF,
                text: el.intl.string(el.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function ef(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        i = (0, A.h)(t),
        l = (0, _.A)({ application: i, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, S.L)(t) && null != l };
}
function eg(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: a,
            trackAction: s,
            onClose: c,
            applicationId: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, v.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ef({ applicationId: o, analyticsLocations: u });
    return (0, i.jsxs)("div", {
        className: r()(ea.pz, ea.fi, ea.iH),
        children: [
            (0, i.jsxs)("div", {
                className: ea.NC,
                children: [
                    (0, i.jsx)(F.A, { invite: a, trackClick: s, closeModal: d }),
                    m && null != x && (0, i.jsx)(eh, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, i.jsx)(f.Heading, { variant: "heading-md/bold", children: el.intl.string(el.t.CI0vSJ) }),
            (0, i.jsxs)("div", {
                className: ea.V0,
                children: [
                    (0, i.jsx)(en.h, { detectedGame: t, trackAction: s }),
                    (0, i.jsx)(K.A, { detectedGame: t, trackClick: s, onInviteResolved: n, closeModal: d }),
                    (0, i.jsx)(z.A, { detectedGame: t, trackClick: s }),
                    (0, i.jsx)($.A, { detectedGame: t }),
                    (0, i.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: el.intl.format(el.t.pch2Jw, { igdbLink: ei.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { detectedGame: t, trackAction: n, onClose: a, applicationId: s } = e,
        c = l.useCallback(() => {
            a(), (0, T.closeUserProfileModal)();
        }, [a]),
        { analyticsLocations: o } = (0, v.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: d, onCloudPlayClick: m } = ef({ applicationId: s, analyticsLocations: o }),
        x = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: r()(er.Pn, ea.fi, ea.iH),
        children: [
            (0, i.jsx)("div", {
                className: ea.NC,
                children: d && null != m && (0, i.jsx)(eh, { onClose: c, onCloudPlayClick: m, analyticsLocations: o }),
            }),
            (0, i.jsxs)("div", {
                className: ea.V0,
                children: [
                    (0, i.jsx)(et.A, { detectedGame: t }),
                    (0, i.jsx)(K.o, { trackClick: n, closeModal: c }),
                    x && (0, i.jsx)(Q.A, { detectedGame: t }),
                    (0, i.jsx)(z.R, { detectedGame: t, trackClick: n }),
                    (0, i.jsx)($.v, { detectedGame: t }),
                    (0, i.jsx)(f.Text, {
                        variant: "text-xxs/normal",
                        children: el.intl.format(el.t.pch2Jw, { igdbLink: ei.s8 }),
                    }),
                    (0, i.jsx)(Z.A, { detectedGame: t }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: a,
            transitionState: s,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, E.Ay)(),
        m = (0, x.bG)([L.default], () => L.default.locale),
        h = l.useMemo(() => (0, M.u9)(), []),
        _ = (0, x.yK)([O.A], () => (O.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, v] = l.useState(null),
        I = (0, D.s)(t),
        [j, S] = l.useState(null),
        T = (0, A.h)(t),
        { data: k, refetch: G } = (0, C.k)(t),
        y = k?.supplementalData ?? null,
        R = y?.name ?? T?.name,
        P = (e, i) => {
            (0, M.Tn)({
                gameName: R ?? "",
                applicationId: t,
                action: e,
                similarGameId: i,
                viewId: h,
                officialGuildId: j?.guild?.id,
                source: n,
            });
        };
    return ((0, g.Ay)(() => {
        (0, M.rw)({
            source: n,
            viewId: h,
            applicationId: t,
            gameName: R ?? "",
            authorId: a,
            profileType: M.HV.FullProfile,
        }),
            (0, b.He)();
    }),
    (0, A.A)(_),
    l.useEffect(() => {
        m.startsWith("en") || y?.summaryLocalized != null || G();
    }, [t, y?.summaryLocalized, m, G]),
    l.useEffect(() => {
        (async () => {
            if (0 === _.length) {
                v(null);
                try {
                    await (0, w.N)(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, _]),
    (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = I.map((t) => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, M.V_)({
            viewId: h,
            applicationId: t,
            gameName: R ?? "",
            playedFriendIds: I.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: _.filter(Y.oS).slice(0, 5),
            officialGuildId: j?.guild?.id,
        });
    }),
    null == y || null == T)
        ? null
        : (0, i.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xl",
              children: (0, i.jsx)("div", {
                  className: r()(u, ea.fn),
                  children: (0, i.jsxs)(f.HOs, {
                      orientation: "auto",
                      children: [
                          (0, i.jsx)(ec, { detectedGame: y, application: T, entries: I, trackAction: P }),
                          (0, i.jsx)(f.Fmo, {
                              children: (0, i.jsxs)("div", {
                                  className: r()(ea.Qs, ea.rb),
                                  children: [
                                      (0, i.jsx)(eu, {
                                          detectedGame: y,
                                          application: T,
                                          entries: I,
                                          officialGuildInvite: j,
                                          similarGames: _,
                                          similarGamesError: p,
                                          onClose: c,
                                          viewId: h,
                                          trackAction: P,
                                          source: n,
                                      }),
                                      (0, i.jsx)(eg, {
                                          detectedGame: y,
                                          onSetOfficialGuildInvite: S,
                                          officialGuildInvite: j,
                                          trackAction: P,
                                          onClose: c,
                                          appContext: o,
                                          applicationId: t,
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
function ev(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: a,
            transitionState: s,
            onClose: c,
            appContext: o,
            trackExternalAction: u,
        } = e,
        [m, h] = l.useState(!0),
        [_, p] = l.useState(null),
        { clientThemesClassName: v } = (0, E.Ay)(),
        I = (0, x.bG)([L.default], () => L.default.locale),
        S = l.useMemo(() => (0, M.u9)(), []),
        T = (0, A.h)(t),
        k = (0, D.s)(t),
        { data: G, refetch: y } = (0, C.k)(t),
        R = G?.supplementalData ?? null,
        w = R?.name ?? T?.name ?? "",
        { hasAlreadyLinked: O, canStartAuthorization: P } = (0, j.RD)(T),
        { invite: Y, isMember: U } = (0, W.A)(R, p),
        { socialLayerStorefrontRecommendationsData: B } = (0, V.V)(T ?? null),
        F = (e, i) => {
            (0, M.Tn)({
                gameName: w,
                applicationId: t,
                action: e,
                similarGameId: i,
                viewId: S,
                officialGuildId: _?.guild?.id,
                source: n,
            });
        };
    (0, g.Ay)(() => {
        (0, M.rw)({ source: n, viewId: S, applicationId: t, gameName: w, authorId: a, profileType: M.HV.FullProfile }),
            (0, b.He)();
    }),
        l.useEffect(() => {
            I.startsWith("en") || R?.summaryLocalized != null || y();
        }, [t, R?.summaryLocalized, I, y]),
        (0, g.Ay)(() => () => {
            let e = Date.now(),
                n = k.map((t) => {
                    let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, I);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, M.V_)({
                viewId: S,
                applicationId: t,
                gameName: w,
                playedFriendIds: k.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: _?.guild?.id,
            });
        });
    let z = l.useCallback((e) => {
            h(e.contentRect.width >= 800);
        }, []),
        X = (0, d.w)(z, [], { fireOnMount: !0 }),
        J = l.useMemo(
            () => ({
                application: T,
                isTwoColumn: m,
                canStartAuthorization: P,
                hasAlreadyLinked: O,
                officialInvite: Y,
                isMember: U,
                socialLayerStorefrontRecommendationsData: B,
            }),
            [m, P, O, Y, U, B, T],
        );
    return null == R || null == T
        ? null
        : (0, i.jsx)(f.dWK, {
              transitionState: s,
              onClose: c,
              size: "xxl",
              children: (0, i.jsx)(H.D.Provider, {
                  value: J,
                  children: (0, i.jsx)("div", {
                      className: r()(v, er.kL),
                      ref: X,
                      children: (0, i.jsxs)(f.HOs, {
                          orientation: "auto",
                          children: [
                              (0, i.jsx)(ed, { detectedGame: R, application: T, entries: k, trackAction: F }),
                              (0, i.jsx)(f.Fmo, {
                                  children: m
                                      ? (0, i.jsxs)("div", {
                                            className: er.jC,
                                            children: [
                                                (0, i.jsx)(em, { detectedGame: R, trackAction: F }),
                                                (0, i.jsx)(e_, {
                                                    detectedGame: R,
                                                    trackAction: F,
                                                    onClose: c,
                                                    appContext: o,
                                                    applicationId: t,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, i.jsx)("div", {
                                            className: er.b9,
                                            children: (0, i.jsx)(ex, {
                                                detectedGame: R,
                                                trackAction: F,
                                                application: T,
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
    let { enabled: t } = P.z.useConfig({ location: "GameProfileModal" });
    return t ? (0, i.jsx)(ev, { ...e }) : (0, i.jsx)(ep, { ...e });
};
