n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(311907),
    r = n(827734),
    o = n(314116),
    d = n(397927),
    c = n(775602),
    u = n(725951),
    h = n(400492),
    A = n(12901),
    g = n(115063),
    m = n(414736),
    p = n(927018),
    _ = n(928830),
    x = n(3137),
    f = n(301656),
    E = n(224964),
    C = n(31408),
    I = n(985018),
    S = n(829054);
let b = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    N = (0, s.range)(0, 11),
    T = (0, s.range)(0, 2.25, 0.25),
    j = (0, s.range)(1, 11),
    v = (0, s.range)(1, 26);
function y(e) {
    let { disabled: t, locations: n, settingsLocations: l, onChange: s } = e,
        a = n.map((e) =>
            (0, i.jsx)(
                d.dOG,
                {
                    label: e.title,
                    description: e.description,
                    checked: l[e.location],
                    disabled: t,
                    onChange: (t) => s({ ...l, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, i.jsx)(d.nVY, { label: I.intl.string(I.t.bWVN1D), children: a });
}
function R(e) {
    let { children: t } = e;
    return (0, i.jsx)(d.Text, { className: S.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function O(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: l,
        } = e,
        s = (0, a.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsx)(d.dOG, {
        label: I.intl.string(I.t.vuiXm9),
        description: I.intl.string(I.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, m._)(p.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, o.A)({
                          title: s ? I.intl.string(I.t["FxT+p0"]) : I.intl.string(I.t.TAZ4F9),
                          subtitle: s ? I.intl.string(I.t.gmixrx) : I.intl.string(I.t.jN3t3K),
                          confirmText: I.intl.string(I.t.JFfins),
                          onConfirm: () => l(s ? b : { enabled: !0, warningSeen: !0 }),
                      })
                    : l({ enabled: e });
        },
    });
}
function L(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: l,
                confettiSize: s,
                confettiEnabledLocations: a,
            },
            updateSettings: r,
        } = e,
        o = !t || !n;
    return (0, i.jsxs)(d.nVY, {
        label: I.intl.string(I.t.mqxwJO),
        children: [
            (0, i.jsx)(d.dOG, {
                label: I.intl.string(I.t.s0KCgF),
                description: I.intl.string(I.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: o ? "text-muted" : "text-strong",
                        className: S.KF,
                        children: I.intl.string(I.t.vd0D81),
                    }),
                    (0, i.jsx)(R, { children: I.intl.string(I.t.a18Sug) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: o,
                        markers: j,
                        stickToMarkers: !0,
                        minValue: j[0],
                        maxValue: j[j.length - 1],
                        initialValue: l,
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
                        className: S.KF,
                        children: I.intl.string(I.t.sPO3ij),
                    }),
                    (0, i.jsx)(R, { children: I.intl.string(I.t.xoldVn) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: o,
                        markers: v,
                        stickToMarkers: !0,
                        minValue: v[0],
                        maxValue: v[v.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, i.jsx)(y, {
                disabled: o,
                locations: [
                    {
                        location: C.k.CHAT_INPUT,
                        title: I.intl.string(I.t.elTtyz),
                        description: I.intl.string(I.t.HtKfMi),
                    },
                    {
                        location: C.k.REACTION,
                        title: I.intl.string(I.t.Ik4VIa),
                        description: I.intl.string(I.t.y4rqK0),
                    },
                    {
                        location: C.k.MEMBER_USER,
                        title: I.intl.string(I.t.ZXBlAn),
                        description: I.intl.string(I.t["m9RD+c"]),
                    },
                    {
                        location: C.k.CALL_TILE,
                        title: I.intl.string(I.t.V66giQ),
                        description: I.intl.string(I.t.fiHV7u),
                    },
                ],
                settingsLocations: a,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function D(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: l, combosRequiredCount: s },
            updateSettings: a,
        } = e,
        r = !t || !n;
    return (0, i.jsxs)(d.nVY, {
        label: I.intl.string(I.t.Xz0ole),
        children: [
            (0, i.jsx)(d.dOG, {
                label: I.intl.string(I.t.o3iV7B),
                description: I.intl.string(I.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => a({ combosEnabled: e }),
            }),
            (0, i.jsx)(d.dOG, {
                label: I.intl.string(I.t["Ax+IoW"]),
                description: I.intl.string(I.t["9rgQEr"]),
                checked: l,
                disabled: !t,
                onChange: (e) => a({ comboSoundsEnabled: e }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: S.KF,
                        children: I.intl.string(I.t.L0oQuh),
                    }),
                    (0, i.jsx)(R, { children: I.intl.string(I.t["/OOFpL"]) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: r,
                        markers: N,
                        stickToMarkers: !0,
                        minValue: N[0],
                        maxValue: N[N.length - 1],
                        initialValue: s,
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
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: l, screenshakeEnabledLocations: s },
            updateSettings: r,
        } = e,
        o = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        u = !t || !n || o;
    return (0, i.jsxs)(d.nVY, {
        label: I.intl.string(I.t.wVS5Sd),
        children: [
            (0, i.jsx)(d.dOG, {
                label: I.intl.string(I.t.N004zO),
                description: o ? I.intl.string(I.t.GckHGw) : I.intl.string(I.t.Qq5W3v),
                checked: n && !o,
                disabled: !t || o,
                onChange: (e) => r({ screenshakeEnabled: e }, 1),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: u ? "text-muted" : "text-strong",
                        className: S.KF,
                        children: I.intl.string(I.t.UxnnC4),
                    }),
                    (0, i.jsx)(R, { children: I.intl.string(I.t.CEOEOb) }),
                    (0, i.jsx)(d.Apm, {
                        disabled: u,
                        markers: T,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: T[0],
                        maxValue: T[T.length - 1],
                        initialValue: l,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > l &&
                                (0, m._)(p.sn.MORE),
                                r(t, 1);
                        },
                        onMarkerRender: (e) => (e === T[T.length - 1] ? I.intl.string(I.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, i.jsx)(y, {
                disabled: u,
                locations: [
                    {
                        location: C.uD.CHAT_INPUT,
                        title: I.intl.string(I.t.vUcvPP),
                        description: I.intl.string(I.t.y00OrF),
                    },
                    {
                        location: C.uD.VOICE_USER,
                        title: I.intl.string(I.t.TcRO54),
                        description: I.intl.string(I.t.YJCxVY),
                    },
                    {
                        location: C.uD.MENTION,
                        title: I.intl.string(I.t.oW4shO),
                        description: I.intl.string(I.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function G(e) {
    let { updateSettings: t } = e;
    return (0, i.jsx)(d.nVY, {
        label: I.intl.string(I.t.EuXv2q),
        children: (0, i.jsxs)(d.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)("div", { children: I.intl.string(I.t["1SLnki"]) }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: S.hw,
                    children: (0, i.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: I.intl.string(I.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, A.default)();
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
        className: S.Tq,
        children: [
            (0, i.jsx)("div", {
                className: S.w1,
                children: (0, i.jsx)(d.OR, { size: "md", color: r.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, i.jsxs)("div", {
                className: S.qL,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: I.intl.string(I.t["6jI0hd"]),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: I.intl.string(I.t.GuUItX),
                    }),
                ],
            }),
            (0, i.jsx)(d._BQ, { size: "custom", color: "currentColor", width: 16, className: S.nT }),
        ],
    });
}
let P = () =>
    n
        .e("4660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function k(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        s = (0, a.cf)([x.A], () => x.A.getState()),
        [r, o] = l.useState({ x: 0, y: 0 }),
        c = (0, E.A)(),
        u = (e, t) => {
            var i, l, a, o, d, u, A, m;
            if (
                (e.enabled &&
                    !1 === s.enabled &&
                    (n(!0),
                    (0, h.Ak)("poggermode_enabled"),
                    (0, g.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? s.shakeIntensity })),
                (0, _.O9)(e),
                null == t)
            )
                return;
            let p =
                ((i = s.confettiEnabled),
                (l = e.confettiEnabled),
                (a = s.enabled),
                (o = e.enabled),
                (l ?? i) && (o ?? a));
            0 === t && p && c.fire(r.x, r.y, { settings: e });
            let x =
                ((d = s.screenshakeEnabled),
                (u = e.screenshakeEnabled),
                (A = s.enabled),
                (m = e.enabled),
                (u ?? d) && (m ?? A));
            1 === t && x && (0, g.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? s.shakeIntensity });
        },
        A = (e) => {
            o({ x: e.clientX, y: e.clientY });
        };
    return (
        l.useEffect(
            () => (window.addEventListener("mousemove", A), () => window.removeEventListener("mousemove", A)),
            [],
        ),
        (0, i.jsxs)(d.BJc, {
            gap: 24,
            children: [
                (0, i.jsx)(O, { settings: s, updateSettings: u }),
                (0, i.jsx)(U, { onChangePage: t }),
                (0, i.jsx)(D, { settings: s, updateSettings: u }),
                (0, i.jsx)(M, { settings: s, updateSettings: u }),
                (0, i.jsx)(L, { settings: s, updateSettings: u }),
                (0, i.jsx)(G, { updateSettings: u }),
            ],
        })
    );
}
let w = (e) => (0 === e ? u.f.LEFT : u.f.RIGHT);
function V() {
    let [e, t] = l.useState(0),
        [n, s] = l.useState(w(e)),
        [r, o] = l.useState(!1),
        h = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        A = r && !h;
    return (
        l.useEffect(() => {
            let t = setTimeout(() => {
                s(w(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        l.useEffect(() => {
            Math.random() > 0.99 && (0, m._)(p.sn.VISITOR_100);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.A, {
                    className: S.l3,
                    step: e,
                    direction: n,
                    children: ((e, t, n) => {
                        let l = (e) => () => {
                            t(e);
                        };
                        switch (e) {
                            case 0:
                                return (0, i.jsx)(k, { onChangePage: l(1), setShowEnableAnimation: n });
                            case 1:
                                return (0, i.jsx)(f.A, { onBackClick: l(0) });
                            default:
                                return null;
                        }
                    })(e, t, o),
                }),
                (0, i.jsx)("div", {
                    className: A ? S.Sr : S.IP,
                    children: (0, i.jsx)(d.akl, {
                        className: S.gT,
                        importData: P,
                        shouldAnimate: A,
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
