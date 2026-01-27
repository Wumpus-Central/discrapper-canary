n.d(t, {
    default: () => eo,
}),
    n(896048),
    n(457529);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(110259),
    u = n(951912),
    d = n(379834),
    m = n(311907),
    f = n(990078),
    g = n(397927),
    x = n(544420),
    p = n(964486),
    j = n(359549),
    h = n(793574),
    v = n(688810),
    b = n(139286),
    y = n(429913),
    O = n(590703),
    A = n(708197),
    _ = n(583846),
    I = n(524799),
    w = n(928550),
    N = n(657331),
    S = n(773669),
    P = n(486020),
    E = n(541830),
    C = n(661191),
    G = n(240248),
    T = n(409626),
    k = n(880405),
    M = n(422069),
    D = n(476464),
    L = n(205184),
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
                (0, l.jsx)(g.Y3C, {
                    size: "xxs",
                }),
                (0, l.jsx)(g.Text, {
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
        c = r.useMemo(() => (null == n ? void 0 : n.genres.map(E.du).join(", ")), [n]),
        u = r.useMemo(() => {
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
        m = (0, G.uJ)(n.iconHash)
            ? null == i
                ? void 0
                : i.getIconURL(160, P.QB ? "webp" : "png")
            : P.Ay.getGameAssetURL({
                  id: n.applicationId,
                  hash: n.iconHash,
                  size: 160,
                  format: P.QB ? "webp" : "png",
              }),
        f = C.default.extractTimestamp(i.id),
        x = 7 >= o()().diff(o()(f), "days"),
        p = s.some((e) => (0, _.CZ)(e) === d.m.GLOBAL),
        j = null != (t = n.name) ? t : null == i ? void 0 : i.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: $.is,
                style: {
                    backgroundImage: 'url("'.concat(u, '")'),
                },
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
                                (0, l.jsx)(g.Heading, {
                                    variant: "heading-xl/bold",
                                    children: j,
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()($.nM, $.Lc),
                                    children: [
                                        null != m &&
                                            (0, l.jsx)("img", {
                                                className: $.Gt,
                                                src: m,
                                                height: 16,
                                                alt: Z.intl.formatToPlainString(Z.t["nh+jWk"], {
                                                    game: j,
                                                }),
                                            }),
                                        (0, l.jsx)(g.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        x &&
                                            (0, l.jsx)(g.Text, {
                                                variant: "eyebrow",
                                                className: $.Ad,
                                                children: Z.intl.string(Z.t.y2b7CA),
                                            }),
                                        p &&
                                            (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(g.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
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
        viewId: u,
        trackAction: d,
        source: m,
    } = e;
    return (0, l.jsxs)("div", {
        className: $.V0,
        children: [
            (0, l.jsx)(B.A, {
                entries: i,
                viewId: u,
                officialGuildId: null == a || null == (t = a.guild) ? void 0 : t.id,
                onClose: c,
                source: m,
            }),
            (0, l.jsx)(F.A, {
                detectedGame: n,
                trackAction: d,
            }),
            (0, l.jsx)(V.A, {
                applicationId: r.id,
                onClose: c,
                trackAction: d,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}

function el(e) {
    let { onClose: t, onCloudPlayClick: n, analyticsLocations: r } = e;
    return (
        (0, b.A)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: {
                location_stack: r,
            },
        }),
        (0, l.jsx)(f.m, {
            text: Z.intl.string(Z.t.JVwWva),
            position: "top",
            children: (0, l.jsx)(g.Button, {
                icon: g.hpF,
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
        u = r.useCallback(() => {
            o(), (0, N.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: d } = (0, v.Ay)(h.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: f } = (function (e) {
            let { applicationId: t, analyticsLocations: n } = e,
                l = (0, y.h)(t),
                r = (0, j.A)({
                    application: l,
                    analyticsLocations: n,
                });
            return {
                onCloudPlayClick: r,
                isCloudPlayButtonShown: !(0, w.L)(t) && null != r,
            };
        })({
            applicationId: c,
            analyticsLocations: d,
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
                        closeModal: u,
                    }),
                    m &&
                        null != f &&
                        (0, l.jsx)(el, {
                            onClose: u,
                            onCloudPlayClick: f,
                            analyticsLocations: d,
                        }),
                ],
            }),
            (0, l.jsx)(g.Heading, {
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
                        closeModal: u,
                    }),
                    (0, l.jsx)(z.A, {
                        detectedGame: t,
                        trackClick: s,
                    }),
                    (0, l.jsx)(K.A, {
                        detectedGame: t,
                    }),
                    (0, l.jsx)(g.Text, {
                        variant: "text-xxs/normal",
                        children: Z.intl.format(Z.t.pch2Jw, {
                            igdbLink: J.s8,
                        }),
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
            appContext: u,
            trackExternalAction: d,
        } = e,
        { clientThemesClassName: f } = (0, O.Ay)(),
        j = (0, m.bG)([S.default], () => S.default.locale),
        h = r.useMemo(() => (0, T.u9)(), []),
        v = (0, m.yK)([M.A], () => {
            var e;
            return (null != (e = M.A.getSimilarGames(n)) ? e : []).slice(0, 25);
        }),
        [b, w] = r.useState(null),
        N = (0, L.s)(n),
        [P, E] = r.useState(null),
        C = (0, y.h)(n),
        G = (0, m.bG)([I.A], () => I.A.getGame(n)),
        D = null != (t = null == G ? void 0 : G.name) ? t : null == C ? void 0 : C.name,
        Y = (e, t) => {
            var l;
            (0, T.Tn)({
                gameName: null != D ? D : "",
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: h,
                officialGuildId: null == P || null == (l = P.guild) ? void 0 : l.id,
                source: i,
            });
        };
    return ((0, p.Ay)(() => {
        (0, T.rw)({
            source: i,
            viewId: h,
            applicationId: n,
            gameName: null != D ? D : "",
            authorId: s,
            profileType: T.HV.FullProfile,
        }),
            (0, A.He)();
    }),
    (0, y.A)(v),
    r.useEffect(() => {
        j.startsWith("en") ||
            (null == G ? void 0 : G.summaryLocalized) != null ||
            x.A.getDetectableGamesSupplemental([n], {
                forceFetch: !0,
            });
    }, [n, null == G ? void 0 : G.summaryLocalized, j]),
    r.useEffect(() => {
        (async () => {
            if (0 === v.length) {
                w(null);
                try {
                    await (0, k.N)(n);
                } catch (e) {
                    w(e);
                }
            }
        })();
    }, [n, v]),
    (0, p.Ay)(() => () => {
        var e;
        let t = Date.now(),
            l = N.map((e) => {
                let n = (0, _.JM)(e) ? (0, _.W6)(e, t) : (0, _.aJ)(e, j);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n,
                });
            });
        (0, T.V_)({
            viewId: h,
            applicationId: n,
            gameName: null != D ? D : "",
            playedFriendIds: N.map((e) => e.author_id),
            playedFriendsData: l,
            similarGames: v.filter(R.oS).slice(0, 5),
            officialGuildId: null == P || null == (e = P.guild) ? void 0 : e.id,
        });
    }),
    null == G || null == C)
        ? null
        : (0, l.jsx)(g.dWK, {
              transitionState: o,
              onClose: c,
              size: "xl",
              children: (0, l.jsxs)("div", {
                  className: a()(f, $.fn),
                  children: [
                      (0, l.jsxs)(g.HOs, {
                          orientation: "auto",
                          children: [
                              (0, l.jsx)(et, {
                                  detectedGame: G,
                                  application: C,
                                  entries: N,
                                  trackAction: Y,
                              }),
                              (0, l.jsx)(g.Fmo, {
                                  children: (0, l.jsxs)("div", {
                                      className: a()($.Qs, $.rb),
                                      children: [
                                          (0, l.jsx)(en, {
                                              detectedGame: G,
                                              application: C,
                                              entries: N,
                                              officialGuildInvite: P,
                                              similarGames: v,
                                              similarGamesError: b,
                                              onClose: c,
                                              viewId: h,
                                              trackAction: Y,
                                              source: i,
                                          }),
                                          (0, l.jsx)(er, {
                                              detectedGame: G,
                                              onSetOfficialGuildInvite: E,
                                              officialGuildInvite: P,
                                              trackAction: Y,
                                              onClose: c,
                                              appContext: u,
                                              applicationId: n,
                                              source: i,
                                              trackExternalAction: d,
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
        a = (0, m.bG)([I.A], () => I.A.getGame(t));
    return null == i || null == a
        ? null
        : (0, l.jsxs)(g.EOs, {
              "data-migration-pending": !0,
              transitionState: n,
              size: g.rIJ.DYNAMIC,
              className: r,
              parentComponent: "GameProfileModal",
              children: [
                  (0, l.jsx)(u.I, {
                      gameId: a.applicationId,
                  }),
                  (0, l.jsx)(es, {}),
              ],
          });
}

function es() {
    let { enabled: e, canToggle: t } = D.z.useConfig({
            location: "GameProfileModal",
        }),
        n = r.useContext(ee);
    return null != n && e && t
        ? (0, l.jsx)("div", {
              style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "scale(0.5) translate(-50%, -50%)",
              },
              children: (0, l.jsx)(g.Button, {
                  variant: "primary",
                  onClick: () => n.setIsShowingGameProfileV2((e) => !e),
                  text: "Toggle Game Profile V1 and V2",
              }),
          })
        : null;
}
let eo = function (e) {
    let { enabled: t } = D.z.useConfig({
            location: "GameProfileModal",
        }),
        [n, i] = r.useState(t);
    return (0, l.jsx)(ee.Provider, {
        value: {
            setIsShowingGameProfileV2: i,
        },
        children: n ? (0, l.jsx)(ea, Q({}, e)) : (0, l.jsx)(ei, Q({}, e)),
    });
};
