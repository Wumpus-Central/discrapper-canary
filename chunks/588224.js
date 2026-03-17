"use strict";
n.d(t, { A: () => B }), n(667532), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(451988),
    c = n(717558),
    d = n(933958),
    u = n(627363),
    h = n(429913),
    A = n(313961),
    m = n(532622),
    p = n(550946),
    g = n(140547),
    _ = n(242919),
    f = n(7054),
    x = n(220995),
    C = n(582904),
    E = n(551826),
    I = n(159426),
    N = n(25528),
    b = n(530804),
    S = n(481947),
    T = n(616356),
    v = n(961350),
    y = n(430452),
    j = n(576705),
    R = n(290863),
    O = n(528767),
    L = n(485296),
    M = n(977997),
    D = n(427262),
    G = n(340851),
    U = n(652215),
    P = n(31408),
    w = n(50314);
let k = s.memo((e) => {
    let { mute: t, deaf: n, user: s, channel: l, sessionId: r, nick: o } = e,
        x = s.id,
        C = (0, a.bG)([v.default], () => v.default.getId() === x, [x]),
        [S, j, R] = (0, a.yK)(
            [y.Ay],
            () =>
                C
                    ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1]
                    : [!y.Ay.isSupported() || y.Ay.isLocalMute(x), !1, y.Ay.isLocalVideoDisabled(x)],
            [C, x],
        ),
        w = (0, a.bG)([L.A], () => L.A.isPrioritySpeaker(x)),
        k = (0, c.A)({ userId: x, checkSoundSharing: !0 }),
        V = (0, p.A)(l.guild_id, x),
        B = (0, a.bG)([A.A], () => A.A.getGuildRingingUsers(l.id).has(x)),
        H = (0, a.bG)(
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
        [Y, z] = (0, a.yK)(
            [T.A],
            () => [T.A.getStreamForUser(x, l.getGuildId()), T.A.getActiveStreamForUser(x, l.getGuildId())],
            [l, x],
        ),
        q = (0, a.bG)([O.A], () => O.A.getSessionById(r)),
        X = D.Ay.useName(s),
        Q = (0, a.bG)([M.A], () => M.A.getVoicePlatformForChannel(l.id, x), [l.id, x]),
        { enableHangStatus: J } = (0, g.$j)({ guildId: l.guild_id, location: "VoiceUsers" }),
        $ = (0, m.Ay)(l, !0, s),
        Z = (0, a.bG)([_.A], () => (C ? _.A.getHangStatusActivity() : null), [C]),
        ee = (0, f.h)(x),
        et = (0, b.uy)(l.id, x),
        { enableVCStatusIcons: en, enableRequestToStream: ei } = I.m.useExperiment(
            { guildId: l.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        es = en || J;
    return (0, i.jsx)(E.A, {
        shakeLocation: P.uD.VOICE_USER,
        isShaking: k,
        children: (0, i.jsx)(G.Ay, {
            ...e,
            nick: o ?? X,
            canDrag: e.canDrag && !V,
            disconnected: et,
            otherClientSessionType: q?.clientInfo?.os,
            voicePlatform: Q,
            localMute: S && !C,
            localVideoDisabled: R,
            mute: t || S,
            deaf: n || j,
            speaking: k,
            ringing: B,
            priority: w,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === l.id,
            isWatching: null != z && z.state !== U.XYD.ENDED,
            isGuest: V,
            isSelf: C,
            requestToStreamActivity: ei ? K : void 0,
            application: es && K?.session_id != null ? W : void 0,
            showHangStatus: $ && J && (C || null != ee),
            hangStatusActivity: C ? Z : ee,
        }),
    });
});
k.displayName = "ConnectedVoiceUser";
let V = [],
    B = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: l,
                voiceStates: c,
                collapsed: d,
                collapsedMax: u = 6,
                tabIndex: m,
                location: p,
                numAudience: g,
                withGuildIcon: _ = !1,
                className: f,
                children: E,
                isThread: I = !1,
            } = e,
            [N, T] = s.useState(null),
            [y, O] = s.useState(!1),
            L = s.useRef(null),
            M = (0, b.$n)(l.id, c ?? V),
            { shouldShow: D, dismiss: P } = (0, C.Z0)(l, { collapsed: d }),
            B = s.useRef(
                new o.J_(50, () => {
                    T(L.current), (L.current = null);
                }),
            ),
            H = s.useRef(
                new o.J_(175, () => {
                    T(null);
                }),
            ),
            F = s.useCallback(
                (e) => {
                    t && (O(!0), H.current.cancel(), (L.current = e), B.current.delay());
                },
                [t],
            ),
            K = s.useCallback(
                (e) => {
                    t && (B.current.cancel(), (L.current = null), O(!1), H.current.delay());
                },
                [t],
            ),
            W = (0, a.yK)([R.A], () => {
                if (d) return [];
                let e = new Set();
                return (
                    M?.forEach((t) => {
                        let { user: n } = t;
                        R.A.getActivities(n.id, l.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(W);
        let Y = (() => {
            if (null == M || 0 === M.length) return null;
            let e = d && M.length > u + 1 ? M.slice(0, u) : M,
                t = A.A.getGuildRingingUsers(l.id),
                s = e.map((e) => {
                    let { user: s, nick: r, voiceState: a } = e,
                        o = t.has(s.id);
                    return (0, i.jsx)(
                        k,
                        {
                            user: s,
                            nick: r,
                            isSelfOnOtherClient: v.default.getId() === s.id && a.sessionId !== v.default.getSessionId(),
                            mute: a.isVoiceMuted(),
                            deaf: a.isVoiceDeafened(),
                            video: a.selfVideo,
                            serverMute: a.mute,
                            serverDeaf: a.deaf,
                            sessionId: a.sessionId ?? "",
                            channel: l,
                            collapsed: d,
                            canDrag: n && j.A.can(U.xBc.MOVE_MEMBERS, l),
                            showPreview: F,
                            hidePreview: K,
                            previewIsOpen: y,
                            shouldShowHoverPopout: N === s.id,
                            tabIndex: m,
                            location: p,
                        },
                        `voice-user-${s.id}-${o}`,
                    );
                });
            return (
                D && s.unshift((0, i.jsx)(x.p, { channel: l, onClose: P }, "voice-invite-suggestions-button")),
                null != g && g > 0
                    ? s.push((0, i.jsx)(G.aI, { collapsed: d, numAudience: g }))
                    : d && M.length > u + 1 && s.push((0, i.jsx)(G.LR, { numUsers: M.length - u })),
                s
            );
        })();
        return null == Y && null == E
            ? null
            : (0, i.jsxs)(S.Wr, {
                  className: r()(f, w.p_, { [w.yZ]: d, [w.lY]: _, [w.fT]: I }),
                  collapsed: d,
                  children: [Y, E],
              });
    };
