n.d(t, {
    s: () => a,
    u: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    id: '2024-11_nitro_basic_upsell',
    label: 'Nitro Basic Upsell',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    return o.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }).enabled;
}
