r.d(t, {
    Z: () => J,
    k: () => B
}),
    r(47120);
var n = r(200651),
    i = r(192379),
    o = r(120356),
    l = r.n(o),
    a = r(442837),
    c = r(481060),
    u = r(239091),
    s = r(765250),
    d = r(13245),
    p = r(872810),
    f = r(586902),
    b = r(835473),
    O = r(415635),
    y = r(933557),
    g = r(979264),
    v = r(701362),
    j = r(552282),
    h = r(565799),
    m = r(501655),
    P = r(184301),
    w = r(347475),
    S = r(470956),
    I = r(597998),
    E = r(199902),
    Z = r(314897),
    x = r(592125),
    C = r(355863),
    N = r(131951),
    V = r(944486),
    _ = r(979651),
    k = r(938475),
    D = r(237997),
    A = r(823379),
    W = r(136015),
    M = r(51144),
    R = r(145597),
    L = r(444295),
    T = r(804570),
    G = r(388627),
    F = r(981631),
    U = r(65154),
    z = r(388032),
    Y = r(136549);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function q(e) {
    let { avatarSize: t, userId: r, channelId: i, guildId: o } = e,
        l = 2 * t,
        a = -(t / 2);
    return (0, n.jsx)('div', {
        className: Y.effect,
        style: {
            top: a,
            left: a,
            width: l,
            height: l
        },
        children: (0, n.jsx)(O.Z, {
            userId: r,
            channelId: i,
            guildId: o,
            containerDimensions: {
                width: l,
                height: l
            }
        })
    });
}
function H(e) {
    let { channel: t, flipped: r = !1, locked: o = !1, user: u, nick: s, displayNameMode: d, displayUserMode: b, size: O = F.ipw.LARGE, onClick: y, onContextMenu: j, context: h, guildId: m, isSettingsPreview: P = !1, voiceState: w, showStreamPreview: S, onShowStreamPreview: x, onWatchStream: C } = e,
        V = (0, a.e7)([Z.default], () => Z.default.getId() === u.id, [u.id]),
        k = null == w ? void 0 : w.sessionId,
        D = t.id,
        A = u.id,
        [M] = (0, a.e7)(
            [_.Z],
            () => {
                var e;
                return [null !== (e = _.Z.getVoiceStateForChannel(D, A)) && void 0 !== e ? e : _.Z.getVoiceStateForSession(A, k), _.Z.getVoiceStateVersion()];
            },
            [D, A, k],
            W.Q
        ),
        R = P ? w : null != M ? M : w,
        [T, G, U] = (0, a.Wu)([N.Z], () => (V ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(u.id), !1, N.Z.isLocalVideoDisabled(u.id)]), [V, u.id]),
        z = (0, a.e7)(
            [E.Z],
            () => {
                let e = E.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== u.id && E.Z.getViewerIds(e).filter((e) => e === u.id).length > 0;
            },
            [u.id]
        ),
        Q = P && (null == w ? void 0 : w.discoverable),
        K =
            (0, f.Z)({
                userId: u.id,
                context: h
            }) || Q,
        H = (0, a.e7)([E.Z], () => E.Z.getStreamForUser(u.id, m)),
        B = null != H,
        J = i.useCallback(() => {
            (S || null != B) && x(null);
        }, [x, S, B]),
        $ = i.useCallback(
            () =>
                (0, n.jsx)(v.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        (0, p.rn)(H, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            J(),
                            C();
                    },
                    onAction: C,
                    previewIsOpen: S,
                    location: F.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [u, t, H, S, J, C]
        ),
        X = o || P;
    if ((b === F.OYC.ONLY_WHILE_SPEAKING && X && !K) || null == R) return null;
    let ee = O === F.ipw.LARGE ? 32 : 24;
    return (0, n.jsxs)(c.P3F, {
        className: l()(Y.voiceUser, {
            [Y.speaking]: K,
            [Y.interactive]: !o,
            [Y.flipped]: r
        }),
        onClick: o ? void 0 : (e) => (null == y ? void 0 : y(e, u)),
        onContextMenu: o ? void 0 : (e) => (null == j ? void 0 : j(e, u)),
        onMouseEnter: () => null != B && x(u.id),
        onMouseLeave: J,
        children: [
            (0, n.jsx)(c.qEK, {
                className: Y.avatar,
                size: O === F.ipw.LARGE ? c.EFr.SIZE_32 : c.EFr.SIZE_24,
                src: u.getAvatarURL(m, ee),
                'aria-hidden': !0
            }),
            (0, n.jsx)(q, {
                avatarSize: ee,
                userId: u.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            X && (d === F.wC$.NEVER || (!K && d === F.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, n.jsx)(c.yRy, {
                      position: 'right',
                      renderPopout: $,
                      shouldShow: S,
                      onRequestClose: J,
                      spacing: 0,
                      children: () =>
                          (0, n.jsxs)(c.P3F, {
                              className: Y.username,
                              children: [
                                  (0, n.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: s
                                  }),
                                  !P &&
                                      (0, n.jsx)(g.ZP, {
                                          primaryGuild: u.primaryGuild,
                                          userId: u.id,
                                          contextGuildId: m,
                                          className: Y.clanTag,
                                          disableGuildProfile: !0,
                                          onShowProfile: () => {
                                              (0, L.Ws)(F.Odu.VOICE_V3, {
                                                  type: L.Qu.VOICE,
                                                  value: L.bk.PROFILE_OPENED,
                                                  userId: u.id
                                              });
                                          }
                                      }),
                                  (0, n.jsx)(I.nm, {
                                      guildId: m,
                                      user: u,
                                      video: R.selfVideo,
                                      isStreaming: B,
                                      className: Y.voiceIcons,
                                      iconClassName: Y.voiceIcon,
                                      isWatching: z,
                                      localMute: T && !V,
                                      localVideoDisabled: U,
                                      mute: R.isVoiceMuted(),
                                      deaf: R.isVoiceDeafened() || (G && !V),
                                      serverMute: R.mute || R.suppress,
                                      serverDeaf: R.deaf,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function B(e) {
    let { id: t, context: o = U.Yn.DEFAULT, channel: l, sortedVoiceStates: a, displayNameMode: p, displayUserMode: f, locked: b, pinned: O, isPreviewingInGame: y, isSettingsPreview: g = !1, anchorLeft: v, avatarSizeMode: j } = e,
        [h, m] = i.useState(null),
        [S, I] = i.useState(null),
        E = (e) => {
            m(e),
                null != e &&
                    (0, L.Ws)(F.Odu.VOICE_V3, {
                        type: L.Qu.GO_LIVE,
                        value: L.bk.STREAM_PREVIEWED,
                        userId: e
                    });
        },
        Z = (e, t) => {
            !g &&
                ((0, L.Ws)(F.Odu.VOICE_V3, {
                    type: L.Qu.VOICE,
                    value: L.bk.SETTINGS_OPENED,
                    userId: t.id
                }),
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([r.e('79695'), r.e('6524')]).then(r.bind(r, 27900));
                    return (r) =>
                        (0, n.jsx)(
                            e,
                            K(Q({}, r), {
                                user: t,
                                channelId: null == l ? void 0 : l.id,
                                guildId: null == l ? void 0 : l.guild_id,
                                mediaEngineContext: o,
                                onShowProfile: () => I(t.id),
                                appContext: F.IlC.OVERLAY
                            })
                        );
                }));
        },
        x = a.length > 0 && null != o && null != l && (!b || O),
        N = i.useCallback(() => {
            var e, r;
            let n = null === (e = C.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                i = null != n ? (null === (r = C.Z.getWidgetsForLayout(n)) || void 0 === r ? void 0 : r.find((e) => e.type === F.Odu.GO_LIVE)) : null;
            null == i ||
                i.pinned ||
                ((0, s.xh)(i.id),
                d.Z.track(F.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == l ? void 0 : l.guild_id,
                    channel_id: null == l ? void 0 : l.id,
                    channel_type: null == l ? void 0 : l.type,
                    widget_type: F.Odu.GO_LIVE
                }));
        }, [l, t]);
    return (
        i.useEffect(() => {
            b && I(null);
        }, [b]),
        x
            ? (0, n.jsx)(n.Fragment, {
                  children: a.map((e) => {
                      let { user: t, voiceState: r, member: i } = e;
                      if (null == t) return null;
                      let a = b || y;
                      return (0, n.jsx)(
                          c.yRy,
                          {
                              preload: () =>
                                  (0, P.Z)(t, {
                                      guildId: l.guild_id,
                                      channelId: l.id
                                  }),
                              renderPopout: (e) =>
                                  (0, n.jsx)(
                                      w.Z,
                                      K(Q({}, e), {
                                          userId: t.id,
                                          guildId: l.guild_id,
                                          channelId: l.id,
                                          appContext: F.IlC.OVERLAY
                                      })
                                  ),
                              position: 'right',
                              shouldShow: S === t.id,
                              onRequestClose: () => I(null),
                              spacing: 24,
                              children: () => {
                                  var e;
                                  return (0, n.jsx)(H, {
                                      guildId: null == l ? void 0 : l.guild_id,
                                      user: t,
                                      nick: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : M.ZP.getName(t),
                                      flipped: !v,
                                      voiceState: r,
                                      displayNameMode: p,
                                      displayUserMode: f,
                                      size: j,
                                      locked: a,
                                      onContextMenu: Z,
                                      onClick: Z,
                                      context: o,
                                      channel: l,
                                      showStreamPreview: t.id === h,
                                      onShowStreamPreview: E,
                                      onWatchStream: N,
                                      isSettingsPreview: g
                                  });
                              }
                          },
                          t.id
                      );
                  })
              })
            : b
              ? null
              : (0, n.jsx)(T.E, {
                    emptyText: z.NW.string(z.t.hEh0l5),
                    icon: c.gj8
                })
    );
}
function J(e) {
    var t;
    let { locked: r, pinned: o, isSettingsPreview: l } = e,
        c = (0, a.e7)([V.Z, x.Z], () => x.Z.getChannel(V.Z.getVoiceChannelId())),
        u = (0, y.ZP)(c),
        s = (function () {
            let e = (0, a.e7)([V.Z, x.Z], () => x.Z.getChannel(V.Z.getVoiceChannelId())),
                [t] = (0, a.e7)(
                    [k.ZP, h.Z, V.Z, x.Z],
                    () => {
                        let e = x.Z.getChannel(V.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [h.Z.getMutableParticipants(e.id, m.pV.SPEAKER), h.Z.getParticipantsVersion(e.id)] : [k.ZP.getVoiceStatesForChannel(e), k.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    W.Q
                );
            return (0, S.Es)(null == e ? void 0 : e.id, t);
        })(),
        d = (0, a.e7)([E.Z], () => E.Z.getStreamerActiveStreamMetadata()),
        p = (0, G.II)(),
        [f, O] = i.useState(new Set()),
        g = null == c ? void 0 : c.guild_id;
    i.useEffect(() => {
        let e = s.map((e) => {
            let { user: t } = e;
            return null == t ? void 0 : t.id;
        });
        O((t) => {
            let r = new Set(e);
            return Array.from(t).filter((e) => !r.has(e)).length > 0 || Array.from(r).filter((e) => !t.has(e)).length > 0 ? r : t;
        });
    }, [s]);
    let v = (0, a.Wu)(
            [E.Z],
            () =>
                Array.from(f)
                    .map((e) => E.Z.getStreamForUser(e, g))
                    .filter(A.lm)
                    .map((e) => e.ownerId),
            [f, g]
        ),
        P = o || !r;
    i.useEffect(() => {
        P &&
            (0, L.zi)(F.Odu.VOICE_V3, {
                locked: D.Z.isInstanceLocked(),
                shownUserIds: Array.from(f),
                liveUserIds: v,
                contentInventoryIds: []
            });
    }, [f, v, P]);
    let w = (0, b.q)(null == p ? void 0 : p.id),
        I = (0, a.cj)([E.Z, D.Z], () => {
            let e = E.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: D.Z.getDisplayUserMode(),
                displayNameMode: D.Z.getDisplayNameMode(),
                avatarSizeMode: D.Z.getAvatarSizeMode(),
                streamApplication: (null == d ? void 0 : d.pid) === (0, R.QF)() ? (0, j.Z)(p) : null,
                stream: e
            };
        });
    return (0, n.jsx)(
        B,
        K(Q(K(Q({}, I), { application: w }), e), {
            sortedVoiceStates: s,
            channel: c,
            title: null != u ? u : '',
            streamMetadata: d,
            streamApplication:
                null !== (t = I.streamApplication) && void 0 !== t
                    ? t
                    : {
                          id: null,
                          name: null == d ? void 0 : d.sourceName
                      },
            isSettingsPreview: l
        })
    );
}
