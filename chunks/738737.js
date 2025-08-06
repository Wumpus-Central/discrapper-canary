n.d(t, { Z: () => o });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(987209),
    a = n(107998),
    s = n(981631);
function o(e) {
    let {
        initialPlanId: t,
        activeSubscription: o,
        trialId: c,
        trialFooterMessageOverride: d,
        onClose: u,
        analyticsObject: m,
        analyticsLocation: f,
        analyticsLocations: h,
        analyticsSubscriptionType: g,
        renderHeader: v,
        renderPurchaseConfirmation: p,
        planGroup: j,
        reviewWarningMessage: b,
        skuId: x,
    } = e;
    (0, r.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: r } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: s } = await Promise.all([
                    n.e("8016"),
                    n.e("17938"),
                    n.e("94136"),
                    n.e("84992"),
                    n.e("24329"),
                ]).then(n.bind(n, 7305));
            return (n) => {
                var _,
                    y,
                    { onClose: N } = n,
                    Z = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = {},
                                    l = Object.keys(e);
                                for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < l.length; i++)
                                (n = l[i]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (r[n] = e[n]);
                        }
                        return r;
                    })(n, ["onClose"]);
                return (0, i.jsx)(e, {
                    activeSubscription: o,
                    stepConfigs: s,
                    skuIDs: [x],
                    children: (0, i.jsx)(a.c1, {
                        children: (0, i.jsx)(l.KB, {
                            children: (0, i.jsx)(
                                r,
                                ((_ = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })({}, Z)),
                                (y = y =
                                    {
                                        initialPlanId: t,
                                        onClose: (e) => {
                                            N(), null == u || u(e);
                                        },
                                        analyticsLocations: h,
                                        analyticsObject: m,
                                        analyticsLocation: f,
                                        analyticsSubscriptionType: g,
                                        skuId: x,
                                        renderHeader: v,
                                        renderPurchaseConfirmation: p,
                                        planGroup: j,
                                        trialId: c,
                                        trialFooterMessageOverride: d,
                                        reviewWarningMessage: b,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(y))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(y)).forEach(function (e) {
                                          Object.defineProperty(_, e, Object.getOwnPropertyDescriptor(y, e));
                                      }),
                                _),
                            ),
                        }),
                    }),
                });
            };
        },
        {
            onCloseCallback: () => {
                null == u || u(!1);
            },
            onCloseRequest: s.dG4,
        },
    );
}
