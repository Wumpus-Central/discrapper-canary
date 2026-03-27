"use strict";
n.d(t, { A: () => F }), n(667532), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(451988),
    c = n(717558),
    d = n(933958),
    u = n(627363),
    h = n(429913),
    A = n(313961),
    m = n(532622),
    _ = n(550946),
    p = n(140547),
    g = n(242919),
    f = n(7054),
    x = n(220995),
    C = n(582904),
    E = n(551826),
    I = n(159426),
    N = n(25528),
    b = n(530804),
    S = n(481947),
    T = n(591346),
    v = n(616356),
    y = n(961350),
    j = n(430452),
    R = n(576705),
    O = n(290863),
    L = n(528767),
    M = n(485296),
    D = n(977997),
    G = n(427262),
    U = n(847221),
    P = n(340851),
    w = n(652215),
    k = n(31408),
    V = n(647493);
let B = s.memo((e) => {
    let { mute: t, deaf: n, user: s, channel: l, sessionId: a, nick: o } = e,
        x = s.id,
        C = (0, r.bG)([y.default], () => y.default.getId() === x, [x]),
        [S, T, R] = (0, r.yK)(
            [j.Ay],
            () =>
                C
                    ? [!j.Ay.isSupported() || j.Ay.isSelfMute() || j.Ay.isSelfMutedTemporarily(), j.Ay.isSelfDeaf(), !1]
                    : [!j.Ay.isSupported() || j.Ay.isLocalMute(x), !1, j.Ay.isLocalVideoDisabled(x)],
            [C, x],
        ),
        O = (0, r.bG)([M.A], () => M.A.isPrioritySpeaker(x)),
        U = (0, c.A)({ userId: x, checkSoundSharing: !0 }),
        V = (0, _.A)(l.guild_id, x),
        B = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(l.id).has(x)),
        H = (0, r.bG)(
            [d.Ay],
            () =>
                d.Ay.getEmbeddedActivitiesForChannel(l.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(x);
                }),
            [x, l.id],
        ),
        F = (0, h.A)(null != H ? [H.applicationId] : []),
        K = (0, N.Ay)(x, l.guild_id)[0],
        W = (0, u.YY)(K?.application_id).data ?? void 0,
        [Y, z] = (0, r.yK)(
            [v.A],
            () => [v.A.getStreamForUser(x, l.getGuildId()), v.A.getActiveStreamForUser(x, l.getGuildId())],
            [l, x],
        ),
        q = (0, r.bG)([L.A], () => L.A.getSessionById(a)),
        X = G.Ay.useName(s),
        Q = (0, r.bG)([D.A], () => D.A.getVoicePlatformForChannel(l.id, x), [l.id, x]),
        { enableHangStatus: J } = (0, p.$j)({ guildId: l.guild_id, location: "VoiceUsers" }),
        $ = (0, m.Ay)(l, !0, s),
        Z = (0, r.bG)([g.A], () => (C ? g.A.getHangStatusActivity() : null), [C]),
        ee = (0, f.h)(x),
        et = (0, b.uy)(l.id, x),
        { enableVCStatusIcons: en } = I.m.useExperiment(
            { guildId: l.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        ei = en || J;
    return (0, i.jsx)(E.A, {
        shakeLocation: k.uD.VOICE_USER,
        isShaking: U,
        children: (0, i.jsx)(P.Ay, {
            ...e,
            nick: o ?? X,
            canDrag: e.canDrag && !V,
            disconnected: et,
            otherClientSessionType: q?.clientInfo?.os,
            voicePlatform: Q,
            localMute: S && !C,
            localVideoDisabled: R,
            mute: t || S,
            deaf: n || T,
            speaking: U,
            ringing: B,
            priority: O,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === l.id,
            isWatching: null != z && z.state !== w.XYD.ENDED,
            isGuest: V,
            isSelf: C,
            application: ei && K?.session_id != null ? W : void 0,
            showHangStatus: $ && J && (C || null != ee),
            hangStatusActivity: C ? Z : ee,
        }),
    });
});
B.displayName = "ConnectedVoiceUser";
let H = [],
    F = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: l,
                voiceStates: c,
                collapsed: d,
                collapsedMax: u = 6,
                tabIndex: m,
                numAudience: _,
                withGuildIcon: p = !1,
                className: g,
                children: E,
                isThread: I = !1,
            } = e,
            [N, v] = s.useState(null),
            j = s.useRef(null),
            L = (0, b.$n)(l.id, c ?? H);
        (0, f.s)(l.guild_id, L);
        let { enableHistoryHover: M } = (0, T.G8)({ guildId: l.guild_id, location: "VoiceUsers" }),
            { shouldShow: D, dismiss: G } = (0, C.Z0)(l, { collapsed: d }),
            k = s.useRef(
                new o.J_(50, () => {
                    v(j.current), (j.current = null);
                }),
            ),
            F = s.useRef(
                new o.J_(175, () => {
                    v(null);
                }),
            ),
            K = s.useCallback(
                (e) => {
                    t && (F.current.cancel(), (j.current = e), k.current.delay());
                },
                [t],
            ),
            W = s.useCallback(
                (e) => {
                    t && (k.current.cancel(), (j.current = null), F.current.delay());
                },
                [t],
            ),
            Y = (0, r.yK)([O.A], () => {
                if (d) return [];
                let e = new Set();
                return (
                    L?.forEach((t) => {
                        let { user: n } = t;
                        O.A.getActivities(n.id, l.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(Y);
        let z = (() => {
            if (null == L || 0 === L.length) return null;
            let e = d && L.length > u + 1 ? L.slice(0, u) : L,
                t = A.A.getGuildRingingUsers(l.id),
                s = e.map((e) => {
                    let { user: s, nick: a, voiceState: r } = e,
                        o = t.has(s.id);
                    return (0, i.jsx)(
                        B,
                        {
                            user: s,
                            nick: a,
                            isSelfOnOtherClient: y.default.getId() === s.id && r.sessionId !== y.default.getSessionId(),
                            mute: r.isVoiceMuted(),
                            deaf: r.isVoiceDeafened(),
                            video: r.selfVideo,
                            serverMute: r.mute,
                            serverDeaf: r.deaf,
                            sessionId: r.sessionId ?? "",
                            channel: l,
                            collapsed: d,
                            canDrag: n && R.A.can(w.xBc.MOVE_MEMBERS, l),
                            showPreview: K,
                            hidePreview: W,
                            shouldShowHoverPopout: N === s.id,
                            tabIndex: m,
                        },
                        `voice-user-${s.id}-${o}`,
                    );
                });
            return (
                D && s.unshift((0, i.jsx)(x.p, { channel: l, onClose: G }, "voice-invite-suggestions-button")),
                null != _ && _ > 0
                    ? s.push((0, i.jsx)(P.aI, { collapsed: d, numAudience: _ }))
                    : d && L.length > u + 1 && s.push((0, i.jsx)(P.LR, { numUsers: L.length - u })),
                M && !d && l.type === w.rbe.GUILD_VOICE && s.push((0, i.jsx)(U.A, { channel: l }, "ghost-user")),
                s
            );
        })();
        return null == z && null == E
            ? null
            : (0, i.jsxs)(S.Wr, {
                  className: a()(g, V.p_, { [V.yZ]: d, [V.lY]: p, [V.fT]: I }),
                  collapsed: d,
                  children: [z, E],
              });
    };
