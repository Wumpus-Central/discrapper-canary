t.d(n, { Ay: () => ey, SZ: () => eT, rP: () => ej });
var i = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
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
    T = t(198052),
    j = t(829773),
    N = t(329072),
    _ = t(183184),
    O = t(384059),
    b = t(480890),
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
    w = t(625075),
    H = t(526292),
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
    ei = t(470710),
    el = t(544576),
    es = t(309010),
    ea = t(287809),
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
function eT(e, n) {
    el.Ay.isVideoEnabled() !== e && ((0, O.X)(I.A.VOICE_CONTROL_TRAY, O.O.CAMERA, e), e ? (0, ex.A)(t, n) : t());
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
            hasPermission: o,
            videoBlocked: r = !1,
            disabled: c,
        } = e,
        { parentAnalyticsLocation: m, analyticsLocations: h } = (0, v.Ay)(),
        C = (0, B.Us)(),
        p = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()),
        x = p.find((e) => e.ownerId === t.id),
        g = l.useRef(null),
        f = l.useRef(null),
        E = n.getGuildId(),
        I = l.useCallback(() => {
            if ((s?.(), !a)) return (0, eC.A)();
            (0, ep.A)(E, n.id, h);
        }, [E, n.id, a, s, h]),
        T = (0, H.k0)(),
        [j, N] = l.useState(!1);
    if (!(0, u.bG)([el.Ay], () => el.Ay.supports(eI.O5.VIDEO))) return null;
    function _() {
        ((0, O.X)(m, O.O.STREAM, !0), a) ? I() : (0, eC.A)();
    }
    function b() {
        ((0, O.X)(m, O.O.STREAM, !1), (0, M.A)(x));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (function () {
                if (T && 0 === p.length)
                    return (0, i.jsx)(y.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    N(!0),
                                    (0, i.jsx)(Y.b, {
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
            (0, i.jsx)(X.A, {
                children: (0, i.jsx)(A.Y, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(K.A, {
                            children: (0, i.jsx)(em.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != x ? [x] : [],
                                handleGoLive: I,
                                appContext: C,
                                onClose: l,
                                onInteraction: eb("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: A.Y.Animation.FADE,
                    children: (e, n) => {
                        let { ...t } = e,
                            { isShown: l } = n;
                        return (0, i.jsx)("div", {
                            ref: f,
                            children: (function (e, n) {
                                let { onClick: t, ...l } = e ?? { onClick: void 0 },
                                    s = null != x;
                                return (0, i.jsx)(ee.h, {
                                    ...l,
                                    centerButton: !0,
                                    disabled: c || !o,
                                    className: ev.uH,
                                    hasPermission: o,
                                    streamActive: null != x,
                                    videoBlocked: r,
                                    isSelfStream: !0,
                                    onPopoutClick: s
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: j,
                                    buttonRef: g,
                                    onClick: null != x ? b : _,
                                });
                            })(t, l),
                        });
                    },
                }),
            }),
        ],
    });
}
function eN(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s } = e,
        a = n.getGuildId();
    return (0, E.A)(a, n.id)
        ? (0, i.jsx)("div", {
              className: ev.UD,
              children: (0, i.jsx)(ed.K, { channel: n, idle: t, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let e_ = l.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: o } = (0, v.Ay)(),
        r = (0, u.bG)([T.A], () => T.A.getSelectedParticipant(s.id)),
        { reducedMotion: d } = l.useContext(m.C),
        [C, g] = l.useState(!1),
        f = r?.id,
        E = (0, u.bG)([et.A], () => (null != f ? et.A.getActiveStreamForStreamKey(f) : null), [f]),
        I = r?.type === ef.lp.STREAM && null != E && E.ownerId !== n?.id,
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
        { enabled: b } = (0, k.mf)({ guildId: s.guild_id, location: "CenterControlTray" }),
        y = N && _ && b,
        S = (0, U.Qs)(s.id),
        R = l.useRef(null),
        L = l.useCallback(
            () =>
                r?.type === ef.lp.ACTIVITY && r.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : I || y
                      ? "STREAM"
                      : null != S
                        ? "EVENT"
                        : "CALL",
            [r, a?.applicationId, I, y, S],
        ),
        [M, V] = l.useState(L()),
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
    l.useEffect(() => {
        L() !== M && g(!0);
    }, [M, L]);
    let w = l.useCallback(() => {
        if (null != E) (0, x.vN)((0, D._z)(E));
        else for (let e of j) (0, x.vN)((0, D._z)(e));
    }, [j, E]);
    return (0, i.jsx)(A.Y, {
        targetElementRef: R,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(em.A, {
                channel: s,
                currentUser: n,
                activeStreams: j,
                handleGoLive: eg.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: eb("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: A.Y.Animation.FADE,
        children: (e, l) => {
            let { onClick: u } = e,
                { isShown: d } = l;
            return (0, i.jsx)(c.animated.div, {
                style: B,
                ref: R,
                children: (function (e, l) {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (M) {
                        case "ACTIVITY":
                            if (null == r || null == n || r.type !== ef.lp.ACTIVITY || null == a) return;
                            return (0, i.jsx)(q.A, {
                                ...c,
                                applicationId: r.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: j.length > 0 ? l : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)(ee.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, O.X)(o, O.O.STOP_WATCHING), w());
                                },
                                onPopoutClick: j.length > 1 ? l : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, i.jsx)(Q.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, O.X)(o, O.O.DISCONNECT), t?.());
                                },
                                onPopoutClick: j.length > 0 ? l : null,
                            });
                        case "EVENT":
                            return (0, i.jsx)(G.A, {
                                channelId: s.id,
                                onClick: () => {
                                    ((0, O.X)(o, O.O.DISCONNECT), p.default.disconnect(), t?.());
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eO(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: s, videoBlocked: a = !1, currentUser: o } = e,
        r = (0, B.Us)(),
        { parentAnalyticsLocation: c } = (0, v.Ay)(),
        { reachedLimit: d, limit: A } = (0, er.A)(n),
        m = l.useCallback(() => {
            ((0, O.X)(c, O.O.JOIN_VIDEO_CALL),
                (0, ex.A)(function () {
                    return p.default.selectVoiceChannel(n.id, !0);
                }, r));
        }, [n.id, r, c]),
        h = l.useCallback(() => {
            t || a ? (0, eh.A)() : m();
        }, [t, a, m]),
        C = (0, u.bG)([ei.A], () => {
            let e = ei.A.getCall(n.id);
            return e?.ringing.includes(o.id) === !0;
        });
    return (0, i.jsxs)("div", {
        className: ev.iE,
        children: [
            (0, i.jsx)(en.A, {
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
                className: ev.uH,
                onChange: m,
            }),
            (0, i.jsx)(J.A, { centerButton: !0, color: "join", channel: n, className: ev.uH }),
            C ? (0, i.jsx)(W.A, { color: "disconnect", channel: n, className: ev.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eb(e) {
    return (0, b.s)(e, I.A.VOICE_CONTROL_TRAY, { entrypoint: ef.GK.CARET });
}
let ey = function (e) {
    let { channel: n, className: t, onDisconnectCall: s, exitFullScreen: o, idleProps: c } = e,
        d = (0, z.Bx)(),
        m = l.useRef(null),
        [h, C] = l.useState(void 0),
        p = (0, u.bG)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return (r()(null != e, "CenterControlTray: currentUser cannot be undefined"), e);
        }),
        { cameraUnavailable: x, enabled: E } = (0, eo.A)(),
        T = !w.k.useConfig({ location: "CenterControlTray" }).videoEnabled,
        O = (0, ec.A)(n),
        { suppress: b, selfMute: y, mute: D } = (0, eu.A)(n),
        { canGoLive: M } = (0, u.cf)([el.Ay], () => ({ canGoLive: (0, L.A)(el.Ay) })),
        P = (0, R.A)(),
        k = (0, u.bG)([S.default], () => null != S.default.getAwaitingRemoteSessionInfo()),
        U = null != P,
        G = (0, u.bG)([es.Ay], () => (P?.channelId ?? es.Ay.getVoiceChannelId()) === n.id),
        H = (0, u.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: Y, limit: X } = (0, er.A)(n),
        { analyticsLocations: W } = (0, v.Ay)(I.A.VOICE_CONTROL_TRAY),
        J = (0, F.Ay)(n),
        q = l.useRef(null),
        Q = l.useRef(null),
        ee = (0, B.Us)();
    return G
        ? (0, i.jsx)(v.f5, {
              value: W,
              children: (0, i.jsxs)(g.A, {
                  section: eg.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", { className: ev.rt, children: (0, i.jsx)(V.A, { channelId: n.id }) }),
                      (0, i.jsxs)("div", {
                          ref: m,
                          className: a()(ev.iE, t),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ev.qi,
                                  children: [
                                      (0, i.jsx)(A.Y, {
                                          targetElementRef: q,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, i.jsx)(j.A, {
                                                      onInteraction: eb("AudioDeviceMenu"),
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
                                              return (0, i.jsxs)(K.A, { children: [t, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: A.Y.Animation.FADE,
                                          spacing: 8,
                                          children: (e, n) => {
                                              let { onClick: t } = e,
                                                  { isShown: l } = n;
                                              return (0, i.jsx)($.A, {
                                                  ref: q,
                                                  centerButton: !0,
                                                  onPopoutClick: U ? null : t,
                                                  selfMute: y,
                                                  serverMute: D,
                                                  suppress: b,
                                                  popoutOpen: l,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, _.A)(D, b, eg.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !U &&
                                          (0, i.jsx)(A.Y, {
                                              targetElementRef: Q,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, i.jsx)(K.A, {
                                                      children: (0, i.jsx)(N.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: eb("VideoDeviceMenu"),
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
                                                      { isShown: l } = n;
                                                  return (0, i.jsx)(en.A, {
                                                      ref: Q,
                                                      centerButton: !0,
                                                      hasPermission: O,
                                                      enabled: E,
                                                      cameraUnavailable: x,
                                                      videoBlocked: T,
                                                      onChange: eT,
                                                      onCameraUnavailable: eh.A,
                                                      channelLimitReached: Y,
                                                      channelLimit: X,
                                                      popoutOpen: l,
                                                      onPopoutClick: x ? null : t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < z.vs.MINIMAL
                                  ? (0, i.jsxs)("div", {
                                        className: ev.qi,
                                        children: [
                                            !U &&
                                                (0, i.jsx)(ej, {
                                                    channel: n,
                                                    currentUser: p,
                                                    exitFullScreen: o,
                                                    canGoLive: M,
                                                    hasPermission: O,
                                                    videoBlocked: T,
                                                }),
                                            !U &&
                                                (0, i.jsx)(eN, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            J &&
                                                (0, i.jsx)(Z.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                    idle: c?.idle ?? !0,
                                                }),
                                            (0, i.jsx)(eA.A, {
                                                channel: n,
                                                whichPopoutIsOpen: h,
                                                setWhichPopoutIsOpen: C,
                                                remoteMode: U,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, i.jsx)(e_, {
                                  connectedEmbeddedActivity: H,
                                  currentUser: p,
                                  channel: n,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(v.f5, {
              value: W,
              children: (0, i.jsx)(eO, {
                  channel: n,
                  cameraUnavailable: x,
                  hasCameraPermission: O,
                  videoBlocked: T,
                  currentUser: p,
              }),
          });
};
