n.d(t, { Ay: () => eR, SZ: () => eT, rP: () => eS });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(382222),
    d = n(311907),
    u = n(554146),
    h = n(397927),
    A = n(827343),
    _ = n(442433),
    m = n(956793),
    g = n(401843),
    p = n(820284),
    f = n(933958),
    x = n(967812),
    E = n(793574),
    I = n(688810),
    C = n(313961),
    N = n(385318),
    T = n(206018),
    S = n(750765),
    b = n(183184),
    y = n(384059),
    v = n(480890),
    j = n(379848),
    R = n(643501),
    O = n(857253),
    L = n(652896),
    M = n(880144),
    D = n(338771),
    U = n(508654),
    G = n(984624),
    P = n(394412),
    k = n(267102),
    w = n(526292),
    B = n(396495),
    V = n(38185),
    H = n(478564),
    F = n(123973),
    K = n(447404),
    W = n(246356),
    Y = n(401685),
    z = n(710801),
    q = n(496841),
    X = n(383831),
    J = n(905216),
    Q = n(577062),
    $ = n(533978),
    Z = n(958449),
    ee = n(970636),
    et = n(996744),
    en = n(85612),
    ei = n(616356),
    el = n(470710),
    es = n(430452),
    ea = n(309010),
    er = n(287809),
    eo = n(151476),
    ec = n(405018),
    ed = n(704877),
    eu = n(173660),
    eh = n(543274),
    eA = n(579153),
    e_ = n(152535),
    em = n(848362),
    eg = n(222692),
    ep = n(702904),
    ef = n(471993),
    ex = n(442353),
    eE = n(652215),
    eI = n(806931),
    eC = n(49999),
    eN = n(776912);
function eT(e, t) {
    if (es.Ay.isVideoEnabled() === e) return;
    let n = () => A.A.setVideoEnabled(e);
    (0, y.X)(E.A.VOICE_CONTROL_TRAY, y.O.CAMERA, e), e ? (0, ex.A)(n, t) : n();
}
function eS(e) {
    let { channel: t, currentUser: n, exitFullScreen: s, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: A } = (0, I.Ay)(),
        _ = (0, k.Us)(),
        m = (0, d.yK)([ei.A], () => ei.A.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        p = l.useRef(null),
        f = l.useRef(null),
        x = t.getGuildId(),
        E = l.useCallback(() => {
            if ((s?.(), !a)) return (0, ep.A)();
            (0, ef.A)(x, t.id, A);
        }, [x, t.id, a, s, A]),
        C = (0, w.k0)(),
        [N, T] = l.useState(!1),
        S = () => {
            ((0, y.X)(c, y.O.STREAM, !0), a) ? E() : (0, ep.A)();
        },
        b = () => {
            (0, y.X)(c, y.O.STREAM, !1), (0, D.A)(g);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (() => {
                if (C && 0 === m.length)
                    return (0, i.jsx)(j.Ay, {
                        contentTypes: [u.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    T(!0),
                                    (0, i.jsx)(B.b, {
                                        buttonRef: p,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eC.i.USER_DISMISS), T(!1);
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
                        let { closePopout: l } = e;
                        return (0, i.jsx)(W.A, {
                            children: (0, i.jsx)(em.A, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: E,
                                appContext: _,
                                onClose: l,
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
                            { isShown: l } = t;
                        return (0, i.jsx)("div", {
                            ref: f,
                            children: ((e, t) => {
                                let { onClick: n, ...l } = e ?? { onClick: void 0 },
                                    s = null != g;
                                return (0, i.jsx)(Z.h, {
                                    ...l,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: eN.uH,
                                    hasPermission: r,
                                    streamActive: null != g,
                                    isSelfStream: !0,
                                    onPopoutClick: s
                                        ? function (e) {
                                              n?.(e);
                                          }
                                        : null,
                                    popoutOpen: t,
                                    shouldShowTooltip: !t,
                                    renderNUXHighlight: N,
                                    buttonRef: p,
                                    onClick: null != g ? b : S,
                                });
                            })(n, l),
                        });
                    },
                }),
            }),
        ],
    });
}
function eb(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s } = e,
        a = t.getGuildId();
    return (0, x.A)(a, t.id)
        ? (0, i.jsx)("div", {
              className: eN.UD,
              children: (0, i.jsx)(eh.K, { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let ey = l.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, I.Ay)(),
        o = (0, d.bG)([C.A], () => C.A.getSelectedParticipant(s.id)),
        { reducedMotion: u } = l.useContext(h.CZY),
        [A, _] = l.useState(!1),
        p = o?.id,
        f = (0, d.bG)([ei.A], () => (null != p ? ei.A.getActiveStreamForStreamKey(p) : null), [p]),
        x = o?.type === eI.lp.STREAM && null != f && f.ownerId !== t?.id,
        E = (0, d.yK)([ei.A], () =>
            ei.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== t?.id;
            }),
        ),
        N = (0, U.Qs)(s.id),
        T = l.useRef(null),
        S = l.useCallback(
            () =>
                o?.type === eI.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : x
                      ? "STREAM"
                      : null != N
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, x, N],
        ),
        [b, v] = l.useState(S()),
        j = (0, h.zhh)(
            {
                opacity: A ? 0.2 : 1,
                transform: A && !u.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: A ? 600 : 1e3, friction: 45, precision: 0.01, clamp: A },
                onRest: () => {
                    v(S()), _(!1);
                },
            },
            "animate-always",
        );
    l.useEffect(() => {
        S() !== b && _(!0);
    }, [b, S]);
    let R = l.useCallback(() => {
        if (null != f) (0, g.vN)((0, L._z)(f));
        else for (let e of E) (0, g.vN)((0, L._z)(e));
    }, [E, f]);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: T,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(em.A, {
                channel: s,
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
        children: (e, l) => {
            let { onClick: d } = e,
                { isShown: u } = l;
            return (0, i.jsx)(c.animated.div, {
                style: j,
                ref: T,
                children: ((e, l) => {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (b) {
                        case "ACTIVITY":
                            if (null == o || null == t || o.type !== eI.lp.ACTIVITY || null == a) return;
                            return (0, i.jsx)(X.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: E.length > 0 ? l : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)(Z.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, y.X)(r, y.O.STOP_WATCHING), R();
                                },
                                onPopoutClick: E.length > 1 ? l : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, i.jsx)(J.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, y.X)(r, y.O.DISCONNECT), n?.();
                                },
                                onPopoutClick: E.length > 0 ? l : null,
                            });
                        case "EVENT":
                            return (0, i.jsx)(G.A, {
                                channelId: s.id,
                                onClick: () => {
                                    (0, y.X)(r, y.O.DISCONNECT), m.default.disconnect(), n?.();
                                },
                            });
                    }
                })(u, d),
            });
        },
    });
});
function ev(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: s, currentUser: a } = e,
        r = (0, k.Us)(),
        { parentAnalyticsLocation: o } = (0, I.Ay)(),
        { reachedLimit: c, limit: u } = (0, ec.A)(t),
        h = l.useCallback(() => {
            (0, y.X)(o, y.O.JOIN_VIDEO_CALL), (0, ex.A)(() => m.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r, o]),
        A = l.useCallback(() => {
            n ? (0, eg.A)() : h();
        }, [n, h]),
        _ = (0, d.bG)([el.A], () => {
            let e = el.A.getCall(t.id);
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
                hasPermission: s,
                onCameraUnavailable: A,
                className: eN.uH,
                onChange: h,
            }),
            (0, i.jsx)(q.A, { centerButton: !0, color: "join", channel: t, className: eN.uH }),
            _ ? (0, i.jsx)(z.A, { color: "disconnect", channel: t, className: eN.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function ej(e) {
    return (0, v.s)(e, E.A.VOICE_CONTROL_TRAY, { entrypoint: eI.GK.CARET });
}
let eR = function (e) {
    let { channel: t, className: n, onDisconnectCall: s, exitFullScreen: r, idleProps: c } = e,
        u = (0, Y.Bx)(),
        A = l.useRef(null),
        [m, g] = l.useState(void 0),
        x = (0, d.bG)([er.default], () => {
            let e = er.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: C, enabled: y } = (0, eo.A)(),
        v = (0, ed.A)(t),
        { suppress: j, selfMute: L, mute: D } = (0, eu.A)(t),
        { canGoLive: U } = (0, d.cf)([es.Ay], () => ({ canGoLive: (0, M.A)(es.Ay) })),
        G = (0, O.A)(),
        w = (0, d.bG)([R.default], () => null != R.default.getAwaitingRemoteSessionInfo()),
        B = null != G,
        K = (0, d.bG)([ea.A], () => (G?.channelId ?? ea.A.getVoiceChannelId()) === t.id),
        z = (0, H.A)({ channelId: t.id }),
        q = (0, V.i)({ location: "center_control_tray" }),
        X = (0, d.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: J, limit: Z } = (0, ec.A)(t),
        { analyticsLocations: ei } = (0, I.Ay)(E.A.VOICE_CONTROL_TRAY),
        el = (0, et.Cg)({ location: E.A.VOICE_CONTROL_TRAY, autoTrackExposure: !0 }),
        eh = (0, F.Ay)(t),
        em = l.useRef(null),
        ep = l.useRef(null),
        ef = (0, k.Us)(),
        ex = el
            ? (e) => {
                  (0, _.L3)(e, () =>
                      Promise.resolve(() =>
                          (0, i.jsx)(N.default, {
                              onClose: _.Z_,
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
        ? (0, i.jsx)(I.f5, {
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
                                          targetElementRef: em,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = el
                                                      ? (0, i.jsx)(en.a, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : (0, i.jsx)(T.A, {
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
                                                  { isShown: l } = t;
                                              return (0, i.jsx)(Q.A, {
                                                  ref: em,
                                                  centerButton: !0,
                                                  onPopoutClick: B ? null : n,
                                                  selfMute: L,
                                                  serverMute: D,
                                                  suppress: j,
                                                  popoutOpen: l,
                                                  awaitingRemote: w,
                                                  onClick: () => (0, b.A)(D, j, eE.JJy.VOICE_CONTROL_TRAY),
                                                  onContextMenu: ex,
                                              });
                                          },
                                      }),
                                      !B &&
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
                                                      { isShown: l } = t;
                                                  return (0, i.jsx)(ee.A, {
                                                      ref: ep,
                                                      centerButton: !0,
                                                      hasPermission: v,
                                                      enabled: y,
                                                      cameraUnavailable: C,
                                                      onChange: eT,
                                                      onCameraUnavailable: eg.A,
                                                      channelLimitReached: J,
                                                      channelLimit: Z,
                                                      popoutOpen: l,
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
                                            !B &&
                                                (0, i.jsx)(eS, {
                                                    channel: t,
                                                    currentUser: x,
                                                    exitFullScreen: r,
                                                    canGoLive: U,
                                                    hasPermission: v,
                                                }),
                                            !B &&
                                                (0, i.jsx)(eb, {
                                                    channel: t,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            eh &&
                                                (0, i.jsx)($.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            z &&
                                                q &&
                                                (0, i.jsx)(e_.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            (0, i.jsx)(eA.A, {
                                                channel: t,
                                                whichPopoutIsOpen: m,
                                                setWhichPopoutIsOpen: g,
                                                remoteMode: B,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, i.jsx)(ey, {
                                  connectedEmbeddedActivity: X,
                                  currentUser: x,
                                  channel: t,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(I.f5, {
              value: ei,
              children: (0, i.jsx)(ev, { channel: t, cameraUnavailable: C, hasCameraPermission: v, currentUser: x }),
          });
};
