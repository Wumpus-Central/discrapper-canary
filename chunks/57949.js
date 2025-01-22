n.d(t, {
    z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(772848),
    l = n(481060),
    a = n(159351),
    o = n(667),
    s = n(626135),
    c = n(981631);
function u(e) {
    let { guildProductListing: t, guildId: u, sourceAnalyticsLocations: d } = e,
        m = !1,
        h = (0, r.Z)(),
        f = t.id,
        p = () => {
            m = !0;
        };
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await n.e('88806').then(n.bind(n, 578780));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    applicationId: t.application_id,
                    skuId: f,
                    sourceAnalyticsLocations: d,
                    guildProductContext: {
                        guildProductListingId: t.id,
                        guildId: u
                    },
                    loadId: h,
                    onComplete: p
                });
        },
        {
            onCloseCallback: () => {
                !m &&
                    s.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: h,
                        payment_type: c.Zuq[c.GZQ.ONE_TIME],
                        is_gift: !1,
                        sku_id: f,
                        location_stack: Array.isArray(d) ? d : [d]
                    }),
                    (0, a.fw)(),
                    (0, o.p)();
            },
            onCloseRequest: c.dG4
        }
    );
}
