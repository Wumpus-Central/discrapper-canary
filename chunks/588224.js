i.d(t, { A: () => L }), i(321073), i(667532);
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    d = i(451988),
    u = i(717558),
    c = i(933958),
    o = i(627363),
    m = i(429913),
    h = i(313961),
    A = i(550946),
    g = i(962392),
    p = i(220995),
    I = i(582904),
    x = i(551826),
    v = i(25528),
    f = i(530804),
    E = i(481947),
    N = i(591346),
    _ = i(334885),
    S = i(616356),
    j = i(495544),
    C = i(235058),
    y = i(576705),
    T = i(290863),
    b = i(528767),
    O = i(485296),
    G = i(977997),
    V = i(427262),
    R = i(847221),
    k = i(340851),
    P = i(652215),
    D = i(31408),
    U = i(588533);
let w = l.memo((e) => {
    let { mute: t, deaf: i, user: l, channel: s, sessionId: a, nick: d } = e,
        g = l.id,
        p = (0, r.bG)([j.default], () => j.default.getId() === g, [g]),
        [I, E, N] = (0, r.yK)(
            [C.Ay],
            () =>
                p
                    ? [!C.Ay.isSupported() || C.Ay.isSelfMute() || C.Ay.isSelfMutedTemporarily(), C.Ay.isSelfDeaf(), !1]
                    : [!C.Ay.isSupported() || C.Ay.isLocalMute(g), !1, C.Ay.isLocalVideoDisabled(g)],
            [p, g],
        ),
        _ = (0, r.bG)([O.A], () => O.A.isPrioritySpeaker(g)),
        y = (0, u.A)({ userId: g, checkSoundSharing: !0 }),
        T = (0, A.A)(s.guild_id, g),
        R = (0, r.bG)([h.A], () => h.A.getGuildRingingUsers(s.id).has(g)),
        U = (0, r.bG)(
            [c.Ay],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(g);
                }),
            [g, s.id],
        ),
        w = (0, m.A)(null != U ? [U.applicationId] : []),
        M = (0, v.Ay)(g, s.guild_id)[0],
        L = (0, o.YY)(M?.application_id).data ?? void 0,
        [H, F] = (0, r.yK)(
            [S.A],
            () => [S.A.getStreamForUser(g, s.getGuildId()), S.A.getActiveStreamForUser(g, s.getGuildId())],
            [s, g],
        ),
        z = (0, r.bG)([b.A], () => b.A.getSessionById(a)),
        Y = V.Ay.useName(l),
        B = (0, r.bG)([G.A], () => G.A.getVoicePlatformForChannel(s.id, g), [s.id, g]),
        K = (0, f.uy)(s.id, g);
    return (0, n.jsx)(x.A, {
        shakeLocation: D.uD.VOICE_USER,
        isShaking: y,
        children: (0, n.jsx)(k.Ay, {
            ...e,
            nick: d ?? Y,
            canDrag: e.canDrag && !T,
            disconnected: K,
            otherClientSessionType: z?.clientInfo?.os,
            voicePlatform: B,
            localMute: I && !p,
            localVideoDisabled: N,
            mute: t || I,
            deaf: i || E,
            speaking: y,
            ringing: R,
            priority: _,
            embeddedApplication: w[0],
            isStreaming: null != H && H.channelId === s.id,
            isWatching: null != F && F.state !== P.XYD.ENDED,
            isGuest: T,
            isSelf: p,
            application: M?.session_id != null ? L : void 0,
        }),
    });
});
w.displayName = "ConnectedVoiceUser";
let M = [],
    L = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: i = !0,
                channel: s,
                voiceStates: u,
                collapsed: c,
                collapsedMax: o = 6,
                tabIndex: A,
                numAudience: x,
                withGuildIcon: v = !1,
                className: S,
                children: C,
                isThread: b = !1,
            } = e,
            [O, G] = l.useState(null),
            V = l.useRef(null),
            D = (0, f.$n)(s.id, u ?? M),
            { showGhostUser: L } = (0, N.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            H = (0, _.A)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: F, dismiss: z } = (0, I.Z0)(s, { collapsed: c }),
            { placement: Y } = (0, g.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            B = l.useRef(
                new d.J_(50, () => {
                    G(V.current), (V.current = null);
                }),
            ),
            K = l.useRef(
                new d.J_(175, () => {
                    G(null);
                }),
            ),
            q = l.useCallback(
                (e) => {
                    t && (K.current.cancel(), (V.current = e), B.current.delay());
                },
                [t],
            ),
            W = l.useCallback(
                (e) => {
                    t && (B.current.cancel(), (V.current = null), K.current.delay());
                },
                [t],
            ),
            $ = (0, r.bG)([y.A], () => y.A.can(P.xBc.MOVE_MEMBERS, s)),
            Z = i && $,
            J = (0, r.yK)([T.A], () => {
                if (c) return [];
                let e = new Set();
                return (
                    D?.forEach((t) => {
                        let { user: i } = t;
                        T.A.getActivities(i.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(J);
        let X = (() => {
            if (null == D || 0 === D.length) return null;
            let e = c && D.length > o + 1 ? D.slice(0, o) : D,
                t = h.A.getGuildRingingUsers(s.id),
                i = e.map((e) => {
                    let { user: i, nick: l, voiceState: a } = e,
                        r = t.has(i.id);
                    return (0, n.jsx)(
                        w,
                        {
                            user: i,
                            nick: l,
                            isSelfOnOtherClient: j.default.getId() === i.id && a.sessionId !== j.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: s,
                            collapsed: c,
                            canDrag: Z,
                            showPreview: q,
                            hidePreview: W,
                            shouldShowHoverPopout: O === i.id,
                            tabIndex: A,
                        },
                        `voice-user-${i.id}-${r}`,
                    );
                });
            return (
                null != x && x > 0
                    ? i.push((0, n.jsx)(k.aI, { collapsed: c, numAudience: x }, "audience"))
                    : c && D.length > o + 1 && i.push((0, n.jsx)(k.LR, { numUsers: D.length - o }, "collapsed-users")),
                H && L && !c && s.type === P.rbe.GUILD_VOICE && i.push((0, n.jsx)(R.A, { channel: s }, "ghost-user")),
                F && "bottom" === Y
                    ? i.push((0, n.jsx)(p.p, { channel: s, onClose: z }, "voice-invite-suggestions-button"))
                    : F &&
                      "top" === Y &&
                      i.unshift((0, n.jsx)(p.p, { channel: s, onClose: z }, "voice-invite-suggestions-button")),
                i
            );
        })();
        return null == X && null == C
            ? null
            : (0, n.jsxs)(E.Wr, {
                  className: a()(S, U.p_, { [U.yZ]: c, [U.lY]: v, [U.fT]: b }),
                  collapsed: c,
                  children: [X, C],
              });
    };
