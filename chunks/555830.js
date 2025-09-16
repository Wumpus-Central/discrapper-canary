n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(626135),
    l = n(483517),
    c = n(981631),
    u = n(388032),
    d = n(571818);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = new Set();
function g(e) {
    var t;
    let { activity: f, variant: p = "vertical" } = e,
        [g, E] = i.useState(!1),
        b = "vertical" === p,
        y = i.useCallback(
            (e) => {
                var t, n;
                e.stopPropagation(),
                    s.default.track(c.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
                        game_detected: !0,
                        game_detection_correct: !0,
                        application_id: null != (t = f.application_id) ? t : null,
                    }),
                    (null != f.application_id || "" !== f.name) && m.add(null != (n = f.application_id) ? n : f.name),
                    E(!0);
            },
            [f.application_id, f.name],
        ),
        O = i.useCallback(
            (e) => {
                var t;
                e.stopPropagation(),
                    s.default.track(c.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
                        game_detected: !0,
                        game_detection_correct: !1,
                        application_id: null != (t = f.application_id) ? t : null,
                    }),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                h(_({}, t), {
                                    detectedActivity: f,
                                    onSubmitted: () => {
                                        if (null != f.application_id || "" !== f.name) {
                                            var e;
                                            m.add(null != (e = f.application_id) ? e : f.name);
                                        }
                                        E(!0);
                                    },
                                }),
                            );
                    });
            },
            [f],
        );
    return g
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.Z, {}),
                  (0, r.jsx)("div", {
                      className: d.container,
                      children: (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: d.thankYouText,
                          children: u.intl.string(u.t.X0TrNT),
                      }),
                  }),
              ],
          })
        : m.has(null != (t = f.application_id) ? t : f.name)
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Z, {}),
                    (0, r.jsx)("div", {
                        className: d.container,
                        children: (0, r.jsxs)("div", {
                            className: b ? d.contentVertical : d.contentHorizontal,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: d.prompt,
                                    children: u.intl.string(u.t["9g7v6e"]),
                                }),
                                (0, r.jsxs)("div", {
                                    className: b ? d.buttonsVertical : d.buttonsHorizontal,
                                    children: [
                                        (0, r.jsx)(a.zx, {
                                            size: a.zx.Sizes.SMALL,
                                            look: a.zx.Looks.FILLED,
                                            color: a.zx.Colors.PRIMARY,
                                            onClick: y,
                                            className: b ? d.buttonVertical : d.buttonHorizontal,
                                            children: u.intl.string(u.t.p89ACg),
                                        }),
                                        (0, r.jsx)(a.zx, {
                                            size: a.zx.Sizes.SMALL,
                                            look: a.zx.Looks.FILLED,
                                            color: a.zx.Colors.PRIMARY,
                                            onClick: O,
                                            className: b ? d.buttonVertical : d.buttonHorizontal,
                                            children: u.intl.string(u.t.gm1Ven),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            });
}
