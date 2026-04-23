l.d(n, { Ay: () => ey, SZ: () => eI, rP: () => eg });
var t = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(284009),
    o = l.n(r),
    c = l(419354),
    u = l(17928),
    d = l(554146),
    A = l(922016),
    p = l(844222),
    h = l(717421),
    m = l(827343),
    f = l(956793),
    C = l(401843),
    x = l(820284),
    I = l(933958),
    g = l(967812),
    j = l(793574),
    v = l(688810),
    E = l(313961),
    T = l(206018),
    y = l(329072),
    N = l(183184),
    O = l(384059),
    b = l(480890),
    S = l(379848),
    R = l(643501),
    _ = l(857253),
    P = l(652896),
    M = l(880144),
    k = l(338771),
    L = l(508654),
    U = l(984624),
    G = l(540157),
    D = l(267102),
    F = l(526292),
    Y = l(595134),
    w = l(123973),
    V = l(447404),
    B = l(246356),
    K = l(401685),
    H = l(710801),
    X = l(496841),
    z = l(383831),
    W = l(905216),
    J = l(577062),
    Z = l(533978),
    q = l(958449),
    $ = l(970636),
    Q = l(616356),
    ee = l(470710),
    en = l(969341),
    el = l(309010),
    et = l(287809),
    ei = l(151476),
    ea = l(405018),
    es = l(704877),
    er = l(173660),
    eo = l(324378),
    ec = l(530679),
    eu = l(848362),
    ed = l(222692),
    eA = l(702904),
    ep = l(471993),
    eh = l(442353),
    em = l(652215),
    ef = l(806931),
    eC = l(49999),
    ex = l(56640);
function eI(e, n) {
    if (en.Ay.isVideoEnabled() === e) return;
    let l = () => m.A.setVideoEnabled(e);
    (0, O.X)(j.A.VOICE_CONTROL_TRAY, O.O.CAMERA, e), e ? (0, eh.A)(l, n) : l();
}
function eg(e) {
    let { channel: n, currentUser: l, exitFullScreen: a, canGoLive: s, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: p } = (0, v.Ay)(),
        h = (0, D.Us)(),
        m = (0, u.yK)([Q.A], () => Q.A.getAllActiveStreams()),
        f = m.find((e) => e.ownerId === l.id),
        C = i.useRef(null),
        x = i.useRef(null),
        I = n.getGuildId(),
        g = i.useCallback(() => {
            if ((a?.(), !s)) return (0, eA.A)();
            (0, ep.A)(I, n.id, p);
        }, [I, n.id, s, a, p]),
        j = (0, F.k0)(),
        [E, T] = i.useState(!1),
        y = () => {
            ((0, O.X)(c, O.O.STREAM, !0), s) ? g() : (0, eA.A)();
        },
        N = () => {
            (0, O.X)(c, O.O.STREAM, !1), (0, k.A)(f);
        };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (() => {
                if (j && 0 === m.length)
                    return (0, t.jsx)(S.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: l } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    T(!0),
                                    (0, t.jsx)(Y.b, {
                                        buttonRef: C,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            l(eC.i.USER_DISMISS), T(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, t.jsx)(V.A, {
                children: (0, t.jsx)(A.Y, {
                    targetElementRef: x,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, t.jsx)(B.A, {
                            children: (0, t.jsx)(eu.A, {
                                channel: n,
                                currentUser: l,
                                activeStreams: null != f ? [f] : [],
                                handleGoLive: g,
                                appContext: h,
                                onClose: i,
                                onInteraction: eT("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: A.Y.Animation.FADE,
                    children: (e, n) => {
                        let { ...l } = e,
                            { isShown: i } = n;
                        return (0, t.jsx)("div", {
                            ref: x,
                            children: ((e, n) => {
                                let { onClick: l, ...i } = e ?? { onClick: void 0 },
                                    a = null != f;
                                return (0, t.jsx)(q.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: ex.uH,
                                    hasPermission: r,
                                    streamActive: null != f,
                                    isSelfStream: !0,
                                    onPopoutClick: a
                                        ? function (e) {
                                              l?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: E,
                                    buttonRef: C,
                                    onClick: null != f ? N : y,
                                });
                            })(l, i),
                        });
                    },
                }),
            }),
        ],
    });
}
function ej(e) {
    let { channel: n, idle: l, whichPopoutIsOpen: i, setWhichPopoutIsOpen: a } = e,
        s = n.getGuildId();
    return (0, g.A)(s, n.id)
        ? (0, t.jsx)("div", {
              className: ex.UD,
              children: (0, t.jsx)(eo.K, { channel: n, idle: l, whichPopoutIsOpen: i, setWhichPopoutIsOpen: a }),
          })
        : null;
}
let ev = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: l, channel: a, connectedEmbeddedActivity: s } = e,
        { parentAnalyticsLocation: r } = (0, v.Ay)(),
        o = (0, u.bG)([E.A], () => E.A.getSelectedParticipant(a.id)),
        { reducedMotion: d } = i.useContext(p.C),
        [m, x] = i.useState(!1),
        I = o?.id,
        g = (0, u.bG)([Q.A], () => (null != I ? Q.A.getActiveStreamForStreamKey(I) : null), [I]),
        j = o?.type === ef.lp.STREAM && null != g && g.ownerId !== n?.id,
        T = (0, u.yK)([Q.A], () =>
            Q.A.getAllActiveStreamsForChannel(a.id).filter((e) => {
                let { ownerId: l } = e;
                return l !== n?.id;
            }),
        ),
        y = (0, L.Qs)(a.id),
        N = i.useRef(null),
        b = i.useCallback(
            () =>
                o?.type === ef.lp.ACTIVITY && o.applicationId === s?.applicationId
                    ? "ACTIVITY"
                    : j
                      ? "STREAM"
                      : null != y
                        ? "EVENT"
                        : "CALL",
            [o, s?.applicationId, j, y],
        ),
        [S, R] = i.useState(b()),
        _ = (0, h.z)(
            {
                opacity: m ? 0.2 : 1,
                transform: m && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: m ? 600 : 1e3, friction: 45, precision: 0.01, clamp: m },
                onRest: () => {
                    R(b()), x(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        b() !== S && x(!0);
    }, [S, b]);
    let M = i.useCallback(() => {
        if (null != g) (0, C.vN)((0, P._z)(g));
        else for (let e of T) (0, C.vN)((0, P._z)(e));
    }, [T, g]);
    return (0, t.jsx)(A.Y, {
        targetElementRef: N,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, t.jsx)(eu.A, {
                channel: a,
                currentUser: n,
                activeStreams: T,
                handleGoLive: em.FXj,
                hideSelfOptions: !0,
                onClose: l,
                onInteraction: eT("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: A.Y.Animation.FADE,
        children: (e, i) => {
            let { onClick: u } = e,
                { isShown: d } = i;
            return (0, t.jsx)(c.animated.div, {
                style: _,
                ref: N,
                children: ((e, i) => {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (S) {
                        case "ACTIVITY":
                            if (null == o || null == n || o.type !== ef.lp.ACTIVITY || null == s) return;
                            return (0, t.jsx)(z.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: s.location,
                                onPopoutClick: T.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, t.jsx)(q.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, O.X)(r, O.O.STOP_WATCHING), M();
                                },
                                onPopoutClick: T.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, t.jsx)(W.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, O.X)(r, O.O.DISCONNECT), l?.();
                                },
                                onPopoutClick: T.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, t.jsx)(U.A, {
                                channelId: a.id,
                                onClick: () => {
                                    (0, O.X)(r, O.O.DISCONNECT), f.default.disconnect(), l?.();
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eE(e) {
    let { channel: n, cameraUnavailable: l, hasCameraPermission: a, currentUser: s } = e,
        r = (0, D.Us)(),
        { parentAnalyticsLocation: o } = (0, v.Ay)(),
        { reachedLimit: c, limit: d } = (0, ea.A)(n),
        A = i.useCallback(() => {
            (0, O.X)(o, O.O.JOIN_VIDEO_CALL), (0, eh.A)(() => f.default.selectVoiceChannel(n.id, !0), r);
        }, [n.id, r, o]),
        p = i.useCallback(() => {
            l ? (0, ed.A)() : A();
        }, [l, A]),
        h = (0, u.bG)([ee.A], () => {
            let e = ee.A.getCall(n.id);
            return e?.ringing.includes(s.id) === !0;
        });
    return (0, t.jsxs)("div", {
        className: ex.iE,
        children: [
            (0, t.jsx)($.A, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: c,
                channelLimit: d,
                channel: n,
                cameraUnavailable: l,
                hasPermission: a,
                onCameraUnavailable: p,
                className: ex.uH,
                onChange: A,
            }),
            (0, t.jsx)(X.A, { centerButton: !0, color: "join", channel: n, className: ex.uH }),
            h ? (0, t.jsx)(H.A, { color: "disconnect", channel: n, className: ex.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eT(e) {
    return (0, b.s)(e, j.A.VOICE_CONTROL_TRAY, { entrypoint: ef.GK.CARET });
}
let ey = function (e) {
    let { channel: n, className: l, onDisconnectCall: a, exitFullScreen: r, idleProps: c } = e,
        d = (0, K.Bx)(),
        p = i.useRef(null),
        [h, m] = i.useState(void 0),
        f = (0, u.bG)([et.default], () => {
            let e = et.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: C, enabled: g } = (0, ei.A)(),
        E = (0, es.A)(n),
        { suppress: O, selfMute: b, mute: S } = (0, er.A)(n),
        { canGoLive: P } = (0, u.cf)([en.Ay], () => ({ canGoLive: (0, M.A)(en.Ay) })),
        k = (0, _.A)(),
        L = (0, u.bG)([R.default], () => null != R.default.getAwaitingRemoteSessionInfo()),
        U = null != k,
        F = (0, u.bG)([el.A], () => (k?.channelId ?? el.A.getVoiceChannelId()) === n.id),
        Y = (0, u.bG)([I.Ay], () => I.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: V, limit: H } = (0, ea.A)(n),
        { analyticsLocations: X } = (0, v.Ay)(j.A.VOICE_CONTROL_TRAY),
        z = (0, w.Ay)(n),
        W = i.useRef(null),
        q = i.useRef(null),
        Q = (0, D.Us)();
    return F
        ? (0, t.jsx)(v.f5, {
              value: X,
              children: (0, t.jsxs)(x.A, {
                  section: em.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, t.jsx)("div", { className: ex.rt, children: (0, t.jsx)(G.A, { channelId: n.id }) }),
                      (0, t.jsxs)("div", {
                          ref: p,
                          className: s()(ex.iE, l),
                          children: [
                              (0, t.jsxs)("div", {
                                  className: ex.qi,
                                  children: [
                                      (0, t.jsx)(A.Y, {
                                          targetElementRef: W,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  l = (0, t.jsx)(T.A, {
                                                      onInteraction: eT("AudioDeviceMenu"),
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
                                                      appContext: Q,
                                                  });
                                              return (0, t.jsxs)(B.A, { children: [l, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: A.Y.Animation.FADE,
                                          spacing: 8,
                                          children: (e, n) => {
                                              let { onClick: l } = e,
                                                  { isShown: i } = n;
                                              return (0, t.jsx)(J.A, {
                                                  ref: W,
                                                  centerButton: !0,
                                                  onPopoutClick: U ? null : l,
                                                  selfMute: b,
                                                  serverMute: S,
                                                  suppress: O,
                                                  popoutOpen: i,
                                                  awaitingRemote: L,
                                                  onClick: () => (0, N.A)(S, O, em.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !U &&
                                          (0, t.jsx)(A.Y, {
                                              targetElementRef: q,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, t.jsx)(B.A, {
                                                      children: (0, t.jsx)(y.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: eT("VideoDeviceMenu"),
                                                          appContext: Q,
                                                      }),
                                                  });
                                              },
                                              position: "top",
                                              align: "right",
                                              spacing: 16,
                                              animation: A.Y.Animation.FADE,
                                              children: (e, n) => {
                                                  let { onClick: l } = e,
                                                      { isShown: i } = n;
                                                  return (0, t.jsx)($.A, {
                                                      ref: q,
                                                      centerButton: !0,
                                                      hasPermission: E,
                                                      enabled: g,
                                                      cameraUnavailable: C,
                                                      onChange: eI,
                                                      onCameraUnavailable: ed.A,
                                                      channelLimitReached: V,
                                                      channelLimit: H,
                                                      popoutOpen: i,
                                                      onPopoutClick: l,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < K.vs.MINIMAL
                                  ? (0, t.jsxs)("div", {
                                        className: ex.qi,
                                        children: [
                                            !U &&
                                                (0, t.jsx)(eg, {
                                                    channel: n,
                                                    currentUser: f,
                                                    exitFullScreen: r,
                                                    canGoLive: P,
                                                    hasPermission: E,
                                                }),
                                            !U &&
                                                (0, t.jsx)(ej, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            z &&
                                                (0, t.jsx)(Z.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            (0, t.jsx)(ec.A, {
                                                channel: n,
                                                whichPopoutIsOpen: h,
                                                setWhichPopoutIsOpen: m,
                                                remoteMode: U,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, t.jsx)(ev, {
                                  connectedEmbeddedActivity: Y,
                                  currentUser: f,
                                  channel: n,
                                  onDisconnectCall: a,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, t.jsx)(v.f5, {
              value: X,
              children: (0, t.jsx)(eE, { channel: n, cameraUnavailable: C, hasCameraPermission: E, currentUser: f }),
          });
};
