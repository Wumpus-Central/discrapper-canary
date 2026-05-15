i.d(t, { A: () => H }), i(321073), i(667532);
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
    A = i(202163),
    g = i(550946),
    p = i(962392),
    I = i(220995),
    x = i(582904),
    v = i(551826),
    f = i(25528),
    E = i(530804),
    N = i(481947),
    _ = i(591346),
    S = i(334885),
    C = i(616356),
    j = i(495544),
    y = i(235058),
    T = i(576705),
    b = i(290863),
    O = i(528767),
    G = i(485296),
    V = i(977997),
    R = i(427262),
    k = i(847221),
    P = i(340851),
    D = i(652215),
    U = i(31408),
    w = i(588533);
let M = l.memo((e) => {
    let { mute: t, deaf: i, user: l, channel: s, sessionId: a, nick: d } = e,
        p = l.id,
        I = (0, r.bG)([j.default], () => j.default.getId() === p, [p]),
        [x, N, _] = (0, r.yK)(
            [y.Ay],
            () =>
                I
                    ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1]
                    : [!y.Ay.isSupported() || y.Ay.isLocalMute(p), !1, y.Ay.isLocalVideoDisabled(p)],
            [I, p],
        ),
        S = (0, r.bG)([G.A], () => G.A.isPrioritySpeaker(p)),
        T = (0, u.A)({ userId: p, checkSoundSharing: !0 }),
        b = (0, g.A)(s.guild_id, p),
        k = (0, r.bG)([h.A], () => h.A.getGuildRingingUsers(s.id).has(p)),
        w = (0, r.bG)(
            [c.Ay],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(p);
                }),
            [p, s.id],
        ),
        M = (0, m.A)(null != w ? [w.applicationId] : []),
        L = (0, f.Ay)(p, s.guild_id)[0],
        H = (0, o.YY)(L?.application_id).data ?? void 0,
        { gameRecord: F } = (0, A.A)(L?.application_id),
        [z, Y] = (0, r.yK)(
            [C.A],
            () => [C.A.getStreamForUser(p, s.getGuildId()), C.A.getActiveStreamForUser(p, s.getGuildId())],
            [s, p],
        ),
        B = (0, r.bG)([O.A], () => O.A.getSessionById(a)),
        K = R.Ay.useName(l),
        q = (0, r.bG)([V.A], () => V.A.getVoicePlatformForChannel(s.id, p), [s.id, p]),
        W = (0, E.uy)(s.id, p);
    return (0, n.jsx)(v.A, {
        shakeLocation: U.uD.VOICE_USER,
        isShaking: T,
        children: (0, n.jsx)(P.Ay, {
            ...e,
            nick: d ?? K,
            canDrag: e.canDrag && !b,
            disconnected: W,
            otherClientSessionType: B?.clientInfo?.os,
            voicePlatform: q,
            localMute: x && !I,
            localVideoDisabled: _,
            mute: t || x,
            deaf: i || N,
            speaking: T,
            ringing: k,
            priority: S,
            embeddedApplication: M[0],
            isStreaming: null != z && z.channelId === s.id,
            isWatching: null != Y && Y.state !== D.XYD.ENDED,
            isGuest: b,
            isSelf: I,
            application: L?.session_id != null ? H : void 0,
            game: L?.session_id != null ? (F ?? void 0) : void 0,
        }),
    });
});
M.displayName = "ConnectedVoiceUser";
let L = [],
    H = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: i = !0,
                channel: s,
                voiceStates: u,
                collapsed: c,
                collapsedMax: o = 6,
                tabIndex: A,
                numAudience: g,
                withGuildIcon: v = !1,
                className: f,
                children: C,
                isThread: y = !1,
            } = e,
            [O, G] = l.useState(null),
            V = l.useRef(null),
            R = (0, E.$n)(s.id, u ?? L),
            { showGhostUser: U } = (0, _.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            H = (0, S.A)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: F, dismiss: z } = (0, x.Z0)(s, { collapsed: c }),
            { placement: Y } = (0, p.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
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
            $ = (0, r.bG)([T.A], () => T.A.can(D.xBc.MOVE_MEMBERS, s)),
            Z = i && $,
            J = (0, r.yK)([b.A], () => {
                if (c) return [];
                let e = new Set();
                return (
                    R?.forEach((t) => {
                        let { user: i } = t;
                        b.A.getActivities(i.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(J);
        let X = (() => {
            if (null == R || 0 === R.length) return null;
            let e = c && R.length > o + 1 ? R.slice(0, o) : R,
                t = h.A.getGuildRingingUsers(s.id),
                i = e.map((e) => {
                    let { user: i, nick: l, voiceState: a } = e,
                        r = t.has(i.id);
                    return (0, n.jsx)(
                        M,
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
                null != g && g > 0
                    ? i.push((0, n.jsx)(P.aI, { collapsed: c, numAudience: g }, "audience"))
                    : c && R.length > o + 1 && i.push((0, n.jsx)(P.LR, { numUsers: R.length - o }, "collapsed-users")),
                H && U && !c && s.type === D.rbe.GUILD_VOICE && i.push((0, n.jsx)(k.A, { channel: s }, "ghost-user")),
                F && "bottom" === Y
                    ? i.push((0, n.jsx)(I.p, { channel: s, onClose: z }, "voice-invite-suggestions-button"))
                    : F &&
                      "top" === Y &&
                      i.unshift((0, n.jsx)(I.p, { channel: s, onClose: z }, "voice-invite-suggestions-button")),
                i
            );
        })();
        return null == X && null == C
            ? null
            : (0, n.jsxs)(N.Wr, {
                  className: a()(f, w.p_, { [w.yZ]: c, [w.lY]: v, [w.fT]: y }),
                  collapsed: c,
                  children: [X, C],
              });
    };
