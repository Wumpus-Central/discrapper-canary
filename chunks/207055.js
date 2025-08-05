(n.d(t, { Z: () => Y }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(846519),
    c = n(586902),
    u = n(317381),
    d = n(728345),
    f = n(835473),
    _ = n(358221),
    p = n(362721),
    h = n(574176),
    m = n(106301),
    g = n(882522),
    E = n(512384),
    b = n(763624),
    y = n(470956),
    O = n(597998),
    v = n(199902),
    I = n(314897),
    T = n(271383),
    S = n(131951),
    A = n(496675),
    N = n(158776),
    C = n(885110),
    w = n(797258),
    R = n(606304),
    P = n(979651),
    D = n(51144),
    L = n(262317),
    x = n(981631),
    k = n(524484),
    j = n(50259);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
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
                M(e, t, n[t]);
            }));
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = i.memo((e) => {
    var t, n;
    let { mute: i, deaf: a, user: o, channel: l, sessionId: O, nick: A } = e,
        j = o.id,
        M = (0, s.e7)([I.default], () => I.default.getId() === j, [j]),
        [G, Z, F] = (0, s.Wu)([S.Z], () => (M ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), !1] : [!S.Z.isSupported() || S.Z.isLocalMute(j), !1, S.Z.isLocalVideoDisabled(j)]), [M, j]),
        V = (0, s.e7)([R.Z], () => R.Z.isPrioritySpeaker(j)),
        H = (0, c.Z)({
            userId: j,
            checkSoundSharing: !0
        }),
        Y = (0, s.e7)([T.ZP], () => T.ZP.isGuestOrLurker(l.guild_id, j)),
        W = (0, s.e7)([_.Z], () => _.Z.getGuildRingingUsers(l.id).has(j)),
        K = (0, s.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(l.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(j);
                }),
            [j, l.id]
        ),
        z = (0, f.Z)(null != K ? [K.applicationId] : []),
        q = (0, s.e7)([N.Z, C.Z], () => (M ? C.Z.getActivities() : N.Z.getActivities(j, l.guild_id))).find((e) => null != e.application_id && e.type === x.IIU.PLAYING),
        $ = null != (n = (0, d.IX)(null == q ? void 0 : q.application_id).data) ? n : void 0,
        [X, Q] = (0, s.Wu)([v.Z], () => [v.Z.getStreamForUser(j, l.getGuildId()), v.Z.getActiveStreamForUser(j, l.getGuildId())], [l, j]),
        J = (0, s.e7)([w.Z], () => w.Z.getSessionById(O)),
        ee = D.ZP.useName(o),
        et = (0, s.e7)([P.Z], () => P.Z.getVoicePlatformForChannel(l.id, j), [l.id, j]),
        { enableHangStatus: en } = h.n.useExperiment({
            guildId: l.guild_id,
            location: 'VoiceUsers'
        }),
        er = (0, p.ZP)(l, !0, o),
        ei = (0, s.e7)([m.Z], () => (M ? m.Z.getHangStatusActivity() : null), [M]),
        ea = (0, g.j)(j),
        eo = (0, y.Eu)(l.id, j),
        { enableVCStatusIcons: es, enableRequestToStream: el } = b.A.useExperiment({
            guildId: l.guild_id,
            location: 'VoiceUsers'
        });
    return (0, r.jsx)(E.Z, {
        shakeLocation: k.oZ.VOICE_USER,
        isShaking: H,
        children: (0, r.jsx)(
            L.ZP,
            B(U({}, e), {
                nick: null != A ? A : ee,
                canDrag: e.canDrag && !Y,
                disconnected: eo,
                otherClientSessionType: null == J || null == (t = J.clientInfo) ? void 0 : t.os,
                voicePlatform: et,
                localMute: G && !M,
                localVideoDisabled: F,
                mute: i || G,
                deaf: a || Z,
                speaking: H,
                ringing: W,
                priority: V,
                embeddedApplication: z[0],
                isStreaming: null != X && X.channelId === l.id,
                isWatching: null != Q && Q.state !== x.jm8.ENDED,
                isGuest: Y,
                isSelf: M,
                requestToStreamActivity: el ? q : void 0,
                application: es ? $ : void 0,
                showHangStatus: er && en && (M || null != ea),
                hangStatusActivity: M ? ei : ea
            })
        )
    });
});
Z.displayName = 'ConnectedVoiceUser';
let F = 50,
    V = 175,
    H = [],
    Y = function (e) {
        let { allowPreviews: t = !0, allowDragging: n = !0, channel: a, voiceStates: c, collapsed: u, collapsedMax: d = 6, tabIndex: p, location: h, numAudience: m, withGuildIcon: g = !1, className: E, children: b } = e,
            [v, T] = i.useState(null),
            [S, C] = i.useState(!1),
            w = i.useRef(null),
            R = (0, y.Es)(a.id, null != c ? c : H),
            P = i.useRef(
                new l.sW(F, () => {
                    (T(w.current), (w.current = null));
                })
            ),
            D = i.useRef(
                new l.sW(V, () => {
                    T(null);
                })
            ),
            k = i.useCallback(
                (e) => {
                    t && (C(!0), D.current.cancel(), (w.current = e), P.current.delay());
                },
                [t]
            ),
            M = i.useCallback(
                (e) => {
                    t && (P.current.cancel(), v === e && (C(!1), D.current.delay()));
                },
                [t, v]
            ),
            U = () => {
                if (null == R || 0 === R.length) return null;
                let e = u && R.length > d + 1 ? R.slice(0, d) : R,
                    t = _.Z.getGuildRingingUsers(a.id),
                    i = e.map((e) => {
                        var i;
                        let { user: o, nick: s, voiceState: l } = e,
                            c = t.has(o.id);
                        return (0, r.jsx)(
                            Z,
                            {
                                user: o,
                                nick: s,
                                isSelfOnOtherClient: I.default.getId() === o.id && l.sessionId !== I.default.getSessionId(),
                                mute: l.isVoiceMuted(),
                                deaf: l.isVoiceDeafened(),
                                video: l.selfVideo,
                                serverMute: l.mute,
                                serverDeaf: l.deaf,
                                sessionId: null != (i = l.sessionId) ? i : '',
                                channel: a,
                                collapsed: u,
                                canDrag: n && A.Z.can(x.Plq.MOVE_MEMBERS, a),
                                showPreview: k,
                                hidePreview: M,
                                previewIsOpen: S,
                                shouldShowHoverPopout: v === o.id,
                                tabIndex: p,
                                location: h
                            },
                            'voice-user-'.concat(o.id, '-').concat(c)
                        );
                    });
                return (
                    null != m && m > 0
                        ? i.push(
                              (0, r.jsx)(L.ul, {
                                  collapsed: u,
                                  numAudience: m
                              })
                          )
                        : u && R.length > d + 1 && i.push((0, r.jsx)(L.XX, { numUsers: R.length - d })),
                    i
                );
            },
            G = (0, s.Wu)([N.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == R ||
                        R.forEach((t) => {
                            let { user: n } = t;
                            N.Z.getActivities(n.id, a.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, f.Z)(G);
        let B = U();
        return null == B && null == b
            ? null
            : (0, r.jsxs)(O.eJ, {
                  className: o()(E, j.list, {
                      [j.collapsed]: u,
                      [j.withGuildIcon]: g
                  }),
                  collapsed: u,
                  children: [B, b]
              });
    };
