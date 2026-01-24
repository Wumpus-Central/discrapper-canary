n.d(t, {
    A: () => V,
}),
    n(896048),
    n(667532),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(451988),
    c = n(717558),
    u = n(933958),
    d = n(627363),
    p = n(429913),
    h = n(313961),
    f = n(532622),
    g = n(140547),
    m = n(242919),
    b = n(7054),
    A = n(220995),
    y = n(582904),
    _ = n(551826),
    O = n(159426),
    j = n(25528),
    v = n(530804),
    x = n(481947),
    E = n(616356),
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
    k = n(31408),
    G = n(50314);
let U = l.memo((e) => {
    var t, n, l, i;
    let { mute: s, deaf: o, user: A, channel: y, sessionId: x, nick: N } = e,
        T = A.id,
        G = (0, a.bG)([C.default], () => C.default.getId() === T, [T]),
        [U, B, V] = (0, a.yK)(
            [I.A],
            () =>
                G
                    ? [!I.A.isSupported() || I.A.isSelfMute() || I.A.isSelfMutedTemporarily(), I.A.isSelfDeaf(), !1]
                    : [!I.A.isSupported() || I.A.isLocalMute(T), !1, I.A.isLocalVideoDisabled(T)],
            [G, T],
        ),
        F = (0, a.bG)([w.A], () => w.A.isPrioritySpeaker(T)),
        H = (0, c.A)({
            userId: T,
            checkSoundSharing: !0,
        }),
        K = (0, a.bG)([w.A], () => w.A.isCurrentUserPTTLatched()),
        W = G && K,
        z = (0, a.bG)([S.Ay], () => S.Ay.isGuestOrLurker(y.guild_id, T)),
        Y = (0, a.bG)([h.A], () => h.A.getGuildRingingUsers(y.id).has(T)),
        q = (0, a.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(y.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(T);
                }),
            [T, y.id],
        ),
        X = (0, p.A)(null != q ? [q.applicationId] : []),
        J = (0, j.A)(T, y.guild_id)[0],
        Q = null != (t = (0, d.YY)(null == J ? void 0 : J.application_id).data) ? t : void 0,
        [Z, $] = (0, a.yK)(
            [E.A],
            () => [E.A.getStreamForUser(T, y.getGuildId()), E.A.getActiveStreamForUser(T, y.getGuildId())],
            [y, T],
        ),
        ee = (0, a.bG)([P.A], () => P.A.getSessionById(x)),
        et = D.Ay.useName(A),
        en = (0, a.bG)([R.A], () => R.A.getVoicePlatformForChannel(y.id, T), [y.id, T]),
        { enableHangStatus: er } = (0, g.$j)({
            guildId: y.guild_id,
            location: "VoiceUsers",
        }),
        el = (0, f.Ay)(y, !0, A),
        ei = (0, a.bG)([m.A], () => (G ? m.A.getHangStatusActivity() : null), [G]),
        es = (0, b.h)(T),
        ea = (0, v.uy)(y.id, T),
        { enableVCStatusIcons: eo, enableRequestToStream: ec } = O.m.useExperiment(
            {
                guildId: y.guild_id,
                location: "VoiceUsers",
            },
            {
                autoTrackExposure: (null == J ? void 0 : J.session_id) != null,
            },
        );
    return (0, r.jsx)(_.A, {
        shakeLocation: k.uD.VOICE_USER,
        isShaking: H,
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
                    nick: null != N ? N : et,
                    canDrag: e.canDrag && !z,
                    disconnected: ea,
                    otherClientSessionType: null == ee || null == (n = ee.clientInfo) ? void 0 : n.os,
                    voicePlatform: en,
                    localMute: U && !G,
                    localVideoDisabled: V,
                    mute: s || U,
                    deaf: o || B,
                    speaking: H,
                    latched: W,
                    ringing: Y,
                    priority: F,
                    embeddedApplication: X[0],
                    isStreaming: null != Z && Z.channelId === y.id,
                    isWatching: null != $ && $.state !== L.XYD.ENDED,
                    isGuest: z,
                    isSelf: G,
                    requestToStreamActivity: ec ? J : void 0,
                    application: (eo || er) && (null == J ? void 0 : J.session_id) != null ? Q : void 0,
                    showHangStatus: el && er && (G || null != es),
                    hangStatusActivity: G ? ei : es,
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
let B = [],
    V = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: n = !0,
                channel: i,
                voiceStates: c,
                collapsed: u,
                collapsedMax: d = 6,
                tabIndex: f,
                location: g,
                numAudience: m,
                withGuildIcon: b = !1,
                className: _,
                children: O,
                isThread: j = !1,
            } = e,
            [E, S] = l.useState(null),
            [I, P] = l.useState(!1),
            w = l.useRef(null),
            R = (0, v.$n)(i.id, null != c ? c : B),
            { shouldShow: D, dismiss: k } = (0, y.Z0)(i, {
                collapsed: u,
            }),
            V = l.useRef(
                new o.J_(50, () => {
                    S(w.current), (w.current = null);
                }),
            ),
            F = l.useRef(
                new o.J_(175, () => {
                    S(null);
                }),
            ),
            H = l.useCallback(
                (e) => {
                    t && (P(!0), F.current.cancel(), (w.current = e), V.current.delay());
                },
                [t],
            ),
            K = l.useCallback(
                (e) => {
                    t && (V.current.cancel(), (w.current = null), P(!1), F.current.delay());
                },
                [t],
            ),
            W = (0, a.yK)([T.A], () => {
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
        (0, p.A)(W);
        let z = (() => {
            if (null == R || 0 === R.length) return null;
            let e = u && R.length > d + 1 ? R.slice(0, d) : R,
                t = h.A.getGuildRingingUsers(i.id),
                l = e.map((e) => {
                    var l;
                    let { user: s, nick: a, voiceState: o } = e,
                        c = t.has(s.id);
                    return (0, r.jsx)(
                        U,
                        {
                            user: s,
                            nick: a,
                            isSelfOnOtherClient: C.default.getId() === s.id && o.sessionId !== C.default.getSessionId(),
                            mute: o.isVoiceMuted(),
                            deaf: o.isVoiceDeafened(),
                            video: o.selfVideo,
                            serverMute: o.mute,
                            serverDeaf: o.deaf,
                            sessionId: null != (l = o.sessionId) ? l : "",
                            channel: i,
                            collapsed: u,
                            canDrag: n && N.A.can(L.xBc.MOVE_MEMBERS, i),
                            showPreview: H,
                            hidePreview: K,
                            previewIsOpen: I,
                            shouldShowHoverPopout: E === s.id,
                            tabIndex: f,
                            location: g,
                        },
                        "voice-user-".concat(s.id, "-").concat(c),
                    );
                });
            return (
                D &&
                    l.unshift(
                        (0, r.jsx)(
                            A.p,
                            {
                                channel: i,
                                onClose: k,
                            },
                            "voice-invite-suggestions-button",
                        ),
                    ),
                null != m && m > 0
                    ? l.push(
                          (0, r.jsx)(M.aI, {
                              collapsed: u,
                              numAudience: m,
                          }),
                      )
                    : u &&
                      R.length > d + 1 &&
                      l.push(
                          (0, r.jsx)(M.LR, {
                              numUsers: R.length - d,
                          }),
                      ),
                l
            );
        })();
        return null == z && null == O
            ? null
            : (0, r.jsxs)(x.Wr, {
                  className: s()(_, G.p_, {
                      [G.yZ]: u,
                      [G.lY]: b,
                      [G.fT]: j,
                  }),
                  collapsed: u,
                  children: [z, O],
              });
    };
