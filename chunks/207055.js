(n.d(t, { Z: () => L }), n(388685), n(539854));
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
    b = n(512384),
    _ = n(470956),
    y = n(597998),
    C = n(199902),
    x = n(314897),
    v = n(271383),
    j = n(131951),
    O = n(496675),
    E = n(158776),
    S = n(885110),
    I = n(797258),
    P = n(606304),
    Z = n(979651),
    T = n(51144),
    N = n(649739),
    A = n(262317),
    w = n(981631),
    R = n(524484),
    M = n(50259);
let D = i.memo((e) => {
    var t, n, i;
    let { mute: l, deaf: a, user: s, channel: y, sessionId: O, nick: M } = e,
        D = s.id,
        k = (0, o.e7)([x.default], () => x.default.getId() === D, [D]),
        [L, U, B] = (0, o.Wu)([j.Z], () => (k ? [!j.Z.isSupported() || j.Z.isSelfMute() || j.Z.isSelfMutedTemporarily(), j.Z.isSelfDeaf(), !1] : [!j.Z.isSupported() || j.Z.isLocalMute(D), !1, j.Z.isLocalVideoDisabled(D)]), [k, D]),
        F = (0, o.e7)([P.Z], () => P.Z.isPrioritySpeaker(D)),
        H = (0, c.Z)({
            userId: D,
            checkSoundSharing: !0
        }),
        G = (0, o.e7)([v.ZP], () => v.ZP.isGuestOrLurker(y.guild_id, D)),
        V = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(y.id).has(D)),
        z = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(y.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(D);
                }),
            [D, y.id]
        ),
        W = (0, p.Z)(null != z ? [z.applicationId] : []),
        Y = (0, N.Hr)('voice_users_eligibility_check', !1),
        q = (0, o.e7)([E.Z, S.Z], () => (k ? S.Z.getActivities() : E.Z.getActivities(D, y.guild_id))).find((e) => null != e.application_id && e.type === w.IIU.PLAYING),
        K = (0, o.e7)([d.Z], () => ((null == q ? void 0 : q.application_id) != null ? d.Z.getApplication(null == q ? void 0 : q.application_id) : void 0));
    null != K && N.ZP.trackExposure({ location: 'voice_users' });
    let [X, Q] = (0, o.Wu)([C.Z], () => [C.Z.getStreamForUser(D, y.getGuildId()), C.Z.getActiveStreamForUser(D, y.getGuildId())], [y, D]),
        J = (0, o.e7)([I.Z], () => I.Z.getSessionById(O)),
        $ = T.ZP.useName(s),
        ee = (0, o.e7)([Z.Z], () => Z.Z.getVoicePlatformForChannel(y.id, D), [y.id, D]),
        { enableHangStatus: et } = m.n.useExperiment({
            guildId: y.guild_id,
            location: 'VoiceUsers'
        }),
        en = (0, f.ZP)(y, !0, s),
        er = (0, o.e7)([g.Z], () => (k ? g.Z.getHangStatusActivity() : null), [k]),
        ei = (0, o.e7)([E.Z], () => E.Z.findActivity(D, (e) => e.type === w.IIU.HANG_STATUS), [D]),
        el = (0, _.Eu)(y.id, D);
    return (0, r.jsx)(b.Z, {
        shakeLocation: R.oZ.VOICE_USER,
        isShaking: H,
        children: (0, r.jsx)(
            A.ZP,
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
                    nick: null != M ? M : $,
                    canDrag: e.canDrag && !G,
                    otherClientSessionType: null == J || null == (t = J.clientInfo) ? void 0 : t.os,
                    voicePlatform: ee,
                    localMute: L && !k,
                    localVideoDisabled: B,
                    mute: l || L,
                    deaf: a || U,
                    speaking: H,
                    ringing: V,
                    disconnected: el,
                    priority: F,
                    embeddedApplication: W[0],
                    isStreaming: null != X && X.channelId === y.id,
                    isWatching: null != Q && Q.state !== w.jm8.ENDED,
                    isGuest: G,
                    isSelf: k,
                    application: Y ? K : void 0,
                    showHangStatus: en && et && (k || null != ei),
                    hangStatusActivity: k ? er : ei
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
D.displayName = 'ConnectedVoiceUser';
let k = [],
    L = function (e) {
        let { allowPreviews: t = !0, allowDragging: n = !0, channel: l, voiceStates: c, collapsed: u, collapsedMax: d = 6, tabIndex: f, location: m, numAudience: g, withGuildIcon: b = !1, className: C, children: v } = e,
            [j, S] = i.useState(null),
            [I, P] = i.useState(!1),
            Z = i.useRef(null),
            T = (0, _.Es)(l.id, null != c ? c : k),
            N = i.useRef(
                new s.sW(50, () => {
                    (S(Z.current), (Z.current = null));
                })
            ),
            R = i.useRef(
                new s.sW(175, () => {
                    S(null);
                })
            ),
            L = i.useCallback(
                (e) => {
                    t && (P(!0), R.current.cancel(), (Z.current = e), N.current.delay());
                },
                [t]
            ),
            U = i.useCallback(
                (e) => {
                    t && (N.current.cancel(), j === e && (P(!1), R.current.delay()));
                },
                [t, j]
            ),
            B = (0, o.Wu)([E.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == T ||
                        T.forEach((t) => {
                            let { user: n } = t;
                            E.Z.getActivities(n.id, l.guild_id).forEach((t) => {
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
                        D,
                        {
                            user: a,
                            nick: o,
                            isSelfOnOtherClient: x.default.getId() === a.id && s.sessionId !== x.default.getSessionId(),
                            mute: s.isVoiceMuted(),
                            deaf: s.isVoiceDeafened(),
                            video: s.selfVideo,
                            serverMute: s.mute,
                            serverDeaf: s.deaf,
                            sessionId: null != (i = s.sessionId) ? i : '',
                            channel: l,
                            collapsed: u,
                            canDrag: n && O.Z.can(w.Plq.MOVE_MEMBERS, l),
                            showPreview: L,
                            hidePreview: U,
                            previewIsOpen: I,
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
                          (0, r.jsx)(A.ul, {
                              collapsed: u,
                              numAudience: g
                          })
                      )
                    : u && T.length > d + 1 && i.push((0, r.jsx)(A.XX, { numUsers: T.length - d })),
                i
            );
        })();
        return null == F && null == v
            ? null
            : (0, r.jsxs)(y.eJ, {
                  className: a()(C, M.list, {
                      [M.collapsed]: u,
                      [M.withGuildIcon]: b
                  }),
                  collapsed: u,
                  children: [F, v]
              });
    };
