n.d(t, {
    J: () => H,
    YN: () => M,
    ZP: () => U,
    iZ: () => L
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(392711),
    r = n.n(i),
    o = n(91192),
    s = n(876215),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    m = n(239091),
    x = n(607070),
    h = n(100527),
    p = n(605236),
    g = n(704041),
    v = n(475676),
    C = n(662594),
    j = n(594174),
    I = n(69259),
    f = n(370370),
    P = n(107062),
    y = n(91140),
    N = n(227172),
    Z = n(551228),
    T = n(678869),
    E = n(278399),
    A = n(886217),
    _ = n(555672),
    S = n(644548),
    R = n(335326),
    k = n(268010),
    w = n(797342),
    O = n(206583),
    b = n(921944);
let M = 72;
function L(e) {
    return (null == e ? void 0 : e.type) === C.so.CONTENT_INVENTORY ? M : 0;
}
let z = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, l.jsx)(y.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, l.jsx)(R.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, l.jsx)(_.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, l.jsx)(E.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, l.jsx)(Z.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(f.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                return (0, l.jsx)(v.Z, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    },
    B = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, l.jsx)(H, {
            onReaction: (e, l) => {
                n.trackRankingItemInteraction(e, {
                    destinationChannelId: l.id,
                    destinationGuildId: l.guild_id
                }),
                    t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(O.xP.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id
                });
            },
            ...n
        });
    },
    H = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, l.jsx)(N.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, l.jsx)(k.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, l.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, l.jsx)(A.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, l.jsx)(T.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(P.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                var a;
                return (null === (a = n.channel) || void 0 === a ? void 0 : a.guild_id) != null
                    ? (0, l.jsx)(g.Z, {
                          guildId: n.channel.guild_id,
                          leaderboardId: t.extra.leaderboard_id,
                          source: h.Z.MEMBER_LIST,
                          trackRankingItemInteraction: n.trackRankingItemInteraction
                      })
                    : null;
            default:
                return null;
        }
    },
    U = a.memo((e) => {
        var t;
        let { index: i, ...h } = e,
            [g, v] = a.useState('default'),
            C = (0, o.JA)(''.concat(i)),
            f = null === (t = j.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
            { isRich: P, appName: y } = (0, w.n)(h.entry),
            N = a.useMemo(
                () => ({
                    entry: h.entry,
                    channelId: h.channel.id,
                    guildId: h.channel.guild_id,
                    requestId: h.requestId,
                    richPresenceName: P ? y : void 0
                }),
                [y, h.channel.guild_id, h.channel.id, h.entry, h.requestId, P]
            ),
            Z = a.useRef(!1),
            [T, E] = a.useState(!1),
            [A, _] = a.useState(!1),
            S = (0, c.e7)([x.Z], () => x.Z.keyboardModeEnabled);
        a.useEffect(() => {
            T && S && _(!0);
        }, [T, S]);
        let R = a.useCallback(
                (e) => {
                    f &&
                        (0, m.jW)(e, async () => {
                            let { default: e } = await n.e('153').then(n.bind(n, 330150));
                            return () =>
                                (0, l.jsx)(e, {
                                    entry: h.entry,
                                    requestId: h.requestId
                                });
                        });
                },
                [h, f]
            ),
            k = a.useCallback(() => {
                v(String(Date.now()));
            }, []),
            M = a.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, I.L)(e, {
                        ...N,
                        ...t
                    });
                },
                [N]
            ),
            L = a.useMemo(
                () =>
                    r().throttle(
                        (e) => {
                            (0, I.L)(O.xP.CARD_POPOUT_OPEN, e);
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
                (Z.current = !1),
                    setTimeout(() => {
                        Z.current || (E(!1), _(S));
                    }, 100);
            };
        return (0, l.jsx)('div', {
            onMouseEnter: () => {
                h.entry.content_type !== s.s.LEADERBOARD || (0, p.un)(d.z.LEADERBOARD_NUX_COACHMARK) || (0, p.EW)(d.z.LEADERBOARD_NUX_COACHMARK, { dismissAction: b.L.SECONDARY }),
                    (Z.current = !0),
                    setTimeout(() => {
                        Z.current && E(!0), L(N);
                    }, 100);
            },
            onMouseLeave: H,
            children: (0, l.jsx)(u.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(B, {
                        closePopout: t,
                        updatePopoutPosition: k,
                        trackRankingItemInteraction: M,
                        ...h
                    });
                },
                position: 'left',
                shouldShow: T,
                positionKey: g,
                onRequestOpen: () => L(N),
                onRequestClose: () => {
                    A && H();
                },
                spacing: 8,
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, l.jsx)(u.P3F, {
                        ...e,
                        ...C,
                        focusProps: {
                            offset: {
                                top: 4,
                                bottom: 4,
                                left: 4,
                                right: 4
                            }
                        },
                        onClick: () => {
                            T || E(!0);
                        },
                        onContextMenu: R,
                        children: (0, l.jsx)(z, {
                            ...h,
                            selected: n,
                            hovered: Z.current
                        })
                    });
                }
            })
        });
    });
