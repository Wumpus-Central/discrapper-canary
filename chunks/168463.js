n.d(t, { Z: () => g }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(626135),
    s = n(502762),
    l = n(981631),
    c = n(388032),
    u = n(306349);
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
let h = !1;
function m(e) {
    let { variant: t = "vertical" } = e,
        [d, _] = i.useState(!1),
        m = "vertical" === t,
        g = i.useCallback(() => {
            o.default.track(l.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
                game_detected: !1,
                game_detection_correct: !0,
                application_id: null,
            }),
                _(!0);
        }, []),
        E = i.useCallback(() => {
            o.default.track(l.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
                game_detected: !1,
                game_detection_correct: !1,
                application_id: null,
            }),
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                    return (t) => (0, r.jsx)(e, p(f({}, t), { onSubmitted: () => _(!0) }));
                });
        }, []);
    return (i.useEffect(
        () => () => {
            d && (h = !0);
        },
        [d],
    ),
    d)
        ? (0, r.jsx)(s.Z.Overlay, {
              className: u.container,
              children: (0, r.jsx)("div", {
                  className: m ? u.contentVertical : u.contentHorizontal,
                  children: (0, r.jsx)(a.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: u.description,
                      children: c.intl.string(c.t.X0TrNT),
                  }),
              }),
          })
        : (0, r.jsx)(s.Z.Overlay, {
              className: u.container,
              children: (0, r.jsxs)("div", {
                  className: m ? u.contentVertical : u.contentHorizontal,
                  children: [
                      (0, r.jsx)(a.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: u.description,
                          children: c.intl.string(c.t.bHpUcX),
                      }),
                      (0, r.jsxs)("div", {
                          className: m ? u.buttonsVertical : u.buttonsHorizontal,
                          children: [
                              (0, r.jsx)(a.zxk, {
                                  text: c.intl.string(c.t.p89ACg),
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: g,
                                  fullWidth: !0,
                              }),
                              (0, r.jsx)(a.zxk, {
                                  text: c.intl.string(c.t.gm1Ven),
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: E,
                                  fullWidth: !0,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
function g(e) {
    let { variant: t } = e;
    return h ? null : (0, r.jsx)(m, { variant: t });
}
