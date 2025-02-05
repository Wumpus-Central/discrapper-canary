t.d(i, {
    Z: () => U,
    k: () => z
}),
    t(47120);
var l = t(200651),
    n = t(192379),
    a = t(120356),
    r = t.n(a),
    s = t(442837),
    d = t(481060),
    o = t(239091),
    u = t(765250),
    c = t(13245),
    p = t(872810),
    v = t(586902),
    h = t(835473),
    m = t(415635),
    g = t(933557),
    x = t(979264),
    Z = t(701362),
    I = t(552282),
    f = t(565799),
    j = t(501655),
    S = t(597998),
    E = t(199902),
    C = t(314897),
    N = t(592125),
    V = t(355863),
    A = t(131951),
    M = t(944486),
    P = t(979651),
    b = t(938475),
    y = t(237997),
    w = t(136015),
    _ = t(51144),
    G = t(145597),
    T = t(804570),
    k = t(388627),
    L = t(981631),
    R = t(65154),
    F = t(388032),
    D = t(882110);
function W(e) {
    let { avatarSize: i, userId: t, channelId: n, guildId: a } = e,
        r = 2 * i,
        s = -(i / 2);
    return (0, l.jsx)('div', {
        className: D.effect,
        style: {
            top: s,
            left: s,
            width: r,
            height: r
        },
        children: (0, l.jsx)(m.Z, {
            userId: t,
            channelId: n,
            guildId: a,
            containerDimensions: {
                width: r,
                height: r
            }
        })
    });
}
function O(e) {
    let { channel: i, flipped: t = !1, locked: a = !1, user: o, nick: u, displayNameMode: c, displayUserMode: h, size: m = L.ipw.LARGE, onClick: g, onContextMenu: I, context: f, guildId: j, isSettingsPreview: N = !1, voiceState: V, showStreamPreview: M, onShowStreamPreview: b, onWatchStream: y } = e,
        _ = (0, s.e7)([C.default], () => C.default.getId() === o.id, [o.id]),
        G = null == V ? void 0 : V.sessionId,
        T = i.id,
        k = o.id,
        [R] = (0, s.e7)(
            [P.Z],
            () => {
                var e;
                return [null !== (e = P.Z.getVoiceStateForChannel(T, k)) && void 0 !== e ? e : P.Z.getVoiceStateForSession(k, G), P.Z.getVoiceStateVersion()];
            },
            [T, k, G],
            w.Q
        ),
        F = N ? V : R,
        [O, z, U] = (0, s.Wu)([A.Z], () => (_ ? [!A.Z.isSupported() || A.Z.isSelfMute() || A.Z.isSelfMutedTemporarily(), A.Z.isSelfDeaf(), !1] : [!A.Z.isSupported() || A.Z.isLocalMute(o.id), !1, A.Z.isLocalVideoDisabled(o.id)]), [_, o.id]),
        Y = (0, s.e7)([E.Z], () => E.Z.getCurrentUserActiveStream()),
        K = (0, s.Wu)([E.Z], () => (null != Y ? E.Z.getViewerIds(Y) : [])),
        q = N && (null == V ? void 0 : V.discoverable),
        B =
            (0, v.Z)({
                userId: o.id,
                context: f
            }) || q,
        H = (0, s.e7)([E.Z], () => E.Z.getStreamForUser(o.id, j)),
        Q = null != H,
        $ = n.useMemo(() => null != Y && Y.ownerId !== o.id && K.includes(o.id), [Y, o.id, K]),
        J = n.useCallback(() => b(null), [b]),
        X = n.useCallback(
            () =>
                (0, l.jsx)(Z.Z, {
                    user: o,
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
                    previewIsOpen: M,
                    location: L.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [o, i, H, M, J, y]
        ),
        ee = a || N;
    if ((h === L.OYC.ONLY_WHILE_SPEAKING && ee && !B) || null == F) return null;
    let ei = m === L.ipw.LARGE ? 32 : 24;
    return (0, l.jsxs)(d.P3F, {
        className: r()(D.voiceUser, {
            [D.speaking]: B,
            [D.interactive]: !a,
            [D.flipped]: t
        }),
        onClick: a ? void 0 : (e) => (null == g ? void 0 : g(e, o)),
        onContextMenu: a ? void 0 : (e) => (null == I ? void 0 : I(e, o)),
        onMouseEnter: () => b(o.id),
        onMouseLeave: J,
        children: [
            (0, l.jsx)(d.qEK, {
                className: D.avatar,
                size: m === L.ipw.LARGE ? d.EFr.SIZE_32 : d.EFr.SIZE_24,
                src: o.getAvatarURL(j, ei),
                'aria-hidden': !0
            }),
            (0, l.jsx)(W, {
                avatarSize: ei,
                userId: o.id,
                channelId: i.id,
                guildId: i.getGuildId()
            }),
            ee && (c === L.wC$.NEVER || (!B && c === L.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, l.jsx)(d.yRy, {
                      position: 'right',
                      renderPopout: X,
                      shouldShow: M,
                      onRequestClose: J,
                      spacing: 0,
                      children: () =>
                          (0, l.jsxs)(d.P3F, {
                              className: D.username,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: u
                                  }),
                                  !N &&
                                      (0, l.jsx)(x.ZP, {
                                          primaryGuild: o.primaryGuild,
                                          userId: o.id,
                                          contextGuildId: j,
                                          className: D.clanTag
                                      }),
                                  (0, l.jsx)(S.nm, {
                                      guildId: j,
                                      user: o,
                                      video: F.selfVideo,
                                      isStreaming: Q,
                                      className: D.voiceIcons,
                                      iconClassName: D.voiceIcon,
                                      isWatching: $,
                                      localMute: O && !_,
                                      localVideoDisabled: U,
                                      mute: F.isVoiceMuted(),
                                      deaf: F.isVoiceDeafened() || (z && !_),
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
function z(e) {
    let { id: i, context: a = R.Yn.DEFAULT, channel: r, sortedVoiceStates: s, displayNameMode: p, displayUserMode: v, locked: h, pinned: m, isPreviewingInGame: g, isSettingsPreview: x = !1, anchorLeft: Z, avatarSizeMode: I } = e,
        [f, j] = n.useState(null),
        S = (e, i) => {
            !x &&
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
        E = s.length > 0 && null != a && null != r && (!h || m),
        C = n.useCallback(() => {
            var e, t;
            let l = null === (e = V.Z.getWidget(i)) || void 0 === e ? void 0 : e.layoutId,
                n = null != l ? (null === (t = V.Z.getWidgetsForLayout(l)) || void 0 === t ? void 0 : t.find((e) => e.type === L.Odu.GO_LIVE)) : null;
            null == n ||
                n.pinned ||
                ((0, u.xh)(n.id),
                c.Z.track(L.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == r ? void 0 : r.guild_id,
                    channel_id: null == r ? void 0 : r.id,
                    channel_type: null == r ? void 0 : r.type,
                    widget_type: L.Odu.GO_LIVE
                }));
        }, [r, i]);
    return E
        ? (0, l.jsx)(l.Fragment, {
              children: s.map((e) => {
                  var i;
                  let { user: t, voiceState: n, member: s } = e;
                  return null == t
                      ? null
                      : (0, l.jsx)(
                            O,
                            {
                                guildId: null == r ? void 0 : r.guild_id,
                                user: t,
                                nick: null !== (i = null == s ? void 0 : s.nick) && void 0 !== i ? i : _.ZP.getName(t),
                                flipped: !Z,
                                voiceState: n,
                                displayNameMode: p,
                                displayUserMode: v,
                                size: I,
                                locked: h || g,
                                onContextMenu: S,
                                onClick: S,
                                context: a,
                                channel: r,
                                isSettingsPreview: x,
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
          : (0, l.jsx)(T.E, {
                emptyText: F.intl.string(F.t.hEh0l5),
                icon: d.gj8
            });
}
function U(e) {
    var i;
    let t = (0, s.e7)([M.Z, N.Z], () => N.Z.getChannel(M.Z.getVoiceChannelId())),
        n = (0, g.ZP)(t),
        a = (function () {
            let [e] = (0, s.e7)(
                [b.ZP, f.Z, M.Z, N.Z],
                () => {
                    let e = N.Z.getChannel(M.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [f.Z.getMutableParticipants(e.id, j.pV.SPEAKER), f.Z.getParticipantsVersion(e.id)] : [b.ZP.getVoiceStatesForChannel(e), b.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                w.Q
            );
            return e;
        })(),
        r = (0, s.e7)([E.Z], () => E.Z.getStreamerActiveStreamMetadata()),
        d = (0, k.II)(),
        o = (0, h.q)(null == d ? void 0 : d.id),
        u = (0, s.cj)([E.Z, y.Z], () => {
            let e = E.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: y.Z.getDisplayUserMode(),
                displayNameMode: y.Z.getDisplayNameMode(),
                avatarSizeMode: y.Z.getAvatarSizeMode(),
                streamApplication: (null == r ? void 0 : r.pid) === (0, G.QF)() ? (0, I.Z)(d) : null,
                stream: e
            };
        });
    return (0, l.jsx)(z, {
        ...u,
        application: o,
        ...e,
        sortedVoiceStates: a,
        channel: t,
        title: null != n ? n : '',
        streamMetadata: r,
        streamApplication:
            null !== (i = u.streamApplication) && void 0 !== i
                ? i
                : {
                      id: null,
                      name: null == r ? void 0 : r.sourceName
                  }
    });
}
