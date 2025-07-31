(n.d(t, {
    ZP: () => Q,
    e5: () => T,
    px: () => M
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(66546),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(765250),
    f = n(13245),
    p = n(872810),
    g = n(393238),
    m = n(586902),
    O = n(493773),
    b = n(607070),
    v = n(415635),
    h = n(701362),
    y = n(172751),
    j = n(670188),
    P = n(597998),
    x = n(199902),
    S = n(314897),
    w = n(355863),
    I = n(131951),
    E = n(979651),
    Z = n(136015),
    C = n(51144),
    V = n(444295),
    k = n(981631),
    N = n(388032),
    D = n(62802);
function A(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function _(e, t) {
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
function M(e) {
    switch (e) {
        case k.ipw.LARGE:
            return c.EFr.SIZE_32;
        case k.ipw.SMALL:
            return c.EFr.SIZE_24;
        default:
            return c.EFr.SIZE_32;
    }
}
function T(e) {
    return c.ny6[e].size;
}
let R = () =>
        n
            .e('43841')
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    L = {
        entering: {
            config: {
                mass: 0.2,
                tension: 180,
                friction: 14
            }
        },
        exiting: {
            config: {
                mass: 1,
                tension: 80,
                friction: 10,
                clamp: !0
            }
        }
    },
    G = {
        entering: {
            config: {
                mass: 0.5,
                tension: 240,
                friction: 10
            }
        },
        exiting: {
            config: {
                mass: 1.5,
                tension: 300,
                friction: 30,
                clamp: !0
            },
            delay: 300
        }
    };
function W(e, t) {
    let [n, r] = i.useState(null != e && e > Date.now() - 10000),
        [l, o] = i.useState(!1),
        [a, s] = i.useState(!0);
    return (
        (0, O.ZP)(() => {
            n &&
                !t &&
                (s(!1),
                setTimeout(() => {
                    o(!0);
                }, 16));
        }),
        (0, O.ZP)(() => {
            let e = setTimeout(() => {
                (r(!1),
                    setTimeout(() => {
                        o(!1);
                    }, 16));
            }, 2600);
            return () => clearTimeout(e);
        }),
        i.useMemo(
            () => ({
                showConnectedAnimation: l,
                recentlyConnected: n,
                hideConnectedAnimation: a,
                setHideConnectedAnimation: s
            }),
            [l, n, a, s]
        )
    );
}
let F = i.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: l, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            { showConnectedAnimation: f, recentlyConnected: p, hideConnectedAnimation: m, setHideConnectedAnimation: O } = W(n, l),
            { ref: v, width: h } = (0, g.ZP)(),
            y = (0, s.e7)([b.Z], () => b.Z.useReducedMotion),
            j = p ? 'entering' : 'exiting',
            { width: P } = (0, a.useSpring)(_(A({}, L[j]), { width: f ? h : u })),
            { opacity: x } = (0, a.useSpring)(
                _(A({}, G[j]), {
                    opacity: +!!f,
                    onRest: () => {
                        f || O(!0);
                    }
                })
            ),
            S = i.useMemo(() => (m || y ? 'none' : 'block'), [m, y]);
        return (0, r.jsx)(a.animated.div, {
            className: o()(D.connectedAnimationContainer, { [D.right]: d }),
            style: {
                width: P,
                opacity: x,
                display: S
            },
            children: (0, r.jsxs)('div', {
                ref: v,
                className: o()(D.connectedAnimationInnerContainer, {
                    [D.exiting]: 'exiting' === j,
                    [D.left]: !d,
                    [D.right]: d
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: R,
                            shouldAnimate: !y,
                            className: D.animation
                        }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-default',
                            children: N.intl.format(N.t.uFcRen, { nick: t })
                        })
                    }),
                    !d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: R,
                            shouldAnimate: !y,
                            className: D.animation
                        }),
                    (0, r.jsx)('div', { className: D.emptySpace })
                ]
            })
        });
    }),
    U = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: l } = e,
            o = 2 * t,
            a = -(t / 2);
        return (0, r.jsx)('div', {
            className: D.effect,
            style: {
                top: a,
                left: a,
                width: o,
                height: o
            },
            children: (0, r.jsx)(v.Z, {
                userId: n,
                channelId: i,
                guildId: l,
                containerDimensions: {
                    width: o,
                    height: o
                }
            })
        });
    }),
    z = i.memo(c.qEK),
    Y = i.memo(function (e) {
        let { channel: t, flipped: n = !1, locked: l = !1, user: a, nick: u, displayNameMode: d, displayUserMode: f, size: O = k.ipw.LARGE, onClick: b, onContextMenu: v, context: j, guildId: w, isSettingsPreview: C = !1, voiceState: N, showStreamPreview: A, onShowStreamPreview: _, onWatchStream: R, connectedOn: L, ref: G } = e,
            Y = (0, s.e7)([S.default], () => S.default.getId() === a.id, [a.id]),
            { ref: Q, width: B } = (0, g.ZP)(),
            { showConnectedAnimation: K } = W(L, C),
            q = null == N ? void 0 : N.sessionId,
            H = t.id,
            $ = a.id,
            [J] = (0, s.e7)(
                [E.Z],
                () => {
                    var e;
                    return [null != (e = E.Z.getVoiceStateForChannel(H, $)) ? e : E.Z.getVoiceStateForSession($, q), E.Z.getVoiceStateVersion()];
                },
                [H, $, q],
                Z.Q
            ),
            X = C ? N : null != J ? J : N,
            [ee, et, en] = (0, s.Wu)([I.Z], () => (Y ? [!I.Z.isSupported() || I.Z.isSelfMute() || I.Z.isSelfMutedTemporarily(), I.Z.isSelfDeaf(), !1] : [!I.Z.isSupported() || I.Z.isLocalMute(a.id), !1, I.Z.isLocalVideoDisabled(a.id)]), [Y, a.id]),
            er = (0, s.e7)(
                [x.Z],
                () => {
                    let e = x.Z.getCurrentUserActiveStream();
                    return null != e && e.ownerId !== a.id && x.Z.getViewerIds(e).filter((e) => e === a.id).length > 0;
                },
                [a.id]
            ),
            ei = C && (null == N ? void 0 : N.discoverable),
            el =
                (0, m.Z)({
                    userId: a.id,
                    context: j
                }) || ei,
            eo = (0, s.e7)([x.Z], () => x.Z.getStreamForUser(a.id, w)),
            ea = null != eo,
            es = i.useCallback(() => {
                (A || null != ea) && _(null);
            }, [_, A, ea]),
            ec = i.useCallback(
                () =>
                    (0, r.jsx)(h.Z, {
                        user: a,
                        channel: t,
                        onWatch: () => {
                            null != eo &&
                                ((0, p.rn)(eo, {
                                    forceMultiple: !0,
                                    noFocus: !0
                                }),
                                es(),
                                R(null != eo ? eo : null));
                        },
                        onAction: () => R,
                        previewIsOpen: A,
                        location: k.Sbl.UNLOCKED_OVERLAY,
                        hideTip: !0
                    }),
                [a, t, eo, A, es, R]
            ),
            eu = i.useCallback(
                (e) => {
                    l || null == v || v(e, a);
                },
                [l, v, a]
            ),
            ed = i.useCallback(() => {
                l || (null != ea && _(a.id));
            }, [l, _, ea, a]),
            ef = l || C,
            ep = i.useMemo(() => M(O), [O]),
            eg = i.useMemo(() => T(ep), [ep]),
            em = i.useMemo(() => a.getAvatarURL(w, eg), [a, w, eg]);
        return (f === k.OYC.ONLY_WHILE_SPEAKING && ef && !el) || null == X
            ? null
            : n
              ? (0, r.jsxs)(c.P3F, {
                    innerRef: G,
                    className: o()(D.voiceUser, {
                        [D.speaking]: el,
                        [D.interactive]: !l,
                        [D.flipped]: n,
                        [D.justConnected]: K
                    }),
                    onClick: l ? void 0 : (e) => (null == b ? void 0 : b(e, a)),
                    onContextMenu: eu,
                    onMouseEnter: ed,
                    onMouseLeave: es,
                    children: [
                        ef && (d === k.wC$.NEVER || (!el && d === k.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  targetElementRef: Q,
                                  position: 'left',
                                  renderPopout: ec,
                                  shouldShow: A,
                                  onRequestClose: es,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)('div', {
                                          className: D.username,
                                          ref: Q,
                                          children: [
                                              (0, r.jsx)(P.nm, {
                                                  guildId: w,
                                                  user: a,
                                                  video: X.selfVideo,
                                                  isStreaming: ea,
                                                  className: D.voiceIcons,
                                                  iconClassName: D.voiceIcon,
                                                  isWatching: er,
                                                  localMute: ee && !Y,
                                                  localVideoDisabled: en,
                                                  mute: X.isVoiceMuted(),
                                                  deaf: X.isVoiceDeafened() || (et && !Y),
                                                  serverMute: X.mute || X.suppress,
                                                  serverDeaf: X.deaf,
                                                  disabled: !1
                                              }),
                                              !C &&
                                                  (0, r.jsx)(y.ZP, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: w,
                                                      className: D.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, V.Ws)(k.Odu.VOICE_V3, {
                                                              type: V.Qu.VOICE,
                                                              value: V.bk.PROFILE_OPENED,
                                                              userId: a.id
                                                          });
                                                      }
                                                  }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-default',
                                                  children: u
                                              })
                                          ]
                                      })
                              }),
                        !Y &&
                            (0, r.jsx)(F, {
                                nick: u,
                                connectedOn: L,
                                isSettingsPreview: C,
                                voiceBackgroundWidth: B,
                                rightAlign: !0
                            }),
                        (0, r.jsx)(z, {
                            className: D.avatar,
                            size: ep,
                            src: em,
                            'aria-hidden': !0
                        }),
                        (0, r.jsx)(U, {
                            avatarSize: eg,
                            userId: a.id,
                            channelId: t.id,
                            guildId: t.getGuildId()
                        })
                    ]
                })
              : (0, r.jsxs)(c.P3F, {
                    innerRef: G,
                    className: o()(D.voiceUser, {
                        [D.speaking]: el,
                        [D.interactive]: !l,
                        [D.flipped]: n,
                        [D.justConnected]: K
                    }),
                    onClick: l ? void 0 : (e) => (null == b ? void 0 : b(e, a)),
                    onContextMenu: eu,
                    onMouseEnter: ed,
                    onMouseLeave: es,
                    children: [
                        (0, r.jsx)(z, {
                            className: D.avatar,
                            size: ep,
                            src: em,
                            'aria-hidden': !0
                        }),
                        !Y &&
                            (0, r.jsx)(F, {
                                nick: u,
                                connectedOn: L,
                                isSettingsPreview: C,
                                voiceBackgroundWidth: B
                            }),
                        ef && (d === k.wC$.NEVER || (!el && d === k.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  targetElementRef: Q,
                                  position: 'right',
                                  renderPopout: ec,
                                  shouldShow: A,
                                  onRequestClose: es,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)('div', {
                                          className: o()(D.username, { [D.streaming]: ea }),
                                          ref: Q,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-default',
                                                  children: u
                                              }),
                                              !C &&
                                                  (0, r.jsx)(y.ZP, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: w,
                                                      className: D.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, V.Ws)(k.Odu.VOICE_V3, {
                                                              type: V.Qu.VOICE,
                                                              value: V.bk.PROFILE_OPENED,
                                                              userId: a.id
                                                          });
                                                      }
                                                  }),
                                              (0, r.jsx)(P.nm, {
                                                  guildId: w,
                                                  user: a,
                                                  video: X.selfVideo,
                                                  isStreaming: ea,
                                                  className: D.voiceIcons,
                                                  iconClassName: D.voiceIcon,
                                                  isWatching: er,
                                                  localMute: ee && !Y,
                                                  localVideoDisabled: en,
                                                  mute: X.isVoiceMuted(),
                                                  deaf: X.isVoiceDeafened() || (et && !Y),
                                                  serverMute: X.mute || X.suppress,
                                                  serverDeaf: X.deaf,
                                                  disabled: !1
                                              })
                                          ]
                                      })
                              })
                    ]
                });
    }),
    Q = i.memo(function (e) {
        let { widgetId: t, channel: l, sortedVoiceState: o, displayNameMode: a, displayUserMode: s, locked: c, flipped: p, size: g, isPreviewingInGame: m, isSettingsPreview: O, context: b } = e,
            v = i.useRef(null),
            { user: h, member: y, voiceState: P, connectedOn: x } = o,
            [S, I] = i.useState(null),
            [E, Z] = i.useState(null);
        (i.useEffect(() => {
            c && Z(null);
        }, [c]),
            i.useEffect(() => {
                null != S &&
                    (0, V.Ws)(k.Odu.VOICE_V3, {
                        type: V.Qu.GO_LIVE,
                        value: V.bk.STREAM_PREVIEWED
                    });
            }, [S]));
        let N = (e) => {
                I(e);
            },
            D = (e, t) => {
                O ||
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('70274'), n.e('79695'), n.e('6524')]).then(n.bind(n, 27900));
                        return (
                            (0, V.Ws)(k.Odu.VOICE_V3, {
                                type: V.Qu.VOICE,
                                value: V.bk.SETTINGS_OPENED,
                                userId: t.id
                            }),
                            (n) =>
                                (0, r.jsx)(
                                    e,
                                    _(A({}, n), {
                                        user: t,
                                        channelId: null == l ? void 0 : l.id,
                                        guildId: null == l ? void 0 : l.guild_id,
                                        mediaEngineContext: b,
                                        onShowProfile: () => Z(t.id),
                                        appContext: k.IlC.OVERLAY,
                                        onWatchStream: () => {
                                            (0, V.Ws)(k.Odu.VOICE_V3, {
                                                type: V.Qu.GO_LIVE,
                                                value: V.bk.ENABLED,
                                                userId: t.id
                                            });
                                        }
                                    })
                                )
                        );
                    });
            },
            M = i.useCallback(
                (e) => {
                    var n, r;
                    let i = null == (n = w.Z.getWidget(t)) ? void 0 : n.layoutId,
                        o = null != i ? (null == (r = w.Z.getWidgetsForLayout(i)) ? void 0 : r.find((e) => e.type === k.Odu.GO_LIVE)) : null;
                    (null == o ||
                        o.pinned ||
                        ((0, d.xh)(o.id),
                        f.Z.track(k.rMx.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: null == l ? void 0 : l.guild_id,
                            channel_id: null == l ? void 0 : l.id,
                            channel_type: null == l ? void 0 : l.type,
                            widget_type: k.Odu.GO_LIVE
                        })),
                        null != e &&
                            null != o &&
                            (0, V.Ws)(k.Odu.VOICE_V3, {
                                type: V.Qu.GO_LIVE,
                                value: V.bk.ENABLED,
                                userId: e.ownerId
                            }));
                },
                [l, t]
            );
        if (null == h || null == l || null == P) return null;
        let T = c || m;
        return (0, r.jsx)(
            j.Z,
            {
                targetElementRef: v,
                user: h,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: k.IlC.OVERLAY,
                shouldShow: E === h.id,
                onRequestClose: () => Z(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(Y, {
                        ref: v,
                        guildId: null == l ? void 0 : l.guild_id,
                        user: h,
                        connectedOn: x,
                        nick: null != (e = null == y ? void 0 : y.nick) ? e : C.ZP.getName(h),
                        flipped: p,
                        voiceState: P,
                        displayNameMode: a,
                        displayUserMode: s,
                        size: g,
                        locked: T,
                        onContextMenu: D,
                        onClick: D,
                        context: b,
                        channel: l,
                        showStreamPreview: h.id === S,
                        onShowStreamPreview: N,
                        onWatchStream: M,
                        isSettingsPreview: O
                    });
                }
            },
            h.id
        );
    });
