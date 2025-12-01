n.d(t, { Z: () => E }), n(290780), n(539854);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(857595),
    s = n(607070),
    l = n(299363),
    c = n(877371),
    u = n(626135),
    d = n(981631),
    f = n(388032),
    p = n(677065);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
            highContrastMode: _,
            switchIconsEnabled: h,
        } = (0, i.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            useReducedMotion: s.Z.useReducedMotion,
            roleStyle: s.Z.roleStyle,
            highContrastMode: s.Z.isHighContrastModeEnabled,
            switchIconsEnabled: s.Z.isSwitchIconsEnabled,
        })),
        E = (0, i.e7)([s.Z], () => s.Z.displayNameStylesEnabled),
        b = l.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        y = (0, c.A)("useAccessibilityItems"),
        O = [
            {
                name: f.intl.string(f.t.YEOEi6),
                value: "username",
            },
            {
                name: f.intl.string(f.t.mQaro3),
                value: "dot",
            },
            {
                name: f.intl.string(f.t.Ji2EVJ),
                value: "hidden",
            },
        ];
    function v() {
        u.default.track(d.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !E }), (0, o.X2)(!E);
    }
    let S = [
        (0, r.jsx)(
            a.kSQ,
            {
                children: (0, r.jsx)(a.S89, {
                    id: "reduced-motion",
                    label: f.intl.string(f.t.b3XBzg),
                    checked: t,
                    action: () => (0, o.Zt)(t ? "no-preference" : "reduce"),
                }),
            },
            "reduced-motion",
        ),
        (0, r.jsx)(
            a.kSQ,
            {
                children: (0, r.jsx)(a.II_, {
                    id: "input",
                    label: f.intl.string(f.t["5PWWCY"]),
                    control: (t, n) =>
                        (0, r.jsx)(
                            a._wy,
                            g(m({}, t), {
                                ref: n,
                                value: 100 * e,
                                onChange: (e) => (0, o.o2)(e / 100),
                                "aria-label": f.intl.string(f.t["5PWWCY"]),
                            }),
                        ),
                }),
            },
            "input",
        ),
        (0, r.jsx)(
            a.kSQ,
            {
                children: (0, r.jsx)(a.sNh, {
                    id: "role-colors",
                    label: f.intl.string(f.t.uSOPWm),
                    children: O.map((e) => {
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
                    label: f.intl.string(p.default["2gFUEw"]),
                    checked: E,
                    action: v,
                }),
            },
            "display-name-styles",
        ),
    ];
    return (
        b &&
            S.unshift(
                (0, r.jsx)(
                    a.kSQ,
                    {
                        children: (0, r.jsx)(a.S89, {
                            id: "high-contrast",
                            label: f.intl.string(f.t.aZlePv),
                            checked: _,
                            action: () => (0, o.vW)(_ ? s.X.DEFAULT : s.X.HIGH),
                        }),
                    },
                    "high-contrast",
                ),
            ),
        y &&
            S.push(
                (0, r.jsx)(
                    a.kSQ,
                    {
                        children: (0, r.jsx)(a.S89, {
                            id: "switch-icons",
                            label: f.intl.string(f.t["S3z+pV"]),
                            checked: h,
                            action: () => (0, o.ky)(!h),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        S
    );
}
