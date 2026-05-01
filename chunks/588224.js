i.d(t, { A: () => H }), i(321073), i(667532);
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    d = i(451988),
    o = i(717558),
    u = i(933958),
    c = i(627363),
    m = i(429913),
    h = i(313961),
    g = i(550946),
    A = i(962392),
    p = i(220995),
    I = i(582904),
    x = i(551826),
    v = i(159426),
    f = i(25528),
    _ = i(530804),
    E = i(481947),
    N = i(591346),
    S = i(616356),
    y = i(495544),
    C = i(51760),
    j = i(576705),
    b = i(290863),
    T = i(528767),
    O = i(485296),
    k = i(977997),
    G = i(427262),
    V = i(847221),
    w = i(340851),
    R = i(652215),
    U = i(31408),
    P = i(588533);
let D = l.memo((e) => {
    let { mute: t, deaf: i, user: l, channel: s, sessionId: a, nick: d } = e,
        A = l.id,
        p = (0, r.bG)([y.default], () => y.default.getId() === A, [A]),
        [I, E, N] = (0, r.yK)(
            [C.Ay],
            () =>
                p
                    ? [!C.Ay.isSupported() || C.Ay.isSelfMute() || C.Ay.isSelfMutedTemporarily(), C.Ay.isSelfDeaf(), !1]
                    : [!C.Ay.isSupported() || C.Ay.isLocalMute(A), !1, C.Ay.isLocalVideoDisabled(A)],
            [p, A],
        ),
        j = (0, r.bG)([O.A], () => O.A.isPrioritySpeaker(A)),
        b = (0, o.A)({ userId: A, checkSoundSharing: !0 }),
        V = (0, g.A)(s.guild_id, A),
        P = (0, r.bG)([h.A], () => h.A.getGuildRingingUsers(s.id).has(A)),
        D = (0, r.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(A);
                }),
            [A, s.id],
        ),
        M = (0, m.A)(null != D ? [D.applicationId] : []),
        H = (0, f.Ay)(A, s.guild_id)[0],
        L = (0, c.YY)(H?.application_id).data ?? void 0,
        [F, z] = (0, r.yK)(
            [S.A],
            () => [S.A.getStreamForUser(A, s.getGuildId()), S.A.getActiveStreamForUser(A, s.getGuildId())],
            [s, A],
        ),
        q = (0, r.bG)([T.A], () => T.A.getSessionById(a)),
        K = G.Ay.useName(l),
        Y = (0, r.bG)([k.A], () => k.A.getVoicePlatformForChannel(s.id, A), [s.id, A]),
        B = (0, _.uy)(s.id, A),
        { enableVCStatusIcons: W } = v.m.useExperiment(
            { guildId: s.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: H?.session_id != null },
        );
    return (0, n.jsx)(x.A, {
        shakeLocation: U.uD.VOICE_USER,
        isShaking: b,
        children: (0, n.jsx)(w.Ay, {
            ...e,
            nick: d ?? K,
            canDrag: e.canDrag && !V,
            disconnected: B,
            otherClientSessionType: q?.clientInfo?.os,
            voicePlatform: Y,
            localMute: I && !p,
            localVideoDisabled: N,
            mute: t || I,
            deaf: i || E,
            speaking: b,
            ringing: P,
            priority: j,
            embeddedApplication: M[0],
            isStreaming: null != F && F.channelId === s.id,
            isWatching: null != z && z.state !== R.XYD.ENDED,
            isGuest: V,
            isSelf: p,
            application: W && H?.session_id != null ? L : void 0,
        }),
    });
});
D.displayName = "ConnectedVoiceUser";
let M = [],
    H = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: i = !0,
                channel: s,
                voiceStates: o,
                collapsed: u,
                collapsedMax: c = 6,
                tabIndex: g,
                numAudience: x,
                withGuildIcon: v = !1,
                className: f,
                children: S,
                isThread: C = !1,
            } = e,
            [T, O] = l.useState(null),
            k = l.useRef(null),
            G = (0, _.$n)(s.id, o ?? M),
            { showGhostUser: U } = (0, N.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: H, dismiss: L } = (0, I.Z0)(s, { collapsed: u }),
            { placement: F } = (0, A.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            z = l.useRef(
                new d.J_(50, () => {
                    O(k.current), (k.current = null);
                }),
            ),
            q = l.useRef(
                new d.J_(175, () => {
                    O(null);
                }),
            ),
            K = l.useCallback(
                (e) => {
                    t && (q.current.cancel(), (k.current = e), z.current.delay());
                },
                [t],
            ),
            Y = l.useCallback(
                (e) => {
                    t && (z.current.cancel(), (k.current = null), q.current.delay());
                },
                [t],
            ),
            B = (0, r.yK)([b.A], () => {
                if (u) return [];
                let e = new Set();
                return (
                    G?.forEach((t) => {
                        let { user: i } = t;
                        b.A.getActivities(i.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(B);
        let W = (() => {
            if (null == G || 0 === G.length) return null;
            let e = u && G.length > c + 1 ? G.slice(0, c) : G,
                t = h.A.getGuildRingingUsers(s.id),
                l = e.map((e) => {
                    let { user: l, nick: a, voiceState: r } = e,
                        d = t.has(l.id);
                    return (0, n.jsx)(
                        D,
                        {
                            user: l,
                            nick: a,
                            isSelfOnOtherClient: y.default.getId() === l.id && r.sessionId !== y.default.getSessionId(),
                            mute: r.isVoiceMuted(),
                            deaf: r.isVoiceDeafened(),
                            video: r.selfVideo,
                            serverMute: r.mute,
                            serverDeaf: r.deaf,
                            sessionId: r.sessionId ?? "",
                            channel: s,
                            collapsed: u,
                            canDrag: i && j.A.can(R.xBc.MOVE_MEMBERS, s),
                            showPreview: K,
                            hidePreview: Y,
                            shouldShowHoverPopout: T === l.id,
                            tabIndex: g,
                        },
                        `voice-user-${l.id}-${d}`,
                    );
                });
            return (
                null != x && x > 0
                    ? l.push((0, n.jsx)(w.aI, { collapsed: u, numAudience: x }))
                    : u && G.length > c + 1 && l.push((0, n.jsx)(w.LR, { numUsers: G.length - c })),
                U && !u && s.type === R.rbe.GUILD_VOICE && l.push((0, n.jsx)(V.A, { channel: s }, "ghost-user")),
                H && "bottom" === F
                    ? l.push((0, n.jsx)(p.p, { channel: s, onClose: L }, "voice-invite-suggestions-button"))
                    : H &&
                      "top" === F &&
                      l.unshift((0, n.jsx)(p.p, { channel: s, onClose: L }, "voice-invite-suggestions-button")),
                l
            );
        })();
        return null == W && null == S
            ? null
            : (0, n.jsxs)(E.Wr, {
                  className: a()(f, P.p_, { [P.yZ]: u, [P.lY]: v, [P.fT]: C }),
                  collapsed: u,
                  children: [W, S],
              });
    };
