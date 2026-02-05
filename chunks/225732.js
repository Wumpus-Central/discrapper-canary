i.d(t, { default: () => ed });
var l = i(627968),
    a = i(64700),
    n = i(503698),
    s = i.n(n),
    r = i(989349),
    c = i.n(r),
    o = i(110259),
    d = i(379834),
    u = i(311907),
    m = i(990078),
    x = i(397927),
    g = i(544420),
    h = i(964486),
    f = i(359549),
    j = i(793574),
    p = i(688810),
    v = i(139286),
    A = i(429913),
    N = i(590703),
    _ = i(708197),
    I = i(583846),
    b = i(524799),
    C = i(928550),
    E = i(657331),
    G = i(773669),
    S = i(486020),
    T = i(541830),
    y = i(661191),
    w = i(240248),
    k = i(409626),
    M = i(880405),
    L = i(422069),
    O = i(476464),
    P = i(205184),
    R = i(611656),
    D = i(459746),
    U = i(503364),
    W = i(976720),
    Y = i(839671),
    z = i(94836),
    F = i(392332),
    H = i(639714),
    B = i(310721),
    V = i(582942),
    X = i(771004),
    J = i(424994),
    K = i(985018),
    Z = i(851822);
let Q = () =>
        (0, l.jsxs)("div", {
            className: Z.uv,
            children: [
                (0, l.jsx)(x.Y3C, { size: "xxs" }),
                (0, l.jsx)(x.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: K.intl.string(K.t.kAlUsy),
                }),
            ],
        }),
    $ = a.createContext(void 0);
function q(e) {
    let { detectedGame: t, application: i, entries: n } = e,
        r = a.useMemo(() => t?.genres.map(T.du).join(", "), [t]),
        [o] = a.useState(() => Math.random()),
        u = a.useMemo(() => {
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
        m = (0, w.uJ)(t.iconHash)
            ? i?.getIconURL(160, S.QB ? "webp" : "png")
            : S.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: S.QB ? "webp" : "png" }),
        g = y.default.extractTimestamp(i.id),
        h = 7 >= c()().diff(c()(g), "days"),
        f = n.some((e) => (0, I.CZ)(e) === d.m.GLOBAL),
        j = t.name ?? i?.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: Z.is, style: { backgroundImage: `url("${u}")` } }),
            (0, l.jsxs)("div", {
                className: s()(Z.Qs, Z.fi, Z.iH, Z.Se),
                children: [
                    (0, l.jsxs)("div", {
                        className: Z.xx,
                        children: [
                            (0, l.jsx)("div", {
                                className: Z.bb,
                                children: (0, l.jsx)(D.A, {
                                    game: t,
                                    application: i,
                                    className: Z.wm,
                                    size: D.w.LARGE,
                                }),
                            }),
                            (0, l.jsx)(U.A, { applicationId: i.id, className: Z.Gg }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: s()(Z.nM, Z.Lc, Z.Z3),
                        children: (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(x.Heading, { variant: "heading-xl/bold", children: j }),
                                (0, l.jsxs)("div", {
                                    className: s()(Z.nM, Z.Lc),
                                    children: [
                                        null != m &&
                                            (0, l.jsx)("img", {
                                                className: Z.Gt,
                                                src: m,
                                                height: 16,
                                                alt: K.intl.formatToPlainString(K.t["nh+jWk"], { game: j }),
                                            }),
                                        (0, l.jsx)(x.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        h &&
                                            (0, l.jsx)(x.Text, {
                                                variant: "eyebrow",
                                                className: Z.Ad,
                                                children: K.intl.string(K.t.y2b7CA),
                                            }),
                                        f &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(x.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, l.jsx)(Q, {}),
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
function ee(e) {
    let { detectedGame: t, application: i, entries: n } = e,
        r = a.useMemo(() => t?.genres.map(T.du).join(", "), [t]),
        [o] = a.useState(() => Math.random()),
        u = a.useMemo(() => {
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
        m = (0, w.uJ)(t.iconHash)
            ? i?.getIconURL(160, S.QB ? "webp" : "png")
            : S.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: S.QB ? "webp" : "png" }),
        g = y.default.extractTimestamp(i.id),
        h = 7 >= c()().diff(c()(g), "days"),
        f = n.some((e) => (0, I.CZ)(e) === d.m.GLOBAL),
        j = t.name ?? i?.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: Z.is, style: { backgroundImage: `url("${u}")` } }),
            (0, l.jsxs)("div", {
                className: s()(Z.Qs, Z.fi, Z.iH, Z.Se),
                children: [
                    (0, l.jsxs)("div", {
                        className: Z.xx,
                        children: [
                            (0, l.jsx)("div", {
                                className: Z.bb,
                                children: (0, l.jsx)(D.A, {
                                    game: t,
                                    application: i,
                                    className: Z.wm,
                                    size: D.w.LARGE,
                                }),
                            }),
                            (0, l.jsx)(U.N, { applicationId: i.id, className: Z.Gg }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: s()(Z.nM, Z.Lc, Z.Z3),
                        children: (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(x.Heading, { variant: "heading-xl/bold", children: j }),
                                (0, l.jsxs)("div", {
                                    className: s()(Z.nM, Z.Lc),
                                    children: [
                                        null != m &&
                                            (0, l.jsx)("img", {
                                                className: Z.Gt,
                                                src: m,
                                                height: 16,
                                                alt: K.intl.formatToPlainString(K.t["nh+jWk"], { game: j }),
                                            }),
                                        (0, l.jsx)(x.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        h &&
                                            (0, l.jsx)(x.Text, {
                                                variant: "eyebrow",
                                                className: Z.Ad,
                                                children: K.intl.string(K.t.y2b7CA),
                                            }),
                                        f &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(x.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, l.jsx)(Q, {}),
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
function et(e) {
    let {
        detectedGame: t,
        application: i,
        entries: a,
        officialGuildInvite: n,
        similarGames: s,
        similarGamesError: r,
        onClose: c,
        viewId: o,
        trackAction: d,
        source: u,
    } = e;
    return (0, l.jsxs)("div", {
        className: Z.V0,
        children: [
            (0, l.jsx)(F.A, { entries: a, viewId: o, officialGuildId: n?.guild?.id, onClose: c, source: u }),
            (0, l.jsx)(z.A, { detectedGame: t, trackAction: d }),
            (0, l.jsx)(V.A, { applicationId: i.id, onClose: c, trackAction: d, similarGames: s, similarGamesError: r }),
        ],
    });
}
function ei(e) {
    let { detectedGame: t, trackAction: i } = e;
    return (0, l.jsx)("div", { className: Z.V0, children: (0, l.jsx)(z.a, { detectedGame: t, trackAction: i }) });
}
function el(e) {
    let { onClose: t, onCloudPlayClick: i, analyticsLocations: a } = e;
    return (
        (0, v.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: { location_stack: a },
        }),
        (0, l.jsx)(m.m, {
            text: K.intl.string(K.t.JVwWva),
            position: "top",
            children: (0, l.jsx)(x.Button, {
                icon: x.hpF,
                text: K.intl.string(K.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), i();
                },
                fullWidth: !0,
            }),
        })
    );
}
function ea(e) {
    let { applicationId: t, analyticsLocations: i } = e,
        l = (0, A.h)(t),
        a = (0, f.A)({ application: l, analyticsLocations: i });
    return { onCloudPlayClick: a, isCloudPlayButtonShown: !(0, C.L)(t) && null != a };
}
function en(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: i,
            officialGuildInvite: n,
            trackAction: r,
            onClose: c,
            applicationId: o,
        } = e,
        d = a.useCallback(() => {
            c(), (0, E.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, p.Ay)(j.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: g } = ea({ applicationId: o, analyticsLocations: u });
    return (0, l.jsxs)("div", {
        className: s()(Z.pz, Z.fi, Z.iH),
        children: [
            (0, l.jsxs)("div", {
                className: Z.NC,
                children: [
                    (0, l.jsx)(W.A, { invite: n, trackClick: r, closeModal: d }),
                    m && null != g && (0, l.jsx)(el, { onClose: d, onCloudPlayClick: g, analyticsLocations: u }),
                ],
            }),
            (0, l.jsx)(x.Heading, { variant: "heading-md/bold", children: K.intl.string(K.t.CI0vSJ) }),
            (0, l.jsxs)("div", {
                className: Z.V0,
                children: [
                    (0, l.jsx)(X.h, { detectedGame: t, trackAction: r }),
                    (0, l.jsx)(H.A, { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: d }),
                    (0, l.jsx)(Y.A, { detectedGame: t, trackClick: r }),
                    (0, l.jsx)(B.A, { detectedGame: t }),
                    (0, l.jsx)(x.Text, {
                        variant: "text-xxs/normal",
                        children: K.intl.format(K.t.pch2Jw, { igdbLink: J.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function es(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: i,
            officialGuildInvite: n,
            trackAction: r,
            onClose: c,
            applicationId: o,
        } = e,
        d = a.useCallback(() => {
            c(), (0, E.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, p.Ay)(j.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: g } = ea({ applicationId: o, analyticsLocations: u });
    return (0, l.jsxs)("div", {
        className: s()(Z.pz, Z.fi, Z.iH),
        children: [
            (0, l.jsxs)("div", {
                className: Z.NC,
                children: [
                    (0, l.jsx)(W.Y, { invite: n, trackClick: r, closeModal: d }),
                    m && null != g && (0, l.jsx)(el, { onClose: d, onCloudPlayClick: g, analyticsLocations: u }),
                ],
            }),
            (0, l.jsx)(x.Heading, { variant: "heading-md/bold", children: K.intl.string(K.t.CI0vSJ) }),
            (0, l.jsxs)("div", {
                className: Z.V0,
                children: [
                    (0, l.jsx)(X.A, { detectedGame: t, trackAction: r }),
                    (0, l.jsx)(H.o, { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: d }),
                    (0, l.jsx)(Y.R, { detectedGame: t, trackClick: r }),
                    (0, l.jsx)(B.v, { detectedGame: t }),
                    (0, l.jsx)(x.Text, {
                        variant: "text-xxs/normal",
                        children: K.intl.format(K.t.pch2Jw, { igdbLink: J.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function er(e) {
    let {
            applicationId: t,
            source: i,
            sourceUserId: n,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: m } = (0, N.Ay)(),
        f = (0, u.bG)([G.default], () => G.default.locale),
        j = a.useMemo(() => (0, k.u9)(), []),
        p = (0, u.yK)([L.A], () => (L.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [v, C] = a.useState(null),
        E = (0, P.s)(t),
        [S, T] = a.useState(null),
        y = (0, A.h)(t),
        w = (0, u.bG)([b.A], () => b.A.getGame(t)),
        O = w?.name ?? y?.name,
        D = (e, l) => {
            (0, k.Tn)({
                gameName: O ?? "",
                applicationId: t,
                action: e,
                similarGameId: l,
                viewId: j,
                officialGuildId: S?.guild?.id,
                source: i,
            });
        };
    return ((0, h.Ay)(() => {
        (0, k.rw)({
            source: i,
            viewId: j,
            applicationId: t,
            gameName: O ?? "",
            authorId: n,
            profileType: k.HV.FullProfile,
        }),
            (0, _.He)();
    }),
    (0, A.A)(p),
    a.useEffect(() => {
        f.startsWith("en") ||
            w?.summaryLocalized != null ||
            g.A.getDetectableGamesSupplemental([t], { forceFetch: !0 });
    }, [t, w?.summaryLocalized, f]),
    a.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                C(null);
                try {
                    await (0, M.N)(t);
                } catch (e) {
                    C(e);
                }
            }
        })();
    }, [t, p]),
    (0, h.Ay)(() => () => {
        let e = Date.now(),
            i = E.map((t) => {
                let i = (0, I.JM)(t) ? (0, I.W6)(t, e) : (0, I.aJ)(t, f);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: i });
            });
        (0, k.V_)({
            viewId: j,
            applicationId: t,
            gameName: O ?? "",
            playedFriendIds: E.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: p.filter(R.oS).slice(0, 5),
            officialGuildId: S?.guild?.id,
        });
    }),
    null == w || null == y)
        ? null
        : (0, l.jsx)(x.dWK, {
              transitionState: r,
              onClose: c,
              size: "xl",
              children: (0, l.jsxs)("div", {
                  className: s()(m, Z.fn),
                  children: [
                      (0, l.jsxs)(x.HOs, {
                          orientation: "auto",
                          children: [
                              (0, l.jsx)(q, { detectedGame: w, application: y, entries: E, trackAction: D }),
                              (0, l.jsx)(x.Fmo, {
                                  children: (0, l.jsxs)("div", {
                                      className: s()(Z.Qs, Z.rb),
                                      children: [
                                          (0, l.jsx)(et, {
                                              detectedGame: w,
                                              application: y,
                                              entries: E,
                                              officialGuildInvite: S,
                                              similarGames: p,
                                              similarGamesError: v,
                                              onClose: c,
                                              viewId: j,
                                              trackAction: D,
                                              source: i,
                                          }),
                                          (0, l.jsx)(en, {
                                              detectedGame: w,
                                              onSetOfficialGuildInvite: T,
                                              officialGuildInvite: S,
                                              trackAction: D,
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
                      (0, l.jsx)(eo, {}),
                  ],
              }),
          });
}
function ec(e) {
    let {
            applicationId: t,
            source: i,
            sourceUserId: n,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: m } = (0, N.Ay)(),
        f = (0, u.bG)([G.default], () => G.default.locale),
        j = a.useMemo(() => (0, k.u9)(), []),
        p = (0, P.s)(t),
        [v, C] = a.useState(null),
        E = (0, A.h)(t),
        S = (0, u.bG)([b.A], () => b.A.getGame(t)),
        T = S?.name ?? E?.name,
        y = (e, l) => {
            (0, k.Tn)({
                gameName: T ?? "",
                applicationId: t,
                action: e,
                similarGameId: l,
                viewId: j,
                officialGuildId: v?.guild?.id,
                source: i,
            });
        };
    return ((0, h.Ay)(() => {
        (0, k.rw)({
            source: i,
            viewId: j,
            applicationId: t,
            gameName: T ?? "",
            authorId: n,
            profileType: k.HV.FullProfile,
        }),
            (0, _.He)();
    }),
    a.useEffect(() => {
        f.startsWith("en") ||
            S?.summaryLocalized != null ||
            g.A.getDetectableGamesSupplemental([t], { forceFetch: !0 });
    }, [t, S?.summaryLocalized, f]),
    (0, h.Ay)(() => () => {
        let e = Date.now(),
            i = p.map((t) => {
                let i = (0, I.JM)(t) ? (0, I.W6)(t, e) : (0, I.aJ)(t, f);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: i });
            });
        (0, k.V_)({
            viewId: j,
            applicationId: t,
            gameName: T ?? "",
            playedFriendIds: p.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: [],
            officialGuildId: v?.guild?.id,
        });
    }),
    null == S || null == E)
        ? null
        : (0, l.jsx)(x.dWK, {
              transitionState: r,
              onClose: c,
              size: "xl",
              children: (0, l.jsxs)("div", {
                  className: s()(m, Z.fn),
                  children: [
                      (0, l.jsxs)(x.HOs, {
                          orientation: "auto",
                          children: [
                              (0, l.jsx)(ee, { detectedGame: S, application: E, entries: p, trackAction: y }),
                              (0, l.jsx)(x.Fmo, {
                                  children: (0, l.jsxs)("div", {
                                      className: s()(Z.Qs, Z.rb),
                                      children: [
                                          (0, l.jsx)(ei, { detectedGame: S, trackAction: y }),
                                          (0, l.jsx)(es, {
                                              detectedGame: S,
                                              onSetOfficialGuildInvite: C,
                                              officialGuildInvite: v,
                                              trackAction: y,
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
                      (0, l.jsx)(eo, {}),
                  ],
              }),
          });
}
function eo() {
    let { enabled: e, canToggle: t } = O.z.useConfig({ location: "GameProfileModal" }),
        i = a.useContext($);
    return null != i && e && t
        ? (0, l.jsx)("div", {
              style: { position: "absolute", top: 0, left: 0, transform: "scale(0.5) translate(-50%, -50%)" },
              children: (0, l.jsx)(x.Button, {
                  variant: "primary",
                  onClick: () => i.setIsShowingGameProfileV2((e) => !e),
                  text: "Toggle Game Profile V1 and V2",
              }),
          })
        : null;
}
let ed = function (e) {
    let { enabled: t } = O.z.useConfig({ location: "GameProfileModal" }),
        [i, n] = a.useState(t);
    return (0, l.jsx)($.Provider, {
        value: { setIsShowingGameProfileV2: n },
        children: i ? (0, l.jsx)(ec, { ...e }) : (0, l.jsx)(er, { ...e }),
    });
};
