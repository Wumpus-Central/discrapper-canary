n.d(t, { Z: () => G }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(239091),
    c = n(765250),
    u = n(13245),
    h = n(872810),
    _ = n(586902),
    p = n(835473),
    g = n(415635),
    f = n(933557),
    m = n(979264),
    v = n(701362),
    x = n(552282),
    E = n(565799),
    Z = n(501655),
    C = n(597998),
    I = n(199902),
    S = n(314897),
    b = n(592125),
    y = n(355863),
    N = n(131951),
    w = n(944486),
    T = n(979651),
    O = n(938475),
    j = n(237997),
    k = n(136015),
    R = n(51144),
    A = n(145597),
    L = n(804570),
    M = n(388627),
    P = n(981631),
    D = n(65154),
    z = n(388032),
    V = n(882110);
function W(e) {
    let { avatarSize: t, userId: n, channelId: l, guildId: r } = e,
        o = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: V.effect,
        style: {
            top: a,
            left: a,
            width: o,
            height: o
        },
        children: (0, i.jsx)(g.Z, {
            userId: n,
            channelId: l,
            guildId: r,
            containerDimensions: {
                width: o,
                height: o
            }
        })
    });
}
function F(e) {
    let { channel: t, flipped: n = !1, locked: r = !1, user: d, nick: c, displayNameMode: u, displayUserMode: p, size: g = P.ipw.LARGE, onClick: f, onContextMenu: x, context: E, guildId: Z, voiceState: b, showStreamPreview: y, onShowStreamPreview: w, onWatchStream: O } = e,
        j = (0, a.e7)([S.default], () => S.default.getId() === d.id, [d.id]),
        k = null == b ? void 0 : b.sessionId,
        R = (0, a.e7)([T.Z], () => T.Z.getVoiceStateForSession(d.id, k), [k, d.id]),
        [A, L, M] = (0, a.Wu)([N.Z], () => (j ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(d.id), !1, N.Z.isLocalVideoDisabled(d.id)]), [j, d.id]),
        D = (0, a.e7)([I.Z], () => I.Z.getCurrentUserActiveStream()),
        z = (0, a.Wu)([I.Z], () => (null != D ? I.Z.getViewerIds(D) : [])),
        F = (0, _.Z)({
            userId: d.id,
            context: E
        }),
        U = (0, a.e7)([I.Z], () => I.Z.getStreamForUser(d.id, Z)),
        G = null != U,
        H = l.useMemo(() => null != D && D.ownerId !== d.id && z.includes(d.id), [D, d.id, z]),
        B = l.useCallback(() => w(null), [w]),
        Y = l.useCallback(
            () =>
                (0, i.jsx)(v.Z, {
                    user: d,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(U, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            B(),
                            O();
                    },
                    onAction: O,
                    previewIsOpen: y,
                    location: P.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [d, t, U, y, B, O]
        );
    if ((p === P.OYC.ONLY_WHILE_SPEAKING && r && !F) || null == R) return null;
    let { mute: K, suppress: Q, deaf: X } = R,
        J = g === P.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.P3F, {
        className: o()(V.voiceUser, {
            [V.speaking]: F,
            [V.interactive]: !r,
            [V.flipped]: n
        }),
        onClick: r ? void 0 : (e) => (null == f ? void 0 : f(e, d)),
        onContextMenu: r ? void 0 : (e) => (null == x ? void 0 : x(e, d)),
        onMouseEnter: () => w(d.id),
        onMouseLeave: B,
        children: [
            (0, i.jsx)(s.qEK, {
                className: V.avatar,
                size: g === P.ipw.LARGE ? s.EFr.SIZE_32 : s.EFr.SIZE_24,
                src: d.getAvatarURL(Z, J),
                'aria-hidden': !0
            }),
            (0, i.jsx)(W, {
                avatarSize: J,
                userId: d.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            r && (u === P.wC$.NEVER || (!F && u === P.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.yRy, {
                      position: 'right',
                      renderPopout: Y,
                      shouldShow: y,
                      onRequestClose: B,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.P3F, {
                              className: V.username,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: c
                                  }),
                                  (0, i.jsx)(m.ZP, {
                                      primaryGuild: d.primaryGuild,
                                      userId: d.id,
                                      contextGuildId: Z,
                                      className: V.clanTag
                                  }),
                                  (0, i.jsx)(C.nm, {
                                      guildId: Z,
                                      user: d,
                                      video: R.selfVideo,
                                      isStreaming: G,
                                      className: V.voiceIcons,
                                      iconClassName: V.voiceIcon,
                                      isWatching: H,
                                      localMute: A && !j,
                                      localVideoDisabled: M,
                                      mute: K || A,
                                      deaf: X || L,
                                      serverMute: K || Q,
                                      serverDeaf: X,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function U(e) {
    let { id: t, context: r = D.Yn.DEFAULT, channel: o, sortedVoiceStates: a, displayNameMode: h, displayUserMode: _, locked: p, pinned: g, isPreviewingInGame: f, anchorLeft: m, avatarSizeMode: v } = e,
        [x, E] = l.useState(null),
        Z = (e, t) => {
            (0, d.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: r
                    });
            });
        },
        C = a.length > 0 && null != r && null != o && (!p || g),
        I = l.useCallback(() => {
            var e, n;
            let i = null === (e = y.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                l = null != i ? (null === (n = y.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === P.Odu.GO_LIVE)) : null;
            null == l ||
                l.pinned ||
                ((0, c.xh)(l.id),
                u.Z.track(P.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == o ? void 0 : o.guild_id,
                    channel_id: null == o ? void 0 : o.id,
                    channel_type: null == o ? void 0 : o.type,
                    widget_type: P.Odu.GO_LIVE
                }));
        }, [o, t]);
    return C
        ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                  var t;
                  let { user: n, voiceState: l, member: a } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            F,
                            {
                                guildId: null == o ? void 0 : o.guild_id,
                                user: n,
                                nick: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : R.ZP.getName(n),
                                flipped: !m,
                                voiceState: l,
                                displayNameMode: h,
                                displayUserMode: _,
                                size: v,
                                locked: p || f,
                                onContextMenu: Z,
                                onClick: Z,
                                context: r,
                                channel: o,
                                showStreamPreview: n.id === x,
                                onShowStreamPreview: E,
                                onWatchStream: I
                            },
                            n.id
                        );
              })
          })
        : p
          ? null
          : (0, i.jsx)(L.E, {
                emptyText: z.intl.string(z.t.hEh0l5),
                icon: s.gj8
            });
}
function G(e) {
    var t;
    let n = (0, a.e7)([w.Z, b.Z], () => b.Z.getChannel(w.Z.getVoiceChannelId())),
        l = (0, f.ZP)(n),
        r = (function () {
            let [e] = (0, a.e7)(
                [O.ZP, E.Z, w.Z, b.Z],
                () => {
                    let e = b.Z.getChannel(w.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [E.Z.getMutableParticipants(e.id, Z.pV.SPEAKER), E.Z.getParticipantsVersion(e.id)] : [O.ZP.getVoiceStatesForChannel(e), O.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                k.Q
            );
            return e;
        })(),
        o = (0, a.e7)([I.Z], () => I.Z.getStreamerActiveStreamMetadata()),
        s = (0, M.II)(),
        d = (0, p.q)(null == s ? void 0 : s.id),
        c = (0, a.cj)([I.Z, j.Z], () => {
            let e = I.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: j.Z.getDisplayUserMode(),
                displayNameMode: j.Z.getDisplayNameMode(),
                avatarSizeMode: j.Z.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, A.QF)() ? (0, x.Z)(s) : null,
                stream: e
            };
        });
    return (0, i.jsx)(U, {
        ...c,
        application: d,
        ...e,
        sortedVoiceStates: r,
        channel: n,
        title: null != l ? l : '',
        streamMetadata: o,
        streamApplication:
            null !== (t = c.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == o ? void 0 : o.sourceName
                  }
    });
}
