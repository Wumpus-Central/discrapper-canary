n.d(t, { Z: () => B }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(481060),
    c = n(239091),
    d = n(765250),
    u = n(13245),
    h = n(872810),
    _ = n(586902),
    m = n(835473),
    g = n(415635),
    p = n(933557),
    f = n(979264),
    x = n(701362),
    v = n(552282),
    C = n(565799),
    b = n(501655),
    Z = n(597998),
    I = n(199902),
    j = n(314897),
    w = n(592125),
    y = n(355863),
    E = n(131951),
    k = n(944486),
    N = n(979651),
    S = n(938475),
    T = n(237997),
    O = n(136015),
    P = n(51144),
    L = n(145597),
    A = n(804570),
    R = n(388627),
    V = n(981631),
    W = n(65154),
    M = n(388032),
    D = n(882110);
function z(e) {
    let { avatarSize: t, userId: n, channelId: r, guildId: o } = e,
        a = 2 * t,
        l = -(t / 2);
    return (0, i.jsx)('div', {
        className: D.effect,
        style: {
            top: l,
            left: l,
            width: a,
            height: a
        },
        children: (0, i.jsx)(g.Z, {
            userId: n,
            channelId: r,
            guildId: o,
            containerDimensions: {
                width: a,
                height: a
            }
        })
    });
}
function F(e) {
    let { channel: t, flipped: n = !1, locked: o = !1, user: c, nick: d, displayNameMode: u, displayUserMode: m, size: g = V.ipw.LARGE, onClick: p, onContextMenu: v, context: C, guildId: b, voiceState: w, showStreamPreview: y, onShowStreamPreview: k, onWatchStream: S } = e,
        T = (0, l.e7)([j.default], () => j.default.getId() === c.id, [c.id]),
        O = null == w ? void 0 : w.sessionId,
        P = (0, l.e7)([N.Z], () => N.Z.getVoiceStateForSession(c.id, O), [O, c.id]),
        [L, A, R] = (0, l.Wu)([E.Z], () => (T ? [!E.Z.isSupported() || E.Z.isSelfMute() || E.Z.isSelfMutedTemporarily(), E.Z.isSelfDeaf(), !1] : [!E.Z.isSupported() || E.Z.isLocalMute(c.id), !1, E.Z.isLocalVideoDisabled(c.id)]), [T, c.id]),
        W = (0, l.e7)([I.Z], () => I.Z.getCurrentUserActiveStream()),
        M = (0, l.Wu)([I.Z], () => (null != W ? I.Z.getViewerIds(W) : [])),
        F = (0, _.Z)({
            userId: c.id,
            context: C
        }),
        G = (0, l.e7)([I.Z], () => I.Z.getStreamForUser(c.id, b)),
        B = null != G,
        U = r.useMemo(() => null != W && W.ownerId !== c.id && M.includes(c.id), [W, c.id, M]),
        H = r.useCallback(() => k(null), [k]),
        Y = r.useCallback(
            () =>
                (0, i.jsx)(x.Z, {
                    user: c,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(G, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            H(),
                            S();
                    },
                    onAction: S,
                    previewIsOpen: y,
                    location: V.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [c, t, G, y, H, S]
        );
    if ((m === V.OYC.ONLY_WHILE_SPEAKING && o && !F) || null == P) return null;
    let { mute: X, suppress: K, deaf: Q } = P,
        q = g === V.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.P3F, {
        className: a()(D.voiceUser, {
            [D.speaking]: F,
            [D.interactive]: !o,
            [D.flipped]: n
        }),
        onClick: o ? void 0 : (e) => (null == p ? void 0 : p(e, c)),
        onContextMenu: o ? void 0 : (e) => (null == v ? void 0 : v(e, c)),
        onMouseEnter: () => k(c.id),
        onMouseLeave: H,
        children: [
            (0, i.jsx)(s.qEK, {
                className: D.avatar,
                size: g === V.ipw.LARGE ? s.EFr.SIZE_32 : s.EFr.SIZE_24,
                src: c.getAvatarURL(b, q),
                'aria-hidden': !0
            }),
            (0, i.jsx)(z, {
                avatarSize: q,
                userId: c.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            o && (u === V.wC$.NEVER || (!F && u === V.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.yRy, {
                      position: 'right',
                      renderPopout: Y,
                      shouldShow: y,
                      onRequestClose: H,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.P3F, {
                              className: D.username,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: d
                                  }),
                                  (0, i.jsx)(f.ZP, {
                                      primaryGuild: c.primaryGuild,
                                      userId: c.id,
                                      contextGuildId: b,
                                      className: D.clanTag
                                  }),
                                  (0, i.jsx)(Z.nm, {
                                      guildId: b,
                                      user: c,
                                      video: P.selfVideo,
                                      isStreaming: B,
                                      className: D.voiceIcons,
                                      iconClassName: D.voiceIcon,
                                      isWatching: U,
                                      localMute: L && !T,
                                      localVideoDisabled: R,
                                      mute: X || L,
                                      deaf: Q || A,
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
    let { id: t, context: o = W.Yn.DEFAULT, channel: a, sortedVoiceStates: l, displayNameMode: h, displayUserMode: _, locked: m, pinned: g, isPreviewingInGame: p, anchorLeft: f, avatarSizeMode: x } = e,
        [v, C] = r.useState(null),
        b = (e, t) => {
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
        Z = l.length > 0 && null != o && null != a && (!m || g),
        I = r.useCallback(() => {
            var e, n;
            let i = null === (e = y.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                r = null != i ? (null === (n = y.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === V.Odu.GO_LIVE)) : null;
            null == r ||
                r.pinned ||
                ((0, d.xh)(r.id),
                u.Z.track(V.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == a ? void 0 : a.guild_id,
                    channel_id: null == a ? void 0 : a.id,
                    channel_type: null == a ? void 0 : a.type,
                    widget_type: V.Odu.GO_LIVE
                }));
        }, [a, t]);
    return Z
        ? (0, i.jsx)(i.Fragment, {
              children: l.map((e) => {
                  var t;
                  let { user: n, voiceState: r, member: l } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            F,
                            {
                                guildId: null == a ? void 0 : a.guild_id,
                                user: n,
                                nick: null !== (t = null == l ? void 0 : l.nick) && void 0 !== t ? t : P.ZP.getName(n),
                                flipped: !f,
                                voiceState: r,
                                displayNameMode: h,
                                displayUserMode: _,
                                size: x,
                                locked: m || p,
                                onContextMenu: b,
                                onClick: b,
                                context: o,
                                channel: a,
                                showStreamPreview: n.id === v,
                                onShowStreamPreview: C,
                                onWatchStream: I
                            },
                            n.id
                        );
              })
          })
        : m
          ? null
          : (0, i.jsx)(A.E, {
                emptyText: M.intl.string(M.t.hEh0l5),
                icon: s.gj8
            });
}
function B(e) {
    var t;
    let n = (0, l.e7)([k.Z, w.Z], () => w.Z.getChannel(k.Z.getVoiceChannelId())),
        r = (0, p.ZP)(n),
        o = (function () {
            let [e] = (0, l.e7)(
                [S.ZP, C.Z, k.Z, w.Z],
                () => {
                    let e = w.Z.getChannel(k.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [C.Z.getMutableParticipants(e.id, b.pV.SPEAKER), C.Z.getParticipantsVersion(e.id)] : [S.ZP.getVoiceStatesForChannel(e), S.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                O.Q
            );
            return e;
        })(),
        a = (0, l.e7)([I.Z], () => I.Z.getStreamerActiveStreamMetadata()),
        s = (0, R.II)(),
        c = (0, m.q)(null == s ? void 0 : s.id),
        d = (0, l.cj)([I.Z, T.Z], () => {
            let e = I.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: T.Z.getDisplayUserMode(),
                displayNameMode: T.Z.getDisplayNameMode(),
                avatarSizeMode: T.Z.getAvatarSizeMode(),
                streamApplication: (null == a ? void 0 : a.pid) === (0, L.QF)() ? (0, v.Z)(s) : null,
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
        streamMetadata: a,
        streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == a ? void 0 : a.sourceName
                  }
    });
}
