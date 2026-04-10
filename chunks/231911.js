n.d(t, { A: () => F });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(311907),
    a = n(827734),
    o = n(314116),
    d = n(397927),
    c = n(775602),
    u = n(725951),
    m = n(400492),
    g = n(178241),
    _ = n(779733),
    x = n(115063),
    A = n(414736),
    h = n(927018),
    p = n(928830),
    T = n(3137),
    f = n(301656),
    S = n(224964),
    E = n(31408),
    b = n(985018),
    C = n(836419);
let v = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    N = (0, l.range)(0, 11),
    I = (0, l.range)(0, 2.25, 0.25),
    j = (0, l.range)(1, 11),
    y = (0, l.range)(1, 26),
    O = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function R(e) {
    let { disabled: t, locations: n, settingsLocations: s, onChange: l } = e,
        r = n.map((e) =>
            (0, i.jsx)(
                d.dOG,
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
    return (0, i.jsx)(d.nVY, { label: b.intl.string(b.t.bWVN1D), children: r });
}
function L(e) {
    let { children: t } = e;
    return (0, i.jsx)(d.Text, { className: C.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function P(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: s,
        } = e,
        l = (0, r.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsx)(d.dOG, {
        label: b.intl.string(b.t.vuiXm9),
        description: b.intl.string(b.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, A._)(h.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, o.A)({
                          title: l ? b.intl.string(b.t["FxT+p0"]) : b.intl.string(b.t.TAZ4F9),
                          subtitle: l ? b.intl.string(b.t.gmixrx) : b.intl.string(b.t.jN3t3K),
                          confirmText: b.intl.string(b.t.JFfins),
                          onConfirm: () => s(l ? v : { enabled: !0, warningSeen: !0 }),
                      })
                    : s({ enabled: e });
        },
    });
}
function D(e) {
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
    return (0, i.jsxs)(d.nVY, {
        label: b.intl.string(b.t.mqxwJO),
        children: [
            (0, i.jsx)(d.dOG, {
                label: b.intl.string(b.t.s0KCgF),
                description: b.intl.string(b.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => a({ confettiEnabled: e }, 0),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: C.KF,
                        children: b.intl.string(b.t.vd0D81),
                    }),
                    (0, i.jsx)(L, { children: b.intl.string(b.t.a18Sug) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: o,
                        markers: j,
                        stickToMarkers: !0,
                        minValue: j[0],
                        maxValue: j[j.length - 1],
                        initialValue: s,
                        onValueChange: (e) => a({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: C.KF,
                        children: b.intl.string(b.t.sPO3ij),
                    }),
                    (0, i.jsx)(L, { children: b.intl.string(b.t.xoldVn) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: o,
                        markers: y,
                        stickToMarkers: !0,
                        minValue: y[0],
                        maxValue: y[y.length - 1],
                        initialValue: l,
                        onValueChange: (e) => a({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, i.jsx)(R, {
                disabled: o,
                locations: [
                    {
                        location: E.k.CHAT_INPUT,
                        title: b.intl.string(b.t.elTtyz),
                        description: b.intl.string(b.t.HtKfMi),
                    },
                    {
                        location: E.k.REACTION,
                        title: b.intl.string(b.t.Ik4VIa),
                        description: b.intl.string(b.t.y4rqK0),
                    },
                    {
                        location: E.k.MEMBER_USER,
                        title: b.intl.string(b.t.ZXBlAn),
                        description: b.intl.string(b.t["m9RD+c"]),
                    },
                    {
                        location: E.k.CALL_TILE,
                        title: b.intl.string(b.t.V66giQ),
                        description: b.intl.string(b.t.fiHV7u),
                    },
                ],
                settingsLocations: r,
                onChange: (e) => a({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function G(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: s, combosRequiredCount: l },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, i.jsxs)(d.nVY, {
        label: b.intl.string(b.t.Xz0ole),
        children: [
            (0, i.jsx)(d.dOG, {
                label: b.intl.string(b.t.o3iV7B),
                description: b.intl.string(b.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ combosEnabled: e }),
            }),
            (0, i.jsx)(d.dOG, {
                label: b.intl.string(b.t["Ax+IoW"]),
                description: b.intl.string(b.t["9rgQEr"]),
                checked: s,
                disabled: !t,
                onChange: (e) => r({ comboSoundsEnabled: e }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: C.KF,
                        children: b.intl.string(b.t.L0oQuh),
                    }),
                    (0, i.jsx)(L, { children: b.intl.string(b.t["/OOFpL"]) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: a,
                        markers: N,
                        stickToMarkers: !0,
                        minValue: N[0],
                        maxValue: N[N.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function M(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: s, screenshakeEnabledLocations: l },
            updateSettings: a,
        } = e,
        o = (0, r.bG)([c.A], () => c.A.useReducedMotion),
        u = !t || !n || o;
    return (0, i.jsxs)(d.nVY, {
        label: b.intl.string(b.t.wVS5Sd),
        children: [
            (0, i.jsx)(d.dOG, {
                label: b.intl.string(b.t.N004zO),
                description: o ? b.intl.string(b.t.GckHGw) : b.intl.string(b.t.Qq5W3v),
                checked: n && !o,
                disabled: !t || o,
                onChange: (e) => a({ screenshakeEnabled: e }, 1),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: u ? "text-muted" : "text-strong",
                        className: C.KF,
                        children: b.intl.string(b.t.UxnnC4),
                    }),
                    (0, i.jsx)(L, { children: b.intl.string(b.t.CEOEOb) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: u,
                        markers: I,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: I[0],
                        maxValue: I[I.length - 1],
                        initialValue: s,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > s &&
                                (0, A._)(h.sn.MORE),
                                a(t, 1);
                        },
                        onMarkerRender: (e) => (e === I[I.length - 1] ? b.intl.string(b.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, i.jsx)(R, {
                disabled: u,
                locations: [
                    {
                        location: E.uD.CHAT_INPUT,
                        title: b.intl.string(b.t.vUcvPP),
                        description: b.intl.string(b.t.y00OrF),
                    },
                    {
                        location: E.uD.VOICE_USER,
                        title: b.intl.string(b.t.TcRO54),
                        description: b.intl.string(b.t.YJCxVY),
                    },
                    {
                        location: E.uD.MENTION,
                        title: b.intl.string(b.t.oW4shO),
                        description: b.intl.string(b.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => a({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function k(e) {
    let { updateSettings: t } = e;
    return (0, i.jsx)(d.nVY, {
        label: b.intl.string(b.t.EuXv2q),
        children: (0, i.jsxs)(d.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)("div", { children: b.intl.string(b.t["1SLnki"]) }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: C.hw,
                    children: (0, i.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: b.intl.string(b.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, _.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function U(e) {
    let { onChangePage: t } = e;
    return (0, i.jsxs)(d.DUT, {
        onClick: () => t(1),
        className: C.Tq,
        children: [
            (0, i.jsx)("div", {
                className: C.w1,
                children: (0, i.jsx)(d.OR, { size: "md", color: a.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, i.jsxs)("div", {
                className: C.qL,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: b.intl.string(b.t["6jI0hd"]),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: b.intl.string(b.t.GuUItX),
                    }),
                ],
            }),
            (0, i.jsx)(d._BQ, { size: "custom", color: "currentColor", width: 16, className: C.nT }),
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
        l = (0, r.cf)([T.A], () => T.A.getState()),
        [a, o] = s.useState({ x: 0, y: 0 }),
        c = (0, S.A)(),
        u = (e, t) => {
            var i, s, r, o, d, u, g, _;
            if (
                (e.enabled &&
                    !1 === l.enabled &&
                    (n(!0),
                    (0, m.Ak)("poggermode_enabled"),
                    (0, x.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? l.shakeIntensity })),
                (0, p.O9)(e),
                null == t)
            )
                return;
            let A =
                ((i = l.confettiEnabled),
                (s = e.confettiEnabled),
                (r = l.enabled),
                (o = e.enabled),
                (s ?? i) && (o ?? r));
            0 === t && A && c.fire(a.x, a.y, { settings: e });
            let h =
                ((d = l.screenshakeEnabled),
                (u = e.screenshakeEnabled),
                (g = l.enabled),
                (_ = e.enabled),
                (u ?? d) && (_ ?? g));
            1 === t && h && (0, x.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? l.shakeIntensity });
        },
        g = (e) => {
            o({ x: e.clientX, y: e.clientY });
        };
    return (
        s.useEffect(
            () => (window.addEventListener("mousemove", g), () => window.removeEventListener("mousemove", g)),
            [],
        ),
        (0, i.jsxs)(d.BJc, {
            gap: 24,
            children: [
                (0, i.jsx)(P, { settings: l, updateSettings: u }),
                (0, i.jsx)(U, { onChangePage: t }),
                (0, i.jsx)(G, { settings: l, updateSettings: u }),
                (0, i.jsx)(M, { settings: l, updateSettings: u }),
                (0, i.jsx)(D, { settings: l, updateSettings: u }),
                (0, i.jsx)(k, { updateSettings: u }),
            ],
        })
    );
}
let B = (e) => (0 === e ? u.f.LEFT : u.f.RIGHT);
function F() {
    let [e, t] = s.useState(0),
        [n, l] = s.useState(B(e)),
        [a, o] = s.useState(!1),
        m = (0, r.bG)([c.A], () => c.A.useReducedMotion),
        _ = a && !m;
    return (
        s.useEffect(() => {
            let t = setTimeout(() => {
                l(B(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        s.useEffect(() => {
            (0, g._)(O[e]);
        }, [e]),
        s.useEffect(() => {
            Math.random() > 0.99 && (0, A._)(h.sn.VISITOR_100);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.A, {
                    className: C.l3,
                    step: e,
                    direction: n,
                    children: ((e, t, n) => {
                        let s = (e) => () => {
                            t(e);
                        };
                        switch (e) {
                            case 0:
                                return (0, i.jsx)(V, { onChangePage: s(1), setShowEnableAnimation: n });
                            case 1:
                                return (0, i.jsx)(f.A, { onBackClick: s(0) });
                            default:
                                return null;
                        }
                    })(e, t, o),
                }),
                (0, i.jsx)("div", {
                    className: _ ? C.Sr : C.IP,
                    children: (0, i.jsx)(d.akl, {
                        className: C.gT,
                        importData: w,
                        shouldAnimate: _,
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
