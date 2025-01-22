n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120);
var i,
    r,
    s,
    a,
    l = n(200651),
    o = n(192379),
    c = n(392711),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    g = n(37234),
    h = n(607070),
    p = n(578361),
    x = n(585483),
    f = n(557177),
    _ = n(57562),
    E = n(955204),
    C = n(64078),
    T = n(351780),
    S = n(954794),
    b = n(112843),
    I = n(524484),
    N = n(981631),
    v = n(388032),
    A = n(218768);
let j = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    O = (0, c.range)(0, 11),
    R = (0, c.range)(0, 2.25, 0.25),
    P = (0, c.range)(1, 11),
    D = (0, c.range)(1, 26);
((s = i || (i = {}))[(s.CONFETTI = 0)] = 'CONFETTI'), (s[(s.SHAKE = 1)] = 'SHAKE'), ((a = r || (r = {}))[(a.USER_SETTINGS = 0)] = 'USER_SETTINGS'), (a[(a.ACHIEVEMENT_LIST = 1)] = 'ACHIEVEMENT_LIST');
let y = () => [
        {
            location: I.Hn.CHAT_INPUT,
            title: v.intl.string(v.t.elTty8),
            description: v.intl.string(v.t.HtKfMj)
        },
        {
            location: I.Hn.REACTION,
            title: v.intl.string(v.t.Ik4VIS),
            description: v.intl.string(v.t.y4rqKy)
        },
        {
            location: I.Hn.MEMBER_USER,
            title: v.intl.string(v.t.ZXBlAg),
            description: v.intl.string(v.t['m9RD+f'])
        },
        {
            location: I.Hn.CALL_TILE,
            title: v.intl.string(v.t.V66giY),
            description: v.intl.string(v.t.fiHV7u)
        }
    ],
    B = () => [
        {
            location: I.oZ.CHAT_INPUT,
            title: v.intl.string(v.t.vUcvPD),
            description: v.intl.string(v.t.y00OrK)
        },
        {
            location: I.oZ.VOICE_USER,
            title: v.intl.string(v.t['TcRO5+']),
            description: v.intl.string(v.t.YJCxVV)
        },
        {
            location: I.oZ.MENTION,
            title: v.intl.string(v.t.oW4shI),
            description: v.intl.string(v.t['mqfw/P'])
        }
    ];
function Z(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: r } = e,
        s = n.map((e) =>
            (0, l.jsx)(
                m.FormSwitch,
                {
                    disabled: t,
                    value: i[e.location],
                    note: e.description,
                    onChange: (t) =>
                        r({
                            ...i,
                            [e.location]: t
                        }),
                    children: e.title
                },
                e.location
            )
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(m.FormTitle, { children: v.intl.string(v.t.bWVN1N) }), s]
    });
}
function L(e) {
    let { children: t } = e;
    return (0, l.jsx)(m.Text, {
        className: A.sliderDescription,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: t
    });
}
function M(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i
        } = e,
        r = (0, d.e7)([h.Z], () => h.Z.useReducedMotion);
    return (0, l.jsx)(m.FormSwitch, {
        value: t,
        note: v.intl.string(v.t.KuYbWF),
        onChange: (e) => {
            !e && (0, _.T)(E.hn.DISABLE_POGGERMODE),
                e && (!n || r)
                    ? (0, m.openModal)((e) =>
                          (0, l.jsx)(m.ConfirmModal, {
                              header: r ? v.intl.string(v.t['FxT+p6']) : v.intl.string(v.t.TAZ4Fx),
                              confirmText: v.intl.string(v.t.JFfinp),
                              cancelText: v.intl.string(v.t['ETE/oK']),
                              onConfirm: () =>
                                  i(
                                      r
                                          ? j
                                          : {
                                                enabled: !0,
                                                warningSeen: !0
                                            }
                                  ),
                              ...e,
                              children: (0, l.jsx)(m.Text, {
                                  variant: 'text-md/normal',
                                  children: r ? v.intl.string(v.t.gmixr6) : v.intl.string(v.t.jN3t3N)
                              })
                          })
                      )
                    : i({ enabled: e });
        },
        children: v.intl.string(v.t.vuiXm5)
    });
}
function k(e) {
    let {
            settings: { enabled: t, confettiEnabled: n, confettiCount: i, confettiSize: r, confettiEnabledLocations: s },
            updateSettings: a
        } = e,
        o = !t || !n;
    return (0, l.jsxs)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: v.intl.string(v.t.mqxwJC),
        children: [
            (0, l.jsx)(m.FormSwitch, {
                disabled: !t,
                value: n,
                note: v.intl.string(v.t.O1Vflp),
                onChange: (e) => a({ confettiEnabled: e }, 0),
                children: v.intl.string(v.t.s0KCgI)
            }),
            (0, l.jsxs)(m.FormItem, {
                disabled: o,
                title: v.intl.string(v.t['vd0D8/']),
                className: A.formItem,
                children: [
                    (0, l.jsx)(L, { children: v.intl.string(v.t.a18Sur) }),
                    (0, l.jsx)(m.Slider, {
                        disabled: o,
                        markers: P,
                        stickToMarkers: !0,
                        minValue: P[0],
                        maxValue: P[P.length - 1],
                        initialValue: i,
                        onValueChange: (e) => a({ confettiCount: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, l.jsxs)(m.FormItem, {
                disabled: o,
                title: v.intl.string(v.t.sPO3io),
                className: A.formItem,
                children: [
                    (0, l.jsx)(L, { children: v.intl.string(v.t.xoldVl) }),
                    (0, l.jsx)(m.Slider, {
                        disabled: o,
                        markers: D,
                        stickToMarkers: !0,
                        minValue: D[0],
                        maxValue: D[D.length - 1],
                        initialValue: r,
                        onValueChange: (e) => a({ confettiSize: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, l.jsx)(Z, {
                disabled: o,
                locations: y(),
                settingsLocations: s,
                onChange: (e) => a({ confettiEnabledLocations: e }, 0)
            })
        ]
    });
}
function w(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: r },
            updateSettings: s
        } = e,
        a = !t || !n;
    return (0, l.jsxs)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: v.intl.string(v.t.Xz0olZ),
        children: [
            (0, l.jsx)(m.FormSwitch, {
                disabled: !t,
                value: n,
                note: v.intl.string(v.t['31Z8ER']),
                onChange: (e) => s({ combosEnabled: e }),
                children: v.intl.string(v.t.o3iV7O)
            }),
            (0, l.jsx)(m.FormSwitch, {
                disabled: !t,
                value: i,
                note: v.intl.string(v.t['9rgQEh']),
                onChange: (e) => s({ comboSoundsEnabled: e }),
                children: v.intl.string(v.t['Ax+Ioa'])
            }),
            (0, l.jsxs)(m.FormItem, {
                disabled: a,
                title: v.intl.string(v.t.L0oQur),
                className: A.formItem,
                children: [
                    (0, l.jsx)(L, { children: v.intl.string(v.t['/OOFpK']) }),
                    (0, l.jsx)(m.Slider, {
                        disabled: a,
                        markers: O,
                        stickToMarkers: !0,
                        minValue: O[0],
                        maxValue: O[O.length - 1],
                        initialValue: r,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, l.jsx)(m.FormDivider, { className: A.divider })
        ]
    });
}
function F(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: r },
            updateSettings: s
        } = e,
        a = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        o = !t || !n || a,
        c = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > i && (0, _.T)(E.hn.MORE), s(e, t);
        };
    return (0, l.jsxs)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: v.intl.string(v.t.wVS5SU),
        children: [
            (0, l.jsx)(m.FormSwitch, {
                disabled: !t || a,
                tooltipNote: a ? v.intl.string(v.t.GckHGx) : null,
                value: n && !a,
                note: v.intl.string(v.t.Qq5W3t),
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
                children: v.intl.string(v.t.N004zM)
            }),
            (0, l.jsxs)(m.FormItem, {
                disabled: o,
                title: v.intl.string(v.t.UxnnCw),
                className: A.formItem,
                children: [
                    (0, l.jsx)(L, { children: v.intl.string(v.t.CEOEOT) }),
                    (0, l.jsx)(m.Slider, {
                        disabled: o,
                        markers: R,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: R[0],
                        maxValue: R[R.length - 1],
                        initialValue: i,
                        onValueChange: (e) => c({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) => (e === R[R.length - 1] ? v.intl.string(v.t['4rbMWV']) : ''.concat(100 * e, '%'))
                    })
                ]
            }),
            (0, l.jsx)(Z, {
                disabled: o,
                locations: B(),
                settingsLocations: r,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1)
            })
        ]
    });
}
function U(e) {
    let { updateSettings: t } = e;
    return (0, l.jsx)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: v.intl.string(v.t.EuXv2t),
        children: (0, l.jsxs)(m.FormItem, {
            className: A.formItem,
            children: [
                (0, l.jsx)(m.FormText, {
                    className: A.formItem,
                    children: v.intl.string(v.t['1SLnkp'])
                }),
                (0, l.jsx)(m.Button, {
                    className: A.hideButton,
                    size: m.Button.Sizes.SMALL,
                    onClick: () => {
                        t({
                            enabled: !1,
                            settingsVisible: !1
                        }),
                            (0, g.xf)();
                    },
                    children: v.intl.string(v.t.qz65yc)
                })
            ]
        })
    });
}
function V(e) {
    let { onChangePage: t } = e;
    return (0, l.jsxs)(m.FormSection, {
        children: [
            (0, l.jsxs)(m.Clickable, {
                onClick: () => t(1),
                className: A.achievementContainer,
                children: [
                    (0, l.jsx)('div', {
                        className: A.achievementIconContainer,
                        children: (0, l.jsx)(m.TrophyIcon, {
                            size: 'md',
                            color: u.Z.unsafe_rawColors.ORANGE_345.css
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: A.achievementTextContainer,
                        children: [
                            (0, l.jsx)(m.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: v.intl.string(v.t['6jI0hY'])
                            }),
                            (0, l.jsx)(m.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: v.intl.string(v.t.GuUItb)
                            })
                        ]
                    }),
                    (0, l.jsx)(m.ChevronSmallRightIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        className: A.rightCaretIcon
                    })
                ]
            }),
            (0, l.jsx)(m.FormDivider, { className: A.divider })
        ]
    });
}
let G = () =>
    n
        .e('20467')
        .then(n.t.bind(n, 205663, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function H(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, d.cj)([T.Z], () => T.Z.getState()),
        [r, s] = o.useState({
            x: 0,
            y: 0
        }),
        a = (0, b.Z)();
    function c(e, t, n, i) {
        return (null != t ? t : e) && (null != i ? i : n);
    }
    let u = (e) => {
            if (e.enabled && !1 === i.enabled) {
                var t;
                n(!0),
                    (0, f.GN)('poggermode_enabled'),
                    x.S.dispatch(N.CkL.SHAKE_APP, {
                        duration: 2000,
                        intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : i.shakeIntensity
                    });
            }
        },
        g = (e, t) => {
            if ((u(e), (0, C.AI)(e), null == t)) return;
            let n = c(i.confettiEnabled, e.confettiEnabled, i.enabled, e.enabled);
            0 === t && n && a.fire(r.x, r.y, { settings: e });
            let s = c(i.screenshakeEnabled, e.screenshakeEnabled, i.enabled, e.enabled);
            if (1 === t && s) {
                var l;
                x.S.dispatch(N.CkL.SHAKE_APP, {
                    duration: 1000,
                    intensity: null !== (l = e.shakeIntensity) && void 0 !== l ? l : i.shakeIntensity
                });
            }
        },
        h = (e) => {
            s({
                x: e.clientX,
                y: e.clientY
            });
        };
    return (
        o.useEffect(() => (window.addEventListener('mousemove', h), () => window.removeEventListener('mousemove', h)), []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(m.Heading, {
                    variant: 'heading-lg/semibold',
                    className: A.title,
                    children: v.intl.string(v.t.AtCukJ)
                }),
                (0, l.jsx)(M, {
                    settings: i,
                    updateSettings: g
                }),
                (0, l.jsx)(V, { onChangePage: t }),
                (0, l.jsx)(w, {
                    settings: i,
                    updateSettings: g
                }),
                (0, l.jsx)(F, {
                    settings: i,
                    updateSettings: g
                }),
                (0, l.jsx)(k, {
                    settings: i,
                    updateSettings: g
                }),
                (0, l.jsx)(U, { updateSettings: g })
            ]
        })
    );
}
let Y = (e, t, n) => {
        let i = (e) => () => {
            t(e);
        };
        switch (e) {
            case 0:
                return (0, l.jsx)(H, {
                    onChangePage: i(1),
                    setShowEnableAnimation: n
                });
            case 1:
                return (0, l.jsx)(S.Z, { onBackClick: i(0) });
            default:
                return null;
        }
    },
    W = (e) => (0 === e ? p.n.LEFT : p.n.RIGHT);
function z() {
    let [e, t] = o.useState(0),
        [n, i] = o.useState(W(e)),
        [r, s] = o.useState(!1),
        a = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        c = r && !a;
    return (
        o.useEffect(() => {
            let t = setTimeout(() => {
                i(W(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        o.useEffect(() => {
            Math.random() > 0.99 && (0, _.T)(E.hn.VISITOR_100);
        }, []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(p.Z, {
                    className: A.slideAnimator,
                    step: e,
                    direction: n,
                    children: Y(e, t, s)
                }),
                (0, l.jsx)('div', {
                    className: c ? A.enableAnimationOverlayVisible : A.enableAnimationOverlayHidden,
                    children: (0, l.jsx)(m.LottieAnimation, {
                        className: A.enableAnimation,
                        importData: G,
                        shouldAnimate: c,
                        autoplay: !1,
                        resetOnPlay: !0,
                        loop: !1,
                        onComplete: () => s(!1)
                    })
                })
            ]
        })
    );
}
