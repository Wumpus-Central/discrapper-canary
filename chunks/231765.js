n.d(t, { Z: () => z }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(442837),
    s = n(692547),
    l = n(248514),
    c = n(481060),
    u = n(607070),
    d = n(578361),
    f = n(460181),
    p = n(342386),
    _ = n(88658),
    m = n(57562),
    h = n(955204),
    g = n(64078),
    E = n(351780),
    b = n(954794),
    y = n(112843),
    O = n(524484),
    v = n(388032),
    S = n(749714);
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
    P = (0, a.range)(0, 11),
    R = (0, a.range)(0, 2.25, 0.25),
    w = (0, a.range)(1, 11),
    D = (0, a.range)(1, 26),
    x = () => [
        {
            location: O.Hn.CHAT_INPUT,
            title: v.intl.string(v.t.elTtyz),
            description: v.intl.string(v.t.HtKfMi),
        },
        {
            location: O.Hn.REACTION,
            title: v.intl.string(v.t.Ik4VIa),
            description: v.intl.string(v.t.y4rqK0),
        },
        {
            location: O.Hn.MEMBER_USER,
            title: v.intl.string(v.t.ZXBlAn),
            description: v.intl.string(v.t["m9RD+c"]),
        },
        {
            location: O.Hn.CALL_TILE,
            title: v.intl.string(v.t.V66giQ),
            description: v.intl.string(v.t.fiHV7u),
        },
    ],
    L = () => [
        {
            location: O.oZ.CHAT_INPUT,
            title: v.intl.string(v.t.vUcvPP),
            description: v.intl.string(v.t.y00OrF),
        },
        {
            location: O.oZ.VOICE_USER,
            title: v.intl.string(v.t.TcRO54),
            description: v.intl.string(v.t.YJCxVY),
        },
        {
            location: O.oZ.MENTION,
            title: v.intl.string(v.t.oW4shO),
            description: v.intl.string(v.t["mqfw/H"]),
        },
    ];
function j(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: a } = e,
        o = n.map((e) =>
            (0, r.jsx)(
                c.rsf,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => a(C(T({}, i), { [e.location]: t })),
                },
                e.location,
            ),
        );
    return (0, r.jsx)(c.C3N, {
        label: v.intl.string(v.t.bWVN1D),
        children: o,
    });
}
function M(e) {
    let { children: t } = e;
    return (0, r.jsx)(c.Text, {
        className: S.sliderDescription,
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
        a = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        s = (e) => {
            e || (0, m.T)(h.hn.DISABLE_POGGERMODE),
                e && (!n || a)
                    ? (0, l.Z)({
                          title: a ? v.intl.string(v.t["FxT+p0"]) : v.intl.string(v.t.TAZ4F9),
                          subtitle: a ? v.intl.string(v.t.gmixrx) : v.intl.string(v.t.jN3t3K),
                          confirmText: v.intl.string(v.t.JFfins),
                          onConfirm: () =>
                              i(
                                  a
                                      ? N
                                      : {
                                            enabled: !0,
                                            warningSeen: !0,
                                        },
                              ),
                      })
                    : i({ enabled: e });
        };
    return (0, r.jsx)(c.rsf, {
        label: v.intl.string(v.t.vuiXm9),
        description: v.intl.string(v.t.KuYbWN),
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
        l = !t || !n;
    return (0, r.jsxs)(c.C3N, {
        label: v.intl.string(v.t.mqxwJO),
        children: [
            (0, r.jsx)(c.rsf, {
                label: v.intl.string(v.t.s0KCgF),
                description: v.intl.string(v.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ confettiEnabled: e }, 0),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: l ? "text-muted" : "header-primary",
                        className: S.sliderLabel,
                        children: v.intl.string(v.t.vd0D81),
                    }),
                    (0, r.jsx)(M, { children: v.intl.string(v.t.a18Sug) }),
                    (0, r.jsx)(c.iRW, {
                        disabled: l,
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
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: l ? "text-muted" : "header-primary",
                        className: S.sliderLabel,
                        children: v.intl.string(v.t.sPO3ij),
                    }),
                    (0, r.jsx)(M, { children: v.intl.string(v.t.xoldVn) }),
                    (0, r.jsx)(c.iRW, {
                        disabled: l,
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
                disabled: l,
                locations: x(),
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
    return (0, r.jsxs)(c.C3N, {
        label: v.intl.string(v.t.Xz0ole),
        children: [
            (0, r.jsx)(c.rsf, {
                label: v.intl.string(v.t.o3iV7B),
                description: v.intl.string(v.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => o({ combosEnabled: e }),
            }),
            (0, r.jsx)(c.rsf, {
                label: v.intl.string(v.t["Ax+IoW"]),
                description: v.intl.string(v.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => o({ comboSoundsEnabled: e }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: s ? "text-muted" : "header-primary",
                        className: S.sliderLabel,
                        children: v.intl.string(v.t.L0oQuh),
                    }),
                    (0, r.jsx)(M, { children: v.intl.string(v.t["/OOFpL"]) }),
                    (0, r.jsx)(c.iRW, {
                        disabled: s,
                        markers: P,
                        stickToMarkers: !0,
                        minValue: P[0],
                        maxValue: P[P.length - 1],
                        initialValue: a,
                        onValueChange: (e) => o({ combosRequiredCount: e }),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: a },
            updateSettings: s,
        } = e,
        l = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        d = !t || !n || l,
        f = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > i && (0, m.T)(h.hn.MORE), s(e, t);
        };
    return (0, r.jsxs)(c.C3N, {
        label: v.intl.string(v.t.wVS5Sd),
        children: [
            (0, r.jsx)(c.rsf, {
                label: v.intl.string(v.t.N004zO),
                description: l ? v.intl.string(v.t.GckHGw) : v.intl.string(v.t.Qq5W3v),
                checked: n && !l,
                disabled: !t || l,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: d ? "text-muted" : "header-primary",
                        className: S.sliderLabel,
                        children: v.intl.string(v.t.UxnnC4),
                    }),
                    (0, r.jsx)(M, { children: v.intl.string(v.t.CEOEOb) }),
                    (0, r.jsx)(c.iRW, {
                        disabled: d,
                        markers: R,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: R[0],
                        maxValue: R[R.length - 1],
                        initialValue: i,
                        onValueChange: (e) => f({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) =>
                            e === R[R.length - 1] ? v.intl.string(v.t["4rbMWc"]) : "".concat(100 * e, "%"),
                    }),
                ],
            }),
            (0, r.jsx)(j, {
                disabled: d,
                locations: L(),
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
                (0, p.default)();
        };
    return (0, r.jsx)(c.C3N, {
        label: v.intl.string(v.t.EuXv2q),
        children: (0, r.jsxs)(c.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)("div", { children: v.intl.string(v.t["1SLnki"]) }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: S.hideButton,
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: v.intl.string(v.t.qz65yY),
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
    return (0, r.jsxs)(c.P3F, {
        onClick: n,
        className: S.achievementContainer,
        children: [
            (0, r.jsx)("div", {
                className: S.achievementIconContainer,
                children: (0, r.jsx)(c.rm8, {
                    size: "md",
                    color: s.Z.unsafe_rawColors.ORANGE_345.css,
                }),
            }),
            (0, r.jsxs)("div", {
                className: S.achievementTextContainer,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: v.intl.string(v.t["6jI0hd"]),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: v.intl.string(v.t.GuUItX),
                    }),
                ],
            }),
            (0, r.jsx)(c.Fbu, {
                size: "custom",
                color: "currentColor",
                width: 16,
                className: S.rightCaretIcon,
            }),
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
        a = (0, o.cj)([E.Z], () => E.Z.getState()),
        [s, l] = i.useState({
            x: 0,
            y: 0,
        }),
        u = (0, y.Z)();
    function d(e, t, n, r) {
        let i = null != r ? r : n;
        return (null != t ? t : e) && i;
    }
    let p = (e) => {
            if (e.enabled && !1 === a.enabled) {
                var t;
                n(!0),
                    (0, f.GN)("poggermode_enabled"),
                    (0, _.Aj)({
                        duration: 2000,
                        intensity: null != (t = e.shakeIntensity) ? t : a.shakeIntensity,
                    });
            }
        },
        m = (e, t) => {
            if ((p(e), (0, g.AI)(e), null == t)) return;
            let n = 0 === t,
                r = d(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
            n && r && u.fire(s.x, s.y, { settings: e });
            let i = 1 === t,
                o = d(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
            if (i && o) {
                var l;
                (0, _.Aj)({
                    duration: 1000,
                    intensity: null != (l = e.shakeIntensity) ? l : a.shakeIntensity,
                });
            }
        },
        h = (e) => {
            l({
                x: e.clientX,
                y: e.clientY,
            });
        };
    return (
        i.useEffect(
            () => (window.addEventListener("mousemove", h), () => window.removeEventListener("mousemove", h)),
            [],
        ),
        (0, r.jsxs)(c.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: v.intl.string(v.t.AtCukI),
                }),
                (0, r.jsx)(k, {
                    settings: a,
                    updateSettings: m,
                }),
                (0, r.jsx)(F, { onChangePage: t }),
                (0, r.jsx)(G, {
                    settings: a,
                    updateSettings: m,
                }),
                (0, r.jsx)(Z, {
                    settings: a,
                    updateSettings: m,
                }),
                (0, r.jsx)(U, {
                    settings: a,
                    updateSettings: m,
                }),
                (0, r.jsx)(B, { updateSettings: m }),
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
                return (0, r.jsx)(b.Z, { onBackClick: i(0) });
            default:
                return null;
        }
    },
    W = 500,
    K = (e) => (0 === e ? d.n.LEFT : d.n.RIGHT);
function z() {
    let [e, t] = i.useState(0),
        [n, a] = i.useState(K(e)),
        [s, l] = i.useState(!1),
        f = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        p = s && !f;
    return (
        i.useEffect(() => {
            let t = setTimeout(() => {
                a(K(e));
            }, W);
            return () => clearTimeout(t);
        }, [e]),
        i.useEffect(() => {
            Math.random() > 0.99 && (0, m.T)(h.hn.VISITOR_100);
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.Z, {
                    className: S.slideAnimator,
                    step: e,
                    direction: n,
                    children: Y(e, t, l),
                }),
                (0, r.jsx)("div", {
                    className: p ? S.enableAnimationOverlayVisible : S.enableAnimationOverlayHidden,
                    children: (0, r.jsx)(c.Fmz, {
                        className: S.enableAnimation,
                        importData: V,
                        shouldAnimate: p,
                        autoplay: !1,
                        resetOnPlay: !0,
                        loop: !1,
                        onComplete: () => l(!1),
                    }),
                }),
            ],
        })
    );
}
