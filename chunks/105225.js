t.d(n, { Ay: () => eS, SZ: () => eT, rP: () => ev });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    o = t.n(r),
    c = t(580929),
    u = t(17928),
    d = t(554146),
    A = t(922016),
    h = t(844222),
    m = t(717421),
    C = t(827343),
    E = t(730852),
    p = t(401843),
    x = t(820284),
    g = t(933958),
    I = t(967812),
    f = t(793574),
    T = t(688810),
    v = t(313961),
    j = t(829773),
    _ = t(329072),
    N = t(183184),
    O = t(384059),
    S = t(480890),
    b = t(379848),
    y = t(643501),
    R = t(857253),
    L = t(652896),
    M = t(880144),
    D = t(338771),
    P = t(558076),
    G = t(360729),
    k = t(508654),
    U = t(984624),
    V = t(394412),
    B = t(267102),
    H = t(526292),
    w = t(396495),
    Y = t(123973),
    K = t(447404),
    F = t(246356),
    X = t(401685),
    z = t(710801),
    W = t(741781),
    J = t(496841),
    q = t(383831),
    $ = t(905216),
    Q = t(577062),
    Z = t(533978),
    ee = t(958449),
    en = t(970636),
    et = t(616356),
    el = t(470710),
    ei = t(451409),
    es = t(309010),
    ea = t(287809),
    er = t(151476),
    eo = t(405018),
    ec = t(704877),
    eu = t(173660),
    ed = t(543274),
    eA = t(579153),
    eh = t(848362),
    em = t(222692),
    eC = t(702904),
    eE = t(471993),
    ep = t(442353),
    ex = t(652215),
    eg = t(806931),
    eI = t(49999),
    ef = t(354944);
function eT(e, n) {
    ei.Ay.isVideoEnabled() !== e && ((0, O.X)(f.A.VOICE_CONTROL_TRAY, O.O.CAMERA, e), e ? (0, ep.A)(t, n) : t());
    function t() {
        return C.A.setVideoEnabled(e);
    }
}
function ev(e) {
    let { channel: n, currentUser: t, exitFullScreen: s, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: h } = (0, T.Ay)(),
        m = (0, B.Us)(),
        C = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()),
        E = C.find((e) => e.ownerId === t.id),
        p = i.useRef(null),
        x = i.useRef(null),
        g = n.getGuildId(),
        I = i.useCallback(() => {
            if ((s?.(), !a)) return (0, eC.A)();
            (0, eE.A)(g, n.id, h);
        }, [g, n.id, a, s, h]),
        f = (0, H.k0)(),
        [v, j] = i.useState(!1);
    function _() {
        ((0, O.X)(c, O.O.STREAM, !0), a) ? I() : (0, eC.A)();
    }
    function N() {
        (0, O.X)(c, O.O.STREAM, !1), (0, D.A)(E);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (function () {
                if (f && 0 === C.length)
                    return (0, l.jsx)(b.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    j(!0),
                                    (0, l.jsx)(w.b, {
                                        buttonRef: p,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            t(eI.i.USER_DISMISS), j(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(K.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: x,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(F.A, {
                            children: (0, l.jsx)(eh.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != E ? [E] : [],
                                handleGoLive: I,
                                appContext: m,
                                onClose: i,
                                onInteraction: eO("ManageStreamsMenu"),
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
                            ref: x,
                            children: (function (e, n) {
                                let { onClick: t, ...i } = e ?? { onClick: void 0 },
                                    s = null != E;
                                return (0, l.jsx)(ee.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: ef.uH,
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
                                    onClick: null != E ? N : _,
                                });
                            })(t, i),
                        });
                    },
                }),
            }),
        ],
    });
}
function ej(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s } = e,
        a = n.getGuildId();
    return (0, I.A)(a, n.id)
        ? (0, l.jsx)("div", {
              className: ef.UD,
              children: (0, l.jsx)(ed.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let e_ = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, T.Ay)(),
        o = (0, u.bG)([v.A], () => v.A.getSelectedParticipant(s.id)),
        { reducedMotion: d } = i.useContext(h.C),
        [C, x] = i.useState(!1),
        g = o?.id,
        I = (0, u.bG)([et.A], () => (null != g ? et.A.getActiveStreamForStreamKey(g) : null), [g]),
        f = o?.type === eg.lp.STREAM && null != I && I.ownerId !== n?.id,
        j = (0, u.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        _ = (0, k.Qs)(s.id),
        N = i.useRef(null),
        S = i.useCallback(
            () =>
                o?.type === eg.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : f
                      ? "STREAM"
                      : null != _
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, f, _],
        ),
        [b, y] = i.useState(S()),
        R = (0, m.z)(
            {
                opacity: C ? 0.2 : 1,
                transform: C && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: C ? 600 : 1e3, friction: 45, precision: 0.01, clamp: C },
                onRest: () => {
                    y(S()), x(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        S() !== b && x(!0);
    }, [b, S]);
    let M = i.useCallback(() => {
        if (null != I) (0, p.vN)((0, L._z)(I));
        else for (let e of j) (0, p.vN)((0, L._z)(e));
    }, [j, I]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: N,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(eh.A, {
                channel: s,
                currentUser: n,
                activeStreams: j,
                handleGoLive: ex.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: eO("ManageStreamsMenu"),
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
                            if (null == o || null == n || o.type !== eg.lp.ACTIVITY || null == a) return;
                            return (0, l.jsx)(q.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: j.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)(ee.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, O.X)(r, O.O.STOP_WATCHING), M();
                                },
                                onPopoutClick: j.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, l.jsx)($.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, O.X)(r, O.O.DISCONNECT), t?.();
                                },
                                onPopoutClick: j.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(U.A, {
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
function eN(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: s, currentUser: a } = e,
        r = (0, B.Us)(),
        { parentAnalyticsLocation: o } = (0, T.Ay)(),
        { reachedLimit: c, limit: d } = (0, eo.A)(n),
        A = i.useCallback(() => {
            (0, O.X)(o, O.O.JOIN_VIDEO_CALL),
                (0, ep.A)(function () {
                    return E.default.selectVoiceChannel(n.id, !0);
                }, r);
        }, [n.id, r, o]),
        h = i.useCallback(() => {
            t ? (0, em.A)() : A();
        }, [t, A]),
        m = (0, u.bG)([el.A], () => {
            let e = el.A.getCall(n.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: ef.iE,
        children: [
            (0, l.jsx)(en.A, {
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
            (0, l.jsx)(J.A, { centerButton: !0, color: "join", channel: n, className: ef.uH }),
            m ? (0, l.jsx)(z.A, { color: "disconnect", channel: n, className: ef.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eO(e) {
    return (0, S.s)(e, f.A.VOICE_CONTROL_TRAY, { entrypoint: eg.GK.CARET });
}
let eS = function (e) {
    let { channel: n, className: t, onDisconnectCall: s, exitFullScreen: r, idleProps: c } = e,
        d = (0, X.Bx)(),
        h = i.useRef(null),
        [m, C] = i.useState(void 0),
        E = (0, u.bG)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: p, enabled: I } = (0, er.A)(),
        v = (0, ec.A)(n),
        { suppress: O, selfMute: S, mute: b } = (0, eu.A)(n),
        { canGoLive: L } = (0, u.cf)([ei.Ay], () => ({ canGoLive: (0, M.A)(ei.Ay) })),
        D = (0, R.A)(),
        k = (0, u.bG)([y.default], () => null != y.default.getAwaitingRemoteSessionInfo()),
        U = null != D,
        H = (0, u.bG)([es.A], () => (D?.channelId ?? es.A.getVoiceChannelId()) === n.id),
        w = (0, u.bG)([g.Ay], () => g.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: K, limit: z } = (0, eo.A)(n),
        { analyticsLocations: J } = (0, T.Ay)(f.A.VOICE_CONTROL_TRAY),
        q = (0, Y.Ay)(n),
        $ = i.useRef(null),
        ee = i.useRef(null),
        et = (0, B.Us)(),
        el = (0, u.bG)([P.A], () => P.A.isVisible(n.id)),
        { experimental: ed } = G.A.useExperiment({ guildId: n.guild_id, location: "CenterControlTray" });
    return H
        ? (0, l.jsx)(T.f5, {
              value: J,
              children: (0, l.jsxs)(x.A, {
                  section: ex.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: ef.rt, children: (0, l.jsx)(V.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: h,
                          className: a()(ef.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: ef.qi,
                                  children: [
                                      (0, l.jsx)(A.Y, {
                                          targetElementRef: $,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, l.jsx)(j.A, {
                                                      onInteraction: eO("AudioDeviceMenu"),
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
                                                      appContext: et,
                                                  });
                                              return (0, l.jsxs)(F.A, { children: [t, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: A.Y.Animation.FADE,
                                          spacing: 8,
                                          children: (e, n) => {
                                              let { onClick: t } = e,
                                                  { isShown: i } = n;
                                              return (0, l.jsx)(Q.A, {
                                                  ref: $,
                                                  centerButton: !0,
                                                  onPopoutClick: U ? null : t,
                                                  selfMute: S,
                                                  serverMute: b,
                                                  suppress: O,
                                                  popoutOpen: i,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, N.A)(b, O, ex.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !U &&
                                          (0, l.jsx)(A.Y, {
                                              targetElementRef: ee,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, l.jsx)(F.A, {
                                                      children: (0, l.jsx)(_.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: eO("VideoDeviceMenu"),
                                                          appContext: et,
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
                                                  return (0, l.jsx)(en.A, {
                                                      ref: ee,
                                                      centerButton: !0,
                                                      hasPermission: v,
                                                      enabled: I,
                                                      cameraUnavailable: p,
                                                      onChange: eT,
                                                      onCameraUnavailable: em.A,
                                                      channelLimitReached: K,
                                                      channelLimit: z,
                                                      popoutOpen: i,
                                                      onPopoutClick: t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < X.vs.MINIMAL
                                  ? (0, l.jsxs)("div", {
                                        className: ef.qi,
                                        children: [
                                            !U &&
                                                (0, l.jsx)(ev, {
                                                    channel: n,
                                                    currentUser: E,
                                                    exitFullScreen: r,
                                                    canGoLive: L,
                                                    hasPermission: v,
                                                }),
                                            !U &&
                                                (0, l.jsx)(ej, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            q &&
                                                (0, l.jsx)(Z.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            el &&
                                                ed &&
                                                (0, l.jsx)(W.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: m,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            (0, l.jsx)(eA.A, {
                                                channel: n,
                                                whichPopoutIsOpen: m,
                                                setWhichPopoutIsOpen: C,
                                                remoteMode: U,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(e_, {
                                  connectedEmbeddedActivity: w,
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
              value: J,
              children: (0, l.jsx)(eN, { channel: n, cameraUnavailable: p, hasCameraPermission: v, currentUser: E }),
          });
};
