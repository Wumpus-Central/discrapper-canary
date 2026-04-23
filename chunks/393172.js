n.d(t, { Ay: () => F, DH: () => H }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(311907),
    o = n(834730),
    d = n(983851),
    c = n(717558),
    u = n(429913),
    h = n(478063),
    m = n(47167),
    p = n(22705),
    g = n(209932),
    f = n(63995),
    _ = n(69407),
    x = n(530804),
    A = n(616356),
    E = n(961350),
    S = n(734057),
    I = n(309010),
    v = n(485296),
    b = n(287809),
    C = n(977997),
    T = n(607567),
    j = n(256415),
    y = n(403362),
    w = n(996439),
    N = n(820883),
    R = n(810412),
    M = n(412477),
    O = n(395011),
    k = n(243612),
    D = n(147905);
n(392164);
var z = n(652215),
    P = n(731854),
    L = n(985018),
    V = n(458509);
let G = (e) => {
    let t = (e ?? 0) % N.A.DEFAULT_AVATARS.length;
    return N.A.DEFAULT_AVATARS[t];
};
function U(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: r, locked: a, flipped: d } = e,
        c = (0, D.Ob)(r),
        u = (0, l.yK)(
            [b.default, S.A],
            () =>
                t
                    .map((e) => {
                        let t = b.default.getUser(e);
                        if (null == t) return;
                        let i = S.A.getChannel(n.get(e)?.voiceState.channelId);
                        return t.getAvatarURL(i?.getGuildId(), c, !1);
                    })
                    .filter(y.Vq),
            [t, n, c],
        ),
        m = u[0] ?? G(0),
        p = u[1] ?? G(1);
    return (0, i.jsxs)("div", {
        className: s()(V.ZR, a && V.xt, d && V.zq),
        children: [
            (0, i.jsx)("div", {
                className: V.e5,
                children: (0, i.jsx)(h.A, { size: r, backSrc: m, frontSrc: p, isTyping: !1 }),
            }),
            (0, i.jsx)("div", {
                className: V.AP,
                children: (0, i.jsxs)(o.E, {
                    variant: "text-xs/medium",
                    children: ["+", t.length, " others in voice"],
                }),
            }),
        ],
    });
}
let H = r.memo(function (e) {
    let {
            id: t,
            context: n = P.x.DEFAULT,
            channel: a,
            overlayVoiceStates: s,
            displayNameMode: o,
            displayUserMode: c,
            locked: u,
            pinned: h,
            guildId: m,
            showEmpty: p = !0,
            isPreviewingInGame: g,
            isSettingsPreview: f = !1,
            anchorLeft: _,
            avatarSizeMode: x,
            maxDisplayedVoiceStates: E = 8,
        } = e,
        S = (0, R.Dk)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(s),
            [s],
        ),
        [I, v] = s,
        b = v.length > 0 && null != n && null != a && (!u || h),
        C = (0, l.yK)(
            [A.A],
            () =>
                Array.from(S)
                    .map((e) => A.A.getStreamForUser(e, m))
                    .filter(y.Vq)
                    .map((e) => e.ownerId),
            [m, S],
        );
    r.useEffect(() => {
        b &&
            (0, R.Y)(z.uss.VOICE_V3, {
                locked: j.default.isInstanceLocked(),
                shownUserIds: Array.from(S),
                liveUserIds: C,
                contentInventoryIds: [],
            });
    }, [S, C, b]);
    let T = -1 !== E ? v.slice(0, E) : v,
        w = -1 !== E ? v.slice(E) : [],
        N = I.get(w[0]),
        O = c === z.f5z.ALWAYS && -1 !== E;
    return b
        ? (0, i.jsxs)("div", {
              className: V.h8,
              children: [
                  T.map((e) => {
                      let r = I.get(e);
                      return null == r
                          ? null
                          : (0, i.jsx)(
                                D.Ay,
                                {
                                    sortedVoiceState: r,
                                    channel: a,
                                    widgetId: t,
                                    flipped: !_,
                                    isPreviewingInGame: g,
                                    isSettingsPreview: f,
                                    context: n,
                                    size: x,
                                    displayNameMode: o,
                                    displayUserMode: c,
                                    locked: u,
                                },
                                e,
                            );
                  }),
                  O &&
                      1 === w.length &&
                      null != N &&
                      (0, i.jsx)(
                          D.Ay,
                          {
                              sortedVoiceState: N,
                              channel: a,
                              widgetId: t,
                              flipped: !_,
                              isPreviewingInGame: g,
                              isSettingsPreview: f,
                              context: n,
                              size: x,
                              displayNameMode: o,
                              displayUserMode: c,
                              locked: u,
                          },
                          w[0],
                      ),
                  O &&
                      w.length > 1 &&
                      (0, i.jsx)(U, {
                          hiddenVoiceStates: w,
                          voiceStateMap: I,
                          size: (0, D.FT)(x),
                          locked: u,
                          flipped: !_,
                      }),
              ],
          })
        : u || !p
          ? null
          : (0, i.jsx)(M.g, { emptyText: L.intl.string(L.t.hEh0l1), icon: d.H });
});
function F(e) {
    let { isSettingsPreview: t } = e,
        n = (0, l.bG)([I.A, S.A], () => S.A.getChannel(I.A.getVoiceChannelId())),
        a = (0, m.Ay)(n),
        s = (function (e, t) {
            let n = (0, l.bG)([I.A, S.A], () => S.A.getChannel(I.A.getVoiceChannelId())),
                [i] = (0, l.bG)(
                    [T.Ay, f.A, I.A, S.A],
                    () => {
                        let e = S.A.getChannel(I.A.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [f.A.getMutableParticipants(e.id, _.ip.SPEAKER), f.A.getParticipantsVersion(e.id)]
                              : [T.Ay.getVoiceStatesForChannel(e), T.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    w.D,
                ),
                a = (0, x.$n)(n?.id, i),
                s = r.useMemo(() => new Map(a.map((e) => [e.user.id, e])), [a]),
                o = (0, l.bG)([E.default], () => E.default.getId());
            return [
                s,
                (0, l.yK)([C.A, I.A, v.A, g.A], () => {
                    let n = Array.from(
                        new Set(
                            a.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            }),
                        ),
                    );
                    if (-1 === t || n.length <= t) return n;
                    let i = new Map();
                    for (let t of n) {
                        let n = (0, c.R)(
                                {
                                    userId: t,
                                    checkSoundSharing: !0,
                                    checkSoundboardSounds: !1,
                                    checkIsMuted: !0,
                                    context: e,
                                },
                                [C.A, I.A, v.A, g.A],
                            ),
                            r = t === o;
                        (n || r) && i.set(t, { isSpeaking: n, isCurrentUser: r });
                    }
                    let r = [],
                        s = [],
                        l = [];
                    for (let e = 0; e < n.length; e++) {
                        let a = n[e],
                            o = i.get(a);
                        e < t ? r.push(a) : o && (o.isSpeaking || o.isCurrentUser) ? l.push(a) : s.push(a);
                    }
                    if (l.length > 0) {
                        let e = r.slice(0, t - l.length),
                            n = r.slice(t - l.length);
                        return [...e, ...l, ...n, ...s];
                    }
                    return n;
                }, [a, e, o, t]),
            ];
        })(P.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, l.bG)([A.A], () => A.A.getStreamerActiveStreamMetadata()),
        d = (0, k.b4)(),
        h = (0, u.h)(d?.id),
        b = (0, l.cf)([A.A, j.default, O.A], () => {
            let e = A.A.getCurrentUserActiveStream();
            return {
                displayUserMode: j.default.getDisplayUserMode(),
                displayNameMode: j.default.getDisplayNameMode(),
                avatarSizeMode: j.default.getAvatarSizeMode(),
                streamApplication: o?.pid === O.A.getTargetPID() ? (0, p.A)(d) : null,
                stream: e,
            };
        });
    return (0, i.jsx)(H, {
        ...b,
        application: h,
        ...e,
        overlayVoiceStates: s,
        channel: n,
        guildId: n?.guild_id,
        title: a ?? "",
        streamMetadata: o,
        streamApplication: b.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
