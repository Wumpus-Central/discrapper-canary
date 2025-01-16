e.d(t, {
    h: function () {
        return S;
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
    I = e(981631);
function S(n) {
    let { initialPlanId: t, activeSubscription: l, analyticsObject: r, analyticsLocation: o, analyticsLocations: d, analyticsSubscriptionType: f, renderHeader: p, planGroup: S, skuId: h, guildId: g, reviewWarningMessage: Z, applicationId: A, showBenefitsFirst: N, onComplete: b, forcesTransitionToGuild: E } = n,
        P = (0, u.Z)(),
        C = !1;
    (0, a.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(e.bind(e, 563132)),
                u = (await Promise.all([e.e('52249'), e.e('26182'), e.e('32776'), e.e('62347')]).then(e.bind(e, 405083))).default,
                { getApplicationPaymentSteps: a } = await Promise.all([e.e('77298'), e.e('23357'), e.e('12013'), e.e('68956'), e.e('26182'), e.e('95900'), e.e('34958')]).then(e.bind(e, 759386)),
                s = a({
                    guildId: g,
                    showBenefitsFirst: N
                });
            return (e) =>
                (0, i.jsx)(n, {
                    loadId: P,
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
                            planGroup: S,
                            reviewWarningMessage: Z,
                            applicationId: A,
                            guildId: null != g ? g : void 0,
                            onComplete: () => {
                                (C = !0), null == b || b();
                            },
                            forcesTransitionToGuild: E
                        })
                    })
                });
        },
        {
            onCloseCallback: () => {
                !C &&
                    (m.default.track(I.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: P,
                        payment_type: I.Zuq[I.GZQ.SUBSCRIPTION],
                        location: null != o ? o : r,
                        is_gift: !1,
                        sku_id: h,
                        application_id: A,
                        location_stack: d
                    }),
                    (0, s.fw)(),
                    (0, c.p)());
            },
            onCloseRequest: I.dG4
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
        S({
            initialPlanId: null != l ? l : null === (t = c[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: u,
            analyticsSubscriptionType: I.NYc.APPLICATION,
            renderHeader: o,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e
        });
}
