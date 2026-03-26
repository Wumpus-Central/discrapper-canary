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
    E = n(582904),
    C = n(551826),
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
        E = (0, r.bG)([y.default], () => y.default.getId() === x, [x]),
        [S, T, R] = (0, r.yK)(
            [j.Ay],
            () =>
                E
                    ? [!j.Ay.isSupported() || j.Ay.isSelfMute() || j.Ay.isSelfMutedTemporarily(), j.Ay.isSelfDeaf(), !1]
                    : [!j.Ay.isSupported() || j.Ay.isLocalMute(x), !1, j.Ay.isLocalVideoDisabled(x)],
            [E, x],
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
        J = (0, r.bG)([D.A], () => D.A.getVoicePlatformForChannel(l.id, x), [l.id, x]),
        { enableHangStatus: Q } = (0, p.$j)({ guildId: l.guild_id, location: "VoiceUsers" }),
        $ = (0, m.Ay)(l, !0, s),
        Z = (0, r.bG)([g.A], () => (E ? g.A.getHangStatusActivity() : null), [E]),
        ee = (0, f.h)(x),
        et = (0, b.uy)(l.id, x),
        { enableVCStatusIcons: en } = I.m.useExperiment(
            { guildId: l.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        ei = en || Q;
    return (0, i.jsx)(C.A, {
        shakeLocation: k.uD.VOICE_USER,
        isShaking: U,
        children: (0, i.jsx)(P.Ay, {
            ...e,
            nick: o ?? X,
            canDrag: e.canDrag && !V,
            disconnected: et,
            otherClientSessionType: q?.clientInfo?.os,
            voicePlatform: J,
            localMute: S && !E,
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
            isSelf: E,
            application: ei && K?.session_id != null ? W : void 0,
            showHangStatus: $ && Q && (E || null != ee),
            hangStatusActivity: E ? Z : ee,
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
                children: f,
                isThread: C = !1,
            } = e,
            [I, N] = s.useState(null),
            v = s.useRef(null),
            j = (0, b.$n)(l.id, c ?? H),
            { enableHistoryHover: L } = (0, T.G8)({ guildId: l.guild_id, location: "VoiceUsers" }),
            { shouldShow: M, dismiss: D } = (0, E.Z0)(l, { collapsed: d }),
            G = s.useRef(
                new o.J_(50, () => {
                    N(v.current), (v.current = null);
                }),
            ),
            k = s.useRef(
                new o.J_(175, () => {
                    N(null);
                }),
            ),
            F = s.useCallback(
                (e) => {
                    t && (k.current.cancel(), (v.current = e), G.current.delay());
                },
                [t],
            ),
            K = s.useCallback(
                (e) => {
                    t && (G.current.cancel(), (v.current = null), k.current.delay());
                },
                [t],
            ),
            W = (0, r.yK)([O.A], () => {
                if (d) return [];
                let e = new Set();
                return (
                    j?.forEach((t) => {
                        let { user: n } = t;
                        O.A.getActivities(n.id, l.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(W);
        let Y = (() => {
            if (null == j || 0 === j.length) return null;
            let e = d && j.length > u + 1 ? j.slice(0, u) : j,
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
                            showPreview: F,
                            hidePreview: K,
                            shouldShowHoverPopout: I === s.id,
                            tabIndex: m,
                        },
                        `voice-user-${s.id}-${o}`,
                    );
                });
            return (
                M && s.unshift((0, i.jsx)(x.p, { channel: l, onClose: D }, "voice-invite-suggestions-button")),
                null != _ && _ > 0
                    ? s.push((0, i.jsx)(P.aI, { collapsed: d, numAudience: _ }))
                    : d && j.length > u + 1 && s.push((0, i.jsx)(P.LR, { numUsers: j.length - u })),
                L && !d && l.type === w.rbe.GUILD_VOICE && s.push((0, i.jsx)(U.A, { channel: l }, "ghost-user")),
                s
            );
        })();
        return null == Y && null == f
            ? null
            : (0, i.jsxs)(S.Wr, {
                  className: a()(g, V.p_, { [V.yZ]: d, [V.lY]: p, [V.fT]: C }),
                  collapsed: d,
                  children: [Y, f],
              });
    };
