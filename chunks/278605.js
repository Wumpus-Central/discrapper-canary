t.d(s, {
    ah: function () {
        return r;
    },
    xP: function () {
        return i;
    }
});
var n = t(818083),
    a = t(987338);
let r = (0, n.B)({
    kind: 'user',
    id: '2024-11_marketing_page_v2_experiment',
    label: 'Marketing Page V2 Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User see current marketing page',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'users see new marketing page',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { enabled: s } = r.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return s;
}
