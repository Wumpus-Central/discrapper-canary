n.d(t, {
    h: () => v,
    m: () => h
}),
    n(789020);
var r = n(200651);
n(192379);
var l = n(512722),
    i = n.n(l),
    o = n(772848),
    a = n(481060),
    u = n(496929),
    s = n(159351),
    c = n(667),
    d = n(171246),
    p = n(509545),
    f = n(55563),
    b = n(626135),
    O = n(987209),
    m = n(107998),
    y = n(981631);
function v(e) {
    let { initialPlanId: t, activeSubscription: l, analyticsObject: i, analyticsLocation: u, analyticsLocations: d, analyticsSubscriptionType: p, renderHeader: f, planGroup: v, skuId: g, guildId: h, reviewWarningMessage: j, applicationId: S, showBenefitsFirst: P, onComplete: I, forcesTransitionToGuild: E } = e,
        x = (0, o.Z)(),
        Z = !1;
    (0, a.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                o = (await n.e('7458').then(n.bind(n, 405083))).default,
                { getApplicationPaymentSteps: a } = await n.e('86513').then(n.bind(n, 759386)),
                s = a({
                    guildId: h,
                    showBenefitsFirst: P
                });
            return (n) => {
                var a, c;
                return (0, r.jsx)(e, {
                    loadId: x,
                    applicationId: S,
                    activeSubscription: l,
                    stepConfigs: s,
                    skuIDs: [g],
                    children: (0, r.jsx)(m.c1, {
                        children: (0, r.jsx)(O.KB, {
                            children: (0, r.jsx)(
                                o,
                                ((a = (function (e) {
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
                                })({}, n)),
                                (c = c =
                                    {
                                        initialPlanId: t,
                                        skuId: g,
                                        analyticsLocations: d,
                                        analyticsObject: i,
                                        analyticsLocation: u,
                                        analyticsSubscriptionType: p,
                                        renderHeader: f,
                                        planGroup: v,
                                        reviewWarningMessage: j,
                                        applicationId: S,
                                        guildId: null != h ? h : void 0,
                                        onComplete: () => {
                                            (Z = !0), null == I || I();
                                        },
                                        forcesTransitionToGuild: E
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(c)).forEach(function (e) {
                                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(c, e));
                                      }),
                                a)
                            )
                        })
                    })
                });
            };
        },
        {
            onCloseCallback: () => {
                Z ||
                    (b.default.track(y.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: x,
                        payment_type: y.Zuq[y.GZQ.SUBSCRIPTION],
                        location: null != u ? u : i,
                        is_gift: !1,
                        sku_id: g,
                        application_id: S,
                        location_stack: d
                    }),
                    (0, s.fw)(),
                    (0, c.p)());
            },
            onCloseRequest: y.dG4
        }
    );
}
let g = async (e, t) => {
    let n = (await (0, u.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === t);
    i()(null == n, 'User already has an active subscription to this SKU');
};
async function h(e) {
    var t;
    let { applicationId: n, skuId: r, initialPlanId: l, analyticsLocationObject: o, analyticsLocations: a, renderHeader: u } = e,
        s = f.Z.get(r),
        c = p.Z.getForSKU(r);
    i()(null != s, 'Failed to find SKU');
    let b = (0, d.KW)(s.flags);
    i()(b, 'Guild application subscriptions unsupported!'), await g(n, r);
    let O = {
        initialPlanId: null != l ? l : null == (t = c[0]) ? void 0 : t.id,
        activeSubscription: null,
        analyticsLocations: a,
        analyticsLocationObject: o,
        analyticsSubscriptionType: y.NYc.APPLICATION,
        renderHeader: u,
        planGroup: [],
        skuId: r,
        guildId: null,
        showBenefitsFirst: !1,
        applicationId: n
    };
    v(O);
}
