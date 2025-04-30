n.d(e, { L: () => s });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(51025),
    o = n(850840),
    a = n(391690);
function s(t, e, s, c, d) {
    let u = a.Z.getInstallationPath(t.id, e),
        p = null != t.eulaId && !o.Z.hasAcceptedEULA(t.eulaId);
    null == u || p
        ? (0, r.ZDy)(async () => {
              let { default: r } = await n.e('48007').then(n.bind(n, 472064));
              return (n) => {
                  var l, o;
                  return (0, i.jsx)(
                      r,
                      ((l = (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var n = null != arguments[e] ? arguments[e] : {},
                                  i = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (t) {
                                          return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                      })
                                  )),
                                  i.forEach(function (e) {
                                      var i;
                                      (i = n[e]),
                                          e in t
                                              ? Object.defineProperty(t, e, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (t[e] = i);
                                  });
                          }
                          return t;
                      })({}, n)),
                      (o = o =
                          {
                              applicationId: t.id,
                              branchId: e,
                              analyticsLocation: d
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                          : (function (t, e) {
                                var n = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(t);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(o)).forEach(function (t) {
                                Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(o, t));
                            }),
                      l)
                  );
              };
          })
        : (0, l.LO)({
              application: t,
              branchId: e,
              buildId: s,
              manifestIds: c,
              installationPath: u,
              analyticsLocation: d
          });
}
