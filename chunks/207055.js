n.d(t, { Z: () => M }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
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
    x = n(271383),
    C = n(131951),
    y = n(496675),
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
    let { mute: l, deaf: a, user: s, channel: g, sessionId: y, nick: A } = e,
        w = s.id,
        R = (0, o.e7)([_.default], () => _.default.getId() === w, [w]),
        [M, k, L] = (0, o.Wu)([C.Z], () => (R ? [!C.Z.isSupported() || C.Z.isSelfMute() || C.Z.isSelfMutedTemporarily(), C.Z.isSelfDeaf(), !1] : [!C.Z.isSupported() || C.Z.isLocalMute(w), !1, C.Z.isLocalVideoDisabled(w)]), [R, w]),
        D = (0, o.e7)([E.Z], () => E.Z.isPrioritySpeaker(w)),
        U = (0, c.Z)({
            userId: w,
            checkSoundSharing: !0
        }),
        B = (0, o.e7)([x.ZP], () => x.ZP.isGuestOrLurker(g.guild_id, w)),
        G = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(g.id).has(w)),
        F = (0, o.e7)(
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
        z = (0, o.e7)([v.Z, j.Z], () => (R ? j.Z.getActivities() : v.Z.getActivities(w, g.guild_id))).find((e) => null != e.application_id && e.type === N.IIU.PLAYING),
        W = (0, o.e7)([d.Z], () => ((null == z ? void 0 : z.application_id) != null ? d.Z.getApplication(null == z ? void 0 : z.application_id) : void 0));
    null != W && S.ZP.trackExposure({ location: 'voice_users' });
    let [Y, q] = (0, o.Wu)([b.Z], () => [b.Z.getStreamForUser(w, g.getGuildId()), b.Z.getActiveStreamForUser(w, g.getGuildId())], [g, w]),
        K = (0, o.e7)([O.Z], () => O.Z.getSessionById(y)),
        X = P.ZP.useName(s),
        Q = (0, o.e7)([I.Z], () => I.Z.getVoicePlatformForChannel(g.id, w), [g.id, w]),
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
                    localMute: M && !R,
                    localVideoDisabled: L,
                    mute: l || M,
                    deaf: a || k,
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
    M = function (e) {
        let { allowPreviews: t = !0, allowDragging: n = !0, channel: l, voiceStates: c, collapsed: u, collapsedMax: d = 6, tabIndex: f, location: b, numAudience: x, withGuildIcon: C = !1, className: j, children: O } = e,
            [E, I] = i.useState(null),
            [P, S] = i.useState(!1),
            T = i.useRef(null),
            M = (0, m.Es)(l.id, null != c ? c : R),
            k = i.useRef(
                new s.sW(50, () => {
                    I(T.current), (T.current = null);
                })
            ),
            L = i.useRef(
                new s.sW(175, () => {
                    I(null);
                })
            ),
            D = i.useCallback(
                (e) => {
                    t && (S(!0), L.current.cancel(), (T.current = e), k.current.delay());
                },
                [t]
            ),
            U = i.useCallback(
                (e) => {
                    t && (k.current.cancel(), E === e && (S(!1), L.current.delay()));
                },
                [t, E]
            ),
            B = (0, o.Wu)([v.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == M ||
                        M.forEach((t) => {
                            let { user: n } = t;
                            v.Z.getActivities(n.id, l.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, p.Z)(B);
        let G = (() => {
            if (null == M || 0 === M.length) return null;
            let e = u && M.length > d + 1 ? M.slice(0, d) : M,
                t = h.Z.getGuildRingingUsers(l.id),
                i = e.map((e) => {
                    var i;
                    let { user: a, nick: o, voiceState: s } = e,
                        c = t.has(a.id);
                    return (0, r.jsx)(
                        w,
                        {
                            user: a,
                            nick: o,
                            isSelfOnOtherClient: _.default.getId() === a.id && s.sessionId !== _.default.getSessionId(),
                            mute: s.isVoiceMuted(),
                            deaf: s.isVoiceDeafened(),
                            video: s.selfVideo,
                            serverMute: s.mute,
                            serverDeaf: s.deaf,
                            sessionId: null != (i = s.sessionId) ? i : '',
                            channel: l,
                            collapsed: u,
                            canDrag: n && y.Z.can(N.Plq.MOVE_MEMBERS, l),
                            showPreview: D,
                            hidePreview: U,
                            previewIsOpen: P,
                            shouldShowPreview: E === a.id,
                            tabIndex: f,
                            location: b
                        },
                        'voice-user-'.concat(a.id, '-').concat(c)
                    );
                });
            return (
                null != x && x > 0
                    ? i.push(
                          (0, r.jsx)(Z.ul, {
                              collapsed: u,
                              numAudience: x
                          })
                      )
                    : u && M.length > d + 1 && i.push((0, r.jsx)(Z.XX, { numUsers: M.length - d })),
                i
            );
        })();
        return null == G && null == O
            ? null
            : (0, r.jsxs)(g.eJ, {
                  className: a()(j, A.list, {
                      [A.collapsed]: u,
                      [A.withGuildIcon]: C
                  }),
                  collapsed: u,
                  children: [G, O]
              });
    };
