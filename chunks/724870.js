e.d(t, {
    h: () => h,
    m: () => Z
}),
    e(789020);
var l = e(200651);
e(192379);
var i = e(512722),
    a = e.n(i),
    r = e(772848),
    s = e(481060),
    u = e(496929),
    o = e(159351),
    d = e(667),
    c = e(171246),
    p = e(509545),
    f = e(55563),
    v = e(626135),
    m = e(987209),
    I = e(981631);
function h(n) {
    let { initialPlanId: t, activeSubscription: i, analyticsObject: a, analyticsLocation: u, analyticsLocations: c, analyticsSubscriptionType: p, renderHeader: f, planGroup: h, skuId: S, guildId: Z, reviewWarningMessage: g, applicationId: E, showBenefitsFirst: A, onComplete: b, forcesTransitionToGuild: x } = n,
        N = (0, r.Z)(),
        L = !1;
    (0, s.ZDy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(e.bind(e, 563132)),
                r = (await e.e('7458').then(e.bind(e, 405083))).default,
                { getApplicationPaymentSteps: s } = await e.e('86513').then(e.bind(e, 759386)),
                o = s({
                    guildId: Z,
                    showBenefitsFirst: A
                });
            return (e) =>
                (0, l.jsx)(n, {
                    loadId: N,
                    applicationId: E,
                    activeSubscription: i,
                    stepConfigs: o,
                    skuIDs: [S],
                    children: (0, l.jsx)(m.KB, {
                        children: (0, l.jsx)(r, {
                            ...e,
                            initialPlanId: t,
                            skuId: S,
                            analyticsLocations: c,
                            analyticsObject: a,
                            analyticsLocation: u,
                            analyticsSubscriptionType: p,
                            renderHeader: f,
                            planGroup: h,
                            reviewWarningMessage: g,
                            applicationId: E,
                            guildId: null != Z ? Z : void 0,
                            onComplete: () => {
                                (L = !0), null == b || b();
                            },
                            forcesTransitionToGuild: x
                        })
                    })
                });
        },
        {
            onCloseCallback: () => {
                L ||
                    (v.default.track(I.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: N,
                        payment_type: I.Zuq[I.GZQ.SUBSCRIPTION],
                        location: null != u ? u : a,
                        is_gift: !1,
                        sku_id: S,
                        application_id: E,
                        location_stack: c
                    }),
                    (0, o.fw)(),
                    (0, d.p)());
            },
            onCloseRequest: I.dG4
        }
    );
}
let S = async (n, t) => {
    let e = (await (0, u.yD)(n)).filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date()).find((n) => n.sku_id === t);
    a()(null == e, 'User already has an active subscription to this SKU');
};
async function Z(n) {
    var t;
    let { applicationId: e, skuId: l, initialPlanId: i, analyticsLocationObject: r, analyticsLocations: s, renderHeader: u } = n,
        o = f.Z.get(l),
        d = p.Z.getForSKU(l);
    a()(null != o, 'Failed to find SKU');
    let v = (0, c.KW)(o.flags);
    a()(v, 'Guild application subscriptions unsupported!'),
        await S(e, l),
        h({
            initialPlanId: null != i ? i : null === (t = d[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: s,
            analyticsLocationObject: r,
            analyticsSubscriptionType: I.NYc.APPLICATION,
            renderHeader: u,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e
        });
}
