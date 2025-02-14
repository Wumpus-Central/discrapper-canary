i.d(l, {
    Z: () => B,
    k: () => Q
}),
    i(47120);
var t = i(200651),
    n = i(192379),
    r = i(120356),
    d = i.n(r),
    a = i(442837),
    s = i(481060),
    o = i(239091),
    u = i(765250),
    c = i(13245),
    p = i(872810),
    h = i(586902),
    v = i(835473),
    g = i(415635),
    I = i(933557),
    m = i(979264),
    Z = i(701362),
    x = i(552282),
    E = i(565799),
    f = i(501655),
    S = i(184301),
    C = i(347475),
    V = i(470956),
    j = i(597998),
    N = i(199902),
    _ = i(314897),
    y = i(592125),
    P = i(355863),
    A = i(131951),
    w = i(944486),
    b = i(979651),
    O = i(938475),
    M = i(237997),
    k = i(823379),
    L = i(136015),
    R = i(51144),
    G = i(145597),
    T = i(444295),
    F = i(804570),
    W = i(388627),
    D = i(981631),
    U = i(65154),
    z = i(388032),
    Y = i(336029);
function q(e) {
    let { avatarSize: l, userId: i, channelId: n, guildId: r } = e,
        d = 2 * l,
        a = -(l / 2);
    return (0, t.jsx)('div', {
        className: Y.effect,
        style: {
            top: a,
            left: a,
            width: d,
            height: d
        },
        children: (0, t.jsx)(g.Z, {
            userId: i,
            channelId: n,
            guildId: r,
            containerDimensions: {
                width: d,
                height: d
            }
        })
    });
}
function K(e) {
    let { channel: l, flipped: i = !1, locked: r = !1, user: o, nick: u, displayNameMode: c, displayUserMode: v, size: g = D.ipw.LARGE, onClick: I, onContextMenu: x, context: E, guildId: f, isSettingsPreview: S = !1, voiceState: C, showStreamPreview: V, onShowStreamPreview: y, onWatchStream: P } = e,
        w = (0, a.e7)([_.default], () => _.default.getId() === o.id, [o.id]),
        O = null == C ? void 0 : C.sessionId,
        M = l.id,
        k = o.id,
        [R] = (0, a.e7)(
            [b.Z],
            () => {
                var e;
                return [null !== (e = b.Z.getVoiceStateForChannel(M, k)) && void 0 !== e ? e : b.Z.getVoiceStateForSession(k, O), b.Z.getVoiceStateVersion()];
            },
            [M, k, O],
            L.Q
        ),
        G = S ? C : null != R ? R : C,
        [F, W, U] = (0, a.Wu)([A.Z], () => (w ? [!A.Z.isSupported() || A.Z.isSelfMute() || A.Z.isSelfMutedTemporarily(), A.Z.isSelfDeaf(), !1] : [!A.Z.isSupported() || A.Z.isLocalMute(o.id), !1, A.Z.isLocalVideoDisabled(o.id)]), [w, o.id]),
        z = (0, a.e7)(
            [N.Z],
            () => {
                let e = N.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== o.id && N.Z.getViewerIds(e).filter((e) => e === o.id).length > 0;
            },
            [o.id]
        ),
        K = S && (null == C ? void 0 : C.discoverable),
        Q =
            (0, h.Z)({
                userId: o.id,
                context: E
            }) || K,
        B = (0, a.e7)([N.Z], () => N.Z.getStreamForUser(o.id, f)),
        H = null != B,
        $ = n.useCallback(() => {
            (V || null != H) && y(null);
        }, [y, V, H]),
        J = n.useCallback(
            () =>
                (0, t.jsx)(Z.Z, {
                    user: o,
                    channel: l,
                    onWatch: () => {
                        (0, p.rn)(B, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            $(),
                            P();
                    },
                    onAction: P,
                    previewIsOpen: V,
                    location: D.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [o, l, B, V, $, P]
        ),
        X = r || S;
    if ((v === D.OYC.ONLY_WHILE_SPEAKING && X && !Q) || null == G) return null;
    let ee = g === D.ipw.LARGE ? 32 : 24;
    return (0, t.jsxs)(s.P3F, {
        className: d()(Y.voiceUser, {
            [Y.speaking]: Q,
            [Y.interactive]: !r,
            [Y.flipped]: i
        }),
        onClick: r ? void 0 : (e) => (null == I ? void 0 : I(e, o)),
        onContextMenu: r ? void 0 : (e) => (null == x ? void 0 : x(e, o)),
        onMouseEnter: () => null != H && y(o.id),
        onMouseLeave: $,
        children: [
            (0, t.jsx)(s.qEK, {
                className: Y.avatar,
                size: g === D.ipw.LARGE ? s.EFr.SIZE_32 : s.EFr.SIZE_24,
                src: o.getAvatarURL(f, ee),
                'aria-hidden': !0
            }),
            (0, t.jsx)(q, {
                avatarSize: ee,
                userId: o.id,
                channelId: l.id,
                guildId: l.getGuildId()
            }),
            X && (c === D.wC$.NEVER || (!Q && c === D.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, t.jsx)(s.yRy, {
                      position: 'right',
                      renderPopout: J,
                      shouldShow: V,
                      onRequestClose: $,
                      spacing: 0,
                      children: () =>
                          (0, t.jsxs)(s.P3F, {
                              className: Y.username,
                              children: [
                                  (0, t.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: u
                                  }),
                                  !S &&
                                      (0, t.jsx)(m.ZP, {
                                          primaryGuild: o.primaryGuild,
                                          userId: o.id,
                                          contextGuildId: f,
                                          className: Y.clanTag,
                                          disableGuildProfile: !0,
                                          onShowProfile: () => {
                                              (0, T.Ws)(D.Odu.VOICE_V3, {
                                                  type: T.Qu.VOICE,
                                                  value: T.bk.PROFILE_OPENED,
                                                  userId: o.id
                                              });
                                          }
                                      }),
                                  (0, t.jsx)(j.nm, {
                                      guildId: f,
                                      user: o,
                                      video: G.selfVideo,
                                      isStreaming: H,
                                      className: Y.voiceIcons,
                                      iconClassName: Y.voiceIcon,
                                      isWatching: z,
                                      localMute: F && !w,
                                      localVideoDisabled: U,
                                      mute: G.isVoiceMuted(),
                                      deaf: G.isVoiceDeafened() || (W && !w),
                                      serverMute: G.mute || G.suppress,
                                      serverDeaf: G.deaf,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function Q(e) {
    let { id: l, context: r = U.Yn.DEFAULT, channel: d, sortedVoiceStates: a, displayNameMode: p, displayUserMode: h, locked: v, pinned: g, isPreviewingInGame: I, isSettingsPreview: m = !1, anchorLeft: Z, avatarSizeMode: x } = e,
        [E, f] = n.useState(null),
        [V, j] = n.useState(null),
        N = (e) => {
            f(e),
                null != e &&
                    (0, T.Ws)(D.Odu.VOICE_V3, {
                        type: T.Qu.GO_LIVE,
                        value: T.bk.STREAM_PREVIEWED,
                        userId: e
                    });
        },
        _ = (e, l) => {
            !m &&
                ((0, T.Ws)(D.Odu.VOICE_V3, {
                    type: T.Qu.VOICE,
                    value: T.bk.SETTINGS_OPENED,
                    userId: l.id
                }),
                (0, o.jW)(e, async () => {
                    let { default: e } = await Promise.all([i.e('79695'), i.e('6524')]).then(i.bind(i, 27900));
                    return (i) =>
                        (0, t.jsx)(e, {
                            ...i,
                            user: l,
                            channelId: null == d ? void 0 : d.id,
                            guildId: null == d ? void 0 : d.guild_id,
                            mediaEngineContext: r,
                            onShowProfile: () => j(l.id),
                            appContext: D.IlC.OVERLAY
                        });
                }));
        },
        y = a.length > 0 && null != r && null != d && (!v || g),
        A = n.useCallback(() => {
            var e, i;
            let t = null === (e = P.Z.getWidget(l)) || void 0 === e ? void 0 : e.layoutId,
                n = null != t ? (null === (i = P.Z.getWidgetsForLayout(t)) || void 0 === i ? void 0 : i.find((e) => e.type === D.Odu.GO_LIVE)) : null;
            null == n ||
                n.pinned ||
                ((0, u.xh)(n.id),
                c.Z.track(D.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == d ? void 0 : d.guild_id,
                    channel_id: null == d ? void 0 : d.id,
                    channel_type: null == d ? void 0 : d.type,
                    widget_type: D.Odu.GO_LIVE
                }));
        }, [d, l]);
    return (
        n.useEffect(() => {
            v && j(null);
        }, [v]),
        y
            ? (0, t.jsx)(t.Fragment, {
                  children: a.map((e) => {
                      let { user: l, voiceState: i, member: n } = e;
                      if (null == l) return null;
                      let a = v || I;
                      return (0, t.jsx)(
                          s.yRy,
                          {
                              preload: () =>
                                  (0, S.Z)(l, {
                                      guildId: d.guild_id,
                                      channelId: d.id
                                  }),
                              renderPopout: (e) =>
                                  (0, t.jsx)(C.Z, {
                                      ...e,
                                      userId: l.id,
                                      guildId: d.guild_id,
                                      channelId: d.id,
                                      appContext: D.IlC.OVERLAY
                                  }),
                              position: 'right',
                              shouldShow: V === l.id,
                              onRequestClose: () => j(null),
                              spacing: 24,
                              children: () => {
                                  var e;
                                  return (0, t.jsx)(K, {
                                      guildId: null == d ? void 0 : d.guild_id,
                                      user: l,
                                      nick: null !== (e = null == n ? void 0 : n.nick) && void 0 !== e ? e : R.ZP.getName(l),
                                      flipped: !Z,
                                      voiceState: i,
                                      displayNameMode: p,
                                      displayUserMode: h,
                                      size: x,
                                      locked: a,
                                      onContextMenu: _,
                                      onClick: _,
                                      context: r,
                                      channel: d,
                                      showStreamPreview: l.id === E,
                                      onShowStreamPreview: N,
                                      onWatchStream: A,
                                      isSettingsPreview: m
                                  });
                              }
                          },
                          l.id
                      );
                  })
              })
            : v
              ? null
              : (0, t.jsx)(F.E, {
                    emptyText: z.intl.string(z.t.hEh0l5),
                    icon: s.gj8
                })
    );
}
function B(e) {
    var l;
    let { locked: i, pinned: r, isSettingsPreview: d } = e,
        s = (0, a.e7)([w.Z, y.Z], () => y.Z.getChannel(w.Z.getVoiceChannelId())),
        o = (0, I.ZP)(s),
        u = (function () {
            let e = (0, a.e7)([w.Z, y.Z], () => y.Z.getChannel(w.Z.getVoiceChannelId())),
                [l] = (0, a.e7)(
                    [O.ZP, E.Z, w.Z, y.Z],
                    () => {
                        let e = y.Z.getChannel(w.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [E.Z.getMutableParticipants(e.id, f.pV.SPEAKER), E.Z.getParticipantsVersion(e.id)] : [O.ZP.getVoiceStatesForChannel(e), O.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    L.Q
                );
            return (0, V.Es)(null == e ? void 0 : e.id, l);
        })(),
        c = (0, a.e7)([N.Z], () => N.Z.getStreamerActiveStreamMetadata()),
        p = (0, W.II)(),
        [h, g] = n.useState(new Set()),
        m = null == s ? void 0 : s.guild_id;
    n.useEffect(() => {
        let e = u.map((e) => {
            let { user: l } = e;
            return null == l ? void 0 : l.id;
        });
        g((l) => {
            let i = new Set(e);
            return Array.from(l).filter((e) => !i.has(e)).length > 0 || Array.from(i).filter((e) => !l.has(e)).length > 0 ? i : l;
        });
    }, [u]);
    let Z = (0, a.Wu)(
            [N.Z],
            () =>
                Array.from(h)
                    .map((e) => N.Z.getStreamForUser(e, m))
                    .filter(k.lm)
                    .map((e) => e.ownerId),
            [h, m]
        ),
        S = r || !i;
    n.useEffect(() => {
        S &&
            (0, T.zi)(D.Odu.VOICE_V3, {
                locked: M.Z.isInstanceLocked(),
                shownUserIds: Array.from(h),
                liveUserIds: Z,
                contentInventoryIds: []
            });
    }, [h, Z, S]);
    let C = (0, v.q)(null == p ? void 0 : p.id),
        j = (0, a.cj)([N.Z, M.Z], () => {
            let e = N.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: M.Z.getDisplayUserMode(),
                displayNameMode: M.Z.getDisplayNameMode(),
                avatarSizeMode: M.Z.getAvatarSizeMode(),
                streamApplication: (null == c ? void 0 : c.pid) === (0, G.QF)() ? (0, x.Z)(p) : null,
                stream: e
            };
        });
    return (0, t.jsx)(Q, {
        ...j,
        application: C,
        ...e,
        sortedVoiceStates: u,
        channel: s,
        title: null != o ? o : '',
        streamMetadata: c,
        streamApplication:
            null !== (l = j.streamApplication) && void 0 !== l
                ? l
                : {
                      id: null,
                      name: null == c ? void 0 : c.sourceName
                  },
        isSettingsPreview: d
    });
}
