"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(937008),
    s = n(491057),
    o = n(652215);
function l(e) {
    let {
        initialPlanId: t,
        activeSubscription: l,
        trialId: u,
        trialFooterMessageOverride: c,
        onClose: d,
        analyticsObject: _,
        analyticsLocation: f,
        analyticsLocations: p,
        analyticsSubscriptionType: h,
        renderHeader: m,
        renderPurchaseConfirmation: g,
        planGroup: E,
        reviewWarningMessage: A,
        skuId: I,
    } = e;
    (0, i.mMO)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 156312)),
                { PaymentModal: i } = await Promise.resolve().then(n.bind(n, 546042)),
                { STEPS: o } = await Promise.all([
                    n.e("62175"),
                    n.e("2292"),
                    n.e("14704"),
                    n.e("29716"),
                    n.e("2824"),
                    n.e("28138"),
                ]).then(n.bind(n, 674619));
            return (n) => {
                let { onClose: T, ...y } = n;
                return (0, r.jsx)(e, {
                    activeSubscription: l,
                    stepConfigs: o,
                    skuIDs: [I],
                    children: (0, r.jsx)(s.Qt, {
                        children: (0, r.jsx)(a.dX, {
                            children: (0, r.jsx)(i, {
                                ...y,
                                initialPlanId: t,
                                onClose: (e) => {
                                    T(), d?.(e);
                                },
                                analyticsLocations: p,
                                analyticsObject: _,
                                analyticsLocation: f,
                                analyticsSubscriptionType: h,
                                skuId: I,
                                renderHeader: m,
                                renderPurchaseConfirmation: g,
                                planGroup: E,
                                trialId: u,
                                trialFooterMessageOverride: c,
                                reviewWarningMessage: A,
                            }),
                        }),
                    }),
                });
            };
        },
        {
            onCloseCallback: () => {
                d?.(!1);
            },
            onCloseRequest: o.tEg,
        },
    );
}
