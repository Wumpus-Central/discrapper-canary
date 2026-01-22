n.d(t, { A: () => q }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(311907),
    o = n(827734),
    l = n(314116),
    c = n(397927),
    u = n(775602),
    d = n(725951),
    f = n(400492),
    p = n(12901),
    _ = n(115063),
    h = n(414736),
    m = n(927018),
    g = n(928830),
    E = n(3137),
    b = n(301656),
    y = n(224964),
    O = n(31408),
    A = n(985018),
    v = n(829054);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
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
    w = (0, a.range)(0, 2.25, 0.25),
    P = (0, a.range)(1, 11),
    D = (0, a.range)(1, 26),
    x = () => [
        {
            location: O.k.CHAT_INPUT,
            title: A.intl.string(A.t.elTtyz),
            description: A.intl.string(A.t.HtKfMi),
        },
        {
            location: O.k.REACTION,
            title: A.intl.string(A.t.Ik4VIa),
            description: A.intl.string(A.t.y4rqK0),
        },
        {
            location: O.k.MEMBER_USER,
            title: A.intl.string(A.t.ZXBlAn),
            description: A.intl.string(A.t["m9RD+c"]),
        },
        {
            location: O.k.CALL_TILE,
            title: A.intl.string(A.t.V66giQ),
            description: A.intl.string(A.t.fiHV7u),
        },
    ],
    L = () => [
        {
            location: O.uD.CHAT_INPUT,
            title: A.intl.string(A.t.vUcvPP),
            description: A.intl.string(A.t.y00OrF),
        },
        {
            location: O.uD.VOICE_USER,
            title: A.intl.string(A.t.TcRO54),
            description: A.intl.string(A.t.YJCxVY),
        },
        {
            location: O.uD.MENTION,
            title: A.intl.string(A.t.oW4shO),
            description: A.intl.string(A.t["mqfw/H"]),
        },
    ];
function j(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: a } = e,
        s = n.map((e) =>
            (0, r.jsx)(
                c.dOG,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => a(C(I({}, i), { [e.location]: t })),
                },
                e.location,
            ),
        );
    return (0, r.jsx)(c.nVY, {
        label: A.intl.string(A.t.bWVN1D),
        children: s,
    });
}
function M(e) {
    let { children: t } = e;
    return (0, r.jsx)(c.Text, {
        className: v.iF,
        variant: "text-sm/normal",
        color: "text-default",
        children: t,
    });
}
function k(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        a = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        o = (e) => {
            e || (0, h._)(m.sn.DISABLE_POGGERMODE),
                e && (!n || a)
                    ? (0, l.A)({
                          title: a ? A.intl.string(A.t["FxT+p0"]) : A.intl.string(A.t.TAZ4F9),
                          subtitle: a ? A.intl.string(A.t.gmixrx) : A.intl.string(A.t.jN3t3K),
                          confirmText: A.intl.string(A.t.JFfins),
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
    return (0, r.jsx)(c.dOG, {
        label: A.intl.string(A.t.vuiXm9),
        description: A.intl.string(A.t.KuYbWN),
        checked: t,
        onChange: o,
    });
}
function U(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: i,
                confettiSize: a,
                confettiEnabledLocations: s,
            },
            updateSettings: o,
        } = e,
        l = !t || !n;
    return (0, r.jsxs)(c.nVY, {
        label: A.intl.string(A.t.mqxwJO),
        children: [
            (0, r.jsx)(c.dOG, {
                label: A.intl.string(A.t.s0KCgF),
                description: A.intl.string(A.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => o({ confettiEnabled: e }, 0),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: l ? "text-muted" : "text-strong",
                        className: v.KF,
                        children: A.intl.string(A.t.vd0D81),
                    }),
                    (0, r.jsx)(M, { children: A.intl.string(A.t.a18Sug) }),
                    (0, r.jsx)(c.Apm, {
                        disabled: l,
                        markers: P,
                        stickToMarkers: !0,
                        minValue: P[0],
                        maxValue: P[P.length - 1],
                        initialValue: i,
                        onValueChange: (e) => o({ confettiCount: e }, 0),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: l ? "text-muted" : "text-strong",
                        className: v.KF,
                        children: A.intl.string(A.t.sPO3ij),
                    }),
                    (0, r.jsx)(M, { children: A.intl.string(A.t.xoldVn) }),
                    (0, r.jsx)(c.Apm, {
                        disabled: l,
                        markers: D,
                        stickToMarkers: !0,
                        minValue: D[0],
                        maxValue: D[D.length - 1],
                        initialValue: a,
                        onValueChange: (e) => o({ confettiSize: e }, 0),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, r.jsx)(j, {
                disabled: l,
                locations: x(),
                settingsLocations: s,
                onChange: (e) => o({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function G(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: a },
            updateSettings: s,
        } = e,
        o = !t || !n;
    return (0, r.jsxs)(c.nVY, {
        label: A.intl.string(A.t.Xz0ole),
        children: [
            (0, r.jsx)(c.dOG, {
                label: A.intl.string(A.t.o3iV7B),
                description: A.intl.string(A.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, r.jsx)(c.dOG, {
                label: A.intl.string(A.t["Ax+IoW"]),
                description: A.intl.string(A.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: v.KF,
                        children: A.intl.string(A.t.L0oQuh),
                    }),
                    (0, r.jsx)(M, { children: A.intl.string(A.t["/OOFpL"]) }),
                    (0, r.jsx)(c.Apm, {
                        disabled: o,
                        markers: R,
                        stickToMarkers: !0,
                        minValue: R[0],
                        maxValue: R[R.length - 1],
                        initialValue: a,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
        ],
    });
}
function V(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: a },
            updateSettings: o,
        } = e,
        l = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        d = !t || !n || l,
        f = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > i && (0, h._)(m.sn.MORE), o(e, t);
        };
    return (0, r.jsxs)(c.nVY, {
        label: A.intl.string(A.t.wVS5Sd),
        children: [
            (0, r.jsx)(c.dOG, {
                label: A.intl.string(A.t.N004zO),
                description: l ? A.intl.string(A.t.GckHGw) : A.intl.string(A.t.Qq5W3v),
                checked: n && !l,
                disabled: !t || l,
                onChange: (e) => o({ screenshakeEnabled: e }, 1),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: d ? "text-muted" : "text-strong",
                        className: v.KF,
                        children: A.intl.string(A.t.UxnnC4),
                    }),
                    (0, r.jsx)(M, { children: A.intl.string(A.t.CEOEOb) }),
                    (0, r.jsx)(c.Apm, {
                        disabled: d,
                        markers: w,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: w[0],
                        maxValue: w[w.length - 1],
                        initialValue: i,
                        onValueChange: (e) => f({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) =>
                            e === w[w.length - 1] ? A.intl.string(A.t["4rbMWc"]) : "".concat(100 * e, "%"),
                    }),
                ],
            }),
            (0, r.jsx)(j, {
                disabled: d,
                locations: L(),
                settingsLocations: a,
                onChange: (e) => o({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function F(e) {
    let { updateSettings: t } = e,
        n = () => {
            t({
                enabled: !1,
                settingsVisible: !1,
            }),
                (0, p.default)();
        };
    return (0, r.jsx)(c.nVY, {
        label: A.intl.string(A.t.EuXv2q),
        children: (0, r.jsxs)(c.BJc, {
            gap: 16,
            children: [
                (0, r.jsx)("div", { children: A.intl.string(A.t["1SLnki"]) }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: v.hw,
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(A.t.qz65yY),
                        onClick: n,
                    }),
                }),
            ],
        }),
    });
}
function B(e) {
    let { onChangePage: t } = e,
        n = () => t(1);
    return (0, r.jsxs)(c.DUT, {
        onClick: n,
        className: v.Tq,
        children: [
            (0, r.jsx)("div", {
                className: v.w1,
                children: (0, r.jsx)(c.OR, {
                    size: "md",
                    color: o.A.unsafe_rawColors.ORANGE_345.css,
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.qL,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: A.intl.string(A.t["6jI0hd"]),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: A.intl.string(A.t.GuUItX),
                    }),
                ],
            }),
            (0, r.jsx)(c._BQ, {
                size: "custom",
                color: "currentColor",
                width: 16,
                className: v.nT,
            }),
        ],
    });
}
let H = () =>
    n
        .e("4660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function Y(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        a = (0, s.cf)([E.A], () => E.A.getState()),
        [o, l] = i.useState({
            x: 0,
            y: 0,
        }),
        u = (0, y.A)();
    function d(e, t, n, r) {
        let i = null != r ? r : n;
        return (null != t ? t : e) && i;
    }
    let p = (e) => {
            if (e.enabled && !1 === a.enabled) {
                var t;
                n(!0),
                    (0, f.Ak)("poggermode_enabled"),
                    (0, _.fO)({
                        duration: 2000,
                        intensity: null != (t = e.shakeIntensity) ? t : a.shakeIntensity,
                    });
            }
        },
        h = (e, t) => {
            if ((p(e), (0, g.O9)(e), null == t)) return;
            let n = 0 === t,
                r = d(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
            n && r && u.fire(o.x, o.y, { settings: e });
            let i = 1 === t,
                s = d(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
            if (i && s) {
                var l;
                (0, _.fO)({
                    duration: 1000,
                    intensity: null != (l = e.shakeIntensity) ? l : a.shakeIntensity,
                });
            }
        },
        m = (e) => {
            l({
                x: e.clientX,
                y: e.clientY,
            });
        };
    return (
        i.useEffect(
            () => (window.addEventListener("mousemove", m), () => window.removeEventListener("mousemove", m)),
            [],
        ),
        (0, r.jsxs)(c.BJc, {
            gap: 24,
            children: [
                (0, r.jsx)(k, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(B, { onChangePage: t }),
                (0, r.jsx)(G, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(V, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(U, {
                    settings: a,
                    updateSettings: h,
                }),
                (0, r.jsx)(F, { updateSettings: h }),
            ],
        })
    );
}
let W = (e, t, n) => {
        let i = (e) => () => {
            t(e);
        };
        switch (e) {
            case 0:
                return (0, r.jsx)(Y, {
                    onChangePage: i(1),
                    setShowEnableAnimation: n,
                });
            case 1:
                return (0, r.jsx)(b.A, { onBackClick: i(0) });
            default:
                return null;
        }
    },
    K = 500,
    z = (e) => (0 === e ? d.f.LEFT : d.f.RIGHT);
function q() {
    let [e, t] = i.useState(0),
        [n, a] = i.useState(z(e)),
        [o, l] = i.useState(!1),
        f = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        p = o && !f;
    return (
        i.useEffect(() => {
            let t = setTimeout(() => {
                a(z(e));
            }, K);
            return () => clearTimeout(t);
        }, [e]),
        i.useEffect(() => {
            Math.random() > 0.99 && (0, h._)(m.sn.VISITOR_100);
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.A, {
                    className: v.l3,
                    step: e,
                    direction: n,
                    children: W(e, t, l),
                }),
                (0, r.jsx)("div", {
                    className: p ? v.Sr : v.IP,
                    children: (0, r.jsx)(c.akl, {
                        className: v.gT,
                        importData: H,
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
