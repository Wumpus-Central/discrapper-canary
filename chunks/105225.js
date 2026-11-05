var i = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    o = t.n(r),
    c = t(120692),
    u = t(855986),
    d = t(554146),
    A = t(265872),
    h = t(844222),
    m = t(717421),
    g = t(827343),
    x = t(597798),
    C = t(401843),
    f = t(820284),
    p = t(933958),
    E = t(967812),
    I = t(793574),
    j = t(688810),
    v = t(628983),
    N = t(96020),
    _ = t(28499),
    T = t(183184),
    b = t(384059),
    S = t(480890),
    y = t(379848),
    O = t(643501),
    R = t(857253),
    P = t(652896),
    M = t(880144),
    D = t(338771),
    L = t(558076),
    G = t(360729),
    k = t(508654),
    U = t(984624),
    V = t(394412),
    B = t(267102),
    w = t(625075),
    H = t(526292),
    Y = t(396495),
    K = t(123973),
    z = t(447404),
    F = t(246356),
    X = t(401685),
    q = t(710801),
    J = t(496841),
    W = t(383831),
    Q = t(905216),
    $ = t(577062),
    Z = t(533978),
    ee = t(958449),
    en = t(970636),
    et = t(616356),
    ei = t(470710),
    el = t(754712),
    es = t(309010),
    ea = t(287809),
    er = t(151476),
    eo = t(182637),
    ec = t(704877),
    eu = t(173660),
    ed = t(543274),
    eA = t(579153),
    eh = t(848362),
    em = t(222692),
    eg = t(702904),
    ex = t(471993),
    eC = t(442353),
    ef = t(652215),
    ep = t(806931),
    eE = t(49999),
    eI = t(731854),
    ej = t(843395);
function ev(e, n) {
    el.Ay.isVideoEnabled() !== e && ((0, b.XJ)(I.A.VOICE_CONTROL_TRAY, b.OP.CAMERA, e), e ? (0, eC.A)(t, n) : t());
    function t() {
        return g.default.setVideoEnabled(e);
    }
}
function eN(e) {
    let {
            channel: n,
            currentUser: t,
            exitFullScreen: s,
            canGoLive: a,
            hasPermission: r,
            videoBlocked: o = !1,
            disabled: c,
        } = e,
        { parentAnalyticsLocation: h, analyticsLocations: m } = (0, j.Ay)(),
        g = (0, B.Us)(),
        x = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()),
        C = x.find((e) => e.ownerId === t.id),
        f = l.useRef(null),
        p = l.useRef(null),
        E = n.getGuildId(),
        I = l.useCallback(() => {
            if ((s?.(), !a)) return (0, eg.A)();
            (0, ex.A)(E, n.id, m);
        }, [E, n.id, a, s, m]),
        v = (0, H.k0)(),
        [N, _] = l.useState(!1);
    if (!(0, u.bG)([el.Ay], () => el.Ay.supports(eI.O5.VIDEO))) return null;
    function T() {
        ((0, b.XJ)(h, b.OP.STREAM, !0), a) ? I() : (0, eg.A)();
    }
    function S() {
        ((0, b.XJ)(h, b.OP.STREAM, !1), (0, D.A)(C));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (function () {
                if (v && 0 === x.length)
                    return (0, i.jsx)(y.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    _(!0),
                                    (0, i.jsx)(Y.b, {
                                        buttonRef: f,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            (t(eE.i.USER_DISMISS), _(!1));
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(z.A, {
                children: (0, i.jsx)(A.Y, {
                    targetElementRef: p,
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(F.A, {
                            children: (0, i.jsx)(eh.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != C ? [C] : [],
                                handleGoLive: I,
                                appContext: g,
                                onClose: l,
                                onInteraction: eS("ManageStreamsMenu"),
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
                            ref: p,
                            children: (function (e, n) {
                                let { onClick: t, ...l } = e ?? { onClick: void 0 },
                                    s = null != C;
                                return (0, i.jsx)(ee.h, {
                                    ...l,
                                    centerButton: !0,
                                    disabled: c || !r,
                                    className: ej.uH,
                                    hasPermission: r,
                                    streamActive: null != C,
                                    videoBlocked: o,
                                    isSelfStream: !0,
                                    onPopoutClick: s
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: N,
                                    buttonRef: f,
                                    onClick: null != C ? S : T,
                                });
                            })(t, l),
                        });
                    },
                }),
            }),
        ],
    });
}
function e_(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s } = e,
        a = n.getGuildId();
    return (0, E.A)(a, n.id)
        ? (0, i.jsx)("div", {
              className: ej.UD,
              children: (0, i.jsx)(ed.K, { channel: n, idle: t, whichPopoutIsOpen: l, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let eT = l.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, j.Ay)(),
        o = (0, u.bG)([v.A], () => v.A.getSelectedParticipant(s.id)),
        { reducedMotion: d } = l.useContext(h.C),
        [g, f] = l.useState(!1),
        p = o?.id,
        E = (0, u.bG)([et.A], () => (null != p ? et.A.getActiveStreamForStreamKey(p) : null), [p]),
        I = o?.type === ep.lp.STREAM && null != E && E.ownerId !== n?.id,
        N = (0, u.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        _ = (0, u.bG)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(s.id).some((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        T = (0, u.bG)([L.A], () => L.A.isVisible(s.id)),
        { enabled: S } = (0, G.mf)({ guildId: s.guild_id, location: "CenterControlTray" }),
        y = _ && T && S,
        O = (0, k.Qs)(s.id),
        R = l.useRef(null),
        M = l.useCallback(
            () =>
                o?.type === ep.lp.ACTIVITY && (null != o.frameId || o.applicationId === a?.applicationId)
                    ? "ACTIVITY"
                    : I || y
                      ? "STREAM"
                      : null != O
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, I, y, O],
        ),
        [D, V] = l.useState(M()),
        B = (0, m.z)(
            {
                opacity: g ? 0.2 : 1,
                transform: g && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: g ? 600 : 1e3, friction: 45, precision: 0.01, clamp: g },
                onRest: () => {
                    (V(M()), f(!1));
                },
            },
            "animate-always",
        );
    l.useEffect(() => {
        M() !== D && f(!0);
    }, [D, M]);
    let w = l.useCallback(() => {
        if (null != E) (0, C.vN)((0, P._z)(E));
        else for (let e of N) (0, C.vN)((0, P._z)(e));
    }, [N, E]);
    return (0, i.jsx)(A.Y, {
        targetElementRef: R,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eh.A, {
                channel: s,
                currentUser: n,
                activeStreams: N,
                handleGoLive: ef.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: eS("ManageStreamsMenu"),
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
                    switch (D) {
                        case "ACTIVITY":
                            if (null == o || null == n || o.type !== ep.lp.ACTIVITY) return;
                            if (null != o.frameId)
                                return (0, i.jsx)(W.A, {
                                    ...c,
                                    frameId: o.frameId,
                                    color: "disconnect",
                                    onPopoutClick: N.length > 0 ? l : null,
                                });
                            if (null == a) return;
                            return (0, i.jsx)(W.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: N.length > 0 ? l : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)(ee.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, b.XJ)(r, b.OP.STOP_WATCHING), w());
                                },
                                onPopoutClick: N.length > 1 ? l : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, i.jsx)(Q.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    ((0, b.XJ)(r, b.OP.DISCONNECT), t?.());
                                },
                                onPopoutClick: N.length > 0 ? l : null,
                            });
                        case "EVENT":
                            return (0, i.jsx)(U.A, {
                                channelId: s.id,
                                onClick: () => {
                                    ((0, b.XJ)(r, b.OP.DISCONNECT), x.default.disconnect(), t?.());
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eb(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: s, videoBlocked: a = !1, currentUser: r } = e,
        o = (0, B.Us)(),
        { parentAnalyticsLocation: c } = (0, j.Ay)(),
        { reachedLimit: d, limit: A } = (0, eo.A)(n),
        h = l.useCallback(() => {
            ((0, b.XJ)(c, b.OP.JOIN_VIDEO_CALL),
                (0, eC.A)(function () {
                    return x.default.selectVoiceChannel(n.id, !0);
                }, o));
        }, [n.id, o, c]),
        m = l.useCallback(() => {
            t || a ? (0, em.A)() : h();
        }, [t, a, h]),
        g = (0, u.bG)([ei.A], () => {
            let e = ei.A.getCall(n.id);
            return e?.ringing.includes(r.id) === !0;
        });
    return (0, i.jsxs)("div", {
        className: ej.iE,
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
                onCameraUnavailable: m,
                className: ej.uH,
                onChange: h,
            }),
            (0, i.jsx)(J.A, { centerButton: !0, color: "join", channel: n, className: ej.uH }),
            g ? (0, i.jsx)(q.A, { color: "disconnect", channel: n, className: ej.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eS(e) {
    return (0, S.s)(e, I.A.VOICE_CONTROL_TRAY, { entrypoint: ep.GK.CARET });
}
t.d(
    n,
    {},
    {
        Ay: function (e) {
            let { channel: n, className: t, onDisconnectCall: s, exitFullScreen: r, idleProps: c } = e,
                d = (0, X.Bx)(),
                h = l.useRef(null),
                [m, g] = l.useState(void 0),
                x = (0, u.bG)([ea.default], () => {
                    let e = ea.default.getCurrentUser();
                    return (o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e);
                }),
                { cameraUnavailable: C, enabled: E } = (0, er.A)(),
                v = !w.k.useConfig({ location: "CenterControlTray" }).videoEnabled,
                b = (0, ec.A)(n),
                { suppress: S, selfMute: y, mute: P } = (0, eu.A)(n),
                { canGoLive: D } = (0, u.cf)([el.Ay], () => ({ canGoLive: (0, M.A)(el.Ay) })),
                L = (0, R.A)(),
                G = (0, u.bG)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()),
                k = null != L,
                U = (0, u.bG)([es.Ay], () => (L?.channelId ?? es.Ay.getVoiceChannelId()) === n.id),
                H = (0, u.bG)([p.Ay], () => p.Ay.getCurrentEmbeddedActivity()),
                { reachedLimit: Y, limit: z } = (0, eo.A)(n),
                { analyticsLocations: q } = (0, j.Ay)(I.A.VOICE_CONTROL_TRAY),
                J = (0, K.Ay)(n),
                W = l.useRef(null),
                Q = l.useRef(null),
                ee = (0, B.Us)();
            return U
                ? (0, i.jsx)(j.f5, {
                      value: q,
                      children: (0, i.jsxs)(f.A, {
                          section: ef.JJy.VOICE_CONTROL_TRAY,
                          children: [
                              (0, i.jsx)("div", { className: ej.rt, children: (0, i.jsx)(V.A, { channelId: n.id }) }),
                              (0, i.jsxs)("div", {
                                  ref: h,
                                  className: a()(ej.iE, t),
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: ej.qi,
                                          children: [
                                              (0, i.jsx)(A.Y, {
                                                  targetElementRef: W,
                                                  renderPopout: (e) => {
                                                      let { closePopout: n } = e,
                                                          t = (0, i.jsx)(N.A, {
                                                              onInteraction: eS("AudioDeviceMenu"),
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
                                                      return (0, i.jsxs)(F.A, { children: [t, " "] });
                                                  },
                                                  align: "center",
                                                  position: "top",
                                                  animation: A.Y.Animation.FADE,
                                                  spacing: 8,
                                                  children: (e, n) => {
                                                      let { onClick: t } = e,
                                                          { isShown: l } = n;
                                                      return (0, i.jsx)($.A, {
                                                          ref: W,
                                                          centerButton: !0,
                                                          onPopoutClick: k ? null : t,
                                                          selfMute: y,
                                                          serverMute: P,
                                                          suppress: S,
                                                          popoutOpen: l,
                                                          awaitingRemote: G,
                                                          onClick: () => (0, T.A)(P, S, ef.JJy.VOICE_CONTROL_TRAY),
                                                      });
                                                  },
                                              }),
                                              !k &&
                                                  (0, i.jsx)(A.Y, {
                                                      targetElementRef: Q,
                                                      renderPopout: (e) => {
                                                          let { closePopout: n } = e;
                                                          return (0, i.jsx)(F.A, {
                                                              children: (0, i.jsx)(_.A, {
                                                                  onClose: n,
                                                                  minimal: !0,
                                                                  onInteraction: eS("VideoDeviceMenu"),
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
                                                              hasPermission: b,
                                                              enabled: E,
                                                              cameraUnavailable: C,
                                                              videoBlocked: v,
                                                              onChange: ev,
                                                              onCameraUnavailable: em.A,
                                                              channelLimitReached: Y,
                                                              channelLimit: z,
                                                              popoutOpen: l,
                                                              onPopoutClick: C ? null : t,
                                                          });
                                                      },
                                                  }),
                                          ],
                                      }),
                                      d < X.vs.MINIMAL
                                          ? (0, i.jsxs)("div", {
                                                className: ej.qi,
                                                children: [
                                                    !k &&
                                                        (0, i.jsx)(eN, {
                                                            channel: n,
                                                            currentUser: x,
                                                            exitFullScreen: r,
                                                            canGoLive: D,
                                                            hasPermission: b,
                                                            videoBlocked: v,
                                                        }),
                                                    !k &&
                                                        (0, i.jsx)(e_, {
                                                            channel: n,
                                                            idle: c?.idle ?? !0,
                                                            whichPopoutIsOpen: m,
                                                            setWhichPopoutIsOpen: g,
                                                        }),
                                                    J &&
                                                        (0, i.jsx)(Z.A, {
                                                            channel: n,
                                                            themeable: !0,
                                                            whichPopoutIsOpen: m,
                                                            setWhichPopoutIsOpen: g,
                                                            idle: c?.idle ?? !0,
                                                        }),
                                                    (0, i.jsx)(eA.A, {
                                                        channel: n,
                                                        whichPopoutIsOpen: m,
                                                        setWhichPopoutIsOpen: g,
                                                        remoteMode: k,
                                                    }),
                                                ],
                                            })
                                          : null,
                                      (0, i.jsx)(eT, {
                                          connectedEmbeddedActivity: H,
                                          currentUser: x,
                                          channel: n,
                                          onDisconnectCall: s,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, i.jsx)(j.f5, {
                      value: q,
                      children: (0, i.jsx)(eb, {
                          channel: n,
                          cameraUnavailable: C,
                          hasCameraPermission: b,
                          videoBlocked: v,
                          currentUser: x,
                      }),
                  });
        },
        SZ: ev,
        rP: eN,
    },
);
