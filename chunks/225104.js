t.d(r, { Z: () => c });
var n = t(200651);
t(192379);
var i = t(866442),
    l = t(91218),
    o = t(518738),
    a = t(134433),
    s = t(981631);
function c(e) {
    var r;
    let { guildId: t, role: c, size: d, className: u } = e,
        f = (0, o.p9)({
            guildId: t,
            roleId: c.id,
            size: d
        });
    return null != f
        ? (0, n.jsx)(
              l.Z,
              (function (e) {
                  for (var r = 1; r < arguments.length; r++) {
                      var t = null != arguments[r] ? arguments[r] : {},
                          n = Object.keys(t);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                              })
                          )),
                          n.forEach(function (r) {
                              var n;
                              (n = t[r]),
                                  r in e
                                      ? Object.defineProperty(e, r, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[r] = n);
                          });
                  }
                  return e;
              })({ className: u }, f)
          )
        : (0, n.jsx)(a.Z, {
              color: null != (r = c.colorString) ? r : (0, i.Rf)(s.p6O),
              className: u,
              size: d
          });
}
