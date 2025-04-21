n.d(t, { Z: () => k }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(846519),
    c = n(586902),
    u = n(317381),
    d = n(812206),
    p = n(835473),
    h = n(358221),
    f = n(512384),
    m = n(470956),
    g = n(597998),
    b = n(199902),
    _ = n(314897),
    y = n(271383),
    C = n(131951),
    x = n(496675),
    v = n(158776),
    j = n(885110),
    O = n(797258),
    E = n(606304),
    I = n(979651),
    P = n(51144),
    S = n(649739),
    Z = n(262317),
    N = n(981631),
    T = n(524484),
    A = n(50259);
let w = i.memo((e) => {
    var t, n, i;
    let { mute: l, deaf: o, user: s, channel: g, sessionId: x, nick: A } = e,
        w = s.id,
        R = (0, a.e7)([_.default], () => _.default.getId() === w, [w]),
        [k, M, L] = (0, a.Wu)([C.Z], () => (R ? [!C.Z.isSupported() || C.Z.isSelfMute() || C.Z.isSelfMutedTemporarily(), C.Z.isSelfDeaf(), !1] : [!C.Z.isSupported() || C.Z.isLocalMute(w), !1, C.Z.isLocalVideoDisabled(w)]), [R, w]),
        D = (0, a.e7)([E.Z], () => E.Z.isPrioritySpeaker(w)),
        U = (0, c.Z)({
            userId: w,
            checkSoundSharing: !0
        }),
        B = (0, a.e7)([y.ZP], () => y.ZP.isGuestOrLurker(g.guild_id, w)),
        G = (0, a.e7)([h.Z], () => h.Z.getGuildRingingUsers(g.id).has(w)),
        F = (0, a.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(g.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(w);
                }),
            [w, g.id]
        ),
        H = (0, p.Z)(null != F ? [F.applicationId] : []),
        V = (0, S.Hr)('voice_users_eligibility_check', !1),
        z = (0, a.e7)([v.Z, j.Z], () => (R ? j.Z.getActivities() : v.Z.getActivities(w, g.guild_id))).find((e) => null != e.application_id && e.type === N.IIU.PLAYING),
        W = (0, a.e7)([d.Z], () => ((null == z ? void 0 : z.application_id) != null ? d.Z.getApplication(null == z ? void 0 : z.application_id) : void 0));
    null != W && S.ZP.trackExposure({ location: 'voice_users' });
    let [Y, q] = (0, a.Wu)([b.Z], () => [b.Z.getStreamForUser(w, g.getGuildId()), b.Z.getActiveStreamForUser(w, g.getGuildId())], [g, w]),
        K = (0, a.e7)([O.Z], () => O.Z.getSessionById(x)),
        X = P.ZP.useName(s),
        Q = (0, a.e7)([I.Z], () => I.Z.getVoicePlatformForChannel(g.id, w), [g.id, w]),
        J = (0, m.Eu)(g.id, w);
    return (0, r.jsx)(f.Z, {
        shakeLocation: T.oZ.VOICE_USER,
        isShaking: U,
        children: (0, r.jsx)(
            Z.ZP,
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (i = i =
                {
                    nick: null != A ? A : X,
                    canDrag: e.canDrag && !B,
                    otherClientSessionType: null == K || null == (t = K.clientInfo) ? void 0 : t.os,
                    voicePlatform: Q,
                    localMute: k && !R,
                    localVideoDisabled: L,
                    mute: l || k,
                    deaf: o || M,
                    speaking: U,
                    ringing: G,
                    disconnected: J,
                    priority: D,
                    embeddedApplication: H[0],
                    isStreaming: null != Y && Y.channelId === g.id,
                    isWatching: null != q && q.state !== N.jm8.ENDED,
                    isGuest: B,
                    isSelf: _.default.getId() === s.id,
                    application: V ? W : void 0
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            n)
        )
    });
});
w.displayName = 'ConnectedVoiceUser';
let R = [],
    k = function (e) {
        let { allowPreviews: t = !0, allowDragging: n = !0, channel: l, voiceStates: c, collapsed: u, collapsedMax: d = 6, tabIndex: h, location: f, numAudience: b, withGuildIcon: y = !1, className: C, children: j } = e,
            [O, E] = i.useState(null),
            [I, P] = i.useState(!1),
            S = i.useRef(null),
            T = (0, m.Es)(l.id, null != c ? c : R),
            k = i.useRef(
                new s.sW(50, () => {
                    E(S.current), (S.current = null);
                })
            ),
            M = i.useRef(
                new s.sW(175, () => {
                    E(null);
                })
            ),
            L = i.useCallback(
                (e) => {
                    t && (P(!0), M.current.cancel(), (S.current = e), k.current.delay());
                },
                [t]
            ),
            D = i.useCallback(
                (e) => {
                    t && (k.current.cancel(), O === e && (P(!1), M.current.delay()));
                },
                [t, O]
            ),
            U = (0, a.Wu)([v.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == T ||
                        T.forEach((t) => {
                            let { user: n } = t;
                            v.Z.getActivities(n.id, l.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, p.Z)(U);
        let B = (() => {
            if (null == T || 0 === T.length) return null;
            let e = (u && T.length > d + 1 ? T.slice(0, d) : T).map((e) => {
                var t;
                let { user: i, nick: o, voiceState: a } = e;
                return (0, r.jsx)(
                    w,
                    {
                        user: i,
                        nick: o,
                        isSelfOnOtherClient: _.default.getId() === i.id && a.sessionId !== _.default.getSessionId(),
                        mute: a.isVoiceMuted(),
                        deaf: a.isVoiceDeafened(),
                        video: a.selfVideo,
                        serverMute: a.mute,
                        serverDeaf: a.deaf,
                        sessionId: null != (t = a.sessionId) ? t : '',
                        channel: l,
                        collapsed: u,
                        canDrag: n && x.Z.can(N.Plq.MOVE_MEMBERS, l),
                        showPreview: L,
                        hidePreview: D,
                        previewIsOpen: I,
                        shouldShowPreview: O === i.id,
                        tabIndex: h,
                        location: f
                    },
                    i.id
                );
            });
            return (
                null != b && b > 0
                    ? e.push(
                          (0, r.jsx)(Z.ul, {
                              collapsed: u,
                              numAudience: b
                          })
                      )
                    : u && T.length > d + 1 && e.push((0, r.jsx)(Z.XX, { numUsers: T.length - d })),
                e
            );
        })();
        return null == B && null == j
            ? null
            : (0, r.jsxs)(g.eJ, {
                  className: o()(C, A.list, {
                      [A.collapsed]: u,
                      [A.withGuildIcon]: y
                  }),
                  collapsed: u,
                  children: [B, j]
              });
    };
