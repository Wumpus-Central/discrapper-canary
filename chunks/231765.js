n.d(t, { Z: () => F }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n(442837),
    a = n(692547),
    o = n(481060),
    c = n(37234),
    d = n(607070),
    u = n(578361),
    m = n(460181),
    h = n(585483),
    g = n(57562),
    _ = n(955204),
    x = n(64078),
    p = n(351780),
    E = n(954794),
    C = n(112843),
    f = n(524484),
    T = n(981631),
    N = n(388032),
    S = n(218768);
let I = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    b = (0, r.range)(0, 11),
    v = (0, r.range)(0, 2.25, 0.25),
    j = (0, r.range)(1, 11),
    A = (0, r.range)(1, 26),
    O = () => [
        {
            location: f.Hn.CHAT_INPUT,
            title: N.intl.string(N.t.elTty8),
            description: N.intl.string(N.t.HtKfMj)
        },
        {
            location: f.Hn.REACTION,
            title: N.intl.string(N.t.Ik4VIS),
            description: N.intl.string(N.t.y4rqKy)
        },
        {
            location: f.Hn.MEMBER_USER,
            title: N.intl.string(N.t.ZXBlAg),
            description: N.intl.string(N.t['m9RD+f'])
        },
        {
            location: f.Hn.CALL_TILE,
            title: N.intl.string(N.t.V66giY),
            description: N.intl.string(N.t.fiHV7u)
        }
    ],
    R = () => [
        {
            location: f.oZ.CHAT_INPUT,
            title: N.intl.string(N.t.vUcvPD),
            description: N.intl.string(N.t.y00OrK)
        },
        {
            location: f.oZ.VOICE_USER,
            title: N.intl.string(N.t['TcRO5+']),
            description: N.intl.string(N.t.YJCxVV)
        },
        {
            location: f.oZ.MENTION,
            title: N.intl.string(N.t.oW4shI),
            description: N.intl.string(N.t['mqfw/P'])
        }
    ];
function P(e) {
    let { disabled: t, locations: n, settingsLocations: s, onChange: r } = e,
        l = n.map((e) =>
            (0, i.jsx)(
                o.j7V,
                {
                    disabled: t,
                    value: s[e.location],
                    note: e.description,
                    onChange: (t) =>
                        r({
                            ...s,
                            [e.location]: t
                        }),
                    children: e.title
                },
                e.location
            )
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.vwX, { children: N.intl.string(N.t.bWVN1N) }), l]
    });
}
function D(e) {
    let { children: t } = e;
    return (0, i.jsx)(o.Text, {
        className: S.sliderDescription,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: t
    });
}
function y(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: s
        } = e,
        r = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, i.jsx)(o.j7V, {
        value: t,
        note: N.intl.string(N.t.KuYbWF),
        onChange: (e) => {
            e || (0, g.T)(_.hn.DISABLE_POGGERMODE),
                e && (!n || r)
                    ? (0, o.h7j)((e) =>
                          (0, i.jsx)(o.ConfirmModal, {
                              header: r ? N.intl.string(N.t['FxT+p6']) : N.intl.string(N.t.TAZ4Fx),
                              confirmText: N.intl.string(N.t.JFfinp),
                              cancelText: N.intl.string(N.t['ETE/oK']),
                              onConfirm: () =>
                                  s(
                                      r
                                          ? I
                                          : {
                                                enabled: !0,
                                                warningSeen: !0
                                            }
                                  ),
                              ...e,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: r ? N.intl.string(N.t.gmixr6) : N.intl.string(N.t.jN3t3N)
                              })
                          })
                      )
                    : s({ enabled: e });
        },
        children: N.intl.string(N.t.vuiXm5)
    });
}
function Z(e) {
    let {
            settings: { enabled: t, confettiEnabled: n, confettiCount: s, confettiSize: r, confettiEnabledLocations: l },
            updateSettings: a
        } = e,
        c = !t || !n;
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: N.intl.string(N.t.mqxwJC),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: n,
                note: N.intl.string(N.t.O1Vflp),
                onChange: (e) => a({ confettiEnabled: e }, 0),
                children: N.intl.string(N.t.s0KCgI)
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: c,
                title: N.intl.string(N.t['vd0D8/']),
                className: S.formItem,
                children: [
                    (0, i.jsx)(D, { children: N.intl.string(N.t.a18Sur) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: c,
                        markers: j,
                        stickToMarkers: !0,
                        minValue: j[0],
                        maxValue: j[j.length - 1],
                        initialValue: s,
                        onValueChange: (e) => a({ confettiCount: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: c,
                title: N.intl.string(N.t.sPO3io),
                className: S.formItem,
                children: [
                    (0, i.jsx)(D, { children: N.intl.string(N.t.xoldVl) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: c,
                        markers: A,
                        stickToMarkers: !0,
                        minValue: A[0],
                        maxValue: A[A.length - 1],
                        initialValue: r,
                        onValueChange: (e) => a({ confettiSize: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsx)(P, {
                disabled: c,
                locations: O(),
                settingsLocations: l,
                onChange: (e) => a({ confettiEnabledLocations: e }, 0)
            })
        ]
    });
}
function k(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: s, combosRequiredCount: r },
            updateSettings: l
        } = e,
        a = !t || !n;
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: N.intl.string(N.t.Xz0olZ),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: n,
                note: N.intl.string(N.t['31Z8ER']),
                onChange: (e) => l({ combosEnabled: e }),
                children: N.intl.string(N.t.o3iV7O)
            }),
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: s,
                note: N.intl.string(N.t['9rgQEh']),
                onChange: (e) => l({ comboSoundsEnabled: e }),
                children: N.intl.string(N.t['Ax+Ioa'])
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: a,
                title: N.intl.string(N.t.L0oQur),
                className: S.formItem,
                children: [
                    (0, i.jsx)(D, { children: N.intl.string(N.t['/OOFpK']) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: a,
                        markers: b,
                        stickToMarkers: !0,
                        minValue: b[0],
                        maxValue: b[b.length - 1],
                        initialValue: r,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsx)(o.$i$, { className: S.divider })
        ]
    });
}
function L(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: s, screenshakeEnabledLocations: r },
            updateSettings: a
        } = e,
        c = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        u = !t || !n || c,
        m = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > s && (0, g.T)(_.hn.MORE), a(e, t);
        };
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: N.intl.string(N.t.wVS5SU),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t || c,
                tooltipNote: c ? N.intl.string(N.t.GckHGx) : null,
                value: n && !c,
                note: N.intl.string(N.t.Qq5W3t),
                onChange: (e) => a({ screenshakeEnabled: e }, 1),
                children: N.intl.string(N.t.N004zM)
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: u,
                title: N.intl.string(N.t.UxnnCw),
                className: S.formItem,
                children: [
                    (0, i.jsx)(D, { children: N.intl.string(N.t.CEOEOT) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: u,
                        markers: v,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: v[0],
                        maxValue: v[v.length - 1],
                        initialValue: s,
                        onValueChange: (e) => m({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) => (e === v[v.length - 1] ? N.intl.string(N.t['4rbMWV']) : ''.concat(100 * e, '%'))
                    })
                ]
            }),
            (0, i.jsx)(P, {
                disabled: u,
                locations: R(),
                settingsLocations: r,
                onChange: (e) => a({ screenshakeEnabledLocations: e }, 1)
            })
        ]
    });
}
function B(e) {
    let { updateSettings: t } = e;
    return (0, i.jsx)(o.hjN, {
        tag: o.RB0.H1,
        title: N.intl.string(N.t.EuXv2t),
        children: (0, i.jsxs)(o.xJW, {
            className: S.formItem,
            children: [
                (0, i.jsx)(o.R94, {
                    className: S.formItem,
                    children: N.intl.string(N.t['1SLnkp'])
                }),
                (0, i.jsx)(o.zxk, {
                    className: S.hideButton,
                    size: o.zxk.Sizes.SMALL,
                    onClick: () => {
                        t({
                            enabled: !1,
                            settingsVisible: !1
                        }),
                            (0, c.xf)();
                    },
                    children: N.intl.string(N.t.qz65yc)
                })
            ]
        })
    });
}
function M(e) {
    let { onChangePage: t } = e;
    return (0, i.jsxs)(o.hjN, {
        children: [
            (0, i.jsxs)(o.P3F, {
                onClick: () => t(1),
                className: S.achievementContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: S.achievementIconContainer,
                        children: (0, i.jsx)(o.rm8, {
                            size: 'md',
                            color: a.Z.unsafe_rawColors.ORANGE_345.css
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: S.achievementTextContainer,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: N.intl.string(N.t['6jI0hY'])
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: N.intl.string(N.t.GuUItb)
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Fbu, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        className: S.rightCaretIcon
                    })
                ]
            }),
            (0, i.jsx)(o.$i$, { className: S.divider })
        ]
    });
}
let w = () =>
    n
        .e('68170')
        .then(n.t.bind(n, 205663, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function V(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        r = (0, l.cj)([p.Z], () => p.Z.getState()),
        [a, c] = s.useState({
            x: 0,
            y: 0
        }),
        d = (0, C.Z)();
    function u(e, t, n, i) {
        return (null != t ? t : e) && (null != i ? i : n);
    }
    let g = (e) => {
            if (e.enabled && !1 === r.enabled) {
                var t;
                n(!0),
                    (0, m.GN)('poggermode_enabled'),
                    h.S.dispatch(T.CkL.SHAKE_APP, {
                        duration: 2000,
                        intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : r.shakeIntensity
                    });
            }
        },
        _ = (e, t) => {
            if ((g(e), (0, x.AI)(e), null == t)) return;
            let n = u(r.confettiEnabled, e.confettiEnabled, r.enabled, e.enabled);
            0 === t && n && d.fire(a.x, a.y, { settings: e });
            let i = u(r.screenshakeEnabled, e.screenshakeEnabled, r.enabled, e.enabled);
            if (1 === t && i) {
                var s;
                h.S.dispatch(T.CkL.SHAKE_APP, {
                    duration: 1000,
                    intensity: null !== (s = e.shakeIntensity) && void 0 !== s ? s : r.shakeIntensity
                });
            }
        },
        E = (e) => {
            c({
                x: e.clientX,
                y: e.clientY
            });
        };
    return (
        s.useEffect(() => (window.addEventListener('mousemove', E), () => window.removeEventListener('mousemove', E)), []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    className: S.title,
                    children: N.intl.string(N.t.AtCukJ)
                }),
                (0, i.jsx)(y, {
                    settings: r,
                    updateSettings: _
                }),
                (0, i.jsx)(M, { onChangePage: t }),
                (0, i.jsx)(k, {
                    settings: r,
                    updateSettings: _
                }),
                (0, i.jsx)(L, {
                    settings: r,
                    updateSettings: _
                }),
                (0, i.jsx)(Z, {
                    settings: r,
                    updateSettings: _
                }),
                (0, i.jsx)(B, { updateSettings: _ })
            ]
        })
    );
}
let U = (e, t, n) => {
        let s = (e) => () => {
            t(e);
        };
        switch (e) {
            case 0:
                return (0, i.jsx)(V, {
                    onChangePage: s(1),
                    setShowEnableAnimation: n
                });
            case 1:
                return (0, i.jsx)(E.Z, { onBackClick: s(0) });
            default:
                return null;
        }
    },
    G = (e) => (0 === e ? u.n.LEFT : u.n.RIGHT);
function F() {
    let [e, t] = s.useState(0),
        [n, r] = s.useState(G(e)),
        [a, c] = s.useState(!1),
        m = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        h = a && !m;
    return (
        s.useEffect(() => {
            let t = setTimeout(() => {
                r(G(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        s.useEffect(() => {
            Math.random() > 0.99 && (0, g.T)(_.hn.VISITOR_100);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    className: S.slideAnimator,
                    step: e,
                    direction: n,
                    children: U(e, t, c)
                }),
                (0, i.jsx)('div', {
                    className: h ? S.enableAnimationOverlayVisible : S.enableAnimationOverlayHidden,
                    children: (0, i.jsx)(o.Fmz, {
                        className: S.enableAnimation,
                        importData: w,
                        shouldAnimate: h,
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
