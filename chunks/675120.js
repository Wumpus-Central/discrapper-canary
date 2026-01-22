n.d(t, { v: () => r });
var a = n(627968);
n(64700);
var l = n(732955),
    i = n(542242);
let r = (e) => {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: i.q,
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(l.e2v, {
                      className: i.G,
                      justify: "end",
                      children: t.map((e, t) =>
                          (0, a.jsx)(
                              l.$nd,
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
