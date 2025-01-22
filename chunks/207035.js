t.d(e, {
    P: function () {
        return u;
    }
});
let i = (0, t(818083).B)({
    kind: 'user',
    id: '2023-08-30_open-in-popout',
    label: 'Open Channel in Popout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function u(n) {
    return i.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
}
