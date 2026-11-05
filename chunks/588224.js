t(321073);
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(855986),
    d = t(451988),
    o = t(717558),
    u = t(933958),
    c = t(191424),
    A = t(627363),
    m = t(429913),
    g = t(202163),
    h = t(550946),
    f = t(220995),
    p = t(582904),
    I = t(551826),
    v = t(421768),
    S = t(209932),
    _ = t(541157),
    x = t(530804),
    y = t(955283),
    E = t(293277),
    N = t(616356),
    C = t(46653),
    b = t(754712),
    j = t(576705),
    T = t(290863),
    G = t(495867),
    O = t(528767),
    V = t(485296),
    P = t(977997),
    w = t(427262),
    k = t(340851),
    U = t(652215),
    R = t(31408),
    M = t(616352);
let D = l.memo((e) => {
    let { mute: i, deaf: t, user: l, channel: s, sessionId: a, nick: d } = e,
        f = l.id,
        p = (0, r.bG)([C.default], () => C.default.getId() === f, [f]),
        [_, E, j] = (0, r.yK)(
            [b.Ay],
            () =>
                p
                    ? [!b.Ay.isSupported() || b.Ay.isSelfMute() || b.Ay.isSelfMutedTemporarily(), b.Ay.isSelfDeaf(), !1]
                    : [!b.Ay.isSupported() || b.Ay.isLocalMute(f), !1, b.Ay.isLocalVideoDisabled(f)],
            [p, f],
        ),
        T = (0, r.bG)([V.A], () => V.A.isPrioritySpeaker(f)),
        M = (0, o.A)({ userId: f, checkSoundSharing: !0 }),
        D = (0, r.bG)([S.A], () => S.A.isUserPlayingSounds(f)),
        L = (0, h.A)(s.guild_id, f),
        F = (0, r.bG)([S.A], () => S.A.isLocalSoundboardMuted(f)),
        z = (0, v.g)(F ? "VoiceUser" : "Invalid - VoiceUser"),
        B = (0, r.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: i } = e;
                    return i.has(f);
                }),
            [f, s.id],
        ),
        K = (0, m.A)(null != B ? [B.applicationId] : []),
        Y = (0, c.A)(f, s.guild_id)[0],
        q = (0, A.YY)(Y?.application_id).data ?? void 0,
        { gameRecord: H } = (0, g.Ay)(Y?.application_id),
        [$, W] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(f, s.getGuildId()), N.A.getActiveStreamForUser(f, s.getGuildId())],
            [s, f],
        ),
        Z = (0, r.bG)([O.A], () => O.A.getSessionById(a)),
        J = w.Ay.useName(l),
        X = (0, r.bG)([P.A], () => P.A.getVoicePlatformForChannel(s.id, f), [s.id, f]),
        Q = (0, x.uy)(s.id, f),
        ee = (0, r.bG)(
            [G.A],
            () =>
                p &&
                G.A.getChannelId() === s.id &&
                G.A.getState() !== U.S7L.RTC_CONNECTED &&
                y.A.getConfig({ location: "ConnectedVoiceUser" }).showSelfConnectingUI,
            [p, s.id],
        );
    return (0, n.jsx)(I.A, {
        shakeLocation: R.uD.VOICE_USER,
        isShaking: M || D,
        children: (0, n.jsx)(k.Ay, {
            ...e,
            nick: d ?? J,
            canDrag: e.canDrag && !L,
            disconnected: Q,
            connecting: ee,
            otherClientSessionType: Z?.clientInfo?.os,
            voicePlatform: X,
            localMute: _ && !p,
            localVideoDisabled: j,
            mute: i || _,
            deaf: t || E,
            speaking: M,
            playingSoundboard: D,
            priority: T,
            embeddedApplication: K[0],
            isStreaming: null != $ && $.channelId === s.id,
            isWatching: null != W && W.state !== U.XYD.ENDED,
            isGuest: L,
            isSelf: p,
            application: Y?.session_id != null ? q : void 0,
            game: Y?.session_id != null ? (H ?? void 0) : void 0,
            soundboardMuted: z && F,
        }),
    });
});
D.displayName = "ConnectedVoiceUser";
let L = [];
t.d(
    i,
    {},
    {
        A: function (e) {
            let {
                    allowPreviews: i = !0,
                    allowDragging: t = !0,
                    channel: s,
                    voiceStates: o,
                    collapsed: u,
                    collapsedMax: c = 6,
                    tabIndex: A,
                    numAudience: g,
                    withGuildIcon: h = !1,
                    className: I,
                    children: v,
                    isThread: S = !1,
                } = e,
                [y, N] = l.useState(null),
                b = l.useRef(null),
                G = (0, x.$n)(s.id, o ?? L),
                { shouldShow: O, dismiss: V } = (0, p.Z0)(s, { collapsed: u }),
                P = l.useRef(
                    new d.J_(50, () => {
                        (N(b.current), (b.current = null));
                    }),
                ),
                w = l.useRef(
                    new d.J_(175, () => {
                        N(null);
                    }),
                ),
                R = l.useCallback(
                    (e) => {
                        i && (w.current.cancel(), (b.current = e), P.current.delay());
                    },
                    [i],
                ),
                F = l.useCallback(
                    (e) => {
                        i && (P.current.cancel(), (b.current = null), w.current.delay());
                    },
                    [i],
                ),
                z = (0, r.bG)([j.A], () => j.A.can(U.xBc.MOVE_MEMBERS, s)),
                B = t && z,
                K = (0, _.oN)(),
                Y = (0, r.yK)([T.A], () => {
                    if (u) return [];
                    let e = new Set();
                    return (
                        G?.forEach((i) => {
                            let { user: t } = i;
                            T.A.getActivities(t.id, s.guild_id).forEach((i) => {
                                null != i.application_id && e.add(i.application_id);
                            });
                        }),
                        Array.from(e)
                    );
                });
            (0, m.A)(Y);
            let q = (function () {
                if (null == G || 0 === G.length) return null;
                let e = (u && G.length > c + 1 ? G.slice(0, c) : G).map((e) => {
                    let { user: i, nick: t, voiceState: l } = e,
                        a = (0, _.Nd)(l, K);
                    return (0, n.jsx)(
                        D,
                        {
                            user: i,
                            nick: t,
                            isSelfOnOtherClient: C.default.getId() === i.id && a.sessionId !== C.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: s,
                            collapsed: u,
                            canDrag: B,
                            showPreview: R,
                            hidePreview: F,
                            shouldShowHoverPopout: y === i.id,
                            tabIndex: A,
                        },
                        `voice-user-${i.id}`,
                    );
                });
                return (
                    null != g && g > 0
                        ? e.push((0, n.jsx)(k.aI, { collapsed: u, numAudience: g }, "audience"))
                        : u &&
                          G.length > c + 1 &&
                          e.push((0, n.jsx)(k.LR, { numUsers: G.length - c }, "collapsed-users")),
                    O && e.push((0, n.jsx)(f.p, { channel: s, onClose: V }, "voice-invite-suggestions-button")),
                    e
                );
            })();
            return null == q && null == v
                ? null
                : (0, n.jsxs)(E.Wr, {
                      className: a()(I, M.p_, { [M.yZ]: u, [M.lY]: h, [M.fT]: S }),
                      collapsed: u,
                      children: [q, v],
                  });
        },
    },
);
