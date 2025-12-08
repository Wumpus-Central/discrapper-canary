n.d(t, { Z: () => p });
var a = n(54381);
n(473749);
var l = n(120356),
    r = n.n(l),
    i = n(481060),
    s = n(320161),
    o = n(572004),
    c = n(51144),
    d = n(785717),
    u = n(388032),
    m = n(508929);
function p(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, d.KZ)();
    return o.wS
        ? (0, a.jsx)(s.Z, {
              text: u.intl.string(u.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: c.ZP.getUserTag(t, {
                  decoration: "never",
                  identifiable: "always",
              }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) => {
                  var t, l;
                  return (0, a.jsx)(
                      i.P3F,
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
                              className: r()(m.copyButton, { [m.visible]: n }),
                              "aria-label": u.intl.string(u.t.y5MwJy),
                              children: (0, a.jsx)(i.TIy, {
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
