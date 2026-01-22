n.d(t, { S: () => a });
var l = n(627968);
n(64700);
var r = n(158954),
    i = n(626586);
function a(e) {
    var t;
    let { renderExampleSection: n } = (0, i.L)();
    return null != (t = null == n ? void 0 : n(e))
        ? t
        : (0, l.jsx)(
              s,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          l = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (l = l.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          l.forEach(function (t) {
                              var l;
                              (l = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: l,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = l);
                          });
                  }
                  return e;
              })({}, e),
          );
}
function s(e) {
    return (0, l.jsx)(r.EYj, {
        variant: "text-md/normal",
        children: e.title,
    });
}
