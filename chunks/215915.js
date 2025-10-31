n.d(t, { E: () => u });
var r,
    i,
    l = n(442837),
    o = n(722733),
    s = n(633289),
    a = n(751823);
let c = { smarterSourceOrdering: !1 },
    d = (0, o.Z)({
        name: "2025-08-go-live-source-ordering",
        kind: "user",
        defaultConfig: c,
        variations: {
            1:
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
                })({}, c)),
                (i = i = { smarterSourceOrdering: !0 }),
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
                r),
        },
    });
function u(e) {
    let { location: t } = e;
    return (0, l.e7)([s.Z], () =>
        (function (e) {
            let { location: t } = e,
                { isInHoldout: n } = a.L.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
            return n ? d.definition.defaultConfig : d.getConfig({ location: t });
        })({ location: t }),
    );
}
