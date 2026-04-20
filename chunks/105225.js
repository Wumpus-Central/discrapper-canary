n.d(t, { Ay: () => eN, SZ: () => eg, rP: () => ef });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(825638),
    c = n(311907),
    u = n(554146),
    h = n(397927),
    A = n(827343),
    _ = n(956793),
    m = n(401843),
    p = n(820284),
    g = n(933958),
    f = n(967812),
    E = n(793574),
    x = n(688810),
    I = n(313961),
    C = n(206018),
    N = n(750765),
    T = n(183184),
    S = n(384059),
    b = n(480890),
    y = n(379848),
    v = n(643501),
    R = n(857253),
    j = n(652896),
    O = n(880144),
    L = n(338771),
    M = n(508654),
    D = n(984624),
    U = n(394412),
    G = n(267102),
    P = n(526292),
    k = n(396495),
    w = n(123973),
    B = n(447404),
    V = n(246356),
    H = n(401685),
    F = n(710801),
    W = n(496841),
    K = n(383831),
    Y = n(905216),
    z = n(577062),
    q = n(533978),
    X = n(958449),
    $ = n(970636),
    J = n(616356),
    Q = n(470710),
    Z = n(430452),
    ee = n(309010),
    et = n(287809),
    en = n(151476),
    ei = n(405018),
    el = n(704877),
    es = n(173660),
    ea = n(543274),
    er = n(579153),
    eo = n(848362),
    ed = n(222692),
    ec = n(702904),
    eu = n(471993),
    eh = n(442353),
    eA = n(652215),
    e_ = n(806931),
    em = n(49999),
    ep = n(56640);
function eg(e, t) {
    if (Z.Ay.isVideoEnabled() === e) return;
    let n = () => A.A.setVideoEnabled(e);
    (0, S.X)(E.A.VOICE_CONTROL_TRAY, S.O.CAMERA, e), e ? (0, eh.A)(n, t) : n();
}
function ef(e) {
    let { channel: t, currentUser: n, exitFullScreen: s, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: d, analyticsLocations: A } = (0, x.Ay)(),
        _ = (0, G.Us)(),
        m = (0, c.yK)([J.A], () => J.A.getAllActiveStreams()),
        p = m.find((e) => e.ownerId === n.id),
        g = l.useRef(null),
        f = l.useRef(null),
        E = t.getGuildId(),
        I = l.useCallback(() => {
            if ((s?.(), !a)) return (0, ec.A)();
            (0, eu.A)(E, t.id, A);
        }, [E, t.id, a, s, A]),
        C = (0, P.k0)(),
        [N, T] = l.useState(!1),
        b = () => {
            ((0, S.X)(d, S.O.STREAM, !0), a) ? I() : (0, ec.A)();
        },
        v = () => {
            (0, S.X)(d, S.O.STREAM, !1), (0, L.A)(p);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (() => {
                if (C && 0 === m.length)
                    return (0, i.jsx)(y.Ay, {
                        contentTypes: [u.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    T(!0),
                                    (0, i.jsx)(k.b, {
                                        buttonRef: g,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(em.i.USER_DISMISS), T(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(B.A, {
                children: (0, i.jsx)(h.YNO, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(V.A, {
                            children: (0, i.jsx)(eo.A, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != p ? [p] : [],
                                handleGoLive: I,
                                appContext: _,
                                onClose: l,
                                onInteraction: eC("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: h.YNO.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: l } = t;
                        return (0, i.jsx)("div", {
                            ref: f,
                            children: ((e, t) => {
                                let { onClick: n, ...l } = e ?? { onClick: void 0 },
                                    s = null != p;
                                return (0, i.jsx)(X.h, {
                                    ...l,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: ep.uH,
                                    hasPermission: r,
                                    streamActive: null != p,
                                    isSelfStream: !0,
                                    onPopoutClick: s
                                        ? function (e) {
                                              n?.(e);
                                          }
                                        : null,
                                    popoutOpen: t,
                                    shouldShowTooltip: !t,
                                    renderNUXHighlight: N,
                                    buttonRef: g,
                                    onClick: null != p ? v : b,
                                });
                            })(n, l),
                        });
                    },
                }),
            }),
        ],
    });
}
function eE(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s } = e,
        a = t.getGuildId();
    return (0, f.A)(a, t.id)
        ? (0, i.jsx)("div", {
              className: ep.UD,
              children: (0, i.jsx)(ea.K, { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let ex = l.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, x.Ay)(),
        o = (0, c.bG)([I.A], () => I.A.getSelectedParticipant(s.id)),
        { reducedMotion: u } = l.useContext(h.CZY),
        [A, p] = l.useState(!1),
        g = o?.id,
        f = (0, c.bG)([J.A], () => (null != g ? J.A.getActiveStreamForStreamKey(g) : null), [g]),
        E = o?.type === e_.lp.STREAM && null != f && f.ownerId !== t?.id,
        C = (0, c.yK)([J.A], () =>
            J.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== t?.id;
            }),
        ),
        N = (0, M.Qs)(s.id),
        T = l.useRef(null),
        b = l.useCallback(
            () =>
                o?.type === e_.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : E
                      ? "STREAM"
                      : null != N
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, E, N],
        ),
        [y, v] = l.useState(b()),
        R = (0, h.zhh)(
            {
                opacity: A ? 0.2 : 1,
                transform: A && !u.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: A ? 600 : 1e3, friction: 45, precision: 0.01, clamp: A },
                onRest: () => {
                    v(b()), p(!1);
                },
            },
            "animate-always",
        );
    l.useEffect(() => {
        b() !== y && p(!0);
    }, [y, b]);
    let O = l.useCallback(() => {
        if (null != f) (0, m.vN)((0, j._z)(f));
        else for (let e of C) (0, m.vN)((0, j._z)(e));
    }, [C, f]);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: T,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(eo.A, {
                channel: s,
                currentUser: t,
                activeStreams: C,
                handleGoLive: eA.FXj,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eC("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: h.YNO.Animation.FADE,
        children: (e, l) => {
            let { onClick: c } = e,
                { isShown: u } = l;
            return (0, i.jsx)(d.animated.div, {
                style: R,
                ref: T,
                children: ((e, l) => {
                    let d = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (y) {
                        case "ACTIVITY":
                            if (null == o || null == t || o.type !== e_.lp.ACTIVITY || null == a) return;
                            return (0, i.jsx)(K.A, {
                                ...d,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: C.length > 0 ? l : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)(X.h, {
                                ...d,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, S.X)(r, S.O.STOP_WATCHING), O();
                                },
                                onPopoutClick: C.length > 1 ? l : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, i.jsx)(Y.A, {
                                ...d,
                                color: "disconnect",
                                onClick: () => {
                                    (0, S.X)(r, S.O.DISCONNECT), n?.();
                                },
                                onPopoutClick: C.length > 0 ? l : null,
                            });
                        case "EVENT":
                            return (0, i.jsx)(D.A, {
                                channelId: s.id,
                                onClick: () => {
                                    (0, S.X)(r, S.O.DISCONNECT), _.default.disconnect(), n?.();
                                },
                            });
                    }
                })(u, c),
            });
        },
    });
});
function eI(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: s, currentUser: a } = e,
        r = (0, G.Us)(),
        { parentAnalyticsLocation: o } = (0, x.Ay)(),
        { reachedLimit: d, limit: u } = (0, ei.A)(t),
        h = l.useCallback(() => {
            (0, S.X)(o, S.O.JOIN_VIDEO_CALL), (0, eh.A)(() => _.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r, o]),
        A = l.useCallback(() => {
            n ? (0, ed.A)() : h();
        }, [n, h]),
        m = (0, c.bG)([Q.A], () => {
            let e = Q.A.getCall(t.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, i.jsxs)("div", {
        className: ep.iE,
        children: [
            (0, i.jsx)($.A, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: d,
                channelLimit: u,
                channel: t,
                cameraUnavailable: n,
                hasPermission: s,
                onCameraUnavailable: A,
                className: ep.uH,
                onChange: h,
            }),
            (0, i.jsx)(W.A, { centerButton: !0, color: "join", channel: t, className: ep.uH }),
            m ? (0, i.jsx)(F.A, { color: "disconnect", channel: t, className: ep.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eC(e) {
    return (0, b.s)(e, E.A.VOICE_CONTROL_TRAY, { entrypoint: e_.GK.CARET });
}
let eN = function (e) {
    let { channel: t, className: n, onDisconnectCall: s, exitFullScreen: r, idleProps: d } = e,
        u = (0, H.Bx)(),
        A = l.useRef(null),
        [_, m] = l.useState(void 0),
        f = (0, c.bG)([et.default], () => {
            let e = et.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: I, enabled: S } = (0, en.A)(),
        b = (0, el.A)(t),
        { suppress: y, selfMute: j, mute: L } = (0, es.A)(t),
        { canGoLive: M } = (0, c.cf)([Z.Ay], () => ({ canGoLive: (0, O.A)(Z.Ay) })),
        D = (0, R.A)(),
        P = (0, c.bG)([v.default], () => null != v.default.getAwaitingRemoteSessionInfo()),
        k = null != D,
        B = (0, c.bG)([ee.A], () => (D?.channelId ?? ee.A.getVoiceChannelId()) === t.id),
        F = (0, c.bG)([g.Ay], () => g.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: W, limit: K } = (0, ei.A)(t),
        { analyticsLocations: Y } = (0, x.Ay)(E.A.VOICE_CONTROL_TRAY),
        X = (0, w.Ay)(t),
        J = l.useRef(null),
        Q = l.useRef(null),
        ea = (0, G.Us)();
    return B
        ? (0, i.jsx)(x.f5, {
              value: Y,
              children: (0, i.jsxs)(p.A, {
                  section: eA.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", { className: ep.rt, children: (0, i.jsx)(U.A, { channelId: t.id }) }),
                      (0, i.jsxs)("div", {
                          ref: A,
                          className: a()(ep.iE, n),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ep.qi,
                                  children: [
                                      (0, i.jsx)(h.YNO, {
                                          targetElementRef: J,
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e,
                                                  n = (0, i.jsx)(C.A, {
                                                      onInteraction: eC("AudioDeviceMenu"),
                                                      onClose: t,
                                                      maybeRenderPTTCheckbox: !0,
                                                      renderInputProfiles: !0,
                                                      renderInputDevices: !0,
                                                      renderInputVolume: !0,
                                                      maybeRenderInputMeter: !0,
                                                      renderDeafenCheckbox: !0,
                                                      renderOutputDevices: !0,
                                                      renderOutputVolume: !0,
                                                      renderSettingsButton: !0,
                                                      appContext: ea,
                                                  });
                                              return (0, i.jsxs)(V.A, { children: [n, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: h.YNO.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: l } = t;
                                              return (0, i.jsx)(z.A, {
                                                  ref: J,
                                                  centerButton: !0,
                                                  onPopoutClick: k ? null : n,
                                                  selfMute: j,
                                                  serverMute: L,
                                                  suppress: y,
                                                  popoutOpen: l,
                                                  awaitingRemote: P,
                                                  onClick: () => (0, T.A)(L, y, eA.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !k &&
                                          (0, i.jsx)(h.YNO, {
                                              targetElementRef: Q,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(V.A, {
                                                      children: (0, i.jsx)(N.A, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eC("VideoDeviceMenu"),
                                                          appContext: ea,
                                                      }),
                                                  });
                                              },
                                              position: "top",
                                              align: "right",
                                              spacing: 16,
                                              animation: h.YNO.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: l } = t;
                                                  return (0, i.jsx)($.A, {
                                                      ref: Q,
                                                      centerButton: !0,
                                                      hasPermission: b,
                                                      enabled: S,
                                                      cameraUnavailable: I,
                                                      onChange: eg,
                                                      onCameraUnavailable: ed.A,
                                                      channelLimitReached: W,
                                                      channelLimit: K,
                                                      popoutOpen: l,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              u < H.vs.MINIMAL
                                  ? (0, i.jsxs)("div", {
                                        className: ep.qi,
                                        children: [
                                            !k &&
                                                (0, i.jsx)(ef, {
                                                    channel: t,
                                                    currentUser: f,
                                                    exitFullScreen: r,
                                                    canGoLive: M,
                                                    hasPermission: b,
                                                }),
                                            !k &&
                                                (0, i.jsx)(eE, {
                                                    channel: t,
                                                    idle: d?.idle ?? !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            X &&
                                                (0, i.jsx)(q.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            (0, i.jsx)(er.A, {
                                                channel: t,
                                                whichPopoutIsOpen: _,
                                                setWhichPopoutIsOpen: m,
                                                remoteMode: k,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, i.jsx)(ex, {
                                  connectedEmbeddedActivity: F,
                                  currentUser: f,
                                  channel: t,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(x.f5, {
              value: Y,
              children: (0, i.jsx)(eI, { channel: t, cameraUnavailable: I, hasCameraPermission: b, currentUser: f }),
          });
};
