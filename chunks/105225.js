t.d(n, { Ay: () => eS, SZ: () => eT, rP: () => ev });
var l = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    o = t.n(r),
    c = t(950372),
    u = t(17928),
    d = t(554146),
    A = t(922016),
    m = t(844222),
    h = t(717421),
    C = t(827343),
    E = t(730852),
    p = t(401843),
    g = t(820284),
    f = t(933958),
    x = t(967812),
    I = t(793574),
    T = t(688810),
    v = t(198052),
    _ = t(829773),
    j = t(329072),
    N = t(183184),
    b = t(384059),
    S = t(480890),
    O = t(379848),
    y = t(643501),
    R = t(857253),
    M = t(652896),
    L = t(880144),
    D = t(338771),
    P = t(558076),
    k = t(360729),
    G = t(508654),
    V = t(984624),
    U = t(394412),
    B = t(267102),
    H = t(526292),
    w = t(396495),
    Y = t(123973),
    F = t(447404),
    K = t(246356),
    X = t(401685),
    z = t(710801),
    J = t(496841),
    W = t(383831),
    q = t(905216),
    Q = t(577062),
    $ = t(533978),
    Z = t(958449),
    ee = t(970636),
    en = t(616356),
    et = t(470710),
    el = t(45630),
    ei = t(309010),
    es = t(287809),
    ea = t(151476),
    er = t(405018),
    eo = t(704877),
    ec = t(173660),
    eu = t(543274),
    ed = t(579153),
    eA = t(848362),
    em = t(222692),
    eh = t(702904),
    eC = t(471993),
    eE = t(442353),
    ep = t(652215),
    eg = t(806931),
    ef = t(49999),
    ex = t(731854),
    eI = t(843395);
function eT(e, n) {
    el.Ay.isVideoEnabled() !== e && ((0, b.X)(I.A.VOICE_CONTROL_TRAY, b.O.CAMERA, e), e ? (0, eE.A)(t, n) : t());
    function t() {
        return C.A.setVideoEnabled(e);
    }
}
function ev(e) {
    let { channel: n, currentUser: t, exitFullScreen: s, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: m } = (0, T.Ay)(),
        h = (0, B.Us)(),
        C = (0, u.yK)([en.A], () => en.A.getAllActiveStreams()),
        E = C.find((e) => e.ownerId === t.id),
        p = i.useRef(null),
        g = i.useRef(null),
        f = n.getGuildId(),
        x = i.useCallback(() => {
            if ((s?.(), !a)) return (0, eh.A)();
            (0, eC.A)(f, n.id, m);
        }, [f, n.id, a, s, m]),
        I = (0, H.k0)(),
        [v, _] = i.useState(!1);
    if (!(0, u.bG)([el.Ay], () => el.Ay.supports(ex.O5.VIDEO))) return null;
    function j() {
        ((0, b.X)(c, b.O.STREAM, !0), a) ? x() : (0, eh.A)();
    }
    function N() {
        (0, b.X)(c, b.O.STREAM, !1), (0, D.A)(E);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (function () {
                if (I && 0 === C.length)
                    return (0, l.jsx)(O.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: n, markAsDismissed: t } = e;
                            if (n === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    _(!0),
                                    (0, l.jsx)(w.b, {
                                        buttonRef: p,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            t(ef.i.USER_DISMISS), _(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(F.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: g,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(K.A, {
                            children: (0, l.jsx)(eA.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != E ? [E] : [],
                                handleGoLive: x,
                                appContext: h,
                                onClose: i,
                                onInteraction: eb("ManageStreamsMenu"),
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
                            children: (function (e, n) {
                                let { onClick: t, ...i } = e ?? { onClick: void 0 },
                                    s = null != E;
                                return (0, l.jsx)(Z.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: eI.uH,
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
function e_(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s } = e,
        a = n.getGuildId();
    return (0, x.A)(a, n.id)
        ? (0, l.jsx)("div", {
              className: eI.UD,
              children: (0, l.jsx)(eu.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: s }),
          })
        : null;
}
let ej = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: s, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, T.Ay)(),
        o = (0, u.bG)([v.A], () => v.A.getSelectedParticipant(s.id)),
        { reducedMotion: d } = i.useContext(m.C),
        [C, g] = i.useState(!1),
        f = o?.id,
        x = (0, u.bG)([en.A], () => (null != f ? en.A.getActiveStreamForStreamKey(f) : null), [f]),
        I = o?.type === eg.lp.STREAM && null != x && x.ownerId !== n?.id,
        _ = (0, u.yK)([en.A], () =>
            en.A.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        j = (0, u.bG)([en.A], () =>
            en.A.getAllActiveStreamsForChannel(s.id).some((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        N = (0, u.bG)([P.A], () => P.A.isVisible(s.id)),
        { enabled: S } = (0, k.mf)({ guildId: s.guild_id, location: "CenterControlTray" }),
        O = j && N && S,
        y = (0, G.Qs)(s.id),
        R = i.useRef(null),
        L = i.useCallback(
            () =>
                o?.type === eg.lp.ACTIVITY && o.applicationId === a?.applicationId
                    ? "ACTIVITY"
                    : I || O
                      ? "STREAM"
                      : null != y
                        ? "EVENT"
                        : "CALL",
            [o, a?.applicationId, I, O, y],
        ),
        [D, U] = i.useState(L()),
        B = (0, h.z)(
            {
                opacity: C ? 0.2 : 1,
                transform: C && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: C ? 600 : 1e3, friction: 45, precision: 0.01, clamp: C },
                onRest: () => {
                    U(L()), g(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        L() !== D && g(!0);
    }, [D, L]);
    let H = i.useCallback(() => {
        if (null != x) (0, p.vN)((0, M._z)(x));
        else for (let e of _) (0, p.vN)((0, M._z)(e));
    }, [_, x]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: R,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(eA.A, {
                channel: s,
                currentUser: n,
                activeStreams: _,
                handleGoLive: ep.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: eb("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: A.Y.Animation.FADE,
        children: (e, i) => {
            let { onClick: u } = e,
                { isShown: d } = i;
            return (0, l.jsx)(c.animated.div, {
                style: B,
                ref: R,
                children: (function (e, i) {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (D) {
                        case "ACTIVITY":
                            if (null == o || null == n || o.type !== eg.lp.ACTIVITY || null == a) return;
                            return (0, l.jsx)(W.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)(Z.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, b.X)(r, b.O.STOP_WATCHING), H();
                                },
                                onPopoutClick: _.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, l.jsx)(q.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, b.X)(r, b.O.DISCONNECT), t?.();
                                },
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(V.A, {
                                channelId: s.id,
                                onClick: () => {
                                    (0, b.X)(r, b.O.DISCONNECT), E.default.disconnect(), t?.();
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
        { reachedLimit: c, limit: d } = (0, er.A)(n),
        A = i.useCallback(() => {
            (0, b.X)(o, b.O.JOIN_VIDEO_CALL),
                (0, eE.A)(function () {
                    return E.default.selectVoiceChannel(n.id, !0);
                }, r);
        }, [n.id, r, o]),
        m = i.useCallback(() => {
            t ? (0, em.A)() : A();
        }, [t, A]),
        h = (0, u.bG)([et.A], () => {
            let e = et.A.getCall(n.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: eI.iE,
        children: [
            (0, l.jsx)(ee.A, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: c,
                channelLimit: d,
                channel: n,
                cameraUnavailable: t,
                hasPermission: s,
                onCameraUnavailable: m,
                className: eI.uH,
                onChange: A,
            }),
            (0, l.jsx)(J.A, { centerButton: !0, color: "join", channel: n, className: eI.uH }),
            h ? (0, l.jsx)(z.A, { color: "disconnect", channel: n, className: eI.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eb(e) {
    return (0, S.s)(e, I.A.VOICE_CONTROL_TRAY, { entrypoint: eg.GK.CARET });
}
let eS = function (e) {
    let { channel: n, className: t, onDisconnectCall: s, exitFullScreen: r, idleProps: c } = e,
        d = (0, X.Bx)(),
        m = i.useRef(null),
        [h, C] = i.useState(void 0),
        E = (0, u.bG)([es.default], () => {
            let e = es.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: p, enabled: x } = (0, ea.A)(),
        v = (0, eo.A)(n),
        { suppress: b, selfMute: S, mute: O } = (0, ec.A)(n),
        { canGoLive: M } = (0, u.cf)([el.Ay], () => ({ canGoLive: (0, L.A)(el.Ay) })),
        D = (0, R.A)(),
        P = (0, u.bG)([y.default], () => null != y.default.getAwaitingRemoteSessionInfo()),
        k = null != D,
        G = (0, u.bG)([ei.Ay], () => (D?.channelId ?? ei.Ay.getVoiceChannelId()) === n.id),
        V = (0, u.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: H, limit: w } = (0, er.A)(n),
        { analyticsLocations: F } = (0, T.Ay)(I.A.VOICE_CONTROL_TRAY),
        z = (0, Y.Ay)(n),
        J = i.useRef(null),
        W = i.useRef(null),
        q = (0, B.Us)();
    return G
        ? (0, l.jsx)(T.f5, {
              value: F,
              children: (0, l.jsxs)(g.A, {
                  section: ep.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: eI.rt, children: (0, l.jsx)(U.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: m,
                          className: a()(eI.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: eI.qi,
                                  children: [
                                      (0, l.jsx)(A.Y, {
                                          targetElementRef: J,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, l.jsx)(_.A, {
                                                      onInteraction: eb("AudioDeviceMenu"),
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
                                                      appContext: q,
                                                  });
                                              return (0, l.jsxs)(K.A, { children: [t, " "] });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: A.Y.Animation.FADE,
                                          spacing: 8,
                                          children: (e, n) => {
                                              let { onClick: t } = e,
                                                  { isShown: i } = n;
                                              return (0, l.jsx)(Q.A, {
                                                  ref: J,
                                                  centerButton: !0,
                                                  onPopoutClick: k ? null : t,
                                                  selfMute: S,
                                                  serverMute: O,
                                                  suppress: b,
                                                  popoutOpen: i,
                                                  awaitingRemote: P,
                                                  onClick: () => (0, N.A)(O, b, ep.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !k &&
                                          (0, l.jsx)(A.Y, {
                                              targetElementRef: W,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, l.jsx)(K.A, {
                                                      children: (0, l.jsx)(j.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: eb("VideoDeviceMenu"),
                                                          appContext: q,
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
                                                  return (0, l.jsx)(ee.A, {
                                                      ref: W,
                                                      centerButton: !0,
                                                      hasPermission: v,
                                                      enabled: x,
                                                      cameraUnavailable: p,
                                                      onChange: eT,
                                                      onCameraUnavailable: em.A,
                                                      channelLimitReached: H,
                                                      channelLimit: w,
                                                      popoutOpen: i,
                                                      onPopoutClick: p ? null : t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < X.vs.MINIMAL
                                  ? (0, l.jsxs)("div", {
                                        className: eI.qi,
                                        children: [
                                            !k &&
                                                (0, l.jsx)(ev, {
                                                    channel: n,
                                                    currentUser: E,
                                                    exitFullScreen: r,
                                                    canGoLive: M,
                                                    hasPermission: v,
                                                }),
                                            !k &&
                                                (0, l.jsx)(e_, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            z &&
                                                (0, l.jsx)($.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                    idle: c?.idle ?? !0,
                                                }),
                                            (0, l.jsx)(ed.A, {
                                                channel: n,
                                                whichPopoutIsOpen: h,
                                                setWhichPopoutIsOpen: C,
                                                remoteMode: k,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(ej, {
                                  connectedEmbeddedActivity: V,
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
              value: F,
              children: (0, l.jsx)(eN, { channel: n, cameraUnavailable: p, hasCameraPermission: v, currentUser: E }),
          });
};
