n.d(t, {
    S: () => i,
    Z: () => o
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-06_frecency_list_split',
    label: 'Frecency List Split',
    defaultConfig: { canSplitFrecencyList: !1 },
    treatments: [
        {
            id: 1,
            label: 'Split frecency emoji messages from reactions',
            config: { canSplitFrecencyList: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n } = e,
        { canSplitFrecencyList: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return { canSplitFrecencyList: i };
}
let o = r;
