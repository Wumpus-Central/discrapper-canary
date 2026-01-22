n.d(t, {
    z: () => s,
});
var r = n(397927),
    i = n(587895),
    l = n(626584),
    a = n(92077);

function s(e, t, s) {
    var o;
    let c;
    (o = () => (0, a.NQ)(e, t, s)),
        null == (c = i.A.getApplication(e))
            ? new l.A("DispatchUninstallActionCreators").log("Application not found for game ".concat(e))
            : (0, r.mMO)(async () => {
                  let { default: e } = await n.e("60745").then(n.bind(n, 831120));
                  return (t) =>
                      e(
                          (function (e) {
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
                          })(
                              {
                                  game: c,
                                  onConfirmUninstall: o,
                              },
                              t,
                          ),
                      );
              });
}
