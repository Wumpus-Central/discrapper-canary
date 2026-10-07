t.d(n, { Ay: () => ey, SZ: () => ej, rP: () => eT });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(284009),
    r = t.n(o),
    c = t(202091),
    u = t(17928),
    d = t(554146),
    A = t(922016),
    m = t(844222),
    h = t(717421),
    C = t(827343),
    p = t(730852),
    x = t(401843),
    g = t(820284),
    f = t(933958),
    E = t(967812),
    I = t(793574),
    v = t(688810),
    j = t(198052),
    T = t(829773),
    N = t(329072),
    _ = t(183184),
    b = t(384059),
    O = t(480890),
    y = t(379848),
    S = t(643501),
    R = t(857253),
    D = t(652896),
    L = t(880144),
    M = t(338771),
    P = t(558076),
    k = t(360729),
    U = t(508654),
    G = t(984624),
    V = t(394412),
    B = t(267102),
    H = t(625075),
    w = t(526292),
    Y = t(396495),
    F = t(123973),
    X = t(447404),
    K = t(246356),
    z = t(401685),
    W = t(710801),
    J = t(496841),
    q = t(383831),
    Q = t(905216),
    $ = t(577062),
    Z = t(533978),
    ee = t(958449),
    en = t(970636),
    et = t(616356),
    el = t(470710),
    ei = t(192820),
    ea = t(309010),
    es = t(287809),
    eo = t(151476),
    er = t(405018),
    ec = t(704877),
    eu = t(173660),
    ed = t(543274),
    eA = t(579153),
    em = t(848362),
    eh = t(222692),
    eC = t(702904),
    ep = t(471993),
    ex = t(442353),
    eg = t(652215),
    ef = t(806931),
    eE = t(49999),
    eI = t(731854),
    ev = t(843395);
function ej(e, n) {
    ei.Ay.isVideoEnabled() !== e && ((0, b.X)(I.A.VOICE_CONTROL_TRAY, b.O.CAMERA, e), e ? (0, ex.A)(t, n) : t());
    function t() {
        return C.default.setVideoEnabled(e);
    }
}
function eT(e) {
    let {
            channel: n,
            currentUser: t,
            exitFullScreen: a,
            canGoLive: s,
            hasPermission: o,
            videoBlocked: r = !1,
            disabled: c,
        } = e,
        { parentAnalyticsLocation: m, analyticsLocations: h } = (0, v.Ay)(),
        C = (0, B.Us)(),
        p = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()),
        x = p.find((e) => e.ownerId === t.id),
        g = i.useRef(null),
        f = i.useRef(null),
        E = n.getGuildId(),
        I = i.useCallback(() => {
            if ((a?.(), !s)) return (0, eC.A)();
            (0, ep.A)(E, n.id, h);
        }, [E, n.id, s, a, h]),
        j = (0, w.k0)(),
        [T, N] = i.useState(!1);
    if (!(0, u.bG)([ei.Ay], () => ei.Ay.supports(eI.O5.VIDEO))) return null;
    function _() {
        ((0, b.X)(m, b.O.STREAM, !0), s) ? I() : (0, eC.A)();
    }
    function O() {
        ((0, b.X)(m, b.O.STREAM, !1), (0, M.A)(x));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (function () {
                if (j && 0 === p.length)
                    return (0, l.jsx)(y.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    N(!0),
                                    (0, l.jsx)(Y.b, {
                                        buttonRef: g,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            (t(eE.i.USER_DISMISS), N(!1));
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(X.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(K.A, {
                            children: (0, l.jsx)(em.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != x ? [x] : [],
                                handleGoLive: I,
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
                                    a = null != x;
                                return (0, l.jsx)(ee.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: c || !o,
                                    className: ev.uH,
                                    hasPermission: o,
                                    streamActive: null != x,
                                    videoBlocked: r,
                                    isSelfStream: !0,
                                    onPopoutClick: a
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: T,
                                    buttonRef: g,
                                    onClick: null != x ? O : _,
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
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: a } = e,
        s = n.getGuildId();
    return (0, E.A)(s, n.id)
        ? (0, l.jsx)("div", {
              className: ev.UD,
              children: (0, l.jsx)(ed.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: a }),
          })
        : null;
}
let e_ = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: a, connectedEmbeddedActivity: s } = e,
        { parentAnalyticsLocation: o } = (0, v.Ay)(),
        r = (0, u.bG)([j.A], () => j.A.getSelectedParticipant(a.id)),
        { reducedMotion: d } = i.useContext(m.C),
        [C, g] = i.useState(!1),
        f = r?.id,
        E = (0, u.bG)([et.A], () => (null != f ? et.A.getActiveStreamForStreamKey(f) : null), [f]),
        I = r?.type === ef.lp.STREAM && null != E && E.ownerId !== n?.id,
        T = (0, u.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(a.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        N = (0, u.bG)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(a.id).some((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        _ = (0, u.bG)([P.A], () => P.A.isVisible(a.id)),
        { enabled: O } = (0, k.mf)({ guildId: a.guild_id, location: "CenterControlTray" }),
        y = N && _ && O,
        S = (0, U.Qs)(a.id),
        R = i.useRef(null),
        L = i.useCallback(
            () =>
                r?.type === ef.lp.ACTIVITY && r.applicationId === s?.applicationId
                    ? "ACTIVITY"
                    : I || y
                      ? "STREAM"
                      : null != S
                        ? "EVENT"
                        : "CALL",
            [r, s?.applicationId, I, y, S],
        ),
        [M, V] = i.useState(L()),
        B = (0, h.z)(
            {
                opacity: C ? 0.2 : 1,
                transform: C && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: C ? 600 : 1e3, friction: 45, precision: 0.01, clamp: C },
                onRest: () => {
                    (V(L()), g(!1));
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        L() !== M && g(!0);
    }, [M, L]);
    let H = i.useCallback(() => {
        if (null != E) (0, x.vN)((0, D._z)(E));
        else for (let e of T) (0, x.vN)((0, D._z)(e));
    }, [T, E]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: R,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(em.A, {
                channel: a,
                currentUser: n,
                activeStreams: T,
                handleGoLive: eg.FXj,
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
                    switch (M) {
                        case "ACTIVITY":
                            if (null == r || null == n || r.type !== ef.lp.ACTIVITY || null == s) return;
                            return (0, l.jsx)(q.A, {
                                ...c,
                                applicationId: r.applicationId,
                                color: "disconnect",
                                location: s.location,
                                onPopoutClick: T.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)(ee.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, b.X)(o, b.O.STOP_WATCHING), H());
                                },
                                onPopoutClick: T.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, l.jsx)(Q.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, b.X)(o, b.O.DISCONNECT), t?.());
                                },
                                onPopoutClick: T.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(G.A, {
                                channelId: a.id,
                                onClick: () => {
                                    ((0, b.X)(o, b.O.DISCONNECT), p.default.disconnect(), t?.());
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eb(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: a, videoBlocked: s = !1, currentUser: o } = e,
        r = (0, B.Us)(),
        { parentAnalyticsLocation: c } = (0, v.Ay)(),
        { reachedLimit: d, limit: A } = (0, er.A)(n),
        m = i.useCallback(() => {
            ((0, b.X)(c, b.O.JOIN_VIDEO_CALL),
                (0, ex.A)(function () {
                    return p.default.selectVoiceChannel(n.id, !0);
                }, r));
        }, [n.id, r, c]),
        h = i.useCallback(() => {
            t || s ? (0, eh.A)() : m();
        }, [t, s, m]),
        C = (0, u.bG)([el.A], () => {
            let e = el.A.getCall(n.id);
            return e?.ringing.includes(o.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: ev.iE,
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
                videoBlocked: s,
                hasPermission: a,
                onCameraUnavailable: h,
                className: ev.uH,
                onChange: m,
            }),
            (0, l.jsx)(J.A, { centerButton: !0, color: "join", channel: n, className: ev.uH }),
            C ? (0, l.jsx)(W.A, { color: "disconnect", channel: n, className: ev.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eO(e) {
    return (0, O.s)(e, I.A.VOICE_CONTROL_TRAY, { entrypoint: ef.GK.CARET });
}
let ey = function (e) {
    let { channel: n, className: t, onDisconnectCall: a, exitFullScreen: o, idleProps: c } = e,
        d = (0, z.Bx)(),
        m = i.useRef(null),
        [h, C] = i.useState(void 0),
        p = (0, u.bG)([es.default], () => {
            let e = es.default.getCurrentUser();
            return (r()(null != e, "CenterControlTray: currentUser cannot be undefined"), e);
        }),
        { cameraUnavailable: x, enabled: E } = (0, eo.A)(),
        j = !H.k.useConfig({ location: "CenterControlTray" }).videoEnabled,
        b = (0, ec.A)(n),
        { suppress: O, selfMute: y, mute: D } = (0, eu.A)(n),
        { canGoLive: M } = (0, u.cf)([ei.Ay], () => ({ canGoLive: (0, L.A)(ei.Ay) })),
        P = (0, R.A)(),
        k = (0, u.bG)([S.default], () => null != S.default.getAwaitingRemoteSessionInfo()),
        U = null != P,
        G = (0, u.bG)([ea.Ay], () => (P?.channelId ?? ea.Ay.getVoiceChannelId()) === n.id),
        w = (0, u.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: Y, limit: X } = (0, er.A)(n),
        { analyticsLocations: W } = (0, v.Ay)(I.A.VOICE_CONTROL_TRAY),
        J = (0, F.Ay)(n),
        q = i.useRef(null),
        Q = i.useRef(null),
        ee = (0, B.Us)();
    return G
        ? (0, l.jsx)(v.f5, {
              value: W,
              children: (0, l.jsxs)(g.A, {
                  section: eg.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: ev.rt, children: (0, l.jsx)(V.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: m,
                          className: s()(ev.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: ev.qi,
                                  children: [
                                      (0, l.jsx)(A.Y, {
                                          targetElementRef: q,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, l.jsx)(T.A, {
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
                                              return (0, l.jsxs)(K.A, { children: [t, " "] });
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
                                                  onPopoutClick: U ? null : t,
                                                  selfMute: y,
                                                  serverMute: D,
                                                  suppress: O,
                                                  popoutOpen: i,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, _.A)(D, O, eg.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !U &&
                                          (0, l.jsx)(A.Y, {
                                              targetElementRef: Q,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, l.jsx)(K.A, {
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
                                                      enabled: E,
                                                      cameraUnavailable: x,
                                                      videoBlocked: j,
                                                      onChange: ej,
                                                      onCameraUnavailable: eh.A,
                                                      channelLimitReached: Y,
                                                      channelLimit: X,
                                                      popoutOpen: i,
                                                      onPopoutClick: x ? null : t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < z.vs.MINIMAL
                                  ? (0, l.jsxs)("div", {
                                        className: ev.qi,
                                        children: [
                                            !U &&
                                                (0, l.jsx)(eT, {
                                                    channel: n,
                                                    currentUser: p,
                                                    exitFullScreen: o,
                                                    canGoLive: M,
                                                    hasPermission: b,
                                                    videoBlocked: j,
                                                }),
                                            !U &&
                                                (0, l.jsx)(eN, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            J &&
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
                                                remoteMode: U,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(e_, {
                                  connectedEmbeddedActivity: w,
                                  currentUser: p,
                                  channel: n,
                                  onDisconnectCall: a,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(v.f5, {
              value: W,
              children: (0, l.jsx)(eb, {
                  channel: n,
                  cameraUnavailable: x,
                  hasCameraPermission: b,
                  videoBlocked: j,
                  currentUser: p,
              }),
          });
};
