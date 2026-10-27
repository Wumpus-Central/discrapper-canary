(t.d(i, { A: () => L }), t(321073));
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    d = t(451988),
    o = t(717558),
    u = t(933958),
    c = t(191424),
    A = t(627363),
    m = t(429913),
    g = t(202163),
    h = t(550946),
    p = t(220995),
    f = t(582904),
    I = t(551826),
    v = t(421768),
    S = t(209932),
    x = t(530804),
    _ = t(955283),
    E = t(936520),
    N = t(616356),
    y = t(280450),
    C = t(360906),
    b = t(576705),
    j = t(290863),
    T = t(763827),
    O = t(528767),
    G = t(485296),
    V = t(977997),
    P = t(427262),
    w = t(340851),
    k = t(652215),
    R = t(31408),
    U = t(616352);
let M = l.memo((e) => {
    let { mute: i, deaf: t, user: l, channel: s, sessionId: a, nick: d } = e,
        p = l.id,
        f = (0, r.bG)([y.default], () => y.default.getId() === p, [p]),
        [E, b, j] = (0, r.yK)(
            [C.Ay],
            () =>
                f
                    ? [!C.Ay.isSupported() || C.Ay.isSelfMute() || C.Ay.isSelfMutedTemporarily(), C.Ay.isSelfDeaf(), !1]
                    : [!C.Ay.isSupported() || C.Ay.isLocalMute(p), !1, C.Ay.isLocalVideoDisabled(p)],
            [f, p],
        ),
        U = (0, r.bG)([G.A], () => G.A.isPrioritySpeaker(p)),
        M = (0, o.A)({ userId: p, checkSoundSharing: !0 }),
        D = (0, r.bG)([S.A], () => S.A.isUserPlayingSounds(p)),
        L = (0, h.A)(s.guild_id, p),
        F = (0, r.bG)([S.A], () => S.A.isLocalSoundboardMuted(p)),
        z = (0, v.g)(F ? "VoiceUser" : "Invalid - VoiceUser"),
        B = (0, r.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: i } = e;
                    return i.has(p);
                }),
            [p, s.id],
        ),
        K = (0, m.A)(null != B ? [B.applicationId] : []),
        Y = (0, c.A)(p, s.guild_id)[0],
        q = (0, A.YY)(Y?.application_id).data ?? void 0,
        { gameRecord: $ } = (0, g.A)(Y?.application_id),
        [H, W] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(p, s.getGuildId()), N.A.getActiveStreamForUser(p, s.getGuildId())],
            [s, p],
        ),
        Z = (0, r.bG)([O.A], () => O.A.getSessionById(a)),
        J = P.Ay.useName(l),
        X = (0, r.bG)([V.A], () => V.A.getVoicePlatformForChannel(s.id, p), [s.id, p]),
        Q = (0, x.uy)(s.id, p),
        ee = (0, r.bG)(
            [T.A],
            () =>
                f &&
                T.A.getChannelId() === s.id &&
                T.A.getState() !== k.S7L.RTC_CONNECTED &&
                _.A.getConfig({ location: "ConnectedVoiceUser" }).showSelfConnectingUI,
            [f, s.id],
        );
    return (0, n.jsx)(I.A, {
        shakeLocation: R.uD.VOICE_USER,
        isShaking: M || D,
        children: (0, n.jsx)(w.Ay, {
            ...e,
            nick: d ?? J,
            canDrag: e.canDrag && !L,
            disconnected: Q,
            connecting: ee,
            otherClientSessionType: Z?.clientInfo?.os,
            voicePlatform: X,
            localMute: E && !f,
            localVideoDisabled: j,
            mute: i || E,
            deaf: t || b,
            speaking: M,
            playingSoundboard: D,
            priority: U,
            embeddedApplication: K[0],
            isStreaming: null != H && H.channelId === s.id,
            isWatching: null != W && W.state !== k.XYD.ENDED,
            isGuest: L,
            isSelf: f,
            application: Y?.session_id != null ? q : void 0,
            game: Y?.session_id != null ? ($ ?? void 0) : void 0,
            soundboardMuted: z && F,
        }),
    });
});
M.displayName = "ConnectedVoiceUser";
let D = [],
    L = function (e) {
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
            [_, N] = l.useState(null),
            C = l.useRef(null),
            T = (0, x.$n)(s.id, o ?? D),
            { shouldShow: O, dismiss: G } = (0, f.Z0)(s, { collapsed: u }),
            V = l.useRef(
                new d.J_(50, () => {
                    (N(C.current), (C.current = null));
                }),
            ),
            P = l.useRef(
                new d.J_(175, () => {
                    N(null);
                }),
            ),
            R = l.useCallback(
                (e) => {
                    i && (P.current.cancel(), (C.current = e), V.current.delay());
                },
                [i],
            ),
            L = l.useCallback(
                (e) => {
                    i && (V.current.cancel(), (C.current = null), P.current.delay());
                },
                [i],
            ),
            F = (0, r.bG)([b.A], () => b.A.can(k.xBc.MOVE_MEMBERS, s)),
            z = t && F,
            B = (0, r.yK)([j.A], () => {
                if (u) return [];
                let e = new Set();
                return (
                    T?.forEach((i) => {
                        let { user: t } = i;
                        j.A.getActivities(t.id, s.guild_id).forEach((i) => {
                            null != i.application_id && e.add(i.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(B);
        let K = (function () {
            if (null == T || 0 === T.length) return null;
            let e = (u && T.length > c + 1 ? T.slice(0, c) : T).map((e) => {
                let { user: i, nick: t, voiceState: l } = e;
                return (0, n.jsx)(
                    M,
                    {
                        user: i,
                        nick: t,
                        isSelfOnOtherClient: y.default.getId() === i.id && l.sessionId !== y.default.getSessionId(),
                        mute: l.isVoiceMuted(),
                        deaf: l.isVoiceDeafened(),
                        video: l.selfVideo,
                        serverMute: l.mute,
                        serverDeaf: l.deaf,
                        sessionId: l.sessionId ?? "",
                        channel: s,
                        collapsed: u,
                        canDrag: z,
                        showPreview: R,
                        hidePreview: L,
                        shouldShowHoverPopout: _ === i.id,
                        tabIndex: A,
                    },
                    `voice-user-${i.id}`,
                );
            });
            return (
                null != g && g > 0
                    ? e.push((0, n.jsx)(w.aI, { collapsed: u, numAudience: g }, "audience"))
                    : u && T.length > c + 1 && e.push((0, n.jsx)(w.LR, { numUsers: T.length - c }, "collapsed-users")),
                O && e.push((0, n.jsx)(p.p, { channel: s, onClose: G }, "voice-invite-suggestions-button")),
                e
            );
        })();
        return null == K && null == v
            ? null
            : (0, n.jsxs)(E.Wr, {
                  className: a()(I, U.p_, { [U.yZ]: u, [U.lY]: h, [U.fT]: S }),
                  collapsed: u,
                  children: [K, v],
              });
    };
