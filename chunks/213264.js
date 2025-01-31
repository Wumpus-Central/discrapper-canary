n.d(t, {
    s: () => s,
    u: () => a
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    id: '2024-11_nitro_basic_upsell',
    label: 'Nitro Basic Upsell',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }).enabled;
}
