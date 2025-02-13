n.d(t, { Z: () => F }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    r = n(442837),
    a = n(692547),
    o = n(481060),
    c = n(37234),
    d = n(607070),
    u = n(578361),
    h = n(460181),
    m = n(585483),
    g = n(57562),
    x = n(955204),
    _ = n(64078),
    p = n(351780),
    E = n(954794),
    C = n(112843),
    N = n(524484),
    I = n(981631),
    f = n(388032),
    T = n(523870);
let S = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    j = (0, l.range)(0, 11),
    v = (0, l.range)(0, 2.25, 0.25),
    b = (0, l.range)(1, 11),
    A = (0, l.range)(1, 26),
    O = () => [
        {
            location: N.Hn.CHAT_INPUT,
            title: f.intl.string(f.t.elTty8),
            description: f.intl.string(f.t.HtKfMj)
        },
        {
            location: N.Hn.REACTION,
            title: f.intl.string(f.t.Ik4VIS),
            description: f.intl.string(f.t.y4rqKy)
        },
        {
            location: N.Hn.MEMBER_USER,
            title: f.intl.string(f.t.ZXBlAg),
            description: f.intl.string(f.t['m9RD+f'])
        },
        {
            location: N.Hn.CALL_TILE,
            title: f.intl.string(f.t.V66giY),
            description: f.intl.string(f.t.fiHV7u)
        }
    ],
    R = () => [
        {
            location: N.oZ.CHAT_INPUT,
            title: f.intl.string(f.t.vUcvPD),
            description: f.intl.string(f.t.y00OrK)
        },
        {
            location: N.oZ.VOICE_USER,
            title: f.intl.string(f.t['TcRO5+']),
            description: f.intl.string(f.t.YJCxVV)
        },
        {
            location: N.oZ.MENTION,
            title: f.intl.string(f.t.oW4shI),
            description: f.intl.string(f.t['mqfw/P'])
        }
    ];
function D(e) {
    let { disabled: t, locations: n, settingsLocations: s, onChange: l } = e,
        r = n.map((e) =>
            (0, i.jsx)(
                o.j7V,
                {
                    disabled: t,
                    value: s[e.location],
                    note: e.description,
                    onChange: (t) =>
                        l({
                            ...s,
                            [e.location]: t
                        }),
                    children: e.title
                },
                e.location
            )
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.vwX, { children: f.intl.string(f.t.bWVN1N) }), r]
    });
}
function P(e) {
    let { children: t } = e;
    return (0, i.jsx)(o.Text, {
        className: T.sliderDescription,
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
        l = (0, r.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, i.jsx)(o.j7V, {
        value: t,
        note: f.intl.string(f.t.KuYbWF),
        onChange: (e) => {
            e || (0, g.T)(x.hn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, o.h7j)((e) =>
                          (0, i.jsx)(o.ConfirmModal, {
                              header: l ? f.intl.string(f.t['FxT+p6']) : f.intl.string(f.t.TAZ4Fx),
                              confirmText: f.intl.string(f.t.JFfinp),
                              cancelText: f.intl.string(f.t['ETE/oK']),
                              onConfirm: () =>
                                  s(
                                      l
                                          ? S
                                          : {
                                                enabled: !0,
                                                warningSeen: !0
                                            }
                                  ),
                              ...e,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: l ? f.intl.string(f.t.gmixr6) : f.intl.string(f.t.jN3t3N)
                              })
                          })
                      )
                    : s({ enabled: e });
        },
        children: f.intl.string(f.t.vuiXm5)
    });
}
function Z(e) {
    let {
            settings: { enabled: t, confettiEnabled: n, confettiCount: s, confettiSize: l, confettiEnabledLocations: r },
            updateSettings: a
        } = e,
        c = !t || !n;
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: f.intl.string(f.t.mqxwJC),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: n,
                note: f.intl.string(f.t.O1Vflp),
                onChange: (e) => a({ confettiEnabled: e }, 0),
                children: f.intl.string(f.t.s0KCgI)
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: c,
                title: f.intl.string(f.t['vd0D8/']),
                className: T.formItem,
                children: [
                    (0, i.jsx)(P, { children: f.intl.string(f.t.a18Sur) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: c,
                        markers: b,
                        stickToMarkers: !0,
                        minValue: b[0],
                        maxValue: b[b.length - 1],
                        initialValue: s,
                        onValueChange: (e) => a({ confettiCount: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: c,
                title: f.intl.string(f.t.sPO3io),
                className: T.formItem,
                children: [
                    (0, i.jsx)(P, { children: f.intl.string(f.t.xoldVl) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: c,
                        markers: A,
                        stickToMarkers: !0,
                        minValue: A[0],
                        maxValue: A[A.length - 1],
                        initialValue: l,
                        onValueChange: (e) => a({ confettiSize: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsx)(D, {
                disabled: c,
                locations: O(),
                settingsLocations: r,
                onChange: (e) => a({ confettiEnabledLocations: e }, 0)
            })
        ]
    });
}
function L(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: s, combosRequiredCount: l },
            updateSettings: r
        } = e,
        a = !t || !n;
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: f.intl.string(f.t.Xz0olZ),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: n,
                note: f.intl.string(f.t['31Z8ER']),
                onChange: (e) => r({ combosEnabled: e }),
                children: f.intl.string(f.t.o3iV7O)
            }),
            (0, i.jsx)(o.j7V, {
                disabled: !t,
                value: s,
                note: f.intl.string(f.t['9rgQEh']),
                onChange: (e) => r({ comboSoundsEnabled: e }),
                children: f.intl.string(f.t['Ax+Ioa'])
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: a,
                title: f.intl.string(f.t.L0oQur),
                className: T.formItem,
                children: [
                    (0, i.jsx)(P, { children: f.intl.string(f.t['/OOFpK']) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: a,
                        markers: j,
                        stickToMarkers: !0,
                        minValue: j[0],
                        maxValue: j[j.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ combosRequiredCount: e }),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, i.jsx)(o.$i$, { className: T.divider })
        ]
    });
}
function k(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: s, screenshakeEnabledLocations: l },
            updateSettings: a
        } = e,
        c = (0, r.e7)([d.Z], () => d.Z.useReducedMotion),
        u = !t || !n || c,
        h = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > s && (0, g.T)(x.hn.MORE), a(e, t);
        };
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: f.intl.string(f.t.wVS5SU),
        children: [
            (0, i.jsx)(o.j7V, {
                disabled: !t || c,
                tooltipNote: c ? f.intl.string(f.t.GckHGx) : null,
                value: n && !c,
                note: f.intl.string(f.t.Qq5W3t),
                onChange: (e) => a({ screenshakeEnabled: e }, 1),
                children: f.intl.string(f.t.N004zM)
            }),
            (0, i.jsxs)(o.xJW, {
                disabled: u,
                title: f.intl.string(f.t.UxnnCw),
                className: T.formItem,
                children: [
                    (0, i.jsx)(P, { children: f.intl.string(f.t.CEOEOT) }),
                    (0, i.jsx)(o.iRW, {
                        disabled: u,
                        markers: v,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: v[0],
                        maxValue: v[v.length - 1],
                        initialValue: s,
                        onValueChange: (e) => h({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) => (e === v[v.length - 1] ? f.intl.string(f.t['4rbMWV']) : ''.concat(100 * e, '%'))
                    })
                ]
            }),
            (0, i.jsx)(D, {
                disabled: u,
                locations: R(),
                settingsLocations: l,
                onChange: (e) => a({ screenshakeEnabledLocations: e }, 1)
            })
        ]
    });
}
function B(e) {
    let { updateSettings: t } = e;
    return (0, i.jsx)(o.hjN, {
        tag: o.RB0.H1,
        title: f.intl.string(f.t.EuXv2t),
        children: (0, i.jsxs)(o.xJW, {
            className: T.formItem,
            children: [
                (0, i.jsx)(o.R94, {
                    className: T.formItem,
                    children: f.intl.string(f.t['1SLnkp'])
                }),
                (0, i.jsx)(o.zxk, {
                    className: T.hideButton,
                    size: o.zxk.Sizes.SMALL,
                    onClick: () => {
                        t({
                            enabled: !1,
                            settingsVisible: !1
                        }),
                            (0, c.xf)();
                    },
                    children: f.intl.string(f.t.qz65yc)
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
                className: T.achievementContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: T.achievementIconContainer,
                        children: (0, i.jsx)(o.rm8, {
                            size: 'md',
                            color: a.Z.unsafe_rawColors.ORANGE_345.css
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: T.achievementTextContainer,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: f.intl.string(f.t['6jI0hY'])
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: f.intl.string(f.t.GuUItb)
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Fbu, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        className: T.rightCaretIcon
                    })
                ]
            }),
            (0, i.jsx)(o.$i$, { className: T.divider })
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
function w(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        l = (0, r.cj)([p.Z], () => p.Z.getState()),
        [a, c] = s.useState({
            x: 0,
            y: 0
        }),
        d = (0, C.Z)();
    function u(e, t, n, i) {
        return (null != t ? t : e) && (null != i ? i : n);
    }
    let g = (e) => {
            if (e.enabled && !1 === l.enabled) {
                var t;
                n(!0),
                    (0, h.GN)('poggermode_enabled'),
                    m.S.dispatch(I.CkL.SHAKE_APP, {
                        duration: 2000,
                        intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : l.shakeIntensity
                    });
            }
        },
        x = (e, t) => {
            if ((g(e), (0, _.AI)(e), null == t)) return;
            let n = u(l.confettiEnabled, e.confettiEnabled, l.enabled, e.enabled);
            0 === t && n && d.fire(a.x, a.y, { settings: e });
            let i = u(l.screenshakeEnabled, e.screenshakeEnabled, l.enabled, e.enabled);
            if (1 === t && i) {
                var s;
                m.S.dispatch(I.CkL.SHAKE_APP, {
                    duration: 1000,
                    intensity: null !== (s = e.shakeIntensity) && void 0 !== s ? s : l.shakeIntensity
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
                    className: T.title,
                    children: f.intl.string(f.t.AtCukJ)
                }),
                (0, i.jsx)(y, {
                    settings: l,
                    updateSettings: x
                }),
                (0, i.jsx)(M, { onChangePage: t }),
                (0, i.jsx)(L, {
                    settings: l,
                    updateSettings: x
                }),
                (0, i.jsx)(k, {
                    settings: l,
                    updateSettings: x
                }),
                (0, i.jsx)(Z, {
                    settings: l,
                    updateSettings: x
                }),
                (0, i.jsx)(B, { updateSettings: x })
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
                return (0, i.jsx)(w, {
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
        [n, l] = s.useState(G(e)),
        [a, c] = s.useState(!1),
        h = (0, r.e7)([d.Z], () => d.Z.useReducedMotion),
        m = a && !h;
    return (
        s.useEffect(() => {
            let t = setTimeout(() => {
                l(G(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        s.useEffect(() => {
            Math.random() > 0.99 && (0, g.T)(x.hn.VISITOR_100);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    className: T.slideAnimator,
                    step: e,
                    direction: n,
                    children: U(e, t, c)
                }),
                (0, i.jsx)('div', {
                    className: m ? T.enableAnimationOverlayVisible : T.enableAnimationOverlayHidden,
                    children: (0, i.jsx)(o.Fmz, {
                        className: T.enableAnimation,
                        importData: V,
                        shouldAnimate: m,
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
