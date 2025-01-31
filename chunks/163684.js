n.d(t, { g: () => a });
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-06_outbound_promo_desktop_upsell',
    label: 'Upsell Outbound Promos',
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
