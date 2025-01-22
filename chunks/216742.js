r.d(n, {
    I: function () {
        return s;
    },
    g: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-10_rapidash_discovery_plus',
    label: 'Rapidash Discovery Plus',
    defaultConfig: {
        enabled: !1,
        treatment: 'control'
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Discovery Plus Enabled',
            config: {
                enabled: !0,
                treatment: 'discovery-plus'
            }
        }
    ]
});
function s() {
    return o.useExperiment({ location: 'RapidashDiscoveryPlusExperiment' }, { autoTrackExposure: !1 });
}
