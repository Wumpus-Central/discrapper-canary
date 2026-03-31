n.d(t, { A: () => F }), n(667532), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(451988),
    c = n(717558),
    d = n(933958),
    u = n(627363),
    h = n(429913),
    A = n(313961),
    _ = n(532622),
    m = n(550946),
    g = n(140547),
    p = n(242919),
    f = n(7054),
    x = n(220995),
    E = n(582904),
    I = n(551826),
    C = n(159426),
    N = n(25528),
    T = n(530804),
    S = n(481947),
    b = n(591346),
    y = n(616356),
    v = n(961350),
    j = n(430452),
    R = n(576705),
    O = n(290863),
    L = n(528767),
    M = n(485296),
    D = n(977997),
    U = n(427262),
    G = n(847221),
    P = n(340851),
    k = n(652215),
    w = n(31408),
    B = n(647493);
let V = l.memo((e) => {
    let { mute: t, deaf: n, user: l, channel: s, sessionId: a, nick: o } = e,
        x = l.id,
        E = (0, r.bG)([v.default], () => v.default.getId() === x, [x]),
        [S, b, R] = (0, r.yK)(
            [j.Ay],
            () =>
                E
                    ? [!j.Ay.isSupported() || j.Ay.isSelfMute() || j.Ay.isSelfMutedTemporarily(), j.Ay.isSelfDeaf(), !1]
                    : [!j.Ay.isSupported() || j.Ay.isLocalMute(x), !1, j.Ay.isLocalVideoDisabled(x)],
            [E, x],
        ),
        O = (0, r.bG)([M.A], () => M.A.isPrioritySpeaker(x)),
        G = (0, c.A)({ userId: x, checkSoundSharing: !0 }),
        B = (0, m.A)(s.guild_id, x),
        V = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(x)),
        H = (0, r.bG)(
            [d.Ay],
            () =>
                d.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(x);
                }),
            [x, s.id],
        ),
        F = (0, h.A)(null != H ? [H.applicationId] : []),
        K = (0, N.Ay)(x, s.guild_id)[0],
        W = (0, u.YY)(K?.application_id).data ?? void 0,
        [Y, z] = (0, r.yK)(
            [y.A],
            () => [y.A.getStreamForUser(x, s.getGuildId()), y.A.getActiveStreamForUser(x, s.getGuildId())],
            [s, x],
        ),
        q = (0, r.bG)([L.A], () => L.A.getSessionById(a)),
        X = U.Ay.useName(l),
        J = (0, r.bG)([D.A], () => D.A.getVoicePlatformForChannel(s.id, x), [s.id, x]),
        { enableHangStatus: Q } = (0, g.$j)({ guildId: s.guild_id, location: "VoiceUsers" }),
        $ = (0, _.Ay)(s, !0, l),
        Z = (0, r.bG)([p.A], () => (E ? p.A.getHangStatusActivity() : null), [E]),
        ee = (0, f.h)(x),
        et = (0, T.uy)(s.id, x),
        { enableVCStatusIcons: en } = C.m.useExperiment(
            { guildId: s.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: K?.session_id != null },
        ),
        ei = en || Q;
    return (0, i.jsx)(I.A, {
        shakeLocation: w.uD.VOICE_USER,
        isShaking: G,
        children: (0, i.jsx)(P.Ay, {
            ...e,
            nick: o ?? X,
            canDrag: e.canDrag && !B,
            disconnected: et,
            otherClientSessionType: q?.clientInfo?.os,
            voicePlatform: J,
            localMute: S && !E,
            localVideoDisabled: R,
            mute: t || S,
            deaf: n || b,
            speaking: G,
            ringing: V,
            priority: O,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === s.id,
            isWatching: null != z && z.state !== k.XYD.ENDED,
            isGuest: B,
            isSelf: E,
            application: ei && K?.session_id != null ? W : void 0,
            showHangStatus: $ && Q && (E || null != ee),
            hangStatusActivity: E ? Z : ee,
        }),
    });
});
V.displayName = "ConnectedVoiceUser";
let H = [],
    F = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: s,
                voiceStates: c,
                collapsed: d,
                collapsedMax: u = 6,
                tabIndex: _,
                numAudience: m,
                withGuildIcon: g = !1,
                className: p,
                children: I,
                isThread: C = !1,
            } = e,
            [N, y] = l.useState(null),
            j = l.useRef(null),
            L = (0, T.$n)(s.id, c ?? H);
        (0, f.s)(s.guild_id, L);
        let { enableHistoryHover: M } = (0, b.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: D, dismiss: U } = (0, E.Z0)(s, { collapsed: d }),
            w = l.useRef(
                new o.J_(50, () => {
                    y(j.current), (j.current = null);
                }),
            ),
            F = l.useRef(
                new o.J_(175, () => {
                    y(null);
                }),
            ),
            K = l.useCallback(
                (e) => {
                    t && (F.current.cancel(), (j.current = e), w.current.delay());
                },
                [t],
            ),
            W = l.useCallback(
                (e) => {
                    t && (w.current.cancel(), (j.current = null), F.current.delay());
                },
                [t],
            ),
            Y = (0, r.yK)([O.A], () => {
                if (d) return [];
                let e = new Set();
                return (
                    L?.forEach((t) => {
                        let { user: n } = t;
                        O.A.getActivities(n.id, s.guild_id).forEach((t) => {
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
                t = A.A.getGuildRingingUsers(s.id),
                l = e.map((e) => {
                    let { user: l, nick: a, voiceState: r } = e,
                        o = t.has(l.id);
                    return (0, i.jsx)(
                        V,
                        {
                            user: l,
                            nick: a,
                            isSelfOnOtherClient: v.default.getId() === l.id && r.sessionId !== v.default.getSessionId(),
                            mute: r.isVoiceMuted(),
                            deaf: r.isVoiceDeafened(),
                            video: r.selfVideo,
                            serverMute: r.mute,
                            serverDeaf: r.deaf,
                            sessionId: r.sessionId ?? "",
                            channel: s,
                            collapsed: d,
                            canDrag: n && R.A.can(k.xBc.MOVE_MEMBERS, s),
                            showPreview: K,
                            hidePreview: W,
                            shouldShowHoverPopout: N === l.id,
                            tabIndex: _,
                        },
                        `voice-user-${l.id}-${o}`,
                    );
                });
            return (
                D && l.unshift((0, i.jsx)(x.p, { channel: s, onClose: U }, "voice-invite-suggestions-button")),
                null != m && m > 0
                    ? l.push((0, i.jsx)(P.aI, { collapsed: d, numAudience: m }))
                    : d && L.length > u + 1 && l.push((0, i.jsx)(P.LR, { numUsers: L.length - u })),
                M && !d && s.type === k.rbe.GUILD_VOICE && l.push((0, i.jsx)(G.A, { channel: s }, "ghost-user")),
                l
            );
        })();
        return null == z && null == I
            ? null
            : (0, i.jsxs)(S.Wr, {
                  className: a()(p, B.p_, { [B.yZ]: d, [B.lY]: g, [B.fT]: C }),
                  collapsed: d,
                  children: [z, I],
              });
    };
