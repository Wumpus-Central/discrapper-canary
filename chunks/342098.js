i.d(e, { A: () => E, l: () => C }), i(938796);
var n = i(627968);
i(64700);
var l = i(284009),
    s = i.n(l),
    r = i(835245),
    a = i(397927),
    u = i(339048),
    o = i(391048),
    c = i(636099),
    d = i(163437),
    p = i(97352),
    S = i(67480),
    I = i(954571),
    A = i(937008),
    _ = i(491057),
    T = i(652215);
function E(t) {
    let {
            initialPlanId: e,
            activeSubscription: l,
            analyticsObject: s,
            analyticsLocation: u,
            analyticsLocations: d,
            analyticsSubscriptionType: p,
            renderHeader: S,
            planGroup: E,
            skuId: f,
            guildId: C,
            reviewWarningMessage: N,
            applicationId: h,
            showBenefitsFirst: g,
            onComplete: m,
            forcesTransitionToGuild: P,
        } = t,
        L = (0, r.A)(),
        O = !1;
    (0, a.mMO)(
        async () => {
            let { PaymentContextProvider: t } = await Promise.resolve().then(i.bind(i, 156312)),
                r = (await i.e("50371").then(i.bind(i, 97491))).default,
                { getApplicationPaymentSteps: a } = await i.e("50243").then(i.bind(i, 107854)),
                o = a({ guildId: C, showBenefitsFirst: g });
            return (i) =>
                (0, n.jsx)(t, {
                    loadId: L,
                    applicationId: h,
                    activeSubscription: l,
                    stepConfigs: o,
                    skuIDs: [f],
                    children: (0, n.jsx)(_.Qt, {
                        children: (0, n.jsx)(A.dX, {
                            children: (0, n.jsx)(r, {
                                ...i,
                                initialPlanId: e,
                                skuId: f,
                                analyticsLocations: d,
                                analyticsObject: s,
                                analyticsLocation: u,
                                analyticsSubscriptionType: p,
                                renderHeader: S,
                                planGroup: E,
                                reviewWarningMessage: N,
                                applicationId: h,
                                guildId: C ?? void 0,
                                onComplete: () => {
                                    (O = !0), m?.();
                                },
                                forcesTransitionToGuild: P,
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                O ||
                    (I.default.track(T.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: L,
                        payment_type: T.frM[T.VVm.SUBSCRIPTION],
                        location: u ?? s,
                        is_gift: !1,
                        sku_id: f,
                        application_id: h,
                        location_stack: d,
                    }),
                    (0, o.ET)(),
                    (0, c.z)());
            },
            onCloseRequest: T.tEg,
        },
    );
}
let f = async (t, e) => {
    let i = (await (0, u.LM)(t))
        .filter((t) => null == t.ends_at || new Date(t.ends_at) > new Date())
        .find((t) => t.sku_id === e);
    s()(null == i, "User already has an active subscription to this SKU");
};
async function C(t) {
    let {
            applicationId: e,
            skuId: i,
            initialPlanId: n,
            analyticsLocationObject: l,
            analyticsLocations: r,
            renderHeader: a,
        } = t,
        u = S.A.get(i),
        o = p.A.getForSKU(i);
    s()(null != u, "Failed to find SKU");
    let c = (0, d.bg)(u.flags);
    s()(c, "Guild application subscriptions unsupported!"),
        await f(e, i),
        E({
            initialPlanId: n ?? o[0]?.id,
            activeSubscription: null,
            analyticsLocations: r,
            analyticsLocationObject: l,
            analyticsSubscriptionType: T.rzx.APPLICATION,
            renderHeader: a,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e,
        });
}
