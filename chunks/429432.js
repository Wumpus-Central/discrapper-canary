r.d(t, { s: () => f });
var n,
    l,
    s = r(311907),
    i = r(250105),
    a = r(217222),
    c = r(128319);
let o = { smarterSourceOrdering: !1 },
    d = (0, i.Ay)({
        name: "2025-08-go-live-source-ordering",
        kind: "user",
        defaultConfig: o,
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
                })({}, o)),
                (l = l = { smarterSourceOrdering: !0 }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n),
        },
    });
function f(e) {
    let { location: t } = e;
    return (0, s.bG)([a.A], () =>
        (function (e) {
            let { location: t } = e,
                { isInHoldout: r } = c.p.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
            return r ? d.definition.defaultConfig : d.getConfig({ location: t });
        })({ location: t }),
    );
}
