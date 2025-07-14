n.d(t, {
    BW: () => a,
    U2: () => o,
    pn: () => s
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-05_sensitive_content_gore',
    label: 'Sensitive content filters for gore',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enables the experiment',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
function s(e) {
    let { enabled: t } = a.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
