n.d(t, { A: () => H });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n(311907),
    r = n(827734),
    o = n(314116),
    d = n(397927),
    c = n(775602),
    u = n(725951),
    _ = n(400492),
    m = n(841329),
    g = n(12901),
    A = n(115063),
    h = n(414736),
    x = n(927018),
    p = n(928830),
    T = n(3137),
    E = n(301656),
    S = n(224964),
    C = n(31408),
    f = n(985018),
    b = n(829054);
let N = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    I = (0, l.range)(0, 11),
    v = (0, l.range)(0, 2.25, 0.25),
    j = (0, l.range)(1, 11),
    y = (0, l.range)(1, 26),
    R = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function O(e) {
    let { disabled: t, locations: n, settingsLocations: s, onChange: l } = e,
        a = n.map((e) =>
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
    return (0, i.jsx)(d.nVY, { label: f.intl.string(f.t.bWVN1D), children: a });
}
function P(e) {
    let { children: t } = e;
    return (0, i.jsx)(d.Text, { className: b.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function D(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: s,
        } = e,
        l = (0, a.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsx)(d.dOG, {
        label: f.intl.string(f.t.vuiXm9),
        description: f.intl.string(f.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, h._)(x.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, o.A)({
                          title: l ? f.intl.string(f.t["FxT+p0"]) : f.intl.string(f.t.TAZ4F9),
                          subtitle: l ? f.intl.string(f.t.gmixrx) : f.intl.string(f.t.jN3t3K),
                          confirmText: f.intl.string(f.t.JFfins),
                          onConfirm: () => s(l ? N : { enabled: !0, warningSeen: !0 }),
                      })
                    : s({ enabled: e });
        },
    });
}
function L(e) {
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
    return (0, i.jsxs)(d.nVY, {
        label: f.intl.string(f.t.mqxwJO),
        children: [
            (0, i.jsx)(d.dOG, {
                label: f.intl.string(f.t.s0KCgF),
                description: f.intl.string(f.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: b.KF,
                        children: f.intl.string(f.t.vd0D81),
                    }),
                    (0, i.jsx)(P, { children: f.intl.string(f.t.a18Sug) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: o,
                        markers: j,
                        stickToMarkers: !0,
                        minValue: j[0],
                        maxValue: j[j.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: b.KF,
                        children: f.intl.string(f.t.sPO3ij),
                    }),
                    (0, i.jsx)(P, { children: f.intl.string(f.t.xoldVn) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: o,
                        markers: y,
                        stickToMarkers: !0,
                        minValue: y[0],
                        maxValue: y[y.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, i.jsx)(O, {
                disabled: o,
                locations: [
                    {
                        location: C.k.CHAT_INPUT,
                        title: f.intl.string(f.t.elTtyz),
                        description: f.intl.string(f.t.HtKfMi),
                    },
                    {
                        location: C.k.REACTION,
                        title: f.intl.string(f.t.Ik4VIa),
                        description: f.intl.string(f.t.y4rqK0),
                    },
                    {
                        location: C.k.MEMBER_USER,
                        title: f.intl.string(f.t.ZXBlAn),
                        description: f.intl.string(f.t["m9RD+c"]),
                    },
                    {
                        location: C.k.CALL_TILE,
                        title: f.intl.string(f.t.V66giQ),
                        description: f.intl.string(f.t.fiHV7u),
                    },
                ],
                settingsLocations: a,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function G(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: s, combosRequiredCount: l },
            updateSettings: a,
        } = e,
        r = !t || !n;
    return (0, i.jsxs)(d.nVY, {
        label: f.intl.string(f.t.Xz0ole),
        children: [
            (0, i.jsx)(d.dOG, {
                label: f.intl.string(f.t.o3iV7B),
                description: f.intl.string(f.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => a({ combosEnabled: e }),
            }),
            (0, i.jsx)(d.dOG, {
                label: f.intl.string(f.t["Ax+IoW"]),
                description: f.intl.string(f.t["9rgQEr"]),
                checked: s,
                disabled: !t,
                onChange: (e) => a({ comboSoundsEnabled: e }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: b.KF,
                        children: f.intl.string(f.t.L0oQuh),
                    }),
                    (0, i.jsx)(P, { children: f.intl.string(f.t["/OOFpL"]) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: r,
                        markers: I,
                        stickToMarkers: !0,
                        minValue: I[0],
                        maxValue: I[I.length - 1],
                        initialValue: l,
                        onValueChange: (e) => a({ combosRequiredCount: e }),
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
            updateSettings: r,
        } = e,
        o = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        u = !t || !n || o;
    return (0, i.jsxs)(d.nVY, {
        label: f.intl.string(f.t.wVS5Sd),
        children: [
            (0, i.jsx)(d.dOG, {
                label: f.intl.string(f.t.N004zO),
                description: o ? f.intl.string(f.t.GckHGw) : f.intl.string(f.t.Qq5W3v),
                checked: n && !o,
                disabled: !t || o,
                onChange: (e) => r({ screenshakeEnabled: e }, 1),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: u ? "text-muted" : "text-strong",
                        className: b.KF,
                        children: f.intl.string(f.t.UxnnC4),
                    }),
                    (0, i.jsx)(P, { children: f.intl.string(f.t.CEOEOb) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: u,
                        markers: v,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: v[0],
                        maxValue: v[v.length - 1],
                        initialValue: s,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > s &&
                                (0, h._)(x.sn.MORE),
                                r(t, 1);
                        },
                        onMarkerRender: (e) => (e === v[v.length - 1] ? f.intl.string(f.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, i.jsx)(O, {
                disabled: u,
                locations: [
                    {
                        location: C.uD.CHAT_INPUT,
                        title: f.intl.string(f.t.vUcvPP),
                        description: f.intl.string(f.t.y00OrF),
                    },
                    {
                        location: C.uD.VOICE_USER,
                        title: f.intl.string(f.t.TcRO54),
                        description: f.intl.string(f.t.YJCxVY),
                    },
                    {
                        location: C.uD.MENTION,
                        title: f.intl.string(f.t.oW4shO),
                        description: f.intl.string(f.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function U(e) {
    let { updateSettings: t } = e;
    return (0, i.jsx)(d.nVY, {
        label: f.intl.string(f.t.EuXv2q),
        children: (0, i.jsxs)(d.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)("div", { children: f.intl.string(f.t["1SLnki"]) }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: b.hw,
                    children: (0, i.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: f.intl.string(f.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, g.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function k(e) {
    let { onChangePage: t } = e;
    return (0, i.jsxs)(d.DUT, {
        onClick: () => t(1),
        className: b.Tq,
        children: [
            (0, i.jsx)("div", {
                className: b.w1,
                children: (0, i.jsx)(d.OR, { size: "md", color: r.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, i.jsxs)("div", {
                className: b.qL,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: f.intl.string(f.t["6jI0hd"]),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: f.intl.string(f.t.GuUItX),
                    }),
                ],
            }),
            (0, i.jsx)(d._BQ, { size: "custom", color: "currentColor", width: 16, className: b.nT }),
        ],
    });
}
let V = () =>
    n
        .e("4660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function w(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        l = (0, a.cf)([T.A], () => T.A.getState()),
        [r, o] = s.useState({ x: 0, y: 0 }),
        c = (0, S.A)(),
        u = (e, t) => {
            var i, s, a, o, d, u, m, g;
            if (
                (e.enabled &&
                    !1 === l.enabled &&
                    (n(!0),
                    (0, _.Ak)("poggermode_enabled"),
                    (0, A.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? l.shakeIntensity })),
                (0, p.O9)(e),
                null == t)
            )
                return;
            let h =
                ((i = l.confettiEnabled),
                (s = e.confettiEnabled),
                (a = l.enabled),
                (o = e.enabled),
                (s ?? i) && (o ?? a));
            0 === t && h && c.fire(r.x, r.y, { settings: e });
            let x =
                ((d = l.screenshakeEnabled),
                (u = e.screenshakeEnabled),
                (m = l.enabled),
                (g = e.enabled),
                (u ?? d) && (g ?? m));
            1 === t && x && (0, A.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? l.shakeIntensity });
        },
        m = (e) => {
            o({ x: e.clientX, y: e.clientY });
        };
    return (
        s.useEffect(
            () => (window.addEventListener("mousemove", m), () => window.removeEventListener("mousemove", m)),
            [],
        ),
        (0, i.jsxs)(d.BJc, {
            gap: 24,
            children: [
                (0, i.jsx)(D, { settings: l, updateSettings: u }),
                (0, i.jsx)(k, { onChangePage: t }),
                (0, i.jsx)(G, { settings: l, updateSettings: u }),
                (0, i.jsx)(M, { settings: l, updateSettings: u }),
                (0, i.jsx)(L, { settings: l, updateSettings: u }),
                (0, i.jsx)(U, { updateSettings: u }),
            ],
        })
    );
}
let B = (e) => (0 === e ? u.f.LEFT : u.f.RIGHT);
function H() {
    let [e, t] = s.useState(0),
        [n, l] = s.useState(B(e)),
        [r, o] = s.useState(!1),
        _ = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        g = r && !_;
    return (
        s.useEffect(() => {
            let t = setTimeout(() => {
                l(B(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        s.useEffect(() => {
            (0, m._)(R[e]);
        }, [e]),
        s.useEffect(() => {
            Math.random() > 0.99 && (0, h._)(x.sn.VISITOR_100);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.A, {
                    className: b.l3,
                    step: e,
                    direction: n,
                    children: ((e, t, n) => {
                        let s = (e) => () => {
                            t(e);
                        };
                        switch (e) {
                            case 0:
                                return (0, i.jsx)(w, { onChangePage: s(1), setShowEnableAnimation: n });
                            case 1:
                                return (0, i.jsx)(E.A, { onBackClick: s(0) });
                            default:
                                return null;
                        }
                    })(e, t, o),
                }),
                (0, i.jsx)("div", {
                    className: g ? b.Sr : b.IP,
                    children: (0, i.jsx)(d.akl, {
                        className: b.gT,
                        importData: V,
                        shouldAnimate: g,
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
