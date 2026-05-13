i.d(t, { A: () => M }), i(321073), i(667532);
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
    v = i(25528),
    f = i(530804),
    E = i(481947),
    N = i(591346),
    _ = i(616356),
    S = i(495544),
    y = i(51760),
    C = i(576705),
    j = i(290863),
    b = i(528767),
    T = i(485296),
    O = i(977997),
    G = i(427262),
    V = i(847221),
    k = i(340851),
    R = i(652215),
    w = i(31408),
    P = i(588533);
let U = l.memo((e) => {
    let { mute: t, deaf: i, user: l, channel: s, sessionId: a, nick: d } = e,
        A = l.id,
        p = (0, r.bG)([S.default], () => S.default.getId() === A, [A]),
        [I, E, N] = (0, r.yK)(
            [y.Ay],
            () =>
                p
                    ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1]
                    : [!y.Ay.isSupported() || y.Ay.isLocalMute(A), !1, y.Ay.isLocalVideoDisabled(A)],
            [p, A],
        ),
        C = (0, r.bG)([T.A], () => T.A.isPrioritySpeaker(A)),
        j = (0, o.A)({ userId: A, checkSoundSharing: !0 }),
        V = (0, g.A)(s.guild_id, A),
        P = (0, r.bG)([h.A], () => h.A.getGuildRingingUsers(s.id).has(A)),
        U = (0, r.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(A);
                }),
            [A, s.id],
        ),
        D = (0, m.A)(null != U ? [U.applicationId] : []),
        M = (0, v.Ay)(A, s.guild_id)[0],
        L = (0, c.YY)(M?.application_id).data ?? void 0,
        [H, F] = (0, r.yK)(
            [_.A],
            () => [_.A.getStreamForUser(A, s.getGuildId()), _.A.getActiveStreamForUser(A, s.getGuildId())],
            [s, A],
        ),
        z = (0, r.bG)([b.A], () => b.A.getSessionById(a)),
        K = G.Ay.useName(l),
        Y = (0, r.bG)([O.A], () => O.A.getVoicePlatformForChannel(s.id, A), [s.id, A]),
        q = (0, f.uy)(s.id, A);
    return (0, n.jsx)(x.A, {
        shakeLocation: w.uD.VOICE_USER,
        isShaking: j,
        children: (0, n.jsx)(k.Ay, {
            ...e,
            nick: d ?? K,
            canDrag: e.canDrag && !V,
            disconnected: q,
            otherClientSessionType: z?.clientInfo?.os,
            voicePlatform: Y,
            localMute: I && !p,
            localVideoDisabled: N,
            mute: t || I,
            deaf: i || E,
            speaking: j,
            ringing: P,
            priority: C,
            embeddedApplication: D[0],
            isStreaming: null != H && H.channelId === s.id,
            isWatching: null != F && F.state !== R.XYD.ENDED,
            isGuest: V,
            isSelf: p,
            application: M?.session_id != null ? L : void 0,
        }),
    });
});
U.displayName = "ConnectedVoiceUser";
let D = [],
    M = function (e) {
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
                className: _,
                children: y,
                isThread: b = !1,
            } = e,
            [T, O] = l.useState(null),
            G = l.useRef(null),
            w = (0, f.$n)(s.id, o ?? D),
            { showGhostUser: M } = (0, N.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: L, dismiss: H } = (0, I.Z0)(s, { collapsed: u }),
            { placement: F } = (0, A.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            z = l.useRef(
                new d.J_(50, () => {
                    O(G.current), (G.current = null);
                }),
            ),
            K = l.useRef(
                new d.J_(175, () => {
                    O(null);
                }),
            ),
            Y = l.useCallback(
                (e) => {
                    t && (K.current.cancel(), (G.current = e), z.current.delay());
                },
                [t],
            ),
            q = l.useCallback(
                (e) => {
                    t && (z.current.cancel(), (G.current = null), K.current.delay());
                },
                [t],
            ),
            B = (0, r.yK)([j.A], () => {
                if (u) return [];
                let e = new Set();
                return (
                    w?.forEach((t) => {
                        let { user: i } = t;
                        j.A.getActivities(i.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(B);
        let W = (() => {
            if (null == w || 0 === w.length) return null;
            let e = u && w.length > c + 1 ? w.slice(0, c) : w,
                t = h.A.getGuildRingingUsers(s.id),
                l = e.map((e) => {
                    let { user: l, nick: a, voiceState: r } = e,
                        d = t.has(l.id);
                    return (0, n.jsx)(
                        U,
                        {
                            user: l,
                            nick: a,
                            isSelfOnOtherClient: S.default.getId() === l.id && r.sessionId !== S.default.getSessionId(),
                            mute: r.isVoiceMuted(),
                            deaf: r.isVoiceDeafened(),
                            video: r.selfVideo,
                            serverMute: r.mute,
                            serverDeaf: r.deaf,
                            sessionId: r.sessionId ?? "",
                            channel: s,
                            collapsed: u,
                            canDrag: i && C.A.can(R.xBc.MOVE_MEMBERS, s),
                            showPreview: Y,
                            hidePreview: q,
                            shouldShowHoverPopout: T === l.id,
                            tabIndex: g,
                        },
                        `voice-user-${l.id}-${d}`,
                    );
                });
            return (
                null != x && x > 0
                    ? l.push((0, n.jsx)(k.aI, { collapsed: u, numAudience: x }))
                    : u && w.length > c + 1 && l.push((0, n.jsx)(k.LR, { numUsers: w.length - c })),
                M && !u && s.type === R.rbe.GUILD_VOICE && l.push((0, n.jsx)(V.A, { channel: s }, "ghost-user")),
                L && "bottom" === F
                    ? l.push((0, n.jsx)(p.p, { channel: s, onClose: H }, "voice-invite-suggestions-button"))
                    : L &&
                      "top" === F &&
                      l.unshift((0, n.jsx)(p.p, { channel: s, onClose: H }, "voice-invite-suggestions-button")),
                l
            );
        })();
        return null == W && null == y
            ? null
            : (0, n.jsxs)(E.Wr, {
                  className: a()(_, P.p_, { [P.yZ]: u, [P.lY]: v, [P.fT]: b }),
                  collapsed: u,
                  children: [W, y],
              });
    };
