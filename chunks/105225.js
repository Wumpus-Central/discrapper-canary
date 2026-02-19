"use strict";
n.d(t, { Ay: () => ey, SZ: () => eI, rP: () => eb });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(475539),
    d = n(311907),
    u = n(554146),
    h = n(397927),
    A = n(827343),
    p = n(442433),
    g = n(956793),
    m = n(401843),
    _ = n(820284),
    f = n(933958),
    x = n(967812),
    C = n(793574),
    E = n(688810),
    I = n(313961),
    b = n(385318),
    N = n(206018),
    S = n(750765),
    T = n(183184),
    v = n(384059),
    y = n(480890),
    j = n(379848),
    R = n(643501),
    O = n(857253),
    L = n(652896),
    M = n(880144),
    D = n(338771),
    G = n(508654),
    U = n(984624),
    P = n(394412),
    w = n(267102),
    k = n(526292),
    V = n(396495),
    B = n(478564),
    H = n(123973),
    F = n(447404),
    K = n(246356),
    W = n(710801),
    Y = n(496841),
    z = n(383831),
    X = n(905216),
    q = n(577062),
    J = n(533978),
    Q = n(958449),
    $ = n(970636),
    Z = n(996744),
    ee = n(85612),
    et = n(616356),
    en = n(470710),
    ei = n(430452),
    es = n(309010),
    el = n(287809),
    er = n(151476),
    ea = n(405018),
    eo = n(704877),
    ec = n(173660),
    ed = n(543274),
    eu = n(579153),
    eh = n(152535),
    eA = n(848362),
    ep = n(222692),
    eg = n(702904),
    em = n(471993),
    e_ = n(442353),
    ef = n(652215),
    ex = n(806931),
    eC = n(49999),
    eE = n(913957);
function eI(e, t) {
    if (ei.Ay.isVideoEnabled() === e) return;
    let n = () => A.A.setVideoEnabled(e);
    (0, v.X)(C.A.VOICE_CONTROL_TRAY, v.O.CAMERA, e), e ? (0, e_.A)(n, t) : n();
}
function eb(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: r, hasPermission: a, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: A } = (0, E.Ay)(),
        p = (0, w.Us)(),
        g = (0, d.yK)([et.A], () => et.A.getAllActiveStreams()),
        m = g.find((e) => e.ownerId === n.id),
        _ = s.useRef(null),
        f = s.useRef(null),
        x = t.getGuildId(),
        C = s.useCallback(() => {
            if ((l?.(), !r)) return (0, eg.A)();
            (0, em.A)(x, t.id, A);
        }, [x, t.id, r, l, A]),
        I = (0, k.k0)(),
        [b, N] = s.useState(!1),
        S = () => {
            ((0, v.X)(c, v.O.STREAM, !0), r) ? C() : (0, eg.A)();
        },
        T = () => {
            (0, v.X)(c, v.O.STREAM, !1), (0, D.A)(m);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (() => {
                if (I && 0 === g.length)
                    return (0, i.jsx)(j.Ay, {
                        contentTypes: [u.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    N(!0),
                                    (0, i.jsx)(V.b, {
                                        buttonRef: _,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eC.i.USER_DISMISS), N(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(F.A, {
                children: (0, i.jsx)(h.YNO, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: s } = e;
                        return (0, i.jsx)(K.A, {
                            children: (0, i.jsx)(eA.A, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != m ? [m] : [],
                                handleGoLive: C,
                                appContext: p,
                                onClose: s,
                                onInteraction: ev("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: h.YNO.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: s } = t;
                        return (0, i.jsx)("div", {
                            ref: f,
                            children: ((e, t) => {
                                let { onClick: n, ...s } = e ?? { onClick: void 0 },
                                    l = null != m;
                                return (0, i.jsx)(Q.h, {
                                    ...s,
                                    centerButton: !0,
                                    disabled: o || !a,
                                    className: eE.uH,
                                    hasPermission: a,
                                    streamActive: null != m,
                                    isSelfStream: !0,
                                    onPopoutClick: l
                                        ? function (e) {
                                              n?.(e);
                                          }
                                        : null,
                                    popoutOpen: t,
                                    shouldShowTooltip: !t,
                                    renderNUXHighlight: b,
                                    buttonRef: _,
                                    onClick: null != m ? T : S,
                                });
                            })(n, s),
                        });
                    },
                }),
            }),
        ],
    });
}
function eN(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: s, setWhichPopoutIsOpen: l } = e,
        r = t.getGuildId();
    return (0, x.A)(r, t.id)
        ? (0, i.jsx)("div", {
              className: eE.UD,
              children: (0, i.jsx)(ed.K, { channel: t, idle: n, whichPopoutIsOpen: s, setWhichPopoutIsOpen: l }),
          })
        : null;
}
let eS = s.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: r } = e,
        { parentAnalyticsLocation: a } = (0, E.Ay)(),
        o = (0, d.bG)([I.A], () => I.A.getSelectedParticipant(l.id)),
        { reducedMotion: u } = s.useContext(h.CZY),
        [A, p] = s.useState(!1),
        _ = o?.id,
        f = (0, d.bG)([et.A], () => (null != _ ? et.A.getActiveStreamForStreamKey(_) : null), [_]),
        x = o?.type === ex.lp.STREAM && null != f && f.ownerId !== t?.id,
        C = (0, d.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== t?.id;
            }),
        ),
        b = (0, G.Qs)(l.id),
        N = s.useRef(null),
        S = s.useCallback(
            () =>
                o?.type === ex.lp.ACTIVITY && o.applicationId === r?.applicationId
                    ? "ACTIVITY"
                    : x
                      ? "STREAM"
                      : null != b
                        ? "EVENT"
                        : "CALL",
            [o, r?.applicationId, x, b],
        ),
        [T, y] = s.useState(S()),
        j = (0, h.zhh)(
            {
                opacity: A ? 0.2 : 1,
                transform: A && !u.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: A ? 600 : 1e3, friction: 45, precision: 0.01, clamp: A },
                onRest: () => {
                    y(S()), p(!1);
                },
            },
            "animate-always",
        );
    s.useEffect(() => {
        S() !== T && p(!0);
    }, [T, S]);
    let R = s.useCallback(() => {
        if (null != f) (0, m.vN)((0, L._z)(f));
        else for (let e of C) (0, m.vN)((0, L._z)(e));
    }, [C, f]);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: N,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(eA.A, {
                channel: l,
                currentUser: t,
                activeStreams: C,
                handleGoLive: ef.FXj,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: ev("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: h.YNO.Animation.FADE,
        children: (e, s) => {
            let { onClick: d } = e,
                { isShown: u } = s;
            return (0, i.jsx)(c.animated.div, {
                style: j,
                ref: N,
                children: ((e, s) => {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (T) {
                        case "ACTIVITY":
                            if (null == o || null == t || o.type !== ex.lp.ACTIVITY || null == r) return;
                            return (0, i.jsx)(z.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: r.location,
                                onPopoutClick: C.length > 0 ? s : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)(Q.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, v.X)(a, v.O.STOP_WATCHING), R();
                                },
                                onPopoutClick: C.length > 1 ? s : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, i.jsx)(X.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, v.X)(a, v.O.DISCONNECT), n?.();
                                },
                                onPopoutClick: C.length > 0 ? s : null,
                            });
                        case "EVENT":
                            return (0, i.jsx)(U.A, {
                                channelId: l.id,
                                onClick: () => {
                                    (0, v.X)(a, v.O.DISCONNECT), g.default.disconnect(), n?.();
                                },
                            });
                    }
                })(u, d),
            });
        },
    });
});
function eT(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: r } = e,
        a = (0, w.Us)(),
        { parentAnalyticsLocation: o } = (0, E.Ay)(),
        { reachedLimit: c, limit: u } = (0, ea.A)(t),
        h = s.useCallback(() => {
            (0, v.X)(o, v.O.JOIN_VIDEO_CALL), (0, e_.A)(() => g.default.selectVoiceChannel(t.id, !0), a);
        }, [t.id, a, o]),
        A = s.useCallback(() => {
            n ? (0, ep.A)() : h();
        }, [n, h]),
        p = (0, d.bG)([en.A], () => {
            let e = en.A.getCall(t.id);
            return e?.ringing.includes(r.id) === !0;
        });
    return (0, i.jsxs)("div", {
        className: eE.iE,
        children: [
            (0, i.jsx)($.A, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: c,
                channelLimit: u,
                channel: t,
                cameraUnavailable: n,
                hasPermission: l,
                onCameraUnavailable: A,
                className: eE.uH,
                onChange: h,
            }),
            (0, i.jsx)(Y.A, { centerButton: !0, color: "join", channel: t, className: eE.uH }),
            p ? (0, i.jsx)(W.A, { color: "disconnect", channel: t, className: eE.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function ev(e) {
    return (0, y.s)(e, C.A.VOICE_CONTROL_TRAY, { entrypoint: ex.GK.CARET });
}
let ey = function (e) {
    let { channel: t, className: n, onDisconnectCall: l, exitFullScreen: a, idleProps: c } = e,
        u = s.useRef(null),
        [A, g] = s.useState(void 0),
        m = (0, d.bG)([el.default], () => {
            let e = el.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: x, enabled: I } = (0, er.A)(),
        v = (0, eo.A)(t),
        { suppress: y, selfMute: j, mute: L } = (0, ec.A)(t),
        { canGoLive: D } = (0, d.cf)([ei.Ay], () => ({ canGoLive: (0, M.A)(ei.Ay) })),
        G = (0, O.A)(),
        U = (0, d.bG)([R.default], () => null != R.default.getAwaitingRemoteSessionInfo()),
        k = null != G,
        V = (0, d.bG)([es.A], () => (G?.channelId ?? es.A.getVoiceChannelId()) === t.id),
        F = (0, B.A)({ channelId: t.id, location: "center-control-tray" }),
        W = (0, d.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: Y, limit: z } = (0, ea.A)(t),
        { analyticsLocations: X } = (0, E.Ay)(C.A.VOICE_CONTROL_TRAY),
        Q = (0, Z.Cg)({ location: C.A.VOICE_CONTROL_TRAY, autoTrackExposure: !0 }),
        et = (0, H.Ay)(t),
        en = s.useRef(null),
        ed = s.useRef(null),
        eA = (0, w.Us)(),
        eg = Q
            ? (e) => {
                  (0, p.L3)(e, () =>
                      Promise.resolve(() =>
                          (0, i.jsx)(b.default, {
                              onClose: p.Z_,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: ev("AudioDeviceMenu"),
                              appContext: eA,
                          }),
                      ),
                  );
              }
            : void 0;
    return V
        ? (0, i.jsx)(E.f5, {
              value: X,
              children: (0, i.jsxs)(_.A, {
                  section: ef.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", { className: eE.rt, children: (0, i.jsx)(P.A, { channelId: t.id }) }),
                      (0, i.jsxs)("div", {
                          ref: u,
                          className: r()(eE.iE, n),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eE.qi,
                                  children: [
                                      (0, i.jsx)(h.YNO, {
                                          targetElementRef: en,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = Q
                                                      ? (0, i.jsx)(ee.a, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : (0, i.jsx)(N.A, {
                                                            onInteraction: ev("AudioDeviceMenu"),
                                                            onClose: n,
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
                                                        })),
                                                  (0, i.jsxs)(K.A, { children: [t, " "] })
                                              );
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: h.YNO.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: s } = t;
                                              return (0, i.jsx)(q.A, {
                                                  ref: en,
                                                  centerButton: !0,
                                                  onPopoutClick: k ? null : n,
                                                  selfMute: j,
                                                  serverMute: L,
                                                  suppress: y,
                                                  popoutOpen: s,
                                                  awaitingRemote: U,
                                                  onClick: () => (0, T.A)(L, y, ef.JJy.VOICE_CONTROL_TRAY),
                                                  onContextMenu: eg,
                                              });
                                          },
                                      }),
                                      !k &&
                                          (0, i.jsx)(h.YNO, {
                                              targetElementRef: ed,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(K.A, {
                                                      children: (0, i.jsx)(S.A, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: ev("VideoDeviceMenu"),
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
                                                      { isShown: s } = t;
                                                  return (0, i.jsx)($.A, {
                                                      ref: ed,
                                                      centerButton: !0,
                                                      hasPermission: v,
                                                      enabled: I,
                                                      cameraUnavailable: x,
                                                      onChange: eI,
                                                      onCameraUnavailable: ep.A,
                                                      channelLimitReached: Y,
                                                      channelLimit: z,
                                                      popoutOpen: s,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eE.qi,
                                  children: [
                                      !k &&
                                          (0, i.jsx)(eb, {
                                              channel: t,
                                              currentUser: m,
                                              exitFullScreen: a,
                                              canGoLive: D,
                                              hasPermission: v,
                                          }),
                                      !k &&
                                          (0, i.jsx)(eN, {
                                              channel: t,
                                              idle: c?.idle ?? !0,
                                              whichPopoutIsOpen: A,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      et &&
                                          (0, i.jsx)(J.A, {
                                              channel: t,
                                              themeable: !0,
                                              whichPopoutIsOpen: A,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      F &&
                                          (0, i.jsx)(eh.A, {
                                              channel: t,
                                              themeable: !0,
                                              whichPopoutIsOpen: A,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      (0, i.jsx)(eu.A, {
                                          channel: t,
                                          whichPopoutIsOpen: A,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: k,
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(eS, {
                                  connectedEmbeddedActivity: W,
                                  currentUser: m,
                                  channel: t,
                                  onDisconnectCall: l,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(E.f5, {
              value: X,
              children: (0, i.jsx)(eT, { channel: t, cameraUnavailable: x, hasCameraPermission: v, currentUser: m }),
          });
};
