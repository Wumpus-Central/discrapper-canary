n.d(t, { Z: () => b }), n(539854);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(857595),
    s = n(607070),
    l = n(651123),
    c = n(877371),
    u = n(626135),
    d = n(740492),
    f = n(981631),
    p = n(388032),
    _ = n(143525);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
            highContrastMode: m,
            switchIconsEnabled: g,
        } = (0, i.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            useReducedMotion: s.Z.useReducedMotion,
            roleStyle: s.Z.roleStyle,
            highContrastMode: s.Z.isHighContrastModeEnabled,
            switchIconsEnabled: s.Z.isSwitchIconsEnabled,
        })),
        b = (0, i.e7)([s.Z], () => s.Z.displayNameStylesEnabled),
        y = (0, c.A)("useAccessibilityItems"),
        O = (0, i.e7)([d.ZP], () => d.ZP.hdrDynamicRange),
        v = (0, l.z)("useAccessibilityItems"),
        S = [
            {
                name: p.intl.string(p.t.D5Fma9),
                value: "no-limit",
            },
            {
                name: p.intl.string(p.t.ldcGIH),
                value: "standard",
            },
        ],
        I = [
            {
                name: p.intl.string(p.t.YEOEi6),
                value: "username",
            },
            {
                name: p.intl.string(p.t.mQaro3),
                value: "dot",
            },
            {
                name: p.intl.string(p.t.Ji2EVJ),
                value: "hidden",
            },
        ];
    function T() {
        u.default.track(f.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !b }), (0, o.X2)(!b);
    }
    let C = [
        (0, r.jsx)(
            a.kSQ,
            {
                children: (0, r.jsx)(a.S89, {
                    id: "reduced-motion",
                    label: p.intl.string(p.t.b3XBzg),
                    checked: t,
                    action: () => (0, o.Zt)(t ? "no-preference" : "reduce"),
                }),
            },
            "reduced-motion",
        ),
        (0, r.jsx)(
            a.kSQ,
            {
                children: (0, r.jsx)(a.S89, {
                    id: "high-contrast",
                    label: p.intl.string(p.t.aZlePv),
                    checked: m,
                    action: () => (0, o.vW)(m ? s.X.DEFAULT : s.X.HIGH),
                }),
            },
            "high-contrast",
        ),
        (0, r.jsx)(
            a.kSQ,
            {
                children: (0, r.jsx)(a.II_, {
                    id: "input",
                    label: p.intl.string(p.t["5PWWCY"]),
                    control: (t, n) =>
                        (0, r.jsx)(
                            a._wy,
                            E(h({}, t), {
                                ref: n,
                                value: 100 * e,
                                onChange: (e) => (0, o.o2)(e / 100),
                                "aria-label": p.intl.string(p.t["5PWWCY"]),
                            }),
                        ),
                }),
            },
            "input",
        ),
    ];
    return (
        v &&
            C.push(
                (0, r.jsx)(
                    a.kSQ,
                    {
                        children: (0, r.jsx)(a.sNh, {
                            id: "hdr-dynamic-range",
                            label: p.intl.string(p.t.nemtgW),
                            children: S.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, r.jsx)(
                                    a.k5B,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === O,
                                        label: t,
                                        action: () => (0, o.zH)(n),
                                    },
                                    n,
                                );
                            }),
                        }),
                    },
                    "hdr-dynamic-range",
                ),
            ),
        C.push(
            (0, r.jsx)(
                a.kSQ,
                {
                    children: (0, r.jsx)(a.sNh, {
                        id: "role-colors",
                        label: p.intl.string(p.t.uSOPWm),
                        children: I.map((e) => {
                            let { name: t, value: i } = e;
                            return (0, r.jsx)(
                                a.k5B,
                                {
                                    id: i,
                                    group: "role-colors",
                                    checked: i === n,
                                    label: t,
                                    action: () => (0, o.u1)(i),
                                },
                                i,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, r.jsx)(
                a.kSQ,
                {
                    children: (0, r.jsx)(a.S89, {
                        id: "display-name-styles",
                        label: p.intl.string(_.default["2gFUEw"]),
                        checked: b,
                        action: T,
                    }),
                },
                "display-name-styles",
            ),
        ),
        y &&
            C.push(
                (0, r.jsx)(
                    a.kSQ,
                    {
                        children: (0, r.jsx)(a.S89, {
                            id: "switch-icons",
                            label: p.intl.string(p.t["S3z+pV"]),
                            checked: g,
                            action: () => (0, o.ky)(!g),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        C
    );
}
