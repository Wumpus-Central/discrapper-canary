i.d(t, { Ay: () => H, DH: () => F }), i(321073);
var n = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    s = i(311907),
    o = i(397927),
    d = i(717558),
    c = i(429913),
    u = i(478063),
    m = i(47167),
    _ = i(22705),
    A = i(209932),
    g = i(63995),
    h = i(69407),
    f = i(530804),
    p = i(616356),
    S = i(961350),
    I = i(734057),
    x = i(309010),
    v = i(485296),
    C = i(287809),
    E = i(977997),
    y = i(607567),
    T = i(256415),
    N = i(403362),
    b = i(996439),
    j = i(820883),
    L = i(810412),
    P = i(412477),
    O = i(395011),
    R = i(243612),
    D = i(147905);
i(392164);
var U = i(652215),
    M = i(731854),
    w = i(985018),
    V = i(585990);
let G = (e) => {
    let t = (e ?? 0) % j.A.DEFAULT_AVATARS.length;
    return j.A.DEFAULT_AVATARS[t];
};
function k(e) {
    let { hiddenVoiceStates: t, voiceStateMap: i, size: a, locked: l, flipped: d } = e,
        c = (0, D.Ob)(a),
        m = (0, s.yK)(
            [C.default, I.A],
            () =>
                t
                    .map((e) => {
                        let t = C.default.getUser(e);
                        if (null == t) return;
                        let n = I.A.getChannel(i.get(e)?.voiceState.channelId);
                        return t.getAvatarURL(n?.getGuildId(), c, !1);
                    })
                    .filter(N.Vq),
            [t, i, c],
        ),
        _ = m[0] ?? G(0),
        A = m[1] ?? G(1);
    return (0, n.jsxs)("div", {
        className: r()(V.ZR, l && V.xt, d && V.zq),
        children: [
            (0, n.jsx)("div", {
                className: V.e5,
                children: (0, n.jsx)(u.A, { size: a, backSrc: _, frontSrc: A, isTyping: !1 }),
            }),
            (0, n.jsx)("div", {
                className: V.AP,
                children: (0, n.jsxs)(o.Text, {
                    variant: "text-xs/medium",
                    children: ["+", t.length, " others in voice"],
                }),
            }),
        ],
    });
}
let F = a.memo(function (e) {
    let {
            id: t,
            context: i = M.x.DEFAULT,
            channel: l,
            overlayVoiceStates: r,
            displayNameMode: d,
            displayUserMode: c,
            locked: u,
            pinned: m,
            guildId: _,
            showEmpty: A = !0,
            isPreviewingInGame: g,
            isSettingsPreview: h = !1,
            anchorLeft: f,
            avatarSizeMode: S,
            maxDisplayedVoiceStates: I = 8,
        } = e,
        x = (0, L.Dk)(
            () =>
                (function (e) {
                    let [t, i] = e;
                    return new Set(i);
                })(r),
            [r],
        ),
        [v, C] = r,
        E = C.length > 0 && null != i && null != l && (!u || m),
        y = (0, s.yK)(
            [p.A],
            () =>
                Array.from(x)
                    .map((e) => p.A.getStreamForUser(e, _))
                    .filter(N.Vq)
                    .map((e) => e.ownerId),
            [_, x],
        );
    a.useEffect(() => {
        E &&
            (0, L.Y)(U.uss.VOICE_V3, {
                locked: T.default.isInstanceLocked(),
                shownUserIds: Array.from(x),
                liveUserIds: y,
                contentInventoryIds: [],
            });
    }, [x, y, E]);
    let b = -1 !== I ? C.slice(0, I) : C,
        j = -1 !== I ? C.slice(I) : [],
        O = v.get(j[0]),
        R = c === U.f5z.ALWAYS && -1 !== I;
    return E
        ? (0, n.jsxs)("div", {
              className: V.h8,
              children: [
                  b.map((e) => {
                      let a = v.get(e);
                      return null == a
                          ? null
                          : (0, n.jsx)(
                                D.Ay,
                                {
                                    sortedVoiceState: a,
                                    channel: l,
                                    widgetId: t,
                                    flipped: !f,
                                    isPreviewingInGame: g,
                                    isSettingsPreview: h,
                                    context: i,
                                    size: S,
                                    displayNameMode: d,
                                    displayUserMode: c,
                                    locked: u,
                                },
                                e,
                            );
                  }),
                  R &&
                      1 === j.length &&
                      null != O &&
                      (0, n.jsx)(
                          D.Ay,
                          {
                              sortedVoiceState: O,
                              channel: l,
                              widgetId: t,
                              flipped: !f,
                              isPreviewingInGame: g,
                              isSettingsPreview: h,
                              context: i,
                              size: S,
                              displayNameMode: d,
                              displayUserMode: c,
                              locked: u,
                          },
                          j[0],
                      ),
                  R &&
                      j.length > 1 &&
                      (0, n.jsx)(k, {
                          hiddenVoiceStates: j,
                          voiceStateMap: v,
                          size: (0, D.FT)(S),
                          locked: u,
                          flipped: !f,
                      }),
              ],
          })
        : u || !A
          ? null
          : (0, n.jsx)(P.g, { emptyText: w.intl.string(w.t.hEh0l1), icon: o.HKD });
});
function H(e) {
    let { isSettingsPreview: t } = e,
        i = (0, s.bG)([x.A, I.A], () => I.A.getChannel(x.A.getVoiceChannelId())),
        l = (0, m.Ay)(i),
        r = (function (e, t) {
            let i = (0, s.bG)([x.A, I.A], () => I.A.getChannel(x.A.getVoiceChannelId())),
                [n] = (0, s.bG)(
                    [y.Ay, g.A, x.A, I.A],
                    () => {
                        let e = I.A.getChannel(x.A.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [g.A.getMutableParticipants(e.id, h.ip.SPEAKER), g.A.getParticipantsVersion(e.id)]
                              : [y.Ay.getVoiceStatesForChannel(e), y.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    b.D,
                ),
                l = (0, f.$n)(i?.id, n),
                r = a.useMemo(() => new Map(l.map((e) => [e.user.id, e])), [l]),
                o = (0, s.bG)([S.default], () => S.default.getId());
            return [
                r,
                (0, s.yK)([E.A, x.A, v.A, A.A], () => {
                    let i = Array.from(
                        new Set(
                            l.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            }),
                        ),
                    );
                    if (-1 === t || i.length <= t) return i;
                    let n = new Map();
                    for (let t of i) {
                        let i = (0, d.R)(
                                {
                                    userId: t,
                                    checkSoundSharing: !0,
                                    checkSoundboardSounds: !1,
                                    checkIsMuted: !0,
                                    context: e,
                                },
                                [E.A, x.A, v.A, A.A],
                            ),
                            a = t === o;
                        (i || a) && n.set(t, { isSpeaking: i, isCurrentUser: a });
                    }
                    let a = [],
                        r = [],
                        s = [];
                    for (let e = 0; e < i.length; e++) {
                        let l = i[e],
                            o = n.get(l);
                        e < t ? a.push(l) : o && (o.isSpeaking || o.isCurrentUser) ? s.push(l) : r.push(l);
                    }
                    if (s.length > 0) {
                        let e = a.slice(0, t - s.length),
                            i = a.slice(t - s.length);
                        return [...e, ...s, ...i, ...r];
                    }
                    return i;
                }, [l, e, o, t]),
            ];
        })(M.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, s.bG)([p.A], () => p.A.getStreamerActiveStreamMetadata()),
        u = (0, R.b4)(),
        C = (0, c.h)(u?.id),
        N = (0, s.cf)([p.A, T.default, O.A], () => {
            let e = p.A.getCurrentUserActiveStream();
            return {
                displayUserMode: T.default.getDisplayUserMode(),
                displayNameMode: T.default.getDisplayNameMode(),
                avatarSizeMode: T.default.getAvatarSizeMode(),
                streamApplication: o?.pid === O.A.getTargetPID() ? (0, _.A)(u) : null,
                stream: e,
            };
        });
    return (0, n.jsx)(F, {
        ...N,
        application: C,
        ...e,
        overlayVoiceStates: r,
        channel: i,
        guildId: i?.guild_id,
        title: l ?? "",
        streamMetadata: o,
        streamApplication: N.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
