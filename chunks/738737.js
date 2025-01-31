n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(987209),
    r = n(981631);
function s(e) {
    let { initialPlanId: t, activeSubscription: s, trialId: o, trialFooterMessageOverride: c, onClose: d, analyticsObject: u, analyticsLocation: m, analyticsLocations: h, analyticsSubscriptionType: _, renderHeader: p, renderPurchaseConfirmation: g, planGroup: f, reviewWarningMessage: x, skuId: E } = e;
    (0, l.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: l } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: r } = await Promise.all([n.e('8016'), n.e('17938'), n.e('54433'), n.e('31259')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: C, ...v } = n;
                return (0, i.jsx)(e, {
                    activeSubscription: s,
                    stepConfigs: r,
                    skuIDs: [E],
                    children: (0, i.jsx)(a.KB, {
                        children: (0, i.jsx)(l, {
                            ...v,
                            initialPlanId: t,
                            onClose: (e) => {
                                C(), null == d || d(e);
                            },
                            analyticsLocations: h,
                            analyticsObject: u,
                            analyticsLocation: m,
                            analyticsSubscriptionType: _,
                            skuId: E,
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
