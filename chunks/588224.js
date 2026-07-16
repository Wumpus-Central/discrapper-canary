t.d(i, { A: () => R }), t(321073);
var n = t(627968),
    l = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    d = t(451988),
    u = t(717558),
    o = t(933958),
    c = t(191424),
    A = t(627363),
    m = t(429913),
    g = t(313961),
    h = t(202163),
    p = t(550946),
    f = t(220995),
    I = t(582904),
    v = t(551826),
    x = t(530804),
    S = t(481947),
    _ = t(616356),
    E = t(280450),
    N = t(186295),
    y = t(576705),
    C = t(290863),
    b = t(528767),
    j = t(485296),
    T = t(977997),
    G = t(427262),
    O = t(340851),
    P = t(652215),
    k = t(31408),
    V = t(588533);
let w = l.memo((e) => {
    let { mute: i, deaf: t, user: l, channel: s, sessionId: a, nick: d } = e,
        f = l.id,
        I = (0, r.bG)([E.default], () => E.default.getId() === f, [f]),
        [S, y, C] = (0, r.yK)(
            [N.Ay],
            () =>
                I
                    ? [!N.Ay.isSupported() || N.Ay.isSelfMute() || N.Ay.isSelfMutedTemporarily(), N.Ay.isSelfDeaf(), !1]
                    : [!N.Ay.isSupported() || N.Ay.isLocalMute(f), !1, N.Ay.isLocalVideoDisabled(f)],
            [I, f],
        ),
        V = (0, r.bG)([j.A], () => j.A.isPrioritySpeaker(f)),
        w = (0, u.A)({ userId: f, checkSoundSharing: !0 }),
        D = (0, p.A)(s.guild_id, f),
        R = (0, r.bG)([g.A], () => g.A.getGuildRingingUsers(s.id).has(f)),
        U = (0, r.bG)(
            [o.Ay],
            () =>
                o.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: i } = e;
                    return i.has(f);
                }),
            [f, s.id],
        ),
        M = (0, m.A)(null != U ? [U.applicationId] : []),
        L = (0, c.A)(f, s.guild_id)[0],
        F = (0, A.YY)(L?.application_id).data ?? void 0,
        { gameRecord: z } = (0, h.A)(L?.application_id),
        [K, B] = (0, r.yK)(
            [_.A],
            () => [_.A.getStreamForUser(f, s.getGuildId()), _.A.getActiveStreamForUser(f, s.getGuildId())],
            [s, f],
        ),
        Y = (0, r.bG)([b.A], () => b.A.getSessionById(a)),
        $ = G.Ay.useName(l),
        q = (0, r.bG)([T.A], () => T.A.getVoicePlatformForChannel(s.id, f), [s.id, f]),
        H = (0, x.uy)(s.id, f);
    return (0, n.jsx)(v.A, {
        shakeLocation: k.uD.VOICE_USER,
        isShaking: w,
        children: (0, n.jsx)(O.Ay, {
            ...e,
            nick: d ?? $,
            canDrag: e.canDrag && !D,
            disconnected: H,
            otherClientSessionType: Y?.clientInfo?.os,
            voicePlatform: q,
            localMute: S && !I,
            localVideoDisabled: C,
            mute: i || S,
            deaf: t || y,
            speaking: w,
            ringing: R,
            priority: V,
            embeddedApplication: M[0],
            isStreaming: null != K && K.channelId === s.id,
            isWatching: null != B && B.state !== P.XYD.ENDED,
            isGuest: D,
            isSelf: I,
            application: L?.session_id != null ? F : void 0,
            game: L?.session_id != null ? (z ?? void 0) : void 0,
        }),
    });
});
w.displayName = "ConnectedVoiceUser";
let D = [],
    R = function (e) {
        let {
                allowPreviews: i = !0,
                allowDragging: t = !0,
                channel: s,
                voiceStates: u,
                collapsed: o,
                collapsedMax: c = 6,
                tabIndex: A,
                numAudience: h,
                withGuildIcon: p = !1,
                className: v,
                children: _,
                isThread: N = !1,
            } = e,
            [b, j] = l.useState(null),
            T = l.useRef(null),
            G = (0, x.$n)(s.id, u ?? D),
            { shouldShow: k, dismiss: R } = (0, I.Z0)(s, { collapsed: o }),
            U = l.useRef(
                new d.J_(50, () => {
                    j(T.current), (T.current = null);
                }),
            ),
            M = l.useRef(
                new d.J_(175, () => {
                    j(null);
                }),
            ),
            L = l.useCallback(
                (e) => {
                    i && (M.current.cancel(), (T.current = e), U.current.delay());
                },
                [i],
            ),
            F = l.useCallback(
                (e) => {
                    i && (U.current.cancel(), (T.current = null), M.current.delay());
                },
                [i],
            ),
            z = (0, r.bG)([y.A], () => y.A.can(P.xBc.MOVE_MEMBERS, s)),
            K = t && z,
            B = (0, r.yK)([C.A], () => {
                if (o) return [];
                let e = new Set();
                return (
                    G?.forEach((i) => {
                        let { user: t } = i;
                        C.A.getActivities(t.id, s.guild_id).forEach((i) => {
                            null != i.application_id && e.add(i.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(B);
        let Y = (function () {
            if (null == G || 0 === G.length) return null;
            let e = o && G.length > c + 1 ? G.slice(0, c) : G,
                i = g.A.getGuildRingingUsers(s.id),
                t = e.map((e) => {
                    let { user: t, nick: l, voiceState: a } = e,
                        r = i.has(t.id);
                    return (0, n.jsx)(
                        w,
                        {
                            user: t,
                            nick: l,
                            isSelfOnOtherClient: E.default.getId() === t.id && a.sessionId !== E.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: s,
                            collapsed: o,
                            canDrag: K,
                            showPreview: L,
                            hidePreview: F,
                            shouldShowHoverPopout: b === t.id,
                            tabIndex: A,
                        },
                        `voice-user-${t.id}-${r}`,
                    );
                });
            return (
                null != h && h > 0
                    ? t.push((0, n.jsx)(O.aI, { collapsed: o, numAudience: h }, "audience"))
                    : o && G.length > c + 1 && t.push((0, n.jsx)(O.LR, { numUsers: G.length - c }, "collapsed-users")),
                k && t.push((0, n.jsx)(f.p, { channel: s, onClose: R }, "voice-invite-suggestions-button")),
                t
            );
        })();
        return null == Y && null == _
            ? null
            : (0, n.jsxs)(S.Wr, {
                  className: a()(v, V.p_, { [V.yZ]: o, [V.lY]: p, [V.fT]: N }),
                  collapsed: o,
                  children: [Y, _],
              });
    };
