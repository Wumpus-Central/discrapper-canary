n.d(t, { u: () => s });
var r,
    a,
    l = n(818083),
    i = n(751823);
let o = { showRefreshedStreamTaxonomy: !1 },
    c = (0, l.B)({
        kind: "user",
        id: "2025-07_stream_survey_taxonomy_refresh",
        label: "Stream survey taxonomy refresh",
        defaultConfig: o,
        treatments: [
            {
                id: 1,
                label: "Show refreshed stream taxonomy",
                config:
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
                    })({}, o)),
                    (a = a = { showRefreshedStreamTaxonomy: !0 }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    r),
            },
        ],
    });
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.L.useExperiment({ location: t }, { autoTrackExposure: n });
    return c.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
