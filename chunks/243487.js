n.d(t, {
    ZP: () => Y,
    kI: () => z
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
    v = n(199902),
    y = n(314897),
    h = n(592125),
    j = n(944486),
    P = n(606304),
    x = n(594174),
    S = n(979651),
    w = n(938475),
    I = n(237997),
    E = n(823379),
    Z = n(136015),
    C = n(426563),
    N = n(145597),
    V = n(444295),
    k = n(804570),
    D = n(388627),
    A = n(532658),
    _ = n(501787),
    M = n(981631),
    W = n(65154),
    T = n(388032),
    L = n(606143);
function R(e) {
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
function G(e, t) {
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
let U = (e) => {
    let t = (null != e ? e : 0) % C.Z.DEFAULT_AVATARS.length;
    return C.Z.DEFAULT_AVATARS[t];
};
function F(e) {
    var t, n;
    let { hiddenVoiceStates: i, voiceStateMap: o, size: c, locked: u, flipped: p } = e,
        f = (0, A.e5)(c),
        g = (0, a.Wu)(
            [x.default, h.Z],
            () =>
                i
                    .map((e) => {
                        var t;
                        let n = x.default.getUser(e);
                        if (null == n) return;
                        let r = h.Z.getChannel(null === (t = o.get(e)) || void 0 === t ? void 0 : t.voiceState.channelId);
                        return n.getAvatarURL(null == r ? void 0 : r.getGuildId(), f, !1);
                    })
                    .filter(E.lm),
            [i, o, f]
        ),
        O = null !== (t = g[0]) && void 0 !== t ? t : U(0),
        m = null !== (n = g[1]) && void 0 !== n ? n : U(1);
    return (0, r.jsxs)('div', {
        className: l()(L.hiddenVoiceStates, u && L.locked, p && L.flipped),
        children: [
            (0, r.jsx)('div', {
                className: L.hiddenVoiceStatesAvatar,
                children: (0, r.jsx)(d.Z, {
                    size: c,
                    backSrc: O,
                    frontSrc: m,
                    isTyping: !1
                })
            }),
            (0, r.jsx)('div', {
                className: L.hiddenVoiceStatesText,
                children: (0, r.jsxs)(s.Text, {
                    variant: 'text-xs/medium',
                    children: ['+', i.length, ' others in voice']
                })
            })
        ]
    });
}
let z = i.memo(function (e) {
    let { id: t, context: n = W.Yn.DEFAULT, channel: o, overlayVoiceStates: l, displayNameMode: c, displayUserMode: u, locked: d, pinned: p, guildId: f, showEmpty: g = !0, isPreviewingInGame: O, isSettingsPreview: m = !1, anchorLeft: b, avatarSizeMode: y, maxDisplayedVoiceStates: h = _.At } = e,
        j = (0, V.ee)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(l),
            [l]
        ),
        [P, x] = l,
        S = x.length > 0 && null != n && null != o && (!d || p),
        w = (0, a.Wu)(
            [v.Z],
            () =>
                Array.from(j)
                    .map((e) => v.Z.getStreamForUser(e, f))
                    .filter(E.lm)
                    .map((e) => e.ownerId),
            [f, j]
        );
    i.useEffect(() => {
        S &&
            (0, V.zi)(M.Odu.VOICE_V3, {
                locked: I.default.isInstanceLocked(),
                shownUserIds: Array.from(j),
                liveUserIds: w,
                contentInventoryIds: []
            });
    }, [j, w, S]);
    let Z = h !== _.Og ? x.slice(0, h) : x,
        C = h !== _.Og ? x.slice(h) : [],
        N = P.get(C[0]),
        D = u === M.OYC.ALWAYS && h !== _.Og;
    return S
        ? (0, r.jsxs)('div', {
              className: L.voiceUserContainer,
              children: [
                  Z.map((e) => {
                      let i = P.get(e);
                      return null == i
                          ? null
                          : (0, r.jsx)(
                                A.ZP,
                                {
                                    sortedVoiceState: i,
                                    channel: o,
                                    widgetId: t,
                                    flipped: !b,
                                    isPreviewingInGame: O,
                                    isSettingsPreview: m,
                                    context: n,
                                    size: y,
                                    displayNameMode: c,
                                    displayUserMode: u,
                                    locked: d
                                },
                                e
                            );
                  }),
                  D &&
                      1 === C.length &&
                      null != N &&
                      (0, r.jsx)(
                          A.ZP,
                          {
                              sortedVoiceState: N,
                              channel: o,
                              widgetId: t,
                              flipped: !b,
                              isPreviewingInGame: O,
                              isSettingsPreview: m,
                              context: n,
                              size: y,
                              displayNameMode: c,
                              displayUserMode: u,
                              locked: d
                          },
                          C[0]
                      ),
                  D &&
                      C.length > 1 &&
                      (0, r.jsx)(F, {
                          hiddenVoiceStates: C,
                          voiceStateMap: P,
                          size: (0, A.px)(y),
                          locked: d,
                          flipped: !b
                      })
              ]
          })
        : d || !g
          ? null
          : (0, r.jsx)(k.E, {
                emptyText: T.NW.string(T.t.hEh0l5),
                icon: s.gj8
            });
});
function Y(e) {
    var t;
    let { isSettingsPreview: n } = e,
        o = (0, a.e7)([j.Z, h.Z], () => h.Z.getChannel(j.Z.getVoiceChannelId())),
        l = (0, p.ZP)(o),
        s = (function (e, t) {
            let n = (0, a.e7)([j.Z, h.Z], () => h.Z.getChannel(j.Z.getVoiceChannelId())),
                [r] = (0, a.e7)(
                    [w.ZP, O.Z, j.Z, h.Z],
                    () => {
                        let e = h.Z.getChannel(j.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, m.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [w.ZP.getVoiceStatesForChannel(e), w.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    Z.Q
                ),
                o = (0, b.Es)(null == n ? void 0 : n.id, r),
                l = i.useMemo(() => new Map(o.map((e) => [e.user.id, e])), [o]),
                s = (0, a.e7)([y.default], () => y.default.getId());
            return [
                l,
                (0, a.Wu)(
                    [S.Z, j.Z, P.Z, g.Z],
                    () => {
                        let n = Array.from(
                            o.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            })
                        );
                        if (t === _.Og || n.length <= t) return n;
                        let r = new Map();
                        for (let t of n) {
                            let n = (0, c.O)(
                                    {
                                        userId: t,
                                        checkSoundSharing: !0,
                                        checkSoundboardSounds: !1,
                                        checkIsMuted: !0,
                                        context: e
                                    },
                                    [S.Z, j.Z, P.Z, g.Z]
                                ),
                                i = t === s;
                            (n || i) &&
                                r.set(t, {
                                    isSpeaking: n,
                                    isCurrentUser: i
                                });
                        }
                        let i = [],
                            l = [],
                            a = [];
                        for (let e = 0; e < n.length; e++) {
                            let o = n[e],
                                s = r.get(o);
                            e < t ? i.push(o) : s && (s.isSpeaking || s.isCurrentUser) ? a.push(o) : l.push(o);
                        }
                        if (a.length > 0) {
                            let e = i.slice(0, t - a.length),
                                n = i.slice(t - a.length);
                            return [...e, ...a, ...n, ...l];
                        }
                        return n;
                    },
                    [o, e, s, t]
                )
            ];
        })(W.Yn.DEFAULT, e.maxDisplayedVoiceStates),
        d = (0, a.e7)([v.Z], () => v.Z.getStreamerActiveStreamMetadata()),
        x = (0, D.II)(),
        E = (0, u.q)(null == x ? void 0 : x.id),
        C = (0, a.cj)([v.Z, I.default], () => {
            let e = v.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: I.default.getDisplayUserMode(),
                displayNameMode: I.default.getDisplayNameMode(),
                avatarSizeMode: I.default.getAvatarSizeMode(),
                streamApplication: (null == d ? void 0 : d.pid) === (0, N.getPID)() ? (0, f.Z)(x) : null,
                stream: e
            };
        });
    return (0, r.jsx)(
        z,
        G(R(G(R({}, C), { application: E }), e), {
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
