r.d(t, {
    ZP: () => A,
    e5: () => D,
    px: () => k
}),
    r(47120);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    o = r.n(l),
    a = r(442837),
    s = r(481060),
    c = r(239091),
    u = r(765250),
    d = r(13245),
    p = r(872810),
    f = r(586902),
    b = r(415635),
    O = r(979264),
    g = r(701362),
    v = r(184301),
    y = r(347475),
    m = r(597998),
    j = r(199902),
    h = r(314897),
    P = r(355863),
    I = r(131951),
    w = r(979651),
    S = r(136015),
    x = r(51144),
    E = r(444295),
    Z = r(981631),
    C = r(123695);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function k(e) {
    switch (e) {
        case Z.ipw.LARGE:
            return s.EFr.SIZE_32;
        case Z.ipw.SMALL:
            return s.EFr.SIZE_24;
        default:
            return s.EFr.SIZE_32;
    }
}
function D(e) {
    return s.ny6[e].size;
}
function _(e) {
    let { avatarSize: t, userId: r, channelId: i, guildId: l } = e,
        o = 2 * t,
        a = -(t / 2);
    return (0, n.jsx)('div', {
        className: C.effect,
        style: {
            top: a,
            left: a,
            width: o,
            height: o
        },
        children: (0, n.jsx)(b.Z, {
            userId: r,
            channelId: i,
            guildId: l,
            containerDimensions: {
                width: o,
                height: o
            }
        })
    });
}
function M(e) {
    let { channel: t, flipped: r = !1, locked: l = !1, user: c, nick: u, displayNameMode: d, displayUserMode: b, size: v = Z.ipw.LARGE, onClick: y, onContextMenu: P, context: x, guildId: N, isSettingsPreview: V = !1, voiceState: M, showStreamPreview: A, onShowStreamPreview: W, onWatchStream: L } = e,
        T = (0, a.e7)([h.default], () => h.default.getId() === c.id, [c.id]),
        G = null == M ? void 0 : M.sessionId,
        R = t.id,
        U = c.id,
        [F] = (0, a.e7)(
            [w.Z],
            () => {
                var e;
                return [null !== (e = w.Z.getVoiceStateForChannel(R, U)) && void 0 !== e ? e : w.Z.getVoiceStateForSession(U, G), w.Z.getVoiceStateVersion()];
            },
            [R, U, G],
            S.Q
        ),
        z = V ? M : null != F ? F : M,
        [Y, K, Q] = (0, a.Wu)([I.Z], () => (T ? [!I.Z.isSupported() || I.Z.isSelfMute() || I.Z.isSelfMutedTemporarily(), I.Z.isSelfDeaf(), !1] : [!I.Z.isSupported() || I.Z.isLocalMute(c.id), !1, I.Z.isLocalVideoDisabled(c.id)]), [T, c.id]),
        q = (0, a.e7)(
            [j.Z],
            () => {
                let e = j.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== c.id && j.Z.getViewerIds(e).filter((e) => e === c.id).length > 0;
            },
            [c.id]
        ),
        B = V && (null == M ? void 0 : M.discoverable),
        H =
            (0, f.Z)({
                userId: c.id,
                context: x
            }) || B,
        $ = (0, a.e7)([j.Z], () => j.Z.getStreamForUser(c.id, N)),
        J = null != $,
        X = i.useCallback(() => {
            (A || null != J) && W(null);
        }, [W, A, J]),
        ee = i.useCallback(
            () =>
                (0, n.jsx)(g.Z, {
                    user: c,
                    channel: t,
                    onWatch: () => {
                        null != $ &&
                            ((0, p.rn)($, {
                                forceMultiple: !0,
                                noFocus: !0
                            }),
                            X(),
                            L(null != $ ? $ : null));
                    },
                    onAction: () => L,
                    previewIsOpen: A,
                    location: Z.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [c, t, $, A, X, L]
        ),
        et = i.useCallback(
            (e) => {
                l || null == P || P(e, c);
            },
            [l, P, c]
        ),
        er = i.useCallback(() => {
            !l && null != J && W(c.id);
        }, [l, W, J, c]),
        en = l || V;
    if ((b === Z.OYC.ONLY_WHILE_SPEAKING && en && !H) || null == z) return null;
    let ei = k(v),
        el = D(ei);
    return r
        ? (0, n.jsxs)(s.P3F, {
              className: o()(C.voiceUser, {
                  [C.speaking]: H,
                  [C.interactive]: !l,
                  [C.flipped]: r
              }),
              onClick: l ? void 0 : (e) => (null == y ? void 0 : y(e, c)),
              onContextMenu: et,
              onMouseEnter: er,
              onMouseLeave: X,
              children: [
                  en && (d === Z.wC$.NEVER || (!H && d === Z.wC$.ONLY_WHILE_SPEAKING))
                      ? null
                      : (0, n.jsx)(s.yRy, {
                            position: 'right',
                            renderPopout: ee,
                            shouldShow: A,
                            onRequestClose: X,
                            spacing: 0,
                            children: () =>
                                (0, n.jsxs)(s.P3F, {
                                    className: C.username,
                                    children: [
                                        (0, n.jsx)(m.nm, {
                                            guildId: N,
                                            user: c,
                                            video: z.selfVideo,
                                            isStreaming: J,
                                            className: C.voiceIcons,
                                            iconClassName: C.voiceIcon,
                                            isWatching: q,
                                            localMute: Y && !T,
                                            localVideoDisabled: Q,
                                            mute: z.isVoiceMuted(),
                                            deaf: z.isVoiceDeafened() || (K && !T),
                                            serverMute: z.mute || z.suppress,
                                            serverDeaf: z.deaf,
                                            disabled: !1
                                        }),
                                        !V &&
                                            (0, n.jsx)(O.ZP, {
                                                primaryGuild: c.primaryGuild,
                                                userId: c.id,
                                                contextGuildId: N,
                                                className: C.clanTag,
                                                disableGuildProfile: !0,
                                                onShowProfile: () => {
                                                    (0, E.Ws)(Z.Odu.VOICE_V3, {
                                                        type: E.Qu.VOICE,
                                                        value: E.bk.PROFILE_OPENED,
                                                        userId: c.id
                                                    });
                                                }
                                            }),
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-normal',
                                            children: u
                                        })
                                    ]
                                })
                        }),
                  (0, n.jsx)(s.qEK, {
                      className: C.avatar,
                      size: ei,
                      src: c.getAvatarURL(N, el),
                      'aria-hidden': !0
                  }),
                  (0, n.jsx)(_, {
                      avatarSize: el,
                      userId: c.id,
                      channelId: t.id,
                      guildId: t.getGuildId()
                  })
              ]
          })
        : (0, n.jsxs)(s.P3F, {
              className: o()(C.voiceUser, {
                  [C.speaking]: H,
                  [C.interactive]: !l,
                  [C.flipped]: r
              }),
              onClick: l ? void 0 : (e) => (null == y ? void 0 : y(e, c)),
              onContextMenu: et,
              onMouseEnter: er,
              onMouseLeave: X,
              children: [
                  (0, n.jsx)(s.qEK, {
                      className: C.avatar,
                      size: ei,
                      src: c.getAvatarURL(N, el),
                      'aria-hidden': !0
                  }),
                  (0, n.jsx)(_, {
                      avatarSize: el,
                      userId: c.id,
                      channelId: t.id,
                      guildId: t.getGuildId()
                  }),
                  en && (d === Z.wC$.NEVER || (!H && d === Z.wC$.ONLY_WHILE_SPEAKING))
                      ? null
                      : (0, n.jsx)(s.yRy, {
                            position: 'right',
                            renderPopout: ee,
                            shouldShow: A,
                            onRequestClose: X,
                            spacing: 0,
                            children: () =>
                                (0, n.jsxs)(s.P3F, {
                                    className: o()(C.username, { [C.streaming]: J }),
                                    children: [
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-normal',
                                            children: u
                                        }),
                                        !V &&
                                            (0, n.jsx)(O.ZP, {
                                                primaryGuild: c.primaryGuild,
                                                userId: c.id,
                                                contextGuildId: N,
                                                className: C.clanTag,
                                                disableGuildProfile: !0,
                                                onShowProfile: () => {
                                                    (0, E.Ws)(Z.Odu.VOICE_V3, {
                                                        type: E.Qu.VOICE,
                                                        value: E.bk.PROFILE_OPENED,
                                                        userId: c.id
                                                    });
                                                }
                                            }),
                                        (0, n.jsx)(m.nm, {
                                            guildId: N,
                                            user: c,
                                            video: z.selfVideo,
                                            isStreaming: J,
                                            className: C.voiceIcons,
                                            iconClassName: C.voiceIcon,
                                            isWatching: q,
                                            localMute: Y && !T,
                                            localVideoDisabled: Q,
                                            mute: z.isVoiceMuted(),
                                            deaf: z.isVoiceDeafened() || (K && !T),
                                            serverMute: z.mute || z.suppress,
                                            serverDeaf: z.deaf,
                                            disabled: !1
                                        })
                                    ]
                                })
                        })
              ]
          });
}
let A = i.memo(function (e) {
    let { widgetId: t, user: l, member: o, voiceState: a, channel: p, displayNameMode: f, displayUserMode: b, locked: O, flipped: g, size: m, isPreviewingInGame: j, isSettingsPreview: h, context: I } = e,
        [w, S] = i.useState(null),
        [C, k] = i.useState(null);
    i.useEffect(() => {
        O && k(null);
    }, [O]),
        i.useEffect(() => {
            null != w &&
                (0, E.Ws)(Z.Odu.VOICE_V3, {
                    type: E.Qu.GO_LIVE,
                    value: E.bk.STREAM_PREVIEWED
                });
        }, [w]);
    let D = (e) => {
            S(e);
        },
        _ = (e, t) => {
            !h &&
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.all([r.e('79695'), r.e('6524')]).then(r.bind(r, 27900));
                    return (
                        (0, E.Ws)(Z.Odu.VOICE_V3, {
                            type: E.Qu.VOICE,
                            value: E.bk.SETTINGS_OPENED,
                            userId: t.id
                        }),
                        (r) =>
                            (0, n.jsx)(
                                e,
                                V(N({}, r), {
                                    user: t,
                                    channelId: null == p ? void 0 : p.id,
                                    guildId: null == p ? void 0 : p.guild_id,
                                    mediaEngineContext: I,
                                    onShowProfile: () => k(t.id),
                                    appContext: Z.IlC.OVERLAY,
                                    onWatchStream: () => {
                                        (0, E.Ws)(Z.Odu.VOICE_V3, {
                                            type: E.Qu.GO_LIVE,
                                            value: E.bk.ENABLED,
                                            userId: t.id
                                        });
                                    }
                                })
                            )
                    );
                });
        },
        A = i.useCallback(
            (e) => {
                var r, n;
                let i = null === (r = P.Z.getWidget(t)) || void 0 === r ? void 0 : r.layoutId,
                    l = null != i ? (null === (n = P.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === Z.Odu.GO_LIVE)) : null;
                null == l ||
                    l.pinned ||
                    ((0, u.xh)(l.id),
                    d.Z.track(Z.rMx.OVERLAY_PIN_TOGGLED, {
                        pinned: !0,
                        guild_id: null == p ? void 0 : p.guild_id,
                        channel_id: null == p ? void 0 : p.id,
                        channel_type: null == p ? void 0 : p.type,
                        widget_type: Z.Odu.GO_LIVE
                    })),
                    null != e &&
                        null != l &&
                        (0, E.Ws)(Z.Odu.VOICE_V3, {
                            type: E.Qu.GO_LIVE,
                            value: E.bk.ENABLED,
                            userId: e.ownerId
                        });
            },
            [p, t]
        );
    if (null == l || null == p || null == a) return null;
    let W = O || j;
    return (0, n.jsx)(
        s.yRy,
        {
            preload: () =>
                (0, v.Z)(l, {
                    guildId: p.guild_id,
                    channelId: p.id
                }),
            renderPopout: (e) =>
                (0, n.jsx)(
                    y.Z,
                    V(N({}, e), {
                        userId: l.id,
                        guildId: p.guild_id,
                        channelId: p.id,
                        appContext: Z.IlC.OVERLAY
                    })
                ),
            position: 'right',
            shouldShow: C === l.id,
            onRequestClose: () => k(null),
            spacing: 24,
            children: () => {
                var e;
                return (0, n.jsx)(M, {
                    guildId: null == p ? void 0 : p.guild_id,
                    user: l,
                    nick: null !== (e = null == o ? void 0 : o.nick) && void 0 !== e ? e : x.ZP.getName(l),
                    flipped: g,
                    voiceState: a,
                    displayNameMode: f,
                    displayUserMode: b,
                    size: m,
                    locked: W,
                    onContextMenu: _,
                    onClick: _,
                    context: I,
                    channel: p,
                    showStreamPreview: l.id === w,
                    onShowStreamPreview: D,
                    onWatchStream: A,
                    isSettingsPreview: h
                });
            }
        },
        l.id
    );
});
