r.d(n, {
    g: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-06_outbound_promo_desktop_upsell',
    label: 'Upsell Outbound Promos',
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: {
        enabled: !1,
        getNitroCTA: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable upsells for outbound promos w/ Nagbar variant 1 - gift inventory cta',
            config: {
                enabled: !0,
                getNitroCTA: !1
            }
        }
    ]
});
