n.d(t, { Z: () => p });
var a = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    r = n(481060),
    s = n(320161),
    o = n(572004),
    c = n(51144),
    d = n(785717),
    u = n(388032),
    m = n(508929);
function p(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: i } = (0, d.KZ)();
    return o.wS
        ? (0, a.jsx)(s.Z, {
              text: u.intl.string(u.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: c.ZP.getUserTag(t, {
                  decoration: "never",
                  identifiable: "always",
              }),
              onCopy: () => i({ action: "COPY_USERNAME" }),
              children: (e) => {
                  var t, i;
                  return (0, a.jsx)(
                      r.P3F,
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
                      (i = i =
                          {
                              className: l()(m.copyButton, { [m.visible]: n }),
                              "aria-label": u.intl.string(u.t.y5MwJy),
                              children: (0, a.jsx)(r.TIy, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, a);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      t),
                  );
              },
          })
        : null;
}
