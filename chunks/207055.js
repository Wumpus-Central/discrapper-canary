n.d(t, { Z: () => H }), n(388685), n(290780), n(539854);
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
    f = n(358221),
    h = n(362721),
    m = n(574176),
    g = n(106301),
    b = n(882522),
    y = n(819349),
    C = n(771027),
    v = n(512384),
    x = n(763624),
    O = n(463421),
    E = n(470956),
    j = n(597998),
    S = n(199902),
    _ = n(314897),
    P = n(271383),
    I = n(131951),
    Z = n(496675),
    T = n(158776),
    N = n(797258),
    A = n(606304),
    w = n(979651),
    M = n(51144),
    R = n(262317),
    D = n(981631),
    k = n(524484),
    L = n(362472);
let U = r.memo((e) => {
    var t, n, r, l;
    let { mute: a, deaf: s, user: y, channel: C, sessionId: j, nick: Z } = e,
        T = y.id,
        L = (0, o.e7)([_.default], () => _.default.getId() === T, [T]),
        [U, V, H] = (0, o.Wu)(
            [I.Z],
            () =>
                L
                    ? [!I.Z.isSupported() || I.Z.isSelfMute() || I.Z.isSelfMutedTemporarily(), I.Z.isSelfDeaf(), !1]
                    : [!I.Z.isSupported() || I.Z.isLocalMute(T), !1, I.Z.isLocalVideoDisabled(T)],
            [L, T],
        ),
        F = (0, o.e7)([A.Z], () => A.Z.isPrioritySpeaker(T)),
        B = (0, c.Z)({
            userId: T,
            checkSoundSharing: !0,
        }),
        G = (0, o.e7)([A.Z], () => A.Z.getVoiceVolume(T), [T]),
        W = (0, o.e7)([A.Z], () => A.Z.isCurrentUserPTTLatched()),
        z = L && W,
        q = (0, o.e7)([P.ZP], () => P.ZP.isGuestOrLurker(C.guild_id, T)),
        K = (0, o.e7)([f.Z], () => f.Z.getGuildRingingUsers(C.id).has(T)),
        Y = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(C.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(T);
                }),
            [T, C.id],
        ),
        X = (0, p.Z)(null != Y ? [Y.applicationId] : []),
        J = (0, O.Z)(T, C.guild_id)[0],
        Q = null != (n = (0, d.IX)(null == J ? void 0 : J.application_id).data) ? n : void 0,
        [$, ee] = (0, o.Wu)(
            [S.Z],
            () => [S.Z.getStreamForUser(T, C.getGuildId()), S.Z.getActiveStreamForUser(T, C.getGuildId())],
            [C, T],
        ),
        et = (0, o.e7)([N.Z], () => N.Z.getSessionById(j)),
        en = M.ZP.useName(y),
        ei = (0, o.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(C.id, T), [C.id, T]),
        { enableHangStatus: er } = (0, m.bN)({
            guildId: C.guild_id,
            location: "VoiceUsers",
        }),
        el = (0, h.ZP)(C, !0, y),
        ea = (0, o.e7)([g.Z], () => (L ? g.Z.getHangStatusActivity() : null), [L]),
        eo = (0, b.j)(T),
        es = (0, E.Eu)(C.id, T),
        { enableVCStatusIcons: ec, enableRequestToStream: eu } = x.A.useExperiment(
            {
                guildId: C.guild_id,
                location: "VoiceUsers",
            },
            { autoTrackExposure: (null == J ? void 0 : J.session_id) != null },
        );
    return (0, i.jsx)(v.Z, {
        shakeLocation: k.oZ.VOICE_USER,
        isShaking: B,
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
                    nick: null != Z ? Z : en,
                    canDrag: e.canDrag && !q,
                    disconnected: es,
                    otherClientSessionType: null == et || null == (t = et.clientInfo) ? void 0 : t.os,
                    voicePlatform: ei,
                    localMute: U && !L,
                    localVideoDisabled: H,
                    mute: a || U,
                    deaf: s || V,
                    speaking: B,
                    voiceDb: G,
                    latched: z,
                    ringing: K,
                    priority: F,
                    embeddedApplication: X[0],
                    isStreaming: null != $ && $.channelId === C.id,
                    isWatching: null != ee && ee.state !== D.jm8.ENDED,
                    isGuest: q,
                    isSelf: L,
                    requestToStreamActivity: eu ? J : void 0,
                    application: (ec || er) && (null == J ? void 0 : J.session_id) != null ? Q : void 0,
                    showHangStatus: el && er && (L || null != eo),
                    hangStatusActivity: L ? ea : eo,
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
    H = function (e) {
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
                className: v,
                children: x,
                isThread: O = !1,
            } = e,
            [S, P] = r.useState(null),
            [I, N] = r.useState(!1),
            A = r.useRef(null),
            w = (0, E.Es)(l.id, null != c ? c : V),
            { shouldShow: M, dismiss: k } = (0, C.UM)(l, { collapsed: u }),
            H = r.useRef(
                new s.sW(50, () => {
                    P(A.current), (A.current = null);
                }),
            ),
            F = r.useRef(
                new s.sW(175, () => {
                    P(null);
                }),
            ),
            B = r.useCallback(
                (e) => {
                    t && (N(!0), F.current.cancel(), (A.current = e), H.current.delay());
                },
                [t],
            ),
            G = r.useCallback(
                (e) => {
                    t && (H.current.cancel(), (A.current = null), N(!1), F.current.delay());
                },
                [t],
            ),
            W = (0, o.Wu)([T.Z], () => {
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
        (0, p.Z)(W);
        let z = (() => {
            if (null == w || 0 === w.length) return null;
            let e = u && w.length > d + 1 ? w.slice(0, d) : w,
                t = f.Z.getGuildRingingUsers(l.id),
                r = e.map((e) => {
                    var r;
                    let { user: a, nick: o, voiceState: s } = e,
                        c = t.has(a.id);
                    return (0, i.jsx)(
                        U,
                        {
                            user: a,
                            nick: o,
                            isSelfOnOtherClient: _.default.getId() === a.id && s.sessionId !== _.default.getSessionId(),
                            mute: s.isVoiceMuted(),
                            deaf: s.isVoiceDeafened(),
                            video: s.selfVideo,
                            serverMute: s.mute,
                            serverDeaf: s.deaf,
                            sessionId: null != (r = s.sessionId) ? r : "",
                            channel: l,
                            collapsed: u,
                            canDrag: n && Z.Z.can(D.Plq.MOVE_MEMBERS, l),
                            showPreview: B,
                            hidePreview: G,
                            previewIsOpen: I,
                            shouldShowHoverPopout: S === a.id,
                            tabIndex: h,
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
                                onClose: k,
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
        return null == z && null == x
            ? null
            : (0, i.jsxs)(j.eJ, {
                  className: a()(v, L.list, {
                      [L.collapsed]: u,
                      [L.withGuildIcon]: b,
                      [L.isThread]: O,
                  }),
                  collapsed: u,
                  children: [z, x],
              });
    };
