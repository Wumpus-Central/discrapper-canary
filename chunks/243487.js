n.d(t, {
    ZP: () => Y,
    kI: () => z
}),
    n(388685),
    n(539854);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(586902),
    u = n(835473),
    d = n(289823),
    f = n(933557),
    p = n(552282),
    g = n(763296),
    m = n(565799),
    h = n(501655),
    O = n(470956),
    v = n(199902),
    b = n(314897),
    y = n(592125),
    I = n(944486),
    P = n(606304),
    j = n(594174),
    w = n(979651),
    S = n(938475),
    Z = n(237997),
    E = n(823379),
    N = n(136015),
    x = n(426563),
    C = n(145597),
    k = n(444295),
    T = n(804570),
    _ = n(388627),
    A = n(532658),
    V = n(501787),
    D = n(981631),
    M = n(65154),
    F = n(388032),
    R = n(62802);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = (e) => {
    let t = (null != e ? e : 0) % x.Z.DEFAULT_AVATARS.length;
    return x.Z.DEFAULT_AVATARS[t];
};
function U(e) {
    var t, n;
    let { hiddenVoiceStates: r, voiceStateMap: l, size: c, locked: u, flipped: f } = e,
        p = (0, A.e5)(c),
        g = (0, a.Wu)(
            [j.default, y.Z],
            () =>
                r
                    .map((e) => {
                        var t;
                        let n = j.default.getUser(e);
                        if (null == n) return;
                        let i = y.Z.getChannel(null == (t = l.get(e)) ? void 0 : t.voiceState.channelId);
                        return n.getAvatarURL(null == i ? void 0 : i.getGuildId(), p, !1);
                    })
                    .filter(E.lm),
            [r, l, p]
        ),
        m = null != (t = g[0]) ? t : G(0),
        h = null != (n = g[1]) ? n : G(1);
    return (0, i.jsxs)('div', {
        className: o()(R.hiddenVoiceStates, u && R.locked, f && R.flipped),
        children: [
            (0, i.jsx)('div', {
                className: R.hiddenVoiceStatesAvatar,
                children: (0, i.jsx)(d.Z, {
                    size: c,
                    backSrc: m,
                    frontSrc: h,
                    isTyping: !1
                })
            }),
            (0, i.jsx)('div', {
                className: R.hiddenVoiceStatesText,
                children: (0, i.jsxs)(s.Text, {
                    variant: 'text-xs/medium',
                    children: ['+', r.length, ' others in voice']
                })
            })
        ]
    });
}
let z = r.memo(function (e) {
    let { id: t, context: n = M.Yn.DEFAULT, channel: l, overlayVoiceStates: o, displayNameMode: c, displayUserMode: u, locked: d, pinned: f, guildId: p, showEmpty: g = !0, isPreviewingInGame: m, isSettingsPreview: h = !1, anchorLeft: O, avatarSizeMode: b, maxDisplayedVoiceStates: y = V.At } = e,
        I = (0, k.ee)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(o),
            [o]
        ),
        [P, j] = o,
        w = j.length > 0 && null != n && null != l && (!d || f),
        S = (0, a.Wu)(
            [v.Z],
            () =>
                Array.from(I)
                    .map((e) => v.Z.getStreamForUser(e, p))
                    .filter(E.lm)
                    .map((e) => e.ownerId),
            [p, I]
        );
    r.useEffect(() => {
        w &&
            (0, k.zi)(D.Odu.VOICE_V3, {
                locked: Z.default.isInstanceLocked(),
                shownUserIds: Array.from(I),
                liveUserIds: S,
                contentInventoryIds: []
            });
    }, [I, S, w]);
    let N = y !== V.Og ? j.slice(0, y) : j,
        x = y !== V.Og ? j.slice(y) : [],
        C = P.get(x[0]),
        _ = u === D.OYC.ALWAYS && y !== V.Og;
    return w
        ? (0, i.jsxs)('div', {
              className: R.voiceUserContainer,
              children: [
                  N.map((e) => {
                      let r = P.get(e);
                      return null == r
                          ? null
                          : (0, i.jsx)(
                                A.ZP,
                                {
                                    sortedVoiceState: r,
                                    channel: l,
                                    widgetId: t,
                                    flipped: !O,
                                    isPreviewingInGame: m,
                                    isSettingsPreview: h,
                                    context: n,
                                    size: b,
                                    displayNameMode: c,
                                    displayUserMode: u,
                                    locked: d
                                },
                                e
                            );
                  }),
                  _ &&
                      1 === x.length &&
                      null != C &&
                      (0, i.jsx)(
                          A.ZP,
                          {
                              sortedVoiceState: C,
                              channel: l,
                              widgetId: t,
                              flipped: !O,
                              isPreviewingInGame: m,
                              isSettingsPreview: h,
                              context: n,
                              size: b,
                              displayNameMode: c,
                              displayUserMode: u,
                              locked: d
                          },
                          x[0]
                      ),
                  _ &&
                      x.length > 1 &&
                      (0, i.jsx)(U, {
                          hiddenVoiceStates: x,
                          voiceStateMap: P,
                          size: (0, A.px)(b),
                          locked: d,
                          flipped: !O
                      })
              ]
          })
        : d || !g
          ? null
          : (0, i.jsx)(T.E, {
                emptyText: F.intl.string(F.t.hEh0l5),
                icon: s.gj8
            });
});
function Y(e) {
    var t;
    let { isSettingsPreview: n } = e,
        l = (0, a.e7)([I.Z, y.Z], () => y.Z.getChannel(I.Z.getVoiceChannelId())),
        o = (0, f.ZP)(l),
        s = (function (e, t) {
            let n = (0, a.e7)([I.Z, y.Z], () => y.Z.getChannel(I.Z.getVoiceChannelId())),
                [i] = (0, a.e7)(
                    [S.ZP, m.Z, I.Z, y.Z],
                    () => {
                        let e = y.Z.getChannel(I.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [m.Z.getMutableParticipants(e.id, h.pV.SPEAKER), m.Z.getParticipantsVersion(e.id)] : [S.ZP.getVoiceStatesForChannel(e), S.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    N.Q
                ),
                l = (0, O.Es)(null == n ? void 0 : n.id, i),
                o = r.useMemo(() => new Map(l.map((e) => [e.user.id, e])), [l]),
                s = (0, a.e7)([b.default], () => b.default.getId());
            return [
                o,
                (0, a.Wu)(
                    [w.Z, I.Z, P.Z, g.Z],
                    () => {
                        let n = Array.from(
                            l.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            })
                        );
                        if (t === V.Og || n.length <= t) return n;
                        let i = new Map();
                        for (let t of n) {
                            let n = (0, c.O)(
                                    {
                                        userId: t,
                                        checkSoundSharing: !0,
                                        checkSoundboardSounds: !1,
                                        checkIsMuted: !0,
                                        context: e
                                    },
                                    [w.Z, I.Z, P.Z, g.Z]
                                ),
                                r = t === s;
                            (n || r) &&
                                i.set(t, {
                                    isSpeaking: n,
                                    isCurrentUser: r
                                });
                        }
                        let r = [],
                            o = [],
                            a = [];
                        for (let e = 0; e < n.length; e++) {
                            let l = n[e],
                                s = i.get(l);
                            e < t ? r.push(l) : s && (s.isSpeaking || s.isCurrentUser) ? a.push(l) : o.push(l);
                        }
                        if (a.length > 0) {
                            let e = r.slice(0, t - a.length),
                                n = r.slice(t - a.length);
                            return [...e, ...a, ...n, ...o];
                        }
                        return n;
                    },
                    [l, e, s, t]
                )
            ];
        })(M.Yn.DEFAULT, e.maxDisplayedVoiceStates),
        d = (0, a.e7)([v.Z], () => v.Z.getStreamerActiveStreamMetadata()),
        j = (0, _.II)(),
        E = (0, u.q)(null == j ? void 0 : j.id),
        x = (0, a.cj)([v.Z, Z.default], () => {
            let e = v.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: Z.default.getDisplayUserMode(),
                displayNameMode: Z.default.getDisplayNameMode(),
                avatarSizeMode: Z.default.getAvatarSizeMode(),
                streamApplication: (null == d ? void 0 : d.pid) === (0, C.getPID)() ? (0, p.Z)(j) : null,
                stream: e
            };
        });
    return (0, i.jsx)(
        z,
        W(L(W(L({}, x), { application: E }), e), {
            overlayVoiceStates: s,
            channel: l,
            guildId: null == l ? void 0 : l.guild_id,
            title: null != o ? o : '',
            streamMetadata: d,
            streamApplication:
                null != (t = x.streamApplication)
                    ? t
                    : {
                          id: null,
                          name: null == d ? void 0 : d.sourceName
                      },
            isSettingsPreview: n
        })
    );
}
