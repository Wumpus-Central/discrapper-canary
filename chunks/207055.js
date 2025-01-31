n.d(t, { Z: () => k }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(846519),
    c = n(586902),
    d = n(317381),
    u = n(812206),
    h = n(835473),
    p = n(358221),
    m = n(512384),
    f = n(470956),
    g = n(597998),
    _ = n(199902),
    C = n(314897),
    x = n(271383),
    v = n(131951),
    E = n(496675),
    I = n(158776),
    b = n(885110),
    Z = n(797258),
    N = n(606304),
    T = n(979651),
    S = n(51144),
    j = n(649739),
    A = n(262317),
    y = n(981631),
    P = n(524484),
    R = n(377109);
let M = l.memo((e) => {
    var t;
    let { mute: n, deaf: l, user: a, channel: r, sessionId: o, nick: g } = e,
        E = a.id,
        R = (0, s.e7)([C.default], () => C.default.getId() === E, [E]),
        [M, L, k] = (0, s.Wu)([v.Z], () => (R ? [!v.Z.isSupported() || v.Z.isSelfMute() || v.Z.isSelfMutedTemporarily(), v.Z.isSelfDeaf(), !1] : [!v.Z.isSupported() || v.Z.isLocalMute(E), !1, v.Z.isLocalVideoDisabled(E)]), [R, E]),
        O = (0, s.e7)([N.Z], () => N.Z.isPrioritySpeaker(E)),
        D = (0, c.Z)({
            userId: E,
            checkSoundSharing: !0
        }),
        w = (0, s.e7)([x.ZP], () => x.ZP.isGuestOrLurker(r.guild_id, E)),
        U = (0, s.e7)([p.Z], () => p.Z.getGuildRingingUsers(r.id).has(E)),
        B = (0, s.e7)(
            [d.ZP],
            () =>
                d.ZP.getEmbeddedActivitiesForChannel(r.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(E);
                }),
            [E, r.id]
        ),
        F = (0, h.Z)(null != B ? [B.applicationId] : []),
        H = (0, j.Hr)('voice_users_eligibility_check', !1),
        G = (0, s.e7)([I.Z, b.Z], () => (R ? b.Z.getActivities() : I.Z.getActivities(E, r.guild_id))).find((e) => null != e.application_id && e.type === y.IIU.PLAYING),
        V = (0, s.e7)([u.Z], () => ((null == G ? void 0 : G.application_id) != null ? u.Z.getApplication(null == G ? void 0 : G.application_id) : void 0));
    null != V && j.ZP.trackExposure({ location: 'voice_users' });
    let [z, W] = (0, s.Wu)([_.Z], () => [_.Z.getStreamForUser(E, r.getGuildId()), _.Z.getActiveStreamForUser(E, r.getGuildId())], [r, E]),
        Y = (0, s.e7)([Z.Z], () => Z.Z.getSessionById(o)),
        q = S.ZP.useName(a),
        K = (0, s.e7)([T.Z], () => T.Z.getVoicePlatformForChannel(r.id, E), [r.id, E]),
        X = (0, f.Eu)(r.id, E);
    return (0, i.jsx)(m.Z, {
        shakeLocation: P.oZ.VOICE_USER,
        isShaking: D,
        children: (0, i.jsx)(A.ZP, {
            ...e,
            nick: null != g ? g : q,
            canDrag: e.canDrag && !w,
            otherClientSessionType: null == Y ? void 0 : null === (t = Y.clientInfo) || void 0 === t ? void 0 : t.os,
            voicePlatform: K,
            localMute: M && !R,
            localVideoDisabled: k,
            mute: n || M,
            deaf: l || L,
            speaking: D,
            ringing: U,
            disconnected: X,
            priority: O,
            embeddedApplication: F[0],
            isStreaming: null != z && z.channelId === r.id,
            isWatching: null != W && W.state !== y.jm8.ENDED,
            isGuest: w,
            isSelf: C.default.getId() === a.id,
            application: H ? V : void 0
        })
    });
});
M.displayName = 'ConnectedVoiceUser';
let L = [],
    k = function (e) {
        let { allowPreviews: t = !0, allowDragging: n = !0, channel: a, voiceStates: c, collapsed: d, collapsedMax: u = 6, tabIndex: p, location: m, numAudience: _, withGuildIcon: x = !1, className: v, children: b } = e,
            [Z, N] = l.useState(null),
            [T, S] = l.useState(!1),
            j = l.useRef(null),
            P = (0, f.Es)(a.id, null != c ? c : L),
            k = l.useRef(
                new o.sW(50, () => {
                    N(j.current), (j.current = null);
                })
            ),
            O = l.useRef(
                new o.sW(175, () => {
                    N(null);
                })
            ),
            D = l.useCallback(
                (e) => {
                    t && (S(!0), O.current.cancel(), (j.current = e), k.current.delay());
                },
                [t]
            ),
            w = l.useCallback(
                (e) => {
                    t && (k.current.cancel(), Z === e && (S(!1), O.current.delay()));
                },
                [t, Z]
            ),
            U = (0, s.Wu)([I.Z], () => {
                if (d) return [];
                let e = new Set();
                return (
                    null == P ||
                        P.forEach((t) => {
                            let { user: n } = t;
                            I.Z.getActivities(n.id, a.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, h.Z)(U);
        let B = (() => {
            if (null == P || 0 === P.length) return null;
            let e = (d && P.length > u + 1 ? P.slice(0, u) : P).map((e) => {
                var t;
                let { user: l, nick: r, voiceState: s } = e;
                return (0, i.jsx)(
                    M,
                    {
                        user: l,
                        nick: r,
                        isSelfOnOtherClient: C.default.getId() === l.id && s.sessionId !== C.default.getSessionId(),
                        mute: s.isVoiceMuted(),
                        deaf: s.isVoiceDeafened(),
                        video: s.selfVideo,
                        serverMute: s.mute,
                        serverDeaf: s.deaf,
                        sessionId: null !== (t = s.sessionId) && void 0 !== t ? t : '',
                        channel: a,
                        collapsed: d,
                        canDrag: n && E.Z.can(y.Plq.MOVE_MEMBERS, a),
                        showPreview: D,
                        hidePreview: w,
                        previewIsOpen: T,
                        shouldShowPreview: Z === l.id,
                        tabIndex: p,
                        location: m
                    },
                    l.id
                );
            });
            return (
                null != _ && _ > 0
                    ? e.push(
                          (0, i.jsx)(A.ul, {
                              collapsed: d,
                              numAudience: _
                          })
                      )
                    : d && P.length > u + 1 && e.push((0, i.jsx)(A.XX, { numUsers: P.length - u })),
                e
            );
        })();
        return null == B && null == b
            ? null
            : (0, i.jsxs)(g.eJ, {
                  className: r()(v, R.list, {
                      [R.collapsed]: d,
                      [R.withGuildIcon]: x
                  }),
                  collapsed: d,
                  children: [B, b]
              });
    };
