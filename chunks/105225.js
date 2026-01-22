n.d(t, {
    Ay: () => eP,
    SZ: () => e_,
    rP: () => eC,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(432022),
    u = n(311907),
    d = n(554146),
    f = n(397927),
    p = n(827343),
    h = n(442433),
    b = n(956793),
    g = n(401843),
    m = n(820284),
    A = n(933958),
    y = n(967812),
    O = n(793574),
    j = n(688810),
    v = n(313961),
    x = n(385318),
    E = n(206018),
    _ = n(750765),
    C = n(183184),
    S = n(384059),
    I = n(480890),
    N = n(379848),
    T = n(643501),
    P = n(857253),
    w = n(652896),
    R = n(880144),
    D = n(338771),
    M = n(508654),
    L = n(984624),
    G = n(394412),
    k = n(267102),
    U = n(526292),
    V = n(396495),
    F = n(478564),
    H = n(123973),
    B = n(447404),
    K = n(246356),
    W = n(710801),
    z = n(496841),
    Y = n(383831),
    q = n(905216),
    X = n(577062),
    J = n(533978),
    Q = n(958449),
    Z = n(970636),
    $ = n(996744),
    ee = n(85612),
    et = n(616356),
    en = n(470710),
    er = n(430452),
    el = n(309010),
    ei = n(287809),
    ea = n(151476),
    es = n(405018),
    eo = n(927258),
    ec = n(173660),
    eu = n(543274),
    ed = n(579153),
    ef = n(152535),
    ep = n(848362),
    eh = n(222692),
    eb = n(702904),
    eg = n(471993),
    em = n(442353),
    eA = n(652215),
    ey = n(806931),
    eO = n(49999),
    ej = n(913957);
function ev() {
    return (ev =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function ex(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function eE(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e_(e, t) {
    if (er.A.isVideoEnabled() === e) return;
    let n = () => p.A.setVideoEnabled(e);
    (0, S.X)(O.A.VOICE_CONTROL_TRAY, S.O.CAMERA, e), e ? (0, em.A)(n, t) : n();
}
function eC(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: a, hasPermission: s, disabled: o } = e,
        { parentAnalyticsLocation: c, analyticsLocations: p } = (0, j.Ay)(),
        h = (0, k.Us)(),
        b = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()),
        g = b.find((e) => e.ownerId === n.id),
        m = l.useRef(null),
        A = l.useRef(null),
        y = t.getGuildId(),
        O = l.useCallback(() => {
            if ((null == i || i(), !a)) return (0, eb.A)();
            (0, eg.A)(y, t.id, p);
        }, [y, t.id, a, i, p]),
        v = (0, U.k0)(),
        [x, E] = l.useState(!1),
        _ = () => {
            ((0, S.X)(c, S.O.STREAM, !0), a) ? O() : (0, eb.A)();
        },
        C = () => {
            (0, S.X)(c, S.O.STREAM, !1), (0, D.A)(g);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (v && 0 === b.length)
                    return (0, r.jsx)(N.Ay, {
                        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.M.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    E(!0),
                                    (0, r.jsx)(V.b, {
                                        buttonRef: m,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eO.i.USER_DISMISS), E(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, r.jsx)(B.A, {
                children: (0, r.jsx)(f.YNO, {
                    targetElementRef: A,
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, r.jsx)(K.A, {
                            children: (0, r.jsx)(ep.A, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: O,
                                appContext: h,
                                onClose: l,
                                onInteraction: eT("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: f.YNO.Animation.FADE,
                    children: (e, t) => {
                        let [n, ...l] = [e, t],
                            {} = n,
                            i = ev({}, n),
                            [{ isShown: a }] = l;
                        return (0, r.jsx)("div", {
                            ref: A,
                            children: ((e, t) => {
                                let n = null != e ? e : { onClick: void 0 },
                                    { onClick: l } = n,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            l,
                                            i = {};
                                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                                            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                                (r = n[l]),
                                                    !(t.indexOf(r) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                        (i[r] = e[r]);
                                            return i;
                                        }
                                        if (
                                            ((i = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    l = {},
                                                    i = Object.getOwnPropertyNames(e);
                                                for (r = 0; r < i.length; r++)
                                                    (n = i[r]),
                                                        !(t.indexOf(n) >= 0) &&
                                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                            (l[n] = e[n]);
                                                return l;
                                            })(e, t)),
                                            Object.getOwnPropertySymbols)
                                        )
                                            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                                (r = n[l]),
                                                    !(t.indexOf(r) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                        (i[r] = e[r]);
                                        return i;
                                    })(n, ["onClick"]),
                                    a = null != g;
                                return (0, r.jsx)(
                                    Q.h,
                                    eE(ex({}, i), {
                                        centerButton: !0,
                                        disabled: o || !s,
                                        className: ej.uH,
                                        hasPermission: s,
                                        streamActive: null != g,
                                        isSelfStream: !0,
                                        onPopoutClick: a
                                            ? function (e) {
                                                  null == l || l(e);
                                              }
                                            : null,
                                        popoutOpen: t,
                                        shouldShowTooltip: !t,
                                        renderNUXHighlight: x,
                                        buttonRef: m,
                                        onClick: null != g ? C : _,
                                    }),
                                );
                            })(i, a),
                        });
                    },
                }),
            }),
        ],
    });
}
function eS(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: i } = e,
        a = t.getGuildId();
    return (0, y.A)(a, t.id)
        ? (0, r.jsx)("div", {
              className: ej.UD,
              children: (0, r.jsx)(eu.K, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: l,
                  setWhichPopoutIsOpen: i,
              }),
          })
        : null;
}
let eI = l.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: i, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: s } = (0, j.Ay)(),
        o = (0, u.bG)([v.A], () => v.A.getSelectedParticipant(i.id)),
        { reducedMotion: d } = l.useContext(f.CZY),
        [p, h] = l.useState(!1),
        m = null == o ? void 0 : o.id,
        A = (0, u.bG)([et.A], () => (null != m ? et.A.getActiveStreamForStreamKey(m) : null), [m]),
        y = (null == o ? void 0 : o.type) === ey.lp.STREAM && null != A && A.ownerId !== (null == t ? void 0 : t.id),
        O = (0, u.yK)([et.A], () =>
            et.A.getAllActiveStreamsForChannel(i.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            }),
        ),
        x = (0, M.Qs)(i.id),
        E = l.useRef(null),
        _ = l.useCallback(
            () =>
                (null == o ? void 0 : o.type) === ey.lp.ACTIVITY &&
                o.applicationId === (null == a ? void 0 : a.applicationId)
                    ? "ACTIVITY"
                    : y
                      ? "STREAM"
                      : null != x
                        ? "EVENT"
                        : "CALL",
            [o, null == a ? void 0 : a.applicationId, y, x],
        ),
        [C, I] = l.useState(_()),
        N = (0, f.zhh)(
            {
                opacity: p ? 0.2 : 1,
                transform: p && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: {
                    mass: 2,
                    tension: p ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: p,
                },
                onRest: () => {
                    I(_()), h(!1);
                },
            },
            "animate-always",
        );
    l.useEffect(() => {
        _() !== C && h(!0);
    }, [C, _]);
    let T = l.useCallback(() => {
        if (null != A) (0, g.vN)((0, w._z)(A));
        else for (let e of O) (0, g.vN)((0, w._z)(e));
    }, [O, A]);
    return (0, r.jsx)(f.YNO, {
        targetElementRef: E,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(ep.A, {
                channel: i,
                currentUser: t,
                activeStreams: O,
                handleGoLive: eA.FXj,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eT("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: f.YNO.Animation.FADE,
        children: (e, l) => {
            let { onClick: u } = e,
                { isShown: d } = l;
            return (0, r.jsx)(c.animated.div, {
                style: N,
                ref: E,
                children: ((e, l) => {
                    let c = {
                        isTrayButton: !1,
                        centerButton: !0,
                        popoutOpen: e,
                    };
                    switch (C) {
                        case "ACTIVITY":
                            if (null == o || null == t || o.type !== ey.lp.ACTIVITY || null == a) return;
                            return (0, r.jsx)(
                                Y.A,
                                eE(ex({}, c), {
                                    applicationId: o.applicationId,
                                    color: "disconnect",
                                    location: a.location,
                                    onPopoutClick: O.length > 0 ? l : null,
                                }),
                            );
                        case "STREAM":
                            return (0, r.jsx)(
                                Q.h,
                                eE(ex({}, c), {
                                    hasPermission: !0,
                                    streamActive: !0,
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, S.X)(s, S.O.STOP_WATCHING), T();
                                    },
                                    onPopoutClick: O.length > 1 ? l : null,
                                    isSelfStream: !1,
                                }),
                            );
                        case "CALL":
                            return (0, r.jsx)(
                                q.A,
                                eE(ex({}, c), {
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, S.X)(s, S.O.DISCONNECT), null == n || n();
                                    },
                                    onPopoutClick: O.length > 0 ? l : null,
                                }),
                            );
                        case "EVENT":
                            return (0, r.jsx)(L.A, {
                                channelId: i.id,
                                onClick: () => {
                                    (0, S.X)(s, S.O.DISCONNECT), b.default.disconnect(), null == n || n();
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eN(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: a } = e,
        s = (0, k.Us)(),
        { parentAnalyticsLocation: o } = (0, j.Ay)(),
        { reachedLimit: c, limit: d } = (0, es.A)(t),
        f = l.useCallback(() => {
            (0, S.X)(o, S.O.JOIN_VIDEO_CALL), (0, em.A)(() => b.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s, o]),
        p = l.useCallback(() => {
            n ? (0, eh.A)() : f();
        }, [n, f]),
        h = (0, u.bG)([en.A], () => {
            let e = en.A.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, r.jsxs)("div", {
        className: ej.iE,
        children: [
            (0, r.jsx)(Z.A, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: c,
                channelLimit: d,
                channel: t,
                cameraUnavailable: n,
                hasPermission: i,
                onCameraUnavailable: p,
                className: ej.uH,
                onChange: f,
            }),
            (0, r.jsx)(z.A, {
                centerButton: !0,
                color: "join",
                channel: t,
                className: ej.uH,
            }),
            h
                ? (0, r.jsx)(W.A, {
                      color: "disconnect",
                      channel: t,
                      className: ej.uH,
                      isTrayButton: !1,
                  })
                : null,
        ],
    });
}
function eT(e) {
    return (0, I.s)(e, O.A.VOICE_CONTROL_TRAY, { entrypoint: ey.GK.CARET });
}
let eP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: s, exitFullScreen: c, idleProps: d } = e,
        p = l.useRef(null),
        [b, g] = l.useState(void 0),
        y = (0, u.bG)([ei.default], () => {
            let e = ei.default.getCurrentUser();
            return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: v, enabled: S } = (0, ea.A)(),
        I = (0, eo.A)(n),
        { suppress: N, selfMute: w, mute: D } = (0, ec.A)(n),
        { canGoLive: M } = (0, u.cf)([er.A], () => ({ canGoLive: (0, R.A)(er.A) })),
        L = (0, P.A)(),
        U = (0, u.bG)([T.default], () => null != T.default.getAwaitingRemoteSessionInfo()),
        V = null != L,
        B = (0, u.bG)([el.A], () => {
            var e;
            return (null != (e = null == L ? void 0 : L.channelId) ? e : el.A.getVoiceChannelId()) === n.id;
        }),
        W = (0, F.A)({
            channelId: n.id,
            location: "center-control-tray",
        }),
        z = (0, u.bG)([A.Ay], () => A.Ay.getCurrentEmbeddedActivity()),
        { reachedLimit: Y, limit: q } = (0, es.A)(n),
        { analyticsLocations: Q } = (0, j.Ay)(O.A.VOICE_CONTROL_TRAY),
        et = (0, $.Cg)({
            location: O.A.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0,
        }),
        en = (0, H.A)(n),
        eu = l.useRef(null),
        ep = l.useRef(null),
        eb = (0, k.Us)(),
        eg = et
            ? (e) => {
                  (0, h.L3)(e, () =>
                      Promise.resolve(() =>
                          (0, r.jsx)(x.default, {
                              onClose: h.Z_,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: eT("AudioDeviceMenu"),
                              appContext: eb,
                          }),
                      ),
                  );
              }
            : void 0;
    return B
        ? (0, r.jsx)(j.f5, {
              value: Q,
              children: (0, r.jsxs)(m.A, {
                  section: eA.JJy.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)("div", {
                          className: ej.rt,
                          children: (0, r.jsx)(G.A, { channelId: n.id }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: p,
                          className: a()(ej.iE, i),
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ej.qi,
                                  children: [
                                      (0, r.jsx)(f.YNO, {
                                          targetElementRef: eu,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = et
                                                      ? (0, r.jsx)(ee.a, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : (0, r.jsx)(E.A, {
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
                                                            appContext: eb,
                                                        })),
                                                  (0, r.jsxs)(K.A, {
                                                      children: [t, " "],
                                                  })
                                              );
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: f.YNO.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: l } = t;
                                              return (0, r.jsx)(X.A, {
                                                  ref: eu,
                                                  centerButton: !0,
                                                  onPopoutClick: V ? null : n,
                                                  selfMute: w,
                                                  serverMute: D,
                                                  suppress: N,
                                                  popoutOpen: l,
                                                  awaitingRemote: U,
                                                  onClick: () => (0, C.A)(D, N, eA.JJy.VOICE_CONTROL_TRAY),
                                                  onContextMenu: eg,
                                              });
                                          },
                                      }),
                                      !V &&
                                          (0, r.jsx)(f.YNO, {
                                              targetElementRef: ep,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(K.A, {
                                                      children: (0, r.jsx)(_.A, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eT("VideoDeviceMenu"),
                                                          appContext: eb,
                                                      }),
                                                  });
                                              },
                                              position: "top",
                                              align: "right",
                                              spacing: 16,
                                              animation: f.YNO.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: l } = t;
                                                  return (0, r.jsx)(Z.A, {
                                                      ref: ep,
                                                      centerButton: !0,
                                                      hasPermission: I,
                                                      enabled: S,
                                                      cameraUnavailable: v,
                                                      onChange: e_,
                                                      onCameraUnavailable: eh.A,
                                                      channelLimitReached: Y,
                                                      channelLimit: q,
                                                      popoutOpen: l,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ej.qi,
                                  children: [
                                      !V &&
                                          (0, r.jsx)(eC, {
                                              channel: n,
                                              currentUser: y,
                                              exitFullScreen: c,
                                              canGoLive: M,
                                              hasPermission: I,
                                          }),
                                      !V &&
                                          (0, r.jsx)(eS, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: b,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      en &&
                                          (0, r.jsx)(J.A, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: b,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      W &&
                                          (0, r.jsx)(ef.A, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: b,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      (0, r.jsx)(ed.A, {
                                          channel: n,
                                          whichPopoutIsOpen: b,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: V,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(eI, {
                                  connectedEmbeddedActivity: z,
                                  currentUser: y,
                                  channel: n,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(j.f5, {
              value: Q,
              children: (0, r.jsx)(eN, {
                  channel: n,
                  cameraUnavailable: v,
                  hasCameraPermission: I,
                  currentUser: y,
              }),
          });
};
