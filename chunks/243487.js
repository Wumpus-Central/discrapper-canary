r.d(t, {
    Z: () => J,
    k: () => H
}),
    r(47120);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    o = r.n(l),
    a = r(442837),
    c = r(481060),
    u = r(239091),
    s = r(765250),
    d = r(13245),
    p = r(872810),
    f = r(586902),
    O = r(835473),
    b = r(415635),
    y = r(933557),
    g = r(979264),
    v = r(701362),
    j = r(552282),
    m = r(565799),
    h = r(501655),
    P = r(184301),
    w = r(347475),
    I = r(470956),
    E = r(597998),
    S = r(199902),
    Z = r(314897),
    x = r(592125),
    C = r(355863),
    V = r(131951),
    N = r(944486),
    _ = r(979651),
    k = r(938475),
    D = r(237997),
    A = r(823379),
    W = r(136015),
    L = r(51144),
    M = r(145597),
    R = r(444295),
    G = r(804570),
    T = r(388627),
    F = r(981631),
    U = r(65154),
    z = r(388032),
    Q = r(136549);
function Y(e) {
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
function B(e, t) {
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
function K(e) {
    let { avatarSize: t, userId: r, channelId: i, guildId: l } = e,
        o = 2 * t,
        a = -(t / 2);
    return (0, n.jsx)('div', {
        className: Q.effect,
        style: {
            top: a,
            left: a,
            width: o,
            height: o
        },
        children: (0, n.jsx)(b.Z, {
            userId: r,
            channelId: i,
            guildId: l,
            containerDimensions: {
                width: o,
                height: o
            }
        })
    });
}
function q(e) {
    let { channel: t, flipped: r = !1, locked: l = !1, user: u, nick: s, displayNameMode: d, displayUserMode: O, size: b = F.ipw.LARGE, onClick: y, onContextMenu: j, context: m, guildId: h, isSettingsPreview: P = !1, voiceState: w, showStreamPreview: I, onShowStreamPreview: x, onWatchStream: C } = e,
        N = (0, a.e7)([Z.default], () => Z.default.getId() === u.id, [u.id]),
        k = null == w ? void 0 : w.sessionId,
        D = t.id,
        A = u.id,
        [L] = (0, a.e7)(
            [_.Z],
            () => {
                var e;
                return [null !== (e = _.Z.getVoiceStateForChannel(D, A)) && void 0 !== e ? e : _.Z.getVoiceStateForSession(A, k), _.Z.getVoiceStateVersion()];
            },
            [D, A, k],
            W.Q
        ),
        M = P ? w : null != L ? L : w,
        [G, T, U] = (0, a.Wu)([V.Z], () => (N ? [!V.Z.isSupported() || V.Z.isSelfMute() || V.Z.isSelfMutedTemporarily(), V.Z.isSelfDeaf(), !1] : [!V.Z.isSupported() || V.Z.isLocalMute(u.id), !1, V.Z.isLocalVideoDisabled(u.id)]), [N, u.id]),
        z = (0, a.e7)(
            [S.Z],
            () => {
                let e = S.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== u.id && S.Z.getViewerIds(e).filter((e) => e === u.id).length > 0;
            },
            [u.id]
        ),
        Y = P && (null == w ? void 0 : w.discoverable),
        B =
            (0, f.Z)({
                userId: u.id,
                context: m
            }) || Y,
        q = (0, a.e7)([S.Z], () => S.Z.getStreamForUser(u.id, h)),
        H = null != q,
        J = i.useCallback(() => {
            (I || null != H) && x(null);
        }, [x, I, H]),
        $ = i.useCallback(
            () =>
                (0, n.jsx)(v.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        null != q &&
                            ((0, p.rn)(q, {
                                forceMultiple: !0,
                                noFocus: !0
                            }),
                            J(),
                            C(null != q ? q : null));
                    },
                    onAction: () => C,
                    previewIsOpen: I,
                    location: F.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [u, t, q, I, J, C]
        ),
        X = i.useCallback(
            (e) => {
                l || null == j || j(e, u);
            },
            [l, j, u]
        ),
        ee = i.useCallback(() => {
            !l && null != H && x(u.id);
        }, [l, x, H, u]),
        et = l || P;
    if ((O === F.OYC.ONLY_WHILE_SPEAKING && et && !B) || null == M) return null;
    let er = b === F.ipw.LARGE ? 32 : 24;
    return (0, n.jsxs)(c.P3F, {
        className: o()(Q.voiceUser, {
            [Q.speaking]: B,
            [Q.interactive]: !l,
            [Q.flipped]: r
        }),
        onClick: l ? void 0 : (e) => (null == y ? void 0 : y(e, u)),
        onContextMenu: X,
        onMouseEnter: ee,
        onMouseLeave: J,
        children: [
            (0, n.jsx)(c.qEK, {
                className: Q.avatar,
                size: b === F.ipw.LARGE ? c.EFr.SIZE_32 : c.EFr.SIZE_24,
                src: u.getAvatarURL(h, er),
                'aria-hidden': !0
            }),
            (0, n.jsx)(K, {
                avatarSize: er,
                userId: u.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            et && (d === F.wC$.NEVER || (!B && d === F.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, n.jsx)(c.yRy, {
                      position: 'right',
                      renderPopout: $,
                      shouldShow: I,
                      onRequestClose: J,
                      spacing: 0,
                      children: () =>
                          (0, n.jsxs)(c.P3F, {
                              className: Q.username,
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
                                          contextGuildId: h,
                                          className: Q.clanTag,
                                          disableGuildProfile: !0,
                                          onShowProfile: () => {
                                              (0, R.Ws)(F.Odu.VOICE_V3, {
                                                  type: R.Qu.VOICE,
                                                  value: R.bk.PROFILE_OPENED,
                                                  userId: u.id
                                              });
                                          }
                                      }),
                                  (0, n.jsx)(E.nm, {
                                      guildId: h,
                                      user: u,
                                      video: M.selfVideo,
                                      isStreaming: H,
                                      className: Q.voiceIcons,
                                      iconClassName: Q.voiceIcon,
                                      isWatching: z,
                                      localMute: G && !N,
                                      localVideoDisabled: U,
                                      mute: M.isVoiceMuted(),
                                      deaf: M.isVoiceDeafened() || (T && !N),
                                      serverMute: M.mute || M.suppress,
                                      serverDeaf: M.deaf,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function H(e) {
    let { id: t, context: l = U.Yn.DEFAULT, channel: o, sortedVoiceStates: p, displayNameMode: f, displayUserMode: O, locked: b, pinned: y, guildId: g, showEmpty: v = !0, isPreviewingInGame: j, isSettingsPreview: m = !1, anchorLeft: h, avatarSizeMode: I } = e,
        [E, Z] = i.useState(null),
        [x, V] = i.useState(null);
    i.useEffect(() => {
        null != E &&
            (0, R.Ws)(F.Odu.VOICE_V3, {
                type: R.Qu.GO_LIVE,
                value: R.bk.STREAM_PREVIEWED
            });
    }, [E]);
    let N = (e) => {
            Z(e);
        },
        _ = (e, t) => {
            !m &&
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([r.e('79695'), r.e('6524')]).then(r.bind(r, 27900));
                    return (
                        (0, R.Ws)(F.Odu.VOICE_V3, {
                            type: R.Qu.VOICE,
                            value: R.bk.SETTINGS_OPENED,
                            userId: t.id
                        }),
                        (r) =>
                            (0, n.jsx)(
                                e,
                                B(Y({}, r), {
                                    user: t,
                                    channelId: null == o ? void 0 : o.id,
                                    guildId: null == o ? void 0 : o.guild_id,
                                    mediaEngineContext: l,
                                    onShowProfile: () => V(t.id),
                                    appContext: F.IlC.OVERLAY,
                                    onWatchStream: () => {
                                        (0, R.Ws)(F.Odu.VOICE_V3, {
                                            type: R.Qu.GO_LIVE,
                                            value: R.bk.ENABLED,
                                            userId: t.id
                                        });
                                    }
                                })
                            )
                    );
                });
        },
        k = p.length > 0 && null != l && null != o && (!b || y),
        W = i.useCallback(
            (e) => {
                var r, n;
                let i = null === (r = C.Z.getWidget(t)) || void 0 === r ? void 0 : r.layoutId,
                    l = null != i ? (null === (n = C.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === F.Odu.GO_LIVE)) : null;
                null == l ||
                    l.pinned ||
                    ((0, s.xh)(l.id),
                    d.Z.track(F.rMx.OVERLAY_PIN_TOGGLED, {
                        pinned: !0,
                        guild_id: null == o ? void 0 : o.guild_id,
                        channel_id: null == o ? void 0 : o.id,
                        channel_type: null == o ? void 0 : o.type,
                        widget_type: F.Odu.GO_LIVE
                    })),
                    null != e &&
                        null != l &&
                        (0, R.Ws)(F.Odu.VOICE_V3, {
                            type: R.Qu.GO_LIVE,
                            value: R.bk.ENABLED,
                            userId: e.ownerId
                        });
            },
            [o, t]
        );
    i.useEffect(() => {
        b && V(null);
    }, [b]);
    let M = (0, R.ee)(
            () =>
                new Set(
                    p.map((e) => {
                        let { user: t } = e;
                        return null == t ? void 0 : t.id;
                    })
                ),
            [p]
        ),
        T = (0, a.Wu)(
            [S.Z],
            () =>
                Array.from(M)
                    .map((e) => S.Z.getStreamForUser(e, g))
                    .filter(A.lm)
                    .map((e) => e.ownerId),
            [g, M]
        );
    return (
        i.useEffect(() => {
            k &&
                (0, R.zi)(F.Odu.VOICE_V3, {
                    locked: D.Z.isInstanceLocked(),
                    shownUserIds: Array.from(M),
                    liveUserIds: T,
                    contentInventoryIds: []
                });
        }, [M, T, k]),
        k
            ? (0, n.jsx)(n.Fragment, {
                  children: p.map((e) => {
                      let { user: t, voiceState: r, member: i } = e;
                      if (null == t) return null;
                      let a = b || j;
                      return (0, n.jsx)(
                          c.yRy,
                          {
                              preload: () =>
                                  (0, P.Z)(t, {
                                      guildId: o.guild_id,
                                      channelId: o.id
                                  }),
                              renderPopout: (e) =>
                                  (0, n.jsx)(
                                      w.Z,
                                      B(Y({}, e), {
                                          userId: t.id,
                                          guildId: o.guild_id,
                                          channelId: o.id,
                                          appContext: F.IlC.OVERLAY
                                      })
                                  ),
                              position: 'right',
                              shouldShow: x === t.id,
                              onRequestClose: () => V(null),
                              spacing: 24,
                              children: () => {
                                  var e;
                                  return (0, n.jsx)(q, {
                                      guildId: null == o ? void 0 : o.guild_id,
                                      user: t,
                                      nick: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : L.ZP.getName(t),
                                      flipped: !h,
                                      voiceState: r,
                                      displayNameMode: f,
                                      displayUserMode: O,
                                      size: I,
                                      locked: a,
                                      onContextMenu: _,
                                      onClick: _,
                                      context: l,
                                      channel: o,
                                      showStreamPreview: t.id === E,
                                      onShowStreamPreview: N,
                                      onWatchStream: W,
                                      isSettingsPreview: m
                                  });
                              }
                          },
                          t.id
                      );
                  })
              })
            : b || !v
              ? null
              : (0, n.jsx)(G.E, {
                    emptyText: z.NW.string(z.t.hEh0l5),
                    icon: c.gj8
                })
    );
}
function J(e) {
    var t;
    let { isSettingsPreview: r } = e,
        i = (0, a.e7)([N.Z, x.Z], () => x.Z.getChannel(N.Z.getVoiceChannelId())),
        l = (0, y.ZP)(i),
        o = (function () {
            let e = (0, a.e7)([N.Z, x.Z], () => x.Z.getChannel(N.Z.getVoiceChannelId())),
                [t] = (0, a.e7)(
                    [k.ZP, m.Z, N.Z, x.Z],
                    () => {
                        let e = x.Z.getChannel(N.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [m.Z.getMutableParticipants(e.id, h.pV.SPEAKER), m.Z.getParticipantsVersion(e.id)] : [k.ZP.getVoiceStatesForChannel(e), k.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    W.Q
                );
            return (0, I.Es)(null == e ? void 0 : e.id, t);
        })(),
        c = (0, a.e7)([S.Z], () => S.Z.getStreamerActiveStreamMetadata()),
        u = (0, T.II)(),
        s = (0, O.q)(null == u ? void 0 : u.id),
        d = (0, a.cj)([S.Z, D.Z], () => {
            let e = S.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: D.Z.getDisplayUserMode(),
                displayNameMode: D.Z.getDisplayNameMode(),
                avatarSizeMode: D.Z.getAvatarSizeMode(),
                streamApplication: (null == c ? void 0 : c.pid) === (0, M.QF)() ? (0, j.Z)(u) : null,
                stream: e
            };
        });
    return (0, n.jsx)(
        H,
        B(Y(B(Y({}, d), { application: s }), e), {
            sortedVoiceStates: o,
            channel: i,
            guildId: null == i ? void 0 : i.guild_id,
            title: null != l ? l : '',
            streamMetadata: c,
            streamApplication:
                null !== (t = d.streamApplication) && void 0 !== t
                    ? t
                    : {
                          id: null,
                          name: null == c ? void 0 : c.sourceName
                      },
            isSettingsPreview: r
        })
    );
}
