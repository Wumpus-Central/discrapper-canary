i.d(t, { A: () => c });
var l = i(627968);
i(64700);
var n = i(397927),
    a = i(589078),
    s = i(937008),
    r = i(491057),
    d = i(652215);
function c(e) {
    let {
        initialPlanId: t,
        activeSubscription: c,
        trialId: o,
        trialFooterMessageOverride: u,
        onClose: m,
        analyticsObject: x,
        analyticsLocation: h,
        analyticsLocations: g,
        analyticsSubscriptionType: v,
        renderHeader: j,
        renderPurchaseConfirmation: A,
        planGroup: f,
        reviewWarningMessage: p,
        skuId: _,
    } = e;
    (0, n.mMO)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(i.bind(i, 156312)),
                { PaymentModal: n } = await Promise.resolve().then(i.bind(i, 546042)),
                { STEPS: d } = await Promise.all([
                    i.e("41353"),
                    i.e("62175"),
                    i.e("94212"),
                    i.e("29716"),
                    i.e("14704"),
                    i.e("2824"),
                    i.e("73295"),
                ]).then(i.bind(i, 674619));
            return (i) => {
                let { onClose: N, ...b } = i;
                return (0, l.jsx)(e, {
                    activeSubscription: c,
                    stepConfigs: d,
                    skuIDs: [_],
                    unifiedCheckoutFlow: a.CL.GUILD_ROLE_CHECKOUT,
                    children: (0, l.jsx)(r.Qt, {
                        children: (0, l.jsx)(s.dX, {
                            children: (0, l.jsx)(n, {
                                ...b,
                                initialPlanId: t,
                                onClose: (e) => {
                                    N(), m?.(e);
                                },
                                analyticsLocations: g,
                                analyticsObject: x,
                                analyticsLocation: h,
                                analyticsSubscriptionType: v,
                                skuId: _,
                                renderHeader: j,
                                renderPurchaseConfirmation: A,
                                planGroup: f,
                                trialId: o,
                                trialFooterMessageOverride: u,
                                reviewWarningMessage: p,
                            }),
                        }),
                    }),
                });
            };
        },
        {
            onCloseCallback: () => {
                m?.(!1);
            },
            onCloseRequest: d.tEg,
        },
    );
}
