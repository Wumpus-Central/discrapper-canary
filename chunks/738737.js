n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(987209),
    o = n(107998),
    l = n(981631);
function s(e) {
    let { initialPlanId: t, activeSubscription: s, trialId: c, trialFooterMessageOverride: d, onClose: u, analyticsObject: _, analyticsLocation: m, analyticsLocations: f, analyticsSubscriptionType: p, renderHeader: g, renderPurchaseConfirmation: h, planGroup: v, reviewWarningMessage: b, skuId: y } = e;
    (0, i.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: i } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: l } = await Promise.all([n.e('17938'), n.e('8854')]).then(n.bind(n, 7305));
            return (n) => {
                var x,
                    j,
                    { onClose: C } = n,
                    I = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(n, ['onClose']);
                return (0, r.jsx)(e, {
                    activeSubscription: s,
                    stepConfigs: l,
                    skuIDs: [y],
                    children: (0, r.jsx)(o.c1, {
                        children: (0, r.jsx)(a.KB, {
                            children: (0, r.jsx)(
                                i,
                                ((x = (function (e) {
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
                                })({}, I)),
                                (j = j =
                                    {
                                        initialPlanId: t,
                                        onClose: (e) => {
                                            C(), null == u || u(e);
                                        },
                                        analyticsLocations: f,
                                        analyticsObject: _,
                                        analyticsLocation: m,
                                        analyticsSubscriptionType: p,
                                        skuId: y,
                                        renderHeader: g,
                                        renderPurchaseConfirmation: h,
                                        planGroup: v,
                                        trialId: c,
                                        trialFooterMessageOverride: d,
                                        reviewWarningMessage: b
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(j))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(j)).forEach(function (e) {
                                          Object.defineProperty(x, e, Object.getOwnPropertyDescriptor(j, e));
                                      }),
                                x)
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
            onCloseRequest: l.dG4
        }
    );
}
