n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(894903);
let c = (e) => {
    let {
            node: { info: t },
        } = e,
        n = l.useMemo(() => {
            var e, t;
            return a.Z.reactParserFor(
                ((e = (function (e) {
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
                })({}, a.Z.defaultRules)),
                (t = t = { link: s.s }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            );
        }, []);
    return null == t
        ? null
        : (0, r.jsx)(i.Wn, {
              className: o.infoBox,
              messageType: i.QYI.INFO,
              children: n(t),
          });
};
