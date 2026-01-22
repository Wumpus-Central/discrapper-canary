n.d(t, { A: () => F }), n(896048), n(667532), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(451988),
    c = n(717558),
    u = n(933958),
    d = n(627363),
    f = n(429913),
    p = n(313961),
    h = n(532622),
    b = n(140547),
    g = n(242919),
    m = n(7054),
    A = n(220995),
    y = n(582904),
    O = n(551826),
    j = n(159426),
    v = n(25528),
    x = n(530804),
    E = n(481947),
    _ = n(616356),
    C = n(961350),
    S = n(696451),
    I = n(430452),
    N = n(576705),
    T = n(290863),
    P = n(528767),
    w = n(485296),
    R = n(977997),
    D = n(427262),
    M = n(340851),
    L = n(652215),
    G = n(31408),
    k = n(50314);
let U = l.memo((e) => {
    var t, n, l, i;
    let { mute: a, deaf: o, user: A, channel: y, sessionId: E, nick: N } = e,
        T = A.id,
        k = (0, s.bG)([C.default], () => C.default.getId() === T, [T]),
        [U, V, F] = (0, s.yK)(
            [I.A],
            () =>
                k
                    ? [!I.A.isSupported() || I.A.isSelfMute() || I.A.isSelfMutedTemporarily(), I.A.isSelfDeaf(), !1]
                    : [!I.A.isSupported() || I.A.isLocalMute(T), !1, I.A.isLocalVideoDisabled(T)],
            [k, T],
        ),
        H = (0, s.bG)([w.A], () => w.A.isPrioritySpeaker(T)),
        B = (0, c.A)({
            userId: T,
            checkSoundSharing: !0,
        }),
        K = (0, s.bG)([w.A], () => w.A.getVoiceVolume(T), [T]),
        W = (0, s.bG)([w.A], () => w.A.isCurrentUserPTTLatched()),
        z = k && W,
        Y = (0, s.bG)([S.Ay], () => S.Ay.isGuestOrLurker(y.guild_id, T)),
        q = (0, s.bG)([p.A], () => p.A.getGuildRingingUsers(y.id).has(T)),
        X = (0, s.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(y.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(T);
                }),
            [T, y.id],
        ),
        J = (0, f.A)(null != X ? [X.applicationId] : []),
        Q = (0, v.A)(T, y.guild_id)[0],
        Z = null != (t = (0, d.YY)(null == Q ? void 0 : Q.application_id).data) ? t : void 0,
        [$, ee] = (0, s.yK)(
            [_.A],
            () => [_.A.getStreamForUser(T, y.getGuildId()), _.A.getActiveStreamForUser(T, y.getGuildId())],
            [y, T],
        ),
        et = (0, s.bG)([P.A], () => P.A.getSessionById(E)),
        en = D.Ay.useName(A),
        er = (0, s.bG)([R.A], () => R.A.getVoicePlatformForChannel(y.id, T), [y.id, T]),
        { enableHangStatus: el } = (0, b.$j)({
            guildId: y.guild_id,
            location: "VoiceUsers",
        }),
        ei = (0, h.Ay)(y, !0, A),
        ea = (0, s.bG)([g.A], () => (k ? g.A.getHangStatusActivity() : null), [k]),
        es = (0, m.h)(T),
        eo = (0, x.uy)(y.id, T),
        { enableVCStatusIcons: ec, enableRequestToStream: eu } = j.m.useExperiment(
            {
                guildId: y.guild_id,
                location: "VoiceUsers",
            },
            { autoTrackExposure: (null == Q ? void 0 : Q.session_id) != null },
        );
    return (0, r.jsx)(O.A, {
        shakeLocation: G.uD.VOICE_USER,
        isShaking: B,
        children: (0, r.jsx)(
            M.Ay,
            ((l = (function (e) {
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
            (i = i =
                {
                    nick: null != N ? N : en,
                    canDrag: e.canDrag && !Y,
                    disconnected: eo,
                    otherClientSessionType: null == et || null == (n = et.clientInfo) ? void 0 : n.os,
                    voicePlatform: er,
                    localMute: U && !k,
                    localVideoDisabled: F,
                    mute: a || U,
                    deaf: o || V,
                    speaking: B,
                    voiceDb: K,
                    latched: z,
                    ringing: q,
                    priority: H,
                    embeddedApplication: J[0],
                    isStreaming: null != $ && $.channelId === y.id,
                    isWatching: null != ee && ee.state !== L.XYD.ENDED,
                    isGuest: Y,
                    isSelf: k,
                    requestToStreamActivity: eu ? Q : void 0,
                    application: (ec || el) && (null == Q ? void 0 : Q.session_id) != null ? Z : void 0,
                    showHangStatus: ei && el && (k || null != es),
                    hangStatusActivity: k ? ea : es,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            l),
        ),
    });
});
U.displayName = "ConnectedVoiceUser";
let V = [],
    F = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: i,
                voiceStates: c,
                collapsed: u,
                collapsedMax: d = 6,
                tabIndex: h,
                location: b,
                numAudience: g,
                withGuildIcon: m = !1,
                className: O,
                children: j,
                isThread: v = !1,
            } = e,
            [_, S] = l.useState(null),
            [I, P] = l.useState(!1),
            w = l.useRef(null),
            R = (0, x.$n)(i.id, null != c ? c : V),
            { shouldShow: D, dismiss: G } = (0, y.Z0)(i, { collapsed: u }),
            F = l.useRef(
                new o.J_(50, () => {
                    S(w.current), (w.current = null);
                }),
            ),
            H = l.useRef(
                new o.J_(175, () => {
                    S(null);
                }),
            ),
            B = l.useCallback(
                (e) => {
                    t && (P(!0), H.current.cancel(), (w.current = e), F.current.delay());
                },
                [t],
            ),
            K = l.useCallback(
                (e) => {
                    t && (F.current.cancel(), (w.current = null), P(!1), H.current.delay());
                },
                [t],
            ),
            W = (0, s.yK)([T.A], () => {
                if (u) return [];
                let e = new Set();
                return (
                    null == R ||
                        R.forEach((t) => {
                            let { user: n } = t;
                            T.A.getActivities(n.id, i.guild_id).forEach((t) => {
                                null != t.application_id && e.add(t.application_id);
                            });
                        }),
                    Array.from(e)
                );
            });
        (0, f.A)(W);
        let z = (() => {
            if (null == R || 0 === R.length) return null;
            let e = u && R.length > d + 1 ? R.slice(0, d) : R,
                t = p.A.getGuildRingingUsers(i.id),
                l = e.map((e) => {
                    var l;
                    let { user: a, nick: s, voiceState: o } = e,
                        c = t.has(a.id);
                    return (0, r.jsx)(
                        U,
                        {
                            user: a,
                            nick: s,
                            isSelfOnOtherClient: C.default.getId() === a.id && o.sessionId !== C.default.getSessionId(),
                            mute: o.isVoiceMuted(),
                            deaf: o.isVoiceDeafened(),
                            video: o.selfVideo,
                            serverMute: o.mute,
                            serverDeaf: o.deaf,
                            sessionId: null != (l = o.sessionId) ? l : "",
                            channel: i,
                            collapsed: u,
                            canDrag: n && N.A.can(L.xBc.MOVE_MEMBERS, i),
                            showPreview: B,
                            hidePreview: K,
                            previewIsOpen: I,
                            shouldShowHoverPopout: _ === a.id,
                            tabIndex: h,
                            location: b,
                        },
                        "voice-user-".concat(a.id, "-").concat(c),
                    );
                });
            return (
                D &&
                    l.unshift(
                        (0, r.jsx)(
                            A.p,
                            {
                                channel: i,
                                onClose: G,
                            },
                            "voice-invite-suggestions-button",
                        ),
                    ),
                null != g && g > 0
                    ? l.push(
                          (0, r.jsx)(M.aI, {
                              collapsed: u,
                              numAudience: g,
                          }),
                      )
                    : u && R.length > d + 1 && l.push((0, r.jsx)(M.LR, { numUsers: R.length - d })),
                l
            );
        })();
        return null == z && null == j
            ? null
            : (0, r.jsxs)(E.Wr, {
                  className: a()(O, k.p_, {
                      [k.yZ]: u,
                      [k.lY]: m,
                      [k.fT]: v,
                  }),
                  collapsed: u,
                  children: [z, j],
              });
    };
