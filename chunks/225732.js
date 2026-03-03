i.d(t, { default: () => ep });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(989349),
    o = i.n(r),
    c = i(110259),
    d = i(535185),
    u = i(792216),
    m = i(379834),
    x = i(311907),
    g = i(990078),
    h = i(397927),
    f = i(544420),
    j = i(964486),
    v = i(359549),
    p = i(793574),
    A = i(688810),
    E = i(139286),
    I = i(429913),
    _ = i(590703),
    N = i(708197),
    C = i(583846),
    T = i(524799),
    S = i(928550),
    b = i(657331),
    G = i(773669),
    w = i(486020),
    L = i(541830),
    R = i(661191),
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
        }),
    ea = l.createContext(void 0);
function es(e) {
    let { detectedGame: t, application: i, entries: a } = e,
        r = l.useMemo(() => t?.genres.map(L.du).join(", "), [t]),
        [c] = l.useState(() => Math.random()),
        d = l.useMemo(() => {
            if (null == t) return "";
            let { artwork: e, screenshots: i } = t;
            if (e.length > 0) {
                let t = Math.floor(c * e.length);
                return e[t];
            }
            if (i.length > 0) {
                let e = Math.floor(c * i.length);
                return i[e];
            }
            return "";
        }, [t, c]),
        u = (0, O.uJ)(t.iconHash)
            ? i?.getIconURL(160, w.QB ? "webp" : "png")
            : w.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: w.QB ? "webp" : "png" }),
        x = R.default.extractTimestamp(i.id),
        g = 7 >= o()().diff(o()(x), "days"),
        f = a.some((e) => (0, C.CZ)(e) === m.m.GLOBAL),
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
function er(e) {
    let { detectedGame: t, application: i, isTwoColumn: l } = e;
    return (0, n.jsx)("div", {
        className: l ? en.n8 : en.FS,
        children: (0, n.jsx)(Y.A, { game: t, application: i, className: ei.wm, size: Y.w.LARGE }),
    });
}
function eo(e) {
    let { detectedGame: t, application: i, entries: a, isTwoColumn: r } = e,
        c = l.useMemo(() => t?.genres.map(L.du).join(", "), [t]),
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
            ? i?.getIconURL(160, w.QB ? "webp" : "png")
            : w.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: w.QB ? "webp" : "png" }),
        g = R.default.extractTimestamp(i.id),
        f = 7 >= o()().diff(o()(g), "days"),
        j = a.some((e) => (0, C.CZ)(e) === m.m.GLOBAL),
        v = t.name ?? i?.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: ei.is, style: { backgroundImage: `url("${u}")` } }),
            (0, n.jsxs)("div", {
                className: s()(ei.Qs, ei.fi, ei.iH, ei.Se),
                children: [
                    (0, n.jsxs)("div", {
                        className: ei.xx,
                        children: [
                            r ? (0, n.jsx)(er, { detectedGame: t, application: i, isTwoColumn: !0 }) : null,
                            (0, n.jsx)(U.N, { applicationId: i.id, className: ei.Gg }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: s()(ei.nM, ei.Lc, ei.Z3),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(h.Heading, { variant: "heading-xl/bold", children: v }),
                                (0, n.jsxs)("div", {
                                    className: s()(ei.nM, ei.Lc),
                                    children: [
                                        null != x &&
                                            (0, n.jsx)("img", {
                                                className: ei.Gt,
                                                src: x,
                                                height: 16,
                                                alt: et.intl.formatToPlainString(et.t["nh+jWk"], { game: v }),
                                            }),
                                        (0, n.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
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
        onClose: o,
        viewId: c,
        trackAction: d,
        source: u,
    } = e;
    return (0, n.jsxs)("div", {
        className: ei.V0,
        children: [
            (0, n.jsx)(z.A, { entries: l, viewId: c, officialGuildId: a?.guild?.id, onClose: o, source: u }),
            (0, n.jsx)(B.A, { detectedGame: t, trackAction: d }),
            (0, n.jsx)($.A, { applicationId: i.id, onClose: o, trackAction: d, similarGames: s, similarGamesError: r }),
        ],
    });
}
function ed(e) {
    let { detectedGame: t, trackAction: i } = e;
    return (0, n.jsx)("div", { className: ei.V0, children: (0, n.jsx)(B.a, { detectedGame: t, trackAction: i }) });
}
function eu(e) {
    let { detectedGame: t, onSetOfficialGuildInvite: i, trackAction: a, onClose: s, application: r } = e,
        o = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED,
        c = l.useCallback(() => {
            s(), (0, b.closeUserProfileModal)();
        }, [s]);
    return (0, n.jsxs)("div", {
        className: ei.V0,
        children: [
            (0, n.jsx)(B.a, { detectedGame: t, trackAction: a }),
            (0, n.jsxs)("div", {
                className: en.gr,
                children: [
                    (0, n.jsx)(er, { detectedGame: t, application: r, isTwoColumn: !1 }),
                    (0, n.jsxs)("div", {
                        className: en.E1,
                        children: [
                            (0, n.jsx)(Q.A, { detectedGame: t }),
                            (0, n.jsx)(q.A, { detectedGame: t, trackAction: a }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(X.o, { detectedGame: t, trackClick: a, onInviteResolved: i, closeModal: c }),
            o && (0, n.jsx)(Z.A, { websites: t.websites, reviews: t.reviews }),
        ],
    });
}
function em(e) {
    let { onClose: t, onCloudPlayClick: i, analyticsLocations: l } = e;
    return (
        (0, E.A)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
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
function ex(e) {
    let { applicationId: t, analyticsLocations: i } = e,
        n = (0, I.h)(t),
        l = (0, v.A)({ application: n, analyticsLocations: i });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, S.L)(t) && null != l };
}
function eg(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: i,
            officialGuildInvite: a,
            trackAction: r,
            onClose: o,
            applicationId: c,
        } = e,
        d = l.useCallback(() => {
            o(), (0, b.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: u } = (0, A.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = ex({ applicationId: c, analyticsLocations: u });
    return (0, n.jsxs)("div", {
        className: s()(ei.pz, ei.fi, ei.iH),
        children: [
            (0, n.jsxs)("div", {
                className: ei.NC,
                children: [
                    (0, n.jsx)(H.A, { invite: a, trackClick: r, closeModal: d }),
                    m && null != x && (0, n.jsx)(em, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
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
function eh(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: i,
            officialGuildInvite: a,
            trackAction: r,
            onClose: o,
            applicationId: c,
        } = e,
        d = l.useCallback(() => {
            o(), (0, b.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: m } = (0, A.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: x, onCloudPlayClick: g } = ex({ applicationId: c, analyticsLocations: m }),
        f = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, n.jsxs)("div", {
        className: s()(en.Pn, ei.fi, ei.iH),
        children: [
            (0, n.jsxs)("div", {
                className: ei.NC,
                children: [
                    (0, n.jsx)(H.Y, { invite: a, trackClick: r, closeModal: d }),
                    x && null != g && (0, n.jsx)(em, { onClose: d, onCloudPlayClick: g, analyticsLocations: m }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ei.V0,
                children: [
                    (0, n.jsx)(Q.A, { detectedGame: t }),
                    (0, n.jsx)(q.A, { detectedGame: t, trackAction: r }),
                    f && (0, n.jsx)(Z.A, { websites: t.websites, reviews: t.reviews }),
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
function ef(e) {
    let {
            applicationId: t,
            source: i,
            sourceUserId: a,
            transitionState: r,
            onClose: o,
            appContext: c,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, _.Ay)(),
        m = (0, x.bG)([G.default], () => G.default.locale),
        g = l.useMemo(() => (0, M.u9)(), []),
        v = (0, x.yK)([y.A], () => (y.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [p, A] = l.useState(null),
        E = (0, D.s)(t),
        [S, b] = l.useState(null),
        w = (0, I.h)(t),
        L = (0, x.bG)([T.A], () => T.A.getGame(t)),
        R = L?.name ?? w?.name,
        O = (e, n) => {
            (0, M.Tn)({
                gameName: R ?? "",
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
            gameName: R ?? "",
            authorId: a,
            profileType: M.HV.FullProfile,
        }),
            (0, N.He)();
    }),
    (0, I.A)(v),
    l.useEffect(() => {
        m.startsWith("en") ||
            L?.summaryLocalized != null ||
            f.A.getDetectableGamesSupplemental([t], { forceFetch: !0 });
    }, [t, L?.summaryLocalized, m]),
    l.useEffect(() => {
        (async () => {
            if (0 === v.length) {
                A(null);
                try {
                    await (0, k.N)(t);
                } catch (e) {
                    A(e);
                }
            }
        })();
    }, [t, v]),
    (0, j.Ay)(() => () => {
        let e = Date.now(),
            i = E.map((t) => {
                let i = (0, C.JM)(t) ? (0, C.W6)(t, e) : (0, C.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: i });
            });
        (0, M.V_)({
            viewId: g,
            applicationId: t,
            gameName: R ?? "",
            playedFriendIds: E.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: v.filter(V.oS).slice(0, 5),
            officialGuildId: S?.guild?.id,
        });
    }),
    null == L || null == w)
        ? null
        : (0, n.jsx)(h.dWK, {
              transitionState: r,
              onClose: o,
              size: "xl",
              children: (0, n.jsxs)("div", {
                  className: s()(u, ei.fn),
                  children: [
                      (0, n.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, n.jsx)(es, {
                                  detectedGame: L,
                                  application: w,
                                  entries: E,
                                  trackAction: O,
                                  isTwoColumn: !0,
                              }),
                              (0, n.jsx)(h.Fmo, {
                                  children: (0, n.jsxs)("div", {
                                      className: s()(ei.Qs, ei.rb),
                                      children: [
                                          (0, n.jsx)(ec, {
                                              detectedGame: L,
                                              application: w,
                                              entries: E,
                                              officialGuildInvite: S,
                                              similarGames: v,
                                              similarGamesError: p,
                                              onClose: o,
                                              viewId: g,
                                              trackAction: O,
                                              source: i,
                                          }),
                                          (0, n.jsx)(eg, {
                                              detectedGame: L,
                                              onSetOfficialGuildInvite: b,
                                              officialGuildInvite: S,
                                              trackAction: O,
                                              onClose: o,
                                              appContext: c,
                                              applicationId: t,
                                              source: i,
                                              trackExternalAction: d,
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsx)(ev, {}),
                  ],
              }),
          });
}
function ej(e) {
    let {
            applicationId: t,
            source: i,
            sourceUserId: a,
            transitionState: r,
            onClose: o,
            appContext: c,
            trackExternalAction: u,
        } = e,
        { clientThemesClassName: m } = (0, _.Ay)(),
        g = (0, x.bG)([G.default], () => G.default.locale),
        v = l.useMemo(() => (0, M.u9)(), []),
        p = (0, D.s)(t),
        [A, E] = l.useState(null),
        S = (0, I.h)(t),
        b = (0, x.bG)([T.A], () => T.A.getGame(t)),
        w = b?.name ?? S?.name,
        L = (e, n) => {
            (0, M.Tn)({
                gameName: w ?? "",
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: v,
                officialGuildId: A?.guild?.id,
                source: i,
            });
        };
    (0, j.Ay)(() => {
        (0, M.rw)({
            source: i,
            viewId: v,
            applicationId: t,
            gameName: w ?? "",
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
                i = p.map((t) => {
                    let i = (0, C.JM)(t) ? (0, C.W6)(t, e) : (0, C.aJ)(t, g);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: i });
                });
            (0, M.V_)({
                viewId: v,
                applicationId: t,
                gameName: w ?? "",
                playedFriendIds: p.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: [],
                officialGuildId: A?.guild?.id,
            });
        });
    let [R, O] = l.useState(!0),
        k = l.useCallback((e) => {
            e.contentRect.width < 800 ? O(!1) : O(!0);
        }, []),
        y = (0, d.w)(k, [], { fireOnMount: !0 });
    return null == b || null == S
        ? null
        : (0, n.jsx)(h.dWK, {
              transitionState: r,
              onClose: o,
              size: "xxl",
              children: (0, n.jsx)(W.D.Provider, {
                  value: { isTwoColumn: R },
                  children: (0, n.jsxs)("div", {
                      className: s()(m, R ? en.bo : en.Rm),
                      ref: y,
                      children: [
                          (0, n.jsxs)(h.HOs, {
                              orientation: "auto",
                              children: [
                                  (0, n.jsx)(eo, {
                                      detectedGame: b,
                                      application: S,
                                      entries: p,
                                      trackAction: L,
                                      isTwoColumn: R,
                                  }),
                                  (0, n.jsx)(h.Fmo, {
                                      children: R
                                          ? (0, n.jsxs)("div", {
                                                className: en.jC,
                                                children: [
                                                    (0, n.jsx)(ed, { detectedGame: b, trackAction: L }),
                                                    (0, n.jsx)(eh, {
                                                        detectedGame: b,
                                                        onSetOfficialGuildInvite: E,
                                                        officialGuildInvite: A,
                                                        trackAction: L,
                                                        onClose: o,
                                                        appContext: c,
                                                        applicationId: t,
                                                        source: i,
                                                        trackExternalAction: u,
                                                    }),
                                                ],
                                            })
                                          : (0, n.jsx)("div", {
                                                className: en.b9,
                                                children: (0, n.jsx)(eu, {
                                                    detectedGame: b,
                                                    trackAction: L,
                                                    application: S,
                                                    onSetOfficialGuildInvite: E,
                                                    onClose: o,
                                                }),
                                            }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(ev, {}),
                      ],
                  }),
              }),
          });
}
function ev() {
    let { enabled: e, canToggle: t } = P.z.useConfig({ location: "GameProfileModal" }),
        i = l.useContext(ea);
    return null != i && e && t
        ? (0, n.jsx)("div", {
              style: { position: "absolute", top: 0, left: 0, transform: "scale(0.5) translate(-50%, -50%)" },
              children: (0, n.jsx)(h.Button, {
                  variant: "primary",
                  onClick: () => i.setIsShowingGameProfileV2((e) => !e),
                  text: "Toggle Game Profile V1 and V2",
              }),
          })
        : null;
}
let ep = function (e) {
    let { enabled: t } = P.z.useConfig({ location: "GameProfileModal" }),
        [i, a] = l.useState(t);
    return (0, n.jsx)(ea.Provider, {
        value: { setIsShowingGameProfileV2: a },
        children: i ? (0, n.jsx)(ej, { ...e }) : (0, n.jsx)(ef, { ...e }),
    });
};
