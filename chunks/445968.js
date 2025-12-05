r.d(t, { PremiumResubscribeModal: () => v }), r(388685);
var a = r(54381),
    n = r(473749),
    o = r(512722),
    i = r.n(o),
    l = r(906732),
    c = r(987209),
    s = r(563132),
    d = r(409813),
    p = r(518727),
    b = r(7305),
    m = r(74538),
    u = r(16989),
    _ = r(540310),
    h = r(320941),
    C = r(474936);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, a);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let v = (e) => {
    var t;
    let { analyticsLocations: r, premiumSubscription: o } = e,
        v = null == (t = (0, m.Af)(o)) ? void 0 : t.planId,
        x = null != v ? (0, m.Rd)(v) : null;
    i()(null != x, "Should not be resubscribing Nitro without premiumType");
    let w = x === C.PremiumTypes.TIER_0,
        [P, y] = n.useState(_.R.CONFIRM),
        g = n.useCallback(() => {
            switch (P) {
                case _.R.CONFIRM:
                    return (0, a.jsx)(u.G, S(f({}, e), { setStep: y }));
                case _.R.SUCCESS:
                    return (0, a.jsx)(h.n, S(f({}, e), { premiumType: x }));
                default:
                    return (0, a.jsx)(u.G, S(f({}, e), { setStep: y }));
            }
        }, [P, e, x]);
    return (0, a.jsx)(l.Gt, {
        value: r,
        children: (0, a.jsx)(s.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: (0, b.O)(),
            skuIDs: [],
            breadcrumbs: [d.h8.CONFIRM],
            children: (0, a.jsx)(c.b6, {
                children: (0, a.jsx)(p.Z, {
                    isConfirmationStep: P === _.R.SUCCESS,
                    isEligibleForWowMoment: !w,
                    shouldPrefetchWowMoment: !w,
                    children: g(),
                }),
            }),
        }),
    });
};
