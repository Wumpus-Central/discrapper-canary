n.d(t, {
    h: () => d,
});
var r = n(232582),
    i = n(532794),
    l = n(976860),
    s = n(788868),
    a = n(652215);

function o(e) {
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

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e) {
    let { buttonAction: t, analyticsLocations: n = [], analyticsLocation: d, onClose: u } = e;
    switch (t) {
        case r.dz.OPEN_MARKETING_PAGE:
            return () => {
                (0, l.pX)(a.BVt.APPLICATION_STORE), null == u || u();
            };
        case r.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, i.A)({
                    subscriptionTier: s.pe.TIER_1,
                    analyticsLocations: n,
                    analyticsObject: c(o({}, d), {
                        object: a.ZSU.BUTTON_CTA,
                        objectType: a.AnalyticsObjectTypes.TIER_1,
                    }),
                    onClose: (e) => {
                        e && (null == u || u());
                    },
                });
        case r.dz.OPEN_PLAN_SELECTION_MODAL:
            return () =>
                (0, i.A)({
                    analyticsLocations: n,
                });
        case r.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case r.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, i.A)({
                    subscriptionTier: s.pe.TIER_2,
                    analyticsLocations: n,
                    analyticsObject: c(o({}, d), {
                        object: a.ZSU.BUTTON_CTA,
                        objectType: a.AnalyticsObjectTypes.TIER_2,
                    }),
                    onClose: (e) => {
                        e && (null == u || u());
                    },
                });
    }
}
