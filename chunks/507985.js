n.d(t, { a: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-06_google_play_price_change_notice_ks',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    label: 'Google Play Price Change Notice Killswitch',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Force disable Google Play price change notice DC',
            config: { enabled: !0 }
        }
    ]
});
