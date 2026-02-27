i.d(e, { A: () => f, l: () => N }), i(938796);
var n = i(627968);
i(64700);
var l = i(284009),
    s = i.n(l),
    a = i(835245),
    r = i(397927),
    u = i(339048),
    o = i(391048),
    c = i(636099),
    d = i(608805),
    p = i(163437),
    S = i(97352),
    I = i(67480),
    A = i(954571),
    _ = i(937008),
    T = i(491057),
    E = i(652215);
function f(t) {
    let {
            initialPlanId: e,
            activeSubscription: l,
            analyticsObject: s,
            analyticsLocation: u,
            analyticsLocations: p,
            analyticsSubscriptionType: S,
            renderHeader: I,
            planGroup: f,
            skuId: C,
            guildId: N,
            reviewWarningMessage: h,
            applicationId: g,
            showBenefitsFirst: m,
            onComplete: P,
            forcesTransitionToGuild: L,
        } = t,
        O = (0, a.A)(),
        F = !1;
    (0, r.mMO)(
        async () => {
            let { PaymentContextProvider: t } = await Promise.resolve().then(i.bind(i, 156312)),
                a = (await i.e("50371").then(i.bind(i, 97491))).default,
                { getApplicationPaymentSteps: r } = await i.e("50243").then(i.bind(i, 107854)),
                o = r({ guildId: N, showBenefitsFirst: m });
            return (i) =>
                (0, n.jsx)(t, {
                    loadId: O,
                    applicationId: g,
                    activeSubscription: l,
                    stepConfigs: o,
                    skuIDs: [C],
                    children: (0, n.jsx)(T.Qt, {
                        children: (0, n.jsx)(_.dX, {
                            children: (0, n.jsx)(a, {
                                ...i,
                                initialPlanId: e,
                                skuId: C,
                                analyticsLocations: p,
                                analyticsObject: s,
                                analyticsLocation: u,
                                analyticsSubscriptionType: S,
                                renderHeader: I,
                                planGroup: f,
                                reviewWarningMessage: h,
                                applicationId: g,
                                guildId: N ?? void 0,
                                onComplete: () => {
                                    (F = !0), P?.();
                                },
                                forcesTransitionToGuild: L,
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                if (!F) {
                    let t = (0, d.q1)({ location: "ApplicationPaymentModal" });
                    A.default.track(E.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: O,
                        payment_type: E.frM[E.VVm.SUBSCRIPTION],
                        location: u ?? s,
                        is_gift: !1,
                        sku_id: C,
                        application_id: g,
                        location_stack: p,
                        checkout_design: t ? d.rS.UNIFIED : d.rS.LEGACY,
                    }),
                        (0, o.ET)(),
                        (0, c.z)();
                }
            },
            onCloseRequest: E.tEg,
        },
    );
}
let C = async (t, e) => {
    let i = (await (0, u.LM)(t))
        .filter((t) => null == t.ends_at || new Date(t.ends_at) > new Date())
        .find((t) => t.sku_id === e);
    s()(null == i, "User already has an active subscription to this SKU");
};
async function N(t) {
    let {
            applicationId: e,
            skuId: i,
            initialPlanId: n,
            analyticsLocationObject: l,
            analyticsLocations: a,
            renderHeader: r,
        } = t,
        u = I.A.get(i),
        o = S.A.getForSKU(i);
    s()(null != u, "Failed to find SKU");
    let c = (0, p.bg)(u.flags);
    s()(c, "Guild application subscriptions unsupported!"),
        await C(e, i),
        f({
            initialPlanId: n ?? o[0]?.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: l,
            analyticsSubscriptionType: E.rzx.APPLICATION,
            renderHeader: r,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e,
        });
}
