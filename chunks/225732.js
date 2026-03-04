n.d(t, { default: () => ef });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(989349),
    c = n.n(r),
    o = n(110259),
    d = n(535185),
    u = n(792216),
    m = n(379834),
    x = n(311907),
    g = n(990078),
    h = n(397927),
    f = n(964486),
    j = n(359549),
    p = n(793574),
    I = n(688810),
    v = n(139286),
    E = n(429913),
    A = n(590703),
    _ = n(708197),
    N = n(583846),
    T = n(885151),
    S = n(928550),
    C = n(657331),
    b = n(773669),
    G = n(486020),
    O = n(541830),
    L = n(661191),
    R = n(240248),
    M = n(409626),
    w = n(880405),
    k = n(422069),
    y = n(476464),
    P = n(205184),
    D = n(611656),
    V = n(459746),
    Y = n(503364),
    U = n(305080),
    W = n(976720),
    H = n(839671),
    F = n(94836),
    B = n(392332),
    z = n(639714),
    X = n(936636),
    J = n(310721),
    K = n(922283),
    Z = n(582942),
    $ = n(285820),
    Q = n(771004),
    q = n(424994),
    ee = n(985018),
    et = n(851822),
    en = n(146258);
let ei = () =>
    (0, i.jsxs)("div", {
        className: et.uv,
        children: [
            (0, i.jsx)(h.Y3C, { size: "xxs" }),
            (0, i.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ee.intl.string(ee.t.kAlUsy),
            }),
        ],
    });
function el(e) {
    let { detectedGame: t, application: n, entries: a } = e,
        r = l.useMemo(() => t?.genres.map(O.du).join(", "), [t]),
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
            ? n?.getIconURL(160, G.QB ? "webp" : "png")
            : G.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: G.QB ? "webp" : "png" }),
        x = L.default.extractTimestamp(n.id),
        g = 7 >= c()().diff(c()(x), "days"),
        f = a.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        j = t.name ?? n?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: et.is, style: { backgroundImage: `url("${d}")` } }),
            (0, i.jsxs)("div", {
                className: s()(et.Qs, et.fi, et.iH, et.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: et.xx,
                        children: [
                            (0, i.jsx)("div", {
                                className: et.bb,
                                children: (0, i.jsx)(V.A, {
                                    game: t,
                                    application: n,
                                    className: et.wm,
                                    size: V.w.LARGE,
                                }),
                            }),
                            (0, i.jsx)(Y.A, { applicationId: n.id, className: et.Gg }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: s()(et.nM, et.Lc, et.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(h.Heading, { variant: "heading-xl/bold", children: j }),
                                (0, i.jsxs)("div", {
                                    className: s()(et.nM, et.Lc),
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("img", {
                                                className: et.Gt,
                                                src: u,
                                                height: 16,
                                                alt: ee.intl.formatToPlainString(ee.t["nh+jWk"], { game: j }),
                                            }),
                                        (0, i.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        g &&
                                            (0, i.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: et.Ad,
                                                children: ee.intl.string(ee.t.y2b7CA),
                                            }),
                                        f &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, i.jsx)(ei, {}),
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
function ea(e) {
    let { detectedGame: t, application: n, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? en.n8 : en.FS,
        children: (0, i.jsx)(V.A, { game: t, application: n, className: et.wm, size: V.w.LARGE }),
    });
}
function es(e) {
    let { detectedGame: t, application: n, entries: a, isTwoColumn: r } = e,
        o = l.useMemo(() => t?.genres.map(O.du).join(", "), [t]),
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
            ? n?.getIconURL(160, G.QB ? "webp" : "png")
            : G.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: G.QB ? "webp" : "png" }),
        g = L.default.extractTimestamp(n.id),
        f = 7 >= c()().diff(c()(g), "days"),
        j = a.some((e) => (0, N.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: et.is, style: { backgroundImage: `url("${u}")` } }),
            (0, i.jsxs)("div", {
                className: s()(et.Qs, et.fi, et.iH, et.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: et.xx,
                        children: [
                            r ? (0, i.jsx)(ea, { detectedGame: t, application: n, isTwoColumn: !0 }) : null,
                            (0, i.jsx)(Y.N, { applicationId: n.id, className: et.Gg }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: s()(et.nM, et.Lc, et.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(h.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, i.jsxs)("div", {
                                    className: s()(et.nM, et.Lc),
                                    children: [
                                        null != x &&
                                            (0, i.jsx)("img", {
                                                className: et.Gt,
                                                src: x,
                                                height: 16,
                                                alt: ee.intl.formatToPlainString(ee.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, i.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        f &&
                                            (0, i.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: et.Ad,
                                                children: ee.intl.string(ee.t.y2b7CA),
                                            }),
                                        j &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, i.jsx)(ei, {}),
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
function er(e) {
    let {
        detectedGame: t,
        application: n,
        entries: l,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: r,
        onClose: c,
        viewId: o,
        trackAction: d,
        source: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: et.V0,
        children: [
            (0, i.jsx)(B.A, { entries: l, viewId: o, officialGuildId: a?.guild?.id, onClose: c, source: u }),
            (0, i.jsx)(F.A, { detectedGame: t, trackAction: d }),
            (0, i.jsx)(Z.A, { applicationId: n.id, onClose: c, trackAction: d, similarGames: s, similarGamesError: r }),
        ],
    });
}
function ec(e) {
    let { detectedGame: t, trackAction: n } = e;
    return (0, i.jsx)("div", { className: et.V0, children: (0, i.jsx)(F.a, { detectedGame: t, trackAction: n }) });
}
function eo(e) {
    let { detectedGame: t, onSetOfficialGuildInvite: n, trackAction: a, onClose: s, application: r } = e,
        c = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        o = l.useCallback(() => {
            s(), (0, C.closeUserProfileModal)();
        }, [s]);
    return (0, i.jsxs)("div", {
        className: et.V0,
        children: [
            (0, i.jsx)(F.a, { detectedGame: t, trackAction: a }),
            (0, i.jsxs)("div", {
                className: en.gr,
                children: [
                    (0, i.jsx)(ea, { detectedGame: t, application: r, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: en.E1,
                        children: [
                            (0, i.jsx)($.A, { detectedGame: t }),
                            (0, i.jsx)(Q.A, { detectedGame: t, trackAction: a }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(z.o, { detectedGame: t, trackClick: a, onInviteResolved: n, closeModal: o }),
            c && (0, i.jsx)(K.A, { detectedGame: t }),
        ],
    });
}
function ed(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, v.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, i.jsx)(g.m, {
            text: ee.intl.string(ee.t.JVwWva),
            position: "top",
            children: (0, i.jsx)(h.Button, {
                icon: h.hpF,
                text: ee.intl.string(ee.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function eu(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        i = (0, E.h)(t),
        l = (0, j.A)({ application: i, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, S.L)(t) && null != l };
}
function em(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: a,
            trackAction: r,
            onClose: c,
            applicationId: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, C.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, I.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = eu({ applicationId: o, analyticsLocations: u });
    return (0, i.jsxs)("div", {
        className: s()(et.pz, et.fi, et.iH),
        children: [
            (0, i.jsxs)("div", {
                className: et.NC,
                children: [
                    (0, i.jsx)(W.A, { invite: a, trackClick: r, closeModal: d }),
                    m && null != x && (0, i.jsx)(ed, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, i.jsx)(h.Heading, { variant: "heading-md/bold", children: ee.intl.string(ee.t.CI0vSJ) }),
            (0, i.jsxs)("div", {
                className: et.V0,
                children: [
                    (0, i.jsx)(Q.h, { detectedGame: t, trackAction: r }),
                    (0, i.jsx)(z.A, { detectedGame: t, trackClick: r, onInviteResolved: n, closeModal: d }),
                    (0, i.jsx)(H.A, { detectedGame: t, trackClick: r }),
                    (0, i.jsx)(J.A, { detectedGame: t }),
                    (0, i.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: ee.intl.format(ee.t.pch2Jw, { igdbLink: q.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ex(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: a,
            trackAction: r,
            onClose: c,
            applicationId: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, C.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: m } = (0, I.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: x, onCloudPlayClick: g } = eu({ applicationId: o, analyticsLocations: m }),
        f = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: s()(en.Pn, et.fi, et.iH),
        children: [
            (0, i.jsxs)("div", {
                className: et.NC,
                children: [
                    (0, i.jsx)(W.Y, { invite: a, trackClick: r, closeModal: d }),
                    x && null != g && (0, i.jsx)(ed, { onClose: d, onCloudPlayClick: g, analyticsLocations: m }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: et.V0,
                children: [
                    (0, i.jsx)($.A, { detectedGame: t }),
                    (0, i.jsx)(Q.A, { detectedGame: t, trackAction: r }),
                    f && (0, i.jsx)(K.A, { detectedGame: t }),
                    (0, i.jsx)(z.o, { detectedGame: t, trackClick: r, onInviteResolved: n, closeModal: d }),
                    (0, i.jsx)(H.R, { detectedGame: t, trackClick: r }),
                    (0, i.jsx)(J.v, { detectedGame: t }),
                    (0, i.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: ee.intl.format(ee.t.pch2Jw, { igdbLink: q.s8 }),
                    }),
                    (0, i.jsx)(X.A, { detectedGame: t }),
                ],
            }),
        ],
    });
}
function eg(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: a,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, A.Ay)(),
        m = (0, x.bG)([b.default], () => b.default.locale),
        g = l.useMemo(() => (0, M.u9)(), []),
        j = (0, x.yK)([k.A], () => (k.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, I] = l.useState(null),
        v = (0, P.s)(t),
        [S, C] = l.useState(null),
        G = (0, E.h)(t),
        { data: O, refetch: L } = (0, T.k)(t),
        R = O?.supplementalData ?? null,
        y = R?.name ?? G?.name,
        V = (e, i) => {
            (0, M.Tn)({
                gameName: y ?? "",
                applicationId: t,
                action: e,
                similarGameId: i,
                viewId: g,
                officialGuildId: S?.guild?.id,
                source: n,
            });
        };
    return ((0, f.Ay)(() => {
        (0, M.rw)({
            source: n,
            viewId: g,
            applicationId: t,
            gameName: y ?? "",
            authorId: a,
            profileType: M.HV.FullProfile,
        }),
            (0, _.He)();
    }),
    (0, E.A)(j),
    l.useEffect(() => {
        m.startsWith("en") || R?.summaryLocalized != null || L();
    }, [t, R?.summaryLocalized, m, L]),
    l.useEffect(() => {
        (async () => {
            if (0 === j.length) {
                I(null);
                try {
                    await (0, w.N)(t);
                } catch (e) {
                    I(e);
                }
            }
        })();
    }, [t, j]),
    (0, f.Ay)(() => () => {
        let e = Date.now(),
            n = v.map((t) => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, M.V_)({
            viewId: g,
            applicationId: t,
            gameName: y ?? "",
            playedFriendIds: v.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: j.filter(D.oS).slice(0, 5),
            officialGuildId: S?.guild?.id,
        });
    }),
    null == R || null == G)
        ? null
        : (0, i.jsx)(h.dWK, {
              transitionState: r,
              onClose: c,
              size: "xl",
              children: (0, i.jsx)("div", {
                  className: s()(u, et.fn),
                  children: (0, i.jsxs)(h.HOs, {
                      orientation: "auto",
                      children: [
                          (0, i.jsx)(el, {
                              detectedGame: R,
                              application: G,
                              entries: v,
                              trackAction: V,
                              isTwoColumn: !0,
                          }),
                          (0, i.jsx)(h.Fmo, {
                              children: (0, i.jsxs)("div", {
                                  className: s()(et.Qs, et.rb),
                                  children: [
                                      (0, i.jsx)(er, {
                                          detectedGame: R,
                                          application: G,
                                          entries: v,
                                          officialGuildInvite: S,
                                          similarGames: j,
                                          similarGamesError: p,
                                          onClose: c,
                                          viewId: g,
                                          trackAction: V,
                                          source: n,
                                      }),
                                      (0, i.jsx)(em, {
                                          detectedGame: R,
                                          onSetOfficialGuildInvite: C,
                                          officialGuildInvite: S,
                                          trackAction: V,
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
function eh(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: a,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: u,
        } = e,
        { clientThemesClassName: m } = (0, A.Ay)(),
        g = (0, x.bG)([b.default], () => b.default.locale),
        j = l.useMemo(() => (0, M.u9)(), []),
        p = (0, P.s)(t),
        [I, v] = l.useState(null),
        S = (0, E.h)(t),
        { data: C, refetch: G } = (0, T.k)(t),
        O = C?.supplementalData ?? null,
        L = O?.name ?? S?.name,
        R = (e, i) => {
            (0, M.Tn)({
                gameName: L ?? "",
                applicationId: t,
                action: e,
                similarGameId: i,
                viewId: j,
                officialGuildId: I?.guild?.id,
                source: n,
            });
        };
    (0, f.Ay)(() => {
        (0, M.rw)({
            source: n,
            viewId: j,
            applicationId: t,
            gameName: L ?? "",
            authorId: a,
            profileType: M.HV.FullProfile,
        }),
            (0, _.He)();
    }),
        l.useEffect(() => {
            g.startsWith("en") || O?.summaryLocalized != null || G();
        }, [t, O?.summaryLocalized, g, G]),
        (0, f.Ay)(() => () => {
            let e = Date.now(),
                n = p.map((t) => {
                    let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, g);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, M.V_)({
                viewId: j,
                applicationId: t,
                gameName: L ?? "",
                playedFriendIds: p.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: I?.guild?.id,
            });
        });
    let [w, k] = l.useState(!0),
        y = l.useCallback((e) => {
            e.contentRect.width < 800 ? k(!1) : k(!0);
        }, []),
        D = (0, d.w)(y, [], { fireOnMount: !0 });
    return null == O || null == S
        ? null
        : (0, i.jsx)(h.dWK, {
              transitionState: r,
              onClose: c,
              size: "xxl",
              children: (0, i.jsx)(U.D.Provider, {
                  value: { isTwoColumn: w },
                  children: (0, i.jsx)("div", {
                      className: s()(m, w ? en.bo : en.Rm),
                      ref: D,
                      children: (0, i.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, i.jsx)(es, {
                                  detectedGame: O,
                                  application: S,
                                  entries: p,
                                  trackAction: R,
                                  isTwoColumn: w,
                              }),
                              (0, i.jsx)(h.Fmo, {
                                  children: w
                                      ? (0, i.jsxs)("div", {
                                            className: en.jC,
                                            children: [
                                                (0, i.jsx)(ec, { detectedGame: O, trackAction: R }),
                                                (0, i.jsx)(ex, {
                                                    detectedGame: O,
                                                    onSetOfficialGuildInvite: v,
                                                    officialGuildInvite: I,
                                                    trackAction: R,
                                                    onClose: c,
                                                    appContext: o,
                                                    applicationId: t,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, i.jsx)("div", {
                                            className: en.b9,
                                            children: (0, i.jsx)(eo, {
                                                detectedGame: O,
                                                trackAction: R,
                                                application: S,
                                                onSetOfficialGuildInvite: v,
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
let ef = function (e) {
    let { enabled: t } = y.z.useConfig({ location: "GameProfileModal" });
    return t ? (0, i.jsx)(eh, { ...e }) : (0, i.jsx)(eg, { ...e });
};
