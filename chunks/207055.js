n.d(t, { Z: () => F }), n(388685), n(290780), n(539854);
var i = n(54381),
    r = n(473749),
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
    y = n(819349),
    C = n(771027),
    v = n(512384),
    _ = n(763624),
    O = n(463421),
    x = n(470956),
    E = n(597998),
    j = n(199902),
    S = n(314897),
    P = n(271383),
    I = n(131951),
    Z = n(496675),
    T = n(158776),
    N = n(797258),
    A = n(606304),
    w = n(979651),
    M = n(51144),
    R = n(262317),
    L = n(981631),
    D = n(524484),
    k = n(968080);
let U = r.memo((e) => {
    var t, n, r, l;
    let { mute: a, deaf: s, user: y, channel: C, sessionId: E, nick: Z } = e,
        T = y.id,
        k = (0, o.e7)([S.default], () => S.default.getId() === T, [T]),
        [U, V, F] = (0, o.Wu)(
            [I.Z],
            () =>
                k
                    ? [!I.Z.isSupported() || I.Z.isSelfMute() || I.Z.isSelfMutedTemporarily(), I.Z.isSelfDeaf(), !1]
                    : [!I.Z.isSupported() || I.Z.isLocalMute(T), !1, I.Z.isLocalVideoDisabled(T)],
            [k, T],
        ),
        B = (0, o.e7)([A.Z], () => A.Z.isPrioritySpeaker(T)),
        H = (0, c.Z)({
            userId: T,
            checkSoundSharing: !0,
        }),
        G = (0, o.e7)([A.Z], () => A.Z.isCurrentUserPTTLatched()),
        z = k && G,
        W = (0, o.e7)([P.ZP], () => P.ZP.isGuestOrLurker(C.guild_id, T)),
        q = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(C.id).has(T)),
        K = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(C.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(T);
                }),
            [T, C.id],
        ),
        Y = (0, p.Z)(null != K ? [K.applicationId] : []),
        X = (0, O.Z)(T, C.guild_id)[0],
        J = null != (n = (0, d.IX)(null == X ? void 0 : X.application_id).data) ? n : void 0,
        [Q, $] = (0, o.Wu)(
            [j.Z],
            () => [j.Z.getStreamForUser(T, C.getGuildId()), j.Z.getActiveStreamForUser(T, C.getGuildId())],
            [C, T],
        ),
        ee = (0, o.e7)([N.Z], () => N.Z.getSessionById(E)),
        et = M.ZP.useName(y),
        en = (0, o.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(C.id, T), [C.id, T]),
        { enableHangStatus: ei } = (0, m.bN)({
            guildId: C.guild_id,
            location: "VoiceUsers",
        }),
        er = (0, f.ZP)(C, !0, y),
        el = (0, o.e7)([g.Z], () => (k ? g.Z.getHangStatusActivity() : null), [k]),
        ea = (0, b.j)(T),
        eo = (0, x.Eu)(C.id, T),
        { enableVCStatusIcons: es, enableRequestToStream: ec } = _.A.useExperiment(
            {
                guildId: C.guild_id,
                location: "VoiceUsers",
            },
            { autoTrackExposure: (null == X ? void 0 : X.session_id) != null },
        );
    return (0, i.jsx)(v.Z, {
        shakeLocation: D.oZ.VOICE_USER,
        isShaking: H,
        children: (0, i.jsx)(
            R.ZP,
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
                    nick: null != Z ? Z : et,
                    canDrag: e.canDrag && !W,
                    disconnected: eo,
                    otherClientSessionType: null == ee || null == (t = ee.clientInfo) ? void 0 : t.os,
                    voicePlatform: en,
                    localMute: U && !k,
                    localVideoDisabled: F,
                    mute: a || U,
                    deaf: s || V,
                    speaking: H,
                    latched: z,
                    ringing: q,
                    priority: B,
                    embeddedApplication: Y[0],
                    isStreaming: null != Q && Q.channelId === C.id,
                    isWatching: null != $ && $.state !== L.jm8.ENDED,
                    isGuest: W,
                    isSelf: k,
                    requestToStreamActivity: ec ? X : void 0,
                    application: (es || ei) && (null == X ? void 0 : X.session_id) != null ? J : void 0,
                    showHangStatus: er && ei && (k || null != ea),
                    hangStatusActivity: k ? el : ea,
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
U.displayName = "ConnectedVoiceUser";
let V = [],
    F = function (e) {
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
                className: v,
                children: _,
                isThread: O = !1,
            } = e,
            [j, P] = r.useState(null),
            [I, N] = r.useState(!1),
            A = r.useRef(null),
            w = (0, x.Es)(l.id, null != c ? c : V),
            { shouldShow: M, dismiss: D } = (0, C.UM)(l),
            F = r.useRef(
                new s.sW(50, () => {
                    P(A.current), (A.current = null);
                }),
            ),
            B = r.useRef(
                new s.sW(175, () => {
                    P(null);
                }),
            ),
            H = r.useCallback(
                (e) => {
                    t && (N(!0), B.current.cancel(), (A.current = e), F.current.delay());
                },
                [t],
            ),
            G = r.useCallback(
                (e) => {
                    t && (F.current.cancel(), (A.current = null), N(!1), B.current.delay());
                },
                [t],
            ),
            z = (0, o.Wu)([T.Z], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == w ||
                        w.forEach((t) => {
                            let { user: n } = t;
                            T.Z.getActivities(n.id, l.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, p.Z)(z);
        let W = (() => {
            if (null == w || 0 === w.length) return null;
            let e = u && w.length > d + 1 ? w.slice(0, d) : w,
                t = h.Z.getGuildRingingUsers(l.id),
                r = e.map((e) => {
                    var r;
                    let { user: a, nick: o, voiceState: s } = e,
                        c = t.has(a.id);
                    return (0, i.jsx)(
                        U,
                        {
                            user: a,
                            nick: o,
                            isSelfOnOtherClient: S.default.getId() === a.id && s.sessionId !== S.default.getSessionId(),
                            mute: s.isVoiceMuted(),
                            deaf: s.isVoiceDeafened(),
                            video: s.selfVideo,
                            serverMute: s.mute,
                            serverDeaf: s.deaf,
                            sessionId: null != (r = s.sessionId) ? r : "",
                            channel: l,
                            collapsed: u,
                            canDrag: n && Z.Z.can(L.Plq.MOVE_MEMBERS, l),
                            showPreview: H,
                            hidePreview: G,
                            previewIsOpen: I,
                            shouldShowHoverPopout: j === a.id,
                            tabIndex: f,
                            location: m,
                        },
                        "voice-user-".concat(a.id, "-").concat(c),
                    );
                });
            return (
                M &&
                    r.unshift(
                        (0, i.jsx)(
                            y.S,
                            {
                                channel: l,
                                onClose: D,
                            },
                            "voice-invite-suggestions-button",
                        ),
                    ),
                null != g && g > 0
                    ? r.push(
                          (0, i.jsx)(R.ul, {
                              collapsed: u,
                              numAudience: g,
                          }),
                      )
                    : u && w.length > d + 1 && r.push((0, i.jsx)(R.XX, { numUsers: w.length - d })),
                r
            );
        })();
        return null == W && null == _
            ? null
            : (0, i.jsxs)(E.eJ, {
                  className: a()(v, k.list, {
                      [k.collapsed]: u,
                      [k.withGuildIcon]: b,
                      [k.isThread]: O,
                  }),
                  collapsed: u,
                  children: [W, _],
              });
    };
