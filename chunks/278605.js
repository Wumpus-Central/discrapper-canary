n.d(t, {
    ah: function () {
        return r;
    },
    xP: function () {
        return o;
    }
});
var s = n(818083),
    i = n(987338);
let r = (0, s.B)({
    kind: 'user',
    id: '2024-11_marketing_page_v2_experiment',
    label: 'Marketing Page V2 Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
function o(e) {
    let { enabled: t } = r.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t;
}
