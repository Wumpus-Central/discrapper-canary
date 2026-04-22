t.d(n, { Ay: () => ej, SZ: () => eE, rP: () => ev });
var l = t(627968),
    i = t(64700),
    a = t(503698),
    s = t.n(a),
    r = t(284009),
    o = t.n(r),
    c = t(517738),
    u = t(311907),
    d = t(554146),
    A = t(265872),
    h = t(844222),
    p = t(717421),
    m = t(827343),
    g = t(956793),
    f = t(401843),
    C = t(820284),
    E = t(933958),
    v = t(967812),
    I = t(793574),
    x = t(688810),
    T = t(313961),
    _ = t(206018),
    j = t(750765),
    N = t(183184),
    b = t(384059),
    y = t(480890),
    S = t(379848),
    O = t(643501),
    L = t(857253),
    R = t(652896),
    M = t(880144),
    D = t(338771),
    P = t(508654),
    G = t(984624),
    k = t(394412),
    V = t(267102),
    U = t(526292),
    B = t(396495),
    w = t(123973),
    H = t(447404),
    Y = t(246356),
    F = t(401685),
    K = t(710801),
    X = t(496841),
    z = t(383831),
    W = t(905216),
    J = t(577062),
    q = t(533978),
    $ = t(958449),
    Q = t(970636),
    Z = t(616356),
    ee = t(470710),
    en = t(430452),
    et = t(309010),
    el = t(287809),
    ei = t(151476),
    ea = t(405018),
    es = t(704877),
    er = t(173660),
    eo = t(543274),
    ec = t(579153),
    eu = t(848362),
    ed = t(222692),
    eA = t(702904),
    eh = t(471993),
    ep = t(442353),
    em = t(652215),
    eg = t(806931),
    ef = t(49999),
    eC = t(354944);
function eE(e, n) {
    if (en.Ay.isVideoEnabled() === e) return;
    let t = () => m.A.setVideoEnabled(e);
    (0, b.X)(I.A.VOICE_CONTROL_TRAY, b.O.CAMERA, e), e ? (0, ep.A)(t, n) : t();
}
function ev(e) {
    let { channel: n, currentUser: t, exitFullScreen: a, canGoLive: s, hasPermission: r, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: h } = (0, x.Ay)(),
        p = (0, V.Us)(),
        m = (0, u.yK)([Z.A], () => Z.A.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === t.id),
        f = i.useRef(null),
        C = i.useRef(null),
        E = n.getGuildId(),
        v = i.useCallback(() => {
            if ((a?.(), !s)) return (0, eA.A)();
            (0, eh.A)(E, n.id, h);
        }, [E, n.id, s, a, h]),
        I = (0, U.k0)(),
        [T, _] = i.useState(!1),
        j = () => {
            ((0, b.X)(c, b.O.STREAM, !0), s) ? v() : (0, eA.A)();
        },
        N = () => {
            (0, b.X)(c, b.O.STREAM, !1), (0, D.A)(g);
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
                                    _(!0),
                                    (0, l.jsx)(B.b, {
                                        buttonRef: f,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            t(ef.i.USER_DISMISS), _(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, l.jsx)(H.A, {
                children: (0, l.jsx)(A.Y, {
                    targetElementRef: C,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(Y.A, {
                            children: (0, l.jsx)(eu.A, {
                                channel: n,
                                currentUser: t,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: v,
                                appContext: p,
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
                            ref: C,
                            children: ((e, n) => {
                                let { onClick: t, ...i } = e ?? { onClick: void 0 },
                                    a = null != g;
                                return (0, l.jsx)($.h, {
                                    ...i,
                                    centerButton: !0,
                                    disabled: o || !r,
                                    className: eC.uH,
                                    hasPermission: r,
                                    streamActive: null != g,
                                    isSelfStream: !0,
                                    onPopoutClick: a
                                        ? function (e) {
                                              t?.(e);
                                          }
                                        : null,
                                    popoutOpen: n,
                                    shouldShowTooltip: !n,
                                    renderNUXHighlight: T,
                                    buttonRef: f,
                                    onClick: null != g ? N : j,
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
    let { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: a } = e,
        s = n.getGuildId();
    return (0, v.A)(s, n.id)
        ? (0, l.jsx)("div", {
              className: eC.UD,
              children: (0, l.jsx)(eo.K, { channel: n, idle: t, whichPopoutIsOpen: i, setWhichPopoutIsOpen: a }),
          })
        : null;
}
let ex = i.memo(function (e) {
    let { currentUser: n, onDisconnectCall: t, channel: a, connectedEmbeddedActivity: s } = e,
        { parentAnalyticsLocation: r } = (0, x.Ay)(),
        o = (0, u.bG)([T.A], () => T.A.getSelectedParticipant(a.id)),
        { reducedMotion: d } = i.useContext(h.C),
        [m, C] = i.useState(!1),
        E = o?.id,
        v = (0, u.bG)([Z.A], () => (null != E ? Z.A.getActiveStreamForStreamKey(E) : null), [E]),
        I = o?.type === eg.lp.STREAM && null != v && v.ownerId !== n?.id,
        _ = (0, u.yK)([Z.A], () =>
            Z.A.getAllActiveStreamsForChannel(a.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== n?.id;
            }),
        ),
        j = (0, P.Qs)(a.id),
        N = i.useRef(null),
        y = i.useCallback(
            () =>
                o?.type === eg.lp.ACTIVITY && o.applicationId === s?.applicationId
                    ? "ACTIVITY"
                    : I
                      ? "STREAM"
                      : null != j
                        ? "EVENT"
                        : "CALL",
            [o, s?.applicationId, I, j],
        ),
        [S, O] = i.useState(y()),
        L = (0, p.z)(
            {
                opacity: m ? 0.2 : 1,
                transform: m && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: { mass: 2, tension: m ? 600 : 1e3, friction: 45, precision: 0.01, clamp: m },
                onRest: () => {
                    O(y()), C(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        y() !== S && C(!0);
    }, [S, y]);
    let M = i.useCallback(() => {
        if (null != v) (0, f.vN)((0, R._z)(v));
        else for (let e of _) (0, f.vN)((0, R._z)(e));
    }, [_, v]);
    return (0, l.jsx)(A.Y, {
        targetElementRef: N,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(eu.A, {
                channel: a,
                currentUser: n,
                activeStreams: _,
                handleGoLive: em.FXj,
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
                style: L,
                ref: N,
                children: ((e, i) => {
                    let c = { isTrayButton: !1, centerButton: !0, popoutOpen: e };
                    switch (S) {
                        case "ACTIVITY":
                            if (null == o || null == n || o.type !== eg.lp.ACTIVITY || null == s) return;
                            return (0, l.jsx)(z.A, {
                                ...c,
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: s.location,
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "STREAM":
                            return (0, l.jsx)($.h, {
                                ...c,
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, b.X)(r, b.O.STOP_WATCHING), M();
                                },
                                onPopoutClick: _.length > 1 ? i : null,
                                isSelfStream: !1,
                            });
                        case "CALL":
                            return (0, l.jsx)(W.A, {
                                ...c,
                                color: "disconnect",
                                onClick: () => {
                                    (0, b.X)(r, b.O.DISCONNECT), t?.();
                                },
                                onPopoutClick: _.length > 0 ? i : null,
                            });
                        case "EVENT":
                            return (0, l.jsx)(G.A, {
                                channelId: a.id,
                                onClick: () => {
                                    (0, b.X)(r, b.O.DISCONNECT), g.default.disconnect(), t?.();
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eT(e) {
    let { channel: n, cameraUnavailable: t, hasCameraPermission: a, currentUser: s } = e,
        r = (0, V.Us)(),
        { parentAnalyticsLocation: o } = (0, x.Ay)(),
        { reachedLimit: c, limit: d } = (0, ea.A)(n),
        A = i.useCallback(() => {
            (0, b.X)(o, b.O.JOIN_VIDEO_CALL), (0, ep.A)(() => g.default.selectVoiceChannel(n.id, !0), r);
        }, [n.id, r, o]),
        h = i.useCallback(() => {
            t ? (0, ed.A)() : A();
        }, [t, A]),
        p = (0, u.bG)([ee.A], () => {
            let e = ee.A.getCall(n.id);
            return e?.ringing.includes(s.id) === !0;
        });
    return (0, l.jsxs)("div", {
        className: eC.iE,
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
                hasPermission: a,
                onCameraUnavailable: h,
                className: eC.uH,
                onChange: A,
            }),
            (0, l.jsx)(X.A, { centerButton: !0, color: "join", channel: n, className: eC.uH }),
            p ? (0, l.jsx)(K.A, { color: "disconnect", channel: n, className: eC.uH, isTrayButton: !1 }) : null,
        ],
    });
}
function e_(e) {
    return (0, y.s)(e, I.A.VOICE_CONTROL_TRAY, { entrypoint: eg.GK.CARET });
}
let ej = function (e) {
    let { channel: n, className: t, onDisconnectCall: a, exitFullScreen: r, idleProps: c } = e,
        d = (0, F.Bx)(),
        h = i.useRef(null),
        [p, m] = i.useState(void 0),
        g = (0, u.bG)([el.default], () => {
            let e = el.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: f, enabled: v } = (0, ei.A)(),
        T = (0, es.A)(n),
        { suppress: b, selfMute: y, mute: S } = (0, er.A)(n),
        { canGoLive: R } = (0, u.cf)([en.Ay], () => ({ canGoLive: (0, M.A)(en.Ay) })),
        D = (0, L.A)(),
        P = (0, u.bG)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()),
        G = null != D,
        U = (0, u.bG)([et.A], () => (D?.channelId ?? et.A.getVoiceChannelId()) === n.id),
        B = (0, u.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: H, limit: K } = (0, ea.A)(n),
        { analyticsLocations: X } = (0, x.Ay)(I.A.VOICE_CONTROL_TRAY),
        z = (0, w.Ay)(n),
        W = i.useRef(null),
        $ = i.useRef(null),
        Z = (0, V.Us)();
    return U
        ? (0, l.jsx)(x.f5, {
              value: X,
              children: (0, l.jsxs)(C.A, {
                  section: em.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, l.jsx)("div", { className: eC.rt, children: (0, l.jsx)(k.A, { channelId: n.id }) }),
                      (0, l.jsxs)("div", {
                          ref: h,
                          className: s()(eC.iE, t),
                          children: [
                              (0, l.jsxs)("div", {
                                  className: eC.qi,
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
                                                  selfMute: y,
                                                  serverMute: S,
                                                  suppress: b,
                                                  popoutOpen: i,
                                                  awaitingRemote: P,
                                                  onClick: () => (0, N.A)(S, b, em.JJy.VOICE_CONTROL_TRAY),
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
                                                      hasPermission: T,
                                                      enabled: v,
                                                      cameraUnavailable: f,
                                                      onChange: eE,
                                                      onCameraUnavailable: ed.A,
                                                      channelLimitReached: H,
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
                                        className: eC.qi,
                                        children: [
                                            !G &&
                                                (0, l.jsx)(ev, {
                                                    channel: n,
                                                    currentUser: g,
                                                    exitFullScreen: r,
                                                    canGoLive: R,
                                                    hasPermission: T,
                                                }),
                                            !G &&
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
                                                remoteMode: G,
                                            }),
                                        ],
                                    })
                                  : null,
                              (0, l.jsx)(ex, {
                                  connectedEmbeddedActivity: B,
                                  currentUser: g,
                                  channel: n,
                                  onDisconnectCall: a,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(x.f5, {
              value: X,
              children: (0, l.jsx)(eT, { channel: n, cameraUnavailable: f, hasCameraPermission: T, currentUser: g }),
          });
};
