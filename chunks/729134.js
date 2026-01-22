i.d(e, { C: () => o });
var n = i(311907),
    l = i(274372),
    s = i(399925),
    r = i(419954),
    u = i(780964),
    a = i(985018);
let o = (0, r.zD)(u.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
    useTitle: () => a.intl.string(a.t.nHsilt),
    useSubtitle: () => a.intl.string(a.t["s6wq+m"]),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipSignals.enablePhraseSignals),
    setValue: (t) => {
        var e, i;
        let n = l.A.getSettings().clipSignals;
        s.PW(
            ((e = (function (t) {
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
            })({}, n)),
            (i = i = { enablePhraseSignals: t }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                : (function (t, e) {
                      var i = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(t);
                          i.push.apply(i, n);
                      }
                      return i;
                  })(Object(i)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                  }),
            e),
        );
    },
});
