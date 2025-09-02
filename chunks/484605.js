n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(264418),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    c = n(74538),
    u = n(230916),
    d = n(45474),
    p = n(474936),
    f = n(921944),
    h = n(388032),
    g = n(22767);
let m = (e) => {
    let { targetElementRef: t, discountOffer: m, premiumSubscription: b, dismissCoachmark: _, children: O } = e,
        { analyticsLocations: E } = (0, s.ZP)(o.Z.CHURN_DISCOUNT_POPOVER),
        [y, v] = i.useState(!1),
        I = (0, u.W7)(p.Xh.PREMIUM_MONTH_TIER_2, m, b),
        C = (0, r.jsx)(l.Z, {
            targetElementRef: t,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: {
                position: "left",
                align: "start",
            },
            title: h.intl.format(h.t["3yZP0N"], { percent: m.discount.amount }).toString(),
            body: h.intl.format(h.t["3Q4wCw"], {
                discountedPrice: I,
                billingPeriod: (0, c.JP)(m.discount.user_usage_limit_interval),
                numMonths: m.discount.user_usage_limit,
            }),
            graphic: {
                type: "image",
                src: g,
            },
            gradientColor: "nitro-pink",
            actions: [
                {
                    text: h.intl.string(h.t.zrCzVF),
                    variant: "expressive",
                    onClick: () => {
                        (0, a.ZDy)(async () => {
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
                                            premiumSubscription: b,
                                            analyticsLocations: E,
                                            initialStep: d.R.CONFIRM_DISCOUNT,
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
                _(f.L.USER_DISMISS);
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                onMouseEnter: () => v(!0),
                children: O,
            }),
            y && C,
        ],
    });
};
