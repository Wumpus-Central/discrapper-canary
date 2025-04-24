n.d(t, {
    ZP: () => K,
    e5: () => M,
    px: () => D
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(272573),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(765250),
    f = n(13245),
    p = n(872810),
    g = n(393238),
    m = n(586902),
    h = n(493773),
    O = n(607070),
    v = n(415635),
    b = n(701362),
    y = n(172751),
    I = n(670188),
    P = n(597998),
    j = n(199902),
    w = n(314897),
    S = n(355863),
    Z = n(131951),
    E = n(979651),
    N = n(136015),
    x = n(51144),
    C = n(444295),
    k = n(981631),
    T = n(388032),
    _ = n(62802);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    switch (e) {
        case k.ipw.LARGE:
            return c.EFr.SIZE_32;
        case k.ipw.SMALL:
            return c.EFr.SIZE_24;
        default:
            return c.EFr.SIZE_32;
    }
}
function M(e) {
    return c.ny6[e].size;
}
let F = () =>
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
    L = {
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
    let [n, i] = r.useState(null != e && e > Date.now() - 10000),
        [l, o] = r.useState(!1),
        [a, s] = r.useState(!0);
    return (
        (0, h.ZP)(() => {
            n &&
                !t &&
                (s(!1),
                setTimeout(() => {
                    o(!0);
                }, 16));
        }),
        (0, h.ZP)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        o(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        r.useMemo(
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
let G = r.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: l, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            { showConnectedAnimation: f, recentlyConnected: p, hideConnectedAnimation: m, setHideConnectedAnimation: h } = W(n, l),
            { ref: v, width: b } = (0, g.ZP)(),
            y = (0, s.e7)([O.Z], () => O.Z.useReducedMotion),
            I = p ? 'entering' : 'exiting',
            { width: P } = (0, a.useSpring)(V(A({}, R[I]), { width: f ? b : u })),
            { opacity: j } = (0, a.useSpring)(
                V(A({}, L[I]), {
                    opacity: +!!f,
                    onRest: () => {
                        f || h(!0);
                    }
                })
            ),
            w = r.useMemo(() => (m || y ? 'none' : 'block'), [m, y]);
        return (0, i.jsx)(a.animated.div, {
            className: o()(_.connectedAnimationContainer, { [_.right]: d }),
            style: {
                width: P,
                opacity: j,
                display: w
            },
            children: (0, i.jsxs)('div', {
                ref: v,
                className: o()(_.connectedAnimationInnerContainer, {
                    [_.exiting]: 'exiting' === I,
                    [_.left]: !d,
                    [_.right]: d
                }),
                children: [
                    d &&
                        (0, i.jsx)(c.Fmz, {
                            importData: F,
                            shouldAnimate: !y,
                            className: _.animation
                        }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-normal',
                            children: T.intl.format(T.t.uFcRen, { nick: t })
                        })
                    }),
                    !d &&
                        (0, i.jsx)(c.Fmz, {
                            importData: F,
                            shouldAnimate: !y,
                            className: _.animation
                        }),
                    (0, i.jsx)('div', { className: _.emptySpace })
                ]
            })
        });
    }),
    U = r.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: r, guildId: l } = e,
            o = 2 * t,
            a = -(t / 2);
        return (0, i.jsx)('div', {
            className: _.effect,
            style: {
                top: a,
                left: a,
                width: o,
                height: o
            },
            children: (0, i.jsx)(v.Z, {
                userId: n,
                channelId: r,
                guildId: l,
                containerDimensions: {
                    width: o,
                    height: o
                }
            })
        });
    }),
    z = r.memo(c.qEK),
    Y = r.memo(function (e) {
        let { channel: t, flipped: n = !1, locked: l = !1, user: a, nick: u, displayNameMode: d, displayUserMode: f, size: h = k.ipw.LARGE, onClick: O, onContextMenu: v, context: I, guildId: S, isSettingsPreview: x = !1, voiceState: T, showStreamPreview: A, onShowStreamPreview: V, onWatchStream: F, connectedOn: R } = e,
            L = (0, s.e7)([w.default], () => w.default.getId() === a.id, [a.id]),
            { ref: Y, width: K } = (0, g.ZP)(),
            { showConnectedAnimation: B } = W(R, x),
            Q = null == T ? void 0 : T.sessionId,
            q = t.id,
            H = a.id,
            [J] = (0, s.e7)(
                [E.Z],
                () => {
                    var e;
                    return [null != (e = E.Z.getVoiceStateForChannel(q, H)) ? e : E.Z.getVoiceStateForSession(H, Q), E.Z.getVoiceStateVersion()];
                },
                [q, H, Q],
                N.Q
            ),
            $ = x ? T : null != J ? J : T,
            [X, ee, et] = (0, s.Wu)([Z.Z], () => (L ? [!Z.Z.isSupported() || Z.Z.isSelfMute() || Z.Z.isSelfMutedTemporarily(), Z.Z.isSelfDeaf(), !1] : [!Z.Z.isSupported() || Z.Z.isLocalMute(a.id), !1, Z.Z.isLocalVideoDisabled(a.id)]), [L, a.id]),
            en = (0, s.e7)(
                [j.Z],
                () => {
                    let e = j.Z.getCurrentUserActiveStream();
                    return null != e && e.ownerId !== a.id && j.Z.getViewerIds(e).filter((e) => e === a.id).length > 0;
                },
                [a.id]
            ),
            ei = x && (null == T ? void 0 : T.discoverable),
            er =
                (0, m.Z)({
                    userId: a.id,
                    context: I
                }) || ei,
            el = (0, s.e7)([j.Z], () => j.Z.getStreamForUser(a.id, S)),
            eo = null != el,
            ea = r.useCallback(() => {
                (A || null != eo) && V(null);
            }, [V, A, eo]),
            es = r.useCallback(
                () =>
                    (0, i.jsx)(b.Z, {
                        user: a,
                        channel: t,
                        onWatch: () => {
                            null != el &&
                                ((0, p.rn)(el, {
                                    forceMultiple: !0,
                                    noFocus: !0
                                }),
                                ea(),
                                F(null != el ? el : null));
                        },
                        onAction: () => F,
                        previewIsOpen: A,
                        location: k.Sbl.UNLOCKED_OVERLAY,
                        hideTip: !0
                    }),
                [a, t, el, A, ea, F]
            ),
            ec = r.useCallback(
                (e) => {
                    l || null == v || v(e, a);
                },
                [l, v, a]
            ),
            eu = r.useCallback(() => {
                l || (null != eo && V(a.id));
            }, [l, V, eo, a]),
            ed = l || x,
            ef = r.useMemo(() => D(h), [h]),
            ep = r.useMemo(() => M(ef), [ef]),
            eg = r.useMemo(() => a.getAvatarURL(S, ep), [a, S, ep]);
        return (f === k.OYC.ONLY_WHILE_SPEAKING && ed && !er) || null == $
            ? null
            : n
              ? (0, i.jsxs)(c.P3F, {
                    className: o()(_.voiceUser, {
                        [_.speaking]: er,
                        [_.interactive]: !l,
                        [_.flipped]: n,
                        [_.justConnected]: B
                    }),
                    onClick: l ? void 0 : (e) => (null == O ? void 0 : O(e, a)),
                    onContextMenu: ec,
                    onMouseEnter: eu,
                    onMouseLeave: ea,
                    children: [
                        ed && (d === k.wC$.NEVER || (!er && d === k.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(c.yRy, {
                                  position: 'left',
                                  renderPopout: es,
                                  shouldShow: A,
                                  onRequestClose: ea,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)('div', {
                                          className: _.username,
                                          ref: Y,
                                          children: [
                                              (0, i.jsx)(P.nm, {
                                                  guildId: S,
                                                  user: a,
                                                  video: $.selfVideo,
                                                  isStreaming: eo,
                                                  className: _.voiceIcons,
                                                  iconClassName: _.voiceIcon,
                                                  isWatching: en,
                                                  localMute: X && !L,
                                                  localVideoDisabled: et,
                                                  mute: $.isVoiceMuted(),
                                                  deaf: $.isVoiceDeafened() || (ee && !L),
                                                  serverMute: $.mute || $.suppress,
                                                  serverDeaf: $.deaf,
                                                  disabled: !1
                                              }),
                                              !x &&
                                                  (0, i.jsx)(y.ZP, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: S,
                                                      className: _.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, C.Ws)(k.Odu.VOICE_V3, {
                                                              type: C.Qu.VOICE,
                                                              value: C.bk.PROFILE_OPENED,
                                                              userId: a.id
                                                          });
                                                      }
                                                  }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  children: u
                                              })
                                          ]
                                      })
                              }),
                        !L &&
                            (0, i.jsx)(G, {
                                nick: u,
                                connectedOn: R,
                                isSettingsPreview: x,
                                voiceBackgroundWidth: K,
                                rightAlign: !0
                            }),
                        (0, i.jsx)(z, {
                            className: _.avatar,
                            size: ef,
                            src: eg,
                            'aria-hidden': !0
                        }),
                        (0, i.jsx)(U, {
                            avatarSize: ep,
                            userId: a.id,
                            channelId: t.id,
                            guildId: t.getGuildId()
                        })
                    ]
                })
              : (0, i.jsxs)(c.P3F, {
                    className: o()(_.voiceUser, {
                        [_.speaking]: er,
                        [_.interactive]: !l,
                        [_.flipped]: n,
                        [_.justConnected]: B
                    }),
                    onClick: l ? void 0 : (e) => (null == O ? void 0 : O(e, a)),
                    onContextMenu: ec,
                    onMouseEnter: eu,
                    onMouseLeave: ea,
                    children: [
                        (0, i.jsx)(z, {
                            className: _.avatar,
                            size: ef,
                            src: eg,
                            'aria-hidden': !0
                        }),
                        !L &&
                            (0, i.jsx)(G, {
                                nick: u,
                                connectedOn: R,
                                isSettingsPreview: x,
                                voiceBackgroundWidth: K
                            }),
                        ed && (d === k.wC$.NEVER || (!er && d === k.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(c.yRy, {
                                  position: 'right',
                                  renderPopout: es,
                                  shouldShow: A,
                                  onRequestClose: ea,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)('div', {
                                          className: o()(_.username, { [_.streaming]: eo }),
                                          ref: Y,
                                          children: [
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  children: u
                                              }),
                                              !x &&
                                                  (0, i.jsx)(y.ZP, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: S,
                                                      className: _.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, C.Ws)(k.Odu.VOICE_V3, {
                                                              type: C.Qu.VOICE,
                                                              value: C.bk.PROFILE_OPENED,
                                                              userId: a.id
                                                          });
                                                      }
                                                  }),
                                              (0, i.jsx)(P.nm, {
                                                  guildId: S,
                                                  user: a,
                                                  video: $.selfVideo,
                                                  isStreaming: eo,
                                                  className: _.voiceIcons,
                                                  iconClassName: _.voiceIcon,
                                                  isWatching: en,
                                                  localMute: X && !L,
                                                  localVideoDisabled: et,
                                                  mute: $.isVoiceMuted(),
                                                  deaf: $.isVoiceDeafened() || (ee && !L),
                                                  serverMute: $.mute || $.suppress,
                                                  serverDeaf: $.deaf,
                                                  disabled: !1
                                              })
                                          ]
                                      })
                              })
                    ]
                });
    }),
    K = r.memo(function (e) {
        let { widgetId: t, channel: l, sortedVoiceState: o, displayNameMode: a, displayUserMode: s, locked: c, flipped: p, size: g, isPreviewingInGame: m, isSettingsPreview: h, context: O } = e,
            { user: v, member: b, voiceState: y, connectedOn: P } = o,
            [j, w] = r.useState(null),
            [Z, E] = r.useState(null);
        r.useEffect(() => {
            c && E(null);
        }, [c]),
            r.useEffect(() => {
                null != j &&
                    (0, C.Ws)(k.Odu.VOICE_V3, {
                        type: C.Qu.GO_LIVE,
                        value: C.bk.STREAM_PREVIEWED
                    });
            }, [j]);
        let N = (e) => {
                w(e);
            },
            T = (e, t) => {
                h ||
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('6524')]).then(n.bind(n, 27900));
                        return (
                            (0, C.Ws)(k.Odu.VOICE_V3, {
                                type: C.Qu.VOICE,
                                value: C.bk.SETTINGS_OPENED,
                                userId: t.id
                            }),
                            (n) =>
                                (0, i.jsx)(
                                    e,
                                    V(A({}, n), {
                                        user: t,
                                        channelId: null == l ? void 0 : l.id,
                                        guildId: null == l ? void 0 : l.guild_id,
                                        mediaEngineContext: O,
                                        onShowProfile: () => E(t.id),
                                        appContext: k.IlC.OVERLAY,
                                        onWatchStream: () => {
                                            (0, C.Ws)(k.Odu.VOICE_V3, {
                                                type: C.Qu.GO_LIVE,
                                                value: C.bk.ENABLED,
                                                userId: t.id
                                            });
                                        }
                                    })
                                )
                        );
                    });
            },
            _ = r.useCallback(
                (e) => {
                    var n, i;
                    let r = null == (n = S.Z.getWidget(t)) ? void 0 : n.layoutId,
                        o = null != r ? (null == (i = S.Z.getWidgetsForLayout(r)) ? void 0 : i.find((e) => e.type === k.Odu.GO_LIVE)) : null;
                    null == o ||
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
                            (0, C.Ws)(k.Odu.VOICE_V3, {
                                type: C.Qu.GO_LIVE,
                                value: C.bk.ENABLED,
                                userId: e.ownerId
                            });
                },
                [l, t]
            );
        if (null == v || null == l || null == y) return null;
        let D = c || m;
        return (0, i.jsx)(
            I.Z,
            {
                user: v,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: k.IlC.OVERLAY,
                shouldShow: Z === v.id,
                onRequestClose: () => E(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, i.jsx)(Y, {
                        guildId: null == l ? void 0 : l.guild_id,
                        user: v,
                        connectedOn: P,
                        nick: null != (e = null == b ? void 0 : b.nick) ? e : x.ZP.getName(v),
                        flipped: p,
                        voiceState: y,
                        displayNameMode: a,
                        displayUserMode: s,
                        size: g,
                        locked: D,
                        onContextMenu: T,
                        onClick: T,
                        context: O,
                        channel: l,
                        showStreamPreview: v.id === j,
                        onShowStreamPreview: N,
                        onWatchStream: _,
                        isSettingsPreview: h
                    });
                }
            },
            v.id
        );
    });
