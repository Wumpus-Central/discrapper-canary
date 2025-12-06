n.d(t, { d: () => l });
var a = n(54381);
n(473749);
var i = n(793030),
    r = n(51632);
function l(e) {
    var t;
    let { renderExampleSection: n } = (0, r.D)();
    return null != (t = null == n ? void 0 : n(e))
        ? t
        : (0, a.jsx)(
              o,
              (function (e) {
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
              })({}, e),
          );
}
function o(e) {
    return (0, a.jsx)(i.xvT, {
        variant: "text-md/normal",
        children: e.title,
    });
}
