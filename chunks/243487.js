n.d(t, {
    Z: function () {
        return B;
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
    W = n(882110);
function z(e) {
    let { avatarSize: t, userId: n, channelId: r, guildId: o } = e,
        l = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: W.effect,
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
function F(e) {
    let { channel: t, flipped: n = !1, locked: o = !1, user: c, nick: d, displayNameMode: u, displayUserMode: p, size: x = M.ipw.LARGE, onClick: f, onContextMenu: C, context: Z, guildId: _, voiceState: E, showStreamPreview: k, onShowStreamPreview: w, onWatchStream: T } = e,
        S = (0, a.e7)([I.default], () => I.default.getId() === c.id, [c.id]),
        L = null == E ? void 0 : E.sessionId,
        A = (0, a.e7)([y.Z], () => y.Z.getVoiceStateForSession(c.id, L), [L, c.id]),
        [O, P, V] = (0, a.Wu)([N.Z], () => (S ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(c.id), !1, N.Z.isLocalVideoDisabled(c.id)]), [S, c.id]),
        R = (0, a.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
        D = (0, a.Wu)([j.Z], () => (null != R ? j.Z.getViewerIds(R) : [])),
        F = (0, m.Z)({
            userId: c.id,
            context: Z
        }),
        G = (0, a.e7)([j.Z], () => j.Z.getStreamForUser(c.id, _)),
        B = null != G,
        U = r.useMemo(() => null != R && R.ownerId !== c.id && D.includes(c.id), [R, c.id, D]),
        Y = r.useCallback(() => w(null), [w]),
        H = r.useCallback(
            () =>
                (0, i.jsx)(g.Z, {
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
    if ((p === M.OYC.ONLY_WHILE_SPEAKING && o && !F) || null == A) return null;
    let { mute: X, suppress: K, deaf: Q } = A,
        q = x === M.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.Clickable, {
        className: l()(W.voiceUser, {
            [W.speaking]: F,
            [W.interactive]: !o,
            [W.flipped]: n
        }),
        onClick: o ? void 0 : (e) => (null == f ? void 0 : f(e, c)),
        onContextMenu: o ? void 0 : (e) => (null == C ? void 0 : C(e, c)),
        onMouseEnter: () => w(c.id),
        onMouseLeave: Y,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: W.avatar,
                size: x === M.ipw.LARGE ? s.AvatarSizes.SIZE_32 : s.AvatarSizes.SIZE_24,
                src: c.getAvatarURL(_, q),
                'aria-hidden': !0
            }),
            (0, i.jsx)(z, {
                avatarSize: q,
                userId: c.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            o && (u === M.wC$.NEVER || (!F && u === M.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.Popout, {
                      position: 'right',
                      renderPopout: H,
                      shouldShow: k,
                      onRequestClose: Y,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.Clickable, {
                              className: W.username,
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
                                      className: W.clanTag
                                  }),
                                  (0, i.jsx)(b.nm, {
                                      guildId: _,
                                      user: c,
                                      video: A.selfVideo,
                                      isStreaming: B,
                                      className: W.voiceIcons,
                                      iconClassName: W.voiceIcon,
                                      isWatching: U,
                                      localMute: O && !S,
                                      localVideoDisabled: V,
                                      mute: X || O,
                                      deaf: Q || P,
                                      serverMute: X || K,
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
    let { id: t, context: o = R.Yn.DEFAULT, channel: l, sortedVoiceStates: a, displayNameMode: h, displayUserMode: m, locked: p, pinned: x, isPreviewingInGame: f, anchorLeft: v, avatarSizeMode: g } = e,
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
                r = null != i ? (null === (n = k.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === M.Odu.GO_LIVE)) : null;
            null != r &&
                !r.pinned &&
                ((0, d.xh)(r.id),
                u.Z.track(M.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == l ? void 0 : l.guild_id,
                    channel_id: null == l ? void 0 : l.id,
                    channel_type: null == l ? void 0 : l.type,
                    widget_type: M.Odu.GO_LIVE
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
                            F,
                            {
                                guildId: null == l ? void 0 : l.guild_id,
                                user: n,
                                nick: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : A.ZP.getName(n),
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
          : (0, i.jsx)(P.E, {
                emptyText: D.intl.string(D.t.hEh0l5),
                icon: s.VoiceNormalIcon
            });
}
function B(e) {
    var t;
    let n = (0, a.e7)([w.Z, E.Z], () => E.Z.getChannel(w.Z.getVoiceChannelId())),
        r = (0, f.ZP)(n),
        o = (function () {
            let [e] = (0, a.e7)(
                [T.ZP, Z.Z, w.Z, E.Z],
                () => {
                    let e = E.Z.getChannel(w.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [Z.Z.getMutableParticipants(e.id, _.pV.SPEAKER), Z.Z.getParticipantsVersion(e.id)] : [T.ZP.getVoiceStatesForChannel(e), T.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                L.Q
            );
            return e;
        })(),
        l = (0, a.e7)([j.Z], () => j.Z.getStreamerActiveStreamMetadata()),
        s = (0, V.II)(),
        c = (0, p.q)(null == s ? void 0 : s.id),
        d = (0, a.cj)([j.Z, S.Z], () => {
            let e = j.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: S.Z.getDisplayUserMode(),
                displayNameMode: S.Z.getDisplayNameMode(),
                avatarSizeMode: S.Z.getAvatarSizeMode(),
                streamApplication: (null == l ? void 0 : l.pid) === (0, O.QF)() ? (0, C.Z)(s) : null,
                stream: e
            };
        });
    return (0, i.jsx)(G, {
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
