n.d(t, { Ay: () => eb, SZ: () => ex, rP: () => eI });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(407045),
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
    w = n(38185),
    B = n(478564),
    V = n(123973),
    H = n(447404),
    F = n(246356),
    W = n(401685),
    K = n(710801),
    Y = n(496841),
    z = n(383831),
    q = n(905216),
    X = n(577062),
    $ = n(533978),
    J = n(958449),
    Q = n(970636),
    Z = n(616356),
    ee = n(470710),
    et = n(430452),
    en = n(309010),
    ei = n(287809),
    el = n(151476),
    es = n(405018),
    ea = n(704877),
    er = n(173660),
    eo = n(543274),
    ed = n(579153),
    ec = n(152535),
    eu = n(848362),
    eh = n(222692),
    eA = n(702904),
    e_ = n(471993),
    em = n(442353),
    ep = n(652215),
    eg = n(806931),
    ef = n(49999),
    eE = n(56640);
function ex(e, t) {
    if (et.Ay.isVideoEnabled() === e) return;
    let n = () => A.A.setVideoEnabled(e);
    (0, S.X)(E.A.VOICE_CONTROL_TRAY, S.O.CAMERA, e), e ? (0, em.A)(n, t) : n();
}
function eI(e) {
    let { channel: t, currentUser: n, exitFullScreen: s, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: d, analyticsLocations: A } = (0, x.Ay)(),
        _ = (0, G.Us)(),
        m = (0, c.yK)([Z.A], () => Z.A.getAllActiveStreams()),
        p = m.find((e) => e.ownerId === n.id),
        g = l.useRef(null),
        f = l.useRef(null),
        E = t.getGuildId(),
        I = l.useCallback(() => {
            if ((s?.(), !a)) return (0, eA.A)();
            (0, e_.A)(E, t.id, A);
        }, [E, t.id, a, s, A]),
        C = (0, P.k0)(),
        [N, T] = l.useState(!1),
        b = () => {
            ((0, S.X)(d, S.O.STREAM, !0), a) ? I() : (0, eA.A)();
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
                                            n(ef.i.USER_DISMISS), T(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(H.A, {
                children: (0, i.jsx)(h.YNO, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(F.A, {
                            children: (0, i.jsx)(eu.A, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != p ? [p] : [],
                                handleGoLive: I,
                                appContext: _,
                                onClose: l,
                                onInteraction: eS("ManageStreamsMenu"),
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
                                return (0, i.jsx)(J.h, {
                                    ...l,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: eE.uH,
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
function eC(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s } = e,
        a = t.getGuildId();
    return (0, f.A)(a, t.id)
        ? (0, i.jsx)("div", {
              className: eE.UD,
              children: (0, i.jsx)(eo.K, { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let eN = l.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, x.Ay)(),
        o = (0, c.bG)([I.A], () => I.A.getSelectedParticipant(s.id)),
        { reducedMotion: u } = l.useContext(h.CZY),
        [A, p] = l.useState(!1),
        g = o?.id,
        f = (0, c.bG)([Z.A], () => (null != g ? Z.A.getActiveStreamForStreamKey(g) : null), [g]),
        E = o?.type === eg.lp.STREAM && null != f && f.ownerId !== t?.id,
        C = (0, c.yK)([Z.A], () =>
            Z.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== t?.id;
            }),
        ),
        N = (0, M.Qs)(s.id),
        T = l.useRef(null),
        b = l.useCallback(
            () =>
                o?.type === eg.lp.ACTIVITY && o.applicationId === a?.applicationId
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
            return (0, i.jsx)(eu.A, {
                channel: s,
                currentUser: t,
                activeStreams: C,
                handleGoLive: ep.FXj,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eS("ManageStreamsMenu"),
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
                            if (null == o || null == t || o.type !== eg.lp.ACTIVITY || null == a) return;
                            return (0, i.jsx)(z.A, {
                                ...d,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: C.length > 0 ? l : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)(J.h, {
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
                            return (0, i.jsx)(q.A, {
                                ...d,
                                iconSize: "refresh_sm",
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
function eT(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: s, currentUser: a } = e,
        r = (0, G.Us)(),
        { parentAnalyticsLocation: o } = (0, x.Ay)(),
        { reachedLimit: d, limit: u } = (0, es.A)(t),
        h = l.useCallback(() => {
            (0, S.X)(o, S.O.JOIN_VIDEO_CALL), (0, em.A)(() => _.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r, o]),
        A = l.useCallback(() => {
            n ? (0, eh.A)() : h();
        }, [n, h]),
        m = (0, c.bG)([ee.A], () => {
            let e = ee.A.getCall(t.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, i.jsxs)("div", {
        className: eE.iE,
        children: [
            (0, i.jsx)(Q.A, {
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
                className: eE.uH,
                onChange: h,
            }),
            (0, i.jsx)(Y.A, { centerButton: !0, color: "join", channel: t, className: eE.uH }),
            m ? (0, i.jsx)(K.A, { color: "disconnect", channel: t, className: eE.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eS(e) {
    return (0, b.s)(e, E.A.VOICE_CONTROL_TRAY, { entrypoint: eg.GK.CARET });
}
let eb = function (e) {
    let { channel: t, className: n, onDisconnectCall: s, exitFullScreen: r, idleProps: d } = e,
        u = (0, W.Bx)(),
        A = l.useRef(null),
        [_, m] = l.useState(void 0),
        f = (0, c.bG)([ei.default], () => {
            let e = ei.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: I, enabled: S } = (0, el.A)(),
        b = (0, ea.A)(t),
        { suppress: y, selfMute: j, mute: L } = (0, er.A)(t),
        { canGoLive: M } = (0, c.cf)([et.Ay], () => ({ canGoLive: (0, O.A)(et.Ay) })),
        D = (0, R.A)(),
        P = (0, c.bG)([v.default], () => null != v.default.getAwaitingRemoteSessionInfo()),
        k = null != D,
        H = (0, c.bG)([en.A], () => (D?.channelId ?? en.A.getVoiceChannelId()) === t.id),
        K = (0, B.A)({ channelId: t.id }),
        Y = (0, w.i)({ location: "center_control_tray" }),
        z = (0, c.bG)([g.Ay], () => g.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: q, limit: J } = (0, es.A)(t),
        { analyticsLocations: Z } = (0, x.Ay)(E.A.VOICE_CONTROL_TRAY),
        ee = (0, V.Ay)(t),
        eo = l.useRef(null),
        eu = l.useRef(null),
        eA = (0, G.Us)();
    return H
        ? (0, i.jsx)(x.f5, {
              value: Z,
              children: (0, i.jsxs)(p.A, {
                  section: ep.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", { className: eE.rt, children: (0, i.jsx)(U.A, { channelId: t.id }) }),
                      (0, i.jsxs)("div", {
                          ref: A,
                          className: a()(eE.iE, n),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eE.qi,
                                  children: [
                                      (0, i.jsx)(h.YNO, {
                                          targetElementRef: eo,
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e,
                                                  n = (0, i.jsx)(C.A, {
                                                      onInteraction: eS("AudioDeviceMenu"),
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
                                                      appContext: eA,
                                                  });
                                              return (0, i.jsxs)(F.A, { children: [n, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: h.YNO.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: l } = t;
                                              return (0, i.jsx)(X.A, {
                                                  ref: eo,
                                                  centerButton: !0,
                                                  onPopoutClick: k ? null : n,
                                                  selfMute: j,
                                                  serverMute: L,
                                                  suppress: y,
                                                  popoutOpen: l,
                                                  awaitingRemote: P,
                                                  onClick: () => (0, T.A)(L, y, ep.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !k &&
                                          (0, i.jsx)(h.YNO, {
                                              targetElementRef: eu,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(F.A, {
                                                      children: (0, i.jsx)(N.A, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eS("VideoDeviceMenu"),
                                                          appContext: eA,
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
                                                  return (0, i.jsx)(Q.A, {
                                                      ref: eu,
                                                      centerButton: !0,
                                                      hasPermission: b,
                                                      enabled: S,
                                                      cameraUnavailable: I,
                                                      onChange: ex,
                                                      onCameraUnavailable: eh.A,
                                                      channelLimitReached: q,
                                                      channelLimit: J,
                                                      popoutOpen: l,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              u < W.vs.MINIMAL
                                  ? (0, i.jsxs)("div", {
                                        className: eE.qi,
                                        children: [
                                            !k &&
                                                (0, i.jsx)(eI, {
                                                    channel: t,
                                                    currentUser: f,
                                                    exitFullScreen: r,
                                                    canGoLive: M,
                                                    hasPermission: b,
                                                }),
                                            !k &&
                                                (0, i.jsx)(eC, {
                                                    channel: t,
                                                    idle: d?.idle ?? !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            ee &&
                                                (0, i.jsx)($.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            K &&
                                                Y &&
                                                (0, i.jsx)(ec.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            (0, i.jsx)(ed.A, {
                                                channel: t,
                                                whichPopoutIsOpen: _,
                                                setWhichPopoutIsOpen: m,
                                                remoteMode: k,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, i.jsx)(eN, {
                                  connectedEmbeddedActivity: z,
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
              value: Z,
              children: (0, i.jsx)(eT, { channel: t, cameraUnavailable: I, hasCameraPermission: b, currentUser: f }),
          });
};
