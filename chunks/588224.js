n.d(t, { A: () => B }), n(667532), n(321073);
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
    p = n(532622),
    m = n(140547),
    g = n(242919),
    _ = n(7054),
    f = n(220995),
    x = n(582904),
    C = n(551826),
    E = n(159426),
    I = n(25528),
    b = n(530804),
    N = n(481947),
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
    w = n(50314);
let k = l.memo((e) => {
    let { mute: t, deaf: n, user: l, channel: s, sessionId: a, nick: o } = e,
        f = l.id,
        x = (0, r.bG)([T.default], () => T.default.getId() === f, [f]),
        [N, j, R] = (0, r.yK)(
            [y.Ay],
            () =>
                x
                    ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1]
                    : [!y.Ay.isSupported() || y.Ay.isLocalMute(f), !1, y.Ay.isLocalVideoDisabled(f)],
            [x, f],
        ),
        w = (0, r.bG)([L.A], () => L.A.isPrioritySpeaker(f)),
        k = (0, d.A)({ userId: f, checkSoundSharing: !0 }),
        V = (0, r.bG)([v.Ay], () => v.Ay.isGuestOrLurker(s.guild_id, f)),
        B = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(f)),
        H = (0, r.bG)(
            [c.Ay],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(f);
                }),
            [f, s.id],
        ),
        F = (0, h.A)(null != H ? [H.applicationId] : []),
        K = (0, I.Ay)(f, s.guild_id)[0],
        W = (0, u.YY)(K?.application_id).data ?? void 0,
        [Y, z] = (0, r.yK)(
            [S.A],
            () => [S.A.getStreamForUser(f, s.getGuildId()), S.A.getActiveStreamForUser(f, s.getGuildId())],
            [s, f],
        ),
        X = (0, r.bG)([O.A], () => O.A.getSessionById(a)),
        q = D.Ay.useName(l),
        J = (0, r.bG)([M.A], () => M.A.getVoicePlatformForChannel(s.id, f), [s.id, f]),
        { enableHangStatus: Q } = (0, m.$j)({ guildId: s.guild_id, location: "VoiceUsers" }),
        $ = (0, p.Ay)(s, !0, l),
        Z = (0, r.bG)([g.A], () => (x ? g.A.getHangStatusActivity() : null), [x]),
        ee = (0, _.h)(f),
        et = (0, b.uy)(s.id, f),
        { enableVCStatusIcons: en, enableRequestToStream: ei } = E.m.useExperiment(
            { guildId: s.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        el = en || Q;
    return (0, i.jsx)(C.A, {
        shakeLocation: P.uD.VOICE_USER,
        isShaking: k,
        children: (0, i.jsx)(G.Ay, {
            ...e,
            nick: o ?? q,
            canDrag: e.canDrag && !V,
            disconnected: et,
            otherClientSessionType: X?.clientInfo?.os,
            voicePlatform: J,
            localMute: N && !x,
            localVideoDisabled: R,
            mute: t || N,
            deaf: n || j,
            speaking: k,
            ringing: B,
            priority: w,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === s.id,
            isWatching: null != z && z.state !== U.XYD.ENDED,
            isGuest: V,
            isSelf: x,
            requestToStreamActivity: ei ? K : void 0,
            application: el && K?.session_id != null ? W : void 0,
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
                channel: s,
                voiceStates: d,
                collapsed: c,
                collapsedMax: u = 6,
                tabIndex: p,
                location: m,
                numAudience: g,
                withGuildIcon: _ = !1,
                className: C,
                children: E,
                isThread: I = !1,
            } = e,
            [S, v] = l.useState(null),
            [y, O] = l.useState(!1),
            L = l.useRef(null),
            M = (0, b.$n)(s.id, d ?? V),
            { shouldShow: D, dismiss: P } = (0, x.Z)(s, { collapsed: c }),
            B = l.useRef(
                new o.J_(50, () => {
                    v(L.current), (L.current = null);
                }),
            ),
            H = l.useRef(
                new o.J_(175, () => {
                    v(null);
                }),
            ),
            F = l.useCallback(
                (e) => {
                    t && (O(!0), H.current.cancel(), (L.current = e), B.current.delay());
                },
                [t],
            ),
            K = l.useCallback(
                (e) => {
                    t && (B.current.cancel(), (L.current = null), O(!1), H.current.delay());
                },
                [t],
            ),
            W = (0, r.yK)([R.A], () => {
                if (c) return [];
                let e = new Set();
                return (
                    M?.forEach((t) => {
                        let { user: n } = t;
                        R.A.getActivities(n.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(W);
        let Y = (() => {
            if (null == M || 0 === M.length) return null;
            let e = c && M.length > u + 1 ? M.slice(0, u) : M,
                t = A.A.getGuildRingingUsers(s.id),
                l = e.map((e) => {
                    let { user: l, nick: a, voiceState: r } = e,
                        o = t.has(l.id);
                    return (0, i.jsx)(
                        k,
                        {
                            user: l,
                            nick: a,
                            isSelfOnOtherClient: T.default.getId() === l.id && r.sessionId !== T.default.getSessionId(),
                            mute: r.isVoiceMuted(),
                            deaf: r.isVoiceDeafened(),
                            video: r.selfVideo,
                            serverMute: r.mute,
                            serverDeaf: r.deaf,
                            sessionId: r.sessionId ?? "",
                            channel: s,
                            collapsed: c,
                            canDrag: n && j.A.can(U.xBc.MOVE_MEMBERS, s),
                            showPreview: F,
                            hidePreview: K,
                            previewIsOpen: y,
                            shouldShowHoverPopout: S === l.id,
                            tabIndex: p,
                            location: m,
                        },
                        `voice-user-${l.id}-${o}`,
                    );
                });
            return (
                D && l.unshift((0, i.jsx)(f.p, { channel: s, onClose: P }, "voice-invite-suggestions-button")),
                null != g && g > 0
                    ? l.push((0, i.jsx)(G.aI, { collapsed: c, numAudience: g }))
                    : c && M.length > u + 1 && l.push((0, i.jsx)(G.LR, { numUsers: M.length - u })),
                l
            );
        })();
        return null == Y && null == E
            ? null
            : (0, i.jsxs)(N.Wr, {
                  className: a()(C, w.p_, { [w.yZ]: c, [w.lY]: _, [w.fT]: I }),
                  collapsed: c,
                  children: [Y, E],
              });
    };
