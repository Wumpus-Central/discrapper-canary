(t.d(i, { A: () => M }), t(321073));
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    d = t(451988),
    u = t(717558),
    o = t(933958),
    c = t(191424),
    A = t(627363),
    m = t(429913),
    g = t(202163),
    h = t(550946),
    p = t(220995),
    f = t(582904),
    I = t(551826),
    v = t(209932),
    S = t(530804),
    x = t(955283),
    _ = t(936520),
    E = t(616356),
    N = t(280450),
    y = t(360906),
    C = t(576705),
    j = t(290863),
    b = t(763827),
    T = t(528767),
    O = t(485296),
    G = t(977997),
    P = t(427262),
    V = t(340851),
    w = t(652215),
    k = t(31408),
    R = t(616352);
let D = l.memo((e) => {
    let { mute: i, deaf: t, user: l, channel: s, sessionId: a, nick: d } = e,
        p = l.id,
        f = (0, r.bG)([N.default], () => N.default.getId() === p, [p]),
        [_, C, j] = (0, r.yK)(
            [y.Ay],
            () =>
                f
                    ? [!y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(), y.Ay.isSelfDeaf(), !1]
                    : [!y.Ay.isSupported() || y.Ay.isLocalMute(p), !1, y.Ay.isLocalVideoDisabled(p)],
            [f, p],
        ),
        R = (0, r.bG)([O.A], () => O.A.isPrioritySpeaker(p)),
        D = (0, u.A)({ userId: p, checkSoundSharing: !0 }),
        U = (0, r.bG)([v.A], () => v.A.isUserPlayingSounds(p)),
        M = (0, h.A)(s.guild_id, p),
        L = (0, r.bG)(
            [o.Ay],
            () =>
                o.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: i } = e;
                    return i.has(p);
                }),
            [p, s.id],
        ),
        F = (0, m.A)(null != L ? [L.applicationId] : []),
        z = (0, c.A)(p, s.guild_id)[0],
        B = (0, A.YY)(z?.application_id).data ?? void 0,
        { gameRecord: K } = (0, g.A)(z?.application_id),
        [Y, q] = (0, r.yK)(
            [E.A],
            () => [E.A.getStreamForUser(p, s.getGuildId()), E.A.getActiveStreamForUser(p, s.getGuildId())],
            [s, p],
        ),
        $ = (0, r.bG)([T.A], () => T.A.getSessionById(a)),
        H = P.Ay.useName(l),
        W = (0, r.bG)([G.A], () => G.A.getVoicePlatformForChannel(s.id, p), [s.id, p]),
        Z = (0, S.uy)(s.id, p),
        J = (0, r.bG)(
            [b.A],
            () =>
                f &&
                b.A.getChannelId() === s.id &&
                b.A.getState() !== w.S7L.RTC_CONNECTED &&
                x.A.getConfig({ location: "ConnectedVoiceUser" }).showSelfConnectingUI,
            [f, s.id],
        );
    return (0, n.jsx)(I.A, {
        shakeLocation: k.uD.VOICE_USER,
        isShaking: D || U,
        children: (0, n.jsx)(V.Ay, {
            ...e,
            nick: d ?? H,
            canDrag: e.canDrag && !M,
            disconnected: Z,
            connecting: J,
            otherClientSessionType: $?.clientInfo?.os,
            voicePlatform: W,
            localMute: _ && !f,
            localVideoDisabled: j,
            mute: i || _,
            deaf: t || C,
            speaking: D,
            playingSoundboard: U,
            priority: R,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === s.id,
            isWatching: null != q && q.state !== w.XYD.ENDED,
            isGuest: M,
            isSelf: f,
            application: z?.session_id != null ? B : void 0,
            game: z?.session_id != null ? (K ?? void 0) : void 0,
        }),
    });
});
D.displayName = "ConnectedVoiceUser";
let U = [],
    M = function (e) {
        let {
                allowPreviews: i = !0,
                allowDragging: t = !0,
                channel: s,
                voiceStates: u,
                collapsed: o,
                collapsedMax: c = 6,
                tabIndex: A,
                numAudience: g,
                withGuildIcon: h = !1,
                className: I,
                children: v,
                isThread: x = !1,
            } = e,
            [E, y] = l.useState(null),
            b = l.useRef(null),
            T = (0, S.$n)(s.id, u ?? U),
            { shouldShow: O, dismiss: G } = (0, f.Z0)(s, { collapsed: o }),
            P = l.useRef(
                new d.J_(50, () => {
                    (y(b.current), (b.current = null));
                }),
            ),
            k = l.useRef(
                new d.J_(175, () => {
                    y(null);
                }),
            ),
            M = l.useCallback(
                (e) => {
                    i && (k.current.cancel(), (b.current = e), P.current.delay());
                },
                [i],
            ),
            L = l.useCallback(
                (e) => {
                    i && (P.current.cancel(), (b.current = null), k.current.delay());
                },
                [i],
            ),
            F = (0, r.bG)([C.A], () => C.A.can(w.xBc.MOVE_MEMBERS, s)),
            z = t && F,
            B = (0, r.yK)([j.A], () => {
                if (o) return [];
                let e = new Set();
                return (
                    T?.forEach((i) => {
                        let { user: t } = i;
                        j.A.getActivities(t.id, s.guild_id).forEach((i) => {
                            null != i.application_id && e.add(i.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(B);
        let K = (function () {
            if (null == T || 0 === T.length) return null;
            let e = (o && T.length > c + 1 ? T.slice(0, c) : T).map((e) => {
                let { user: i, nick: t, voiceState: l } = e;
                return (0, n.jsx)(
                    D,
                    {
                        user: i,
                        nick: t,
                        isSelfOnOtherClient: N.default.getId() === i.id && l.sessionId !== N.default.getSessionId(),
                        mute: l.isVoiceMuted(),
                        deaf: l.isVoiceDeafened(),
                        video: l.selfVideo,
                        serverMute: l.mute,
                        serverDeaf: l.deaf,
                        sessionId: l.sessionId ?? "",
                        channel: s,
                        collapsed: o,
                        canDrag: z,
                        showPreview: M,
                        hidePreview: L,
                        shouldShowHoverPopout: E === i.id,
                        tabIndex: A,
                    },
                    `voice-user-${i.id}`,
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
        return null == K && null == v
            ? null
            : (0, n.jsxs)(_.Wr, {
                  className: a()(I, R.p_, { [R.yZ]: o, [R.lY]: h, [R.fT]: x }),
                  collapsed: o,
                  children: [K, v],
              });
    };
