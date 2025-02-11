l.d(i, {
    Z: () => K,
    k: () => q
}),
    l(47120);
var t = l(200651),
    n = l(192379),
    d = l(120356),
    a = l.n(d),
    r = l(442837),
    o = l(481060),
    s = l(239091),
    u = l(765250),
    c = l(13245),
    p = l(872810),
    h = l(586902),
    g = l(835473),
    v = l(415635),
    Z = l(933557),
    x = l(979264),
    m = l(701362),
    I = l(552282),
    E = l(565799),
    f = l(501655),
    C = l(184301),
    S = l(347475),
    j = l(470956),
    V = l(597998),
    N = l(199902),
    A = l(314897),
    _ = l(592125),
    y = l(355863),
    M = l(131951),
    P = l(944486),
    w = l(979651),
    b = l(938475),
    G = l(237997),
    L = l(136015),
    R = l(51144),
    T = l(145597),
    k = l(804570),
    F = l(388627),
    D = l(981631),
    O = l(65154),
    W = l(388032),
    z = l(860786);
function U(e) {
    let { avatarSize: i, userId: l, channelId: n, guildId: d } = e,
        a = 2 * i,
        r = -(i / 2);
    return (0, t.jsx)('div', {
        className: z.effect,
        style: {
            top: r,
            left: r,
            width: a,
            height: a
        },
        children: (0, t.jsx)(v.Z, {
            userId: l,
            channelId: n,
            guildId: d,
            containerDimensions: {
                width: a,
                height: a
            }
        })
    });
}
function Y(e) {
    let { channel: i, flipped: l = !1, locked: d = !1, user: s, nick: u, displayNameMode: c, displayUserMode: g, size: v = D.ipw.LARGE, onClick: Z, onContextMenu: I, context: E, guildId: f, isSettingsPreview: C = !1, voiceState: S, showStreamPreview: j, onShowStreamPreview: _, onWatchStream: y } = e,
        P = (0, r.e7)([A.default], () => A.default.getId() === s.id, [s.id]),
        b = null == S ? void 0 : S.sessionId,
        G = i.id,
        R = s.id,
        [T] = (0, r.e7)(
            [w.Z],
            () => {
                var e;
                return [null !== (e = w.Z.getVoiceStateForChannel(G, R)) && void 0 !== e ? e : w.Z.getVoiceStateForSession(R, b), w.Z.getVoiceStateVersion()];
            },
            [G, R, b],
            L.Q
        ),
        k = C ? S : null != T ? T : S,
        [F, O, W] = (0, r.Wu)([M.Z], () => (P ? [!M.Z.isSupported() || M.Z.isSelfMute() || M.Z.isSelfMutedTemporarily(), M.Z.isSelfDeaf(), !1] : [!M.Z.isSupported() || M.Z.isLocalMute(s.id), !1, M.Z.isLocalVideoDisabled(s.id)]), [P, s.id]),
        Y = (0, r.e7)(
            [N.Z],
            () => {
                let e = N.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== s.id && N.Z.getViewerIds(e).filter((e) => e === s.id).length > 0;
            },
            [s.id]
        ),
        q = C && (null == S ? void 0 : S.discoverable),
        K =
            (0, h.Z)({
                userId: s.id,
                context: E
            }) || q,
        B = (0, r.e7)([N.Z], () => N.Z.getStreamForUser(s.id, f)),
        H = null != B,
        Q = n.useCallback(() => _(null), [_]),
        $ = n.useCallback(
            () =>
                (0, t.jsx)(m.Z, {
                    user: s,
                    channel: i,
                    onWatch: () => {
                        (0, p.rn)(B, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            Q(),
                            y();
                    },
                    onAction: y,
                    previewIsOpen: j,
                    location: D.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [s, i, B, j, Q, y]
        ),
        J = d || C;
    if ((g === D.OYC.ONLY_WHILE_SPEAKING && J && !K) || null == k) return null;
    let X = v === D.ipw.LARGE ? 32 : 24;
    return (0, t.jsxs)(o.P3F, {
        className: a()(z.voiceUser, {
            [z.speaking]: K,
            [z.interactive]: !d,
            [z.flipped]: l
        }),
        onClick: d ? void 0 : (e) => (null == Z ? void 0 : Z(e, s)),
        onContextMenu: d ? void 0 : (e) => (null == I ? void 0 : I(e, s)),
        onMouseEnter: () => _(s.id),
        onMouseLeave: Q,
        children: [
            (0, t.jsx)(o.qEK, {
                className: z.avatar,
                size: v === D.ipw.LARGE ? o.EFr.SIZE_32 : o.EFr.SIZE_24,
                src: s.getAvatarURL(f, X),
                'aria-hidden': !0
            }),
            (0, t.jsx)(U, {
                avatarSize: X,
                userId: s.id,
                channelId: i.id,
                guildId: i.getGuildId()
            }),
            J && (c === D.wC$.NEVER || (!K && c === D.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, t.jsx)(o.yRy, {
                      position: 'right',
                      renderPopout: $,
                      shouldShow: j,
                      onRequestClose: Q,
                      spacing: 0,
                      children: () =>
                          (0, t.jsxs)(o.P3F, {
                              className: z.username,
                              children: [
                                  (0, t.jsx)(o.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: u
                                  }),
                                  !C &&
                                      (0, t.jsx)(x.ZP, {
                                          primaryGuild: s.primaryGuild,
                                          userId: s.id,
                                          contextGuildId: f,
                                          className: z.clanTag,
                                          disableGuildProfile: !0
                                      }),
                                  (0, t.jsx)(V.nm, {
                                      guildId: f,
                                      user: s,
                                      video: k.selfVideo,
                                      isStreaming: H,
                                      className: z.voiceIcons,
                                      iconClassName: z.voiceIcon,
                                      isWatching: Y,
                                      localMute: F && !P,
                                      localVideoDisabled: W,
                                      mute: k.isVoiceMuted(),
                                      deaf: k.isVoiceDeafened() || (O && !P),
                                      serverMute: k.mute || k.suppress,
                                      serverDeaf: k.deaf,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function q(e) {
    let { id: i, context: d = O.Yn.DEFAULT, channel: a, sortedVoiceStates: r, displayNameMode: p, displayUserMode: h, locked: g, pinned: v, isPreviewingInGame: Z, isSettingsPreview: x = !1, anchorLeft: m, avatarSizeMode: I } = e,
        [E, f] = n.useState(null),
        [j, V] = n.useState(null),
        N = (e, i) => {
            !x &&
                (0, s.jW)(e, async () => {
                    let { default: e } = await Promise.all([l.e('79695'), l.e('6524')]).then(l.bind(l, 27900));
                    return (l) =>
                        (0, t.jsx)(e, {
                            ...l,
                            user: i,
                            channelId: null == a ? void 0 : a.id,
                            guildId: null == a ? void 0 : a.guild_id,
                            mediaEngineContext: d,
                            onShowProfile: () => V(i.id),
                            appContext: D.IlC.OVERLAY
                        });
                });
        },
        A = r.length > 0 && null != d && null != a && (!g || v),
        _ = n.useCallback(() => {
            var e, l;
            let t = null === (e = y.Z.getWidget(i)) || void 0 === e ? void 0 : e.layoutId,
                n = null != t ? (null === (l = y.Z.getWidgetsForLayout(t)) || void 0 === l ? void 0 : l.find((e) => e.type === D.Odu.GO_LIVE)) : null;
            null == n ||
                n.pinned ||
                ((0, u.xh)(n.id),
                c.Z.track(D.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == a ? void 0 : a.guild_id,
                    channel_id: null == a ? void 0 : a.id,
                    channel_type: null == a ? void 0 : a.type,
                    widget_type: D.Odu.GO_LIVE
                }));
        }, [a, i]);
    return (
        n.useEffect(() => {
            g && V(null);
        }, [g]),
        A
            ? (0, t.jsx)(t.Fragment, {
                  children: r.map((e) => {
                      let { user: i, voiceState: l, member: n } = e;
                      if (null == i) return null;
                      let r = g || Z;
                      return (0, t.jsx)(
                          o.yRy,
                          {
                              preload: () =>
                                  (0, C.Z)(i, {
                                      guildId: a.guild_id,
                                      channelId: a.id
                                  }),
                              renderPopout: (e) =>
                                  (0, t.jsx)(S.Z, {
                                      ...e,
                                      userId: i.id,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      appContext: D.IlC.OVERLAY
                                  }),
                              position: 'right',
                              shouldShow: j === i.id,
                              onRequestClose: () => V(null),
                              spacing: 24,
                              children: () => {
                                  var e;
                                  return (0, t.jsx)(Y, {
                                      guildId: null == a ? void 0 : a.guild_id,
                                      user: i,
                                      nick: null !== (e = null == n ? void 0 : n.nick) && void 0 !== e ? e : R.ZP.getName(i),
                                      flipped: !m,
                                      voiceState: l,
                                      displayNameMode: p,
                                      displayUserMode: h,
                                      size: I,
                                      locked: r,
                                      onContextMenu: N,
                                      onClick: N,
                                      context: d,
                                      channel: a,
                                      showStreamPreview: i.id === E,
                                      onShowStreamPreview: f,
                                      onWatchStream: _
                                  });
                              }
                          },
                          i.id
                      );
                  })
              })
            : g
              ? null
              : (0, t.jsx)(k.E, {
                    emptyText: W.intl.string(W.t.hEh0l5),
                    icon: o.gj8
                })
    );
}
function K(e) {
    var i;
    let l = (0, r.e7)([P.Z, _.Z], () => _.Z.getChannel(P.Z.getVoiceChannelId())),
        n = (0, Z.ZP)(l),
        d = (function () {
            let e = (0, r.e7)([P.Z, _.Z], () => _.Z.getChannel(P.Z.getVoiceChannelId())),
                [i] = (0, r.e7)(
                    [b.ZP, E.Z, P.Z, _.Z],
                    () => {
                        let e = _.Z.getChannel(P.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [E.Z.getMutableParticipants(e.id, f.pV.SPEAKER), E.Z.getParticipantsVersion(e.id)] : [b.ZP.getVoiceStatesForChannel(e), b.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    L.Q
                );
            return (0, j.Es)(null == e ? void 0 : e.id, i);
        })(),
        a = (0, r.e7)([N.Z], () => N.Z.getStreamerActiveStreamMetadata()),
        o = (0, F.II)(),
        s = (0, g.q)(null == o ? void 0 : o.id),
        u = (0, r.cj)([N.Z, G.Z], () => {
            let e = N.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: G.Z.getDisplayUserMode(),
                displayNameMode: G.Z.getDisplayNameMode(),
                avatarSizeMode: G.Z.getAvatarSizeMode(),
                streamApplication: (null == a ? void 0 : a.pid) === (0, T.QF)() ? (0, I.Z)(o) : null,
                stream: e
            };
        });
    return (0, t.jsx)(q, {
        ...u,
        application: s,
        ...e,
        sortedVoiceStates: d,
        channel: l,
        title: null != n ? n : '',
        streamMetadata: a,
        streamApplication:
            null !== (i = u.streamApplication) && void 0 !== i
                ? i
                : {
                      id: null,
                      name: null == a ? void 0 : a.sourceName
                  }
    });
}
