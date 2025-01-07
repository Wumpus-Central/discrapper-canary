t.d(e, {
    ah: function () {
        return c;
    },
    xP: function () {
        return i;
    }
});
var n = t(818083),
    r = t(987338);
let c = (0, n.B)({
    kind: 'user',
    id: '2024-11_marketing_page_v2_experiment',
    label: 'Marketing Page V2 Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
function i(s) {
    let { enabled: e } = c.useExperiment({ location: s }, { autoTrackExposure: !1 });
    return e;
}
