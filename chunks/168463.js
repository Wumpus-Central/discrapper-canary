n.d(t, { Z: () => E }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(626135),
    l = n(502762),
    c = n(981631),
    u = n(388032),
    d = n(982629);
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
let m = !1;
function g(e) {
    let { variant: t = "vertical" } = e,
        [f, p] = i.useState(!1),
        g = "vertical" === t,
        E = i.useCallback(() => {
            s.default.track(c.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
                game_detected: !1,
                game_detection_correct: !0,
                application_id: null,
            }),
                p(!0);
        }, []),
        b = i.useCallback(() => {
            s.default.track(c.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
                game_detected: !1,
                game_detection_correct: !1,
                application_id: null,
            }),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                    return (t) => (0, r.jsx)(e, h(_({}, t), { onSubmitted: () => p(!0) }));
                });
        }, []);
    return (i.useEffect(
        () => () => {
            f && (m = !0);
        },
        [f],
    ),
    f)
        ? (0, r.jsx)(l.Z.Overlay, {
              className: d.container,
              children: (0, r.jsx)("div", {
                  className: g ? d.contentVertical : d.contentHorizontal,
                  children: (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: u.intl.string(u.t.X0TrNT),
                  }),
              }),
          })
        : (0, r.jsx)(l.Z.Overlay, {
              className: d.container,
              children: (0, r.jsxs)("div", {
                  className: g ? d.contentVertical : d.contentHorizontal,
                  children: [
                      (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: d.description,
                          children: u.intl.string(u.t.bHpUcX),
                      }),
                      (0, r.jsxs)("div", {
                          className: g ? d.buttonsVertical : d.buttonsHorizontal,
                          children: [
                              (0, r.jsx)(a.zx, {
                                  size: a.zx.Sizes.SMALL,
                                  look: a.zx.Looks.FILLED,
                                  color: a.zx.Colors.PRIMARY,
                                  onClick: E,
                                  className: g ? d.buttonVertical : d.buttonHorizontal,
                                  children: u.intl.string(u.t.p89ACg),
                              }),
                              (0, r.jsx)(a.zx, {
                                  size: a.zx.Sizes.SMALL,
                                  look: a.zx.Looks.FILLED,
                                  color: a.zx.Colors.PRIMARY,
                                  onClick: b,
                                  className: g ? d.buttonVertical : d.buttonHorizontal,
                                  children: u.intl.string(u.t.gm1Ven),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
function E(e) {
    let { variant: t } = e;
    return m ? null : (0, r.jsx)(g, { variant: t });
}
