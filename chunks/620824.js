n.d(t, {
    b: () => a,
    y: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-01_checkout_optimization_apple_pay',
    label: 'Checkout Optimization Apple Pay',
    defaultConfig: {
        enabled: !1,
        delay: !1
    },
    commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: {
                enabled: !0,
                delay: !0
            }
        }
    ]
});
function a() {
    return o.getCurrentConfig({ location: 'apple_pay' }, { autoTrackExposure: !0 });
}
