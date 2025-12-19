n.d(t, { A: () => l });
var a = n(54381);
n(473749);
var r = n(159691),
    i = n(725108);
let l = (e) => {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: i.footer,
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(r.hE2, {
                      className: i.buttonGroup,
                      justify: "end",
                      children: t.map((e, t) =>
                          (0, a.jsx)(
                              r.zxk,
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
                              t,
                          ),
                      ),
                  }),
              ],
          });
};
