(i.d(t, { A: () => M }), i(321073));
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
    S = i(955283),
    x = i(669335),
    _ = i(616356),
    E = i(280450),
    N = i(25578),
    y = i(576705),
    C = i(290863),
    b = i(763827),
    j = i(528767),
    T = i(485296),
    O = i(977997),
    G = i(427262),
    V = i(340851),
    P = i(652215),
    w = i(31408),
    k = i(616352);
let R = l.memo((e) => {
    let { mute: t, deaf: i, user: l, channel: s, sessionId: a, nick: d } = e,
        p = l.id,
        f = (0, r.bG)([E.default], () => E.default.getId() === p, [p]),
        [x, y, C] = (0, r.yK)(
            [N.Ay],
            () =>
                f
                    ? [!N.Ay.isSupported() || N.Ay.isSelfMute() || N.Ay.isSelfMutedTemporarily(), N.Ay.isSelfDeaf(), !1]
                    : [!N.Ay.isSupported() || N.Ay.isLocalMute(p), !1, N.Ay.isLocalVideoDisabled(p)],
            [f, p],
        ),
        k = (0, r.bG)([T.A], () => T.A.isPrioritySpeaker(p)),
        R = (0, u.A)({ userId: p, checkSoundSharing: !0 }),
        D = (0, h.A)(s.guild_id, p),
        M = (0, r.bG)(
            [o.Ay],
            () =>
                o.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(p);
                }),
            [p, s.id],
        ),
        U = (0, m.A)(null != M ? [M.applicationId] : []),
        L = (0, c.A)(p, s.guild_id)[0],
        F = (0, A.YY)(L?.application_id).data ?? void 0,
        { gameRecord: z } = (0, g.A)(L?.application_id),
        [B, K] = (0, r.yK)(
            [_.A],
            () => [_.A.getStreamForUser(p, s.getGuildId()), _.A.getActiveStreamForUser(p, s.getGuildId())],
            [s, p],
        ),
        Y = (0, r.bG)([j.A], () => j.A.getSessionById(a)),
        q = G.Ay.useName(l),
        $ = (0, r.bG)([O.A], () => O.A.getVoicePlatformForChannel(s.id, p), [s.id, p]),
        W = (0, v.uy)(s.id, p),
        H = (0, r.bG)(
            [b.A],
            () =>
                f &&
                b.A.getChannelId() === s.id &&
                b.A.getState() !== P.S7L.RTC_CONNECTED &&
                S.A.getConfig({ location: "ConnectedVoiceUser" }).showSelfConnectingUI,
            [f, s.id],
        );
    return (0, n.jsx)(I.A, {
        shakeLocation: w.uD.VOICE_USER,
        isShaking: R,
        children: (0, n.jsx)(V.Ay, {
            ...e,
            nick: d ?? q,
            canDrag: e.canDrag && !D,
            disconnected: W,
            connecting: H,
            otherClientSessionType: Y?.clientInfo?.os,
            voicePlatform: $,
            localMute: x && !f,
            localVideoDisabled: C,
            mute: t || x,
            deaf: i || y,
            speaking: R,
            priority: k,
            embeddedApplication: U[0],
            isStreaming: null != B && B.channelId === s.id,
            isWatching: null != K && K.state !== P.XYD.ENDED,
            isGuest: D,
            isSelf: f,
            application: L?.session_id != null ? F : void 0,
            game: L?.session_id != null ? (z ?? void 0) : void 0,
        }),
    });
});
R.displayName = "ConnectedVoiceUser";
let D = [],
    M = function (e) {
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
                children: S,
                isThread: _ = !1,
            } = e,
            [N, b] = l.useState(null),
            j = l.useRef(null),
            T = (0, v.$n)(s.id, u ?? D),
            { shouldShow: O, dismiss: G } = (0, f.Z0)(s, { collapsed: o }),
            w = l.useRef(
                new d.J_(50, () => {
                    (b(j.current), (j.current = null));
                }),
            ),
            M = l.useRef(
                new d.J_(175, () => {
                    b(null);
                }),
            ),
            U = l.useCallback(
                (e) => {
                    t && (M.current.cancel(), (j.current = e), w.current.delay());
                },
                [t],
            ),
            L = l.useCallback(
                (e) => {
                    t && (w.current.cancel(), (j.current = null), M.current.delay());
                },
                [t],
            ),
            F = (0, r.bG)([y.A], () => y.A.can(P.xBc.MOVE_MEMBERS, s)),
            z = i && F,
            B = (0, r.yK)([C.A], () => {
                if (o) return [];
                let e = new Set();
                return (
                    T?.forEach((t) => {
                        let { user: i } = t;
                        C.A.getActivities(i.id, s.guild_id).forEach((t) => {
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
                    R,
                    {
                        user: t,
                        nick: i,
                        isSelfOnOtherClient: E.default.getId() === t.id && l.sessionId !== E.default.getSessionId(),
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
                        shouldShowHoverPopout: N === t.id,
                        tabIndex: A,
                    },
                    `voice-user-${t.id}`,
                );
            });
            return (
                null != g && g > 0
                    ? e.push((0, n.jsx)(V.aI, { collapsed: o, numAudience: g }, "audience"))
                    : o && T.length > c + 1 && e.push((0, n.jsx)(V.LR, { numUsers: T.length - c }, "collapsed-users")),
                O && e.push((0, n.jsx)(p.p, { channel: s, onClose: G }, "voice-invite-suggestions-button")),
                e
            );
        })();
        return null == K && null == S
            ? null
            : (0, n.jsxs)(x.Wr, {
                  className: a()(I, k.p_, { [k.yZ]: o, [k.lY]: h, [k.fT]: _ }),
                  collapsed: o,
                  children: [K, S],
              });
    };
