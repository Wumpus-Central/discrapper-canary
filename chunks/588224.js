n.d(t, { A: () => K }), n(321073), n(667532);
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
    _ = n(532622),
    m = n(550946),
    g = n(140547),
    p = n(242919),
    f = n(7054),
    x = n(962392),
    E = n(220995),
    I = n(582904),
    C = n(551826),
    N = n(159426),
    T = n(25528),
    S = n(530804),
    b = n(481947),
    y = n(591346),
    v = n(616356),
    j = n(961350),
    R = n(430452),
    O = n(576705),
    L = n(290863),
    M = n(528767),
    D = n(485296),
    U = n(977997),
    G = n(427262),
    P = n(847221),
    k = n(340851),
    w = n(652215),
    B = n(31408),
    V = n(647493);
let H = l.memo((e) => {
    let { mute: t, deaf: n, user: l, channel: s, sessionId: a, nick: o } = e,
        x = l.id,
        E = (0, r.bG)([j.default], () => j.default.getId() === x, [x]),
        [I, b, y] = (0, r.yK)(
            [R.Ay],
            () =>
                E
                    ? [!R.Ay.isSupported() || R.Ay.isSelfMute() || R.Ay.isSelfMutedTemporarily(), R.Ay.isSelfDeaf(), !1]
                    : [!R.Ay.isSupported() || R.Ay.isLocalMute(x), !1, R.Ay.isLocalVideoDisabled(x)],
            [E, x],
        ),
        O = (0, r.bG)([D.A], () => D.A.isPrioritySpeaker(x)),
        L = (0, d.A)({ userId: x, checkSoundSharing: !0 }),
        P = (0, m.A)(s.guild_id, x),
        V = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(x)),
        H = (0, r.bG)(
            [c.Ay],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(x);
                }),
            [x, s.id],
        ),
        F = (0, h.A)(null != H ? [H.applicationId] : []),
        K = (0, T.Ay)(x, s.guild_id)[0],
        W = (0, u.YY)(K?.application_id).data ?? void 0,
        [Y, z] = (0, r.yK)(
            [v.A],
            () => [v.A.getStreamForUser(x, s.getGuildId()), v.A.getActiveStreamForUser(x, s.getGuildId())],
            [s, x],
        ),
        q = (0, r.bG)([M.A], () => M.A.getSessionById(a)),
        X = G.Ay.useName(l),
        J = (0, r.bG)([U.A], () => U.A.getVoicePlatformForChannel(s.id, x), [s.id, x]),
        { enableHangStatus: Q } = (0, g.$j)({ guildId: s.guild_id, location: "VoiceUsers" }),
        $ = (0, _.Ay)(s, !0, l),
        Z = (0, r.bG)([p.A], () => (E ? p.A.getHangStatusActivity() : null), [E]),
        ee = (0, f.h)(x),
        et = (0, S.uy)(s.id, x),
        { enableVCStatusIcons: en } = N.m.useExperiment(
            { guildId: s.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        ei = en || Q;
    return (0, i.jsx)(C.A, {
        shakeLocation: B.uD.VOICE_USER,
        isShaking: L,
        children: (0, i.jsx)(k.Ay, {
            ...e,
            nick: o ?? X,
            canDrag: e.canDrag && !P,
            disconnected: et,
            otherClientSessionType: q?.clientInfo?.os,
            voicePlatform: J,
            localMute: I && !E,
            localVideoDisabled: y,
            mute: t || I,
            deaf: n || b,
            speaking: L,
            ringing: V,
            priority: O,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === s.id,
            isWatching: null != z && z.state !== w.XYD.ENDED,
            isGuest: P,
            isSelf: E,
            application: ei && K?.session_id != null ? W : void 0,
            showHangStatus: $ && Q && (E || null != ee),
            hangStatusActivity: E ? Z : ee,
        }),
    });
});
H.displayName = "ConnectedVoiceUser";
let F = [],
    K = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: s,
                voiceStates: d,
                collapsed: c,
                collapsedMax: u = 6,
                tabIndex: _,
                numAudience: m,
                withGuildIcon: g = !1,
                className: p,
                children: C,
                isThread: N = !1,
            } = e,
            [T, v] = l.useState(null),
            R = l.useRef(null),
            M = (0, S.$n)(s.id, d ?? F);
        (0, f.s)(s.guild_id, M);
        let { enableHistoryHover: D } = (0, y.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: U, dismiss: G } = (0, I.Z0)(s, { collapsed: c }),
            { placement: B } = (0, x.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            K = l.useRef(
                new o.J_(50, () => {
                    v(R.current), (R.current = null);
                }),
            ),
            W = l.useRef(
                new o.J_(175, () => {
                    v(null);
                }),
            ),
            Y = l.useCallback(
                (e) => {
                    t && (W.current.cancel(), (R.current = e), K.current.delay());
                },
                [t],
            ),
            z = l.useCallback(
                (e) => {
                    t && (K.current.cancel(), (R.current = null), W.current.delay());
                },
                [t],
            ),
            q = (0, r.yK)([L.A], () => {
                if (c) return [];
                let e = new Set();
                return (
                    M?.forEach((t) => {
                        let { user: n } = t;
                        L.A.getActivities(n.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(q);
        let X = (() => {
            if (null == M || 0 === M.length) return null;
            let e = c && M.length > u + 1 ? M.slice(0, u) : M,
                t = A.A.getGuildRingingUsers(s.id),
                l = e.map((e) => {
                    let { user: l, nick: a, voiceState: r } = e,
                        o = t.has(l.id);
                    return (0, i.jsx)(
                        H,
                        {
                            user: l,
                            nick: a,
                            isSelfOnOtherClient: j.default.getId() === l.id && r.sessionId !== j.default.getSessionId(),
                            mute: r.isVoiceMuted(),
                            deaf: r.isVoiceDeafened(),
                            video: r.selfVideo,
                            serverMute: r.mute,
                            serverDeaf: r.deaf,
                            sessionId: r.sessionId ?? "",
                            channel: s,
                            collapsed: c,
                            canDrag: n && O.A.can(w.xBc.MOVE_MEMBERS, s),
                            showPreview: Y,
                            hidePreview: z,
                            shouldShowHoverPopout: T === l.id,
                            tabIndex: _,
                        },
                        `voice-user-${l.id}-${o}`,
                    );
                });
            return (
                null != m && m > 0
                    ? l.push((0, i.jsx)(k.aI, { collapsed: c, numAudience: m }))
                    : c && M.length > u + 1 && l.push((0, i.jsx)(k.LR, { numUsers: M.length - u })),
                D && !c && s.type === w.rbe.GUILD_VOICE && l.push((0, i.jsx)(P.A, { channel: s }, "ghost-user")),
                U && "bottom" === B
                    ? l.push((0, i.jsx)(E.p, { channel: s, onClose: G }, "voice-invite-suggestions-button"))
                    : U &&
                      "top" === B &&
                      l.unshift((0, i.jsx)(E.p, { channel: s, onClose: G }, "voice-invite-suggestions-button")),
                l
            );
        })();
        return null == X && null == C
            ? null
            : (0, i.jsxs)(b.Wr, {
                  className: a()(p, V.p_, { [V.yZ]: c, [V.lY]: g, [V.fT]: N }),
                  collapsed: c,
                  children: [X, C],
              });
    };
