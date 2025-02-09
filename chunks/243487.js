l.d(i, {
    Z: () => K,
    k: () => q
}),
    l(47120);
var t = l(200651),
    n = l(192379),
    d = l(120356),
    a = l.n(d),
    o = l(442837),
    s = l(481060),
    r = l(239091),
    u = l(765250),
    c = l(13245),
    p = l(872810),
    h = l(586902),
    g = l(835473),
    Z = l(415635),
    v = l(933557),
    x = l(979264),
    m = l(701362),
    I = l(552282),
    E = l(565799),
    C = l(501655),
    S = l(184301),
    f = l(347475),
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
    z = l(882110);
function U(e) {
    let { avatarSize: i, userId: l, channelId: n, guildId: d } = e,
        a = 2 * i,
        o = -(i / 2);
    return (0, t.jsx)('div', {
        className: z.effect,
        style: {
            top: o,
            left: o,
            width: a,
            height: a
        },
        children: (0, t.jsx)(Z.Z, {
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
    let { channel: i, flipped: l = !1, locked: d = !1, user: r, nick: u, displayNameMode: c, displayUserMode: g, size: Z = D.ipw.LARGE, onClick: v, onContextMenu: I, context: E, guildId: C, isSettingsPreview: S = !1, voiceState: f, showStreamPreview: j, onShowStreamPreview: _, onWatchStream: y } = e,
        P = (0, o.e7)([A.default], () => A.default.getId() === r.id, [r.id]),
        b = null == f ? void 0 : f.sessionId,
        G = i.id,
        R = r.id,
        [T] = (0, o.e7)(
            [w.Z],
            () => {
                var e;
                return [null !== (e = w.Z.getVoiceStateForChannel(G, R)) && void 0 !== e ? e : w.Z.getVoiceStateForSession(R, b), w.Z.getVoiceStateVersion()];
            },
            [G, R, b],
            L.Q
        ),
        k = S ? f : null != T ? T : f,
        [F, O, W] = (0, o.Wu)([M.Z], () => (P ? [!M.Z.isSupported() || M.Z.isSelfMute() || M.Z.isSelfMutedTemporarily(), M.Z.isSelfDeaf(), !1] : [!M.Z.isSupported() || M.Z.isLocalMute(r.id), !1, M.Z.isLocalVideoDisabled(r.id)]), [P, r.id]),
        Y = (0, o.e7)([N.Z], () => N.Z.getCurrentUserActiveStream()),
        q = (0, o.Wu)([N.Z], () => (null != Y ? N.Z.getViewerIds(Y) : [])),
        K = S && (null == f ? void 0 : f.discoverable),
        B =
            (0, h.Z)({
                userId: r.id,
                context: E
            }) || K,
        H = (0, o.e7)([N.Z], () => N.Z.getStreamForUser(r.id, C)),
        Q = null != H,
        $ = n.useMemo(() => null != Y && Y.ownerId !== r.id && q.includes(r.id), [Y, r.id, q]),
        J = n.useCallback(() => _(null), [_]),
        X = n.useCallback(
            () =>
                (0, t.jsx)(m.Z, {
                    user: r,
                    channel: i,
                    onWatch: () => {
                        (0, p.rn)(H, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            J(),
                            y();
                    },
                    onAction: y,
                    previewIsOpen: j,
                    location: D.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [r, i, H, j, J, y]
        ),
        ee = d || S;
    if ((g === D.OYC.ONLY_WHILE_SPEAKING && ee && !B) || null == k) return null;
    let ei = Z === D.ipw.LARGE ? 32 : 24;
    return (0, t.jsxs)(s.P3F, {
        className: a()(z.voiceUser, {
            [z.speaking]: B,
            [z.interactive]: !d,
            [z.flipped]: l
        }),
        onClick: d ? void 0 : (e) => (null == v ? void 0 : v(e, r)),
        onContextMenu: d ? void 0 : (e) => (null == I ? void 0 : I(e, r)),
        onMouseEnter: () => _(r.id),
        onMouseLeave: J,
        children: [
            (0, t.jsx)(s.qEK, {
                className: z.avatar,
                size: Z === D.ipw.LARGE ? s.EFr.SIZE_32 : s.EFr.SIZE_24,
                src: r.getAvatarURL(C, ei),
                'aria-hidden': !0
            }),
            (0, t.jsx)(U, {
                avatarSize: ei,
                userId: r.id,
                channelId: i.id,
                guildId: i.getGuildId()
            }),
            ee && (c === D.wC$.NEVER || (!B && c === D.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, t.jsx)(s.yRy, {
                      position: 'right',
                      renderPopout: X,
                      shouldShow: j,
                      onRequestClose: J,
                      spacing: 0,
                      children: () =>
                          (0, t.jsxs)(s.P3F, {
                              className: z.username,
                              children: [
                                  (0, t.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: u
                                  }),
                                  !S &&
                                      (0, t.jsx)(x.ZP, {
                                          primaryGuild: r.primaryGuild,
                                          userId: r.id,
                                          contextGuildId: C,
                                          className: z.clanTag,
                                          disableGuildProfile: !0
                                      }),
                                  (0, t.jsx)(V.nm, {
                                      guildId: C,
                                      user: r,
                                      video: k.selfVideo,
                                      isStreaming: Q,
                                      className: z.voiceIcons,
                                      iconClassName: z.voiceIcon,
                                      isWatching: $,
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
    let { id: i, context: d = O.Yn.DEFAULT, channel: a, sortedVoiceStates: o, displayNameMode: p, displayUserMode: h, locked: g, pinned: Z, isPreviewingInGame: v, isSettingsPreview: x = !1, anchorLeft: m, avatarSizeMode: I } = e,
        [E, C] = n.useState(null),
        [j, V] = n.useState(null),
        N = (e, i) => {
            !x &&
                (0, r.jW)(e, async () => {
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
        A = o.length > 0 && null != d && null != a && (!g || Z),
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
                  children: o.map((e) => {
                      let { user: i, voiceState: l, member: n } = e;
                      if (null == i) return null;
                      let o = g || v;
                      return (0, t.jsx)(
                          s.yRy,
                          {
                              preload: () =>
                                  (0, S.Z)(i, {
                                      guildId: a.guild_id,
                                      channelId: a.id
                                  }),
                              renderPopout: (e) =>
                                  (0, t.jsx)(f.Z, {
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
                                      locked: o,
                                      onContextMenu: N,
                                      onClick: N,
                                      context: d,
                                      channel: a,
                                      showStreamPreview: i.id === E,
                                      onShowStreamPreview: C,
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
                    icon: s.gj8
                })
    );
}
function K(e) {
    var i;
    let l = (0, o.e7)([P.Z, _.Z], () => _.Z.getChannel(P.Z.getVoiceChannelId())),
        n = (0, v.ZP)(l),
        d = (function () {
            let e = (0, o.e7)([P.Z, _.Z], () => _.Z.getChannel(P.Z.getVoiceChannelId())),
                [i] = (0, o.e7)(
                    [b.ZP, E.Z, P.Z, _.Z],
                    () => {
                        let e = _.Z.getChannel(P.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [E.Z.getMutableParticipants(e.id, C.pV.SPEAKER), E.Z.getParticipantsVersion(e.id)] : [b.ZP.getVoiceStatesForChannel(e), b.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    L.Q
                );
            return (0, j.Es)(null == e ? void 0 : e.id, i);
        })(),
        a = (0, o.e7)([N.Z], () => N.Z.getStreamerActiveStreamMetadata()),
        s = (0, F.II)(),
        r = (0, g.q)(null == s ? void 0 : s.id),
        u = (0, o.cj)([N.Z, G.Z], () => {
            let e = N.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: G.Z.getDisplayUserMode(),
                displayNameMode: G.Z.getDisplayNameMode(),
                avatarSizeMode: G.Z.getAvatarSizeMode(),
                streamApplication: (null == a ? void 0 : a.pid) === (0, T.QF)() ? (0, I.Z)(s) : null,
                stream: e
            };
        });
    return (0, t.jsx)(q, {
        ...u,
        application: r,
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
