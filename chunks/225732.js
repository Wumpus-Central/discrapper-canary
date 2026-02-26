i.d(t, { default: () => eh });
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
    v = i(793574),
    A = i(688810),
    _ = i(139286),
    N = i(429913),
    E = i(590703),
    I = i(708197),
    C = i(583846),
    S = i(524799),
    b = i(928550),
    T = i(657331),
    G = i(773669),
    w = i(486020),
    y = i(541830),
    k = i(661191),
    L = i(240248),
    R = i(409626),
    M = i(880405),
    O = i(422069),
    P = i(476464),
    D = i(205184),
    Y = i(611656),
    U = i(459746),
    W = i(503364),
    V = i(976720),
    H = i(839671),
    z = i(94836),
    F = i(392332),
    B = i(639714),
    X = i(310721),
    J = i(922283),
    K = i(582942),
    Z = i(771004),
    Q = i(424994),
    $ = i(985018),
    q = i(728528),
    ee = i(936284);
let et = () =>
        (0, n.jsxs)("div", {
            className: q.uv,
            children: [
                (0, n.jsx)(h.Y3C, { size: "xxs" }),
                (0, n.jsx)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: $.intl.string($.t.kAlUsy),
                }),
            ],
        }),
    ei = l.createContext(void 0);
function en(e) {
    let { detectedGame: t, application: i, entries: a } = e,
        r = l.useMemo(() => t?.genres.map(y.du).join(", "), [t]),
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
        u = (0, L.uJ)(t.iconHash)
            ? i?.getIconURL(160, w.QB ? "webp" : "png")
            : w.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: w.QB ? "webp" : "png" }),
        x = k.default.extractTimestamp(i.id),
        g = 7 >= c()().diff(c()(x), "days"),
        f = a.some((e) => (0, C.CZ)(e) === m.m.GLOBAL),
        j = t.name ?? i?.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: q.is, style: { backgroundImage: `url("${d}")` } }),
            (0, n.jsxs)("div", {
                className: s()(q.Qs, q.fi, q.iH, q.Se),
                children: [
                    (0, n.jsxs)("div", {
                        className: q.xx,
                        children: [
                            (0, n.jsx)("div", {
                                className: q.bb,
                                children: (0, n.jsx)(U.A, {
                                    game: t,
                                    application: i,
                                    className: q.wm,
                                    size: U.w.LARGE,
                                }),
                            }),
                            (0, n.jsx)(W.A, { applicationId: i.id, className: q.Gg }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: s()(q.nM, q.Lc, q.Z3),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(h.Heading, { variant: "heading-xl/bold", children: j }),
                                (0, n.jsxs)("div", {
                                    className: s()(q.nM, q.Lc),
                                    children: [
                                        null != u &&
                                            (0, n.jsx)("img", {
                                                className: q.Gt,
                                                src: u,
                                                height: 16,
                                                alt: $.intl.formatToPlainString($.t["nh+jWk"], { game: j }),
                                            }),
                                        (0, n.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        g &&
                                            (0, n.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: q.Ad,
                                                children: $.intl.string($.t.y2b7CA),
                                            }),
                                        f &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, n.jsx)(et, {}),
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
function el(e) {
    let { detectedGame: t, application: i, entries: a } = e,
        r = l.useMemo(() => t?.genres.map(y.du).join(", "), [t]),
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
        u = (0, L.uJ)(t.iconHash)
            ? i?.getIconURL(160, w.QB ? "webp" : "png")
            : w.Ay.getGameAssetURL({ id: t.applicationId, hash: t.iconHash, size: 160, format: w.QB ? "webp" : "png" }),
        x = k.default.extractTimestamp(i.id),
        g = 7 >= c()().diff(c()(x), "days"),
        f = a.some((e) => (0, C.CZ)(e) === m.m.GLOBAL),
        j = t.name ?? i?.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: q.is, style: { backgroundImage: `url("${d}")` } }),
            (0, n.jsxs)("div", {
                className: s()(q.Qs, q.fi, q.iH, q.Se),
                children: [
                    (0, n.jsxs)("div", {
                        className: q.xx,
                        children: [
                            (0, n.jsx)("div", {
                                className: q.bb,
                                children: (0, n.jsx)(U.A, {
                                    game: t,
                                    application: i,
                                    className: q.wm,
                                    size: U.w.LARGE,
                                }),
                            }),
                            (0, n.jsx)(W.N, { applicationId: i.id, className: q.Gg }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: s()(q.nM, q.Lc, q.Z3),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(h.Heading, { variant: "heading-xl/bold", children: j }),
                                (0, n.jsxs)("div", {
                                    className: s()(q.nM, q.Lc),
                                    children: [
                                        null != u &&
                                            (0, n.jsx)("img", {
                                                className: q.Gt,
                                                src: u,
                                                height: 16,
                                                alt: $.intl.formatToPlainString($.t["nh+jWk"], { game: j }),
                                            }),
                                        (0, n.jsx)(h.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                        g &&
                                            (0, n.jsx)(h.Text, {
                                                variant: "eyebrow",
                                                className: q.Ad,
                                                children: $.intl.string($.t.y2b7CA),
                                            }),
                                        f &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(h.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, n.jsx)(et, {}),
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
        className: q.V0,
        children: [
            (0, n.jsx)(F.A, { entries: l, viewId: o, officialGuildId: a?.guild?.id, onClose: c, source: u }),
            (0, n.jsx)(z.A, { detectedGame: t, trackAction: d }),
            (0, n.jsx)(K.A, { applicationId: i.id, onClose: c, trackAction: d, similarGames: s, similarGamesError: r }),
        ],
    });
}
function es(e) {
    let { detectedGame: t, trackAction: i } = e;
    return (0, n.jsx)("div", { className: q.V0, children: (0, n.jsx)(z.a, { detectedGame: t, trackAction: i }) });
}
function er(e) {
    let { detectedGame: t, trackAction: i } = e,
        l = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, n.jsxs)("div", {
        className: q.V0,
        children: [
            (0, n.jsx)(z.a, { detectedGame: t, trackAction: i }),
            l && (0, n.jsx)(J.A, { websites: t.websites, reviews: t.reviews }),
        ],
    });
}
function ec(e) {
    let { onClose: t, onCloudPlayClick: i, analyticsLocations: l } = e;
    return (
        (0, _.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: { location_stack: l },
        }),
        (0, n.jsx)(g.m, {
            text: $.intl.string($.t.JVwWva),
            position: "top",
            children: (0, n.jsx)(h.Button, {
                icon: h.hpF,
                text: $.intl.string($.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), i();
                },
                fullWidth: !0,
            }),
        })
    );
}
function eo(e) {
    let { applicationId: t, analyticsLocations: i } = e,
        n = (0, N.h)(t),
        l = (0, p.A)({ application: n, analyticsLocations: i });
    return { onCloudPlayClick: l, isCloudPlayButtonShown: !(0, b.L)(t) && null != l };
}
function ed(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: i,
            officialGuildInvite: a,
            trackAction: r,
            onClose: c,
            applicationId: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: u } = (0, A.Ay)(v.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: x } = eo({ applicationId: o, analyticsLocations: u });
    return (0, n.jsxs)("div", {
        className: s()(q.pz, q.fi, q.iH),
        children: [
            (0, n.jsxs)("div", {
                className: q.NC,
                children: [
                    (0, n.jsx)(V.A, { invite: a, trackClick: r, closeModal: d }),
                    m && null != x && (0, n.jsx)(ec, { onClose: d, onCloudPlayClick: x, analyticsLocations: u }),
                ],
            }),
            (0, n.jsx)(h.Heading, { variant: "heading-md/bold", children: $.intl.string($.t.CI0vSJ) }),
            (0, n.jsxs)("div", {
                className: q.V0,
                children: [
                    (0, n.jsx)(Z.h, { detectedGame: t, trackAction: r }),
                    (0, n.jsx)(B.A, { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: d }),
                    (0, n.jsx)(H.A, { detectedGame: t, trackClick: r }),
                    (0, n.jsx)(X.A, { detectedGame: t }),
                    (0, n.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: $.intl.format($.t.pch2Jw, { igdbLink: Q.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function eu(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: i,
            officialGuildInvite: a,
            trackAction: r,
            onClose: c,
            applicationId: o,
        } = e,
        d = l.useCallback(() => {
            c(), (0, T.closeUserProfileModal)();
        }, [c]),
        { analyticsLocations: m } = (0, A.Ay)(v.A.GAME_PROFILE),
        { isCloudPlayButtonShown: x, onCloudPlayClick: g } = eo({ applicationId: o, analyticsLocations: m }),
        f = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, n.jsxs)("div", {
        className: s()(ee.Pn, q.fi, q.iH),
        children: [
            (0, n.jsxs)("div", {
                className: q.NC,
                children: [
                    (0, n.jsx)(V.Y, { invite: a, trackClick: r, closeModal: d }),
                    x && null != g && (0, n.jsx)(ec, { onClose: d, onCloudPlayClick: g, analyticsLocations: m }),
                ],
            }),
            (0, n.jsx)(h.Heading, { variant: "heading-md/bold", children: $.intl.string($.t.CI0vSJ) }),
            (0, n.jsxs)("div", {
                className: q.V0,
                children: [
                    (0, n.jsx)(Z.A, { detectedGame: t, trackAction: r }),
                    f && (0, n.jsx)(J.A, { websites: t.websites, reviews: t.reviews }),
                    (0, n.jsx)(B.o, { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: d }),
                    (0, n.jsx)(H.R, { detectedGame: t, trackClick: r }),
                    (0, n.jsx)(X.v, { detectedGame: t }),
                    (0, n.jsx)(h.Text, {
                        variant: "text-xxs/normal",
                        children: $.intl.format($.t.pch2Jw, { igdbLink: Q.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function em(e) {
    let {
            applicationId: t,
            source: i,
            sourceUserId: a,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: u } = (0, E.Ay)(),
        m = (0, x.bG)([G.default], () => G.default.locale),
        g = l.useMemo(() => (0, R.u9)(), []),
        p = (0, x.yK)([O.A], () => (O.A.getSimilarGames(t) ?? []).slice(0, 25)),
        [v, A] = l.useState(null),
        _ = (0, D.s)(t),
        [b, T] = l.useState(null),
        w = (0, N.h)(t),
        y = (0, x.bG)([S.A], () => S.A.getGame(t)),
        k = y?.name ?? w?.name,
        L = (e, n) => {
            (0, R.Tn)({
                gameName: k ?? "",
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: g,
                officialGuildId: b?.guild?.id,
                source: i,
            });
        };
    return ((0, j.Ay)(() => {
        (0, R.rw)({
            source: i,
            viewId: g,
            applicationId: t,
            gameName: k ?? "",
            authorId: a,
            profileType: R.HV.FullProfile,
        }),
            (0, I.He)();
    }),
    (0, N.A)(p),
    l.useEffect(() => {
        m.startsWith("en") ||
            y?.summaryLocalized != null ||
            f.A.getDetectableGamesSupplemental([t], { forceFetch: !0 });
    }, [t, y?.summaryLocalized, m]),
    l.useEffect(() => {
        (async () => {
            if (0 === p.length) {
                A(null);
                try {
                    await (0, M.N)(t);
                } catch (e) {
                    A(e);
                }
            }
        })();
    }, [t, p]),
    (0, j.Ay)(() => () => {
        let e = Date.now(),
            i = _.map((t) => {
                let i = (0, C.JM)(t) ? (0, C.W6)(t, e) : (0, C.aJ)(t, m);
                return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: i });
            });
        (0, R.V_)({
            viewId: g,
            applicationId: t,
            gameName: k ?? "",
            playedFriendIds: _.map((e) => e.author_id),
            playedFriendsData: i,
            similarGames: p.filter(Y.oS).slice(0, 5),
            officialGuildId: b?.guild?.id,
        });
    }),
    null == y || null == w)
        ? null
        : (0, n.jsx)(h.dWK, {
              transitionState: r,
              onClose: c,
              size: "xl",
              children: (0, n.jsxs)("div", {
                  className: s()(u, q.fn),
                  children: [
                      (0, n.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, n.jsx)(en, { detectedGame: y, application: w, entries: _, trackAction: L }),
                              (0, n.jsx)(h.Fmo, {
                                  children: (0, n.jsxs)("div", {
                                      className: s()(q.Qs, q.rb),
                                      children: [
                                          (0, n.jsx)(ea, {
                                              detectedGame: y,
                                              application: w,
                                              entries: _,
                                              officialGuildInvite: b,
                                              similarGames: p,
                                              similarGamesError: v,
                                              onClose: c,
                                              viewId: g,
                                              trackAction: L,
                                              source: i,
                                          }),
                                          (0, n.jsx)(ed, {
                                              detectedGame: y,
                                              onSetOfficialGuildInvite: T,
                                              officialGuildInvite: b,
                                              trackAction: L,
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
                      (0, n.jsx)(eg, {}),
                  ],
              }),
          });
}
function ex(e) {
    let {
            applicationId: t,
            source: i,
            sourceUserId: a,
            transitionState: r,
            onClose: c,
            appContext: o,
            trackExternalAction: u,
        } = e,
        { clientThemesClassName: m } = (0, E.Ay)(),
        g = (0, x.bG)([G.default], () => G.default.locale),
        p = l.useMemo(() => (0, R.u9)(), []),
        v = (0, D.s)(t),
        [A, _] = l.useState(null),
        b = (0, N.h)(t),
        T = (0, x.bG)([S.A], () => S.A.getGame(t)),
        w = T?.name ?? b?.name,
        y = (e, n) => {
            (0, R.Tn)({
                gameName: w ?? "",
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: p,
                officialGuildId: A?.guild?.id,
                source: i,
            });
        };
    (0, j.Ay)(() => {
        (0, R.rw)({
            source: i,
            viewId: p,
            applicationId: t,
            gameName: w ?? "",
            authorId: a,
            profileType: R.HV.FullProfile,
        }),
            (0, I.He)();
    }),
        l.useEffect(() => {
            g.startsWith("en") ||
                T?.summaryLocalized != null ||
                f.A.getDetectableGamesSupplemental([t], { forceFetch: !0 });
        }, [t, T?.summaryLocalized, g]),
        (0, j.Ay)(() => () => {
            let e = Date.now(),
                i = v.map((t) => {
                    let i = (0, C.JM)(t) ? (0, C.W6)(t, e) : (0, C.aJ)(t, g);
                    return JSON.stringify({ item_id: t.id, trait: t.traits, time_played: i });
                });
            (0, R.V_)({
                viewId: p,
                applicationId: t,
                gameName: w ?? "",
                playedFriendIds: v.map((e) => e.author_id),
                playedFriendsData: i,
                similarGames: [],
                officialGuildId: A?.guild?.id,
            });
        });
    let [k, L] = l.useState("two-column"),
        M = l.useCallback((e) => {
            e.contentRect.width < 800 ? L("one-column") : L("two-column");
        }, []),
        O = (0, d.w)(M, [], { fireOnMount: !0 });
    return null == T || null == b
        ? null
        : (0, n.jsx)(h.dWK, {
              transitionState: r,
              onClose: c,
              size: "xxl",
              children: (0, n.jsxs)("div", {
                  className: s()(m, "two-column" === k ? ee.bo : ee.Rm),
                  ref: O,
                  children: [
                      (0, n.jsxs)(h.HOs, {
                          orientation: "auto",
                          children: [
                              (0, n.jsx)(el, { detectedGame: T, application: b, entries: v, trackAction: y }),
                              (0, n.jsx)(h.Fmo, {
                                  children:
                                      "two-column" === k
                                          ? (0, n.jsxs)("div", {
                                                className: s()(ee.Qs, ee.jC),
                                                children: [
                                                    (0, n.jsx)(es, { detectedGame: T, trackAction: y }),
                                                    (0, n.jsx)(eu, {
                                                        detectedGame: T,
                                                        onSetOfficialGuildInvite: _,
                                                        officialGuildInvite: A,
                                                        trackAction: y,
                                                        onClose: c,
                                                        appContext: o,
                                                        applicationId: t,
                                                        source: i,
                                                        trackExternalAction: u,
                                                    }),
                                                ],
                                            })
                                          : (0, n.jsx)("div", {
                                                className: s()(ee.Qs, ee.b9),
                                                children: (0, n.jsx)(er, { detectedGame: T, trackAction: y }),
                                            }),
                              }),
                          ],
                      }),
                      (0, n.jsx)(eg, {}),
                  ],
              }),
          });
}
function eg() {
    let { enabled: e, canToggle: t } = P.z.useConfig({ location: "GameProfileModal" }),
        i = l.useContext(ei);
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
let eh = function (e) {
    let { enabled: t } = P.z.useConfig({ location: "GameProfileModal" }),
        [i, a] = l.useState(t);
    return (0, n.jsx)(ei.Provider, {
        value: { setIsShowingGameProfileV2: a },
        children: i ? (0, n.jsx)(ex, { ...e }) : (0, n.jsx)(em, { ...e }),
    });
};
