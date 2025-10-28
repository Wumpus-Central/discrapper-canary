n.d(t, { Z: () => h }), n(290780), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    o = n(481060),
    l = n(857595),
    s = n(607070),
    c = n(299363),
    a = n(877371),
    u = n(626135),
    d = n(981631),
    p = n(388032),
    b = n(352609);
function h() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
            highContrastMode: h,
            switchIconsEnabled: j,
        } = (0, i.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            useReducedMotion: s.Z.useReducedMotion,
            roleStyle: s.Z.roleStyle,
            highContrastMode: s.Z.isHighContrastModeEnabled,
            switchIconsEnabled: s.Z.isSwitchIconsEnabled,
        })),
        y = (0, i.e7)([s.Z], () => s.Z.displayNameStylesEnabled),
        m = c.U.useExperiment({ location: "useAccessibilityItems" }, { autoTrackExposure: !0 }).enabled,
        g = (0, a.A)("useAccessibilityItems"),
        f = [
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
        ],
        O = [
            (0, r.jsx)(
                o.kSQ,
                {
                    children: (0, r.jsx)(o.S89, {
                        id: "reduced-motion",
                        label: p.intl.string(p.t.b3XBzg),
                        checked: t,
                        action: () => (0, l.Zt)(t ? "no-preference" : "reduce"),
                    }),
                },
                "reduced-motion",
            ),
            (0, r.jsx)(
                o.kSQ,
                {
                    children: (0, r.jsx)(o.II_, {
                        id: "input",
                        label: p.intl.string(p.t["5PWWCY"]),
                        control: (t, n) => {
                            var i, s;
                            return (0, r.jsx)(
                                o._wy,
                                ((i = (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, t)),
                                (s = s =
                                    {
                                        ref: n,
                                        value: 100 * e,
                                        onChange: (e) => (0, l.o2)(e / 100),
                                        "aria-label": p.intl.string(p.t["5PWWCY"]),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(s)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                      }),
                                i),
                            );
                        },
                    }),
                },
                "input",
            ),
            (0, r.jsx)(
                o.kSQ,
                {
                    children: (0, r.jsx)(o.sNh, {
                        id: "role-colors",
                        label: p.intl.string(p.t.uSOPWm),
                        children: f.map((e) => {
                            let { name: t, value: i } = e;
                            return (0, r.jsx)(
                                o.k5B,
                                {
                                    id: i,
                                    group: "role-colors",
                                    checked: i === n,
                                    label: t,
                                    action: () => (0, l.u1)(i),
                                },
                                i,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, r.jsx)(
                o.kSQ,
                {
                    children: (0, r.jsx)(o.S89, {
                        id: "display-name-styles",
                        label: p.intl.string(b.default["2gFUEw"]),
                        checked: y,
                        action: function () {
                            u.default.track(d.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !y }),
                                (0, l.X2)(!y);
                        },
                    }),
                },
                "display-name-styles",
            ),
        ];
    return (
        m &&
            O.unshift(
                (0, r.jsx)(
                    o.kSQ,
                    {
                        children: (0, r.jsx)(o.S89, {
                            id: "high-contrast",
                            label: p.intl.string(p.t.aZlePv),
                            checked: h,
                            action: () => (0, l.vW)(h ? s.X.DEFAULT : s.X.HIGH),
                        }),
                    },
                    "high-contrast",
                ),
            ),
        g &&
            O.push(
                (0, r.jsx)(
                    o.kSQ,
                    {
                        children: (0, r.jsx)(o.S89, {
                            id: "switch-icons",
                            label: p.intl.string(p.t["S3z+pV"]),
                            checked: j,
                            action: () => (0, l.ky)(!j),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        O
    );
}
