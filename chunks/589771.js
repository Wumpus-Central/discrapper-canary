n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(89057),
    a = n(509545),
    o = n(74538),
    s = n(987209),
    c = n(563132),
    u = n(456251);
function d(e) {
    let { initialStep: t, initialPlanId: n, guildId: d, setAnalyticsData: m, handleClose: f } = e,
        { blockedPayments: p, setStep: b, hasFetchedSubscriptions: h, hasFetchedSubscriptionPlans: g, currencyLoading: x, selectedSkuId: N, setSelectedSkuId: v, setSelectedPlanId: j, priceOptions: y, setSubscriptionMetadataRequest: C } = (0, c.JL)(),
        { isGift: O } = (0, s.wD)(),
        [S, P] = i.useState(!h || !g || x);
    return (i.useEffect(() => {
        P(!h || !g || x);
    }, [x, g, h]),
    i.useEffect(() => {
        null != d && C({ guild_id: d });
    }, [d, C]),
    i.useEffect(() => {
        j(n);
        let e = null != n ? a.Z.get(n) : null;
        S ||
            p ||
            (m((t) => {
                var n, r;
                let i = null != e ? (0, o.aS)(e.id, !1, O, y) : void 0;
                return (
                    (n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
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
                            currency: y.currency
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
    }, [p, n, O, S, y, N, m, j, v, b, t]),
    S)
        ? (0, r.jsx)(u.Z, {})
        : p
          ? (0, r.jsx)(l.Vq, { onClose: f })
          : null;
}
