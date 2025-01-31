n.d(t, {
    b: () => s,
    y: () => a
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2025-01_checkout_optimization_apple_pay',
    label: 'Checkout Optimization Apple Pay',
    defaultConfig: {
        enabled: !1,
        delay: !1
    },
    commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
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
function s() {
    return a.getCurrentConfig({ location: 'apple_pay' }, { autoTrackExposure: !0 });
}
