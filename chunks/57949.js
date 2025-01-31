n.d(t, { z: () => d });
var i = n(200651);
n(192379);
var l = n(772848),
    a = n(481060),
    r = n(159351),
    s = n(667),
    o = n(626135),
    c = n(981631);
function d(e) {
    let { guildProductListing: t, guildId: d, sourceAnalyticsLocations: u } = e,
        m = !1,
        h = (0, l.Z)(),
        _ = t.id,
        p = () => {
            m = !0;
        };
    (0, a.ZDy)(
        async () => {
            let { default: e } = await n.e('88806').then(n.bind(n, 578780));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    applicationId: t.application_id,
                    skuId: _,
                    sourceAnalyticsLocations: u,
                    guildProductContext: {
                        guildProductListingId: t.id,
                        guildId: d
                    },
                    loadId: h,
                    onComplete: p
                });
        },
        {
            onCloseCallback: () => {
                m ||
                    o.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: h,
                        payment_type: c.Zuq[c.GZQ.ONE_TIME],
                        is_gift: !1,
                        sku_id: _,
                        location_stack: Array.isArray(u) ? u : [u]
                    }),
                    (0, r.fw)(),
                    (0, s.p)();
            },
            onCloseRequest: c.dG4
        }
    );
}
