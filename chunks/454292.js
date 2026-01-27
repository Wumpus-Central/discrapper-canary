n.d(t, {
    A: () => U,
}),
    n(228524),
    n(896048);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(311907),
    a = n(827734),
    o = n(314116),
    c = n(397927),
    d = n(775602),
    u = n(725951),
    g = n(400492),
    h = n(12901),
    x = n(115063),
    A = n(414736),
    p = n(927018),
    m = n(928830),
    j = n(3137),
    b = n(301656),
    O = n(224964),
    S = n(31408),
    E = n(985018),
    f = n(829054);
let v = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1,
    },
    T = (0, l.range)(0, 11),
    C = (0, l.range)(0, 2.25, 0.25),
    y = (0, l.range)(1, 11),
    N = (0, l.range)(1, 26);

function I(e) {
    let { disabled: t, locations: n, settingsLocations: s, onChange: l } = e,
        r = n.map((e) =>
            (0, i.jsx)(
                c.dOG,
                {
                    label: e.title,
                    description: e.description,
                    checked: s[e.location],
                    disabled: t,
                    onChange: (t) => {
                        var n, i;
                        return l(
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, s)),
                            (i = i =
                                {
                                    [e.location]: t,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                        );
                    },
                },
                e.location,
            ),
        );
    return (0, i.jsx)(c.nVY, {
        label: E.intl.string(E.t.bWVN1D),
        children: r,
    });
}

function _(e) {
    let { children: t } = e;
    return (0, i.jsx)(c.Text, {
        className: f.iF,
        variant: "text-sm/normal",
        color: "text-default",
        children: t,
    });
}

function P(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: s,
        } = e,
        l = (0, r.bG)([d.A], () => d.A.useReducedMotion);
    return (0, i.jsx)(c.dOG, {
        label: E.intl.string(E.t.vuiXm9),
        description: E.intl.string(E.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, A._)(p.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, o.A)({
                          title: l ? E.intl.string(E.t["FxT+p0"]) : E.intl.string(E.t.TAZ4F9),
                          subtitle: l ? E.intl.string(E.t.gmixrx) : E.intl.string(E.t.jN3t3K),
                          confirmText: E.intl.string(E.t.JFfins),
                          onConfirm: () =>
                              s(
                                  l
                                      ? v
                                      : {
                                            enabled: !0,
                                            warningSeen: !0,
                                        },
                              ),
                      })
                    : s({
                          enabled: e,
                      });
        },
    });
}

function G(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: s,
                confettiSize: l,
                confettiEnabledLocations: r,
            },
            updateSettings: a,
        } = e,
        o = !t || !n;
    return (0, i.jsxs)(c.nVY, {
        label: E.intl.string(E.t.mqxwJO),
        children: [
            (0, i.jsx)(c.dOG, {
                label: E.intl.string(E.t.s0KCgF),
                description: E.intl.string(E.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) =>
                    a(
                        {
                            confettiEnabled: e,
                        },
                        0,
                    ),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: f.KF,
                        children: E.intl.string(E.t.vd0D81),
                    }),
                    (0, i.jsx)(_, {
                        children: E.intl.string(E.t.a18Sug),
                    }),
                    (0, i.jsx)(c.Apm, {
                        disabled: o,
                        markers: y,
                        stickToMarkers: !0,
                        minValue: y[0],
                        maxValue: y[y.length - 1],
                        initialValue: s,
                        onValueChange: (e) =>
                            a(
                                {
                                    confettiCount: e,
                                },
                                0,
                            ),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: f.KF,
                        children: E.intl.string(E.t.sPO3ij),
                    }),
                    (0, i.jsx)(_, {
                        children: E.intl.string(E.t.xoldVn),
                    }),
                    (0, i.jsx)(c.Apm, {
                        disabled: o,
                        markers: N,
                        stickToMarkers: !0,
                        minValue: N[0],
                        maxValue: N[N.length - 1],
                        initialValue: l,
                        onValueChange: (e) =>
                            a(
                                {
                                    confettiSize: e,
                                },
                                0,
                            ),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
            (0, i.jsx)(I, {
                disabled: o,
                locations: [
                    {
                        location: S.k.CHAT_INPUT,
                        title: E.intl.string(E.t.elTtyz),
                        description: E.intl.string(E.t.HtKfMi),
                    },
                    {
                        location: S.k.REACTION,
                        title: E.intl.string(E.t.Ik4VIa),
                        description: E.intl.string(E.t.y4rqK0),
                    },
                    {
                        location: S.k.MEMBER_USER,
                        title: E.intl.string(E.t.ZXBlAn),
                        description: E.intl.string(E.t["m9RD+c"]),
                    },
                    {
                        location: S.k.CALL_TILE,
                        title: E.intl.string(E.t.V66giQ),
                        description: E.intl.string(E.t.fiHV7u),
                    },
                ],
                settingsLocations: r,
                onChange: (e) =>
                    a(
                        {
                            confettiEnabledLocations: e,
                        },
                        0,
                    ),
            }),
        ],
    });
}

function R(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: s, combosRequiredCount: l },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, i.jsxs)(c.nVY, {
        label: E.intl.string(E.t.Xz0ole),
        children: [
            (0, i.jsx)(c.dOG, {
                label: E.intl.string(E.t.o3iV7B),
                description: E.intl.string(E.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) =>
                    r({
                        combosEnabled: e,
                    }),
            }),
            (0, i.jsx)(c.dOG, {
                label: E.intl.string(E.t["Ax+IoW"]),
                description: E.intl.string(E.t["9rgQEr"]),
                checked: s,
                disabled: !t,
                onChange: (e) =>
                    r({
                        comboSoundsEnabled: e,
                    }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: f.KF,
                        children: E.intl.string(E.t.L0oQuh),
                    }),
                    (0, i.jsx)(_, {
                        children: E.intl.string(E.t["/OOFpL"]),
                    }),
                    (0, i.jsx)(c.Apm, {
                        disabled: a,
                        markers: T,
                        stickToMarkers: !0,
                        minValue: T[0],
                        maxValue: T[T.length - 1],
                        initialValue: l,
                        onValueChange: (e) =>
                            r({
                                combosRequiredCount: e,
                            }),
                        onValueRender: (e) => "".concat(e),
                    }),
                ],
            }),
        ],
    });
}

function D(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: s, screenshakeEnabledLocations: l },
            updateSettings: a,
        } = e,
        o = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        u = !t || !n || o;
    return (0, i.jsxs)(c.nVY, {
        label: E.intl.string(E.t.wVS5Sd),
        children: [
            (0, i.jsx)(c.dOG, {
                label: E.intl.string(E.t.N004zO),
                description: o ? E.intl.string(E.t.GckHGw) : E.intl.string(E.t.Qq5W3v),
                checked: n && !o,
                disabled: !t || o,
                onChange: (e) =>
                    a(
                        {
                            screenshakeEnabled: e,
                        },
                        1,
                    ),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: u ? "text-muted" : "text-strong",
                        className: f.KF,
                        children: E.intl.string(E.t.UxnnC4),
                    }),
                    (0, i.jsx)(_, {
                        children: E.intl.string(E.t.CEOEOb),
                    }),
                    (0, i.jsx)(c.Apm, {
                        disabled: u,
                        markers: C,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: C[0],
                        maxValue: C[C.length - 1],
                        initialValue: s,
                        onValueChange: (e) => {
                            var t;
                            null !=
                                (t = {
                                    shakeIntensity: e,
                                }).shakeIntensity &&
                                t.shakeIntensity > s &&
                                (0, A._)(p.sn.MORE),
                                a(t, 1);
                        },
                        onMarkerRender: (e) =>
                            e === C[C.length - 1] ? E.intl.string(E.t["4rbMWc"]) : "".concat(100 * e, "%"),
                    }),
                ],
            }),
            (0, i.jsx)(I, {
                disabled: u,
                locations: [
                    {
                        location: S.uD.CHAT_INPUT,
                        title: E.intl.string(E.t.vUcvPP),
                        description: E.intl.string(E.t.y00OrF),
                    },
                    {
                        location: S.uD.VOICE_USER,
                        title: E.intl.string(E.t.TcRO54),
                        description: E.intl.string(E.t.YJCxVY),
                    },
                    {
                        location: S.uD.MENTION,
                        title: E.intl.string(E.t.oW4shO),
                        description: E.intl.string(E.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) =>
                    a(
                        {
                            screenshakeEnabledLocations: e,
                        },
                        1,
                    ),
            }),
        ],
    });
}

function L(e) {
    let { updateSettings: t } = e;
    return (0, i.jsx)(c.nVY, {
        label: E.intl.string(E.t.EuXv2q),
        children: (0, i.jsxs)(c.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)("div", {
                    children: E.intl.string(E.t["1SLnki"]),
                }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: f.hw,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(E.t.qz65yY),
                        onClick: () => {
                            t({
                                enabled: !1,
                                settingsVisible: !1,
                            }),
                                (0, h.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}

function k(e) {
    let { onChangePage: t } = e;
    return (0, i.jsxs)(c.DUT, {
        onClick: () => t(1),
        className: f.Tq,
        children: [
            (0, i.jsx)("div", {
                className: f.w1,
                children: (0, i.jsx)(c.OR, {
                    size: "md",
                    color: a.A.unsafe_rawColors.ORANGE_345.css,
                }),
            }),
            (0, i.jsxs)("div", {
                className: f.qL,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: E.intl.string(E.t["6jI0hd"]),
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: E.intl.string(E.t.GuUItX),
                    }),
                ],
            }),
            (0, i.jsx)(c._BQ, {
                size: "custom",
                color: "currentColor",
                width: 16,
                className: f.nT,
            }),
        ],
    });
}
let w = () =>
    n
        .e("4660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });

function V(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        l = (0, r.cf)([j.A], () => j.A.getState()),
        [a, o] = s.useState({
            x: 0,
            y: 0,
        }),
        d = (0, O.A)();

    function u(e, t, n, i) {
        return (null != t ? t : e) && (null != i ? i : n);
    }
    let h = (e, t) => {
            var i, s;
            if (
                (e.enabled &&
                    !1 === l.enabled &&
                    (n(!0),
                    (0, g.Ak)("poggermode_enabled"),
                    (0, x.fO)({
                        duration: 2e3,
                        intensity: null != (i = e.shakeIntensity) ? i : l.shakeIntensity,
                    })),
                (0, m.O9)(e),
                null == t)
            )
                return;
            let r = u(l.confettiEnabled, e.confettiEnabled, l.enabled, e.enabled);
            0 === t &&
                r &&
                d.fire(a.x, a.y, {
                    settings: e,
                });
            let o = u(l.screenshakeEnabled, e.screenshakeEnabled, l.enabled, e.enabled);
            1 === t &&
                o &&
                (0, x.fO)({
                    duration: 1e3,
                    intensity: null != (s = e.shakeIntensity) ? s : l.shakeIntensity,
                });
        },
        A = (e) => {
            o({
                x: e.clientX,
                y: e.clientY,
            });
        };
    return (
        s.useEffect(
            () => (window.addEventListener("mousemove", A), () => window.removeEventListener("mousemove", A)),
            [],
        ),
        (0, i.jsxs)(c.BJc, {
            gap: 24,
            children: [
                (0, i.jsx)(P, {
                    settings: l,
                    updateSettings: h,
                }),
                (0, i.jsx)(k, {
                    onChangePage: t,
                }),
                (0, i.jsx)(R, {
                    settings: l,
                    updateSettings: h,
                }),
                (0, i.jsx)(D, {
                    settings: l,
                    updateSettings: h,
                }),
                (0, i.jsx)(G, {
                    settings: l,
                    updateSettings: h,
                }),
                (0, i.jsx)(L, {
                    updateSettings: h,
                }),
            ],
        })
    );
}
let M = (e) => (0 === e ? u.f.LEFT : u.f.RIGHT);

function U() {
    let [e, t] = s.useState(0),
        [n, l] = s.useState(M(e)),
        [a, o] = s.useState(!1),
        g = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        h = a && !g;
    return (
        s.useEffect(() => {
            let t = setTimeout(() => {
                l(M(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        s.useEffect(() => {
            Math.random() > 0.99 && (0, A._)(p.sn.VISITOR_100);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.A, {
                    className: f.l3,
                    step: e,
                    direction: n,
                    children: ((e, t, n) => {
                        let s = (e) => () => {
                            t(e);
                        };
                        switch (e) {
                            case 0:
                                return (0, i.jsx)(V, {
                                    onChangePage: s(1),
                                    setShowEnableAnimation: n,
                                });
                            case 1:
                                return (0, i.jsx)(b.A, {
                                    onBackClick: s(0),
                                });
                            default:
                                return null;
                        }
                    })(e, t, o),
                }),
                (0, i.jsx)("div", {
                    className: h ? f.Sr : f.IP,
                    children: (0, i.jsx)(c.akl, {
                        className: f.gT,
                        importData: w,
                        shouldAnimate: h,
                        autoplay: !1,
                        resetOnPlay: !0,
                        loop: !1,
                        onComplete: () => o(!1),
                    }),
                }),
            ],
        })
    );
}
