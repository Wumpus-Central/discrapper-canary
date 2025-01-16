n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(765250),
    d = n(13245),
    h = n(872810),
    f = n(586902),
    p = n(835473),
    m = n(415635),
    v = n(933557),
    x = n(979264),
    g = n(701362),
    C = n(552282),
    Z = n(565799),
    _ = n(501655),
    I = n(597998),
    j = n(199902),
    E = n(314897),
    b = n(592125),
    w = n(355863),
    k = n(131951),
    N = n(944486),
    y = n(938475),
    L = n(237997),
    S = n(136015),
    T = n(51144),
    A = n(145597),
    O = n(804570),
    V = n(388627),
    P = n(981631),
    M = n(65154),
    R = n(388032),
    W = n(882110);
function D(e) {
    let { avatarSize: t, userId: n, channelId: l, guildId: o } = e,
        r = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: W.effect,
        style: {
            top: a,
            left: a,
            width: r,
            height: r
        },
        children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: l,
            guildId: o,
            containerDimensions: {
                width: r,
                height: r
            }
        })
    });
}
function z(e) {
    let { channel: t, flipped: n = !1, locked: o = !1, user: c, nick: u, displayNameMode: d, displayUserMode: p, size: m = P.ipw.LARGE, onClick: v, onContextMenu: C, context: Z, guildId: _, voiceState: b, showStreamPreview: w, onShowStreamPreview: N, onWatchStream: y } = e,
        L = (0, a.e7)([E.default], () => E.default.getId() === c.id, [c.id]),
        [S, T, A] = (0, a.Wu)([k.Z], () => (L ? [!k.Z.isSupported() || k.Z.isSelfMute() || k.Z.isSelfMutedTemporarily(), k.Z.isSelfDeaf(), !1] : [!k.Z.isSupported() || k.Z.isLocalMute(c.id), !1, k.Z.isLocalVideoDisabled(c.id)]), [L, c.id]),
        O = (0, a.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
        V = (0, a.Wu)([j.Z], () => (null != O ? j.Z.getViewerIds(O) : [])),
        M = (0, f.Z)({
            userId: c.id,
            context: Z
        }),
        R = (0, a.e7)([j.Z], () => j.Z.getStreamForUser(c.id, _)),
        z = null != R,
        F = l.useMemo(() => null != O && O.ownerId !== c.id && V.includes(c.id), [O, c.id, V]),
        G = l.useCallback(() => N(null), [N]),
        U = l.useCallback(
            () =>
                (0, i.jsx)(g.Z, {
                    user: c,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(R, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            G(),
                            y();
                    },
                    onAction: y,
                    previewIsOpen: w,
                    location: P.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [c, t, R, w, G, y]
        );
    if (p === P.OYC.ONLY_WHILE_SPEAKING && o && !M) return null;
    let { mute: B, suppress: Y, deaf: H } = b,
        X = m === P.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.Clickable, {
        className: r()(W.voiceUser, {
            [W.speaking]: M,
            [W.interactive]: !o,
            [W.flipped]: n
        }),
        onClick: o ? void 0 : (e) => (null == v ? void 0 : v(e, c)),
        onContextMenu: o ? void 0 : (e) => (null == C ? void 0 : C(e, c)),
        onMouseEnter: () => N(c.id),
        onMouseLeave: G,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: W.avatar,
                size: m === P.ipw.LARGE ? s.AvatarSizes.SIZE_32 : s.AvatarSizes.SIZE_24,
                src: c.getAvatarURL(_, X),
                'aria-hidden': !0
            }),
            (0, i.jsx)(D, {
                avatarSize: X,
                userId: c.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            o && (d === P.wC$.NEVER || (!M && d === P.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.Popout, {
                      position: 'right',
                      renderPopout: U,
                      shouldShow: w,
                      onRequestClose: G,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.Clickable, {
                              className: W.username,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: u
                                  }),
                                  (0, i.jsx)(x.ZP, {
                                      primaryGuild: c.primaryGuild,
                                      userId: c.id,
                                      contextGuildId: _,
                                      className: W.clanTag
                                  }),
                                  (0, i.jsx)(I.nm, {
                                      guildId: _,
                                      user: c,
                                      video: b.selfVideo,
                                      isStreaming: z,
                                      className: W.voiceIcons,
                                      iconClassName: W.voiceIcon,
                                      isWatching: F,
                                      localMute: S && !L,
                                      localVideoDisabled: A,
                                      mute: B || S,
                                      deaf: H || T,
                                      serverMute: B || Y,
                                      serverDeaf: H,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function F(e) {
    let { id: t, context: o = M.Yn.DEFAULT, channel: r, sortedVoiceStates: a, displayNameMode: h, displayUserMode: f, locked: p, pinned: m, isPreviewingInGame: v, anchorLeft: x, avatarSizeMode: g } = e,
        [C, Z] = l.useState(null),
        _ = (e, t) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: o
                    });
            });
        },
        I = a.length > 0 && null != o && null != r && (!p || m),
        j = l.useCallback(() => {
            var e, n;
            let i = null === (e = w.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                l = null != i ? (null === (n = w.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === P.Odu.GO_LIVE)) : null;
            null != l &&
                !l.pinned &&
                ((0, u.xh)(l.id),
                d.Z.track(P.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == r ? void 0 : r.guild_id,
                    channel_id: null == r ? void 0 : r.id,
                    channel_type: null == r ? void 0 : r.type,
                    widget_type: P.Odu.GO_LIVE
                }));
        }, [r, t]);
    return I
        ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                  var t;
                  let { user: n, voiceState: l, member: a } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            z,
                            {
                                guildId: null == r ? void 0 : r.guild_id,
                                user: n,
                                nick: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : T.ZP.getName(n),
                                flipped: !x,
                                voiceState: l,
                                displayNameMode: h,
                                displayUserMode: f,
                                size: g,
                                locked: p || v,
                                onContextMenu: _,
                                onClick: _,
                                context: o,
                                channel: r,
                                showStreamPreview: n.id === C,
                                onShowStreamPreview: Z,
                                onWatchStream: j
                            },
                            n.id
                        );
              })
          })
        : p
          ? null
          : (0, i.jsx)(O.E, {
                emptyText: R.intl.string(R.t.hEh0l5),
                icon: s.VoiceNormalIcon
            });
}
function G(e) {
    var t;
    let n = (0, a.e7)([N.Z, b.Z], () => b.Z.getChannel(N.Z.getVoiceChannelId())),
        l = (0, v.ZP)(n),
        o = (function () {
            let [e] = (0, a.e7)(
                [y.ZP, Z.Z, N.Z, b.Z],
                () => {
                    let e = b.Z.getChannel(N.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [Z.Z.getMutableParticipants(e.id, _.pV.SPEAKER), Z.Z.getParticipantsVersion(e.id)] : [y.ZP.getVoiceStatesForChannel(e), y.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                S.Q
            );
            return e;
        })(),
        r = (0, a.e7)([j.Z], () => j.Z.getStreamerActiveStreamMetadata()),
        s = (0, V.II)(),
        c = (0, p.q)(null == s ? void 0 : s.id),
        u = (0, a.cj)([j.Z, L.Z], () => {
            let e = j.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: L.Z.getDisplayUserMode(),
                displayNameMode: L.Z.getDisplayNameMode(),
                avatarSizeMode: L.Z.getAvatarSizeMode(),
                streamApplication: (null == r ? void 0 : r.pid) === (0, A.QF)() ? (0, C.Z)(s) : null,
                stream: e
            };
        });
    return (0, i.jsx)(F, {
        ...u,
        application: c,
        ...e,
        sortedVoiceStates: o,
        channel: n,
        title: null != l ? l : '',
        streamMetadata: r,
        streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == r ? void 0 : r.sourceName
                  }
    });
}
