n.d(t, { n: () => s });
var r = n(192379);
let l = {
        [n(180650).T.AESPA]: {
            responsive: !0,
            backgroundStyle: 'linear-gradient(0deg,rgba(40, 8, 120, 1) 0%,rgba(13, 8, 111, 1) 15%,rgba(11, 2, 60, 1) 50%,rgba(6, 1, 21, 1) 100%)'
        }
    },
    a = {
        responsive: !1,
        backgroundStyle: void 0
    },
    s = (e) =>
        (0, r.useMemo)(() => {
            let t = null != e ? l[e] : null;
            return null != t
                ? (function (e) {
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
                  })({}, a, t)
                : a;
        }, [e]);
