n.d(t, {
    E: () => o,
});
var r,
    i,
    l = n(803842),
    a = n(915967),
    s = n(652215);
let o =
    ((r = (function (e) {
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
    })({}, a.zR)),
    (i = i =
        {
            [s.IWg.CAROUSEL_NEXT]: l.FK,
            [s.IWg.CAROUSEL_PREV]: l.B0,
        }),
    Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
        : (function (e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r);
              }
              return n;
          })(Object(i)).forEach(function (e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
          }),
    r);
