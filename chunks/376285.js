n.d(t, {
    A: () => p,
});
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(397927),
    s = n(206845),
    o = n(957565),
    c = n(427262),
    d = n(183555),
    u = n(985018),
    m = n(609141);

function p(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, d.NJ)();
    return o.p5
        ? (0, a.jsx)(s.A, {
              text: u.intl.string(u.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: c.Ay.getUserTag(t, {
                  decoration: "never",
                  identifiable: "always",
              }),
              onCopy: () =>
                  l({
                      action: "COPY_USERNAME",
                  }),
              children: (e) => {
                  var t, l;
                  return (0, a.jsx)(
                      r.DUT,
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  a = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (a = a.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  a.forEach(function (t) {
                                      var a;
                                      (a = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: a,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = a);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (l = l =
                          {
                              className: i()(m.c, {
                                  [m.R]: n,
                              }),
                              "aria-label": u.intl.string(u.t.y5MwJy),
                              children: (0, a.jsx)(r.TdU, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, a);
                                }
                                return n;
                            })(Object(l)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                            }),
                      t),
                  );
              },
          })
        : null;
}
