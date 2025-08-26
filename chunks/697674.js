n.d(t, { A: () => l });
var r = n(951288);
n(647438);
var i = n(159691),
    a = n(277923);
let l = (e) => {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, r.jsxs)("footer", {
              className: a.footer,
              children: [
                  null != n && (0, r.jsx)("div", { children: n }),
                  (0, r.jsx)(i.hE, {
                      className: a.buttonGroup,
                      justify: "end",
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              i.zx,
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
                              })({}, e),
                              t,
                          ),
                      ),
                  }),
              ],
          });
};
