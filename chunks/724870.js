n.d(t, {
    h: () => m,
    m: () => g
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
    O = n(981631);
function m(e) {
    let { initialPlanId: t, activeSubscription: l, analyticsObject: r, analyticsLocation: u, analyticsLocations: d, analyticsSubscriptionType: p, renderHeader: f, planGroup: m, skuId: y, guildId: g, reviewWarningMessage: h, applicationId: S, showBenefitsFirst: I, onComplete: j, forcesTransitionToGuild: P } = e,
        E = (0, o.Z)(),
        Z = !1;
    (0, a.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                o = (await n.e('7458').then(n.bind(n, 405083))).default,
                { getApplicationPaymentSteps: a } = await n.e('86513').then(n.bind(n, 759386)),
                s = a({
                    guildId: g,
                    showBenefitsFirst: I
                });
            return (n) => {
                var a, c;
                return (0, i.jsx)(e, {
                    loadId: E,
                    applicationId: S,
                    activeSubscription: l,
                    stepConfigs: s,
                    skuIDs: [y],
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
                                    skuId: y,
                                    analyticsLocations: d,
                                    analyticsObject: r,
                                    analyticsLocation: u,
                                    analyticsSubscriptionType: p,
                                    renderHeader: f,
                                    planGroup: m,
                                    reviewWarningMessage: h,
                                    applicationId: S,
                                    guildId: null != g ? g : void 0,
                                    onComplete: () => {
                                        (Z = !0), null == j || j();
                                    },
                                    forcesTransitionToGuild: P
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
                });
            };
        },
        {
            onCloseCallback: () => {
                Z ||
                    (b.default.track(O.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: E,
                        payment_type: O.Zuq[O.GZQ.SUBSCRIPTION],
                        location: null != u ? u : r,
                        is_gift: !1,
                        sku_id: y,
                        application_id: S,
                        location_stack: d
                    }),
                    (0, s.fw)(),
                    (0, c.p)());
            },
            onCloseRequest: O.dG4
        }
    );
}
let y = async (e, t) => {
    let n = (await (0, u.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === t);
    r()(null == n, 'User already has an active subscription to this SKU');
};
async function g(e) {
    var t;
    let { applicationId: n, skuId: i, initialPlanId: l, analyticsLocationObject: o, analyticsLocations: a, renderHeader: u } = e,
        s = f.Z.get(i),
        c = p.Z.getForSKU(i);
    r()(null != s, 'Failed to find SKU');
    let b = (0, d.KW)(s.flags);
    r()(b, 'Guild application subscriptions unsupported!'),
        await y(n, i),
        m({
            initialPlanId: null != l ? l : null === (t = c[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: o,
            analyticsSubscriptionType: O.NYc.APPLICATION,
            renderHeader: u,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: n
        });
}
