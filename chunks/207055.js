n.d(t, { Z: () => U }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(846519),
    c = n(586902),
    u = n(317381),
    d = n(728345),
    p = n(835473),
    h = n(358221),
    f = n(362721),
    m = n(574176),
    g = n(106301),
    b = n(882522),
    _ = n(512384),
    y = n(763624),
    C = n(463421),
    x = n(470956),
    v = n(597998),
    O = n(199902),
    j = n(314897),
    E = n(271383),
    S = n(131951),
    I = n(496675),
    P = n(158776),
    Z = n(797258),
    T = n(606304),
    N = n(979651),
    A = n(51144),
    w = n(262317),
    R = n(981631),
    M = n(524484),
    D = n(541675);
let L = i.memo((e) => {
    var t, n, i, l;
    let { mute: a, deaf: s, user: v, channel: I, sessionId: P, nick: D } = e,
        L = v.id,
        k = (0, o.e7)([j.default], () => j.default.getId() === L, [L]),
        [U, B, F] = (0, o.Wu)(
            [S.Z],
            () =>
                k
                    ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), !1]
                    : [!S.Z.isSupported() || S.Z.isLocalMute(L), !1, S.Z.isLocalVideoDisabled(L)],
            [k, L],
        ),
        G = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(L)),
        H = (0, c.Z)({
            userId: L,
            checkSoundSharing: !0,
        }),
        V = (0, o.e7)([E.ZP], () => E.ZP.isGuestOrLurker(I.guild_id, L)),
        z = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(I.id).has(L)),
        W = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(I.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(L);
                }),
            [L, I.id],
        ),
        Y = (0, p.Z)(null != W ? [W.applicationId] : []),
        q = (0, C.Z)(L, I.guild_id)[0],
        K = null != (n = (0, d.IX)(null == q ? void 0 : q.application_id).data) ? n : void 0,
        [X, Q] = (0, o.Wu)(
            [O.Z],
            () => [O.Z.getStreamForUser(L, I.getGuildId()), O.Z.getActiveStreamForUser(L, I.getGuildId())],
            [I, L],
        ),
        J = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(P)),
        $ = A.ZP.useName(v),
        ee = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(I.id, L), [I.id, L]),
        { enableHangStatus: et } = m.n.useExperiment({
            guildId: I.guild_id,
            location: "VoiceUsers",
        }),
        en = (0, f.ZP)(I, !0, v),
        er = (0, o.e7)([g.Z], () => (k ? g.Z.getHangStatusActivity() : null), [k]),
        ei = (0, b.j)(L),
        el = (0, x.Eu)(I.id, L),
        { enableVCStatusIcons: ea, enableRequestToStream: eo } = y.A.useExperiment({
            guildId: I.guild_id,
            location: "VoiceUsers",
        });
    return (0, r.jsx)(_.Z, {
        shakeLocation: M.oZ.VOICE_USER,
        isShaking: H,
        children: (0, r.jsx)(
            w.ZP,
            ((i = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (l = l =
                {
                    nick: null != D ? D : $,
                    canDrag: e.canDrag && !V,
                    disconnected: el,
                    otherClientSessionType: null == J || null == (t = J.clientInfo) ? void 0 : t.os,
                    voicePlatform: ee,
                    localMute: U && !k,
                    localVideoDisabled: F,
                    mute: a || U,
                    deaf: s || B,
                    speaking: H,
                    ringing: z,
                    priority: G,
                    embeddedApplication: Y[0],
                    isStreaming: null != X && X.channelId === I.id,
                    isWatching: null != Q && Q.state !== R.jm8.ENDED,
                    isGuest: V,
                    isSelf: k,
                    requestToStreamActivity: eo ? q : void 0,
                    application: ea && (null == q ? void 0 : q.session_id) != null ? K : void 0,
                    showHangStatus: en && et && (k || null != ei),
                    hangStatusActivity: k ? er : ei,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            i),
        ),
    });
});
L.displayName = "ConnectedVoiceUser";
let k = [],
    U = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: l,
                voiceStates: c,
                collapsed: u,
                collapsedMax: d = 6,
                tabIndex: f,
                location: m,
                numAudience: g,
                withGuildIcon: b = !1,
                className: _,
                children: y,
            } = e,
            [C, O] = i.useState(null),
            [E, S] = i.useState(!1),
            Z = i.useRef(null),
            T = (0, x.Es)(l.id, null != c ? c : k),
            N = i.useRef(
                new s.sW(50, () => {
                    O(Z.current), (Z.current = null);
                }),
            ),
            A = i.useRef(
                new s.sW(175, () => {
                    O(null);
                }),
            ),
            M = i.useCallback(
                (e) => {
                    t && (S(!0), A.current.cancel(), (Z.current = e), N.current.delay());
                },
                [t],
            ),
            U = i.useCallback(
                (e) => {
                    t && (N.current.cancel(), C === e && (S(!1), A.current.delay()));
                },
                [t, C],
            ),
            B = (0, o.Wu)([P.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == T ||
                        T.forEach((t) => {
                            let { user: n } = t;
                            P.Z.getActivities(n.id, l.guild_id).forEach((t) => {
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
                        L,
                        {
                            user: a,
                            nick: o,
                            isSelfOnOtherClient: j.default.getId() === a.id && s.sessionId !== j.default.getSessionId(),
                            mute: s.isVoiceMuted(),
                            deaf: s.isVoiceDeafened(),
                            video: s.selfVideo,
                            serverMute: s.mute,
                            serverDeaf: s.deaf,
                            sessionId: null != (i = s.sessionId) ? i : "",
                            channel: l,
                            collapsed: u,
                            canDrag: n && I.Z.can(R.Plq.MOVE_MEMBERS, l),
                            showPreview: M,
                            hidePreview: U,
                            previewIsOpen: E,
                            shouldShowHoverPopout: C === a.id,
                            tabIndex: f,
                            location: m,
                        },
                        "voice-user-".concat(a.id, "-").concat(c),
                    );
                });
            return (
                null != g && g > 0
                    ? i.push(
                          (0, r.jsx)(w.ul, {
                              collapsed: u,
                              numAudience: g,
                          }),
                      )
                    : u && T.length > d + 1 && i.push((0, r.jsx)(w.XX, { numUsers: T.length - d })),
                i
            );
        })();
        return null == F && null == y
            ? null
            : (0, r.jsxs)(v.eJ, {
                  className: a()(_, D.list, {
                      [D.collapsed]: u,
                      [D.withGuildIcon]: b,
                  }),
                  collapsed: u,
                  children: [F, y],
              });
    };
