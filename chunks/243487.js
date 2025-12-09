n.d(t, {
    ZP: () => q,
    kI: () => K,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(586902),
    u = n(835473),
    d = n(289823),
    f = n(933557),
    p = n(552282),
    _ = n(763296),
    m = n(565799),
    h = n(501655),
    g = n(470956),
    E = n(199902),
    b = n(314897),
    y = n(592125),
    O = n(944486),
    v = n(606304),
    S = n(594174),
    I = n(979651),
    T = n(938475),
    A = n(237997),
    C = n(823379),
    N = n(136015),
    P = n(426563),
    R = n(444295),
    D = n(804570),
    w = n(610394),
    x = n(388627),
    L = n(532658),
    j = n(501787),
    M = n(981631),
    k = n(65154),
    U = n(388032),
    G = n(213285);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = (e) => {
    let t = (null != e ? e : 0) % P.Z.DEFAULT_AVATARS.length;
    return P.Z.DEFAULT_AVATARS[t];
};
function Y(e) {
    var t, n;
    let { hiddenVoiceStates: i, voiceStateMap: a, size: c, locked: u, flipped: f } = e,
        p = (0, L.e5)(c),
        _ = (0, s.Wu)(
            [S.default, y.Z],
            () =>
                i
                    .map((e) => {
                        var t;
                        let n = S.default.getUser(e);
                        if (null == n) return;
                        let r = y.Z.getChannel(null == (t = a.get(e)) ? void 0 : t.voiceState.channelId);
                        return n.getAvatarURL(null == r ? void 0 : r.getGuildId(), p, !1);
                    })
                    .filter(C.lm),
            [i, a, p],
        ),
        m = null != (t = _[0]) ? t : H(0),
        h = null != (n = _[1]) ? n : H(1);
    return (0, r.jsxs)("div", {
        className: o()(G.hiddenVoiceStates, u && G.locked, f && G.flipped),
        children: [
            (0, r.jsx)("div", {
                className: G.hiddenVoiceStatesAvatar,
                children: (0, r.jsx)(d.Z, {
                    size: c,
                    backSrc: m,
                    frontSrc: h,
                    isTyping: !1,
                }),
            }),
            (0, r.jsx)("div", {
                className: G.hiddenVoiceStatesText,
                children: (0, r.jsxs)(l.Text, {
                    variant: "text-xs/medium",
                    children: ["+", i.length, " others in voice"],
                }),
            }),
        ],
    });
}
function W(e) {
    let [t, n] = e;
    return new Set(n);
}
let K = i.memo(function (e) {
    let {
            id: t,
            context: n = k.Yn.DEFAULT,
            channel: a,
            overlayVoiceStates: o,
            displayNameMode: c,
            displayUserMode: u,
            locked: d,
            pinned: f,
            guildId: p,
            showEmpty: _ = !0,
            isPreviewingInGame: m,
            isSettingsPreview: h = !1,
            anchorLeft: g,
            avatarSizeMode: b,
            maxDisplayedVoiceStates: y = j.At,
        } = e,
        O = (0, R.ee)(() => W(o), [o]),
        [v, S] = o,
        I = S.length > 0 && null != n && null != a && (!d || f),
        T = (0, s.Wu)(
            [E.Z],
            () =>
                Array.from(O)
                    .map((e) => E.Z.getStreamForUser(e, p))
                    .filter(C.lm)
                    .map((e) => e.ownerId),
            [p, O],
        );
    i.useEffect(() => {
        I &&
            (0, R.zi)(M.Odu.VOICE_V3, {
                locked: A.default.isInstanceLocked(),
                shownUserIds: Array.from(O),
                liveUserIds: T,
                contentInventoryIds: [],
            });
    }, [O, T, I]);
    let N = () =>
            d || !_
                ? null
                : (0, r.jsx)(D.E, {
                      emptyText: U.intl.string(U.t.hEh0l1),
                      icon: l.gj8,
                  }),
        P = y !== j.Og ? S.slice(0, y) : S,
        w = y !== j.Og ? S.slice(y) : [],
        x = v.get(w[0]),
        Z = u === M.OYC.ALWAYS && y !== j.Og;
    return I
        ? (0, r.jsxs)("div", {
              className: G.voiceUserContainer,
              children: [
                  P.map((e) => {
                      let i = v.get(e);
                      return null == i
                          ? null
                          : (0, r.jsx)(
                                L.ZP,
                                {
                                    sortedVoiceState: i,
                                    channel: a,
                                    widgetId: t,
                                    flipped: !g,
                                    isPreviewingInGame: m,
                                    isSettingsPreview: h,
                                    context: n,
                                    size: b,
                                    displayNameMode: c,
                                    displayUserMode: u,
                                    locked: d,
                                },
                                e,
                            );
                  }),
                  Z &&
                      1 === w.length &&
                      null != x &&
                      (0, r.jsx)(
                          L.ZP,
                          {
                              sortedVoiceState: x,
                              channel: a,
                              widgetId: t,
                              flipped: !g,
                              isPreviewingInGame: m,
                              isSettingsPreview: h,
                              context: n,
                              size: b,
                              displayNameMode: c,
                              displayUserMode: u,
                              locked: d,
                          },
                          w[0],
                      ),
                  Z &&
                      w.length > 1 &&
                      (0, r.jsx)(Y, {
                          hiddenVoiceStates: w,
                          voiceStateMap: v,
                          size: (0, L.px)(b),
                          locked: d,
                          flipped: !g,
                      }),
              ],
          })
        : N();
});
function z(e, t) {
    let n = (0, s.e7)([O.Z, y.Z], () => y.Z.getChannel(O.Z.getVoiceChannelId())),
        [r] = (0, s.e7)(
            [T.ZP, m.Z, O.Z, y.Z],
            () => {
                let e = y.Z.getChannel(O.Z.getVoiceChannelId());
                return null == e
                    ? [[], -1]
                    : e.isGuildStageVoice()
                      ? [m.Z.getMutableParticipants(e.id, h.pV.SPEAKER), m.Z.getParticipantsVersion(e.id)]
                      : [T.ZP.getVoiceStatesForChannel(e), T.ZP.getVoiceStateVersion(e.getGuildId())];
            },
            [],
            N.Q,
        ),
        a = (0, g.Es)(null == n ? void 0 : n.id, r),
        o = i.useMemo(() => new Map(a.map((e) => [e.user.id, e])), [a]),
        l = (0, s.e7)([b.default], () => b.default.getId());
    return [
        o,
        (0, s.Wu)([I.Z, O.Z, v.Z, _.Z], () => {
            let n = Array.from(
                new Set(
                    a.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
            );
            if (t === j.Og || n.length <= t) return n;
            let r = new Map();
            for (let t of n) {
                let n = (0, c.O)(
                        {
                            userId: t,
                            checkSoundSharing: !0,
                            checkSoundboardSounds: !1,
                            checkIsMuted: !0,
                            context: e,
                        },
                        [I.Z, O.Z, v.Z, _.Z],
                    ),
                    i = t === l;
                (n || i) &&
                    r.set(t, {
                        isSpeaking: n,
                        isCurrentUser: i,
                    });
            }
            let i = [],
                o = [],
                s = [];
            for (let e = 0; e < n.length; e++) {
                let a = n[e],
                    l = r.get(a);
                e < t ? i.push(a) : l && (l.isSpeaking || l.isCurrentUser) ? s.push(a) : o.push(a);
            }
            if (s.length > 0) {
                let e = i.slice(0, t - s.length),
                    n = i.slice(t - s.length);
                return [...e, ...s, ...n, ...o];
            }
            return n;
        }, [a, e, l, t]),
    ];
}
function q(e) {
    var t;
    let { isSettingsPreview: n } = e,
        i = (0, s.e7)([O.Z, y.Z], () => y.Z.getChannel(O.Z.getVoiceChannelId())),
        a = (0, f.ZP)(i),
        o = z(k.Yn.DEFAULT, e.maxDisplayedVoiceStates),
        l = (0, s.e7)([E.Z], () => E.Z.getStreamerActiveStreamMetadata()),
        c = (0, x.II)(),
        d = (0, u.q)(null == c ? void 0 : c.id),
        _ = (0, s.cj)([E.Z, A.default, w.Z], () => {
            let e = E.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: A.default.getDisplayUserMode(),
                displayNameMode: A.default.getDisplayNameMode(),
                avatarSizeMode: A.default.getAvatarSizeMode(),
                streamApplication: (null == l ? void 0 : l.pid) === w.Z.getTargetPID() ? (0, p.Z)(c) : null,
                stream: e,
            };
        });
    return (0, r.jsx)(
        K,
        V(B(V(B({}, _), { application: d }), e), {
            overlayVoiceStates: o,
            channel: i,
            guildId: null == i ? void 0 : i.guild_id,
            title: null != a ? a : "",
            streamMetadata: l,
            streamApplication:
                null != (t = _.streamApplication)
                    ? t
                    : {
                          id: null,
                          name: null == l ? void 0 : l.sourceName,
                      },
            isSettingsPreview: n,
        }),
    );
}
