t.d(i, { A: () => D }), t(321073), t(667532);
var n = t(627968),
    l = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    d = t(451988),
    u = t(717558),
    o = t(933958),
    c = t(627363),
    m = t(429913),
    A = t(313961),
    g = t(202163),
    h = t(550946),
    p = t(962392),
    I = t(220995),
    v = t(582904),
    f = t(551826),
    x = t(25528),
    S = t(530804),
    _ = t(481947),
    E = t(616356),
    N = t(495544),
    y = t(761853),
    C = t(576705),
    b = t(290863),
    j = t(528767),
    T = t(485296),
    O = t(977997),
    G = t(427262),
    k = t(340851),
    V = t(652215),
    P = t(31408),
    R = t(588533);
let w = l.memo((e) => {
    let { mute: i, deaf: t, user: l, channel: s, sessionId: a, nick: d } = e,
        p = l.id,
        I = (0, r.bG)([N.default], () => N.default.getId() === p, [p]),
        [v, _, C] = (0, r.yK)(
            [y.Ay],
            () =>
                I
                    ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1]
                    : [!y.Ay.isSupported() || y.Ay.isLocalMute(p), !1, y.Ay.isLocalVideoDisabled(p)],
            [I, p],
        ),
        b = (0, r.bG)([T.A], () => T.A.isPrioritySpeaker(p)),
        R = (0, u.A)({ userId: p, checkSoundSharing: !0 }),
        w = (0, h.A)(s.guild_id, p),
        U = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(p)),
        D = (0, r.bG)(
            [o.Ay],
            () =>
                o.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: i } = e;
                    return i.has(p);
                }),
            [p, s.id],
        ),
        M = (0, m.A)(null != D ? [D.applicationId] : []),
        L = (0, x.Ay)(p, s.guild_id)[0],
        F = (0, c.YY)(L?.application_id).data ?? void 0,
        { gameRecord: z } = (0, g.A)(L?.application_id),
        [K, B] = (0, r.yK)(
            [E.A],
            () => [E.A.getStreamForUser(p, s.getGuildId()), E.A.getActiveStreamForUser(p, s.getGuildId())],
            [s, p],
        ),
        Y = (0, r.bG)([j.A], () => j.A.getSessionById(a)),
        q = G.Ay.useName(l),
        H = (0, r.bG)([O.A], () => O.A.getVoicePlatformForChannel(s.id, p), [s.id, p]),
        $ = (0, S.uy)(s.id, p);
    return (0, n.jsx)(f.A, {
        shakeLocation: P.uD.VOICE_USER,
        isShaking: R,
        children: (0, n.jsx)(k.Ay, {
            ...e,
            nick: d ?? q,
            canDrag: e.canDrag && !w,
            disconnected: $,
            otherClientSessionType: Y?.clientInfo?.os,
            voicePlatform: H,
            localMute: v && !I,
            localVideoDisabled: C,
            mute: i || v,
            deaf: t || _,
            speaking: R,
            ringing: U,
            priority: b,
            embeddedApplication: M[0],
            isStreaming: null != K && K.channelId === s.id,
            isWatching: null != B && B.state !== V.XYD.ENDED,
            isGuest: w,
            isSelf: I,
            application: L?.session_id != null ? F : void 0,
            game: L?.session_id != null ? (z ?? void 0) : void 0,
        }),
    });
});
w.displayName = "ConnectedVoiceUser";
let U = [],
    D = function (e) {
        let {
                allowPreviews: i = !0,
                allowDragging: t = !0,
                channel: s,
                voiceStates: u,
                collapsed: o,
                collapsedMax: c = 6,
                tabIndex: g,
                numAudience: h,
                withGuildIcon: f = !1,
                className: x,
                children: E,
                isThread: y = !1,
            } = e,
            [j, T] = l.useState(null),
            O = l.useRef(null),
            G = (0, S.$n)(s.id, u ?? U),
            { shouldShow: P, dismiss: D } = (0, v.Z0)(s, { collapsed: o }),
            { placement: M } = (0, p.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            L = l.useRef(
                new d.J_(50, () => {
                    T(O.current), (O.current = null);
                }),
            ),
            F = l.useRef(
                new d.J_(175, () => {
                    T(null);
                }),
            ),
            z = l.useCallback(
                (e) => {
                    i && (F.current.cancel(), (O.current = e), L.current.delay());
                },
                [i],
            ),
            K = l.useCallback(
                (e) => {
                    i && (L.current.cancel(), (O.current = null), F.current.delay());
                },
                [i],
            ),
            B = (0, r.bG)([C.A], () => C.A.can(V.xBc.MOVE_MEMBERS, s)),
            Y = t && B,
            q = (0, r.yK)([b.A], () => {
                if (o) return [];
                let e = new Set();
                return (
                    G?.forEach((i) => {
                        let { user: t } = i;
                        b.A.getActivities(t.id, s.guild_id).forEach((i) => {
                            null != i.application_id && e.add(i.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(q);
        let H = (() => {
            if (null == G || 0 === G.length) return null;
            let e = o && G.length > c + 1 ? G.slice(0, c) : G,
                i = A.A.getGuildRingingUsers(s.id),
                t = e.map((e) => {
                    let { user: t, nick: l, voiceState: a } = e,
                        r = i.has(t.id);
                    return (0, n.jsx)(
                        w,
                        {
                            user: t,
                            nick: l,
                            isSelfOnOtherClient: N.default.getId() === t.id && a.sessionId !== N.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: s,
                            collapsed: o,
                            canDrag: Y,
                            showPreview: z,
                            hidePreview: K,
                            shouldShowHoverPopout: j === t.id,
                            tabIndex: g,
                        },
                        `voice-user-${t.id}-${r}`,
                    );
                });
            return (
                null != h && h > 0
                    ? t.push((0, n.jsx)(k.aI, { collapsed: o, numAudience: h }, "audience"))
                    : o && G.length > c + 1 && t.push((0, n.jsx)(k.LR, { numUsers: G.length - c }, "collapsed-users")),
                P && "bottom" === M
                    ? t.push((0, n.jsx)(I.p, { channel: s, onClose: D }, "voice-invite-suggestions-button"))
                    : P &&
                      "top" === M &&
                      t.unshift((0, n.jsx)(I.p, { channel: s, onClose: D }, "voice-invite-suggestions-button")),
                t
            );
        })();
        return null == H && null == E
            ? null
            : (0, n.jsxs)(_.Wr, {
                  className: a()(x, R.p_, { [R.yZ]: o, [R.lY]: f, [R.fT]: y }),
                  collapsed: o,
                  children: [H, E],
              });
    };
