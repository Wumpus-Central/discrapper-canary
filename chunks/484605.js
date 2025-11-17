n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(264418),
    l = n(481060),
    a = n(100527),
    s = n(906732),
    o = n(74538),
    c = n(230916),
    u = n(45474),
    d = n(474936),
    p = n(921944),
    f = n(388032),
    h = n(288541);
let g = (e) => {
    let { targetElementRef: t, discountOffer: g, premiumSubscription: m, dismissCoachmark: _, children: b } = e,
        { analyticsLocations: E } = (0, s.ZP)(a.Z.CHURN_DISCOUNT_POPOVER),
        O = (0, c.W7)(d.Xh.PREMIUM_MONTH_TIER_2, g, m),
        y = (0, r.jsx)(i.Z, {
            targetElementRef: t,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: { align: "start" },
            title: f.intl.format(f.t["3yZP0G"], { percent: g.discount.amount }).toString(),
            body: f.intl.format(f.t["3Q4wCy"], {
                discountedPrice: O,
                billingPeriod: (0, o.JP)(g.discount.user_usage_limit_interval),
                numMonths: g.discount.user_usage_limit,
            }),
            graphic: {
                type: "image",
                src: h.Z,
            },
            gradientColor: "nitro-pink",
            actions: [
                {
                    text: f.intl.string(f.t.zrCzVB),
                    variant: "expressive",
                    onClick: () => {
                        _(p.L.TAKE_ACTION),
                            (0, l.ZDy)(async () => {
                                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                                    .e("26526")
                                    .then(n.bind(n, 48813));
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = (function (e) {
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
                                        })({}, t)),
                                        (i = i =
                                            {
                                                premiumSubscription: m,
                                                analyticsLocations: E,
                                                initialStep: u.R.CONFIRM_DISCOUNT,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        n),
                                    );
                                };
                            });
                    },
                    icon: l.SrA,
                },
            ],
            onRequestClose: () => {
                _(p.L.USER_DISMISS);
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { children: b }), y],
    });
};
