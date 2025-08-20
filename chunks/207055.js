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
    y = n(512384),
    _ = n(763624),
    C = n(470956),
    x = n(597998),
    v = n(199902),
    O = n(314897),
    j = n(271383),
    E = n(131951),
    S = n(496675),
    P = n(158776),
    I = n(885110),
    Z = n(797258),
    T = n(606304),
    N = n(979651),
    A = n(51144),
    w = n(262317),
    R = n(981631),
    M = n(524484),
    k = n(541675);
let D = i.memo((e) => {
    var t, n, i, l;
    let { mute: a, deaf: s, user: x, channel: S, sessionId: k, nick: D } = e,
        L = x.id,
        U = (0, o.e7)([O.default], () => O.default.getId() === L, [L]),
        [B, F, H] = (0, o.Wu)(
            [E.Z],
            () =>
                U
                    ? [!E.Z.isSupported() || E.Z.isSelfMute() || E.Z.isSelfMutedTemporarily(), E.Z.isSelfDeaf(), !1]
                    : [!E.Z.isSupported() || E.Z.isLocalMute(L), !1, E.Z.isLocalVideoDisabled(L)],
            [U, L],
        ),
        G = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(L)),
        V = (0, c.Z)({
            userId: L,
            checkSoundSharing: !0,
        }),
        z = (0, o.e7)([j.ZP], () => j.ZP.isGuestOrLurker(S.guild_id, L)),
        W = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(S.id).has(L)),
        q = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(S.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(L);
                }),
            [L, S.id],
        ),
        Y = (0, p.Z)(null != q ? [q.applicationId] : []),
        K = (0, o.e7)([P.Z, I.Z], () => (U ? I.Z.getActivities() : P.Z.getActivities(L, S.guild_id))).find(
            (e) => null != e.application_id && e.type === R.IIU.PLAYING,
        ),
        X = null != (n = (0, d.IX)(null == K ? void 0 : K.application_id).data) ? n : void 0,
        [Q, J] = (0, o.Wu)(
            [v.Z],
            () => [v.Z.getStreamForUser(L, S.getGuildId()), v.Z.getActiveStreamForUser(L, S.getGuildId())],
            [S, L],
        ),
        $ = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(k)),
        ee = A.ZP.useName(x),
        et = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(S.id, L), [S.id, L]),
        { enableHangStatus: en } = m.n.useExperiment({
            guildId: S.guild_id,
            location: "VoiceUsers",
        }),
        er = (0, f.ZP)(S, !0, x),
        ei = (0, o.e7)([g.Z], () => (U ? g.Z.getHangStatusActivity() : null), [U]),
        el = (0, b.j)(L),
        ea = (0, C.Eu)(S.id, L),
        { enableVCStatusIcons: eo, enableRequestToStream: es } = _.A.useExperiment({
            guildId: S.guild_id,
            location: "VoiceUsers",
        });
    return (0, r.jsx)(y.Z, {
        shakeLocation: M.oZ.VOICE_USER,
        isShaking: V,
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
                    nick: null != D ? D : ee,
                    canDrag: e.canDrag && !z,
                    disconnected: ea,
                    otherClientSessionType: null == $ || null == (t = $.clientInfo) ? void 0 : t.os,
                    voicePlatform: et,
                    localMute: B && !U,
                    localVideoDisabled: H,
                    mute: a || B,
                    deaf: s || F,
                    speaking: V,
                    ringing: W,
                    priority: G,
                    embeddedApplication: Y[0],
                    isStreaming: null != Q && Q.channelId === S.id,
                    isWatching: null != J && J.state !== R.jm8.ENDED,
                    isGuest: z,
                    isSelf: U,
                    requestToStreamActivity: es ? K : void 0,
                    application: eo && (null == K ? void 0 : K.session_id) != null ? X : void 0,
                    showHangStatus: er && en && (U || null != el),
                    hangStatusActivity: U ? ei : el,
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
D.displayName = "ConnectedVoiceUser";
let L = [],
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
                className: y,
                children: _,
            } = e,
            [v, j] = i.useState(null),
            [E, I] = i.useState(!1),
            Z = i.useRef(null),
            T = (0, C.Es)(l.id, null != c ? c : L),
            N = i.useRef(
                new s.sW(50, () => {
                    j(Z.current), (Z.current = null);
                }),
            ),
            A = i.useRef(
                new s.sW(175, () => {
                    j(null);
                }),
            ),
            M = i.useCallback(
                (e) => {
                    t && (I(!0), A.current.cancel(), (Z.current = e), N.current.delay());
                },
                [t],
            ),
            U = i.useCallback(
                (e) => {
                    t && (N.current.cancel(), v === e && (I(!1), A.current.delay()));
                },
                [t, v],
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
                        D,
                        {
                            user: a,
                            nick: o,
                            isSelfOnOtherClient: O.default.getId() === a.id && s.sessionId !== O.default.getSessionId(),
                            mute: s.isVoiceMuted(),
                            deaf: s.isVoiceDeafened(),
                            video: s.selfVideo,
                            serverMute: s.mute,
                            serverDeaf: s.deaf,
                            sessionId: null != (i = s.sessionId) ? i : "",
                            channel: l,
                            collapsed: u,
                            canDrag: n && S.Z.can(R.Plq.MOVE_MEMBERS, l),
                            showPreview: M,
                            hidePreview: U,
                            previewIsOpen: E,
                            shouldShowHoverPopout: v === a.id,
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
        return null == F && null == _
            ? null
            : (0, r.jsxs)(x.eJ, {
                  className: a()(y, k.list, {
                      [k.collapsed]: u,
                      [k.withGuildIcon]: b,
                  }),
                  collapsed: u,
                  children: [F, _],
              });
    };
