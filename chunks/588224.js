n.d(t, { A: () => V }), n(321073), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(451988),
    d = n(717558),
    c = n(933958),
    u = n(627363),
    h = n(429913),
    A = n(313961),
    _ = n(550946),
    m = n(962392),
    g = n(220995),
    p = n(582904),
    f = n(551826),
    E = n(159426),
    x = n(25528),
    I = n(530804),
    C = n(481947),
    b = n(591346),
    N = n(616356),
    S = n(961350),
    v = n(430452),
    T = n(576705),
    y = n(290863),
    j = n(528767),
    R = n(485296),
    L = n(977997),
    O = n(427262),
    G = n(847221),
    M = n(340851),
    D = n(652215),
    U = n(31408),
    P = n(588533);
let w = l.memo((e) => {
    let { mute: t, deaf: n, user: l, channel: s, sessionId: a, nick: o } = e,
        m = l.id,
        g = (0, r.bG)([S.default], () => S.default.getId() === m, [m]),
        [p, C, b] = (0, r.yK)(
            [v.Ay],
            () =>
                g
                    ? [!v.Ay.isSupported() || v.Ay.isSelfMute() || v.Ay.isSelfMutedTemporarily(), v.Ay.isSelfDeaf(), !1]
                    : [!v.Ay.isSupported() || v.Ay.isLocalMute(m), !1, v.Ay.isLocalVideoDisabled(m)],
            [g, m],
        ),
        T = (0, r.bG)([R.A], () => R.A.isPrioritySpeaker(m)),
        y = (0, d.A)({ userId: m, checkSoundSharing: !0 }),
        G = (0, _.A)(s.guild_id, m),
        P = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(m)),
        w = (0, r.bG)(
            [c.Ay],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(m);
                }),
            [m, s.id],
        ),
        k = (0, h.A)(null != w ? [w.applicationId] : []),
        V = (0, x.Ay)(m, s.guild_id)[0],
        B = (0, u.YY)(V?.application_id).data ?? void 0,
        [H, F] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(m, s.getGuildId()), N.A.getActiveStreamForUser(m, s.getGuildId())],
            [s, m],
        ),
        W = (0, r.bG)([j.A], () => j.A.getSessionById(a)),
        Y = O.Ay.useName(l),
        K = (0, r.bG)([L.A], () => L.A.getVoicePlatformForChannel(s.id, m), [s.id, m]),
        z = (0, I.uy)(s.id, m),
        { enableVCStatusIcons: q } = E.m.useExperiment(
            { guildId: s.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: V?.session_id != null },
        );
    return (0, i.jsx)(f.A, {
        shakeLocation: U.uD.VOICE_USER,
        isShaking: y,
        children: (0, i.jsx)(M.Ay, {
            ...e,
            nick: o ?? Y,
            canDrag: e.canDrag && !G,
            disconnected: z,
            otherClientSessionType: W?.clientInfo?.os,
            voicePlatform: K,
            localMute: p && !g,
            localVideoDisabled: b,
            mute: t || p,
            deaf: n || C,
            speaking: y,
            ringing: P,
            priority: T,
            embeddedApplication: k[0],
            isStreaming: null != H && H.channelId === s.id,
            isWatching: null != F && F.state !== D.XYD.ENDED,
            isGuest: G,
            isSelf: g,
            application: q && V?.session_id != null ? B : void 0,
        }),
    });
});
w.displayName = "ConnectedVoiceUser";
let k = [],
    V = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: s,
                voiceStates: d,
                collapsed: c,
                collapsedMax: u = 6,
                tabIndex: _,
                numAudience: f,
                withGuildIcon: E = !1,
                className: x,
                children: N,
                isThread: v = !1,
            } = e,
            [j, R] = l.useState(null),
            L = l.useRef(null),
            O = (0, I.$n)(s.id, d ?? k),
            { showGhostUser: U } = (0, b.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: V, dismiss: B } = (0, p.Z0)(s, { collapsed: c }),
            { placement: H } = (0, m.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            F = l.useRef(
                new o.J_(50, () => {
                    R(L.current), (L.current = null);
                }),
            ),
            W = l.useRef(
                new o.J_(175, () => {
                    R(null);
                }),
            ),
            Y = l.useCallback(
                (e) => {
                    t && (W.current.cancel(), (L.current = e), F.current.delay());
                },
                [t],
            ),
            K = l.useCallback(
                (e) => {
                    t && (F.current.cancel(), (L.current = null), W.current.delay());
                },
                [t],
            ),
            z = (0, r.yK)([y.A], () => {
                if (c) return [];
                let e = new Set();
                return (
                    O?.forEach((t) => {
                        let { user: n } = t;
                        y.A.getActivities(n.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(z);
        let q = (() => {
            if (null == O || 0 === O.length) return null;
            let e = c && O.length > u + 1 ? O.slice(0, u) : O,
                t = A.A.getGuildRingingUsers(s.id),
                l = e.map((e) => {
                    let { user: l, nick: a, voiceState: r } = e,
                        o = t.has(l.id);
                    return (0, i.jsx)(
                        w,
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
                            canDrag: n && T.A.can(D.xBc.MOVE_MEMBERS, s),
                            showPreview: Y,
                            hidePreview: K,
                            shouldShowHoverPopout: j === l.id,
                            tabIndex: _,
                        },
                        `voice-user-${l.id}-${o}`,
                    );
                });
            return (
                null != f && f > 0
                    ? l.push((0, i.jsx)(M.aI, { collapsed: c, numAudience: f }))
                    : c && O.length > u + 1 && l.push((0, i.jsx)(M.LR, { numUsers: O.length - u })),
                U && !c && s.type === D.rbe.GUILD_VOICE && l.push((0, i.jsx)(G.A, { channel: s }, "ghost-user")),
                V && "bottom" === H
                    ? l.push((0, i.jsx)(g.p, { channel: s, onClose: B }, "voice-invite-suggestions-button"))
                    : V &&
                      "top" === H &&
                      l.unshift((0, i.jsx)(g.p, { channel: s, onClose: B }, "voice-invite-suggestions-button")),
                l
            );
        })();
        return null == q && null == N
            ? null
            : (0, i.jsxs)(C.Wr, {
                  className: a()(x, P.p_, { [P.yZ]: c, [P.lY]: E, [P.fT]: v }),
                  collapsed: c,
                  children: [q, N],
              });
    };
