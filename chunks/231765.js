n.d(t, { Z: () => K }), n(953529), n(388685);
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
    _ = n(88658),
    p = n(57562),
    h = n(955204),
    m = n(64078),
    g = n(351780),
    E = n(954794),
    b = n(112843),
    y = n(524484),
    O = n(388032),
    v = n(749714);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1,
    },
    N = (0, a.range)(0, 11),
    R = (0, a.range)(0, 2.25, 0.25),
    P = (0, a.range)(1, 11),
    w = (0, a.range)(1, 26),
    D = () => [
        {
            location: y.Hn.CHAT_INPUT,
            title: O.intl.string(O.t.elTtyz),
            description: O.intl.string(O.t.HtKfMi),
        },
        {
            location: y.Hn.REACTION,
            title: O.intl.string(O.t.Ik4VIa),
            description: O.intl.string(O.t.y4rqK0),
        },
        {
            location: y.Hn.MEMBER_USER,
            title: O.intl.string(O.t.ZXBlAn),
            description: O.intl.string(O.t["m9RD+c"]),
        },
        {
            location: y.Hn.CALL_TILE,
            title: O.intl.string(O.t.V66giQ),
            description: O.intl.string(O.t.fiHV7u),
        },
    ],
    x = () => [
        {
            location: y.oZ.CHAT_INPUT,
            title: O.intl.string(O.t.vUcvPP),
            description: O.intl.string(O.t.y00OrF),
        },
        {
            location: y.oZ.VOICE_USER,
            title: O.intl.string(O.t.TcRO54),
            description: O.intl.string(O.t.YJCxVY),
        },
        {
            location: y.oZ.MENTION,
            title: O.intl.string(O.t.oW4shO),
            description: O.intl.string(O.t["mqfw/H"]),
        },
    ];
function L(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: a } = e,
        o = n.map((e) =>
            (0, r.jsx)(
                l.rsf,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => a(A(T({}, i), { [e.location]: t })),
                },
                e.location,
            ),
        );
    return (0, r.jsx)(l.C3N, {
        label: O.intl.string(O.t.bWVN1D),
        children: o,
    });
}
function M(e) {
    let { children: t } = e;
    return (0, r.jsx)(l.Text, {
        className: v.sliderDescription,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: t,
    });
}
function j(e) {
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
                              A(
                                  T(
                                      {
                                          header: a ? O.intl.string(O.t["FxT+p0"]) : O.intl.string(O.t.TAZ4F9),
                                          confirmText: O.intl.string(O.t.JFfins),
                                          cancelText: O.intl.string(O.t["ETE/oC"]),
                                          onConfirm: () =>
                                              i(
                                                  a
                                                      ? C
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
                                          children: a ? O.intl.string(O.t.gmixrx) : O.intl.string(O.t.jN3t3K),
                                      }),
                                  },
                              ),
                          ),
                      )
                    : i({ enabled: e });
        };
    return (0, r.jsx)(l.rsf, {
        label: O.intl.string(O.t.vuiXm9),
        description: O.intl.string(O.t.KuYbWN),
        checked: t,
        onChange: s,
    });
}
function k(e) {
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
    return (0, r.jsxs)(l.C3N, {
        label: O.intl.string(O.t.mqxwJO),
        children: [
            (0, r.jsx)(l.rsf, {
                label: O.intl.string(O.t.s0KCgF),
                description: O.intl.string(O.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ confettiEnabled: e }, 0),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: c ? "text-muted" : "header-primary",
                        className: v.sliderLabel,
                        children: O.intl.string(O.t.vd0D81),
                    }),
                    (0, r.jsx)(M, { children: O.intl.string(O.t.a18Sug) }),
                    (0, r.jsx)(l.iRW, {
                        disabled: c,
                        markers: P,
                        stickToMarkers: !0,
                        minValue: P[0],
                        maxValue: P[P.length - 1],
                        initialValue: i,
                        onValueChange: (e) => s({ confettiCount: e }, 0),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: c ? "text-muted" : "header-primary",
                        className: v.sliderLabel,
                        children: O.intl.string(O.t.sPO3ij),
                    }),
                    (0, r.jsx)(M, { children: O.intl.string(O.t.xoldVn) }),
                    (0, r.jsx)(l.iRW, {
                        disabled: c,
                        markers: w,
                        stickToMarkers: !0,
                        minValue: w[0],
                        maxValue: w[w.length - 1],
                        initialValue: a,
                        onValueChange: (e) => s({ confettiSize: e }, 0),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, r.jsx)(L, {
                disabled: c,
                locations: D(),
                settingsLocations: o,
                onChange: (e) => s({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function U(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: a },
            updateSettings: o,
        } = e,
        s = !t || !n;
    return (0, r.jsxs)(l.C3N, {
        label: O.intl.string(O.t.Xz0ole),
        children: [
            (0, r.jsx)(l.rsf, {
                label: O.intl.string(O.t.o3iV7B),
                description: O.intl.string(O.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => o({ combosEnabled: e }),
            }),
            (0, r.jsx)(l.rsf, {
                label: O.intl.string(O.t["Ax+IoW"]),
                description: O.intl.string(O.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => o({ comboSoundsEnabled: e }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: s ? "text-muted" : "header-primary",
                        className: v.sliderLabel,
                        children: O.intl.string(O.t.L0oQuh),
                    }),
                    (0, r.jsx)(M, { children: O.intl.string(O.t["/OOFpL"]) }),
                    (0, r.jsx)(l.iRW, {
                        disabled: s,
                        markers: N,
                        stickToMarkers: !0,
                        minValue: N[0],
                        maxValue: N[N.length - 1],
                        initialValue: a,
                        onValueChange: (e) => o({ combosRequiredCount: e }),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: a },
            updateSettings: s,
        } = e,
        u = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        d = !t || !n || u,
        f = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > i && (0, p.T)(h.hn.MORE), s(e, t);
        };
    return (0, r.jsxs)(l.C3N, {
        label: O.intl.string(O.t.wVS5Sd),
        children: [
            (0, r.jsx)(l.rsf, {
                label: O.intl.string(O.t.N004zO),
                description: O.intl.string(O.t.Qq5W3v),
                helperText: u ? O.intl.string(O.t.GckHGw) : void 0,
                checked: n && !u,
                disabled: !t || u,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: d ? "text-muted" : "header-primary",
                        className: v.sliderLabel,
                        children: O.intl.string(O.t.UxnnC4),
                    }),
                    (0, r.jsx)(M, { children: O.intl.string(O.t.CEOEOb) }),
                    (0, r.jsx)(l.iRW, {
                        disabled: d,
                        markers: R,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: R[0],
                        maxValue: R[R.length - 1],
                        initialValue: i,
                        onValueChange: (e) => f({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) =>
                            e === R[R.length - 1] ? O.intl.string(O.t["4rbMWc"]) : "".concat(100 * e, "%"),
                    }),
                ],
            }),
            (0, r.jsx)(L, {
                disabled: d,
                locations: x(),
                settingsLocations: a,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function B(e) {
    let { updateSettings: t } = e,
        n = () => {
            t({
                enabled: !1,
                settingsVisible: !1,
            }),
                (0, f.default)();
        };
    return (0, r.jsx)(l.C3N, {
        label: O.intl.string(O.t.EuXv2q),
        children: (0, r.jsxs)(l.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)("div", { children: O.intl.string(O.t["1SLnki"]) }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: v.hideButton,
                    children: (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: O.intl.string(O.t.qz65yY),
                        onClick: n,
                    }),
                }),
            ],
        }),
    });
}
function Z(e) {
    let { onChangePage: t } = e,
        n = () => t(1);
    return (0, r.jsxs)(l.P3F, {
        onClick: n,
        className: v.achievementContainer,
        children: [
            (0, r.jsx)("div", {
                className: v.achievementIconContainer,
                children: (0, r.jsx)(l.rm8, {
                    size: "md",
                    color: s.Z.unsafe_rawColors.ORANGE_345.css,
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.achievementTextContainer,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: O.intl.string(O.t["6jI0hd"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: O.intl.string(O.t.GuUItX),
                    }),
                ],
            }),
            (0, r.jsx)(l.Fbu, {
                size: "custom",
                color: "currentColor",
                width: 16,
                className: v.rightCaretIcon,
            }),
        ],
    });
}
let F = () =>
    n
        .e("68170")
        .then(n.t.bind(n, 205663, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function V(e) {
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
                    (0, _.Aj)({
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
                (0, _.Aj)({
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
        (0, r.jsxs)(l.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    children: O.intl.string(O.t.AtCukI),
                }),
                (0, r.jsx)(j, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(Z, { onChangePage: t }),
                (0, r.jsx)(U, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(G, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(k, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(B, { updateSettings: h }),
            ],
        })
    );
}
let H = (e, t, n) => {
        let i = (e) => () => {
            t(e);
        };
        switch (e) {
            case 0:
                return (0, r.jsx)(V, {
                    onChangePage: i(1),
                    setShowEnableAnimation: n,
                });
            case 1:
                return (0, r.jsx)(E.Z, { onBackClick: i(0) });
            default:
                return null;
        }
    },
    Y = 500,
    W = (e) => (0 === e ? u.n.LEFT : u.n.RIGHT);
function K() {
    let [e, t] = i.useState(0),
        [n, a] = i.useState(W(e)),
        [s, d] = i.useState(!1),
        f = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        _ = s && !f;
    return (
        i.useEffect(() => {
            let t = setTimeout(() => {
                a(W(e));
            }, Y);
            return () => clearTimeout(t);
        }, [e]),
        i.useEffect(() => {
            Math.random() > 0.99 && (0, p.T)(h.hn.VISITOR_100);
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Z, {
                    className: v.slideAnimator,
                    step: e,
                    direction: n,
                    children: H(e, t, d),
                }),
                (0, r.jsx)("div", {
                    className: _ ? v.enableAnimationOverlayVisible : v.enableAnimationOverlayHidden,
                    children: (0, r.jsx)(l.Fmz, {
                        className: v.enableAnimation,
                        importData: F,
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
