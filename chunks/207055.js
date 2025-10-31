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
    f = n(358221),
    h = n(362721),
    m = n(574176),
    g = n(106301),
    b = n(882522),
    _ = n(512384),
    y = n(763624),
    C = n(463421),
    v = n(470956),
    O = n(597998),
    x = n(199902),
    E = n(314897),
    j = n(271383),
    S = n(131951),
    P = n(496675),
    I = n(158776),
    Z = n(797258),
    T = n(606304),
    N = n(979651),
    A = n(51144),
    w = n(262317),
    M = n(981631),
    R = n(524484),
    D = n(106252);
let L = i.memo((e) => {
    var t, n, i, l;
    let { mute: a, deaf: s, user: O, channel: P, sessionId: I, nick: D } = e,
        L = O.id,
        k = (0, o.e7)([E.default], () => E.default.getId() === L, [L]),
        [U, B, F] = (0, o.Wu)(
            [S.Z],
            () =>
                k
                    ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), !1]
                    : [!S.Z.isSupported() || S.Z.isLocalMute(L), !1, S.Z.isLocalVideoDisabled(L)],
            [k, L],
        ),
        V = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(L)),
        H = (0, c.Z)({
            userId: L,
            checkSoundSharing: !0,
        }),
        G = (0, o.e7)([T.Z], () => T.Z.isCurrentUserPTTLatched()),
        W = k && G,
        z = (0, o.e7)([j.ZP], () => j.ZP.isGuestOrLurker(P.guild_id, L)),
        q = (0, o.e7)([f.Z], () => f.Z.getGuildRingingUsers(P.id).has(L)),
        Y = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(P.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(L);
                }),
            [L, P.id],
        ),
        K = (0, p.Z)(null != Y ? [Y.applicationId] : []),
        X = (0, C.Z)(L, P.guild_id)[0],
        J = null != (n = (0, d.IX)(null == X ? void 0 : X.application_id).data) ? n : void 0,
        [Q, $] = (0, o.Wu)(
            [x.Z],
            () => [x.Z.getStreamForUser(L, P.getGuildId()), x.Z.getActiveStreamForUser(L, P.getGuildId())],
            [P, L],
        ),
        ee = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(I)),
        et = A.ZP.useName(O),
        en = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(P.id, L), [P.id, L]),
        { enableHangStatus: er } = (0, m.bN)({
            guildId: P.guild_id,
            location: "VoiceUsers",
        }),
        ei = (0, h.ZP)(P, !0, O),
        el = (0, o.e7)([g.Z], () => (k ? g.Z.getHangStatusActivity() : null), [k]),
        ea = (0, b.j)(L),
        eo = (0, v.Eu)(P.id, L),
        { enableVCStatusIcons: es, enableRequestToStream: ec } = y.A.useExperiment(
            {
                guildId: P.guild_id,
                location: "VoiceUsers",
            },
            { autoTrackExposure: (null == X ? void 0 : X.session_id) != null },
        );
    return (0, r.jsx)(_.Z, {
        shakeLocation: R.oZ.VOICE_USER,
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
                    nick: null != D ? D : et,
                    canDrag: e.canDrag && !z,
                    disconnected: eo,
                    otherClientSessionType: null == ee || null == (t = ee.clientInfo) ? void 0 : t.os,
                    voicePlatform: en,
                    localMute: U && !k,
                    localVideoDisabled: F,
                    mute: a || U,
                    deaf: s || B,
                    speaking: H,
                    latched: W,
                    ringing: q,
                    priority: V,
                    embeddedApplication: K[0],
                    isStreaming: null != Q && Q.channelId === P.id,
                    isWatching: null != $ && $.state !== M.jm8.ENDED,
                    isGuest: z,
                    isSelf: k,
                    requestToStreamActivity: ec ? X : void 0,
                    application: (es || er) && (null == X ? void 0 : X.session_id) != null ? J : void 0,
                    showHangStatus: ei && er && (k || null != ea),
                    hangStatusActivity: k ? el : ea,
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
                tabIndex: h,
                location: m,
                numAudience: g,
                withGuildIcon: b = !1,
                className: _,
                children: y,
                isThread: C = !1,
            } = e,
            [x, j] = i.useState(null),
            [S, Z] = i.useState(!1),
            T = i.useRef(null),
            N = (0, v.Es)(l.id, null != c ? c : k),
            A = i.useRef(
                new s.sW(50, () => {
                    j(T.current), (T.current = null);
                }),
            ),
            R = i.useRef(
                new s.sW(175, () => {
                    j(null);
                }),
            ),
            U = i.useCallback(
                (e) => {
                    t && (Z(!0), R.current.cancel(), (T.current = e), A.current.delay());
                },
                [t],
            ),
            B = i.useCallback(
                (e) => {
                    t && (A.current.cancel(), x === e && (Z(!1), R.current.delay()));
                },
                [t, x],
            ),
            F = (0, o.Wu)([I.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == N ||
                        N.forEach((t) => {
                            let { user: n } = t;
                            I.Z.getActivities(n.id, l.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, p.Z)(F);
        let V = (() => {
            if (null == N || 0 === N.length) return null;
            let e = u && N.length > d + 1 ? N.slice(0, d) : N,
                t = f.Z.getGuildRingingUsers(l.id),
                i = e.map((e) => {
                    var i;
                    let { user: a, nick: o, voiceState: s } = e,
                        c = t.has(a.id);
                    return (0, r.jsx)(
                        L,
                        {
                            user: a,
                            nick: o,
                            isSelfOnOtherClient: E.default.getId() === a.id && s.sessionId !== E.default.getSessionId(),
                            mute: s.isVoiceMuted(),
                            deaf: s.isVoiceDeafened(),
                            video: s.selfVideo,
                            serverMute: s.mute,
                            serverDeaf: s.deaf,
                            sessionId: null != (i = s.sessionId) ? i : "",
                            channel: l,
                            collapsed: u,
                            canDrag: n && P.Z.can(M.Plq.MOVE_MEMBERS, l),
                            showPreview: U,
                            hidePreview: B,
                            previewIsOpen: S,
                            shouldShowHoverPopout: x === a.id,
                            tabIndex: h,
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
                    : u && N.length > d + 1 && i.push((0, r.jsx)(w.XX, { numUsers: N.length - d })),
                i
            );
        })();
        return null == V && null == y
            ? null
            : (0, r.jsxs)(O.eJ, {
                  className: a()(_, D.list, {
                      [D.collapsed]: u,
                      [D.withGuildIcon]: b,
                      [D.isThread]: C,
                  }),
                  collapsed: u,
                  children: [V, y],
              });
    };
