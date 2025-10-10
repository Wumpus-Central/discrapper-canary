n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(626135),
    s = n(483517),
    l = n(981631),
    c = n(388032),
    u = n(571818);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = new Set();
function m(e) {
    var t;
    let { activity: d, variant: _ = "vertical" } = e,
        [m, g] = i.useState(!1),
        E = "vertical" === _,
        b = i.useCallback(
            (e) => {
                var t, n;
                e.stopPropagation(),
                    o.default.track(l.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
                        game_detected: !0,
                        game_detection_correct: !0,
                        application_id: null != (t = d.application_id) ? t : null,
                    }),
                    (null != d.application_id || "" !== d.name) && h.add(null != (n = d.application_id) ? n : d.name),
                    g(!0);
            },
            [d.application_id, d.name],
        ),
        y = i.useCallback(
            (e) => {
                var t;
                e.stopPropagation(),
                    o.default.track(l.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
                        game_detected: !0,
                        game_detection_correct: !1,
                        application_id: null != (t = d.application_id) ? t : null,
                    }),
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                p(f({}, t), {
                                    detectedActivity: d,
                                    onSubmitted: () => {
                                        if (null != d.application_id || "" !== d.name) {
                                            var e;
                                            h.add(null != (e = d.application_id) ? e : d.name);
                                        }
                                        g(!0);
                                    },
                                }),
                            );
                    });
            },
            [d],
        );
    return m
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {}),
                  (0, r.jsx)("div", {
                      className: u.container,
                      children: (0, r.jsx)(a.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: u.thankYouText,
                          children: c.intl.string(c.t.X0TrNT),
                      }),
                  }),
              ],
          })
        : h.has(null != (t = d.application_id) ? t : d.name)
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.Z, {}),
                    (0, r.jsx)("div", {
                        className: u.container,
                        children: (0, r.jsxs)("div", {
                            className: E ? u.contentVertical : u.contentHorizontal,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: u.prompt,
                                    children: c.intl.string(c.t["9g7v6e"]),
                                }),
                                (0, r.jsxs)("div", {
                                    className: E ? u.buttonsVertical : u.buttonsHorizontal,
                                    children: [
                                        (0, r.jsx)(a.zxk, {
                                            text: c.intl.string(c.t.p89ACg),
                                            size: "sm",
                                            variant: "secondary",
                                            onClick: b,
                                            fullWidth: E,
                                        }),
                                        (0, r.jsx)(a.zxk, {
                                            text: c.intl.string(c.t.gm1Ven),
                                            size: "sm",
                                            variant: "secondary",
                                            onClick: y,
                                            fullWidth: E,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            });
}
