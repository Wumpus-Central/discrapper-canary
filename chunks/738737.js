n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(987209),
    r = n(981631);
function s(e) {
    let { initialPlanId: t, activeSubscription: s, trialId: o, trialFooterMessageOverride: c, onClose: d, analyticsObject: u, analyticsLocation: m, analyticsLocations: _, analyticsSubscriptionType: h, renderHeader: p, renderPurchaseConfirmation: g, planGroup: f, reviewWarningMessage: x, skuId: C } = e;
    (0, l.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: l } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: r } = await Promise.all([n.e('8016'), n.e('17938'), n.e('54433'), n.e('61349')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: v, ...E } = n;
                return (0, i.jsx)(e, {
                    activeSubscription: s,
                    stepConfigs: r,
                    skuIDs: [C],
                    children: (0, i.jsx)(a.KB, {
                        children: (0, i.jsx)(l, {
                            ...E,
                            initialPlanId: t,
                            onClose: (e) => {
                                v(), null == d || d(e);
                            },
                            analyticsLocations: _,
                            analyticsObject: u,
                            analyticsLocation: m,
                            analyticsSubscriptionType: h,
                            skuId: C,
                            renderHeader: p,
                            renderPurchaseConfirmation: g,
                            planGroup: f,
                            trialId: o,
                            trialFooterMessageOverride: c,
                            reviewWarningMessage: x
                        })
                    })
                });
            };
        },
        {
            onCloseCallback: () => {
                null == d || d(!1);
            },
            onCloseRequest: r.dG4
        }
    );
}
