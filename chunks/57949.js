n.d(t, { z: () => u });
var r = n(255367);
n(73800);
var i = n(772848),
    l = n(481060),
    a = n(159351),
    o = n(667),
    s = n(626135),
    c = n(981631);
function u(e) {
    let { guildProductListing: t, guildId: u, sourceAnalyticsLocations: d } = e,
        p = !1,
        m = (0, i.Z)(),
        f = t.id,
        h = () => {
            p = !0;
        };
    (0, l.ZDy)(
        async () => {
            let { default: e } = await n.e('88806').then(n.bind(n, 578780));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    e,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, n)),
                    (l = l =
                        {
                            applicationId: t.application_id,
                            skuId: f,
                            sourceAnalyticsLocations: d,
                            guildProductContext: {
                                guildProductListingId: t.id,
                                guildId: u
                            },
                            loadId: m,
                            onComplete: h
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
                );
            };
        },
        {
            onCloseCallback: () => {
                p ||
                    s.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: m,
                        payment_type: c.Zuq[c.GZQ.ONE_TIME],
                        is_gift: !1,
                        sku_id: f,
                        location_stack: Array.isArray(d) ? d : [d]
                    }),
                    (0, a.fw)(),
                    (0, o.p)();
            },
            onCloseRequest: c.dG4
        }
    );
}
