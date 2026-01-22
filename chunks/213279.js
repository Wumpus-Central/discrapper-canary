r.d(t, {
    p: () => s,
});
var n = r(627968);
r(64700);
var l = r(397927);
let s = (e) => {
    let { analyticsLocation: t, onClose: s } = e;
    (0, l.mMO)(async () => {
        let { default: e } = await r.e("18630").then(r.bind(r, 826789));
        return (r) => {
            var l, i;
            return (0, n.jsx)(
                e,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, r)),
                (i = i =
                    {
                        analyticsSource: t,
                        onClose: () => {
                            var e;
                            return null == s || s(), null == (e = r.onClose) ? void 0 : e.call(r);
                        },
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l),
            );
        };
    });
};
