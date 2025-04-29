n.d(t, { Z: () => d }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(89057),
    a = n(509545),
    o = n(74538),
    s = n(987209),
    c = n(563132),
    u = n(456251);
function d(e) {
    let { initialStep: t, initialPlanId: n, guildId: d, setAnalyticsData: m, handleClose: f } = e,
        { blockedPayments: p, setStep: b, hasFetchedSubscriptions: h, hasFetchedSubscriptionPlans: g, currencyLoading: x, selectedSkuId: v, setSelectedSkuId: j, setSelectedPlanId: y, priceOptions: C, setSubscriptionMetadataRequest: O } = (0, c.JL)(),
        { isGift: S } = (0, s.wD)(),
        [P, k] = r.useState(!h || !g || x);
    return (r.useEffect(() => {
        k(!h || !g || x);
    }, [x, g, h]),
    r.useEffect(() => {
        null != d && O({ guild_id: d });
    }, [d, O]),
    r.useEffect(() => {
        y(n);
        let e = null != n ? a.Z.get(n) : null;
        P ||
            p ||
            (m((t) => {
                var n, i;
                let r = null != e ? (0, o.aS)(e.id, !1, S, C) : void 0;
                return (
                    (n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, t)),
                    (i = i =
                        {
                            subscription_plan_id: null == e ? void 0 : e.id,
                            price: null == r ? void 0 : r.amount,
                            regular_price: null == e ? void 0 : e.price,
                            currency: C.currency
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n
                );
            }),
            null != e && (j(null == e ? void 0 : e.skuId), b(t)));
    }, [p, n, S, P, C, v, m, y, j, b, t]),
    P)
        ? (0, i.jsx)(u.Z, {})
        : p
          ? (0, i.jsx)(l.Vq, { onClose: f })
          : null;
}
