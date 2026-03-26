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
    k = n(647493);
let w = s.memo((e) => {
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
        k = (0, a.bG)([L.A], () => L.A.isPrioritySpeaker(x)),
        w = (0, c.A)({ userId: x, checkSoundSharing: !0 }),
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
        J = (0, a.bG)([M.A], () => M.A.getVoicePlatformForChannel(l.id, x), [l.id, x]),
        { enableHangStatus: Q } = (0, g.$j)({ guildId: l.guild_id, location: "VoiceUsers" }),
        $ = (0, m.Ay)(l, !0, s),
        Z = (0, a.bG)([_.A], () => (C ? _.A.getHangStatusActivity() : null), [C]),
        ee = (0, f.h)(x),
        et = (0, b.uy)(l.id, x),
        { enableVCStatusIcons: en } = I.m.useExperiment(
            { guildId: l.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        ei = en || Q;
    return (0, i.jsx)(E.A, {
        shakeLocation: P.uD.VOICE_USER,
        isShaking: w,
        children: (0, i.jsx)(G.Ay, {
            ...e,
            nick: o ?? X,
            canDrag: e.canDrag && !V,
            disconnected: et,
            otherClientSessionType: q?.clientInfo?.os,
            voicePlatform: J,
            localMute: S && !C,
            localVideoDisabled: R,
            mute: t || S,
            deaf: n || j,
            speaking: w,
            ringing: B,
            priority: k,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === l.id,
            isWatching: null != z && z.state !== U.XYD.ENDED,
            isGuest: V,
            isSelf: C,
            application: ei && K?.session_id != null ? W : void 0,
            showHangStatus: $ && Q && (C || null != ee),
            hangStatusActivity: C ? Z : ee,
        }),
    });
});
w.displayName = "ConnectedVoiceUser";
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
                numAudience: p,
                withGuildIcon: g = !1,
                className: _,
                children: f,
                isThread: E = !1,
            } = e,
            [I, N] = s.useState(null),
            T = s.useRef(null),
            y = (0, b.$n)(l.id, c ?? V),
            { shouldShow: O, dismiss: L } = (0, C.Z0)(l, { collapsed: d }),
            M = s.useRef(
                new o.J_(50, () => {
                    N(T.current), (T.current = null);
                }),
            ),
            D = s.useRef(
                new o.J_(175, () => {
                    N(null);
                }),
            ),
            P = s.useCallback(
                (e) => {
                    t && (D.current.cancel(), (T.current = e), M.current.delay());
                },
                [t],
            ),
            B = s.useCallback(
                (e) => {
                    t && (M.current.cancel(), (T.current = null), D.current.delay());
                },
                [t],
            ),
            H = (0, a.yK)([R.A], () => {
                if (d) return [];
                let e = new Set();
                return (
                    y?.forEach((t) => {
                        let { user: n } = t;
                        R.A.getActivities(n.id, l.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(H);
        let F = (() => {
            if (null == y || 0 === y.length) return null;
            let e = d && y.length > u + 1 ? y.slice(0, u) : y,
                t = A.A.getGuildRingingUsers(l.id),
                s = e.map((e) => {
                    let { user: s, nick: r, voiceState: a } = e,
                        o = t.has(s.id);
                    return (0, i.jsx)(
                        w,
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
                            showPreview: P,
                            hidePreview: B,
                            shouldShowHoverPopout: I === s.id,
                            tabIndex: m,
                        },
                        `voice-user-${s.id}-${o}`,
                    );
                });
            return (
                O && s.unshift((0, i.jsx)(x.p, { channel: l, onClose: L }, "voice-invite-suggestions-button")),
                null != p && p > 0
                    ? s.push((0, i.jsx)(G.aI, { collapsed: d, numAudience: p }))
                    : d && y.length > u + 1 && s.push((0, i.jsx)(G.LR, { numUsers: y.length - u })),
                s
            );
        })();
        return null == F && null == f
            ? null
            : (0, i.jsxs)(S.Wr, {
                  className: r()(_, k.p_, { [k.yZ]: d, [k.lY]: g, [k.fT]: E }),
                  collapsed: d,
                  children: [F, f],
              });
    };
