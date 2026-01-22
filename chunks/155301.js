n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(459793),
    a = n(97352),
    s = n(927578),
    o = n(937008),
    c = n(156312),
    u = n(534479);

function d(e) {
    let { initialStep: t, initialPlanId: n, guildId: d, setAnalyticsData: p, handleClose: m } = e,
        {
            blockedPayments: f,
            setStep: b,
            hasFetchedSubscriptions: g,
            hasFetchedSubscriptionPlans: x,
            currencyLoading: j,
            selectedSkuId: h,
            setSelectedSkuId: v,
            setSelectedPlanId: y,
            priceOptions: P,
            setSubscriptionMetadataRequest: O,
        } = (0, c.P5)(),
        { isGift: S } = (0, o.Pv)(),
        [A, E] = i.useState(!g || !x || j);
    return (i.useEffect(() => {
        E(!g || !x || j);
    }, [j, x, g]),
    i.useEffect(() => {
        null != d &&
            O({
                guild_id: d,
            });
    }, [d, O]),
    i.useEffect(() => {
        y(n);
        let e = null != n ? a.A.get(n) : null;
        A ||
            f ||
            (p((t) => {
                var n, r;
                let i = null != e ? (0, s.y8)(e.id, !1, S, P) : void 0;
                return (
                    (n = (function (e) {
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
                    (r = r =
                        {
                            subscription_plan_id: null == e ? void 0 : e.id,
                            price: null == i ? void 0 : i.amount,
                            regular_price: null == e ? void 0 : e.price,
                            currency: P.currency,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n
                );
            }),
            null != e && (v(null == e ? void 0 : e.skuId), b(t)));
    }, [f, n, S, A, P, h, p, y, v, b, t]),
    A)
        ? (0, r.jsx)(u.A, {})
        : f
          ? (0, r.jsx)(l.oO, {
                onClose: m,
            })
          : null;
}
