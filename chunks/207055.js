n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(846519),
    c = n(586902),
    d = n(317381),
    u = n(812206),
    h = n(835473),
    p = n(358221),
    m = n(362721),
    f = n(574176),
    g = n(106301),
    C = n(512384),
    x = n(470956),
    v = n(597998),
    _ = n(199902),
    I = n(314897),
    E = n(271383),
    b = n(131951),
    Z = n(496675),
    N = n(158776),
    S = n(885110),
    T = n(797258),
    j = n(606304),
    A = n(979651),
    y = n(51144),
    P = n(649739),
    M = n(262317),
    R = n(981631),
    L = n(524484),
    k = n(377109);
let O = l.memo((e) => {
    var t;
    let { mute: n, deaf: l, user: r, channel: a, sessionId: o, nick: v } = e,
        Z = r.id,
        k = (0, s.e7)([I.default], () => I.default.getId() === Z, [Z]),
        [O, D, w] = (0, s.Wu)([b.Z], () => (k ? [!b.Z.isSupported() || b.Z.isSelfMute() || b.Z.isSelfMutedTemporarily(), b.Z.isSelfDeaf(), !1] : [!b.Z.isSupported() || b.Z.isLocalMute(Z), !1, b.Z.isLocalVideoDisabled(Z)]), [k, Z]),
        B = (0, s.e7)([j.Z], () => j.Z.isPrioritySpeaker(Z)),
        U = (0, c.Z)({
            userId: Z,
            checkSoundSharing: !0
        }),
        H = (0, s.e7)([E.ZP], () => E.ZP.isGuestOrLurker(a.guild_id, Z)),
        G = (0, s.e7)([p.Z], () => p.Z.getGuildRingingUsers(a.id).has(Z)),
        F = (0, s.e7)(
            [d.ZP],
            () =>
                d.ZP.getEmbeddedActivitiesForChannel(a.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(Z);
                }),
            [Z, a.id]
        ),
        V = (0, h.Z)(null != F ? [F.applicationId] : []),
        z = (0, P.Hr)('voice_users_eligibility_check', !1),
        W = (0, s.e7)([N.Z, S.Z], () => (k ? S.Z.getActivities() : N.Z.getActivities(Z, a.guild_id))).find((e) => null != e.application_id && e.type === R.IIU.PLAYING),
        K = (0, s.e7)([u.Z], () => ((null == W ? void 0 : W.application_id) != null ? u.Z.getApplication(null == W ? void 0 : W.application_id) : void 0));
    null != K && P.ZP.trackExposure({ location: 'voice_users' });
    let [Y, q] = (0, s.Wu)([_.Z], () => [_.Z.getStreamForUser(Z, a.getGuildId()), _.Z.getActiveStreamForUser(Z, a.getGuildId())], [a, Z]),
        X = (0, s.e7)([T.Z], () => T.Z.getSessionById(o)),
        J = y.ZP.useName(r),
        Q = (0, s.e7)([A.Z], () => A.Z.getVoicePlatformForChannel(a.id, Z), [a.id, Z]),
        { enableHangStatus: $ } = f.n.useExperiment({
            guildId: a.guild_id,
            location: 'VoiceUsers'
        }),
        ee = (0, m.ZP)(a, !0, r),
        et = (0, s.e7)([g.Z], () => (k ? g.Z.getHangStatusActivity() : null), [k]),
        en = (0, s.e7)([N.Z], () => N.Z.findActivity(Z, (e) => e.type === R.IIU.HANG_STATUS), [Z]),
        ei = (0, x.Eu)(a.id, Z);
    return (0, i.jsx)(C.Z, {
        shakeLocation: L.oZ.VOICE_USER,
        isShaking: U,
        children: (0, i.jsx)(M.ZP, {
            ...e,
            nick: null != v ? v : J,
            canDrag: e.canDrag && !H,
            otherClientSessionType: null == X ? void 0 : null === (t = X.clientInfo) || void 0 === t ? void 0 : t.os,
            voicePlatform: Q,
            localMute: O && !k,
            localVideoDisabled: w,
            mute: n || O,
            deaf: l || D,
            speaking: U,
            ringing: G,
            disconnected: ei,
            priority: B,
            embeddedApplication: V[0],
            isStreaming: null != Y && Y.channelId === a.id,
            isWatching: null != q && q.state !== R.jm8.ENDED,
            isGuest: H,
            showHangStatus: ee && $ && (I.default.getId() === r.id || null != en),
            hangStatusActivity: k ? et : en,
            isSelf: I.default.getId() === r.id,
            application: $ || z ? K : void 0
        })
    });
});
O.displayName = 'ConnectedVoiceUser';
let D = [];
t.Z = function (e) {
    let { allowPreviews: t = !0, allowDragging: n = !0, channel: r, voiceStates: c, collapsed: d, collapsedMax: u = 6, tabIndex: p, location: m, numAudience: f, withGuildIcon: g = !1, className: C, children: _ } = e,
        [E, b] = l.useState(null),
        [S, T] = l.useState(!1),
        j = l.useRef(null),
        A = (0, x.Es)(r.id, null != c ? c : D),
        y = l.useRef(
            new o.sW(50, () => {
                b(j.current), (j.current = null);
            })
        ),
        P = l.useRef(
            new o.sW(175, () => {
                b(null);
            })
        ),
        L = l.useCallback(
            (e) => {
                t && (T(!0), P.current.cancel(), (j.current = e), y.current.delay());
            },
            [t]
        ),
        w = l.useCallback(
            (e) => {
                t && (y.current.cancel(), E === e && (T(!1), P.current.delay()));
            },
            [t, E]
        ),
        B = (0, s.Wu)([N.Z], () => {
            if (d) return [];
            let e = new Set();
            return (
                null == A ||
                    A.forEach((t) => {
                        let { user: n } = t;
                        N.Z.getActivities(n.id, r.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                Array.from(e)
            );
        });
    (0, h.Z)(B);
    let U = (() => {
        if (null == A || 0 === A.length) return null;
        let e = (d && A.length > u + 1 ? A.slice(0, u) : A).map((e) => {
            var t;
            let { user: l, nick: a, voiceState: s } = e;
            return (0, i.jsx)(
                O,
                {
                    user: l,
                    nick: a,
                    isSelfOnOtherClient: I.default.getId() === l.id && s.sessionId !== I.default.getSessionId(),
                    mute: s.isVoiceMuted(),
                    deaf: s.isVoiceDeafened(),
                    video: s.selfVideo,
                    serverMute: s.mute,
                    serverDeaf: s.deaf,
                    sessionId: null !== (t = s.sessionId) && void 0 !== t ? t : '',
                    channel: r,
                    collapsed: d,
                    canDrag: n && Z.Z.can(R.Plq.MOVE_MEMBERS, r),
                    showPreview: L,
                    hidePreview: w,
                    previewIsOpen: S,
                    shouldShowPreview: E === l.id,
                    tabIndex: p,
                    location: m
                },
                l.id
            );
        });
        return (
            null != f && f > 0
                ? e.push(
                      (0, i.jsx)(M.ul, {
                          collapsed: d,
                          numAudience: f
                      })
                  )
                : d && A.length > u + 1 && e.push((0, i.jsx)(M.XX, { numUsers: A.length - u })),
            e
        );
    })();
    return null == U && null == _
        ? null
        : (0, i.jsxs)(v.eJ, {
              className: a()(C, k.list, {
                  [k.collapsed]: d,
                  [k.withGuildIcon]: g
              }),
              collapsed: d,
              children: [U, _]
          });
};
