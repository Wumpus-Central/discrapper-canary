r.d(n, {
    s: function () {
        return s;
    },
    u: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    id: '2024-11_nitro_basic_upsell',
    label: 'Nitro Basic Upsell',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.PAYMENT_FLOW_STARTED,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    return o.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }).enabled;
}
