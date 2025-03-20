n.d(t, {
    ZP: () => B,
    e5: () => T,
    px: () => W
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
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
    w = n(597998),
    x = n(199902),
    S = n(314897),
    I = n(355863),
    E = n(131951),
    Z = n(979651),
    N = n(136015),
    C = n(51144),
    V = n(444295),
    k = n(981631),
    D = n(388032),
    _ = n(123695);
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
function A(e, t) {
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
function F(e, t) {
    let [n, r] = i.useState(null != e && e > Date.now() - 10000),
        [o, l] = i.useState(!1),
        [a, s] = i.useState(!0);
    return (
        (0, m.ZP)(() => {
            n &&
                !t &&
                (s(!1),
                setTimeout(() => {
                    l(!0);
                }, 16));
        }),
        (0, m.ZP)(() => {
            let e = setTimeout(() => {
                r(!1),
                    setTimeout(() => {
                        l(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        i.useMemo(
            () => ({
                showConnectedAnimation: o,
                recentlyConnected: n,
                hideConnectedAnimation: a,
                setHideConnectedAnimation: s
            }),
            [o, n, a, s]
        )
    );
}
let U = i.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: o, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            { showConnectedAnimation: p, recentlyConnected: f, hideConnectedAnimation: O, setHideConnectedAnimation: m } = F(n, o),
            { ref: y, width: v } = (0, g.Z)(),
            h = (0, s.e7)([b.Z], () => b.Z.useReducedMotion),
            j = f ? 'entering' : 'exiting',
            { width: P } = (0, a.useSpring)(A(M({}, R[j]), { width: p ? v : u })),
            { opacity: w } = (0, a.useSpring)(
                A(M({}, G[j]), {
                    opacity: +!!p,
                    onRest: () => {
                        p || m(!0);
                    }
                })
            ),
            x = i.useMemo(() => (O || h ? 'none' : 'block'), [O, h]);
        return (0, r.jsx)(a.animated.div, {
            className: l()(_.connectedAnimationContainer, { [_.right]: d }),
            style: {
                width: P,
                opacity: w,
                display: x
            },
            children: (0, r.jsxs)('div', {
                ref: y,
                className: l()(_.connectedAnimationInnerContainer, {
                    [_.exiting]: 'exiting' === j,
                    [_.left]: !d,
                    [_.right]: d
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: L,
                            shouldAnimate: !h,
                            className: _.animation
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
                            className: _.animation
                        }),
                    (0, r.jsx)('div', { className: _.emptySpace })
                ]
            })
        });
    }),
    z = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: o } = e,
            l = 2 * t,
            a = -(t / 2);
        return (0, r.jsx)('div', {
            className: _.effect,
            style: {
                top: a,
                left: a,
                width: l,
                height: l
            },
            children: (0, r.jsx)(y.Z, {
                userId: n,
                channelId: i,
                guildId: o,
                containerDimensions: {
                    width: l,
                    height: l
                }
            })
        });
    }),
    Y = i.memo(c.qEK),
    Q = i.memo(function (e) {
        let { channel: t, flipped: n = !1, locked: o = !1, user: a, nick: u, displayNameMode: d, displayUserMode: p, size: m = k.ipw.LARGE, onClick: b, onContextMenu: y, context: j, guildId: P, isSettingsPreview: I = !1, voiceState: C, showStreamPreview: D, onShowStreamPreview: M, onWatchStream: A, connectedOn: L } = e,
            R = (0, s.e7)([S.default], () => S.default.getId() === a.id, [a.id]),
            { ref: G, width: Q } = (0, g.Z)(),
            { showConnectedAnimation: B } = F(L, I),
            K = null == C ? void 0 : C.sessionId,
            q = t.id,
            H = a.id,
            [$] = (0, s.e7)(
                [Z.Z],
                () => {
                    var e;
                    return [null !== (e = Z.Z.getVoiceStateForChannel(q, H)) && void 0 !== e ? e : Z.Z.getVoiceStateForSession(H, K), Z.Z.getVoiceStateVersion()];
                },
                [q, H, K],
                N.Q
            ),
            J = I ? C : null != $ ? $ : C,
            [X, ee, et] = (0, s.Wu)([E.Z], () => (R ? [!E.Z.isSupported() || E.Z.isSelfMute() || E.Z.isSelfMutedTemporarily(), E.Z.isSelfDeaf(), !1] : [!E.Z.isSupported() || E.Z.isLocalMute(a.id), !1, E.Z.isLocalVideoDisabled(a.id)]), [R, a.id]),
            en = (0, s.e7)(
                [x.Z],
                () => {
                    let e = x.Z.getCurrentUserActiveStream();
                    return null != e && e.ownerId !== a.id && x.Z.getViewerIds(e).filter((e) => e === a.id).length > 0;
                },
                [a.id]
            ),
            er = I && (null == C ? void 0 : C.discoverable),
            ei =
                (0, O.Z)({
                    userId: a.id,
                    context: j
                }) || er,
            eo = (0, s.e7)([x.Z], () => x.Z.getStreamForUser(a.id, P)),
            el = null != eo,
            ea = i.useCallback(() => {
                (D || null != el) && M(null);
            }, [M, D, el]),
            es = i.useCallback(
                () =>
                    (0, r.jsx)(h.Z, {
                        user: a,
                        channel: t,
                        onWatch: () => {
                            null != eo &&
                                ((0, f.rn)(eo, {
                                    forceMultiple: !0,
                                    noFocus: !0
                                }),
                                ea(),
                                A(null != eo ? eo : null));
                        },
                        onAction: () => A,
                        previewIsOpen: D,
                        location: k.Sbl.UNLOCKED_OVERLAY,
                        hideTip: !0
                    }),
                [a, t, eo, D, ea, A]
            ),
            ec = i.useCallback(
                (e) => {
                    o || null == y || y(e, a);
                },
                [o, y, a]
            ),
            eu = i.useCallback(() => {
                !o && null != el && M(a.id);
            }, [o, M, el, a]),
            ed = o || I,
            ep = i.useMemo(() => W(m), [m]),
            ef = i.useMemo(() => T(ep), [ep]),
            eg = i.useMemo(() => a.getAvatarURL(P, ef), [a, P, ef]);
        return (p === k.OYC.ONLY_WHILE_SPEAKING && ed && !ei) || null == J
            ? null
            : n
              ? (0, r.jsxs)(c.P3F, {
                    className: l()(_.voiceUser, {
                        [_.speaking]: ei,
                        [_.interactive]: !o,
                        [_.flipped]: n,
                        [_.justConnected]: B
                    }),
                    onClick: o ? void 0 : (e) => (null == b ? void 0 : b(e, a)),
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
                                          className: _.username,
                                          ref: G,
                                          children: [
                                              (0, r.jsx)(w.nm, {
                                                  guildId: P,
                                                  user: a,
                                                  video: J.selfVideo,
                                                  isStreaming: el,
                                                  className: _.voiceIcons,
                                                  iconClassName: _.voiceIcon,
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
                                                      className: _.clanTag,
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
                            (0, r.jsx)(U, {
                                nick: u,
                                connectedOn: L,
                                isSettingsPreview: I,
                                voiceBackgroundWidth: Q,
                                rightAlign: !0
                            }),
                        (0, r.jsx)(Y, {
                            className: _.avatar,
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
                    className: l()(_.voiceUser, {
                        [_.speaking]: ei,
                        [_.interactive]: !o,
                        [_.flipped]: n,
                        [_.justConnected]: B
                    }),
                    onClick: o ? void 0 : (e) => (null == b ? void 0 : b(e, a)),
                    onContextMenu: ec,
                    onMouseEnter: eu,
                    onMouseLeave: ea,
                    children: [
                        (0, r.jsx)(Y, {
                            className: _.avatar,
                            size: ep,
                            src: eg,
                            'aria-hidden': !0
                        }),
                        !R &&
                            (0, r.jsx)(U, {
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
                                          className: l()(_.username, { [_.streaming]: el }),
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
                                                      className: _.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, V.Ws)(k.Odu.VOICE_V3, {
                                                              type: V.Qu.VOICE,
                                                              value: V.bk.PROFILE_OPENED,
                                                              userId: a.id
                                                          });
                                                      }
                                                  }),
                                              (0, r.jsx)(w.nm, {
                                                  guildId: P,
                                                  user: a,
                                                  video: J.selfVideo,
                                                  isStreaming: el,
                                                  className: _.voiceIcons,
                                                  iconClassName: _.voiceIcon,
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
        let { widgetId: t, channel: o, sortedVoiceState: l, displayNameMode: a, displayUserMode: s, locked: f, flipped: g, size: O, isPreviewingInGame: m, isSettingsPreview: b, context: y } = e,
            { user: v, member: h, voiceState: w, connectedOn: x } = l,
            [S, E] = i.useState(null),
            [Z, N] = i.useState(null);
        i.useEffect(() => {
            f && N(null);
        }, [f]),
            i.useEffect(() => {
                null != S &&
                    (0, V.Ws)(k.Odu.VOICE_V3, {
                        type: V.Qu.GO_LIVE,
                        value: V.bk.STREAM_PREVIEWED
                    });
            }, [S]);
        let D = (e) => {
                E(e);
            },
            _ = (e, t) => {
                !b &&
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
                                    A(M({}, n), {
                                        user: t,
                                        channelId: null == o ? void 0 : o.id,
                                        guildId: null == o ? void 0 : o.guild_id,
                                        mediaEngineContext: y,
                                        onShowProfile: () => N(t.id),
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
                    let i = null === (n = I.Z.getWidget(t)) || void 0 === n ? void 0 : n.layoutId,
                        l = null != i ? (null === (r = I.Z.getWidgetsForLayout(i)) || void 0 === r ? void 0 : r.find((e) => e.type === k.Odu.GO_LIVE)) : null;
                    null == l ||
                        l.pinned ||
                        ((0, d.xh)(l.id),
                        p.Z.track(k.rMx.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: null == o ? void 0 : o.guild_id,
                            channel_id: null == o ? void 0 : o.id,
                            channel_type: null == o ? void 0 : o.type,
                            widget_type: k.Odu.GO_LIVE
                        })),
                        null != e &&
                            null != l &&
                            (0, V.Ws)(k.Odu.VOICE_V3, {
                                type: V.Qu.GO_LIVE,
                                value: V.bk.ENABLED,
                                userId: e.ownerId
                            });
                },
                [o, t]
            );
        if (null == v || null == o || null == w) return null;
        let T = f || m;
        return (0, r.jsx)(
            c.yRy,
            {
                preload: () =>
                    (0, j.Z)(v, {
                        guildId: o.guild_id,
                        channelId: o.id
                    }),
                renderPopout: (e) =>
                    (0, r.jsx)(
                        P.Z,
                        A(M({}, e), {
                            userId: v.id,
                            guildId: o.guild_id,
                            channelId: o.id,
                            appContext: k.IlC.OVERLAY
                        })
                    ),
                position: 'right',
                shouldShow: Z === v.id,
                onRequestClose: () => N(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(Q, {
                        guildId: null == o ? void 0 : o.guild_id,
                        user: v,
                        connectedOn: x,
                        nick: null !== (e = null == h ? void 0 : h.nick) && void 0 !== e ? e : C.ZP.getName(v),
                        flipped: g,
                        voiceState: w,
                        displayNameMode: a,
                        displayUserMode: s,
                        size: O,
                        locked: T,
                        onContextMenu: _,
                        onClick: _,
                        context: y,
                        channel: o,
                        showStreamPreview: v.id === S,
                        onShowStreamPreview: D,
                        onWatchStream: W,
                        isSettingsPreview: b
                    });
                }
            },
            v.id
        );
    });
