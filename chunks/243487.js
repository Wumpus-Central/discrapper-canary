n.d(t, {
    Z: function () {
        return F;
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
    N = n(131951),
    k = n(944486),
    y = n(938475),
    L = n(237997),
    S = n(136015),
    T = n(51144),
    A = n(145597),
    O = n(804570),
    V = n(388627),
    M = n(981631),
    P = n(65154),
    R = n(388032),
    D = n(882110);
function W(e) {
    let { avatarSize: t, userId: n, channelId: l, guildId: o } = e,
        r = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: D.effect,
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
    let { channel: t, flipped: n = !1, locked: o = !1, user: c, nick: u, displayNameMode: d, displayUserMode: p, size: m = M.ipw.LARGE, onClick: v, onContextMenu: C, context: Z, guildId: _, voiceState: b, showStreamPreview: w, onShowStreamPreview: k, onWatchStream: y } = e,
        L = (0, a.e7)([E.default], () => E.default.getId() === c.id, [c.id]),
        [S, T, A] = (0, a.Wu)([N.Z], () => (L ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(c.id), !1, N.Z.isLocalVideoDisabled(c.id)]), [L, c.id]),
        O = (0, a.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
        V = (0, a.Wu)([j.Z], () => (null != O ? j.Z.getViewerIds(O) : [])),
        P = (0, f.Z)({
            userId: c.id,
            context: Z
        }),
        R = (0, a.e7)([j.Z], () => j.Z.getStreamForUser(c.id, _)),
        z = null != R,
        G = l.useMemo(() => null != O && O.ownerId !== c.id && V.includes(c.id), [O, c.id, V]),
        F = l.useCallback(() => k(null), [k]),
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
                            F(),
                            y();
                    },
                    onAction: y,
                    previewIsOpen: w,
                    location: M.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [c, t, R, w, F, y]
        );
    if (p === M.OYC.ONLY_WHILE_SPEAKING && o && !P) return null;
    let { mute: B, suppress: Y, deaf: H } = b,
        X = m === M.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.Clickable, {
        className: r()(D.voiceUser, {
            [D.speaking]: P,
            [D.interactive]: !o,
            [D.flipped]: n
        }),
        onClick: o ? void 0 : (e) => (null == v ? void 0 : v(e, c)),
        onContextMenu: o ? void 0 : (e) => (null == C ? void 0 : C(e, c)),
        onMouseEnter: () => k(c.id),
        onMouseLeave: F,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: D.avatar,
                size: m === M.ipw.LARGE ? s.AvatarSizes.SIZE_32 : s.AvatarSizes.SIZE_24,
                src: c.getAvatarURL(_, X),
                'aria-hidden': !0
            }),
            (0, i.jsx)(W, {
                avatarSize: X,
                userId: c.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            o && (d === M.wC$.NEVER || (!P && d === M.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.Popout, {
                      position: 'right',
                      renderPopout: U,
                      shouldShow: w,
                      onRequestClose: F,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.Clickable, {
                              className: D.username,
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
                                      className: D.clanTag
                                  }),
                                  (0, i.jsx)(I.nm, {
                                      guildId: _,
                                      user: c,
                                      video: b.selfVideo,
                                      isStreaming: z,
                                      className: D.voiceIcons,
                                      iconClassName: D.voiceIcon,
                                      isWatching: G,
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
function G(e) {
    let { id: t, context: o = P.Yn.DEFAULT, channel: r, sortedVoiceStates: a, displayNameMode: h, displayUserMode: f, locked: p, pinned: m, isPreviewingInGame: v, anchorLeft: x, avatarSizeMode: g } = e,
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
                l = null != i ? (null === (n = w.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === M.Odu.GO_LIVE)) : null;
            null != l &&
                !l.pinned &&
                ((0, u.xh)(l.id),
                d.Z.track(M.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == r ? void 0 : r.guild_id,
                    channel_id: null == r ? void 0 : r.id,
                    channel_type: null == r ? void 0 : r.type,
                    widget_type: M.Odu.GO_LIVE
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
function F(e) {
    var t;
    let n = (0, a.e7)([k.Z, b.Z], () => b.Z.getChannel(k.Z.getVoiceChannelId())),
        l = (0, v.ZP)(n),
        o = (function () {
            let [e] = (0, a.e7)(
                [y.ZP, Z.Z, k.Z, b.Z],
                () => {
                    let e = b.Z.getChannel(k.Z.getVoiceChannelId());
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
    return (0, i.jsx)(G, {
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
