r.d(t, {
    Im: () => o,
}),
    [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, t, r) => {
        var o, a;
        return (
            (o = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        o.forEach(function (t) {
                            var o;
                            (o = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = o);
                        });
                }
                return e;
            })({}, e)),
            (a = a =
                {
                    [t]: r,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, o);
                      }
                      return r;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            o
        );
    }, {});
let o = {
    width: 1280,
    height: 720,
};
