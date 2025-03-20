n.d(t, {
    Z: () => F,
    k: () => G
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(586902),
    u = n(835473),
    d = n(289823),
    p = n(933557),
    f = n(552282),
    g = n(763296),
    O = n(565799),
    m = n(501655),
    b = n(470956),
    y = n(199902),
    v = n(314897),
    h = n(592125),
    j = n(944486),
    P = n(606304),
    w = n(594174),
    x = n(979651),
    S = n(938475),
    I = n(237997),
    E = n(823379),
    Z = n(136015),
    N = n(145597),
    C = n(444295),
    V = n(804570),
    k = n(388627),
    D = n(532658),
    _ = n(981631),
    M = n(65154),
    A = n(388032),
    W = n(123695);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: i, locked: o } = e,
        c = (0, D.e5)(i),
        u = (0, a.Wu)(
            [w.default, h.Z],
            () =>
                t
                    .map((e) => {
                        var t;
                        let r = w.default.getUser(e);
                        if (null == r) return;
                        let i = h.Z.getChannel(null === (t = n.get(e)) || void 0 === t ? void 0 : t.voiceState.channelId);
                        return r.getAvatarURL(null == i ? void 0 : i.getGuildId(), c, !1);
                    })
                    .filter(E.lm),
            [t, n, c]
        );
    return (0, r.jsxs)('div', {
        className: l()(W.hiddenVoiceStates, o && W.locked),
        children: [
            (0, r.jsx)('div', {
                className: W.hiddenVoiceStatesAvatar,
                children: (0, r.jsx)(d.Z, {
                    size: i,
                    backSrc: u[0],
                    frontSrc: u[1],
                    isTyping: !1
                })
            }),
            (0, r.jsx)('div', {
                className: W.hiddenVoiceStatesText,
                children: (0, r.jsxs)(s.Text, {
                    variant: 'text-xs/medium',
                    children: ['+', t.length, ' others in voice']
                })
            })
        ]
    });
}
let G = i.memo(function (e) {
    let { id: t, context: n = M.Yn.DEFAULT, channel: o, overlayVoiceStates: l, displayNameMode: c, displayUserMode: u, locked: d, pinned: p, guildId: f, showEmpty: g = !0, isPreviewingInGame: O, isSettingsPreview: m = !1, anchorLeft: b, avatarSizeMode: v, maxDisplayedVoiceStates: h = 8 } = e,
        j = (0, C.ee)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(l),
            [l]
        ),
        [P, w] = l,
        x = w.length > 0 && null != n && null != o && (!d || p),
        S = (0, a.Wu)(
            [y.Z],
            () =>
                Array.from(j)
                    .map((e) => y.Z.getStreamForUser(e, f))
                    .filter(E.lm)
                    .map((e) => e.ownerId),
            [f, j]
        );
    i.useEffect(() => {
        x &&
            (0, C.zi)(_.Odu.VOICE_V3, {
                locked: I.default.isInstanceLocked(),
                shownUserIds: Array.from(j),
                liveUserIds: S,
                contentInventoryIds: []
            });
    }, [j, S, x]);
    let Z = w.slice(0, h),
        N = w.slice(h),
        k = P.get(N[0]);
    return x
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  Z.map((e) => {
                      let i = P.get(e);
                      return null == i
                          ? null
                          : (0, r.jsx)(
                                D.ZP,
                                {
                                    sortedVoiceState: i,
                                    channel: o,
                                    widgetId: t,
                                    flipped: !b,
                                    isPreviewingInGame: O,
                                    isSettingsPreview: m,
                                    context: n,
                                    size: v,
                                    displayNameMode: c,
                                    displayUserMode: u,
                                    locked: d
                                },
                                e
                            );
                  }),
                  1 === N.length &&
                      null != k &&
                      (0, r.jsx)(
                          D.ZP,
                          {
                              sortedVoiceState: k,
                              channel: o,
                              widgetId: t,
                              flipped: !b,
                              isPreviewingInGame: O,
                              isSettingsPreview: m,
                              context: n,
                              size: v,
                              displayNameMode: c,
                              displayUserMode: u,
                              locked: d
                          },
                          N[0]
                      ),
                  N.length > 1 &&
                      (0, r.jsx)(R, {
                          hiddenVoiceStates: N,
                          voiceStateMap: P,
                          size: (0, D.px)(v),
                          locked: d
                      })
              ]
          })
        : d || !g
          ? null
          : (0, r.jsx)(V.E, {
                emptyText: A.NW.string(A.t.hEh0l5),
                icon: s.gj8
            });
});
function F(e) {
    var t;
    let { isSettingsPreview: n } = e,
        o = (0, a.e7)([j.Z, h.Z], () => h.Z.getChannel(j.Z.getVoiceChannelId())),
        l = (0, p.ZP)(o),
        s = (function (e) {
            let t = (0, a.e7)([j.Z, h.Z], () => h.Z.getChannel(j.Z.getVoiceChannelId())),
                [n] = (0, a.e7)(
                    [S.ZP, O.Z, j.Z, h.Z],
                    () => {
                        let e = h.Z.getChannel(j.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, m.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [S.ZP.getVoiceStatesForChannel(e), S.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    Z.Q
                ),
                r = (0, b.Es)(null == t ? void 0 : t.id, n),
                o = i.useMemo(() => new Map(r.map((e) => [e.user.id, e])), [r]),
                l = (0, a.e7)([v.default], () => v.default.getId());
            return [
                o,
                (0, a.Wu)(
                    [x.Z, j.Z, P.Z, g.Z],
                    () => {
                        let t = Array.from(
                            r.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            })
                        );
                        if (t.length <= 8) return t;
                        let n = new Map();
                        for (let r of t) {
                            let t = (0, c.O)(
                                    {
                                        userId: r,
                                        checkSoundSharing: !0,
                                        checkSoundboardSounds: !1,
                                        checkIsMuted: !0,
                                        context: e
                                    },
                                    [x.Z, j.Z, P.Z, g.Z]
                                ),
                                i = r === l;
                            (t || i) &&
                                n.set(r, {
                                    isSpeaking: t,
                                    isCurrentUser: i
                                });
                        }
                        let i = [],
                            o = [],
                            a = [];
                        for (let e = 0; e < t.length; e++) {
                            let r = t[e],
                                l = n.get(r);
                            e < 8 ? i.push(r) : l && (l.isSpeaking || l.isCurrentUser) ? a.push(r) : o.push(r);
                        }
                        if (a.length > 0) {
                            let e = i.slice(0, 8 - a.length),
                                t = i.slice(8 - a.length);
                            return [...e, ...a, ...t, ...o];
                        }
                        return t;
                    },
                    [r, e, l]
                )
            ];
        })(M.Yn.DEFAULT),
        d = (0, a.e7)([y.Z], () => y.Z.getStreamerActiveStreamMetadata()),
        w = (0, k.II)(),
        E = (0, u.q)(null == w ? void 0 : w.id),
        C = (0, a.cj)([y.Z, I.default], () => {
            let e = y.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: I.default.getDisplayUserMode(),
                displayNameMode: I.default.getDisplayNameMode(),
                avatarSizeMode: I.default.getAvatarSizeMode(),
                streamApplication: (null == d ? void 0 : d.pid) === (0, N.getPID)() ? (0, f.Z)(w) : null,
                stream: e
            };
        });
    return (0, r.jsx)(
        G,
        L(T(L(T({}, C), { application: E }), e), {
            overlayVoiceStates: s,
            channel: o,
            guildId: null == o ? void 0 : o.guild_id,
            title: null != l ? l : '',
            streamMetadata: d,
            streamApplication:
                null !== (t = C.streamApplication) && void 0 !== t
                    ? t
                    : {
                          id: null,
                          name: null == d ? void 0 : d.sourceName
                      },
            isSettingsPreview: n
        })
    );
}
