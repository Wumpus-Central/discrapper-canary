n.d(t, { Z: () => U }), n(388685), n(539854);
var i = n(951288),
    r = n(647438),
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
    C = n(512384),
    y = n(763624),
    _ = n(463421),
    v = n(470956),
    x = n(597998),
    O = n(199902),
    j = n(314897),
    E = n(271383),
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
    k = n(968080);
let L = r.memo((e) => {
    var t, n, r, l;
    let { mute: a, deaf: s, user: x, channel: P, sessionId: I, nick: k } = e,
        L = x.id,
        D = (0, o.e7)([j.default], () => j.default.getId() === L, [L]),
        [U, B, H] = (0, o.Wu)(
            [S.Z],
            () =>
                D
                    ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), !1]
                    : [!S.Z.isSupported() || S.Z.isLocalMute(L), !1, S.Z.isLocalVideoDisabled(L)],
            [D, L],
        ),
        V = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(L)),
        F = (0, c.Z)({
            userId: L,
            checkSoundSharing: !0,
        }),
        G = (0, o.e7)([E.ZP], () => E.ZP.isGuestOrLurker(P.guild_id, L)),
        z = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(P.id).has(L)),
        W = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(P.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(L);
                }),
            [L, P.id],
        ),
        q = (0, p.Z)(null != W ? [W.applicationId] : []),
        Y = (0, _.Z)(L, P.guild_id)[0],
        K = null != (n = (0, d.IX)(null == Y ? void 0 : Y.application_id).data) ? n : void 0,
        [X, J] = (0, o.Wu)(
            [O.Z],
            () => [O.Z.getStreamForUser(L, P.getGuildId()), O.Z.getActiveStreamForUser(L, P.getGuildId())],
            [P, L],
        ),
        Q = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(I)),
        $ = A.ZP.useName(x),
        ee = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(P.id, L), [P.id, L]),
        { enableHangStatus: et } = (0, m.bN)({
            guildId: P.guild_id,
            location: "VoiceUsers",
        }),
        en = (0, f.ZP)(P, !0, x),
        ei = (0, o.e7)([g.Z], () => (D ? g.Z.getHangStatusActivity() : null), [D]),
        er = (0, b.j)(L),
        el = (0, v.Eu)(P.id, L),
        { enableVCStatusIcons: ea, enableRequestToStream: eo } = y.A.useExperiment(
            {
                guildId: P.guild_id,
                location: "VoiceUsers",
            },
            { autoTrackExposure: (null == Y ? void 0 : Y.session_id) != null },
        );
    return (0, i.jsx)(C.Z, {
        shakeLocation: R.oZ.VOICE_USER,
        isShaking: F,
        children: (0, i.jsx)(
            w.ZP,
            ((r = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, e)),
            (l = l =
                {
                    nick: null != k ? k : $,
                    canDrag: e.canDrag && !G,
                    disconnected: el,
                    otherClientSessionType: null == Q || null == (t = Q.clientInfo) ? void 0 : t.os,
                    voicePlatform: ee,
                    localMute: U && !D,
                    localVideoDisabled: H,
                    mute: a || U,
                    deaf: s || B,
                    speaking: F,
                    ringing: z,
                    priority: V,
                    embeddedApplication: q[0],
                    isStreaming: null != X && X.channelId === P.id,
                    isWatching: null != J && J.state !== M.jm8.ENDED,
                    isGuest: G,
                    isSelf: D,
                    requestToStreamActivity: eo ? Y : void 0,
                    application: (ea || et) && (null == Y ? void 0 : Y.session_id) != null ? K : void 0,
                    showHangStatus: en && et && (D || null != er),
                    hangStatusActivity: D ? ei : er,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            r),
        ),
    });
});
L.displayName = "ConnectedVoiceUser";
let D = [],
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
                className: C,
                children: y,
            } = e,
            [_, O] = r.useState(null),
            [E, S] = r.useState(!1),
            Z = r.useRef(null),
            T = (0, v.Es)(l.id, null != c ? c : D),
            N = r.useRef(
                new s.sW(50, () => {
                    O(Z.current), (Z.current = null);
                }),
            ),
            A = r.useRef(
                new s.sW(175, () => {
                    O(null);
                }),
            ),
            R = r.useCallback(
                (e) => {
                    t && (S(!0), A.current.cancel(), (Z.current = e), N.current.delay());
                },
                [t],
            ),
            U = r.useCallback(
                (e) => {
                    t && (N.current.cancel(), _ === e && (S(!1), A.current.delay()));
                },
                [t, _],
            ),
            B = (0, o.Wu)([I.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == T ||
                        T.forEach((t) => {
                            let { user: n } = t;
                            I.Z.getActivities(n.id, l.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, p.Z)(B);
        let H = (() => {
            if (null == T || 0 === T.length) return null;
            let e = u && T.length > d + 1 ? T.slice(0, d) : T,
                t = h.Z.getGuildRingingUsers(l.id),
                r = e.map((e) => {
                    var r;
                    let { user: a, nick: o, voiceState: s } = e,
                        c = t.has(a.id);
                    return (0, i.jsx)(
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
                            sessionId: null != (r = s.sessionId) ? r : "",
                            channel: l,
                            collapsed: u,
                            canDrag: n && P.Z.can(M.Plq.MOVE_MEMBERS, l),
                            showPreview: R,
                            hidePreview: U,
                            previewIsOpen: E,
                            shouldShowHoverPopout: _ === a.id,
                            tabIndex: f,
                            location: m,
                        },
                        "voice-user-".concat(a.id, "-").concat(c),
                    );
                });
            return (
                null != g && g > 0
                    ? r.push(
                          (0, i.jsx)(w.ul, {
                              collapsed: u,
                              numAudience: g,
                          }),
                      )
                    : u && T.length > d + 1 && r.push((0, i.jsx)(w.XX, { numUsers: T.length - d })),
                r
            );
        })();
        return null == H && null == y
            ? null
            : (0, i.jsxs)(x.eJ, {
                  className: a()(C, k.list, {
                      [k.collapsed]: u,
                      [k.withGuildIcon]: b,
                  }),
                  collapsed: u,
                  children: [H, y],
              });
    };
