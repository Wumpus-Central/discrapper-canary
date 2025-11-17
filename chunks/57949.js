n.d(t, { z: () => p });
var r = n(54381);
n(473749);
var i = n(772848),
    a = n(481060),
    o = n(159351),
    s = n(667),
    l = n(626135),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { guildProductListing: t, guildId: u, sourceAnalyticsLocations: f } = e,
        p = !1,
        h = (0, i.Z)(),
        m = t.id,
        g = () => {
            p = !0;
        };
    (0, a.ZDy)(
        async () => {
            let { default: e } = await n.e("88806").then(n.bind(n, 578780));
            return (n) =>
                (0, r.jsx)(
                    e,
                    _(d({}, n), {
                        applicationId: t.application_id,
                        skuId: m,
                        sourceAnalyticsLocations: f,
                        guildProductContext: {
                            guildProductListingId: t.id,
                            guildId: u,
                        },
                        loadId: h,
                        onComplete: g,
                    }),
                );
        },
        {
            onCloseCallback: () => {
                p ||
                    l.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: h,
                        payment_type: c.Zuq[c.GZQ.ONE_TIME],
                        is_gift: !1,
                        sku_id: m,
                        location_stack: Array.isArray(f) ? f : [f],
                    }),
                    (0, o.fw)(),
                    (0, s.p)();
            },
            onCloseRequest: c.dG4,
        },
    );
}
