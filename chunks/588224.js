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
    p = n(140547),
    g = n(242919),
    _ = n(7054),
    f = n(220995),
    x = n(582904),
    C = n(551826),
    E = n(159426),
    I = n(25528),
    N = n(530804),
    b = n(481947),
    S = n(616356),
    T = n(961350),
    v = n(696451),
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
    w = n(665076);
let k = s.memo((e) => {
    let { mute: t, deaf: n, user: s, channel: l, sessionId: r, nick: o } = e,
        f = s.id,
        x = (0, a.bG)([T.default], () => T.default.getId() === f, [f]),
        [b, j, R] = (0, a.yK)(
            [y.Ay],
            () =>
                x
                    ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1]
                    : [!y.Ay.isSupported() || y.Ay.isLocalMute(f), !1, y.Ay.isLocalVideoDisabled(f)],
            [x, f],
        ),
        w = (0, a.bG)([L.A], () => L.A.isPrioritySpeaker(f)),
        k = (0, c.A)({ userId: f, checkSoundSharing: !0 }),
        V = (0, a.bG)([v.Ay], () => v.Ay.isGuestOrLurker(l.guild_id, f)),
        B = (0, a.bG)([A.A], () => A.A.getGuildRingingUsers(l.id).has(f)),
        H = (0, a.bG)(
            [d.Ay],
            () =>
                d.Ay.getEmbeddedActivitiesForChannel(l.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(f);
                }),
            [f, l.id],
        ),
        F = (0, h.A)(null != H ? [H.applicationId] : []),
        K = (0, I.Ay)(f, l.guild_id)[0],
        W = (0, u.YY)(K?.application_id).data ?? void 0,
        [Y, z] = (0, a.yK)(
            [S.A],
            () => [S.A.getStreamForUser(f, l.getGuildId()), S.A.getActiveStreamForUser(f, l.getGuildId())],
            [l, f],
        ),
        q = (0, a.bG)([O.A], () => O.A.getSessionById(r)),
        X = D.Ay.useName(s),
        J = (0, a.bG)([M.A], () => M.A.getVoicePlatformForChannel(l.id, f), [l.id, f]),
        { enableHangStatus: Q } = (0, p.$j)({ guildId: l.guild_id, location: "VoiceUsers" }),
        $ = (0, m.Ay)(l, !0, s),
        Z = (0, a.bG)([g.A], () => (x ? g.A.getHangStatusActivity() : null), [x]),
        ee = (0, _.h)(f),
        et = (0, N.uy)(l.id, f),
        { enableVCStatusIcons: en, enableRequestToStream: ei } = E.m.useExperiment(
            { guildId: l.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        es = en || Q;
    return (0, i.jsx)(C.A, {
        shakeLocation: P.uD.VOICE_USER,
        isShaking: k,
        children: (0, i.jsx)(G.Ay, {
            ...e,
            nick: o ?? X,
            canDrag: e.canDrag && !V,
            disconnected: et,
            otherClientSessionType: q?.clientInfo?.os,
            voicePlatform: J,
            localMute: b && !x,
            localVideoDisabled: R,
            mute: t || b,
            deaf: n || j,
            speaking: k,
            ringing: B,
            priority: w,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === l.id,
            isWatching: null != z && z.state !== U.XYD.ENDED,
            isGuest: V,
            isSelf: x,
            requestToStreamActivity: ei ? K : void 0,
            application: es && K?.session_id != null ? W : void 0,
            showHangStatus: $ && Q && (x || null != ee),
            hangStatusActivity: x ? Z : ee,
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
                className: C,
                children: E,
                isThread: I = !1,
            } = e,
            [S, v] = s.useState(null),
            [y, O] = s.useState(!1),
            L = s.useRef(null),
            M = (0, N.$n)(l.id, c ?? V),
            { shouldShow: D, dismiss: P } = (0, x.Z)(l, { collapsed: d }),
            B = s.useRef(
                new o.J_(50, () => {
                    v(L.current), (L.current = null);
                }),
            ),
            H = s.useRef(
                new o.J_(175, () => {
                    v(null);
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
                            isSelfOnOtherClient: T.default.getId() === s.id && a.sessionId !== T.default.getSessionId(),
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
                            shouldShowHoverPopout: S === s.id,
                            tabIndex: m,
                            location: p,
                        },
                        `voice-user-${s.id}-${o}`,
                    );
                });
            return (
                D && s.unshift((0, i.jsx)(f.p, { channel: l, onClose: P }, "voice-invite-suggestions-button")),
                null != g && g > 0
                    ? s.push((0, i.jsx)(G.aI, { collapsed: d, numAudience: g }))
                    : d && M.length > u + 1 && s.push((0, i.jsx)(G.LR, { numUsers: M.length - u })),
                s
            );
        })();
        return null == Y && null == E
            ? null
            : (0, i.jsxs)(b.Wr, {
                  className: r()(C, w.p_, { [w.yZ]: d, [w.lY]: _, [w.fT]: I }),
                  collapsed: d,
                  children: [Y, E],
              });
    };
