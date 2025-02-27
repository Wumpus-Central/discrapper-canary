r.d(t, {
    Z: () => U,
    k: () => G
}),
    r(47120),
    r(653041);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    o = r.n(l),
    a = r(442837),
    c = r(481060),
    u = r(586902),
    s = r(835473),
    d = r(289823),
    p = r(933557),
    f = r(552282),
    b = r(763296),
    O = r(565799),
    g = r(501655),
    y = r(470956),
    v = r(199902),
    j = r(314897),
    h = r(592125),
    m = r(944486),
    P = r(606304),
    w = r(594174),
    S = r(979651),
    I = r(938475),
    E = r(237997),
    x = r(823379),
    Z = r(136015),
    C = r(145597),
    k = r(444295),
    N = r(804570),
    V = r(388627),
    D = r(532658),
    _ = r(981631),
    A = r(65154),
    M = r(388032),
    W = r(136549);
function L(e) {
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
function T(e, t) {
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
function R(e) {
    let { hiddenVoiceStates: t, voiceStateMap: r, size: i, locked: l } = e,
        u = (0, D.e5)(i),
        s = (0, a.Wu)(
            [w.default, h.Z],
            () =>
                t
                    .map((e) => {
                        var t;
                        let n = w.default.getUser(e);
                        if (null == n) return;
                        let i = h.Z.getChannel(null === (t = r.get(e)) || void 0 === t ? void 0 : t.voiceState.channelId);
                        return n.getAvatarURL(null == i ? void 0 : i.getGuildId(), u, !1);
                    })
                    .filter(x.lm),
            [t, r, u]
        );
    return (0, n.jsxs)('div', {
        className: o()(W.hiddenVoiceStates, l && W.locked),
        children: [
            (0, n.jsx)('div', {
                className: W.hiddenVoiceStatesAvatar,
                children: (0, n.jsx)(d.Z, {
                    size: i,
                    backSrc: s[0],
                    frontSrc: s[1],
                    isTyping: !1
                })
            }),
            (0, n.jsx)('div', {
                className: W.hiddenVoiceStatesText,
                children: (0, n.jsxs)(c.Text, {
                    variant: 'text-xs/medium',
                    children: ['+', t.length, ' others in voice']
                })
            })
        ]
    });
}
function G(e) {
    var t, r, l;
    let { id: o, context: u = A.Yn.DEFAULT, channel: s, overlayVoiceStates: d, displayNameMode: p, displayUserMode: f, locked: b, pinned: O, guildId: g, showEmpty: y = !0, isPreviewingInGame: j, isSettingsPreview: h = !1, anchorLeft: m, avatarSizeMode: P, maxDisplayedVoiceStates: w = 8 } = e,
        S = (0, k.ee)(
            () =>
                (function (e) {
                    let [t, r] = e;
                    return new Set(r);
                })(d),
            [d]
        ),
        [I, Z] = d,
        C = Z.length > 0 && null != u && null != s && (!b || O),
        V = (0, a.Wu)(
            [v.Z],
            () =>
                Array.from(S)
                    .map((e) => v.Z.getStreamForUser(e, g))
                    .filter(x.lm)
                    .map((e) => e.ownerId),
            [g, S]
        );
    i.useEffect(() => {
        C &&
            (0, k.zi)(_.Odu.VOICE_V3, {
                locked: E.default.isInstanceLocked(),
                shownUserIds: Array.from(S),
                liveUserIds: V,
                contentInventoryIds: []
            });
    }, [S, V, C]);
    let W = Z.slice(0, w),
        L = Z.slice(w);
    return C
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  W.map((e) => {
                      let t = I.get(e);
                      return null == t
                          ? null
                          : (0, n.jsx)(
                                D.ZP,
                                {
                                    user: t.user,
                                    voiceState: t.voiceState,
                                    member: t.member,
                                    channel: s,
                                    widgetId: o,
                                    flipped: !m,
                                    isPreviewingInGame: j,
                                    isSettingsPreview: h,
                                    context: u,
                                    size: P,
                                    displayNameMode: p,
                                    displayUserMode: f,
                                    locked: b
                                },
                                e
                            );
                  }),
                  1 === L.length &&
                      (0, n.jsx)(
                          D.ZP,
                          {
                              user: null === (t = I.get(L[0])) || void 0 === t ? void 0 : t.user,
                              voiceState: null === (r = I.get(L[0])) || void 0 === r ? void 0 : r.voiceState,
                              member: null === (l = I.get(L[0])) || void 0 === l ? void 0 : l.member,
                              channel: s,
                              widgetId: o,
                              flipped: !m,
                              isPreviewingInGame: j,
                              isSettingsPreview: h,
                              context: u,
                              size: P,
                              displayNameMode: p,
                              displayUserMode: f,
                              locked: b
                          },
                          L[0]
                      ),
                  L.length > 1 &&
                      (0, n.jsx)(R, {
                          hiddenVoiceStates: L,
                          voiceStateMap: I,
                          size: (0, D.px)(P),
                          locked: b
                      })
              ]
          })
        : b || !y
          ? null
          : (0, n.jsx)(N.E, {
                emptyText: M.NW.string(M.t.hEh0l5),
                icon: c.gj8
            });
}
function U(e) {
    var t;
    let { isSettingsPreview: r } = e,
        l = (0, a.e7)([m.Z, h.Z], () => h.Z.getChannel(m.Z.getVoiceChannelId())),
        o = (0, p.ZP)(l),
        c = (function (e) {
            let t = (0, a.e7)([m.Z, h.Z], () => h.Z.getChannel(m.Z.getVoiceChannelId())),
                [r] = (0, a.e7)(
                    [I.ZP, O.Z, m.Z, h.Z],
                    () => {
                        let e = h.Z.getChannel(m.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, g.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [I.ZP.getVoiceStatesForChannel(e), I.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    Z.Q
                ),
                n = (0, y.Es)(null == t ? void 0 : t.id, r),
                l = i.useMemo(() => new Map(n.map((e) => [e.user.id, e])), [n]),
                o = (0, a.e7)([j.default], () => j.default.getId());
            return [
                l,
                (0, a.Wu)(
                    [S.Z, m.Z, P.Z, b.Z],
                    () => {
                        let t = Array.from(
                            n.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            })
                        );
                        if (t.length <= 8) return t;
                        let r = new Map();
                        for (let n of t) {
                            let t = (0, u.O)(
                                    {
                                        userId: n,
                                        checkSoundSharing: !0,
                                        checkSoundboardSounds: !1,
                                        checkIsMuted: !0,
                                        context: e
                                    },
                                    [S.Z, m.Z, P.Z, b.Z]
                                ),
                                i = n === o;
                            (t || i) &&
                                r.set(n, {
                                    isSpeaking: t,
                                    isCurrentUser: i
                                });
                        }
                        let i = [],
                            l = [],
                            a = [];
                        for (let e = 0; e < t.length; e++) {
                            let n = t[e],
                                o = r.get(n);
                            e < 8 ? i.push(n) : o && (o.isSpeaking || o.isCurrentUser) ? a.push(n) : l.push(n);
                        }
                        if (a.length > 0) {
                            let e = i.slice(0, 8 - a.length),
                                t = i.slice(8 - a.length);
                            return [...e, ...a, ...t, ...l];
                        }
                        return t;
                    },
                    [n, e, o]
                )
            ];
        })(A.Yn.DEFAULT),
        d = (0, a.e7)([v.Z], () => v.Z.getStreamerActiveStreamMetadata()),
        w = (0, V.II)(),
        x = (0, s.q)(null == w ? void 0 : w.id),
        k = (0, a.cj)([v.Z, E.default], () => {
            let e = v.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: E.default.getDisplayUserMode(),
                displayNameMode: E.default.getDisplayNameMode(),
                avatarSizeMode: E.default.getAvatarSizeMode(),
                streamApplication: (null == d ? void 0 : d.pid) === (0, C.getPID)() ? (0, f.Z)(w) : null,
                stream: e
            };
        });
    return (0, n.jsx)(
        G,
        T(L(T(L({}, k), { application: x }), e), {
            overlayVoiceStates: c,
            channel: l,
            guildId: null == l ? void 0 : l.guild_id,
            title: null != o ? o : '',
            streamMetadata: d,
            streamApplication:
                null !== (t = k.streamApplication) && void 0 !== t
                    ? t
                    : {
                          id: null,
                          name: null == d ? void 0 : d.sourceName
                      },
            isSettingsPreview: r
        })
    );
}
