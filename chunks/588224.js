(i.d(t, { A: () => R }), i(321073));
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    d = i(451988),
    u = i(717558),
    o = i(933958),
    c = i(191424),
    A = i(627363),
    m = i(429913),
    g = i(202163),
    h = i(550946),
    p = i(220995),
    f = i(582904),
    I = i(551826),
    v = i(530804),
    S = i(669335),
    x = i(616356),
    _ = i(280450),
    E = i(25578),
    N = i(576705),
    y = i(290863),
    C = i(528767),
    j = i(485296),
    b = i(977997),
    T = i(427262),
    O = i(340851),
    G = i(652215),
    P = i(31408),
    V = i(616352);
let k = l.memo((e) => {
    let { mute: t, deaf: i, user: l, channel: s, sessionId: a, nick: d } = e,
        p = l.id,
        f = (0, r.bG)([_.default], () => _.default.getId() === p, [p]),
        [S, N, y] = (0, r.yK)(
            [E.Ay],
            () =>
                f
                    ? [!E.Ay.isSupported() || E.Ay.isSelfMute() || E.Ay.isSelfMutedTemporarily(), E.Ay.isSelfDeaf(), !1]
                    : [!E.Ay.isSupported() || E.Ay.isLocalMute(p), !1, E.Ay.isLocalVideoDisabled(p)],
            [f, p],
        ),
        V = (0, r.bG)([j.A], () => j.A.isPrioritySpeaker(p)),
        k = (0, u.A)({ userId: p, checkSoundSharing: !0 }),
        w = (0, h.A)(s.guild_id, p),
        R = (0, r.bG)(
            [o.Ay],
            () =>
                o.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(p);
                }),
            [p, s.id],
        ),
        D = (0, m.A)(null != R ? [R.applicationId] : []),
        M = (0, c.A)(p, s.guild_id)[0],
        U = (0, A.YY)(M?.application_id).data ?? void 0,
        { gameRecord: L } = (0, g.A)(M?.application_id),
        [F, z] = (0, r.yK)(
            [x.A],
            () => [x.A.getStreamForUser(p, s.getGuildId()), x.A.getActiveStreamForUser(p, s.getGuildId())],
            [s, p],
        ),
        B = (0, r.bG)([C.A], () => C.A.getSessionById(a)),
        K = T.Ay.useName(l),
        Y = (0, r.bG)([b.A], () => b.A.getVoicePlatformForChannel(s.id, p), [s.id, p]),
        q = (0, v.uy)(s.id, p);
    return (0, n.jsx)(I.A, {
        shakeLocation: P.uD.VOICE_USER,
        isShaking: k,
        children: (0, n.jsx)(O.Ay, {
            ...e,
            nick: d ?? K,
            canDrag: e.canDrag && !w,
            disconnected: q,
            otherClientSessionType: B?.clientInfo?.os,
            voicePlatform: Y,
            localMute: S && !f,
            localVideoDisabled: y,
            mute: t || S,
            deaf: i || N,
            speaking: k,
            priority: V,
            embeddedApplication: D[0],
            isStreaming: null != F && F.channelId === s.id,
            isWatching: null != z && z.state !== G.XYD.ENDED,
            isGuest: w,
            isSelf: f,
            application: M?.session_id != null ? U : void 0,
            game: M?.session_id != null ? (L ?? void 0) : void 0,
        }),
    });
});
k.displayName = "ConnectedVoiceUser";
let w = [],
    R = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: i = !0,
                channel: s,
                voiceStates: u,
                collapsed: o,
                collapsedMax: c = 6,
                tabIndex: A,
                numAudience: g,
                withGuildIcon: h = !1,
                className: I,
                children: x,
                isThread: E = !1,
            } = e,
            [C, j] = l.useState(null),
            b = l.useRef(null),
            T = (0, v.$n)(s.id, u ?? w),
            { shouldShow: P, dismiss: R } = (0, f.Z0)(s, { collapsed: o }),
            D = l.useRef(
                new d.J_(50, () => {
                    (j(b.current), (b.current = null));
                }),
            ),
            M = l.useRef(
                new d.J_(175, () => {
                    j(null);
                }),
            ),
            U = l.useCallback(
                (e) => {
                    t && (M.current.cancel(), (b.current = e), D.current.delay());
                },
                [t],
            ),
            L = l.useCallback(
                (e) => {
                    t && (D.current.cancel(), (b.current = null), M.current.delay());
                },
                [t],
            ),
            F = (0, r.bG)([N.A], () => N.A.can(G.xBc.MOVE_MEMBERS, s)),
            z = i && F,
            B = (0, r.yK)([y.A], () => {
                if (o) return [];
                let e = new Set();
                return (
                    T?.forEach((t) => {
                        let { user: i } = t;
                        y.A.getActivities(i.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(B);
        let K = (function () {
            if (null == T || 0 === T.length) return null;
            let e = (o && T.length > c + 1 ? T.slice(0, c) : T).map((e) => {
                let { user: t, nick: i, voiceState: l } = e;
                return (0, n.jsx)(
                    k,
                    {
                        user: t,
                        nick: i,
                        isSelfOnOtherClient: _.default.getId() === t.id && l.sessionId !== _.default.getSessionId(),
                        mute: l.isVoiceMuted(),
                        deaf: l.isVoiceDeafened(),
                        video: l.selfVideo,
                        serverMute: l.mute,
                        serverDeaf: l.deaf,
                        sessionId: l.sessionId ?? "",
                        channel: s,
                        collapsed: o,
                        canDrag: z,
                        showPreview: U,
                        hidePreview: L,
                        shouldShowHoverPopout: C === t.id,
                        tabIndex: A,
                    },
                    `voice-user-${t.id}`,
                );
            });
            return (
                null != g && g > 0
                    ? e.push((0, n.jsx)(O.aI, { collapsed: o, numAudience: g }, "audience"))
                    : o && T.length > c + 1 && e.push((0, n.jsx)(O.LR, { numUsers: T.length - c }, "collapsed-users")),
                P && e.push((0, n.jsx)(p.p, { channel: s, onClose: R }, "voice-invite-suggestions-button")),
                e
            );
        })();
        return null == K && null == x
            ? null
            : (0, n.jsxs)(S.Wr, {
                  className: a()(I, V.p_, { [V.yZ]: o, [V.lY]: h, [V.fT]: E }),
                  collapsed: o,
                  children: [K, x],
              });
    };
