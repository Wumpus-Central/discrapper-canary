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
    p = t(220995),
    f = t(582904),
    I = t(551826),
    v = t(421768),
    S = t(209932),
    x = t(541157),
    _ = t(530804),
    E = t(955283),
    N = t(936520),
    y = t(616356),
    C = t(280450),
    b = t(360906),
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
        p = l.id,
        f = (0, r.bG)([C.default], () => C.default.getId() === p, [p]),
        [x, N, j] = (0, r.yK)(
            [b.Ay],
            () =>
                f
                    ? [!b.Ay.isSupported() || b.Ay.isSelfMute() || b.Ay.isSelfMutedTemporarily(), b.Ay.isSelfDeaf(), !1]
                    : [!b.Ay.isSupported() || b.Ay.isLocalMute(p), !1, b.Ay.isLocalVideoDisabled(p)],
            [f, p],
        ),
        T = (0, r.bG)([V.A], () => V.A.isPrioritySpeaker(p)),
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
            [y.A],
            () => [y.A.getStreamForUser(p, s.getGuildId()), y.A.getActiveStreamForUser(p, s.getGuildId())],
            [s, p],
        ),
        Z = (0, r.bG)([G.A], () => G.A.getSessionById(a)),
        J = w.Ay.useName(l),
        X = (0, r.bG)([P.A], () => P.A.getVoicePlatformForChannel(s.id, p), [s.id, p]),
        Q = (0, _.uy)(s.id, p),
        ee = (0, r.bG)(
            [O.A],
            () =>
                f &&
                O.A.getChannelId() === s.id &&
                O.A.getState() !== R.S7L.RTC_CONNECTED &&
                E.A.getConfig({ location: "ConnectedVoiceUser" }).showSelfConnectingUI,
            [f, s.id],
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
            localMute: x && !f,
            localVideoDisabled: j,
            mute: i || x,
            deaf: t || N,
            speaking: M,
            playingSoundboard: D,
            priority: T,
            embeddedApplication: K[0],
            isStreaming: null != H && H.channelId === s.id,
            isWatching: null != W && W.state !== R.XYD.ENDED,
            isGuest: L,
            isSelf: f,
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
            [E, y] = l.useState(null),
            b = l.useRef(null),
            O = (0, _.$n)(s.id, o ?? L),
            { shouldShow: G, dismiss: V } = (0, f.Z0)(s, { collapsed: u }),
            P = l.useRef(
                new d.J_(50, () => {
                    (y(b.current), (b.current = null));
                }),
            ),
            w = l.useRef(
                new d.J_(175, () => {
                    y(null);
                }),
            ),
            U = l.useCallback(
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
            z = (0, r.bG)([j.A], () => j.A.can(R.xBc.MOVE_MEMBERS, s)),
            B = t && z,
            K = (0, x.oN)(),
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
                    a = (0, x.Nd)(l, K);
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
                        showPreview: U,
                        hidePreview: F,
                        shouldShowHoverPopout: E === i.id,
                        tabIndex: A,
                    },
                    `voice-user-${i.id}`,
                );
            });
            return (
                null != g && g > 0
                    ? e.push((0, n.jsx)(k.aI, { collapsed: u, numAudience: g }, "audience"))
                    : u && O.length > c + 1 && e.push((0, n.jsx)(k.LR, { numUsers: O.length - c }, "collapsed-users")),
                G && e.push((0, n.jsx)(p.p, { channel: s, onClose: V }, "voice-invite-suggestions-button")),
                e
            );
        })();
        return null == q && null == v
            ? null
            : (0, n.jsxs)(N.Wr, {
                  className: a()(I, M.p_, { [M.yZ]: u, [M.lY]: h, [M.fT]: S }),
                  collapsed: u,
                  children: [q, v],
              });
    };
