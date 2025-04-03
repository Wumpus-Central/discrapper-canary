n.d(t, {
    Ir: () => G,
    J: () => H,
    YN: () => W,
    ZP: () => F,
    iZ: () => U
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(392711),
    i = n.n(l),
    o = n(91192),
    s = n(876215),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    m = n(239091),
    p = n(607070),
    h = n(100527),
    f = n(605236),
    g = n(704041),
    x = n(475676),
    v = n(662594),
    y = n(594174),
    j = n(69259),
    P = n(370370),
    O = n(107062),
    b = n(91140),
    C = n(227172),
    N = n(551228),
    I = n(678869),
    E = n(278399),
    w = n(886217),
    Z = n(555672),
    S = n(644548),
    T = n(335326),
    A = n(268010),
    _ = n(797342),
    k = n(206583),
    R = n(921944);
function M(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
let W = 72;
function U(e) {
    return (null == e ? void 0 : e.type) === v.so.CONTENT_INVENTORY ? W : 0;
}
let z = (e) => {
        var { entry: t } = e,
            n = L(e, ['entry']);
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, r.jsx)(b.Z, D(M({}, n), { entry: t }));
            case s.s.WATCHED_MEDIA:
                return (0, r.jsx)(T.Z, D(M({}, n), { entry: t }));
            case s.s.TOP_GAME:
                return (0, r.jsx)(Z.ZP, D(M({}, n), { entry: t }));
            case s.s.TOP_ARTIST:
                return (0, r.jsx)(E.ZP, D(M({}, n), { entry: t }));
            case s.s.LISTENED_SESSION:
                return (0, r.jsx)(N.ZP, D(M({}, n), { entry: t }));
            case s.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(P.Z, D(M({}, n), { entry: t }));
            case s.s.LEADERBOARD:
                return (0, r.jsx)(x.Z, D(M({}, n), { entry: t }));
            default:
                return null;
        }
    },
    B = (e) => {
        var { closePopout: t } = e,
            n = L(e, ['closePopout']);
        return (0, r.jsx)(
            H,
            M(
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
                        n.trackRankingItemInteraction(k.xP.VOICE_CHANNEL_PREVIEWED, {
                            destinationChannelId: e.id,
                            destinationGuildId: e.guild_id
                        });
                    }
                },
                n
            )
        );
    },
    H = (e) => {
        var t,
            { entry: n } = e,
            a = L(e, ['entry']);
        switch (n.content_type) {
            case s.s.PLAYED_GAME:
                return (0, r.jsx)(C.Z, D(M({}, a), { entry: n }));
            case s.s.WATCHED_MEDIA:
                return (0, r.jsx)(A.Z, D(M({}, a), { entry: n }));
            case s.s.TOP_GAME:
                return (0, r.jsx)(S.Z, D(M({}, a), { entry: n }));
            case s.s.TOP_ARTIST:
                return (0, r.jsx)(w.Z, D(M({}, a), { entry: n }));
            case s.s.LISTENED_SESSION:
                return (0, r.jsx)(I.Z, D(M({}, a), { entry: n }));
            case s.s.LAUNCHED_ACTIVITY:
                return (0, r.jsx)(O.ZP, D(M({}, a), { entry: n }));
            case s.s.LEADERBOARD:
                return (null == (t = a.channel) ? void 0 : t.guild_id) != null
                    ? (0, r.jsx)(g.Z, {
                          guildId: a.channel.guild_id,
                          leaderboardId: n.extra.leaderboard_id,
                          source: h.Z.MEMBER_LIST,
                          trackRankingItemInteraction: a.trackRankingItemInteraction
                      })
                    : null;
            default:
                return null;
        }
    },
    G = a.createContext(void 0),
    F = a.memo((e) => {
        var t,
            { index: l } = e,
            h = L(e, ['index']);
        let [g, x] = a.useState('default'),
            v = (0, o.JA)(''.concat(l)),
            P = null == (t = y.default.getCurrentUser()) ? void 0 : t.isStaff(),
            { isRich: O, appName: b } = (0, _.n)(h.entry),
            C = a.useMemo(
                () => ({
                    entry: h.entry,
                    channelId: h.channel.id,
                    guildId: h.channel.guild_id,
                    requestId: h.requestId,
                    richPresenceName: O ? b : void 0
                }),
                [b, h.channel.guild_id, h.channel.id, h.entry, h.requestId, O]
            ),
            N = a.useRef(!1),
            [I, E] = a.useState(!1),
            [w, Z] = a.useState(!1),
            S = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
        a.useEffect(() => {
            I && S && Z(!0);
        }, [I, S]);
        let T = a.useCallback(
                (e) => {
                    P &&
                        (0, m.jW)(e, async () => {
                            let { default: e } = await n.e('153').then(n.bind(n, 330150));
                            return () =>
                                (0, r.jsx)(e, {
                                    entry: h.entry,
                                    requestId: h.requestId
                                });
                        });
                },
                [h, P]
            ),
            A = a.useCallback(() => {
                x(String(Date.now()));
            }, []),
            W = a.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, j.L)(e, M({}, C, t));
                },
                [C]
            ),
            U = a.useMemo(
                () =>
                    i().throttle(
                        (e) => {
                            (0, j.L)(k.xP.CARD_POPOUT_OPEN, e);
                        },
                        2000,
                        {
                            leading: !0,
                            trailing: !1
                        }
                    ),
                []
            ),
            H = () => {
                (N.current = !1),
                    setTimeout(() => {
                        N.current || (E(!1), Z(S));
                    }, 100);
            };
        return (0, r.jsx)('div', {
            onMouseEnter: () => {
                h.entry.content_type !== s.s.LEADERBOARD || (0, f.un)(u.z.LEADERBOARD_NUX_COACHMARK) || (0, f.EW)(u.z.LEADERBOARD_NUX_COACHMARK, { dismissAction: R.L.SECONDARY }),
                    (N.current = !0),
                    setTimeout(() => {
                        N.current && E(!0), U(C);
                    }, 100);
            },
            onMouseLeave: H,
            children: (0, r.jsx)(d.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(G.Provider, {
                        value: H,
                        children: (0, r.jsx)(
                            B,
                            M(
                                {
                                    closePopout: t,
                                    updatePopoutPosition: A,
                                    trackRankingItemInteraction: W
                                },
                                h
                            )
                        )
                    });
                },
                position: 'left',
                shouldShow: I,
                positionKey: g,
                onRequestOpen: () => U(C),
                onRequestClose: () => {
                    w && H();
                },
                spacing: 8,
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, r.jsx)(
                        d.P3F,
                        D(M({}, e, v), {
                            focusProps: {
                                offset: {
                                    top: 4,
                                    bottom: 4,
                                    left: 4,
                                    right: 4
                                }
                            },
                            onClick: () => {
                                I || E(!0);
                            },
                            onContextMenu: T,
                            children: (0, r.jsx)(
                                z,
                                D(M({}, h), {
                                    selected: n,
                                    hovered: N.current
                                })
                            )
                        })
                    );
                }
            })
        });
    });
