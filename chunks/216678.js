o.d(a, { A: () => p });
var e = o(627968);
o(64700);
var i = o(132500),
    n = o(192308),
    l = o(391048),
    c = o(636099),
    s = o(742810),
    d = o(954571),
    u = o(652215);
function p(t) {
    let {
            applicationId: a,
            skuId: p,
            onClose: r,
            onComplete: k,
            analyticsLocations: _,
            analyticsLocationObject: C,
            contextKey: h,
            isGift: f = !1,
            checkoutFlow: E,
        } = t,
        w = !1,
        y = (0, i.A)();
    (0, n.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([o.e("22509"), o.e("28424")]).then(o.bind(o, 519259));
            return (o) => {
                let { onClose: i, ...n } = o;
                return (0, e.jsx)(t, {
                    ...n,
                    loadId: y,
                    applicationId: a,
                    skuId: p,
                    analyticsLocations: _,
                    analyticsLocationObject: C,
                    isGift: f,
                    onClose: (t) => {
                        i(), r?.(t);
                    },
                    onComplete: (t) => {
                        (w = !0), k?.(t);
                    },
                    checkoutFlow: E,
                });
            };
        },
        {
            contextKey: h,
            onCloseCallback: () => {
                if (!w) {
                    let t = (0, s.q1)({ location: "StandardOneTimePaymentModal", unifiedCheckoutFlow: E });
                    d.default.track(u.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: y,
                        payment_type: u.frM[u.VVm.ONE_TIME],
                        location: C,
                        is_gift: f,
                        sku_id: p,
                        application_id: a,
                        location_stack: _,
                        checkout_design: t ? s.rS.UNIFIED : s.rS.LEGACY,
                        checkout_flow: E,
                    });
                }
                (0, l.ET)(), (0, c.z)(), r?.(w);
            },
            onCloseRequest: u.tEg,
        },
    );
}
