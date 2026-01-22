i.d(e, {
    A: () => E,
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(271866),
    u = i(419954),
    a = i(147964),
    o = i(253932),
    T = i(780964),
    A = i(912615),
    S = i(985018);
let E = (0, u.zD)(T.X.ADVANCED_APPLICATION_TEST_MODE, {
    useTitle: () => S.intl.string(S.t.erOqlh),
    useSubtitle: () => S.intl.string(S.t["52hMnD"]),
    usePredicate: o.Q_.useSetting,
    useValue: () => (0, l.bG)([a.A], () => null != a.A.testModeApplicationId),
    setValue: (t) => {
        t
            ? (0, s.qfG)((t) =>
                  (0, n.jsx)(
                      A.A,
                      (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var i = null != arguments[e] ? arguments[e] : {},
                                  n = Object.keys(i);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(i).filter(function (t) {
                                          return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (e) {
                                      var n;
                                      (n = i[e]),
                                          e in t
                                              ? Object.defineProperty(t, e, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (t[e] = n);
                                  });
                          }
                          return t;
                      })({}, t),
                  ),
              )
            : r.cL();
    },
});
