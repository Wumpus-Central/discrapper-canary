n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    d = n(765250),
    u = n(13245),
    h = n(872810),
    m = n(586902),
    p = n(835473),
    x = n(415635),
    f = n(933557),
    v = n(979264),
    g = n(701362),
    C = n(552282),
    Z = n(565799),
    _ = n(501655),
    b = n(597998),
    j = n(199902),
    I = n(314897),
    E = n(592125),
    k = n(355863),
    N = n(131951),
    w = n(944486),
    y = n(938475),
    T = n(237997),
    S = n(136015),
    L = n(51144),
    A = n(145597),
    O = n(804570),
    P = n(388627),
    V = n(981631),
    M = n(65154),
    R = n(388032),
    D = n(882110);
function W(e) {
    let { avatarSize: t, userId: n, channelId: r, guildId: o } = e,
        l = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: D.effect,
        style: {
            top: a,
            left: a,
            width: l,
            height: l
        },
        children: (0, i.jsx)(x.Z, {
            userId: n,
            channelId: r,
            guildId: o,
            containerDimensions: {
                width: l,
                height: l
            }
        })
    });
}
function z(e) {
    let { channel: t, flipped: n = !1, locked: o = !1, user: c, nick: d, displayNameMode: u, displayUserMode: p, size: x = V.ipw.LARGE, onClick: f, onContextMenu: C, context: Z, guildId: _, voiceState: E, showStreamPreview: k, onShowStreamPreview: w, onWatchStream: y } = e,
        T = (0, a.e7)([I.default], () => I.default.getId() === c.id, [c.id]),
        [S, L, A] = (0, a.Wu)([N.Z], () => (T ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(c.id), !1, N.Z.isLocalVideoDisabled(c.id)]), [T, c.id]),
        O = (0, a.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
        P = (0, a.Wu)([j.Z], () => (null != O ? j.Z.getViewerIds(O) : [])),
        M = (0, m.Z)({
            userId: c.id,
            context: Z
        }),
        R = (0, a.e7)([j.Z], () => j.Z.getStreamForUser(c.id, _)),
        z = null != R,
        F = r.useMemo(() => null != O && O.ownerId !== c.id && P.includes(c.id), [O, c.id, P]),
        G = r.useCallback(() => w(null), [w]),
        B = r.useCallback(
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
                    previewIsOpen: k,
                    location: V.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [c, t, R, k, G, y]
        );
    if (p === V.OYC.ONLY_WHILE_SPEAKING && o && !M) return null;
    let { mute: U, suppress: Y, deaf: H } = E,
        X = x === V.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.Clickable, {
        className: l()(D.voiceUser, {
            [D.speaking]: M,
            [D.interactive]: !o,
            [D.flipped]: n
        }),
        onClick: o ? void 0 : (e) => (null == f ? void 0 : f(e, c)),
        onContextMenu: o ? void 0 : (e) => (null == C ? void 0 : C(e, c)),
        onMouseEnter: () => w(c.id),
        onMouseLeave: G,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: D.avatar,
                size: x === V.ipw.LARGE ? s.AvatarSizes.SIZE_32 : s.AvatarSizes.SIZE_24,
                src: c.getAvatarURL(_, X),
                'aria-hidden': !0
            }),
            (0, i.jsx)(W, {
                avatarSize: X,
                userId: c.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            o && (u === V.wC$.NEVER || (!M && u === V.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.Popout, {
                      position: 'right',
                      renderPopout: B,
                      shouldShow: k,
                      onRequestClose: G,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.Clickable, {
                              className: D.username,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: d
                                  }),
                                  (0, i.jsx)(v.ZP, {
                                      primaryGuild: c.primaryGuild,
                                      userId: c.id,
                                      contextGuildId: _,
                                      className: D.clanTag
                                  }),
                                  (0, i.jsx)(b.nm, {
                                      guildId: _,
                                      user: c,
                                      video: E.selfVideo,
                                      isStreaming: z,
                                      className: D.voiceIcons,
                                      iconClassName: D.voiceIcon,
                                      isWatching: F,
                                      localMute: S && !T,
                                      localVideoDisabled: A,
                                      mute: U || S,
                                      deaf: H || L,
                                      serverMute: U || Y,
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
    let { id: t, context: o = M.Yn.DEFAULT, channel: l, sortedVoiceStates: a, displayNameMode: h, displayUserMode: m, locked: p, pinned: x, isPreviewingInGame: f, anchorLeft: v, avatarSizeMode: g } = e,
        [C, Z] = r.useState(null),
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
        b = a.length > 0 && null != o && null != l && (!p || x),
        j = r.useCallback(() => {
            var e, n;
            let i = null === (e = k.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                r = null != i ? (null === (n = k.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === V.Odu.GO_LIVE)) : null;
            null != r &&
                !r.pinned &&
                ((0, d.xh)(r.id),
                u.Z.track(V.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == l ? void 0 : l.guild_id,
                    channel_id: null == l ? void 0 : l.id,
                    channel_type: null == l ? void 0 : l.type,
                    widget_type: V.Odu.GO_LIVE
                }));
        }, [l, t]);
    return b
        ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                  var t;
                  let { user: n, voiceState: r, member: a } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            z,
                            {
                                guildId: null == l ? void 0 : l.guild_id,
                                user: n,
                                nick: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : L.ZP.getName(n),
                                flipped: !v,
                                voiceState: r,
                                displayNameMode: h,
                                displayUserMode: m,
                                size: g,
                                locked: p || f,
                                onContextMenu: _,
                                onClick: _,
                                context: o,
                                channel: l,
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
    let n = (0, a.e7)([w.Z, E.Z], () => E.Z.getChannel(w.Z.getVoiceChannelId())),
        r = (0, f.ZP)(n),
        o = (function () {
            let [e] = (0, a.e7)(
                [y.ZP, Z.Z, w.Z, E.Z],
                () => {
                    let e = E.Z.getChannel(w.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [Z.Z.getMutableParticipants(e.id, _.pV.SPEAKER), Z.Z.getParticipantsVersion(e.id)] : [y.ZP.getVoiceStatesForChannel(e), y.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                S.Q
            );
            return e;
        })(),
        l = (0, a.e7)([j.Z], () => j.Z.getStreamerActiveStreamMetadata()),
        s = (0, P.II)(),
        c = (0, p.q)(null == s ? void 0 : s.id),
        d = (0, a.cj)([j.Z, T.Z], () => {
            let e = j.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: T.Z.getDisplayUserMode(),
                displayNameMode: T.Z.getDisplayNameMode(),
                avatarSizeMode: T.Z.getAvatarSizeMode(),
                streamApplication: (null == l ? void 0 : l.pid) === (0, A.QF)() ? (0, C.Z)(s) : null,
                stream: e
            };
        });
    return (0, i.jsx)(F, {
        ...d,
        application: c,
        ...e,
        sortedVoiceStates: o,
        channel: n,
        title: null != r ? r : '',
        streamMetadata: l,
        streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == l ? void 0 : l.sourceName
                  }
    });
}
