n.d(t, { default: () => ep });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(989349),
    o = n.n(r),
    c = n(110259),
    d = n(535185),
    u = n(792216),
    m = n(379834),
    x = n(311907),
    g = n(990078),
    h = n(397927),
    f = n(964486),
    j = n(359549),
    p = n(793574),
    _ = n(688810),
    I = n(139286),
    v = n(362490),
    E = n(429913),
    A = n(590703),
    N = n(708197),
    C = n(583846),
    T = n(885151),
    S = n(928550),
    b = n(657331),
    G = n(773669),
    L = n(486020),
    O = n(541830),
    R = n(661191),
    M = n(240248),
    w = n(409626),
    k = n(880405),
    y = n(422069),
    P = n(476464),
    D = n(205184),
    V = n(277089),
    Y = n(611656),
    W = n(459746),
    U = n(503364),
    H = n(305080),
    F = n(976720),
    B = n(839671),
    z = n(94836),
    X = n(392332),
    J = n(639714),
    K = n(936636),
    Z = n(310721),
    $ = n(922283),
    Q = n(582942),
    q = n(285820),
    ee = n(771004),
    et = n(424994),
    en = n(985018),
    ei = n(851822),
    el = n(146258);
let ea = () =>
    (0, i.jsxs)("div", {
        className: ei.uv,
        children: [
            (0, i.jsx)(h.Y3C, { size: "xxs" }),
            (0, i.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: en.intl.string(en.t.kAlUsy),
            }),
        ],
    });
function es(e) {
    let { detectedGame: t, application: n, entries: a } = e,
        r = l.useMemo(() => t?.genres.map(O.du).join(", "), [t]),
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
        u = (0, M.uJ)(t.iconHash)
            ? n?.getIconURL(160, L.QB ? "webp" : "png")
            : L.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: L.QB ? "webp" : "png" }),
        x = R.default.extractTimestamp(n.id),
        g = 7 >= o()().diff(o()(x), "days"),
        f = a.some((e) => (0, C.CZ)(e) === m.m.GLOBAL),
        j = t.name ?? n?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: ei.is, style: { backgroundImage: `url("${d}")` } }),
            (0, i.jsxs)("div", {
                className: s()(ei.Qs, ei.fi, ei.iH, ei.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: ei.xx,
                        children: [
                            (0, i.jsx)("div", {
                                className: ei.bb,
                                children: (0, i.jsx)(W.A, {
                                    game: t,
                                    application: n,
                                    className: ei.wm,
                                    size: W.w.LARGE,
                                }),
                            }),
                            (0, i.jsx)(U.A, { applicationId: n.id, className: ei.Gg }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: s()(ei.nM, ei.Lc, ei.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(h.Heading, { variant: "heading-xl/bold", children: j }),
                                (0, i.jsxs)("div", {
                                    className: s()(ei.nM, ei.Lc),
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("img", {
                                                className: ei.Gt,
                                                src: u,
                                                height: 16,
                                                alt: en.intl.formatToPlainString(en.t["nh+jWk"], { game: j }),
                                            }),
                                        (0, i.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        g &&
                                            (0, i.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: ei.Ad,
                                                children: en.intl.string(en.t.y2b7CA),
                                            }),
                                        f &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, i.jsx)(ea, {}),
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
    let { detectedGame: t, application: n, isTwoColumn: l } = e;
    return (0, i.jsx)("div", {
        className: l ? el.n8 : el.FS,
        children: (0, i.jsx)(W.A, { game: t, application: n, className: ei.wm, size: W.w.LARGE }),
    });
}
function eo(e) {
    let { detectedGame: t, application: n, entries: a, isTwoColumn: r } = e,
        c = l.useMemo(() => t?.genres.map(O.du).join(", "), [t]),
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
        x = (0, M.uJ)(t.iconHash)
            ? n?.getIconURL(160, L.QB ? "webp" : "png")
            : L.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: L.QB ? "webp" : "png" }),
        g = R.default.extractTimestamp(n.id),
        f = 7 >= o()().diff(o()(g), "days"),
        j = a.some((e) => (0, C.CZ)(e) === m.m.GLOBAL),
        p = t.name ?? n?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: ei.is, style: { backgroundImage: `url("${u}")` } }),
            (0, i.jsxs)("div", {
                className: s()(ei.Qs, ei.fi, ei.iH, ei.Se),
                children: [
                    (0, i.jsxs)("div", {
                        className: ei.xx,
                        children: [
                            r ? (0, i.jsx)(er, { detectedGame: t, application: n, isTwoColumn: !0 }) : null,
                            (0, i.jsx)(U.N, { applicationId: n.id, className: ei.Gg }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: s()(ei.nM, ei.Lc, ei.Z3),
                        children: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(h.Heading, { variant: "heading-xl/bold", children: p }),
                                (0, i.jsxs)("div", {
                                    className: s()(ei.nM, ei.Lc),
                                    children: [
                                        null != x &&
                                            (0, i.jsx)("img", {
                                                className: ei.Gt,
                                                src: x,
                                                height: 16,
                                                alt: en.intl.formatToPlainString(en.t["nh+jWk"], { game: p }),
                                            }),
                                        (0, i.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        f &&
                                            (0, i.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: ei.Ad,
                                                children: en.intl.string(en.t.y2b7CA),
                                            }),
                                        j &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, i.jsx)(ea, {}),
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
        application: n,
        entries: l,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: r,
        onClose: o,
        viewId: c,
        trackAction: d,
        source: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: ei.V0,
        children: [
            (0, i.jsx)(X.A, { entries: l, viewId: c, officialGuildId: a?.guild?.id, onClose: o, source: u }),
            (0, i.jsx)(z.A, { detectedGame: t, trackAction: d }),
            (0, i.jsx)(Q.A, { applicationId: n.id, onClose: o, trackAction: d, similarGames: s, similarGamesError: r }),
        ],
    });
}
function ed(e) {
    let { detectedGame: t, trackAction: n } = e;
    return (0, i.jsx)("div", {
        className: el.oC,
        children: (0, i.jsxs)("div", {
            className: el.lM,
            children: [
                (0, i.jsx)(z.a, { detectedGame: t, trackAction: n }),
                (0, i.jsx)(ee.A, { detectedGame: t, trackAction: n }),
            ],
        }),
    });
}
function eu(e) {
    let { detectedGame: t, trackAction: n, onClose: a, application: s } = e,
        r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        o = l.useCallback(() => {
            a(), (0, b.closeUserProfileModal)();
        }, [a]);
    return (0, i.jsxs)("div", {
        className: ei.V0,
        children: [
            (0, i.jsx)(z.a, { detectedGame: t, trackAction: n }),
            (0, i.jsxs)("div", {
                className: el.gr,
                children: [
                    (0, i.jsx)(er, { detectedGame: t, application: s, isTwoColumn: !1 }),
                    (0, i.jsxs)("div", {
                        className: el.E1,
                        children: [
                            (0, i.jsx)(q.A, { detectedGame: t }),
                            (0, i.jsx)(ee.A, { detectedGame: t, trackAction: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(J.o, { trackClick: n, closeModal: o }),
            r && (0, i.jsx)($.A, { detectedGame: t }),
        ],
    });
}
function em(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: l } = e;
    return (
        (0, I.A)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, i.jsx)(g.m, {
            text: en.intl.string(en.t.JVwWva),
            position: "top",
            children: (0, i.jsx)(h.Button, {
                icon: h.hpF,
                text: en.intl.string(en.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function ex(e) {
    let { applicationId: t, analyticsLocations: n } = e,
        i = (0, E.h)(t),
        l = (0, j.A)({ application: i, analyticsLocations: n });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, S.L)(t) && null != l };
}
function eg(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: a,
            trackAction: r,
            onClose: o,
            applicationId: c,
        } = e,
        d = l.useCallback(() => {
            o(), (0, b.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: u } = (0, _.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ex({ applicationId: c, analyticsLocations: u });
    return (0, i.jsxs)("div", {
        className: s()(ei.pz, ei.fi, ei.iH),
        children: [
            (0, i.jsxs)("div", {
                className: ei.NC,
                children: [
                    (0, i.jsx)(F.A, { invite: a, trackClick: r, closeModal: d }),
                    m && null != x && (0, i.jsx)(em, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, i.jsx)(h.Heading, { variant: "heading-md/bold", children: en.intl.string(en.t.CI0vSJ) }),
            (0, i.jsxs)("div", {
                className: ei.V0,
                children: [
                    (0, i.jsx)(ee.h, { detectedGame: t, trackAction: r }),
                    (0, i.jsx)(J.A, { detectedGame: t, trackClick: r, onInviteResolved: n, closeModal: d }),
                    (0, i.jsx)(B.A, { detectedGame: t, trackClick: r }),
                    (0, i.jsx)(Z.A, { detectedGame: t }),
                    (0, i.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: en.intl.format(en.t.pch2Jw, { igdbLink: et.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { detectedGame: t, officialGuildInvite: n, trackAction: a, onClose: r, applicationId: o } = e,
        c = l.useCallback(() => {
            r(), (0, b.closeUserProfileModal)();
        }, [r]),
        { analyticsLocations: d } = (0, _.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ex({ applicationId: o, analyticsLocations: d }),
        g = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, i.jsxs)("div", {
        className: s()(el.Pn, ei.fi, ei.iH),
        children: [
            (0, i.jsxs)("div", {
                className: ei.NC,
                children: [
                    (0, i.jsx)(F.Y, { invite: n, trackClick: a, closeModal: c }),
                    m && null != x && (0, i.jsx)(em, { onClose: c, onCloudPlayClick: x, analyticsLocations: d }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ei.V0,
                children: [
                    (0, i.jsx)(q.A, { detectedGame: t }),
                    (0, i.jsx)(J.o, { trackClick: a, closeModal: c }),
                    g && (0, i.jsx)($.A, { detectedGame: t }),
                    (0, i.jsx)(B.R, { detectedGame: t, trackClick: a }),
                    (0, i.jsx)(Z.v, { detectedGame: t }),
                    (0, i.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: en.intl.format(en.t.pch2Jw, { igdbLink: et.s8 }),
                    }),
                    (0, i.jsx)(K.A, { detectedGame: t }),
                ],
            }),
        ],
    });
}
function ef(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: a,
            transitionState: r,
            onClose: o,
            appContext: c,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, A.Ay)(),
        m = (0, x.bG)([G.default], () => G.default.locale),
        g = l.useMemo(() => (0, w.u9)(), []),
        j = (0, x.yK)([y.A], () => (y.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, _] = l.useState(null),
        I = (0, D.s)(t),
        [v, S] = l.useState(null),
        b = (0, E.h)(t),
        { data: L, refetch: O } = (0, T.k)(t),
        R = L?.supplementalData ?? null,
        M = R?.name ?? b?.name,
        P = (e, i) => {
            (0, w.Tn)({
                gameName: M ?? "",
                applicationId: t,
                action: e,
                similarGameId: i,
                viewId: g,
                officialGuildId: v?.guild?.id,
                source: n,
            });
        };
    return ((0, f.Ay)(() => {
        (0, w.rw)({
            source: n,
            viewId: g,
            applicationId: t,
            gameName: M ?? "",
            authorId: a,
            profileType: w.HV.FullProfile,
        }),
            (0, N.He)();
    }),
    (0, E.A)(j),
    l.useEffect(() => {
        m.startsWith("en") || R?.summaryLocalized != null || O();
    }, [t, R?.summaryLocalized, m, O]),
    l.useEffect(() => {
        (async () => {
            if (0 === j.length) {
                _(null);
                try {
                    await (0, k.N)(t);
                } catch (e) {
                    _(e);
                }
            }
        })();
    }, [t, j]),
    (0, f.Ay)(() => () => {
        let e = Date.now(),
            n = I.map((t) => {
                let n = (0, C.JM)(t) ? (0, C.W6)(t, e) : (0, C.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
            });
        (0, w.V_)({
            viewId: g,
            applicationId: t,
            gameName: M ?? "",
            playedFriendIds: I.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: j.filter(Y.oS).slice(0, 5),
            officialGuildId: v?.guild?.id,
        });
    }),
    null == R || null == b)
        ? null
        : (0, i.jsx)(h.dWK, {
              transitionState: r,
              onClose: o,
              size: "xl",
              children: (0, i.jsx)("div", {
                  className: s()(u, ei.fn),
                  children: (0, i.jsxs)(h.HOs, {
                      orientation: "auto",
                      children: [
                          (0, i.jsx)(es, {
                              detectedGame: R,
                              application: b,
                              entries: I,
                              trackAction: P,
                              isTwoColumn: !0,
                          }),
                          (0, i.jsx)(h.Fmo, {
                              children: (0, i.jsxs)("div", {
                                  className: s()(ei.Qs, ei.rb),
                                  children: [
                                      (0, i.jsx)(ec, {
                                          detectedGame: R,
                                          application: b,
                                          entries: I,
                                          officialGuildInvite: v,
                                          similarGames: j,
                                          similarGamesError: p,
                                          onClose: o,
                                          viewId: g,
                                          trackAction: P,
                                          source: n,
                                      }),
                                      (0, i.jsx)(eg, {
                                          detectedGame: R,
                                          onSetOfficialGuildInvite: S,
                                          officialGuildInvite: v,
                                          trackAction: P,
                                          onClose: o,
                                          appContext: c,
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
function ej(e) {
    let {
            applicationId: t,
            source: n,
            sourceUserId: a,
            transitionState: r,
            onClose: o,
            appContext: c,
            trackExternalAction: u,
        } = e,
        { clientThemesClassName: m } = (0, A.Ay)(),
        g = (0, x.bG)([G.default], () => G.default.locale),
        j = l.useMemo(() => (0, w.u9)(), []),
        p = (0, D.s)(t),
        [_, I] = l.useState(null),
        S = (0, E.h)(t),
        { data: b, refetch: L } = (0, T.k)(t),
        O = b?.supplementalData ?? null,
        { hasAlreadyLinked: R, canStartAuthorization: M } = (0, v.RD)(S),
        { invite: k, isMember: y } = (0, V.A)(O, I),
        P = O?.name ?? S?.name,
        Y = (e, i) => {
            (0, w.Tn)({
                gameName: P ?? "",
                applicationId: t,
                action: e,
                similarGameId: i,
                viewId: j,
                officialGuildId: _?.guild?.id,
                source: n,
            });
        };
    (0, f.Ay)(() => {
        (0, w.rw)({
            source: n,
            viewId: j,
            applicationId: t,
            gameName: P ?? "",
            authorId: a,
            profileType: w.HV.FullProfile,
        }),
            (0, N.He)();
    }),
        l.useEffect(() => {
            g.startsWith("en") || O?.summaryLocalized != null || L();
        }, [t, O?.summaryLocalized, g, L]),
        (0, f.Ay)(() => () => {
            let e = Date.now(),
                n = p.map((t) => {
                    let n = (0, C.JM)(t) ? (0, C.W6)(t, e) : (0, C.aJ)(t, g);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: n });
                });
            (0, w.V_)({
                viewId: j,
                applicationId: t,
                gameName: P ?? "",
                playedFriendIds: p.map((e) => e.author_id),
                playedFriendsData: n,
                similarGames: [],
                officialGuildId: _?.guild?.id,
            });
        });
    let [W, U] = l.useState(!0),
        F = l.useCallback((e) => {
            e.contentRect.width < 800 ? U(!1) : U(!0);
        }, []),
        B = (0, d.w)(F, [], { fireOnMount: !0 }),
        z = l.useMemo(
            () => ({ isTwoColumn: W, canStartAuthorization: M, hasAlreadyLinked: R, officialInvite: k, isMember: y }),
            [W, M, R, k, y],
        );
    return null == O || null == S
        ? null
        : (0, i.jsx)(h.dWK, {
              transitionState: r,
              onClose: o,
              size: "xxl",
              children: (0, i.jsx)(H.D.Provider, {
                  value: z,
                  children: (0, i.jsx)("div", {
                      className: s()(m, W ? el.bo : el.Rm),
                      ref: B,
                      children: (0, i.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, i.jsx)(eo, {
                                  detectedGame: O,
                                  application: S,
                                  entries: p,
                                  trackAction: Y,
                                  isTwoColumn: W,
                              }),
                              (0, i.jsx)(h.Fmo, {
                                  children: W
                                      ? (0, i.jsxs)("div", {
                                            className: el.jC,
                                            children: [
                                                (0, i.jsx)(ed, { detectedGame: O, trackAction: Y }),
                                                (0, i.jsx)(eh, {
                                                    detectedGame: O,
                                                    officialGuildInvite: _,
                                                    trackAction: Y,
                                                    onClose: o,
                                                    appContext: c,
                                                    applicationId: t,
                                                    source: n,
                                                    trackExternalAction: u,
                                                }),
                                            ],
                                        })
                                      : (0, i.jsx)("div", {
                                            className: el.b9,
                                            children: (0, i.jsx)(eu, {
                                                detectedGame: O,
                                                trackAction: Y,
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
let ep = function (e) {
    let { enabled: t } = P.z.useConfig({ location: "GameProfileModal" });
    return t ? (0, i.jsx)(ej, { ...e }) : (0, i.jsx)(ef, { ...e });
};
