function r(e) {
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
}
n.d(t, {
    A: () => a,
    x: () => i,
});
let l = (0, n(839214).D)(() => ({ channelDrafts: {} }));
function i(e, t) {
    l.setState((n) => {
        var l, i;
        let a = n.channelDrafts[e];
        return {
            channelDrafts:
                ((l = r({}, n.channelDrafts)),
                (i = i =
                    {
                        [e]: r(
                            {},
                            {
                                heroFile: null,
                                title: "",
                                publish: !0,
                                createThread: !0,
                            },
                            a,
                            t,
                        ),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l),
        };
    });
}
let a = l;
