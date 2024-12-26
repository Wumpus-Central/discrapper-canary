n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(765250),
    d = n(13245),
    h = n(872810),
    f = n(586902),
    m = n(835473),
    v = n(415635),
    p = n(933557),
    x = n(701362),
    g = n(552282),
    C = n(565799),
    Z = n(501655),
    I = n(597998),
    _ = n(199902),
    j = n(314897),
    E = n(592125),
    b = n(355863),
    w = n(131951),
    N = n(944486),
    k = n(938475),
    L = n(237997),
    S = n(136015),
    y = n(51144),
    T = n(145597),
    A = n(388627),
    O = n(981631),
    V = n(65154),
    M = n(882110);
function P(e) {
    let { avatarSize: t, userId: n, channelId: r, guildId: l } = e,
        o = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: M.effect,
        style: {
            top: a,
            left: a,
            width: o,
            height: o
        },
        children: (0, i.jsx)(v.Z, {
            userId: n,
            channelId: r,
            guildId: l,
            containerDimensions: {
                width: o,
                height: o
            }
        })
    });
}
function z(e) {
    let { channel: t, flipped: n = !1, locked: l = !1, user: c, nick: u, displayNameMode: d, displayUserMode: m, size: v = O.ipw.LARGE, onClick: p, onContextMenu: g, context: C, guildId: Z, voiceState: E, showStreamPreview: b, onShowStreamPreview: N, onWatchStream: k } = e,
        L = (0, a.e7)([j.default], () => j.default.getId() === c.id, [c.id]),
        [S, y, T] = (0, a.Wu)([w.Z], () => (L ? [!w.Z.isSupported() || w.Z.isSelfMute() || w.Z.isSelfMutedTemporarily(), w.Z.isSelfDeaf(), !1] : [!w.Z.isSupported() || w.Z.isLocalMute(c.id), !1, w.Z.isLocalVideoDisabled(c.id)]), [L, c.id]),
        A = (0, a.e7)([_.Z], () => _.Z.getCurrentUserActiveStream()),
        V = (0, a.Wu)([_.Z], () => (null != A ? _.Z.getViewerIds(A) : [])),
        z = (0, f.Z)({
            userId: c.id,
            context: C
        }),
        R = (0, a.e7)([_.Z], () => _.Z.getStreamForUser(c.id, Z)),
        D = null != R,
        W = r.useMemo(() => null != A && A.ownerId !== c.id && V.includes(c.id), [A, c.id, V]),
        U = r.useCallback(() => N(null), [N]),
        F = r.useCallback(
            () =>
                (0, i.jsx)(x.Z, {
                    user: c,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(R, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            U(),
                            k();
                    },
                    onAction: k,
                    previewIsOpen: b,
                    location: O.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [c, t, R, b, U, k]
        );
    if (m === O.OYC.ONLY_WHILE_SPEAKING && l && !z) return null;
    let { mute: G, suppress: B, deaf: Y } = E,
        H = v === O.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.Clickable, {
        className: o()(M.voiceUser, {
            [M.speaking]: z,
            [M.interactive]: !l,
            [M.flipped]: n
        }),
        onClick: l ? void 0 : (e) => (null == p ? void 0 : p(e, c)),
        onContextMenu: l ? void 0 : (e) => (null == g ? void 0 : g(e, c)),
        onMouseEnter: () => N(c.id),
        onMouseLeave: U,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: M.avatar,
                size: v === O.ipw.LARGE ? s.AvatarSizes.SIZE_32 : s.AvatarSizes.SIZE_24,
                src: c.getAvatarURL(Z, H),
                'aria-hidden': !0
            }),
            (0, i.jsx)(P, {
                avatarSize: H,
                userId: c.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            l && (d === O.wC$.NEVER || (!z && d === O.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.Popout, {
                      position: 'right',
                      renderPopout: F,
                      shouldShow: b,
                      onRequestClose: U,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.Clickable, {
                              className: M.username,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: u
                                  }),
                                  (0, i.jsx)(I.nm, {
                                      guildId: Z,
                                      user: c,
                                      video: E.selfVideo,
                                      isStreaming: D,
                                      className: M.voiceIcons,
                                      iconClassName: M.voiceIcon,
                                      isWatching: W,
                                      localMute: S && !L,
                                      localVideoDisabled: T,
                                      mute: G || S,
                                      deaf: Y || y,
                                      serverMute: G || B,
                                      serverDeaf: Y,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function R(e) {
    let { id: t, context: l = V.Yn.DEFAULT, channel: o, sortedVoiceStates: a, displayNameMode: s, displayUserMode: h, locked: f, pinned: m, isPreviewingInGame: v, anchorLeft: p, avatarSizeMode: x } = e,
        [g, C] = r.useState(null),
        Z = (e, t) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: l
                    });
            });
        },
        I = a.length > 0 && null != l && null != o && (!f || m),
        _ = r.useCallback(() => {
            var e, n;
            let i = null === (e = b.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                r = null != i ? (null === (n = b.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === O.Odu.GO_LIVE)) : null;
            null != r &&
                !r.pinned &&
                ((0, u.xh)(r.id),
                d.Z.track(O.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == o ? void 0 : o.guild_id,
                    channel_id: null == o ? void 0 : o.id,
                    channel_type: null == o ? void 0 : o.type,
                    widget_type: O.Odu.GO_LIVE
                }));
        }, [o, t]);
    return I
        ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                  var t;
                  let { user: n, voiceState: r, member: a } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            z,
                            {
                                guildId: null == o ? void 0 : o.guild_id,
                                user: n,
                                nick: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : y.ZP.getName(n),
                                flipped: !p,
                                voiceState: r,
                                displayNameMode: s,
                                displayUserMode: h,
                                size: x,
                                locked: f || v,
                                onContextMenu: Z,
                                onClick: Z,
                                context: l,
                                channel: o,
                                showStreamPreview: n.id === g,
                                onShowStreamPreview: C,
                                onWatchStream: _
                            },
                            n.id
                        );
              })
          })
        : null;
}
function D(e) {
    var t;
    let n = (0, a.e7)([N.Z, E.Z], () => E.Z.getChannel(N.Z.getVoiceChannelId())),
        r = (0, p.ZP)(n),
        l = (function () {
            let [e] = (0, a.e7)(
                [k.ZP, C.Z, N.Z, E.Z],
                () => {
                    let e = E.Z.getChannel(N.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [C.Z.getMutableParticipants(e.id, Z.pV.SPEAKER), C.Z.getParticipantsVersion(e.id)] : [k.ZP.getVoiceStatesForChannel(e), k.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                S.Q
            );
            return e;
        })(),
        o = (0, a.e7)([_.Z], () => _.Z.getStreamerActiveStreamMetadata()),
        s = (0, A.II)(),
        c = (0, m.q)(null == s ? void 0 : s.id),
        u = (0, a.cj)([_.Z, L.Z], () => {
            let e = _.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: L.Z.getDisplayUserMode(),
                displayNameMode: L.Z.getDisplayNameMode(),
                avatarSizeMode: L.Z.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, T.QF)() ? (0, g.Z)(s) : null,
                stream: e
            };
        });
    return (0, i.jsx)(R, {
        ...u,
        application: c,
        ...e,
        sortedVoiceStates: l,
        channel: n,
        title: null != r ? r : '',
        streamMetadata: o,
        streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == o ? void 0 : o.sourceName
                  }
    });
}
