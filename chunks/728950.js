i.d(t, { A: () => c });
var l = i(627968);
i(64700);
var n = i(397927),
    a = i(937008),
    s = i(491057),
    r = i(652215);
function c(e) {
    let {
        initialPlanId: t,
        activeSubscription: c,
        trialId: d,
        trialFooterMessageOverride: o,
        onClose: u,
        analyticsObject: m,
        analyticsLocation: x,
        analyticsLocations: h,
        analyticsSubscriptionType: g,
        renderHeader: v,
        renderPurchaseConfirmation: j,
        planGroup: A,
        reviewWarningMessage: f,
        skuId: p,
    } = e;
    (0, n.mMO)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(i.bind(i, 156312)),
                { PaymentModal: n } = await Promise.resolve().then(i.bind(i, 546042)),
                { STEPS: r } = await Promise.all([
                    i.e("41353"),
                    i.e("62175"),
                    i.e("12437"),
                    i.e("29716"),
                    i.e("14704"),
                    i.e("2824"),
                    i.e("45123"),
                ]).then(i.bind(i, 674619));
            return (i) => {
                let { onClose: _, ...N } = i;
                return (0, l.jsx)(e, {
                    activeSubscription: c,
                    stepConfigs: r,
                    skuIDs: [p],
                    children: (0, l.jsx)(s.Qt, {
                        children: (0, l.jsx)(a.dX, {
                            children: (0, l.jsx)(n, {
                                ...N,
                                initialPlanId: t,
                                onClose: (e) => {
                                    _(), u?.(e);
                                },
                                analyticsLocations: h,
                                analyticsObject: m,
                                analyticsLocation: x,
                                analyticsSubscriptionType: g,
                                skuId: p,
                                renderHeader: v,
                                renderPurchaseConfirmation: j,
                                planGroup: A,
                                trialId: d,
                                trialFooterMessageOverride: o,
                                reviewWarningMessage: f,
                            }),
                        }),
                    }),
                });
            };
        },
        {
            onCloseCallback: () => {
                u?.(!1);
            },
            onCloseRequest: r.tEg,
        },
    );
}
