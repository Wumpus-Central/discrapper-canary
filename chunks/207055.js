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
    f = n(358221),
    h = n(362721),
    m = n(574176),
    g = n(106301),
    b = n(882522),
    C = n(819349),
    y = n(771027),
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
    L = n(981631),
    D = n(524484),
    k = n(362472);
let U = r.memo((e) => {
    var t, n, r, l;
    let { mute: a, deaf: s, user: C, channel: y, sessionId: j, nick: Z } = e,
        T = C.id,
        k = (0, o.e7)([_.default], () => _.default.getId() === T, [T]),
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
        G = (0, o.e7)([A.Z], () => A.Z.getVoiceVolume(T), [T]),
        z = (0, o.e7)([A.Z], () => A.Z.isCurrentUserPTTLatched()),
        W = k && z,
        q = (0, o.e7)([P.ZP], () => P.ZP.isGuestOrLurker(y.guild_id, T)),
        K = (0, o.e7)([f.Z], () => f.Z.getGuildRingingUsers(y.id).has(T)),
        Y = (0, o.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(y.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(T);
                }),
            [T, y.id],
        ),
        X = (0, p.Z)(null != Y ? [Y.applicationId] : []),
        J = (0, O.Z)(T, y.guild_id)[0],
        Q = null != (n = (0, d.IX)(null == J ? void 0 : J.application_id).data) ? n : void 0,
        [$, ee] = (0, o.Wu)(
            [S.Z],
            () => [S.Z.getStreamForUser(T, y.getGuildId()), S.Z.getActiveStreamForUser(T, y.getGuildId())],
            [y, T],
        ),
        et = (0, o.e7)([N.Z], () => N.Z.getSessionById(j)),
        en = M.ZP.useName(C),
        ei = (0, o.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(y.id, T), [y.id, T]),
        { enableHangStatus: er } = (0, m.bN)({
            guildId: y.guild_id,
            location: "VoiceUsers",
        }),
        el = (0, h.ZP)(y, !0, C),
        ea = (0, o.e7)([g.Z], () => (k ? g.Z.getHangStatusActivity() : null), [k]),
        eo = (0, b.j)(T),
        es = (0, E.Eu)(y.id, T),
        { enableVCStatusIcons: ec, enableRequestToStream: eu } = x.A.useExperiment(
            {
                guildId: y.guild_id,
                location: "VoiceUsers",
            },
            { autoTrackExposure: (null == J ? void 0 : J.session_id) != null },
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
                    nick: null != Z ? Z : en,
                    canDrag: e.canDrag && !q,
                    disconnected: es,
                    otherClientSessionType: null == et || null == (t = et.clientInfo) ? void 0 : t.os,
                    voicePlatform: ei,
                    localMute: U && !k,
                    localVideoDisabled: F,
                    mute: a || U,
                    deaf: s || V,
                    speaking: H,
                    voiceDb: G,
                    latched: W,
                    ringing: K,
                    priority: B,
                    embeddedApplication: X[0],
                    isStreaming: null != $ && $.channelId === y.id,
                    isWatching: null != ee && ee.state !== L.jm8.ENDED,
                    isGuest: q,
                    isSelf: k,
                    requestToStreamActivity: eu ? J : void 0,
                    application: (ec || er) && (null == J ? void 0 : J.session_id) != null ? Q : void 0,
                    showHangStatus: el && er && (k || null != eo),
                    hangStatusActivity: k ? ea : eo,
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
            { shouldShow: M, dismiss: D } = (0, y.UM)(l, { collapsed: u }),
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
                            canDrag: n && Z.Z.can(L.Plq.MOVE_MEMBERS, l),
                            showPreview: H,
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
                            C.S,
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
        return null == W && null == x
            ? null
            : (0, i.jsxs)(j.eJ, {
                  className: a()(v, k.list, {
                      [k.collapsed]: u,
                      [k.withGuildIcon]: b,
                      [k.isThread]: O,
                  }),
                  collapsed: u,
                  children: [W, x],
              });
    };
