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
    u = r(7305),
    b = r(74538),
    m = r(16989),
    _ = r(540310),
    h = r(320941),
    f = r(474936);
function C(e) {
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
        v = null == (t = (0, b.Af)(o)) ? void 0 : t.planId,
        w = null != v ? (0, b.Rd)(v) : null;
    i()(null != w, "Should not be resubscribing Nitro without premiumType");
    let y = w === f.PremiumTypes.TIER_0,
        [P, x] = n.useState(_.R.CONFIRM),
        O = n.useCallback(() => {
            switch (P) {
                case _.R.CONFIRM:
                    return (0, a.jsx)(m.G, S(C({}, e), { setStep: x }));
                case _.R.SUCCESS:
                    return (0, a.jsx)(h.n, S(C({}, e), { premiumType: w }));
                default:
                    return (0, a.jsx)(m.G, S(C({}, e), { setStep: x }));
            }
        }, [P, e, w]);
    return (0, a.jsx)(l.Gt, {
        value: r,
        children: (0, a.jsx)(s.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: (0, u.O)(),
            skuIDs: [],
            breadcrumbs: [d.h8.CONFIRM],
            children: (0, a.jsx)(c.b6, {
                children: (0, a.jsx)(p.Z, {
                    isConfirmationStep: P === _.R.SUCCESS,
                    isEligibleForWowMoment: !y,
                    shouldPrefetchWowMoment: !y,
                    children: O(),
                }),
            }),
        }),
    });
};
