n.d(t, {
    m: () => a,
});
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    kind: "user",
    id: "2024-06_outbound_promo_desktop_upsell",
    label: "Upsell Outbound Promos",
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable upsells for outbound promos w/ Nagbar variant 1 - gift inventory cta",
            config: {
                enabled: !0,
            },
        },
    ],
});
