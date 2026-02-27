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
            onClose: p,
            onComplete: S,
            analyticsLocations: I,
            analyticsLocationObject: A,
            contextKey: _,
            isGift: T = !1,
        } = t,
        E = !1,
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
                        l(), p?.(t);
                    },
                    onComplete: (t) => {
                        (E = !0), S?.(t);
                    },
                });
            };
        },
        {
            contextKey: _,
            onCloseCallback: () => {
                if (!E) {
                    let t = (0, u.q1)({ location: "StandardOneTimePaymentModal" });
                    o.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: f,
                        payment_type: c.frM[c.VVm.ONE_TIME],
                        location: A,
                        is_gift: T,
                        sku_id: d,
                        application_id: e,
                        location_stack: I,
                        checkout_design: t ? u.rS.UNIFIED : u.rS.LEGACY,
                    });
                }
                (0, a.ET)(), (0, r.z)(), p?.(E);
            },
            onCloseRequest: c.tEg,
        },
    );
}
