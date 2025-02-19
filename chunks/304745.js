n.d(t, { M: () => S }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(2052),
    c = n(40851),
    u = n(317381),
    d = n(683921),
    p = n(588580),
    h = n(374065),
    f = n(451576),
    m = n(526846),
    g = n(119315),
    b = n(403404),
    _ = n(906732),
    C = n(424602),
    v = n(243778),
    y = n(579185),
    x = n(301076),
    j = n(82965),
    O = n(127379),
    N = n(981631),
    E = n(921944),
    P = n(388032),
    I = n(657452);
function S(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: S, setWhichPopoutIsOpen: Z } = e,
        T = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        A = (0, h.KF)(t.id),
        w = (0, h.g5)(A),
        R = A !== h.jy.CAN_LAUNCH || T,
        { isHovered: k, setIsHovered: M, onMouseEnter: L, onMouseLeave: D } = (0, y.Z)(200, 300),
        W = (0, j.Z)({ location: 'CenterControlTrayActivityButton' }),
        U = (0, p.a)(),
        B = (0, d.Z)({ channelId: t.id }),
        F = !R,
        H = i.useCallback(
            (e) => {
                'focus' !== e.type && L();
            },
            [L]
        ),
        G = (0, s.O)(),
        V = (0, c.bp)() === N.IlC.POPOUT,
        { analyticsLocations: z } = (0, _.ZP)(),
        q = z.length > 0 ? z[z.length - 1] : 'open-activity-shelf';
    C.m1.useExperiment({ location: q }, { autoTrackExposure: !0 });
    let Y = i.useCallback(() => {
            (0, b.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: G.location,
                openInPopout: V,
                analyticsLocations: z,
                opensAppLauncherModal: !0
            });
        }, [G.location, z, t, V]),
        K = [];
    R || K.push(o.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, f.Z)(t.id) && !R && K.push(o.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: X } = C.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    X && !R && K.push(o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let J = i.useRef(!1);
    return (0, r.jsx)(v.ZP, {
        contentTypes: K,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                s = i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !k;
            return (
                !0 === J.current && !1 === s && l(E.L.AUTO_DISMISS),
                J.current !== s && (J.current = s),
                (0, r.jsx)(a.yRy, {
                    fixed: !0,
                    shouldShow: k && (S === O.D.ACTIVITY || null == S),
                    animation: W ? a.yRy.Animation.FADE : a.yRy.Animation.TRANSLATE,
                    animationPosition: W ? 'top' : 'bottom',
                    position: 'bottom',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        M(!1), null == Z || Z(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return F
                            ? (0, r.jsx)(m.m, {
                                  ref: i,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: L,
                                  onMouseLeave: D,
                                  isHovered: k,
                                  onClick: () => l(E.L.UNKNOWN)
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.ua7, {
                                    text: P.NW.string(P.t.P8vmUl),
                                    color: a.FGA.BRAND,
                                    forceOpen: !0,
                                    shouldShow: s,
                                    children: (e) => {
                                        var t, n;
                                        return (0, r.jsx)(
                                            'div',
                                            ((t = (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                        (r = r.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            })
                                                        )),
                                                        r.forEach(function (t) {
                                                            var r;
                                                            (r = n[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: r,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0
                                                                      })
                                                                    : (e[t] = r);
                                                        });
                                                }
                                                return e;
                                            })({}, e)),
                                            (n = n =
                                                {
                                                    children: (0, r.jsx)(x.Z, {
                                                        disabled: R,
                                                        'aria-label': w,
                                                        label: F ? void 0 : w,
                                                        isActivityActive: B || (!W && k),
                                                        className: W ? '' : I.controlButton,
                                                        onClick: () => {
                                                            Y(), (i === o.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === o.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === o.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === o.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(E.L.TAKE_ACTION);
                                                        },
                                                        onMouseEnter: H,
                                                        onMouseLeave: D
                                                    })
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(n)).forEach(function (e) {
                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                  }),
                                            t)
                                        );
                                    }
                                }),
                                U
                                    ? W
                                        ? (0, r.jsx)(g.r, {
                                              top: 2,
                                              right: 2,
                                              size: 6
                                          })
                                        : (0, r.jsx)(g.r, {
                                              top: 4,
                                              right: 10,
                                              size: 12,
                                              maskColor: g.T.BLACK
                                          })
                                    : null
                            ]
                        })
                })
            );
        }
    });
}
