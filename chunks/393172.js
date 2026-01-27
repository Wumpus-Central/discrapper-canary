n.d(t, {
    Ay: () => z,
    DH: () => K,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(717558),
    u = n(429913),
    d = n(478063),
    p = n(47167),
    f = n(22705),
    m = n(209932),
    g = n(63995),
    y = n(69407),
    _ = n(530804),
    b = n(616356),
    A = n(961350),
    h = n(734057),
    v = n(309010),
    O = n(485296),
    j = n(287809),
    S = n(977997),
    I = n(607567),
    x = n(256415),
    E = n(403362),
    P = n(996439),
    T = n(820883),
    N = n(810412),
    w = n(412477),
    C = n(395011),
    D = n(243612),
    L = n(147905);
n(392164);
var k = n(652215),
    G = n(731854),
    R = n(985018),
    M = n(585990);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function U(e, t) {
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
let W = (e) => {
    let t = (null != e ? e : 0) % T.A.DEFAULT_AVATARS.length;
    return T.A.DEFAULT_AVATARS[t];
};

function F(e) {
    var t, n;
    let { hiddenVoiceStates: i, voiceStateMap: l, size: c, locked: u, flipped: p } = e,
        f = (0, L.Ob)(c),
        m = (0, s.yK)(
            [j.default, h.A],
            () =>
                i
                    .map((e) => {
                        var t;
                        let n = j.default.getUser(e);
                        if (null == n) return;
                        let r = h.A.getChannel(null == (t = l.get(e)) ? void 0 : t.voiceState.channelId);
                        return n.getAvatarURL(null == r ? void 0 : r.getGuildId(), f, !1);
                    })
                    .filter(E.Vq),
            [i, l, f],
        ),
        g = null != (t = m[0]) ? t : W(0),
        y = null != (n = m[1]) ? n : W(1);
    return (0, r.jsxs)("div", {
        className: a()(M.ZR, u && M.xt, p && M.zq),
        children: [
            (0, r.jsx)("div", {
                className: M.e5,
                children: (0, r.jsx)(d.A, {
                    size: c,
                    backSrc: g,
                    frontSrc: y,
                    isTyping: !1,
                }),
            }),
            (0, r.jsx)("div", {
                className: M.AP,
                children: (0, r.jsxs)(o.Text, {
                    variant: "text-xs/medium",
                    children: ["+", i.length, " others in voice"],
                }),
            }),
        ],
    });
}
let K = i.memo(function (e) {
    let {
            id: t,
            context: n = G.x.DEFAULT,
            channel: l,
            overlayVoiceStates: a,
            displayNameMode: c,
            displayUserMode: u,
            locked: d,
            pinned: p,
            guildId: f,
            showEmpty: m = !0,
            isPreviewingInGame: g,
            isSettingsPreview: y = !1,
            anchorLeft: _,
            avatarSizeMode: A,
            maxDisplayedVoiceStates: h = 8,
        } = e,
        v = (0, N.Dk)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(a),
            [a],
        ),
        [O, j] = a,
        S = j.length > 0 && null != n && null != l && (!d || p),
        I = (0, s.yK)(
            [b.A],
            () =>
                Array.from(v)
                    .map((e) => b.A.getStreamForUser(e, f))
                    .filter(E.Vq)
                    .map((e) => e.ownerId),
            [f, v],
        );
    i.useEffect(() => {
        S &&
            (0, N.Y)(k.uss.VOICE_V3, {
                locked: x.default.isInstanceLocked(),
                shownUserIds: Array.from(v),
                liveUserIds: I,
                contentInventoryIds: [],
            });
    }, [v, I, S]);
    let P = -1 !== h ? j.slice(0, h) : j,
        T = -1 !== h ? j.slice(h) : [],
        C = O.get(T[0]),
        D = u === k.f5z.ALWAYS && -1 !== h;
    return S
        ? (0, r.jsxs)("div", {
              className: M.h8,
              children: [
                  P.map((e) => {
                      let i = O.get(e);
                      return null == i
                          ? null
                          : (0, r.jsx)(
                                L.Ay,
                                {
                                    sortedVoiceState: i,
                                    channel: l,
                                    widgetId: t,
                                    flipped: !_,
                                    isPreviewingInGame: g,
                                    isSettingsPreview: y,
                                    context: n,
                                    size: A,
                                    displayNameMode: c,
                                    displayUserMode: u,
                                    locked: d,
                                },
                                e,
                            );
                  }),
                  D &&
                      1 === T.length &&
                      null != C &&
                      (0, r.jsx)(
                          L.Ay,
                          {
                              sortedVoiceState: C,
                              channel: l,
                              widgetId: t,
                              flipped: !_,
                              isPreviewingInGame: g,
                              isSettingsPreview: y,
                              context: n,
                              size: A,
                              displayNameMode: c,
                              displayUserMode: u,
                              locked: d,
                          },
                          T[0],
                      ),
                  D &&
                      T.length > 1 &&
                      (0, r.jsx)(F, {
                          hiddenVoiceStates: T,
                          voiceStateMap: O,
                          size: (0, L.FT)(A),
                          locked: d,
                          flipped: !_,
                      }),
              ],
          })
        : d || !m
          ? null
          : (0, r.jsx)(w.g, {
                emptyText: R.intl.string(R.t.hEh0l1),
                icon: o.HKD,
            });
});

function z(e) {
    var t;
    let { isSettingsPreview: n } = e,
        l = (0, s.bG)([v.A, h.A], () => h.A.getChannel(v.A.getVoiceChannelId())),
        a = (0, p.Ay)(l),
        o = (function (e, t) {
            let n = (0, s.bG)([v.A, h.A], () => h.A.getChannel(v.A.getVoiceChannelId())),
                [r] = (0, s.bG)(
                    [I.Ay, g.A, v.A, h.A],
                    () => {
                        let e = h.A.getChannel(v.A.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [g.A.getMutableParticipants(e.id, y.ip.SPEAKER), g.A.getParticipantsVersion(e.id)]
                              : [I.Ay.getVoiceStatesForChannel(e), I.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    P.D,
                ),
                l = (0, _.$n)(null == n ? void 0 : n.id, r),
                a = i.useMemo(() => new Map(l.map((e) => [e.user.id, e])), [l]),
                o = (0, s.bG)([A.default], () => A.default.getId());
            return [
                a,
                (0, s.yK)([S.A, v.A, O.A, m.A], () => {
                    let n = Array.from(
                        new Set(
                            l.map((e) => {
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
                                [S.A, v.A, O.A, m.A],
                            ),
                            i = t === o;
                        (n || i) &&
                            r.set(t, {
                                isSpeaking: n,
                                isCurrentUser: i,
                            });
                    }
                    let i = [],
                        a = [],
                        s = [];
                    for (let e = 0; e < n.length; e++) {
                        let l = n[e],
                            o = r.get(l);
                        e < t ? i.push(l) : o && (o.isSpeaking || o.isCurrentUser) ? s.push(l) : a.push(l);
                    }
                    if (s.length > 0) {
                        let e = i.slice(0, t - s.length),
                            n = i.slice(t - s.length);
                        return [...e, ...s, ...n, ...a];
                    }
                    return n;
                }, [l, e, o, t]),
            ];
        })(G.x.DEFAULT, e.maxDisplayedVoiceStates),
        d = (0, s.bG)([b.A], () => b.A.getStreamerActiveStreamMetadata()),
        j = (0, D.b4)(),
        E = (0, u.h)(null == j ? void 0 : j.id),
        T = (0, s.cf)([b.A, x.default, C.A], () => {
            let e = b.A.getCurrentUserActiveStream();
            return {
                displayUserMode: x.default.getDisplayUserMode(),
                displayNameMode: x.default.getDisplayNameMode(),
                avatarSizeMode: x.default.getAvatarSizeMode(),
                streamApplication: (null == d ? void 0 : d.pid) === C.A.getTargetPID() ? (0, f.A)(j) : null,
                stream: e,
            };
        });
    return (0, r.jsx)(
        K,
        U(
            V(
                U(V({}, T), {
                    application: E,
                }),
                e,
            ),
            {
                overlayVoiceStates: o,
                channel: l,
                guildId: null == l ? void 0 : l.guild_id,
                title: null != a ? a : "",
                streamMetadata: d,
                streamApplication:
                    null != (t = T.streamApplication)
                        ? t
                        : {
                              id: null,
                              name: null == d ? void 0 : d.sourceName,
                          },
                isSettingsPreview: n,
            },
        ),
    );
}
