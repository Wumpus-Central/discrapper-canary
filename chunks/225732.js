n.d(t, { default: () => eo }), n(896048), n(457529);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(110259),
    d = n(951912),
    u = n(379834),
    m = n(311907),
    f = n(990078),
    x = n(397927),
    b = n(544420),
    p = n(964486),
    g = n(359549),
    j = n(793574),
    h = n(688810),
    v = n(139286),
    y = n(429913),
    O = n(590703),
    A = n(708197),
    I = n(583846),
    N = n(524799),
    w = n(928550),
    S = n(657331),
    E = n(773669),
    P = n(486020),
    C = n(541830),
    G = n(661191),
    T = n(240248),
    _ = n(409626),
    k = n(880405),
    D = n(422069),
    L = n(476464),
    M = n(205184),
    R = n(611656),
    Y = n(459746),
    U = n(503364),
    W = n(976720),
    z = n(839671),
    F = n(94836),
    B = n(392332),
    H = n(639714),
    K = n(310721),
    V = n(582942),
    X = n(771004),
    J = n(424994),
    Z = n(985018),
    $ = n(851822);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let q = () =>
        (0, l.jsxs)("div", {
            className: $.uv,
            children: [
                (0, l.jsx)(x.Y3C, { size: "xxs" }),
                (0, l.jsx)(x.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: Z.intl.string(Z.t.kAlUsy),
                }),
            ],
        }),
    ee = r.createContext(void 0);
function et(e) {
    var t;
    let { detectedGame: n, application: i, entries: s } = e,
        c = r.useMemo(() => (null == n ? void 0 : n.genres.map(C.du).join(", ")), [n]),
        d = r.useMemo(() => {
            if (null == n) return "";
            let { artwork: e, screenshots: t } = n;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return "";
        }, [n]),
        m = (0, T.uJ)(n.iconHash)
            ? null == i
                ? void 0
                : i.getIconURL(160, P.QB ? "webp" : "png")
            : P.Ay.getGameAssetURL({
                  id: n.applicationId,
                  hash: n.iconHash,
                  size: 160,
                  format: P.QB ? "webp" : "png",
              }),
        f = G.default.extractTimestamp(i.id),
        b = 7 >= o()().diff(o()(f), "days"),
        p = s.some((e) => (0, I.CZ)(e) === u.m.GLOBAL),
        g = null != (t = n.name) ? t : null == i ? void 0 : i.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: $.is,
                style: { backgroundImage: 'url("'.concat(d, '")') },
            }),
            (0, l.jsxs)("div", {
                className: a()($.Qs, $.fi, $.iH, $.Se),
                children: [
                    (0, l.jsxs)("div", {
                        className: $.xx,
                        children: [
                            (0, l.jsx)("div", {
                                className: $.bb,
                                children: (0, l.jsx)(Y.A, {
                                    game: n,
                                    application: i,
                                    className: $.wm,
                                    size: Y.w.LARGE,
                                }),
                            }),
                            (0, l.jsx)(U.A, {
                                applicationId: i.id,
                                className: $.Gg,
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: a()($.nM, $.Lc, $.Z3),
                        children: (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(x.Heading, {
                                    variant: "heading-xl/bold",
                                    children: g,
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()($.nM, $.Lc),
                                    children: [
                                        null != m &&
                                            (0, l.jsx)("img", {
                                                className: $.Gt,
                                                src: m,
                                                height: 16,
                                                alt: Z.intl.formatToPlainString(Z.t["nh+jWk"], { game: g }),
                                            }),
                                        (0, l.jsx)(x.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        b &&
                                            (0, l.jsx)(x.Text, {
                                                variant: "eyebrow",
                                                className: $.Ad,
                                                children: Z.intl.string(Z.t.y2b7CA),
                                            }),
                                        p &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(x.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xB7 ",
                                                    }),
                                                    (0, l.jsx)(q, {}),
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
function en(e) {
    var t;
    let {
        detectedGame: n,
        application: r,
        entries: i,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: o,
        onClose: c,
        viewId: d,
        trackAction: u,
    } = e;
    return (0, l.jsxs)("div", {
        className: $.V0,
        children: [
            (0, l.jsx)(B.A, {
                entries: i,
                viewId: d,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
            }),
            (0, l.jsx)(F.A, {
                detectedGame: n,
                trackAction: u,
            }),
            (0, l.jsx)(V.A, {
                applicationId: r.id,
                onClose: c,
                trackAction: u,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}
function el(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: r } = e;
    return (
        (0, v.A)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: { location_stack: r },
        }),
        (0, l.jsx)(f.m, {
            text: Z.intl.string(Z.t.JVwWva),
            position: "top",
            children: (0, l.jsx)(x.Button, {
                icon: x.hpF,
                text: Z.intl.string(Z.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), n();
                },
                fullWidth: !0,
            }),
        })
    );
}
function er(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: n,
            officialGuildInvite: i,
            trackAction: s,
            onClose: o,
            applicationId: c,
        } = e,
        d = r.useCallback(() => {
            o(), (0, S.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: u } = (0, h.Ay)(j.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: f } = (function (e) {
            let { applicationId: t, analyticsLocations: n } = e,
                l = (0, y.h)(t),
                r = (0, g.A)({
                    application: l,
                    analyticsLocations: n,
                });
            return {
                onCloudPlayClick: r,
                isCloudPlayButtonShown: !(0, w.L)(t) && null != r,
            };
        })({
            applicationId: c,
            analyticsLocations: u,
        });
    return (0, l.jsxs)("div", {
        className: a()($.pz, $.fi, $.iH),
        children: [
            (0, l.jsxs)("div", {
                className: $.NC,
                children: [
                    (0, l.jsx)(W.A, {
                        invite: i,
                        trackClick: s,
                        closeModal: d,
                    }),
                    m &&
                        null != f &&
                        (0, l.jsx)(el, {
                            onClose: d,
                            onCloudPlayClick: f,
                            analyticsLocations: u,
                        }),
                ],
            }),
            (0, l.jsx)(x.Heading, {
                variant: "heading-md/bold",
                children: Z.intl.string(Z.t.CI0vSJ),
            }),
            (0, l.jsxs)("div", {
                className: $.V0,
                children: [
                    (0, l.jsx)(X.A, {
                        detectedGame: t,
                        trackAction: s,
                    }),
                    (0, l.jsx)(H.A, {
                        detectedGame: t,
                        trackClick: s,
                        onInviteResolved: n,
                        closeModal: d,
                    }),
                    (0, l.jsx)(z.A, {
                        detectedGame: t,
                        trackClick: s,
                    }),
                    (0, l.jsx)(K.A, { detectedGame: t }),
                    (0, l.jsx)(x.Text, {
                        variant: "text-xxs/normal",
                        children: Z.intl.format(Z.t.pch2Jw, { igdbLink: J.s8 }),
                    }),
                ],
            }),
        ],
    });
}
function ei(e) {
    var t;
    let {
            applicationId: n,
            source: i,
            sourceUserId: s,
            transitionState: o,
            onClose: c,
            appContext: d,
            trackExternalAction: u,
        } = e,
        { clientThemesClassName: f } = (0, O.Ay)(),
        g = (0, m.bG)([E.default], () => E.default.locale),
        j = r.useMemo(() => (0, _.u9)(), []),
        h = (0, m.yK)([D.A], () => {
            var e;
            return (null != (e = D.A.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [v, w] = r.useState(null),
        S = (0, M.s)(n),
        [P, C] = r.useState(null),
        G = (0, y.h)(n),
        T = (0, m.bG)([N.A], () => N.A.getGame(n)),
        L = null != (t = null == T ? void 0 : T.name) ? t : null == G ? void 0 : G.name,
        Y = (e, t) => {
            var l;
            (0, _.Tn)({
                gameName: null != L ? L : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: j,
                officialGuildId: null == P || null == (l = P.guild) ? void 0 : l.id,
            });
        };
    return ((0, p.Ay)(() => {
        (0, _.rw)({
            source: i,
            viewId: j,
            applicationId: n,
            gameName: null != L ? L : "",
            authorId: s,
            profileType: _.HV.FullProfile,
        }),
            (0, A.He)();
    }),
    (0, y.A)(h),
    r.useEffect(() => {
        g.startsWith("en") ||
            (null == T ? void 0 : T.summaryLocalized) != null ||
            b.A.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == T ? void 0 : T.summaryLocalized, g]),
    r.useEffect(() => {
        (async () => {
            if (0 === h.length) {
                w(null);
                try {
                    await (0, k.N)(n);
                } catch (e) {
                    w(e);
                }
            }
        })();
    }, [n, h]),
    (0, p.Ay)(() => () => {
        var e;
        let t = Date.now(),
            l = S.map((e) => {
                let n = (0, I.JM)(e) ? (0, I.W6)(e, t) : (0, I.aJ)(e, g);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                });
            });
        (0, _.V_)({
            viewId: j,
            applicationId: n,
            gameName: null != L ? L : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: l,
            similarGames: h.filter(R.oS).slice(0, 5),
            officialGuildId: null == P || null == (e = P.guild) ? void 0 : e.id,
        });
    }),
    null == T || null == G)
        ? null
        : (0, l.jsx)(x.dWK, {
              transitionState: o,
              onClose: c,
              size: "xl",
              children: (0, l.jsxs)("div", {
                  className: a()(f, $.fn),
                  children: [
                      (0, l.jsxs)(x.HOs, {
                          orientation: "auto",
                          children: [
                              (0, l.jsx)(et, {
                                  detectedGame: T,
                                  application: G,
                                  entries: S,
                                  trackAction: Y,
                              }),
                              (0, l.jsx)(x.Fmo, {
                                  children: (0, l.jsxs)("div", {
                                      className: a()($.Qs, $.rb),
                                      children: [
                                          (0, l.jsx)(en, {
                                              detectedGame: T,
                                              application: G,
                                              entries: S,
                                              officialGuildInvite: P,
                                              similarGames: h,
                                              similarGamesError: v,
                                              onClose: c,
                                              viewId: j,
                                              trackAction: Y,
                                          }),
                                          (0, l.jsx)(er, {
                                              detectedGame: T,
                                              onSetOfficialGuildInvite: C,
                                              officialGuildInvite: P,
                                              trackAction: Y,
                                              onClose: c,
                                              appContext: d,
                                              applicationId: n,
                                              source: i,
                                              trackExternalAction: u,
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      }),
                      (0, l.jsx)(es, {}),
                  ],
              }),
          });
}
function ea(e) {
    let { applicationId: t, transitionState: n } = e,
        { clientThemesClassName: r } = (0, O.Ay)(),
        i = (0, y.h)(t),
        a = (0, m.bG)([N.A], () => N.A.getGame(t));
    return null == i || null == a
        ? null
        : (0, l.jsxs)(x.EOs, {
              "data-migration-pending": !0,
              transitionState: n,
              size: x.rIJ.DYNAMIC,
              className: r,
              parentComponent: "GameProfileModal",
              children: [(0, l.jsx)(d.I, { gameId: a.applicationId }), (0, l.jsx)(es, {})],
          });
}
function es() {
    let { enabled: e, canToggle: t } = L.z.useConfig({ location: "GameProfileModal" }),
        n = r.useContext(ee);
    return null != n && e && t
        ? (0, l.jsx)("div", {
              style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "scale(0.5) translate(-50%, -50%)",
              },
              children: (0, l.jsx)(x.Button, {
                  variant: "primary",
                  onClick: () => n.setIsShowingGameProfileV2((e) => !e),
                  text: "Toggle Game Profile V1 and V2",
              }),
          })
        : null;
}
let eo = function (e) {
    let { enabled: t } = L.z.useConfig({ location: "GameProfileModal" }),
        [n, i] = r.useState(t);
    return (0, l.jsx)(ee.Provider, {
        value: { setIsShowingGameProfileV2: i },
        children: n ? (0, l.jsx)(ea, Q({}, e)) : (0, l.jsx)(ei, Q({}, e)),
    });
};
