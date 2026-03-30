"use strict";
n.d(t, { Ay: () => ej, SZ: () => eN, rP: () => eb });
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
    B = n(478564),
    H = n(123973),
    F = n(447404),
    K = n(246356),
    W = n(401685),
    Y = n(710801),
    z = n(496841),
    q = n(383831),
    X = n(905216),
    Q = n(577062),
    J = n(533978),
    $ = n(958449),
    Z = n(970636),
    ee = n(996744),
    et = n(85612),
    en = n(616356),
    ei = n(470710),
    es = n(430452),
    el = n(309010),
    ea = n(287809),
    er = n(151476),
    eo = n(405018),
    ec = n(704877),
    ed = n(173660),
    eu = n(543274),
    eh = n(579153),
    eA = n(152535),
    em = n(848362),
    e_ = n(222692),
    eg = n(702904),
    ep = n(471993),
    ef = n(442353),
    ex = n(652215),
    eE = n(806931),
    eC = n(49999),
    eI = n(776912);
function eN(e, t) {
    if (es.Ay.isVideoEnabled() === e) return;
    let n = () => A.A.setVideoEnabled(e);
    (0, v.X)(E.A.VOICE_CONTROL_TRAY, v.O.CAMERA, e), e ? (0, ef.A)(n, t) : n();
}
function eb(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: A } = (0, C.Ay)(),
        m = (0, w.Us)(),
        _ = (0, d.yK)([en.A], () => en.A.getAllActiveStreams()),
        g = _.find((e) => e.ownerId === n.id),
        p = s.useRef(null),
        f = s.useRef(null),
        x = t.getGuildId(),
        E = s.useCallback(() => {
            if ((l?.(), !a)) return (0, eg.A)();
            (0, ep.A)(x, t.id, A);
        }, [x, t.id, a, l, A]),
        I = (0, k.k0)(),
        [N, b] = s.useState(!1),
        S = () => {
            ((0, v.X)(c, v.O.STREAM, !0), a) ? E() : (0, eg.A)();
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
                                            n(eC.i.USER_DISMISS), b(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(F.A, {
                children: (0, i.jsx)(h.YNO, {
                    targetElementRef: f,
                    renderPopout: (e) => {
                        let { closePopout: s } = e;
                        return (0, i.jsx)(K.A, {
                            children: (0, i.jsx)(em.A, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: E,
                                appContext: m,
                                onClose: s,
                                onInteraction: ey("ManageStreamsMenu"),
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
                                return (0, i.jsx)($.h, {
                                    ...s,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: eI.uH,
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
function eS(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: s, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, x.A)(a, t.id)
        ? (0, i.jsx)("div", {
              className: eI.UD,
              children: (0, i.jsx)(eu.K, { channel: t, idle: n, whichPopoutIsOpen: s, setWhichPopoutIsOpen: l }),
          })
        : null;
}
let eT = s.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: r } = (0, C.Ay)(),
        o = (0, d.bG)([I.A], () => I.A.getSelectedParticipant(l.id)),
        { reducedMotion: u } = s.useContext(h.CZY),
        [A, m] = s.useState(!1),
        p = o?.id,
        f = (0, d.bG)([en.A], () => (null != p ? en.A.getActiveStreamForStreamKey(p) : null), [p]),
        x = o?.type === eE.lp.STREAM && null != f && f.ownerId !== t?.id,
        E = (0, d.yK)([en.A], () =>
            en.A.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== t?.id;
            }),
        ),
        N = (0, G.Qs)(l.id),
        b = s.useRef(null),
        S = s.useCallback(
            () =>
                o?.type === eE.lp.ACTIVITY && o.applicationId === a?.applicationId
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
            return (0, i.jsx)(em.A, {
                channel: l,
                currentUser: t,
                activeStreams: E,
                handleGoLive: ex.FXj,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: ey("ManageStreamsMenu"),
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
                            if (null == o || null == t || o.type !== eE.lp.ACTIVITY || null == a) return;
                            return (0, i.jsx)(q.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: a.location,
                                onPopoutClick: E.length > 0 ? s : null,
                            });
                        case "STREAM":
                            return (0, i.jsx)($.h, {
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
                            return (0, i.jsx)(X.A, {
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
function ev(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        r = (0, w.Us)(),
        { parentAnalyticsLocation: o } = (0, C.Ay)(),
        { reachedLimit: c, limit: u } = (0, eo.A)(t),
        h = s.useCallback(() => {
            (0, v.X)(o, v.O.JOIN_VIDEO_CALL), (0, ef.A)(() => _.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r, o]),
        A = s.useCallback(() => {
            n ? (0, e_.A)() : h();
        }, [n, h]),
        m = (0, d.bG)([ei.A], () => {
            let e = ei.A.getCall(t.id);
            return e?.ringing.includes(a.id) === !0;
        });
    return (0, i.jsxs)("div", {
        className: eI.iE,
        children: [
            (0, i.jsx)(Z.A, {
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
                className: eI.uH,
                onChange: h,
            }),
            (0, i.jsx)(z.A, { centerButton: !0, color: "join", channel: t, className: eI.uH }),
            m ? (0, i.jsx)(Y.A, { color: "disconnect", channel: t, className: eI.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function ey(e) {
    return (0, y.s)(e, E.A.VOICE_CONTROL_TRAY, { entrypoint: eE.GK.CARET });
}
let ej = function (e) {
    let { channel: t, className: n, onDisconnectCall: l, exitFullScreen: r, idleProps: c } = e,
        u = (0, W.Bx)(),
        A = s.useRef(null),
        [_, g] = s.useState(void 0),
        x = (0, d.bG)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: I, enabled: v } = (0, er.A)(),
        y = (0, ec.A)(t),
        { suppress: j, selfMute: L, mute: D } = (0, ed.A)(t),
        { canGoLive: G } = (0, d.cf)([es.Ay], () => ({ canGoLive: (0, M.A)(es.Ay) })),
        U = (0, O.A)(),
        k = (0, d.bG)([R.default], () => null != R.default.getAwaitingRemoteSessionInfo()),
        V = null != U,
        F = (0, d.bG)([el.A], () => (U?.channelId ?? el.A.getVoiceChannelId()) === t.id),
        Y = (0, B.A)({ channelId: t.id }),
        z = (0, d.bG)([f.Ay], () => f.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: q, limit: X } = (0, eo.A)(t),
        { analyticsLocations: $ } = (0, C.Ay)(E.A.VOICE_CONTROL_TRAY),
        en = (0, ee.Cg)({ location: E.A.VOICE_CONTROL_TRAY, autoTrackExposure: !0 }),
        ei = (0, H.Ay)(t),
        eu = s.useRef(null),
        em = s.useRef(null),
        eg = (0, w.Us)(),
        ep = en
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
                              onInteraction: ey("AudioDeviceMenu"),
                              appContext: eg,
                          }),
                      ),
                  );
              }
            : void 0;
    return F
        ? (0, i.jsx)(C.f5, {
              value: $,
              children: (0, i.jsxs)(p.A, {
                  section: ex.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", { className: eI.rt, children: (0, i.jsx)(P.A, { channelId: t.id }) }),
                      (0, i.jsxs)("div", {
                          ref: A,
                          className: a()(eI.iE, n),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eI.qi,
                                  children: [
                                      (0, i.jsx)(h.YNO, {
                                          targetElementRef: eu,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = en
                                                      ? (0, i.jsx)(et.a, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : (0, i.jsx)(b.A, {
                                                            onInteraction: ey("AudioDeviceMenu"),
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
                                                            appContext: eg,
                                                        })),
                                                  (0, i.jsxs)(K.A, { children: [t, " "] })
                                              );
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: h.YNO.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: s } = t;
                                              return (0, i.jsx)(Q.A, {
                                                  ref: eu,
                                                  centerButton: !0,
                                                  onPopoutClick: V ? null : n,
                                                  selfMute: L,
                                                  serverMute: D,
                                                  suppress: j,
                                                  popoutOpen: s,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, T.A)(D, j, ex.JJy.VOICE_CONTROL_TRAY),
                                                  onContextMenu: ep,
                                              });
                                          },
                                      }),
                                      !V &&
                                          (0, i.jsx)(h.YNO, {
                                              targetElementRef: em,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(K.A, {
                                                      children: (0, i.jsx)(S.A, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: ey("VideoDeviceMenu"),
                                                          appContext: eg,
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
                                                  return (0, i.jsx)(Z.A, {
                                                      ref: em,
                                                      centerButton: !0,
                                                      hasPermission: y,
                                                      enabled: v,
                                                      cameraUnavailable: I,
                                                      onChange: eN,
                                                      onCameraUnavailable: e_.A,
                                                      channelLimitReached: q,
                                                      channelLimit: X,
                                                      popoutOpen: s,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              u < W.vs.MINIMAL
                                  ? (0, i.jsxs)("div", {
                                        className: eI.qi,
                                        children: [
                                            !V &&
                                                (0, i.jsx)(eb, {
                                                    channel: t,
                                                    currentUser: x,
                                                    exitFullScreen: r,
                                                    canGoLive: G,
                                                    hasPermission: y,
                                                }),
                                            !V &&
                                                (0, i.jsx)(eS, {
                                                    channel: t,
                                                    idle: c?.idle ?? !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            ei &&
                                                (0, i.jsx)(J.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            Y &&
                                                (0, i.jsx)(eA.A, {
                                                    channel: t,
                                                    themeable: !0,
                                                    whichPopoutIsOpen: _,
                                                    setWhichPopoutIsOpen: g,
                                                }),
                                            (0, i.jsx)(eh.A, {
                                                channel: t,
                                                whichPopoutIsOpen: _,
                                                setWhichPopoutIsOpen: g,
                                                remoteMode: V,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, i.jsx)(eT, {
                                  connectedEmbeddedActivity: z,
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
              value: $,
              children: (0, i.jsx)(ev, { channel: t, cameraUnavailable: I, hasCameraPermission: y, currentUser: x }),
          });
};
