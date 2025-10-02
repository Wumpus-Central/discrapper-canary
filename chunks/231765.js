n.d(t, { Z: () => z }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n(442837),
    s = n(692547),
    l = n(481060),
    c = n(607070),
    u = n(578361),
    d = n(460181),
    f = n(342386),
    _ = n(585483),
    p = n(57562),
    h = n(955204),
    m = n(64078),
    g = n(351780),
    E = n(954794),
    b = n(112843),
    y = n(524484),
    O = n(981631),
    v = n(388032),
    I = n(892879);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1,
    },
    R = (0, a.range)(0, 11),
    P = (0, a.range)(0, 2.25, 0.25),
    w = (0, a.range)(1, 11),
    D = (0, a.range)(1, 26),
    L = () => [
        {
            location: y.Hn.CHAT_INPUT,
            title: v.intl.string(v.t.elTty8),
            description: v.intl.string(v.t.HtKfMj),
        },
        {
            location: y.Hn.REACTION,
            title: v.intl.string(v.t.Ik4VIS),
            description: v.intl.string(v.t.y4rqKy),
        },
        {
            location: y.Hn.MEMBER_USER,
            title: v.intl.string(v.t.ZXBlAg),
            description: v.intl.string(v.t["m9RD+f"]),
        },
        {
            location: y.Hn.CALL_TILE,
            title: v.intl.string(v.t.V66giY),
            description: v.intl.string(v.t.fiHV7u),
        },
    ],
    x = () => [
        {
            location: y.oZ.CHAT_INPUT,
            title: v.intl.string(v.t.vUcvPD),
            description: v.intl.string(v.t.y00OrK),
        },
        {
            location: y.oZ.VOICE_USER,
            title: v.intl.string(v.t["TcRO5+"]),
            description: v.intl.string(v.t.YJCxVV),
        },
        {
            location: y.oZ.MENTION,
            title: v.intl.string(v.t.oW4shI),
            description: v.intl.string(v.t["mqfw/P"]),
        },
    ];
function j(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: a } = e,
        o = n.map((e) =>
            (0, r.jsx)(
                l.rsf,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => a(C(S({}, i), { [e.location]: t })),
                },
                e.location,
            ),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.vwX, { children: v.intl.string(v.t.bWVN1N) }), o],
    });
}
function M(e) {
    let { children: t } = e;
    return (0, r.jsx)(l.Text, {
        className: I.sliderDescription,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: t,
    });
}
function k(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        a = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        s = (e) => {
            e || (0, p.T)(h.hn.DISABLE_POGGERMODE),
                e && (!n || a)
                    ? (0, l.h7j)((e) =>
                          (0, r.jsx)(
                              l.ConfirmModal,
                              C(
                                  S(
                                      {
                                          header: a ? v.intl.string(v.t["FxT+p6"]) : v.intl.string(v.t.TAZ4Fx),
                                          confirmText: v.intl.string(v.t.JFfinp),
                                          cancelText: v.intl.string(v.t["ETE/oK"]),
                                          onConfirm: () =>
                                              i(
                                                  a
                                                      ? N
                                                      : {
                                                            enabled: !0,
                                                            warningSeen: !0,
                                                        },
                                              ),
                                      },
                                      e,
                                  ),
                                  {
                                      children: (0, r.jsx)(l.Text, {
                                          variant: "text-md/normal",
                                          children: a ? v.intl.string(v.t.gmixr6) : v.intl.string(v.t.jN3t3N),
                                      }),
                                  },
                              ),
                          ),
                      )
                    : i({ enabled: e });
        };
    return (0, r.jsx)(l.rsf, {
        label: v.intl.string(v.t.vuiXm5),
        description: v.intl.string(v.t.KuYbWF),
        checked: t,
        onChange: s,
    });
}
function U(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: i,
                confettiSize: a,
                confettiEnabledLocations: o,
            },
            updateSettings: s,
        } = e,
        c = !t || !n;
    return (0, r.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: v.intl.string(v.t.mqxwJC),
        children: [
            (0, r.jsx)(l.rsf, {
                label: v.intl.string(v.t.s0KCgI),
                description: v.intl.string(v.t.O1Vflp),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ confettiEnabled: e }, 0),
            }),
            (0, r.jsxs)(l.xJW, {
                disabled: c,
                title: v.intl.string(v.t["vd0D8/"]),
                className: I.formItem,
                children: [
                    (0, r.jsx)(M, { children: v.intl.string(v.t.a18Sur) }),
                    (0, r.jsx)(l.iRW, {
                        disabled: c,
                        markers: w,
                        stickToMarkers: !0,
                        minValue: w[0],
                        maxValue: w[w.length - 1],
                        initialValue: i,
                        onValueChange: (e) => s({ confettiCount: e }, 0),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, r.jsxs)(l.xJW, {
                disabled: c,
                title: v.intl.string(v.t.sPO3io),
                className: I.formItem,
                children: [
                    (0, r.jsx)(M, { children: v.intl.string(v.t.xoldVl) }),
                    (0, r.jsx)(l.iRW, {
                        disabled: c,
                        markers: D,
                        stickToMarkers: !0,
                        minValue: D[0],
                        maxValue: D[D.length - 1],
                        initialValue: a,
                        onValueChange: (e) => s({ confettiSize: e }, 0),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, r.jsx)(j, {
                disabled: c,
                locations: L(),
                settingsLocations: o,
                onChange: (e) => s({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function G(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: a },
            updateSettings: o,
        } = e,
        s = !t || !n;
    return (0, r.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: v.intl.string(v.t.Xz0olZ),
        children: [
            (0, r.jsx)(l.rsf, {
                label: v.intl.string(v.t.o3iV7O),
                description: v.intl.string(v.t["31Z8ER"]),
                checked: n,
                disabled: !t,
                onChange: (e) => o({ combosEnabled: e }),
            }),
            (0, r.jsx)(l.rsf, {
                label: v.intl.string(v.t["Ax+Ioa"]),
                description: v.intl.string(v.t["9rgQEh"]),
                checked: i,
                disabled: !t,
                onChange: (e) => o({ comboSoundsEnabled: e }),
            }),
            (0, r.jsxs)(l.xJW, {
                disabled: s,
                title: v.intl.string(v.t.L0oQur),
                className: I.formItem,
                children: [
                    (0, r.jsx)(M, { children: v.intl.string(v.t["/OOFpK"]) }),
                    (0, r.jsx)(l.iRW, {
                        disabled: s,
                        markers: R,
                        stickToMarkers: !0,
                        minValue: R[0],
                        maxValue: R[R.length - 1],
                        initialValue: a,
                        onValueChange: (e) => o({ combosRequiredCount: e }),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, r.jsx)(l.izJ, { className: I.divider }),
        ],
    });
}
function B(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: a },
            updateSettings: s,
        } = e,
        u = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        d = !t || !n || u,
        f = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > i && (0, p.T)(h.hn.MORE), s(e, t);
        };
    return (0, r.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: v.intl.string(v.t.wVS5SU),
        children: [
            (0, r.jsx)(l.rsf, {
                label: v.intl.string(v.t.N004zM),
                description: v.intl.string(v.t.Qq5W3t),
                helperText: u ? v.intl.string(v.t.GckHGx) : void 0,
                checked: n && !u,
                disabled: !t || u,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, r.jsxs)(l.xJW, {
                disabled: d,
                title: v.intl.string(v.t.UxnnCw),
                className: I.formItem,
                children: [
                    (0, r.jsx)(M, { children: v.intl.string(v.t.CEOEOT) }),
                    (0, r.jsx)(l.iRW, {
                        disabled: d,
                        markers: P,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: P[0],
                        maxValue: P[P.length - 1],
                        initialValue: i,
                        onValueChange: (e) => f({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) =>
                            e === P[P.length - 1] ? v.intl.string(v.t["4rbMWV"]) : "".concat(100 * e, "%"),
                    }),
                ],
            }),
            (0, r.jsx)(j, {
                disabled: d,
                locations: x(),
                settingsLocations: a,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function Z(e) {
    let { updateSettings: t } = e,
        n = () => {
            t({
                enabled: !1,
                settingsVisible: !1,
            }),
                (0, f.default)();
        };
    return (0, r.jsx)(l.hjN, {
        tag: l.RB0.H1,
        title: v.intl.string(v.t.EuXv2t),
        children: (0, r.jsxs)("div", {
            className: I.formItem,
            children: [
                (0, r.jsx)(l.R94, {
                    className: I.formItem,
                    children: v.intl.string(v.t["1SLnkp"]),
                }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: I.hideButton,
                    children: (0, r.jsx)(l.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: v.intl.string(v.t.qz65yc),
                        onClick: n,
                    }),
                }),
            ],
        }),
    });
}
function F(e) {
    let { onChangePage: t } = e,
        n = () => t(1);
    return (0, r.jsxs)(l.hjN, {
        children: [
            (0, r.jsxs)(l.P3F, {
                onClick: n,
                className: I.achievementContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: I.achievementIconContainer,
                        children: (0, r.jsx)(l.rm8, {
                            size: "md",
                            color: s.Z.unsafe_rawColors.ORANGE_345.css,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: I.achievementTextContainer,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: v.intl.string(v.t["6jI0hY"]),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: v.intl.string(v.t.GuUItb),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.Fbu, {
                        size: "custom",
                        color: "currentColor",
                        width: 16,
                        className: I.rightCaretIcon,
                    }),
                ],
            }),
            (0, r.jsx)(l.izJ, { className: I.divider }),
        ],
    });
}
let V = () =>
    n
        .e("68170")
        .then(n.t.bind(n, 205663, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function H(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        a = (0, o.cj)([g.Z], () => g.Z.getState()),
        [s, c] = i.useState({
            x: 0,
            y: 0,
        }),
        u = (0, b.Z)();
    function f(e, t, n, r) {
        let i = null != r ? r : n;
        return (null != t ? t : e) && i;
    }
    let p = (e) => {
            if (e.enabled && !1 === a.enabled) {
                var t;
                n(!0),
                    (0, d.GN)("poggermode_enabled"),
                    _.S.dispatch(O.CkL.SHAKE_APP, {
                        duration: 2000,
                        intensity: null != (t = e.shakeIntensity) ? t : a.shakeIntensity,
                    });
            }
        },
        h = (e, t) => {
            if ((p(e), (0, m.AI)(e), null == t)) return;
            let n = 0 === t,
                r = f(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
            n && r && u.fire(s.x, s.y, { settings: e });
            let i = 1 === t,
                o = f(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
            if (i && o) {
                var l;
                _.S.dispatch(O.CkL.SHAKE_APP, {
                    duration: 1000,
                    intensity: null != (l = e.shakeIntensity) ? l : a.shakeIntensity,
                });
            }
        },
        E = (e) => {
            c({
                x: e.clientX,
                y: e.clientY,
            });
        };
    return (
        i.useEffect(
            () => (window.addEventListener("mousemove", E), () => window.removeEventListener("mousemove", E)),
            [],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.X6q, {
                    variant: "heading-lg/semibold",
                    className: I.title,
                    children: v.intl.string(v.t.AtCukJ),
                }),
                (0, r.jsx)(k, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(F, { onChangePage: t }),
                (0, r.jsx)(G, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(B, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(U, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(Z, { updateSettings: h }),
            ],
        })
    );
}
let Y = (e, t, n) => {
        let i = (e) => () => {
            t(e);
        };
        switch (e) {
            case 0:
                return (0, r.jsx)(H, {
                    onChangePage: i(1),
                    setShowEnableAnimation: n,
                });
            case 1:
                return (0, r.jsx)(E.Z, { onBackClick: i(0) });
            default:
                return null;
        }
    },
    W = 500,
    K = (e) => (0 === e ? u.n.LEFT : u.n.RIGHT);
function z() {
    let [e, t] = i.useState(0),
        [n, a] = i.useState(K(e)),
        [s, d] = i.useState(!1),
        f = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        _ = s && !f;
    return (
        i.useEffect(() => {
            let t = setTimeout(() => {
                a(K(e));
            }, W);
            return () => clearTimeout(t);
        }, [e]),
        i.useEffect(() => {
            Math.random() > 0.99 && (0, p.T)(h.hn.VISITOR_100);
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Z, {
                    className: I.slideAnimator,
                    step: e,
                    direction: n,
                    children: Y(e, t, d),
                }),
                (0, r.jsx)("div", {
                    className: _ ? I.enableAnimationOverlayVisible : I.enableAnimationOverlayHidden,
                    children: (0, r.jsx)(l.Fmz, {
                        className: I.enableAnimation,
                        importData: V,
                        shouldAnimate: _,
                        autoplay: !1,
                        resetOnPlay: !0,
                        loop: !1,
                        onComplete: () => d(!1),
                    }),
                }),
            ],
        })
    );
}
