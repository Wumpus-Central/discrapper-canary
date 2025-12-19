a.d(t, { PremiumResubscribeModal: () => w }), a(388685);
var r = a(54381),
    n = a(473749),
    o = a(512722),
    i = a.n(o),
    c = a(906732),
    l = a(987209),
    d = a(563132),
    s = a(409813),
    b = a(518727),
    p = a(7305),
    f = a(74538),
    u = a(16989),
    m = a(540310),
    C = a(320941),
    h = a(474936);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = a[t]),
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, r);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
let w = (e) => {
    var t;
    let { analyticsLocations: a, premiumSubscription: o } = e,
        w = null == (t = (0, f.Af)(o)) ? void 0 : t.planId,
        y = null != w ? (0, f.Rd)(w) : null;
    i()(null != y, "Should not be resubscribing Nitro without premiumType");
    let P = y === h.PremiumTypes.TIER_0,
        [x, O] = n.useState(m.R.CONFIRM),
        _ = n.useCallback(() => {
            switch (x) {
                case m.R.CONFIRM:
                    return (0, r.jsx)(u.G, v(S({}, e), { setStep: O }));
                case m.R.SUCCESS:
                    return (0, r.jsx)(C.n, v(S({}, e), { premiumType: y }));
                default:
                    return (0, r.jsx)(u.G, v(S({}, e), { setStep: O }));
            }
        }, [x, e, y]);
    return (0, r.jsx)(c.Gt, {
        value: a,
        children: (0, r.jsx)(d.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: (0, p.O)(),
            skuIDs: [],
            breadcrumbs: [s.h8.CONFIRM],
            children: (0, r.jsx)(l.b6, {
                children: (0, r.jsx)(b.Z, {
                    isConfirmationStep: x === m.R.SUCCESS,
                    isEligibleForWowMoment: !P,
                    shouldPrefetchWowMoment: !P,
                    children: _(),
                }),
            }),
        }),
    });
};
