n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(987209),
    a = n(107998),
    s = n(981631);
function o(e) {
    let { initialPlanId: t, activeSubscription: o, trialId: c, trialFooterMessageOverride: d, onClose: u, analyticsObject: m, analyticsLocation: p, analyticsLocations: f, analyticsSubscriptionType: h, renderHeader: g, renderPurchaseConfirmation: C, planGroup: _, reviewWarningMessage: b, skuId: v } = e;
    (0, i.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: i } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: s } = await Promise.all([n.e('8016'), n.e('17938'), n.e('84992'), n.e('54433'), n.e('21099')]).then(n.bind(n, 7305));
            return (n) => {
                var j,
                    y,
                    { onClose: E } = n,
                    x = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                        }
                        return i;
                    })(n, ['onClose']);
                return (0, r.jsx)(e, {
                    activeSubscription: o,
                    stepConfigs: s,
                    skuIDs: [v],
                    children: (0, r.jsx)(a.c1, {
                        children: (0, r.jsx)(l.KB, {
                            children: (0, r.jsx)(
                                i,
                                ((j = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, x)),
                                (y = y =
                                    {
                                        initialPlanId: t,
                                        onClose: (e) => {
                                            (E(), null == u || u(e));
                                        },
                                        analyticsLocations: f,
                                        analyticsObject: m,
                                        analyticsLocation: p,
                                        analyticsSubscriptionType: h,
                                        skuId: v,
                                        renderHeader: g,
                                        renderPurchaseConfirmation: C,
                                        planGroup: _,
                                        trialId: c,
                                        trialFooterMessageOverride: d,
                                        reviewWarningMessage: b
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
                null == u || u(!1);
            },
            onCloseRequest: s.dG4
        }
    );
}
