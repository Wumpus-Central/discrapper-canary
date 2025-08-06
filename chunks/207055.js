n.d(t, { Z: () => Y }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    R = n(797258),
    P = n(606304),
    w = n(979651),
    D = n(51144),
    L = n(262317),
    x = n(981631),
    M = n(524484),
    k = n(50259);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
    let { mute: i, deaf: o, user: a, channel: l, sessionId: O, nick: A } = e,
        k = a.id,
        j = (0, s.e7)([I.default], () => I.default.getId() === k, [k]),
        [G, Z, F] = (0, s.Wu)(
            [S.Z],
            () =>
                j
                    ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), !1]
                    : [!S.Z.isSupported() || S.Z.isLocalMute(k), !1, S.Z.isLocalVideoDisabled(k)],
            [j, k],
        ),
        V = (0, s.e7)([P.Z], () => P.Z.isPrioritySpeaker(k)),
        H = (0, c.Z)({
            userId: k,
            checkSoundSharing: !0,
        }),
        Y = (0, s.e7)([T.ZP], () => T.ZP.isGuestOrLurker(l.guild_id, k)),
        W = (0, s.e7)([_.Z], () => _.Z.getGuildRingingUsers(l.id).has(k)),
        K = (0, s.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(l.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(k);
                }),
            [k, l.id],
        ),
        z = (0, f.Z)(null != K ? [K.applicationId] : []),
        q = (0, s.e7)([N.Z, C.Z], () => (j ? C.Z.getActivities() : N.Z.getActivities(k, l.guild_id))).find(
            (e) => null != e.application_id && e.type === x.IIU.PLAYING,
        ),
        X = null != (n = (0, d.IX)(null == q ? void 0 : q.application_id).data) ? n : void 0,
        [Q, J] = (0, s.Wu)(
            [v.Z],
            () => [v.Z.getStreamForUser(k, l.getGuildId()), v.Z.getActiveStreamForUser(k, l.getGuildId())],
            [l, k],
        ),
        $ = (0, s.e7)([R.Z], () => R.Z.getSessionById(O)),
        ee = D.ZP.useName(a),
        et = (0, s.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(l.id, k), [l.id, k]),
        { enableHangStatus: en } = h.n.useExperiment({
            guildId: l.guild_id,
            location: "VoiceUsers",
        }),
        er = (0, p.ZP)(l, !0, a),
        ei = (0, s.e7)([m.Z], () => (j ? m.Z.getHangStatusActivity() : null), [j]),
        eo = (0, g.j)(k),
        ea = (0, y.Eu)(l.id, k),
        { enableVCStatusIcons: es, enableRequestToStream: el } = b.A.useExperiment({
            guildId: l.guild_id,
            location: "VoiceUsers",
        });
    return (0, r.jsx)(E.Z, {
        shakeLocation: M.oZ.VOICE_USER,
        isShaking: H,
        children: (0, r.jsx)(
            L.ZP,
            B(U({}, e), {
                nick: null != A ? A : ee,
                canDrag: e.canDrag && !Y,
                disconnected: ea,
                otherClientSessionType: null == $ || null == (t = $.clientInfo) ? void 0 : t.os,
                voicePlatform: et,
                localMute: G && !j,
                localVideoDisabled: F,
                mute: i || G,
                deaf: o || Z,
                speaking: H,
                ringing: W,
                priority: V,
                embeddedApplication: z[0],
                isStreaming: null != Q && Q.channelId === l.id,
                isWatching: null != J && J.state !== x.jm8.ENDED,
                isGuest: Y,
                isSelf: j,
                requestToStreamActivity: el ? q : void 0,
                application: es ? X : void 0,
                showHangStatus: er && en && (j || null != eo),
                hangStatusActivity: j ? ei : eo,
            }),
        ),
    });
});
Z.displayName = "ConnectedVoiceUser";
let F = 50,
    V = 175,
    H = [],
    Y = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: o,
                voiceStates: c,
                collapsed: u,
                collapsedMax: d = 6,
                tabIndex: p,
                location: h,
                numAudience: m,
                withGuildIcon: g = !1,
                className: E,
                children: b,
            } = e,
            [v, T] = i.useState(null),
            [S, C] = i.useState(!1),
            R = i.useRef(null),
            P = (0, y.Es)(o.id, null != c ? c : H),
            w = i.useRef(
                new l.sW(F, () => {
                    T(R.current), (R.current = null);
                }),
            ),
            D = i.useRef(
                new l.sW(V, () => {
                    T(null);
                }),
            ),
            M = i.useCallback(
                (e) => {
                    t && (C(!0), D.current.cancel(), (R.current = e), w.current.delay());
                },
                [t],
            ),
            j = i.useCallback(
                (e) => {
                    t && (w.current.cancel(), v === e && (C(!1), D.current.delay()));
                },
                [t, v],
            ),
            U = () => {
                if (null == P || 0 === P.length) return null;
                let e = u && P.length > d + 1 ? P.slice(0, d) : P,
                    t = _.Z.getGuildRingingUsers(o.id),
                    i = e.map((e) => {
                        var i;
                        let { user: a, nick: s, voiceState: l } = e,
                            c = t.has(a.id);
                        return (0, r.jsx)(
                            Z,
                            {
                                user: a,
                                nick: s,
                                isSelfOnOtherClient:
                                    I.default.getId() === a.id && l.sessionId !== I.default.getSessionId(),
                                mute: l.isVoiceMuted(),
                                deaf: l.isVoiceDeafened(),
                                video: l.selfVideo,
                                serverMute: l.mute,
                                serverDeaf: l.deaf,
                                sessionId: null != (i = l.sessionId) ? i : "",
                                channel: o,
                                collapsed: u,
                                canDrag: n && A.Z.can(x.Plq.MOVE_MEMBERS, o),
                                showPreview: M,
                                hidePreview: j,
                                previewIsOpen: S,
                                shouldShowHoverPopout: v === a.id,
                                tabIndex: p,
                                location: h,
                            },
                            "voice-user-".concat(a.id, "-").concat(c),
                        );
                    });
                return (
                    null != m && m > 0
                        ? i.push(
                              (0, r.jsx)(L.ul, {
                                  collapsed: u,
                                  numAudience: m,
                              }),
                          )
                        : u && P.length > d + 1 && i.push((0, r.jsx)(L.XX, { numUsers: P.length - d })),
                    i
                );
            },
            G = (0, s.Wu)([N.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == P ||
                        P.forEach((t) => {
                            let { user: n } = t;
                            N.Z.getActivities(n.id, o.guild_id).forEach((t) => {
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
                  className: a()(E, k.list, {
                      [k.collapsed]: u,
                      [k.withGuildIcon]: g,
                  }),
                  collapsed: u,
                  children: [B, b],
              });
    };
