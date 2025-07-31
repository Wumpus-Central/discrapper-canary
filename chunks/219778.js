r.d(n, { n: () => u });
var l = r(73800),
    t = r(180650);
let o = {
        [t.T.AESPA]: {
            responsive: !0,
            backgroundStyle: 'linear-gradient(0deg,rgba(40, 8, 120, 1) 0%,rgba(13, 8, 111, 1) 15%,rgba(11, 2, 60, 1) 50%,rgba(6, 1, 21, 1) 100%)'
        },
        [t.T.ORB]: {
            responsive: !0,
            backgroundStyle: 'linear-gradient(180deg, rgba(39, 30, 173, 0.3), transparent)',
            hideSideShadow: !0
        }
    },
    a =
        12633 == r.j
            ? {
                  responsive: void 0,
                  backgroundStyle: void 0,
                  hideSideShadow: !1
              }
            : null,
    u = (e) =>
        (0, l.useMemo)(() => {
            let n = null != e ? o[e] : null;
            return null != n
                ? (function (e) {
                      for (var n = 1; n < arguments.length; n++) {
                          var r = null != arguments[n] ? arguments[n] : {},
                              l = Object.keys(r);
                          ('function' == typeof Object.getOwnPropertySymbols &&
                              (l = l.concat(
                                  Object.getOwnPropertySymbols(r).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                  })
                              )),
                              l.forEach(function (n) {
                                  var l;
                                  ((l = r[n]),
                                      n in e
                                          ? Object.defineProperty(e, n, {
                                                value: l,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            })
                                          : (e[n] = l));
                              }));
                      }
                      return e;
                  })({}, a, n)
                : a;
        }, [e]);
