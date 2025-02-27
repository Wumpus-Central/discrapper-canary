r.d(t, {
    ZP: () => M,
    e5: () => D,
    px: () => V
}),
    r(47120);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    o = r.n(l),
    a = r(442837),
    c = r(481060),
    u = r(239091),
    s = r(765250),
    d = r(13245),
    p = r(872810),
    f = r(586902),
    b = r(415635),
    O = r(979264),
    g = r(701362),
    y = r(184301),
    v = r(347475),
    j = r(597998),
    h = r(199902),
    m = r(314897),
    P = r(355863),
    w = r(131951),
    S = r(979651),
    I = r(136015),
    E = r(51144),
    x = r(444295),
    Z = r(981631),
    C = r(136549);
function k(e) {
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
function N(e, t) {
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
function V(e) {
    switch (e) {
        case Z.ipw.LARGE:
            return c.EFr.SIZE_32;
        case Z.ipw.SMALL:
            return c.EFr.SIZE_24;
        default:
            return c.EFr.SIZE_32;
    }
}
function D(e) {
    return c.ny6[e].size;
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
function A(e) {
    let { channel: t, flipped: r = !1, locked: l = !1, user: u, nick: s, displayNameMode: d, displayUserMode: b, size: y = Z.ipw.LARGE, onClick: v, onContextMenu: P, context: E, guildId: k, isSettingsPreview: N = !1, voiceState: A, showStreamPreview: M, onShowStreamPreview: W, onWatchStream: L } = e,
        T = (0, a.e7)([m.default], () => m.default.getId() === u.id, [u.id]),
        R = null == A ? void 0 : A.sessionId,
        G = t.id,
        U = u.id,
        [F] = (0, a.e7)(
            [S.Z],
            () => {
                var e;
                return [null !== (e = S.Z.getVoiceStateForChannel(G, U)) && void 0 !== e ? e : S.Z.getVoiceStateForSession(U, R), S.Z.getVoiceStateVersion()];
            },
            [G, U, R],
            I.Q
        ),
        z = N ? A : null != F ? F : A,
        [Y, Q, B] = (0, a.Wu)([w.Z], () => (T ? [!w.Z.isSupported() || w.Z.isSelfMute() || w.Z.isSelfMutedTemporarily(), w.Z.isSelfDeaf(), !1] : [!w.Z.isSupported() || w.Z.isLocalMute(u.id), !1, w.Z.isLocalVideoDisabled(u.id)]), [T, u.id]),
        K = (0, a.e7)(
            [h.Z],
            () => {
                let e = h.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== u.id && h.Z.getViewerIds(e).filter((e) => e === u.id).length > 0;
            },
            [u.id]
        ),
        q = N && (null == A ? void 0 : A.discoverable),
        H =
            (0, f.Z)({
                userId: u.id,
                context: E
            }) || q,
        J = (0, a.e7)([h.Z], () => h.Z.getStreamForUser(u.id, k)),
        $ = null != J,
        X = i.useCallback(() => {
            (M || null != $) && W(null);
        }, [W, M, $]),
        ee = i.useCallback(
            () =>
                (0, n.jsx)(g.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        null != J &&
                            ((0, p.rn)(J, {
                                forceMultiple: !0,
                                noFocus: !0
                            }),
                            X(),
                            L(null != J ? J : null));
                    },
                    onAction: () => L,
                    previewIsOpen: M,
                    location: Z.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [u, t, J, M, X, L]
        ),
        et = i.useCallback(
            (e) => {
                l || null == P || P(e, u);
            },
            [l, P, u]
        ),
        er = i.useCallback(() => {
            !l && null != $ && W(u.id);
        }, [l, W, $, u]),
        en = l || N;
    if ((b === Z.OYC.ONLY_WHILE_SPEAKING && en && !H) || null == z) return null;
    let ei = V(y),
        el = D(ei);
    return (0, n.jsxs)(c.P3F, {
        className: o()(C.voiceUser, {
            [C.speaking]: H,
            [C.interactive]: !l,
            [C.flipped]: r
        }),
        onClick: l ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
        onContextMenu: et,
        onMouseEnter: er,
        onMouseLeave: X,
        children: [
            (0, n.jsx)(c.qEK, {
                className: C.avatar,
                size: ei,
                src: u.getAvatarURL(k, el),
                'aria-hidden': !0
            }),
            (0, n.jsx)(_, {
                avatarSize: el,
                userId: u.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            en && (d === Z.wC$.NEVER || (!H && d === Z.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, n.jsx)(c.yRy, {
                      position: 'right',
                      renderPopout: ee,
                      shouldShow: M,
                      onRequestClose: X,
                      spacing: 0,
                      children: () =>
                          (0, n.jsxs)(c.P3F, {
                              className: C.username,
                              children: [
                                  (0, n.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: s
                                  }),
                                  !N &&
                                      (0, n.jsx)(O.ZP, {
                                          primaryGuild: u.primaryGuild,
                                          userId: u.id,
                                          contextGuildId: k,
                                          className: C.clanTag,
                                          disableGuildProfile: !0,
                                          onShowProfile: () => {
                                              (0, x.Ws)(Z.Odu.VOICE_V3, {
                                                  type: x.Qu.VOICE,
                                                  value: x.bk.PROFILE_OPENED,
                                                  userId: u.id
                                              });
                                          }
                                      }),
                                  (0, n.jsx)(j.nm, {
                                      guildId: k,
                                      user: u,
                                      video: z.selfVideo,
                                      isStreaming: $,
                                      className: C.voiceIcons,
                                      iconClassName: C.voiceIcon,
                                      isWatching: K,
                                      localMute: Y && !T,
                                      localVideoDisabled: B,
                                      mute: z.isVoiceMuted(),
                                      deaf: z.isVoiceDeafened() || (Q && !T),
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
let M = i.memo(function (e) {
    let { widgetId: t, user: l, member: o, voiceState: a, channel: p, displayNameMode: f, displayUserMode: b, locked: O, flipped: g, size: j, isPreviewingInGame: h, isSettingsPreview: m, context: w } = e,
        [S, I] = i.useState(null),
        [C, V] = i.useState(null);
    i.useEffect(() => {
        O && V(null);
    }, [O]),
        i.useEffect(() => {
            null != S &&
                (0, x.Ws)(Z.Odu.VOICE_V3, {
                    type: x.Qu.GO_LIVE,
                    value: x.bk.STREAM_PREVIEWED
                });
        }, [S]);
    let D = (e) => {
            I(e);
        },
        _ = (e, t) => {
            !m &&
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([r.e('79695'), r.e('6524')]).then(r.bind(r, 27900));
                    return (
                        (0, x.Ws)(Z.Odu.VOICE_V3, {
                            type: x.Qu.VOICE,
                            value: x.bk.SETTINGS_OPENED,
                            userId: t.id
                        }),
                        (r) =>
                            (0, n.jsx)(
                                e,
                                N(k({}, r), {
                                    user: t,
                                    channelId: null == p ? void 0 : p.id,
                                    guildId: null == p ? void 0 : p.guild_id,
                                    mediaEngineContext: w,
                                    onShowProfile: () => V(t.id),
                                    appContext: Z.IlC.OVERLAY,
                                    onWatchStream: () => {
                                        (0, x.Ws)(Z.Odu.VOICE_V3, {
                                            type: x.Qu.GO_LIVE,
                                            value: x.bk.ENABLED,
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
                var r, n;
                let i = null === (r = P.Z.getWidget(t)) || void 0 === r ? void 0 : r.layoutId,
                    l = null != i ? (null === (n = P.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === Z.Odu.GO_LIVE)) : null;
                null == l ||
                    l.pinned ||
                    ((0, s.xh)(l.id),
                    d.Z.track(Z.rMx.OVERLAY_PIN_TOGGLED, {
                        pinned: !0,
                        guild_id: null == p ? void 0 : p.guild_id,
                        channel_id: null == p ? void 0 : p.id,
                        channel_type: null == p ? void 0 : p.type,
                        widget_type: Z.Odu.GO_LIVE
                    })),
                    null != e &&
                        null != l &&
                        (0, x.Ws)(Z.Odu.VOICE_V3, {
                            type: x.Qu.GO_LIVE,
                            value: x.bk.ENABLED,
                            userId: e.ownerId
                        });
            },
            [p, t]
        );
    if (null == l || null == p || null == a) return null;
    let W = O || h;
    return (0, n.jsx)(
        c.yRy,
        {
            preload: () =>
                (0, y.Z)(l, {
                    guildId: p.guild_id,
                    channelId: p.id
                }),
            renderPopout: (e) =>
                (0, n.jsx)(
                    v.Z,
                    N(k({}, e), {
                        userId: l.id,
                        guildId: p.guild_id,
                        channelId: p.id,
                        appContext: Z.IlC.OVERLAY
                    })
                ),
            position: 'right',
            shouldShow: C === l.id,
            onRequestClose: () => V(null),
            spacing: 24,
            children: () => {
                var e;
                return (0, n.jsx)(A, {
                    guildId: null == p ? void 0 : p.guild_id,
                    user: l,
                    nick: null !== (e = null == o ? void 0 : o.nick) && void 0 !== e ? e : E.ZP.getName(l),
                    flipped: g,
                    voiceState: a,
                    displayNameMode: f,
                    displayUserMode: b,
                    size: j,
                    locked: W,
                    onContextMenu: _,
                    onClick: _,
                    context: w,
                    channel: p,
                    showStreamPreview: l.id === S,
                    onShowStreamPreview: D,
                    onWatchStream: M,
                    isSettingsPreview: m
                });
            }
        },
        l.id
    );
});
