l.d(i, {
    Z: () => B,
    k: () => Q
}),
    l(47120);
var t = l(200651),
    n = l(192379),
    d = l(120356),
    r = l.n(d),
    a = l(442837),
    s = l(481060),
    o = l(239091),
    u = l(765250),
    c = l(13245),
    p = l(872810),
    h = l(586902),
    I = l(835473),
    g = l(415635),
    v = l(933557),
    m = l(979264),
    Z = l(701362),
    x = l(552282),
    E = l(565799),
    f = l(501655),
    S = l(184301),
    C = l(347475),
    V = l(470956),
    j = l(597998),
    _ = l(199902),
    y = l(314897),
    A = l(592125),
    N = l(355863),
    P = l(131951),
    w = l(944486),
    O = l(979651),
    M = l(938475),
    b = l(237997),
    k = l(823379),
    L = l(136015),
    G = l(51144),
    R = l(145597),
    T = l(444295),
    F = l(804570),
    W = l(388627),
    D = l(981631),
    U = l(65154),
    z = l(388032),
    Y = l(336029);
function q(e) {
    let { avatarSize: i, userId: l, channelId: n, guildId: d } = e,
        r = 2 * i,
        a = -(i / 2);
    return (0, t.jsx)('div', {
        className: Y.effect,
        style: {
            top: a,
            left: a,
            width: r,
            height: r
        },
        children: (0, t.jsx)(g.Z, {
            userId: l,
            channelId: n,
            guildId: d,
            containerDimensions: {
                width: r,
                height: r
            }
        })
    });
}
function K(e) {
    let { channel: i, flipped: l = !1, locked: d = !1, user: o, nick: u, displayNameMode: c, displayUserMode: I, size: g = D.ipw.LARGE, onClick: v, onContextMenu: x, context: E, guildId: f, isSettingsPreview: S = !1, voiceState: C, showStreamPreview: V, onShowStreamPreview: A, onWatchStream: N } = e,
        w = (0, a.e7)([y.default], () => y.default.getId() === o.id, [o.id]),
        M = null == C ? void 0 : C.sessionId,
        b = i.id,
        k = o.id,
        [G] = (0, a.e7)(
            [O.Z],
            () => {
                var e;
                return [null !== (e = O.Z.getVoiceStateForChannel(b, k)) && void 0 !== e ? e : O.Z.getVoiceStateForSession(k, M), O.Z.getVoiceStateVersion()];
            },
            [b, k, M],
            L.Q
        ),
        R = S ? C : null != G ? G : C,
        [F, W, U] = (0, a.Wu)([P.Z], () => (w ? [!P.Z.isSupported() || P.Z.isSelfMute() || P.Z.isSelfMutedTemporarily(), P.Z.isSelfDeaf(), !1] : [!P.Z.isSupported() || P.Z.isLocalMute(o.id), !1, P.Z.isLocalVideoDisabled(o.id)]), [w, o.id]),
        z = (0, a.e7)(
            [_.Z],
            () => {
                let e = _.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== o.id && _.Z.getViewerIds(e).filter((e) => e === o.id).length > 0;
            },
            [o.id]
        ),
        K = S && (null == C ? void 0 : C.discoverable),
        Q =
            (0, h.Z)({
                userId: o.id,
                context: E
            }) || K,
        B = (0, a.e7)([_.Z], () => _.Z.getStreamForUser(o.id, f)),
        H = null != B,
        $ = n.useCallback(() => {
            (V || null != H) && A(null);
        }, [A, V, H]),
        J = n.useCallback(
            () =>
                (0, t.jsx)(Z.Z, {
                    user: o,
                    channel: i,
                    onWatch: () => {
                        (0, p.rn)(B, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            $(),
                            N();
                    },
                    onAction: N,
                    previewIsOpen: V,
                    location: D.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [o, i, B, V, $, N]
        ),
        X = d || S;
    if ((I === D.OYC.ONLY_WHILE_SPEAKING && X && !Q) || null == R) return null;
    let ee = g === D.ipw.LARGE ? 32 : 24;
    return (0, t.jsxs)(s.P3F, {
        className: r()(Y.voiceUser, {
            [Y.speaking]: Q,
            [Y.interactive]: !d,
            [Y.flipped]: l
        }),
        onClick: d ? void 0 : (e) => (null == v ? void 0 : v(e, o)),
        onContextMenu: d ? void 0 : (e) => (null == x ? void 0 : x(e, o)),
        onMouseEnter: () => null != H && A(o.id),
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
                channelId: i.id,
                guildId: i.getGuildId()
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
                                      video: R.selfVideo,
                                      isStreaming: H,
                                      className: Y.voiceIcons,
                                      iconClassName: Y.voiceIcon,
                                      isWatching: z,
                                      localMute: F && !w,
                                      localVideoDisabled: U,
                                      mute: R.isVoiceMuted(),
                                      deaf: R.isVoiceDeafened() || (W && !w),
                                      serverMute: R.mute || R.suppress,
                                      serverDeaf: R.deaf,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function Q(e) {
    let { id: i, context: d = U.Yn.DEFAULT, channel: r, sortedVoiceStates: a, displayNameMode: p, displayUserMode: h, locked: I, pinned: g, isPreviewingInGame: v, isSettingsPreview: m = !1, anchorLeft: Z, avatarSizeMode: x } = e,
        [E, f] = n.useState(null),
        [V, j] = n.useState(null),
        _ = (e) => {
            f(e),
                null != e &&
                    (0, T.Ws)(D.Odu.VOICE_V3, {
                        type: T.Qu.GO_LIVE,
                        value: T.bk.STREAM_PREVIEWED,
                        userId: e
                    });
        },
        y = (e, i) => {
            !m &&
                ((0, T.Ws)(D.Odu.VOICE_V3, {
                    type: T.Qu.VOICE,
                    value: T.bk.SETTINGS_OPENED,
                    userId: i.id
                }),
                (0, o.jW)(e, async () => {
                    let { default: e } = await Promise.all([l.e('79695'), l.e('6524')]).then(l.bind(l, 27900));
                    return (l) =>
                        (0, t.jsx)(e, {
                            ...l,
                            user: i,
                            channelId: null == r ? void 0 : r.id,
                            guildId: null == r ? void 0 : r.guild_id,
                            mediaEngineContext: d,
                            onShowProfile: () => j(i.id),
                            appContext: D.IlC.OVERLAY
                        });
                }));
        },
        A = a.length > 0 && null != d && null != r && (!I || g),
        P = n.useCallback(() => {
            var e, l;
            let t = null === (e = N.Z.getWidget(i)) || void 0 === e ? void 0 : e.layoutId,
                n = null != t ? (null === (l = N.Z.getWidgetsForLayout(t)) || void 0 === l ? void 0 : l.find((e) => e.type === D.Odu.GO_LIVE)) : null;
            null == n ||
                n.pinned ||
                ((0, u.xh)(n.id),
                c.Z.track(D.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == r ? void 0 : r.guild_id,
                    channel_id: null == r ? void 0 : r.id,
                    channel_type: null == r ? void 0 : r.type,
                    widget_type: D.Odu.GO_LIVE
                }));
        }, [r, i]);
    return (
        n.useEffect(() => {
            I && j(null);
        }, [I]),
        A
            ? (0, t.jsx)(t.Fragment, {
                  children: a.map((e) => {
                      let { user: i, voiceState: l, member: n } = e;
                      if (null == i) return null;
                      let a = I || v;
                      return (0, t.jsx)(
                          s.yRy,
                          {
                              preload: () =>
                                  (0, S.Z)(i, {
                                      guildId: r.guild_id,
                                      channelId: r.id
                                  }),
                              renderPopout: (e) =>
                                  (0, t.jsx)(C.Z, {
                                      ...e,
                                      userId: i.id,
                                      guildId: r.guild_id,
                                      channelId: r.id,
                                      appContext: D.IlC.OVERLAY
                                  }),
                              position: 'right',
                              shouldShow: V === i.id,
                              onRequestClose: () => j(null),
                              spacing: 24,
                              children: () => {
                                  var e;
                                  return (0, t.jsx)(K, {
                                      guildId: null == r ? void 0 : r.guild_id,
                                      user: i,
                                      nick: null !== (e = null == n ? void 0 : n.nick) && void 0 !== e ? e : G.ZP.getName(i),
                                      flipped: !Z,
                                      voiceState: l,
                                      displayNameMode: p,
                                      displayUserMode: h,
                                      size: x,
                                      locked: a,
                                      onContextMenu: y,
                                      onClick: y,
                                      context: d,
                                      channel: r,
                                      showStreamPreview: i.id === E,
                                      onShowStreamPreview: _,
                                      onWatchStream: P,
                                      isSettingsPreview: m
                                  });
                              }
                          },
                          i.id
                      );
                  })
              })
            : I
              ? null
              : (0, t.jsx)(F.E, {
                    emptyText: z.intl.string(z.t.hEh0l5),
                    icon: s.gj8
                })
    );
}
function B(e) {
    var i;
    let { locked: l, pinned: d, isSettingsPreview: r } = e,
        s = (0, a.e7)([w.Z, A.Z], () => A.Z.getChannel(w.Z.getVoiceChannelId())),
        o = (0, v.ZP)(s),
        u = (function () {
            let e = (0, a.e7)([w.Z, A.Z], () => A.Z.getChannel(w.Z.getVoiceChannelId())),
                [i] = (0, a.e7)(
                    [M.ZP, E.Z, w.Z, A.Z],
                    () => {
                        let e = A.Z.getChannel(w.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [E.Z.getMutableParticipants(e.id, f.pV.SPEAKER), E.Z.getParticipantsVersion(e.id)] : [M.ZP.getVoiceStatesForChannel(e), M.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    L.Q
                );
            return (0, V.Es)(null == e ? void 0 : e.id, i);
        })(),
        c = (0, a.e7)([_.Z], () => _.Z.getStreamerActiveStreamMetadata()),
        p = (0, W.II)(),
        [h, g] = n.useState(new Set()),
        m = null == s ? void 0 : s.guild_id;
    n.useEffect(() => {
        let e = u.map((e) => {
            let { user: i } = e;
            return null == i ? void 0 : i.id;
        });
        g((i) => {
            let l = new Set(e);
            return Array.from(i).filter((e) => !l.has(e)).length > 0 || Array.from(l).filter((e) => !i.has(e)).length > 0 ? l : i;
        });
    }, [u]);
    let Z = (0, a.Wu)(
            [_.Z],
            () =>
                Array.from(h)
                    .map((e) => _.Z.getStreamForUser(e, m))
                    .filter(k.lm)
                    .map((e) => e.ownerId),
            [h, m]
        ),
        S = d || !l;
    n.useEffect(() => {
        S &&
            (0, T.zi)(D.Odu.VOICE_V3, {
                locked: b.Z.isInstanceLocked(),
                shownUserIds: Array.from(h),
                liveUserIds: Z,
                contentInventoryIds: []
            });
    }, [h, Z, S]);
    let C = (0, I.q)(null == p ? void 0 : p.id),
        j = (0, a.cj)([_.Z, b.Z], () => {
            let e = _.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: b.Z.getDisplayUserMode(),
                displayNameMode: b.Z.getDisplayNameMode(),
                avatarSizeMode: b.Z.getAvatarSizeMode(),
                streamApplication: (null == c ? void 0 : c.pid) === (0, R.QF)() ? (0, x.Z)(p) : null,
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
            null !== (i = j.streamApplication) && void 0 !== i
                ? i
                : {
                      id: null,
                      name: null == c ? void 0 : c.sourceName
                  },
        isSettingsPreview: r
    });
}
