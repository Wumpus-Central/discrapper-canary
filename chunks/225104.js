n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(866442),
    l = n(91218),
    a = n(518738),
    o = n(134433),
    s = n(981631);
function c(e) {
    var t;
    let { guildId: n, role: c, size: u, className: d } = e,
        p = (0, a.p9)({
            guildId: n,
            roleId: c.id,
            size: u
        });
    return null != p
        ? (0, r.jsx)(
              l.Z,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              })
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({ className: d }, p)
          )
        : (0, r.jsx)(o.Z, {
              color: null != (t = c.colorString) ? t : (0, i.Rf)(s.p6O),
              className: d,
              size: u
          });
}
