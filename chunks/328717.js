n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(43105),
    l = n(397927),
    a = n(793574),
    s = n(688810),
    o = n(927578),
    c = n(511484),
    u = n(473702),
    d = n(788868),
    p = n(49999),
    f = n(985018),
    h = n(398932);
let A = (e) => {
    let { targetElementRef: t, discountOffer: A, premiumSubscription: g, dismissCoachmark: m, children: b } = e,
        { analyticsLocations: _ } = (0, s.Ay)(a.A.CHURN_DISCOUNT_POPOVER),
        E = (0, c.iU)(d.gD.PREMIUM_MONTH_TIER_2, A, g),
        O = (0, r.jsx)(i.h, {
            targetElementRef: t,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: { align: "start" },
            title: f.intl.format(f.t["3yZP0G"], { percent: A.discount.amount }).toString(),
            body: f.intl.format(f.t["3Q4wCy"], {
                discountedPrice: E,
                billingPeriod: (0, o.Ke)(A.discount.user_usage_limit_interval),
                numMonths: A.discount.user_usage_limit,
            }),
            graphic: {
                type: "image",
                src: h.A,
            },
            gradientColor: "nitro-pink",
            actions: [
                {
                    text: f.intl.string(f.t.zrCzVB),
                    variant: "expressive",
                    onClick: () => {
                        m(p.i.TAKE_ACTION),
                            (0, l.mMO)(async () => {
                                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                                    .e("72820")
                                    .then(n.bind(n, 281439));
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
                                                premiumSubscription: g,
                                                analyticsLocations: _,
                                                initialStep: u.g.CONFIRM_DISCOUNT,
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
                    icon: l.tvc,
                },
            ],
            onRequestClose: () => {
                m(p.i.USER_DISMISS);
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { children: b }), O],
    });
};
