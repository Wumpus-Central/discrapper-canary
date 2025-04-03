n.d(t, {
    ZP: () => B,
    e5: () => T,
    px: () => W
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
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
    v = n(979264),
    h = n(701362),
    j = n(184301),
    P = n(347475),
    x = n(597998),
    S = n(199902),
    w = n(314897),
    I = n(355863),
    E = n(131951),
    Z = n(979651),
    C = n(136015),
    N = n(51144),
    V = n(444295),
    k = n(981631),
    D = n(388032),
    A = n(62802);
function _(e) {
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
function M(e, t) {
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
function W(e) {
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
function U(e, t) {
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
            { showConnectedAnimation: p, recentlyConnected: f, hideConnectedAnimation: O, setHideConnectedAnimation: m } = U(n, l),
            { ref: y, width: v } = (0, g.Z)(),
            h = (0, s.e7)([b.Z], () => b.Z.useReducedMotion),
            j = f ? 'entering' : 'exiting',
            { width: P } = (0, a.useSpring)(M(_({}, R[j]), { width: p ? v : u })),
            { opacity: x } = (0, a.useSpring)(
                M(_({}, G[j]), {
                    opacity: +!!p,
                    onRest: () => {
                        p || m(!0);
                    }
                })
            ),
            S = i.useMemo(() => (O || h ? 'none' : 'block'), [O, h]);
        return (0, r.jsx)(a.animated.div, {
            className: o()(A.connectedAnimationContainer, { [A.right]: d }),
            style: {
                width: P,
                opacity: x,
                display: S
            },
            children: (0, r.jsxs)('div', {
                ref: y,
                className: o()(A.connectedAnimationInnerContainer, {
                    [A.exiting]: 'exiting' === j,
                    [A.left]: !d,
                    [A.right]: d
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: L,
                            shouldAnimate: !h,
                            className: A.animation
                        }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-normal',
                            children: D.NW.format(D.t.uFcRen, { nick: t })
                        })
                    }),
                    !d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: L,
                            shouldAnimate: !h,
                            className: A.animation
                        }),
                    (0, r.jsx)('div', { className: A.emptySpace })
                ]
            })
        });
    }),
    z = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: l } = e,
            o = 2 * t,
            a = -(t / 2);
        return (0, r.jsx)('div', {
            className: A.effect,
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
    Y = i.memo(c.qEK),
    Q = i.memo(function (e) {
        let { channel: t, flipped: n = !1, locked: l = !1, user: a, nick: u, displayNameMode: d, displayUserMode: p, size: m = k.ipw.LARGE, onClick: b, onContextMenu: y, context: j, guildId: P, isSettingsPreview: I = !1, voiceState: N, showStreamPreview: D, onShowStreamPreview: _, onWatchStream: M, connectedOn: L } = e,
            R = (0, s.e7)([w.default], () => w.default.getId() === a.id, [a.id]),
            { ref: G, width: Q } = (0, g.Z)(),
            { showConnectedAnimation: B } = U(L, I),
            K = null == N ? void 0 : N.sessionId,
            q = t.id,
            H = a.id,
            [$] = (0, s.e7)(
                [Z.Z],
                () => {
                    var e;
                    return [null != (e = Z.Z.getVoiceStateForChannel(q, H)) ? e : Z.Z.getVoiceStateForSession(H, K), Z.Z.getVoiceStateVersion()];
                },
                [q, H, K],
                C.Q
            ),
            J = I ? N : null != $ ? $ : N,
            [X, ee, et] = (0, s.Wu)([E.Z], () => (R ? [!E.Z.isSupported() || E.Z.isSelfMute() || E.Z.isSelfMutedTemporarily(), E.Z.isSelfDeaf(), !1] : [!E.Z.isSupported() || E.Z.isLocalMute(a.id), !1, E.Z.isLocalVideoDisabled(a.id)]), [R, a.id]),
            en = (0, s.e7)(
                [S.Z],
                () => {
                    let e = S.Z.getCurrentUserActiveStream();
                    return null != e && e.ownerId !== a.id && S.Z.getViewerIds(e).filter((e) => e === a.id).length > 0;
                },
                [a.id]
            ),
            er = I && (null == N ? void 0 : N.discoverable),
            ei =
                (0, O.Z)({
                    userId: a.id,
                    context: j
                }) || er,
            el = (0, s.e7)([S.Z], () => S.Z.getStreamForUser(a.id, P)),
            eo = null != el,
            ea = i.useCallback(() => {
                (D || null != eo) && _(null);
            }, [_, D, eo]),
            es = i.useCallback(
                () =>
                    (0, r.jsx)(h.Z, {
                        user: a,
                        channel: t,
                        onWatch: () => {
                            null != el &&
                                ((0, f.rn)(el, {
                                    forceMultiple: !0,
                                    noFocus: !0
                                }),
                                ea(),
                                M(null != el ? el : null));
                        },
                        onAction: () => M,
                        previewIsOpen: D,
                        location: k.Sbl.UNLOCKED_OVERLAY,
                        hideTip: !0
                    }),
                [a, t, el, D, ea, M]
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
            ed = l || I,
            ep = i.useMemo(() => W(m), [m]),
            ef = i.useMemo(() => T(ep), [ep]),
            eg = i.useMemo(() => a.getAvatarURL(P, ef), [a, P, ef]);
        return (p === k.OYC.ONLY_WHILE_SPEAKING && ed && !ei) || null == J
            ? null
            : n
              ? (0, r.jsxs)(c.P3F, {
                    className: o()(A.voiceUser, {
                        [A.speaking]: ei,
                        [A.interactive]: !l,
                        [A.flipped]: n,
                        [A.justConnected]: B
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
                                  shouldShow: D,
                                  onRequestClose: ea,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)('div', {
                                          className: A.username,
                                          ref: G,
                                          children: [
                                              (0, r.jsx)(x.nm, {
                                                  guildId: P,
                                                  user: a,
                                                  video: J.selfVideo,
                                                  isStreaming: eo,
                                                  className: A.voiceIcons,
                                                  iconClassName: A.voiceIcon,
                                                  isWatching: en,
                                                  localMute: X && !R,
                                                  localVideoDisabled: et,
                                                  mute: J.isVoiceMuted(),
                                                  deaf: J.isVoiceDeafened() || (ee && !R),
                                                  serverMute: J.mute || J.suppress,
                                                  serverDeaf: J.deaf,
                                                  disabled: !1
                                              }),
                                              !I &&
                                                  (0, r.jsx)(v.ZP, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: P,
                                                      className: A.clanTag,
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
                        !R &&
                            (0, r.jsx)(F, {
                                nick: u,
                                connectedOn: L,
                                isSettingsPreview: I,
                                voiceBackgroundWidth: Q,
                                rightAlign: !0
                            }),
                        (0, r.jsx)(Y, {
                            className: A.avatar,
                            size: ep,
                            src: eg,
                            'aria-hidden': !0
                        }),
                        (0, r.jsx)(z, {
                            avatarSize: ef,
                            userId: a.id,
                            channelId: t.id,
                            guildId: t.getGuildId()
                        })
                    ]
                })
              : (0, r.jsxs)(c.P3F, {
                    className: o()(A.voiceUser, {
                        [A.speaking]: ei,
                        [A.interactive]: !l,
                        [A.flipped]: n,
                        [A.justConnected]: B
                    }),
                    onClick: l ? void 0 : (e) => (null == b ? void 0 : b(e, a)),
                    onContextMenu: ec,
                    onMouseEnter: eu,
                    onMouseLeave: ea,
                    children: [
                        (0, r.jsx)(Y, {
                            className: A.avatar,
                            size: ep,
                            src: eg,
                            'aria-hidden': !0
                        }),
                        !R &&
                            (0, r.jsx)(F, {
                                nick: u,
                                connectedOn: L,
                                isSettingsPreview: I,
                                voiceBackgroundWidth: Q
                            }),
                        ed && (d === k.wC$.NEVER || (!ei && d === k.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  position: 'right',
                                  renderPopout: es,
                                  shouldShow: D,
                                  onRequestClose: ea,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)('div', {
                                          className: o()(A.username, { [A.streaming]: eo }),
                                          ref: G,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  children: u
                                              }),
                                              !I &&
                                                  (0, r.jsx)(v.ZP, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: P,
                                                      className: A.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, V.Ws)(k.Odu.VOICE_V3, {
                                                              type: V.Qu.VOICE,
                                                              value: V.bk.PROFILE_OPENED,
                                                              userId: a.id
                                                          });
                                                      }
                                                  }),
                                              (0, r.jsx)(x.nm, {
                                                  guildId: P,
                                                  user: a,
                                                  video: J.selfVideo,
                                                  isStreaming: eo,
                                                  className: A.voiceIcons,
                                                  iconClassName: A.voiceIcon,
                                                  isWatching: en,
                                                  localMute: X && !R,
                                                  localVideoDisabled: et,
                                                  mute: J.isVoiceMuted(),
                                                  deaf: J.isVoiceDeafened() || (ee && !R),
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
    B = i.memo(function (e) {
        let { widgetId: t, channel: l, sortedVoiceState: o, displayNameMode: a, displayUserMode: s, locked: f, flipped: g, size: O, isPreviewingInGame: m, isSettingsPreview: b, context: y } = e,
            { user: v, member: h, voiceState: x, connectedOn: S } = o,
            [w, E] = i.useState(null),
            [Z, C] = i.useState(null);
        i.useEffect(() => {
            f && C(null);
        }, [f]),
            i.useEffect(() => {
                null != w &&
                    (0, V.Ws)(k.Odu.VOICE_V3, {
                        type: V.Qu.GO_LIVE,
                        value: V.bk.STREAM_PREVIEWED
                    });
            }, [w]);
        let D = (e) => {
                E(e);
            },
            A = (e, t) => {
                b ||
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
                                    M(_({}, n), {
                                        user: t,
                                        channelId: null == l ? void 0 : l.id,
                                        guildId: null == l ? void 0 : l.guild_id,
                                        mediaEngineContext: y,
                                        onShowProfile: () => C(t.id),
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
            W = i.useCallback(
                (e) => {
                    var n, r;
                    let i = null == (n = I.Z.getWidget(t)) ? void 0 : n.layoutId,
                        o = null != i ? (null == (r = I.Z.getWidgetsForLayout(i)) ? void 0 : r.find((e) => e.type === k.Odu.GO_LIVE)) : null;
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
        if (null == v || null == l || null == x) return null;
        let T = f || m;
        return (0, r.jsx)(
            c.yRy,
            {
                preload: () =>
                    (0, j.Z)(v, {
                        guildId: l.guild_id,
                        channelId: l.id
                    }),
                renderPopout: (e) =>
                    (0, r.jsx)(
                        P.Z,
                        M(_({}, e), {
                            userId: v.id,
                            guildId: l.guild_id,
                            channelId: l.id,
                            appContext: k.IlC.OVERLAY
                        })
                    ),
                position: 'right',
                shouldShow: Z === v.id,
                onRequestClose: () => C(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(Q, {
                        guildId: null == l ? void 0 : l.guild_id,
                        user: v,
                        connectedOn: S,
                        nick: null != (e = null == h ? void 0 : h.nick) ? e : N.ZP.getName(v),
                        flipped: g,
                        voiceState: x,
                        displayNameMode: a,
                        displayUserMode: s,
                        size: O,
                        locked: T,
                        onContextMenu: A,
                        onClick: A,
                        context: y,
                        channel: l,
                        showStreamPreview: v.id === w,
                        onShowStreamPreview: D,
                        onWatchStream: W,
                        isSettingsPreview: b
                    });
                }
            },
            v.id
        );
    });
