"use strict";
i.d(t, { A: () => C });
var n = i(627968);
i(64700);
var a = i(132500),
    l = i(192308),
    o = i(391048),
    s = i(636099),
    r = i(742810),
    c = i(954571),
    d = i(652215);
function C(e) {
    let {
            applicationId: t,
            skuId: C,
            onClose: u,
            onComplete: f,
            analyticsLocations: _,
            analyticsLocationObject: p,
            contextKey: h,
            isGift: L = !1,
            checkoutFlow: I,
        } = e,
        g = !1,
        b = (0, a.A)();
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await i.e("28424").then(i.bind(i, 519259));
            return (i) => {
                let { onClose: a, ...l } = i;
                return (0, n.jsx)(e, {
                    ...l,
                    loadId: b,
                    applicationId: t,
                    skuId: C,
                    analyticsLocations: _,
                    analyticsLocationObject: p,
                    isGift: L,
                    onClose: (e) => {
                        a(), u?.(e);
                    },
                    onComplete: (e) => {
                        (g = !0), f?.(e);
                    },
                    checkoutFlow: I,
                });
            };
        },
        {
            contextKey: h,
            onCloseCallback: () => {
                if (!g) {
                    let e = (0, r.q1)({ location: "StandardOneTimePaymentModal", unifiedCheckoutFlow: I });
                    c.default.track(d.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: b,
                        payment_type: d.frM[d.VVm.ONE_TIME],
                        location: p,
                        is_gift: L,
                        sku_id: C,
                        application_id: t,
                        location_stack: _,
                        checkout_design: e ? r.rS.UNIFIED : r.rS.LEGACY,
                        checkout_flow: I,
                    });
                }
                (0, o.ET)(), (0, s.z)(), u?.(g);
            },
            onCloseRequest: d.tEg,
        },
    );
}
