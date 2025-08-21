n.d(t, {
    Ir: () => X,
    J: () => q,
    YN: () => F,
    ZP: () => J,
    iZ: () => Y,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(91192),
    l = n(876215),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    f = n(239091),
    _ = n(607070),
    p = n(100527),
    h = n(266454),
    m = n(704041),
    g = n(475676),
    E = n(439170),
    b = n(594174),
    y = n(69259),
    O = n(370370),
    v = n(107062),
    I = n(91140),
    T = n(227172),
    S = n(342998),
    A = n(551228),
    C = n(678869),
    N = n(278399),
    R = n(886217),
    P = n(555672),
    w = n(644548),
    D = n(335326),
    x = n(268010),
    L = n(797342),
    j = n(206583),
    M = n(921944);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let F = 72,
    H = 2000;
function Y(e) {
    return (null == e ? void 0 : e.type) === E.so.CONTENT_INVENTORY ? F : 0;
}
let W = (e) => {
        var { entry: t } = e,
            n = Z(e, ["entry"]);
        switch (t.content_type) {
            case l.s.PLAYED_GAME:
                return (0, r.jsx)(I.Z, B(U({}, n), { entry: t }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(D.Z, B(U({}, n), { entry: t }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(P.ZP, B(U({}, n), { entry: t }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(N.ZP, B(U({}, n), { entry: t }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(A.ZP, B(U({}, n), { entry: t }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(O.Z, B(U({}, n), { entry: t }));
            case l.s.LEADERBOARD:
                return (0, r.jsx)(g.Z, B(U({}, n), { entry: t }));
            default:
                return null;
        }
    },
    K = (e) => {
        var t,
            { entry: n, targetElementRef: i } = e,
            a = Z(e, ["entry", "targetElementRef"]);
        return n.content_type === l.s.PLAYED_GAME
            ? (0, r.jsx)(S.Z, {
                  entry: n,
                  targetElementRef: i,
                  isFirstApplicationOccurrence: null != (t = a.isFirstApplicationOccurrence) && t,
              })
            : null;
    },
    z = (e) => {
        var { closePopout: t } = e,
            n = Z(e, ["closePopout"]);
        return (0, r.jsx)(
            q,
            U(
                {
                    onReaction: (e, r) => {
                        n.trackRankingItemInteraction(e, {
                            destinationChannelId: r.id,
                            destinationGuildId: r.guild_id,
                        }),
                            t();
                    },
                    closePopout: t,
                    onVoiceChannelPreview: (e) => {
                        n.trackRankingItemInteraction(j.xP.VOICE_CHANNEL_PREVIEWED, {
                            destinationChannelId: e.id,
                            destinationGuildId: e.guild_id,
                        });
                    },
                },
                n,
            ),
        );
    },
    q = (e) => {
        var t,
            { entry: n } = e,
            i = Z(e, ["entry"]);
        switch (n.content_type) {
            case l.s.PLAYED_GAME:
                return (0, r.jsx)(T.Z, B(U({}, i), { entry: n }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(x.Z, B(U({}, i), { entry: n }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(w.Z, B(U({}, i), { entry: n }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(R.Z, B(U({}, i), { entry: n }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(C.Z, B(U({}, i), { entry: n }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(v.ZP, B(U({}, i), { entry: n }));
            case l.s.LEADERBOARD:
                return (null == (t = i.channel) ? void 0 : t.guild_id) != null
                    ? (0, r.jsx)(m.Z, {
                          guildId: i.channel.guild_id,
                          leaderboardId: n.extra.leaderboard_id,
                          source: p.Z.MEMBER_LIST,
                          trackRankingItemInteraction: i.trackRankingItemInteraction,
                      })
                    : null;
            default:
                return null;
        }
    },
    X = i.createContext(void 0),
    Q = (e) => {
        var t,
            { index: a, ref: p } = e,
            m = Z(e, ["index", "ref"]);
        let g = i.useRef(null),
            [E, O] = i.useState("default"),
            [v, I] = i.useState(!1),
            T = (0, s.JA)("".concat(a)),
            S = null == (t = b.default.getCurrentUser()) ? void 0 : t.isStaff(),
            { isRich: A, appName: C } = (0, L.n)(m.entry),
            N = i.useMemo(
                () => ({
                    entry: m.entry,
                    channelId: m.channel.id,
                    guildId: m.channel.guild_id,
                    requestId: m.requestId,
                    richPresenceName: A ? C : void 0,
                }),
                [C, m.channel.guild_id, m.channel.id, m.entry, m.requestId, A],
            ),
            R = i.useRef(!1),
            [P, w] = i.useState(!1),
            [D, x] = i.useState(!1),
            k = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled);
        i.useEffect(() => {
            P && k && x(!0);
        }, [P, k]),
            i.useLayoutEffect(() => {
                null != g.current && I(!0);
            }, []);
        let G = i.useCallback(
                (e) => {
                    S &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await n.e("153").then(n.bind(n, 330150));
                            return () =>
                                (0, r.jsx)(e, {
                                    entry: m.entry,
                                    requestId: m.requestId,
                                });
                        });
                },
                [m, S],
            ),
            V = i.useCallback(() => {
                O(String(Date.now()));
            }, []),
            F = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, y.L)(e, U({}, N, t));
                },
                [N],
            ),
            Y = i.useMemo(
                () =>
                    o().throttle(
                        (e) => {
                            (0, y.L)(j.xP.CARD_POPOUT_OPEN, e);
                        },
                        H,
                        {
                            leading: !0,
                            trailing: !1,
                        },
                    ),
                [],
            ),
            q = () => {
                (R.current = !1),
                    setTimeout(() => {
                        R.current || (w(!1), x(k));
                    }, 100);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                v && (0, r.jsx)(K, B(U({}, m), { targetElementRef: g })),
                (0, r.jsx)("div", {
                    ref: p,
                    onMouseEnter: () => {
                        m.entry.content_type !== l.s.LEADERBOARD ||
                            (0, h.zu)(u.z.LEADERBOARD_NUX_COACHMARK) ||
                            (0, h.Q3)(u.z.LEADERBOARD_NUX_COACHMARK, { dismissAction: M.L.SECONDARY }),
                            (R.current = !0),
                            setTimeout(() => {
                                R.current && w(!0), Y(N);
                            }, 100);
                    },
                    onMouseLeave: q,
                    children: (0, r.jsx)(d.yRy, {
                        targetElementRef: g,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(X.Provider, {
                                value: q,
                                children: (0, r.jsx)(
                                    z,
                                    U(
                                        {
                                            closePopout: t,
                                            updatePopoutPosition: V,
                                            trackRankingItemInteraction: F,
                                        },
                                        m,
                                    ),
                                ),
                            });
                        },
                        position: "left",
                        shouldShow: P,
                        positionKey: E,
                        onRequestOpen: () => Y(N),
                        onRequestClose: () => {
                            D && q();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, r.jsx)(
                                d.P3F,
                                B(U({}, e, T), {
                                    innerRef: g,
                                    focusProps: {
                                        offset: {
                                            top: 4,
                                            bottom: 4,
                                            left: 4,
                                            right: 4,
                                        },
                                    },
                                    onClick: () => {
                                        P || w(!0);
                                    },
                                    onContextMenu: G,
                                    children: (0, r.jsx)(
                                        W,
                                        B(U({}, m), {
                                            selected: n,
                                            hovered: R.current,
                                        }),
                                    ),
                                }),
                            );
                        },
                    }),
                }),
            ],
        });
    },
    J = i.memo(Q);
