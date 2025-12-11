n.d(e, { I: () => S });
var i = n(54381);
n(473749);
var l = n(442837),
    s = n(481060),
    r = n(401430),
    u = n(509613),
    a = n(695103),
    o = n(695346),
    c = n(313789),
    d = n(399970),
    g = n(388032);
let S = (0, u.qs)(c.n.ADVANCED_APPLICATION_TEST_MODE, {
    useTitle: () => g.intl.string(g.t.erOqlh),
    useSubtitle: () => g.intl.string(g.t["52hMnD"]),
    usePredicate: o.Sb.useSetting,
    useValue: () => (0, l.e7)([a.Z], () => null != a.Z.testModeApplicationId),
    setValue: (t) => {
        t
            ? (0, s.h7j)((t) =>
                  (0, i.jsx)(
                      d.Z,
                      (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var n = null != arguments[e] ? arguments[e] : {},
                                  i = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (t) {
                                          return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                      }),
                                  )),
                                  i.forEach(function (e) {
                                      var i;
                                      (i = n[e]),
                                          e in t
                                              ? Object.defineProperty(t, e, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (t[e] = i);
                                  });
                          }
                          return t;
                      })({}, t),
                  ),
              )
            : r.mc();
    },
});
