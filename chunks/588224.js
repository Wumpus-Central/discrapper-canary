t.d(i, { A: () => R }), t(321073);
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    d = t(451988),
    o = t(717558),
    u = t(933958),
    c = t(191424),
    m = t(627363),
    A = t(429913),
    g = t(198052),
    h = t(202163),
    p = t(550946),
    f = t(220995),
    I = t(582904),
    v = t(551826),
    x = t(530804),
    S = t(481947),
    _ = t(616356),
    E = t(280450),
    N = t(45630),
    y = t(576705),
    C = t(290863),
    b = t(528767),
    j = t(485296),
    T = t(977997),
    G = t(427262),
    O = t(340851),
    P = t(652215),
    k = t(31408),
    V = t(616352);
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
        w = (0, o.A)({ userId: f, checkSoundSharing: !0 }),
        D = (0, p.A)(s.guild_id, f),
        R = (0, r.bG)([g.A], () => g.A.getGuildRingingUsers(s.id).has(f)),
        M = (0, r.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: i } = e;
                    return i.has(f);
                }),
            [f, s.id],
        ),
        U = (0, A.A)(null != M ? [M.applicationId] : []),
        L = (0, c.A)(f, s.guild_id)[0],
        F = (0, m.YY)(L?.application_id).data ?? void 0,
        { gameRecord: z } = (0, h.A)(L?.application_id),
        [B, K] = (0, r.yK)(
            [_.A],
            () => [_.A.getStreamForUser(f, s.getGuildId()), _.A.getActiveStreamForUser(f, s.getGuildId())],
            [s, f],
        ),
        Y = (0, r.bG)([b.A], () => b.A.getSessionById(a)),
        q = G.Ay.useName(l),
        $ = (0, r.bG)([T.A], () => T.A.getVoicePlatformForChannel(s.id, f), [s.id, f]),
        H = (0, x.uy)(s.id, f);
    return (0, n.jsx)(v.A, {
        shakeLocation: k.uD.VOICE_USER,
        isShaking: w,
        children: (0, n.jsx)(O.Ay, {
            ...e,
            nick: d ?? q,
            canDrag: e.canDrag && !D,
            disconnected: H,
            otherClientSessionType: Y?.clientInfo?.os,
            voicePlatform: $,
            localMute: S && !I,
            localVideoDisabled: C,
            mute: i || S,
            deaf: t || y,
            speaking: w,
            ringing: R,
            priority: V,
            embeddedApplication: U[0],
            isStreaming: null != B && B.channelId === s.id,
            isWatching: null != K && K.state !== P.XYD.ENDED,
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
                voiceStates: o,
                collapsed: u,
                collapsedMax: c = 6,
                tabIndex: m,
                numAudience: h,
                withGuildIcon: p = !1,
                className: v,
                children: _,
                isThread: N = !1,
            } = e,
            [b, j] = l.useState(null),
            T = l.useRef(null),
            G = (0, x.$n)(s.id, o ?? D),
            { shouldShow: k, dismiss: R } = (0, I.Z0)(s, { collapsed: u }),
            M = l.useRef(
                new d.J_(50, () => {
                    j(T.current), (T.current = null);
                }),
            ),
            U = l.useRef(
                new d.J_(175, () => {
                    j(null);
                }),
            ),
            L = l.useCallback(
                (e) => {
                    i && (U.current.cancel(), (T.current = e), M.current.delay());
                },
                [i],
            ),
            F = l.useCallback(
                (e) => {
                    i && (M.current.cancel(), (T.current = null), U.current.delay());
                },
                [i],
            ),
            z = (0, r.bG)([y.A], () => y.A.can(P.xBc.MOVE_MEMBERS, s)),
            B = t && z,
            K = (0, r.yK)([C.A], () => {
                if (u) return [];
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
        (0, A.A)(K);
        let Y = (function () {
            if (null == G || 0 === G.length) return null;
            let e = u && G.length > c + 1 ? G.slice(0, c) : G,
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
                            collapsed: u,
                            canDrag: B,
                            showPreview: L,
                            hidePreview: F,
                            shouldShowHoverPopout: b === t.id,
                            tabIndex: m,
                        },
                        `voice-user-${t.id}-${r}`,
                    );
                });
            return (
                null != h && h > 0
                    ? t.push((0, n.jsx)(O.aI, { collapsed: u, numAudience: h }, "audience"))
                    : u && G.length > c + 1 && t.push((0, n.jsx)(O.LR, { numUsers: G.length - c }, "collapsed-users")),
                k && t.push((0, n.jsx)(f.p, { channel: s, onClose: R }, "voice-invite-suggestions-button")),
                t
            );
        })();
        return null == Y && null == _
            ? null
            : (0, n.jsxs)(S.Wr, {
                  className: a()(v, V.p_, { [V.yZ]: u, [V.lY]: p, [V.fT]: N }),
                  collapsed: u,
                  children: [Y, _],
              });
    };
