(t.d(i, { A: () => F }), t(321073));
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
    f = t(220995),
    p = t(582904),
    I = t(551826),
    v = t(421768),
    S = t(209932),
    _ = t(541157),
    x = t(530804),
    y = t(955283),
    E = t(669335),
    N = t(616356),
    b = t(280450),
    C = t(999926),
    j = t(576705),
    T = t(290863),
    O = t(763827),
    G = t(528767),
    V = t(485296),
    P = t(977997),
    w = t(427262),
    k = t(340851),
    R = t(652215),
    U = t(31408),
    M = t(616352);
let D = l.memo((e) => {
    let { mute: i, deaf: t, user: l, channel: s, sessionId: a, nick: d } = e,
        f = l.id,
        p = (0, r.bG)([b.default], () => b.default.getId() === f, [f]),
        [_, E, j] = (0, r.yK)(
            [C.Ay],
            () =>
                p
                    ? [!C.Ay.isSupported() || C.Ay.isSelfMute() || C.Ay.isSelfMutedTemporarily(), C.Ay.isSelfDeaf(), !1]
                    : [!C.Ay.isSupported() || C.Ay.isLocalMute(f), !1, C.Ay.isLocalVideoDisabled(f)],
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
        { gameRecord: $ } = (0, g.Ay)(Y?.application_id),
        [H, W] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(f, s.getGuildId()), N.A.getActiveStreamForUser(f, s.getGuildId())],
            [s, f],
        ),
        Z = (0, r.bG)([G.A], () => G.A.getSessionById(a)),
        J = w.Ay.useName(l),
        X = (0, r.bG)([P.A], () => P.A.getVoicePlatformForChannel(s.id, f), [s.id, f]),
        Q = (0, x.uy)(s.id, f),
        ee = (0, r.bG)(
            [O.A],
            () =>
                p &&
                O.A.getChannelId() === s.id &&
                O.A.getState() !== R.S7L.RTC_CONNECTED &&
                y.A.getConfig({ location: "ConnectedVoiceUser" }).showSelfConnectingUI,
            [p, s.id],
        );
    return (0, n.jsx)(I.A, {
        shakeLocation: U.uD.VOICE_USER,
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
            isStreaming: null != H && H.channelId === s.id,
            isWatching: null != W && W.state !== R.XYD.ENDED,
            isGuest: L,
            isSelf: p,
            application: Y?.session_id != null ? q : void 0,
            game: Y?.session_id != null ? ($ ?? void 0) : void 0,
            soundboardMuted: z && F,
        }),
    });
});
D.displayName = "ConnectedVoiceUser";
let L = [],
    F = function (e) {
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
            C = l.useRef(null),
            O = (0, x.$n)(s.id, o ?? L),
            { shouldShow: G, dismiss: V } = (0, p.Z0)(s, { collapsed: u }),
            P = l.useRef(
                new d.J_(50, () => {
                    (N(C.current), (C.current = null));
                }),
            ),
            w = l.useRef(
                new d.J_(175, () => {
                    N(null);
                }),
            ),
            U = l.useCallback(
                (e) => {
                    i && (w.current.cancel(), (C.current = e), P.current.delay());
                },
                [i],
            ),
            F = l.useCallback(
                (e) => {
                    i && (P.current.cancel(), (C.current = null), w.current.delay());
                },
                [i],
            ),
            z = (0, r.bG)([j.A], () => j.A.can(R.xBc.MOVE_MEMBERS, s)),
            B = t && z,
            K = (0, _.oN)(),
            Y = (0, r.yK)([T.A], () => {
                if (u) return [];
                let e = new Set();
                return (
                    O?.forEach((i) => {
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
            if (null == O || 0 === O.length) return null;
            let e = (u && O.length > c + 1 ? O.slice(0, c) : O).map((e) => {
                let { user: i, nick: t, voiceState: l } = e,
                    a = (0, _.Nd)(l, K);
                return (0, n.jsx)(
                    D,
                    {
                        user: i,
                        nick: t,
                        isSelfOnOtherClient: b.default.getId() === i.id && a.sessionId !== b.default.getSessionId(),
                        mute: a.isVoiceMuted(),
                        deaf: a.isVoiceDeafened(),
                        video: a.selfVideo,
                        serverMute: a.mute,
                        serverDeaf: a.deaf,
                        sessionId: a.sessionId ?? "",
                        channel: s,
                        collapsed: u,
                        canDrag: B,
                        showPreview: U,
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
                    : u && O.length > c + 1 && e.push((0, n.jsx)(k.LR, { numUsers: O.length - c }, "collapsed-users")),
                G && e.push((0, n.jsx)(f.p, { channel: s, onClose: V }, "voice-invite-suggestions-button")),
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
    };
