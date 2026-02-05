n.d(t, { Ay: () => ev, SZ: () => eI, rP: () => eS });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(92674),
    c = n(311907),
    u = n(554146),
    h = n(397927),
    A = n(827343),
    g = n(442433),
    m = n(956793),
    p = n(401843),
    _ = n(820284),
    x = n(933958),
    f = n(967812),
    E = n(793574),
    C = n(688810),
    I = n(313961),
    S = n(385318),
    b = n(206018),
    N = n(750765),
    T = n(183184),
    j = n(384059),
    v = n(480890),
    y = n(379848),
    R = n(643501),
    O = n(857253),
    L = n(652896),
    D = n(880144),
    M = n(338771),
    G = n(508654),
    U = n(984624),
    P = n(394412),
    k = n(267102),
    w = n(526292),
    V = n(396495),
    B = n(478564),
    H = n(123973),
    F = n(447404),
    Y = n(246356),
    W = n(710801),
    K = n(496841),
    z = n(383831),
    X = n(905216),
    q = n(577062),
    J = n(533978),
    Q = n(958449),
    Z = n(970636),
    $ = n(996744),
    ee = n(85612),
    et = n(616356),
    en = n(470710),
    ei = n(430452),
    el = n(309010),
    es = n(287809),
    ea = n(151476),
    er = n(405018),
    eo = n(704877),
    ed = n(173660),
    ec = n(543274),
    eu = n(579153),
    eh = n(152535),
    eA = n(848362),
    eg = n(222692),
    em = n(702904),
    ep = n(471993),
    e_ = n(442353),
    ex = n(652215),
    ef = n(806931),
    eE = n(49999),
    eC = n(913957);
function eI(e, t) {
    if (ei.A.isVideoEnabled() === e) return;
    let n = () => A.A.setVideoEnabled(e);
    (0, j.X)(E.A.VOICE_CONTROL_TRAY, j.O.CAMERA, e), e ? (0, e_.A)(n, t) : n();
}
function eS(e) {
    let { channel: t, currentUser: n, exitFullScreen: s, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: d, analyticsLocations: A } = (0, C.Ay)(),
        g = (0, k.Us)(),
        m = (0, c.yK)([et.A], () => et.A.getAllActiveStreams()),
        p = m.find((e) => e.ownerId === n.id),
        _ = l.useRef(null),
        x = l.useRef(null),
        f = t.getGuildId(),
        E = l.useCallback(() => {
            if ((s?.(), !a)) return (0, em.A)();
            (0, ep.A)(f, t.id, A);
        }, [f, t.id, a, s, A]),
        I = (0, w.k0)(),
        [S, b] = l.useState(!1),
        N = () => {
            ((0, j.X)(d, j.O.STREAM, !0), a) ? E() : (0, em.A)();
        },
        T = () => {
            (0, j.X)(d, j.O.STREAM, !1), (0, M.A)(p);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (() => {
                if (I && 0 === m.length)
                    return (0, i.jsx)(y.Ay, {
                        contentTypes: [u.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    b(!0),
                                    (0, i.jsx)(V.b, {
                                        buttonRef: _,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eE.i.USER_DISMISS), b(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(F.A, {
                children: (0, i.jsx)(h.YNO, {
                    targetElementRef: x,
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(Y.A, {
                            children: (0, i.jsx)(eA.A, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != p ? [p] : [],
                                handleGoLive: E,
                                appContext: g,
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
                            ref: x,
                            children: ((e, t) => {
                                let { onClick: n, ...l } = e ?? { onClick: void 0 },
                                    s = null != p;
                                return (0, i.jsx)(Q.h, {
                                    ...l,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: eC.uH,
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
                                    renderNUXHighlight: S,
                                    buttonRef: _,
                                    onClick: null != p ? T : N,
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
    return (0, f.A)(a, t.id)
        ? (0, i.jsx)("div", {
              className: eC.UD,
              children: (0, i.jsx)(ec.K, { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let eN = l.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, C.Ay)(),
        o = (0, c.bG)([I.A], () => I.A.getSelectedParticipant(s.id)),
        { reducedMotion: u } = l.useContext(h.CZY),
        [A, g] = l.useState(!1),
        _ = o?.id,
        x = (0, c.bG)([et.A], () => (null != _ ? et.A.getActiveStreamForStreamKey(_) : null), [_]),
        f = o?.type === ef.lp.STREAM && null != x && x.ownerId !== t?.id,
        E = (0, c.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== t?.id;
            }),
        ),
        S = (0, G.Qs)(s.id),
        b = l.useRef(null),
        N = l.useCallback(
            () =>
                o?.type === ef.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : f
                      ? "STREAM"
                      : null != S
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, f, S],
        ),
        [T, v] = l.useState(N()),
        y = (0, h.zhh)(
            {
                opacity: A ? 0.2 : 1,
                transform: A && !u.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: A ? 600 : 1e3, friction: 45, precision: 0.01, clamp: A },
                onRest: () => {
                    v(N()), g(!1);
                },
            },
            "animate-always",
        );
    l.useEffect(() => {
        N() !== T && g(!0);
    }, [T, N]);
    let R = l.useCallback(() => {
        if (null != x) (0, p.vN)((0, L._z)(x));
        else for (let e of E) (0, p.vN)((0, L._z)(e));
    }, [E, x]);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: b,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(eA.A, {
                channel: s,
                currentUser: t,
                activeStreams: E,
                handleGoLive: ex.FXj,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: ej("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: h.YNO.Animation.FADE,
        children: (e, l) => {
            let { onClick: c } = e,
                { isShown: u } = l;
            return (0, i.jsx)(d.animated.div, {
                style: y,
                ref: b,
                children: ((e, l) => {
                    let d = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (T) {
                        case "ACTIVITY":
                            if (null == o || null == t || o.type !== ef.lp.ACTIVITY || null == a) return;
                            return (0, i.jsx)(z.A, {
                                ...d,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: E.length > 0 ? l : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)(Q.h, {
                                ...d,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, j.X)(r, j.O.STOP_WATCHING), R();
                                },
                                onPopoutClick: E.length > 1 ? l : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, i.jsx)(X.A, {
                                ...d,
                                color: "disconnect",
                                onClick: () => {
                                    (0, j.X)(r, j.O.DISCONNECT), n?.();
                                },
                                onPopoutClick: E.length > 0 ? l : null,
                            });
                        case "EVENT":
                            return (0, i.jsx)(U.A, {
                                channelId: s.id,
                                onClick: () => {
                                    (0, j.X)(r, j.O.DISCONNECT), m.default.disconnect(), n?.();
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
        r = (0, k.Us)(),
        { parentAnalyticsLocation: o } = (0, C.Ay)(),
        { reachedLimit: d, limit: u } = (0, er.A)(t),
        h = l.useCallback(() => {
            (0, j.X)(o, j.O.JOIN_VIDEO_CALL), (0, e_.A)(() => m.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r, o]),
        A = l.useCallback(() => {
            n ? (0, eg.A)() : h();
        }, [n, h]),
        g = (0, c.bG)([en.A], () => {
            let e = en.A.getCall(t.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, i.jsxs)("div", {
        className: eC.iE,
        children: [
            (0, i.jsx)(Z.A, {
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
                className: eC.uH,
                onChange: h,
            }),
            (0, i.jsx)(K.A, { centerButton: !0, color: "join", channel: t, className: eC.uH }),
            g ? (0, i.jsx)(W.A, { color: "disconnect", channel: t, className: eC.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function ej(e) {
    return (0, v.s)(e, E.A.VOICE_CONTROL_TRAY, { entrypoint: ef.GK.CARET });
}
let ev = function (e) {
    let { channel: t, className: n, onDisconnectCall: s, exitFullScreen: r, idleProps: d } = e,
        u = l.useRef(null),
        [A, m] = l.useState(void 0),
        p = (0, c.bG)([es.default], () => {
            let e = es.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: f, enabled: I } = (0, ea.A)(),
        j = (0, eo.A)(t),
        { suppress: v, selfMute: y, mute: L } = (0, ed.A)(t),
        { canGoLive: M } = (0, c.cf)([ei.A], () => ({ canGoLive: (0, D.A)(ei.A) })),
        G = (0, O.A)(),
        U = (0, c.bG)([R.default], () => null != R.default.getAwaitingRemoteSessionInfo()),
        w = null != G,
        V = (0, c.bG)([el.A], () => (G?.channelId ?? el.A.getVoiceChannelId()) === t.id),
        F = (0, B.A)({ channelId: t.id, location: "center-control-tray" }),
        W = (0, c.bG)([x.Ay], () => x.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: K, limit: z } = (0, er.A)(t),
        { analyticsLocations: X } = (0, C.Ay)(E.A.VOICE_CONTROL_TRAY),
        Q = (0, $.Cg)({ location: E.A.VOICE_CONTROL_TRAY, autoTrackExposure: !0 }),
        et = (0, H.A)(t),
        en = l.useRef(null),
        ec = l.useRef(null),
        eA = (0, k.Us)(),
        em = Q
            ? (e) => {
                  (0, g.L3)(e, () =>
                      Promise.resolve(() =>
                          (0, i.jsx)(S.default, {
                              onClose: g.Z_,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: ej("AudioDeviceMenu"),
                              appContext: eA,
                          }),
                      ),
                  );
              }
            : void 0;
    return V
        ? (0, i.jsx)(C.f5, {
              value: X,
              children: (0, i.jsxs)(_.A, {
                  section: ex.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", { className: eC.rt, children: (0, i.jsx)(P.A, { channelId: t.id }) }),
                      (0, i.jsxs)("div", {
                          ref: u,
                          className: a()(eC.iE, n),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eC.qi,
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
                                                            appContext: eA,
                                                        })),
                                                  (0, i.jsxs)(Y.A, { children: [t, " "] })
                                              );
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: h.YNO.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: l } = t;
                                              return (0, i.jsx)(q.A, {
                                                  ref: en,
                                                  centerButton: !0,
                                                  onPopoutClick: w ? null : n,
                                                  selfMute: y,
                                                  serverMute: L,
                                                  suppress: v,
                                                  popoutOpen: l,
                                                  awaitingRemote: U,
                                                  onClick: () => (0, T.A)(L, v, ex.JJy.VOICE_CONTROL_TRAY),
                                                  onContextMenu: em,
                                              });
                                          },
                                      }),
                                      !w &&
                                          (0, i.jsx)(h.YNO, {
                                              targetElementRef: ec,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(Y.A, {
                                                      children: (0, i.jsx)(N.A, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: ej("VideoDeviceMenu"),
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
                                                  return (0, i.jsx)(Z.A, {
                                                      ref: ec,
                                                      centerButton: !0,
                                                      hasPermission: j,
                                                      enabled: I,
                                                      cameraUnavailable: f,
                                                      onChange: eI,
                                                      onCameraUnavailable: eg.A,
                                                      channelLimitReached: K,
                                                      channelLimit: z,
                                                      popoutOpen: l,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eC.qi,
                                  children: [
                                      !w &&
                                          (0, i.jsx)(eS, {
                                              channel: t,
                                              currentUser: p,
                                              exitFullScreen: r,
                                              canGoLive: M,
                                              hasPermission: j,
                                          }),
                                      !w &&
                                          (0, i.jsx)(eb, {
                                              channel: t,
                                              idle: d?.idle ?? !0,
                                              whichPopoutIsOpen: A,
                                              setWhichPopoutIsOpen: m,
                                          }),
                                      et &&
                                          (0, i.jsx)(J.A, {
                                              channel: t,
                                              themeable: !0,
                                              whichPopoutIsOpen: A,
                                              setWhichPopoutIsOpen: m,
                                          }),
                                      F &&
                                          (0, i.jsx)(eh.A, {
                                              channel: t,
                                              themeable: !0,
                                              whichPopoutIsOpen: A,
                                              setWhichPopoutIsOpen: m,
                                          }),
                                      (0, i.jsx)(eu.A, {
                                          channel: t,
                                          whichPopoutIsOpen: A,
                                          setWhichPopoutIsOpen: m,
                                          remoteMode: w,
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(eN, {
                                  connectedEmbeddedActivity: W,
                                  currentUser: p,
                                  channel: t,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(C.f5, {
              value: X,
              children: (0, i.jsx)(eT, { channel: t, cameraUnavailable: f, hasCameraPermission: j, currentUser: p }),
          });
};
