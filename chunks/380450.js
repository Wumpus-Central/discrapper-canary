n.d(t, { A: () => b }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(955572),
    o = n(775602),
    l = n(406360),
    c = n(614738),
    u = n(954571),
    d = n(964404),
    f = n(652215),
    p = n(985018),
    _ = n(927961);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
            highContrastMode: h,
            switchIconsEnabled: g,
        } = (0, i.cf)([o.A], () => ({
            saturation: o.A.saturation,
            useReducedMotion: o.A.useReducedMotion,
            roleStyle: o.A.roleStyle,
            highContrastMode: o.A.isHighContrastModeEnabled,
            switchIconsEnabled: o.A.isSwitchIconsEnabled,
        })),
        b = (0, i.bG)([o.A], () => o.A.displayNameStylesEnabled),
        y = (0, c.y)("useAccessibilityItems"),
        O = (0, i.bG)([d.Ay], () => d.Ay.hdrDynamicRange),
        A = (0, l.i)("useAccessibilityItems"),
        v = [
            {
                name: p.intl.string(p.t.D5Fma9),
                value: "no-limit",
            },
            {
                name: p.intl.string(p.t.ldcGIH),
                value: "standard",
            },
        ],
        S = [
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
    function I() {
        u.default.track(f.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !b }), (0, s.Dm)(!b);
    }
    let T = [
        (0, r.jsx)(
            a.rXV,
            {
                children: (0, r.jsx)(a.sLh, {
                    id: "reduced-motion",
                    label: p.intl.string(p.t.b3XBzg),
                    checked: t,
                    action: () => (0, s.qz)(t ? "no-preference" : "reduce"),
                }),
            },
            "reduced-motion",
        ),
        (0, r.jsx)(
            a.rXV,
            {
                children: (0, r.jsx)(a.sLh, {
                    id: "high-contrast",
                    label: p.intl.string(p.t.aZlePv),
                    checked: h,
                    action: () => (0, s.uh)(h ? o._.DEFAULT : o._.HIGH),
                }),
            },
            "high-contrast",
        ),
        (0, r.jsx)(
            a.rXV,
            {
                children: (0, r.jsx)(a.aK1, {
                    id: "input",
                    label: p.intl.string(p.t["5PWWCY"]),
                    control: (t, n) =>
                        (0, r.jsx)(
                            a.i42,
                            E(m({}, t), {
                                ref: n,
                                value: 100 * e,
                                onChange: (e) => (0, s.HU)(e / 100),
                                "aria-label": p.intl.string(p.t["5PWWCY"]),
                            }),
                        ),
                }),
            },
            "input",
        ),
    ];
    return (
        A &&
            T.push(
                (0, r.jsx)(
                    a.rXV,
                    {
                        children: (0, r.jsx)(a.Drp, {
                            id: "hdr-dynamic-range",
                            label: p.intl.string(p.t.nemtgW),
                            children: v.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, r.jsx)(
                                    a.iDA,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === O,
                                        label: t,
                                        action: () => (0, s.FU)(n),
                                    },
                                    n,
                                );
                            }),
                        }),
                    },
                    "hdr-dynamic-range",
                ),
            ),
        T.push(
            (0, r.jsx)(
                a.rXV,
                {
                    children: (0, r.jsx)(a.Drp, {
                        id: "role-colors",
                        label: p.intl.string(p.t.uSOPWm),
                        children: S.map((e) => {
                            let { name: t, value: i } = e;
                            return (0, r.jsx)(
                                a.iDA,
                                {
                                    id: i,
                                    group: "role-colors",
                                    checked: i === n,
                                    label: t,
                                    action: () => (0, s.IX)(i),
                                },
                                i,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, r.jsx)(
                a.rXV,
                {
                    children: (0, r.jsx)(a.sLh, {
                        id: "display-name-styles",
                        label: p.intl.string(_.default["2gFUEw"]),
                        checked: b,
                        action: I,
                    }),
                },
                "display-name-styles",
            ),
        ),
        y &&
            T.push(
                (0, r.jsx)(
                    a.rXV,
                    {
                        children: (0, r.jsx)(a.sLh, {
                            id: "switch-icons",
                            label: p.intl.string(p.t["S3z+pV"]),
                            checked: g,
                            action: () => (0, s.Gm)(!g),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        T
    );
}
