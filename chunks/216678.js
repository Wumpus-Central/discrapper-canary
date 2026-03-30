i.d(e, { A: () => d });
var n = i(627968);
i(64700);
var l = i(835245),
    s = i(397927),
    a = i(391048),
    r = i(636099),
    u = i(608805),
    o = i(954571),
    c = i(652215);
function d(t) {
    let {
            applicationId: e,
            skuId: d,
            onClose: S,
            onComplete: p,
            analyticsLocations: I,
            analyticsLocationObject: A,
            contextKey: _,
            isGift: T = !1,
            checkoutFlow: E,
        } = t,
        C = !1,
        f = (0, l.A)();
    (0, s.mMO)(
        async () => {
            let { default: t } = await i.e("53068").then(i.bind(i, 226151));
            return (i) => {
                let { onClose: l, ...s } = i;
                return (0, n.jsx)(t, {
                    ...s,
                    loadId: f,
                    applicationId: e,
                    skuId: d,
                    analyticsLocations: I,
                    analyticsLocationObject: A,
                    isGift: T,
                    onClose: (t) => {
                        l(), S?.(t);
                    },
                    onComplete: (t) => {
                        (C = !0), p?.(t);
                    },
                    checkoutFlow: E,
                });
            };
        },
        {
            contextKey: _,
            onCloseCallback: () => {
                if (!C) {
                    let t = (0, u.q1)({ location: "StandardOneTimePaymentModal", unifiedCheckoutFlow: E });
                    o.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: f,
                        payment_type: c.frM[c.VVm.ONE_TIME],
                        location: A,
                        is_gift: T,
                        sku_id: d,
                        application_id: e,
                        location_stack: I,
                        checkout_design: t ? u.rS.UNIFIED : u.rS.LEGACY,
                        checkout_flow: E,
                    });
                }
                (0, a.ET)(), (0, r.z)(), S?.(C);
            },
            onCloseRequest: c.tEg,
        },
    );
}
