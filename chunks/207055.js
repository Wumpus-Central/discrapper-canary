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
    p = n(362721),
    m = n(574176),
    f = n(106301),
    g = n(512384),
    C = n(470956),
    x = n(597998),
    v = n(199902),
    _ = n(314897),
    I = n(271383),
    E = n(131951),
    b = n(496675),
    Z = n(158776),
    S = n(885110),
    N = n(797258),
    T = n(606304),
    j = n(979651),
    A = n(51144),
    y = n(649739),
    P = n(262317),
    M = n(981631),
    R = n(524484),
    L = n(377109);
let k = l.memo((e) => {
    var t;
    let { mute: n, deaf: l, user: r, channel: a, sessionId: o, nick: x } = e,
        b = r.id,
        L = (0, s.e7)([_.default], () => _.default.getId() === b, [b]),
        [k, O, D] = (0, s.Wu)([E.Z], () => (L ? [!E.Z.isSupported() || E.Z.isSelfMute() || E.Z.isSelfMutedTemporarily(), E.Z.isSelfDeaf(), !1] : [!E.Z.isSupported() || E.Z.isLocalMute(b), !1, E.Z.isLocalVideoDisabled(b)]), [L, b]),
        w = (0, s.e7)([T.Z], () => T.Z.isPrioritySpeaker(b)),
        B = (0, c.Z)({
            userId: b,
            checkSoundSharing: !0
        }),
        U = (0, s.e7)([I.ZP], () => I.ZP.isGuestOrLurker(a.guild_id, b)),
        H = (0, s.e7)(
            [d.ZP],
            () =>
                d.ZP.getEmbeddedActivitiesForChannel(a.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(b);
                }),
            [b, a.id]
        ),
        G = (0, h.Z)(null != H ? [H.applicationId] : []),
        F = (0, y.Hr)('voice_users_eligibility_check', !1),
        V = (0, s.e7)([Z.Z, S.Z], () => (L ? S.Z.getActivities() : Z.Z.getActivities(b, a.guild_id))).find((e) => null != e.application_id && e.type === M.IIU.PLAYING),
        z = (0, s.e7)([u.Z], () => ((null == V ? void 0 : V.application_id) != null ? u.Z.getApplication(null == V ? void 0 : V.application_id) : void 0));
    null != z && y.ZP.trackExposure({ location: 'voice_users' });
    let [W, K] = (0, s.Wu)([v.Z], () => [v.Z.getStreamForUser(b, a.getGuildId()), v.Z.getActiveStreamForUser(b, a.getGuildId())], [a, b]),
        Y = (0, s.e7)([N.Z], () => N.Z.getSessionById(o)),
        q = A.ZP.useName(r),
        X = (0, s.e7)([j.Z], () => j.Z.getVoicePlatformForChannel(a.id, b), [a.id, b]),
        { enableHangStatus: J } = m.n.useExperiment({
            guildId: a.guild_id,
            location: 'VoiceUsers'
        }),
        Q = (0, p.ZP)(a, !0, r),
        $ = (0, s.e7)([f.Z], () => (L ? f.Z.getHangStatusActivity() : null), [L]),
        ee = (0, s.e7)([Z.Z], () => Z.Z.findActivity(b, (e) => e.type === M.IIU.HANG_STATUS), [b]),
        et = (0, C.Eu)(a.id, b);
    return (0, i.jsx)(g.Z, {
        shakeLocation: R.oZ.VOICE_USER,
        isShaking: B,
        children: (0, i.jsx)(P.ZP, {
            ...e,
            nick: null != x ? x : q,
            canDrag: e.canDrag && !U,
            otherClientSessionType: null == Y ? void 0 : null === (t = Y.clientInfo) || void 0 === t ? void 0 : t.os,
            voicePlatform: X,
            localMute: k && !L,
            localVideoDisabled: D,
            mute: n || k,
            deaf: l || O,
            speaking: B,
            disconnected: et,
            priority: w,
            embeddedApplication: G[0],
            isStreaming: null != W && W.channelId === a.id,
            isWatching: null != K && K.state !== M.jm8.ENDED,
            isGuest: U,
            showHangStatus: Q && J && (_.default.getId() === r.id || null != ee),
            hangStatusActivity: L ? $ : ee,
            isSelf: _.default.getId() === r.id,
            application: J || F ? z : void 0
        })
    });
});
k.displayName = 'ConnectedVoiceUser';
let O = [];
t.Z = function (e) {
    let { allowPreviews: t = !0, allowDragging: n = !0, channel: r, voiceStates: c, collapsed: d, collapsedMax: u = 6, tabIndex: p, location: m, numAudience: f, withGuildIcon: g = !1, className: v, children: I } = e,
        [E, S] = l.useState(null),
        [N, T] = l.useState(!1),
        j = l.useRef(null),
        A = (0, C.Es)(r.id, null != c ? c : O),
        y = l.useRef(
            new o.sW(50, () => {
                S(j.current), (j.current = null);
            })
        ),
        R = l.useRef(
            new o.sW(175, () => {
                S(null);
            })
        ),
        D = l.useCallback(
            (e) => {
                t && (T(!0), R.current.cancel(), (j.current = e), y.current.delay());
            },
            [t]
        ),
        w = l.useCallback(
            (e) => {
                t && (y.current.cancel(), E === e && (T(!1), R.current.delay()));
            },
            [t, E]
        ),
        B = (0, s.Wu)([Z.Z], () => {
            if (d) return [];
            let e = new Set();
            return (
                null == A ||
                    A.forEach((t) => {
                        let { user: n } = t;
                        Z.Z.getActivities(n.id, r.guild_id).forEach((t) => {
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
                k,
                {
                    user: l,
                    nick: a,
                    isSelfOnOtherClient: _.default.getId() === l.id && s.sessionId !== _.default.getSessionId(),
                    mute: s.isVoiceMuted(),
                    deaf: s.isVoiceDeafened(),
                    video: s.selfVideo,
                    serverMute: s.mute,
                    serverDeaf: s.deaf,
                    sessionId: null !== (t = s.sessionId) && void 0 !== t ? t : '',
                    channel: r,
                    collapsed: d,
                    canDrag: n && b.Z.can(M.Plq.MOVE_MEMBERS, r),
                    showPreview: D,
                    hidePreview: w,
                    previewIsOpen: N,
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
                      (0, i.jsx)(P.ul, {
                          collapsed: d,
                          numAudience: f
                      })
                  )
                : d && A.length > u + 1 && e.push((0, i.jsx)(P.XX, { numUsers: A.length - u })),
            e
        );
    })();
    return null == U && null == I
        ? null
        : (0, i.jsxs)(x.eJ, {
              className: a()(v, L.list, {
                  [L.collapsed]: d,
                  [L.withGuildIcon]: g
              }),
              collapsed: d,
              children: [U, I]
          });
};
