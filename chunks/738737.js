n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(987209),
    o = n(981631);
function l(e) {
    let { initialPlanId: t, activeSubscription: l, trialId: s, trialFooterMessageOverride: c, onClose: d, analyticsObject: u, analyticsLocation: p, analyticsLocations: m, analyticsSubscriptionType: f, renderHeader: h, renderPurchaseConfirmation: g, planGroup: _, reviewWarningMessage: b, skuId: v } = e;
    (0, i.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: i } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: o } = await Promise.all([n.e('8016'), n.e('17938'), n.e('54433'), n.e('31914')]).then(n.bind(n, 7305));
            return (n) => {
                var y,
                    x,
                    { onClose: O } = n,
                    E = (function (e, t) {
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
                    activeSubscription: l,
                    stepConfigs: o,
                    skuIDs: [v],
                    children: (0, r.jsx)(a.KB, {
                        children: (0, r.jsx)(
                            i,
                            ((y = (function (e) {
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
                            })({}, E)),
                            (x = x =
                                {
                                    initialPlanId: t,
                                    onClose: (e) => {
                                        O(), null == d || d(e);
                                    },
                                    analyticsLocations: m,
                                    analyticsObject: u,
                                    analyticsLocation: p,
                                    analyticsSubscriptionType: f,
                                    skuId: v,
                                    renderHeader: h,
                                    renderPurchaseConfirmation: g,
                                    planGroup: _,
                                    trialId: s,
                                    trialFooterMessageOverride: c,
                                    reviewWarningMessage: b
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(x))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(x)).forEach(function (e) {
                                      Object.defineProperty(y, e, Object.getOwnPropertyDescriptor(x, e));
                                  }),
                            y)
                        )
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
