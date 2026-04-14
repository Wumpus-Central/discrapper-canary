n.d(t, { A: () => B }), n(321073), n(667532);
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
    p = n(220995),
    g = n(582904),
    f = n(551826),
    E = n(159426),
    x = n(25528),
    I = n(530804),
    C = n(481947),
    N = n(591346),
    T = n(616356),
    S = n(961350),
    b = n(430452),
    y = n(576705),
    v = n(290863),
    R = n(528767),
    j = n(485296),
    O = n(977997),
    L = n(427262),
    M = n(847221),
    D = n(340851),
    U = n(652215),
    G = n(31408),
    P = n(647493);
let k = l.memo((e) => {
    let { mute: t, deaf: n, user: l, channel: s, sessionId: a, nick: o } = e,
        m = l.id,
        p = (0, r.bG)([S.default], () => S.default.getId() === m, [m]),
        [g, C, N] = (0, r.yK)(
            [b.Ay],
            () =>
                p
                    ? [!b.Ay.isSupported() || b.Ay.isSelfMute() || b.Ay.isSelfMutedTemporarily(), b.Ay.isSelfDeaf(), !1]
                    : [!b.Ay.isSupported() || b.Ay.isLocalMute(m), !1, b.Ay.isLocalVideoDisabled(m)],
            [p, m],
        ),
        y = (0, r.bG)([j.A], () => j.A.isPrioritySpeaker(m)),
        v = (0, d.A)({ userId: m, checkSoundSharing: !0 }),
        M = (0, _.A)(s.guild_id, m),
        P = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(m)),
        k = (0, r.bG)(
            [c.Ay],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(m);
                }),
            [m, s.id],
        ),
        w = (0, h.A)(null != k ? [k.applicationId] : []),
        B = (0, x.Ay)(m, s.guild_id)[0],
        V = (0, u.YY)(B?.application_id).data ?? void 0,
        [H, F] = (0, r.yK)(
            [T.A],
            () => [T.A.getStreamForUser(m, s.getGuildId()), T.A.getActiveStreamForUser(m, s.getGuildId())],
            [s, m],
        ),
        W = (0, r.bG)([R.A], () => R.A.getSessionById(a)),
        K = L.Ay.useName(l),
        Y = (0, r.bG)([O.A], () => O.A.getVoicePlatformForChannel(s.id, m), [s.id, m]),
        z = (0, I.uy)(s.id, m),
        { enableVCStatusIcons: X } = E.m.useExperiment(
            { guildId: s.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: B?.session_id != null },
        );
    return (0, i.jsx)(f.A, {
        shakeLocation: G.uD.VOICE_USER,
        isShaking: v,
        children: (0, i.jsx)(D.Ay, {
            ...e,
            nick: o ?? K,
            canDrag: e.canDrag && !M,
            disconnected: z,
            otherClientSessionType: W?.clientInfo?.os,
            voicePlatform: Y,
            localMute: g && !p,
            localVideoDisabled: N,
            mute: t || g,
            deaf: n || C,
            speaking: v,
            ringing: P,
            priority: y,
            embeddedApplication: w[0],
            isStreaming: null != H && H.channelId === s.id,
            isWatching: null != F && F.state !== U.XYD.ENDED,
            isGuest: M,
            isSelf: p,
            application: X && B?.session_id != null ? V : void 0,
        }),
    });
});
k.displayName = "ConnectedVoiceUser";
let w = [],
    B = function (e) {
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
                children: T,
                isThread: b = !1,
            } = e,
            [R, j] = l.useState(null),
            O = l.useRef(null),
            L = (0, I.$n)(s.id, d ?? w),
            { showGhostUser: G } = (0, N.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: B, dismiss: V } = (0, g.Z0)(s, { collapsed: c }),
            { placement: H } = (0, m.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            F = l.useRef(
                new o.J_(50, () => {
                    j(O.current), (O.current = null);
                }),
            ),
            W = l.useRef(
                new o.J_(175, () => {
                    j(null);
                }),
            ),
            K = l.useCallback(
                (e) => {
                    t && (W.current.cancel(), (O.current = e), F.current.delay());
                },
                [t],
            ),
            Y = l.useCallback(
                (e) => {
                    t && (F.current.cancel(), (O.current = null), W.current.delay());
                },
                [t],
            ),
            z = (0, r.yK)([v.A], () => {
                if (c) return [];
                let e = new Set();
                return (
                    L?.forEach((t) => {
                        let { user: n } = t;
                        v.A.getActivities(n.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(z);
        let X = (() => {
            if (null == L || 0 === L.length) return null;
            let e = c && L.length > u + 1 ? L.slice(0, u) : L,
                t = A.A.getGuildRingingUsers(s.id),
                l = e.map((e) => {
                    let { user: l, nick: a, voiceState: r } = e,
                        o = t.has(l.id);
                    return (0, i.jsx)(
                        k,
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
                            canDrag: n && y.A.can(U.xBc.MOVE_MEMBERS, s),
                            showPreview: K,
                            hidePreview: Y,
                            shouldShowHoverPopout: R === l.id,
                            tabIndex: _,
                        },
                        `voice-user-${l.id}-${o}`,
                    );
                });
            return (
                null != f && f > 0
                    ? l.push((0, i.jsx)(D.aI, { collapsed: c, numAudience: f }))
                    : c && L.length > u + 1 && l.push((0, i.jsx)(D.LR, { numUsers: L.length - u })),
                G && !c && s.type === U.rbe.GUILD_VOICE && l.push((0, i.jsx)(M.A, { channel: s }, "ghost-user")),
                B && "bottom" === H
                    ? l.push((0, i.jsx)(p.p, { channel: s, onClose: V }, "voice-invite-suggestions-button"))
                    : B &&
                      "top" === H &&
                      l.unshift((0, i.jsx)(p.p, { channel: s, onClose: V }, "voice-invite-suggestions-button")),
                l
            );
        })();
        return null == X && null == T
            ? null
            : (0, i.jsxs)(C.Wr, {
                  className: a()(x, P.p_, { [P.yZ]: c, [P.lY]: E, [P.fT]: b }),
                  collapsed: c,
                  children: [X, T],
              });
    };
