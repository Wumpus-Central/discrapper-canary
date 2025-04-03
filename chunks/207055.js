n.d(t, { Z: () => M }), n(47120), n(653041);
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
    C = n(271383),
    y = n(131951),
    x = n(496675),
    v = n(158776),
    j = n(885110),
    O = n(797258),
    E = n(606304),
    N = n(979651),
    I = n(51144),
    P = n(649739),
    S = n(262317),
    Z = n(981631),
    T = n(524484),
    A = n(50259);
let w = i.memo((e) => {
    var t, n, i;
    let { mute: l, deaf: o, user: s, channel: g, sessionId: x, nick: A } = e,
        w = s.id,
        R = (0, a.e7)([_.default], () => _.default.getId() === w, [w]),
        [M, k, L] = (0, a.Wu)([y.Z], () => (R ? [!y.Z.isSupported() || y.Z.isSelfMute() || y.Z.isSelfMutedTemporarily(), y.Z.isSelfDeaf(), !1] : [!y.Z.isSupported() || y.Z.isLocalMute(w), !1, y.Z.isLocalVideoDisabled(w)]), [R, w]),
        D = (0, a.e7)([E.Z], () => E.Z.isPrioritySpeaker(w)),
        W = (0, c.Z)({
            userId: w,
            checkSoundSharing: !0
        }),
        U = (0, a.e7)([C.ZP], () => C.ZP.isGuestOrLurker(g.guild_id, w)),
        B = (0, a.e7)([h.Z], () => h.Z.getGuildRingingUsers(g.id).has(w)),
        H = (0, a.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(g.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(w);
                }),
            [w, g.id]
        ),
        F = (0, p.Z)(null != H ? [H.applicationId] : []),
        G = (0, P.Hr)('voice_users_eligibility_check', !1),
        V = (0, a.e7)([v.Z, j.Z], () => (R ? j.Z.getActivities() : v.Z.getActivities(w, g.guild_id))).find((e) => null != e.application_id && e.type === Z.IIU.PLAYING),
        z = (0, a.e7)([d.Z], () => ((null == V ? void 0 : V.application_id) != null ? d.Z.getApplication(null == V ? void 0 : V.application_id) : void 0));
    null != z && P.ZP.trackExposure({ location: 'voice_users' });
    let [Y, q] = (0, a.Wu)([b.Z], () => [b.Z.getStreamForUser(w, g.getGuildId()), b.Z.getActiveStreamForUser(w, g.getGuildId())], [g, w]),
        K = (0, a.e7)([O.Z], () => O.Z.getSessionById(x)),
        X = I.ZP.useName(s),
        Q = (0, a.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(g.id, w), [g.id, w]),
        J = (0, m.Eu)(g.id, w);
    return (0, r.jsx)(f.Z, {
        shakeLocation: T.oZ.VOICE_USER,
        isShaking: W,
        children: (0, r.jsx)(
            S.ZP,
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
                    canDrag: e.canDrag && !U,
                    otherClientSessionType: null == K || null == (t = K.clientInfo) ? void 0 : t.os,
                    voicePlatform: Q,
                    localMute: M && !R,
                    localVideoDisabled: L,
                    mute: l || M,
                    deaf: o || k,
                    speaking: W,
                    ringing: B,
                    disconnected: J,
                    priority: D,
                    embeddedApplication: F[0],
                    isStreaming: null != Y && Y.channelId === g.id,
                    isWatching: null != q && q.state !== Z.jm8.ENDED,
                    isGuest: U,
                    isSelf: _.default.getId() === s.id,
                    application: G ? z : void 0
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
        let { allowPreviews: t = !0, allowDragging: n = !0, channel: l, voiceStates: c, collapsed: u, collapsedMax: d = 6, tabIndex: h, location: f, numAudience: b, withGuildIcon: C = !1, className: y, children: j } = e,
            [O, E] = i.useState(null),
            [N, I] = i.useState(!1),
            P = i.useRef(null),
            T = (0, m.Es)(l.id, null != c ? c : R),
            M = i.useRef(
                new s.sW(50, () => {
                    E(P.current), (P.current = null);
                })
            ),
            k = i.useRef(
                new s.sW(175, () => {
                    E(null);
                })
            ),
            L = i.useCallback(
                (e) => {
                    t && (I(!0), k.current.cancel(), (P.current = e), M.current.delay());
                },
                [t]
            ),
            D = i.useCallback(
                (e) => {
                    t && (M.current.cancel(), O === e && (I(!1), k.current.delay()));
                },
                [t, O]
            ),
            W = (0, a.Wu)([v.Z], () => {
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
        (0, p.Z)(W);
        let U = (() => {
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
                        canDrag: n && x.Z.can(Z.Plq.MOVE_MEMBERS, l),
                        showPreview: L,
                        hidePreview: D,
                        previewIsOpen: N,
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
                          (0, r.jsx)(S.ul, {
                              collapsed: u,
                              numAudience: b
                          })
                      )
                    : u && T.length > d + 1 && e.push((0, r.jsx)(S.XX, { numUsers: T.length - d })),
                e
            );
        })();
        return null == U && null == j
            ? null
            : (0, r.jsxs)(g.eJ, {
                  className: o()(y, A.list, {
                      [A.collapsed]: u,
                      [A.withGuildIcon]: C
                  }),
                  collapsed: u,
                  children: [U, j]
              });
    };
