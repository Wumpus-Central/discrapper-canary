n.d(t, { Z: () => p }), n(290780);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(857595),
    s = n(607070),
    l = n(299363),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
            highContrastMode: u,
        } = (0, i.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            useReducedMotion: s.Z.useReducedMotion,
            roleStyle: s.Z.roleStyle,
            highContrastMode: s.Z.isHighContrastModeEnabled,
        })),
        f = l.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        p = [
            {
                name: c.intl.string(c.t.YEOEi4),
                value: "username",
            },
            {
                name: c.intl.string(c.t.mQaro6),
                value: "dot",
            },
            {
                name: c.intl.string(c.t.Ji2EVF),
                value: "hidden",
            },
        ],
        h = [
            (0, r.jsx)(
                o.kSQ,
                {
                    children: (0, r.jsx)(o.S89, {
                        id: "reduced-motion",
                        label: c.intl.string(c.t.b3XBzs),
                        checked: t,
                        action: () => (0, a.Zt)(t ? "no-preference" : "reduce"),
                    }),
                },
                "reduced-motion",
            ),
            (0, r.jsx)(
                o.kSQ,
                {
                    children: (0, r.jsx)(o.II_, {
                        id: "input",
                        label: c.intl.string(c.t["5PWWCQ"]),
                        control: (t, n) =>
                            (0, r.jsx)(
                                o._wy,
                                _(d({}, t), {
                                    ref: n,
                                    value: 100 * e,
                                    onChange: (e) => (0, a.o2)(e / 100),
                                    "aria-label": c.intl.string(c.t["5PWWCQ"]),
                                }),
                            ),
                    }),
                },
                "input",
            ),
            (0, r.jsx)(
                o.kSQ,
                {
                    children: (0, r.jsx)(o.sNh, {
                        id: "role-colors",
                        label: c.intl.string(c.t.uSOPWl),
                        children: p.map((e) => {
                            let { name: t, value: i } = e;
                            return (0, r.jsx)(
                                o.k5B,
                                {
                                    id: i,
                                    group: "role-colors",
                                    checked: i === n,
                                    label: t,
                                    action: () => (0, a.u1)(i),
                                },
                                i,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
        ];
    return (
        f &&
            h.unshift(
                (0, r.jsx)(
                    o.kSQ,
                    {
                        children: (0, r.jsx)(o.S89, {
                            id: "high-contrast",
                            label: "Enable High Contrast Mode",
                            checked: u,
                            action: () => (0, a.vW)(u ? s.X.DEFAULT : s.X.HIGH),
                        }),
                    },
                    "high-contrast",
                ),
            ),
        h
    );
}
