n.d(e, { Z: () => o });
var i = n(442837),
    r = n(435064),
    l = n(39604),
    s = n(509613),
    u = n(313789),
    a = n(388032);
let o = (0, s.qs)(u.n.CLIPS_ENABLE_GAME_SIGNALS, {
    useTitle: () => a.intl.string(a.t.iV6KcI),
    useSubtitle: () => a.intl.string(a.t["dJ2tX+"]),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getSettings().clipSignals.enableGameSignals),
    setValue: (t) => {
        var e, n;
        let i = r.Z.getSettings().clipSignals;
        l.Rr(
            ((e = (function (t) {
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
            })({}, i)),
            (n = n = { enableGameSignals: t }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : (function (t, e) {
                      var n = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(t);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  }),
            e),
        );
    },
});
