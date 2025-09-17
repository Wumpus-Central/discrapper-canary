n.d(t, { n: () => o });
var r = n(647438),
    i = n(180650);
let l = {
        [i.T.AESPA]: {
            responsive: !0,
            backgroundStyle:
                "linear-gradient(0deg,rgba(40, 8, 120, 1) 0%,rgba(13, 8, 111, 1) 15%,rgba(11, 2, 60, 1) 50%,rgba(6, 1, 21, 1) 100%)",
        },
        [i.T.ORB]: {
            responsive: !0,
            backgroundStyle: "linear-gradient(180deg, rgba(39, 30, 173, 0.3), transparent)",
        },
    },
    a = {
        responsive: void 0,
        backgroundStyle: void 0,
    },
    o = (e) =>
        (0, r.useMemo)(() => {
            let t = null != e ? l[e] : null;
            return null != t
                ? (function (e) {
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
                  })({}, a, t)
                : a;
        }, [e]);
