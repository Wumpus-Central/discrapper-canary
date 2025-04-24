n.d(t, { Z: () => z }), n(953529), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(392711),
    l = n(442837),
    a = n(692547),
    o = n(481060),
    c = n(37234),
    d = n(607070),
    u = n(578361),
    m = n(460181),
    p = n(585483),
    g = n(57562),
    h = n(955204),
    f = n(64078),
    b = n(351780),
    _ = n(954794),
    x = n(112843),
    E = n(524484),
    C = n(981631),
    j = n(388032),
    O = n(966053);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    I = (0, s.range)(0, 11),
    N = (0, s.range)(0, 2.25, 0.25),
    y = (0, s.range)(1, 11),
    A = (0, s.range)(1, 26),
    P = () => [
        {
            location: E.Hn.CHAT_INPUT,
            title: j.intl.string(j.t.elTty8),
            description: j.intl.string(j.t.HtKfMj)
        },
        {
            location: E.Hn.REACTION,
            title: j.intl.string(j.t.Ik4VIS),
            description: j.intl.string(j.t.y4rqKy)
        },
        {
            location: E.Hn.MEMBER_USER,
            title: j.intl.string(j.t.ZXBlAg),
            description: j.intl.string(j.t['m9RD+f'])
        },
        {
            location: E.Hn.CALL_TILE,
            title: j.intl.string(j.t.V66giY),
            description: j.intl.string(j.t.fiHV7u)
        }
    ],
    R = () => [
        {
            location: E.oZ.CHAT_INPUT,
            title: j.intl.string(j.t.vUcvPD),
            description: j.intl.string(j.t.y00OrK)
        },
        {
            location: E.oZ.VOICE_USER,
            title: j.intl.string(j.t['TcRO5+']),
            description: j.intl.string(j.t.YJCxVV)
        },
        {
            location: E.oZ.MENTION,
            title: j.intl.string(j.t.oW4shI),
            description: j.intl.string(j.t['mqfw/P'])
        }
    ];
function D(e) {
    let { disabled: t, locations: n, settingsLocations: r, onChange: s } = e,
        l = n.map((e) =>
            (0, i.jsx)(
                o.j7V,
                {
                    disabled: t,
                    value: r[e.location],
                    note: e.description,
                    onChange: (t) => s(v(S({}, r), { [e.location]: t })),
                    children: e.title
                },
                e.location
            )
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.vwX, { children: j.intl.string(j.t.bWVN1N) }), l]
    });
}
function Z(e) {
    let { children: t } = e;
    return (0, i.jsx)(o.Text, {
        className: O.sliderDescription,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: t
    });
}
function w(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: r
        } = e,
        s = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, i.jsx)(o.j7V, {
        value: t,
        note: j.intl.string(j.t.KuYbWF),
        onChange: (e) => {
            e || (0, g.T)(h.hn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, o.h7j)((e) =>
                          (0, i.jsx)(
                              o.ConfirmModal,
                              v(
                                  S(
                                      {
                                          header: s ? j.intl.string(j.t['FxT+p6']) : j.intl.string(j.t.TAZ4Fx),
                                          confirmText: j.intl.string(j.t.JFfinp),
                                          cancelText: j.intl.string(j.t['ETE/oK']),
                                          onConfirm: () =>
                                              r(
                                                  s
                                                      ? T
                                                      : {
                                                            enabled: !0,
                                                            warningSeen: !0
                                                        }
                                              )
                                      },
                                      e
                                  ),
                                  {
                                      children: (0, i.jsx)(o.Text, {
                                          variant: 'text-md/normal',
                                          children: s ? j.intl.string(j.t.gmixr6) : j.intl.string(j.t.jN3t3N)
                                      })
                                  }
                              )
                          )
                      )
                    : r({ enabled: e });
        },
        children: j.intl.string(j.t.vuiXm5)
    });
}
function k(e) {
    let {
            settings: { enabled: t, confettiEnabled: n, confettiCount: r, confettiSize: s, confettiEnabledLocations: l },
            updateSettings: a
        } = e,
        c = !t || !n;
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: j.intl.string(j.t.mqxwJC),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: n,
                note: j.intl.string(j.t.O1Vflp),
                onChange: (e) => a({ confettiEnabled: e }, 0),
                children: j.intl.string(j.t.s0KCgI)
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: c,
                title: j.intl.string(j.t['vd0D8/']),
                className: O.formItem,
                children: [
                    (0, i.jsx)(Z, { children: j.intl.string(j.t.a18Sur) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: c,
                        markers: y,
                        stickToMarkers: !0,
                        minValue: y[0],
                        maxValue: y[y.length - 1],
                        initialValue: r,
                        onValueChange: (e) => a({ confettiCount: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: c,
                title: j.intl.string(j.t.sPO3io),
                className: O.formItem,
                children: [
                    (0, i.jsx)(Z, { children: j.intl.string(j.t.xoldVl) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: c,
                        markers: A,
                        stickToMarkers: !0,
                        minValue: A[0],
                        maxValue: A[A.length - 1],
                        initialValue: s,
                        onValueChange: (e) => a({ confettiSize: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsx)(D, {
                disabled: c,
                locations: P(),
                settingsLocations: l,
                onChange: (e) => a({ confettiEnabledLocations: e }, 0)
            })
        ]
    });
}
function L(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: r, combosRequiredCount: s },
            updateSettings: l
        } = e,
        a = !t || !n;
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: j.intl.string(j.t.Xz0olZ),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: n,
                note: j.intl.string(j.t['31Z8ER']),
                onChange: (e) => l({ combosEnabled: e }),
                children: j.intl.string(j.t.o3iV7O)
            }),
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: r,
                note: j.intl.string(j.t['9rgQEh']),
                onChange: (e) => l({ comboSoundsEnabled: e }),
                children: j.intl.string(j.t['Ax+Ioa'])
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: a,
                title: j.intl.string(j.t.L0oQur),
                className: O.formItem,
                children: [
                    (0, i.jsx)(Z, { children: j.intl.string(j.t['/OOFpK']) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: a,
                        markers: I,
                        stickToMarkers: !0,
                        minValue: I[0],
                        maxValue: I[I.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsx)(o.$i$, { className: O.divider })
        ]
    });
}
function B(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: r, screenshakeEnabledLocations: s },
            updateSettings: a
        } = e,
        c = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        u = !t || !n || c,
        m = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > r && (0, g.T)(h.hn.MORE), a(e, t);
        };
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: j.intl.string(j.t.wVS5SU),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t || c,
                tooltipNote: c ? j.intl.string(j.t.GckHGx) : null,
                value: n && !c,
                note: j.intl.string(j.t.Qq5W3t),
                onChange: (e) => a({ screenshakeEnabled: e }, 1),
                children: j.intl.string(j.t.N004zM)
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: u,
                title: j.intl.string(j.t.UxnnCw),
                className: O.formItem,
                children: [
                    (0, i.jsx)(Z, { children: j.intl.string(j.t.CEOEOT) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: u,
                        markers: N,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: N[0],
                        maxValue: N[N.length - 1],
                        initialValue: r,
                        onValueChange: (e) => m({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) => (e === N[N.length - 1] ? j.intl.string(j.t['4rbMWV']) : ''.concat(100 * e, '%'))
                    })
                ]
            }),
            (0, i.jsx)(D, {
                disabled: u,
                locations: R(),
                settingsLocations: s,
                onChange: (e) => a({ screenshakeEnabledLocations: e }, 1)
            })
        ]
    });
}
function M(e) {
    let { updateSettings: t } = e;
    return (0, i.jsx)(o.hjN, {
        tag: o.RB0.H1,
        title: j.intl.string(j.t.EuXv2t),
        children: (0, i.jsxs)(o.xJW, {
            className: O.formItem,
            children: [
                (0, i.jsx)(o.R94, {
                    className: O.formItem,
                    children: j.intl.string(j.t['1SLnkp'])
                }),
                (0, i.jsx)(o.zxk, {
                    className: O.hideButton,
                    size: o.zxk.Sizes.SMALL,
                    onClick: () => {
                        t({
                            enabled: !1,
                            settingsVisible: !1
                        }),
                            (0, c.xf)();
                    },
                    children: j.intl.string(j.t.qz65yc)
                })
            ]
        })
    });
}
function U(e) {
    let { onChangePage: t } = e;
    return (0, i.jsxs)(o.hjN, {
        children: [
            (0, i.jsxs)(o.P3F, {
                onClick: () => t(1),
                className: O.achievementContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: O.achievementIconContainer,
                        children: (0, i.jsx)(o.rm8, {
                            size: 'md',
                            color: a.Z.unsafe_rawColors.ORANGE_345.css
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: O.achievementTextContainer,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: j.intl.string(j.t['6jI0hY'])
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: j.intl.string(j.t.GuUItb)
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Fbu, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        className: O.rightCaretIcon
                    })
                ]
            }),
            (0, i.jsx)(o.$i$, { className: O.divider })
        ]
    });
}
let V = () =>
    n
        .e('68170')
        .then(n.t.bind(n, 205663, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function G(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        s = (0, l.cj)([b.Z], () => b.Z.getState()),
        [a, c] = r.useState({
            x: 0,
            y: 0
        }),
        d = (0, x.Z)();
    function u(e, t, n, i) {
        return (null != t ? t : e) && (null != i ? i : n);
    }
    let g = (e) => {
            if (e.enabled && !1 === s.enabled) {
                var t;
                n(!0),
                    (0, m.GN)('poggermode_enabled'),
                    p.S.dispatch(C.CkL.SHAKE_APP, {
                        duration: 2000,
                        intensity: null != (t = e.shakeIntensity) ? t : s.shakeIntensity
                    });
            }
        },
        h = (e, t) => {
            if ((g(e), (0, f.AI)(e), null == t)) return;
            let n = u(s.confettiEnabled, e.confettiEnabled, s.enabled, e.enabled);
            0 === t && n && d.fire(a.x, a.y, { settings: e });
            let i = u(s.screenshakeEnabled, e.screenshakeEnabled, s.enabled, e.enabled);
            if (1 === t && i) {
                var r;
                p.S.dispatch(C.CkL.SHAKE_APP, {
                    duration: 1000,
                    intensity: null != (r = e.shakeIntensity) ? r : s.shakeIntensity
                });
            }
        },
        _ = (e) => {
            c({
                x: e.clientX,
                y: e.clientY
            });
        };
    return (
        r.useEffect(() => (window.addEventListener('mousemove', _), () => window.removeEventListener('mousemove', _)), []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    className: O.title,
                    children: j.intl.string(j.t.AtCukJ)
                }),
                (0, i.jsx)(w, {
                    settings: s,
                    updateSettings: h
                }),
                (0, i.jsx)(U, { onChangePage: t }),
                (0, i.jsx)(L, {
                    settings: s,
                    updateSettings: h
                }),
                (0, i.jsx)(B, {
                    settings: s,
                    updateSettings: h
                }),
                (0, i.jsx)(k, {
                    settings: s,
                    updateSettings: h
                }),
                (0, i.jsx)(M, { updateSettings: h })
            ]
        })
    );
}
let F = (e, t, n) => {
        let r = (e) => () => {
            t(e);
        };
        switch (e) {
            case 0:
                return (0, i.jsx)(G, {
                    onChangePage: r(1),
                    setShowEnableAnimation: n
                });
            case 1:
                return (0, i.jsx)(_.Z, { onBackClick: r(0) });
            default:
                return null;
        }
    },
    H = (e) => (0 === e ? u.n.LEFT : u.n.RIGHT);
function z() {
    let [e, t] = r.useState(0),
        [n, s] = r.useState(H(e)),
        [a, c] = r.useState(!1),
        m = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        p = a && !m;
    return (
        r.useEffect(() => {
            let t = setTimeout(() => {
                s(H(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        r.useEffect(() => {
            Math.random() > 0.99 && (0, g.T)(h.hn.VISITOR_100);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    className: O.slideAnimator,
                    step: e,
                    direction: n,
                    children: F(e, t, c)
                }),
                (0, i.jsx)('div', {
                    className: p ? O.enableAnimationOverlayVisible : O.enableAnimationOverlayHidden,
                    children: (0, i.jsx)(o.Fmz, {
                        className: O.enableAnimation,
                        importData: V,
                        shouldAnimate: p,
                        autoplay: !1,
                        resetOnPlay: !0,
                        loop: !1,
                        onComplete: () => c(!1)
                    })
                })
            ]
        })
    );
}
