(n.d(t, {
    Ir: () => z,
    J: () => K,
    YN: () => F,
    ZP: () => X,
    iZ: () => H
}),
    n(388685));
var r = n(255367),
    i = n(73800),
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
    S = n(551228),
    A = n(678869),
    N = n(278399),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            }));
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let F = 72,
    Z = 2000;
function H(e) {
    return (null == e ? void 0 : e.type) === E.so.CONTENT_INVENTORY ? F : 0;
}
let Y = (e) => {
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
                return (0, r.jsx)(N.ZP, G(j({}, n), { entry: t }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(S.ZP, G(j({}, n), { entry: t }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(O.Z, G(j({}, n), { entry: t }));
            case l.s.LEADERBOARD:
                return (0, r.jsx)(g.Z, G(j({}, n), { entry: t }));
            default:
                return null;
        }
    },
    W = (e) => {
        var { closePopout: t } = e,
            n = B(e, ['closePopout']);
        return (0, r.jsx)(
            K,
            j(
                {
                    onReaction: (e, r) => {
                        (n.trackRankingItemInteraction(e, {
                            destinationChannelId: r.id,
                            destinationGuildId: r.guild_id
                        }),
                            t());
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
                return (0, r.jsx)(T.Z, G(j({}, i), { entry: n }));
            case l.s.WATCHED_MEDIA:
                return (0, r.jsx)(D.Z, G(j({}, i), { entry: n }));
            case l.s.TOP_GAME:
                return (0, r.jsx)(P.Z, G(j({}, i), { entry: n }));
            case l.s.TOP_ARTIST:
                return (0, r.jsx)(C.Z, G(j({}, i), { entry: n }));
            case l.s.LISTENED_SESSION:
                return (0, r.jsx)(A.Z, G(j({}, i), { entry: n }));
            case l.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(v.ZP, G(j({}, i), { entry: n }));
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
            { index: a, ref: p } = e,
            m = B(e, ['index', 'ref']);
        let g = i.useRef(null),
            [E, O] = i.useState('default'),
            v = (0, s.JA)(''.concat(a)),
            I = null == (t = b.default.getCurrentUser()) ? void 0 : t.isStaff(),
            { isRich: T, appName: S } = (0, L.n)(m.entry),
            A = i.useMemo(
                () => ({
                    entry: m.entry,
                    channelId: m.channel.id,
                    guildId: m.channel.guild_id,
                    requestId: m.requestId,
                    richPresenceName: T ? S : void 0
                }),
                [S, m.channel.guild_id, m.channel.id, m.entry, m.requestId, T]
            ),
            N = i.useRef(!1),
            [C, R] = i.useState(!1),
            [P, w] = i.useState(!1),
            D = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled);
        i.useEffect(() => {
            C && D && w(!0);
        }, [C, D]);
        let k = i.useCallback(
                (e) => {
                    I &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await n.e('153').then(n.bind(n, 330150));
                            return () =>
                                (0, r.jsx)(e, {
                                    entry: m.entry,
                                    requestId: m.requestId
                                });
                        });
                },
                [m, I]
            ),
            U = i.useCallback(() => {
                O(String(Date.now()));
            }, []),
            V = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, y.L)(e, j({}, A, t));
                },
                [A]
            ),
            F = i.useMemo(
                () =>
                    o().throttle(
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
            H = () => {
                ((N.current = !1),
                    setTimeout(() => {
                        N.current || (R(!1), w(D));
                    }, 100));
            };
        return (0, r.jsx)('div', {
            ref: p,
            onMouseEnter: () => {
                (m.entry.content_type !== l.s.LEADERBOARD || (0, h.zu)(u.z.LEADERBOARD_NUX_COACHMARK) || (0, h.Q3)(u.z.LEADERBOARD_NUX_COACHMARK, { dismissAction: M.L.SECONDARY }),
                    (N.current = !0),
                    setTimeout(() => {
                        (N.current && R(!0), F(A));
                    }, 100));
            },
            onMouseLeave: H,
            children: (0, r.jsx)(d.yRy, {
                targetElementRef: g,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(z.Provider, {
                        value: H,
                        children: (0, r.jsx)(
                            W,
                            j(
                                {
                                    closePopout: t,
                                    updatePopoutPosition: U,
                                    trackRankingItemInteraction: V
                                },
                                m
                            )
                        )
                    });
                },
                position: 'left',
                shouldShow: C,
                positionKey: E,
                onRequestOpen: () => F(A),
                onRequestClose: () => {
                    P && H();
                },
                spacing: 8,
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, r.jsx)(
                        d.P3F,
                        G(j({}, e, v), {
                            innerRef: g,
                            focusProps: {
                                offset: {
                                    top: 4,
                                    bottom: 4,
                                    left: 4,
                                    right: 4
                                }
                            },
                            onClick: () => {
                                C || R(!0);
                            },
                            onContextMenu: k,
                            children: (0, r.jsx)(
                                Y,
                                G(j({}, m), {
                                    selected: n,
                                    hovered: N.current
                                })
                            )
                        })
                    );
                }
            })
        });
    },
    X = i.memo(q);
