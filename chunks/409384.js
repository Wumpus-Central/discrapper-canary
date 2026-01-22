n.d(t, {
    M: () => l,
});
var r = n(600975),
    i = n(688151);
let l = (0, r.C)({
    kind: "user",
    id: "2025-06_google_play_price_change_notice_ks",
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    label: "Google Play Price Change Notice Killswitch",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Force disable Google Play price change notice DC",
            config: {
                enabled: !0,
            },
        },
    ],
});
