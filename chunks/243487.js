n.d(t, {
    ZP: () => Y,
    kI: () => z
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
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
    L = n(62802);
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
    let { hiddenVoiceStates: i, voiceStateMap: l, size: c, locked: u, flipped: p } = e,
        f = (0, A.e5)(c),
        g = (0, a.Wu)(
            [x.default, h.Z],
            () =>
                i
                    .map((e) => {
                        var t;
                        let n = x.default.getUser(e);
                        if (null == n) return;
                        let r = h.Z.getChannel(null == (t = l.get(e)) ? void 0 : t.voiceState.channelId);
                        return n.getAvatarURL(null == r ? void 0 : r.getGuildId(), f, !1);
                    })
                    .filter(E.lm),
            [i, l, f]
        ),
        O = null != (t = g[0]) ? t : U(0),
        m = null != (n = g[1]) ? n : U(1);
    return (0, r.jsxs)('div', {
        className: o()(L.hiddenVoiceStates, u && L.locked, p && L.flipped),
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
    let { id: t, context: n = W.Yn.DEFAULT, channel: l, overlayVoiceStates: o, displayNameMode: c, displayUserMode: u, locked: d, pinned: p, guildId: f, showEmpty: g = !0, isPreviewingInGame: O, isSettingsPreview: m = !1, anchorLeft: b, avatarSizeMode: v, maxDisplayedVoiceStates: h = _.At } = e,
        j = (0, V.ee)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(o),
            [o]
        ),
        [P, x] = o,
        S = x.length > 0 && null != n && null != l && (!d || p),
        w = (0, a.Wu)(
            [y.Z],
            () =>
                Array.from(j)
                    .map((e) => y.Z.getStreamForUser(e, f))
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
                                    channel: l,
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
                  D &&
                      1 === C.length &&
                      null != N &&
                      (0, r.jsx)(
                          A.ZP,
                          {
                              sortedVoiceState: N,
                              channel: l,
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
                          C[0]
                      ),
                  D &&
                      C.length > 1 &&
                      (0, r.jsx)(F, {
                          hiddenVoiceStates: C,
                          voiceStateMap: P,
                          size: (0, A.px)(v),
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
        l = (0, a.e7)([j.Z, h.Z], () => h.Z.getChannel(j.Z.getVoiceChannelId())),
        o = (0, p.ZP)(l),
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
                l = (0, b.Es)(null == n ? void 0 : n.id, r),
                o = i.useMemo(() => new Map(l.map((e) => [e.user.id, e])), [l]),
                s = (0, a.e7)([v.default], () => v.default.getId());
            return [
                o,
                (0, a.Wu)(
                    [S.Z, j.Z, P.Z, g.Z],
                    () => {
                        let n = Array.from(
                            l.map((e) => {
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
                            o = [],
                            a = [];
                        for (let e = 0; e < n.length; e++) {
                            let l = n[e],
                                s = r.get(l);
                            e < t ? i.push(l) : s && (s.isSpeaking || s.isCurrentUser) ? a.push(l) : o.push(l);
                        }
                        if (a.length > 0) {
                            let e = i.slice(0, t - a.length),
                                n = i.slice(t - a.length);
                            return [...e, ...a, ...n, ...o];
                        }
                        return n;
                    },
                    [l, e, s, t]
                )
            ];
        })(W.Yn.DEFAULT, e.maxDisplayedVoiceStates),
        d = (0, a.e7)([y.Z], () => y.Z.getStreamerActiveStreamMetadata()),
        x = (0, D.II)(),
        E = (0, u.q)(null == x ? void 0 : x.id),
        C = (0, a.cj)([y.Z, I.default], () => {
            let e = y.Z.getCurrentUserActiveStream();
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
            channel: l,
            guildId: null == l ? void 0 : l.guild_id,
            title: null != o ? o : '',
            streamMetadata: d,
            streamApplication:
                null != (t = C.streamApplication)
                    ? t
                    : {
                          id: null,
                          name: null == d ? void 0 : d.sourceName
                      },
            isSettingsPreview: n
        })
    );
}
