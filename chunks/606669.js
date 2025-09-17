n.d(t, { Z: () => g }), n(290780);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(857595),
    s = n(607070),
    l = n(299363),
    c = n(626135),
    u = n(981631),
    d = n(388032),
    f = n(693450);
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
function p(e) {
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
function m(e, t) {
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
function g() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
            highContrastMode: _,
        } = (0, i.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            useReducedMotion: s.Z.useReducedMotion,
            roleStyle: s.Z.roleStyle,
            highContrastMode: s.Z.isHighContrastModeEnabled,
        })),
        h = (0, i.e7)([s.Z], () => s.Z.displayNameStylesEnabled),
        g = l.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        E = [
            {
                name: d.intl.string(d.t.YEOEi4),
                value: "username",
            },
            {
                name: d.intl.string(d.t.mQaro6),
                value: "dot",
            },
            {
                name: d.intl.string(d.t.Ji2EVF),
                value: "hidden",
            },
        ];
    function b() {
        c.default.track(u.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !h }), (0, o.X2)(!h);
    }
    let y = [
        (0, r.jsx)(
            a.kSQ,
            {
                children: (0, r.jsx)(a.S89, {
                    id: "reduced-motion",
                    label: d.intl.string(d.t.b3XBzs),
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
                    label: d.intl.string(d.t["5PWWCQ"]),
                    control: (t, n) =>
                        (0, r.jsx)(
                            a._wy,
                            m(p({}, t), {
                                ref: n,
                                value: 100 * e,
                                onChange: (e) => (0, o.o2)(e / 100),
                                "aria-label": d.intl.string(d.t["5PWWCQ"]),
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
                    label: d.intl.string(d.t.uSOPWl),
                    children: E.map((e) => {
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
                    label: d.intl.string(f.default["2gFUEx"]),
                    checked: h,
                    action: b,
                }),
            },
            "display-name-styles",
        ),
    ];
    return (
        g &&
            y.unshift(
                (0, r.jsx)(
                    a.kSQ,
                    {
                        children: (0, r.jsx)(a.S89, {
                            id: "high-contrast",
                            label: d.intl.string(d.t.aZlePj),
                            checked: _,
                            action: () => (0, o.vW)(_ ? s.X.DEFAULT : s.X.HIGH),
                        }),
                    },
                    "high-contrast",
                ),
            ),
        y
    );
}
