r.d(t, { E: () => u });
var n,
    i,
    s = r(442837),
    l = r(722733),
    o = r(633289),
    c = r(751823);
let a = { smarterSourceOrdering: !1 },
    d = (0, l.ZP)({
        name: "2025-08-go-live-source-ordering",
        kind: "user",
        defaultConfig: a,
        variations: {
            1:
                ((n = (function (e) {
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
                })({}, a)),
                (i = i = { smarterSourceOrdering: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n),
        },
    });
function u(e) {
    let { location: t } = e;
    return (0, s.e7)([o.Z], () =>
        (function (e) {
            let { location: t } = e,
                { isInHoldout: r } = c.L.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
            return r ? d.definition.defaultConfig : d.getConfig({ location: t });
        })({ location: t }),
    );
}
