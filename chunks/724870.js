e.d(t, {
    h: function () {
        return I;
    },
    m: function () {
        return g;
    }
}),
    e(789020);
var i = e(200651);
e(192379);
var l = e(512722),
    r = e.n(l),
    u = e(772848),
    a = e(481060),
    o = e(496929),
    s = e(159351),
    c = e(667),
    d = e(171246),
    f = e(509545),
    p = e(55563),
    m = e(626135),
    v = e(987209),
    S = e(981631);
function I(n) {
    let { initialPlanId: t, activeSubscription: l, analyticsObject: r, analyticsLocation: o, analyticsLocations: d, analyticsSubscriptionType: f, renderHeader: p, planGroup: I, skuId: h, guildId: g, reviewWarningMessage: Z, applicationId: A, showBenefitsFirst: b, onComplete: E, forcesTransitionToGuild: N } = n,
        L = (0, u.Z)(),
        C = !1;
    (0, a.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(e.bind(e, 563132)),
                u = (await e.e('7458').then(e.bind(e, 405083))).default,
                { getApplicationPaymentSteps: a } = await e.e('86513').then(e.bind(e, 759386)),
                s = a({
                    guildId: g,
                    showBenefitsFirst: b
                });
            return (e) =>
                (0, i.jsx)(n, {
                    loadId: L,
                    applicationId: A,
                    activeSubscription: l,
                    stepConfigs: s,
                    skuIDs: [h],
                    children: (0, i.jsx)(v.KB, {
                        children: (0, i.jsx)(u, {
                            ...e,
                            initialPlanId: t,
                            skuId: h,
                            analyticsLocations: d,
                            analyticsObject: r,
                            analyticsLocation: o,
                            analyticsSubscriptionType: f,
                            renderHeader: p,
                            planGroup: I,
                            reviewWarningMessage: Z,
                            applicationId: A,
                            guildId: null != g ? g : void 0,
                            onComplete: () => {
                                (C = !0), null == E || E();
                            },
                            forcesTransitionToGuild: N
                        })
                    })
                });
        },
        {
            onCloseCallback: () => {
                !C &&
                    (m.default.track(S.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: L,
                        payment_type: S.Zuq[S.GZQ.SUBSCRIPTION],
                        location: null != o ? o : r,
                        is_gift: !1,
                        sku_id: h,
                        application_id: A,
                        location_stack: d
                    }),
                    (0, s.fw)(),
                    (0, c.p)());
            },
            onCloseRequest: S.dG4
        }
    );
}
let h = async (n, t) => {
    let e = (await (0, o.yD)(n)).filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date()).find((n) => n.sku_id === t);
    r()(null == e, 'User already has an active subscription to this SKU');
};
async function g(n) {
    var t;
    let { applicationId: e, skuId: i, initialPlanId: l, analyticsLocationObject: u, analyticsLocations: a, renderHeader: o } = n,
        s = p.Z.get(i),
        c = f.Z.getForSKU(i);
    r()(null != s, 'Failed to find SKU');
    let m = (0, d.KW)(s.flags);
    r()(m, 'Guild application subscriptions unsupported!'),
        await h(e, i),
        I({
            initialPlanId: null != l ? l : null === (t = c[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: u,
            analyticsSubscriptionType: S.NYc.APPLICATION,
            renderHeader: o,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e
        });
}
