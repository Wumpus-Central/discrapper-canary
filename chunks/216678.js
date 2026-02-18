i.d(e, { A: () => c });
var n = i(627968);
i(64700);
var l = i(835245),
    s = i(397927),
    r = i(391048),
    a = i(636099),
    u = i(954571),
    o = i(652215);
function c(t) {
    let {
            applicationId: e,
            skuId: c,
            onClose: d,
            onComplete: p,
            analyticsLocations: S,
            analyticsLocationObject: I,
            contextKey: A,
            isGift: _ = !1,
        } = t,
        T = !1,
        E = (0, l.A)();
    (0, s.mMO)(
        async () => {
            let { default: t } = await i.e("53068").then(i.bind(i, 226151));
            return (i) => {
                let { onClose: l, ...s } = i;
                return (0, n.jsx)(t, {
                    ...s,
                    loadId: E,
                    applicationId: e,
                    skuId: c,
                    analyticsLocations: S,
                    analyticsLocationObject: I,
                    isGift: _,
                    onClose: (t) => {
                        l(), d?.(t);
                    },
                    onComplete: (t) => {
                        (T = !0), p?.(t);
                    },
                });
            };
        },
        {
            contextKey: A,
            onCloseCallback: () => {
                T ||
                    u.default.track(o.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: E,
                        payment_type: o.frM[o.VVm.ONE_TIME],
                        location: I,
                        is_gift: _,
                        sku_id: c,
                        application_id: e,
                        location_stack: S,
                    }),
                    (0, r.ET)(),
                    (0, a.z)(),
                    d?.(T);
            },
            onCloseRequest: o.tEg,
        },
    );
}
