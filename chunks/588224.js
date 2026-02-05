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
    g = n(532622),
    m = n(140547),
    p = n(242919),
    _ = n(7054),
    x = n(220995),
    f = n(582904),
    E = n(551826),
    C = n(159426),
    I = n(25528),
    S = n(530804),
    b = n(481947),
    N = n(616356),
    T = n(961350),
    j = n(696451),
    v = n(430452),
    y = n(576705),
    R = n(290863),
    O = n(528767),
    L = n(485296),
    D = n(977997),
    M = n(427262),
    G = n(340851),
    U = n(652215),
    P = n(31408),
    k = n(50314);
let w = l.memo((e) => {
    let { mute: t, deaf: n, user: l, channel: s, sessionId: a, nick: o } = e,
        x = l.id,
        f = (0, r.bG)([T.default], () => T.default.getId() === x, [x]),
        [b, y, R] = (0, r.yK)(
            [v.A],
            () =>
                f
                    ? [!v.A.isSupported() || v.A.isSelfMute() || v.A.isSelfMutedTemporarily(), v.A.isSelfDeaf(), !1]
                    : [!v.A.isSupported() || v.A.isLocalMute(x), !1, v.A.isLocalVideoDisabled(x)],
            [f, x],
        ),
        k = (0, r.bG)([L.A], () => L.A.isPrioritySpeaker(x)),
        w = (0, d.A)({ userId: x, checkSoundSharing: !0 }),
        V = (0, r.bG)([L.A], () => L.A.isCurrentUserPTTLatched()),
        B = f && V,
        H = (0, r.bG)([j.Ay], () => j.Ay.isGuestOrLurker(s.guild_id, x)),
        F = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(x)),
        Y = (0, r.bG)(
            [c.Ay],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(x);
                }),
            [x, s.id],
        ),
        W = (0, h.A)(null != Y ? [Y.applicationId] : []),
        K = (0, I.A)(x, s.guild_id)[0],
        z = (0, u.YY)(K?.application_id).data ?? void 0,
        [X, q] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(x, s.getGuildId()), N.A.getActiveStreamForUser(x, s.getGuildId())],
            [s, x],
        ),
        J = (0, r.bG)([O.A], () => O.A.getSessionById(a)),
        Q = M.Ay.useName(l),
        Z = (0, r.bG)([D.A], () => D.A.getVoicePlatformForChannel(s.id, x), [s.id, x]),
        { enableHangStatus: $ } = (0, m.$j)({ guildId: s.guild_id, location: "VoiceUsers" }),
        ee = (0, g.Ay)(s, !0, l),
        et = (0, r.bG)([p.A], () => (f ? p.A.getHangStatusActivity() : null), [f]),
        en = (0, _.h)(x),
        ei = (0, S.uy)(s.id, x),
        { enableVCStatusIcons: el, enableRequestToStream: es } = C.m.useExperiment(
            { guildId: s.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        ea = el || $;
    return (0, i.jsx)(E.A, {
        shakeLocation: P.uD.VOICE_USER,
        isShaking: w,
        children: (0, i.jsx)(G.Ay, {
            ...e,
            nick: o ?? Q,
            canDrag: e.canDrag && !H,
            disconnected: ei,
            otherClientSessionType: J?.clientInfo?.os,
            voicePlatform: Z,
            localMute: b && !f,
            localVideoDisabled: R,
            mute: t || b,
            deaf: n || y,
            speaking: w,
            latched: B,
            ringing: F,
            priority: k,
            embeddedApplication: W[0],
            isStreaming: null != X && X.channelId === s.id,
            isWatching: null != q && q.state !== U.XYD.ENDED,
            isGuest: H,
            isSelf: f,
            requestToStreamActivity: es ? K : void 0,
            application: ea && K?.session_id != null ? z : void 0,
            showHangStatus: ee && $ && (f || null != en),
            hangStatusActivity: f ? et : en,
        }),
    });
});
w.displayName = "ConnectedVoiceUser";
let V = [],
    B = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: s,
                voiceStates: d,
                collapsed: c,
                collapsedMax: u = 6,
                tabIndex: g,
                location: m,
                numAudience: p,
                withGuildIcon: _ = !1,
                className: E,
                children: C,
                isThread: I = !1,
            } = e,
            [N, j] = l.useState(null),
            [v, O] = l.useState(!1),
            L = l.useRef(null),
            D = (0, S.$n)(s.id, d ?? V),
            { shouldShow: M, dismiss: P } = (0, f.Z0)(s, { collapsed: c }),
            B = l.useRef(
                new o.J_(50, () => {
                    j(L.current), (L.current = null);
                }),
            ),
            H = l.useRef(
                new o.J_(175, () => {
                    j(null);
                }),
            ),
            F = l.useCallback(
                (e) => {
                    t && (O(!0), H.current.cancel(), (L.current = e), B.current.delay());
                },
                [t],
            ),
            Y = l.useCallback(
                (e) => {
                    t && (B.current.cancel(), (L.current = null), O(!1), H.current.delay());
                },
                [t],
            ),
            W = (0, r.yK)([R.A], () => {
                if (c) return [];
                let e = new Set();
                return (
                    D?.forEach((t) => {
                        let { user: n } = t;
                        R.A.getActivities(n.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, h.A)(W);
        let K = (() => {
            if (null == D || 0 === D.length) return null;
            let e = c && D.length > u + 1 ? D.slice(0, u) : D,
                t = A.A.getGuildRingingUsers(s.id),
                l = e.map((e) => {
                    let { user: l, nick: a, voiceState: r } = e,
                        o = t.has(l.id);
                    return (0, i.jsx)(
                        w,
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
                            canDrag: n && y.A.can(U.xBc.MOVE_MEMBERS, s),
                            showPreview: F,
                            hidePreview: Y,
                            previewIsOpen: v,
                            shouldShowHoverPopout: N === l.id,
                            tabIndex: g,
                            location: m,
                        },
                        `voice-user-${l.id}-${o}`,
                    );
                });
            return (
                M && l.unshift((0, i.jsx)(x.p, { channel: s, onClose: P }, "voice-invite-suggestions-button")),
                null != p && p > 0
                    ? l.push((0, i.jsx)(G.aI, { collapsed: c, numAudience: p }))
                    : c && D.length > u + 1 && l.push((0, i.jsx)(G.LR, { numUsers: D.length - u })),
                l
            );
        })();
        return null == K && null == C
            ? null
            : (0, i.jsxs)(b.Wr, {
                  className: a()(E, k.p_, { [k.yZ]: c, [k.lY]: _, [k.fT]: I }),
                  collapsed: c,
                  children: [K, C],
              });
    };
