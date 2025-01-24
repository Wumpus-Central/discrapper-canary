n.d(t, {
    Z: function () {
        return B;
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
    d = n(765250),
    u = n(13245),
    h = n(872810),
    m = n(586902),
    p = n(835473),
    x = n(415635),
    g = n(933557),
    v = n(979264),
    f = n(701362),
    C = n(552282),
    Z = n(565799),
    b = n(501655),
    j = n(597998),
    _ = n(199902),
    I = n(314897),
    E = n(592125),
    k = n(355863),
    N = n(131951),
    w = n(944486),
    y = n(979651),
    T = n(938475),
    S = n(237997),
    L = n(136015),
    A = n(51144),
    O = n(145597),
    P = n(804570),
    V = n(388627),
    M = n(981631),
    R = n(65154),
    D = n(388032),
    z = n(882110);
function W(e) {
    let { avatarSize: t, userId: n, channelId: r, guildId: l } = e,
        o = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: z.effect,
        style: {
            top: a,
            left: a,
            width: o,
            height: o
        },
        children: (0, i.jsx)(x.Z, {
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
function F(e) {
    let { channel: t, flipped: n = !1, locked: l = !1, user: c, nick: d, displayNameMode: u, displayUserMode: p, size: x = M.ipw.LARGE, onClick: g, onContextMenu: C, context: Z, guildId: b, voiceState: E, showStreamPreview: k, onShowStreamPreview: w, onWatchStream: T } = e,
        S = (0, a.e7)([I.default], () => I.default.getId() === c.id, [c.id]),
        L = null == E ? void 0 : E.sessionId,
        A = (0, a.e7)([y.Z], () => y.Z.getVoiceStateForSession(c.id, L), [L, c.id]),
        [O, P, V] = (0, a.Wu)([N.Z], () => (S ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(c.id), !1, N.Z.isLocalVideoDisabled(c.id)]), [S, c.id]),
        R = (0, a.e7)([_.Z], () => _.Z.getCurrentUserActiveStream()),
        D = (0, a.Wu)([_.Z], () => (null != R ? _.Z.getViewerIds(R) : [])),
        F = (0, m.Z)({
            userId: c.id,
            context: Z
        }),
        G = (0, a.e7)([_.Z], () => _.Z.getStreamForUser(c.id, b)),
        B = null != G,
        U = r.useMemo(() => null != R && R.ownerId !== c.id && D.includes(c.id), [R, c.id, D]),
        Y = r.useCallback(() => w(null), [w]),
        H = r.useCallback(
            () =>
                (0, i.jsx)(f.Z, {
                    user: c,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(G, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            Y(),
                            T();
                    },
                    onAction: T,
                    previewIsOpen: k,
                    location: M.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [c, t, G, k, Y, T]
        );
    if ((p === M.OYC.ONLY_WHILE_SPEAKING && l && !F) || null == A) return null;
    let { mute: K, suppress: X, deaf: Q } = A,
        q = x === M.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.Clickable, {
        className: o()(z.voiceUser, {
            [z.speaking]: F,
            [z.interactive]: !l,
            [z.flipped]: n
        }),
        onClick: l ? void 0 : (e) => (null == g ? void 0 : g(e, c)),
        onContextMenu: l ? void 0 : (e) => (null == C ? void 0 : C(e, c)),
        onMouseEnter: () => w(c.id),
        onMouseLeave: Y,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: z.avatar,
                size: x === M.ipw.LARGE ? s.AvatarSizes.SIZE_32 : s.AvatarSizes.SIZE_24,
                src: c.getAvatarURL(b, q),
                'aria-hidden': !0
            }),
            (0, i.jsx)(W, {
                avatarSize: q,
                userId: c.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            l && (u === M.wC$.NEVER || (!F && u === M.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.Popout, {
                      position: 'right',
                      renderPopout: H,
                      shouldShow: k,
                      onRequestClose: Y,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.Clickable, {
                              className: z.username,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: d
                                  }),
                                  (0, i.jsx)(v.ZP, {
                                      primaryGuild: c.primaryGuild,
                                      userId: c.id,
                                      contextGuildId: b,
                                      className: z.clanTag
                                  }),
                                  (0, i.jsx)(j.nm, {
                                      guildId: b,
                                      user: c,
                                      video: A.selfVideo,
                                      isStreaming: B,
                                      className: z.voiceIcons,
                                      iconClassName: z.voiceIcon,
                                      isWatching: U,
                                      localMute: O && !S,
                                      localVideoDisabled: V,
                                      mute: K || O,
                                      deaf: Q || P,
                                      serverMute: K || X,
                                      serverDeaf: Q,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function G(e) {
    let { id: t, context: l = R.Yn.DEFAULT, channel: o, sortedVoiceStates: a, displayNameMode: h, displayUserMode: m, locked: p, pinned: x, isPreviewingInGame: g, anchorLeft: v, avatarSizeMode: f } = e,
        [C, Z] = r.useState(null),
        b = (e, t) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('10125')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: l
                    });
            });
        },
        j = a.length > 0 && null != l && null != o && (!p || x),
        _ = r.useCallback(() => {
            var e, n;
            let i = null === (e = k.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                r = null != i ? (null === (n = k.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === M.Odu.GO_LIVE)) : null;
            null != r &&
                !r.pinned &&
                ((0, d.xh)(r.id),
                u.Z.track(M.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == o ? void 0 : o.guild_id,
                    channel_id: null == o ? void 0 : o.id,
                    channel_type: null == o ? void 0 : o.type,
                    widget_type: M.Odu.GO_LIVE
                }));
        }, [o, t]);
    return j
        ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                  var t;
                  let { user: n, voiceState: r, member: a } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            F,
                            {
                                guildId: null == o ? void 0 : o.guild_id,
                                user: n,
                                nick: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : A.ZP.getName(n),
                                flipped: !v,
                                voiceState: r,
                                displayNameMode: h,
                                displayUserMode: m,
                                size: f,
                                locked: p || g,
                                onContextMenu: b,
                                onClick: b,
                                context: l,
                                channel: o,
                                showStreamPreview: n.id === C,
                                onShowStreamPreview: Z,
                                onWatchStream: _
                            },
                            n.id
                        );
              })
          })
        : p
          ? null
          : (0, i.jsx)(P.E, {
                emptyText: D.intl.string(D.t.hEh0l5),
                icon: s.VoiceNormalIcon
            });
}
function B(e) {
    var t;
    let n = (0, a.e7)([w.Z, E.Z], () => E.Z.getChannel(w.Z.getVoiceChannelId())),
        r = (0, g.ZP)(n),
        l = (function () {
            let [e] = (0, a.e7)(
                [T.ZP, Z.Z, w.Z, E.Z],
                () => {
                    let e = E.Z.getChannel(w.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [Z.Z.getMutableParticipants(e.id, b.pV.SPEAKER), Z.Z.getParticipantsVersion(e.id)] : [T.ZP.getVoiceStatesForChannel(e), T.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                L.Q
            );
            return e;
        })(),
        o = (0, a.e7)([_.Z], () => _.Z.getStreamerActiveStreamMetadata()),
        s = (0, V.II)(),
        c = (0, p.q)(null == s ? void 0 : s.id),
        d = (0, a.cj)([_.Z, S.Z], () => {
            let e = _.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: S.Z.getDisplayUserMode(),
                displayNameMode: S.Z.getDisplayNameMode(),
                avatarSizeMode: S.Z.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, O.QF)() ? (0, C.Z)(s) : null,
                stream: e
            };
        });
    return (0, i.jsx)(G, {
        ...d,
        application: c,
        ...e,
        sortedVoiceStates: l,
        channel: n,
        title: null != r ? r : '',
        streamMetadata: o,
        streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == o ? void 0 : o.sourceName
                  }
    });
}
