n.d(t, {
    Ir: () => z,
    J: () => K,
    YN: () => V,
    ZP: () => Q,
    iZ: () => H
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(91192),
    l = n(876215),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    f = n(239091),
    _ = n(607070),
    p = n(100527),
    h = n(605236),
    m = n(704041),
    g = n(475676),
    E = n(662594),
    b = n(594174),
    y = n(69259),
    v = n(370370),
    O = n(107062),
    I = n(91140),
    S = n(227172),
    T = n(551228),
    N = n(678869),
    A = n(278399),
    C = n(886217),
    R = n(555672),
    P = n(644548),
    w = n(335326),
    D = n(268010),
    L = n(797342),
    x = n(206583),
    M = n(921944);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let V = 72,
    Z = 2000;
function H(e) {
    return (null == e ? void 0 : e.type) === E.so.CONTENT_INVENTORY ? V : 0;
}
let W = (e) => {
        var { entry: t } = e,
            n = B(e, ['entry']);
        switch (t.content_type) {
            case l.s.PLAYED_GAME:
                return (0, r.jsx)(I.Z, G(j({}, n), { entry: t }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(w.Z, G(j({}, n), { entry: t }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(R.ZP, G(j({}, n), { entry: t }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(A.ZP, G(j({}, n), { entry: t }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(T.ZP, G(j({}, n), { entry: t }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(v.Z, G(j({}, n), { entry: t }));
            case l.s.LEADERBOARD:
                return (0, r.jsx)(g.Z, G(j({}, n), { entry: t }));
            default:
                return null;
        }
    },
    Y = (e) => {
        var { closePopout: t } = e,
            n = B(e, ['closePopout']);
        return (0, r.jsx)(
            K,
            j(
                {
                    onReaction: (e, r) => {
                        n.trackRankingItemInteraction(e, {
                            destinationChannelId: r.id,
                            destinationGuildId: r.guild_id
                        }),
                            t();
                    },
                    closePopout: t,
                    onVoiceChannelPreview: (e) => {
                        n.trackRankingItemInteraction(x.xP.VOICE_CHANNEL_PREVIEWED, {
                            destinationChannelId: e.id,
                            destinationGuildId: e.guild_id
                        });
                    }
                },
                n
            )
        );
    },
    K = (e) => {
        var t,
            { entry: n } = e,
            i = B(e, ['entry']);
        switch (n.content_type) {
            case l.s.PLAYED_GAME:
                return (0, r.jsx)(S.Z, G(j({}, i), { entry: n }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(D.Z, G(j({}, i), { entry: n }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(P.Z, G(j({}, i), { entry: n }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(C.Z, G(j({}, i), { entry: n }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(N.Z, G(j({}, i), { entry: n }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(O.ZP, G(j({}, i), { entry: n }));
            case l.s.LEADERBOARD:
                return (null == (t = i.channel) ? void 0 : t.guild_id) != null
                    ? (0, r.jsx)(m.Z, {
                          guildId: i.channel.guild_id,
                          leaderboardId: n.extra.leaderboard_id,
                          source: p.Z.MEMBER_LIST,
                          trackRankingItemInteraction: i.trackRankingItemInteraction
                      })
                    : null;
            default:
                return null;
        }
    },
    z = i.createContext(void 0),
    q = (e) => {
        var t,
            { index: o } = e,
            p = B(e, ['index']);
        let [m, g] = i.useState('default'),
            E = (0, s.JA)(''.concat(o)),
            v = null == (t = b.default.getCurrentUser()) ? void 0 : t.isStaff(),
            { isRich: O, appName: I } = (0, L.n)(p.entry),
            S = i.useMemo(
                () => ({
                    entry: p.entry,
                    channelId: p.channel.id,
                    guildId: p.channel.guild_id,
                    requestId: p.requestId,
                    richPresenceName: O ? I : void 0
                }),
                [I, p.channel.guild_id, p.channel.id, p.entry, p.requestId, O]
            ),
            T = i.useRef(!1),
            [N, A] = i.useState(!1),
            [C, R] = i.useState(!1),
            P = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled);
        i.useEffect(() => {
            N && P && R(!0);
        }, [N, P]);
        let w = i.useCallback(
                (e) => {
                    v &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await n.e('153').then(n.bind(n, 330150));
                            return () =>
                                (0, r.jsx)(e, {
                                    entry: p.entry,
                                    requestId: p.requestId
                                });
                        });
                },
                [p, v]
            ),
            D = i.useCallback(() => {
                g(String(Date.now()));
            }, []),
            k = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, y.L)(e, j({}, S, t));
                },
                [S]
            ),
            U = i.useMemo(
                () =>
                    a().throttle(
                        (e) => {
                            (0, y.L)(x.xP.CARD_POPOUT_OPEN, e);
                        },
                        Z,
                        {
                            leading: !0,
                            trailing: !1
                        }
                    ),
                []
            ),
            F = () => {
                (T.current = !1),
                    setTimeout(() => {
                        T.current || (A(!1), R(P));
                    }, 100);
            };
        return (0, r.jsx)('div', {
            onMouseEnter: () => {
                p.entry.content_type !== l.s.LEADERBOARD || (0, h.un)(u.z.LEADERBOARD_NUX_COACHMARK) || (0, h.EW)(u.z.LEADERBOARD_NUX_COACHMARK, { dismissAction: M.L.SECONDARY }),
                    (T.current = !0),
                    setTimeout(() => {
                        T.current && A(!0), U(S);
                    }, 100);
            },
            onMouseLeave: F,
            children: (0, r.jsx)(d.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(z.Provider, {
                        value: F,
                        children: (0, r.jsx)(
                            Y,
                            j(
                                {
                                    closePopout: t,
                                    updatePopoutPosition: D,
                                    trackRankingItemInteraction: k
                                },
                                p
                            )
                        )
                    });
                },
                position: 'left',
                shouldShow: N,
                positionKey: m,
                onRequestOpen: () => U(S),
                onRequestClose: () => {
                    C && F();
                },
                spacing: 8,
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, r.jsx)(
                        d.P3F,
                        G(j({}, e, E), {
                            focusProps: {
                                offset: {
                                    top: 4,
                                    bottom: 4,
                                    left: 4,
                                    right: 4
                                }
                            },
                            onClick: () => {
                                N || A(!0);
                            },
                            onContextMenu: w,
                            children: (0, r.jsx)(
                                W,
                                G(j({}, p), {
                                    selected: n,
                                    hovered: T.current
                                })
                            )
                        })
                    );
                }
            })
        });
    },
    Q = i.memo(q);
