n.d(t, {
    J: function () {
        return B;
    },
    YN: function () {
        return O;
    },
    iZ: function () {
        return b;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(392711),
    r = n.n(i),
    o = n(91192),
    s = n(876215),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    m = n(239091),
    x = n(607070),
    h = n(100527),
    p = n(605236),
    C = n(704041),
    v = n(475676),
    g = n(662594),
    f = n(594174),
    I = n(69259),
    j = n(370370),
    Z = n(107062),
    P = n(91140),
    L = n(227172),
    T = n(551228),
    N = n(678869),
    y = n(278399),
    _ = n(886217),
    A = n(555672),
    E = n(644548),
    S = n(335326),
    R = n(268010),
    M = n(797342),
    k = n(206583),
    w = n(921944);
let O = 72;
function b(e) {
    return (null == e ? void 0 : e.type) === g.so.CONTENT_INVENTORY ? O : 0;
}
let H = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, l.jsx)(P.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, l.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, l.jsx)(A.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, l.jsx)(y.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, l.jsx)(T.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(j.Z, {
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
    V = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, l.jsx)(B, {
            onReaction: (e, l) => {
                n.trackRankingItemInteraction(e, {
                    destinationChannelId: l.id,
                    destinationGuildId: l.guild_id
                }),
                    t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(k.xP.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id
                });
            },
            ...n
        });
    },
    B = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, l.jsx)(L.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, l.jsx)(R.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, l.jsx)(E.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, l.jsx)(_.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, l.jsx)(N.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(Z.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                var a;
                return (null === (a = n.channel) || void 0 === a ? void 0 : a.guild_id) != null
                    ? (0, l.jsx)(C.Z, {
                          guildId: n.channel.guild_id,
                          leaderboardId: t.extra.leaderboard_id,
                          source: h.Z.MEMBER_LIST,
                          trackRankingItemInteraction: n.trackRankingItemInteraction
                      })
                    : null;
            default:
                return null;
        }
    };
t.ZP = a.memo((e) => {
    var t;
    let { index: i, ...h } = e,
        [C, v] = a.useState('default'),
        g = (0, o.JA)(''.concat(i)),
        j = null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: Z, appName: P } = (0, M.n)(h.entry),
        L = a.useMemo(
            () => ({
                entry: h.entry,
                channelId: h.channel.id,
                guildId: h.channel.guild_id,
                requestId: h.requestId,
                richPresenceName: Z ? P : void 0
            }),
            [P, h.channel.guild_id, h.channel.id, h.entry, h.requestId, Z]
        ),
        T = a.useRef(!1),
        [N, y] = a.useState(!1),
        [_, A] = a.useState(!1),
        E = (0, c.e7)([x.Z], () => x.Z.keyboardModeEnabled);
    a.useEffect(() => {
        N && E && A(!0);
    }, [N, E]);
    let S = a.useCallback(
            (e) => {
                if (!!j)
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, l.jsx)(e, {
                                entry: h.entry,
                                requestId: h.requestId
                            });
                    });
            },
            [h, j]
        ),
        R = a.useCallback(() => {
            v(String(Date.now()));
        }, []),
        O = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0, I.L)(e, {
                    ...L,
                    ...t
                });
            },
            [L]
        ),
        b = a.useMemo(
            () =>
                r().throttle(
                    (e) => {
                        (0, I.L)(k.xP.CARD_POPOUT_OPEN, e);
                    },
                    2000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        B = () => {
            (T.current = !1),
                setTimeout(() => {
                    !T.current && (y(!1), A(E));
                }, 100);
        };
    return (0, l.jsx)('div', {
        onMouseEnter: () => {
            h.entry.content_type === s.s.LEADERBOARD && !(0, p.un)(u.z.LEADERBOARD_NUX_COACHMARK) && (0, p.EW)(u.z.LEADERBOARD_NUX_COACHMARK, { dismissAction: w.L.SECONDARY }),
                (T.current = !0),
                setTimeout(() => {
                    T.current && y(!0), b(L);
                }, 100);
        },
        onMouseLeave: B,
        children: (0, l.jsx)(d.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(V, {
                    closePopout: t,
                    updatePopoutPosition: R,
                    trackRankingItemInteraction: O,
                    ...h
                });
            },
            position: 'left',
            shouldShow: N,
            positionKey: C,
            onRequestOpen: () => b(L),
            onRequestClose: () => {
                _ && B();
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, l.jsx)(d.Clickable, {
                    ...e,
                    ...g,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    onClick: () => {
                        !N && y(!0);
                    },
                    onContextMenu: S,
                    children: (0, l.jsx)(H, {
                        ...h,
                        selected: n,
                        hovered: T.current
                    })
                });
            }
        })
    });
});
