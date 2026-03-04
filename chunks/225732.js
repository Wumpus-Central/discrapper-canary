i.d(t, { default: () => ej });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(989349),
    c = i.n(r),
    o = i(110259),
    d = i(535185),
    u = i(792216),
    m = i(379834),
    x = i(311907),
    g = i(990078),
    h = i(397927),
    f = i(544420),
    j = i(964486),
    p = i(359549),
    A = i(793574),
    v = i(688810),
    E = i(139286),
    I = i(429913),
    _ = i(590703),
    N = i(708197),
    T = i(583846),
    C = i(524799),
    S = i(928550),
    b = i(657331),
    G = i(773669),
    L = i(486020),
    R = i(541830),
    w = i(661191),
    O = i(240248),
    M = i(409626),
    k = i(880405),
    y = i(422069),
    P = i(476464),
    D = i(205184),
    V = i(611656),
    Y = i(459746),
    U = i(503364),
    W = i(305080),
    H = i(976720),
    F = i(839671),
    B = i(94836),
    z = i(392332),
    X = i(639714),
    J = i(936636),
    K = i(310721),
    Z = i(922283),
    $ = i(582942),
    Q = i(285820),
    q = i(771004),
    ee = i(424994),
    et = i(985018),
    ei = i(851822),
    en = i(146258);
let el = () =>
    (0, n.jsxs)("div", {
        className: ei.uv,
        children: [
            (0, n.jsx)(h.Y3C, { size: "xxs" }),
            (0, n.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: et.intl.string(et.t.kAlUsy),
            }),
        ],
    });
function ea(e) {
    let { detectedGame: t, application: i, entries: a } = e,
        r = l.useMemo(() => t?.genres.map(R.du).join(", "), [t]),
        [o] = l.useState(() => Math.random()),
        d = l.useMemo(() => {
            if (null == t) return "";
            let { artwork: e, screenshots: i } = t;
            if (e.length > 0) {
                let t = Math.floor(o * e.length);
                return e[t];
            }
            if (i.length > 0) {
                let e = Math.floor(o * i.length);
                return i[e];
            }
            return "";
        }, [t, o]),
        u = (0, O.uJ)(t.iconHash)
            ? i?.getIconURL(160, L.QB ? "webp" : "png")
            : L.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: L.QB ? "webp" : "png" }),
        x = w.default.extractTimestamp(i.id),
        g = 7 >= c()().diff(c()(x), "days"),
        f = a.some((e) => (0, T.CZ)(e) === m.m.GLOBAL),
        j = t.name ?? i?.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: ei.is, style: { backgroundImage: `url("${d}")` } }),
            (0, n.jsxs)("div", {
                className: s()(ei.Qs, ei.fi, ei.iH, ei.Se),
                children: [
                    (0, n.jsxs)("div", {
                        className: ei.xx,
                        children: [
                            (0, n.jsx)("div", {
                                className: ei.bb,
                                children: (0, n.jsx)(Y.A, {
                                    game: t,
                                    application: i,
                                    className: ei.wm,
                                    size: Y.w.LARGE,
                                }),
                            }),
                            (0, n.jsx)(U.A, { applicationId: i.id, className: ei.Gg }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: s()(ei.nM, ei.Lc, ei.Z3),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(h.Heading, { variant: "heading-xl/bold", children: j }),
                                (0, n.jsxs)("div", {
                                    className: s()(ei.nM, ei.Lc),
                                    children: [
                                        null != u &&
                                            (0, n.jsx)("img", {
                                                className: ei.Gt,
                                                src: u,
                                                height: 16,
                                                alt: et.intl.formatToPlainString(et.t["nh+jWk"], { game: j }),
                                            }),
                                        (0, n.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        g &&
                                            (0, n.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: ei.Ad,
                                                children: et.intl.string(et.t.y2b7CA),
                                            }),
                                        f &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, n.jsx)(el, {}),
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
function es(e) {
    let { detectedGame: t, application: i, isTwoColumn: l } = e;
    return (0, n.jsx)("div", {
        className: l ? en.n8 : en.FS,
        children: (0, n.jsx)(Y.A, { game: t, application: i, className: ei.wm, size: Y.w.LARGE }),
    });
}
function er(e) {
    let { detectedGame: t, application: i, entries: a, isTwoColumn: r } = e,
        o = l.useMemo(() => t?.genres.map(R.du).join(", "), [t]),
        [d] = l.useState(() => Math.random()),
        u = l.useMemo(() => {
            if (null == t) return "";
            let { artwork: e, screenshots: i } = t;
            if (e.length > 0) {
                let t = Math.floor(d * e.length);
                return e[t];
            }
            if (i.length > 0) {
                let e = Math.floor(d * i.length);
                return i[e];
            }
            return "";
        }, [t, d]),
        x = (0, O.uJ)(t.iconHash)
            ? i?.getIconURL(160, L.QB ? "webp" : "png")
            : L.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: L.QB ? "webp" : "png" }),
        g = w.default.extractTimestamp(i.id),
        f = 7 >= c()().diff(c()(g), "days"),
        j = a.some((e) => (0, T.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? i?.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: ei.is, style: { backgroundImage: `url("${u}")` } }),
            (0, n.jsxs)("div", {
                className: s()(ei.Qs, ei.fi, ei.iH, ei.Se),
                children: [
                    (0, n.jsxs)("div", {
                        className: ei.xx,
                        children: [
                            r ? (0, n.jsx)(es, { detectedGame: t, application: i, isTwoColumn: !0 }) : null,
                            (0, n.jsx)(U.N, { applicationId: i.id, className: ei.Gg }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: s()(ei.nM, ei.Lc, ei.Z3),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(h.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, n.jsxs)("div", {
                                    className: s()(ei.nM, ei.Lc),
                                    children: [
                                        null != x &&
                                            (0, n.jsx)("img", {
                                                className: ei.Gt,
                                                src: x,
                                                height: 16,
                                                alt: et.intl.formatToPlainString(et.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, n.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                        f &&
                                            (0, n.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: ei.Ad,
                                                children: et.intl.string(et.t.y2b7CA),
                                            }),
                                        j &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, n.jsx)(el, {}),
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
function ec(e) {
    let {
        detectedGame: t,
        application: i,
        entries: l,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: r,
        onClose: c,
        viewId: o,
        trackAction: d,
        source: u,
    } = e;
    return (0, n.jsxs)("div", {
        className: ei.V0,
        children: [
            (0, n.jsx)(z.A, { entries: l, viewId: o, officialGuildId: a?.guild?.id, onClose: c, source: u }),
            (0, n.jsx)(B.A, { detectedGame: t, trackAction: d }),
            (0, n.jsx)($.A, { applicationId: i.id, onClose: c, trackAction: d, similarGames: s, similarGamesError: r }),
        ],
    });
}
function eo(e) {
    let { detectedGame: t, trackAction: i } = e;
    return (0, n.jsx)("div", { className: ei.V0, children: (0, n.jsx)(B.a, { detectedGame: t, trackAction: i }) });
}
function ed(e) {
    let { detectedGame: t, onSetOfficialGuildInvite: i, trackAction: a, onClose: s, application: r } = e,
        c = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        o = l.useCallback(() => {
            s(), (0, b.closeUserProfileModal)();
        }, [s]);
    return (0, n.jsxs)("div", {
        className: ei.V0,
        children: [
            (0, n.jsx)(B.a, { detectedGame: t, trackAction: a }),
            (0, n.jsxs)("div", {
                className: en.gr,
                children: [
                    (0, n.jsx)(es, { detectedGame: t, application: r, isTwoColumn: !1 }),
                    (0, n.jsxs)("div", {
                        className: en.E1,
                        children: [
                            (0, n.jsx)(Q.A, { detectedGame: t }),
                            (0, n.jsx)(q.A, { detectedGame: t, trackAction: a }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(X.o, { detectedGame: t, trackClick: a, onInviteResolved: i, closeModal: o }),
            c && (0, n.jsx)(Z.A, { detectedGame: t }),
        ],
    });
}
function eu(e) {
    let { onClose: t, onCloudPlayClick: i, analyticsLocations: l } = e;
    return (
        (0, E.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, n.jsx)(g.m, {
            text: et.intl.string(et.t.JVwWva),
            position: "top",
            children: (0, n.jsx)(h.Button, {
                icon: h.hpF,
                text: et.intl.string(et.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), i();
                },
                fullWidth: !0,
            }),
        })
    );
}
function em(e) {
    let { applicationId: t, analyticsLocations: i } = e,
        n = (0, I.h)(t),
        l = (0, p.A)({ application: n, analyticsLocations: i });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, S.L)(t) && null != l };
}
function ex(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: i,
            officialGuildInvite: a,
            trackAction: r,
            onClose: c,
            applicationId: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, b.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, v.Ay)(A.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = em({ applicationId: o, analyticsLocations: u });
    return (0, n.jsxs)("div", {
        className: s()(ei.pz, ei.fi, ei.iH),
        children: [
            (0, n.jsxs)("div", {
                className: ei.NC,
                children: [
                    (0, n.jsx)(H.A, { invite: a, trackClick: r, closeModal: d }),
                    m && null != x && (0, n.jsx)(eu, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, n.jsx)(h.Heading, { variant: "heading-md/bold", children: et.intl.string(et.t.CI0vSJ) }),
            (0, n.jsxs)("div", {
                className: ei.V0,
                children: [
                    (0, n.jsx)(q.h, { detectedGame: t, trackAction: r }),
                    (0, n.jsx)(X.A, { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: d }),
                    (0, n.jsx)(F.A, { detectedGame: t, trackClick: r }),
                    (0, n.jsx)(K.A, { detectedGame: t }),
                    (0, n.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: et.intl.format(et.t.pch2Jw, { igdbLink: ee.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function eg(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: i,
            officialGuildInvite: a,
            trackAction: r,
            onClose: c,
            applicationId: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, b.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: m } = (0, v.Ay)(A.A.GAME_PROFILE),
        { isCloudPlayButtonShown: x, onCloudPlayClick: g } = em({ applicationId: o, analyticsLocations: m }),
        f = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, n.jsxs)("div", {
        className: s()(en.Pn, ei.fi, ei.iH),
        children: [
            (0, n.jsxs)("div", {
                className: ei.NC,
                children: [
                    (0, n.jsx)(H.Y, { invite: a, trackClick: r, closeModal: d }),
                    x && null != g && (0, n.jsx)(eu, { onClose: d, onCloudPlayClick: g, analyticsLocations: m }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ei.V0,
                children: [
                    (0, n.jsx)(Q.A, { detectedGame: t }),
                    (0, n.jsx)(q.A, { detectedGame: t, trackAction: r }),
                    f && (0, n.jsx)(Z.A, { detectedGame: t }),
                    (0, n.jsx)(X.o, { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: d }),
                    (0, n.jsx)(F.R, { detectedGame: t, trackClick: r }),
                    (0, n.jsx)(K.v, { detectedGame: t }),
                    (0, n.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: et.intl.format(et.t.pch2Jw, { igdbLink: ee.s8 }),
                    }),
                    (0, n.jsx)(J.A, { detectedGame: t }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let {
            applicationId: t,
            source: i,
            sourceUserId: a,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, _.Ay)(),
        m = (0, x.bG)([G.default], () => G.default.locale),
        g = l.useMemo(() => (0, M.u9)(), []),
        p = (0, x.yK)([y.A], () => (y.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [A, v] = l.useState(null),
        E = (0, D.s)(t),
        [S, b] = l.useState(null),
        L = (0, I.h)(t),
        R = (0, x.bG)([C.A], () => C.A.getGame(t)),
        w = R?.name ?? L?.name,
        O = (e, n) => {
            (0, M.Tn)({
                gameName: w ?? "",
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: g,
                officialGuildId: S?.guild?.id,
                source: i,
            });
        };
    return ((0, j.Ay)(() => {
        (0, M.rw)({
            source: i,
            viewId: g,
            applicationId: t,
            gameName: w ?? "",
            authorId: a,
            profileType: M.HV.FullProfile,
        }),
            (0, N.He)();
    }),
    (0, I.A)(p),
    l.useEffect(() => {
        m.startsWith("en") ||
            R?.summaryLocalized != null ||
            f.A.getDetectableGamesSupplemental([t], { forceFetch: !0 });
    }, [t, R?.summaryLocalized, m]),
    l.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                v(null);
                try {
                    await (0, k.N)(t);
                } catch (e) {
                    v(e);
                }
            }
        })();
    }, [t, p]),
    (0, j.Ay)(() => () => {
        let e = Date.now(),
            i = E.map((t) => {
                let i = (0, T.JM)(t) ? (0, T.W6)(t, e) : (0, T.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: i });
            });
        (0, M.V_)({
            viewId: g,
            applicationId: t,
            gameName: w ?? "",
            playedFriendIds: E.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: p.filter(V.oS).slice(0, 5),
            officialGuildId: S?.guild?.id,
        });
    }),
    null == R || null == L)
        ? null
        : (0, n.jsx)(h.dWK, {
              transitionState: r,
              onClose: c,
              size: "xl",
              children: (0, n.jsx)("div", {
                  className: s()(u, ei.fn),
                  children: (0, n.jsxs)(h.HOs, {
                      orientation: "auto",
                      children: [
                          (0, n.jsx)(ea, {
                              detectedGame: R,
                              application: L,
                              entries: E,
                              trackAction: O,
                              isTwoColumn: !0,
                          }),
                          (0, n.jsx)(h.Fmo, {
                              children: (0, n.jsxs)("div", {
                                  className: s()(ei.Qs, ei.rb),
                                  children: [
                                      (0, n.jsx)(ec, {
                                          detectedGame: R,
                                          application: L,
                                          entries: E,
                                          officialGuildInvite: S,
                                          similarGames: p,
                                          similarGamesError: A,
                                          onClose: c,
                                          viewId: g,
                                          trackAction: O,
                                          source: i,
                                      }),
                                      (0, n.jsx)(ex, {
                                          detectedGame: R,
                                          onSetOfficialGuildInvite: b,
                                          officialGuildInvite: S,
                                          trackAction: O,
                                          onClose: c,
                                          appContext: o,
                                          applicationId: t,
                                          source: i,
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
function ef(e) {
    let {
            applicationId: t,
            source: i,
            sourceUserId: a,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: u,
        } = e,
        { clientThemesClassName: m } = (0, _.Ay)(),
        g = (0, x.bG)([G.default], () => G.default.locale),
        p = l.useMemo(() => (0, M.u9)(), []),
        A = (0, D.s)(t),
        [v, E] = l.useState(null),
        S = (0, I.h)(t),
        b = (0, x.bG)([C.A], () => C.A.getGame(t)),
        L = b?.name ?? S?.name,
        R = (e, n) => {
            (0, M.Tn)({
                gameName: L ?? "",
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: p,
                officialGuildId: v?.guild?.id,
                source: i,
            });
        };
    (0, j.Ay)(() => {
        (0, M.rw)({
            source: i,
            viewId: p,
            applicationId: t,
            gameName: L ?? "",
            authorId: a,
            profileType: M.HV.FullProfile,
        }),
            (0, N.He)();
    }),
        l.useEffect(() => {
            g.startsWith("en") ||
                b?.summaryLocalized != null ||
                f.A.getDetectableGamesSupplemental([t], { forceFetch: !0 });
        }, [t, b?.summaryLocalized, g]),
        (0, j.Ay)(() => () => {
            let e = Date.now(),
                i = A.map((t) => {
                    let i = (0, T.JM)(t) ? (0, T.W6)(t, e) : (0, T.aJ)(t, g);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: i });
                });
            (0, M.V_)({
                viewId: p,
                applicationId: t,
                gameName: L ?? "",
                playedFriendIds: A.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: [],
                officialGuildId: v?.guild?.id,
            });
        });
    let [w, O] = l.useState(!0),
        k = l.useCallback((e) => {
            e.contentRect.width < 800 ? O(!1) : O(!0);
        }, []),
        y = (0, d.w)(k, [], { fireOnMount: !0 });
    return null == b || null == S
        ? null
        : (0, n.jsx)(h.dWK, {
              transitionState: r,
              onClose: c,
              size: "xxl",
              children: (0, n.jsx)(W.D.Provider, {
                  value: { isTwoColumn: w },
                  children: (0, n.jsx)("div", {
                      className: s()(m, w ? en.bo : en.Rm),
                      ref: y,
                      children: (0, n.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, n.jsx)(er, {
                                  detectedGame: b,
                                  application: S,
                                  entries: A,
                                  trackAction: R,
                                  isTwoColumn: w,
                              }),
                              (0, n.jsx)(h.Fmo, {
                                  children: w
                                      ? (0, n.jsxs)("div", {
                                            className: en.jC,
                                            children: [
                                                (0, n.jsx)(eo, { detectedGame: b, trackAction: R }),
                                                (0, n.jsx)(eg, {
                                                    detectedGame: b,
                                                    onSetOfficialGuildInvite: E,
                                                    officialGuildInvite: v,
                                                    trackAction: R,
                                                    onClose: c,
                                                    appContext: o,
                                                    applicationId: t,
                                                    source: i,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, n.jsx)("div", {
                                            className: en.b9,
                                            children: (0, n.jsx)(ed, {
                                                detectedGame: b,
                                                trackAction: R,
                                                application: S,
                                                onSetOfficialGuildInvite: E,
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
let ej = function (e) {
    let { enabled: t } = P.z.useConfig({ location: "GameProfileModal" });
    return t ? (0, n.jsx)(ef, { ...e }) : (0, n.jsx)(eh, { ...e });
};
