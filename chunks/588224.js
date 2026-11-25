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
    v = t(209932),
    S = t(541157),
    y = t(530804),
    _ = t(955283),
    x = t(481947),
    N = t(616356),
    E = t(46653),
    C = t(988468),
    b = t(576705),
    j = t(290863),
    T = t(495867),
    G = t(528767),
    O = t(485296),
    P = t(977997),
    V = t(427262),
    w = t(340851),
    k = t(652215),
    R = t(31408),
    M = t(616352);
let U = l.memo((e) => {
    let { mute: i, deaf: t, user: l, channel: s, sessionId: a, nick: d } = e,
        f = l.id,
        p = (0, r.bG)([E.default], () => E.default.getId() === f, [f]),
        [S, x, b] = (0, r.yK)(
            [C.Ay],
            () =>
                p
                    ? [!C.Ay.isSupported() || C.Ay.isSelfMute() || C.Ay.isSelfMutedTemporarily(), C.Ay.isSelfDeaf(), !1]
                    : [!C.Ay.isSupported() || C.Ay.isLocalMute(f), !1, C.Ay.isLocalVideoDisabled(f)],
            [p, f],
        ),
        j = (0, r.bG)([O.A], () => O.A.isPrioritySpeaker(f)),
        M = (0, o.A)({ userId: f, checkSoundSharing: !0 }),
        U = (0, r.bG)([v.A], () => v.A.isUserPlayingSounds(f)),
        D = (0, h.A)(s.guild_id, f),
        L = (0, r.bG)([v.A], () => v.A.isLocalSoundboardMuted(f)),
        F = (0, r.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: i } = e;
                    return i.has(f);
                }),
            [f, s.id],
        ),
        B = (0, m.A)(null != F ? [F.applicationId] : []),
        z = (0, c.A)(f, s.guild_id)[0],
        K = (0, A.YY)(z?.application_id).data ?? void 0,
        { gameRecord: Y } = (0, g.Ay)(z?.application_id),
        [q, H] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(f, s.getGuildId()), N.A.getActiveStreamForUser(f, s.getGuildId())],
            [s, f],
        ),
        $ = (0, r.bG)([G.A], () => G.A.getSessionById(a)),
        W = V.Ay.useName(l),
        Z = (0, r.bG)([P.A], () => P.A.getVoicePlatformForChannel(s.id, f), [s.id, f]),
        J = (0, y.uy)(s.id, f),
        X = (0, r.bG)(
            [T.A],
            () =>
                p &&
                T.A.getChannelId() === s.id &&
                T.A.getState() !== k.S7L.RTC_CONNECTED &&
                _.A.getConfig({ location: "ConnectedVoiceUser" }).showSelfConnectingUI,
            [p, s.id],
        );
    return (0, n.jsx)(I.A, {
        shakeLocation: R.uD.VOICE_USER,
        isShaking: M || U,
        children: (0, n.jsx)(w.Ay, {
            ...e,
            nick: d ?? W,
            canDrag: e.canDrag && !D,
            disconnected: J,
            connecting: X,
            otherClientSessionType: $?.clientInfo?.os,
            voicePlatform: Z,
            localMute: S && !p,
            localVideoDisabled: b,
            mute: i || S,
            deaf: t || x,
            speaking: M,
            playingSoundboard: U,
            priority: j,
            embeddedApplication: B[0],
            isStreaming: null != q && q.channelId === s.id,
            isWatching: null != H && H.state !== k.XYD.ENDED,
            isGuest: D,
            isSelf: p,
            application: z?.session_id != null ? K : void 0,
            game: z?.session_id != null ? (Y ?? void 0) : void 0,
            soundboardMuted: L,
        }),
    });
});
U.displayName = "ConnectedVoiceUser";
let D = [];
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
                    isThread: _ = !1,
                } = e,
                [N, C] = l.useState(null),
                T = l.useRef(null),
                G = (0, y.$n)(s.id, o ?? D),
                { shouldShow: O, dismiss: P } = (0, p.Z0)(s, { collapsed: u }),
                V = l.useRef(
                    new d.J_(50, () => {
                        (C(T.current), (T.current = null));
                    }),
                ),
                R = l.useRef(
                    new d.J_(175, () => {
                        C(null);
                    }),
                ),
                L = l.useCallback(
                    (e) => {
                        i && (R.current.cancel(), (T.current = e), V.current.delay());
                    },
                    [i],
                ),
                F = l.useCallback(
                    (e) => {
                        i && (V.current.cancel(), (T.current = null), R.current.delay());
                    },
                    [i],
                ),
                B = (0, r.bG)([b.A], () => b.A.can(k.xBc.MOVE_MEMBERS, s)),
                z = t && B,
                K = (0, S.oN)(),
                Y = (0, r.yK)([j.A], () => {
                    if (u) return [];
                    let e = new Set();
                    return (
                        G?.forEach((i) => {
                            let { user: t } = i;
                            j.A.getActivities(t.id, s.guild_id).forEach((i) => {
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
                        a = (0, S.Nd)(l, K);
                    return (0, n.jsx)(
                        U,
                        {
                            user: i,
                            nick: t,
                            isSelfOnOtherClient: E.default.getId() === i.id && a.sessionId !== E.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: s,
                            collapsed: u,
                            canDrag: z,
                            showPreview: L,
                            hidePreview: F,
                            shouldShowHoverPopout: N === i.id,
                            tabIndex: A,
                        },
                        `voice-user-${i.id}`,
                    );
                });
                return (
                    null != g && g > 0
                        ? e.push((0, n.jsx)(w.aI, { collapsed: u, numAudience: g }, "audience"))
                        : u &&
                          G.length > c + 1 &&
                          e.push((0, n.jsx)(w.LR, { numUsers: G.length - c }, "collapsed-users")),
                    O && e.push((0, n.jsx)(f.p, { channel: s, onClose: P }, "voice-invite-suggestions-button")),
                    e
                );
            })();
            return null == q && null == v
                ? null
                : (0, n.jsxs)(x.Wr, {
                      className: a()(I, M.p_, { [M.yZ]: u, [M.lY]: h, [M.fT]: _ }),
                      collapsed: u,
                      children: [q, v],
                  });
        },
    },
);
