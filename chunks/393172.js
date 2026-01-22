n.d(t, {
    Ay: () => q,
    DH: () => K,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(717558),
    u = n(429913),
    d = n(478063),
    f = n(47167),
    p = n(22705),
    _ = n(209932),
    h = n(63995),
    m = n(69407),
    g = n(530804),
    E = n(616356),
    b = n(961350),
    y = n(734057),
    O = n(309010),
    A = n(485296),
    v = n(287809),
    S = n(977997),
    I = n(607567),
    T = n(256415),
    C = n(403362),
    N = n(996439),
    R = n(820883),
    w = n(810412),
    P = n(412477),
    D = n(395011),
    x = n(243612),
    L = n(147905);
n(392164);
var j = n(652215),
    M = n(731854),
    k = n(985018),
    U = n(585990);
function G(e, t, n) {
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
function V(e) {
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
                G(e, t, n[t]);
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
function B(e, t) {
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
    let t = (null != e ? e : 0) % R.A.DEFAULT_AVATARS.length;
    return R.A.DEFAULT_AVATARS[t];
};
function Y(e) {
    var t, n;
    let { hiddenVoiceStates: i, voiceStateMap: a, size: c, locked: u, flipped: f } = e,
        p = (0, L.Ob)(c),
        _ = (0, o.yK)(
            [v.default, y.A],
            () =>
                i
                    .map((e) => {
                        var t;
                        let n = v.default.getUser(e);
                        if (null == n) return;
                        let r = y.A.getChannel(null == (t = a.get(e)) ? void 0 : t.voiceState.channelId);
                        return n.getAvatarURL(null == r ? void 0 : r.getGuildId(), p, !1);
                    })
                    .filter(C.Vq),
            [i, a, p],
        ),
        h = null != (t = _[0]) ? t : H(0),
        m = null != (n = _[1]) ? n : H(1);
    return (0, r.jsxs)("div", {
        className: s()(U.ZR, u && U.xt, f && U.zq),
        children: [
            (0, r.jsx)("div", {
                className: U.e5,
                children: (0, r.jsx)(d.A, {
                    size: c,
                    backSrc: h,
                    frontSrc: m,
                    isTyping: !1,
                }),
            }),
            (0, r.jsx)("div", {
                className: U.AP,
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
            context: n = M.x.DEFAULT,
            channel: a,
            overlayVoiceStates: s,
            displayNameMode: c,
            displayUserMode: u,
            locked: d,
            pinned: f,
            guildId: p,
            showEmpty: _ = !0,
            isPreviewingInGame: h,
            isSettingsPreview: m = !1,
            anchorLeft: g,
            avatarSizeMode: b,
            maxDisplayedVoiceStates: y = 8,
        } = e,
        O = (0, w.Dk)(() => W(s), [s]),
        [A, v] = s,
        S = v.length > 0 && null != n && null != a && (!d || f),
        I = (0, o.yK)(
            [E.A],
            () =>
                Array.from(O)
                    .map((e) => E.A.getStreamForUser(e, p))
                    .filter(C.Vq)
                    .map((e) => e.ownerId),
            [p, O],
        );
    i.useEffect(() => {
        S &&
            (0, w.Y)(j.uss.VOICE_V3, {
                locked: T.default.isInstanceLocked(),
                shownUserIds: Array.from(O),
                liveUserIds: I,
                contentInventoryIds: [],
            });
    }, [O, I, S]);
    let N = () =>
            d || !_
                ? null
                : (0, r.jsx)(P.g, {
                      emptyText: k.intl.string(k.t.hEh0l1),
                      icon: l.HKD,
                  }),
        R = -1 !== y ? v.slice(0, y) : v,
        D = -1 !== y ? v.slice(y) : [],
        x = A.get(D[0]),
        G = u === j.f5z.ALWAYS && -1 !== y;
    return S
        ? (0, r.jsxs)("div", {
              className: U.h8,
              children: [
                  R.map((e) => {
                      let i = A.get(e);
                      return null == i
                          ? null
                          : (0, r.jsx)(
                                L.Ay,
                                {
                                    sortedVoiceState: i,
                                    channel: a,
                                    widgetId: t,
                                    flipped: !g,
                                    isPreviewingInGame: h,
                                    isSettingsPreview: m,
                                    context: n,
                                    size: b,
                                    displayNameMode: c,
                                    displayUserMode: u,
                                    locked: d,
                                },
                                e,
                            );
                  }),
                  G &&
                      1 === D.length &&
                      null != x &&
                      (0, r.jsx)(
                          L.Ay,
                          {
                              sortedVoiceState: x,
                              channel: a,
                              widgetId: t,
                              flipped: !g,
                              isPreviewingInGame: h,
                              isSettingsPreview: m,
                              context: n,
                              size: b,
                              displayNameMode: c,
                              displayUserMode: u,
                              locked: d,
                          },
                          D[0],
                      ),
                  G &&
                      D.length > 1 &&
                      (0, r.jsx)(Y, {
                          hiddenVoiceStates: D,
                          voiceStateMap: A,
                          size: (0, L.FT)(b),
                          locked: d,
                          flipped: !g,
                      }),
              ],
          })
        : N();
});
function z(e, t) {
    let n = (0, o.bG)([O.A, y.A], () => y.A.getChannel(O.A.getVoiceChannelId())),
        [r] = (0, o.bG)(
            [I.Ay, h.A, O.A, y.A],
            () => {
                let e = y.A.getChannel(O.A.getVoiceChannelId());
                return null == e
                    ? [[], -1]
                    : e.isGuildStageVoice()
                      ? [h.A.getMutableParticipants(e.id, m.ip.SPEAKER), h.A.getParticipantsVersion(e.id)]
                      : [I.Ay.getVoiceStatesForChannel(e), I.Ay.getVoiceStateVersion(e.getGuildId())];
            },
            [],
            N.D,
        ),
        a = (0, g.$n)(null == n ? void 0 : n.id, r),
        s = i.useMemo(() => new Map(a.map((e) => [e.user.id, e])), [a]),
        l = (0, o.bG)([b.default], () => b.default.getId());
    return [
        s,
        (0, o.yK)([S.A, O.A, A.A, _.A], () => {
            let n = Array.from(
                new Set(
                    a.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
            );
            if (-1 === t || n.length <= t) return n;
            let r = new Map();
            for (let t of n) {
                let n = (0, c.R)(
                        {
                            userId: t,
                            checkSoundSharing: !0,
                            checkSoundboardSounds: !1,
                            checkIsMuted: !0,
                            context: e,
                        },
                        [S.A, O.A, A.A, _.A],
                    ),
                    i = t === l;
                (n || i) &&
                    r.set(t, {
                        isSpeaking: n,
                        isCurrentUser: i,
                    });
            }
            let i = [],
                s = [],
                o = [];
            for (let e = 0; e < n.length; e++) {
                let a = n[e],
                    l = r.get(a);
                e < t ? i.push(a) : l && (l.isSpeaking || l.isCurrentUser) ? o.push(a) : s.push(a);
            }
            if (o.length > 0) {
                let e = i.slice(0, t - o.length),
                    n = i.slice(t - o.length);
                return [...e, ...o, ...n, ...s];
            }
            return n;
        }, [a, e, l, t]),
    ];
}
function q(e) {
    var t;
    let { isSettingsPreview: n } = e,
        i = (0, o.bG)([O.A, y.A], () => y.A.getChannel(O.A.getVoiceChannelId())),
        a = (0, f.Ay)(i),
        s = z(M.x.DEFAULT, e.maxDisplayedVoiceStates),
        l = (0, o.bG)([E.A], () => E.A.getStreamerActiveStreamMetadata()),
        c = (0, x.b4)(),
        d = (0, u.h)(null == c ? void 0 : c.id),
        _ = (0, o.cf)([E.A, T.default, D.A], () => {
            let e = E.A.getCurrentUserActiveStream();
            return {
                displayUserMode: T.default.getDisplayUserMode(),
                displayNameMode: T.default.getDisplayNameMode(),
                avatarSizeMode: T.default.getAvatarSizeMode(),
                streamApplication: (null == l ? void 0 : l.pid) === D.A.getTargetPID() ? (0, p.A)(c) : null,
                stream: e,
            };
        });
    return (0, r.jsx)(
        K,
        B(V(B(V({}, _), { application: d }), e), {
            overlayVoiceStates: s,
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
