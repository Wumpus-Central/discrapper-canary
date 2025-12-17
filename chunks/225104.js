n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(518738),
    l = n(48950),
    a = n(134433);
function o(e) {
    let { guildId: t, role: n, size: o, className: s } = e,
        c = (0, i.p9)({
            guildId: t,
            roleId: n.id,
            size: o,
        });
    return null != c
        ? (0, r.jsx)(
              l.Z,
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
              })({ className: s }, c),
          )
        : (0, r.jsx)(a.Z, {
              color: n.colorString,
              className: s,
              size: o,
          });
}
