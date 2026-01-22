r.d(t, {
    PremiumResubscribeModal: () => O,
}),
    r(896048);
var a = r(627968),
    n = r(64700),
    c = r(284009),
    i = r.n(c),
    o = r(688810),
    f = r(937008),
    s = r(156312),
    d = r(166532),
    l = r(639289),
    b = r(674619),
    u = r(927578),
    p = r(480254),
    _ = r(232392),
    m = r(190269),
    y = r(788868);

function g(e) {
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

function x(e, t) {
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
let O = (e) => {
    var t;
    let { analyticsLocations: r, premiumSubscription: c } = e,
        O = null == (t = (0, u.EL)(c)) ? void 0 : t.planId,
        S = null != O ? (0, u.m6)(O) : null;
    i()(null != S, "Should not be resubscribing Nitro without premiumType");
    let j = S === y.PremiumTypes.TIER_0,
        [C, h] = n.useState(_.g.CONFIRM),
        v = n.useCallback(() => {
            switch (C) {
                case _.g.CONFIRM:
                    return (0, a.jsx)(
                        p.m,
                        x(g({}, e), {
                            setStep: h,
                        }),
                    );
                case _.g.SUCCESS:
                    return (0, a.jsx)(
                        m.B,
                        x(g({}, e), {
                            premiumType: S,
                        }),
                    );
                default:
                    return (0, a.jsx)(
                        p.m,
                        x(g({}, e), {
                            setStep: h,
                        }),
                    );
            }
        }, [C, e, S]);
    return (0, a.jsx)(o.f5, {
        value: r,
        children: (0, a.jsx)(s.PaymentContextProvider, {
            activeSubscription: c,
            stepConfigs: (0, b.E)(),
            skuIDs: [],
            breadcrumbs: [d.pn.CONFIRM],
            children: (0, a.jsx)(f.Mq, {
                children: (0, a.jsx)(l.A, {
                    isConfirmationStep: C === _.g.SUCCESS,
                    isEligibleForWowMoment: !j,
                    shouldPrefetchWowMoment: !j,
                    children: v(),
                }),
            }),
        }),
    });
};
