"use strict";
n.d(t, { Ay: () => eR, SZ: () => eb, rP: () => eS });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(382222),
    d = n(311907),
    u = n(554146),
    h = n(397927),
    A = n(827343),
    m = n(442433),
    _ = n(956793),
    g = n(401843),
    p = n(820284),
    f = n(933958),
    x = n(967812),
    E = n(793574),
    C = n(688810),
    I = n(313961),
    N = n(385318),
    b = n(206018),
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
    B = n(38185),
    H = n(478564),
    F = n(123973),
    K = n(447404),
    W = n(246356),
    Y = n(401685),
    z = n(710801),
    q = n(496841),
    X = n(383831),
    Q = n(905216),
    J = n(577062),
    $ = n(533978),
    Z = n(958449),
    ee = n(970636),
    et = n(996744),
    en = n(85612),
    ei = n(616356),
    es = n(470710),
    el = n(430452),
    ea = n(309010),
    er = n(287809),
    eo = n(151476),
    ec = n(405018),
    ed = n(704877),
    eu = n(173660),
    eh = n(543274),
    eA = n(579153),
    em = n(152535),
    e_ = n(848362),
    eg = n(222692),
    ep = n(702904),
    ef = n(471993),
    ex = n(442353),
    eE = n(652215),
    eC = n(806931),
    eI = n(49999),
    eN = n(776912);
function eb(e, t) {
    if (el.Ay.isVideoEnabled() === e) return;
    let n = () => A.A.setVideoEnabled(e);
    (0, v.X)(E.A.VOICE_CONTROL_TRAY, v.O.CAMERA, e), e ? (0, ex.A)(n, t) : n();
}
function eS(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: A } = (0, C.Ay)(),
        m = (0, w.Us)(),
        _ = (0, d.yK)([ei.A], () => ei.A.getAllActiveStreams()),
        g = _.find((e) => e.ownerId === n.id),
        p = s.useRef(null),
        f = s.useRef(null),
        x = t.getGuildId(),
        E = s.useCallback(() => {
            if ((l?.(), !a)) return (0, ep.A)();
            (0, ef.A)(x, t.id, A);
        }, [x, t.id, a, l, A]),
        I = (0, k.k0)(),
        [N, b] = s.useState(!1),
        S = () => {
            ((0, v.X)(c, v.O.STREAM, !0), a) ? E() : (0, ep.A)();
        },
        T = () => {
            (0, v.X)(c, v.O.STREAM, !1), (0, D.A)(g);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (() => {
                if (I && 0 === _.length)
                    return (0, i.jsx)(j.Ay, {
                        contentTypes: [u.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    b(!0),
                                    (0, i.jsx)(V.b, {
                                        buttonRef: p,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eI.i.USER_DISMISS), b(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(K.A, {
                children: (0, i.jsx)(h.YNO, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: s } = e;
                        return (0, i.jsx)(W.A, {
                            children: (0, i.jsx)(e_.A, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: E,
                                appContext: m,
                                onClose: s,
                                onInteraction: ej("ManageStreamsMenu"),
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
                                    l = null != g;
                                return (0, i.jsx)(Z.h, {
                                    ...s,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: eN.uH,
                                    hasPermission: r,
                                    streamActive: null != g,
                                    isSelfStream: !0,
                                    onPopoutClick: l
                                        ? function (e) {
                                              n?.(e);
                                          }
                                        : null,
                                    popoutOpen: t,
                                    shouldShowTooltip: !t,
                                    renderNUXHighlight: N,
                                    buttonRef: p,
                                    onClick: null != g ? T : S,
                                });
                            })(n, s),
                        });
                    },
                }),
            }),
        ],
    });
}
function eT(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: s, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, x.A)(a, t.id)
        ? (0, i.jsx)("div", {
              className: eN.UD,
              children: (0, i.jsx)(eh.K, { channel: t, idle: n, whichPopoutIsOpen: s, setWhichPopoutIsOpen: l }),
          })
        : null;
}
let ev = s.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, C.Ay)(),
        o = (0, d.bG)([I.A], () => I.A.getSelectedParticipant(l.id)),
        { reducedMotion: u } = s.useContext(h.CZY),
        [A, m] = s.useState(!1),
        p = o?.id,
        f = (0, d.bG)([ei.A], () => (null != p ? ei.A.getActiveStreamForStreamKey(p) : null), [p]),
        x = o?.type === eC.lp.STREAM && null != f && f.ownerId !== t?.id,
        E = (0, d.yK)([ei.A], () =>
            ei.A.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== t?.id;
            }),
        ),
        N = (0, G.Qs)(l.id),
        b = s.useRef(null),
        S = s.useCallback(
            () =>
                o?.type === eC.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : x
                      ? "STREAM"
                      : null != N
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, x, N],
        ),
        [T, y] = s.useState(S()),
        j = (0, h.zhh)(
            {
                opacity: A ? 0.2 : 1,
                transform: A && !u.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: A ? 600 : 1e3, friction: 45, precision: 0.01, clamp: A },
                onRest: () => {
                    y(S()), m(!1);
                },
            },
            "animate-always",
        );
    s.useEffect(() => {
        S() !== T && m(!0);
    }, [T, S]);
    let R = s.useCallback(() => {
        if (null != f) (0, g.vN)((0, L._z)(f));
        else for (let e of E) (0, g.vN)((0, L._z)(e));
    }, [E, f]);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: b,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(e_.A, {
                channel: l,
                currentUser: t,
                activeStreams: E,
                handleGoLive: eE.FXj,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: ej("ManageStreamsMenu"),
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
                ref: b,
                children: ((e, s) => {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (T) {
                        case "ACTIVITY":
                            if (null == o || null == t || o.type !== eC.lp.ACTIVITY || null == a) return;
                            return (0, i.jsx)(X.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: E.length > 0 ? s : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)(Z.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, v.X)(r, v.O.STOP_WATCHING), R();
                                },
                                onPopoutClick: E.length > 1 ? s : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, i.jsx)(Q.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, v.X)(r, v.O.DISCONNECT), n?.();
                                },
                                onPopoutClick: E.length > 0 ? s : null,
                            });
                        case "EVENT":
                            return (0, i.jsx)(U.A, {
                                channelId: l.id,
                                onClick: () => {
                                    (0, v.X)(r, v.O.DISCONNECT), _.default.disconnect(), n?.();
                                },
                            });
                    }
                })(u, d),
            });
        },
    });
});
function ey(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        r = (0, w.Us)(),
        { parentAnalyticsLocation: o } = (0, C.Ay)(),
        { reachedLimit: c, limit: u } = (0, ec.A)(t),
        h = s.useCallback(() => {
            (0, v.X)(o, v.O.JOIN_VIDEO_CALL), (0, ex.A)(() => _.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r, o]),
        A = s.useCallback(() => {
            n ? (0, eg.A)() : h();
        }, [n, h]),
        m = (0, d.bG)([es.A], () => {
            let e = es.A.getCall(t.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, i.jsxs)("div", {
        className: eN.iE,
        children: [
            (0, i.jsx)(ee.A, {
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
                className: eN.uH,
                onChange: h,
            }),
            (0, i.jsx)(q.A, { centerButton: !0, color: "join", channel: t, className: eN.uH }),
            m ? (0, i.jsx)(z.A, { color: "disconnect", channel: t, className: eN.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function ej(e) {
    return (0, y.s)(e, E.A.VOICE_CONTROL_TRAY, { entrypoint: eC.GK.CARET });
}
let eR = function (e) {
    let { channel: t, className: n, onDisconnectCall: l, exitFullScreen: r, idleProps: c } = e,
        u = (0, Y.Bx)(),
        A = s.useRef(null),
        [_, g] = s.useState(void 0),
        x = (0, d.bG)([er.default], () => {
            let e = er.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: I, enabled: v } = (0, eo.A)(),
        y = (0, ed.A)(t),
        { suppress: j, selfMute: L, mute: D } = (0, eu.A)(t),
        { canGoLive: G } = (0, d.cf)([el.Ay], () => ({ canGoLive: (0, M.A)(el.Ay) })),
        U = (0, O.A)(),
        k = (0, d.bG)([R.default], () => null != R.default.getAwaitingRemoteSessionInfo()),
        V = null != U,
        K = (0, d.bG)([ea.A], () => (U?.channelId ?? ea.A.getVoiceChannelId()) === t.id),
        z = (0, H.A)({ channelId: t.id }),
        q = (0, B.i)({ location: "center_control_tray" }),
        X = (0, d.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: Q, limit: Z } = (0, ec.A)(t),
        { analyticsLocations: ei } = (0, C.Ay)(E.A.VOICE_CONTROL_TRAY),
        es = (0, et.Cg)({ location: E.A.VOICE_CONTROL_TRAY, autoTrackExposure: !0 }),
        eh = (0, F.Ay)(t),
        e_ = s.useRef(null),
        ep = s.useRef(null),
        ef = (0, w.Us)(),
        ex = es
            ? (e) => {
                  (0, m.L3)(e, () =>
                      Promise.resolve(() =>
                          (0, i.jsx)(N.default, {
                              onClose: m.Z_,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: ej("AudioDeviceMenu"),
                              appContext: ef,
                          }),
                      ),
                  );
              }
            : void 0;
    return K
        ? (0, i.jsx)(C.f5, {
              value: ei,
              children: (0, i.jsxs)(p.A, {
                  section: eE.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", { className: eN.rt, children: (0, i.jsx)(P.A, { channelId: t.id }) }),
                      (0, i.jsxs)("div", {
                          ref: A,
                          className: a()(eN.iE, n),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eN.qi,
                                  children: [
                                      (0, i.jsx)(h.YNO, {
                                          targetElementRef: e_,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = es
                                                      ? (0, i.jsx)(en.a, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : (0, i.jsx)(b.A, {
                                                            onInteraction: ej("AudioDeviceMenu"),
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
                                                            appContext: ef,
                                                        })),
                                                  (0, i.jsxs)(W.A, { children: [t, " "] })
                                              );
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: h.YNO.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: s } = t;
                                              return (0, i.jsx)(J.A, {
                                                  ref: e_,
                                                  centerButton: !0,
                                                  onPopoutClick: V ? null : n,
                                                  selfMute: L,
                                                  serverMute: D,
                                                  suppress: j,
                                                  popoutOpen: s,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, T.A)(D, j, eE.JJy.VOICE_CONTROL_TRAY),
                                                  onContextMenu: ex,
                                              });
                                          },
                                      }),
                                      !V &&
                                          (0, i.jsx)(h.YNO, {
                                              targetElementRef: ep,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(W.A, {
                                                      children: (0, i.jsx)(S.A, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: ej("VideoDeviceMenu"),
                                                          appContext: ef,
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
                                                  return (0, i.jsx)(ee.A, {
                                                      ref: ep,
                                                      centerButton: !0,
                                                      hasPermission: y,
                                                      enabled: v,
                                                      cameraUnavailable: I,
                                                      onChange: eb,
                                                      onCameraUnavailable: eg.A,
                                                      channelLimitReached: Q,
                                                      channelLimit: Z,
                                                      popoutOpen: s,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              u < Y.vs.MINIMAL
                                  ? (0, i.jsxs)("div", {
                                        className: eN.qi,
                                        children: [
                                            !V &&
                                                (0, i.jsx)(eS, {
                                                    channel: t,
                                                    currentUser: x,
                                                    exitFullScreen: r,
                                                    canGoLive: G,
                                                    hasPermission: y,
                                                }),
                                            !V &&
                                                (0, i.jsx)(eT, {
                                                    channel: t,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            eh &&
                                                (0, i.jsx)($.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            z &&
                                                q &&
                                                (0, i.jsx)(em.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            (0, i.jsx)(eA.A, {
                                                channel: t,
                                                whichPopoutIsOpen: _,
                                                setWhichPopoutIsOpen: g,
                                                remoteMode: V,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, i.jsx)(ev, {
                                  connectedEmbeddedActivity: X,
                                  currentUser: x,
                                  channel: t,
                                  onDisconnectCall: l,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(C.f5, {
              value: ei,
              children: (0, i.jsx)(ey, { channel: t, cameraUnavailable: I, hasCameraPermission: y, currentUser: x }),
          });
};
