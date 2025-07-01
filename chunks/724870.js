(n.d(e, {
    h: () => g,
    m: () => _
}),
    n(997841));
var i = n(255367);
n(73800);
var r = n(512722),
    l = n.n(r),
    o = n(772848),
    a = n(481060),
    s = n(496929),
    u = n(159351),
    c = n(667),
    d = n(171246),
    p = n(509545),
    f = n(55563),
    S = n(626135),
    O = n(987209),
    I = n(107998),
    b = n(981631);
function g(t) {
    let { initialPlanId: e, activeSubscription: r, analyticsObject: l, analyticsLocation: s, analyticsLocations: d, analyticsSubscriptionType: p, renderHeader: f, planGroup: g, skuId: P, guildId: _, reviewWarningMessage: y, applicationId: m, showBenefitsFirst: v, onComplete: E, forcesTransitionToGuild: h } = t,
        T = (0, o.Z)(),
        C = !1;
    (0, a.ZDy)(
        async () => {
            let { PaymentContextProvider: t } = await Promise.resolve().then(n.bind(n, 563132)),
                o = (await n.e('7458').then(n.bind(n, 405083))).default,
                { getApplicationPaymentSteps: a } = await n.e('86513').then(n.bind(n, 759386)),
                u = a({
                    guildId: _,
                    showBenefitsFirst: v
                });
            return (n) => {
                var a, c;
                return (0, i.jsx)(t, {
                    loadId: T,
                    applicationId: m,
                    activeSubscription: r,
                    stepConfigs: u,
                    skuIDs: [P],
                    children: (0, i.jsx)(I.c1, {
                        children: (0, i.jsx)(O.KB, {
                            children: (0, i.jsx)(
                                o,
                                ((a = (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            i = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                })
                                            )),
                                            i.forEach(function (e) {
                                                var i;
                                                ((i = n[e]),
                                                    e in t
                                                        ? Object.defineProperty(t, e, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (t[e] = i));
                                            }));
                                    }
                                    return t;
                                })({}, n)),
                                (c = c =
                                    {
                                        initialPlanId: e,
                                        skuId: P,
                                        analyticsLocations: d,
                                        analyticsObject: l,
                                        analyticsLocation: s,
                                        analyticsSubscriptionType: p,
                                        renderHeader: f,
                                        planGroup: g,
                                        reviewWarningMessage: y,
                                        applicationId: m,
                                        guildId: null != _ ? _ : void 0,
                                        onComplete: () => {
                                            ((C = !0), null == E || E());
                                        },
                                        forcesTransitionToGuild: h
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                                    : (function (t, e) {
                                          var n = Object.keys(t);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(t);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(c)).forEach(function (t) {
                                          Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(c, t));
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
                C ||
                    (S.default.track(b.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: T,
                        payment_type: b.Zuq[b.GZQ.SUBSCRIPTION],
                        location: null != s ? s : l,
                        is_gift: !1,
                        sku_id: P,
                        application_id: m,
                        location_stack: d
                    }),
                    (0, u.fw)(),
                    (0, c.p)());
            },
            onCloseRequest: b.dG4
        }
    );
}
let P = async (t, e) => {
    let n = (await (0, s.yD)(t)).filter((t) => null == t.ends_at || new Date(t.ends_at) > new Date()).find((t) => t.sku_id === e);
    l()(null == n, 'User already has an active subscription to this SKU');
};
async function _(t) {
    var e;
    let { applicationId: n, skuId: i, initialPlanId: r, analyticsLocationObject: o, analyticsLocations: a, renderHeader: s } = t,
        u = f.Z.get(i),
        c = p.Z.getForSKU(i);
    l()(null != u, 'Failed to find SKU');
    let S = (0, d.KW)(u.flags);
    (l()(S, 'Guild application subscriptions unsupported!'), await P(n, i));
    let O = {
        initialPlanId: null != r ? r : null == (e = c[0]) ? void 0 : e.id,
        activeSubscription: null,
        analyticsLocations: a,
        analyticsLocationObject: o,
        analyticsSubscriptionType: b.NYc.APPLICATION,
        renderHeader: s,
        planGroup: [],
        skuId: i,
        guildId: null,
        showBenefitsFirst: !1,
        applicationId: n
    };
    g(O);
}
