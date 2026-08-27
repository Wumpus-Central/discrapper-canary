t.d(n, { Ay: () => eO, SZ: () => eT, rP: () => e_ });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(284009),
    o = t.n(r),
    c = t(221877),
    u = t(17928),
    d = t(554146),
    A = t(922016),
    m = t(844222),
    h = t(717421),
    C = t(827343),
    f = t(730852),
    E = t(401843),
    p = t(820284),
    g = t(933958),
    x = t(967812),
    I = t(793574),
    v = t(688810),
    T = t(198052),
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
    F = t(123973),
    Y = t(447404),
    z = t(246356),
    K = t(401685),
    X = t(710801),
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
    ei = t(453028),
    ea = t(309010),
    es = t(287809),
    er = t(151476),
    eo = t(405018),
    ec = t(704877),
    eu = t(173660),
    ed = t(543274),
    eA = t(579153),
    em = t(848362),
    eh = t(222692),
    eC = t(702904),
    ef = t(471993),
    eE = t(442353),
    ep = t(652215),
    eg = t(806931),
    ex = t(49999),
    eI = t(731854),
    ev = t(843395);
function eT(e, n) {
    ei.Ay.isVideoEnabled() !== e && ((0, b.X)(I.A.VOICE_CONTROL_TRAY, b.O.CAMERA, e), e ? (0, eE.A)(t, n) : t());
    function t() {
        return C.A.setVideoEnabled(e);
    }
}
function e_(e) {
    let { channel: n, currentUser: t, exitFullScreen: a, canGoLive: s, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: m } = (0, v.Ay)(),
        h = (0, B.Us)(),
        C = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()),
        f = C.find((e) => e.ownerId === t.id),
        E = i.useRef(null),
        p = i.useRef(null),
        g = n.getGuildId(),
        x = i.useCallback(() => {
            if ((a?.(), !s)) return (0, eC.A)();
            (0, ef.A)(g, n.id, m);
        }, [g, n.id, s, a, m]),
        I = (0, H.k0)(),
        [T, _] = i.useState(!1);
    if (!(0, u.bG)([ei.Ay], () => ei.Ay.supports(eI.O5.VIDEO))) return null;
    function j() {
        ((0, b.X)(c, b.O.STREAM, !0), s) ? x() : (0, eC.A)();
    }
    function N() {
        (0, b.X)(c, b.O.STREAM, !1), (0, D.A)(f);
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
                                        buttonRef: E,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            t(ex.i.USER_DISMISS), _(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(Y.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: p,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(z.A, {
                            children: (0, l.jsx)(em.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != f ? [f] : [],
                                handleGoLive: x,
                                appContext: h,
                                onClose: i,
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
                            { isShown: i } = n;
                        return (0, l.jsx)("div", {
                            ref: p,
                            children: (function (e, n) {
                                let { onClick: t, ...i } = e ?? { onClick: void 0 },
                                    a = null != f;
                                return (0, l.jsx)(ee.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: ev.uH,
                                    hasPermission: r,
                                    streamActive: null != f,
                                    isSelfStream: !0,
                                    onPopoutClick: a
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: T,
                                    buttonRef: E,
                                    onClick: null != f ? N : j,
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
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: a } = e,
        s = n.getGuildId();
    return (0, x.A)(s, n.id)
        ? (0, l.jsx)("div", {
              className: ev.UD,
              children: (0, l.jsx)(ed.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: a }),
          })
        : null;
}
let eN = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: a, connectedEmbeddedActivity: s } = e,
        { parentAnalyticsLocation: r } = (0, v.Ay)(),
        o = (0, u.bG)([T.A], () => T.A.getSelectedParticipant(a.id)),
        { reducedMotion: d } = i.useContext(m.C),
        [C, p] = i.useState(!1),
        g = o?.id,
        x = (0, u.bG)([et.A], () => (null != g ? et.A.getActiveStreamForStreamKey(g) : null), [g]),
        I = o?.type === eg.lp.STREAM && null != x && x.ownerId !== n?.id,
        _ = (0, u.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(a.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        j = (0, u.bG)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(a.id).some((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        N = (0, u.bG)([P.A], () => P.A.isVisible(a.id)),
        { enabled: S } = (0, k.mf)({ guildId: a.guild_id, location: "CenterControlTray" }),
        O = j && N && S,
        y = (0, G.Qs)(a.id),
        R = i.useRef(null),
        L = i.useCallback(
            () =>
                o?.type === eg.lp.ACTIVITY && o.applicationId === s?.applicationId
                    ? "ACTIVITY"
                    : I || O
                      ? "STREAM"
                      : null != y
                        ? "EVENT"
                        : "CALL",
            [o, s?.applicationId, I, O, y],
        ),
        [D, U] = i.useState(L()),
        B = (0, h.z)(
            {
                opacity: C ? 0.2 : 1,
                transform: C && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: C ? 600 : 1e3, friction: 45, precision: 0.01, clamp: C },
                onRest: () => {
                    U(L()), p(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        L() !== D && p(!0);
    }, [D, L]);
    let H = i.useCallback(() => {
        if (null != x) (0, E.vN)((0, M._z)(x));
        else for (let e of _) (0, E.vN)((0, M._z)(e));
    }, [_, x]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: R,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(em.A, {
                channel: a,
                currentUser: n,
                activeStreams: _,
                handleGoLive: ep.FXj,
                hideSelfOptions: !0,
                onClose: t,
                onInteraction: eS("ManageStreamsMenu"),
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
                            if (null == o || null == n || o.type !== eg.lp.ACTIVITY || null == s) return;
                            return (0, l.jsx)(q.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: s.location,
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)(ee.h, {
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
                            return (0, l.jsx)($.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, b.X)(r, b.O.DISCONNECT), t?.();
                                },
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(V.A, {
                                channelId: a.id,
                                onClick: () => {
                                    (0, b.X)(r, b.O.DISCONNECT), f.default.disconnect(), t?.();
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eb(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: a, currentUser: s } = e,
        r = (0, B.Us)(),
        { parentAnalyticsLocation: o } = (0, v.Ay)(),
        { reachedLimit: c, limit: d } = (0, eo.A)(n),
        A = i.useCallback(() => {
            (0, b.X)(o, b.O.JOIN_VIDEO_CALL),
                (0, eE.A)(function () {
                    return f.default.selectVoiceChannel(n.id, !0);
                }, r);
        }, [n.id, r, o]),
        m = i.useCallback(() => {
            t ? (0, eh.A)() : A();
        }, [t, A]),
        h = (0, u.bG)([el.A], () => {
            let e = el.A.getCall(n.id);
            return e?.ringing.includes(s.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: ev.iE,
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
                hasPermission: a,
                onCameraUnavailable: m,
                className: ev.uH,
                onChange: A,
            }),
            (0, l.jsx)(J.A, { centerButton: !0, color: "join", channel: n, className: ev.uH }),
            h ? (0, l.jsx)(X.A, { color: "disconnect", channel: n, className: ev.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function eS(e) {
    return (0, S.s)(e, I.A.VOICE_CONTROL_TRAY, { entrypoint: eg.GK.CARET });
}
let eO = function (e) {
    let { channel: n, className: t, onDisconnectCall: a, exitFullScreen: r, idleProps: c } = e,
        d = (0, K.Bx)(),
        m = i.useRef(null),
        [h, C] = i.useState(void 0),
        f = (0, u.bG)([es.default], () => {
            let e = es.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: E, enabled: x } = (0, er.A)(),
        T = (0, ec.A)(n),
        { suppress: b, selfMute: S, mute: O } = (0, eu.A)(n),
        { canGoLive: M } = (0, u.cf)([ei.Ay], () => ({ canGoLive: (0, L.A)(ei.Ay) })),
        D = (0, R.A)(),
        G = (0, u.bG)([y.default], () => null != y.default.getAwaitingRemoteSessionInfo()),
        V = null != D,
        H = (0, u.bG)([ea.Ay], () => (D?.channelId ?? ea.Ay.getVoiceChannelId()) === n.id),
        w = (0, u.bG)([g.Ay], () => g.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: Y, limit: X } = (0, eo.A)(n),
        { analyticsLocations: J } = (0, v.Ay)(I.A.VOICE_CONTROL_TRAY),
        q = (0, F.Ay)(n),
        $ = i.useRef(null),
        ee = i.useRef(null),
        et = (0, B.Us)(),
        el = (0, u.bG)([P.A], () => P.A.isVisible(n.id)),
        { interactionsEnabled: ed } = (0, k.mf)({ guildId: n.guild_id, location: "CenterControlTray" });
    return H
        ? (0, l.jsx)(v.f5, {
              value: J,
              children: (0, l.jsxs)(p.A, {
                  section: ep.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: ev.rt, children: (0, l.jsx)(U.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: m,
                          className: s()(ev.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: ev.qi,
                                  children: [
                                      (0, l.jsx)(A.Y, {
                                          targetElementRef: $,
                                          renderPopout: (e) => {
                                              let { closePopout: n } = e,
                                                  t = (0, l.jsx)(_.A, {
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
                                                      appContext: et,
                                                  });
                                              return (0, l.jsxs)(z.A, { children: [t, " "] });
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
                                                  onPopoutClick: V ? null : t,
                                                  selfMute: S,
                                                  serverMute: O,
                                                  suppress: b,
                                                  popoutOpen: i,
                                                  awaitingRemote: G,
                                                  onClick: () => (0, N.A)(O, b, ep.JJy.VOICE_CONTROL_TRAY),
                                              });
                                          },
                                      }),
                                      !V &&
                                          (0, l.jsx)(A.Y, {
                                              targetElementRef: ee,
                                              renderPopout: (e) => {
                                                  let { closePopout: n } = e;
                                                  return (0, l.jsx)(z.A, {
                                                      children: (0, l.jsx)(j.A, {
                                                          onClose: n,
                                                          minimal: !0,
                                                          onInteraction: eS("VideoDeviceMenu"),
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
                                                      hasPermission: T,
                                                      enabled: x,
                                                      cameraUnavailable: E,
                                                      onChange: eT,
                                                      onCameraUnavailable: eh.A,
                                                      channelLimitReached: Y,
                                                      channelLimit: X,
                                                      popoutOpen: i,
                                                      onPopoutClick: E ? null : t,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              d < K.vs.MINIMAL
                                  ? (0, l.jsxs)("div", {
                                        className: ev.qi,
                                        children: [
                                            !V &&
                                                (0, l.jsx)(e_, {
                                                    channel: n,
                                                    currentUser: f,
                                                    exitFullScreen: r,
                                                    canGoLive: M,
                                                    hasPermission: T,
                                                }),
                                            !V &&
                                                (0, l.jsx)(ej, {
                                                    channel: n,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                }),
                                            q &&
                                                (0, l.jsx)(Z.A, {
                                                    channel: n,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: h,
                                                    setWhichPopoutIsOpen: C,
                                                    idle: c?.idle ?? !0,
                                                }),
                                            el && ed && (0, l.jsx)(W.A, { channel: n, themeable: !0 }),
                                            (0, l.jsx)(eA.A, {
                                                channel: n,
                                                whichPopoutIsOpen: h,
                                                setWhichPopoutIsOpen: C,
                                                remoteMode: V,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(eN, {
                                  connectedEmbeddedActivity: w,
                                  currentUser: f,
                                  channel: n,
                                  onDisconnectCall: a,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(v.f5, {
              value: J,
              children: (0, l.jsx)(eb, { channel: n, cameraUnavailable: E, hasCameraPermission: T, currentUser: f }),
          });
};
