n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(704215),
    a = n(264418),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(243778),
    d = n(74538),
    p = n(230916),
    f = n(45474),
    h = n(474936),
    g = n(921944),
    m = n(388032),
    b = n(22767);
let _ = (e) => {
    let { targetElementRef: t, discountOffer: _, premiumSubscription: O, children: E } = e,
        { analyticsLocations: y } = (0, c.ZP)(s.Z.CHURN_DISCOUNT_POPOVER),
        [v, I] = (0, u.US)([l.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK], void 0, !0),
        [C, S] = i.useState(!1),
        N = C && v === l.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK,
        T = (0, p.W7)(O, h.Xh.PREMIUM_MONTH_TIER_2, _),
        P = (0, r.jsx)(a.Z, {
            targetElementRef: t,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: {
                position: "left",
                align: "start",
            },
            title: m.intl.format(m.t["3yZP0N"], { percent: _.discount.amount }).toString(),
            body: m.intl.format(m.t["3Q4wCw"], {
                discountedPrice: T,
                billingPeriod: (0, d.JP)(_.discount.user_usage_limit_interval),
                numMonths: _.discount.user_usage_limit,
            }),
            graphic: {
                type: "image",
                src: b,
            },
            gradientColor: "nitro-pink",
            actions: [
                {
                    text: m.intl.string(m.t.zrCzVF),
                    variant: "expressive",
                    onClick: () => {
                        (0, o.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("58067"), n.e("81709"), n.e("98361")]).then(
                                n.bind(n, 833569),
                            );
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
                                            premiumSubscription: O,
                                            analyticsLocations: y,
                                            initialStep: f.R.CONFIRM_DISCOUNT,
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
                },
            ],
            onRequestClose: () => {
                I(g.L.USER_DISMISS);
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                onMouseEnter: () => S(!0),
                children: E,
            }),
            N && P,
        ],
    });
};
