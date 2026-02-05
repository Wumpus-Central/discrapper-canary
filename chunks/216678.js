"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(835245),
    a = n(397927),
    s = n(391048),
    o = n(636099),
    l = n(954571),
    u = n(652215);
function c(e) {
    let {
            applicationId: t,
            skuId: c,
            onClose: d,
            onComplete: _,
            analyticsLocations: f,
            analyticsLocationObject: p,
            contextKey: h,
            isGift: m = !1,
        } = e,
        g = !1,
        E = (0, i.A)();
    (0, a.mMO)(
        async () => {
            let { default: e } = await n.e("53068").then(n.bind(n, 226151));
            return (n) => {
                let { onClose: i, ...a } = n;
                return (0, r.jsx)(e, {
                    ...a,
                    loadId: E,
                    applicationId: t,
                    skuId: c,
                    analyticsLocations: f,
                    analyticsLocationObject: p,
                    isGift: m,
                    onClose: (e) => {
                        i(), d?.(e);
                    },
                    onComplete: (e) => {
                        (g = !0), _?.(e);
                    },
                });
            };
        },
        {
            contextKey: h,
            onCloseCallback: () => {
                g ||
                    l.default.track(u.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: E,
                        payment_type: u.frM[u.VVm.ONE_TIME],
                        location: p,
                        is_gift: m,
                        sku_id: c,
                        application_id: t,
                        location_stack: f,
                    }),
                    (0, s.ET)(),
                    (0, o.z)(),
                    d?.(g);
            },
            onCloseRequest: u.tEg,
        },
    );
}
