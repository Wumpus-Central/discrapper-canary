function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
n.d(t, {
    Z: () => a,
    c: () => l
});
let i = (0, n(972959).H)(() => ({ channelDrafts: {} }));
function l(e, t) {
    i.setState((n) => {
        var i, l;
        let a = n.channelDrafts[e];
        return {
            channelDrafts:
                ((i = r({}, n.channelDrafts)),
                (l = l =
                    {
                        [e]: r(
                            {},
                            {
                                heroFile: null,
                                title: '',
                                publish: !0,
                                createThread: !0
                            },
                            a,
                            t
                        )
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i)
        };
    });
}
let a = i;
