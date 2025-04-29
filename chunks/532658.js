n.d(t, {
    ZP: () => Q,
    e5: () => T,
    px: () => M
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(481752),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(765250),
    p = n(13245),
    f = n(872810),
    g = n(393238),
    O = n(586902),
    m = n(493773),
    b = n(607070),
    y = n(415635),
    v = n(701362),
    h = n(172751),
    j = n(670188),
    P = n(597998),
    S = n(199902),
    w = n(314897),
    x = n(355863),
    I = n(131951),
    E = n(979651),
    Z = n(136015),
    C = n(51144),
    V = n(444295),
    k = n(981631),
    D = n(388032),
    N = n(62802);
function A(e) {
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
let L = () =>
        n
            .e('43841')
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    R = {
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
        (0, m.ZP)(() => {
            n &&
                !t &&
                (s(!1),
                setTimeout(() => {
                    o(!0);
                }, 16));
        }),
        (0, m.ZP)(() => {
            let e = setTimeout(() => {
                r(!1),
                    setTimeout(() => {
                        o(!1);
                    }, 16);
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
            { showConnectedAnimation: p, recentlyConnected: f, hideConnectedAnimation: O, setHideConnectedAnimation: m } = W(n, l),
            { ref: y, width: v } = (0, g.ZP)(),
            h = (0, s.e7)([b.Z], () => b.Z.useReducedMotion),
            j = f ? 'entering' : 'exiting',
            { width: P } = (0, a.useSpring)(_(A({}, R[j]), { width: p ? v : u })),
            { opacity: S } = (0, a.useSpring)(
                _(A({}, G[j]), {
                    opacity: +!!p,
                    onRest: () => {
                        p || m(!0);
                    }
                })
            ),
            w = i.useMemo(() => (O || h ? 'none' : 'block'), [O, h]);
        return (0, r.jsx)(a.animated.div, {
            className: o()(N.connectedAnimationContainer, { [N.right]: d }),
            style: {
                width: P,
                opacity: S,
                display: w
            },
            children: (0, r.jsxs)('div', {
                ref: y,
                className: o()(N.connectedAnimationInnerContainer, {
                    [N.exiting]: 'exiting' === j,
                    [N.left]: !d,
                    [N.right]: d
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: L,
                            shouldAnimate: !h,
                            className: N.animation
                        }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-normal',
                            children: D.intl.format(D.t.uFcRen, { nick: t })
                        })
                    }),
                    !d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: L,
                            shouldAnimate: !h,
                            className: N.animation
                        }),
                    (0, r.jsx)('div', { className: N.emptySpace })
                ]
            })
        });
    }),
    U = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: l } = e,
            o = 2 * t,
            a = -(t / 2);
        return (0, r.jsx)('div', {
            className: N.effect,
            style: {
                top: a,
                left: a,
                width: o,
                height: o
            },
            children: (0, r.jsx)(y.Z, {
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
        let { channel: t, flipped: n = !1, locked: l = !1, user: a, nick: u, displayNameMode: d, displayUserMode: p, size: m = k.ipw.LARGE, onClick: b, onContextMenu: y, context: j, guildId: x, isSettingsPreview: C = !1, voiceState: D, showStreamPreview: A, onShowStreamPreview: _, onWatchStream: L, connectedOn: R } = e,
            G = (0, s.e7)([w.default], () => w.default.getId() === a.id, [a.id]),
            { ref: Y, width: Q } = (0, g.ZP)(),
            { showConnectedAnimation: B } = W(R, C),
            K = null == D ? void 0 : D.sessionId,
            q = t.id,
            H = a.id,
            [$] = (0, s.e7)(
                [E.Z],
                () => {
                    var e;
                    return [null != (e = E.Z.getVoiceStateForChannel(q, H)) ? e : E.Z.getVoiceStateForSession(H, K), E.Z.getVoiceStateVersion()];
                },
                [q, H, K],
                Z.Q
            ),
            J = C ? D : null != $ ? $ : D,
            [X, ee, et] = (0, s.Wu)([I.Z], () => (G ? [!I.Z.isSupported() || I.Z.isSelfMute() || I.Z.isSelfMutedTemporarily(), I.Z.isSelfDeaf(), !1] : [!I.Z.isSupported() || I.Z.isLocalMute(a.id), !1, I.Z.isLocalVideoDisabled(a.id)]), [G, a.id]),
            en = (0, s.e7)(
                [S.Z],
                () => {
                    let e = S.Z.getCurrentUserActiveStream();
                    return null != e && e.ownerId !== a.id && S.Z.getViewerIds(e).filter((e) => e === a.id).length > 0;
                },
                [a.id]
            ),
            er = C && (null == D ? void 0 : D.discoverable),
            ei =
                (0, O.Z)({
                    userId: a.id,
                    context: j
                }) || er,
            el = (0, s.e7)([S.Z], () => S.Z.getStreamForUser(a.id, x)),
            eo = null != el,
            ea = i.useCallback(() => {
                (A || null != eo) && _(null);
            }, [_, A, eo]),
            es = i.useCallback(
                () =>
                    (0, r.jsx)(v.Z, {
                        user: a,
                        channel: t,
                        onWatch: () => {
                            null != el &&
                                ((0, f.rn)(el, {
                                    forceMultiple: !0,
                                    noFocus: !0
                                }),
                                ea(),
                                L(null != el ? el : null));
                        },
                        onAction: () => L,
                        previewIsOpen: A,
                        location: k.Sbl.UNLOCKED_OVERLAY,
                        hideTip: !0
                    }),
                [a, t, el, A, ea, L]
            ),
            ec = i.useCallback(
                (e) => {
                    l || null == y || y(e, a);
                },
                [l, y, a]
            ),
            eu = i.useCallback(() => {
                l || (null != eo && _(a.id));
            }, [l, _, eo, a]),
            ed = l || C,
            ep = i.useMemo(() => M(m), [m]),
            ef = i.useMemo(() => T(ep), [ep]),
            eg = i.useMemo(() => a.getAvatarURL(x, ef), [a, x, ef]);
        return (p === k.OYC.ONLY_WHILE_SPEAKING && ed && !ei) || null == J
            ? null
            : n
              ? (0, r.jsxs)(c.P3F, {
                    className: o()(N.voiceUser, {
                        [N.speaking]: ei,
                        [N.interactive]: !l,
                        [N.flipped]: n,
                        [N.justConnected]: B
                    }),
                    onClick: l ? void 0 : (e) => (null == b ? void 0 : b(e, a)),
                    onContextMenu: ec,
                    onMouseEnter: eu,
                    onMouseLeave: ea,
                    children: [
                        ed && (d === k.wC$.NEVER || (!ei && d === k.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  position: 'left',
                                  renderPopout: es,
                                  shouldShow: A,
                                  onRequestClose: ea,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)('div', {
                                          className: N.username,
                                          ref: Y,
                                          children: [
                                              (0, r.jsx)(P.nm, {
                                                  guildId: x,
                                                  user: a,
                                                  video: J.selfVideo,
                                                  isStreaming: eo,
                                                  className: N.voiceIcons,
                                                  iconClassName: N.voiceIcon,
                                                  isWatching: en,
                                                  localMute: X && !G,
                                                  localVideoDisabled: et,
                                                  mute: J.isVoiceMuted(),
                                                  deaf: J.isVoiceDeafened() || (ee && !G),
                                                  serverMute: J.mute || J.suppress,
                                                  serverDeaf: J.deaf,
                                                  disabled: !1
                                              }),
                                              !C &&
                                                  (0, r.jsx)(h.ZP, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: x,
                                                      className: N.clanTag,
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
                                                  color: 'text-normal',
                                                  children: u
                                              })
                                          ]
                                      })
                              }),
                        !G &&
                            (0, r.jsx)(F, {
                                nick: u,
                                connectedOn: R,
                                isSettingsPreview: C,
                                voiceBackgroundWidth: Q,
                                rightAlign: !0
                            }),
                        (0, r.jsx)(z, {
                            className: N.avatar,
                            size: ep,
                            src: eg,
                            'aria-hidden': !0
                        }),
                        (0, r.jsx)(U, {
                            avatarSize: ef,
                            userId: a.id,
                            channelId: t.id,
                            guildId: t.getGuildId()
                        })
                    ]
                })
              : (0, r.jsxs)(c.P3F, {
                    className: o()(N.voiceUser, {
                        [N.speaking]: ei,
                        [N.interactive]: !l,
                        [N.flipped]: n,
                        [N.justConnected]: B
                    }),
                    onClick: l ? void 0 : (e) => (null == b ? void 0 : b(e, a)),
                    onContextMenu: ec,
                    onMouseEnter: eu,
                    onMouseLeave: ea,
                    children: [
                        (0, r.jsx)(z, {
                            className: N.avatar,
                            size: ep,
                            src: eg,
                            'aria-hidden': !0
                        }),
                        !G &&
                            (0, r.jsx)(F, {
                                nick: u,
                                connectedOn: R,
                                isSettingsPreview: C,
                                voiceBackgroundWidth: Q
                            }),
                        ed && (d === k.wC$.NEVER || (!ei && d === k.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  position: 'right',
                                  renderPopout: es,
                                  shouldShow: A,
                                  onRequestClose: ea,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)('div', {
                                          className: o()(N.username, { [N.streaming]: eo }),
                                          ref: Y,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  children: u
                                              }),
                                              !C &&
                                                  (0, r.jsx)(h.ZP, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: x,
                                                      className: N.clanTag,
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
                                                  guildId: x,
                                                  user: a,
                                                  video: J.selfVideo,
                                                  isStreaming: eo,
                                                  className: N.voiceIcons,
                                                  iconClassName: N.voiceIcon,
                                                  isWatching: en,
                                                  localMute: X && !G,
                                                  localVideoDisabled: et,
                                                  mute: J.isVoiceMuted(),
                                                  deaf: J.isVoiceDeafened() || (ee && !G),
                                                  serverMute: J.mute || J.suppress,
                                                  serverDeaf: J.deaf,
                                                  disabled: !1
                                              })
                                          ]
                                      })
                              })
                    ]
                });
    }),
    Q = i.memo(function (e) {
        let { widgetId: t, channel: l, sortedVoiceState: o, displayNameMode: a, displayUserMode: s, locked: c, flipped: f, size: g, isPreviewingInGame: O, isSettingsPreview: m, context: b } = e,
            { user: y, member: v, voiceState: h, connectedOn: P } = o,
            [S, w] = i.useState(null),
            [I, E] = i.useState(null);
        i.useEffect(() => {
            c && E(null);
        }, [c]),
            i.useEffect(() => {
                null != S &&
                    (0, V.Ws)(k.Odu.VOICE_V3, {
                        type: V.Qu.GO_LIVE,
                        value: V.bk.STREAM_PREVIEWED
                    });
            }, [S]);
        let Z = (e) => {
                w(e);
            },
            D = (e, t) => {
                m ||
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('6524')]).then(n.bind(n, 27900));
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
                                        onShowProfile: () => E(t.id),
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
            N = i.useCallback(
                (e) => {
                    var n, r;
                    let i = null == (n = x.Z.getWidget(t)) ? void 0 : n.layoutId,
                        o = null != i ? (null == (r = x.Z.getWidgetsForLayout(i)) ? void 0 : r.find((e) => e.type === k.Odu.GO_LIVE)) : null;
                    null == o ||
                        o.pinned ||
                        ((0, d.xh)(o.id),
                        p.Z.track(k.rMx.OVERLAY_PIN_TOGGLED, {
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
                            });
                },
                [l, t]
            );
        if (null == y || null == l || null == h) return null;
        let M = c || O;
        return (0, r.jsx)(
            j.Z,
            {
                user: y,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: k.IlC.OVERLAY,
                shouldShow: I === y.id,
                onRequestClose: () => E(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(Y, {
                        guildId: null == l ? void 0 : l.guild_id,
                        user: y,
                        connectedOn: P,
                        nick: null != (e = null == v ? void 0 : v.nick) ? e : C.ZP.getName(y),
                        flipped: f,
                        voiceState: h,
                        displayNameMode: a,
                        displayUserMode: s,
                        size: g,
                        locked: M,
                        onContextMenu: D,
                        onClick: D,
                        context: b,
                        channel: l,
                        showStreamPreview: y.id === S,
                        onShowStreamPreview: Z,
                        onWatchStream: N,
                        isSettingsPreview: m
                    });
                }
            },
            y.id
        );
    });
