i.d(t, { A: () => M }), i(321073), i(667532);
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    d = i(451988),
    o = i(717558),
    c = i(933958),
    u = i(627363),
    m = i(429913),
    h = i(313961),
    A = i(550946),
    g = i(962392),
    p = i(220995),
    I = i(582904),
    v = i(551826),
    x = i(25528),
    f = i(530804),
    _ = i(481947),
    E = i(591346),
    N = i(616356),
    S = i(495544),
    y = i(51760),
    C = i(576705),
    j = i(290863),
    b = i(528767),
    T = i(485296),
    O = i(977997),
    G = i(427262),
    k = i(847221),
    w = i(340851),
    V = i(652215),
    R = i(31408),
    P = i(588533);
let U = l.memo((e) => {
    let { mute: t, deaf: i, user: l, channel: s, sessionId: a, nick: d } = e,
        g = l.id,
        p = (0, r.bG)([S.default], () => S.default.getId() === g, [g]),
        [I, _, E] = (0, r.yK)(
            [y.Ay],
            () =>
                p
                    ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1]
                    : [!y.Ay.isSupported() || y.Ay.isLocalMute(g), !1, y.Ay.isLocalVideoDisabled(g)],
            [p, g],
        ),
        C = (0, r.bG)([T.A], () => T.A.isPrioritySpeaker(g)),
        j = (0, o.A)({ userId: g, checkSoundSharing: !0 }),
        k = (0, A.A)(s.guild_id, g),
        P = (0, r.bG)([h.A], () => h.A.getGuildRingingUsers(s.id).has(g)),
        U = (0, r.bG)(
            [c.Ay],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(g);
                }),
            [g, s.id],
        ),
        D = (0, m.A)(null != U ? [U.applicationId] : []),
        M = (0, x.Ay)(g, s.guild_id)[0],
        H = (0, u.YY)(M?.application_id).data ?? void 0,
        [L, F] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(g, s.getGuildId()), N.A.getActiveStreamForUser(g, s.getGuildId())],
            [s, g],
        ),
        z = (0, r.bG)([b.A], () => b.A.getSessionById(a)),
        q = G.Ay.useName(l),
        K = (0, r.bG)([O.A], () => O.A.getVoicePlatformForChannel(s.id, g), [s.id, g]),
        Y = (0, f.uy)(s.id, g);
    return (0, n.jsx)(v.A, {
        shakeLocation: R.uD.VOICE_USER,
        isShaking: j,
        children: (0, n.jsx)(w.Ay, {
            ...e,
            nick: d ?? q,
            canDrag: e.canDrag && !k,
            disconnected: Y,
            otherClientSessionType: z?.clientInfo?.os,
            voicePlatform: K,
            localMute: I && !p,
            localVideoDisabled: E,
            mute: t || I,
            deaf: i || _,
            speaking: j,
            ringing: P,
            priority: C,
            embeddedApplication: D[0],
            isStreaming: null != L && L.channelId === s.id,
            isWatching: null != F && F.state !== V.XYD.ENDED,
            isGuest: k,
            isSelf: p,
            application: M?.session_id != null ? H : void 0,
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
                collapsed: c,
                collapsedMax: u = 6,
                tabIndex: A,
                numAudience: v,
                withGuildIcon: x = !1,
                className: N,
                children: y,
                isThread: b = !1,
            } = e,
            [T, O] = l.useState(null),
            G = l.useRef(null),
            R = (0, f.$n)(s.id, o ?? D),
            { showGhostUser: M } = (0, E.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: H, dismiss: L } = (0, I.Z0)(s, { collapsed: c }),
            { placement: F } = (0, g.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            z = l.useRef(
                new d.J_(50, () => {
                    O(G.current), (G.current = null);
                }),
            ),
            q = l.useRef(
                new d.J_(175, () => {
                    O(null);
                }),
            ),
            K = l.useCallback(
                (e) => {
                    t && (q.current.cancel(), (G.current = e), z.current.delay());
                },
                [t],
            ),
            Y = l.useCallback(
                (e) => {
                    t && (z.current.cancel(), (G.current = null), q.current.delay());
                },
                [t],
            ),
            B = (0, r.yK)([j.A], () => {
                if (c) return [];
                let e = new Set();
                return (
                    R?.forEach((t) => {
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
            if (null == R || 0 === R.length) return null;
            let e = c && R.length > u + 1 ? R.slice(0, u) : R,
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
                            collapsed: c,
                            canDrag: i && C.A.can(V.xBc.MOVE_MEMBERS, s),
                            showPreview: K,
                            hidePreview: Y,
                            shouldShowHoverPopout: T === l.id,
                            tabIndex: A,
                        },
                        `voice-user-${l.id}-${d}`,
                    );
                });
            return (
                null != v && v > 0
                    ? l.push((0, n.jsx)(w.aI, { collapsed: c, numAudience: v }))
                    : c && R.length > u + 1 && l.push((0, n.jsx)(w.LR, { numUsers: R.length - u })),
                M && !c && s.type === V.rbe.GUILD_VOICE && l.push((0, n.jsx)(k.A, { channel: s }, "ghost-user")),
                H && "bottom" === F
                    ? l.push((0, n.jsx)(p.p, { channel: s, onClose: L }, "voice-invite-suggestions-button"))
                    : H &&
                      "top" === F &&
                      l.unshift((0, n.jsx)(p.p, { channel: s, onClose: L }, "voice-invite-suggestions-button")),
                l
            );
        })();
        return null == W && null == y
            ? null
            : (0, n.jsxs)(_.Wr, {
                  className: a()(N, P.p_, { [P.yZ]: c, [P.lY]: x, [P.fT]: b }),
                  collapsed: c,
                  children: [W, y],
              });
    };
