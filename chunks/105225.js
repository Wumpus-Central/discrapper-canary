t.d(n, { Ay: () => eS, SZ: () => eT, rP: () => ej });
var l = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    o = t.n(r),
    c = t(128954),
    u = t(17928),
    d = t(554146),
    A = t(922016),
    m = t(844222),
    h = t(717421),
    C = t(827343),
    p = t(730852),
    g = t(401843),
    E = t(820284),
    f = t(933958),
    x = t(967812),
    v = t(793574),
    I = t(688810),
    T = t(198052),
    j = t(829773),
    N = t(329072),
    _ = t(183184),
    b = t(384059),
    O = t(480890),
    S = t(379848),
    y = t(643501),
    R = t(857253),
    M = t(652896),
    L = t(880144),
    D = t(338771),
    P = t(558076),
    k = t(360729),
    G = t(508654),
    U = t(984624),
    V = t(394412),
    B = t(267102),
    H = t(625075),
    w = t(526292),
    Y = t(396495),
    F = t(123973),
    K = t(447404),
    X = t(246356),
    z = t(401685),
    J = t(710801),
    W = t(496841),
    q = t(383831),
    Q = t(905216),
    $ = t(577062),
    Z = t(533978),
    ee = t(958449),
    en = t(970636),
    et = t(616356),
    el = t(470710),
    ei = t(544576),
    es = t(309010),
    ea = t(287809),
    er = t(151476),
    eo = t(405018),
    ec = t(704877),
    eu = t(173660),
    ed = t(543274),
    eA = t(579153),
    em = t(848362),
    eh = t(222692),
    eC = t(702904),
    ep = t(471993),
    eg = t(442353),
    eE = t(652215),
    ef = t(806931),
    ex = t(49999),
    ev = t(731854),
    eI = t(843395);
function eT(e, n) {
    ei.Ay.isVideoEnabled() !== e && ((0, b.X)(v.A.VOICE_CONTROL_TRAY, b.O.CAMERA, e), e ? (0, eg.A)(t, n) : t());
    function t() {
        return C.A.setVideoEnabled(e);
    }
}
function ej(e) {
    let {
            channel: n,
            currentUser: t,
            exitFullScreen: s,
            canGoLive: a,
            hasPermission: r,
            videoBlocked: o = !1,
            disabled: c,
        } = e,
        { parentAnalyticsLocation: m, analyticsLocations: h } = (0, I.Ay)(),
        C = (0, B.Us)(),
        p = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()),
        g = p.find((e) => e.ownerId === t.id),
        E = i.useRef(null),
        f = i.useRef(null),
        x = n.getGuildId(),
        v = i.useCallback(() => {
            if ((s?.(), !a)) return (0, eC.A)();
            (0, ep.A)(x, n.id, h);
        }, [x, n.id, a, s, h]),
        T = (0, w.k0)(),
        [j, N] = i.useState(!1);
    if (!(0, u.bG)([ei.Ay], () => ei.Ay.supports(ev.O5.VIDEO))) return null;
    function _() {
        ((0, b.X)(m, b.O.STREAM, !0), a) ? v() : (0, eC.A)();
    }
    function O() {
        ((0, b.X)(m, b.O.STREAM, !1), (0, D.A)(g));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (function () {
                if (T && 0 === p.length)
                    return (0, l.jsx)(S.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    N(!0),
                                    (0, l.jsx)(Y.b, {
                                        buttonRef: E,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            (t(ex.i.USER_DISMISS), N(!1));
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(K.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(X.A, {
                            children: (0, l.jsx)(em.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: v,
                                appContext: C,
                                onClose: i,
                                onInteraction: eO("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: A.Y.Animation.FADE,
                    children: (e, n) => {
                        let { ...t } = e,
                            { isShown: i } = n;
                        return (0, l.jsx)("div", {
                            ref: f,
                            children: (function (e, n) {
                                let { onClick: t, ...i } = e ?? { onClick: void 0 },
                                    s = null != g;
                                return (0, l.jsx)(ee.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: c || !r,
                                    className: eI.uH,
                                    hasPermission: r,
                                    streamActive: null != g,
                                    videoBlocked: o,
                                    isSelfStream: !0,
                                    onPopoutClick: s
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: j,
                                    buttonRef: E,
                                    onClick: null != g ? O : _,
                                });
                            })(t, i),
                        });
                    },
                }),
            }),
        ],
    });
}
function eN(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s } = e,
        a = n.getGuildId();
    return (0, x.A)(a, n.id)
        ? (0, l.jsx)("div", {
              className: eI.UD,
              children: (0, l.jsx)(ed.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let e_ = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, I.Ay)(),
        o = (0, u.bG)([T.A], () => T.A.getSelectedParticipant(s.id)),
        { reducedMotion: d } = i.useContext(m.C),
        [C, E] = i.useState(!1),
        f = o?.id,
        x = (0, u.bG)([et.A], () => (null != f ? et.A.getActiveStreamForStreamKey(f) : null), [f]),
        v = o?.type === ef.lp.STREAM && null != x && x.ownerId !== n?.id,
        j = (0, u.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        N = (0, u.bG)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(s.id).some((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        _ = (0, u.bG)([P.A], () => P.A.isVisible(s.id)),
        { enabled: O } = (0, k.mf)({ guildId: s.guild_id, location: "CenterControlTray" }),
        S = N && _ && O,
        y = (0, G.Qs)(s.id),
        R = i.useRef(null),
        L = i.useCallback(
            () =>
                o?.type === ef.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : v || S
                      ? "STREAM"
                      : null != y
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, v, S, y],
        ),
        [D, V] = i.useState(L()),
        B = (0, h.z)(
            {
                opacity: C ? 0.2 : 1,
                transform: C && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: C ? 600 : 1e3, friction: 45, precision: 0.01, clamp: C },
                onRest: () => {
                    (V(L()), E(!1));
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        L() !== D && E(!0);
    }, [D, L]);
    let H = i.useCallback(() => {
        if (null != x) (0, g.vN)((0, M._z)(x));
        else for (let e of j) (0, g.vN)((0, M._z)(e));
    }, [j, x]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: R,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(em.A, {
                channel: s,
                currentUser: n,
                activeStreams: j,
                handleGoLive: eE.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: eO("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: A.Y.Animation.FADE,
        children: (e, i) => {
            let { onClick: u } = e,
                { isShown: d } = i;
            return (0, l.jsx)(c.animated.div, {
                style: B,
                ref: R,
                children: (function (e, i) {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (D) {
                        case "ACTIVITY":
                            if (null == o || null == n || o.type !== ef.lp.ACTIVITY || null == a) return;
                            return (0, l.jsx)(q.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: j.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)(ee.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, b.X)(r, b.O.STOP_WATCHING), H());
                                },
                                onPopoutClick: j.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, l.jsx)(Q.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, b.X)(r, b.O.DISCONNECT), t?.());
                                },
                                onPopoutClick: j.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(U.A, {
                                channelId: s.id,
                                onClick: () => {
                                    ((0, b.X)(r, b.O.DISCONNECT), p.default.disconnect(), t?.());
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eb(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: s, videoBlocked: a = !1, currentUser: r } = e,
        o = (0, B.Us)(),
        { parentAnalyticsLocation: c } = (0, I.Ay)(),
        { reachedLimit: d, limit: A } = (0, eo.A)(n),
        m = i.useCallback(() => {
            ((0, b.X)(c, b.O.JOIN_VIDEO_CALL),
                (0, eg.A)(function () {
                    return p.default.selectVoiceChannel(n.id, !0);
                }, o));
        }, [n.id, o, c]),
        h = i.useCallback(() => {
            t || a ? (0, eh.A)() : m();
        }, [t, a, m]),
        C = (0, u.bG)([el.A], () => {
            let e = el.A.getCall(n.id);
            return e?.ringing.includes(r.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: eI.iE,
        children: [
            (0, l.jsx)(en.A, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: d,
                channelLimit: A,
                channel: n,
                cameraUnavailable: t,
                videoBlocked: a,
                hasPermission: s,
                onCameraUnavailable: h,
                className: eI.uH,
                onChange: m,
            }),
            (0, l.jsx)(W.A, { centerButton: !0, color: "join", channel: n, className: eI.uH }),
            C ? (0, l.jsx)(J.A, { color: "disconnect", channel: n, className: eI.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eO(e) {
    return (0, O.s)(e, v.A.VOICE_CONTROL_TRAY, { entrypoint: ef.GK.CARET });
}
let eS = function (e) {
    let { channel: n, className: t, onDisconnectCall: s, exitFullScreen: r, idleProps: c } = e,
        d = (0, z.Bx)(),
        m = i.useRef(null),
        [h, C] = i.useState(void 0),
        p = (0, u.bG)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return (o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e);
        }),
        { cameraUnavailable: g, enabled: x } = (0, er.A)(),
        T = !H.k.useConfig({ location: "CenterControlTray" }).videoEnabled,
        b = (0, ec.A)(n),
        { suppress: O, selfMute: S, mute: M } = (0, eu.A)(n),
        { canGoLive: D } = (0, u.cf)([ei.Ay], () => ({ canGoLive: (0, L.A)(ei.Ay) })),
        P = (0, R.A)(),
        k = (0, u.bG)([y.default], () => null != y.default.getAwaitingRemoteSessionInfo()),
        G = null != P,
        U = (0, u.bG)([es.Ay], () => (P?.channelId ?? es.Ay.getVoiceChannelId()) === n.id),
        w = (0, u.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: Y, limit: K } = (0, eo.A)(n),
        { analyticsLocations: J } = (0, I.Ay)(v.A.VOICE_CONTROL_TRAY),
        W = (0, F.Ay)(n),
        q = i.useRef(null),
        Q = i.useRef(null),
        ee = (0, B.Us)();
    return U
        ? (0, l.jsx)(I.f5, {
              value: J,
              children: (0, l.jsxs)(E.A, {
                  section: eE.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: eI.rt, children: (0, l.jsx)(V.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: m,
                          className: a()(eI.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: eI.qi,
                                  children: [
                                      (0, l.jsx)(A.Y, {
                                          targetElementRef: q,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, l.jsx)(j.A, {
                                                      onInteraction: eO("AudioDeviceMenu"),
                                                      onClose: n,
                                                      maybeRenderPTTCheckbox: !0,
                                                      renderInputProfiles: !0,
                                                      renderInputDevices: !0,
                                                      renderInputVolume: !0,
                                                      maybeRenderInputMeter: !0,
                                                      renderDeafenCheckbox: !0,
                                                      renderOutputDevices: !0,
                                                      renderOutputVolume: !0,
                                                      maybeRenderSpatialAudioCheckbox: !0,
                                                      renderSettingsButton: !0,
                                                      appContext: ee,
                                                  });
                                              return (0, l.jsxs)(X.A, { children: [t, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: A.Y.Animation.FADE,
                                          spacing: 8,
                                          children: (e, n) => {
                                              let { onClick: t } = e,
                                                  { isShown: i } = n;
                                              return (0, l.jsx)($.A, {
                                                  ref: q,
                                                  centerButton: !0,
                                                  onPopoutClick: G ? null : t,
                                                  selfMute: S,
                                                  serverMute: M,
                                                  suppress: O,
                                                  popoutOpen: i,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, _.A)(M, O, eE.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !G &&
                                          (0, l.jsx)(A.Y, {
                                              targetElementRef: Q,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, l.jsx)(X.A, {
                                                      children: (0, l.jsx)(N.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: eO("VideoDeviceMenu"),
                                                          appContext: ee,
                                                      }),
                                                  });
                                              },
                                              position: "top",
                                              align: "right",
                                              spacing: 16,
                                              animation: A.Y.Animation.FADE,
                                              children: (e, n) => {
                                                  let { onClick: t } = e,
                                                      { isShown: i } = n;
                                                  return (0, l.jsx)(en.A, {
                                                      ref: Q,
                                                      centerButton: !0,
                                                      hasPermission: b,
                                                      enabled: x,
                                                      cameraUnavailable: g,
                                                      videoBlocked: T,
                                                      onChange: eT,
                                                      onCameraUnavailable: eh.A,
                                                      channelLimitReached: Y,
                                                      channelLimit: K,
                                                      popoutOpen: i,
                                                      onPopoutClick: g ? null : t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < z.vs.MINIMAL
                                  ? (0, l.jsxs)("div", {
                                        className: eI.qi,
                                        children: [
                                            !G &&
                                                (0, l.jsx)(ej, {
                                                    channel: n,
                                                    currentUser: p,
                                                    exitFullScreen: r,
                                                    canGoLive: D,
                                                    hasPermission: b,
                                                    videoBlocked: T,
                                                }),
                                            !G &&
                                                (0, l.jsx)(eN, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            W &&
                                                (0, l.jsx)(Z.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                    idle: c?.idle ?? !0,
                                                }),
                                            (0, l.jsx)(eA.A, {
                                                channel: n,
                                                whichPopoutIsOpen: h,
                                                setWhichPopoutIsOpen: C,
                                                remoteMode: G,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(e_, {
                                  connectedEmbeddedActivity: w,
                                  currentUser: p,
                                  channel: n,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(I.f5, {
              value: J,
              children: (0, l.jsx)(eb, {
                  channel: n,
                  cameraUnavailable: g,
                  hasCameraPermission: b,
                  videoBlocked: T,
                  currentUser: p,
              }),
          });
};
