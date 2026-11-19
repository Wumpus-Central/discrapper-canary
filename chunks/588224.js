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
    _ = t(530804),
    x = t(955283),
    y = t(293277),
    E = t(616356),
    N = t(46653),
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
    U = t(616352);
let M = l.memo((e) => {
    let { mute: i, deaf: t, user: l, channel: s, sessionId: a, nick: d } = e,
        f = l.id,
        p = (0, r.bG)([N.default], () => N.default.getId() === f, [f]),
        [S, y, b] = (0, r.yK)(
            [C.Ay],
            () =>
                p
                    ? [!C.Ay.isSupported() || C.Ay.isSelfMute() || C.Ay.isSelfMutedTemporarily(), C.Ay.isSelfDeaf(), !1]
                    : [!C.Ay.isSupported() || C.Ay.isLocalMute(f), !1, C.Ay.isLocalVideoDisabled(f)],
            [p, f],
        ),
        j = (0, r.bG)([O.A], () => O.A.isPrioritySpeaker(f)),
        U = (0, o.A)({ userId: f, checkSoundSharing: !0 }),
        M = (0, r.bG)([v.A], () => v.A.isUserPlayingSounds(f)),
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
        z = (0, m.A)(null != F ? [F.applicationId] : []),
        B = (0, c.A)(f, s.guild_id)[0],
        K = (0, A.YY)(B?.application_id).data ?? void 0,
        { gameRecord: Y } = (0, g.Ay)(B?.application_id),
        [q, H] = (0, r.yK)(
            [E.A],
            () => [E.A.getStreamForUser(f, s.getGuildId()), E.A.getActiveStreamForUser(f, s.getGuildId())],
            [s, f],
        ),
        $ = (0, r.bG)([G.A], () => G.A.getSessionById(a)),
        W = V.Ay.useName(l),
        Z = (0, r.bG)([P.A], () => P.A.getVoicePlatformForChannel(s.id, f), [s.id, f]),
        J = (0, _.uy)(s.id, f),
        X = (0, r.bG)(
            [T.A],
            () =>
                p &&
                T.A.getChannelId() === s.id &&
                T.A.getState() !== k.S7L.RTC_CONNECTED &&
                x.A.getConfig({ location: "ConnectedVoiceUser" }).showSelfConnectingUI,
            [p, s.id],
        );
    return (0, n.jsx)(I.A, {
        shakeLocation: R.uD.VOICE_USER,
        isShaking: U || M,
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
            deaf: t || y,
            speaking: U,
            playingSoundboard: M,
            priority: j,
            embeddedApplication: z[0],
            isStreaming: null != q && q.channelId === s.id,
            isWatching: null != H && H.state !== k.XYD.ENDED,
            isGuest: D,
            isSelf: p,
            application: B?.session_id != null ? K : void 0,
            game: B?.session_id != null ? (Y ?? void 0) : void 0,
            soundboardMuted: L,
        }),
    });
});
M.displayName = "ConnectedVoiceUser";
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
                    isThread: x = !1,
                } = e,
                [E, C] = l.useState(null),
                T = l.useRef(null),
                G = (0, _.$n)(s.id, o ?? D),
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
                z = (0, r.bG)([b.A], () => b.A.can(k.xBc.MOVE_MEMBERS, s)),
                B = t && z,
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
                        M,
                        {
                            user: i,
                            nick: t,
                            isSelfOnOtherClient: N.default.getId() === i.id && a.sessionId !== N.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: s,
                            collapsed: u,
                            canDrag: B,
                            showPreview: L,
                            hidePreview: F,
                            shouldShowHoverPopout: E === i.id,
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
                : (0, n.jsxs)(y.Wr, {
                      className: a()(I, U.p_, { [U.yZ]: u, [U.lY]: h, [U.fT]: x }),
                      collapsed: u,
                      children: [q, v],
                  });
        },
    },
);
