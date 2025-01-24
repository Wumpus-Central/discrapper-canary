r.d(n, {
    b: function () {
        return s;
    },
    y: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2025-01_checkout_optimization_apple_pay',
    label: 'Checkout Optimization Apple Pay',
    defaultConfig: {
        enabled: !1,
        delay: !1
    },
    commonTriggerPoint: a.$P.PAYMENT_FLOW_STARTED,
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
    return o.getCurrentConfig({ location: 'apple_pay' }, { autoTrackExposure: !0 });
}
