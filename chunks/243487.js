t.d(i, {
    Z: () => Y,
    k: () => U
}),
    t(47120);
var l = t(200651),
    n = t(192379),
    a = t(120356),
    s = t.n(a),
    r = t(442837),
    d = t(481060),
    o = t(239091),
    u = t(765250),
    c = t(13245),
    v = t(872810),
    p = t(586902),
    h = t(835473),
    m = t(415635),
    Z = t(933557),
    g = t(979264),
    x = t(701362),
    I = t(552282),
    f = t(565799),
    j = t(501655),
    E = t(470956),
    S = t(597998),
    C = t(199902),
    N = t(314897),
    V = t(592125),
    A = t(355863),
    M = t(131951),
    P = t(944486),
    b = t(979651),
    y = t(938475),
    w = t(237997),
    _ = t(136015),
    G = t(51144),
    T = t(145597),
    k = t(804570),
    L = t(388627),
    R = t(981631),
    F = t(65154),
    D = t(388032),
    W = t(882110);
function O(e) {
    let { avatarSize: i, userId: t, channelId: n, guildId: a } = e,
        s = 2 * i,
        r = -(i / 2);
    return (0, l.jsx)('div', {
        className: W.effect,
        style: {
            top: r,
            left: r,
            width: s,
            height: s
        },
        children: (0, l.jsx)(m.Z, {
            userId: t,
            channelId: n,
            guildId: a,
            containerDimensions: {
                width: s,
                height: s
            }
        })
    });
}
function z(e) {
    let { channel: i, flipped: t = !1, locked: a = !1, user: o, nick: u, displayNameMode: c, displayUserMode: h, size: m = R.ipw.LARGE, onClick: Z, onContextMenu: I, context: f, guildId: j, isSettingsPreview: E = !1, voiceState: V, showStreamPreview: A, onShowStreamPreview: P, onWatchStream: y } = e,
        w = (0, r.e7)([N.default], () => N.default.getId() === o.id, [o.id]),
        G = null == V ? void 0 : V.sessionId,
        T = i.id,
        k = o.id,
        [L] = (0, r.e7)(
            [b.Z],
            () => {
                var e;
                return [null !== (e = b.Z.getVoiceStateForChannel(T, k)) && void 0 !== e ? e : b.Z.getVoiceStateForSession(k, G), b.Z.getVoiceStateVersion()];
            },
            [T, k, G],
            _.Q
        ),
        F = E ? V : null != L ? L : V,
        [D, z, U] = (0, r.Wu)([M.Z], () => (w ? [!M.Z.isSupported() || M.Z.isSelfMute() || M.Z.isSelfMutedTemporarily(), M.Z.isSelfDeaf(), !1] : [!M.Z.isSupported() || M.Z.isLocalMute(o.id), !1, M.Z.isLocalVideoDisabled(o.id)]), [w, o.id]),
        Y = (0, r.e7)([C.Z], () => C.Z.getCurrentUserActiveStream()),
        K = (0, r.Wu)([C.Z], () => (null != Y ? C.Z.getViewerIds(Y) : [])),
        q = E && (null == V ? void 0 : V.discoverable),
        B =
            (0, p.Z)({
                userId: o.id,
                context: f
            }) || q,
        H = (0, r.e7)([C.Z], () => C.Z.getStreamForUser(o.id, j)),
        Q = null != H,
        $ = n.useMemo(() => null != Y && Y.ownerId !== o.id && K.includes(o.id), [Y, o.id, K]),
        J = n.useCallback(() => P(null), [P]),
        X = n.useCallback(
            () =>
                (0, l.jsx)(x.Z, {
                    user: o,
                    channel: i,
                    onWatch: () => {
                        (0, v.rn)(H, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            J(),
                            y();
                    },
                    onAction: y,
                    previewIsOpen: A,
                    location: R.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [o, i, H, A, J, y]
        ),
        ee = a || E;
    if ((h === R.OYC.ONLY_WHILE_SPEAKING && ee && !B) || null == F) return null;
    let ei = m === R.ipw.LARGE ? 32 : 24;
    return (0, l.jsxs)(d.P3F, {
        className: s()(W.voiceUser, {
            [W.speaking]: B,
            [W.interactive]: !a,
            [W.flipped]: t
        }),
        onClick: a ? void 0 : (e) => (null == Z ? void 0 : Z(e, o)),
        onContextMenu: a ? void 0 : (e) => (null == I ? void 0 : I(e, o)),
        onMouseEnter: () => P(o.id),
        onMouseLeave: J,
        children: [
            (0, l.jsx)(d.qEK, {
                className: W.avatar,
                size: m === R.ipw.LARGE ? d.EFr.SIZE_32 : d.EFr.SIZE_24,
                src: o.getAvatarURL(j, ei),
                'aria-hidden': !0
            }),
            (0, l.jsx)(O, {
                avatarSize: ei,
                userId: o.id,
                channelId: i.id,
                guildId: i.getGuildId()
            }),
            ee && (c === R.wC$.NEVER || (!B && c === R.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, l.jsx)(d.yRy, {
                      position: 'right',
                      renderPopout: X,
                      shouldShow: A,
                      onRequestClose: J,
                      spacing: 0,
                      children: () =>
                          (0, l.jsxs)(d.P3F, {
                              className: W.username,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: u
                                  }),
                                  !E &&
                                      (0, l.jsx)(g.ZP, {
                                          primaryGuild: o.primaryGuild,
                                          userId: o.id,
                                          contextGuildId: j,
                                          className: W.clanTag
                                      }),
                                  (0, l.jsx)(S.nm, {
                                      guildId: j,
                                      user: o,
                                      video: F.selfVideo,
                                      isStreaming: Q,
                                      className: W.voiceIcons,
                                      iconClassName: W.voiceIcon,
                                      isWatching: $,
                                      localMute: D && !w,
                                      localVideoDisabled: U,
                                      mute: F.isVoiceMuted(),
                                      deaf: F.isVoiceDeafened() || (z && !w),
                                      serverMute: F.mute || F.suppress,
                                      serverDeaf: F.deaf,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function U(e) {
    let { id: i, context: a = F.Yn.DEFAULT, channel: s, sortedVoiceStates: r, displayNameMode: v, displayUserMode: p, locked: h, pinned: m, isPreviewingInGame: Z, isSettingsPreview: g = !1, anchorLeft: x, avatarSizeMode: I } = e,
        [f, j] = n.useState(null),
        E = (e, i) => {
            !g &&
                (0, o.jW)(e, async () => {
                    let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('351')]).then(t.bind(t, 881351));
                    return (t) =>
                        (0, l.jsx)(e, {
                            ...t,
                            user: i,
                            showMediaItems: !0,
                            mediaEngineContext: a
                        });
                });
        },
        S = r.length > 0 && null != a && null != s && (!h || m),
        C = n.useCallback(() => {
            var e, t;
            let l = null === (e = A.Z.getWidget(i)) || void 0 === e ? void 0 : e.layoutId,
                n = null != l ? (null === (t = A.Z.getWidgetsForLayout(l)) || void 0 === t ? void 0 : t.find((e) => e.type === R.Odu.GO_LIVE)) : null;
            null == n ||
                n.pinned ||
                ((0, u.xh)(n.id),
                c.Z.track(R.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == s ? void 0 : s.guild_id,
                    channel_id: null == s ? void 0 : s.id,
                    channel_type: null == s ? void 0 : s.type,
                    widget_type: R.Odu.GO_LIVE
                }));
        }, [s, i]);
    return S
        ? (0, l.jsx)(l.Fragment, {
              children: r.map((e) => {
                  var i;
                  let { user: t, voiceState: n, member: r } = e;
                  return null == t
                      ? null
                      : (0, l.jsx)(
                            z,
                            {
                                guildId: null == s ? void 0 : s.guild_id,
                                user: t,
                                nick: null !== (i = null == r ? void 0 : r.nick) && void 0 !== i ? i : G.ZP.getName(t),
                                flipped: !x,
                                voiceState: n,
                                displayNameMode: v,
                                displayUserMode: p,
                                size: I,
                                locked: h || Z,
                                onContextMenu: E,
                                onClick: E,
                                context: a,
                                channel: s,
                                isSettingsPreview: g,
                                showStreamPreview: t.id === f,
                                onShowStreamPreview: j,
                                onWatchStream: C
                            },
                            t.id
                        );
              })
          })
        : h
          ? null
          : (0, l.jsx)(k.E, {
                emptyText: D.intl.string(D.t.hEh0l5),
                icon: d.gj8
            });
}
function Y(e) {
    var i;
    let t = (0, r.e7)([P.Z, V.Z], () => V.Z.getChannel(P.Z.getVoiceChannelId())),
        n = (0, Z.ZP)(t),
        a = (function () {
            let e = (0, r.e7)([P.Z, V.Z], () => V.Z.getChannel(P.Z.getVoiceChannelId())),
                [i] = (0, r.e7)(
                    [y.ZP, f.Z, P.Z, V.Z],
                    () => {
                        let e = V.Z.getChannel(P.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [f.Z.getMutableParticipants(e.id, j.pV.SPEAKER), f.Z.getParticipantsVersion(e.id)] : [y.ZP.getVoiceStatesForChannel(e), y.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    _.Q
                );
            return (0, E.Es)(null == e ? void 0 : e.id, i);
        })(),
        s = (0, r.e7)([C.Z], () => C.Z.getStreamerActiveStreamMetadata()),
        d = (0, L.II)(),
        o = (0, h.q)(null == d ? void 0 : d.id),
        u = (0, r.cj)([C.Z, w.Z], () => {
            let e = C.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: w.Z.getDisplayUserMode(),
                displayNameMode: w.Z.getDisplayNameMode(),
                avatarSizeMode: w.Z.getAvatarSizeMode(),
                streamApplication: (null == s ? void 0 : s.pid) === (0, T.QF)() ? (0, I.Z)(d) : null,
                stream: e
            };
        });
    return (0, l.jsx)(U, {
        ...u,
        application: o,
        ...e,
        sortedVoiceStates: a,
        channel: t,
        title: null != n ? n : '',
        streamMetadata: s,
        streamApplication:
            null !== (i = u.streamApplication) && void 0 !== i
                ? i
                : {
                      id: null,
                      name: null == s ? void 0 : s.sourceName
                  }
    });
}
