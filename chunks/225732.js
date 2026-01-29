l.d(t, {
    default: () => eu,
}),
    l(896048),
    l(457529);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(989349),
    o = l.n(s),
    c = l(110259),
    d = l(379834),
    u = l(311907),
    m = l(990078),
    x = l(397927),
    f = l(544420),
    g = l(964486),
    h = l(359549),
    p = l(793574),
    j = l(688810),
    v = l(139286),
    b = l(429913),
    y = l(590703),
    A = l(708197),
    N = l(583846),
    O = l(524799),
    _ = l(928550),
    I = l(657331),
    w = l(773669),
    S = l(486020),
    E = l(541830),
    C = l(661191),
    G = l(240248),
    T = l(409626),
    P = l(880405),
    k = l(422069),
    M = l(476464),
    L = l(205184),
    D = l(611656),
    R = l(459746),
    U = l(503364),
    W = l(976720),
    Y = l(839671),
    z = l(94836),
    F = l(392332),
    H = l(639714),
    B = l(310721),
    V = l(582942),
    X = l(771004),
    K = l(424994),
    J = l(985018),
    Z = l(851822);

function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let $ = () =>
        (0, n.jsxs)("div", {
            className: Z.uv,
            children: [
                (0, n.jsx)(x.Y3C, {
                    size: "xxs",
                }),
                (0, n.jsx)(x.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: J.intl.string(J.t.kAlUsy),
                }),
            ],
        }),
    q = i.createContext(void 0);

function ee(e) {
    var t;
    let { detectedGame: l, application: a, entries: s } = e,
        c = i.useMemo(() => (null == l ? void 0 : l.genres.map(E.du).join(", ")), [l]),
        [u] = i.useState(() => Math.random()),
        m = i.useMemo(() => {
            if (null == l) return "";
            let { artwork: e, screenshots: t } = l;
            if (e.length > 0) {
                let t = Math.floor(u * e.length);
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(u * t.length);
                return t[e];
            }
            return "";
        }, [l, u]),
        f = (0, G.uJ)(l.iconHash)
            ? null == a
                ? void 0
                : a.getIconURL(160, S.QB ? "webp" : "png")
            : S.Ay.getGameAssetURL({
                  id: l.applicationId,
                  hash: l.iconHash,
                  size: 160,
                  format: S.QB ? "webp" : "png",
              }),
        g = C.default.extractTimestamp(a.id),
        h = 7 >= o()().diff(o()(g), "days"),
        p = s.some((e) => (0, N.CZ)(e) === d.m.GLOBAL),
        j = null != (t = l.name) ? t : null == a ? void 0 : a.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: Z.is,
                style: {
                    backgroundImage: 'url("'.concat(m, '")'),
                },
            }),
            (0, n.jsxs)("div", {
                className: r()(Z.Qs, Z.fi, Z.iH, Z.Se),
                children: [
                    (0, n.jsxs)("div", {
                        className: Z.xx,
                        children: [
                            (0, n.jsx)("div", {
                                className: Z.bb,
                                children: (0, n.jsx)(R.A, {
                                    game: l,
                                    application: a,
                                    className: Z.wm,
                                    size: R.w.LARGE,
                                }),
                            }),
                            (0, n.jsx)(U.A, {
                                applicationId: a.id,
                                className: Z.Gg,
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: r()(Z.nM, Z.Lc, Z.Z3),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(x.Heading, {
                                    variant: "heading-xl/bold",
                                    children: j,
                                }),
                                (0, n.jsxs)("div", {
                                    className: r()(Z.nM, Z.Lc),
                                    children: [
                                        null != f &&
                                            (0, n.jsx)("img", {
                                                className: Z.Gt,
                                                src: f,
                                                height: 16,
                                                alt: J.intl.formatToPlainString(J.t["nh+jWk"], {
                                                    game: j,
                                                }),
                                            }),
                                        (0, n.jsx)(x.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        h &&
                                            (0, n.jsx)(x.Text, {
                                                variant: "eyebrow",
                                                className: Z.Ad,
                                                children: J.intl.string(J.t.y2b7CA),
                                            }),
                                        p &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(x.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, n.jsx)($, {}),
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
    var t;
    let { detectedGame: l, application: a, entries: s } = e,
        c = i.useMemo(() => (null == l ? void 0 : l.genres.map(E.du).join(", ")), [l]),
        [u] = i.useState(() => Math.random()),
        m = i.useMemo(() => {
            if (null == l) return "";
            let { artwork: e, screenshots: t } = l;
            if (e.length > 0) {
                let t = Math.floor(u * e.length);
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(u * t.length);
                return t[e];
            }
            return "";
        }, [l, u]),
        f = (0, G.uJ)(l.iconHash)
            ? null == a
                ? void 0
                : a.getIconURL(160, S.QB ? "webp" : "png")
            : S.Ay.getGameAssetURL({
                  id: l.applicationId,
                  hash: l.iconHash,
                  size: 160,
                  format: S.QB ? "webp" : "png",
              }),
        g = C.default.extractTimestamp(a.id),
        h = 7 >= o()().diff(o()(g), "days"),
        p = s.some((e) => (0, N.CZ)(e) === d.m.GLOBAL),
        j = null != (t = l.name) ? t : null == a ? void 0 : a.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: Z.is,
                style: {
                    backgroundImage: 'url("'.concat(m, '")'),
                },
            }),
            (0, n.jsxs)("div", {
                className: r()(Z.Qs, Z.fi, Z.iH, Z.Se),
                children: [
                    (0, n.jsxs)("div", {
                        className: Z.xx,
                        children: [
                            (0, n.jsx)("div", {
                                className: Z.bb,
                                children: (0, n.jsx)(R.A, {
                                    game: l,
                                    application: a,
                                    className: Z.wm,
                                    size: R.w.LARGE,
                                }),
                            }),
                            (0, n.jsx)(U.N, {
                                applicationId: a.id,
                                className: Z.Gg,
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: r()(Z.nM, Z.Lc, Z.Z3),
                        children: (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(x.Heading, {
                                    variant: "heading-xl/bold",
                                    children: j,
                                }),
                                (0, n.jsxs)("div", {
                                    className: r()(Z.nM, Z.Lc),
                                    children: [
                                        null != f &&
                                            (0, n.jsx)("img", {
                                                className: Z.Gt,
                                                src: f,
                                                height: 16,
                                                alt: J.intl.formatToPlainString(J.t["nh+jWk"], {
                                                    game: j,
                                                }),
                                            }),
                                        (0, n.jsx)(x.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-muted",
                                            children: c,
                                        }),
                                        h &&
                                            (0, n.jsx)(x.Text, {
                                                variant: "eyebrow",
                                                className: Z.Ad,
                                                children: J.intl.string(J.t.y2b7CA),
                                            }),
                                        p &&
                                            (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(x.Text, {
                                                        variant: "text-sm/medium",
                                                        children: " \xb7 ",
                                                    }),
                                                    (0, n.jsx)($, {}),
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
    var t;
    let {
        detectedGame: l,
        application: i,
        entries: a,
        officialGuildInvite: r,
        similarGames: s,
        similarGamesError: o,
        onClose: c,
        viewId: d,
        trackAction: u,
        source: m,
    } = e;
    return (0, n.jsxs)("div", {
        className: Z.V0,
        children: [
            (0, n.jsx)(F.A, {
                entries: a,
                viewId: d,
                officialGuildId: null == r || null == (t = r.guild) ? void 0 : t.id,
                onClose: c,
                source: m,
            }),
            (0, n.jsx)(z.A, {
                detectedGame: l,
                trackAction: u,
            }),
            (0, n.jsx)(V.A, {
                applicationId: i.id,
                onClose: c,
                trackAction: u,
                similarGames: s,
                similarGamesError: o,
            }),
        ],
    });
}

function en(e) {
    let { detectedGame: t, trackAction: l } = e;
    return (0, n.jsx)("div", {
        className: Z.V0,
        children: (0, n.jsx)(z.a, {
            detectedGame: t,
            trackAction: l,
        }),
    });
}

function ei(e) {
    let { onClose: t, onCloudPlayClick: l, analyticsLocations: i } = e;
    return (
        (0, v.A)({
            name: c.ImpressionNames.CLOUD_PLAY_CTA,
            type: c.ImpressionTypes.VIEW,
            properties: {
                location_stack: i,
            },
        }),
        (0, n.jsx)(m.m, {
            text: J.intl.string(J.t.JVwWva),
            position: "top",
            children: (0, n.jsx)(x.Button, {
                icon: x.hpF,
                text: J.intl.string(J.t["jaYS/h"]),
                variant: "overlay-secondary",
                onClick: () => {
                    t(), l();
                },
                fullWidth: !0,
            }),
        })
    );
}

function ea(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        n = (0, b.h)(t),
        i = (0, h.A)({
            application: n,
            analyticsLocations: l,
        });
    return {
        onCloudPlayClick: i,
        isCloudPlayButtonShown: !(0, _.L)(t) && null != i,
    };
}

function er(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: l,
            officialGuildInvite: a,
            trackAction: s,
            onClose: o,
            applicationId: c,
        } = e,
        d = i.useCallback(() => {
            o(), (0, I.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: u } = (0, j.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: f } = ea({
            applicationId: c,
            analyticsLocations: u,
        });
    return (0, n.jsxs)("div", {
        className: r()(Z.pz, Z.fi, Z.iH),
        children: [
            (0, n.jsxs)("div", {
                className: Z.NC,
                children: [
                    (0, n.jsx)(W.A, {
                        invite: a,
                        trackClick: s,
                        closeModal: d,
                    }),
                    m &&
                        null != f &&
                        (0, n.jsx)(ei, {
                            onClose: d,
                            onCloudPlayClick: f,
                            analyticsLocations: u,
                        }),
                ],
            }),
            (0, n.jsx)(x.Heading, {
                variant: "heading-md/bold",
                children: J.intl.string(J.t.CI0vSJ),
            }),
            (0, n.jsxs)("div", {
                className: Z.V0,
                children: [
                    (0, n.jsx)(X.h, {
                        detectedGame: t,
                        trackAction: s,
                    }),
                    (0, n.jsx)(H.A, {
                        detectedGame: t,
                        trackClick: s,
                        onInviteResolved: l,
                        closeModal: d,
                    }),
                    (0, n.jsx)(Y.A, {
                        detectedGame: t,
                        trackClick: s,
                    }),
                    (0, n.jsx)(B.A, {
                        detectedGame: t,
                    }),
                    (0, n.jsx)(x.Text, {
                        variant: "text-xxs/normal",
                        children: J.intl.format(J.t.pch2Jw, {
                            igdbLink: K.s8,
                        }),
                    }),
                ],
            }),
        ],
    });
}

function es(e) {
    let {
            detectedGame: t,
            onSetOfficialGuildInvite: l,
            officialGuildInvite: a,
            trackAction: s,
            onClose: o,
            applicationId: c,
        } = e,
        d = i.useCallback(() => {
            o(), (0, I.closeUserProfileModal)();
        }, [o]),
        { analyticsLocations: u } = (0, j.Ay)(p.A.GAME_PROFILE),
        { isCloudPlayButtonShown: m, onCloudPlayClick: f } = ea({
            applicationId: c,
            analyticsLocations: u,
        });
    return (0, n.jsxs)("div", {
        className: r()(Z.pz, Z.fi, Z.iH),
        children: [
            (0, n.jsxs)("div", {
                className: Z.NC,
                children: [
                    (0, n.jsx)(W.Y, {
                        invite: a,
                        trackClick: s,
                        closeModal: d,
                    }),
                    m &&
                        null != f &&
                        (0, n.jsx)(ei, {
                            onClose: d,
                            onCloudPlayClick: f,
                            analyticsLocations: u,
                        }),
                ],
            }),
            (0, n.jsx)(x.Heading, {
                variant: "heading-md/bold",
                children: J.intl.string(J.t.CI0vSJ),
            }),
            (0, n.jsxs)("div", {
                className: Z.V0,
                children: [
                    (0, n.jsx)(X.A, {
                        detectedGame: t,
                        trackAction: s,
                    }),
                    (0, n.jsx)(H.o, {
                        detectedGame: t,
                        trackClick: s,
                        onInviteResolved: l,
                        closeModal: d,
                    }),
                    (0, n.jsx)(Y.R, {
                        detectedGame: t,
                        trackClick: s,
                    }),
                    (0, n.jsx)(B.v, {
                        detectedGame: t,
                    }),
                    (0, n.jsx)(x.Text, {
                        variant: "text-xxs/normal",
                        children: J.intl.format(J.t.pch2Jw, {
                            igdbLink: K.s8,
                        }),
                    }),
                ],
            }),
        ],
    });
}

function eo(e) {
    var t;
    let {
            applicationId: l,
            source: a,
            sourceUserId: s,
            transitionState: o,
            onClose: c,
            appContext: d,
            trackExternalAction: m,
        } = e,
        { clientThemesClassName: h } = (0, y.Ay)(),
        p = (0, u.bG)([w.default], () => w.default.locale),
        j = i.useMemo(() => (0, T.u9)(), []),
        v = (0, u.yK)([k.A], () => {
            var e;
            return (null != (e = k.A.getSimilarGames(l)) ? e : []).slice(0, 25);
        }),
        [_, I] = i.useState(null),
        S = (0, L.s)(l),
        [E, C] = i.useState(null),
        G = (0, b.h)(l),
        M = (0, u.bG)([O.A], () => O.A.getGame(l)),
        R = null != (t = null == M ? void 0 : M.name) ? t : null == G ? void 0 : G.name,
        U = (e, t) => {
            var n;
            (0, T.Tn)({
                gameName: null != R ? R : "",
                applicationId: l,
                action: e,
                similarGameId: t,
                viewId: j,
                officialGuildId: null == E || null == (n = E.guild) ? void 0 : n.id,
                source: a,
            });
        };
    return ((0, g.Ay)(() => {
        (0, T.rw)({
            source: a,
            viewId: j,
            applicationId: l,
            gameName: null != R ? R : "",
            authorId: s,
            profileType: T.HV.FullProfile,
        }),
            (0, A.He)();
    }),
    (0, b.A)(v),
    i.useEffect(() => {
        p.startsWith("en") ||
            (null == M ? void 0 : M.summaryLocalized) != null ||
            f.A.getDetectableGamesSupplemental([l], {
                forceFetch: !0,
            });
    }, [l, null == M ? void 0 : M.summaryLocalized, p]),
    i.useEffect(() => {
        (async () => {
            if (0 === v.length) {
                I(null);
                try {
                    await (0, P.N)(l);
                } catch (e) {
                    I(e);
                }
            }
        })();
    }, [l, v]),
    (0, g.Ay)(() => () => {
        var e;
        let t = Date.now(),
            n = S.map((e) => {
                let l = (0, N.JM)(e) ? (0, N.W6)(e, t) : (0, N.aJ)(e, p);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: l,
                });
            });
        (0, T.V_)({
            viewId: j,
            applicationId: l,
            gameName: null != R ? R : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: v.filter(D.oS).slice(0, 5),
            officialGuildId: null == E || null == (e = E.guild) ? void 0 : e.id,
        });
    }),
    null == M || null == G)
        ? null
        : (0, n.jsx)(x.dWK, {
              transitionState: o,
              onClose: c,
              size: "xl",
              children: (0, n.jsxs)("div", {
                  className: r()(h, Z.fn),
                  children: [
                      (0, n.jsxs)(x.HOs, {
                          orientation: "auto",
                          children: [
                              (0, n.jsx)(ee, {
                                  detectedGame: M,
                                  application: G,
                                  entries: S,
                                  trackAction: U,
                              }),
                              (0, n.jsx)(x.Fmo, {
                                  children: (0, n.jsxs)("div", {
                                      className: r()(Z.Qs, Z.rb),
                                      children: [
                                          (0, n.jsx)(el, {
                                              detectedGame: M,
                                              application: G,
                                              entries: S,
                                              officialGuildInvite: E,
                                              similarGames: v,
                                              similarGamesError: _,
                                              onClose: c,
                                              viewId: j,
                                              trackAction: U,
                                              source: a,
                                          }),
                                          (0, n.jsx)(er, {
                                              detectedGame: M,
                                              onSetOfficialGuildInvite: C,
                                              officialGuildInvite: E,
                                              trackAction: U,
                                              onClose: c,
                                              appContext: d,
                                              applicationId: l,
                                              source: a,
                                              trackExternalAction: m,
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsx)(ed, {}),
                  ],
              }),
          });
}

function ec(e) {
    var t;
    let {
            applicationId: l,
            source: a,
            sourceUserId: s,
            transitionState: o,
            onClose: c,
            appContext: d,
            trackExternalAction: m,
        } = e,
        { clientThemesClassName: h } = (0, y.Ay)(),
        p = (0, u.bG)([w.default], () => w.default.locale),
        j = i.useMemo(() => (0, T.u9)(), []),
        v = (0, L.s)(l),
        [_, I] = i.useState(null),
        S = (0, b.h)(l),
        E = (0, u.bG)([O.A], () => O.A.getGame(l)),
        C = null != (t = null == E ? void 0 : E.name) ? t : null == S ? void 0 : S.name,
        G = (e, t) => {
            var n;
            (0, T.Tn)({
                gameName: null != C ? C : "",
                applicationId: l,
                action: e,
                similarGameId: t,
                viewId: j,
                officialGuildId: null == _ || null == (n = _.guild) ? void 0 : n.id,
                source: a,
            });
        };
    return ((0, g.Ay)(() => {
        (0, T.rw)({
            source: a,
            viewId: j,
            applicationId: l,
            gameName: null != C ? C : "",
            authorId: s,
            profileType: T.HV.FullProfile,
        }),
            (0, A.He)();
    }),
    i.useEffect(() => {
        p.startsWith("en") ||
            (null == E ? void 0 : E.summaryLocalized) != null ||
            f.A.getDetectableGamesSupplemental([l], {
                forceFetch: !0,
            });
    }, [l, null == E ? void 0 : E.summaryLocalized, p]),
    (0, g.Ay)(() => () => {
        var e;
        let t = Date.now(),
            n = v.map((e) => {
                let l = (0, N.JM)(e) ? (0, N.W6)(e, t) : (0, N.aJ)(e, p);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: l,
                });
            });
        (0, T.V_)({
            viewId: j,
            applicationId: l,
            gameName: null != C ? C : "",
            playedFriendIds: v.map((e) => e.author_id),
            playedFriendsData: n,
            similarGames: [],
            officialGuildId: null == _ || null == (e = _.guild) ? void 0 : e.id,
        });
    }),
    null == E || null == S)
        ? null
        : (0, n.jsx)(x.dWK, {
              transitionState: o,
              onClose: c,
              size: "xl",
              children: (0, n.jsxs)("div", {
                  className: r()(h, Z.fn),
                  children: [
                      (0, n.jsxs)(x.HOs, {
                          orientation: "auto",
                          children: [
                              (0, n.jsx)(et, {
                                  detectedGame: E,
                                  application: S,
                                  entries: v,
                                  trackAction: G,
                              }),
                              (0, n.jsx)(x.Fmo, {
                                  children: (0, n.jsxs)("div", {
                                      className: r()(Z.Qs, Z.rb),
                                      children: [
                                          (0, n.jsx)(en, {
                                              detectedGame: E,
                                              trackAction: G,
                                          }),
                                          (0, n.jsx)(es, {
                                              detectedGame: E,
                                              onSetOfficialGuildInvite: I,
                                              officialGuildInvite: _,
                                              trackAction: G,
                                              onClose: c,
                                              appContext: d,
                                              applicationId: l,
                                              source: a,
                                              trackExternalAction: m,
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsx)(ed, {}),
                  ],
              }),
          });
}

function ed() {
    let { enabled: e, canToggle: t } = M.z.useConfig({
            location: "GameProfileModal",
        }),
        l = i.useContext(q);
    return null != l && e && t
        ? (0, n.jsx)("div", {
              style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "scale(0.5) translate(-50%, -50%)",
              },
              children: (0, n.jsx)(x.Button, {
                  variant: "primary",
                  onClick: () => l.setIsShowingGameProfileV2((e) => !e),
                  text: "Toggle Game Profile V1 and V2",
              }),
          })
        : null;
}
let eu = function (e) {
    let { enabled: t } = M.z.useConfig({
            location: "GameProfileModal",
        }),
        [l, a] = i.useState(t);
    return (0, n.jsx)(q.Provider, {
        value: {
            setIsShowingGameProfileV2: a,
        },
        children: l ? (0, n.jsx)(ec, Q({}, e)) : (0, n.jsx)(eo, Q({}, e)),
    });
};
