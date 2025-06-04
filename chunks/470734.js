n.d(t, {
    U2: () => i,
    pn: () => o
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_sensitive_content_gore',
    label: 'Sensitive content filters for gore',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables the experiment',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { enabled: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
function o(e) {
    let { enabled: t } = r.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
