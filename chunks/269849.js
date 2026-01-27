t.d(l, {
    o: () => a,
}),
    t(896048),
    t(64700);
var r = t(621466),
    n = t(644447),
    i = t(369254),
    s = t(256905);

function a(e, l, t) {
    let a = {},
        o = {};
    for (let [u, d] of e.entries()) {
        let c = (0, n.E)({
            proxyURL: d.proxyUrl,
            url: d.url,
        });
        (a[c] = (n) =>
            (function (e, l, t) {
                var n, i;
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, r.vq)(e.currentTarget) && e.currentTarget.blur(),
                    (0, s.R)(
                        ((n = (function (e) {
                            for (var l = 1; l < arguments.length; l++) {
                                var t = null != arguments[l] ? arguments[l] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (l) {
                                        var r;
                                        (r = t[l]),
                                            l in e
                                                ? Object.defineProperty(e, l, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[l] = r);
                                    });
                            }
                            return e;
                        })({}, a)),
                        (i = i =
                            {
                                items: l,
                                startingIndex: t,
                                location: null != o ? o : "zoomedMediaModalHelper",
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, l) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, r);
                                  }
                                  return t;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    );
            })(n, e, u, l, t)),
            (o[c] = () => (0, i.Z5)(d, e.length > 1));
    }
    return {
        srcToOnClickOverride: a,
        srcToHandlePreloadImage: o,
    };
}
