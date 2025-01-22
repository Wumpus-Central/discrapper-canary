n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(987209),
    a = n(981631);
function o(e) {
    let { initialPlanId: t, activeSubscription: o, trialId: s, trialFooterMessageOverride: c, onClose: u, analyticsObject: d, analyticsLocation: m, analyticsLocations: h, analyticsSubscriptionType: f, renderHeader: p, renderPurchaseConfirmation: _, planGroup: g, reviewWarningMessage: E, skuId: C } = e;
    (0, r.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: r } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: a } = await Promise.all([n.e('8016'), n.e('17938'), n.e('54433'), n.e('31259')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: I, ...x } = n;
                return (0, i.jsx)(e, {
                    activeSubscription: o,
                    stepConfigs: a,
                    skuIDs: [C],
                    children: (0, i.jsx)(l.KB, {
                        children: (0, i.jsx)(r, {
                            ...x,
                            initialPlanId: t,
                            onClose: (e) => {
                                I(), null == u || u(e);
                            },
                            analyticsLocations: h,
                            analyticsObject: d,
                            analyticsLocation: m,
                            analyticsSubscriptionType: f,
                            skuId: C,
                            renderHeader: p,
                            renderPurchaseConfirmation: _,
                            planGroup: g,
                            trialId: s,
                            trialFooterMessageOverride: c,
                            reviewWarningMessage: E
                        })
                    })
                });
            };
        },
        {
            onCloseCallback: () => {
                null == u || u(!1);
            },
            onCloseRequest: a.dG4
        }
    );
}
