t.d(n, { Ay: () => eg, SZ: () => ej, rP: () => ev });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    o = t.n(r),
    c = t(925747),
    u = t(17928),
    d = t(554146),
    A = t(922016),
    h = t(844222),
    p = t(717421),
    m = t(827343),
    C = t(956793),
    x = t(401843),
    f = t(820284),
    j = t(933958),
    v = t(967812),
    I = t(793574),
    O = t(688810),
    T = t(313961),
    R = t(206018),
    g = t(329072),
    b = t(183184),
    N = t(384059),
    E = t(480890),
    S = t(379848),
    y = t(643501),
    P = t(857253),
    M = t(652896),
    k = t(880144),
    _ = t(338771),
    L = t(508654),
    U = t(984624),
    D = t(540157),
    V = t(267102),
    Y = t(526292),
    w = t(595134),
    G = t(123973),
    B = t(447404),
    X = t(246356),
    F = t(401685),
    K = t(710801),
    H = t(496841),
    z = t(383831),
    J = t(905216),
    W = t(577062),
    q = t(533978),
    $ = t(958449),
    Q = t(970636),
    Z = t(616356),
    ee = t(470710),
    en = t(51760),
    et = t(309010),
    el = t(287809),
    ei = t(151476),
    es = t(405018),
    ea = t(704877),
    er = t(173660),
    eo = t(324378),
    ec = t(530679),
    eu = t(848362),
    ed = t(222692),
    eA = t(702904),
    eh = t(471993),
    ep = t(442353),
    em = t(652215),
    eC = t(806931),
    ex = t(49999),
    ef = t(56640);
function ej(e, n) {
    if (en.Ay.isVideoEnabled() === e) return;
    let t = () => m.A.setVideoEnabled(e);
    (0, N.X)(I.A.VOICE_CONTROL_TRAY, N.O.CAMERA, e), e ? (0, ep.A)(t, n) : t();
}
function ev(e) {
    let { channel: n, currentUser: t, exitFullScreen: s, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: h } = (0, O.Ay)(),
        p = (0, V.Us)(),
        m = (0, u.yK)([Z.A], () => Z.A.getAllActiveStreams()),
        C = m.find((e) => e.ownerId === t.id),
        x = i.useRef(null),
        f = i.useRef(null),
        j = n.getGuildId(),
        v = i.useCallback(() => {
            if ((s?.(), !a)) return (0, eA.A)();
            (0, eh.A)(j, n.id, h);
        }, [j, n.id, a, s, h]),
        I = (0, Y.k0)(),
        [T, R] = i.useState(!1),
        g = () => {
            ((0, N.X)(c, N.O.STREAM, !0), a) ? v() : (0, eA.A)();
        },
        b = () => {
            (0, N.X)(c, N.O.STREAM, !1), (0, _.A)(C);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (() => {
                if (I && 0 === m.length)
                    return (0, l.jsx)(S.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    R(!0),
                                    (0, l.jsx)(w.b, {
                                        buttonRef: x,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            t(ex.i.USER_DISMISS), R(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(B.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(X.A, {
                            children: (0, l.jsx)(eu.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != C ? [C] : [],
                                handleGoLive: v,
                                appContext: p,
                                onClose: i,
                                onInteraction: eR("ManageStreamsMenu"),
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
                            children: ((e, n) => {
                                let { onClick: t, ...i } = e ?? { onClick: void 0 },
                                    s = null != C;
                                return (0, l.jsx)($.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: ef.uH,
                                    hasPermission: r,
                                    streamActive: null != C,
                                    isSelfStream: !0,
                                    onPopoutClick: s
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: T,
                                    buttonRef: x,
                                    onClick: null != C ? b : g,
                                });
                            })(t, i),
                        });
                    },
                }),
            }),
        ],
    });
}
function eI(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s } = e,
        a = n.getGuildId();
    return (0, v.A)(a, n.id)
        ? (0, l.jsx)("div", {
              className: ef.UD,
              children: (0, l.jsx)(eo.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let eO = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, O.Ay)(),
        o = (0, u.bG)([T.A], () => T.A.getSelectedParticipant(s.id)),
        { reducedMotion: d } = i.useContext(h.C),
        [m, f] = i.useState(!1),
        j = o?.id,
        v = (0, u.bG)([Z.A], () => (null != j ? Z.A.getActiveStreamForStreamKey(j) : null), [j]),
        I = o?.type === eC.lp.STREAM && null != v && v.ownerId !== n?.id,
        R = (0, u.yK)([Z.A], () =>
            Z.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        g = (0, L.Qs)(s.id),
        b = i.useRef(null),
        E = i.useCallback(
            () =>
                o?.type === eC.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : I
                      ? "STREAM"
                      : null != g
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, I, g],
        ),
        [S, y] = i.useState(E()),
        P = (0, p.z)(
            {
                opacity: m ? 0.2 : 1,
                transform: m && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: m ? 600 : 1e3, friction: 45, precision: 0.01, clamp: m },
                onRest: () => {
                    y(E()), f(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        E() !== S && f(!0);
    }, [S, E]);
    let k = i.useCallback(() => {
        if (null != v) (0, x.vN)((0, M._z)(v));
        else for (let e of R) (0, x.vN)((0, M._z)(e));
    }, [R, v]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: b,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(eu.A, {
                channel: s,
                currentUser: n,
                activeStreams: R,
                handleGoLive: em.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: eR("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: A.Y.Animation.FADE,
        children: (e, i) => {
            let { onClick: u } = e,
                { isShown: d } = i;
            return (0, l.jsx)(c.animated.div, {
                style: P,
                ref: b,
                children: ((e, i) => {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (S) {
                        case "ACTIVITY":
                            if (null == o || null == n || o.type !== eC.lp.ACTIVITY || null == a) return;
                            return (0, l.jsx)(z.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: R.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)($.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, N.X)(r, N.O.STOP_WATCHING), k();
                                },
                                onPopoutClick: R.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, l.jsx)(J.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, N.X)(r, N.O.DISCONNECT), t?.();
                                },
                                onPopoutClick: R.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(U.A, {
                                channelId: s.id,
                                onClick: () => {
                                    (0, N.X)(r, N.O.DISCONNECT), C.default.disconnect(), t?.();
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eT(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: s, currentUser: a } = e,
        r = (0, V.Us)(),
        { parentAnalyticsLocation: o } = (0, O.Ay)(),
        { reachedLimit: c, limit: d } = (0, es.A)(n),
        A = i.useCallback(() => {
            (0, N.X)(o, N.O.JOIN_VIDEO_CALL), (0, ep.A)(() => C.default.selectVoiceChannel(n.id, !0), r);
        }, [n.id, r, o]),
        h = i.useCallback(() => {
            t ? (0, ed.A)() : A();
        }, [t, A]),
        p = (0, u.bG)([ee.A], () => {
            let e = ee.A.getCall(n.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: ef.iE,
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
                className: ef.uH,
                onChange: A,
            }),
            (0, l.jsx)(H.A, { centerButton: !0, color: "join", channel: n, className: ef.uH }),
            p ? (0, l.jsx)(K.A, { color: "disconnect", channel: n, className: ef.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eR(e) {
    return (0, E.s)(e, I.A.VOICE_CONTROL_TRAY, { entrypoint: eC.GK.CARET });
}
let eg = function (e) {
    let { channel: n, className: t, onDisconnectCall: s, exitFullScreen: r, idleProps: c } = e,
        d = (0, F.Bx)(),
        h = i.useRef(null),
        [p, m] = i.useState(void 0),
        C = (0, u.bG)([el.default], () => {
            let e = el.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: x, enabled: v } = (0, ei.A)(),
        T = (0, ea.A)(n),
        { suppress: N, selfMute: E, mute: S } = (0, er.A)(n),
        { canGoLive: M } = (0, u.cf)([en.Ay], () => ({ canGoLive: (0, k.A)(en.Ay) })),
        _ = (0, P.A)(),
        L = (0, u.bG)([y.default], () => null != y.default.getAwaitingRemoteSessionInfo()),
        U = null != _,
        Y = (0, u.bG)([et.A], () => (_?.channelId ?? et.A.getVoiceChannelId()) === n.id),
        w = (0, u.bG)([j.Ay], () => j.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: B, limit: K } = (0, es.A)(n),
        { analyticsLocations: H } = (0, O.Ay)(I.A.VOICE_CONTROL_TRAY),
        z = (0, G.Ay)(n),
        J = i.useRef(null),
        $ = i.useRef(null),
        Z = (0, V.Us)();
    return Y
        ? (0, l.jsx)(O.f5, {
              value: H,
              children: (0, l.jsxs)(f.A, {
                  section: em.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: ef.rt, children: (0, l.jsx)(D.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: h,
                          className: a()(ef.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: ef.qi,
                                  children: [
                                      (0, l.jsx)(A.Y, {
                                          targetElementRef: J,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, l.jsx)(R.A, {
                                                      onInteraction: eR("AudioDeviceMenu"),
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
                                              return (0, l.jsxs)(X.A, { children: [t, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: A.Y.Animation.FADE,
                                          spacing: 8,
                                          children: (e, n) => {
                                              let { onClick: t } = e,
                                                  { isShown: i } = n;
                                              return (0, l.jsx)(W.A, {
                                                  ref: J,
                                                  centerButton: !0,
                                                  onPopoutClick: U ? null : t,
                                                  selfMute: E,
                                                  serverMute: S,
                                                  suppress: N,
                                                  popoutOpen: i,
                                                  awaitingRemote: L,
                                                  onClick: () => (0, b.A)(S, N, em.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !U &&
                                          (0, l.jsx)(A.Y, {
                                              targetElementRef: $,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, l.jsx)(X.A, {
                                                      children: (0, l.jsx)(g.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: eR("VideoDeviceMenu"),
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
                                                      hasPermission: T,
                                                      enabled: v,
                                                      cameraUnavailable: x,
                                                      onChange: ej,
                                                      onCameraUnavailable: ed.A,
                                                      channelLimitReached: B,
                                                      channelLimit: K,
                                                      popoutOpen: i,
                                                      onPopoutClick: t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < F.vs.MINIMAL
                                  ? (0, l.jsxs)("div", {
                                        className: ef.qi,
                                        children: [
                                            !U &&
                                                (0, l.jsx)(ev, {
                                                    channel: n,
                                                    currentUser: C,
                                                    exitFullScreen: r,
                                                    canGoLive: M,
                                                    hasPermission: T,
                                                }),
                                            !U &&
                                                (0, l.jsx)(eI, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: p,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            z &&
                                                (0, l.jsx)(q.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: p,
                                                    setWhichPopoutIsOpen: m,
                                                }),
                                            (0, l.jsx)(ec.A, {
                                                channel: n,
                                                whichPopoutIsOpen: p,
                                                setWhichPopoutIsOpen: m,
                                                remoteMode: U,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(eO, {
                                  connectedEmbeddedActivity: w,
                                  currentUser: C,
                                  channel: n,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(O.f5, {
              value: H,
              children: (0, l.jsx)(eT, { channel: n, cameraUnavailable: x, hasCameraPermission: T, currentUser: C }),
          });
};
