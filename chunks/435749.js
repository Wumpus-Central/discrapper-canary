n.d(t, { A: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-03_clickstream_analytics',
    label: 'Clickstream Analytics',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Clickstream Analytics',
            config: { enabled: !0 }
        }
    ]
});
function r() {
    let { enabled: e } = i.getCurrentConfig({ location: 'clickstream' });
    return e;
}
