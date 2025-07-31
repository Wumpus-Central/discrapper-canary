n.d(t, { D: () => c });
var o,
    r,
    i = n(818083),
    l = n(984134);
let a = { showRefreshedCallTaxonomy: !1 },
    s = (0, i.B)({
        kind: 'user',
        id: '2025-05_av_survey_taxonomy_refresh',
        label: 'Call survey taxonomy refresh',
        defaultConfig: a,
        treatments: [
            {
                id: 1,
                label: 'Show refreshed call taxonomy',
                config:
                    ((o = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (o = o.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                o.forEach(function (t) {
                                    var o;
                                    ((o = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: o,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = o));
                                }));
                        }
                        return e;
                    })({}, a)),
                    (r = r = { showRefreshedCallTaxonomy: !0 }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var o = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, o);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    o)
            }
        ]
    });
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: o } = l.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return s.useExperiment(
        { location: t },
        {
            disable: o,
            autoTrackExposure: n
        }
    );
}
