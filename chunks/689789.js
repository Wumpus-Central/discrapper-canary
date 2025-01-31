n.d(t, {
    S: () => r,
    Z: () => a
});
let i = (0, n(818083).B)({
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
function r(e) {
    let { location: t, autoTrackExposure: n } = e,
        { canSplitFrecencyList: r } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return { canSplitFrecencyList: r };
}
let a = i;
