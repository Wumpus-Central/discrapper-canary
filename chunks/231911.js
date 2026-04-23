n.d(t, { A: () => J });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n(311907),
    r = n(827734),
    o = n(314116),
    d = n(243721),
    u = n(270003),
    c = n(834730),
    g = n(106236),
    m = n(331322),
    _ = n(821609),
    A = n(939249),
    h = n(369606),
    p = n(534514),
    x = n(320448),
    E = n(604121),
    T = n(775602),
    S = n(725951),
    f = n(400492),
    b = n(178241),
    C = n(779733),
    v = n(115063),
    N = n(414736),
    I = n(927018),
    y = n(928830),
    j = n(3137),
    O = n(301656),
    R = n(224964),
    L = n(31408),
    D = n(985018),
    P = n(739347);
let G = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    M = (0, l.range)(0, 11),
    U = (0, l.range)(0, 2.25, 0.25),
    k = (0, l.range)(1, 11),
    V = (0, l.range)(1, 26),
    w = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function B(e) {
    let { disabled: t, locations: n, settingsLocations: s, onChange: l } = e,
        a = n.map((e) =>
            (0, i.jsx)(
                d.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: s[e.location],
                    disabled: t,
                    onChange: (t) => l({ ...s, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, i.jsx)(u.n, { label: D.intl.string(D.t.bWVN1D), children: a });
}
function F(e) {
    let { children: t } = e;
    return (0, i.jsx)(c.E, { className: P.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function z(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: s,
        } = e,
        l = (0, a.bG)([T.A], () => T.A.useReducedMotion);
    return (0, i.jsx)(d.d, {
        label: D.intl.string(D.t.vuiXm9),
        description: D.intl.string(D.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, N._)(I.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, o.A)({
                          title: l ? D.intl.string(D.t["FxT+p0"]) : D.intl.string(D.t.TAZ4F9),
                          subtitle: l ? D.intl.string(D.t.gmixrx) : D.intl.string(D.t.jN3t3K),
                          confirmText: D.intl.string(D.t.JFfins),
                          onConfirm: () => s(l ? G : { enabled: !0, warningSeen: !0 }),
                      })
                    : s({ enabled: e });
        },
    });
}
function H(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: s,
                confettiSize: l,
                confettiEnabledLocations: a,
            },
            updateSettings: r,
        } = e,
        o = !t || !n;
    return (0, i.jsxs)(u.n, {
        label: D.intl.string(D.t.mqxwJO),
        children: [
            (0, i.jsx)(d.d, {
                label: D.intl.string(D.t.s0KCgF),
                description: D.intl.string(D.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.E, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: P.KF,
                        children: D.intl.string(D.t.vd0D81),
                    }),
                    (0, i.jsx)(F, { children: D.intl.string(D.t.a18Sug) }),
                    (0, i.jsx)(g.A, {
                        disabled: o,
                        markers: k,
                        stickToMarkers: !0,
                        minValue: k[0],
                        maxValue: k[k.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.E, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: P.KF,
                        children: D.intl.string(D.t.sPO3ij),
                    }),
                    (0, i.jsx)(F, { children: D.intl.string(D.t.xoldVn) }),
                    (0, i.jsx)(g.A, {
                        disabled: o,
                        markers: V,
                        stickToMarkers: !0,
                        minValue: V[0],
                        maxValue: V[V.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, i.jsx)(B, {
                disabled: o,
                locations: [
                    {
                        location: L.k.CHAT_INPUT,
                        title: D.intl.string(D.t.elTtyz),
                        description: D.intl.string(D.t.HtKfMi),
                    },
                    {
                        location: L.k.REACTION,
                        title: D.intl.string(D.t.Ik4VIa),
                        description: D.intl.string(D.t.y4rqK0),
                    },
                    {
                        location: L.k.MEMBER_USER,
                        title: D.intl.string(D.t.ZXBlAn),
                        description: D.intl.string(D.t["m9RD+c"]),
                    },
                    {
                        location: L.k.CALL_TILE,
                        title: D.intl.string(D.t.V66giQ),
                        description: D.intl.string(D.t.fiHV7u),
                    },
                ],
                settingsLocations: a,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function Y(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: s, combosRequiredCount: l },
            updateSettings: a,
        } = e,
        r = !t || !n;
    return (0, i.jsxs)(u.n, {
        label: D.intl.string(D.t.Xz0ole),
        children: [
            (0, i.jsx)(d.d, {
                label: D.intl.string(D.t.o3iV7B),
                description: D.intl.string(D.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => a({ combosEnabled: e }),
            }),
            (0, i.jsx)(d.d, {
                label: D.intl.string(D.t["Ax+IoW"]),
                description: D.intl.string(D.t["9rgQEr"]),
                checked: s,
                disabled: !t,
                onChange: (e) => a({ comboSoundsEnabled: e }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: P.KF,
                        children: D.intl.string(D.t.L0oQuh),
                    }),
                    (0, i.jsx)(F, { children: D.intl.string(D.t["/OOFpL"]) }),
                    (0, i.jsx)(g.A, {
                        disabled: r,
                        markers: M,
                        stickToMarkers: !0,
                        minValue: M[0],
                        maxValue: M[M.length - 1],
                        initialValue: l,
                        onValueChange: (e) => a({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function X(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: s, screenshakeEnabledLocations: l },
            updateSettings: r,
        } = e,
        o = (0, a.bG)([T.A], () => T.A.useReducedMotion),
        m = !t || !n || o;
    return (0, i.jsxs)(u.n, {
        label: D.intl.string(D.t.wVS5Sd),
        children: [
            (0, i.jsx)(d.d, {
                label: D.intl.string(D.t.N004zO),
                description: o ? D.intl.string(D.t.GckHGw) : D.intl.string(D.t.Qq5W3v),
                checked: n && !o,
                disabled: !t || o,
                onChange: (e) => r({ screenshakeEnabled: e }, 1),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(c.E, {
                        variant: "text-md/semibold",
                        color: m ? "text-muted" : "text-strong",
                        className: P.KF,
                        children: D.intl.string(D.t.UxnnC4),
                    }),
                    (0, i.jsx)(F, { children: D.intl.string(D.t.CEOEOb) }),
                    (0, i.jsx)(g.A, {
                        disabled: m,
                        markers: U,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: U[0],
                        maxValue: U[U.length - 1],
                        initialValue: s,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > s &&
                                (0, N._)(I.sn.MORE),
                                r(t, 1);
                        },
                        onMarkerRender: (e) => (e === U[U.length - 1] ? D.intl.string(D.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, i.jsx)(B, {
                disabled: m,
                locations: [
                    {
                        location: L.uD.CHAT_INPUT,
                        title: D.intl.string(D.t.vUcvPP),
                        description: D.intl.string(D.t.y00OrF),
                    },
                    {
                        location: L.uD.VOICE_USER,
                        title: D.intl.string(D.t.TcRO54),
                        description: D.intl.string(D.t.YJCxVY),
                    },
                    {
                        location: L.uD.MENTION,
                        title: D.intl.string(D.t.oW4shO),
                        description: D.intl.string(D.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function K(e) {
    let { updateSettings: t } = e;
    return (0, i.jsx)(u.n, {
        label: D.intl.string(D.t.EuXv2q),
        children: (0, i.jsxs)(m.B, {
            gap: 16,
            children: [
                (0, i.jsx)("div", { children: D.intl.string(D.t["1SLnki"]) }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: P.hw,
                    children: (0, i.jsx)(_.$, {
                        variant: "primary",
                        size: "sm",
                        text: D.intl.string(D.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, C.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function W(e) {
    let { onChangePage: t } = e;
    return (0, i.jsxs)(A.D, {
        onClick: () => t(1),
        className: P.Tq,
        children: [
            (0, i.jsx)("div", {
                className: P.w1,
                children: (0, i.jsx)(h.O, { size: "md", color: r.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, i.jsxs)("div", {
                className: P.qL,
                children: [
                    (0, i.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: D.intl.string(D.t["6jI0hd"]),
                    }),
                    (0, i.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: D.intl.string(D.t.GuUItX),
                    }),
                ],
            }),
            (0, i.jsx)(x._, { size: "custom", color: "currentColor", width: 16, className: P.nT }),
        ],
    });
}
let Z = () =>
    n
        .e("4660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function q(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        l = (0, a.cf)([j.A], () => j.A.getState()),
        [r, o] = s.useState({ x: 0, y: 0 }),
        d = (0, R.A)(),
        u = (e, t) => {
            var i, s, a, o, u, c, g, m;
            if (
                (e.enabled &&
                    !1 === l.enabled &&
                    (n(!0),
                    (0, f.Ak)("poggermode_enabled"),
                    (0, v.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? l.shakeIntensity })),
                (0, y.O9)(e),
                null == t)
            )
                return;
            let _ =
                ((i = l.confettiEnabled),
                (s = e.confettiEnabled),
                (a = l.enabled),
                (o = e.enabled),
                (s ?? i) && (o ?? a));
            0 === t && _ && d.fire(r.x, r.y, { settings: e });
            let A =
                ((u = l.screenshakeEnabled),
                (c = e.screenshakeEnabled),
                (g = l.enabled),
                (m = e.enabled),
                (c ?? u) && (m ?? g));
            1 === t && A && (0, v.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? l.shakeIntensity });
        },
        c = (e) => {
            o({ x: e.clientX, y: e.clientY });
        };
    return (
        s.useEffect(
            () => (window.addEventListener("mousemove", c), () => window.removeEventListener("mousemove", c)),
            [],
        ),
        (0, i.jsxs)(m.B, {
            gap: 24,
            children: [
                (0, i.jsx)(z, { settings: l, updateSettings: u }),
                (0, i.jsx)(W, { onChangePage: t }),
                (0, i.jsx)(Y, { settings: l, updateSettings: u }),
                (0, i.jsx)(X, { settings: l, updateSettings: u }),
                (0, i.jsx)(H, { settings: l, updateSettings: u }),
                (0, i.jsx)(K, { updateSettings: u }),
            ],
        })
    );
}
let Q = (e) => (0 === e ? S.f.LEFT : S.f.RIGHT);
function J() {
    let [e, t] = s.useState(0),
        [n, l] = s.useState(Q(e)),
        [r, o] = s.useState(!1),
        d = (0, a.bG)([T.A], () => T.A.useReducedMotion),
        u = r && !d;
    return (
        s.useEffect(() => {
            let t = setTimeout(() => {
                l(Q(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        s.useEffect(() => {
            (0, b._)(w[e]);
        }, [e]),
        s.useEffect(() => {
            Math.random() > 0.99 && (0, N._)(I.sn.VISITOR_100);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S.A, {
                    className: P.l3,
                    step: e,
                    direction: n,
                    children: ((e, t, n) => {
                        let s = (e) => () => {
                            t(e);
                        };
                        switch (e) {
                            case 0:
                                return (0, i.jsx)(q, { onChangePage: s(1), setShowEnableAnimation: n });
                            case 1:
                                return (0, i.jsx)(O.A, { onBackClick: s(0) });
                            default:
                                return null;
                        }
                    })(e, t, o),
                }),
                (0, i.jsx)("div", {
                    className: u ? P.Sr : P.IP,
                    children: (0, i.jsx)(E.a, {
                        className: P.gT,
                        importData: Z,
                        shouldAnimate: u,
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
