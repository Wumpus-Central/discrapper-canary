(n.d(t, { Z: () => U }), n(388685), n(539854));
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
    f = n(362721),
    m = n(574176),
    g = n(106301),
    b = n(882522),
    _ = n(512384),
    y = n(470956),
    C = n(597998),
    x = n(199902),
    v = n(314897),
    j = n(271383),
    O = n(131951),
    E = n(496675),
    S = n(158776),
    P = n(885110),
    I = n(797258),
    Z = n(606304),
    T = n(979651),
    N = n(51144),
    A = n(649739),
    w = n(262317),
    R = n(981631),
    M = n(524484),
    D = n(50259);
let k = i.memo((e) => {
    var t, n, i;
    let { mute: l, deaf: a, user: s, channel: C, sessionId: E, nick: D } = e,
        k = s.id,
        L = (0, o.e7)([v.default], () => v.default.getId() === k, [k]),
        [U, B, F] = (0, o.Wu)([O.Z], () => (L ? [!O.Z.isSupported() || O.Z.isSelfMute() || O.Z.isSelfMutedTemporarily(), O.Z.isSelfDeaf(), !1] : [!O.Z.isSupported() || O.Z.isLocalMute(k), !1, O.Z.isLocalVideoDisabled(k)]), [L, k]),
        H = (0, o.e7)([Z.Z], () => Z.Z.isPrioritySpeaker(k)),
        G = (0, c.Z)({
            userId: k,
            checkSoundSharing: !0
        }),
        V = (0, o.e7)([j.ZP], () => j.ZP.isGuestOrLurker(C.guild_id, k)),
        z = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(C.id).has(k)),
        W = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(C.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(k);
                }),
            [k, C.id]
        ),
        Y = (0, p.Z)(null != W ? [W.applicationId] : []),
        q = (0, A.Hr)('voice_users_eligibility_check', !1),
        K = (0, o.e7)([S.Z, P.Z], () => (L ? P.Z.getActivities() : S.Z.getActivities(k, C.guild_id))).find((e) => null != e.application_id && e.type === R.IIU.PLAYING),
        X = (0, o.e7)([d.Z], () => ((null == K ? void 0 : K.application_id) != null ? d.Z.getApplication(null == K ? void 0 : K.application_id) : void 0));
    null != X && A.ZP.trackExposure({ location: 'voice_users' });
    let [Q, J] = (0, o.Wu)([x.Z], () => [x.Z.getStreamForUser(k, C.getGuildId()), x.Z.getActiveStreamForUser(k, C.getGuildId())], [C, k]),
        $ = (0, o.e7)([I.Z], () => I.Z.getSessionById(E)),
        ee = N.ZP.useName(s),
        et = (0, o.e7)([T.Z], () => T.Z.getVoicePlatformForChannel(C.id, k), [C.id, k]),
        { enableHangStatus: en } = m.n.useExperiment({
            guildId: C.guild_id,
            location: 'VoiceUsers'
        }),
        er = (0, f.ZP)(C, !0, s),
        ei = (0, o.e7)([g.Z], () => (L ? g.Z.getHangStatusActivity() : null), [L]),
        el = (0, b.j)(k),
        ea = (0, y.Eu)(C.id, k);
    return (0, r.jsx)(_.Z, {
        shakeLocation: M.oZ.VOICE_USER,
        isShaking: G,
        children: (0, r.jsx)(
            w.ZP,
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, e)),
            (i = i =
                {
                    nick: null != D ? D : ee,
                    canDrag: e.canDrag && !V,
                    otherClientSessionType: null == $ || null == (t = $.clientInfo) ? void 0 : t.os,
                    voicePlatform: et,
                    localMute: U && !L,
                    localVideoDisabled: F,
                    mute: l || U,
                    deaf: a || B,
                    speaking: G,
                    ringing: z,
                    disconnected: ea,
                    priority: H,
                    embeddedApplication: Y[0],
                    isStreaming: null != Q && Q.channelId === C.id,
                    isWatching: null != J && J.state !== R.jm8.ENDED,
                    isGuest: V,
                    isSelf: L,
                    application: q ? X : void 0,
                    showHangStatus: er && en && (L || null != el),
                    hangStatusActivity: L ? ei : el
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
k.displayName = 'ConnectedVoiceUser';
let L = [],
    U = function (e) {
        let { allowPreviews: t = !0, allowDragging: n = !0, channel: l, voiceStates: c, collapsed: u, collapsedMax: d = 6, tabIndex: f, location: m, numAudience: g, withGuildIcon: b = !1, className: _, children: x } = e,
            [j, O] = i.useState(null),
            [P, I] = i.useState(!1),
            Z = i.useRef(null),
            T = (0, y.Es)(l.id, null != c ? c : L),
            N = i.useRef(
                new s.sW(50, () => {
                    (O(Z.current), (Z.current = null));
                })
            ),
            A = i.useRef(
                new s.sW(175, () => {
                    O(null);
                })
            ),
            M = i.useCallback(
                (e) => {
                    t && (I(!0), A.current.cancel(), (Z.current = e), N.current.delay());
                },
                [t]
            ),
            U = i.useCallback(
                (e) => {
                    t && (N.current.cancel(), j === e && (I(!1), A.current.delay()));
                },
                [t, j]
            ),
            B = (0, o.Wu)([S.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == T ||
                        T.forEach((t) => {
                            let { user: n } = t;
                            S.Z.getActivities(n.id, l.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, p.Z)(B);
        let F = (() => {
            if (null == T || 0 === T.length) return null;
            let e = u && T.length > d + 1 ? T.slice(0, d) : T,
                t = h.Z.getGuildRingingUsers(l.id),
                i = e.map((e) => {
                    var i;
                    let { user: a, nick: o, voiceState: s } = e,
                        c = t.has(a.id);
                    return (0, r.jsx)(
                        k,
                        {
                            user: a,
                            nick: o,
                            isSelfOnOtherClient: v.default.getId() === a.id && s.sessionId !== v.default.getSessionId(),
                            mute: s.isVoiceMuted(),
                            deaf: s.isVoiceDeafened(),
                            video: s.selfVideo,
                            serverMute: s.mute,
                            serverDeaf: s.deaf,
                            sessionId: null != (i = s.sessionId) ? i : '',
                            channel: l,
                            collapsed: u,
                            canDrag: n && E.Z.can(R.Plq.MOVE_MEMBERS, l),
                            showPreview: M,
                            hidePreview: U,
                            previewIsOpen: P,
                            shouldShowPreview: j === a.id,
                            tabIndex: f,
                            location: m
                        },
                        'voice-user-'.concat(a.id, '-').concat(c)
                    );
                });
            return (
                null != g && g > 0
                    ? i.push(
                          (0, r.jsx)(w.ul, {
                              collapsed: u,
                              numAudience: g
                          })
                      )
                    : u && T.length > d + 1 && i.push((0, r.jsx)(w.XX, { numUsers: T.length - d })),
                i
            );
        })();
        return null == F && null == x
            ? null
            : (0, r.jsxs)(C.eJ, {
                  className: a()(_, D.list, {
                      [D.collapsed]: u,
                      [D.withGuildIcon]: b
                  }),
                  collapsed: u,
                  children: [F, x]
              });
    };
