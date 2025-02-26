n.d(t, {
    h: () => y,
    m: () => h
}),
    n(789020);
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    o = n(772848),
    a = n(481060),
    u = n(496929),
    s = n(159351),
    c = n(667),
    d = n(171246),
    p = n(509545),
    f = n(55563),
    b = n(626135),
    v = n(987209),
    O = n(107998),
    m = n(981631);
function y(e) {
    let { initialPlanId: t, activeSubscription: l, analyticsObject: r, analyticsLocation: u, analyticsLocations: d, analyticsSubscriptionType: p, renderHeader: f, planGroup: y, skuId: g, guildId: h, reviewWarningMessage: S, applicationId: I, showBenefitsFirst: j, onComplete: P, forcesTransitionToGuild: E } = e,
        Z = (0, o.Z)(),
        N = !1;
    (0, a.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                o = (await n.e('7458').then(n.bind(n, 405083))).default,
                { getApplicationPaymentSteps: a } = await n.e('86513').then(n.bind(n, 759386)),
                s = a({
                    guildId: h,
                    showBenefitsFirst: j
                });
            return (n) => {
                var a, c;
                return (0, i.jsx)(e, {
                    loadId: Z,
                    applicationId: I,
                    activeSubscription: l,
                    stepConfigs: s,
                    skuIDs: [g],
                    children: (0, i.jsx)(O.c1, {
                        children: (0, i.jsx)(v.KB, {
                            children: (0, i.jsx)(
                                o,
                                ((a = (function (e) {
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
                                })({}, n)),
                                (c = c =
                                    {
                                        initialPlanId: t,
                                        skuId: g,
                                        analyticsLocations: d,
                                        analyticsObject: r,
                                        analyticsLocation: u,
                                        analyticsSubscriptionType: p,
                                        renderHeader: f,
                                        planGroup: y,
                                        reviewWarningMessage: S,
                                        applicationId: I,
                                        guildId: null != h ? h : void 0,
                                        onComplete: () => {
                                            (N = !0), null == P || P();
                                        },
                                        forcesTransitionToGuild: E
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
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
                N ||
                    (b.default.track(m.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: Z,
                        payment_type: m.Zuq[m.GZQ.SUBSCRIPTION],
                        location: null != u ? u : r,
                        is_gift: !1,
                        sku_id: g,
                        application_id: I,
                        location_stack: d
                    }),
                    (0, s.fw)(),
                    (0, c.p)());
            },
            onCloseRequest: m.dG4
        }
    );
}
let g = async (e, t) => {
    let n = (await (0, u.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === t);
    r()(null == n, 'User already has an active subscription to this SKU');
};
async function h(e) {
    var t;
    let { applicationId: n, skuId: i, initialPlanId: l, analyticsLocationObject: o, analyticsLocations: a, renderHeader: u } = e,
        s = f.Z.get(i),
        c = p.Z.getForSKU(i);
    r()(null != s, 'Failed to find SKU');
    let b = (0, d.KW)(s.flags);
    r()(b, 'Guild application subscriptions unsupported!'),
        await g(n, i),
        y({
            initialPlanId: null != l ? l : null === (t = c[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: o,
            analyticsSubscriptionType: m.NYc.APPLICATION,
            renderHeader: u,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: n
        });
}
