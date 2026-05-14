t.d(n, { Ay: () => ej, SZ: () => ex, rP: () => eI });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    o = t.n(r),
    c = t(873174),
    u = t(17928),
    d = t(554146),
    A = t(922016),
    h = t(844222),
    m = t(717421),
    C = t(827343),
    E = t(730852),
    p = t(401843),
    g = t(820284),
    x = t(933958),
    I = t(967812),
    f = t(793574),
    T = t(688810),
    v = t(313961),
    _ = t(206018),
    j = t(329072),
    N = t(183184),
    O = t(384059),
    S = t(480890),
    b = t(379848),
    y = t(643501),
    R = t(857253),
    L = t(652896),
    M = t(880144),
    D = t(338771),
    P = t(508654),
    G = t(984624),
    k = t(394412),
    U = t(267102),
    V = t(526292),
    B = t(396495),
    H = t(123973),
    w = t(447404),
    Y = t(246356),
    K = t(401685),
    F = t(710801),
    X = t(496841),
    z = t(383831),
    W = t(905216),
    J = t(577062),
    q = t(533978),
    $ = t(958449),
    Q = t(970636),
    Z = t(616356),
    ee = t(470710),
    en = t(235058),
    et = t(309010),
    el = t(287809),
    ei = t(151476),
    es = t(405018),
    ea = t(704877),
    er = t(173660),
    eo = t(543274),
    ec = t(579153),
    eu = t(848362),
    ed = t(222692),
    eA = t(702904),
    eh = t(471993),
    em = t(442353),
    eC = t(652215),
    eE = t(806931),
    ep = t(49999),
    eg = t(56640);
function ex(e, n) {
    if (en.Ay.isVideoEnabled() === e) return;
    let t = () => C.A.setVideoEnabled(e);
    (0, O.X)(f.A.VOICE_CONTROL_TRAY, O.O.CAMERA, e), e ? (0, em.A)(t, n) : t();
}
function eI(e) {
    let { channel: n, currentUser: t, exitFullScreen: s, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: h } = (0, T.Ay)(),
        m = (0, U.Us)(),
        C = (0, u.yK)([Z.A], () => Z.A.getAllActiveStreams()),
        E = C.find((e) => e.ownerId === t.id),
        p = i.useRef(null),
        g = i.useRef(null),
        x = n.getGuildId(),
        I = i.useCallback(() => {
            if ((s?.(), !a)) return (0, eA.A)();
            (0, eh.A)(x, n.id, h);
        }, [x, n.id, a, s, h]),
        f = (0, V.k0)(),
        [v, _] = i.useState(!1),
        j = () => {
            ((0, O.X)(c, O.O.STREAM, !0), a) ? I() : (0, eA.A)();
        },
        N = () => {
            (0, O.X)(c, O.O.STREAM, !1), (0, D.A)(E);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (() => {
                if (f && 0 === C.length)
                    return (0, l.jsx)(b.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    _(!0),
                                    (0, l.jsx)(B.b, {
                                        buttonRef: p,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            t(ep.i.USER_DISMISS), _(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(w.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: g,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(Y.A, {
                            children: (0, l.jsx)(eu.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != E ? [E] : [],
                                handleGoLive: I,
                                appContext: m,
                                onClose: i,
                                onInteraction: e_("ManageStreamsMenu"),
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
                            ref: g,
                            children: ((e, n) => {
                                let { onClick: t, ...i } = e ?? { onClick: void 0 },
                                    s = null != E;
                                return (0, l.jsx)($.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: eg.uH,
                                    hasPermission: r,
                                    streamActive: null != E,
                                    isSelfStream: !0,
                                    onPopoutClick: s
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: v,
                                    buttonRef: p,
                                    onClick: null != E ? N : j,
                                });
                            })(t, i),
                        });
                    },
                }),
            }),
        ],
    });
}
function ef(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s } = e,
        a = n.getGuildId();
    return (0, I.A)(a, n.id)
        ? (0, l.jsx)("div", {
              className: eg.UD,
              children: (0, l.jsx)(eo.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let eT = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, T.Ay)(),
        o = (0, u.bG)([v.A], () => v.A.getSelectedParticipant(s.id)),
        { reducedMotion: d } = i.useContext(h.C),
        [C, g] = i.useState(!1),
        x = o?.id,
        I = (0, u.bG)([Z.A], () => (null != x ? Z.A.getActiveStreamForStreamKey(x) : null), [x]),
        f = o?.type === eE.lp.STREAM && null != I && I.ownerId !== n?.id,
        _ = (0, u.yK)([Z.A], () =>
            Z.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        j = (0, P.Qs)(s.id),
        N = i.useRef(null),
        S = i.useCallback(
            () =>
                o?.type === eE.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : f
                      ? "STREAM"
                      : null != j
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, f, j],
        ),
        [b, y] = i.useState(S()),
        R = (0, m.z)(
            {
                opacity: C ? 0.2 : 1,
                transform: C && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: C ? 600 : 1e3, friction: 45, precision: 0.01, clamp: C },
                onRest: () => {
                    y(S()), g(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        S() !== b && g(!0);
    }, [b, S]);
    let M = i.useCallback(() => {
        if (null != I) (0, p.vN)((0, L._z)(I));
        else for (let e of _) (0, p.vN)((0, L._z)(e));
    }, [_, I]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: N,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(eu.A, {
                channel: s,
                currentUser: n,
                activeStreams: _,
                handleGoLive: eC.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: e_("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: A.Y.Animation.FADE,
        children: (e, i) => {
            let { onClick: u } = e,
                { isShown: d } = i;
            return (0, l.jsx)(c.animated.div, {
                style: R,
                ref: N,
                children: ((e, i) => {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (b) {
                        case "ACTIVITY":
                            if (null == o || null == n || o.type !== eE.lp.ACTIVITY || null == a) return;
                            return (0, l.jsx)(z.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)($.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, O.X)(r, O.O.STOP_WATCHING), M();
                                },
                                onPopoutClick: _.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, l.jsx)(W.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, O.X)(r, O.O.DISCONNECT), t?.();
                                },
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(G.A, {
                                channelId: s.id,
                                onClick: () => {
                                    (0, O.X)(r, O.O.DISCONNECT), E.default.disconnect(), t?.();
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function ev(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: s, currentUser: a } = e,
        r = (0, U.Us)(),
        { parentAnalyticsLocation: o } = (0, T.Ay)(),
        { reachedLimit: c, limit: d } = (0, es.A)(n),
        A = i.useCallback(() => {
            (0, O.X)(o, O.O.JOIN_VIDEO_CALL), (0, em.A)(() => E.default.selectVoiceChannel(n.id, !0), r);
        }, [n.id, r, o]),
        h = i.useCallback(() => {
            t ? (0, ed.A)() : A();
        }, [t, A]),
        m = (0, u.bG)([ee.A], () => {
            let e = ee.A.getCall(n.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: eg.iE,
        children: [
            (0, l.jsx)(Q.A, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: c,
                channelLimit: d,
                channel: n,
                cameraUnavailable: t,
                hasPermission: s,
                onCameraUnavailable: h,
                className: eg.uH,
                onChange: A,
            }),
            (0, l.jsx)(X.A, { centerButton: !0, color: "join", channel: n, className: eg.uH }),
            m ? (0, l.jsx)(F.A, { color: "disconnect", channel: n, className: eg.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function e_(e) {
    return (0, S.s)(e, f.A.VOICE_CONTROL_TRAY, { entrypoint: eE.GK.CARET });
}
let ej = function (e) {
    let { channel: n, className: t, onDisconnectCall: s, exitFullScreen: r, idleProps: c } = e,
        d = (0, K.Bx)(),
        h = i.useRef(null),
        [m, C] = i.useState(void 0),
        E = (0, u.bG)([el.default], () => {
            let e = el.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: p, enabled: I } = (0, ei.A)(),
        v = (0, ea.A)(n),
        { suppress: O, selfMute: S, mute: b } = (0, er.A)(n),
        { canGoLive: L } = (0, u.cf)([en.Ay], () => ({ canGoLive: (0, M.A)(en.Ay) })),
        D = (0, R.A)(),
        P = (0, u.bG)([y.default], () => null != y.default.getAwaitingRemoteSessionInfo()),
        G = null != D,
        V = (0, u.bG)([et.A], () => (D?.channelId ?? et.A.getVoiceChannelId()) === n.id),
        B = (0, u.bG)([x.Ay], () => x.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: w, limit: F } = (0, es.A)(n),
        { analyticsLocations: X } = (0, T.Ay)(f.A.VOICE_CONTROL_TRAY),
        z = (0, H.Ay)(n),
        W = i.useRef(null),
        $ = i.useRef(null),
        Z = (0, U.Us)();
    return V
        ? (0, l.jsx)(T.f5, {
              value: X,
              children: (0, l.jsxs)(g.A, {
                  section: eC.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: eg.rt, children: (0, l.jsx)(k.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: h,
                          className: a()(eg.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: eg.qi,
                                  children: [
                                      (0, l.jsx)(A.Y, {
                                          targetElementRef: W,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, l.jsx)(_.A, {
                                                      onInteraction: e_("AudioDeviceMenu"),
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
                                                      appContext: Z,
                                                  });
                                              return (0, l.jsxs)(Y.A, { children: [t, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: A.Y.Animation.FADE,
                                          spacing: 8,
                                          children: (e, n) => {
                                              let { onClick: t } = e,
                                                  { isShown: i } = n;
                                              return (0, l.jsx)(J.A, {
                                                  ref: W,
                                                  centerButton: !0,
                                                  onPopoutClick: G ? null : t,
                                                  selfMute: S,
                                                  serverMute: b,
                                                  suppress: O,
                                                  popoutOpen: i,
                                                  awaitingRemote: P,
                                                  onClick: () => (0, N.A)(b, O, eC.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !G &&
                                          (0, l.jsx)(A.Y, {
                                              targetElementRef: $,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, l.jsx)(Y.A, {
                                                      children: (0, l.jsx)(j.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: e_("VideoDeviceMenu"),
                                                          appContext: Z,
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
                                                  return (0, l.jsx)(Q.A, {
                                                      ref: $,
                                                      centerButton: !0,
                                                      hasPermission: v,
                                                      enabled: I,
                                                      cameraUnavailable: p,
                                                      onChange: ex,
                                                      onCameraUnavailable: ed.A,
                                                      channelLimitReached: w,
                                                      channelLimit: F,
                                                      popoutOpen: i,
                                                      onPopoutClick: t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < K.vs.MINIMAL
                                  ? (0, l.jsxs)("div", {
                                        className: eg.qi,
                                        children: [
                                            !G &&
                                                (0, l.jsx)(eI, {
                                                    channel: n,
                                                    currentUser: E,
                                                    exitFullScreen: r,
                                                    canGoLive: L,
                                                    hasPermission: v,
                                                }),
                                            !G &&
                                                (0, l.jsx)(ef, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            z &&
                                                (0, l.jsx)(q.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            (0, l.jsx)(ec.A, {
                                                channel: n,
                                                whichPopoutIsOpen: m,
                                                setWhichPopoutIsOpen: C,
                                                remoteMode: G,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(eT, {
                                  connectedEmbeddedActivity: B,
                                  currentUser: E,
                                  channel: n,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(T.f5, {
              value: X,
              children: (0, l.jsx)(ev, { channel: n, cameraUnavailable: p, hasCameraPermission: v, currentUser: E }),
          });
};
