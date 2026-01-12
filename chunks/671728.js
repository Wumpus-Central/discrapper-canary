n.d(t, { K: () => f });
var r = n(740111),
    i = n(963249),
    a = n(703656),
    o = n(474936),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { buttonAction: t, analyticsLocations: n = [], analyticsLocation: l, onClose: u } = e;
    switch (t) {
        case r.Wc.OPEN_MARKETING_PAGE:
            return () => {
                (0, a.uL)(s.Z5c.APPLICATION_STORE), null == u || u();
            };
        case r.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, i.Z)({
                    subscriptionTier: o.Si.TIER_1,
                    analyticsLocations: n,
                    analyticsObject: d(c({}, l), {
                        object: s.qAy.BUTTON_CTA,
                        objectType: s.AnalyticsObjectTypes.TIER_1,
                    }),
                    onClose: (e) => {
                        e && (null == u || u());
                    },
                });
        case r.Wc.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, i.Z)({ analyticsLocations: n });
        case r.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        case r.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, i.Z)({
                    subscriptionTier: o.Si.TIER_2,
                    analyticsLocations: n,
                    analyticsObject: d(c({}, l), {
                        object: s.qAy.BUTTON_CTA,
                        objectType: s.AnalyticsObjectTypes.TIER_2,
                    }),
                    onClose: (e) => {
                        e && (null == u || u());
                    },
                });
    }
}
