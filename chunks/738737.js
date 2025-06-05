n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(987209),
    a = n(107998),
    o = n(981631);
function s(e) {
    let { initialPlanId: t, activeSubscription: s, trialId: c, trialFooterMessageOverride: u, onClose: d, analyticsObject: m, analyticsLocation: p, analyticsLocations: f, analyticsSubscriptionType: h, renderHeader: g, renderPurchaseConfirmation: b, planGroup: v, reviewWarningMessage: _, skuId: C } = e;
    (0, i.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: i } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: o } = await Promise.all([n.e('17938'), n.e('84992'), n.e('54433'), n.e('66532')]).then(n.bind(n, 7305));
            return (n) => {
                var j,
                    y,
                    { onClose: E } = n,
                    O = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(n, ['onClose']);
                return (0, r.jsx)(e, {
                    activeSubscription: s,
                    stepConfigs: o,
                    skuIDs: [C],
                    children: (0, r.jsx)(a.c1, {
                        children: (0, r.jsx)(l.KB, {
                            children: (0, r.jsx)(
                                i,
                                ((j = (function (e) {
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
                                })({}, O)),
                                (y = y =
                                    {
                                        initialPlanId: t,
                                        onClose: (e) => {
                                            E(), null == d || d(e);
                                        },
                                        analyticsLocations: f,
                                        analyticsObject: m,
                                        analyticsLocation: p,
                                        analyticsSubscriptionType: h,
                                        skuId: C,
                                        renderHeader: g,
                                        renderPurchaseConfirmation: b,
                                        planGroup: v,
                                        trialId: c,
                                        trialFooterMessageOverride: u,
                                        reviewWarningMessage: _
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(y))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(y)).forEach(function (e) {
                                          Object.defineProperty(j, e, Object.getOwnPropertyDescriptor(y, e));
                                      }),
                                j)
                            )
                        })
                    })
                });
            };
        },
        {
            onCloseCallback: () => {
                null == d || d(!1);
            },
            onCloseRequest: o.dG4
        }
    );
}
